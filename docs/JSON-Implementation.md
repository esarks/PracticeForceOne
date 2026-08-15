---
title: "JSON Implementation"
---

# JSON Implementation for JAC

**Purpose:** Add native JSON support to JAC alongside existing XML capabilities

**Status:** PASS **IMPLEMENTED AND COMPLETE** (Completed 2025-01-20)

**Target:** JAC Core (jac.jar)

---

## Implementation Status

PASS **All core components implemented:**
- ParseJson.java - JSON parsing using Gson library
- JsonGenerator.java - JSON generation from objects and properties
- ParseJsonSchema.java - JSON Schema validation
- JsonConverter.java - JSON↔XML conversion utilities

PASS **Integration complete:**
- ScriptHelper.java - parseJson() methods added
- SymbolTable.java - JSON parsing orchestration
- phase1List.txt - JSON classes added to build

PASS **Build system updated:**
- Gson library integrated
- Compilation successful
- JAC.jar includes JSON support

---

## Original Planning Document (Reference Only)

The sections below reflect the original implementation plan. For current usage and documentation, see the Demo.md and BuildExamplesPlan.md files.

---

## Table of Contents

1. [Overview](#overview)
2. [Current XML Architecture](#current-xml-architecture)
3. [JSON Architecture Design](#json-architecture-design)
4. [Files to Create](#files-to-create)
5. [Files to Modify](#files-to-modify)
6. [Implementation Steps](#implementation-steps)
7. [Testing Strategy](#testing-strategy)
8. [Usage Examples](#usage-examples)

---

## Overview

### Goal

Enable JAC scripts to parse, navigate, and generate JSON with the same ease as XML, using familiar property navigation syntax.

### Current State

JAC currently supports:
- PASS XML parsing (SAX-based via ParseXml.java)
- PASS XML schema validation (ParseXmlSchema.java)
- PASS Property navigation syntax: `<!element:subelement!>`, `<![element:value]!>`
- PASS Symbol table management (SymbolTable.java)
- PASS Property helper for navigation (PropertyHelper.java)

### Target State

Add JSON support:
- PASS JSON parsing (using Gson library)
- PASS JSON schema validation
- PASS Property navigation syntax: `<!json:users:user!>`, `<![json:users:user:name]!>`
- PASS JSON generation from objects
- PASS JSON-to-XML and XML-to-JSON conversion

---

## Current XML Architecture

### How XML Works in JAC

**1. Parsing Entry Point (ScriptHelper.java)**

```java
public void parseXml(String aFile) {
    iSymbolTable.parseXml(aFile);
}
```

**2. Symbol Table Coordination (SymbolTable.java)**

```java
public void parseXml(String aFile) {
    ParseXml lParseXml = new ParseXml(this, iLog, iLogClass);
    lParseXml.parseXml(aFile);
}
```

**3. SAX Parsing (ParseXml.java extends DefaultHandler)**

```java
public class ParseXml extends DefaultHandler {
    // SAX callbacks
    public void startElement(...) { }
    public void endElement(...) { }
    public void characters(...) { }
}
```

**4. Property Storage**

Properties are stored in SymbolTable as PropertyValues organized hierarchically.

**5. Property Navigation (PropertyHelper.java)**

```java
// Script syntax:
<!element:subelement!>!resetIterator();
while (<!element:subelement!>!next()) {
    String value = <![element:subelement:attribute]!>;
}
```

**6. Symbol Resolution (SymbolTable.java)**

Translates property paths to actual values.

---

## JSON Architecture Design

### Parallel Structure to XML

We'll mirror the XML architecture for consistency:

```
XML Architecture          →    JSON Architecture
────────────────────────       ─────────────────────────
ParseXml.java            →    ParseJson.java
ParseXmlSchema.java      →    ParseJsonSchema.java
parseXml() method        →    parseJson() method
<![xml:element]!>        →    <![json:element]!>
```

### Integration Points

**1. ScriptHelper** - Add parseJson() methods
**2. SymbolTable** - Add JSON parsing orchestration
**3. PropertyHelper** - Already supports any property path
**4. SymbolTable** - Already stores properties generically

---

## Files to Create

### 1. ParseJson.java

**Location:** `jac2024/jacBuild24/source/java/com/esarks/jac/ParseJson.java`

**Purpose:** JSON parsing using Gson library

**Size:** ~500 lines (similar to ParseXml.java)

**Key Methods:**

```java
package com.esarks.jac;

import com.google.gson.*;
import java.io.*;
import java.util.*;

public class ParseJson {

    private Log iLog;
    private SymbolTable iSymbolTable;
    private String iPrefix = "";

    public ParseJson(SymbolTable aSymbolTable, Log aLog, int aLogClass) {
        iSymbolTable = aSymbolTable;
        iLog = aLog;
    }

    // Main parsing method
    public void parseJson(String aFile) throws IOException {
        FileReader reader = new FileReader(aFile);
        JsonElement jsonElement = JsonParser.parseReader(reader);
        processJsonElement(iPrefix, jsonElement);
        reader.close();
    }

    // Parse with custom root
    public void parseJson(String aFile, String aRoot) throws IOException {
        iPrefix = aRoot;
        parseJson(aFile);
    }

    // Recursive processing
    private void processJsonElement(String path, JsonElement element) {
        if (element.isJsonObject()) {
            processJsonObject(path, element.getAsJsonObject());
        } else if (element.isJsonArray()) {
            processJsonArray(path, element.getAsJsonArray());
        } else if (element.isJsonPrimitive()) {
            processJsonPrimitive(path, element.getAsJsonPrimitive());
        }
    }

    private void processJsonObject(String path, JsonObject obj) {
        for (Map.Entry<String, JsonElement> entry : obj.entrySet()) {
            String key = entry.getKey();
            String newPath = path.isEmpty() PENDING key : path + ":" + key;
            processJsonElement(newPath, entry.getValue());
        }
    }

    private void processJsonArray(String path, JsonArray array) {
        for (int i = 0; i < array.size(); i++) {
            // Store array index for iteration
            String indexPath = path + "[" + i + "]";
            processJsonElement(path, array.get(i));
        }
    }

    private void processJsonPrimitive(String path, JsonPrimitive primitive) {
        // Store in symbol table
        PropertyValue value;
        if (primitive.isBoolean()) {
            value = new PropertyValue(primitive.getAsBoolean());
        } else if (primitive.isNumber()) {
            value = new PropertyValue(primitive.getAsDouble());
        } else {
            value = new PropertyValue(primitive.getAsString());
        }
        iSymbolTable.setPropertyValue(path, value);
    }
}
```

**Dependencies:**
- `com.google.gson:gson:2.10.1` (already in JAC lib folder as gson-2.8.6.jar)

---

### 2. ParseJsonSchema.java

**Location:** `jac2024/jacBuild24/source/java/com/esarks/jac/ParseJsonSchema.java`

**Purpose:** JSON Schema validation (JSON Schema Draft 7)

**Size:** ~400 lines

**Key Methods:**

```java
package com.esarks.jac;

import com.google.gson.*;
import java.io.*;

public class ParseJsonSchema {

    private Log iLog;
    private SymbolTable iSymbolTable;
    private JsonObject iSchema;

    public ParseJsonSchema(SymbolTable aSymbolTable, Log aLog, int aLogClass) {
        iSymbolTable = aSymbolTable;
        iLog = aLog;
    }

    public void parseJsonSchema(String aFile) throws IOException {
        FileReader reader = new FileReader(aFile);
        iSchema = JsonParser.parseReader(reader).getAsJsonObject();
        reader.close();
        processSchema(iSchema);
    }

    public boolean validateJson(String aJsonFile) throws IOException {
        // Validate JSON against loaded schema
        // Implementation using schema validation logic
        return true;
    }

    private void processSchema(JsonObject schema) {
        // Process and store schema definition
        // Similar to XmlSchemaElement processing
    }
}
```

---

### 3. JsonGenerator.java

**Location:** `jac2024/jacBuild24/source/java/com/esarks/jac/JsonGenerator.java`

**Purpose:** Generate JSON from Java objects and property values

**Size:** ~300 lines

**Key Methods:**

```java
package com.esarks.jac;

import com.google.gson.*;

public class JsonGenerator {

    private Gson gson;
    private GsonBuilder gsonBuilder;

    public JsonGenerator() {
        gsonBuilder = new GsonBuilder();
        gson = gsonBuilder.create();
    }

    public JsonGenerator(boolean prettyPrint) {
        gsonBuilder = new GsonBuilder();
        if (prettyPrint) {
            gsonBuilder.setPrettyPrinting();
        }
        gson = gsonBuilder.create();
    }

    // Generate from PropertyValues
    public String toJson(PropertyValues aPropertyValues) {
        // Convert PropertyValues tree to JSON
        JsonObject obj = propertyValuesToJson(aPropertyValues);
        return gson.toJson(obj);
    }

    // Generate from Java object
    public String toJson(Object aObject) {
        return gson.toJson(aObject);
    }

    // Generate from symbol table path
    public String toJson(SymbolTable aSymbolTable, String aPath) {
        PropertyValues values = aSymbolTable.getPropertyValues(aPath);
        return toJson(values);
    }

    private JsonObject propertyValuesToJson(PropertyValues values) {
        // Convert PropertyValues tree structure to JsonObject
        JsonObject obj = new JsonObject();
        // ... conversion logic
        return obj;
    }
}
```

---

### 4. JsonConverter.java

**Location:** `jac2024/jacBuild24/source/java/com/esarks/jac/JsonConverter.java`

**Purpose:** Convert between JSON and XML

**Size:** ~200 lines

**Key Methods:**

```java
package com.esarks.jac;

import com.google.gson.*;
import org.w3c.dom.*;

public class JsonConverter {

    // Convert JSON to XML
    public String jsonToXml(String aJson) {
        JsonElement element = JsonParser.parseString(aJson);
        return jsonElementToXml(element);
    }

    // Convert XML to JSON
    public String xmlToJson(String aXml) {
        // Parse XML and convert to JSON
        return null;
    }

    private String jsonElementToXml(JsonElement element) {
        // Conversion logic
        return null;
    }
}
```

---

## Files to Modify

### 1. ScriptHelper.java

**Add Methods:**

```java
// Parse JSON file
public void parseJson(String aFile) {
    parseJsonPath(path(aFile) + ".json");
}

// Parse JSON file with custom root
public void parseJson(String aFile, String aRoot) {
    parseJsonPath(path(aFile) + ".json", aRoot);
}

// Parse JSON with full path
public void parseJsonPath(String aFile) {
    iSymbolTable.parseJson(aFile);
}

// Parse JSON path with custom root
public void parseJsonPath(String aFile, String aRoot) {
    iSymbolTable.parseJson(aFile, aRoot);
}

// Parse JSON schema
public void parseJsonSchema(String aFile) {
    iSymbolTable.parseJsonSchema(path(aFile) + ".json");
}

// Parse JSON schema path
public void parseJsonSchemaPath(String aFile) {
    iSymbolTable.parseJsonSchema(aFile);
}

// Generate JSON from property path
public String toJson(String aPropertyPath) {
    JsonGenerator gen = new JsonGenerator(true);
    return gen.toJson(iSymbolTable, aPropertyPath);
}

// Generate JSON from object
public String objectToJson(Object aObject) {
    JsonGenerator gen = new JsonGenerator(true);
    return gen.toJson(aObject);
}
```

**Location of Changes:**
- Add after existing parseXml methods (around line 450)
- ~50 lines added

---

### 2. SymbolTable.java

**Add Methods:**

```java
private ParseJson iParseJson;
private ParseJsonSchema iParseJsonSchema;

// Initialize in constructor
public SymbolTable(...) {
    // ... existing code
    iParseJson = new ParseJson(this, iLog, iLogClass);
    iParseJsonSchema = new ParseJsonSchema(this, iLog, iLogClass);
}

// Parse JSON file
public void parseJson(String aFile) {
    try {
        iParseJson.parseJson(aFile);
    } catch (Exception e) {
        iLog.println(iLogClass, Log._ERROR, "Error parsing JSON: " + e.getMessage());
    }
}

// Parse JSON file with root
public void parseJson(String aFile, String aRoot) {
    try {
        iParseJson.parseJson(aFile, aRoot);
    } catch (Exception e) {
        iLog.println(iLogClass, Log._ERROR, "Error parsing JSON: " + e.getMessage());
    }
}

// Parse JSON schema
public void parseJsonSchema(String aFile) {
    try {
        iParseJsonSchema.parseJsonSchema(aFile);
    } catch (Exception e) {
        iLog.println(iLogClass, Log._ERROR, "Error parsing JSON schema: " + e.getMessage());
    }
}
```

**Location of Changes:**
- Add fields near top (around line 100)
- Add methods near parseXml methods (around line 800)
- ~80 lines added

---

### 3. phase1List.txt

**Add New Files to Compilation:**

```
..\source\java\com\esarks\jac\ParseJson.java
..\source\java\com\esarks\jac\ParseJsonSchema.java
..\source\java\com\esarks\jac\JsonGenerator.java
..\source\java\com\esarks\jac\JsonConverter.java
```

**Location:** After existing JAC files (after line 26)

---

### 4. Dependencies (Gson)

**Verify Gson Library:**

```bash
# Check if gson-2.8.6.jar exists
ls jac2024/lib/gson/

# If not, download:
# https://repo1.maven.org/maven2/com/google/code/gson/gson/2.10.1/gson-2.10.1.jar
```

**Add to SetJob.bat (if not already there):**

```batch
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\gson\gson-2.8.6.jar
```

**Location:** Around line 161 in SetJob.bat

---

## Implementation Steps

### Phase 1: Core JSON Parsing (Week 1-2)

**Tasks:**

1. PASS Create ParseJson.java
   - Implement basic parsing
   - Test with simple JSON
   - Handle nested objects
   - Handle arrays

2. PASS Modify SymbolTable.java
   - Add parseJson() methods
   - Initialize ParseJson instance
   - Test integration

3. PASS Modify ScriptHelper.java
   - Add parseJson() methods
   - Test from script

4. PASS Update phase1List.txt
   - Add ParseJson.java

5. PASS Test Basic Parsing
   - Create test JSON files
   - Write test scripts
   - Verify property storage

**Deliverables:**
- ParseJson.java (working)
- Modified SymbolTable.java
- Modified ScriptHelper.java
- Basic test scripts

**Success Criteria:**
- Can parse simple JSON
- Can parse nested JSON
- Can parse JSON arrays
- Properties accessible via navigation syntax

---

### Phase 2: Property Navigation (Week 3)

**Tasks:**

1. PASS Test Property Navigation
   - `<!json:root:element!>`
   - Array iteration
   - Nested navigation

2. PASS Add Helper Methods
   - resetIterator()
   - next()
   - getValue()

3. PASS Handle Edge Cases
   - Empty arrays
   - Null values
   - Mixed types

**Deliverables:**
- Complete property navigation support
- Edge case handling
- Documentation

**Success Criteria:**
- All XML property syntax works with JSON
- Arrays iterate properly
- Nested objects navigate correctly

---

### Phase 3: JSON Generation (Week 4)

**Tasks:**

1. PASS Create JsonGenerator.java
   - Implement toJson() methods
   - Handle PropertyValues conversion
   - Handle Java objects

2. PASS Modify ScriptHelper.java
   - Add toJson() methods
   - Add objectToJson() methods

3. PASS Test Generation
   - Generate from properties
   - Generate from objects
   - Verify valid JSON

**Deliverables:**
- JsonGenerator.java (working)
- Generation test scripts
- Documentation

**Success Criteria:**
- Can generate valid JSON from properties
- Can generate valid JSON from objects
- Pretty printing works
- Minification works

---

### Phase 4: JSON Schema (Week 5)

**Tasks:**

1. PASS Create ParseJsonSchema.java
   - Implement schema parsing
   - Implement validation
   - Test with JSON Schema Draft 7

2. PASS Modify ScriptHelper.java
   - Add parseJsonSchema() methods

3. PASS Test Schema Validation
   - Valid documents pass
   - Invalid documents fail
   - Error messages helpful

**Deliverables:**
- ParseJsonSchema.java (working)
- Schema validation tests
- Documentation

**Success Criteria:**
- Can load JSON schemas
- Can validate against schemas
- Reports validation errors clearly

---

### Phase 5: Advanced Features (Week 6)

**Tasks:**

1. PASS Create JsonConverter.java
   - JSON to XML conversion
   - XML to JSON conversion

2. PASS Performance Optimization
   - Benchmark parsing
   - Optimize if needed
   - Target: <100ms for 1MB

3. PASS Documentation
   - API documentation
   - Usage examples
   - Migration guide

**Deliverables:**
- JsonConverter.java (working)
- Performance benchmarks
- Complete documentation

**Success Criteria:**
- Conversions work correctly
- Performance meets targets
- Documentation complete

---

## Testing Strategy

### Unit Tests

Create test scripts in `jac2024/app/tests/json/`:

**1. BasicParsingTest.script**

```javascript
public void execute() {
    parseJson("test-data/simple");

    // Verify simple property
    String name = <![json:user:name]!>;
    assert(name.equals("John Doe"));

    // Verify nested property
    String city = <![json:user:address:city]!>;
    assert(city.equals("New York"));

    %>All basic parsing tests passed!<%
}
```

**2. ArrayIterationTest.script**

```javascript
public void execute() {
    parseJson("test-data/users");

    int count = 0;
    <!json:users:user!>!resetIterator();
    while (<!json:users:user!>!next()) {
        String name = <![json:users:user:name]!>;
        %>User: <!%name!><%
        count++;
    }

    assert(count == 3);
    %>All array iteration tests passed!<%
}
```

**3. GenerationTest.script**

```javascript
public void execute() {
    // Parse JSON
    parseJson("test-data/user");

    // Generate JSON back
    String json = toJson("json:user");

    // Verify valid JSON
    parseJsonString(json);

    %>Generated JSON: <!%json!><%
    %>All generation tests passed!<%
}
```

### Integration Tests

**1. RoundTripTest.script**

Parse JSON → Modify properties → Generate JSON → Parse again

**2. SchemaValidationTest.script**

Load schema → Parse valid JSON (pass) → Parse invalid JSON (fail)

**3. PerformanceTest.script**

Parse large JSON files and measure timing

### Test Data

Create `jac2024/app/tests/json/test-data/`:

```
test-data/
├── simple.json           # Simple object
├── nested.json           # Nested objects
├── arrays.json           # Arrays
├── users.json            # User list
├── complex.json          # Complex nested
├── large.json            # Performance test (10MB)
├── schema/
│   ├── user.schema.json
│   └── product.schema.json
└── invalid/
    ├── bad-syntax.json
    └── schema-mismatch.json
```

---

## Usage Examples

### Example 1: Parse Simple JSON

**data/user.json:**

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}
```

**UserExample.script:**

```javascript
public void execute() {
    parseJson("data/user");

    String name = <![json:name]!>;
    String email = <![json:email]!>;
    int age = <![json:age]!>!getValueInt();

    %>
    Name: <!%name!>
    Email: <!%email!>
    Age: <!%age!>
    <%
}
```

---

### Example 2: Iterate Array

**data/users.json:**

```json
{
  "users": [
    {"name": "Alice", "role": "Admin"},
    {"name": "Bob", "role": "User"},
    {"name": "Carol", "role": "User"}
  ]
}
```

**UsersExample.script:**

```javascript
public void execute() {
    parseJson("data/users");

    %>Users List:<%
    <!json:users!>!resetIterator();
    while (<!json:users!>!next()) {
        String name = <![json:users:name]!>;
        String role = <![json:users:role]!>;
        %>- <!%name!> (<!%role!>)<%
    }
}
```

---

### Example 3: Generate JSON

**GenerateExample.script:**

```javascript
public void execute() {
    // Create properties
    iSymbolTable.setPropertyValue("json:product:name", "Widget");
    iSymbolTable.setPropertyValue("json:product:price", 29.99);
    iSymbolTable.setPropertyValue("json:product:inStock", true);

    // Generate JSON
    String json = toJson("json:product");

    %><!%json!><%
    // Output:
    // {
    //   "name": "Widget",
    //   "price": 29.99,
    //   "inStock": true
    // }
}
```

---

### Example 4: REST API Response

**ApiExample.script:**

```javascript
public void execute() {
    // Simulate API response
    parseJsonString("{\"status\":\"success\",\"data\":[{\"id\":1},{\"id\":2}]}");

    String status = <![json:status]!>;
    if (status.equals("success")) {
        <!json:data!>!resetIterator();
        while (<!json:data!>!next()) {
            int id = <![json:data:id]!>!getValueInt();
            %>Processing ID: <!%id!><%
        }
    }
}
```

---

### Example 5: Schema Validation

**ValidateExample.script:**

```javascript
public void execute() {
    parseJsonSchema("schemas/user");

    try {
        parseJson("data/user");
        %>Validation passed!<%
    } catch (ValidationException e) {
        %>Validation failed: <!%e.getMessage()!><%
    }
}
```

---

## Summary

### Files to Create (4 new files)

1. PASS ParseJson.java (~500 lines)
2. PASS ParseJsonSchema.java (~400 lines)
3. PASS JsonGenerator.java (~300 lines)
4. PASS JsonConverter.java (~200 lines)

**Total new code:** ~1,400 lines

### Files to Modify (3 existing files)

1. PASS ScriptHelper.java (+50 lines)
2. PASS SymbolTable.java (+80 lines)
3. PASS phase1List.txt (+4 lines)

**Total modifications:** ~130 lines

### Dependencies

1. PASS Gson library (already exists: `gson-2.8.6.jar`)

### Timeline

- **Week 1-2:** Core parsing (ParseJson.java)
- **Week 3:** Property navigation
- **Week 4:** JSON generation (JsonGenerator.java)
- **Week 5:** Schema validation (ParseJsonSchema.java)
- **Week 6:** Conversion and polish (JsonConverter.java)

**Total: 6 weeks**

### Effort Estimate

- **Development:** 4 weeks (1 senior developer)
- **Testing:** 1 week
- **Documentation:** 1 week
- **Total:** 6 weeks

---

**Next Steps:**

1. Review this implementation plan
2. Approve architecture approach
3. Begin Phase 1 implementation
4. Create test data and test scripts
5. Iterate and refine

---

**Document Version:** 2.0
**Last Updated:** 2025-10-20
**Author:** Paul Thomas Mulcahy
**Status:** PASS **IMPLEMENTED** - See VCIDE and Demo.md for usage examples
