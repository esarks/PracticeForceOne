---
title: "jac2024 config"
---

# JAC2024 config/ - Runtime Configuration

**Document Version:** 2.0
**Date:** 2025-01-21
**JAC Version:** JAC2024 v20251021a
**Location:** `jac2024/config/`

---

## Table of Contents

1. [Overview](#overview)
2. [What is config/PENDING](#what-is-config)
3. [Directory Structure](#directory-structure)
4. [Properties.xml - Complete Reference](#propertiesxml---complete-reference)
5. [Database Type Mappings](#database-type-mappings)
6. [Database Connections](#database-connections)
7. [SQL Files](#sql-files)
8. [How JAC Uses config/](#how-jac-uses-config)
9. [Complete File Listing](#complete-file-listing)
10. [Configuration Guide](#configuration-guide)
11. [Multiple Environments](#multiple-environments)
12. [Examples](#examples)

---

## Overview

The **`config/` folder** contains runtime configuration that controls how JAC applications behave when running. This includes database connections, type mappings, and reusable SQL queries.

**Key Concept:** The config/ folder determines **HOW** your applications behave at runtime.

| Aspect | Details |
|--------|---------|
| **Purpose** | Runtime configuration and settings |
| **Used When** | Run-time (when executing .jrun files) |
| **File Types** | `.xml` files (configuration), `.sql` files (queries) |
| **Location** | `jac2024/config/` |
| **Total Files** | 20 files |
| **Changes Require** | Application restart (no recompilation) |

---

## What is config/?

### The Problem it Solves

Without runtime configuration, applications would need to:
- Hard-code database credentials in source code
- Duplicate connection logic across scripts
- Manually handle database type conversions
- Repeat SQL queries in multiple places
- Rebuild for different environments (dev/test/prod)

### The Solution

The `config/` folder provides:
1. **Centralized database configuration** - One place for all connection settings
2. **Type mapping system** - Automatic Java ↔ SQL type conversion
3. **Connection pooling** - Reusable database connections
4. **SQL query library** - Reusable, maintainable SQL
5. **Environment flexibility** - Switch between dev/prod without code changes

### Runtime Flow

```
User executes:     MyApp.jrun
                   ↓
Jrun launcher:     Reads bin/Job.xml
                   ↓
Job.xml says:      Use properties "config.properties"
                   ↓
JAC loads:         config/properties/Properties.xml
                   ↓
Properties.xml:    Defines database connection and type mappings
                   ↓
JAC creates:       DbConnectionFactory with connection pool
                   ↓
Your script calls: getDbConnection()
                   ↓
JAC returns:       Ready-to-use database connection
                   ↓
Your script uses:  db.executeStatement("SELECT * FROM users")
```

---

## Directory Structure

```
config/
├── properties/
│   ├── Properties.xml              # Active database configuration
│   ├── Properties.xml.bak          # Backup
│   └── Properties - Copy.xml       # Copy
│
└── sql/
    ├── ddl.sql                     # Database schema (16KB)
    ├── HrmAssessment.sql           # Assessment queries
    ├── HrmAssessmentOasis.sql      # OASIS assessment queries
    ├── HrmAssessmentVersion.sql    # Assessment version queries
    ├── HrmDashView.sql             # Dashboard view (6.3KB)
    ├── HrmDashView2.sql            # Alternative dashboard
    ├── HrmEpisode.sql              # Episode queries
    ├── HrmIndexOasisView.sql       # OASIS index view
    ├── HrmOasisAssessmentView.sql  # OASIS assessment view
    ├── HrmPatient.sql              # Patient queries
    ├── HrmPerson.sql               # Person queries
    ├── HrmPersonWords.sql          # Person word search
    ├── HrmProcessList.sql          # Process list queries
    ├── hrmConcatName.sql           # Name concatenation function
    ├── hrmGetEthnicityType.sql     # Ethnicity lookup function
    ├── hrmGetPersonNumberValue.sql # Person number function
    ├── hrmGetTypeName.sql          # Type name function
    └── hrmRfaSortOrder.sql         # RFA sort order function
```

**Total Files:** 20 files (3 in properties/, 17 in sql/)

---

## Properties.xml - Complete Reference

**File:** `config/properties/Properties.xml`
**Purpose:** Database configuration, type mappings, connection settings

### File Structure

```xml
<com.esarks.arm.schemas.properties.root>

  <property>default
    <context>default</context>

    <!-- Type Mappings -->
    <dbTypes name="postgresql">
      <!-- Type definitions -->
    </dbTypes>

    <!-- Database Connection -->
    <dbConnection name="application" openCount="1">
      <!-- Connection details -->
    </dbConnection>

  </property>

</com.esarks.arm.schemas.properties.root>
```

### Root Element

**`<com.esarks.arm.schemas.properties.root>`**
- Container for all property sets
- Can contain multiple `<property>` elements for different environments

---

### Property Set

**`<property>default`**
- Named property set (e.g., "default", "production", "development")
- Referenced by `bin/Job.xml` → `<propertySet>default</propertySet>`

**Attributes:**
- Name of property set (e.g., "default")

**Child Elements:**
- `<context>` - Context name
- `<dbTypes>` - Type mappings for database system
- `<dbConnection>` - Database connection configuration

---

### Context Element

```xml
<context>default</context>
```

**Purpose:** Identifies the runtime context
**Value:** String identifier (e.g., "default", "production", "development")

---

## Database Type Mappings

### dbTypes Element

**Purpose:** Define how Java types map to SQL types for a specific database system

```xml
<dbTypes name="postgresql">
  <!-- Type mapping definitions -->
</dbTypes>
```

**Attributes:**
- `name` - Database system identifier (e.g., "postgresql", "mysql", "oracle")

---

### Type Mapping Structure

Each type has a corresponding XML element:

```xml
<typename size="true|false"
          property="getter_method"
          jdbcProperty="jdbc_getter"
          java="java_type"
          setString="setter_format"
          jdbc="jdbc_type">
  sql_type_name
</typename>
```

**Attributes:**

| Attribute | Purpose | Example |
|-----------|---------|---------|
| `size` | Type requires size specification | `true` for varchar, char |
| `property` | JAC getter method name | `getValueString` |
| `jdbcProperty` | Alternative JDBC getter | `getValueSqlDate` |
| `java` | Java type | `String`, `int`, `java.util.Date` |
| `setString` | String-to-value conversion format | `date:yyyy-MM-dd` |
| `jdbc` | JDBC type constant | `String`, `Int`, `Timestamp` |

**Element Value:** SQL type name (e.g., `varchar`, `int`, `datetime`)

---

### Complete Type Mappings for PostgreSQL

#### Boolean Type

```xml
<boolean property="getValueBoolean"
         java="boolean"
         setString="boolean"
         jdbc="Boolean">
  bit
</boolean>
```

**Mapping:** Java `boolean` ↔ SQL `bit` ↔ JDBC `Boolean`

---

#### Numeric Types

```xml
<byte property="getValueByte"
      java="byte"
      setString="byte"
      jdbc="Byte">
  tinyint
</byte>

<short property="getValueShort"
       java="short"
       setString="short"
       jdbc="Short">
  smallint
</short>

<int property="getValueInt"
     java="int"
     setString="int"
     jdbc="Int">
  int
</int>

<long property="getValueLong"
      java="long"
      setString="long"
      jdbc="Long">
  bigint
</long>

<float property="getValueFloat"
       java="float"
       setString="float"
       jdbc="Float">
  real
</float>

<double property="getValueDouble"
        java="double"
        setString="double"
        jdbc="Double">
  float
</double>
```

**Numeric Type Summary:**

| Java Type | SQL Type | JDBC Type |
|-----------|----------|-----------|
| `byte` | `tinyint` | `Byte` |
| `short` | `smallint` | `Short` |
| `int` | `int` | `Int` |
| `long` | `bigint` | `Long` |
| `float` | `real` | `Float` |
| `double` | `float` | `Double` |

---

#### Character Types

```xml
<char size="true"
      property="getValueChar"
      java="char"
      setString="char"
      jdbc="Char">
  char
</char>

<string size="true"
        property="getValueString"
        java="String"
        jdbc="String">
  varchar
</string>
```

**Note:** `size="true"` means these types require length specification (e.g., `varchar(255)`)

**Character Type Summary:**

| Java Type | SQL Type | JDBC Type | Requires Size |
|-----------|----------|-----------|---------------|
| `char` | `char` | `Char` | Yes |
| `String` | `varchar` | `String` | Yes |

---

#### Date/Time Types

```xml
<date property="getValueDate"
      jdbcProperty="getValueSqlDate"
      java="java.util.Date"
      setString="date:yyyy-MM-dd"
      jdbc="Date">
  datetime
</date>

<time property="getValueTime"
      java="java.sql.Time"
      setString="time:yyyy-MM-dd HH:mm:ss.S"
      jdbc="Time">
  datetime
</time>

<datetime property="getValueTimestamp"
          java="java.sql.Timestamp"
          setString="timestamp:yyyy-MM-dd HH:mm:ss.S"
          jdbc="Timestamp">
  datetime
</datetime>
```

**Date/Time Type Summary:**

| Java Type | SQL Type | JDBC Type | Format |
|-----------|----------|-----------|--------|
| `java.util.Date` | `datetime` | `Date` | `yyyy-MM-dd` |
| `java.sql.Time` | `datetime` | `Time` | `yyyy-MM-dd HH:mm:ss.S` |
| `java.sql.Timestamp` | `datetime` | `Timestamp` | `yyyy-MM-dd HH:mm:ss.S` |

**Note:** PostgreSQL uses `datetime` for all temporal types in this configuration

---

### How Type Mappings Work

**When you read from database:**

```java
DbConnection db = getDbConnection();
db.executeStatement("SELECT name, age FROM users WHERE id = 1");
if (db.next()) {
  String name = db.getString("name");  // Uses <string> mapping
  int age = db.getInt("age");          // Uses <int> mapping
}
```

**JAC uses type mappings to:**
1. Find correct getter method (`getValueString`, `getValueInt`)
2. Convert JDBC result to Java type
3. Return properly typed value to your script

---

## Database Connections

### dbConnection Element

**Purpose:** Define a database connection with credentials and settings

```xml
<dbConnection name="application" openCount="1">
  <jdbcClass>org.postgresql.Driver</jdbcClass>
  <jdbcConnection>jdbc:postgresql://localhost:5432/esarks</jdbcConnection>
  <jdbcUser>postgres</jdbcUser>
  <jdbcPassword>esarks</jdbcPassword>
  <dbTypes>postgresql</dbTypes>
  <catalog>esarks</catalog>
  <owner></owner>
  <stereotype>postgresql</stereotype>
</dbConnection>
```

---

### Connection Attributes

**`name`** - Connection identifier
- Value: String identifier (e.g., "application", "reporting", "admin")
- Used in code: `getDbConnection("application")`
- Default: If no name specified in code, uses connection named "application"

**`openCount`** - Connection pool size
- Value: Integer (number of connections to maintain)
- Default: `1` for single connection
- Production: Set higher (e.g., `10`, `20`) for concurrent users

---

### Connection Elements

#### jdbcClass

```xml
<jdbcClass>org.postgresql.Driver</jdbcClass>
```

**Purpose:** JDBC driver class name
**PostgreSQL:** `org.postgresql.Driver`
**MySQL:** `com.mysql.cj.jdbc.Driver`
**Oracle:** `oracle.jdbc.driver.OracleDriver`
**SQL Server:** `com.microsoft.sqlserver.jdbc.SQLServerDriver`

**Required:** JAR file must be in `lib/` folder

---

#### jdbcConnection

```xml
<jdbcConnection>jdbc:postgresql://localhost:5432/esarks</jdbcConnection>
```

**Purpose:** JDBC connection URL

**Format by Database:**

| Database | URL Format |
|----------|------------|
| **PostgreSQL** | `jdbc:postgresql://host:port/database` |
| **MySQL** | `jdbc:mysql://host:port/database` |
| **Oracle** | `jdbc:oracle:thin:@host:port:sid` |
| **SQL Server** | `jdbc:sqlserver://host:port;databaseName=database` |

**Example URLs:**
```
jdbc:postgresql://localhost:5432/esarks
jdbc:postgresql://db.example.com:5432/production_db
jdbc:mysql://localhost:3306/myappPENDINGuseSSL=false
jdbc:oracle:thin:@prodserver:1521:ORCL
```

---

#### jdbcUser

```xml
<jdbcUser>postgres</jdbcUser>
```

**Purpose:** Database username
**Value:** String username with appropriate permissions

**Security Note:** Stored in plain text - consider using secure vault for production

---

#### jdbcPassword

```xml
<jdbcPassword>esarks</jdbcPassword>
```

**Purpose:** Database password
**Value:** String password

**Security Note:** Stored in plain text - consider environment variables or vault for production

---

#### dbTypes

```xml
<dbTypes>postgresql</dbTypes>
```

**Purpose:** Reference to type mapping definition
**Value:** Must match `name` attribute of a `<dbTypes>` element

**Example:** `postgresql` references `<dbTypes name="postgresql">`

---

#### catalog

```xml
<catalog>esarks</catalog>
```

**Purpose:** Database catalog/schema name
**PostgreSQL:** Database name
**MySQL:** Database name
**Oracle:** Usually empty
**SQL Server:** Database name

---

#### owner

```xml
<owner></owner>
```

**Purpose:** Database schema owner
**Value:** Usually empty for most configurations

---

#### stereotype

```xml
<stereotype>postgresql</stereotype>
```

**Purpose:** Database system identifier
**Value:** Database type (postgresql, mysql, oracle, sqlserver)

---

## SQL Files

**Location:** `config/sql/`
**Purpose:** Reusable SQL queries, functions, and DDL statements
**Total Files:** 17 SQL files

### File Categories

#### 1. Schema Definition

**`ddl.sql`** - Database Data Definition Language
- **Size:** 16 KB
- **Contains:** CREATE TABLE, CREATE FUNCTION, CREATE INDEX statements
- **Purpose:** Complete database schema

**Example Content:**
```sql
CREATE TABLE HrmPerson (
  id bigint identity (1, 1) NOT NULL,
  domain bigint,
  lastName varchar(64),
  firstName varchar(64),
  middleInitial varchar(64),
  suffix varchar(4),
  genderType varchar(1),
  dob datetime,
  CONSTRAINT HrmPerson_pk PRIMARY KEY (id)
);

CREATE FUNCTION hrmConcatName (
  @lastName varchar(64),
  @firstName varchar(64),
  @middleName varchar(64),
  @suffixName varchar(64)
) RETURNS varchar(128)
AS
BEGIN
  DECLARE @fullName varchar(128)
  IF @lastName is not null SET @fullName = RTRIM(@lastName)
  IF @firstName is not null SET @fullName = RTRIM(@fullName + ', ' + @firstName)
  IF @middleName is not null SET @fullName = RTRIM(@fullName + ' ' + @middleName)
  IF @suffixName is not null SET @fullName = RTRIM(@fullName + ' ' + @suffixName)
  RETURN @fullName
END
```

---

#### 2. Entity Queries

Query files for specific entities:

| File | Purpose | Size |
|------|---------|------|
| **HrmAssessment.sql** | Assessment queries | - |
| **HrmAssessmentOasis.sql** | OASIS assessment queries | - |
| **HrmAssessmentVersion.sql** | Assessment version queries | - |
| **HrmEpisode.sql** | Episode queries | - |
| **HrmPatient.sql** | Patient queries | - |
| **HrmPerson.sql** | Person queries | - |
| **HrmPersonWords.sql** | Person word search | - |

**Common Pattern:** SELECT statements for retrieving entity data

---

#### 3. View Queries

View definitions for reporting:

| File | Purpose | Size |
|------|---------|------|
| **HrmDashView.sql** | Dashboard view | 6.3 KB |
| **HrmDashView2.sql** | Alternative dashboard | - |
| **HrmIndexOasisView.sql** | OASIS index view | - |
| **HrmOasisAssessmentView.sql** | OASIS assessment view | - |
| **HrmProcessList.sql** | Process list view | - |

**Common Pattern:** Complex SELECT with JOINs for reporting

---

#### 4. Functions

Reusable SQL functions:

| File | Purpose |
|------|---------|
| **hrmConcatName.sql** | Concatenate name parts |
| **hrmGetEthnicityType.sql** | Get ethnicity type |
| **hrmGetPersonNumberValue.sql** | Get person number |
| **hrmGetTypeName.sql** | Get type name translation |
| **hrmRfaSortOrder.sql** | Calculate RFA sort order |

**Common Pattern:** CREATE FUNCTION statements

---

### Using SQL Files in Scripts

**Load and execute SQL from file:**

```java
// Read SQL file
String sql = new String(
  Files.readAllBytes(
    Paths.get(getJacBasePath(), "config", "sql", "HrmPatient.sql")
  )
);

// Execute query
DbConnection db = getDbConnection();
db.executeStatement(sql);

while (db.next()) {
  String name = db.getString("name");
  // Process results
}
```

---

## How JAC Uses config/

### Startup Sequence

**1. User executes .jrun file:**
```powershell
C:\...\jac2024\bin\Jrun.bat MyApp.jrun
```

**2. Jrun.bat reads bin/Job.xml:**
```xml
<job>
  <properties>config.properties</properties>
  <propertySet>default</propertySet>
</job>
```

**3. JAC loads config/properties/Properties.xml:**
- Finds `<property>default` section
- Loads type mappings from `<dbTypes name="postgresql">`
- Creates connection pool from `<dbConnection name="application">`

**4. JAC creates DbConnectionFactory:**
- Opens `openCount` database connections
- Pools connections for reuse
- Configures type mappings

**5. Your script calls getDbConnection():**
```java
DbConnection db = getDbConnection();
```

**6. JAC returns pooled connection:**
- Connection is ready to use
- Type mappings are active
- Auto-commit is enabled by default

---

### Connection Lifecycle

```
Application starts
       ↓
JAC reads Properties.xml
       ↓
Creates connection pool (openCount connections)
       ↓
Script calls: getDbConnection()
       ↓
JAC returns: Available connection from pool
       ↓
Script uses: db.executeStatement(...)
       ↓
Script finishes using connection
       ↓
Connection returns to pool (reusable)
       ↓
Application ends
       ↓
JAC closes all pooled connections
```

---

## Complete File Listing

### All 20 Files in config/

#### properties/ Directory (3 files)

| File | Size | Purpose |
|------|------|---------|
| **Properties.xml** | ~1.5 KB | Active configuration |
| **Properties.xml.bak** | - | Backup copy |
| **Properties - Copy.xml** | - | Additional backup |

---

#### sql/ Directory (17 files)

| File | Size | Type | Purpose |
|------|------|------|---------|
| **ddl.sql** | 16 KB | DDL | Database schema |
| **HrmAssessment.sql** | - | Query | Assessment data |
| **HrmAssessmentOasis.sql** | - | Query | OASIS assessments |
| **HrmAssessmentVersion.sql** | - | Query | Assessment versions |
| **HrmDashView.sql** | 6.3 KB | View | Dashboard view |
| **HrmDashView2.sql** | - | View | Alt dashboard |
| **HrmEpisode.sql** | - | Query | Episode data |
| **HrmIndexOasisView.sql** | - | View | OASIS index |
| **HrmOasisAssessmentView.sql** | - | View | OASIS assessment |
| **HrmPatient.sql** | - | Query | Patient data |
| **HrmPerson.sql** | - | Query | Person data |
| **HrmPersonWords.sql** | - | Query | Person search |
| **HrmProcessList.sql** | - | Query | Process list |
| **hrmConcatName.sql** | - | Function | Name concatenation |
| **hrmGetEthnicityType.sql** | - | Function | Ethnicity lookup |
| **hrmGetPersonNumberValue.sql** | - | Function | Person number |
| **hrmGetTypeName.sql** | - | Function | Type translation |
| **hrmRfaSortOrder.sql** | - | Function | Sort order calc |

---

## Configuration Guide

### Changing Database Connection

**Edit:** `config/properties/Properties.xml`

**Find** `<dbConnection>` element:

```xml
<dbConnection name="application" openCount="1">
  <jdbcClass>org.postgresql.Driver</jdbcClass>
  <jdbcConnection>jdbc:postgresql://localhost:5432/esarks</jdbcConnection>
  <jdbcUser>postgres</jdbcUser>
  <jdbcPassword>esarks</jdbcPassword>
  <dbTypes>postgresql</dbTypes>
  <catalog>esarks</catalog>
  <stereotype>postgresql</stereotype>
</dbConnection>
```

**Change:**
- `<jdbcConnection>` - Database server, port, database name
- `<jdbcUser>` - Username
- `<jdbcPassword>` - Password
- `<catalog>` - Database name

**Save and restart** - No recompilation needed

---

### Increasing Connection Pool Size

**For production with multiple concurrent users:**

```xml
<dbConnection name="application" openCount="10">
  <!-- More connections for concurrent users -->
</dbConnection>
```

**Recommended sizes:**
- Development: `1-2`
- Testing: `5`
- Production: `10-20` (depends on concurrent users)

**Formula:** `openCount = (concurrent users) + 2`

---

### Switching Database Systems

**Example: PostgreSQL → MySQL**

**1. Update jdbcClass:**
```xml
<jdbcClass>com.mysql.cj.jdbc.Driver</jdbcClass>
```

**2. Update jdbcConnection:**
```xml
<jdbcConnection>jdbc:mysql://localhost:3306/myapp</jdbcConnection>
```

**3. Update dbTypes reference:**
```xml
<dbTypes>mysql</dbTypes>
```

**4. Add MySQL type mappings:**
```xml
<dbTypes name="mysql">
  <int property="getValueInt" java="int" jdbc="Int">int</int>
  <string size="true" property="getValueString" java="String" jdbc="String">varchar</string>
  <!-- etc. -->
</dbTypes>
```

**5. Ensure MySQL JDBC driver in lib/:**
- File: `mysql-connector-java-x.x.x.jar`
- Location: `jac2024/lib/mysql/`

---

### Adding Type Mappings

**Example: Add JSON type for PostgreSQL:**

```xml
<dbTypes name="postgresql">
  <!-- Existing types... -->

  <!-- Add JSON type -->
  <json property="getValueString"
        java="String"
        jdbc="String">
    json
  </json>

  <!-- Add JSONB type -->
  <jsonb property="getValueString"
         java="String"
         jdbc="String">
    jsonb
  </jsonb>
</dbTypes>
```

**Usage in script:**
```java
db.executeStatement("SELECT data FROM documents");
if (db.next()) {
  String jsonData = db.getString("data");  // Uses json mapping
  JSONObject obj = (JSONObject) new JSONParser().parse(jsonData);
}
```

---

## Multiple Environments

### Strategy 1: Multiple Property Sets

**Create separate property sets in same file:**

```xml
<com.esarks.arm.schemas.properties.root>

  <!-- Development Configuration -->
  <property>development
    <context>development</context>
    <dbConnection name="application" openCount="1">
      <jdbcConnection>jdbc:postgresql://localhost:5432/dev_db</jdbcConnection>
      <jdbcUser>dev_user</jdbcUser>
      <jdbcPassword>dev_pass</jdbcPassword>
    </dbConnection>
  </property>

  <!-- Production Configuration -->
  <property>production
    <context>production</context>
    <dbConnection name="application" openCount="20">
      <jdbcConnection>jdbc:postgresql://prod-server:5432/prod_db</jdbcConnection>
      <jdbcUser>prod_user</jdbcUser>
      <jdbcPassword>prod_pass</jdbcPassword>
    </dbConnection>
  </property>

</com.esarks.arm.schemas.properties.root>
```

**Switch environment in bin/Job.xml:**
```xml
<job>
  <properties>config.properties</properties>
  <propertySet>production</propertySet>  <!-- Change this -->
</job>
```

---

### Strategy 2: Multiple Property Files

**Create separate files:**

- `Properties-Development.xml`
- `Properties-Production.xml`
- `Properties-Test.xml`

**Copy active config:**
```powershell
# Use development
Copy-Item Properties-Development.xml Properties.xml

# Use production
Copy-Item Properties-Production.xml Properties.xml
```

---

### Strategy 3: Environment Variables

**Use environment variables in connection string:**

**Note:** JAC doesn't natively support env vars in Properties.xml, but you can:

1. **Pre-process Properties.xml** with script before launch
2. **Use Job.xml property substitution** if supported
3. **Load from system properties** in your script

**Example script approach:**
```java
String dbUrl = System.getProperty("DB_URL", "jdbc:postgresql://localhost:5432/esarks");
String dbUser = System.getProperty("DB_USER", "postgres");
String dbPass = System.getProperty("DB_PASS", "esarks");

DbConnection db = getDbConnection();
// Manual connection if needed
```

---

## Examples

### Example 1: Basic Database Query

**Configuration in Properties.xml:**
```xml
<dbConnection name="application" openCount="1">
  <jdbcConnection>jdbc:postgresql://localhost:5432/esarks</jdbcConnection>
  <jdbcUser>postgres</jdbcUser>
  <jdbcPassword>esarks</jdbcPassword>
</dbConnection>
```

**Script usage:**
```java
DbConnection db = getDbConnection();
db.executeStatement("SELECT id, username, email FROM users");

while (db.next()) {
  int id = db.getInt("id");              // Uses <int> mapping
  String username = db.getString("username");  // Uses <string> mapping
  String email = db.getString("email");

  out.println("User: " + username + " (" + email + ")");
}
```

---

### Example 2: Multiple Connections

**Configuration:**
```xml
<!-- Primary database -->
<dbConnection name="application" openCount="5">
  <jdbcConnection>jdbc:postgresql://localhost:5432/maindb</jdbcConnection>
  <jdbcUser>app_user</jdbcUser>
  <jdbcPassword>app_pass</jdbcPassword>
</dbConnection>

<!-- Reporting database -->
<dbConnection name="reporting" openCount="2">
  <jdbcConnection>jdbc:postgresql://reports:5432/reportdb</jdbcConnection>
  <jdbcUser>report_user</jdbcUser>
  <jdbcPassword>report_pass</jdbcPassword>
</dbConnection>
```

**Script usage:**
```java
// Connect to application database
DbConnection appDb = getDbConnection("application");
appDb.executeStatement("SELECT * FROM transactions");

// Connect to reporting database
DbConnection reportDb = getDbConnection("reporting");
reportDb.executeStatement("INSERT INTO report_log VALUES (...)");
```

---

### Example 3: Using SQL Files

**SQL file:** `config/sql/GetActiveUsers.sql`
```sql
SELECT u.id, u.username, u.email, u.last_login
FROM users u
WHERE u.status = 'active'
  AND u.last_login > CURRENT_DATE - INTERVAL '30 days'
ORDER BY u.last_login DESC
```

**Script usage:**
```java
import java.nio.file.Files;
import java.nio.file.Paths;

// Load SQL from file
String sqlPath = getJacBasePath() + "/config/sql/GetActiveUsers.sql";
String sql = new String(Files.readAllBytes(Paths.get(sqlPath)));

// Execute loaded SQL
DbConnection db = getDbConnection();
db.executeStatement(sql);

while (db.next()) {
  String username = db.getString("username");
  out.println("Active user: " + username);
}
```

---

### Example 4: Transaction Management

**Script with transactions:**
```java
DbConnection db = getDbConnection();
java.sql.Connection conn = db.getConnection();

try {
  // Start transaction
  conn.setAutoCommit(false);

  // Multiple operations
  java.sql.Statement stmt = conn.createStatement();
  stmt.execute("INSERT INTO orders (customer_id, total) VALUES (1, 100.00)");
  stmt.execute("UPDATE inventory SET quantity = quantity - 1 WHERE product_id = 5");
  stmt.execute("INSERT INTO audit_log (action) VALUES ('Order created')");

  // Commit if all succeed
  conn.commit();
  out.println("Transaction committed successfully");

} catch (Exception e) {
  // Rollback on error
  conn.rollback();
  out.println("Transaction rolled back: " + e.getMessage());

} finally {
  // Restore auto-commit
  conn.setAutoCommit(true);
}
```

---

## Related Documentation

- **[jac2024-conf.md](jac2024-conf.html)** - Compile-time templates (conf/ folder)
- **[Database-Setup.md](Database-Setup.html)** - Complete database setup guide
- **[AllPhases.md](AllPhases.html)** - Build system and compilation
- **[ARM-JAC-MIC.md](ARM-JAC-MIC.html)** - Architecture overview

---

## Quick Reference

### Common Questions

**Q: How do I change database passwordPENDING**
A: Edit `config/properties/Properties.xml` → `<jdbcPassword>` element

**Q: Do I need to recompile after changing Properties.xmlPENDING**
A: No - just restart your application

**Q: How do I connect to a different databasePENDING**
A: Edit `<jdbcConnection>`, `<jdbcUser>`, `<jdbcPassword>` in Properties.xml

**Q: What's the difference between openCount="1" and openCount="10"PENDING**
A: Connection pool size - 1 for single user, 10+ for concurrent users

**Q: Can I have multiple database connectionsPENDING**
A: Yes - define multiple `<dbConnection>` elements with different names

**Q: Where are database drivers locatedPENDING**
A: In `jac2024/lib/` subdirectories (e.g., `lib/postgresql/`, `lib/mysql/`)

**Q: How do I switch between dev and prod databasesPENDING**
A: Create multiple `<property>` sets and change `<propertySet>` in bin/Job.xml

**Q: Can I use environment variables for passwordsPENDING**
A: Not directly - consider pre-processing Properties.xml or loading in script

**Q: What databases are supportedPENDING**
A: PostgreSQL, MySQL, Oracle, SQL Server - any with JDBC driver

**Q: How do I add custom type mappingsPENDING**
A: Add new type elements to `<dbTypes>` in Properties.xml

---

## Configuration Checklist

### New Database Setup

- [ ] Install database system (PostgreSQL, MySQL, etc.)
- [ ] Create database
- [ ] Create user with appropriate permissions
- [ ] Place JDBC driver JAR in `lib/` folder
- [ ] Edit `config/properties/Properties.xml`:
  - [ ] Update `<jdbcClass>`
  - [ ] Update `<jdbcConnection>`
  - [ ] Update `<jdbcUser>`
  - [ ] Update `<jdbcPassword>`
  - [ ] Update `<dbTypes>` reference
  - [ ] Update `<catalog>`
- [ ] Test connection with simple .jrun script
- [ ] Adjust `openCount` for expected load

### Environment Migration

- [ ] Create new property set or file
- [ ] Update connection URL for new server
- [ ] Update credentials
- [ ] Adjust `openCount` for new environment
- [ ] Test all database operations
- [ ] Update `bin/Job.xml` to reference new property set
- [ ] Document configuration changes

---

**Document Version:** 2.0
**Author:** JAC Documentation Team
**Last Updated:** 2025-01-21
**Status:** Complete
