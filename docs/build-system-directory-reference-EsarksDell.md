---
title: "build system directory reference EsarksDell"
---


# JAC Build System: Complete Directory and File Reference

**Supplement to:** [build-system.md](build-system.html)
**Document Version:** 1.0
**Last Updated:** October 23, 2025
**Purpose:** Detailed file-by-file inventory of `jac2024/jacBuild24/`

---

## Table of Contents

1. [Directory Inventory](#directory-inventory)
2. [bin/ - Executables and Batch Files](#bin---executables-and-batch-files)
3. [lib/ - Third-Party Libraries](#lib---third-party-libraries)
4. [source/ - JAC Source Code](#source---jac-source-code)
5. [phase1Classes/ - Bootstrap Compiler](#phase1classes---bootstrap-compiler)
6. [phase2Classes/ - Full Build Classes](#phase2classes---full-build-classes)
7. [classes/ - Runtime Compiled Classes](#classes---runtime-compiled-classes)
8. [conf/ - Configuration Files](#conf---configuration-files)
9. [JDK Versions](#jdk-versions)
10. [File Size Summary](#file-size-summary)

---

## Directory Inventory

### Complete Directory Tree

```
jacBuild24/
├── bin/                          # 28 files, ~500KB
├── classes/                      # 100+ files, compiled ARM templates
├── conf/                         # 8 files, configuration
├── jacLicense/                   # License files
├── jdk-13.0.1/                   # JDK 13 (legacy)
├── jdk-23/                       # JDK 23
├── jdk-24/                       # JDK 24 (current, ~500MB)
├── jrun2/                        # Jrun2 runtime (deprecated)
├── lib/                          # 15 subdirectories, ~50MB of JARs
├── logs/                         # Runtime log files
├── migration/                    # Migration tools
├── phase1Classes/                # ~20 classes, bootstrap
├── phase2Classes/                # ~100 classes, full build
├── source/                       # JAC system source
│   ├── java/                     # Core compiler (35+ files)
│   └── scripts/                  # ARM templates (200+ files)
└── license.xml                   # License configuration
```

---

## bin/ - Executables and Batch Files

### Batch File Inventory

| File | Size | Purpose | Status |
|------|------|---------|--------|
| `jac.bat` | 1KB | **Primary JAC compiler launcher** | PASS Active |
| `jac.bat.bak` | 1KB | Backup of jac.bat | Archive |
| `Job.bat` | 4KB | **Advanced execution wrapper** | PASS Active |
| `Job.bat.bak` | 4KB | Backup of Job.bat | Archive |
| `Jrun2.bat` | 3KB | **Runtime executor for .jrun files** | PASS Active |
| `Jrun2.bat.bak` | 3KB | Backup | Archive |
| `Jrun2Direct.bat` | 2KB | Direct jrun execution | PASS Active |
| `Jrun2Direct.bat.bak` | 2KB | Backup | Archive |
| `phase1.bat` | 2KB | **Bootstrap compiler build** | PASS Active |
| `phase1.bat.bak` | 2KB | Backup | Archive |
| `phase2.bat` | 3KB | **Full ARM framework build** | PASS Active |
| `phase2.bat.bak` | 3KB | Backup | Archive |
| `allPhases.bat` | 1KB | **Complete rebuild** | PASS Active |
| `allPhases.bat.bak` | 1KB | Backup | Archive |
| `Set2Job.bat` | 2KB | Environment setup for Job.bat | PASS Active |
| `Set2Job.bat.bak` | 2KB | Backup | Archive |
| `copyJars.bat` | 1KB | Copy JARs to lib/ | Utility |
| `copyJars.bat.bak` | 1KB | Backup | Archive |
| `fixJrun.bat` | 500B | Fix .jrun file associations | Utility |
| `testJettyMigration.bat` | 1KB | Test Jetty 12 migration | Testing |
| `testJettyMigration.ps1` | 2KB | PowerShell test script | Testing |
| `testJSONCompile.bat` | 1KB | Test JSON compilation | Testing |

### Support Files

| File | Size | Purpose |
|------|------|---------|
| `Job.xml` | 2KB | Job execution configuration XML |
| `Properties.xml` | 1KB | System properties |
| `README.txt` | 5KB | Build system documentation |
| `phase1List.txt` | 2KB | List of files for phase1 compilation |
| `classpath.txt` | 8KB | Full classpath for builds |
| `classpath.txt.bak` | 8KB | Backup |
| `build.log` | Varies | Last build log |
| `build-json-config.log` | Varies | JSON configuration build log |
| `build-output.txt` | Varies | Build output capture |

### Detailed jac.bat Analysis

```batch
@echo off
echo ******************************************
echo JAC2024 v20241111a0 jac.bat

# Fixed paths (should use SetJrunEnvironment.bat instead)
set JAC_HOME=C:\Users\ptm\onedrive\documents\github\architectscompanion\jac2024\jacBuild24
set JAC_WORK=C:\Users\ptm\onedrive\documents\github\architectscompanion\jac2024\classes
set JAC_SCRIPTS=C:\Users\ptm\onedrive\documents\github\architectscompanion\jac2024\app

# Minimal classpath - only phase1 + core XML libraries
set JAC_CP=%JAC_HOME%\phase1Classes
set JAC_CP=%JAC_CP%;%JAC_HOME%\lib\xerces\xercesImpl.jar
set JAC_CP=%JAC_CP%;%JAC_HOME%\lib\xerces\xml-apis.jar
set JAC_CP=%JAC_CP%;%JAC_HOME%\lib\crimson\crimson.jar
set JAC_CP=%JAC_CP%;%JAC_HOME%\lib\mic\mic.jar

# Compile only (no method execution)
if "%2" == "" "%JAC_HOME%\jdk-24\bin\java" -cp "%JAC_CP%" com.esarks.jac.jac -home "%JAC_HOME%" -work %JAC_WORK% -scripts "%JAC_SCRIPTS%" -classpath "%CLASSPATH%" -script %1

# Compile and execute method
if NOT "%2" == "" "%JAC_HOME%\jdk-24\bin\java" -cp "%JAC_CP%" com.esarks.jac.jac -home "%JAC_HOME%" -work %JAC_WORK% -scripts "%JAC_SCRIPTS%" -classpath "%CLASSPATH%" -script %1 -method %2
```

**Issues:**
- FAIL Hardcoded absolute paths (not portable)
- FAIL Uses system %CLASSPATH% which can exceed Windows limit
- PASS Minimal classpath keeps command line short
- PASS Separates compile-only vs compile-execute modes

**Recommended Approach:**
Use `SetJrunEnvironment.bat` to set environment variables dynamically, then use those variables in jac.bat.

---

## lib/ - Third-Party Libraries

### Complete Library Inventory

#### XML Processing (lib/xerces/, lib/xerces-2_9_0/, lib/crimson/)

| JAR | Size | Version | Purpose |
|-----|------|---------|---------|
| `xercesImpl.jar` | 972KB | 2.9.0 | Xerces XML parser implementation |
| `xml-apis.jar` | 124KB | 2.9.0 | Standard XML API interfaces (DOM, SAX, JAXP) |
| `ant.jar` | 716KB | - | Apache Ant build tool |
| `junit.jar` | 92KB | - | JUnit testing framework |
| `optional.jar` | 653KB | - | Xerces optional components |
| `stylebook.jar` | 96KB | - | Documentation generation |
| `xalan.jar` | 997KB | - | XSLT 1.0 processor |
| `xercesSamples.jar` | 123KB | - | Sample code |
| `xmlParserAPIs.jar` | 124KB | - | Alternative XML APIs |
| `crimson.jar` | 205KB | - | Sun Crimson XML parser |
| `resolver.jar` | 84KB | 2.9.0 | XML catalog resolver |
| `serializer.jar` | 278KB | - | XML serialization utilities |

**Total XML libraries:** ~4.5MB
**Why so manyPENDING** Compatibility across different Java versions and spec compliance testing.

#### Jetty 12.1.2 Web Server (lib/jetty/)

| JAR | Size | Purpose |
|-----|------|---------|
| `jetty-server-12.1.2.jar` | 694KB | Core HTTP server engine |
| `jetty-http-12.1.2.jar` | 453KB | HTTP/1.1 protocol implementation |
| `jetty-io-12.1.2.jar` | 374KB | Async I/O and NIO abstractions |
| `jetty-ee10-servlet-12.1.2.jar` | 445KB | Jakarta EE 10 servlet container |
| `jetty-security-12.1.2.jar` | 159KB | Authentication & authorization |
| `jetty-session-12.1.2.jar` | 117KB | Session management |
| `jetty-util-12.1.2.jar` | 721KB | Common utilities |
| `jetty-jmx-12.1.2.jar` | 33KB | JMX monitoring integration |
| `jakarta.servlet-api-6.0.0.jar` | 347KB | Jakarta Servlet 6.0 specification |
| `jakarta.servlet.jsp-api-4.0.0.jar` | 66KB | JSP 4.0 specification |
| `slf4j-api-2.0.16.jar` | 69KB | Simple Logging Facade API |
| `slf4j-simple-2.0.16.jar` | 15KB | Simple SLF4J implementation |

**Total Jetty:** ~3.5MB
**Capabilities:**
- HTTP/1.1 and HTTP/2 support
- WebSocket support
- Servlet 6.0 (Jakarta EE 10)
- Async servlets and NIO
- Built-in session management

**Legacy Jetty (lib/tomcat/):**
- `org.mortbay.jetty.jar` (580KB) - Jetty 6.x (circa 2008)
- `org.mortbay.jmx.jar` (50KB) - JMX for Jetty 6
- Maintained for backward compatibility

#### Database JDBC Drivers

**Oracle (lib/oracle/)** - 5.7MB total
| JAR | Size | Version | JDBC |
|-----|------|---------|------|
| `ojdbc14.jar` | 1.35MB | Oracle 10g | JDBC 1.4 |
| `ojdbc14_g.jar` | 1.69MB | Oracle 10g | Debug version |
| `classes12.jar` | 1.42MB | Oracle 9i | JDBC 1.2 |
| `classes12.zip` | 1.43MB | Oracle 9i | Source archive |

**MySQL (lib/mysql/)** - 710KB total
| JAR | Size | Version |
|-----|------|---------|
| `mysql-connector-java-5.1.7-bin.jar` | 710KB | MySQL 5.1 |

**PostgreSQL (lib/postgresql/)** - 401KB total
| JAR | Size | Version |
|-----|------|---------|
| `postgresql-8.1-404.jdbc3.jar` | 401KB | PostgreSQL 8.1 |

**Microsoft SQL Server (lib/mssqlserver/)** - 413KB total
| JAR | Size | Purpose |
|-----|------|---------|
| `mssqlserver.jar` | 67KB | Main driver |
| `msbase.jar` | 287KB | Base classes |
| `msutil.jar` | 59KB | Utilities |

**Total database drivers:** ~7.2MB

#### SOAP/Web Services (lib/soap/)

| JAR | Size | Purpose |
|-----|------|---------|
| `axis.jar` | 1.63MB | Apache Axis SOAP engine |
| `axis-schema.jar` | 204KB | Schema processing |
| `axis-ant.jar` | 33KB | Ant tasks |
| `jaxrpc.jar` | 32KB | JAX-RPC API |
| `saaj.jar` | 19KB | SOAP with Attachments |
| `wsdl4j.jar` | 127KB | WSDL 1.1 parsing |
| `xalan.jar` | 3.08MB | XSLT processor |
| `xercesImpl.jar` | 1.20MB | XML parser |
| `commons-discovery.jar` | 71KB | Service discovery |
| `commons-logging.jar` | 38KB | Logging abstraction |
| `commons-logging-api.jar` | 26KB | Logging API |
| `log4j.jar` | 353KB | Log4j 1.x |
| `activation.jar` | 55KB | JavaBeans Activation |
| `mail.jar` | 355KB | JavaMail API |
| `serializer.jar` | 189KB | XML serializer |
| `xmlsec.jar` | 285KB | XML security |
| `xmlsecSamples.jar` | 94KB | Security samples |
| `xmlsecTests.jar` | 71KB | Security tests |

**Total SOAP libraries:** ~7.8MB

#### JSON Processing (lib/gson/, lib/java-json.jar/)

| JAR | Size | Version | Purpose |
|-----|------|---------|---------|
| `gson-2.8.6.jar` | 240KB | 2.8.6 | Google Gson serialization |
| `gson-2.8.6-javadoc.jar` | 655KB | 2.8.6 | Gson Javadocs |
| `java-json.jar` | 85KB | - | JSON.org reference |

**Total JSON libraries:** ~980KB

#### JAC/MIC Core (lib/jac/, lib/mic/)

| JAR | Size | Purpose |
|-----|------|---------|
| `jac.jar` | 191KB | Compiled JAC compiler classes (phase1+phase2) |
| `mic.jar` | 214KB | MIC (Model Import Component) framework |

**What's in jac.jarPENDING**
- All compiled classes from `source/java/com/esarks/jac/`
- Contains exact same classes as `phase1Classes` + `phase2Classes`
- Used when JAC needs to invoke itself
- Self-hosting capability

**What's in mic.jarPENDING**
- MIC (Model Import Component) framework
- XML/CSV data import utilities
- Data transformation engine
- Schema mapping

#### Utilities (lib/)

| JAR/Directory | Size | Purpose |
|---------------|------|---------|
| `lib/piccolo/Piccolo.jar` | 164KB | Piccolo XML parser (fast, small) |
| `lib/oreilly/cos.jar` | 57KB | O'Reilly Servlet utilities (file upload) |
| `lib/oreilly/cos-26Dec2008.zip` | 286KB | COS source archive |
| `lib/java/tools.jar` | 5.08MB | JDK tools (javac, javadoc, etc.) |

### Library Dependency Graph

```
JAC Compiler (jac.java, Script.java)
  │
  ├─→ XML Parsing
  │   ├─→ xercesImpl.jar (primary)
  │   ├─→ xml-apis.jar (interfaces)
  │   └─→ crimson.jar (fallback)
  │
  ├─→ Code Generation
  │   ├─→ ScriptWriter.java
  │   └─→ Merge.java
  │
  ├─→ Property Management
  │   ├─→ PropertyHelper.java
  │   ├─→ PropertyValue.java
  │   └─→ SymbolTable.java
  │
  └─→ Dynamic Compilation
      ├─→ tools.jar (javac)
      └─→ AcClassLoader.java

Application Runtime
  │
  ├─→ Web Server (if used)
  │   ├─→ jetty-server-12.1.2.jar
  │   ├─→ jetty-servlet-12.1.2.jar
  │   └─→ jakarta.servlet-api-6.0.0.jar
  │
  ├─→ Database (if used)
  │   ├─→ ojdbc14.jar (Oracle)
  │   ├─→ mysql-connector-java.jar (MySQL)
  │   ├─→ postgresql.jar (PostgreSQL)
  │   └─→ mssqlserver.jar (SQL Server)
  │
  ├─→ JSON (if used)
  │   └─→ gson-2.8.6.jar
  │
  └─→ SOAP/Web Services (if used)
      ├─→ axis.jar
      ├─→ wsdl4j.jar
      └─→ jaxrpc.jar
```

---

## source/ - JAC Source Code

### source/java/com/esarks/jac/ - Core Compiler (35 files, ~1.1MB)

#### Critical Compiler Classes

| File | Lines | Size | Last Modified | Purpose |
|------|-------|------|---------------|---------|
| `jac.java` | 750 | 26KB | 2020-10-20 | CLI entry point, argument parsing |
| `Script.java` | 2150 | 76KB | 2021-06-25 | Compilation orchestrator |
| `ScriptWriter.java` | 1200 | 43KB | 2025-10-23 | **State machine parser** (recently fixed) |
| `SymbolTable.java` | 1350 | 50KB | 2020-10-20 | Property storage and schema management |
| `Merge.java` | 900 | 37KB | 2020-10-21 | Code preservation engine |

**Note:** `ScriptWriter.java` was modified on October 23, 2025 - most recent fix to address:
- Bounds checking in package name extraction
- String literal tracking for property substitution
- Comment state handling

#### XML/JSON Processing

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| `ParseXml.java` | 480 | 18KB | SAX-based XML parser |
| `ParseXmlElement.java` | 350 | 13KB | XML element representation |
| `ParseXmlSchema.java` | 950 | 38KB | Schema loader and validator |
| `XmlSchemaElement.java` | 1100 | 44KB | Schema element definition |
| `XmlSchemaFactory.java` | 320 | 13KB | Schema factory pattern |
| `XmlPersist.java` | 240 | 10KB | XML persistence utilities |
| `ParseJson.java` | 360 | 13KB | JSON parser |
| `ParseJsonSchema.java` | 85 | 3KB | JSON schema handling |
| `JsonConverter.java` | 54 | 2KB | JSON conversion |
| `JsonGenerator.java` | 75 | 3KB | JSON generation |

#### Property Management System

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| `PropertyHelper.java` | 3650 | 133KB | **Central property API** |
| `PropertyValue.java` | 2250 | 89KB | Single property value holder |
| `PropertyValues.java` | 1050 | 42KB | Property collection |
| `PropertyCollection.java` | 750 | 30KB | Property grouping/iteration |

**PropertyHelper.java methods** (key functions):
- `getString(path)` - Get string property value
- `getInt(path)` - Get integer property
- `getBoolean(path)` - Get boolean property
- `getIterator(path)` - Create collection iterator
- `setProperty(path, value)` - Set property value
- `loadFromXml(xml)` - Parse XML into properties
- `loadFromJson(json)` - Parse JSON into properties

#### Database Connectivity

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| `DbConnection.java` | 1120 | 43KB | Connection pooling, query execution |
| `DbConnectionFactory.java` | 450 | 17KB | Connection factory |
| `DbResults.java` | 340 | 13KB | Result set wrapper |

**Supported connection strings:**
```
Oracle:     jdbc:oracle:thin:@host:1521:SID
MySQL:      jdbc:mysql://host:3306/database
PostgreSQL: jdbc:postgresql://host:5432/database
SQL Server: jdbc:microsoft:sqlserver://host:1433;DatabaseName=db
```

#### JEO Framework

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| `Jeo.java` | 1680 | 63KB | Java Entity Object base class |
| `JeoFactory.java` | 450 | 17KB | JEO factory pattern |

**Jeo.java capabilities:**
- Property-based field storage
- XML serialization/deserialization
- Field validation
- Null handling
- Type conversion
- Reflection-based property access

#### Dynamic Class Loading

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| `AcClassLoader.java` | 215 | 9KB | Custom ClassLoader for dynamic loading |

**How it works:**
```java
public class AcClassLoader extends ClassLoader {
    protected Class<PENDING> findClass(String name) {
        // Convert com.example.MyClass → com/example/MyClass.class
        String path = workDir + "/" + name.replace('.', '/') + ".class";

        // Read bytecode
        byte[] classData = readFile(path);

        // Define and return class
        return defineClass(name, classData, 0, classData.length);
    }
}
```

#### Logging and Output

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| `Log.java` | 550 | 21KB | Multi-level logging (1-9) |
| `OutputManager.java` | 620 | 24KB | Output stream management |

**Log levels:**
- 1-3: Errors only
- 4-6: Warnings + errors
- 7-9: Full debug (verbose)

#### Utilities

| File | Lines | Size | Purpose |
|------|-------|------|---------|
| `ScriptHelper.java` | 850 | 35KB | Base class for all scripts |
| `ScriptHelperFactory.java` | 230 | 9KB | Script helper factory |
| `PreservedItem.java` | 420 | 17KB | Preserved code section holder |

### source/scripts/ - ARM Template Library (200+ files)

#### Package Structure

```
source/scripts/com/esarks/arm/
├── scripts/                      # Core templates
│   ├── Method.script             # Basic method template
│   ├── Service.script            # Service class template
│   ├── ReturnMethod.script       # Method with return
│   ├── ExitMethod.script         # Early exit method
│   ├── FinalReturnMethod.script  # Final return statement
│   └── IterateReplyJeo.script    # JEO collection iteration
│
├── model/jeo/                    # Entity object templates
│   ├── ProcessJeo.script         # Process entity
│   ├── RequestJeo.script         # Request entity
│   ├── ReplyJeo.script           # Reply entity
│   ├── ServiceJeo.script         # Service entity
│   └── ErrorJeo.script           # Error entity
│
├── applicationFramework/         # UI framework templates
│   ├── AppTemplate.script        # Application base
│   ├── RegionsTemplate.script    # Multi-region UI
│   ├── RegionManager.script      # Region management
│   └── Router.script             # Request routing
│
├── logging/                      # Logging templates
│   ├── ExceptionJeo.script       # Exception entity
│   ├── ExceptionRpt.script       # Exception report
│   ├── ExceptionRptController.script
│   └── ProcessRpt.script         # Process report
│
├── owl/                          # OWL framework
│   ├── JeoOwlEngine.script       # OWL engine
│   └── OwlDialog.script          # Dialog management
│
├── util/                         # Utility templates
│   ├── DateTime.script           # Date/time utilities
│   ├── FileUtil.script           # File operations
│   └── Format.script             # Formatting utilities
│
├── validation/                   # Validation framework
│   └── Table2Scenario.script     # Table validation
│
└── userGuides/                   # Documentation templates
    ├── artifactGenerators/       # Generator docs
    ├── howTo/                    # How-to guides
    ├── jac/                      # JAC documentation
    └── mic/                      # MIC documentation
```

#### ARM Scripts by Category

**Core Templates (12 files):**
- Method definitions and execution patterns
- Service request/reply patterns
- Iterator and loop constructs
- Return and exit patterns

**Model Templates (5 files):**
- JEO entity definitions
- Request/reply/service objects
- Error handling entities

**Framework Templates (15 files):**
- Application structure
- UI regions and routing
- Session management
- Authentication/authorization

**Generator Templates (source/scripts/com/esarks/jac/generators/):**
| Generator | Purpose | Output |
|-----------|---------|--------|
| `GenerateJeo.script` | Create JEO classes from XML | `.java` entity files |
| `GenerateService.script` | Create service implementations | Service classes |
| `GenerateDdl.script` | Create database DDL | `.sql` files |
| `GenerateDtable.script` | Create table wrapper classes | DAO classes |
| `GenerateFrame.script` | Create UI frames | Swing/JSP files |
| `GenerateReport.script` | Create report templates | Report classes |

**Runtime Scripts (source/scripts/com/esarks/jac/jrun/):**
| Script | Purpose |
|--------|---------|
| `Jrun.script` | Execute .jrun files |
| `Job.script` | Job execution framework |
| `TestDbConnection.script` | Database connection tester |

**Make Scripts (source/scripts/com/esarks/jac/make/):**
| Script | Purpose |
|--------|---------|
| `MakeAll.script` | Build orchestrator for full system |

---

## phase1Classes/ - Bootstrap Compiler

### Purpose

Contains the **minimal set of compiled classes** needed to bootstrap the JAC compiler. These classes can compile themselves and the rest of the JAC system.

### Contents (20 classes, ~500KB)

```
phase1Classes/com/esarks/
├── jac/                          # Core JAC compiler
│   ├── jac.class                 # CLI entry point
│   ├── Script.class              # Compilation orchestrator
│   ├── ScriptWriter.class        # Transformation engine
│   ├── SymbolTable.class         # Symbol management
│   ├── ParseXml.class            # XML parser
│   ├── ParseXmlSchema.class      # Schema loader
│   ├── ParseXmlElement.class     # XML element
│   ├── XmlSchemaElement.class    # Schema element
│   ├── XmlSchemaFactory.class    # Schema factory
│   ├── PropertyHelper.class      # Property API
│   ├── PropertyValue.class       # Property value
│   ├── PropertyValues.class      # Property collection
│   ├── PropertyCollection.class  # Property grouping
│   ├── OutputManager.class       # Output management
│   ├── Log.class                 # Logging
│   ├── ScriptHelper.class        # Script base class
│   ├── ScriptHelperFactory.class # Helper factory
│   ├── AcClassLoader.class       # Class loader
│   └── Merge.class               # Code merger
│
├── arm/model/jeo/                # Basic JEO support
│   ├── ProcessJeo.class
│   ├── RequestJeo.class
│   ├── ReplyJeo.class
│   └── ServiceJeo.class
│
└── mic/                          # MIC framework
    └── [MIC core classes]
```

### Build Command (phase1.bat)

```batch
# Compile core JAC classes using only JDK
javac -cp "lib\xerces\xercesImpl.jar;lib\xerces\xml-apis.jar;lib\crimson\crimson.jar;lib\mic\mic.jar" ^
      -d phase1Classes ^
      source\java\com\esarks\jac\*.java
```

**Dependencies:**
- PASS JDK only (no JAC required)
- PASS Xerces for XML
- PASS Crimson for legacy XML
- PASS MIC for model import

**Output:** Minimal JAC compiler that can build phase2

---

## phase2Classes/ - Full Build Classes

### Purpose

Contains **all ARM framework classes** compiled using the phase1 compiler. This includes all templates, utilities, and framework components.

### Contents (100+ classes, ~2MB)

```
phase2Classes/com/esarks/
├── arm/
│   ├── applicationFramework/     # UI framework (10 classes)
│   │   ├── AppTemplate.class
│   │   ├── RegionsTemplate.class
│   │   ├── RegionManager.class
│   │   └── Router.class
│   │
│   ├── logging/                  # Logging framework (8 classes)
│   │   ├── ExceptionJeo.class
│   │   ├── ExceptionRpt.class
│   │   ├── ExceptionRptController.class
│   │   └── ProcessRpt.class
│   │
│   ├── model/jeo/                # Entity objects (5 classes)
│   │   ├── ErrorJeo.class
│   │   ├── ProcessJeo.class
│   │   ├── RequestJeo.class
│   │   ├── ReplyJeo.class
│   │   └── ServiceJeo.class
│   │
│   ├── owl/                      # OWL framework (5 classes)
│   │   ├── JeoOwlEngine.class
│   │   └── OwlDialog.class
│   │
│   ├── scripts/                  # Script templates (12 classes)
│   │   ├── Method.class
│   │   ├── Service.class
│   │   ├── ReturnMethod.class
│   │   ├── ExitMethod.class
│   │   ├── FinalReturnMethod.class
│   │   ├── IterateReplyJeo.class
│   │   └── GetEffectiveDate.class
│   │
│   ├── util/                     # Utilities (6 classes)
│   │   ├── DateTime.class
│   │   ├── FileUtil.class
│   │   ├── FileUtil$StreamGobbler.class
│   │   └── Format.class
│   │
│   └── validation/               # Validation (3 classes)
│       └── Table2Scenario.class
│
└── jac/
    ├── generators/               # Code generators (6 classes)
    │   ├── GenerateDdl.class
    │   ├── GenerateDtable.class
    │   ├── GenerateFrame.class
    │   ├── GenerateJeo.class
    │   ├── GenerateReport.class
    │   └── GenerateService.class
    │
    ├── jrun/                     # Runtime system (3 classes)
    │   ├── Jrun.class
    │   ├── Job.class
    │   └── TestDbConnection.class
    │
    └── make/                     # Build system (1 class)
        └── MakeAll.class
```

### Build Command (phase2.bat)

```batch
# Use phase1 JAC compiler to build ARM scripts
jac.bat -context jac -script com.esarks.arm.applicationFramework.AppTemplate
jac.bat -context jac -script com.esarks.arm.logging.ExceptionRpt
jac.bat -context jac -script com.esarks.arm.model.jeo.ProcessJeo
# ... (builds all ARM scripts)
```

**Dependencies:**
- PASS phase1Classes (JAC compiler)
- PASS All lib/*.jar files
- PASS source/scripts/ (template sources)

**Output:** Complete ARM framework + generators

---

## classes/ - Runtime Compiled Classes

### Purpose

Contains **application-specific classes** compiled at runtime from user scripts. This is the `$JAC_WORK` directory where all application `.class` files are generated.

### Typical Contents

```
classes/
├── com/
│   ├── allowancealley/           # User applications
│   │   └── JAC_Patterns/
│   │       └── ui_clients/
│   │           ├── simple/
│   │           │   └── SimpleServer.class
│   │           └── robust/
│   │               └── DataEntry.class
│   │
│   ├── esarks/                   # ARM compiled templates
│   │   └── arm/
│   │       ├── applicationFramework/
│   │       ├── logging/
│   │       ├── model/jeo/
│   │       ├── owl/
│   │       ├── scripts/
│   │       ├── util/
│   │       └── validation/
│   │
│   └── example/                  # Example applications
│       └── HelloWorld.class
│
└── paul/                         # User workspace
    └── HelloWorld.class
```

### Accompanying Files

For each `.class` file, JAC generates:

| File Extension | Purpose | Example |
|----------------|---------|---------|
| `.java` | Generated Java source | `HelloWorld.java` |
| `.class` | Compiled bytecode | `HelloWorld.class` |
| `.txt` | Transformation log | `HelloWorld.txt` |
| `.err` | Compilation errors | `HelloWorld.err` (if errors) |

**Example - HelloWorld compilation artifacts:**
```
classes/paul/
├── HelloWorld.java               # Generated from HelloWorld.script
├── HelloWorld.class              # Compiled from HelloWorld.java
├── HelloWorld.txt                # ScriptWriter transformation log
└── HelloWorld.err                # javac errors (if any)
```

---

## conf/ - Configuration Files

### Inventory (8 files)

| File | Size | Purpose |
|------|------|---------|
| `jac.make` | 2KB | **Default JAC context** |
| `mic.make` | 2KB | MIC framework context |
| `jeo.make` | 1KB | JEO entity context |
| `java.make` | 1KB | Standard Java context |
| `micImport.script` | 3KB | MIC import utilities |
| `micImportView.script` | 2KB | MIC import view |
| `micModel.make` | 1KB | MIC model context |
| `ScriptImport.script` | 2KB | Standard imports template |

### jac.make (Full Content)

```
# JAC Default Context
# Used when no other context is specified

# Base class for all JAC scripts
extends com.esarks.jac.ScriptHelper

# Standard imports
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]ScriptImport.script

# Prefix (class preamble)
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]ScriptPrefix.script

# Main script content
source [$jac:path:scripts][$jac:fileSeparator][$jac:script:path][$jac:fileSeparator][$jac:script].script

# Postfix (class closing)
source [$jac:path:home][$jac:fileSeparator]conf[$jac:fileSeparator]ScriptPostfix.script

# Additional imports from directives
<#import#>

# Additional variables from directives
<#var#>
```

### ScriptImport.script (Full Content)

```java
package <#[$jac:script:package]#>;

// Standard Java imports
import java.util.*;
import java.lang.reflect.*;
import java.io.*;
import java.text.*;
import java.sql.*;

// Servlet imports (if applicable)
import javax.servlet.*;
import javax.servlet.http.*;

// JAC framework
import com.esarks.jac.*;

// MIC framework
import com.esarks.mic.*;

// ARM framework
import com.esarks.arm.*;
import com.esarks.arm.model.jeo.*;

// Additional imports from .make file
<#import#>
```

**Property Substitution:**
- `<#[$jac:script:package]#>` → Actual package name (e.g., `com.example`)
- `<#import#>` → Replaced with imports from `.make` file

---

## JDK Versions

### Three JDK Installations

| JDK | Version | Size | Status | Purpose |
|-----|---------|------|--------|---------|
| `jdk-13.0.1/` | 13.0.1 | ~400MB | Legacy | Backward compatibility |
| `jdk-23/` | 23 | ~500MB | Stable | Testing/migration |
| `jdk-24/` | 24 | ~500MB | PASS **Current** | Active development |

### JDK-24 Contents

```
jdk-24/
├── bin/                          # Executables
│   ├── java.exe                  # Java runtime
│   ├── javac.exe                 # Java compiler
│   ├── jar.exe                   # JAR tool
│   ├── javadoc.exe               # Documentation generator
│   └── [50+ other tools]
│
├── conf/                         # Configuration
│   ├── management/               # JMX configuration
│   └── security/                 # Security policies
│       ├── policy/
│       │   ├── limited/
│       │   └── unlimited/
│       ├── java.policy
│       └── java.security
│
├── include/                      # JNI headers
│   ├── win32/                    # Windows-specific
│   │   └── bridge/
│   ├── jni.h
│   ├── jvmti.h
│   └── [Additional headers]
│
├── jmods/                        # Java modules
│   ├── java.base.jmod            # Core Java
│   ├── java.desktop.jmod         # AWT/Swing
│   ├── java.sql.jmod             # JDBC
│   └── [90+ module files]
│
├── legal/                        # License files
│   ├── java.base/
│   ├── java.desktop/
│   └── [Legal notices for all modules]
│
└── lib/                          # Runtime libraries
    ├── modules                   # Compiled module image
    ├── jrt-fs.jar                # Java runtime filesystem
    ├── server/                   # Server VM
    │   └── jvm.dll
    ├── jfr/                      # Java Flight Recorder
    └── security/                 # Security providers
```

### Why Three JDKs?

1. **JDK 13** - Legacy applications built years ago
2. **JDK 23** - Transition/testing environment
3. **JDK 24** - Latest features and performance

**Active Selection:**
- `jac.bat` hardcodes: `jdk-24\bin\java`
- `Job.bat` uses environment variable
- Can be changed via `JAVA_HOME`

---

## File Size Summary

### By Category

| Category | File Count | Total Size | Average |
|----------|------------|------------|---------|
| **JARs (lib/)** | ~80 | 55MB | 687KB |
| **JDK 24** | ~2000 | 500MB | 250KB |
| **Source Java** | 35 | 1.1MB | 31KB |
| **Source Scripts** | 200+ | 5MB | 25KB |
| **phase1Classes** | 20 | 500KB | 25KB |
| **phase2Classes** | 100+ | 2MB | 20KB |
| **classes (runtime)** | Varies | Varies | - |
| **Batch files** | 28 | 100KB | 3.5KB |
| **Conf files** | 8 | 20KB | 2.5KB |

### Total jacBuild24/ Size

**Without JDKs:** ~63MB
**With JDK 24:** ~563MB
**With all JDKs:** ~1.5GB

### Largest Components

1. JDK 24 + modules: 500MB (35%)
2. JDK 23 + modules: 500MB (35%)
3. JDK 13 + modules: 400MB (28%)
4. lib/soap/: 7.8MB (0.5%)
5. lib/oracle/: 5.7MB (0.4%)
6. source/scripts/: 5MB (0.3%)

---

## Build Process Flowchart

```
┌────────────────────────────────────────────────────────────┐
│ JAC Build System - Complete Flow                          │
└────────────────────────────────────────────────────────────┘

Step 1: Bootstrap (phase1.bat)
────────────────────────────────────────
Source Files (35 .java files)
    │
    ├─→ javac (JDK 24)
    │   ├─ -cp lib/xerces/*.jar
    │   └─ -d phase1Classes/
    │
    └─→ phase1Classes/ (20 .class files)
         ├─ jac.class ✓
         ├─ Script.class ✓
         ├─ ScriptWriter.class ✓
         └─ [17 more classes] ✓

Step 2: Full Build (phase2.bat)
────────────────────────────────────────
ARM Template Scripts (200+ .script files)
    │
    ├─→ jac.bat (uses phase1Classes)
    │   ├─ Compiles each .script → .java
    │   ├─ Compiles each .java → .class
    │   └─ Uses conf/*.make for context
    │
    └─→ phase2Classes/ (100+ .class files)
         ├─ AppTemplate.class ✓
         ├─ ProcessJeo.class ✓
         ├─ GenerateJeo.class ✓
         └─ [97 more classes] ✓

Step 3: Application Build (runtime)
────────────────────────────────────────
User Script (MyApp.script)
    │
    ├─→ jac.bat MyApp.script
    │   ├─ Load schema from <& directives
    │   ├─ Populate SymbolTable
    │   ├─ ScriptWriter transforms → .java
    │   ├─ javac compiles → .class
    │   └─ Store in classes/
    │
    └─→ classes/MyApp.class ✓

Step 4: Execution (runtime)
────────────────────────────────────────
Execution Request (MyApp.jrun or jac.bat)
    │
    ├─→ AcClassLoader
    │   ├─ Load classes/MyApp.class
    │   ├─ Create instance via reflection
    │   └─ Invoke execute() method
    │
    └─→ Application Running ✓
```

---

## Summary Statistics

### JAC Compiler Metrics

| Metric | Value |
|--------|-------|
| **Total source files** | 235+ |
| **Core compiler files** | 35 |
| **ARM template files** | 200+ |
| **Total lines of code** | ~50,000+ |
| **Supported file types** | .script, .make, .jrun, .xml, .json |
| **Batch script files** | 28 |
| **Configuration files** | 8 |
| **Library JARs** | ~80 |
| **Total library size** | 55MB |
| **Bootstrap classes** | 20 |
| **Framework classes** | 100+ |

### Build System Capabilities

PASS **Supports:**
- Mixed Java/XML/JAC syntax
- Dynamic compilation (JIT)
- Code preservation during regeneration
- Multiple build contexts
- Incremental builds
- Database connectivity (4 vendors)
- Web server (Jetty 12.1.2)
- SOAP/Web services
- JSON processing
- Template-based generation

PASS **Generates:**
- JEO entity classes
- Service implementations
- Database DDL
- UI components
- Reports
- Test scaffolding

---

## File Reference Quick Lookup

### "Where do I find...PENDING"

| What | Location |
|------|----------|
| **JAC compiler source** | `source/java/com/esarks/jac/` |
| **ARM templates** | `source/scripts/com/esarks/arm/` |
| **Bootstrap compiler** | `phase1Classes/com/esarks/jac/` |
| **Full framework** | `phase2Classes/` |
| **Compiled user classes** | `classes/` |
| **Batch execution scripts** | `bin/*.bat` |
| **Configuration** | `conf/*.make` |
| **XML parsing** | `lib/xerces/` |
| **Database drivers** | `lib/oracle/`, `lib/mysql/`, etc. |
| **Web server** | `lib/jetty/` |
| **JSON libraries** | `lib/gson/` |
| **SOAP libraries** | `lib/soap/` |
| **JDK** | `jdk-24/` (current) |
| **Build logs** | `logs/` |
| **License** | `license.xml` |

### "What does this file doPENDING"

| File | Purpose |
|------|---------|
| `jac.bat` | Compile JAC scripts |
| `Job.bat` | Execute with full classpath |
| `Jrun2.bat` | Run .jrun files |
| `phase1.bat` | Build bootstrap compiler |
| `phase2.bat` | Build ARM framework |
| `allPhases.bat` | Complete rebuild |
| `jac.make` | Default build context |
| `ScriptImport.script` | Standard imports |
| `jac.jar` | Compiled JAC compiler |
| `mic.jar` | MIC framework |
 
---

**Document End**

**Related Documents:**
- [build-system.md](build-system.html) - Conceptual overview and workflows
- [How-to-Debug.md](How-to-Debug.html) - Debugging techniques
- [AllPhases.md](AllPhases.html) - Phase1 and Phase2 details

**Last Updated:** October 23, 2025
**Maintainer:** Claude Code
**License:** Licensed to Architects of Software Design, Corp.
