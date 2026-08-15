---
title: "Database Setup"
---

# JAC Database Setup & Configuration Guide

**Document Version:** 1.0
**Date:** 2025-01-21
**JAC Version:** JAC2024 v20251021a
**Supported Databases:** PostgreSQL, MySQL, SQL Server, Oracle

---

## Table of Contents

1. [Overview](#overview)
2. [JAC Database Architecture](#jac-database-architecture)
3. [Quick Start: PostgreSQL Setup](#quick-start-postgresql-setup)
4. [Configuration Files](#configuration-files)
5. [Database Connection Pool](#database-connection-pool)
6. [Testing Database Connections](#testing-database-connections)
7. [Creating Database Applications](#creating-database-applications)
8. [Supported Databases](#supported-databases)
9. [Troubleshooting](#troubleshooting)
10. [Advanced Topics](#advanced-topics)

---

## Overview

JAC provides **built-in database connectivity** through a connection pooling system that automatically configures database access for your applications. This guide walks through setting up, configuring, and using database connections in JAC2024.

###

 Key Features

- PASS **Automatic Connection Pooling** - Pre-configured pool of database connections
- PASS **Multi-Database Support** - PostgreSQL, MySQL, SQL Server, Oracle
- PASS **XML Configuration** - Declarative database setup in Properties.xml
- PASS **Named Connections** - Reference databases by logical name (e.g., "application")
- PASS **Object Mapping** - Associate database tables with JAC components
- PASS **Type Mapping** - Automatic Java â†” SQL type conversion
- PASS **Connection String Templates** - Easy JDBC configuration

### When Database Connections Are Initialized

JAC initializes database connections **automatically when Job.java executes**:

```
User runs: HelloWorld.jrun
    â†“
JrunDirect.bat â†’ Jrun.bat â†’ Job.bat
    â†“
Job.java executes
    â†“
1. Reads Job.xml â†’ finds Properties reference
2. Loads Properties.xml â†’ finds dbConnection config
3. Creates connection pool (opens N connections)
4. Registers connections with DbConnectionFactory
5. Makes connections available to your scripts
```

**Note:** If PostgreSQL isn't running, you'll see a connection error, but your script will still execute (database access is optional unless your script requires it).

---

## JAC Database Architecture

### Component Overview

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚              JAC Database Architecture                      â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                              â”‚
â”‚  Job.xml â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–º Points to Properties file              â”‚
â”‚                                                              â”‚
â”‚  Properties.xml â”€â”€â”€â–º Database Configuration                 â”‚
â”‚     â”œâ”€ <dbConnection> - Connection details                  â”‚
â”‚     â”‚   â”œâ”€ name: "application"                              â”‚
â”‚     â”‚   â”œâ”€ jdbcClass: org.postgresql.Driver                 â”‚
â”‚     â”‚   â”œâ”€ jdbcConnection: jdbc:postgresql://...            â”‚
â”‚     â”‚   â”œâ”€ jdbcUser, jdbcPassword                           â”‚
â”‚     â”‚   â””â”€ openCount: 3 (pool size)                         â”‚
â”‚     â”‚                                                        â”‚
â”‚     â””â”€ <dbObjects> - Table to connection mapping            â”‚
â”‚         â””â”€ Associate tables with named connections          â”‚
â”‚                                                              â”‚
â”‚  Job.java â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–º Reads config, creates pool            â”‚
â”‚                                                              â”‚
â”‚  DbConnectionFactory â–º Singleton connection manager         â”‚
â”‚     â”œâ”€ getDbConnection("application")                       â”‚
â”‚     â””â”€ getConnectionFromObject("TableName")                 â”‚
â”‚                                                              â”‚
â”‚  Your Script â”€â”€â”€â”€â”€â”€â”€â–º Uses DbConnection API                 â”‚
â”‚     â”œâ”€ Query data                                           â”‚
â”‚     â”œâ”€ Insert/Update/Delete                                 â”‚
â”‚     â””â”€ Execute stored procedures                            â”‚
â”‚                                                              â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Key Classes

| Class | Location | Purpose |
|-------|----------|---------|
| **DbConnection** | `com.esarks.arm.model.jeo.DbConnection` | Represents single database connection |
| **DbConnectionFactory** | `com.esarks.arm.model.jeo.DbConnectionFactory` | Singleton connection pool manager |
| **Job** | `com.esarks.jac.jrun.Job` | Initializes connections from Properties.xml |

---

## Quick Start: PostgreSQL Setup

### Option 1: Install PostgreSQL Locally (Recommended for Development)

#### Step 1: Download & Install PostgreSQL

1. Download PostgreSQL 17 from: https://www.postgresql.org/download/windows/
2. Run installer
3. **During installation, set these values:**
   - Port: **5432**
   - Superuser: **postgres**
   - **Superuser Password: "esarks"** WARNING Remember this - you'll need it!
   - Database: **postgres** (default)

**Important:** The installer asks for the `postgres` superuser password. Use **"esarks"** (or remember what you chose).

**Note on Passwords:**
- **`postgres` superuser password:** "esarks" (set during PostgreSQL installation)
- **`esarks` database:** Uses the postgres user with password "esarks" (for basic setup)
- **`jac_demo` database:** Uses `jac_user` with password "jac_pass" (for the demo example)

#### Step 2: Create JAC Database

Open **pgAdmin 4** (installed with PostgreSQL) or use psql command line:

```sql
-- Create database for JAC
CREATE DATABASE esarks
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;

-- Create a test table
\c esarks

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert test data
INSERT INTO users (username, email) VALUES
    ('jdoe', 'jdoe@example.com'),
    ('asmith', 'asmith@example.com'),
    ('bjones', 'bjones@example.com');
```

#### Step 3: Verify PostgreSQL is Running

```powershell
# Check if PostgreSQL service is running
Get-Service | Where-Object {$_.Name -like "*postgresql*"}

# Should show:
# Status   Name               DisplayName
# ------   ----               -----------
# Running  postgresql-x64-17  PostgreSQL Server 17

# If not running, start it:
Start-Service postgresql-x64-17
```

#### Step 4: Test Connection

```powershell
# Using psql
& "C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres -d esarks -h localhost

# If successful, you'll see:
# esarks=#
```

### Option 2: Use Docker PostgreSQL (Quick & Clean)

```powershell
# Pull PostgreSQL image
docker pull postgres:17

# Run PostgreSQL container
docker run --name jac-postgres `
  -e POSTGRES_PASSWORD=esarks `
  -e POSTGRES_DB=esarks `
  -p 5432:5432 `
  -d postgres:17

# Verify running
docker ps | Select-String postgres

# Access database
docker exec -it jac-postgres psql -U postgres -d esarks
```

### Option 3: Skip Database Setup (Test Without DB)

If you don't need database features yet, you can **disable database connections**:

Edit `jac2024\bin\Job.xml`:
```xml
<mic.element type="Component">
  <options>
    <propertySet>default</propertySet>
    <!-- Comment out this line to disable database -->
    <!-- <properties>config.properties</properties> -->
  </options>
</mic.element>
```

This prevents the PostgreSQL connection warning during script execution.

---

## Configuration Files

### File 1: Job.xml (Database Enable/Disable)

**Location:** `jac2024\bin\Job.xml`

**Purpose:** Tells JAC where to find database configuration

```xml
<mic.element type="Component">
  <options>
    <propertySet>default</propertySet>
    <properties>config.properties</properties>
  </options>
</mic.element>
```

**Configuration Options:**

| Element | Value | Purpose |
|---------|-------|---------|
| `<propertySet>` | `default` | Which property set to use from Properties.xml |
| `<properties>` | `config.properties` | Path to properties file (relative to conf/ or config/) |

**Common Values:**
- `config.properties` â†’ Looks for `config/properties/Properties.xml`
- `conf.Properties` â†’ Looks for `conf/Properties.xml`

---

### File 2: Properties.xml (Database Configuration)

**Location:** `jac2024\config\properties\Properties.xml`

**Purpose:** Defines database connections, type mappings, and object associations

#### Complete Example:

```xml
<com.esarks.arm.schemas.properties.root>

  <property>default

    <context>default</context>

    <!-- PostgreSQL Type Mappings -->
    <dbTypes name="postgresql">
      <boolean property="getValueBoolean" java="boolean" jdbc="Boolean">bit</boolean>
      <byte property="getValueByte" java="byte" jdbc="Byte">tinyint</byte>
      <short property="getValueShort" java="short" jdbc="Short">smallint</short>
      <int property="getValueInt" java="int" jdbc="Int">int</int>
      <long property="getValueLong" java="long" jdbc="Long">bigint</long>
      <float property="getValueFloat" java="float" jdbc="Float">real</float>
      <double property="getValueDouble" java="double" jdbc="Double">float</double>
      <string size="true" property="getValueString" java="String" jdbc="String">varchar</string>
      <date property="getValueDate" java="java.util.Date" jdbc="Date">datetime</date>
      <time property="getValueTime" java="java.sql.Time" jdbc="Time">datetime</time>
      <datetime property="getValueTimestamp" java="java.sql.Timestamp" jdbc="Timestamp">datetime</datetime>
    </dbTypes>

    <!-- Database Connection -->
    <dbConnection name="application" openCount="3">
      <jdbcClass>org.postgresql.Driver</jdbcClass>
      <jdbcConnection>jdbc:postgresql://localhost:5432/esarks</jdbcConnection>
      <jdbcUser>postgres</jdbcUser>
      <jdbcPassword>esarks</jdbcPassword>
      <dbTypes>postgresql</dbTypes>
      <catalog>esarks</catalog>
      <owner></owner>
      <stereotype>postgresql</stereotype>
    </dbConnection>

    <!-- Optional: Map Database Objects to Connections -->
    <dbObjects>
      <dbConnection>
        <name>application</name>
        <object><name>users</name></object>
        <object><name>products</name></object>
        <object><name>orders</name></object>
      </dbConnection>
    </dbObjects>

  </property>

</com.esarks.arm.schemas.properties.root>
```

#### Configuration Elements Explained:

##### `<dbConnection>` Element

| Attribute/Element | Example | Description |
|-------------------|---------|-------------|
| `name` | `"application"` | Logical name to reference this connection |
| `openCount` | `3` | Number of connections in pool (default: 1) |
| `<jdbcClass>` | `org.postgresql.Driver` | JDBC driver class name |
| `<jdbcConnection>` | `jdbc:postgresql://localhost:5432/esarks` | JDBC connection string |
| `<jdbcUser>` | `postgres` | Database username |
| `<jdbcPassword>` | `esarks` | Database password |
| `<dbTypes>` | `postgresql` | References type mapping above |
| `<catalog>` | `esarks` | Database name/catalog |
| `<owner>` | *(empty)* | Schema owner (optional) |
| `<stereotype>` | `postgresql` | Database type identifier |

##### Connection Pool Size (`openCount`)

| Use Case | Recommended openCount |
|----------|----------------------|
| Single-user development | 1 |
| Multi-user application | 3-5 |
| Web application | 10-20 |
| Enterprise application | 20-50 |

**Important:** Each connection consumes database resources. Start small and increase as needed.

---

## Database Connection Pool

### How the Pool Works

When JAC starts:

1. **Job.java reads Properties.xml**
2. **Creates `openCount` database connections** (e.g., 3 connections)
3. **Registers each connection with DbConnectionFactory**
4. **Your scripts request connections by name**

```java
// JAC creates pool like this:
for (int i = 0; i < openCount; i++) {
    DbConnection conn = new DbConnection("application");
    conn.connect(jdbcClass, jdbcConnection, jdbcUser, jdbcPassword);
    DbConnectionFactory.getInstance().register(conn);
}
```

### Accessing Connections in Your Scripts

#### Method 1: Get Connection by Name

```java
DbConnectionFactory factory = DbConnectionFactory.getInstance();
DbConnection conn = factory.getDbConnection("application");

if (conn.getSuccess()) {
    // Connection is ready
    ResultSet rs = conn.executeQuery("SELECT * FROM users");
    while (rs.next()) {
        System.out.println(rs.getString("username"));
    }
}
```

#### Method 2: Get Connection by Object Name

If you configured `<dbObjects>` mapping:

```java
DbConnectionFactory factory = DbConnectionFactory.getInstance();
DbConnection conn = factory.getConnectionFromObject("users");

// Automatically uses the "application" connection
```

---

## Testing Database Connections

### Built-In Test Script

JAC includes a database connection tester:

**Location:** `jac2024\app\testDbConnection\TestDbConnection.jrun`

#### Run the Test:

```powershell
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\testDbConnection
.\TestDbConnection.jrun
```

**Expected Output (Success):**
```
** TestDbConnection **
Getting DbConnection...1
Getting DbConnection...2
*** PASSED ***
[Dialog box shows: "The current DbConnection is: jdbc:postgresql://localhost:5432/esarks"]
```

**Expected Output (Failure - PostgreSQL not running):**
```
Exception caught in DbConnection.connect()
org.postgresql.util.PSQLException: Connection to localhost:5432 refused
*** FAILED ***
```

### Manual Connection Test Script

Create a simple test: `jac2024\app\MyDbTest\MyDbTest.script`

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void" />
&>

%>
===========================================
Database Connection Test
===========================================
<%

try {
    DbConnectionFactory factory = DbConnectionFactory.getInstance();
    DbConnection conn = factory.getDbConnection("application");

    if (conn.getSuccess()) {
        %>
        PASS Database connection successful!
        Connection string: <![conn.getConnectionString()]!>
        <%

        // Execute simple query
        java.sql.ResultSet rs = conn.executeQuery("SELECT version()");
        if (rs.next()) {
            %>
            PostgreSQL Version: <![rs.getString(1)]!>
            <%
        }
        rs.close();
    } else {
        %>
        FAIL Database connection failed!
        <%
    }
} catch (Exception e) {
    %>
    Error: <![e.getMessage()]!>
    <%
    e.printStackTrace();
}

%>
===========================================
<%

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

**Create MyDbTest.jrun:**
```xml
<jacrun script="MyDbTest.MyDbTest" method="execute" />
```

**Run:**
```powershell
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\MyDbTest
.\MyDbTest.jrun
```

---

## Creating Database Applications

### Example 1: List All Users

**File:** `app/UserList/UserList.script`

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void" />
&>

%>
===========================================
User List Application
===========================================
<%

try {
    DbConnectionFactory factory = DbConnectionFactory.getInstance();
    DbConnection conn = factory.getDbConnection("application");

    java.sql.ResultSet rs = conn.executeQuery("SELECT id, username, email, created_at FROM users ORDER BY id");

    %>

ID | Username  | Email                  | Created At
----|-----------|------------------------|---------------------------
    <%

    while (rs.next()) {
        int id = rs.getInt("id");
        String username = rs.getString("username");
        String email = rs.getString("email");
        java.sql.Timestamp created = rs.getTimestamp("created_at");
        %>
<![id]!> | <![username]!> | <![email]!> | <![created]!>
        <%
    }

    rs.close();

} catch (Exception e) {
    %>
Error: <![e.getMessage()]!>
    <%
    e.printStackTrace();
}

%>
===========================================
<%

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

### Example 2: Insert New User

**File:** `app/AddUser/AddUser.script`

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void" />
&>

<%
String newUsername = "testuser";
String newEmail = "testuser@example.com";

%>
===========================================
Adding New User
===========================================
Username: <![newUsername]!>
Email: <![newEmail]!>
<%

try {
    DbConnectionFactory factory = DbConnectionFactory.getInstance();
    DbConnection conn = factory.getDbConnection("application");

    // Use prepared statement for security
    java.sql.PreparedStatement stmt = conn.getConnection().prepareStatement(
        "INSERT INTO users (username, email) VALUES (PENDING, PENDING) RETURNING id"
    );

    stmt.setString(1, newUsername);
    stmt.setString(2, newEmail);

    java.sql.ResultSet rs = stmt.executeQuery();
    if (rs.next()) {
        int newId = rs.getInt("id");
        %>
PASS User created successfully!
   New user ID: <![newId]!>
        <%
    }

    rs.close();
    stmt.close();

} catch (Exception e) {
    %>
FAIL Error creating user: <![e.getMessage()]!>
    <%
    e.printStackTrace();
}

%>
===========================================
<%

<& com.esarks.arm.scripts.FinalReturnMethod &>
```

### Example 3: Update User

```java
// Update user email
java.sql.PreparedStatement stmt = conn.getConnection().prepareStatement(
    "UPDATE users SET email = PENDING WHERE username = PENDING"
);
stmt.setString(1, "newemail@example.com");
stmt.setString(2, "jdoe");
int rowsAffected = stmt.executeUpdate();
stmt.close();
```

### Example 4: Delete User

```java
// Delete user
java.sql.PreparedStatement stmt = conn.getConnection().prepareStatement(
    "DELETE FROM users WHERE id = PENDING"
);
stmt.setInt(1, 5);
int rowsAffected = stmt.executeUpdate();
stmt.close();
```

---

## Supported Databases

JAC includes JDBC drivers for multiple databases:

### PostgreSQL (Included: v42.2.9)

**Driver Location:** `jac2024\lib\postgresql\postgresql-42.2.9.jar`

**Properties.xml Configuration:**
```xml
<dbConnection name="mydb" openCount="3">
  <jdbcClass>org.postgresql.Driver</jdbcClass>
  <jdbcConnection>jdbc:postgresql://localhost:5432/mydatabase</jdbcConnection>
  <jdbcUser>postgres</jdbcUser>
  <jdbcPassword>password</jdbcPassword>
  <dbTypes>postgresql</dbTypes>
  <catalog>mydatabase</catalog>
  <stereotype>postgresql</stereotype>
</dbConnection>
```

### MySQL (Driver Included: v5.1.18)

**Driver Location:** `jac2024\lib\mysql-connector-java-5.1.18\`

**Enable in SetJob.bat** (currently commented out):
```batch
rem Uncomment this line:
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\mysql-connector-java-5.1.18\mysql-connector-java-5.1.18-bin.jar
```

**Properties.xml Configuration:**
```xml
<dbTypes name="mysql">
  <!-- Type mappings for MySQL -->
  <int property="getValueInt" java="int" jdbc="Int">int</int>
  <string size="true" property="getValueString" java="String" jdbc="String">varchar</string>
  <!-- Add other types as needed -->
</dbTypes>

<dbConnection name="mydb" openCount="3">
  <jdbcClass>com.mysql.jdbc.Driver</jdbcClass>
  <jdbcConnection>jdbc:mysql://localhost:3306/mydatabase</jdbcConnection>
  <jdbcUser>root</jdbcUser>
  <jdbcPassword>password</jdbcPassword>
  <dbTypes>mysql</dbTypes>
  <catalog>mydatabase</catalog>
  <stereotype>mysql</stereotype>
</dbConnection>
```

### Microsoft SQL Server

**Driver Location:** `jac2024\lib\mssqlserver\` (if available)

**Enable in SetJob.bat:**
```batch
rem Uncomment these lines:
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\mssqlserver\msbase.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\mssqlserver\mssqlserver.jar
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\mssqlserver\msutil.jar
```

**Properties.xml Configuration:**
```xml
<dbConnection name="mydb" openCount="3">
  <jdbcClass>com.microsoft.sqlserver.jdbc.SQLServerDriver</jdbcClass>
  <jdbcConnection>jdbc:sqlserver://localhost:1433;databaseName=mydatabase</jdbcConnection>
  <jdbcUser>sa</jdbcUser>
  <jdbcPassword>password</jdbcPassword>
  <dbTypes>sqlserver</dbTypes>
  <catalog>mydatabase</catalog>
  <stereotype>sqlserver</stereotype>
</dbConnection>
```

### Oracle (Bring Your Own Driver)

Download Oracle JDBC driver (ojdbc8.jar or ojdbc11.jar) and place in `jac2024\lib\oracle\`

**Add to SetJob.bat:**
```batch
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\oracle\ojdbc8.jar
```

**Properties.xml Configuration:**
```xml
<dbConnection name="mydb" openCount="3">
  <jdbcClass>oracle.jdbc.driver.OracleDriver</jdbcClass>
  <jdbcConnection>jdbc:oracle:thin:@localhost:1521:orcl</jdbcConnection>
  <jdbcUser>system</jdbcUser>
  <jdbcPassword>password</jdbcPassword>
  <dbTypes>oracle</dbTypes>
  <catalog>orcl</catalog>
  <stereotype>oracle</stereotype>
</dbConnection>
```

---

## Troubleshooting

### Problem 1: "Connection to localhost:5432 refused"

**Symptom:**
```
Exception caught in DbConnection.connect()
org.postgresql.util.PSQLException: Connection to localhost:5432 refused
```

**Causes & Solutions:**

#### Cause 1: PostgreSQL Not Running

**Check if running:**
```powershell
# Check PostgreSQL service status
Get-Service | Where-Object {$_.Name -like "*postgresql*"}

# If not running, start it:
Start-Service postgresql-x64-17
```

**Docker:**
```powershell
docker ps | Select-String postgres

# If not running:
docker start jac-postgres
```

#### Cause 2: Wrong Port Number

**Verify PostgreSQL port:**
```powershell
# Check postgresql.conf
# Default location: C:\Program Files\PostgreSQL\17\data\postgresql.conf
# Look for: port = 5432

# View the file in PowerShell:
Get-Content "C:\Program Files\PostgreSQL\17\data\postgresql.conf" | Select-String "port"
```

**Update Properties.xml if different:**
```xml
<jdbcConnection>jdbc:postgresql://localhost:ACTUAL_PORT/esarks</jdbcConnection>
```

#### Cause 3: PostgreSQL Not Accepting TCP Connections

**Edit pg_hba.conf:**
```
# Add this line:
host    all             all             127.0.0.1/32            md5
```

**Restart PostgreSQL:**
```powershell
Restart-Service postgresql-x64-17
```

---

### Problem 2: "No suitable driver found"

**Symptom:**
```
java.sql.SQLException: No suitable driver found for jdbc:postgresql://...
```

**Cause:** PostgreSQL driver not in classpath

**Solution:**

Verify `SetJob.bat` includes PostgreSQL driver:
```batch
set CLASSPATH=%CLASSPATH%;%JAC_HOME%\lib\postgresql\postgresql-42.2.9.jar
```

Check the JAR exists:
```powershell
Get-ChildItem C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\lib\postgresql
```

---

### Problem 3: "Database does not exist"

**Symptom:**
```
org.postgresql.util.PSQLException: FATAL: database "esarks" does not exist
```

**Solution:**

Create the database:
```sql
-- Using psql:
psql -U postgres

CREATE DATABASE esarks;
\c esarks
```

Or update Properties.xml to use existing database (e.g., "postgres"):
```xml
<jdbcConnection>jdbc:postgresql://localhost:5432/postgres</jdbcConnection>
<catalog>postgres</catalog>
```

---

### Problem 4: "Authentication failed"

**Symptom:**
```
org.postgresql.util.PSQLException: FATAL: password authentication failed for user "postgres"
```

**Solution:**

1. **Reset PostgreSQL password:**
```powershell
# Using psql as admin
& "C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres

# In psql, change password:
# ALTER USER postgres WITH PASSWORD 'esarks';
```

2. **Update Properties.xml:**
```xml
<jdbcPassword>esarks</jdbcPassword>
```

---

### Problem 5: Properties.xml Not Found

**Symptom:**
```
Cannot find properties file: config.properties
```

**Solution:**

1. **Verify Properties.xml exists:**
```powershell
Test-Path C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\config\properties\Properties.xml
```

2. **Check Job.xml points to correct location:**
```xml
<!-- Should be one of: -->
<properties>config.properties</properties>  <!-- Looks in config/properties/ -->
<!-- OR -->
<properties>conf.Properties</properties>   <!-- Looks in conf/ -->
```

3. **Copy template if missing:**
```powershell
Copy-Item jac2024\jacBuild24\source\scripts\com\esarks\arm\properties\conf\Properties.xml `
         -Destination jac2024\config\properties\Properties.xml
```

---

### Problem 6: "Too many connections"

**Symptom:**
```
org.postgresql.util.PSQLException: FATAL: sorry, too many clients already
```

**Solution:**

1. **Reduce openCount in Properties.xml:**
```xml
<dbConnection name="application" openCount="1">
```

2. **Increase PostgreSQL max_connections:**

Edit `postgresql.conf`:
```
max_connections = 100  # Increase if needed
```

Restart PostgreSQL.

---

## Advanced Topics

### Multiple Database Connections

Configure multiple databases in Properties.xml:

```xml
<property>default

  <!-- Primary application database -->
  <dbConnection name="application" openCount="5">
    <jdbcClass>org.postgresql.Driver</jdbcClass>
    <jdbcConnection>jdbc:postgresql://localhost:5432/app_db</jdbcConnection>
    <jdbcUser>postgres</jdbcUser>
    <jdbcPassword>password</jdbcPassword>
    <dbTypes>postgresql</dbTypes>
  </dbConnection>

  <!-- Analytics database -->
  <dbConnection name="analytics" openCount="2">
    <jdbcClass>org.postgresql.Driver</jdbcClass>
    <jdbcConnection>jdbc:postgresql://analytics-server:5432/analytics_db</jdbcConnection>
    <jdbcUser>analyst</jdbcUser>
    <jdbcPassword>password</jdbcPassword>
    <dbTypes>postgresql</dbTypes>
  </dbConnection>

  <!-- Reporting database (MySQL) -->
  <dbConnection name="reports" openCount="1">
    <jdbcClass>com.mysql.jdbc.Driver</jdbcClass>
    <jdbcConnection>jdbc:mysql://reports-server:3306/reports</jdbcConnection>
    <jdbcUser>reports_user</jdbcUser>
    <jdbcPassword>password</jdbcPassword>
    <dbTypes>mysql</dbTypes>
  </dbConnection>

</property>
```

**Use in scripts:**
```java
// Connect to different databases
DbConnection appDb = DbConnectionFactory.getInstance().getDbConnection("application");
DbConnection analyticsDb = DbConnectionFactory.getInstance().getDbConnection("analytics");
DbConnection reportsDb = DbConnectionFactory.getInstance().getDbConnection("reports");
```

---

### Transaction Management

```java
DbConnection conn = DbConnectionFactory.getInstance().getDbConnection("application");
java.sql.Connection jdbcConn = conn.getConnection();

try {
    // Start transaction
    jdbcConn.setAutoCommit(false);

    // Execute multiple statements
    java.sql.PreparedStatement stmt1 = jdbcConn.prepareStatement(
        "INSERT INTO orders (user_id, total) VALUES (PENDING, PENDING)"
    );
    stmt1.setInt(1, 123);
    stmt1.setDouble(2, 99.99);
    stmt1.executeUpdate();

    java.sql.PreparedStatement stmt2 = jdbcConn.prepareStatement(
        "INSERT INTO order_items (order_id, product_id, quantity) VALUES (PENDING, PENDING, PENDING)"
    );
    stmt2.setInt(1, lastOrderId);
    stmt2.setInt(2, 456);
    stmt2.setInt(3, 2);
    stmt2.executeUpdate();

    // Commit transaction
    jdbcConn.commit();
    System.out.println("Transaction committed successfully");

} catch (Exception e) {
    // Rollback on error
    jdbcConn.rollback();
    System.out.println("Transaction rolled back: " + e.getMessage());
} finally {
    // Restore auto-commit
    jdbcConn.setAutoCommit(true);
}
```

---

### Connection String Templates

#### PostgreSQL Variations:

```
# Local database
jdbc:postgresql://localhost:5432/dbname

# Remote database
jdbc:postgresql://db.example.com:5432/dbname

# With SSL
jdbc:postgresql://localhost:5432/dbnamePENDINGssl=true

# Unix socket (Linux)
jdbc:postgresql://localhost/dbnamePENDINGsocketFactory=org.newsclub.net.unix.AFUNIXSocketFactory$FactoryArg&socketFactoryArg=/var/run/postgresql/.s.PGSQL.5432
```

#### MySQL Variations:

```
# Basic
jdbc:mysql://localhost:3306/dbname

# With timezone
jdbc:mysql://localhost:3306/dbnamePENDINGserverTimezone=UTC

# With SSL
jdbc:mysql://localhost:3306/dbnamePENDINGuseSSL=true

# Multiple parameters
jdbc:mysql://localhost:3306/dbnamePENDINGuseSSL=true&serverTimezone=UTC&autoReconnect=true
```

---

### Environment-Specific Configuration

Create multiple property sets in Properties.xml:

```xml
<com.esarks.arm.schemas.properties.root>

  <!-- Development environment -->
  <property>development
    <context>development</context>
    <dbConnection name="application" openCount="1">
      <jdbcConnection>jdbc:postgresql://localhost:5432/dev_db</jdbcConnection>
      <jdbcUser>dev_user</jdbcUser>
      <jdbcPassword>dev_password</jdbcPassword>
    </dbConnection>
  </property>

  <!-- Production environment -->
  <property>production
    <context>production</context>
    <dbConnection name="application" openCount="10">
      <jdbcConnection>jdbc:postgresql://prod-server:5432/prod_db</jdbcConnection>
      <jdbcUser>prod_user</jdbcUser>
      <jdbcPassword>prod_password</jdbcPassword>
    </dbConnection>
  </property>

</com.esarks.arm.schemas.properties.root>
```

**Switch environments in Job.xml:**
```xml
<options>
  <propertySet>development</propertySet>  <!-- Change to "production" for prod -->
  <properties>config.properties</properties>
</options>
```

---

## Related Documentation

- **[How-to-Debug-VC.md](How-to-Debug-VC.html)** - Debug database code in VS Code
- **[Jrun.md](Jrun.html)** - JAC runtime system and execution
- **[Demo.md](Demo.html)** - Database examples and demonstrations
- **[CLAUDE.md](CLAUDE.html)** - JAC architecture overview

---

## Quick Reference

### Essential Commands

```powershell
# Check PostgreSQL status
Get-Service | Where-Object {$_.Name -like "*postgresql*"}

# Start PostgreSQL
Start-Service postgresql-x64-17

# Stop PostgreSQL
Stop-Service postgresql-x64-17

# Restart PostgreSQL
Restart-Service postgresql-x64-17

# Connect to database
& "C:\Program Files\PostgreSQL\17\bin\psql.exe" -U postgres -d esarks

# Test JAC database connection
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\testDbConnection
.\TestDbConnection.jrun
```

### Common SQL Operations in JAC

```java
// Get connection
DbConnectionFactory factory = DbConnectionFactory.getInstance();
DbConnection conn = factory.getDbConnection("application");

// SELECT
ResultSet rs = conn.executeQuery("SELECT * FROM users WHERE id = 1");

// INSERT
PreparedStatement stmt = conn.getConnection().prepareStatement(
    "INSERT INTO users (username, email) VALUES (PENDING, PENDING)"
);
stmt.setString(1, "username");
stmt.setString(2, "email@example.com");
stmt.executeUpdate();

// UPDATE
PreparedStatement stmt = conn.getConnection().prepareStatement(
    "UPDATE users SET email = PENDING WHERE id = PENDING"
);
stmt.setString(1, "newemail@example.com");
stmt.setInt(2, 1);
stmt.executeUpdate();

// DELETE
PreparedStatement stmt = conn.getConnection().prepareStatement(
    "DELETE FROM users WHERE id = PENDING"
);
stmt.setInt(1, 1);
stmt.executeUpdate();
```

### Configuration File Locations

| File | Purpose | Location |
|------|---------|----------|
| **Job.xml** | Enable/disable database | `jac2024\bin\Job.xml` |
| **Properties.xml** | Database config | `jac2024\config\properties\Properties.xml` |
| **SetJob.bat** | JDBC drivers in classpath | `jac2024\bin\SetJob.bat` |
| **PostgreSQL Driver** | JDBC driver JAR | `jac2024\lib\postgresql\postgresql-42.2.9.jar` |

---

**Document Version:** 1.0
**Author:** JAC Documentation Team
**Last Updated:** 2025-01-21
**Status:** Complete & Tested
