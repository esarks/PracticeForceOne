---
title: "GenerateService"
---

# GenerateService - Database Service Layer Generation

## Purpose

GenerateService generates database CRUD (Create, Read, Update, Delete) service layer classes with declarative SQL configuration. It creates methods that execute SQL queries and automatically map ResultSets to JEO objects, with support for dynamic WHERE clause construction, parameterized queries, and database-specific SQL stereotypes.

## Input XML Schema

### Schema Definition
- **Root element**: `<com.esarks.arm.schemas.services.root>`
- **Schema namespace**: `com.esarks.arm.schemas.services.root`

### Service Definition Structure

```xml
<com.esarks.arm.schemas.services.root>
<services name="FamiliesService">
  <service name="getAllFamilies" jeo="ServiceJeo">
    <sql>
      <statement>
        SELECT * FROM FAMILIES
      </statement>
      <result>
        <jeo name="FamiliesJeo" mapFromResultSet="true"/>
      </result>
    </sql>
  </service>

  <service name="getFamilyById" jeo="ServiceJeo">
    <sql>
      <statement>
        SELECT * FROM FAMILIES
      </statement>
      <where>
        <jeo>inJeo</jeo>
        <attribute>familyId</attribute>
        <clause>FAMILY_ID = PENDING</clause>
      </where>
      <value>
        <jeo>inJeo</jeo>
        <attribute>familyId</attribute>
      </value>
      <result>
        <jeo name="FamiliesJeo" mapFromResultSet="true"/>
      </result>
    </sql>
  </service>
</services>
</com.esarks.arm.schemas.services.root>
```

## XML Elements and Attributes

### `<services>` - Root Container
- **`name`**: Service class name (e.g., "FamiliesService")

### `<service>` - Individual Service Method
- **`name`**: Method name (e.g., "getAllFamilies")
- **`jeo`**: Input parameter type (typically "ServiceJeo")

### `<sql>` - SQL Configuration
Contains child elements defining the SQL operation.

### `<statement>` - SQL Statement
- **`type`**: "PreparedStatement" (default), "CallableStatement"
- **`method`**: "executeQuery" (default), "executeUpdate", "execute"
- **Text content**: SQL query with placeholders (PENDING)

#### Stereotypes (Database-Specific SQL)
```xml
<statement>
  <sqlserver>SELECT TOP PENDING * FROM FAMILIES ORDER BY CREATED_AT</sqlserver>
  <mysql>SELECT * FROM FAMILIES ORDER BY CREATED_AT LIMIT PENDING</mysql>
  <postgresql>SELECT * FROM FAMILIES ORDER BY CREATED_AT LIMIT PENDING</postgresql>
</statement>
```

### `<where>` - Dynamic WHERE Clause
Conditionally builds WHERE clauses based on JEO properties:

```xml
<where>
  <jeo>inJeo</jeo>               <!-- Input JEO navigation -->
  <attribute>familyId</attribute>  <!-- JEO property to check -->
  <clause>FAMILY_ID = PENDING</clause>   <!-- SQL fragment if not null -->
  <skipIfNull>true</skipIfNull>    <!-- Skip if property is null -->
  <skipIfBlank>true</skipIfBlank>  <!-- Skip if string is empty -->
</where>
```

Multiple `<where>` elements can be combined with conjunctions:

```xml
<where>
  <jeo>inJeo</jeo>
  <attribute>status</attribute>
  <clause>STATUS = PENDING</clause>
  <skipIfNull>true</skipIfNull>
</where>
<conjunction>AND</conjunction>
<where>
  <jeo>inJeo</jeo>
  <attribute>createdAfter</attribute>
  <clause>CREATED_AT >= PENDING</clause>
  <skipIfNull>true</skipIfNull>
</where>
```

### `<value>` - Parameter Binding
Maps JEO properties to SQL parameters in order:

```xml
<value>
  <jeo>inJeo</jeo>
  <attribute>familyId</attribute>
</value>
<value>
  <jeo>inJeo</jeo>
  <attribute>status</attribute>
</value>
```

Also supports property references:
```xml
<value>
  <jeo>inJeo</jeo>
  <property>familyName</property>
</value>
```

### `<result>` - Result Set Mapping
Maps SQL results to JEO objects:

```xml
<result>
  <jeo name="FamiliesJeo" mapFromResultSet="true"/>
</result>
```

Or manually map columns:
```xml
<result>
  <jeo name="FamiliesJeo">
    <property from="FAMILY_ID" to="familyId"/>
    <property from="FAMILY_NAME" to="familyName"/>
  </jeo>
</result>
```

Nested JEO support:
```xml
<result>
  <jeo name="FamiliesJeo" mapFromResultSet="true">
    <property name="members">
      <jeo name="FamilyMembersJeo" mapFromResultSet="true"/>
    </property>
  </jeo>
</result>
```

### `<orderBy>` - Default Sorting
```xml
<sql orderBy="FAMILY_NAME ASC">
  ...
</sql>
```

## Output Artifacts

### Generated Files

1. **`{ServiceName}.script`** - Service implementation
2. **`{ServiceName}.xml`** - MIC metadata
3. **`{XmlDefinition}.html`** - Service documentation

### Example Generated Service

```java
package com.esarks.examples.services;

import com.esarks.arm.jeo.ServiceJeo;
import com.esarks.examples.jeo.FamiliesJeo;
import java.sql.*;
import java.util.ArrayList;

public class FamiliesService {

    // getAllFamilies - Returns all families
    public ArrayList<Jeo> getAllFamilies(ServiceJeo inJeo) {
        ArrayList<Jeo> lResult = new ArrayList<>();
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        try {
            String lSql = "SELECT * FROM FAMILIES ORDER BY FAMILY_NAME";

            conn = getConnection();
            stmt = conn.prepareStatement(lSql);
            rs = stmt.executeQuery();

            while (rs.next()) {
                FamiliesJeo jeo = new FamiliesJeo();
                jeo.mapFromResultSet(rs);
                lResult.add(jeo);
            }

        } catch (SQLException e) {
            inJeo.setError(true);
            inJeo.setErrorMessage(e.getMessage());
            Log._ERR("SQL Error in getAllFamilies: " + e.getMessage());
        } finally {
            closeResources(rs, stmt, conn);
        }

        return lResult;
    }

    // getFamilyById - Get family by ID
    public ArrayList<Jeo> getFamilyById(ServiceJeo inJeo) {
        ArrayList<Jeo> lResult = new ArrayList<>();
        Connection conn = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        try {
            String lSql = "SELECT * FROM FAMILIES";
            String lWhere = "";

            // Dynamic WHERE clause
            if (inJeo.getFamilyId() != null) {
                lWhere += "FAMILY_ID = PENDING";
            }

            if (lWhere.length() > 0) {
                lSql += " WHERE " + lWhere;
            }

            conn = getConnection();
            stmt = conn.prepareStatement(lSql);

            // Bind parameters
            int paramIndex = 1;
            if (inJeo.getFamilyId() != null) {
                stmt.setString(paramIndex++, inJeo.getFamilyId());
            }

            rs = stmt.executeQuery();

            while (rs.next()) {
                FamiliesJeo jeo = new FamiliesJeo();
                jeo.mapFromResultSet(rs);
                lResult.add(jeo);
            }

        } catch (SQLException e) {
            inJeo.setError(true);
            inJeo.setErrorMessage(e.getMessage());
            Log._ERR("SQL Error in getFamilyById: " + e.getMessage());
            printStackTrace(e);
        } finally {
            closeResources(rs, stmt, conn);
        }

        return lResult;
    }

    // Utility methods
    private Connection getConnection() throws SQLException {
        // Get connection from pool or DriverManager
    }

    private void closeResources(ResultSet rs, Statement stmt, Connection conn) {
        // Clean up resources
    }

    private void printStackTrace(Exception e) {
        // Log full stack trace
    }
}
```

## Key Features

### Declarative SQL
Define SQL queries in XML without writing Java code:
- SQL statements with placeholders
- Dynamic WHERE clause construction
- Automatic parameter binding
- ResultSet to JEO mapping

### Dynamic WHERE Clause Building
Build SQL WHERE clauses dynamically based on which JEO properties are present:

```xml
<!-- Only adds WHERE clause if familyId is not null -->
<where>
  <jeo>inJeo</jeo>
  <attribute>familyId</attribute>
  <clause>FAMILY_ID = PENDING</clause>
  <skipIfNull>true</skipIfNull>
</where>
```

This generates Java code:
```java
String lWhere = "";
if (inJeo.getFamilyId() != null) {
    if (lWhere.length() > 0) lWhere += " AND ";
    lWhere += "FAMILY_ID = PENDING";
}
```

### Database-Specific SQL (Stereotypes)
Support multiple databases with different SQL syntax:

```xml
<statement>
  <sqlserver>
    SELECT TOP PENDING * FROM FAMILIES
  </sqlserver>
  <mysql>
    SELECT * FROM FAMILIES LIMIT ?
  </mysql>
  <postgresql>
    SELECT * FROM FAMILIES LIMIT ?
  </postgresql>
</statement>
```

The generator selects the correct SQL based on context property `database`.

### Automatic ResultSet Mapping
Map SQL results to JEOs automatically:

```xml
<result>
  <jeo name="FamiliesJeo" mapFromResultSet="true"/>
</result>
```

Generates:
```java
FamiliesJeo jeo = new FamiliesJeo();
jeo.mapFromResultSet(rs);
```

Manual mapping also supported:
```xml
<result>
  <jeo name="FamiliesJeo">
    <property from="FAM_ID" to="familyId"/>
    <property from="FAM_NAME" to="familyName"/>
  </jeo>
</result>
```

### Error Handling
All services return errors via ServiceJeo:
```java
ServiceJeo params = new ServiceJeo();
params.setFamilyId("12345");

ArrayList<Jeo> results = service.getFamilyById(params);

if (params.hasError()) {
    System.err.println("Error: " + params.getErrorMessage());
}
```

### Comprehensive Logging
- Application logging: `Log._APP(...)`
- Error logging: `Log._ERR(...)`
- Stack trace logging for exceptions
- SQL statement logging (when enabled)

### Multi-Database Prefix Support
Automatically adds database prefixes:
- SQL Server: `dbo.FAMILIES`
- MySQL: `mydb.FAMILIES`
- PostgreSQL: `public.FAMILIES`

## Generated Methods

Each `<service>` element generates a method:

```java
public ArrayList<Jeo> {serviceName}(ServiceJeo inJeo)
```

### Method Signature
- **Return Type**: `ArrayList<Jeo>` - Collection of JEO objects
- **Parameter**: `ServiceJeo inJeo` - Input parameters and error handling
- **Behavior**: Executes SQL, maps results, handles errors

### Return Value
- Success: ArrayList of JEO objects (may be empty)
- Failure: Empty ArrayList, error set in `inJeo`

### Error Reporting
Errors reported via `ServiceJeo`:
```java
inJeo.setError(true);
inJeo.setErrorMessage("SQL Error: ...");
```

## Dependencies

### Prerequisites
- **JDBC Connection**: Database connection configuration
- **JEO Classes**: Generated by GenerateJeo
- **ServiceJeo**: Base class for service parameters
- **Logging**: Log framework (Log._APP, Log._ERR)

### Used By
- **GenerateController**: Controllers call service methods
- **GenerateReport**: Reports get data from services
- **Application Code**: Business logic layer

### JAC Infrastructure
- Uses ScriptWriter for code generation
- Requires ParseXml for schema loading
- Integrates with Property system for database configuration
- Uses Connection pooling when available

## Configuration Options

### Context Properties

```xml
<properties>
  <property name="database" value="sqlserver"/>
  <property name="databasePrefix" value="dbo."/>
  <property name="jdbcUrl" value="jdbc:sqlserver://localhost:1433;databaseName=AllowanceAlley"/>
  <property name="jdbcUser" value="sa"/>
  <property name="jdbcPassword" value="password"/>
  <property name="jdbcDriver" value="com.microsoft.sqlserver.jdbc.SQLServerDriver"/>
</properties>
```

### Service Parameters
- **`jeo`**: Input JEO type (usually ServiceJeo)
- **`mapFromResultSet`**: Auto-map results (true/false)
- **`skipIfNull`**: Skip WHERE clause if null
- **`skipIfBlank`**: Skip WHERE clause if empty string

## Usage Example

### In GenerateComponents.xml

```xml
<component type="Services"
           name="Families"
           source="app/com/esarks/examples/generateService/FamiliesService.xml"
           depends="FamiliesJeo"/>
```

### Standalone Execution

```java
// Generate service
GenerateService lGen = new GenerateService();
lGen.generateService("app/com/esarks/examples/generateService/FamiliesService.xml");

// Use generated service
FamiliesService service = new FamiliesService();
ServiceJeo params = new ServiceJeo();
params.setFamilyId("12345");

ArrayList<Jeo> families = service.getFamilyById(params);

if (!params.hasError()) {
    for (Jeo jeo : families) {
        FamiliesJeo family = (FamiliesJeo) jeo;
        System.out.println(family.getFamilyName());
    }
} else {
    System.err.println("Error: " + params.getErrorMessage());
}
```

## Best Practices

1. **Error Handling**: Always check `inJeo.hasError()` after calling service
2. **Connection Management**: Use connection pooling in production
3. **Parameter Validation**: Validate inputs in service methods
4. **SQL Injection**: Always use PreparedStatement with PENDING placeholders
5. **Transactions**: Wrap multiple operations in transactions
6. **Logging**: Use Log._APP for info, Log._ERR for errors
7. **Resource Cleanup**: Always close ResultSet, Statement, Connection in finally blocks

## Advanced Patterns

### Complete CRUD Service

```xml
<services name="FamiliesService">
  <!-- CREATE -->
  <service name="insertFamily" jeo="ServiceJeo">
    <sql>
      <statement method="executeUpdate">
        INSERT INTO FAMILIES (FAMILY_ID, FAMILY_NAME, OWNER_ID, CREATED_AT)
        VALUES (PENDING, PENDING, PENDING, GETDATE())
      </statement>
      <value><jeo>inJeo</jeo><attribute>familyId</attribute></value>
      <value><jeo>inJeo</jeo><attribute>familyName</attribute></value>
      <value><jeo>inJeo</jeo><attribute>ownerId</attribute></value>
    </sql>
  </service>

  <!-- READ -->
  <service name="getAllFamilies" jeo="ServiceJeo">
    <sql orderBy="FAMILY_NAME ASC">
      <statement>SELECT * FROM FAMILIES</statement>
      <result>
        <jeo name="FamiliesJeo" mapFromResultSet="true"/>
      </result>
    </sql>
  </service>

  <!-- UPDATE -->
  <service name="updateFamily" jeo="ServiceJeo">
    <sql>
      <statement method="executeUpdate">
        UPDATE FAMILIES
        SET FAMILY_NAME = PENDING,
            OWNER_ID = ?
        WHERE FAMILY_ID = ?
      </statement>
      <value><jeo>inJeo</jeo><attribute>familyName</attribute></value>
      <value><jeo>inJeo</jeo><attribute>ownerId</attribute></value>
      <value><jeo>inJeo</jeo><attribute>familyId</attribute></value>
    </sql>
  </service>

  <!-- DELETE -->
  <service name="deleteFamily" jeo="ServiceJeo">
    <sql>
      <statement method="executeUpdate">
        DELETE FROM FAMILIES WHERE FAMILY_ID = ?
      </statement>
      <value><jeo>inJeo</jeo><attribute>familyId</attribute></value>
    </sql>
  </service>

  <!-- SEARCH with Dynamic WHERE -->
  <service name="searchFamilies" jeo="ServiceJeo">
    <sql>
      <statement>SELECT * FROM FAMILIES</statement>
      <where>
        <jeo>inJeo</jeo>
        <attribute>familyId</attribute>
        <clause>FAMILY_ID = PENDING</clause>
        <skipIfNull>true</skipIfNull>
      </where>
      <conjunction>AND</conjunction>
      <where>
        <jeo>inJeo</jeo>
        <attribute>familyName</attribute>
        <clause>FAMILY_NAME LIKE PENDING</clause>
        <skipIfNull>true</skipIfNull>
      </where>
      <conjunction>AND</conjunction>
      <where>
        <jeo>inJeo</jeo>
        <attribute>ownerId</attribute>
        <clause>OWNER_ID = PENDING</clause>
        <skipIfNull>true</skipIfNull>
      </where>
      <value><jeo>inJeo</jeo><attribute>familyId</attribute></value>
      <value><jeo>inJeo</jeo><attribute>familyName</attribute></value>
      <value><jeo>inJeo</jeo><attribute>ownerId</attribute></value>
      <result>
        <jeo name="FamiliesJeo" mapFromResultSet="true"/>
      </result>
    </sql>
  </service>
</services>
```

### Stored Procedure Call

```xml
<service name="calculateFamilyPoints" jeo="ServiceJeo">
  <sql>
    <statement type="CallableStatement" method="execute">
      {CALL sp_CalculateFamilyPoints(PENDING, PENDING)}
    </statement>
    <value><jeo>inJeo</jeo><attribute>familyId</attribute></value>
    <value><jeo>inJeo</jeo><attribute>asOfDate</attribute></value>
    <result>
      <jeo name="PointsSummaryJeo" mapFromResultSet="true"/>
    </result>
  </sql>
</service>
```

## File Locations

- **Generator script**: `jac2024/jacBuild24/source/scripts/com/esarks/jac/generators/GenerateService.script`
- **XML Schema**: Built-in `com.esarks.arm.schemas.services.root`
- **Example services**: `jac2024/app/com/esarks/examples/generateService/*Service.xml`
- **Generated services**: `jac2024/app/com/esarks/examples/services/*.script`

## Related Generators

- **GenerateJeo**: Creates JEO classes used as service return types
- **GenerateDdl**: Creates database tables that services query
- **GenerateController**: Orchestrates service calls for reports
- **GenerateReport**: Consumes service data for reporting

## Common Issues

1. **SQL Injection**: Always use PENDING placeholders, never string concatenation
2. **Connection Leaks**: Always close connections in finally blocks
3. **Type Mismatch**: Ensure JEO field types match SQL column types
4. **Null Handling**: Use `skipIfNull` for optional search parameters
5. **Transaction Management**: Wrap related operations in single transaction

GenerateService provides a powerful, declarative approach to database access, eliminating boilerplate JDBC code while maintaining type safety and flexibility for complex queries.
