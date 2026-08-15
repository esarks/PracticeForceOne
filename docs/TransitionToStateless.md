---
title: "TransitionToStateless"
---

# AllowanceAlley: Transition to Stateless API Architecture

## Document Overview

**Purpose:** Step-by-step guide to transform AllowanceAlley from a session-based web application to a truly stateless REST API suitable for Docker/Kubernetes deployment.

**Guiding Principle:** Each phase results in a fully functional application. No phase leaves the application broken.

**Estimated Total Effort:** 5-7 days

**Document Version:** 1.0
**Last Updated:** 2025-12-05
**Status:** Ready for Implementation

---

## Table of Contents

1. [Current State Analysis](#1-current-state-analysis)
2. [Target Architecture](#2-target-architecture)
3. [Phase 0: Preparation & Backup](#phase-0-preparation--backup)
4. [Phase 1: Add RequestContext Helper (Parallel Auth)](#phase-1-add-requestcontext-helper-parallel-auth)
5. [Phase 2: Externalize All Secrets](#phase-2-externalize-all-secrets)
6. [Phase 3: Remove Static Date State](#phase-3-remove-static-date-state)
7. [Phase 4: Convert Endpoints to Dual-Mode (Session + JWT)](#phase-4-convert-endpoints-to-dual-mode-session--jwt)
8. [Phase 5: Add Pure JSON API Endpoints](#phase-5-add-pure-json-api-endpoints)
9. [Phase 6: Replace Local File Storage with S3](#phase-6-replace-local-file-storage-with-s3)
10. [Phase 7: Remove Session Dependency](#phase-7-remove-session-dependency)
11. [Phase 8: Docker Containerization](#phase-8-docker-containerization)
12. [Phase 9: Production Hardening](#phase-9-production-hardening)
13. [Rollback Procedures](#rollback-procedures)
14. [Testing Checklist](#testing-checklist)
15. [Appendix: Code Templates](#appendix-code-templates)

---

## 1. Current State Analysis

### 1.1 Session Usage Inventory

The application currently uses HTTP sessions extensively. Here is the complete inventory:

| Line | File | Usage Pattern | Session Attributes |
|------|------|---------------|-------------------|
| 479-492 | AllowanceAlleyRouter.script | Menu redirect check | userId, role |
| 1092-1093 | AllowanceAlleyRouter.script | Login page check | userId |
| 1305-1310 | AllowanceAlleyRouter.script | Parent login - SET | userId, email, familyId, familyName, role |
| 1388 | AllowanceAlleyRouter.script | Parent login - SET | effectiveDate |
| 1459-1463 | AllowanceAlleyRouter.script | Logout - invalidate | email |
| 1483-1494 | AllowanceAlleyRouter.script | Dashboard - GET | userId, email, familyId, familyName, effectiveDate |
| 1701-1726 | AllowanceAlleyRouter.script | Date change - GET/SET | familyId, effectiveDate |
| 1784-1797 | AllowanceAlleyRouter.script | Chores list - GET | role, familyId, familyName, effectiveDate |
| 1945-1955 | AllowanceAlleyRouter.script | Chore create form - GET | role, effectiveDate |
| 2032-2044 | AllowanceAlleyRouter.script | Chore create POST - GET | role, familyId, userId |
| 2111-2123 | AllowanceAlleyRouter.script | Chore edit - GET | role, familyId, effectiveDate |
| 2239-2250 | AllowanceAlleyRouter.script | Chore update - GET | role, familyId |
| 2331-2342 | AllowanceAlleyRouter.script | Chore delete - GET | role, familyId |
| 2401-2413 | AllowanceAlleyRouter.script | Assignments - GET | role, familyId, effectiveDate |
| 2545-2555 | AllowanceAlleyRouter.script | Assignment create form - GET | role, effectiveDate |
| 2626-2637 | AllowanceAlleyRouter.script | Assignment create POST - GET | role, familyId |
| 2701-2714 | AllowanceAlleyRouter.script | Assignment complete - GET | role, familyId, effectiveDate |
| 2821-2832 | AllowanceAlleyRouter.script | Rewards - GET | role, familyId |
| 2906-2917 | AllowanceAlleyRouter.script | Reward create - GET | role, familyId |
| 2966-2980 | AllowanceAlleyRouter.script | Child dashboard - GET | role, familyId, memberId, childName, effectiveDate |
| 3216-3230 | AllowanceAlleyRouter.script | Child chore complete - GET | role, familyId, memberId, childName, effectiveDate |
| 3493-3499 | AllowanceAlleyRouter.script | Child login - SET | userId, memberId, childName, familyId, familyName, role |

**Total Session Usages:** ~100 occurrences across 22 distinct endpoints

### 1.2 Static State Inventory

| Component | Location | Issue |
|-----------|----------|-------|
| TestDateUtil.fixedMode | Lines 92-185 | Static boolean shared across all requests |
| TestDateUtil.fixedDate | Lines 92-185 | Static LocalDate shared across all requests |
| families ArrayList | Line 456 | Shared collection (appears unused) |
| chores ArrayList | Line 457 | Shared collection (appears unused) |

### 1.3 File System Dependencies

| Operation | Location | Current Implementation |
|-----------|----------|----------------------|
| Photo upload | Lines 6797-6818 | Writes to `{user.dir}/uploads/chores/` |
| Photo serving | Lines 6969-7022 | Reads from `{user.dir}/uploads/` |

### 1.4 Hardcoded Secrets

| Secret | Location | Current Value |
|--------|----------|---------------|
| JWT Secret | JWTUtil.script:43, 92 | `your-256-bit-secret-key-change-in-production-min-32-chars` |
| SMTP Password | AllowanceAlleyRouter.script:71 | `tchhjwdbfdtbpwwu` (Gmail App Password) |
| SMTP Username | AllowanceAlleyRouter.script:70 | `Paul.esarks@gmail.com` |

### 1.5 What's Already Good

- **JWT Implementation:** JWTUtil.script is stateless and self-contained
- **Environment Variable Support:** SMTP config already checks `System.getenv()` first
- **Health Endpoint:** `/health` exists and returns JSON
- **CRUD Services:** All use database connections, no in-memory state
- **Jetty Embedded:** Standard pattern, Docker-compatible

---

## 2. Target Architecture

### 2.1 Stateless Principles

1. **No server-side session state** - All user context from JWT tokens
2. **No static mutable state** - All dates/config passed per-request or from environment
3. **No local file storage** - All files in S3-compatible object storage
4. **All secrets from environment** - Zero hardcoded credentials
5. **Horizontal scalability** - Any instance handles any request

### 2.2 Authentication Flow (Target)

```
┌─────────┐         ┌─────────────┐         ┌──────────┐
│ Client  │         │  API Server │         │ Database │
└────┬────┘         └──────┬──────┘         └────┬─────┘
     │                     │                     │
     │ POST /api/auth/login│                     │
     │ {email, password}   │                     │
     │────────────────────>│                     │
     │                     │ SELECT auth_users   │
     │                     │────────────────────>│
     │                     │<────────────────────│
     │                     │                     │
     │ {token: "eyJ...",   │                     │
     │  user: {...}}       │                     │
     │<────────────────────│                     │
     │                     │                     │
     │ GET /api/chores     │                     │
     │ Authorization:      │                     │
     │   Bearer eyJ...     │                     │
     │────────────────────>│                     │
     │                     │ Verify JWT          │
     │                     │ Extract familyId    │
     │                     │ SELECT chores       │
     │                     │────────────────────>│
     │                     │<────────────────────│
     │ {chores: [...]}     │                     │
     │<────────────────────│                     │
```

### 2.3 Request Context Flow (Target)

```java
// Every protected endpoint:
RequestContext ctx = RequestContext.fromRequest(request);
if (!ctx.isAuthenticated()) {
    response.setStatus(401);
    response.getWriter().write("{\"error\":\"Unauthorized\"}");
    return;
}

String familyId = ctx.getFamilyId();  // From JWT
String userId = ctx.getUserId();       // From JWT
String role = ctx.getRole();           // From JWT
LocalDate effectiveDate = ctx.getEffectiveDate(request);  // From header or param
```

---

## Phase 0: Preparation & Backup

**Duration:** 30 minutes
**Risk Level:** None
**Application Status After:** Unchanged, fully functional

### 0.1 Create Backup

```powershell
# Create timestamped backup
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$backupDir = "C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\com\allowancealley\backup_$timestamp"

# Copy entire application
Copy-Item -Path "C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\com\allowancealley" `
          -Destination $backupDir -Recurse

Write-Host "Backup created at: $backupDir"
```

### 0.2 Create Git Branch

```bash
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion
git checkout -b feature/stateless-api
git add .
git commit -m "Checkpoint: Before stateless API transition"
```

### 0.3 Document Current Behavior

Test and document current functionality:

```powershell
# Start server
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\com\allowancealley
./bin/allPhases.bat

# Test endpoints (in another terminal)
curl http://localhost:8080/health
curl http://localhost:8080/menu
# Login via browser and test all flows
```

### 0.4 Verification Checklist

- [ ] Backup directory created and contains all files
- [ ] Git branch created
- [ ] Server starts successfully
- [ ] Health endpoint responds
- [ ] Login flow works
- [ ] All major features functional

---

## Phase 1: Add RequestContext Helper (Parallel Auth)

**Duration:** 2-3 hours
**Risk Level:** Low
**Application Status After:** Fully functional (no changes to existing code yet)

### 1.1 Create RequestContext.script

Create new file: `util/RequestContext.script`

```java
//////////////////////////////////////////////////////////////////////////////
// RequestContext.script
// Stateless request context extraction from JWT tokens
//
// This class provides a bridge between session-based and JWT-based auth.
// It tries JWT first, falls back to session for backward compatibility.
//////////////////////////////////////////////////////////////////////////////

<& com.esarks.arm.scripts.Class
   <class name="RequestContext" visibility="public">
     <document>Extracts user context from JWT or session</document>
   </class>
&>

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import java.time.LocalDate;

// Instance fields
private String userId;
private String familyId;
private String familyName;
private String email;
private String role;
private String memberId;
private String childName;
private boolean authenticated;
private String authMethod;  // "jwt" or "session"

<& com.esarks.arm.scripts.Method
   <method name="fromRequest" visibility="public" static="true" return="RequestContext">
     <document>Extract context from request (JWT first, then session)</document>
     <parameter name="request" type="HttpServletRequest"/>
   </method>
&>

  RequestContext ctx = new RequestContext();

  // Try JWT first
  String authHeader = request.getHeader("Authorization");
  if (authHeader != null && authHeader.startsWith("Bearer ")) {
    try {
      String token = authHeader.substring(7);
      com.allowancealley.util.JWTUtil.JWTPayload payload =
          com.allowancealley.util.JWTUtil.verify(token);

      ctx.userId = payload.userId;
      ctx.familyId = payload.familyId;
      ctx.role = payload.role;
      ctx.authenticated = true;
      ctx.authMethod = "jwt";

      // Additional fields from custom claims if present
      // (would need JWTUtil enhancement for memberId, childName, etc.)

      return ctx;
    } catch (Exception e) {
      // JWT invalid - fall through to session
      System.out.println("[RequestContext] JWT verification failed: " + e.getMessage());
    }
  }

  // Fall back to session
  HttpSession session = request.getSession(false);
  if (session != null && session.getAttribute("userId") != null) {
    ctx.userId = (String) session.getAttribute("userId");
    ctx.familyId = (String) session.getAttribute("familyId");
    ctx.familyName = (String) session.getAttribute("familyName");
    ctx.email = (String) session.getAttribute("email");
    ctx.role = (String) session.getAttribute("role");
    ctx.memberId = (String) session.getAttribute("memberId");
    ctx.childName = (String) session.getAttribute("childName");
    ctx.authenticated = true;
    ctx.authMethod = "session";

    return ctx;
  }

  // Not authenticated
  ctx.authenticated = false;
  return ctx;

<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="getEffectiveDate" visibility="public" return="LocalDate">
     <document>Get effective date from request param, header, or default to today</document>
     <parameter name="request" type="HttpServletRequest"/>
   </method>
&>

  // Check X-Effective-Date header first (for API clients)
  String headerDate = request.getHeader("X-Effective-Date");
  if (headerDate != null && !headerDate.trim().isEmpty()) {
    try {
      return LocalDate.parse(headerDate);
    } catch (Exception e) {
      // Invalid format, continue to next option
    }
  }

  // Check query parameter
  String paramDate = request.getParameter("effectiveDate");
  if (paramDate != null && !paramDate.trim().isEmpty()) {
    try {
      return LocalDate.parse(paramDate);
    } catch (Exception e) {
      // Invalid format, continue to next option
    }
  }

  // Default to today
  return LocalDate.now();

<& com.esarks.arm.scripts.FinalReturnMethod &>

// Getters
<& com.esarks.arm.scripts.Method
   <method name="getUserId" visibility="public" return="String">
     <document>Get user ID</document>
   </method>
&>
  return this.userId;
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="getFamilyId" visibility="public" return="String">
     <document>Get family ID</document>
   </method>
&>
  return this.familyId;
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="getFamilyName" visibility="public" return="String">
     <document>Get family name</document>
   </method>
&>
  return this.familyName;
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="getEmail" visibility="public" return="String">
     <document>Get email</document>
   </method>
&>
  return this.email;
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="getRole" visibility="public" return="String">
     <document>Get role (parent/child)</document>
   </method>
&>
  return this.role;
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="getMemberId" visibility="public" return="String">
     <document>Get member ID (for children)</document>
   </method>
&>
  return this.memberId;
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="getChildName" visibility="public" return="String">
     <document>Get child name</document>
   </method>
&>
  return this.childName;
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="isAuthenticated" visibility="public" return="boolean">
     <document>Check if user is authenticated</document>
   </method>
&>
  return this.authenticated;
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="getAuthMethod" visibility="public" return="String">
     <document>Get authentication method used (jwt or session)</document>
   </method>
&>
  return this.authMethod;
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="isParent" visibility="public" return="boolean">
     <document>Check if user is a parent</document>
   </method>
&>
  return "parent".equals(this.role);
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="isChild" visibility="public" return="boolean">
     <document>Check if user is a child</document>
   </method>
&>
  return "child".equals(this.role);
<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="requireAuth" visibility="public" return="boolean">
     <document>Check auth and send 401 if not authenticated</document>
     <parameter name="response" type="jakarta.servlet.http.HttpServletResponse"/>
   </method>
&>

  if (!this.authenticated) {
    try {
      response.setStatus(401);
      response.setContentType("application/json");
      response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"UNAUTHORIZED\",\"message\":\"Authentication required\"}}");
    } catch (Exception e) {
      // Ignore write errors
    }
    return false;
  }
  return true;

<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="requireParent" visibility="public" return="boolean">
     <document>Check auth and parent role, send 403 if not</document>
     <parameter name="response" type="jakarta.servlet.http.HttpServletResponse"/>
   </method>
&>

  if (!requireAuth(response)) {
    return false;
  }

  if (!isParent()) {
    try {
      response.setStatus(403);
      response.setContentType("application/json");
      response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"FORBIDDEN\",\"message\":\"Parent access required\"}}");
    } catch (Exception e) {
      // Ignore write errors
    }
    return false;
  }
  return true;

<& com.esarks.arm.scripts.FinalReturnMethod &>

//////////////////////////////////////////////////////////////////////////////
```

### 1.2 Compile and Test

```powershell
# Compile the new file
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\com\allowancealley
./bin/phase3-compile-scripts.bat

# Verify compilation succeeded
dir ..\..\..\..\classes\com\allowancealley\util\RequestContext.class
```

### 1.3 Verification Checklist

- [ ] RequestContext.script created in util/
- [ ] Compilation succeeds with no errors
- [ ] RequestContext.class file exists
- [ ] Existing application still works (no changes to router yet)

---

## Phase 2: Externalize All Secrets

**Duration:** 1-2 hours
**Risk Level:** Low
**Application Status After:** Fully functional, secrets now from environment

### 2.1 Update JWTUtil.script

Replace hardcoded secret with environment variable:

**File:** `util/JWTUtil.script`

**Change at line 43:**
```java
// OLD:
String secret = "your-256-bit-secret-key-change-in-production-min-32-chars";

// NEW:
String secret = System.getenv("JWT_SECRET");
if (secret == null || secret.isEmpty()) {
  secret = "your-256-bit-secret-key-change-in-production-min-32-chars";
  System.out.println("[JWT] WARNING: Using default JWT secret. Set JWT_SECRET env var in production!");
}
```

**Change at line 92 (verify method):**
```java
// OLD:
String secret = "your-256-bit-secret-key-change-in-production-min-32-chars";

// NEW:
String secret = System.getenv("JWT_SECRET");
if (secret == null || secret.isEmpty()) {
  secret = "your-256-bit-secret-key-change-in-production-min-32-chars";
}
```

### 2.2 Verify SMTP Already Uses Environment Variables

The router already checks environment variables first (lines 45-64). No change needed, but verify:

```java
// This is already correct:
String smtpUsername = System.getenv("SMTP_USERNAME");
String smtpPassword = System.getenv("SMTP_PASSWORD");
```

### 2.3 Create Environment File Template

Create `.env.template` in the application root:

```bash
# AllowanceAlley Environment Configuration
# Copy this to .env and fill in values

# JWT Configuration (REQUIRED for production)
JWT_SECRET=your-256-bit-secret-key-minimum-32-characters-long

# SMTP Configuration (optional - falls back to mock mode)
SMTP_HOST=smtp.gmail.com
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_ADDRESS=your-email@gmail.com
SMTP_FROM_NAME=AllowanceAlley
SMTP_ENABLED=true

# Database (if externalizing Properties.xml)
DATABASE_URL=jdbc:postgresql://localhost:5432/allowancealley
DB_USER=allowance_user
DB_PASSWORD=secure_password

# Server
PORT=8080

# Storage (Phase 6)
S3_ENDPOINT=http://localhost:9000
S3_ACCESS_KEY=minioadmin
S3_SECRET_KEY=minioadmin
S3_BUCKET=allowancealley-photos
```

### 2.4 Test With Environment Variables

```powershell
# Set environment variables for testing
$env:JWT_SECRET = "test-secret-key-for-local-development-min-32-chars"
$env:SMTP_ENABLED = "false"

# Start server
./bin/allPhases.bat

# Verify in logs:
# [JWT] Using JWT secret from environment
# [EMAIL] Configured from environment variables
```

### 2.5 Verification Checklist

- [ ] JWTUtil.script updated (both generate and verify methods)
- [ ] Server starts with environment variables
- [ ] Server starts without environment variables (uses defaults with warning)
- [ ] Login still works
- [ ] .env.template file created

---

## Phase 3: Remove Static Date State

**Duration:** 2-3 hours
**Risk Level:** Medium
**Application Status After:** Fully functional, date handling per-request

### 3.1 Strategy

The current TestDateUtil uses static state that persists across all requests. We will:

1. Keep TestDateUtil for backward compatibility during transition
2. Modify it to be request-scoped rather than process-scoped
3. Pass effectiveDate through request parameters/headers

### 3.2 Modify TestDateUtil

**In AllowanceAlleyRouter.script, replace lines 92-185 with:**

```java
// ========================================================================
// DATE UTILITY - Per-request date management
// ========================================================================
// Effective date is now determined per-request from:
//   1. X-Effective-Date header (for API clients)
//   2. effectiveDate query parameter
//   3. Database app_settings (for family-specific saved dates)
//   4. Current system date (default)
//
// The static TEST_DATE constant is REMOVED - all date handling is per-request.

class DateUtil {

  // Parse date from request, falling back to current date
  public static java.time.LocalDate getEffectiveDate(
      jakarta.servlet.http.HttpServletRequest request,
      String familyId,
      com.allowancealley.data.APP_SETTINGSCrud appSettingsCrud) {

    // 1. Check X-Effective-Date header (API clients)
    String headerDate = request.getHeader("X-Effective-Date");
    if (headerDate != null && !headerDate.trim().isEmpty()) {
      try {
        java.time.LocalDate parsed = java.time.LocalDate.parse(headerDate);
        System.out.println("[DATE] Using date from header: " + parsed);
        return parsed;
      } catch (Exception e) {
        System.out.println("[DATE] Invalid header date format: " + headerDate);
      }
    }

    // 2. Check query parameter
    String paramDate = request.getParameter("effectiveDate");
    if (paramDate != null && !paramDate.trim().isEmpty()) {
      try {
        java.time.LocalDate parsed = java.time.LocalDate.parse(paramDate);
        System.out.println("[DATE] Using date from parameter: " + parsed);
        return parsed;
      } catch (Exception e) {
        System.out.println("[DATE] Invalid parameter date format: " + paramDate);
      }
    }

    // 3. Check database for family-specific saved date
    if (familyId != null && appSettingsCrud != null) {
      try {
        String effectiveDateKey = "EFFECTIVE_DATE_" + familyId;
        com.esarks.arm.model.jeo.ServiceJeo readJeo = new com.esarks.arm.model.jeo.ServiceJeo();
        readJeo.getRequest().setWhereClause("SETTING_KEY = '" + effectiveDateKey.replace("'", "''") + "'");
        appSettingsCrud.readAPP_SETTINGS(readJeo);

        if (readJeo.getReply() != null && readJeo.getReply().getJeoSize() > 0) {
          com.esarks.jac.Jeo jeo = readJeo.getReply().getJeoAt(0);
          if (jeo instanceof com.allowancealley.data.APP_SETTINGS) {
            com.allowancealley.data.APP_SETTINGS setting = (com.allowancealley.data.APP_SETTINGS) jeo;
            String dbValue = setting.getSETTING_VALUE();
            if (dbValue != null && !dbValue.trim().isEmpty()) {
              java.time.LocalDate parsed = java.time.LocalDate.parse(dbValue);
              System.out.println("[DATE] Using date from database: " + parsed);
              return parsed;
            }
          }
        }
      } catch (Exception e) {
        System.out.println("[DATE] Error reading from database: " + e.getMessage());
      }
    }

    // 4. Default to current system date
    java.time.LocalDate today = java.time.LocalDate.now();
    System.out.println("[DATE] Using current date: " + today);
    return today;
  }

  // Convenience methods
  public static java.sql.Date toSqlDate(java.time.LocalDate date) {
    return java.sql.Date.valueOf(date);
  }

  public static java.sql.Timestamp toTimestamp(java.time.LocalDate date) {
    java.time.LocalTime currentTime = java.time.LocalTime.now();
    java.time.LocalDateTime dateTime = java.time.LocalDateTime.of(date, currentTime);
    return java.sql.Timestamp.valueOf(dateTime);
  }

  public static java.sql.Timestamp nowTimestamp() {
    return new java.sql.Timestamp(System.currentTimeMillis());
  }
}

// Legacy compatibility alias (to minimize changes)
class TestDateUtil {
  private static java.time.LocalDate lastEffectiveDate = java.time.LocalDate.now();

  // These static methods now just return current date
  // Proper date handling should use DateUtil.getEffectiveDate()
  public static java.time.LocalDate today() {
    return lastEffectiveDate;
  }

  public static void setEffectiveDate(java.time.LocalDate date) {
    lastEffectiveDate = date;
  }

  public static java.sql.Timestamp nowTimestamp() {
    return DateUtil.toTimestamp(lastEffectiveDate);
  }

  public static boolean isTestMode() {
    return false;  // No longer supported
  }

  public static String getModeDescription() {
    return "LIVE (" + java.time.LocalDate.now() + ") - per-request date handling";
  }
}

System.out.println("[SERVER] Date mode: " + TestDateUtil.getModeDescription());
```

### 3.3 Remove TEST_DATE Constant

Delete or comment out line 100:
```java
// REMOVED: final String TEST_DATE = null;
```

### 3.4 Update Login Handler to Use New Pattern

In the login POST handler (around line 1312), update date handling:

```java
// Get effective date using new utility
java.time.LocalDate effectiveDate = DateUtil.getEffectiveDate(request, familyId, appSettingsCrud);

// If user explicitly provided a date, save it to database
String effectiveDateStr = request.getParameter("effectiveDate");
if (effectiveDateStr != null && !effectiveDateStr.trim().isEmpty()) {
  // ... existing database save logic ...
}

// Set in session for backward compatibility (will be removed in Phase 7)
session.setAttribute("effectiveDate", effectiveDate.toString());

// Update legacy TestDateUtil for backward compatibility
TestDateUtil.setEffectiveDate(effectiveDate);
```

### 3.5 Verification Checklist

- [ ] TestDateUtil replaced with DateUtil
- [ ] TEST_DATE constant removed
- [ ] Server compiles and starts
- [ ] Login works and date is captured
- [ ] Dashboard shows correct date
- [ ] Date can be changed via request parameter
- [ ] Date can be set via X-Effective-Date header

---

## Phase 4: Convert Endpoints to Dual-Mode (Session + JWT)

**Duration:** 4-6 hours
**Risk Level:** Medium
**Application Status After:** Fully functional with both session AND JWT auth

### 4.1 Strategy

Instead of breaking existing session-based auth, we'll add JWT support alongside it. The RequestContext helper (Phase 1) already handles this - now we integrate it.

### 4.2 Create Protected Endpoint Pattern

Add this helper method near the top of AllowanceAlleyRouter.script (after CRUD initialization):

```java
// ========================================================================
// AUTHENTICATION HELPER - Dual mode (JWT + Session)
// ========================================================================
// Returns RequestContext or null (and sends 401 response) if not authenticated
class AuthHelper {
  public static com.allowancealley.util.RequestContext requireAuth(
      jakarta.servlet.http.HttpServletRequest request,
      jakarta.servlet.http.HttpServletResponse response) {

    com.allowancealley.util.RequestContext ctx =
        com.allowancealley.util.RequestContext.fromRequest(request);

    if (!ctx.isAuthenticated()) {
      try {
        // Check if this is an API request (Accept: application/json or /api/ path)
        String accept = request.getHeader("Accept");
        String path = request.getRequestURI();
        boolean isApi = (accept != null && accept.contains("application/json")) ||
                        path.startsWith("/api/");

        if (isApi) {
          response.setStatus(401);
          response.setContentType("application/json");
          response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"UNAUTHORIZED\",\"message\":\"Authentication required\"}}");
        } else {
          // Redirect to login for browser requests
          response.sendRedirect("/login");
        }
      } catch (Exception e) {
        // Ignore
      }
      return null;
    }

    return ctx;
  }

  public static com.allowancealley.util.RequestContext requireParent(
      jakarta.servlet.http.HttpServletRequest request,
      jakarta.servlet.http.HttpServletResponse response) {

    com.allowancealley.util.RequestContext ctx = requireAuth(request, response);
    if (ctx == null) return null;

    if (!ctx.isParent()) {
      try {
        response.setStatus(403);
        response.setContentType("application/json");
        response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"FORBIDDEN\",\"message\":\"Parent access required\"}}");
      } catch (Exception e) {
        // Ignore
      }
      return null;
    }

    return ctx;
  }
}
```

### 4.3 Update Dashboard Endpoint (Example)

**Before (lines 1478-1494):**
```java
protected void doGet(...) {
  jakarta.servlet.http.HttpSession session = request.getSession(false);
  if (session == null || session.getAttribute("userId") == null) {
    response.sendRedirect("/login");
    return;
  }
  String userId = (String) session.getAttribute("userId");
  String email = (String) session.getAttribute("email");
  String familyId = (String) session.getAttribute("familyId");
  String familyName = (String) session.getAttribute("familyName");
  String effectiveDate = (String) session.getAttribute("effectiveDate");
  // ... rest of handler
}
```

**After:**
```java
protected void doGet(...) {
  com.allowancealley.util.RequestContext ctx = AuthHelper.requireAuth(request, response);
  if (ctx == null) return;

  String userId = ctx.getUserId();
  String email = ctx.getEmail();
  String familyId = ctx.getFamilyId();
  String familyName = ctx.getFamilyName();
  java.time.LocalDate effectiveDate = DateUtil.getEffectiveDate(request, familyId, appSettingsCrud);

  // If from session, familyName might be null - look it up
  if (familyName == null && familyId != null) {
    // Query family name from database
    com.esarks.arm.model.jeo.ServiceJeo familyJeo = new com.esarks.arm.model.jeo.ServiceJeo();
    familyJeo.getRequest().setWhereClause("ID = '" + familyId.replace("'", "''") + "'");
    familiesCrud.readFAMILIES(familyJeo);
    if (familyJeo.getReply() != null) {
      java.util.ArrayList familyList = familyJeo.getReply().getJeoByInstanceName("com.allowancealley.data.FAMILIES");
      if (familyList != null && familyList.size() > 0) {
        com.allowancealley.data.FAMILIES family = (com.allowancealley.data.FAMILIES) familyList.get(0);
        familyName = family.getNAME("");
      }
    }
  }

  // ... rest of handler (unchanged)
}
```

### 4.4 Endpoints to Update

Apply the same pattern to all protected endpoints:

| Endpoint | Line | Role Check |
|----------|------|------------|
| /dashboard | 1478 | Any authenticated |
| /change-date | 1701 | Any authenticated |
| /chores | 1784 | Any authenticated |
| /chore-form | 1945 | Parent only |
| /chore-create | 2032 | Parent only |
| /chore-edit/* | 2111 | Parent only |
| /chore-update | 2239 | Parent only |
| /chore-delete | 2331 | Parent only |
| /assignments | 2401 | Any authenticated |
| /assignment-form | 2545 | Parent only |
| /assignment-create | 2626 | Parent only |
| /assignment-complete | 2701 | Any authenticated |
| /rewards | 2821 | Any authenticated |
| /reward-create | 2906 | Parent only |
| /child-dashboard | 2966 | Child only |
| /child-chore-complete | 3216 | Child only |

### 4.5 Verification Checklist

- [ ] AuthHelper class added
- [ ] All endpoints updated to use RequestContext
- [ ] Session-based login still works
- [ ] API calls with JWT Authorization header work
- [ ] Parent-only endpoints reject children
- [ ] Child-only endpoints reject parents
- [ ] Unauthenticated requests redirect to login (browser) or return 401 (API)

---

## Phase 5: Add Pure JSON API Endpoints

**Duration:** 3-4 hours
**Risk Level:** Low
**Application Status After:** Fully functional + new API endpoints

### 5.1 Add JSON Login Endpoint

Add after the existing login servlet registration:

```java
// ========================================================================
// API: JSON LOGIN ENDPOINT
// ========================================================================
System.out.println("[SERVER] Registering /api/auth/login endpoint");
org.eclipse.jetty.ee10.servlet.ServletHolder apiLoginServlet =
  new org.eclipse.jetty.ee10.servlet.ServletHolder("apiLogin", new jakarta.servlet.http.HttpServlet() {
    protected void doPost(jakarta.servlet.http.HttpServletRequest request,
                         jakarta.servlet.http.HttpServletResponse response)
            throws jakarta.servlet.ServletException, java.io.IOException {

      response.setContentType("application/json");

      try {
        // Read JSON body
        java.io.BufferedReader reader = request.getReader();
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
          sb.append(line);
        }
        String body = sb.toString();

        // Simple JSON parsing (or use Gson)
        String email = extractJsonValue(body, "email");
        String password = extractJsonValue(body, "password");

        if (email == null || password == null) {
          response.setStatus(400);
          response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"INVALID_REQUEST\",\"message\":\"Email and password required\"}}");
          return;
        }

        // Hash password and verify
        String passwordHash = com.allowancealley.util.HashUtil.hash(password);

        // Query user
        com.esarks.arm.model.jeo.ServiceJeo jeo = new com.esarks.arm.model.jeo.ServiceJeo();
        jeo.getRequest().setWhereClause("EMAIL = '" + email.replace("'", "''").toLowerCase() + "'");
        authUsersCrud.readAUTH_USERS(jeo);

        if (jeo.getReply() == null || jeo.getReply().getJeoSize() == 0) {
          response.setStatus(401);
          response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"AUTH_FAILED\",\"message\":\"Invalid credentials\"}}");
          return;
        }

        com.allowancealley.data.AUTH_USERS user =
            (com.allowancealley.data.AUTH_USERS) jeo.getReply().getJeoAt(0);

        String storedHash = user.getPASSWORD_HASH("");
        if (!passwordHash.equals(storedHash)) {
          response.setStatus(401);
          response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"AUTH_FAILED\",\"message\":\"Invalid credentials\"}}");
          return;
        }

        // Check email verified
        if (!user.getEMAIL_VERIFIED(false)) {
          response.setStatus(403);
          response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"EMAIL_NOT_VERIFIED\",\"message\":\"Please verify your email\"}}");
          return;
        }

        String userId = user.getID("");
        String familyId = user.getFAMILY_ID("");

        // Generate JWT
        String token = com.allowancealley.util.JWTUtil.generate(userId, familyId, "parent");

        // Get family name
        String familyName = "";
        com.esarks.arm.model.jeo.ServiceJeo familyJeo = new com.esarks.arm.model.jeo.ServiceJeo();
        familyJeo.getRequest().setWhereClause("ID = '" + familyId.replace("'", "''") + "'");
        familiesCrud.readFAMILIES(familyJeo);
        if (familyJeo.getReply() != null && familyJeo.getReply().getJeoSize() > 0) {
          com.allowancealley.data.FAMILIES family =
              (com.allowancealley.data.FAMILIES) familyJeo.getReply().getJeoAt(0);
          familyName = family.getNAME("");
        }

        // Return success with token
        response.setStatus(200);
        response.getWriter().write(String.format(
          "{\"success\":true,\"data\":{\"token\":\"%s\",\"user\":{\"id\":\"%s\",\"email\":\"%s\",\"familyId\":\"%s\",\"familyName\":\"%s\",\"role\":\"parent\"}}}",
          token, userId, email, familyId, escapeJson(familyName)
        ));

      } catch (Exception e) {
        System.err.println("[API LOGIN] Error: " + e.getMessage());
        response.setStatus(500);
        response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"SERVER_ERROR\",\"message\":\"" + escapeJson(e.getMessage()) + "\"}}");
      }
    }

    private String extractJsonValue(String json, String key) {
      String pattern = "\"" + key + "\"\\s*:\\s*\"([^\"]+)\"";
      java.util.regex.Pattern p = java.util.regex.Pattern.compile(pattern);
      java.util.regex.Matcher m = p.matcher(json);
      return m.find() PENDING m.group(1) : null;
    }

    private String escapeJson(String s) {
      if (s == null) return "";
      return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n");
    }
  });
context.addServlet(apiLoginServlet, "/api/auth/login");
```

### 5.2 Add JSON Chores List Endpoint

```java
// ========================================================================
// API: GET CHORES (JSON)
// ========================================================================
System.out.println("[SERVER] Registering /api/chores endpoint");
org.eclipse.jetty.ee10.servlet.ServletHolder apiChoresServlet =
  new org.eclipse.jetty.ee10.servlet.ServletHolder("apiChores", new jakarta.servlet.http.HttpServlet() {
    protected void doGet(jakarta.servlet.http.HttpServletRequest request,
                        jakarta.servlet.http.HttpServletResponse response)
            throws jakarta.servlet.ServletException, java.io.IOException {

      response.setContentType("application/json");

      com.allowancealley.util.RequestContext ctx = AuthHelper.requireAuth(request, response);
      if (ctx == null) return;

      try {
        String familyId = ctx.getFamilyId();

        // Query chores
        com.esarks.arm.model.jeo.ServiceJeo jeo = new com.esarks.arm.model.jeo.ServiceJeo();
        jeo.getRequest().setWhereClause("FAMILY_ID = '" + familyId.replace("'", "''") + "'");
        jeo.getRequest().setOrderClause("TITLE ASC");
        choresCrud.readCHORES(jeo);

        StringBuilder json = new StringBuilder();
        json.append("{\"success\":true,\"data\":{\"chores\":[");

        if (jeo.getReply() != null) {
          java.util.ArrayList choreList = jeo.getReply().getJeoByInstanceName("com.allowancealley.data.CHORES");
          if (choreList != null) {
            for (int i = 0; i < choreList.size(); i++) {
              com.allowancealley.data.CHORES chore = (com.allowancealley.data.CHORES) choreList.get(i);
              if (i > 0) json.append(",");
              json.append("{");
              json.append("\"id\":\"").append(chore.getID("")).append("\",");
              json.append("\"title\":\"").append(escapeJson(chore.getTITLE(""))).append("\",");
              json.append("\"description\":\"").append(escapeJson(chore.getDESCRIPTION(""))).append("\",");
              json.append("\"points\":").append(chore.getPOINTS(0)).append(",");
              json.append("\"requirePhoto\":").append(chore.getREQUIRE_PHOTO(false)).append(",");
              json.append("\"recurrence\":\"").append(chore.getRECURRENCE("")).append("\",");
              json.append("\"daysOfWeek\":\"").append(chore.getDAYS_OF_WEEK("")).append("\",");
              json.append("\"isActive\":").append(chore.getIS_ACTIVE(true));
              json.append("}");
            }
          }
        }

        json.append("]}}");
        response.setStatus(200);
        response.getWriter().write(json.toString());

      } catch (Exception e) {
        System.err.println("[API CHORES] Error: " + e.getMessage());
        response.setStatus(500);
        response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"SERVER_ERROR\",\"message\":\"" + escapeJson(e.getMessage()) + "\"}}");
      }
    }

    private String escapeJson(String s) {
      if (s == null) return "";
      return s.replace("\\", "\\\\").replace("\"", "\\\"").replace("\n", "\\n");
    }
  });
context.addServlet(apiChoresServlet, "/api/chores");
```

### 5.3 Additional API Endpoints to Add

Create similar patterns for:

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/auth/register | POST | Register new family |
| /api/auth/child-login | POST | Child PIN login |
| /api/family | GET | Get family details |
| /api/family/members | GET | Get family members |
| /api/chores | POST | Create chore |
| /api/chores/:id | PUT | Update chore |
| /api/chores/:id | DELETE | Delete chore |
| /api/assignments | GET | Get assignments |
| /api/assignments | POST | Create assignment |
| /api/assignments/:id/complete | POST | Mark complete |
| /api/rewards | GET | Get rewards |
| /api/rewards | POST | Create reward |
| /api/redemptions | GET | Get redemptions |
| /api/redemptions | POST | Create redemption |
| /api/points/:memberId | GET | Get points balance |

### 5.4 Test API Endpoints

```powershell
# Test login
$body = @{email="test@example.com"; password="password123"} | ConvertTo-Json
$response = Invoke-RestMethod -Uri "http://localhost:8080/api/auth/login" -Method POST -Body $body -ContentType "application/json"
$token = $response.data.token

# Test chores with JWT
$headers = @{Authorization = "Bearer $token"}
Invoke-RestMethod -Uri "http://localhost:8080/api/chores" -Headers $headers
```

### 5.5 Verification Checklist

- [ ] /api/auth/login returns JWT token
- [ ] /api/chores requires Authorization header
- [ ] /api/chores returns JSON array
- [ ] Invalid token returns 401
- [ ] Existing HTML endpoints still work

---

## Phase 6: Replace Local File Storage with S3

**Duration:** 4-6 hours
**Risk Level:** Medium
**Application Status After:** Fully functional, files in S3/MinIO

### 6.1 Add S3 Client Utility

Create new file: `util/S3Client.script`

```java
//////////////////////////////////////////////////////////////////////////////
// S3Client.script
// Simple S3-compatible storage client (works with AWS S3, MinIO, etc.)
//////////////////////////////////////////////////////////////////////////////

<& com.esarks.arm.scripts.Class
   <class name="S3Client" visibility="public">
     <document>Simple S3-compatible storage client</document>
   </class>
&>

import java.net.HttpURLConnection;
import java.net.URL;
import java.io.*;
import java.security.MessageDigest;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Base64;

// Configuration from environment
private static String endpoint;
private static String accessKey;
private static String secretKey;
private static String bucket;
private static String region;
private static boolean initialized = false;

<& com.esarks.arm.scripts.Method
   <method name="initialize" visibility="public" static="true" return="void">
     <document>Initialize S3 client from environment variables</document>
   </method>
&>

  endpoint = System.getenv("S3_ENDPOINT");
  if (endpoint == null) endpoint = "http://localhost:9000";

  accessKey = System.getenv("S3_ACCESS_KEY");
  if (accessKey == null) accessKey = "minioadmin";

  secretKey = System.getenv("S3_SECRET_KEY");
  if (secretKey == null) secretKey = "minioadmin";

  bucket = System.getenv("S3_BUCKET");
  if (bucket == null) bucket = "allowancealley-photos";

  region = System.getenv("S3_REGION");
  if (region == null) region = "us-east-1";

  initialized = true;
  System.out.println("[S3] Initialized with endpoint: " + endpoint + ", bucket: " + bucket);

<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="uploadFile" visibility="public" static="true" return="String">
     <document>Upload file to S3, returns public URL</document>
     <parameter name="key" type="String"/>
     <parameter name="data" type="byte[]"/>
     <parameter name="contentType" type="String"/>
   </method>
&>

  if (!initialized) initialize();

  try {
    String urlStr = endpoint + "/" + bucket + "/" + key;
    URL url = new URL(urlStr);
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("PUT");
    conn.setDoOutput(true);
    conn.setRequestProperty("Content-Type", contentType);
    conn.setRequestProperty("Content-Length", String.valueOf(data.length));

    // Add basic auth for MinIO (simplified - production should use AWS Signature V4)
    String auth = Base64.getEncoder().encodeToString((accessKey + ":" + secretKey).getBytes());
    conn.setRequestProperty("Authorization", "Basic " + auth);

    // Write data
    OutputStream os = conn.getOutputStream();
    os.write(data);
    os.close();

    int responseCode = conn.getResponseCode();
    if (responseCode == 200 || responseCode == 201) {
      String publicUrl = endpoint + "/" + bucket + "/" + key;
      System.out.println("[S3] Uploaded: " + key + " -> " + publicUrl);
      return publicUrl;
    } else {
      throw new IOException("S3 upload failed with status: " + responseCode);
    }

  } catch (Exception e) {
    System.err.println("[S3] Upload error: " + e.getMessage());
    throw new RuntimeException("S3 upload failed: " + e.getMessage(), e);
  }

<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="downloadFile" visibility="public" static="true" return="byte[]">
     <document>Download file from S3</document>
     <parameter name="key" type="String"/>
   </method>
&>

  if (!initialized) initialize();

  try {
    String urlStr = endpoint + "/" + bucket + "/" + key;
    URL url = new URL(urlStr);
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("GET");

    int responseCode = conn.getResponseCode();
    if (responseCode == 200) {
      InputStream is = conn.getInputStream();
      ByteArrayOutputStream baos = new ByteArrayOutputStream();
      byte[] buffer = new byte[4096];
      int bytesRead;
      while ((bytesRead = is.read(buffer)) != -1) {
        baos.write(buffer, 0, bytesRead);
      }
      is.close();
      return baos.toByteArray();
    } else if (responseCode == 404) {
      return null;
    } else {
      throw new IOException("S3 download failed with status: " + responseCode);
    }

  } catch (Exception e) {
    System.err.println("[S3] Download error: " + e.getMessage());
    throw new RuntimeException("S3 download failed: " + e.getMessage(), e);
  }

<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="deleteFile" visibility="public" static="true" return="boolean">
     <document>Delete file from S3</document>
     <parameter name="key" type="String"/>
   </method>
&>

  if (!initialized) initialize();

  try {
    String urlStr = endpoint + "/" + bucket + "/" + key;
    URL url = new URL(urlStr);
    HttpURLConnection conn = (HttpURLConnection) url.openConnection();
    conn.setRequestMethod("DELETE");

    String auth = Base64.getEncoder().encodeToString((accessKey + ":" + secretKey).getBytes());
    conn.setRequestProperty("Authorization", "Basic " + auth);

    int responseCode = conn.getResponseCode();
    return responseCode == 200 || responseCode == 204;

  } catch (Exception e) {
    System.err.println("[S3] Delete error: " + e.getMessage());
    return false;
  }

<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="getPublicUrl" visibility="public" static="true" return="String">
     <document>Get public URL for a key</document>
     <parameter name="key" type="String"/>
   </method>
&>

  if (!initialized) initialize();
  return endpoint + "/" + bucket + "/" + key;

<& com.esarks.arm.scripts.FinalReturnMethod &>

<& com.esarks.arm.scripts.Method
   <method name="isEnabled" visibility="public" static="true" return="boolean">
     <document>Check if S3 storage is enabled</document>
   </method>
&>

  String storageType = System.getenv("STORAGE_TYPE");
  return "s3".equalsIgnoreCase(storageType) || "minio".equalsIgnoreCase(storageType);

<& com.esarks.arm.scripts.FinalReturnMethod &>

//////////////////////////////////////////////////////////////////////////////
```

### 6.2 Update Photo Upload Handler

**In AllowanceAlleyRouter.script, find lines 6797-6818 and replace with:**

```java
// Store photo
String photoUrl = null;
if (photoData != null && photoData.length > 0) {
  String uniqueFilename = System.currentTimeMillis() + "_" + assignmentId + "_" +
      (photoFilename != null PENDING photoFilename : "photo.jpg");

  // Check storage type
  if (com.allowancealley.util.S3Client.isEnabled()) {
    // Upload to S3/MinIO
    String key = "chores/" + uniqueFilename;
    String contentType = "image/jpeg";
    if (photoFilename != null) {
      if (photoFilename.toLowerCase().endsWith(".png")) contentType = "image/png";
      else if (photoFilename.toLowerCase().endsWith(".gif")) contentType = "image/gif";
    }
    photoUrl = com.allowancealley.util.S3Client.uploadFile(key, photoData, contentType);
    System.out.println("[UPLOAD] Stored to S3: " + photoUrl);
  } else {
    // Fall back to local storage
    String uploadsDir = System.getProperty("user.dir") + java.io.File.separator +
        "uploads" + java.io.File.separator + "chores";
    java.io.File uploadsDirFile = new java.io.File(uploadsDir);
    if (!uploadsDirFile.exists()) {
      uploadsDirFile.mkdirs();
    }
    String filePath = uploadsDir + java.io.File.separator + uniqueFilename;
    java.io.FileOutputStream fos = new java.io.FileOutputStream(filePath);
    fos.write(photoData);
    fos.close();
    photoUrl = "/uploads/chores/" + uniqueFilename;
    System.out.println("[UPLOAD] Stored locally: " + photoUrl);
  }
}
```

### 6.3 Update Photo Serving Handler

**Find the /uploads/* servlet (lines 6969-7022) and update to handle S3:**

```java
protected void doGet(jakarta.servlet.http.HttpServletRequest request,
                    jakarta.servlet.http.HttpServletResponse response)
        throws jakarta.servlet.ServletException, java.io.IOException {

  String pathInfo = request.getPathInfo();
  if (pathInfo == null || pathInfo.equals("/")) {
    response.setStatus(404);
    return;
  }

  // Remove leading slash
  String key = pathInfo.startsWith("/") PENDING pathInfo.substring(1) : pathInfo;

  if (com.allowancealley.util.S3Client.isEnabled()) {
    // Redirect to S3 URL or proxy the content
    String s3Url = com.allowancealley.util.S3Client.getPublicUrl(key);
    response.sendRedirect(s3Url);
  } else {
    // Serve from local filesystem
    String filePath = System.getProperty("user.dir") + java.io.File.separator +
        "uploads" + java.io.File.separator + key.replace("/", java.io.File.separator);
    java.io.File file = new java.io.File(filePath);

    if (!file.exists() || !file.isFile()) {
      response.setStatus(404);
      return;
    }

    // Set content type
    String contentType = "application/octet-stream";
    String name = file.getName().toLowerCase();
    if (name.endsWith(".jpg") || name.endsWith(".jpeg")) contentType = "image/jpeg";
    else if (name.endsWith(".png")) contentType = "image/png";
    else if (name.endsWith(".gif")) contentType = "image/gif";

    response.setContentType(contentType);
    response.setContentLength((int) file.length());

    java.io.FileInputStream fis = new java.io.FileInputStream(file);
    java.io.OutputStream os = response.getOutputStream();
    byte[] buffer = new byte[4096];
    int bytesRead;
    while ((bytesRead = fis.read(buffer)) != -1) {
      os.write(buffer, 0, bytesRead);
    }
    fis.close();
  }
}
```

### 6.4 Set Up MinIO for Development

```powershell
# Using Docker
docker run -d --name minio `
  -p 9000:9000 -p 9001:9001 `
  -e MINIO_ROOT_USER=minioadmin `
  -e MINIO_ROOT_PASSWORD=minioadmin `
  minio/minio server /data --console-address ":9001"

# Create bucket via MinIO Console (http://localhost:9001)
# Or via mc CLI:
# mc alias set myminio http://localhost:9000 minioadmin minioadmin
# mc mb myminio/allowancealley-photos
# mc anonymous set download myminio/allowancealley-photos
```

### 6.5 Test S3 Storage

```powershell
# Set environment variables
$env:STORAGE_TYPE = "s3"
$env:S3_ENDPOINT = "http://localhost:9000"
$env:S3_ACCESS_KEY = "minioadmin"
$env:S3_SECRET_KEY = "minioadmin"
$env:S3_BUCKET = "allowancealley-photos"

# Start server and test photo upload
```

### 6.6 Verification Checklist

- [ ] S3Client.script created and compiles
- [ ] MinIO running locally
- [ ] Bucket created and accessible
- [ ] Photo upload works with STORAGE_TYPE=s3
- [ ] Photo upload works with STORAGE_TYPE unset (local fallback)
- [ ] Photos display correctly in child dashboard

---

## Phase 7: Remove Session Dependency

**Duration:** 2-3 hours
**Risk Level:** Medium
**Application Status After:** Fully stateless API

### 7.1 Strategy

Now that all endpoints use RequestContext (which supports both JWT and session), we can:
1. Remove `SESSIONS` flag from ServletContextHandler
2. Remove all `session.setAttribute()` calls
3. Update login to only return JWT (no session creation)

### 7.2 Remove SESSIONS Flag

**In AllowanceAlleyRouter.script, find line 464-465:**

```java
// OLD:
org.eclipse.jetty.ee10.servlet.ServletContextHandler context =
  new org.eclipse.jetty.ee10.servlet.ServletContextHandler(
    org.eclipse.jetty.ee10.servlet.ServletContextHandler.SESSIONS);

// NEW:
org.eclipse.jetty.ee10.servlet.ServletContextHandler context =
  new org.eclipse.jetty.ee10.servlet.ServletContextHandler(
    org.eclipse.jetty.ee10.servlet.ServletContextHandler.NO_SESSIONS);
```

### 7.3 Update Login to Return JWT in Cookie

For browser-based authentication without sessions, we use HTTP-only cookies:

**Update parent login handler (around line 1305):**

```java
// OLD:
// Create session
jakarta.servlet.http.HttpSession session = request.getSession(true);
session.setAttribute("userId", userId);
session.setAttribute("email", email);
// ... etc

// NEW:
// Generate JWT token
String token = com.allowancealley.util.JWTUtil.generate(userId, familyId, "parent");

// Set as HTTP-only cookie for browser clients
jakarta.servlet.http.Cookie cookie = new jakarta.servlet.http.Cookie("auth_token", token);
cookie.setHttpOnly(true);
cookie.setSecure(false);  // Set to true in production with HTTPS
cookie.setPath("/");
cookie.setMaxAge(24 * 60 * 60);  // 24 hours
response.addCookie(cookie);

System.out.println("[LOGIN] JWT token generated and set as cookie");
```

### 7.4 Update RequestContext to Read Cookie

**In RequestContext.script, update fromRequest method:**

```java
// After checking Authorization header, before checking session:

// Try JWT from cookie
jakarta.servlet.http.Cookie[] cookies = request.getCookies();
if (cookies != null) {
  for (jakarta.servlet.http.Cookie cookie : cookies) {
    if ("auth_token".equals(cookie.getName())) {
      try {
        String token = cookie.getValue();
        com.allowancealley.util.JWTUtil.JWTPayload payload =
            com.allowancealley.util.JWTUtil.verify(token);

        ctx.userId = payload.userId;
        ctx.familyId = payload.familyId;
        ctx.role = payload.role;
        ctx.authenticated = true;
        ctx.authMethod = "jwt-cookie";

        return ctx;
      } catch (Exception e) {
        // Invalid cookie token - continue
      }
    }
  }
}
```

### 7.5 Update Logout to Clear Cookie

```java
// In logout handler:
jakarta.servlet.http.Cookie cookie = new jakarta.servlet.http.Cookie("auth_token", "");
cookie.setHttpOnly(true);
cookie.setPath("/");
cookie.setMaxAge(0);  // Delete cookie
response.addCookie(cookie);

response.sendRedirect("/");
```

### 7.6 Remove All session.setAttribute() Calls

Search and remove/comment all remaining session usage:
- Lines 1305-1310, 1388 (parent login)
- Lines 3493-3499 (child login)
- Line 1726 (date change)

### 7.7 Verification Checklist

- [ ] Server starts with NO_SESSIONS
- [ ] Login sets auth_token cookie
- [ ] Protected pages work with cookie
- [ ] API calls work with Authorization header
- [ ] Logout clears cookie
- [ ] No session-related errors in logs

---

## Phase 8: Docker Containerization

**Duration:** 2-3 hours
**Risk Level:** Low
**Application Status After:** Deployable as Docker container

### 8.1 Create Dockerfile

Create `Dockerfile` in the AllowanceAlley root:

```dockerfile
# AllowanceAlley JAC Application
# Multi-stage build for optimized image

FROM eclipse-temurin:24-jre-alpine

# Install dependencies
RUN apk add --no-cache bash curl ca-certificates tzdata

# Create non-root user
RUN addgroup -S jac -g 1000 && adduser -S jac -u 1000 -G jac

# Set working directory
WORKDIR /opt/jac

# Copy JAC runtime (from jacBuild24)
COPY --chown=jac:jac ../../../../jacBuild24/lib ./lib
COPY --chown=jac:jac ../../../../jacBuild24/bin ./bin
COPY --chown=jac:jac ../../../../jacBuild24/phase1Classes ./phase1Classes

# Copy application classes
COPY --chown=jac:jac ../../../../classes ./classes

# Copy application scripts and config
COPY --chown=jac:jac . ./app/com/allowancealley

# Create directories for logs and data
RUN mkdir -p /opt/jac/logs /opt/jac/data && chown -R jac:jac /opt/jac

# Switch to non-root user
USER jac

# Expose port
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:8080/health || exit 1

# Environment variables
ENV JAVA_HOME=/opt/jac/jdk-24 \
    JAC_HOME=/opt/jac \
    PORT=8080 \
    TZ=America/New_York

# Copy and set entrypoint
COPY --chown=jac:jac docker-entrypoint.sh ./
RUN chmod +x docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]
CMD ["app/com/allowancealley/server/AllowanceAlleyRouter.jrun"]
```

### 8.2 Create docker-entrypoint.sh

```bash
#!/bin/bash
set -e

echo "=========================================="
echo " AllowanceAlley JAC Application"
echo "=========================================="

# Wait for database if configured
if [ -n "${DB_HOST}" ] && [ -n "${DB_PORT}" ]; then
  echo "Waiting for database at ${DB_HOST}:${DB_PORT}..."
  attempt=1
  max_attempts=30
  while ! nc -z "${DB_HOST}" "${DB_PORT}" 2>/dev/null; do
    if [ ${attempt} -eq ${max_attempts} ]; then
      echo "ERROR: Database not available after ${max_attempts} attempts"
      exit 1
    fi
    echo "  Attempt ${attempt}/${max_attempts}..."
    attempt=$((attempt + 1))
    sleep 2
  done
  echo "Database is ready!"
fi

# Set timezone if configured
if [ -n "${TZ}" ]; then
  ln -snf /usr/share/zoneinfo/${TZ} /etc/localtime
fi

# Build classpath
CLASSPATH="${JAC_HOME}/phase1Classes"
for jar in ${JAC_HOME}/lib/*/*.jar ${JAC_HOME}/lib/*.jar; do
  [ -f "$jar" ] && CLASSPATH="${CLASSPATH}:${jar}"
done
CLASSPATH="${CLASSPATH}:${JAC_HOME}/classes"
export CLASSPATH

# JVM options
JAVA_OPTS="${JAVA_OPTS:--Xms512m -Xmx1g}"
JAVA_OPTS="${JAVA_OPTS} -XX:+UseG1GC -XX:+UseContainerSupport"

# Debug mode
if [ "${DEBUG}" = "true" ]; then
  JAVA_OPTS="${JAVA_OPTS} -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5005"
  echo "Debug mode enabled on port 5005"
fi

echo "Starting JAC application..."
echo "  Port: ${PORT:-8080}"
echo "  JVM: ${JAVA_OPTS}"

cd "${JAC_HOME}"

exec java ${JAVA_OPTS} \
  -Djac.home="${JAC_HOME}" \
  -Dserver.port="${PORT:-8080}" \
  com.esarks.jac.jac \
  -home "${JAC_HOME}" \
  -work "${JAC_HOME}/classes" \
  -scripts "${JAC_HOME}" \
  -script "$@"
```

### 8.3 Create docker-compose.yml

```yaml
version: '3.8'

services:
  api:
    build:
      context: ../../../..  # jac2024 root
      dockerfile: app/com/allowancealley/Dockerfile
    image: allowancealley:1.0.0
    container_name: allowancealley-api
    ports:
      - "8080:8080"
      - "5005:5005"  # Debug port
    environment:
      - PORT=8080
      - DEBUG=false
      - TZ=America/New_York
      # Database
      - DB_HOST=postgres
      - DB_PORT=5432
      - DATABASE_URL=jdbc:postgresql://postgres:5432/allowancealley
      - DB_USER=allowance_user
      - DB_PASSWORD=${DB_PASSWORD:-secure_password}
      # JWT
      - JWT_SECRET=${JWT_SECRET:-development-secret-key-min-32-characters}
      # Storage
      - STORAGE_TYPE=s3
      - S3_ENDPOINT=http://minio:9000
      - S3_ACCESS_KEY=${S3_ACCESS_KEY:-minioadmin}
      - S3_SECRET_KEY=${S3_SECRET_KEY:-minioadmin}
      - S3_BUCKET=allowancealley-photos
      # Email (optional)
      - SMTP_ENABLED=false
    volumes:
      - ./logs:/opt/jac/logs
    depends_on:
      postgres:
        condition: service_healthy
      minio:
        condition: service_started
    restart: unless-stopped
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/health"]
      interval: 30s
      timeout: 5s
      retries: 3
      start_period: 60s

  postgres:
    image: postgres:17-alpine
    container_name: allowancealley-db
    environment:
      - POSTGRES_DB=allowancealley
      - POSTGRES_USER=allowance_user
      - POSTGRES_PASSWORD=${DB_PASSWORD:-secure_password}
    ports:
      - "5432:5432"
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./data/init.sql:/docker-entrypoint-initdb.d/init.sql:ro
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U allowance_user -d allowancealley"]
      interval: 10s
      timeout: 5s
      retries: 5

  minio:
    image: minio/minio:latest
    container_name: allowancealley-storage
    command: server /data --console-address ":9001"
    environment:
      - MINIO_ROOT_USER=${S3_ACCESS_KEY:-minioadmin}
      - MINIO_ROOT_PASSWORD=${S3_SECRET_KEY:-minioadmin}
    ports:
      - "9000:9000"
      - "9001:9001"
    volumes:
      - minio-data:/data

volumes:
  postgres-data:
  minio-data:
```

### 8.4 Create .env File

```bash
# Production secrets (do not commit!)
DB_PASSWORD=your-secure-database-password
JWT_SECRET=your-256-bit-secret-key-minimum-32-characters
S3_ACCESS_KEY=your-s3-access-key
S3_SECRET_KEY=your-s3-secret-key
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### 8.5 Build and Run

```powershell
# Build image
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\app\com\allowancealley
docker-compose build

# Start all services
docker-compose up -d

# View logs
docker-compose logs -f api

# Test
curl http://localhost:8080/health
```

### 8.6 Verification Checklist

- [ ] Docker image builds successfully
- [ ] All three containers start (api, postgres, minio)
- [ ] Health endpoint responds
- [ ] Login works
- [ ] Photo upload works (stored in MinIO)
- [ ] Application scales (docker-compose up --scale api=3)

---

## Phase 9: Production Hardening

**Duration:** 1-2 days
**Risk Level:** Low
**Application Status After:** Production-ready

### 9.1 Security Checklist

- [ ] All secrets from environment variables
- [ ] JWT secret is 256-bit random
- [ ] HTTPS enabled (via reverse proxy)
- [ ] HTTP-only, Secure cookies
- [ ] CORS configured appropriately
- [ ] Rate limiting on auth endpoints
- [ ] Input validation on all endpoints
- [ ] SQL injection prevention (parameterized queries)
- [ ] XSS prevention (HTML escaping)

### 9.2 Add Rate Limiting

Add to login endpoint:

```java
// Simple in-memory rate limiting (use Redis for distributed)
private static java.util.concurrent.ConcurrentHashMap<String, Long[]> rateLimits =
    new java.util.concurrent.ConcurrentHashMap<>();

private boolean checkRateLimit(String ip, int maxRequests, int windowSeconds) {
  long now = System.currentTimeMillis();
  long windowMs = windowSeconds * 1000L;

  Long[] data = rateLimits.computeIfAbsent(ip, k -> new Long[]{0L, now});

  synchronized(data) {
    if (now - data[1] > windowMs) {
      // Reset window
      data[0] = 1L;
      data[1] = now;
      return true;
    }

    if (data[0] >= maxRequests) {
      return false;  // Rate limited
    }

    data[0]++;
    return true;
  }
}

// In login handler:
String clientIp = request.getRemoteAddr();
if (!checkRateLimit(clientIp, 5, 60)) {  // 5 requests per minute
  response.setStatus(429);
  response.getWriter().write("{\"error\":\"Too many requests\"}");
  return;
}
```

### 9.3 Add Request Logging

```java
// Add logging filter or in each endpoint:
System.out.println(String.format("[%s] %s %s - %s - %dms",
    java.time.Instant.now(),
    request.getMethod(),
    request.getRequestURI(),
    request.getRemoteAddr(),
    responseTime
));
```

### 9.4 Kubernetes Deployment (Optional)

See `app/com/esarks/examples/deployment/jetty_docker_k8s/k8s/` for complete manifests:
- namespace.yaml
- deployment.yaml
- service.yaml
- configmap.yaml
- secret.yaml
- hpa.yaml (horizontal pod autoscaler)
- ingress.yaml

### 9.5 Monitoring

- Add `/metrics` endpoint for Prometheus
- Configure Grafana dashboards
- Set up alerts for error rates

---

## Rollback Procedures

### Phase 1-5 Rollback

These phases are additive and don't break existing functionality:
```bash
git checkout master -- app/com/allowancealley/
./bin/allPhases.bat
```

### Phase 6 Rollback (S3 Storage)

```powershell
# Set storage back to local
$env:STORAGE_TYPE = "local"
# Or remove the environment variable
```

### Phase 7 Rollback (Sessions)

Revert to SESSIONS mode:
```java
// Change NO_SESSIONS back to SESSIONS
new ServletContextHandler(ServletContextHandler.SESSIONS);
```

### Full Rollback

```bash
# Restore from backup
$backupDir = "C:\...\backup_YYYYMMDD_HHMMSS"
Remove-Item -Recurse -Force "C:\...\allowancealley"
Copy-Item -Recurse $backupDir "C:\...\allowancealley"

# Or use git
git checkout feature/stateless-api~10  # Go back 10 commits
```

---

## Testing Checklist

### After Each Phase

- [ ] Server compiles without errors
- [ ] Server starts successfully
- [ ] Health endpoint returns OK
- [ ] Parent login works
- [ ] Child login works
- [ ] Dashboard loads
- [ ] Chores list displays
- [ ] Create chore works
- [ ] Assign chore works
- [ ] Complete chore works (with photo)
- [ ] Rewards display
- [ ] Points balance correct

### API Testing (Phases 5+)

```powershell
# Login and get token
$login = Invoke-RestMethod -Uri "http://localhost:8080/api/auth/login" `
  -Method POST -ContentType "application/json" `
  -Body '{"email":"test@example.com","password":"password"}'
$token = $login.data.token

# Test authenticated endpoint
$headers = @{Authorization = "Bearer $token"}
Invoke-RestMethod -Uri "http://localhost:8080/api/chores" -Headers $headers

# Test with effective date
Invoke-RestMethod -Uri "http://localhost:8080/api/chores" -Headers @{
  Authorization = "Bearer $token"
  "X-Effective-Date" = "2025-01-15"
}
```

### Load Testing

```bash
# Using Apache Bench
ab -n 1000 -c 10 -H "Authorization: Bearer $TOKEN" http://localhost:8080/api/chores

# Using wrk
wrk -t4 -c100 -d30s -H "Authorization: Bearer $TOKEN" http://localhost:8080/api/chores
```

---

## Appendix: Code Templates

### A.1 Standard JSON Response

```java
// Success
response.setStatus(200);
response.setContentType("application/json");
response.getWriter().write(String.format(
  "{\"success\":true,\"data\":%s,\"timestamp\":\"%s\"}",
  dataJson,
  java.time.Instant.now().toString()
));

// Error
response.setStatus(errorCode);
response.setContentType("application/json");
response.getWriter().write(String.format(
  "{\"success\":false,\"error\":{\"code\":\"%s\",\"message\":\"%s\"},\"timestamp\":\"%s\"}",
  errorCode,
  escapeJson(errorMessage),
  java.time.Instant.now().toString()
));
```

### A.2 Protected Endpoint Template

```java
protected void doGet(jakarta.servlet.http.HttpServletRequest request,
                    jakarta.servlet.http.HttpServletResponse response)
        throws jakarta.servlet.ServletException, java.io.IOException {

  response.setContentType("application/json");

  // Authenticate
  com.allowancealley.util.RequestContext ctx = AuthHelper.requireAuth(request, response);
  if (ctx == null) return;

  // Get effective date
  java.time.LocalDate effectiveDate = DateUtil.getEffectiveDate(request, ctx.getFamilyId(), appSettingsCrud);

  try {
    String familyId = ctx.getFamilyId();

    // Your business logic here

    response.setStatus(200);
    response.getWriter().write("{\"success\":true,\"data\":{}}");

  } catch (Exception e) {
    System.err.println("[ENDPOINT] Error: " + e.getMessage());
    response.setStatus(500);
    response.getWriter().write("{\"success\":false,\"error\":{\"code\":\"SERVER_ERROR\",\"message\":\"" + escapeJson(e.getMessage()) + "\"}}");
  }
}
```

### A.3 Parent-Only Endpoint Template

```java
// Use requireParent instead of requireAuth
com.allowancealley.util.RequestContext ctx = AuthHelper.requireParent(request, response);
if (ctx == null) return;  // Already sent 401 or 403
```

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-12-05 | Claude | Initial document |

---

## Related Documents

- [AllowanceAlley.md](AllowanceAlley.html) - Application specification
- [Jetty-Docker-Kubernetes.md](Jetty-Docker-Kubernetes.html) - Container deployment guide
- [NEWGEN.md](NEWGEN.html) - JAC modernization roadmap
- [Roadmap.md](Roadmap.html) - 12-month implementation plan
