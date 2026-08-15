---
title: "Block Diagram"
---

# JAC Architecture - System Block Diagram

## Complete System Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           USER / DEVELOPER LAYER                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │
│  │ .jrun Files  │  │ .script Files│  │  .xml Files  │  │ .json Files  │   │
│  │              │  │              │  │              │  │              │   │
│  │ Entry Points │  │ JAC Scripts  │  │  Config &    │  │  Data Files  │   │
│  │ & Execution  │  │ Mixed Syntax │  │  Schemas     │  │              │   │
│  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘   │
│         │                 │                 │                 │            │
└─────────┼─────────────────┼─────────────────┼─────────────────┼────────────┘
          │                 │                 │                 │
          ▼                 ▼                 ▼                 ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          JAC RUNTIME LAYER                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────────┐    │
│  │                         Jrun.bat / Job.bat                          │    │
│  │  ┌──────────────────────────────────────────────────────────────┐  │    │
│  │  │                    com.esarks.jac.jac                         │  │    │
│  │  │  • Main entry point                                           │  │    │
│  │  │  • Command-line interface                                     │  │    │
│  │  │  • Bootstrap and initialization                               │  │    │
│  │  └──────────────────────┬───────────────────────────────────────┘  │    │
│  └─────────────────────────┼──────────────────────────────────────────┘    │
│                            │                                                │
│         ┌──────────────────┼──────────────────┐                            │
│         │                  │                  │                            │
│         ▼                  ▼                  ▼                            │
│  ┌─────────────┐   ┌──────────────┐   ┌─────────────┐                     │
│  │ Jrun.class  │   │  Job.class   │   │ jac.class   │                     │
│  │             │   │              │   │             │                     │
│  │ .jrun File  │   │ Job Executor │   │ Main Engine │                     │
│  │ Parser      │   │ Orchestrator │   │ Controller  │                     │
│  └─────┬───────┘   └──────┬───────┘   └──────┬──────┘                     │
│        │                  │                  │                            │
└────────┼──────────────────┼──────────────────┼────────────────────────────┘
         │                  │                  │
         ▼                  ▼                  ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                      JAC COMPILATION ENGINE                                  │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                         Script.java                                   │  │
│  │  • Compilation orchestrator                                           │  │
│  │  • Class loading and caching                                          │  │
│  │  • Hot reload / JIT compilation                                       │  │
│  └──────────────────────┬───────────────────────────────────────────────┘  │
│                         │                                                   │
│         ┌───────────────┼────────────────┐                                 │
│         │               │                │                                 │
│         ▼               ▼                ▼                                 │
│  ┌─────────────┐ ┌─────────────┐ ┌──────────────┐                         │
│  │ScriptWriter │ │  ParseXml   │ │ PropertyValue│                         │
│  │             │ │             │ │              │                         │
│  │ 13-State    │ │ SAX Parser  │ │ Hierarchical │                         │
│  │ Parser FSM  │ │ Schema Val. │ │ Properties   │                         │
│  └─────┬───────┘ └─────┬───────┘ └──────┬───────┘                         │
│        │               │                │                                 │
│        └───────────────┼────────────────┘                                 │
│                        ▼                                                   │
│  ┌──────────────────────────────────────────────────────────────────┐    │
│  │                  TEMPLATE PROCESSING                              │    │
│  │                                                                    │    │
│  │  Input:  <& Method &>  <%  Java  %>  <![property]!>               │    │
│  │                                                                    │    │
│  │  Output: Pure Java Source Code                                    │    │
│  └──────────────────────┬───────────────────────────────────────────┘    │
│                         │                                                   │
└─────────────────────────┼───────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    JAVA COMPILATION LAYER                                    │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                      JDK 24 Compiler (javac)                          │  │
│  │  • Dynamic compilation                                                │  │
│  │  • Bytecode generation                                                │  │
│  │  • .java → .class                                                     │  │
│  └──────────────────────┬───────────────────────────────────────────────┘  │
│                         │                                                   │
│                         ▼                                                   │
│  ┌──────────────────────────────────────────────────────────────────────┐  │
│  │                    AcClassLoader.java                                 │  │
│  │  • Custom class loader                                                │  │
│  │  • Dynamic class loading                                              │  │
│  │  • Runtime class instantiation                                        │  │
│  └──────────────────────┬───────────────────────────────────────────────┘  │
│                         │                                                   │
└─────────────────────────┼───────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                        EXECUTION RUNTIME                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌────────────────────────────────────────────────────────────────┐        │
│  │                      JVM (Java 24)                              │        │
│  │  • Method execution                                             │        │
│  │  • Memory management                                            │        │
│  │  • Thread management                                            │        │
│  └────────────────────────────────────────────────────────────────┘        │
│                                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │   JAC.jar   │  │   MIC.jar   │  │  Jetty 12   │  │   Other     │      │
│  │             │  │             │  │             │  │   Libraries │      │
│  │ 26 classes  │  │ 24 classes  │  │ 12 JARs     │  │             │      │
│  │ 177 KB      │  │ 209 KB      │  │ Web Server  │  │ Xerces, etc │      │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘      │
│                                                                              │
└──────────────────────────────────────┬──────────────────────────────────────┘
                                       │
                                       ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                     INTEGRATION & SERVICES LAYER                             │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐      │
│  │  Database   │  │   HTTP      │  │    JSON     │  │     XML     │      │
│  │  (JDBC)     │  │   Server    │  │   Parsing   │  │   Parsing   │      │
│  │             │  │             │  │             │  │             │      │
│  │ PostgreSQL  │  │ Jetty 12    │  │ Gson        │  │ Xerces      │      │
│  │ MySQL       │  │ Jakarta EE  │  │ ParseJson   │  │ ParseXml    │      │
│  │ Oracle      │  │ Servlets    │  │             │  │             │      │
│  └─────────────┘  └─────────────┘  └─────────────┘  └─────────────┘      │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow: From .jrun to Execution

```
┌────────────┐
│ User runs  │
│ .jrun file │
└─────┬──────┘
      │
      ▼
┌──────────────────────────────────────────────────────────┐
│ Step 1: Jrun.bat launches Job.bat                        │
│   → Sets environment (JAC_BASE, JAVA_HOME, classpath)    │
│   → Executes: java -cp ... com.esarks.jac.jac            │
└─────┬────────────────────────────────────────────────────┘
      │
      ▼
┌──────────────────────────────────────────────────────────┐
│ Step 2: jac.class bootstrap                              │
│   → Parses command line arguments                        │
│   → Initializes SymbolTable                              │
│   → Creates Script instance                              │
└─────┬────────────────────────────────────────────────────┘
      │
      ▼
┌──────────────────────────────────────────────────────────┐
│ Step 3: Jrun.class reads .jrun XML                       │
│   → Extracts: <jacrun script="..." method="..." />       │
│   → Identifies target script class                       │
│   → Identifies method to execute                         │
└─────┬────────────────────────────────────────────────────┘
      │
      ▼
┌──────────────────────────────────────────────────────────┐
│ Step 4: Script.java checks for existing .class           │
│   → Look in: classes/com/esarks/examples/...             │
│   → If .class missing OR .script newer → COMPILE         │
│   → If .class exists and current → SKIP                  │
└─────┬────────────────────────────────────────────────────┘
      │
      ▼ (if compile needed)
┌──────────────────────────────────────────────────────────┐
│ Step 5: ScriptWriter.java processes .script file         │
│   → State Machine Parser (13 states)                     │
│   → Transform JAC syntax to Java:                        │
│       <& Method &>          → method signature           │
│       <%  code  %>          → Java code                  │
│       <!%variable!>         → out.print(variable)        │
│       <![property]!>        → property.getValue()        │
│   → Generate pure .java file in classes/...              │
└─────┬────────────────────────────────────────────────────┘
      │
      ▼
┌──────────────────────────────────────────────────────────┐
│ Step 6: javac compiles .java → .class                    │
│   → JDK 24 compiler                                      │
│   → Output: classes/com/esarks/examples/.../Script.class │
│   → Compilation errors shown if any                      │
└─────┬────────────────────────────────────────────────────┘
      │
      ▼
┌──────────────────────────────────────────────────────────┐
│ Step 7: AcClassLoader dynamically loads .class           │
│   → Load from classes directory                          │
│   → Instantiate class                                    │
│   → Prepare for method invocation                        │
└─────┬────────────────────────────────────────────────────┘
      │
      ▼
┌──────────────────────────────────────────────────────────┐
│ Step 8: Method execution via reflection                  │
│   → invoke: object.execute(args...)                      │
│   → Output sent to stdout                                │
│   → Logging to logs/timestamp.log                        │
└─────┬────────────────────────────────────────────────────┘
      │
      ▼
┌──────────────────────────────────────────────────────────┐
│ Step 9: FinalReturnMethod cleanup                        │
│   → Close resources                                      │
│   → Flush output                                         │
│   → Exit cleanly                                         │
└──────────────────────────────────────────────────────────┘
```

---

## Key JAC Components (jac.jar - 26 classes)

```
┌──────────────────────────────────────────────────────────┐
│                    CORE ENGINE                            │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  jac.java               Main bootstrap & CLI             │
│  Script.java            Compilation orchestrator         │
│  ScriptWriter.java      Template parser & transformer    │
│  SymbolTable.java       Global context & state          │
│                                                           │
├──────────────────────────────────────────────────────────┤
│                   XML PROCESSING                          │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  ParseXml.java          SAX-based XML parser             │
│  ParseXmlSchema.java    XML schema validation            │
│  ParseXmlElement.java   Element handling                 │
│  XmlPersist.java        XML serialization                │
│  XmlSchemaElement.java  Schema elements                  │
│  XmlSchemaFactory.java  Schema creation                  │
│                                                           │
├──────────────────────────────────────────────────────────┤
│                  JSON PROCESSING                          │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  ParseJson.java         JSON parser                      │
│  ParseJsonSchema.java   JSON schema validation           │
│  JsonGenerator.java     JSON generation                  │
│  JsonConverter.java     XML ↔ JSON conversion            │
│                                                           │
├──────────────────────────────────────────────────────────┤
│                 PROPERTY SYSTEM                           │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  PropertyValue.java     Single property                  │
│  PropertyValues.java    Property collection              │
│  PropertyCollection.java Hierarchical properties         │
│  PropertyHelper.java    Property utilities               │
│                                                           │
├──────────────────────────────────────────────────────────┤
│                  DATABASE ACCESS                          │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  DbConnection.java      Connection wrapper               │
│  DbConnectionFactory.java Pool management                │
│  DbResults.java         Result set handling              │
│                                                           │
├──────────────────────────────────────────────────────────┤
│                    UTILITIES                              │
├──────────────────────────────────────────────────────────┤
│                                                           │
│  Log.java               Multi-level logging              │
│  OutputManager.java     Output buffering & filtering     │
│  Merge.java             Code merging & preservation      │
│  PreservedItem.java     Code section preservation        │
│  AcClassLoader.java     Custom class loading             │
│  Jeo.java               Java Entity Object base          │
│  JeoFactory.java        Object factory                   │
│  ScriptHelper.java      Script utilities                 │
│  ScriptHelperFactory.java Helper creation                │
│                                                           │
└──────────────────────────────────────────────────────────┘
```

---

## Template Processing State Machine

```
ScriptWriter.java 13-State Parser FSM:

     START
       │
       ▼
   ┌────────┐
   │ STATE  │────────────────┐
   │   0    │  Normal Java   │
   │        │  Code          │
   └───┬────┘                │
       │                     │
       │ <&                  │
       ▼                     │
   ┌────────┐                │
   │ STATE  │  JAC Template  │
   │   1    │  Include       │
   └───┬────┘                │
       │                     │
       │ &>                  │
       ▼                     │
   ┌────────┐                │
   │ STATE  │  Template      │
   │   2    │  Processing    │
   └───┬────┘                │
       │                     │
       │ %>                  │
       ▼                     │
   ┌────────┐                │
   │ STATE  │  Output Text   │
   │   3    │  Block         │
   └───┬────┘                │
       │                     │
       │ <%                  │
       ▼                     │
   ┌────────┐                │
   │ STATE  │  Java Code     │
   │   4    │  Block         │
   └───┬────┘                │
       │                     │
       │ <![                 │
       ▼                     │
   ┌────────┐                │
   │ STATE  │  Property      │
   │   5    │  Value Access  │
   └───┬────┘                │
       │                     │
       │ ]!>                 │
       ▼                     │
   ┌────────┐                │
   │ STATE  │  Property      │
   │   6    │  Object Access │
   └───┬────┘                │
       │                     │
       │ <!%                 │
       ▼                     │
   ┌────────┐                │
   │ STATE  │  Variable      │
   │   7    │  Output        │
   └───┬────┘                │
       │                     │
       │ !>                  │
       ▼                     │
   ┌────────┐                │
   │ STATE  │  Iterator      │
   │   8    │  Processing    │
   └───┬────┘                │
       │                     │
       │... (States 9-12)    │
       │                     │
       └─────────────────────┘
```

---

## Classpath & Library Dependencies

```
┌─────────────────────────────────────────────────────────┐
│                    CLASSPATH LAYOUT                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  JAC_BASE/                                               │
│  ├── classes/                Runtime compiled .class    │
│  ├── lib/                                                │
│  │   ├── jac/jac.jar        Core JAC (177 KB)          │
│  │   ├── mic/mic.jar        MIC Framework (209 KB)     │
│  │   ├── jetty/             Jetty 12 (12 JARs)         │
│  │   │   ├── jetty-server-12.1.2.jar                    │
│  │   │   ├── jetty-ee10-servlet-12.1.2.jar              │
│  │   │   └── jakarta.servlet-api-6.0.0.jar              │
│  │   ├── crimson/           XML Parser                  │
│  │   ├── postgresql/        PostgreSQL JDBC             │
│  │   ├── gson/              Google JSON                 │
│  │   ├── json-simple/       Simple JSON                 │
│  │   └── ... (70+ JARs total)                           │
│  ├── app/                   .script and .jrun files     │
│  ├── logs/                  Execution logs              │
│  └── jdk-24/                Bundled JDK                 │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

## Execution Flow Timeline

```
Time    Component           Action
────────────────────────────────────────────────────────────
0 ms    User                Double-click .jrun file
        │
5 ms    Windows             Launch Jrun.bat
        ├─> SetJob.bat      Set environment
        │
10 ms   Jrun.bat            Execute: java com.esarks.jac.jac
        │
50 ms   jac.class           Initialize JVM, load classes
        │
100 ms  Jrun.class          Parse .jrun XML file
        │
150 ms  Script.class        Check if compilation needed
        │
        ├─ If .class exists and current ─┐
        │                                 │
        ├─ If .class missing ─────────────┼─> ScriptWriter
        │                                 │   Parse .script
200 ms  │                                 │   Generate .java
        │                                 │
500 ms  │                                 └─> javac
        │                                     Compile .java
        │
2000 ms └─────────────────────────────────> AcClassLoader
                                             Load .class
                                             │
2100 ms                                      ├─> Reflection
                                             │   invoke execute()
                                             │
2150 ms                                      └─> Execute code
                                                 │
                                                 ├─> Database queries
                                                 ├─> JSON parsing
                                                 ├─> Output generation
                                                 │
5000 ms                                          └─> FinalReturn
                                                     Complete!
```

---

## Memory & Performance

```
┌─────────────────────────────────────────────────────────┐
│                  MEMORY ALLOCATION                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  JVM Heap:       -Xms64m -Xmx512m                        │
│                                                          │
│  SymbolTable:    Global state & properties              │
│  ClassCache:     Loaded .class files                    │
│  OutputBuffer:   Generated output text                  │
│  ConnectionPool: Database connections                   │
│                                                          │
├─────────────────────────────────────────────────────────┤
│                  PERFORMANCE NOTES                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  • JIT compilation: ~100ms for simple scripts           │
│  • First run: Slower (compilation)                      │
│  • Subsequent runs: Fast (.class cached)                │
│  • Hot reload: Automatic on .script change              │
│  • Connection pooling: Reuses DB connections            │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

---

**This architecture has been refined over 20+ years and is production-proven!**

**Version:** JAC2024
**Last Updated:** October 2025
**Status:** Active Development
