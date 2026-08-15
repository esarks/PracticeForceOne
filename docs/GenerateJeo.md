---
title: "GenerateJeo"
---

# GenerateJeo - Java Entity Object Generation

## Purpose

GenerateJeo creates Java Entity Object (JEO) classes from XML definitions. These lightweight data transfer objects represent database records with typed fields, getter/setter methods, and utility functions for data manipulation. JEOs serve as the foundation for the JAC data layer, bridging database schemas with Java application code.

## Input XML Schema

### Schema Definition
- **Root element**: `<com.esarks.arm.schemas.ddl.root>`
- **Schema namespace**: `com.esarks.arm.schemas.ddl.root`
- **Primary element**: `<jeos>` containing one or more `<jeo>` definitions

### JEO Definition Structure

```xml
<com.esarks.arm.schemas.ddl.root>
<jeos>
  <jeo name="FamiliesJeo">
    <field name="familyId" type="string" size="36" />
    <field name="ownerId" type="string" size="255" />
    <field name="ownerEmail" type="string" size="255" />
    <field name="familyName" type="string" size="255" />
    <field name="createdAt" type="timestamp" />
  </jeo>
</jeos>
</com.esarks.arm.schemas.ddl.root>
```

### Field Types
- `string` - Maps to `String`
- `integer` - Maps to `Integer` (nullable) or `int`
- `decimal` - Maps to `BigDecimal`
- `timestamp` - Maps to `java.sql.Timestamp`
- `date` - Maps to `java.sql.Date`
- `time` - Maps to `java.sql.Time`
- `boolean` - Maps to `Boolean` (nullable) or `boolean`
- `text` - Maps to `String` (for large text fields)

### Field Attributes
- `name` - Field name in camelCase (e.g., `familyId`)
- `type` - Data type (see Field Types above)
- `size` - Maximum length for string types (documentation only)
- `nullable` - Optional, affects whether wrapper classes are used

### Naming Conventions
- **JEO Names**: PascalCase with "Jeo" suffix (e.g., `FamiliesJeo`, `ChoreAssignmentsJeo`)
- **Field Names**: camelCase (e.g., `familyId`, `createdAt`)
- **Database Column Names**: SCREAMING_SNAKE_CASE (e.g., `FAMILY_ID`, `CREATED_AT`)

Note: Field names in JEO XML use camelCase, which differs from the SCREAMING_SNAKE_CASE used in DDL table definitions.

## Output Artifacts

### Generated Files

1. **`{JeoName}.script`** - JAC script source file
   - Extends from a base JEO class
   - Contains field declarations
   - Includes getter/setter methods
   - Implements utility methods
   - Compiles to `.java` then `.class`

2. **`{JeoName}.java`** - Pure Java source (from .script)
   - Standard Java class with no JAC syntax
   - Used for compilation and debugging
   - Contains all generated code

3. **`{JeoName}.class`** - Compiled bytecode
   - Ready for runtime use
   - Loaded by JAC classloader

4. **`{JeoName}.xml`** - MIC metadata file
   - Component registration
   - Build system integration

### Example Generated JEO Class

```java
package com.esarks.examples.jeo;

import com.esarks.arm.jeo.Jeo;
import java.sql.Timestamp;

public class FamiliesJeo extends Jeo {
    // Field declarations
    private String familyId;
    private String ownerId;
    private String ownerEmail;
    private String familyName;
    private Timestamp createdAt;

    // Constructor
    public FamiliesJeo() {
        super();
    }

    // Getters
    public String getFamilyId() {
        return familyId;
    }

    public String getOwnerId() {
        return ownerId;
    }

    public String getOwnerEmail() {
        return ownerEmail;
    }

    public String getFamilyName() {
        return familyName;
    }

    public Timestamp getCreatedAt() {
        return createdAt;
    }

    // Setters
    public void setFamilyId(String value) {
        familyId = value;
    }

    public void setOwnerId(String value) {
        ownerId = value;
    }

    public void setOwnerEmail(String value) {
        ownerEmail = value;
    }

    public void setFamilyName(String value) {
        familyName = value;
    }

    public void setCreatedAt(Timestamp value) {
        createdAt = value;
    }

    // Utility methods from base Jeo class:
    // - mapFromResultSet(ResultSet rs) - Auto-populate from SQL query
    // - toMap() - Convert to Map<String, Object>
    // - fromMap(Map<String, Object>) - Populate from Map
    // - toString() - String representation
    // - clone() - Deep copy
}
```

## Key Features

### Base Class Integration
All generated JEOs extend `com.esarks.arm.jeo.Jeo`, providing:
- **ResultSet Mapping**: Automatic population from database queries
- **Map Conversion**: Bidirectional conversion to/from `Map<String, Object>`
- **Cloning**: Deep copy support
- **Error Handling**: Built-in error state management
- **Serialization**: Support for data transfer

### Type Safety
- Strong typing for all fields
- Compile-time type checking
- IDE auto-completion support
- Null safety with wrapper types (Integer, Boolean vs int, boolean)

### Database Integration
- Field names map to database columns via naming convention
- `mapFromResultSet()` automatically populates JEO from SQL queries:
  ```java
  ResultSet rs = statement.executeQuery("SELECT * FROM FAMILIES");
  while (rs.next()) {
      FamiliesJeo family = new FamiliesJeo();
      family.mapFromResultSet(rs);
      // Use populated object...
  }
  ```

### Collection Support
JEOs are typically used in collections:
```java
ArrayList<FamiliesJeo> families = new ArrayList<>();
// Or for generic processing:
ArrayList<Jeo> records = new ArrayList<>();
```

## Generated Methods

### Standard Accessor Methods
- **`get{FieldName}()`** - Returns field value
- **`set{FieldName}(Type value)`** - Sets field value

### Inherited Utility Methods
From base `Jeo` class:

- **`mapFromResultSet(ResultSet rs)`**
  - Automatically populates fields from SQL ResultSet
  - Uses reflection to match column names to fields
  - Handles type conversions

- **`toMap()`**
  - Converts JEO to `Map<String, Object>`
  - Keys are field names in camelCase
  - Used by GenerateReportPro for data transformation

- **`fromMap(Map<String, Object> map)`**
  - Populates JEO from Map
  - Type-safe conversion

- **`toString()`**
  - Returns string representation of all fields

- **`clone()`**
  - Creates deep copy of JEO instance

- **`hasError()`, `getError()`, `setError()`**
  - Error state management for service layer

## Dependencies

### Prerequisites
- **Base JEO Class**: `com.esarks.arm.jeo.Jeo` must be in classpath
- **XML Schema**: Built-in `com.esarks.arm.schemas.ddl.root`

### Typically Paired With
- **GenerateDdl**: Often generated from same XML structure (with field name conversion)
- **GenerateService**: Services return `ArrayList<Jeo>` from database queries
- **GenerateReport**: Legacy report generator consumes JEO collections

### Used By
- **GenerateReport**: Requires JEO classes for data iteration
- **GenerateService**: Returns JEO collections from CRUD operations
- **GenerateController**: Transforms JEOs to Maps for ReportPro

## Configuration Options

### Context Properties
```xml
<properties>
  <property name="jeoPackage" value="com.esarks.examples.jeo"/>
  <property name="jeoOutputPath" value="app/com/esarks/examples/jeo"/>
</properties>
```

### Generator Parameters
- **`xmlDefinition`**: Path to JEO XML file
- **`force`**: Boolean - Regenerate even if up-to-date

## Usage Example

### In GenerateComponents.xml

```xml
<component type="Jeo"
           name="Families"
           source="app/com/esarks/examples/generateJeo/FamiliesJeo.xml"
           depends=""/>
```

### Standalone Generation

```java
// In .jrun or test file
GenerateJeo lGen = new GenerateJeo();
lGen.generateJeo("app/com/esarks/examples/generateJeo/FamiliesJeo.xml", true);
```

### From RunMakeAll
The generator is invoked as part of complete build:
```
RunMakeAll.jrun
  → Reads GenerateComponents.xml
  → Finds Jeo components
  → Invokes GenerateJeo for each
  → Compiles generated .java files
  → Creates .class files for runtime use
```

### Using Generated JEOs

```java
// Create new instance
FamiliesJeo family = new FamiliesJeo();
family.setFamilyId("12345");
family.setFamilyName("The Smiths");
family.setCreatedAt(new Timestamp(System.currentTimeMillis()));

// Use in service layer
ArrayList<FamiliesJeo> families = familyService.getAllFamilies();
for (FamiliesJeo f : families) {
    System.out.println(f.getFamilyName());
}

// Convert to Map for ReportPro
Map<String, Object> familyMap = family.toMap();

// Populate from ResultSet
FamiliesJeo family = new FamiliesJeo();
family.mapFromResultSet(resultSet);
```

## Best Practices

1. **Naming Consistency**: Always use "Jeo" suffix for class names
2. **Field Names**: Use camelCase in JEO XML (familyId, not FAMILY_ID)
3. **Type Selection**: Use wrapper types (Integer, Boolean) for nullable fields
4. **Package Organization**: Keep JEOs in dedicated package (e.g., `com.esarks.examples.jeo`)
5. **Regeneration**: Use `force=true` when field definitions change
6. **Documentation**: Add field descriptions in XML comments
7. **Validation**: Consider adding custom validation methods to JEO classes

## Relationship to Database Tables

JEOs typically mirror database tables with naming convention conversion:

| Database Table | Table Columns | JEO Class | JEO Fields |
|---------------|---------------|-----------|------------|
| FAMILIES | FAMILY_ID<br>FAMILY_NAME<br>CREATED_AT | FamiliesJeo | familyId<br>familyName<br>createdAt |
| CHORE_ASSIGNMENTS | ASSIGNMENT_ID<br>FAMILY_ID<br>DUE_DATE | ChoreAssignmentsJeo | assignmentId<br>familyId<br>dueDate |

### DDL to JEO Field Mapping
- **FAMILY_ID** (DDL) → **familyId** (JEO)
- **CREATED_AT** (DDL) → **createdAt** (JEO)
- **REQUIRE_PHOTO** (DDL) → **requirePhoto** (JEO)

The mapping follows standard Java naming conventions while maintaining semantic equivalence.

## File Locations

- **Generator script**: `jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/GenerateJeo.script`
- **XML Schema**: Built-in `com.esarks.arm.schemas.ddl.root`
- **Example JEOs**: `jac2024/app/com/esarks/examples/generateJeo/*Jeo.xml`
- **Generated Classes**: `jac2024/app/com/esarks/examples/jeo/*.java`

## Related Generators

- **GenerateDdl**: Creates database tables; JEOs represent those tables in Java
- **GenerateService**: Uses JEOs as return types for CRUD operations
- **GenerateReport**: Consumes `ArrayList<Jeo>` for report generation
- **GenerateController**: Transforms JEOs to Maps for ReportPro compatibility

## Common Patterns

### Complete JEO with All Field Types

```xml
<com.esarks.arm.schemas.ddl.root>
<jeos>
  <jeo name="ChoreAssignmentsJeo">
    <!-- String fields -->
    <field name="assignmentId" type="string" size="36" />
    <field name="familyId" type="string" size="36" />
    <field name="choreId" type="string" size="36" />
    <field name="memberId" type="string" size="36" />
    <field name="choreTitle" type="string" size="255" />

    <!-- Date/Time fields -->
    <field name="dueDate" type="date" />
    <field name="createdAt" type="timestamp" />

    <!-- Integer fields -->
    <field name="points" type="integer" />

    <!-- Boolean fields -->
    <field name="requirePhoto" type="boolean" />

    <!-- Text fields -->
    <field name="notes" type="text" />
  </jeo>
</jeos>
</com.esarks.arm.schemas.ddl.root>
```

### Multiple JEOs in One File

```xml
<com.esarks.arm.schemas.ddl.root>
<jeos>
  <jeo name="FamiliesJeo">
    <field name="familyId" type="string" size="36" />
    <field name="familyName" type="string" size="255" />
  </jeo>

  <jeo name="FamilyMembersJeo">
    <field name="memberId" type="string" size="36" />
    <field name="familyId" type="string" size="36" />
    <field name="childName" type="string" size="255" />
  </jeo>
</jeos>
</com.esarks.arm.schemas.ddl.root>
```

## Advanced Features

### Custom Methods
Generated JEO .script files can be extended with custom methods in preserved sections:

```java
// In FamiliesJeo.script
<section name="custom-methods">
public boolean isOwner(String userId) {
    return userId != null && userId.equals(this.ownerId);
}

public int getMemberCount() {
    // Custom business logic
    return memberList != null PENDING memberList.size() : 0;
}
</section>
```

### Nested Collections
JEOs can contain collections of other JEOs:

```java
public class FamiliesJeo extends Jeo {
    private String familyId;
    private String familyName;
    private ArrayList<FamilyMembersJeo> members;  // Nested collection

    // ... getters/setters
}
```

### ResultSet Auto-Mapping
The base `mapFromResultSet()` method uses reflection to automatically map database columns to JEO fields:

```java
// In generated or inherited code
public void mapFromResultSet(ResultSet rs) throws SQLException {
    this.familyId = rs.getString("FAMILY_ID");
    this.familyName = rs.getString("FAMILY_NAME");
    this.createdAt = rs.getTimestamp("CREATED_AT");
    // ... continues for all fields
}
```

This automatic mapping handles:
- Column name to field name conversion (FAMILY_ID → familyId)
- Type conversions (SQL types to Java types)
- Null handling

## Troubleshooting

### Common Issues

1. **Field name mismatch**: Ensure JEO XML uses camelCase, not SCREAMING_SNAKE_CASE
2. **Type incompatibility**: Verify SQL type maps correctly to Java type
3. **Missing base class**: Ensure `com.esarks.arm.jeo.Jeo` is in classpath
4. **Compilation errors**: Check that all referenced types are imported

### Best Practice Checklist

- PASS JEO class names end with "Jeo"
- PASS Field names use camelCase
- PASS XML root is `<com.esarks.arm.schemas.ddl.root>`
- PASS JEOs wrapped in `<jeos>` element
- PASS Appropriate Java types selected for database columns
- PASS Package structure matches project conventions

GenerateJeo forms the data layer foundation, creating type-safe, database-integrated entity objects that bridge SQL and Java seamlessly throughout the JAC application stack.
