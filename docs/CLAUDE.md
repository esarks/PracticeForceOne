---
title: "CLAUDE"
---

# JAC (Java Architects Companion) - Dynamic Code Generation Tool

JAC is a sophisticated Java-based tool that provides extensive XML capabilities for code generation and dynamic compilation. It functions as both a template engine and a compiler that embeds XML components into Java script files, enabling dynamic compilation and execution.

## Overview

JAC transforms custom script files (`.script`) containing mixed Java code, XML, and special JAC syntax into standard Java classes that are compiled and executed dynamically. This system bridges XML configuration with Java code execution, making it ideal for applications requiring dynamic content generation, configuration-driven behavior, and template-based code generation.

## Current Build Status PASS

**Last Successful Build:** October 20, 2025
- PASS **JDK 24 Support** - Clean compilation with latest Java features
- PASS **Jakarta EE 10** - Modern servlet API (jakarta.servlet.*)
- PASS **Jetty 12.1.2** - Latest Eclipse Jetty with HTTP/2 support
- PASS **JSON Support** - Native JSON parsing, generation, and schema validation
- PASS **Zero Compilation Errors** - All build issues resolved
- PASS **Deprecation Warnings Suppressed** - Java 24 compatibility with @SuppressWarnings

**Build Metrics:**
- Build Time: ~25 seconds (full clean build via `allphases.bat`)
- JAR Sizes: `jac.jar` (191 KB), `mic.jar` (199 KB)
- Files Compiled: 55 Java source files (Phase 1) + 37 script files (Phase 2)

## Core Architecture

### Key Components

- **JAC Compiler** (`jac.java`): Command-line interface and bootstrap class
- **Script Engine** (`Script.java`): Central compilation orchestrator managing the full lifecycle from source to execution
- **Script Writer** (`ScriptWriter.java`): Line-by-line transformation engine using state machine parsing
- **XML Processing** (`ParseXml.java`, `ParseXmlSchema.java`): SAX-based XML parsing and schema validation
- **Code Merger** (`Merge.java`): Preserves custom code sections during template regeneration

### Project Structure

```
jac2024/
├── jacBuild24/              # Main build system (latest version)
│   ├── bin/                 # Executable binaries
│   ├── classes/             # Compiled Java classes
│   ├── lib/                 # JAR dependencies (Xerces, Jetty, JDBC drivers, etc.)
│   ├── source/java/         # JAC compiler source code
│   └── jdk-24/              # Bundled JDK
├── app/                     # Application templates and examples
│   ├── ParseXML/            # XML parsing examples
│   ├── paul/                # User application examples
│   └── scripts_migrate/     # Migration utilities
└── classes/                 # Additional compiled classes
```

## Compilation Process

1. **Script Parsing**: Reads `.script` files with mixed Java/XML/JAC syntax
2. **Symbol Resolution**: Loads XML schemas to populate symbol table
3. **Template Processing**: Transforms JAC syntax into standard Java code
4. **Java Generation**: Produces pure Java source files
5. **Dynamic Compilation**: Compiles Java files to bytecode
6. **Runtime Execution**: Dynamically loads and executes compiled classes

## XML Integration Features

### Embedded XML Syntax
```
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document></document>
   </method>
&>
```

### Property References
```
<![property.path]!>     // Direct value substitution
<!property.path!>       // Property access object
```

### Iterator Processing
```
<!property.collection!>& {
  // Loop through XML elements
}
```

### Schema Definitions
XML schemas define structure and validation rules:
```xml
<schemas>
  <schema name='root' extendsKey='extends'>
    <element name='loc' type='string' truncateEol='true'>
      <element name='script' type='string' truncateEol='true'/>
    </element>
  </schema>
</schemas>
```

## JSON Integration Features (New in 2025)

JAC now provides native JSON support alongside XML:

### JSON Parsing
```java
parseJson("data/users");  // Parse JSON file
String name = <![json:user:name]!>;  // Access JSON properties
```

### JSON Generation
```java
String json = toJson("json:product");  // Generate JSON from properties
String json = objectToJson(myObject);  // Serialize Java objects to JSON
```

### JSON Schema Validation
```java
parseJsonSchema("schemas/user");  // Load JSON schema
parseJson("data/user");  // Validates against loaded schema
```

### JSON↔XML Conversion
```java
String xml = jsonToXml(jsonString);   // Convert JSON to XML
String json = xmlToJson(xmlString);   // Convert XML to JSON
```

### Property Navigation
JSON properties use the same familiar syntax as XML:
```
<!json:users:user!>!resetIterator();
while (<!json:users:user!>!next()) {
  String name = <![json:users:user:name]!>;
}
```

## Key Features

- **Template Engine**: Transforms mixed-syntax files into pure Java
- **XML & JSON Processing**: Native XML and JSON parsing, generation, and schema validation
- **Dynamic Compilation**: Runtime Java compilation and class loading
- **Code Preservation**: Maintains custom code sections during regeneration using section markers
- **Property System**: Hierarchical property management with XML/JSON backing
- **Web Server Integration**: Embedded Eclipse Jetty 12.1.2 with Jakarta EE 10 support
- **Multi-Version Support**: Multiple build versions (jacBuild8, jacBuild13, jacBuild23, jacBuild24)

## Dependencies

JAC includes extensive library support:
- **XML Processing**: Xerces, Xalan, Crimson
- **JSON Processing**: Gson 2.8.6 (native JSON parsing, generation, schema validation)
- **Database Connectivity**: Oracle, MySQL, PostgreSQL, SQL Server JDBC drivers
- **Web Services**: Axis SOAP, JAXRPC, SAAJ
- **Application Servers**: Eclipse Jetty 12.1.2 (Jakarta EE 10, Servlet 6.0), Tomcat servlets
- **Logging**: SLF4J 2.0.16, Log4j
- **Utilities**: Apache Commons

## Configuration System

JAC uses two distinct configuration folders:

### conf/ - Build Templates (Compile-Time)
- **22 template files** controlling code generation
- **Make files**: jac.make, mic.make, micScriptComponent.make, etc.
- **Import scripts**: ScriptImport.script (basic) vs micImport.script (Jakarta, JSON)
- **Purpose**: Define how .script files become Java classes
- **See**: [jac2024-conf.md](jac2024-conf.html) for complete reference

### config/ - Runtime Configuration
- **Properties.xml**: Database connections, type mappings, connection pooling
- **SQL library**: 17 reusable SQL files for queries and functions
- **Type mappings**: Java ↔ SQL type conversion (PostgreSQL, MySQL, Oracle, SQL Server)
- **Purpose**: Control application behavior at runtime
- **See**: [jac2024-config.md](jac2024-config.html) for complete reference

### Database Configuration
- **Default database**: PostgreSQL 17
- **Default credentials**: postgres/esarks
- **Connection pooling**: Configurable via openCount in Properties.xml
- **See**: [Database-Setup.md](Database-Setup.html) for setup guide

## Usage Examples

The `app/` directory contains numerous examples:
- **ParseXML**: XML parsing and data processing
- **Reports**: Dynamic report generation
- **Services**: Web service creation
- **Database**: Data access layer generation (see `examples/databaseintegration/`)
- **Agents**: Automation and monitoring tools
- **JSON Processing**: JSON parsing, generation, and conversion examples

## Getting Started

1. Navigate to a JAC application directory (e.g., `app/ParseXML/`)
2. Run the JAC compiler: `jac.bat` or use the command line interface
3. The system will:
   - Parse the XML configuration files
   - Transform the script templates
   - Compile the generated Java code
   - Execute the specified methods

## License

Licensed to Architects of Software Design, Corp. (see `license.xml`)

## Version History

- **JAC2024**: Current version with JDK 24 support
  - **October 2025**: Jetty 12.1.2 migration complete (Jakarta EE 10)
  - **January 2025**: JSON support added (parsing, generation, schema validation)
  - Native XML and JSON processing
  - Jakarta Servlet 6.0 support
  - SLF4J 2.0.16 logging
- **JAC2020**: Previous stable release
- Multiple build versions maintain compatibility across different Java versions

## Recent Enhancements (2025)

### JSON Support PASS
- **ParseJson.java**: Full JSON parsing with Gson library
- **JsonGenerator.java**: JSON generation from objects and properties
- **ParseJsonSchema.java**: JSON Schema validation
- **JsonConverter.java**: Bidirectional JSON↔XML conversion
- Same property navigation syntax as XML: `<!json:element!>`

### Jetty 12.1.2 Migration PASS
- Upgraded from Mortbay Jetty 6.x (2019) to Eclipse Jetty 12.1.2 (2025)
- Jakarta EE 10 / Servlet 6.0 compliance
- HTTP/2 support
- Virtual threads compatibility (Java 21+)
- Enhanced security (TLS 1.3, modern cipher suites)
- SLF4J 2.0.16 logging integration

JAC represents a powerful fusion of XML and JSON configuration capabilities with Java's compilation and execution model, providing developers with a flexible platform for creating dynamic, data-driven applications.