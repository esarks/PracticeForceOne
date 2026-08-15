---
title: "JettyTestGuide"
---

# Jetty 12.1.2 Migration - Runtime Test Guide

**Purpose:** Validate the Jetty 12.1.2 migration is working correctly at runtime
**Status:** Ready to Run
**Test Coverage:** Server startup, servlets, sessions, Jakarta API, shutdown

---

## Quick Start

### Option 1: Run Batch Script (Windows)

```batch
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\bin
testJettyMigration.bat
```

### Option 2: Run PowerShell Script (Recommended)

```powershell
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\bin
powershell -ExecutionPolicy Bypass -File testJettyMigration.ps1
```

### Option 3: Manual Execution

```batch
cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\bin

# Set environment
set JAVA_HOME=C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\jdk-24
set CLASSPATH=...

# Compile test
%JAVA_HOME%\bin\javac -d ..\classes -classpath %CLASSPATH% ..\source\java\com\esarks\jac\test\JettyMigrationTest.java

# Run test
%JAVA_HOME%\bin\java -classpath %CLASSPATH% com.esarks.jac.test.JettyMigrationTest
```

---

## What the Tests Validate

### Test 1: Server Startup
**Purpose:** Verify Jetty 12 server can start on port 8888

**What it checks:**
- `org.eclipse.jetty.server.Server` initialization
- `ServerConnector` creation and port binding
- `ServletContextHandler` setup with session support
- Test servlet registration
- Server.start() execution
- Server.isStarted() status

**Success Criteria:** Server starts without errors and `isStarted()` returns `true`

---

### Test 2: Basic Servlet Request/Response
**Purpose:** Verify basic servlet functionality with Jakarta API

**What it checks:**
- HTTP GET request to `/basic` endpoint
- Servlet request handling (`HttpServletRequest`)
- Servlet response handling (`HttpServletResponse`)
- Response content generation
- HTTP 200 status code
- Response body parsing

**Success Criteria:**
- Response code = 200
- Response contains "BasicServlet OK"
- Jakarta Servlet 6.0 API working

---

### Test 3: Session Management
**Purpose:** Verify session creation, storage, and retrieval

**What it checks:**
- **Part 1: Session Creation**
  - `HttpSession session = request.getSession(true)`
  - Session attribute storage
  - Set-Cookie header generation
  - Session ID creation

- **Part 2: Session Verification**
  - Cookie-based session retrieval
  - `request.getSession(false)`
  - Session attribute retrieval
  - Session persistence across requests

**Success Criteria:**
- Session cookie received in response
- Session ID generated
- Attribute stored and retrieved correctly
- Session persists across requests

---

### Test 4: Jakarta Servlet API Compatibility â˜•
**Purpose:** Verify Jakarta EE 10 / Servlet 6.0 API availability

**What it checks:**
- Jakarta servlet imports working
- `HttpServletRequest` methods available
- `HttpServletResponse` methods available
- ServletContext information retrieval
- Servlet version detection (should be 6.0)
- Server info (should reference Jetty 12)

**Success Criteria:**
- Servlet version = 6.0
- Server info contains "Jetty"
- All Jakarta API methods accessible

---

### Test 5: Server Shutdown
**Purpose:** Verify graceful shutdown capability

**What it checks:**
- `Server.stop()` execution
- Shutdown cleanup
- `Server.isStopped()` status
- No resource leaks
- No hanging threads

**Success Criteria:** Server stops cleanly and `isStopped()` returns `true`

---

## Expected Output

### Successful Run

```
========================================
Jetty 12.1.2 Migration Test Suite
========================================

Compiling test suite...

Compilation successful!

Running tests...
========================================

Test 1: Starting Jetty 12 Server...
  PASSED - Server started on port 8888

Test 2: Testing Basic Servlet...
  PASSED - Servlet request/response working

Test 3: Testing Session Management...
  PASSED - Session creation and retrieval working

Test 4: Testing Jakarta Servlet API...
  PASSED - Jakarta Servlet 6.0 API working

Test 5: Testing Server Shutdown...
  PASSED - Server shutdown gracefully

========================================
Test Results
========================================
Passed: 5
Failed: 0
Total:  5

SUCCESS - All tests passed!
Jetty 12.1.2 migration is working correctly.
========================================
```

---

## Troubleshooting

### Issue: Port 8888 Already in Use

**Error:**
```
Test 1: Starting Jetty 12 Server...
  Error: Address already in use: bind
  FAILED - Server startup failed
```

**Solution:**
1. Check if port 8888 is in use:
   ```batch
   netstat -ano | findstr :8888
   ```

2. Kill the process or change test port:
   - Edit `JettyMigrationTest.java`
   - Change `TEST_PORT = 8888` to another port (e.g., 9999)
   - Recompile and run

---

### Issue: ClassNotFoundException

**Error:**
```
Error: Could not find or load main class com.esarks.jac.test.JettyMigrationTest
```

**Solution:**
1. Verify test class was compiled:
   ```batch
   dir /s C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\classes\com\esarks\jac\test\JettyMigrationTest.class
   ```

2. If missing, recompile:
   ```batch
   cd C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\bin
   testJettyMigration.bat
   ```

---

### Issue: NoClassDefFoundError for Jakarta Servlet

**Error:**
```
java.lang.NoClassDefFoundError: jakarta/servlet/http/HttpServlet
```

**Solution:**
Verify all Jetty 12 JARs are in place:
```batch
dir C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\lib\jetty\*.jar
```

Should see:
- jakarta.servlet-api-6.0.0.jar
- jakarta.servlet.jsp-api-4.0.0.jar
- jetty-*.jar (10 files)
- slf4j-*.jar (2 files)

If missing, copy from backup:
```batch
copy C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\lib\jetty\*.jar C:\Users\ptm\OneDrive\Documents\GitHub\ArchitectsCompanion\jac2024\jacBuild24\lib\jetty\
```

---

### Issue: Compilation Errors

**Error:**
```
error: package jakarta.servlet does not exist
```

**Solution:**
1. Check CLASSPATH includes all Jetty JARs
2. Verify JAVA_HOME is set correctly
3. Ensure using JDK 24 (not JRE)

---

## Test Architecture

### Test Class Structure

```
JettyMigrationTest.java
â”œâ”€â”€ main()                          # Test orchestrator
â”œâ”€â”€ testServerStartup()             # Test 1
â”œâ”€â”€ testBasicServlet()              # Test 2
â”œâ”€â”€ testSessionManagement()         # Test 3
â”œâ”€â”€ testJakartaAPI()                # Test 4
â”œâ”€â”€ testServerShutdown()            # Test 5
â””â”€â”€ Test Servlets
    â”œâ”€â”€ BasicTestServlet            # Simple request/response
    â”œâ”€â”€ SessionTestServlet          # Session create/verify
    â””â”€â”€ JakartaTestServlet          # API version check
```

### HTTP Client Usage

Tests use `java.net.HttpURLConnection` for HTTP requests:
- **GET requests** to test endpoints
- **Cookie handling** for session tests
- **Response parsing** to verify functionality
- **Connection timeouts** (5 seconds)

---

## Advanced Testing

### Test with Custom Port

Edit `JettyMigrationTest.java`:
```java
private static final int TEST_PORT = 9999; // Change port
```

Recompile and run.

### Test with SSL/TLS

Modify test to use `SslContextFactory`:
```java
SslContextFactory.Server sslContextFactory = new SslContextFactory.Server();
sslContextFactory.setKeyStorePath("keystore.jks");
sslContextFactory.setKeyStorePassword("password");

ServerConnector connector = new ServerConnector(server, sslContextFactory);
```

### Add Multipart File Upload Test

Create `MultipartTestServlet` that uses `HttpServletRequest.getParts()`:
```java
Collection<Part> parts = request.getParts();
for (Part part : parts) {
    String filename = part.getSubmittedFileName();
    InputStream content = part.getInputStream();
    // Process file
}
```

---

## Performance Benchmarking

### Add Response Time Measurement

Modify test methods:
```java
long startTime = System.currentTimeMillis();
boolean result = testBasicServlet();
long duration = System.currentTimeMillis() - startTime;
System.out.println("  Response time: " + duration + "ms");
```

### Stress Test

Create loop to send multiple requests:
```java
int requests = 100;
for (int i = 0; i < requests; i++) {
    testBasicServlet();
}
```

---

## Integration with CI/CD

### Exit Codes

- **0** = All tests passed
- **1** = One or more tests failed

Use in automated builds:
```batch
call testJettyMigration.bat
if errorlevel 1 (
    echo Build failed - Jetty tests failed
    exit /b 1
)
echo Build passed - Jetty tests OK
```

### Jenkins Integration

```groovy
stage('Jetty Migration Tests') {
    steps {
        bat 'testJettyMigration.bat'
    }
}
```

---

## What's NOT Tested (Yet)

The current test suite validates core functionality. It does NOT test:

1. **Multipart File Uploads** - The new `MultiPartRequestWrapper`
2. **HTTP/2 Protocol** - Jetty 12's HTTP/2 support
3. **WebSocket Connections** - Real-time communication
4. **SSL/TLS Encryption** - HTTPS connections
5. **Authentication** - Security constraints
6. **Load Testing** - High concurrency scenarios
7. **Memory Leaks** - Long-running server behavior

### To Add Multipart Test

Create test file and servlet:
```java
// In test method
HttpURLConnection conn = (HttpURLConnection) url.openConnection();
conn.setRequestMethod("POST");
conn.setDoOutput(true);
conn.setRequestProperty("Content-Type", "multipart/form-data; boundary=----WebKitFormBoundary");

OutputStream os = conn.getOutputStream();
os.write("------WebKitFormBoundary\r\n".getBytes());
os.write("Content-Disposition: form-data; name=\"file\"; filename=\"test.txt\"\r\n".getBytes());
os.write("Content-Type: text/plain\r\n\r\n".getBytes());
os.write("Test file content\r\n".getBytes());
os.write("------WebKitFormBoundary--\r\n".getBytes());
os.close();
```

---

## Summary

PASS **Test Suite Validates:**
- Jetty 12 server startup and configuration
- Jakarta Servlet 6.0 API compatibility
- Basic request/response handling
- Session management across requests
- Graceful shutdown

PASS **Quick to Run:**
- Compiles in ~5 seconds
- Tests run in ~3 seconds
- Total time: < 10 seconds

PASS **Comprehensive Coverage:**
- 5 critical areas tested
- Pass/fail reporting
- Clear error messages

PASS **Production Ready:**
- Can be integrated into CI/CD
- Exit codes for automation
- Suitable for regression testing

---

**Next Steps:**

1. **Run the tests** to validate migration
2. **Review results** - should see 5/5 passed
3. **Add custom tests** for your specific servlets
4. **Integrate into build** process

---

**Test Suite Location:**
- Source: `jacBuild24/source/java/com/esarks/jac/test/JettyMigrationTest.java`
- Runner: `jacBuild24/bin/testJettyMigration.bat`
- Runner: `jacBuild24/bin/testJettyMigration.ps1`

**Documentation:**
- This guide: `ArchitectsCompanion.wiki/JettyTestGuide.md`
- Migration report: `ArchitectsCompanion.wiki/JettyMigrationReport.md`
- Upgrade plan: `ArchitectsCompanion.wiki/JettyPlan.md`

---

**Last Updated:** 2025-10-20
**Test Suite Version:** 1.0
**Jetty Version:** 12.1.2
**Jakarta Servlet Version:** 6.0
