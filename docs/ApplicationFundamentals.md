---
title: "ApplicationFundamentals"
---

# JAC Application Fundamentals

A comprehensive guide for building new applications using the JAC (Java Architects Companion) framework, based on the AllowanceAlley reference implementation.

---

## Table of Contents

1. [Initial Planning](#1-initial-planning)
2. [Project Structure](#2-project-structure)
3. [Database Design (DDL)](#3-database-design-ddl)
4. [Code Generation](#4-code-generation)
5. [Server and Router Architecture](#5-server-and-router-architecture)
6. [Configuration Files](#6-configuration-files)
7. [Utility Classes](#7-utility-classes)
8. [Build System](#8-build-system)
9. [JRun Files](#9-jrun-files)
10. [Docker Containerization](#10-docker-containerization)
11. [Google Cloud Deployment](#11-google-cloud-deployment)
12. [Database Setup (Cloud SQL)](#12-database-setup-cloud-sql)
13. [Static HTML Forms](#13-static-html-forms)
14. [Model Scripts](#14-model-scripts)
15. [Checklist Summary](#15-checklist-summary)

---

## 1. Initial Planning

### 1.1 Application Requirements Checklist

- [ ] **Application Name**: Choose a unique name (e.g., `allowancealley`, `mybible`)
- [ ] **Package Name**: Define Java package structure (e.g., `com.allowancealley`)
- [ ] **Core Entities**: List all business entities and their relationships
- [ ] **User Roles**: Define authentication roles (e.g., parent, child, admin)
- [ ] **Authentication Method**: JWT, session-based, PIN codes, etc.
- [ ] **External Services**: Email, file storage, third-party APIs

### 1.2 Entity Relationship Design

Before coding, document:
- [ ] All database tables needed
- [ ] Primary keys (typically UUID strings, 36 chars)
- [ ] Foreign key relationships and dependencies
- [ ] Which tables reference which (determines generation order)

Example from AllowanceAlley:
```
AUTH_USERS (standalone)
FAMILIES (standalone)
FAMILY_MEMBERS -> FAMILIES
CHORES -> FAMILIES
CHORE_ASSIGNMENTS -> FAMILIES, CHORES, FAMILY_MEMBERS
CHORE_COMPLETIONS -> FAMILIES, CHORE_ASSIGNMENTS
REWARDS -> FAMILIES
REDEMPTIONS -> FAMILIES, REWARDS, FAMILY_MEMBERS
POINTS_LEDGER -> FAMILIES, FAMILY_MEMBERS
```

---

## 2. Project Structure

### 2.1 Directory Layout

```
jac2024/
└── app/
    └── com/
        └── {appname}/                    # Your application root
            ├── bin/                      # Build scripts
            │   ├── allPhases.bat         # Main build orchestrator
            │   ├── Set2{AppName}.bat     # Environment setup
            │   ├── phase0-clean.bat      # Clean build dirs
            │   ├── phase1-generate-data.bat
            │   ├── phase2-generate-forms.bat
            │   ├── phase3-compile-scripts.bat
            │   ├── phase3.5-execute-generators.bat
            │   └── phase4-verify.bat
            ├── config/
            │   └── properties/
            │       ├── Properties.xml    # Local development config
            │       └── Properties.json   # Alternative format
            ├── data/                     # Data layer
            │   ├── {AppName}Ddl.xml      # Database schema definition
            │   ├── {AppName}Components.json
            │   ├── {AppName}Make.json
            │   ├── *.new                 # Generated JEO/CRUD files
            │   └── *.sql                 # Database scripts
            ├── docker/                   # Docker configuration
            │   ├── Dockerfile            # Production Dockerfile
            │   ├── Properties-docker.xml # Docker-specific config
            │   └── docker-entrypoint.sh  # Container startup script
            ├── forms/                    # UI forms (if applicable)
            ├── server/                   # Server components
            │   ├── {AppName}Router.script
            │   ├── {AppName}Router.json
            │   └── Start*.jrun
            ├── util/                     # Utility classes
            │   ├── EmailService.java
            │   ├── HashUtil.java
            │   ├── JWTUtil.java
            │   ├── RateLimiter.java
            │   └── S3Client.java
            ├── Dockerfile                # (optional) Alternative Dockerfile
            ├── docker-compose.yml
            └── .dockerignore
```

### 2.2 Files to Create (Checklist)

**Core Configuration:**
- [ ] `{AppName}Ddl.xml` - Database schema
- [ ] `{AppName}Components.json` - Component inventory
- [ ] `{AppName}Make.json` - Make configuration
- [ ] `Properties.xml` - Application properties (local dev)
- [ ] `Properties-docker.xml` - Docker/Cloud properties

**Server:**
- [ ] `{AppName}Router.script` - Main HTTP router
- [ ] `{AppName}Router.json` - Router metadata
- [ ] `Start{AppName}Router.jrun` - JRun launcher

**Build Scripts:**
- [ ] `Set2{AppName}.bat` - Environment setup
- [ ] `allPhases.bat` - Build orchestrator
- [ ] Phase scripts (0-4)

**Docker:**
- [ ] `Dockerfile` - Container build
- [ ] `docker-entrypoint.sh` - Startup script
- [ ] `.dockerignore` - Exclude patterns
- [ ] `docker-compose.yml` - Local testing

---

## 3. Database Design (DDL)

### 3.1 DDL XML Schema

Create `data/{AppName}Ddl.xml`:

```xml
<com.esarks.arm.schemas.ddl.root>

  <!-- Table definition -->
  <table name="TABLE_NAME">
    <!-- Primary key field (UUID) -->
    <field name="ID" type="string" size="36" nullable="false"/>

    <!-- String fields -->
    <field name="NAME" type="string" size="255" nullable="false"/>
    <field name="DESCRIPTION" type="text" nullable="true"/>

    <!-- Numeric fields -->
    <field name="POINTS" type="integer" nullable="false"/>

    <!-- Boolean fields -->
    <field name="IS_ACTIVE" type="boolean" nullable="false"/>

    <!-- Date/Time fields -->
    <field name="DUE_DATE" type="date" nullable="true"/>
    <field name="CREATED_AT" type="timestamp" nullable="false"/>
    <field name="UPDATED_AT" type="timestamp" nullable="false"/>

    <!-- Primary key -->
    <primary name="TABLE_NAME_pk">
      <field>ID</field>
    </primary>

    <!-- Foreign key -->
    <foreign name="FK_TABLE_PARENT">
      <field>PARENT_ID</field>
      <references name="PARENT_TABLE">
        <field>ID</field>
      </references>
    </foreign>
  </table>

</com.esarks.arm.schemas.ddl.root>
```

### 3.2 Supported Field Types

| Type | Java Type | PostgreSQL | Notes |
|------|-----------|------------|-------|
| `string` | `String` | `VARCHAR(size)` | Requires `size` attribute |
| `text` | `String` | `TEXT` | Unlimited length |
| `integer` | `int` | `INT` | |
| `long` | `long` | `BIGINT` | |
| `boolean` | `boolean` | `BOOLEAN` | |
| `date` | `java.util.Date` | `DATE` | Date only |
| `timestamp` | `java.sql.Timestamp` | `TIMESTAMP` | Date + time |
| `float` | `float` | `REAL` | |
| `double` | `double` | `FLOAT` | |

### 3.3 DDL Checklist

- [ ] All tables defined with unique names (UPPERCASE by convention)
- [ ] Every table has a primary key (usually `ID` VARCHAR(36))
- [ ] All field types and sizes specified
- [ ] `nullable` attribute set for each field
- [ ] Foreign keys defined with proper references
- [ ] Table order respects dependencies (parent tables first)
- [ ] `CREATED_AT` and `UPDATED_AT` timestamps on mutable tables

---

## 4. Code Generation

### 4.1 Components Configuration

Create `data/{AppName}Components.json`:

```json
{
  "_comment": "Component Definitions for JAC MakeAll Generator",
  "com.esarks.arm.schemas.components.root": {
    "component": [
      {
        "name": "TABLE_NAME",
        "type": "SqlTable",
        "source": "com.{appname}.data.{AppName}Ddl",
        "dbConnection": "{appname}",
        "dependsOn": [
          {"name": "PARENT_TABLE"}
        ]
      }
    ]
  }
}
```

### 4.2 Make Configuration

Create `data/{AppName}Make.json`:

```json
{
  "makeAll": {
    "force": "true",
    "componentInventory": "com.{appname}.data.{AppName}Components",
    "component": [
      "TABLE1",
      "TABLE2",
      "TABLE3"
    ]
  }
}
```

### 4.3 Generated Files

For each table, JAC generates:

| File Pattern | Purpose |
|--------------|---------|
| `{TABLE}.new` | JEO (Java Entity Object) - data container |
| `{TABLE}Crud.new` | CRUD service with custom operations |
| `{TABLE}Crud_Crud.new` | Base CRUD operations (read, create, update, delete) |

### 4.4 JEO Usage Patterns

**IMPORTANT: All database operations MUST use CRUD services - NO direct JDBC!**

The JAC framework enforces a strict data access pattern:
- **DO**: Use generated CRUD services (`tableCrud.batchRetrieveTABLE()`, etc.)
- **DO NOT**: Use direct JDBC connections, `Statement`, or `PreparedStatement` in router code
- **Exception**: `model/DatabaseInit.script` for schema initialization only

```java
// Initialize CRUD service
final com.{appname}.data.TABLECrud tableCrud =
    new com.{appname}.data.TABLECrud(iScript);

// Create new entity
TABLE entity = new TABLE();
entity.setID(java.util.UUID.randomUUID().toString());
entity.setNAME("Example");
entity.setCREATED_AT(new java.sql.Timestamp(System.currentTimeMillis()));

// Save to database
com.esarks.arm.model.jeo.ServiceJeo saveJeo =
    new com.esarks.arm.model.jeo.ServiceJeo();
saveJeo.setRequest(entity);
tableCrud.batchCreateTABLE(saveJeo);

// Query with WHERE clause
com.esarks.arm.model.jeo.ServiceJeo queryJeo =
    new com.esarks.arm.model.jeo.ServiceJeo();
queryJeo.getRequest().setWhereClausePropertyValue("FIELD = 'value'");
tableCrud.batchRetrieveTABLE(queryJeo);

// Iterate results
java.util.Iterator iter = queryJeo.getResponse().iterator();
while (iter.hasNext()) {
    TABLE item = (TABLE) iter.next();
    String name = item.getNAME("");  // Empty string = default if null
}
```

### 4.5 CRUD Service Methods

Each generated CRUD service provides:

| Method | Purpose |
|--------|---------|
| `batchCreateTABLE(jeo)` | Insert new record |
| `batchRetrieveTABLE(jeo)` | Query records with WHERE clause |
| `batchUpdateTABLE(jeo)` | Update existing record |
| `batchDeleteTABLE(jeo)` | Delete record |

### 4.6 Why CRUD Services (No Direct JDBC)

1. **Connection Pooling**: CRUD services manage database connections efficiently
2. **SQL Injection Prevention**: Parameterized queries are built-in
3. **Consistency**: All data access follows the same pattern
4. **Maintainability**: Database changes only affect generated code
5. **Logging**: Built-in query logging and error handling

### 4.7 Generation Checklist

- [ ] `{AppName}Ddl.xml` complete with all tables
- [ ] `{AppName}Components.json` lists all tables with dependencies
- [ ] `{AppName}Make.json` lists tables in dependency order
- [ ] Run generators to produce `.new` files
- [ ] Verify all `.new` files generated successfully
- [ ] Build to compile JEO/CRUD classes

---

## 5. Server and Router Architecture

### 5.1 Router Script Structure

The main server file `server/{AppName}Router.script`:

```java
context micScriptComponent
end

public void execute() {
%>
==============================================================================
                    {AppName} Application Server
==============================================================================
Starting server...
<%

int port = 8080;
String contextPath = "";

// Initialize CRUD services
final com.{appname}.data.TABLECrud tableCrud =
    new com.{appname}.data.TABLECrud(iScript);
System.out.println("[CRUD] TABLECrud service initialized");

// Initialize utility services
final com.{appname}.util.EmailService emailService =
    com.{appname}.util.EmailService.getInstance();

// Create Jetty server
org.eclipse.jetty.server.Server server =
    new org.eclipse.jetty.server.Server(port);

// Create servlet context
org.eclipse.jetty.servlet.ServletContextHandler context =
    new org.eclipse.jetty.servlet.ServletContextHandler(
        org.eclipse.jetty.servlet.ServletContextHandler.SESSIONS);
context.setContextPath(contextPath);
server.setHandler(context);

// Add servlet for each route
context.addServlet(new org.eclipse.jetty.servlet.ServletHolder(
    new javax.servlet.http.HttpServlet() {
        @Override
        protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
            // Handler implementation
        }
    }), "/route-path");

// Start server
server.start();
System.out.println("Server started on port " + port);
server.join();

}
```

### 5.2 Common Route Patterns

**GET - Retrieve data:**
```java
context.addServlet(new org.eclipse.jetty.servlet.ServletHolder(
    new javax.servlet.http.HttpServlet() {
        @Override
        protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
            res.setContentType("application/json");
            res.setCharacterEncoding("UTF-8");
            PrintWriter out = res.getWriter();

            // Query database
            com.esarks.arm.model.jeo.ServiceJeo jeo =
                new com.esarks.arm.model.jeo.ServiceJeo();
            tableCrud.batchRetrieveTABLE(jeo);

            // Return JSON
            out.print("{\"data\":[");
            // ... serialize results
            out.print("]}");
        }
    }), "/api/items");
```

**POST - Create/Update data:**
```java
context.addServlet(new org.eclipse.jetty.servlet.ServletHolder(
    new javax.servlet.http.HttpServlet() {
        @Override
        protected void doPost(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
            // Read form data
            String name = req.getParameter("name");

            // Create entity
            TABLE entity = new TABLE();
            entity.setID(java.util.UUID.randomUUID().toString());
            entity.setNAME(name);

            // Save
            com.esarks.arm.model.jeo.ServiceJeo jeo =
                new com.esarks.arm.model.jeo.ServiceJeo();
            jeo.setRequest(entity);
            tableCrud.batchCreateTABLE(jeo);

            // Redirect or return JSON
            res.sendRedirect("/success");
        }
    }), "/api/create");
```

### 5.3 Server Checklist

- [ ] CRUD services initialized for all tables
- [ ] Utility services initialized (Email, JWT, etc.)
- [ ] CORS headers configured
- [ ] Health check endpoint (`/health`)
- [ ] Authentication/authorization implemented
- [ ] Error handling for all routes
- [ ] JSON serialization for API responses
- [ ] HTML rendering for form pages

---

## 6. Configuration Files

### 6.1 Local Development Properties

`config/properties/Properties.xml`:

```xml
<PENDINGxml version="1.0" encoding="UTF-8"PENDING>
<properties>
  <database>
    <connection id="application">
      <driver>org.postgresql.Driver</driver>
      <url>jdbc:postgresql://localhost:5432/{appname}_db</url>
      <username>{appname}_user</username>
      <password>local_password</password>
    </connection>
  </database>

  <server>
    <http>
      <port>8080</port>
      <host>0.0.0.0</host>
    </http>
  </server>

  <storage>
    <type>local</type>
    <local>
      <basePath>C:\path\to\uploads</basePath>
    </local>
  </storage>
</properties>
```

### 6.2 Docker Properties (Template)

`docker/Properties-docker.xml`:

```xml
<com.esarks.arm.schemas.properties.root>
  <property>default
    <context>default</context>

    <dbTypes name="postgresql">
      <!-- Type mappings -->
    </dbTypes>

    <dbConnection name="application" openCount="5">
      <jdbcClass>org.postgresql.Driver</jdbcClass>
      <jdbcConnection>jdbc:postgresql://__DB_HOST__:__DB_PORT__/{appname}</jdbcConnection>
      <jdbcUser>{appname}_user</jdbcUser>
      <jdbcPassword>__DB_PASSWORD__</jdbcPassword>
      <dbTypes>postgresql</dbTypes>
      <catalog>public</catalog>
      <stereotype>postgreSql</stereotype>
    </dbConnection>

    <smtp>
      <host>smtp.gmail.com</host>
      <port>587</port>
      <username>__SMTP_USERNAME__</username>
      <password>__SMTP_PASSWORD__</password>
    </smtp>
  </property>
</com.esarks.arm.schemas.properties.root>
```

### 6.3 Configuration Checklist

- [ ] Local `Properties.xml` with development settings
- [ ] Docker `Properties-docker.xml` with placeholder tokens
- [ ] Database connection name matches `dbConnection` in Components.json
- [ ] SMTP configuration for email features
- [ ] Storage paths configured (local or S3)

---

## 7. Utility Classes

### 7.1 Required Utilities

Create in `util/` directory:

| Class | Purpose |
|-------|---------|
| `HashUtil.java` | Password hashing (SHA-256) |
| `JWTUtil.java` | JWT token generation/validation |
| `EmailService.java` | SMTP email sending |
| `RateLimiter.java` | Request rate limiting |
| `S3Client.java` | S3/Cloud Storage uploads |
| `RequestContext.java` | Request context/user info |
| `JsonUtil.java` | JSON serialization helpers |

### 7.2 Utility Pattern Examples

**HashUtil.java:**
```java
package com.{appname}.util;

import java.security.MessageDigest;
import java.nio.charset.StandardCharsets;

public class HashUtil {
    private static final String SALT = "your-application-salt";

    public static String hashPassword(String password) throws Exception {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest((password + SALT).getBytes(StandardCharsets.UTF_8));
        StringBuilder hexString = new StringBuilder();
        for (byte b : hash) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) hexString.append('0');
            hexString.append(hex);
        }
        return hexString.toString();
    }

    public static boolean verifyPassword(String password, String hash) throws Exception {
        return hashPassword(password).equals(hash);
    }
}
```

### 7.3 Utility Checklist

- [ ] All utility classes in `util/` directory
- [ ] Package declaration matches structure
- [ ] No external dependencies (pure Java where possible)
- [ ] Environment variable support for secrets
- [ ] Singleton pattern for services (EmailService, etc.)

---

## 8. Build System

### 8.1 Build Phases

| Phase | Script | Purpose |
|-------|--------|---------|
| 0 | `phase0-clean.bat` | Clean build directories |
| 1 | `phase1-generate-data.bat` | Generate DDL and JEO files |
| 2 | `phase2-generate-forms.bat` | Generate UI forms (if any) |
| 3 | `phase3-compile-scripts.bat` | Compile .script files to .java |
| 3.5 | `phase3.5-execute-generators.bat` | Execute generators |
| 3.55 | (in allPhases.bat) | Compile utility .java files |
| 3.6 | (in allPhases.bat) | Recompile server with JEO/CRUD |
| 4 | `phase4-verify.bat` | Verify build artifacts |

### 8.2 Environment Setup Script

`bin/Set2{AppName}.bat`:

```batch
@echo off
REM Set JAC environment for {AppName}

set JAC_BUILD=C:\path\to\jac2024\jacBuild24
set JAC_HOME=%JAC_BUILD%
set JAVA_HOME=%JAC_BUILD%\jdk-24

set {APPNAME}_HOME=C:\path\to\jac2024\app\com\{appname}
set {APPNAME}_BIN=%{APPNAME}_HOME%\bin
set {APPNAME}_CLASSES=C:\path\to\jac2024\classes\com\{appname}

set CLASSPATH=%JAC_BUILD%\classes
for /R %JAC_BUILD%\lib %%G in (*.jar) do set CLASSPATH=!CLASSPATH!;%%G
set CLASSPATH=%CLASSPATH%;C:\path\to\jac2024\classes
```

### 8.3 Main Build Script

`bin/allPhases.bat`:
- Sets up environment
- Calls each phase script in order
- Compiles utility Java files
- Recompiles server after JEO/CRUD generation
- Verifies build artifacts

### 8.4 Build Checklist

- [ ] `Set2{AppName}.bat` configures all paths
- [ ] Phase scripts exist and are executable
- [ ] `allPhases.bat` orchestrates full build
- [ ] Utility classes compile in correct order (dependencies)
- [ ] Server recompiles after JEO/CRUD generation
- [ ] Build verification checks for critical files

---

## 9. JRun Files

### 9.1 JRun File Purpose

JRun files (`.jrun`) are XML-based launcher files that tell JAC which script to execute and with what method/arguments.

### 9.2 JRun File Structure

**Basic JRun (single script execution):**
```xml
<PENDINGxml version="1.0"PENDING>
<jacrun script="com.{appname}.server.{AppName}Router" method="execute" />
```

**JRun with arguments:**
```xml
<PENDINGxml version="1.0"PENDING>
<jacrun script="com.esarks.jac.make.MakeAll"
        method="execute"
        argument="com.{appname}.data.{AppName}Make"
        argument2="true" />
```

**Generator JRun:**
```xml
<PENDINGxml version="1.0"PENDING>
<jrun>
  <script method="generateDdl" argument="{AppName}Ddl.xml">com.esarks.jac.generators.GenerateDdl</script>
</jrun>
```

### 9.3 Common JRun Files

| File | Purpose |
|------|---------|
| `Start{AppName}Router.jrun` | Launch the main application server |
| `RunMakeAll.jrun` | Execute MakeAll to generate JEO/CRUD |
| `GenerateDdlJeo.jrun` | Generate DDL SQL scripts |
| `GenerateAllowanceAlleyJeo.jrun` | Generate JEO entity classes |
| `TestConnection.jrun` | Test database connectivity |
| `VerifySchema.jrun` | Verify database schema matches DDL |

### 9.4 Running JRun Files

```batch
cd C:\path\to\jac2024\app\com\{appname}
..\..\..\jacBuild24\bin\Jrun2.bat data\RunMakeAll.jrun
..\..\..\jacBuild24\bin\JrunDirect.bat server\Start{AppName}Router.jrun
```

### 9.5 JRun Checklist

- [ ] `Start{AppName}Router.jrun` - Server launcher
- [ ] `RunMakeAll.jrun` - Data layer generation
- [ ] Generator jruns for DDL, JEO, CRUD
- [ ] Test/verification jruns for database

---

## 10. Docker Containerization

### 10.1 Dockerfile (Multi-Stage)

`docker/Dockerfile`:

```dockerfile
# Stage 1: Build
FROM eclipse-temurin:24-jdk-alpine AS builder
WORKDIR /build

# Copy JAC runtime
COPY jacBuild24/lib ./lib
COPY jacBuild24/classes ./jacBuild24-classes
COPY jacBuild24/license.xml ./license.xml
COPY jacBuild24/conf ./conf

# Copy application
COPY classes ./classes
COPY app/com/{appname} ./app/com/{appname}
COPY app/com/esarks/arm/schemas ./app/com/esarks/arm/schemas
COPY bin ./bin
COPY config ./config

# Stage 2: Runtime
FROM eclipse-temurin:24-jre-alpine

RUN apk add --no-cache bash curl ca-certificates tzdata netcat-openbsd dos2unix

# Create non-root user
RUN addgroup -S jac -g 1000 && adduser -S jac -u 1000 -G jac

WORKDIR /opt/jac

# Copy from builder
COPY --from=builder --chown=jac:jac /build/lib ./lib
COPY --from=builder --chown=jac:jac /build/jacBuild24-classes ./jacBuild24-classes
COPY --from=builder --chown=jac:jac /build/classes ./classes
COPY --from=builder --chown=jac:jac /build/license.xml ./license.xml
COPY --from=builder --chown=jac:jac /build/app ./app
COPY --from=builder --chown=jac:jac /build/bin ./bin
COPY --from=builder --chown=jac:jac /build/config ./config

# Docker-specific config
COPY --chown=jac:jac app/com/{appname}/docker/Properties-docker.xml ./config/properties/Properties.xml
COPY --chown=jac:jac app/com/{appname}/docker/docker-entrypoint.sh ./docker-entrypoint.sh
RUN dos2unix ./docker-entrypoint.sh && chmod +x ./docker-entrypoint.sh

RUN mkdir -p /opt/jac/logs /opt/jac/data /opt/jac/uploads && \
    chown -R jac:jac /opt/jac

USER jac

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

ENV JAC_HOME=/opt/jac \
    JAVA_OPTS="-Xms256m -Xmx512m -XX:+UseG1GC -XX:+UseContainerSupport" \
    PORT=8080

ENTRYPOINT ["./docker-entrypoint.sh"]
```

### 10.2 Docker Entrypoint

`docker/docker-entrypoint.sh`:

```bash
#!/bin/bash
set -e

# Wait for database
if [ -n "${DB_HOST}" ] && [ -n "${DB_PORT}" ]; then
    echo "Waiting for database at ${DB_HOST}:${DB_PORT}..."
    while ! nc -z "${DB_HOST}" "${DB_PORT}" 2>/dev/null; do
        sleep 2
    done
    echo "Database ready!"
fi

# Set environment
export JAC_HOME="${JAC_HOME:-/opt/jac}"
export JAC_BASE="${JAC_HOME}"
export JAC_WORK="${JAC_HOME}/classes"
export JAC_SCRIPTS="${JAC_HOME}"
export JAVA_HOME="/opt/java/openjdk"

# Substitute secrets in Properties.xml
PROPS_FILE="${JAC_HOME}/config/properties/Properties.xml"
[ -n "${DB_HOST}" ] && sed -i "s/__DB_HOST__/${DB_HOST}/g" "${PROPS_FILE}"
[ -n "${DB_PORT}" ] && sed -i "s/__DB_PORT__/${DB_PORT}/g" "${PROPS_FILE}"
[ -n "${DB_PASSWORD}" ] && sed -i "s/__DB_PASSWORD__/${DB_PASSWORD}/g" "${PROPS_FILE}"

# Build classpath
CLASSPATH="${JAC_HOME}/jacBuild24-classes"
for jar in ${JAC_HOME}/lib/*/*.jar ${JAC_HOME}/lib/*.jar; do
    [ -f "$jar" ] && CLASSPATH="${CLASSPATH}:${jar}"
done
CLASSPATH="${CLASSPATH}:${JAC_HOME}/classes"
export CLASSPATH

# Start application
exec java ${JAVA_OPTS} \
    -cp "${CLASSPATH}" \
    com.esarks.jac.jac \
    -script "com.esarks.jac.jrun.Job" \
    -method "execute" \
    -argument "com.{appname}.server.{AppName}Router" \
    -argument "execute" \
    -home "${JAC_HOME}" \
    -work "${JAC_WORK}" \
    -scripts "${JAC_SCRIPTS}"
```

### 10.3 Docker Ignore

`.dockerignore`:

```
.git
.gitignore
*.log
*.tmp
*.bak
*.md
.env
jacBuild24/jdk-*/
logs/
*.bat
*.ps1
__pycache__/
```

### 10.4 Docker Helper Scripts

AllowanceAlley includes helper scripts in `docker/`:

| Script | Purpose |
|--------|---------|
| `build.bat` | Build Docker image |
| `start.bat` | Start container |
| `stop.bat` | Stop container |
| `restart.bat` | Restart container |
| `logs.bat` | View container logs |
| `status.bat` | Check container status |
| `clean.bat` | Remove container and image |
| `rebuild.bat` | Clean, build, and start |

### 10.5 Docker Compose (Local Development)

`docker-compose.yml` for local testing with PostgreSQL:

```yaml
version: '3.8'
services:
  app:
    build:
      context: ../../../..
      dockerfile: app/com/{appname}/docker/Dockerfile
    ports:
      - "8080:8080"
    environment:
      - DB_HOST=postgres
      - DB_PORT=5432
      - DB_PASSWORD=localpassword
      - JWT_SECRET=local-dev-secret
    depends_on:
      - postgres

  postgres:
    image: postgres:15-alpine
    environment:
      - POSTGRES_DB={appname}
      - POSTGRES_USER={appname}_user
      - POSTGRES_PASSWORD=localpassword
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

### 10.6 Docker Checklist

- [ ] Multi-stage Dockerfile (builder + runtime)
- [ ] Uses container JDK (not copied local JDK)
- [ ] Non-root user configured
- [ ] Health check endpoint
- [ ] Entrypoint waits for dependencies
- [ ] Secret substitution in entrypoint
- [ ] Proper classpath construction
- [ ] `.dockerignore` excludes unnecessary files

---

## 11. Google Cloud Deployment

### 11.1 Deployment Methods

There are two primary approaches to deploy JAC applications to Google Cloud:

| Method | Platform | Pros | Cons |
|--------|----------|------|------|
| **Compute Engine VM (Recommended)** | Virtual Machine | Simple, reliable, no containers, direct file deployment | ~$25/month (always on) |
| **Cloud Run (Container)** | Serverless | Pay per request, auto-scaling | Complex setup, 60s startup limit, container issues |

**IMPORTANT:** The recommended pattern is **Compute Engine VM** (used by AllowanceAlley) because:
1. Simple file deployment (no Docker/container complexity)
2. No startup timeout issues
3. Direct JDK installation
4. Easy debugging (SSH access)
5. Persistent storage

### 11.2 Compute Engine VM Deployment (Recommended)

This is the AllowanceAlley pattern - deploy to a dedicated VM.

#### 11.2.1 Prerequisites

- Google Cloud account and project with billing enabled
- `gcloud` CLI installed and authenticated

**IMPORTANT: Enable APIs First!**

Before creating any resources, you MUST enable the required APIs:

```bash
# Set project first
gcloud config set project {project-id}

# Enable required APIs (DO THIS FIRST!)
gcloud services enable compute.googleapis.com    # For VMs
gcloud services enable sqladmin.googleapis.com   # For Cloud SQL
```

If you skip this step, you'll get `PERMISSION_DENIED: Compute Engine API has not been used in project` errors.

#### 11.2.2 Infrastructure Setup

```bash
# Set project
gcloud config set project {project-id}

# Enable APIs
gcloud services enable compute.googleapis.com
gcloud services enable sqladmin.googleapis.com

# Create Cloud SQL instance
gcloud sql instances create {appname}-db \
    --database-version=POSTGRES_15 \
    --cpu=1 \
    --memory=3840MB \
    --region=us-central1 \
    --storage-size=10GB \
    --root-password="YOUR_PASSWORD"

# Create database and user
gcloud sql databases create {appname} --instance={appname}-db
gcloud sql users create {appname}_user --instance={appname}-db --password="APP_PASSWORD"

# Create VM
gcloud compute instances create {appname}-server \
    --zone=us-central1-a \
    --machine-type=e2-medium \
    --image-family=debian-11 \
    --image-project=debian-cloud \
    --boot-disk-size=20GB \
    --boot-disk-type=pd-ssd \
    --tags=http-server,{appname} \
    --scopes=cloud-platform

# Open firewall port
gcloud compute firewall-rules create allow-{appname}-8080 \
    --direction=INGRESS \
    --priority=1000 \
    --network=default \
    --action=ALLOW \
    --rules=tcp:8080 \
    --source-ranges=0.0.0.0/0 \
    --target-tags={appname}
```

#### 11.2.3 VM Setup (SSH into VM)

```bash
# SSH to VM
gcloud compute ssh {appname}-server --zone=us-central1-a

# Install JDK 24
sudo apt-get update
sudo apt-get install -y wget curl
wget https://download.java.net/java/GA/jdk24/... -O jdk-24.tar.gz
sudo mkdir -p /opt/jdk-24
sudo tar -xzf jdk-24.tar.gz -C /opt/jdk-24 --strip-components=1
export JAVA_HOME=/opt/jdk-24
export PATH=$JAVA_HOME/bin:$PATH

# Create app directory
sudo mkdir -p /opt/{appname}
sudo chown $USER:$USER /opt/{appname}
```

#### 11.2.4 Deploy Application

```bash
# From local machine - copy files to VM
gcloud compute scp --recurse --zone=us-central1-a \
    jacBuild24/lib {appname}-server:/opt/{appname}/lib
gcloud compute scp --recurse --zone=us-central1-a \
    jacBuild24/classes {appname}-server:/opt/{appname}/jacBuild24-classes
gcloud compute scp --recurse --zone=us-central1-a \
    classes {appname}-server:/opt/{appname}/classes
gcloud compute scp --recurse --zone=us-central1-a \
    app/com/{appname} {appname}-server:/opt/{appname}/app/com/{appname}
gcloud compute scp --zone=us-central1-a \
    jacBuild24/license.xml {appname}-server:/opt/{appname}/

# Copy config with GCP database settings
gcloud compute scp --zone=us-central1-a \
    app/com/{appname}/deploy/Properties-gcp.xml {appname}-server:/opt/{appname}/config/properties/Properties.xml
```

#### 11.2.5 Start Server Script

Create `deploy/start-server.sh`:

```bash
#!/bin/bash
export JAC_HOME=/opt/{appname}
export JAVA_HOME=/opt/jdk-24
export JAC_WORK=$JAC_HOME/classes
export JAC_SCRIPTS=$JAC_HOME

# Build classpath
CLASSPATH="$JAC_HOME/jacBuild24-classes"
for jar in $JAC_HOME/lib/*/*.jar $JAC_HOME/lib/*.jar; do
    [ -f "$jar" ] && CLASSPATH="$CLASSPATH:$jar"
done
CLASSPATH="$CLASSPATH:$JAC_HOME/classes"

cd $JAC_HOME
$JAVA_HOME/bin/java -Xms512m -Xmx1024m \
    -cp "$CLASSPATH" \
    com.esarks.jac.jac \
    -script "com.esarks.jac.jrun.Job" \
    -method "execute" \
    -argument "com.{appname}.server.{AppName}Router" \
    -argument "execute" \
    -home "$JAC_HOME" \
    -work "$JAC_WORK" \
    -scripts "$JAC_SCRIPTS"
```

#### 11.2.6 Run as Service (systemd)

Create `/etc/systemd/system/{appname}.service`:

```ini
[Unit]
Description={AppName} JAC Server
After=network.target

[Service]
Type=simple
User=your-user
WorkingDirectory=/opt/{appname}
ExecStart=/opt/{appname}/start-server.sh
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl daemon-reload
sudo systemctl enable {appname}
sudo systemctl start {appname}
sudo systemctl status {appname}
```

### 11.3 Cloud Run Deployment (Alternative)

Use this if you prefer serverless/pay-per-request pricing. See Section 11.5 for details.

### 11.4 Prerequisites (Cloud Run)

- Google Cloud account and project
- `gcloud` CLI installed
- Docker Desktop (for local build) OR proper `.gcloudignore`
- Artifact Registry repository

### 11.5 Project Setup

```bash
# Set project
gcloud config set project {project-id}

# Enable APIs
gcloud services enable artifactregistry.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable sqladmin.googleapis.com

# Create Artifact Registry repository
gcloud artifacts repositories create {appname}-repo \
    --repository-format=docker \
    --location=us-central1
```

### 11.3 Build and Deploy Commands

**Complete build and deploy sequence:**

```batch
REM =========================================
REM Step 1: Build the application
REM =========================================
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
call allPhases.bat com/{appname}

REM =========================================
REM Step 2: Build and push Docker image
REM =========================================
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
gcloud config set project {project-id}
gcloud auth configure-docker us-central1-docker.pkg.dev
docker build -f app/com/{appname}/docker/Dockerfile -t us-central1-docker.pkg.dev/{project-id}/{appname}-repo/{appname}-server:latest .
docker push us-central1-docker.pkg.dev/{project-id}/{appname}-repo/{appname}-server:latest

REM =========================================
REM Step 3: Deploy to Cloud Run
REM =========================================
gcloud run deploy {appname}-server --image us-central1-docker.pkg.dev/{project-id}/{appname}-repo/{appname}-server:latest --region us-central1 --platform managed
```

**Example with AllowanceAlley:**

```batch
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
call allPhases.bat com/allowancealley

cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
gcloud config set project allowancealley
gcloud auth configure-docker us-central1-docker.pkg.dev
docker build -f app/com/allowancealley/docker/Dockerfile -t us-central1-docker.pkg.dev/allowancealley/allowancealley-repo/allowancealley-server:latest .
docker push us-central1-docker.pkg.dev/allowancealley/allowancealley-repo/allowancealley-server:latest
gcloud run deploy allowancealley-server --image us-central1-docker.pkg.dev/allowancealley/allowancealley-repo/allowancealley-server:latest --region us-central1 --platform managed
```

**IMPORTANT Notes:**
- The `docker build` command must be run from `jac2024` root directory
- Use `-f` flag to specify the Dockerfile path relative to the build context
- The `.dockerignore` file excludes local JDK - container uses `eclipse-temurin:24`

### 11.4 Cloud Run Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `DB_HOST` | Cloud SQL proxy path | `/cloudsql/{project}:{region}:{instance}` |
| `DB_PORT` | Database port | `5432` |
| `DB_PASSWORD` | Database password (use Secret Manager) | Reference to secret |
| `JWT_SECRET` | JWT signing key (use Secret Manager) | Reference to secret |
| `SMTP_USERNAME` | Email account | `noreply@domain.com` |
| `SMTP_PASSWORD` | Email password (use Secret Manager) | Reference to secret |

### 11.5 Alternative: Cloud Build Deployment

If Docker Desktop isn't available, use Cloud Build. **CRITICAL:** You MUST have a proper `.gcloudignore` file to avoid uploading 3GB+.

**Create `.gcloudignore` in `jac2024/` root:**

```
# Exclude ALL JDK directories (root level and jacBuild24)
jdk-24/
jdk-23/
jdk-13.0.1/
jdk1.8.0_112/
jacBuild24/jdk-24/

# Exclude old build versions
jacBuild8/
jacBuild13/
jacBuild23/

# Exclude local logs
jacBuild24/logs/
logs/

# Exclude git
.git/

# Exclude IDE files
.idea/
.vscode/
*.iml

# Exclude large/unnecessary directories
Watson/
spx-zips/
javadoc/
plantuml-master/
plantuml-stdlib-master/
reports/
Eclipse Project JAC/
GoogleCloud/
.metadata/

# Exclude other apps (keep only the one you're deploying)
app/paul/
app/scripts_migrate/
app/ParseXML/
app/com/esarks/arm/scripts/
app/com/esarks/examples/
app/com/esarks/jac/
app/com/esarks/paul/
app/com/esarks/reports/
# Uncomment the apps you're NOT deploying:
# app/com/allowancealley/
# app/com/mybible/
# app/com/PrayerAgent2/
# app/com/PrayerAgent/

# Exclude temp files
*.tmp
*.bak
*.old
*.log
```

**Cloud Build Commands:**

```batch
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024

REM Build and push to gcr.io (simpler, fewer permission issues)
gcloud builds submit --tag gcr.io/{project-id}/{appname}:v1.0.0 --timeout=1800

REM Deploy from gcr.io
gcloud run deploy {appname} --image gcr.io/{project-id}/{appname}:v1.0.0 --region us-central1 --allow-unauthenticated --memory 1Gi --port 8080 --timeout 300
```

**Common Cloud Build Issues:**

| Issue | Solution |
|-------|----------|
| Upload too large (3GB+) | Fix `.gcloudignore` - exclude JDKs, old builds, other apps |
| Artifact Registry permission denied | Use `gcr.io` instead, or grant `roles/artifactregistry.writer` to Cloud Build SA |
| Container fails to start | Check logs: `gcloud logging read 'resource.type=cloud_run_revision'` |
| ClassNotFoundException | JAR files excluded - check `.gcloudignore` doesn't exclude `jacBuild24/lib/` |

### 11.6 Deployment Checklist

- [ ] Google Cloud project created and billing enabled
- [ ] Required APIs enabled
- [ ] Artifact Registry repository created
- [ ] Docker authenticated to Artifact Registry
- [ ] Image builds successfully
- [ ] Image pushes to registry
- [ ] Cloud Run service deployed
- [ ] Environment variables configured
- [ ] Secrets stored in Secret Manager
- [ ] Cloud SQL connection configured
- [ ] Health check passing

---

## 12. Database Setup (Cloud SQL)

### 12.1 Create Cloud SQL Instance

```bash
# Create PostgreSQL instance
gcloud sql instances create {appname}-db \
    --database-version=POSTGRES_15 \
    --tier=db-f1-micro \
    --region=us-central1 \
    --root-password=initial-password

# Create database
gcloud sql databases create {appname} --instance={appname}-db

# Create user
gcloud sql users create {appname}_user \
    --instance={appname}-db \
    --password=secure-password
```

### 12.2 Access Cloud SQL Studio

URL: `https://console.cloud.google.com/sql/instances/{appname}-db/studioPENDINGproject={project-id}`

### 12.3 PostgreSQL Schema Notes

- PostgreSQL uses lowercase for unquoted identifiers
- Use lowercase table names in SQL: `chore_assignments` not `CHORE_ASSIGNMENTS`
- DDL generates uppercase names; PostgreSQL stores as lowercase

### 12.4 Initial Schema

Run generated SQL or create tables manually:

```sql
CREATE TABLE families (
    id VARCHAR(36) PRIMARY KEY,
    owner_id VARCHAR(255) NOT NULL,
    owner_email VARCHAR(255),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL
);

-- Add remaining tables...
```

### 12.5 Schema Migrations

For adding columns:

```sql
ALTER TABLE chore_assignments ADD COLUMN recurrence VARCHAR(50);
ALTER TABLE chore_assignments ADD COLUMN days_of_week VARCHAR(20);
ALTER TABLE chore_assignments ADD COLUMN due_date DATE;
```

### 12.6 Database Checklist

- [ ] Cloud SQL instance created
- [ ] Database created
- [ ] User created with appropriate permissions
- [ ] All tables created from DDL
- [ ] Foreign keys established
- [ ] Indexes on frequently queried columns
- [ ] Cloud Run connected via Cloud SQL Proxy
- [ ] Connection tested from application

---

## 13. Static HTML Forms

### 13.1 Forms Directory Structure

AllowanceAlley includes static HTML forms in `forms/`:

```
forms/
├── register.html          # User registration form
├── verify.html            # Email verification form
├── ChoreManagement.script # Dynamic chore form (script-based)
└── ChoreManagement.json   # Form metadata
```

### 13.2 Static HTML Form Pattern

```html
<!DOCTYPE html>
<html>
<head>
    <title>Form Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        /* Mobile-first responsive CSS */
    </style>
</head>
<body>
    <form action="/api/endpoint" method="POST">
        <input type="text" name="fieldName" required>
        <button type="submit">Submit</button>
    </form>
    <script>
        // Form validation and AJAX submission
    </script>
</body>
</html>
```

### 13.3 Server-Rendered HTML (in Router.script)

HTML can also be generated directly in the router:

```java
context.addServlet(new org.eclipse.jetty.servlet.ServletHolder(
    new javax.servlet.http.HttpServlet() {
        @Override
        protected void doGet(HttpServletRequest req, HttpServletResponse res)
            throws ServletException, IOException {
            res.setContentType("text/html");
            PrintWriter out = res.getWriter();

            out.println("<!DOCTYPE html>");
            out.println("<html><head><title>Page</title></head>");
            out.println("<body>");
            out.println("<h1>Dynamic Content</h1>");
            // ... generate HTML with data from database
            out.println("</body></html>");
        }
    }), "/page");
```

### 13.4 Forms Checklist

- [ ] Static HTML forms in `forms/` directory
- [ ] Mobile-responsive CSS
- [ ] Form validation (client-side and server-side)
- [ ] CSRF protection if needed
- [ ] Proper form action endpoints

---

## 14. Model Scripts

### 14.1 Model Directory Purpose

The `model/` directory contains database initialization and utility scripts:

```
model/
└── DatabaseInit.script    # Initialize database schema
```

### 14.2 DatabaseInit.script Pattern

```java
<& com.esarks.arm.scripts.Method
   <method name="execute" visibility="public" return="void">
     <document>Initialize database schema</document>
   </method>
&>

import java.sql.*;

%>
==============================================================================
                    {AppName} Database Initialization
==============================================================================
<%

// Get database connection from Properties.xml
DbConnectionFactory dbFactory = DbConnectionFactory.getInstance();
DbConnection db = dbFactory.getDbConnection("application");

if (!db.getSuccess()) {
%>
ERROR: Database connection failed
<%
    return;
}

// Execute DDL statements
Connection conn = db.getConnection();
Statement stmt = conn.createStatement();

// Create tables...
stmt.executeUpdate("CREATE TABLE IF NOT EXISTS ...");

db.close();
%>
Database initialization complete.
<%
```

### 14.3 Running Model Scripts

```batch
cd C:\path\to\jac2024\app\com\{appname}
..\..\..\jacBuild24\bin\jac.bat com.{appname}.model.DatabaseInit execute
```

### 14.4 Model Checklist

- [ ] `DatabaseInit.script` for schema setup
- [ ] Connection error handling
- [ ] Idempotent operations (CREATE IF NOT EXISTS)
- [ ] Transaction handling for multi-statement operations

---

## 15. Checklist Summary

### Pre-Development
- [ ] Application name and package structure defined
- [ ] Entity relationships documented
- [ ] User roles and authentication planned
- [ ] External service requirements identified

### Development
- [ ] DDL XML with all tables
- [ ] Components and Make JSON files
- [ ] Properties XML (local and Docker versions)
- [ ] Router script with all endpoints
- [ ] Utility classes implemented
- [ ] Build scripts configured

### Build
- [ ] Environment setup script works
- [ ] All phases complete without errors
- [ ] JEO/CRUD classes generated
- [ ] Server compiles successfully
- [ ] Utility classes compile

### Docker
- [ ] Dockerfile works with multi-stage build
- [ ] Entrypoint handles secrets and dependencies
- [ ] Image builds locally
- [ ] Container runs and passes health check

### Google Cloud
- [ ] Project and APIs configured
- [ ] Artifact Registry repository exists
- [ ] Cloud SQL instance and database ready
- [ ] Secrets in Secret Manager
- [ ] Cloud Run deployment successful
- [ ] Environment variables configured
- [ ] Application accessible and functional

---

## Quick Reference Commands

### Build
```batch
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
call allPhases.bat com/{appname}
```

### Deploy
```batch
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
gcloud config set project {project-id}
gcloud auth configure-docker us-central1-docker.pkg.dev
docker build -f app/com/{appname}/docker/Dockerfile -t us-central1-docker.pkg.dev/{project-id}/{appname}-repo/{appname}-server:latest .
docker push us-central1-docker.pkg.dev/{project-id}/{appname}-repo/{appname}-server:latest
gcloud run deploy {appname}-server --image us-central1-docker.pkg.dev/{project-id}/{appname}-repo/{appname}-server:latest --region us-central1 --platform managed
```

### Local Run
```batch
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\com\{appname}
..\..\..\jacBuild24\bin\JrunDirect.bat server\Start{AppName}Router.jrun
```

### Database Access
```
https://console.cloud.google.com/sql/instances/{appname}-db/studioPENDINGproject={project-id}
```

### AllowanceAlley Example (Complete)
```batch
REM Build
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
call allPhases.bat com/allowancealley

REM Deploy
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024
gcloud config set project allowancealley
gcloud auth configure-docker us-central1-docker.pkg.dev
docker build -f app/com/allowancealley/docker/Dockerfile -t us-central1-docker.pkg.dev/allowancealley/allowancealley-repo/allowancealley-server:latest .
docker push us-central1-docker.pkg.dev/allowancealley/allowancealley-repo/allowancealley-server:latest
gcloud run deploy allowancealley-server --image us-central1-docker.pkg.dev/allowancealley/allowancealley-repo/allowancealley-server:latest --region us-central1 --platform managed
```

---

*Document Version: 1.2*
*Updated: December 2024*
*Based on AllowanceAlley reference implementation*
*JAC Framework 2024*

**Change Log:**
- v1.2: Added Compute Engine VM deployment as recommended method (AllowanceAlley pattern)
- v1.1: Added Cloud Build deployment section with `.gcloudignore` patterns and troubleshooting
