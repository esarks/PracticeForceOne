---
title: "jac2020jrun"
---

# JAC2020 Jrun System - Complete Technical Documentation

**Version:** 1.0
**Date:** 2025-10-20
**JAC Version:** JAC2020 v20191013a
**Status:** Production-Tested, Working Implementation

---

## Executive Summary

The JAC2020 Jrun system is a **double-click executable runtime** that allows `.jrun` XML configuration files to automatically compile and execute JAC scripts with full environment setup. It works flawlessly in JAC2020 and serves as the reference implementation for fixing the JAC2024 version.

**Key Features:**
- PASS Double-click `.jrun` files to execute
- PASS Automatic environment configuration
- PASS Dynamic compilation (JIT)
- PASS Database connection pooling
- PASS Property management system
- PASS Classpath customization per script
- PASS Debug and profiling modes

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Complete Execution Flow](#complete-execution-flow)
3. [File Structure](#file-structure)
4. [Batch File Chain](#batch-file-chain)
5. [Java Classes](#java-classes)
6. [XML Format (.jrun files)](#xml-format-jrun-files)
7. [Environment Variables](#environment-variables)
8. [Database Connection Setup](#database-connection-setup)
9. [Examples](#examples)
10. [Comparison: JAC2020 vs JAC2024](#comparison-jac2020-vs-jac2024)
11. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

### High-Level Architecture

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                 JAC2020 JRUN ARCHITECTURE                  â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                             â”‚
â”‚  .jrun File (XML)                                          â”‚
â”‚         â†“                                                   â”‚
â”‚  Windows File Association â†’ JrunDirect.bat                 â”‚
â”‚         â†“                                                   â”‚
â”‚  Environment Setup (jrun/bin/Set*.bat files)               â”‚
â”‚         â†“                                                   â”‚
â”‚  Jrun.bat â†’ Job.bat                                        â”‚
â”‚         â†“                                                   â”‚
â”‚  SetJob.bat (Classpath configuration)                      â”‚
â”‚         â†“                                                   â”‚
â”‚  Java VM Launch                                            â”‚
â”‚         â†“                                                   â”‚
â”‚  com.esarks.jac.jac (JAC Compiler)                        â”‚
â”‚         â†“                                                   â”‚
â”‚  com.esarks.jac.jrun.Job (Wrapper)                        â”‚
â”‚         â†“                                                   â”‚
â”‚  com.esarks.jac.jrun.Jrun (XML Parser & Executor)         â”‚
â”‚         â†“                                                   â”‚
â”‚  Target Script Execution (paul.HelloWorld, etc.)           â”‚
â”‚                                                             â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Design Philosophy

1. **Layered Bootstrapping**: Each batch file sets up one layer of configuration
2. **Environment Isolation**: Jrun environment separate from build environment
3. **XML-Driven**: .jrun files describe what to execute, not how
4. **Just-In-Time Compilation**: Scripts compile automatically if stale
5. **Database Abstraction**: Connections configured in XML, managed by framework

---

## Complete Execution Flow

### Step-by-Step Execution (Example: HelloWorld.jrun)

```
START: User double-clicks HelloWorld.jrun
  â†“
STEP 1: Windows File Association
  Location: Registry (HKEY_CLASSES_ROOT\.jrun)
  Action: Launches JrunDirect.bat with HelloWorld.jrun as %1

  â†“
STEP 2: JrunDirect.bat (jac2020/jrun/bin/JrunDirect.bat)
  echo off
  echo Running... C:\GitHub\ArchitectsCompanion\jac2020\jrun\bin\JrunDirect.bat v20191013a
  echo Jrun file=%1

  cd C:\Github\ArchitectsCompanion\jac2020\Jrun\bin

  call setJAVA_HOME       # Sets JAVA_HOME to jac2020\jdk1.8.0_112
  call setJAC_BASE        # Sets JAC_BASE to C:\GitHub\ArchitectsCompanion\jac2020
  call setJAC_DEBUG       # Sets JAC_DEBUG=false
  call setJAC_DEBUG_LEVEL # Sets JAC_DEBUG_LEVEL= (empty string)
  call setJAC_PROFILE     # Sets JAC_PROFILE=false
  call setJAC_COMPILE     # Sets JAC_COMPILE=true

  cd %JAC_BASE%\bin       # cd C:\GitHub\ArchitectsCompanion\jac2020\bin
  call Jrun.bat %1        # Pass .jrun file path
  pause

  â†“
STEP 3: Jrun.bat (jac2020/bin/Jrun.bat)
  echo off
  echo Running... C:\GitHub\ArchitectsCompanion\jac2020\bin\Jrun.bat v20191013a
  echo Jrun.bat JAC_BASE=%JAC_BASE%
  echo 1=%1

  cd %JAC_BASE%\bin
  call Job com.esarks.jac.jrun.Jrun execute %1

  â†“
STEP 4: Job.bat (jac2020/bin/Job.bat)
  echo off
  echo Running... C:\GitHub\ArchitectsCompanion\jac2020\bin\Job.bat v20191013a
  echo Job.bat 1=%1  â†’ com.esarks.jac.jrun.Jrun
  echo Job.bat 2=%2  â†’ execute
  echo Job.bat 3=%3  â†’ C:\path\to\HelloWorld.jrun

  call SetJob  # Sets JAC_HOME, JAC_WORK, JAC_SCRIPTS, CLASSPATH

  set MEMORY=-Xms64m -Xmx512m
  set LOG=-debugInstance PENDINGdate -debugPath "%JAC_HOME%\logs" -debug 4 -debugClass 4
  set COMPILE= (empty, means compile is enabled)

  # At :jrun label (line 38)
  %JAVA_HOME%\bin\java %MEMORY% %PROFILE% %JACOB% %DEBUG% \
    com.esarks.jac.jac %COMPILE% -pause \
    -script com.esarks.jac.jrun.Job \
    -method execute \
    -argument com.esarks.jac.jrun.Jrun \
    -argument execute \
    -argument C:\path\to\HelloWorld.jrun \
    -home "%JAC_HOME%" \
    -work "%JAC_WORK%" \
    -scripts "%JAC_SCRIPTS%" \
    -classpath "%CLASSPATH%" \
    %LOG%

  â†“
STEP 5: Java VM Launches with com.esarks.jac.jac
  JAC Compiler Main Class: com.esarks.jac.jac
  Arguments:
    -script com.esarks.jac.jrun.Job
    -method execute
    -argument com.esarks.jac.jrun.Jrun
    -argument execute
    -argument C:\app\paul\HelloWorld.jrun
    -home "C:\GitHub\ArchitectsCompanion\jac2020"
    -work "C:\GitHub\ArchitectsCompanion\jac2020\classes"
    -scripts "C:\GitHub\ArchitectsCompanion\jac2020\app"
    -classpath "..."

  â†“
STEP 6: JAC Compiler Loads Job.java
  JAC Compiler (jac.java):
  - Parses command line arguments
  - Loads script: com.esarks.jac.jrun.Job
  - Compiles if necessary (checks .java timestamp vs .class)
  - Creates instance: new Job(Script)
  - Invokes: Job.execute("com.esarks.jac.jrun.Jrun", "execute", "C:\...\HelloWorld.jrun")

  â†“
STEP 7: Job.execute() Method
  Job.java:execute(String aScript, String aMethod, String aArgument)
  - aScript = "com.esarks.jac.jrun.Jrun"
  - aMethod = "execute"
  - aArgument = "C:\app\paul\HelloWorld.jrun"

  Job.java actions:
  1. Loads MicScriptHelper: loadScript("com.esarks.jac.jrun.Jrun")
  2. Parses Job.xml for database properties
  3. Loads PropertiesSchema.xml
  4. Parses Properties.xml for database connections
  5. Opens database connection pool (if configured)
  6. Calls: iScript.execMethod(lLoadObject, "execute", new Object[]{aArgument})

  â†“
STEP 8: Jrun.execute() Method
  Jrun.java:execute(String aXml)
  - aXml = "C:\app\paul\HelloWorld.jrun"

  Jrun.java actions:
  1. parseXmlPath(aXml) - Parses HelloWorld.jrun XML
  2. Reads XML elements:
     <jacrun script="paul.HelloWorld" method="execute" />
  3. Processes classpath elements (if any):
     - jacrun:classpath:path
     - jacrun:classpath:workPath
     - jacrun:classpath:homePath
  4. Loads the target script: loadScript("paul.HelloWorld")
  5. Executes method: iScript.execMethod(lLoadObject, "execute")
  6. Unloads script: unloadScript("paul.HelloWorld")

  â†“
STEP 9: Target Script Execution
  paul.HelloWorld.execute():
  - Runs user code
  - Outputs: "Hello, World!"

  â†“
END: Script completes, Java VM exits, control returns to pause
```

---

## File Structure

### JAC2020 Directory Layout

```
jac2020/
â”œâ”€â”€ bin/                           # Main executables
â”‚   â”œâ”€â”€ Job.bat                    # Job wrapper
â”‚   â”œâ”€â”€ Jrun.bat                   # Jrun launcher
â”‚   â”œâ”€â”€ JrunDirect.bat             # Entry point (hard-coded paths)
â”‚   â”œâ”€â”€ SetJob.bat                 # Classpath configuration
â”‚   â””â”€â”€ plantumlgui.bat
â”‚
â”œâ”€â”€ jrun/                          # Jrun configuration
â”‚   â”œâ”€â”€ bin/                       # Jrun environment setup
â”‚   â”‚   â”œâ”€â”€ Associate me.jrun      # File association helper
â”‚   â”‚   â”œâ”€â”€ Jrun Readme.txt        # Association instructions
â”‚   â”‚   â”œâ”€â”€ JrunDirect.bat         # Dynamic jrun launcher
â”‚   â”‚   â”œâ”€â”€ Set.bat                # Dynamic environment setter
â”‚   â”‚   â”œâ”€â”€ SetJAC_BASE.bat        # Sets JAC_BASE variable
â”‚   â”‚   â”œâ”€â”€ SetJAC_COMPILE.bat     # Sets compilation flag
â”‚   â”‚   â”œâ”€â”€ SetJAC_DEBUG.bat       # Sets debug mode
â”‚   â”‚   â”œâ”€â”€ SetJAC_DEBUG_false.bat # Debug off
â”‚   â”‚   â”œâ”€â”€ SetJAC_DEBUG_LEVEL.bat # Debug level
â”‚   â”‚   â”œâ”€â”€ SetJAC_DEBUG_True.bat  # Debug on
â”‚   â”‚   â”œâ”€â”€ SetJAC_PROFILE.bat     # Profiling mode
â”‚   â”‚   â””â”€â”€ SetJAVA_HOME.bat       # Sets Java home
â”‚   â””â”€â”€ Readme if error.txt        # Error troubleshooting
â”‚
â”œâ”€â”€ jacBuild8/                     # Build system (JDK 1.8)
â”‚   â””â”€â”€ classes/
â”‚       â””â”€â”€ com/esarks/jac/jrun/
â”‚           â”œâ”€â”€ Jrun.java          # Jrun implementation
â”‚           â””â”€â”€ Job.java           # Job wrapper
â”‚
â”œâ”€â”€ app/                           # Applications
â”‚   â””â”€â”€ paul/                      # Example apps
â”‚       â”œâ”€â”€ HelloWorld.jrun        # Example jrun file
â”‚       â””â”€â”€ HelloWorld.java        # Target script
â”‚
â”œâ”€â”€ classes/                       # Compiled output
â”œâ”€â”€ conf/                          # Configuration
â”œâ”€â”€ lib/                           # JAR libraries
â””â”€â”€ logs/                          # Runtime logs
```

---

## Batch File Chain

### 1. JrunDirect.bat (jac2020/jrun/bin/)

**Purpose:** Entry point for double-click execution. Sets up environment variables.

**Location:** `C:\GitHub\ArchitectsCompanion\jac2020\jrun\bin\JrunDirect.bat`

**Content:**
```batch
echo off
echo Running... C:\GitHub\ArchitectsCompanion\jac2020\jrun\bin\JrunDirect.bat v20191013a

echo Jrun file=%1

cd C:\Github\ArchitectsCompanion\jac2020\Jrun\bin

call setJAVA_HOME
call setJAC_BASE
call setJAC_DEBUG
call setJAC_DEBUG_LEVEL
call setJAC_PROFILE
call setJAC_COMPILE

cd %JAC_BASE%\bin
call Jrun.bat %1
pause
```

**Parameters:**
- `%1` = Full path to .jrun file

**Called By:** Windows File Association

**Calls:**
- `setJAVA_HOME.bat`
- `setJAC_BASE.bat`
- `setJAC_DEBUG.bat`
- `setJAC_DEBUG_LEVEL.bat`
- `setJAC_PROFILE.bat`
- `setJAC_COMPILE.bat`
- `Jrun.bat`

---

### 2. Jrun.bat (jac2020/bin/)

**Purpose:** Calls Job.bat with Jrun class and execute method.

**Location:** `C:\GitHub\ArchitectsCompanion\jac2020\bin\Jrun.bat`

**Content:**
```batch
echo off
echo Running... C:\GitHub\ArchitectsCompanion\jac2020\bin\Jrun.bat v20191013a

echo Jrun.bat v20191013a
echo Jrun.bat JAC_BASE=%JAC_BASE%
echo 1=%1
cd %JAC_BASE%\bin
call Job com.esarks.jac.jrun.Jrun execute %1
```

**Parameters:**
- `%1` = Full path to .jrun file

**Called By:** `JrunDirect.bat`

**Calls:** `Job.bat`

---

### 3. Job.bat (jac2020/bin/)

**Purpose:** Configures Java VM and launches com.esarks.jac.jac with specified script/method.

**Location:** `C:\GitHub\ArchitectsCompanion\jac2020\bin\Job.bat`

**Content (Simplified):**
```batch
echo off
echo Running... C:\GitHub\ArchitectsCompanion\jac2020\bin\Job.bat v20191013a

echo Job.bat 1=%1
echo Job.bat 2=%2
echo Job.bat 3=%3
echo Job.bat 4=%4

call SetJob

echo JAC_BASE=%JAC_BASE%
echo JAC_HOME=%JAC_HOME%
echo JAC_WORK=%JAC_WORK%
echo JAC_SCRIPTS=%JAC_SCRIPTS%

set MEMORY=-Xms64m -Xmx512m

if "%JAC_DEBUG_LEVEL%" == "" set LOG=-debugInstance PENDINGdate -debugPath "%JAC_HOME%\logs" -debug 4 -debugClass 4
if NOT "%JAC_DEBUG_LEVEL%" == "" set LOG=-debugInstance PENDINGdate -debugPath "%JAC_HOME%\logs" -debug %JAC_DEBUG_LEVEL% -debugClass %JAC_DEBUG_LEVEL%

set PROFILE=
if "%JAC_PROFILE%" == "true" set PROFILE=-Xrunjprofiler -Xint -Xbootclasspath/a:"C:\Program Files\jprofiler3\bin\agent.jar"

set JACOB=-Djava.library.path=%JAC_HOME%\lib\jacob-1.17-M2

set DEBUG=
if "%JAC_DEBUG%" == "true" set DEBUG=-Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,address=8000,suspend=y

set COMPILE=
if "%JAC_COMPILE%" == "false" set COMPILE=-nocompile

if not "%1" == "jac" goto jrun
%JAVA_HOME%\bin\java %MEMORY% %PROFILE% %JACOB% %DEBUG% com.esarks.jac.jac %COMPILE% -pause -script %2 -method %3 -context %4 -home "%JAC_HOME%" -work "%JAC_WORK%" -scripts "%JAC_SCRIPTS%" -classpath "%CLASSPATH%" %LOG%
goto exit

:jrun

echo At jrun

if %3 == "" %JAVA_HOME%\bin\java %MEMORY% %PROFILE% %JACOB% %DEBUG% com.esarks.jac.jac %COMPILE% -pause -script com.esarks.jac.jrun.Job -method execute -argument %1 -argument %2 -home "%JAC_HOME%" -work "%JAC_WORK%" -scripts "%JAC_SCRIPTS%" -classpath "%CLASSPATH%" %LOG%
if NOT %3 == "" %JAVA_HOME%\bin\java %MEMORY% %PROFILE% %JACOB% %DEBUG% com.esarks.jac.jac %COMPILE% -pause -script com.esarks.jac.jrun.Job -method execute -argument %1 -argument %2 -argument %3 -home "%JAC_HOME%" -work "%JAC_WORK%" -scripts "%JAC_SCRIPTS%" -classpath "%CLASSPATH%" %LOG%

:exit
```

**Parameters:**
- `%1` = Script class (e.g., "com.esarks.jac.jrun.Jrun")
- `%2` = Method name (e.g., "execute")
- `%3` = Argument 1 (e.g., path to .jrun file)
- `%4` = Argument 2 (optional)

**Called By:** `Jrun.bat`

**Calls:** `SetJob.bat`, then launches Java VM

---

### 4. SetJob.bat (jac2020/bin/)

**Purpose:** Configures JAC environment variables and comprehensive classpath.

**Location:** `C:\GitHub\ArchitectsCompanion\jac2020\bin\SetJob.bat`

**Key Variables Set:**
```batch
set JAC_HOME=%JAC_BASE%
set JAC_WORK=%JAC_BASE%\classes
set JAC_SCRIPTS=%JAC_BASE%\app

set CLASSPATH=%JAC_WORK%
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\jac\jac.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\mic\mic.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\jetty\org.mortbay.jetty.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\jetty\org.mortbay.jmx.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\jetty\javax.servlet.jar
set CLASSPATH=%CLASSPATH%;%JAVA_HOME%\lib\tools.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\mysql-connector-java-5.1.18\mysql-connector-java-5.1.18-bin.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\crimson\crimson.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\jacob-1.19\jacob.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\jni4net-0.8.6.0-bin\lib\jni4net.j-0.8.6.0.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\json-simple-1.1.jar\json-simple-1.1.jar
# ... HAPI libraries ...
```

**Called By:** `Job.bat`

---

### 5. Environment Setup Files (jac2020/jrun/bin/)

#### SetJAVA_HOME.bat
```batch
echo off
echo Running... C:\GitHub\ArchitectsCompanion\jac2020\Jrun\bin\SetJAVA_HOME.bat v20191013a
echo Set JAVA_HOME=C:\GitHub\ArchitectsCompanion\jac2020\jdk1.8.0_112
set JAVA_HOME=C:\GitHub\ArchitectsCompanion\jac2020\jdk1.8.0_112
```

#### SetJAC_BASE.bat
```batch
echo off
echo Running... C:\GitHub\ArchitectsCompanion\jac2020\Jrun\bin\SetJAC_BASE.bat v20191013a
echo Set JAC_BASE=C:\GitHub\ArchitectsCompanion\jac2020
set JAC_BASE=C:\GitHub\ArchitectsCompanion\jac2020
```

#### SetJAC_DEBUG.bat
```batch
echo off
echo Running... C:\GitHub\ArchitectsCompanion\jac2020\Jrun\bin\SetJAC_DEBUG.bat v20191013a
echo Set JAC_DEBUG=false
set JAC_DEBUG=false
```

#### SetJAC_DEBUG_LEVEL.bat
```batch
echo off
echo Running... C:\GitHub\ArchitectsCompanion\jac2020\Jrun\bin\SetJAC_DEBUG_LEVEL.bat v20191013a
echo Set JAC_DEBUG_LEVEL=
set JAC_DEBUG_LEVEL=
```

#### SetJAC_PROFILE.bat
```batch
echo off
echo Running... C:\GitHub\ArchitectsCompanion\jac2020\Jrun\bin\SetJAC_PROFILE.bat v20191013a
echo Set JAC_PROFILE=false
set JAC_PROFILE=false
```

#### SetJAC_COMPILE.bat
```batch
echo off
echo Running... C:\GitHub\ArchitectsCompanion\jac2020\Jrun\bin\setJAC_COMPILE.bat v20191013a
echo Set JAC_COMPILE=true
set JAC_COMPILE=true
```

---

## Java Classes

### 1. Jrun.java (com.esarks.jac.jrun.Jrun)

**Purpose:** Parses .jrun XML files and executes specified scripts/methods.

**Location:** `jac2020/jacBuild8/classes/com/esarks/jac/jrun/Jrun.java`

**Extends:** `com.esarks.mic.Component`

**Key Methods:**

#### execute(String aXml)
**Purpose:** Main execution method that processes .jrun XML file.

**Process:**
1. Parse XML file using `parseXmlPath(aXml)`
2. Extract classpath elements and modify System classpath
3. Extract script name and method name
4. Load script using `loadScript(scriptName)`
5. Execute method using `iScript.execMethod(loadObject, methodName, args)`
6. Unload script using `unloadScript(scriptName)`

**Supported XML Elements:**
- `jacrun:script` - Script class name
- `jacrun:method` - Method to execute
- `jacrun:argument` - Method argument (optional)
- `jacrun:argument2` - Second method argument (optional)
- `jacrun:args:arg` - Array of arguments
- `jacrun:pause` - Pause before/after execution
- `jacrun:noScript` - Load without compilation
- `jacrun:classpath:path` - Relative classpath entries
- `jacrun:classpath:workPath` - Work directory paths
- `jacrun:classpath:homePath` - Home directory paths

**Example XML Processing:**
```xml
<jacrun script="paul.HelloWorld" method="execute" />
```

Results in:
```java
loadObject = loadScript("paul.HelloWorld");
iScript.execMethod(loadObject, "execute");
unloadScript("paul.HelloWorld");
```

---

### 2. Job.java (com.esarks.jac.jrun.Job)

**Purpose:** Wrapper class that sets up database connections and loads target scripts.

**Location:** `jac2020/jacBuild8/classes/com/esarks/jac/jrun/Job.java`

**Extends:** `com.esarks.mic.Component`

**Key Methods:**

#### execute(String aScript, String aMethod)
Calls `execute(aScript, aMethod, null)`

#### execute(String aScript, String aMethod, String aArgument)

**Purpose:** Load script, configure database connections, execute method.

**Process:**
1. Load target script: `loadScript(aScript)` (e.g., "com.esarks.jac.jrun.Jrun")
2. Parse Job.xml for configuration
3. Read properties path and property set from XML
4. Load PropertiesSchema.xml
5. Parse Properties.xml for database connections
6. Open database connection pool:
   - Create `DbConnection` objects
   - Configure JDBC parameters (class, connection string, user, password)
   - Register with `DbConnectionFactory`
   - Create connection aliases
7. Associate database objects with connections
8. Execute target method:
   - If no argument: `iScript.execMethod(loadObject, method)`
   - With argument: `iScript.execMethod(loadObject, method, new Object[]{argument})`

**Database Connection Configuration:**
```xml
<property context="development">
  <dbConnection>
    <name>MYDB</name>
    <jdbcClass>com.mysql.jdbc.Driver</jdbcClass>
    <jdbcConnection>jdbc:mysql://localhost:3306/mydb</jdbcConnection>
    <jdbcUser>root</jdbcUser>
    <jdbcPassword>password</jdbcPassword>
    <alias>PRIMARY</alias>
  </dbConnection>
</property>
```

---

## XML Format (.jrun files)

### Basic Structure

```xml
<jacrun script="package.ClassName" method="methodName" />
```

### Full Structure

```xml
<jacrun script="package.ClassName"
        method="methodName"
        argument="optional_argument"
        argument2="optional_second_argument"
        pause="true"
        noScript="false">

  <classpath>
    <path>relative/path/to/jar</path>
    <workPath>classes/path</workPath>
    <homePath>lib/mylib.jar</homePath>
  </classpath>

  <args>
    <arg>arg1</arg>
    <arg>arg2</arg>
    <arg>arg3</arg>
  </args>

</jacrun>
```

### Attributes

| Attribute | Description | Required | Example |
|-----------|-------------|----------|---------|
| `script` | Fully qualified class name | Yes | `paul.HelloWorld` |
| `method` | Method name to invoke | Yes | `execute` |
| `argument` | Single method argument | No | `PENDINGthis` (refers to .jrun file itself) |
| `argument2` | Second method argument | No | `someValue` |
| `pause` | Pause before/after execution | No | `true` |
| `noScript` | Skip compilation | No | `true` |

### Elements

#### `<classpath>`
Custom classpath entries for this execution.

**Sub-elements:**
- `<path>` - Relative to script directory
- `<workPath>` - Relative to JAC_WORK
- `<homePath>` - Relative to JAC_HOME

**Example:**
```xml
<classpath>
  <path>mylib.jar</path>
  <workPath>customClasses</workPath>
  <homePath>lib/external/special.jar</homePath>
</classpath>
```

#### `<args>`
Array of string arguments passed to method.

**Example:**
```xml
<args>
  <arg>firstArg</arg>
  <arg>$homePath(config/settings.xml)</arg>
  <arg>$workPath(data/input.txt)</arg>
</args>
```

**Path Functions:**
- `$path(file)` - Relative to script location
- `$workPath(file)` - Relative to JAC_WORK
- `$homePath(file)` - Relative to JAC_HOME

---

## Environment Variables

### Core Variables

| Variable | Set By | Example Value | Purpose |
|----------|--------|---------------|---------|
| `JAVA_HOME` | SetJAVA_HOME.bat | `C:\...\jac2020\jdk1.8.0_112` | Java installation |
| `JAC_BASE` | SetJAC_BASE.bat | `C:\...\jac2020` | JAC root directory |
| `JAC_HOME` | SetJob.bat | `%JAC_BASE%` | Same as JAC_BASE |
| `JAC_WORK` | SetJob.bat | `%JAC_BASE%\classes` | Compiled classes |
| `JAC_SCRIPTS` | SetJob.bat | `%JAC_BASE%\app` | Script source files |
| `CLASSPATH` | SetJob.bat | `(see SetJob.bat)` | Java classpath |

### Configuration Variables

| Variable | Set By | Values | Default | Purpose |
|----------|--------|--------|---------|---------|
| `JAC_DEBUG` | SetJAC_DEBUG.bat | `true`/`false` | `false` | Enable remote debugging |
| `JAC_DEBUG_LEVEL` | SetJAC_DEBUG_LEVEL.bat | `0-9` or empty | empty | Log verbosity |
| `JAC_PROFILE` | SetJAC_PROFILE.bat | `true`/`false` | `false` | Enable profiling |
| `JAC_COMPILE` | setJAC_COMPILE.bat | `true`/`false` | `true` | Enable compilation |

### Derived Variables (Job.bat)

| Variable | Value | Purpose |
|----------|-------|---------|
| `MEMORY` | `-Xms64m -Xmx512m` | JVM memory settings |
| `LOG` | `-debugInstance PENDINGdate -debugPath ...` | Logging configuration |
| `PROFILE` | `-Xrunjprofiler ...` (if enabled) | Profiler settings |
| `JACOB` | `-Djava.library.path=%JAC_HOME%\lib\jacob-1.17-M2` | JACOB library path |
| `DEBUG` | `-Xdebug -Xrunjdwp...` (if enabled) | Remote debugging |
| `COMPILE` | `-nocompile` (if disabled) | Compilation flag |

---

## Database Connection Setup

### Overview

Job.java automatically configures database connections from Properties.xml.

### Configuration Files

#### 1. bin/Job.xml
Specifies properties file location:
```xml
<mic.element>
  <options>
    <properties>conf.Properties</properties>
    <propertySet>development</propertySet>
  </options>
</mic.element>
```

#### 2. conf/Properties.xml
Defines database connections:
```xml
<com.esarks.arm.schemas.properties.root>
  <property context="development">

    <dbConnection>
      <name>MYDB</name>
      <jdbcClass>com.mysql.jdbc.Driver</jdbcClass>
      <jdbcConnection>jdbc:mysql://localhost:3306/mydb</jdbcConnection>
      <jdbcUser>root</jdbcUser>
      <jdbcPassword>password</jdbcPassword>
      <dbTypes>TABLE,VIEW</dbTypes>
      <catalog>mydb</catalog>
      <owner></owner>
      <stereotype></stereotype>
      <openCount>3</openCount>
      <make>true</make>
      <alias>PRIMARY</alias>
    </dbConnection>

    <dbObjects>
      <dbConnection>
        <name>MYDB</name>
        <object><name>User</name></object>
        <object><name>Account</name></object>
      </dbConnection>
    </dbObjects>

  </property>
</com.esarks.arm.schemas.properties.root>
```

### Connection Pool

Job.java creates `openCount` number of connections:
```java
int lOpenCount = 3;  // From XML
for (int lIdx=0; lIdx < lOpenCount; lIdx++) {
    DbConnection lDbConnection = new DbConnection("MYDB");
    lDbConnectionFactory.register(lDbConnection);
    lDbConnection.connect(jdbcClass, jdbcConnection, user, password);
}
```

### Object Association

Scripts can access databases by object name:
```java
DbConnection conn = DbConnectionFactory.getInstance()
                     .getConnectionFromObject("User");
```

---

## Examples

### Example 1: Simple HelloWorld

**File:** `app/paul/HelloWorld.jrun`
```xml
<jacrun script="paul.HelloWorld" method="execute" />
```

**File:** `app/paul/HelloWorld.java`
```java
package paul;
import com.esarks.mic.*;

public class HelloWorld extends Component {
    protected HelloWorld() {}
    public HelloWorld(Script aScript) {
        super(aScript);
    }

    public void execute() {
        System.out.println("Hello, World!");
    }
}
```

**Execution:**
```
Double-click HelloWorld.jrun
â†’ Prints "Hello, World!"
```

---

### Example 2: With Arguments

**File:** `app/paul/Greet.jrun`
```xml
<jacrun script="paul.Greet"
        method="greet"
        argument="Alice" />
```

**File:** `app/paul/Greet.java`
```java
public void greet(String name) {
    System.out.println("Hello, " + name + "!");
}
```

**Output:** `Hello, Alice!`

---

### Example 3: Multiple Arguments

**File:** `app/paul/Calculator.jrun`
```xml
<jacrun script="paul.Calculator" method="add">
  <args>
    <arg>10</arg>
    <arg>20</arg>
  </args>
</jacrun>
```

**File:** `app/paul/Calculator.java`
```java
public void add(String[] args) {
    int a = Integer.parseInt(args[0]);
    int b = Integer.parseInt(args[1]);
    System.out.println("Sum: " + (a + b));
}
```

**Output:** `Sum: 30`

---

### Example 4: Custom Classpath

**File:** `app/paul/CustomLib.jrun`
```xml
<jacrun script="paul.CustomLib" method="execute">
  <classpath>
    <path>mylibs/special.jar</path>
    <homePath>lib/external/tools.jar</homePath>
  </classpath>
</jacrun>
```

**Effect:** Adds jars to System classpath before execution.

---

### Example 5: Path Functions in Arguments

**File:** `app/paul/FileProcessor.jrun`
```xml
<jacrun script="paul.FileProcessor" method="process">
  <args>
    <arg>$path(input.txt)</arg>
    <arg>$workPath(output)</arg>
    <arg>$homePath(conf/settings.xml)</arg>
  </args>
</jacrun>
```

**Resolved to:**
```
args[0] = "C:\...\app\paul\input.txt"
args[1] = "C:\...\classes\output"
args[2] = "C:\...\jac2020\conf\settings.xml"
```

---

## Comparison: JAC2020 vs JAC2024

### Similarities

| Feature | JAC2020 | JAC2024 | Status |
|---------|---------|---------|--------|
| **Directory Structure** | `jac2020/jrun/bin/` | `jac2024/bin/` | WARNING Consolidated (jrun removed) |
| **Environment Files** | SetJAC_*.bat | SetJAC_*.bat | PASS Same |
| **Batch Files** | Jrun.bat, Job.bat, JrunDirect.bat | Jrun.bat, Job.bat, JrunDirect.bat | PASS Same structure |
| **Java Classes** | Jrun.java, Job.java | Jrun.java, Job.java | PASS Same logic |
| **.jrun Format** | XML with `<jacrun>` | XML with `<jacrun>` | PASS Same |

### Key Differences

| Aspect | JAC2020 | JAC2024 | Impact |
|--------|---------|---------|--------|
| **JDK Version** | JDK 1.8.0_112 | JDK 24 | Potential compatibility issues |
| **Paths** | Hard-coded `C:\GitHub\...` | OneDrive paths | Path resolution issues |
| **SetJrunEnvironment** | Individual Set*.bat calls | Single SetJrunEnvironment.bat | Different organization |
| **Jetty** | Mortbay Jetty 6.x | Eclipse Jetty 12.1.2 | CLASSPATH differences |
| **Servlet API** | javax.servlet | jakarta.servlet | Package name changes |

### JAC2024 Issues Identified

**1. Path Issues:**
```batch
# JAC2020 SetJAC_BASE.bat (works)
set JAC_BASE=C:\GitHub\ArchitectsCompanion\jac2020

# JAC2024 SetJrunEnvironment.bat (may have issues)
set JAC_BASE=C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
```

**Problem:** OneDrive paths with spaces may cause issues.

**2. SetJob.bat Classpath:**
```batch
# JAC2020 (works)
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\jetty\org.mortbay.jetty.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\jetty\javax.servlet.jar

# JAC2024 (needs 12 Jetty JARs)
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\jetty\jetty-server-12.1.2.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\jetty\jakarta.servlet-api-6.0.0.jar
# ... 10 more JARs ...
```

**Problem:** If SetJob.bat not updated for Jetty 12, classpath is incomplete.

**3. JDK Compatibility:**
```
JAC2020: JDK 1.8.0_112 (Java 8)
JAC2024: JDK 24 (Java 24)
```

**Problem:** Some legacy code may not compile/run on JDK 24.

---

## Troubleshooting

### Issue 1: "Cannot find .jrun file"

**Symptom:**
```
Jrun: !WARNING! Cannot open script C:\...\HelloWorld.jrun
```

**Causes:**
- File path has spaces not quoted
- JAC_BASE not set correctly
- Wrong directory separator (\ vs /)

**Solution:**
1. Check SetJAC_BASE.bat has correct path
2. Ensure no spaces in path, or quote properly
3. Use Windows backslashes (\) not forward slashes (/)

---

### Issue 2: "ClassNotFoundException"

**Symptom:**
```
Exception in thread "main" java.lang.ClassNotFoundException: com.esarks.jac.jrun.Jrun
```

**Causes:**
- CLASSPATH missing jac.jar
- SetJob.bat not called
- Incorrect JAC_HOME

**Solution:**
1. Verify SetJob.bat called from Job.bat
2. Check jac.jar exists: `dir %JAC_HOME%\lib\jac\jac.jar`
3. Verify CLASSPATH: `echo %CLASSPATH% > classpath.txt`

---

### Issue 3: "Script does not compile"

**Symptom:**
```
Compilation errors in paul.HelloWorld.java
```

**Causes:**
- Missing imports
- Java syntax errors
- Wrong JAC_SCRIPTS directory

**Solution:**
1. Check JAC_SCRIPTS=correct app directory
2. Verify .java file exists: `dir %JAC_SCRIPTS%\paul\HelloWorld.java`
3. Look at compilation errors in output
4. Check JAVA_HOME points to valid JDK (not JRE)

---

### Issue 4: "Database connection fails"

**Symptom:**
```
Failed to associate all database objects to a DbConnection
```

**Causes:**
- Properties.xml not found
- PropertiesSchema.xml not found
- JDBC driver not in classpath
- Wrong database credentials

**Solution:**
1. Verify conf/Properties.xml exists
2. Check SetJob.bat includes JDBC driver JAR
3. Test database connection manually
4. Review jdbcConnection string format

---

### Issue 5: "Pause doesn't work"

**Symptom:**
Script runs but closes immediately, can't see output.

**Causes:**
- JrunDirect.bat missing `pause` command
- Running from command line without pause

**Solution:**
1. Edit JrunDirect.bat, add `pause` at end
2. Or run from cmd: `cmd /k JrunDirect.bat HelloWorld.jrun`

---

## Windows File Association

### How to Associate .jrun with JrunDirect.bat

**Method 1: Registry (Recommended for JAC2020)**

1. Open Registry Editor (regedit)
2. Navigate to: `HKEY_CLASSES_ROOT\.jrun`
3. Create key `.jrun` if not exists
4. Set (Default) value to: `jrunfile`
5. Navigate to: `HKEY_CLASSES_ROOT\jrunfile\shell\open\command`
6. Set (Default) value to:
   ```
   "C:\GitHub\ArchitectsCompanion\jac2020\jrun\bin\JrunDirect.bat" "%1"
   ```

**Method 2: Right-Click (Windows 10/11)**

1. Right-click any .jrun file
2. Choose "Open with" â†’ "Choose another app"
3. Click "More apps" â†’ "Look for another app on this PC"
4. Browse to: `C:\GitHub\ArchitectsCompanion\jac2020\jrun\bin\JrunDirect.bat`
5. Check "Always use this app"
6. Click OK

**Method 3: Command Line**

```batch
ftype jrunfile="C:\GitHub\ArchitectsCompanion\jac2020\jrun\bin\JrunDirect.bat" "%1"
assoc .jrun=jrunfile
```

---

## Summary

### What Makes JAC2020 Jrun Work

PASS **1. Complete Environment Setup**
- Each variable set by dedicated .bat file
- Clear separation of concerns
- Hard-coded paths (no ambiguity)

PASS **2. Layered Bootstrap**
- JrunDirect.bat â†’ environment
- Jrun.bat â†’ delegation
- Job.bat â†’ Java VM launch
- Jrun.java â†’ XML parsing
- Target script execution

PASS **3. Comprehensive Classpath**
- All JAR dependencies in SetJob.bat
- Verifies existence with `if exist`
- Pauses on missing dependencies

PASS **4. Database Abstraction**
- Job.java handles all DB setup
- Connection pooling built-in
- Object-to-connection mapping

PASS **5. XML-Driven Configuration**
- .jrun files simple and declarative
- Path functions for flexibility
- Arguments support array or individual

### Why This Documentation Matters

This is the **reference implementation** that works. JAC2024's jrun system should follow this exact architecture, with only these changes:

1. Update paths for JAC2024 location
2. Update JAVA_HOME for JDK 24
3. Update SetJob.bat for Jetty 12.1.2 JARs
4. Update SetJob.bat for Jakarta servlet API

Everything else should remain identical.

---

**Document Version:** 1.0
**Last Updated:** 2025-10-20
**Author:** Paul Thomas Mulcahy / Claude Code AI
**Status:** Complete Reference Documentation
**Tested On:** JAC2020 v20191013a, Windows 10
