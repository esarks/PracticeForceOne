---
title: "AllPhases"
---

# JAC Build System: allphases.bat Documentation

**Document Version:** 1.1
**Date:** 2025-10-20 (Build System Fully Operational)
**JAC Version:** JAC2024a v20241111a
**File Location:** `jac2024\jacBuild24\bin\allphases.bat`
**Build Status:** PASS **FULLY OPERATIONAL** - All errors resolved

---

## PASS Current Build Status (October 20, 2025)

**Last Successful Build:** October 20, 2025 at 22:47:59 EDT

**Build Results:**
- PASS **Phase 1 Compilation:** Clean (55 Java files, 191 KB jac.jar)
- PASS **Phase 2 Compilation:** Clean (37 script files, 199 KB mic.jar)
- PASS **Total Build Time:** ~25 seconds
- PASS **Errors:** 0
- WARNING **Warnings:** Minor deprecation warnings (suppressed with @SuppressWarnings)

**Recent Fixes (October 20, 2025):**
1. **Jakarta Servlet Migration** - Changed `javax.servlet` to `jakarta.servlet` in `micImportView.script`
2. **Deprecation Warnings** - Added `@SuppressWarnings("removal")` to 6 finalize() methods:
   - `PreservedItem.java:129`
   - `ScriptWriter.java:165`
   - `XmlPersist.java:121`
   - `ControlValue.java:118`
   - `Control.java:129`
   - `Frame.java:124`

**Build Output:**
```
Phase 1: 55 Java files â†’ jac.jar (191 KB)
Phase 2: 37 script files â†’ mic.jar (199 KB)
Total: 92 files compiled successfully
JARs copied to distribution: jac2024/lib/jac/ and jac2024/lib/mic/
```

---

## Overview

`allphases.bat` is the **master build script** for the JAC (Java Architects Companion) compiler system. It orchestrates a complete rebuild of the JAC platform from source code, producing two critical JAR files (`jac.jar` and `mic.jar`) that form the core runtime of the JAC system.

### Purpose

This script performs a **clean, two-phase compilation** of the entire JAC codebase:
1. **Phase 1:** Compiles core JAC compiler and runtime classes using standard Java compiler
2. **Phase 2:** Uses the newly compiled JAC compiler to compile JAC scripts into additional runtime classes
3. **Final Step:** Packages everything into JAR files and copies them to distribution locations

### When to Use

Run `allphases.bat` when:
- Setting up JAC for the first time
- After modifying JAC core source code
- After updating Java compiler or dependencies
- When build artifacts become corrupted
- Before releasing a new JAC version

**Warning:** This is a **destructive operation** that deletes all existing compiled classes.

---

## Table of Contents

1. [Script Execution Flow](#script-execution-flow)
2. [Detailed Phase Breakdown](#detailed-phase-breakdown)
3. [Environment Configuration](#environment-configuration)
4. [Directory Structure](#directory-structure)
5. [Build Artifacts](#build-artifacts)
6. [Dependencies](#dependencies)
7. [Troubleshooting](#troubleshooting)
8. [Performance Characteristics](#performance-characteristics)

---

## Script Execution Flow

### High-Level Flow Diagram

```
allphases.bat
    â”‚
    â”œâ”€â–º Set2Job.bat           (Configure environment variables)
    â”‚
    â”œâ”€â–º Clean Directories     (Delete old build artifacts)
    â”‚   â”œâ”€ rmdir classes
    â”‚   â”œâ”€ rmdir lib/mic
    â”‚   â”œâ”€ rmdir phase1Classes
    â”‚   â”œâ”€ rmdir phase2Classes
    â”‚   â””â”€ rmdir lib/jac
    â”‚
    â”œâ”€â–º Recreate Directories  (Create fresh build directories)
    â”‚
    â”œâ”€â–º phase1.bat           (Bootstrap compilation)
    â”‚   â”œâ”€ javac â†’ phase1Classes
    â”‚   â””â”€ jar â†’ lib/jac/jac.jar
    â”‚
    â”œâ”€â–º phase2.bat           (JAC self-compilation)
    â”‚   â”œâ”€ JAC compiles scripts
    â”‚   â”œâ”€ Copy to phase2Classes
    â”‚   â””â”€ jar â†’ lib/mic/mic.jar
    â”‚
    â””â”€â–º copyJars.bat         (Deploy to distribution)
        â”œâ”€ Copy jac.jar
        â””â”€ Copy mic.jar
```

### Execution Sequence

```batch
1. echo on                                    # Enable command echoing
2. echo JAC2024a v20241111a allphases.bat    # Display version
3. call Set2Job                              # Configure environment
4. rmdir/q/s %JAC_BUILD%\classes             # Clean output directory
5. mkdir %JAC_BUILD%\classes                 # Recreate output directory
6. rmdir/q/s %JAC_BUILD%\lib\mic             # Clean MIC library
7. mkdir %JAC_BUILD%\lib\mic                 # Recreate MIC library
8. rmdir/q/s %JAC_BUILD%\phase1Classes       # Clean Phase 1 output
9. mkdir %JAC_BUILD%\phase1Classes           # Recreate Phase 1 output
10. rmdir/q/s %JAC_BUILD%\phase2Classes      # Clean Phase 2 output
11. mkdir %JAC_BUILD%\phase2Classes          # Recreate Phase 2 output
12. rmdir/q/s %JAC_BUILD%\lib\jac            # Clean JAC library
13. mkdir %JAC_BUILD%\lib\jac                # Recreate JAC library
14. cd %JAC_BUILD%\bin                       # Change to bin directory
15. call phase1                              # Execute Phase 1 compilation
16. call phase2                              # Execute Phase 2 compilation
17. call copyJars                            # Copy JARs to distribution
18. pause END                                # Wait for user confirmation
```

---

## Detailed Phase Breakdown

### Phase 0: Environment Setup (Set2Job.bat)

**Purpose:** Configures environment variables and classpath for the build process

**Key Variables Set:**

| Variable | Value | Purpose |
|----------|-------|---------|
| `ArchitectsCompanion` | `C:\Users\ptm\OneDrive\GitHub\ArchitectsCompanion` | Root project directory |
| `JAC_VERSION` | `%ArchitectsCompanion%\jac2024\jacBuild24` | Current JAC build location |
| `JAVA_HOME` | `%JAC_VERSION%\jdk-24` | Bundled JDK 24 location |
| `JAC_BUILD` | `%JAC_VERSION%` | Build directory (same as JAC_VERSION) |
| `JAC_WORK` | `%JAC_VERSION%\classes` | Working directory for compiled classes |
| `JAC_SCRIPTS` | `%JAC_BUILD%\source\scripts` | JAC script source files |
| `JAC_JARS` | `%ArchitectsCompanion%\jac2024` | Distribution JAR location |

**Classpath Configuration:**

The script builds a comprehensive classpath including:

1. **JAC Core:**
   - `%JAC_WORK%` (compiled classes)
   - `%JAC_BUILD%\lib\jac\jac.jar` (JAC compiler)
   - `%JAC_BUILD%\lib\mic\mic.jar` (MIC runtime)

2. **Third-Party Libraries:**
   - **O'Reilly COS** (`lib\oreilly\cos.jar`) - Servlet utilities
   - **Eclipse Jetty 12.1.2** (Jakarta EE 10):
     - `lib\jetty\jetty-server-12.1.2.jar` - HTTP server
     - `lib\jetty\jetty-http-12.1.2.jar` - HTTP protocol
     - `lib\jetty\jetty-io-12.1.2.jar` - I/O utilities
     - `lib\jetty\jetty-util-12.1.2.jar` - Utilities
     - `lib\jetty\jetty-session-12.1.2.jar` - Session management
     - `lib\jetty\jetty-ee10-servlet-12.1.2.jar` - Servlet handler
     - `lib\jetty\jetty-security-12.1.2.jar` - Security
     - `lib\jetty\jetty-jmx-12.1.2.jar` - JMX management
   - **Jakarta Servlet API 6.0** (`lib\jetty\jakarta.servlet-api-6.0.0.jar`) - Servlet specification
   - **Jakarta JSP API 4.0** (`lib\jetty\jakarta.servlet.jsp-api-4.0.0.jar`) - JSP support
   - **SLF4J 2.0.16** (`lib\jetty\slf4j-api-2.0.16.jar`, `slf4j-simple-2.0.16.jar`) - Logging

3. **Java Tools:**
   - `%JAVA_HOME%\lib\tools.jar` - Java compiler API

4. **Database Drivers:**
   - **MS SQL Server** (`lib\mssqlserver\*.jar`) - SQL Server JDBC driver

5. **XML Parsers:**
   - **Crimson** (`lib\crimson\crimson.jar`) - XML parsing library

**Output:**
- Writes complete classpath to `classpath.txt` for inspection

---

### Phase 1: Bootstrap Compilation

**Purpose:** Compile JAC core classes using standard Java compiler

**Script:** `phase1.bat`

#### Phase 1 Flow

```
Source Files (phase1List.txt)
    â”‚
    â†“ javac -d phase1Classes
    â”‚
Compiled Classes
    â”‚
    â†“ jar cf jac.jar
    â”‚
lib/jac/jac.jar (Bootstrap JAC)
```

#### Compilation Command

```batch
"%JAVA_HOME%\bin\javac" -d %JAC_BUILD%\phase1Classes -g -sourcepath %JAC_BUILD%\source\java @%JAC_BUILD%\bin\phase1List.txt
```

**Flags:**
- `-d %JAC_BUILD%\phase1Classes` - Output directory for compiled classes
- `-g` - Generate all debugging information (line numbers, local variables, source file)
- `-sourcepath %JAC_BUILD%\source\java` - Root directory for source files
- `@phase1List.txt` - Read list of source files from file

#### Source Files Compiled (51 files)

**Core JAC Compiler Classes (com.esarks.jac):**

| File | Lines | Purpose |
|------|-------|---------|
| `jac.java` | ~300 | Command-line interface, main entry point |
| `Script.java` | 1,612 | Core compilation engine |
| `ScriptWriter.java` | 300+ | Line-by-line parser, state machine |
| `ParseXml.java` | 500+ | SAX-based XML parser |
| `ParseXmlSchema.java` | 400+ | XML schema validation |
| `Log.java` | 578 | Production logging system |
| `OutputManager.java` | 150+ | Multi-channel output management |
| `Merge.java` | 200+ | Code preservation during regeneration |
| `SymbolTable.java` | 300+ | Property and symbol management |
| `PropertyCollection.java` | 200+ | Property container |
| `AcClassLoader.java` | 150+ | Dynamic class loading |
| `DbConnection.java` | 250+ | Database connectivity |
| `DbConnectionFactory.java` | 100+ | Connection pooling |
| `DbResults.java` | 200+ | Result set handling |
| `Jeo.java` | 150+ | Java Execution Object |
| `JeoFactory.java` | 100+ | JEO creation and management |

**MIC Framework Classes (com.esarks.mic):**

| File | Purpose |
|------|---------|
| `Component.java` | Base UI component |
| `Control.java` | UI control abstraction |
| `Frame.java` | Window/frame management |
| `View.java` | View layer |
| `Model.java` | Data model layer |
| `Service.java` | Service layer |
| `Report.java` | Report generation |
| `Entity.java` | Entity management |
| `Package.java` | Package management |
| `MicJeo.java` | MIC Java Execution Object |
| `MicScriptHelper.java` | MIC script utilities |
| `SecurityManager.java` | Security management |

**UI Controls (com.esarks.mic):**
- `TextControl.java`, `ButtonValue.java`, `ColumnValue.java`, `DateValue.java`
- `OptionControl.java`, `MultiRowControl.java`, `SubmitControl.java`

#### JAR Packaging

```batch
"%JAVA_HOME%\bin\jar" cf %JAC_BUILD%\lib\jac\jac.jar -C "%JAC_BUILD%\phase1Classes" .
```

**Output:** `lib/jac/jac.jar` (~580KB)

**Contents:**
- All compiled classes from Phase 1
- Package structure: `com/esarks/jac/`, `com/esarks/mic/`

**Purpose:** This JAR contains the **bootstrap JAC compiler** used in Phase 2

---

### Phase 2: JAC Self-Compilation

**Purpose:** Use the newly compiled JAC compiler to compile JAC scripts into runtime classes

**Script:** `phase2.bat`

#### Phase 2 Flow

```
phase1 jac.jar (Bootstrap Compiler)
    â”‚
    â†“ Execute "Job" command
    â”‚
Compile JAC Script Templates
    â”‚
    â”œâ”€ ExitMethod.script
    â”œâ”€ FinalReturnMethod.script
    â”œâ”€ GetEffectiveDate.script
    â”œâ”€ IterateReplyJeo.script
    â”œâ”€ Method.script
    â”œâ”€ ReturnMethod.script
    â”œâ”€ Service.script
    â”œâ”€ Job.script
    â””â”€ Jrun.script
    â”‚
    â†“ Generate Java Classes
    â”‚
classes/*.class
    â”‚
    â†“ xcopy to phase2Classes
    â”‚
    â†“ jar cf mic.jar
    â”‚
lib/mic/mic.jar (JAC Runtime)
```

#### JAC Script Compilation Commands

Phase 2 executes a series of `Job` commands to compile JAC script templates:

```batch
call Job jac com.esarks.arm.scripts.ExitMethod         ! jac
call Job jac com.esarks.arm.scripts.FinalReturnMethod  ! jac
call Job jac com.esarks.arm.scripts.GetEffectiveDate   ! jac
call Job jac com.esarks.arm.scripts.IterateReplyJeo    ! jac
call Job jac com.esarks.arm.scripts.Method             ! jac
call Job jac com.esarks.arm.scripts.ReturnMethod       ! jac
call Job jac com.esarks.arm.scripts.Service            ! jac
call Job jac com.esarks.jac.jrun.Job                   ! micScriptComponent
call Job jac com.esarks.jac.jrun.Jrun                  ! micScriptComponent
```

**Job Command Format:**
```
call Job <compiler> <fully.qualified.ClassName> ! <template>
```

**What Each Script Does:**

| Script | Purpose |
|--------|---------|
| `ExitMethod` | Generates code for method exit points |
| `FinalReturnMethod` | Generates final return statements |
| `GetEffectiveDate` | Date handling utilities |
| `IterateReplyJeo` | Iteration and response generation |
| `Method` | Generic method generation template |
| `ReturnMethod` | Method return statement generation |
| `Service` | Service layer generation |
| `Job` | JAC job execution framework |
| `Jrun` | JAC runtime execution engine |

#### MakeJac Script Execution

```batch
call Job com.esarks.jac.jrun.Jrun execute "%JAC_BUILD%\source\scripts\com\esarks\jac\make\MakeJac_force.jrun2"
```

**Purpose:** Runs `MakeJac_force.jrun2` script to generate additional JAC runtime classes

**What MakeJac Does:**
- Reads JAC script definitions
- Generates Java source files
- Compiles generated sources
- Populates `classes/` directory

#### Copy Compiled Classes

```batch
xcopy %JAC_BUILD%\classes\*.class %JAC_BUILD%\phase2Classes /s
```

**Purpose:** Copy all compiled classes (including Phase 1 + generated classes) to Phase 2 output

**Flags:**
- `/s` - Copy subdirectories (preserves package structure)

#### JAR Packaging

```batch
"%JAVA_HOME%\bin\jar" cf %JAC_BUILD%\lib\mic\mic.jar -C "%JAC_BUILD%\phase2Classes" .
```

**Output:** `lib/mic/mic.jar` (~200KB)

**Contents:**
- All compiled classes from Phase 2
- Generated script component classes
- JAC runtime execution classes

**Purpose:** This JAR contains the **JAC runtime libraries** for executing scripts

---

### Phase 3: Distribution

**Purpose:** Copy compiled JAR files to distribution location

**Script:** `copyJars.bat`

```batch
copy %JAC_BUILD%\lib\jac\jac.jar %JAC_JARS%\lib\jac
copy %JAC_BUILD%\lib\mic\mic.jar %JAC_JARS%\lib\mic
```

**Source:**
- `jacBuild24\lib\jac\jac.jar`
- `jacBuild24\lib\mic\mic.jar`

**Destination:**
- `jac2024\lib\jac\jac.jar` (distribution location)
- `jac2024\lib\mic\mic.jar` (distribution location)

**Purpose:** Make the compiled JARs available to other JAC projects and applications

---

## Environment Configuration

### Required Environment Variables

| Variable | Example Value | Required By |
|----------|---------------|-------------|
| `JAVA_HOME` | `C:\...\jacBuild24\jdk-24` | javac, jar commands |
| `JAC_BUILD` | `C:\...\jacBuild24` | All scripts |
| `JAC_WORK` | `C:\...\jacBuild24\classes` | Compilation output |
| `JAC_SCRIPTS` | `C:\...\source\scripts` | Script source location |
| `JAC_JARS` | `C:\...\jac2024` | Distribution location |
| `CLASSPATH` | (see Set2Job.bat) | Java compiler and runtime |

### Directory Requirements

**Must Exist Before Running:**
- `%JAC_BUILD%\source\java\` (Java source files)
- `%JAC_BUILD%\source\scripts\` (JAC script files)
- `%JAC_BUILD%\bin\` (Build scripts)
- `%JAC_BUILD%\lib\` (Third-party libraries)
- `%JAVA_HOME%\bin\` (Java compiler and tools)

**Created by Script:**
- `%JAC_BUILD%\classes\` (Working directory)
- `%JAC_BUILD%\phase1Classes\` (Phase 1 output)
- `%JAC_BUILD%\phase2Classes\` (Phase 2 output)
- `%JAC_BUILD%\lib\jac\` (JAC JAR output)
- `%JAC_BUILD%\lib\mic\` (MIC JAR output)

---

## Directory Structure

### Before Execution

```
jacBuild24/
â”œâ”€â”€ bin/
â”‚   â”œâ”€â”€ allphases.bat         â† Main build script
â”‚   â”œâ”€â”€ Set2Job.bat           â† Environment configuration
â”‚   â”œâ”€â”€ phase1.bat            â† Phase 1 compilation
â”‚   â”œâ”€â”€ phase2.bat            â† Phase 2 compilation
â”‚   â”œâ”€â”€ copyJars.bat          â† Distribution copy
â”‚   â”œâ”€â”€ phase1List.txt        â† Source file list
â”‚   â””â”€â”€ Job.bat               â† JAC compiler launcher
â”œâ”€â”€ source/
â”‚   â”œâ”€â”€ java/
â”‚   â”‚   â””â”€â”€ com/esarks/
â”‚   â”‚       â”œâ”€â”€ jac/          â† JAC compiler sources (26 files)
â”‚   â”‚       â””â”€â”€ mic/          â† MIC framework sources (25 files)
â”‚   â””â”€â”€ scripts/
â”‚       â””â”€â”€ com/esarks/
â”‚           â”œâ”€â”€ arm/scripts/  â† JAC script templates
â”‚           â””â”€â”€ jac/make/     â† Build scripts
â”œâ”€â”€ lib/
â”‚   â”œâ”€â”€ jetty/                â† Jetty web server JARs
â”‚   â”œâ”€â”€ mssqlserver/          â† SQL Server JDBC driver
â”‚   â”œâ”€â”€ crimson/              â† XML parser
â”‚   â””â”€â”€ oreilly/              â† Servlet utilities
â””â”€â”€ jdk-24/                   â† Bundled Java Development Kit
```

### After Execution (New Directories)

```
jacBuild24/
â”œâ”€â”€ classes/                  â† Working directory (generated classes)
â”œâ”€â”€ phase1Classes/            â† Phase 1 compiled classes
â”œâ”€â”€ phase2Classes/            â† Phase 2 compiled classes
â””â”€â”€ lib/
    â”œâ”€â”€ jac/
    â”‚   â””â”€â”€ jac.jar          â† JAC compiler JAR (580KB)
    â””â”€â”€ mic/
        â””â”€â”€ mic.jar          â† JAC runtime JAR (200KB)
```

---

## Build Artifacts

### Primary Outputs

| File | Size | Contents | Purpose |
|------|------|----------|---------|
| `lib/jac/jac.jar` | ~580KB | JAC compiler + MIC framework classes | Bootstrap compiler for Phase 2 |
| `lib/mic/mic.jar` | ~200KB | Generated script components + runtime | JAC script execution runtime |

### Intermediate Artifacts

| Directory | Contents | Lifetime |
|-----------|----------|----------|
| `phase1Classes/` | Compiled Java classes from source | Deleted on next run |
| `phase2Classes/` | All classes (Phase 1 + generated) | Deleted on next run |
| `classes/` | Generated classes from JAC scripts | Deleted on next run |

### Distribution Copies

| File | Location | Purpose |
|------|----------|---------|
| `jac.jar` | `jac2024\lib\jac\` | Distribution copy for applications |
| `mic.jar` | `jac2024\lib\mic\` | Distribution copy for applications |

---

## Dependencies

### Java Version

**Required:** Java Development Kit 24 (JDK 24)

**Location:** `%JAC_VERSION%\jdk-24`

**Why JDK 24PENDING**
- Latest Java language features
- Performance improvements
- Modern garbage collector
- Enhanced compiler optimizations

**Fallback Compatibility:** JAC can compile/run on JDK 11, 17, 21 (modify `JAVA_HOME` in Set2Job.bat)

### Third-Party Libraries

**Web Server:**
- Jetty 6.x (org.mortbay.jetty.jar, org.mortbay.jxm.jar)
- Servlet API 2.5 (javax.servlet.jar)

**Database:**
- MS SQL Server JDBC Driver (msbase.jar, mssqlserver.jar, msutil.jar)

**XML Processing:**
- Crimson XML Parser (crimson.jar)

**Utilities:**
- O'Reilly COS (cos.jar) - HTTP file upload handling

### Source Code Requirements

**Phase 1 Compilation:**
- 51 Java source files (26 JAC core + 25 MIC framework)
- Clean compile with no errors

**Phase 2 Compilation:**
- 9 JAC script templates (arm.scripts package)
- 2 JAC runtime scripts (jac.jrun package)
- MakeJac_force.jrun2 build script

---

## Troubleshooting

### Common Errors

#### Error: "JAVA_HOME is not defined"

**Cause:** Set2Job.bat not executed or `JAVA_HOME` variable incorrect

**Solution:**
```batch
set JAVA_HOME=C:\Users\ptm\OneDrive\GitHub\ArchitectsCompanion\jac2024\jacBuild24\jdk-24
```

#### Error: "javac is not recognized"

**Cause:** JDK not installed or incorrect path

**Solution:**
- Verify `%JAVA_HOME%\bin\javac.exe` exists
- Check `JAVA_HOME` path in Set2Job.bat
- Ensure JDK 24 is installed

#### Error: "Cannot find phase1List.txt"

**Cause:** Executing from wrong directory

**Solution:**
```batch
cd C:\Users\ptm\OneDrive\GitHub\ArchitectsCompanion\jac2024\jacBuild24\bin
allphases.bat
```

#### Error: "Class not found: com.esarks.jac.Script"

**Cause:** Phase 1 compilation failed or `jac.jar` not in classpath

**Solution:**
1. Check Phase 1 output for compilation errors
2. Verify `lib\jac\jac.jar` was created
3. Re-run `allphases.bat` for clean build

#### Error: "Access denied" during rmdir

**Cause:** Files locked by running Java processes

**Solution:**
1. Close all JAC applications
2. Kill any running `java.exe` processes:
   ```batch
   taskkill /F /IM java.exe
   ```
3. Re-run `allphases.bat`

#### Warning: "Tool.jar not found"

**Cause:** Using JRE instead of JDK

**Solution:**
- Ensure `JAVA_HOME` points to JDK (not JRE)
- Verify `%JAVA_HOME%\lib\tools.jar` exists

### Verification Steps

**After Successful Build:**

1. **Check JAR Files Created:**
   ```batch
   dir %JAC_BUILD%\lib\jac\jac.jar
   dir %JAC_BUILD%\lib\mic\mic.jar
   ```
   Expected: Both files exist, ~580KB and ~200KB respectively

2. **Verify JAR Contents:**
   ```batch
   "%JAVA_HOME%\bin\jar" tf %JAC_BUILD%\lib\jac\jac.jar | findstr "Script.class"
   ```
   Expected: `com/esarks/jac/Script.class` listed

3. **Test JAC Compiler:**
   ```batch
   java -cp %JAC_BUILD%\lib\jac\jac.jar com.esarks.jac.jac
   ```
   Expected: JAC usage message displayed

4. **Check Distribution Copy:**
   ```batch
   dir %JAC_JARS%\lib\jac\jac.jar
   dir %JAC_JARS%\lib\mic\mic.jar
   ```
   Expected: Both files exist in distribution location

### Clean Build (Nuclear Option)

If build is completely broken:

```batch
cd %JAC_BUILD%
rmdir /q /s classes
rmdir /q /s phase1Classes
rmdir /q /s phase2Classes
rmdir /q /s lib\jac
rmdir /q /s lib\mic
cd bin
allphases.bat
```

---

## Performance Characteristics

### Build Time Benchmarks

**Typical Build Times (2024-era laptop):**

| Phase | Duration | Activity |
|-------|----------|----------|
| **Environment Setup** | <1 second | Variable configuration |
| **Directory Cleanup** | 1-2 seconds | Delete/recreate directories |
| **Phase 1 Compilation** | 5-10 seconds | Compile 51 Java files |
| **Phase 1 JAR Packaging** | 1-2 seconds | Create jac.jar |
| **Phase 2 Script Compilation** | 10-20 seconds | Compile 9 JAC scripts |
| **Phase 2 JAR Packaging** | 1-2 seconds | Create mic.jar |
| **Distribution Copy** | <1 second | Copy JARs |
| **Total Build Time** | **20-35 seconds** | Full clean build |

**Factors Affecting Build Time:**
- CPU speed (single-threaded javac)
- Disk I/O speed (SSD vs. HDD)
- Antivirus scanning (can add 10-30 seconds)
- First run vs. subsequent runs (OS file cache)

### Optimization Opportunities

**Current Build:**
- Single-threaded compilation
- No incremental compilation
- No build caching

**JAC-NEWGEN Improvements (Phase 1 Roadmap):**
- Parallel compilation (multi-core utilization)
- Incremental compilation (only changed files)
- Build cache (avoid recompilation)
- Target: **<5 seconds** for typical changes

---

## Comparison to Modern Build Systems

### allphases.bat vs. Maven/Gradle

| Feature | allphases.bat | Maven | Gradle |
|---------|---------------|-------|--------|
| **Dependency Management** | Manual (lib/ directory) | Automatic (repositories) | Automatic (repositories) |
| **Incremental Builds** | No (always clean) | Yes | Yes (better than Maven) |
| **Build Cache** | No | Yes (local) | Yes (local + remote) |
| **Parallel Compilation** | No | Yes (with plugin) | Yes (native) |
| **Plugin Ecosystem** | No | Extensive | Extensive |
| **Configuration** | Batch script | XML (pom.xml) | Groovy/Kotlin DSL |
| **Learning Curve** | Low | Medium-High | Medium-High |
| **Build Speed** | 20-35 seconds | 30-60 seconds | 20-40 seconds |
| **Complexity** | Very Low | Medium | Medium |

**Why allphases.bat Works for JAC:**
- Simple, transparent build process (no magic)
- No external tool dependencies (pure Java + batch)
- Full control over compilation (essential for bootstrap)
- Familiar to developers (easy to debug)
- Fast enough for JAC's size (~50K lines)

**JAC-NEWGEN Recommendation:**
- Keep `allphases.bat` for bootstrap builds
- Add Gradle for application development (Phase 2 roadmap)
- Use JIT compilation for development (zero build step)

---

## JAC-NEWGEN Modernization

### Current State Assessment

**Strengths:**
- PASS Simple, transparent build process
- PASS Bootstrap compilation works reliably
- PASS Two-phase design separates concerns
- PASS Fast enough (20-35 seconds)

**Weaknesses:**
- FAIL Always clean build (no incremental)
- FAIL Single-threaded compilation
- FAIL Manual dependency management
- FAIL Windows batch script (not cross-platform)
- FAIL No IDE integration

### Roadmap Integration

**Phase 1: Foundation (Months 1-3)**
- Modernize build system
- Add Gradle build configuration
- Implement incremental compilation
- Cross-platform build scripts (Gradle wrapper)

**Phase 2: Developer Experience (Months 4-6)**
- IDE integration (IntelliJ, Eclipse, VS Code)
- Auto-import into IDE projects
- One-click build from IDE
- Build from Web IDE

**Phase 3: 4GL Features (Months 7-9)**
- JAC-QL compilation integrated into build
- Schema validation during build
- Visual programming build targets

**Phase 4: Production Ready (Months 10-12)**
- Docker multi-stage builds
- CI/CD pipeline (GitHub Actions)
- Automated testing during build
- Release artifact generation

### Proposed Build Modernization

**Gradle Build Configuration (build.gradle):**

```groovy
plugins {
    id 'java'
    id 'application'
}

group = 'com.esarks.jac'
version = '2024.11.0'

sourceCompatibility = '21'
targetCompatibility = '21'

repositories {
    mavenCentral()
}

dependencies {
    // Web server
    implementation 'org.eclipse.jetty:jetty-server:11.0.18'
    implementation 'org.eclipse.jetty:jetty-servlet:11.0.18'

    // Database
    implementation 'com.microsoft.sqlserver:mssql-jdbc:12.4.0'
    implementation 'org.postgresql:postgresql:42.7.0'

    // XML processing
    implementation 'xerces:xercesImpl:2.12.2'

    // Logging
    implementation 'org.slf4j:slf4j-api:2.0.9'
    implementation 'ch.qos.logback:logback-classic:1.4.11'

    // Testing
    testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
}

// Phase 1: Compile JAC core
task compilePhase1(type: JavaCompile) {
    source = fileTree('source/java')
    include 'com/esarks/jac/**'
    include 'com/esarks/mic/**'
    destinationDirectory = file('build/phase1Classes')
    classpath = configurations.compileClasspath
    options.debugOptions.debugLevel = 'source,lines,vars'
}

// Phase 1 JAR
task phase1Jar(type: Jar, dependsOn: compilePhase1) {
    archiveBaseName = 'jac'
    destinationDirectory = file('lib/jac')
    from('build/phase1Classes')
}

// Phase 2: Compile JAC scripts
task compilePhase2(type: JavaExec, dependsOn: phase1Jar) {
    classpath = files('lib/jac/jac.jar') + configurations.runtimeClasspath
    mainClass = 'com.esarks.jac.jac'
    args = ['com.esarks.arm.scripts.Method']
}

// Phase 2 JAR
task phase2Jar(type: Jar, dependsOn: compilePhase2) {
    archiveBaseName = 'mic'
    destinationDirectory = file('lib/mic')
    from('build/classes')
}

// All phases
task allPhases(dependsOn: [phase1Jar, phase2Jar]) {
    group = 'build'
    description = 'Complete JAC build (equivalent to allphases.bat)'
}

application {
    mainClass = 'com.esarks.jac.jac'
}
```

**Benefits of Gradle Migration:**
- Cross-platform (Windows, macOS, Linux)
- Incremental compilation (only changed files)
- Dependency management (automatic downloads)
- IDE integration (IntelliJ, Eclipse, VS Code)
- Parallel compilation (multi-core)
- Build cache (faster repeated builds)
- Modern Java toolchain support

---

## Related Documentation

- **[CLAUDE.md](CLAUDE.html)** - JAC architecture overview
- **[NEWGEN.md](NEWGEN.html)** - JAC-NEWGEN modernization vision
- **[Roadmap.md](Roadmap.html)** - Phase 1: Build system modernization

---

## Conclusion

`allphases.bat` is the **heart of the JAC build system**, orchestrating a clean, two-phase compilation that transforms Java source code and JAC scripts into the core runtime JARs (`jac.jar` and `mic.jar`).

**Key Takeaways:**

1. **Two-Phase Design:**
   - Phase 1: Bootstrap compiler compilation
   - Phase 2: Self-compilation using bootstrap

2. **Clean Build Philosophy:**
   - Always starts fresh (deletes old artifacts)
   - Ensures reproducible builds
   - No incremental compilation (yet)

3. **Simple & Transparent:**
   - Pure batch script (no build tool complexity)
   - Easy to debug and understand
   - Full control over compilation process

4. **Modernization Needed:**
   - JAC-NEWGEN roadmap addresses limitations
   - Gradle migration for cross-platform support
   - Incremental builds for faster development

5. **Production-Ready:**
   - Proven over 20+ years
   - Reliable bootstrap process
   - Foundation for JAC-NEWGEN evolution

**For JAC-NEWGEN development**, this build system provides a solid foundation but requires modernization for optimal developer experience. Phase 1 of the roadmap addresses these needs while preserving the proven bootstrap compilation approach.

---

**Document Version:** 1.0
**Author:** JAC Documentation Team
**Last Updated:** 2025-01-19
**Status:** Complete
