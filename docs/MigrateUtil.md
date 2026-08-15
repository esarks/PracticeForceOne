---
title: "MigrateUtil"
---

# Utility Classes Migration Plan: AllowanceAlley to JAC Framework

## Executive Summary

This document outlines the plan to migrate utility classes from the AllowanceAlley application (`com.allowancealley.util.*`) to the JAC framework (`com.esarks.jac.*`) for reuse across future JAC applications.

**Goal**: Create reusable, application-agnostic utility classes that any JAC application can leverage while maintaining backward compatibility with AllowanceAlley.

---

## Current State Analysis

### Utility Classes Inventory

| Utility | Lines | Pattern | App-Specific Elements |
|---------|-------|---------|----------------------|
| `HashUtil.java` | 115 | Static utility | PIN validation (4-digit rule) |
| `RateLimiter.java` | 236 | Singleton | None (fully generic) |
| `RequestLogger.java` | 251 | Static utility | None (fully generic) |
| `JWTUtil.java` | 244 | Static utility | familyId, role, memberId, childName claims |
| `JsonUtil.java` | 186 | Static utility | Response envelope format |
| `RequestContext.java` | 374 | Factory + DTO | AllowanceAlley auth model (family, parent/child) |
| `S3Client.java` | 269 | Static facade | Default bucket "www.allowancealley.com" |
| `EmailService.java` | 334 | Singleton | AllowanceAlley branding in email templates |

### Reusability Assessment

```
┌─────────────────────┬──────────────────┬───────────────────────────┐
│ Utility             │ Reusability      │ Migration Complexity      │
├─────────────────────┼──────────────────┼───────────────────────────┤
│ RateLimiter         │ HIGH (100%)      │ LOW - Ready as-is         │
│ RequestLogger       │ HIGH (100%)      │ LOW - Ready as-is         │
│ HashUtil            │ HIGH (95%)       │ LOW - Extract PIN logic   │
│ JsonUtil            │ MEDIUM (80%)     │ MEDIUM - Make configurable│
│ S3Client            │ MEDIUM (75%)     │ MEDIUM - Remove defaults  │
│ EmailService        │ MEDIUM (70%)     │ MEDIUM - Template system  │
│ JWTUtil             │ MEDIUM (60%)     │ HIGH - Generic claims     │
│ RequestContext      │ LOW (30%)        │ HIGH - Abstract auth model│
└─────────────────────┴──────────────────┴───────────────────────────┘
```

---

## Migration Plan Overview

### Phase 1: Direct Migration (Low Complexity)
- `RateLimiter` - Move as-is
- `RequestLogger` - Move as-is
- `HashUtil` - Minor refactoring

### Phase 2: Configurable Migration (Medium Complexity)
- `JsonUtil` - Add response format configurability
- `S3Client` - Remove hardcoded defaults
- `EmailService` - Extract template system

### Phase 3: Abstraction Required (High Complexity)
- `JWTUtil` - Generic claims system
- `RequestContext` - Abstract authentication model

---

## Phase 1: Direct Migration

### 1.1 RateLimiter

**Current Location**: `com.allowancealley.util.RateLimiter`
**Target Location**: `com.esarks.jac.RateLimiter`

**Changes Required**: None - fully generic already

**Migration Steps**:
1. Copy file to `jac2024/jacBuild24/source/java/com/esarks/jac/RateLimiter.java`
2. Change package declaration
3. Compile and test

**JAC Framework Version**:
```java
package com.esarks.jac;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * RateLimiter - Generic in-memory rate limiting for JAC applications.
 * Uses a sliding window algorithm to track request counts per key (typically IP).
 *
 * Default: 5 requests per 60 seconds per key.
 * Failed attempts can trigger stricter limits.
 *
 * Usage:
 *   RateLimiter limiter = RateLimiter.getInstance();
 *   if (!limiter.isAllowed(clientIp)) {
 *       response.setStatus(429);
 *       return;
 *   }
 */
public class RateLimiter {
    // [Existing implementation - no changes needed]
}
```

**AllowanceAlley Update**:
```java
// Old import
// import com.allowancealley.util.RateLimiter;

// New import
import com.esarks.jac.RateLimiter;

// Usage remains identical
RateLimiter limiter = RateLimiter.getInstance();
```

---

### 1.2 RequestLogger

**Current Location**: `com.allowancealley.util.RequestLogger`
**Target Location**: `com.esarks.jac.RequestLogger`

**Changes Required**: None - fully generic already

**Migration Steps**:
1. Copy file to `jac2024/jacBuild24/source/java/com/esarks/jac/RequestLogger.java`
2. Change package declaration
3. Compile and test

**JAC Framework Version**:
```java
package com.esarks.jac;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.atomic.AtomicLong;
import java.util.concurrent.ConcurrentHashMap;

/**
 * RequestLogger - HTTP request logging utility for JAC applications.
 * Provides structured logging with timing information.
 *
 * Usage:
 *   String requestId = RequestLogger.logStart(request);
 *   // ... process request ...
 *   RequestLogger.logEnd(requestId, statusCode);
 */
public class RequestLogger {
    // [Existing implementation - no changes needed]
}
```

**AllowanceAlley Update**:
```java
// Old import
// import com.allowancealley.util.RequestLogger;

// New import
import com.esarks.jac.RequestLogger;

// Usage remains identical
String requestId = RequestLogger.logStart(request);
```

---

### 1.3 HashUtil

**Current Location**: `com.allowancealley.util.HashUtil`
**Target Location**: `com.esarks.jac.HashUtil`

**App-Specific Elements to Remove**:
- `hashPIN(String pin)` - 4-digit PIN validation is AllowanceAlley-specific
- `verifyPIN(String pin, String storedHash)` - Same

**Changes Required**:
1. Keep generic `hash()`, `verify()`, `hashPassword()`, `verifyPassword()`
2. Extract PIN methods to AllowanceAlley extension

**JAC Framework Version**:
```java
package com.esarks.jac;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.nio.charset.StandardCharsets;

/**
 * HashUtil - Generic SHA-256 hashing utility for JAC applications.
 *
 * Note: For production systems requiring stronger security,
 * consider using bcrypt via a dedicated library.
 *
 * Usage:
 *   String hash = HashUtil.hash("password123");
 *   boolean valid = HashUtil.verify("password123", storedHash);
 */
public class HashUtil {

    /**
     * Hash a string using SHA-256
     */
    public static String hash(String input) {
        if (input == null || input.isEmpty()) {
            throw new IllegalArgumentException("Input cannot be null or empty");
        }

        try {
            MessageDigest digest = MessageDigest.getInstance("SHA-256");
            byte[] hashBytes = digest.digest(input.getBytes(StandardCharsets.UTF_8));

            StringBuilder hexString = new StringBuilder();
            for (byte b : hashBytes) {
                String hex = Integer.toHexString(0xff & b);
                if (hex.length() == 1) hexString.append('0');
                hexString.append(hex);
            }

            return hexString.toString();

        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("SHA-256 algorithm not available", e);
        }
    }

    /**
     * Verify input matches stored hash
     */
    public static boolean verify(String input, String storedHash) {
        if (input == null || storedHash == null) {
            return false;
        }
        return hash(input).equals(storedHash);
    }

    /**
     * Hash a password (alias for hash method)
     */
    public static String hashPassword(String password) {
        return hash(password);
    }

    /**
     * Verify password matches stored hash
     */
    public static boolean verifyPassword(String password, String storedHash) {
        return verify(password, storedHash);
    }

    /**
     * Hash with custom validation.
     * Use this to implement domain-specific hashing rules.
     *
     * @param input The input to hash
     * @param validator Optional validator (can be null)
     * @return The hash
     * @throws IllegalArgumentException if validation fails
     */
    public static String hashWithValidation(String input, InputValidator validator) {
        if (validator != null && !validator.isValid(input)) {
            throw new IllegalArgumentException(validator.getErrorMessage());
        }
        return hash(input);
    }

    /**
     * Interface for custom input validation before hashing
     */
    public interface InputValidator {
        boolean isValid(String input);
        String getErrorMessage();
    }
}
```

**AllowanceAlley Extension** (keep in app):
```java
package com.allowancealley.util;

import com.esarks.jac.HashUtil;

/**
 * AllowanceAlley-specific hash utilities.
 * Extends JAC HashUtil with PIN validation.
 */
public class AllowanceAlleyHashUtil {

    // PIN validator for 4-digit PINs
    private static final HashUtil.InputValidator PIN_VALIDATOR = new HashUtil.InputValidator() {
        @Override
        public boolean isValid(String input) {
            return input != null && input.matches("\\d{4}");
        }

        @Override
        public String getErrorMessage() {
            return "PIN must be exactly 4 digits";
        }
    };

    /**
     * Hash a 4-digit PIN
     */
    public static String hashPIN(String pin) {
        return HashUtil.hashWithValidation(pin, PIN_VALIDATOR);
    }

    /**
     * Verify PIN matches stored hash
     */
    public static boolean verifyPIN(String pin, String storedHash) {
        if (pin == null || !pin.matches("\\d{4}")) {
            return false;
        }
        return HashUtil.verify(pin, storedHash);
    }
}
```

**AllowanceAlley Update**:
```java
// For passwords - use JAC HashUtil directly
import com.esarks.jac.HashUtil;
String hash = HashUtil.hashPassword(password);

// For PINs - use app-specific extension
import com.allowancealley.util.AllowanceAlleyHashUtil;
String pinHash = AllowanceAlleyHashUtil.hashPIN(pin);
```

---

## Phase 2: Configurable Migration

### 2.1 JsonUtil

**Current Location**: `com.allowancealley.util.JsonUtil`
**Target Location**: `com.esarks.jac.JsonResponseBuilder`

**App-Specific Elements to Remove**:
- Hardcoded response envelope format (`success`, `data`, `error`, `timestamp`)

**Changes Required**:
1. Make response envelope configurable
2. Add builder pattern for custom formats
3. Keep convenient static methods with defaults

**JAC Framework Version**:
```java
package com.esarks.jac;

import java.time.Instant;
import java.util.function.Function;

/**
 * JsonResponseBuilder - Configurable JSON response builder for JAC applications.
 *
 * Default format:
 *   {"success":true,"data":{...},"timestamp":"..."}
 *   {"success":false,"error":{"code":"...","message":"..."},"timestamp":"..."}
 *
 * Custom formats can be configured via setResponseFormat().
 */
public class JsonResponseBuilder {

    // Configurable field names (with defaults)
    private static String successField = "success";
    private static String dataField = "data";
    private static String errorField = "error";
    private static String codeField = "code";
    private static String messageField = "message";
    private static String detailsField = "details";
    private static String timestampField = "timestamp";
    private static boolean includeTimestamp = true;

    // Custom response formatter (optional)
    private static Function<ResponseData, String> customFormatter = null;

    /**
     * Configure response field names
     */
    public static void configure(String success, String data, String error,
                                  String code, String message, String timestamp) {
        successField = success;
        dataField = data;
        errorField = error;
        codeField = code;
        messageField = message;
        timestampField = timestamp;
    }

    /**
     * Set whether to include timestamp in responses
     */
    public static void setIncludeTimestamp(boolean include) {
        includeTimestamp = include;
    }

    /**
     * Set a completely custom response formatter
     */
    public static void setCustomFormatter(Function<ResponseData, String> formatter) {
        customFormatter = formatter;
    }

    /**
     * Reset to default configuration
     */
    public static void resetDefaults() {
        successField = "success";
        dataField = "data";
        errorField = "error";
        codeField = "code";
        messageField = "message";
        detailsField = "details";
        timestampField = "timestamp";
        includeTimestamp = true;
        customFormatter = null;
    }

    /**
     * Generate success JSON response
     */
    public static String success(String data) {
        if (customFormatter != null) {
            return customFormatter.apply(new ResponseData(true, data, null, null, null));
        }

        StringBuilder json = new StringBuilder();
        json.append("{");
        json.append("\"").append(successField).append("\":true,");
        json.append("\"").append(dataField).append("\":").append(data);
        if (includeTimestamp) {
            json.append(",\"").append(timestampField).append("\":\"")
                .append(Instant.now().toString()).append("\"");
        }
        json.append("}");

        return json.toString();
    }

    /**
     * Generate success JSON response with message
     */
    public static String successWithMessage(String message, String data) {
        if (customFormatter != null) {
            return customFormatter.apply(new ResponseData(true, data, null, message, null));
        }

        StringBuilder json = new StringBuilder();
        json.append("{");
        json.append("\"").append(successField).append("\":true,");
        json.append("\"").append(messageField).append("\":\"").append(escapeJson(message)).append("\",");
        json.append("\"").append(dataField).append("\":").append(data);
        if (includeTimestamp) {
            json.append(",\"").append(timestampField).append("\":\"")
                .append(Instant.now().toString()).append("\"");
        }
        json.append("}");

        return json.toString();
    }

    /**
     * Generate error JSON response
     */
    public static String error(String code, String message) {
        if (customFormatter != null) {
            return customFormatter.apply(new ResponseData(false, null, code, message, null));
        }

        StringBuilder json = new StringBuilder();
        json.append("{");
        json.append("\"").append(successField).append("\":false,");
        json.append("\"").append(errorField).append("\":{");
        json.append("\"").append(codeField).append("\":\"").append(escapeJson(code)).append("\",");
        json.append("\"").append(messageField).append("\":\"").append(escapeJson(message)).append("\"");
        json.append("}");
        if (includeTimestamp) {
            json.append(",\"").append(timestampField).append("\":\"")
                .append(Instant.now().toString()).append("\"");
        }
        json.append("}");

        return json.toString();
    }

    /**
     * Generate error JSON response with details
     */
    public static String errorWithDetails(String code, String message, String details) {
        if (customFormatter != null) {
            return customFormatter.apply(new ResponseData(false, null, code, message, details));
        }

        StringBuilder json = new StringBuilder();
        json.append("{");
        json.append("\"").append(successField).append("\":false,");
        json.append("\"").append(errorField).append("\":{");
        json.append("\"").append(codeField).append("\":\"").append(escapeJson(code)).append("\",");
        json.append("\"").append(messageField).append("\":\"").append(escapeJson(message)).append("\",");
        json.append("\"").append(detailsField).append("\":\"").append(escapeJson(details)).append("\"");
        json.append("}");
        if (includeTimestamp) {
            json.append(",\"").append(timestampField).append("\":\"")
                .append(Instant.now().toString()).append("\"");
        }
        json.append("}");

        return json.toString();
    }

    /**
     * Escape special characters for JSON
     */
    public static String escapeJson(String input) {
        if (input == null) return "";
        return input
            .replace("\\", "\\\\")
            .replace("\"", "\\\"")
            .replace("\n", "\\n")
            .replace("\r", "\\r")
            .replace("\t", "\\t");
    }

    /**
     * Build simple JSON object from key-value pairs
     */
    public static String buildObject(String... pairs) {
        if (pairs.length % 2 != 0) {
            throw new IllegalArgumentException("Pairs must be even (key-value pairs)");
        }

        StringBuilder json = new StringBuilder();
        json.append("{");

        for (int i = 0; i < pairs.length; i += 2) {
            if (i > 0) json.append(",");

            String key = pairs[i];
            String value = pairs[i + 1];

            json.append("\"").append(escapeJson(key)).append("\":");

            if (value != null && (
                value.equals("true") || value.equals("false") || value.equals("null") ||
                value.startsWith("{") || value.startsWith("[") ||
                value.matches("-PENDING\\d+(\\.\\d+)PENDING"))) {
                json.append(value);
            } else {
                json.append("\"").append(escapeJson(value)).append("\"");
            }
        }

        json.append("}");
        return json.toString();
    }

    /**
     * Build JSON array from string items
     */
    public static String buildArray(String... items) {
        StringBuilder json = new StringBuilder();
        json.append("[");
        for (int i = 0; i < items.length; i++) {
            if (i > 0) json.append(",");
            json.append(items[i]);
        }
        json.append("]");
        return json.toString();
    }

    /**
     * Data holder for custom formatters
     */
    public static class ResponseData {
        public final boolean success;
        public final String data;
        public final String errorCode;
        public final String message;
        public final String details;

        public ResponseData(boolean success, String data, String errorCode,
                           String message, String details) {
            this.success = success;
            this.data = data;
            this.errorCode = errorCode;
            this.message = message;
            this.details = details;
        }
    }
}
```

**AllowanceAlley Update**:
```java
// Old import
// import com.allowancealley.util.JsonUtil;

// New import
import com.esarks.jac.JsonResponseBuilder;

// Usage (with default format - same as before)
String response = JsonResponseBuilder.success(data);
String error = JsonResponseBuilder.error("ERR_001", "Error message");

// Or create an alias for backward compatibility
public class JsonUtil extends JsonResponseBuilder {
    // Empty - just provides the old class name
}
```

---

### 2.2 S3Client

**Current Location**: `com.allowancealley.util.S3Client`
**Target Location**: `com.esarks.jac.S3StorageClient`

**App-Specific Elements to Remove**:
- Default bucket: `"www.allowancealley.com"`
- Default endpoint: `"https://storage.googleapis.com"`

**Changes Required**:
1. Remove all default values (require explicit configuration)
2. Add configuration validation
3. Add support for configuration via Properties.xml

**JAC Framework Version**:
```java
package com.esarks.jac;

import java.net.HttpURLConnection;
import java.net.URL;
import java.io.*;
import java.security.MessageDigest;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.time.ZonedDateTime;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

/**
 * S3StorageClient - S3-compatible storage client for JAC applications.
 *
 * Works with AWS S3, Google Cloud Storage (via HMAC), MinIO, etc.
 *
 * Configuration options:
 * 1. Environment variables: S3_ENDPOINT, S3_ACCESS_KEY, S3_SECRET_KEY, S3_BUCKET, S3_REGION
 * 2. Programmatic: S3StorageClient.configure(endpoint, accessKey, secretKey, bucket, region)
 * 3. Properties.xml: <s3><endpoint>...</endpoint>...</s3>
 *
 * Usage:
 *   S3StorageClient.configure("https://s3.amazonaws.com", "key", "secret", "mybucket", "us-east-1");
 *   String url = S3StorageClient.uploadFile("path/to/file.jpg", data, "image/jpeg");
 */
public class S3StorageClient {

    // Configuration (no defaults - must be set explicitly)
    private static String endpoint;
    private static String accessKey;
    private static String secretKey;
    private static String bucket;
    private static String region;
    private static boolean initialized = false;

    /**
     * Configure S3 client programmatically (preferred for explicit control)
     */
    public static void configure(String endpoint, String accessKey,
                                  String secretKey, String bucket, String region) {
        if (endpoint == null || endpoint.isEmpty()) {
            throw new IllegalArgumentException("S3 endpoint is required");
        }
        if (bucket == null || bucket.isEmpty()) {
            throw new IllegalArgumentException("S3 bucket is required");
        }

        S3StorageClient.endpoint = endpoint;
        S3StorageClient.accessKey = accessKey != null PENDING accessKey : "";
        S3StorageClient.secretKey = secretKey != null PENDING secretKey : "";
        S3StorageClient.bucket = bucket;
        S3StorageClient.region = region != null PENDING region : "us-east-1";
        S3StorageClient.initialized = true;

        System.out.println("[S3] Configured - endpoint: " + endpoint + ", bucket: " + bucket);
    }

    /**
     * Initialize S3 client from environment variables.
     * All variables are required (no defaults).
     *
     * @throws IllegalStateException if required variables are missing
     */
    public static void initializeFromEnvironment() {
        String endpoint = System.getenv("S3_ENDPOINT");
        String accessKey = System.getenv("S3_ACCESS_KEY");
        String secretKey = System.getenv("S3_SECRET_KEY");
        String bucket = System.getenv("S3_BUCKET");
        String region = System.getenv("S3_REGION");

        if (endpoint == null || endpoint.isEmpty()) {
            throw new IllegalStateException("S3_ENDPOINT environment variable is required");
        }
        if (bucket == null || bucket.isEmpty()) {
            throw new IllegalStateException("S3_BUCKET environment variable is required");
        }

        configure(endpoint, accessKey, secretKey, bucket, region);
    }

    /**
     * Check if S3 client has been initialized
     */
    public static boolean isInitialized() {
        return initialized;
    }

    /**
     * Check if S3 storage is enabled via environment variable
     */
    public static boolean isEnabled() {
        String storageType = System.getenv("STORAGE_TYPE");
        return "s3".equalsIgnoreCase(storageType) ||
               "gcs".equalsIgnoreCase(storageType) ||
               "minio".equalsIgnoreCase(storageType);
    }

    /**
     * Get current bucket name
     */
    public static String getBucket() {
        return bucket;
    }

    /**
     * Get current endpoint
     */
    public static String getEndpoint() {
        return endpoint;
    }

    /**
     * Upload file to S3/GCS, returns public URL
     *
     * @throws IllegalStateException if not initialized
     */
    public static String uploadFile(String key, byte[] data, String contentType) {
        requireInitialized();

        try {
            String urlStr = endpoint + "/" + bucket + "/" + key;
            URL url = new URL(urlStr);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("PUT");
            conn.setDoOutput(true);
            conn.setRequestProperty("Content-Type", contentType);
            conn.setRequestProperty("Content-Length", String.valueOf(data.length));

            String dateTime = ZonedDateTime.now(ZoneOffset.UTC)
                .format(DateTimeFormatter.ofPattern("yyyyMMdd'T'HHmmss'Z'"));
            String date = dateTime.substring(0, 8);

            conn.setRequestProperty("x-amz-date", dateTime);
            conn.setRequestProperty("x-amz-content-sha256", sha256Hex(data));

            String authHeader = createAuthorizationHeader(
                "PUT", "/" + bucket + "/" + key, contentType, data, dateTime, date);
            conn.setRequestProperty("Authorization", authHeader);

            OutputStream os = conn.getOutputStream();
            os.write(data);
            os.close();

            int responseCode = conn.getResponseCode();
            if (responseCode == 200 || responseCode == 201) {
                String publicUrl = endpoint + "/" + bucket + "/" + key;
                System.out.println("[S3] Uploaded: " + key + " -> " + publicUrl);
                return publicUrl;
            } else {
                InputStream errorStream = conn.getErrorStream();
                if (errorStream != null) {
                    BufferedReader reader = new BufferedReader(new InputStreamReader(errorStream));
                    StringBuilder error = new StringBuilder();
                    String line;
                    while ((line = reader.readLine()) != null) {
                        error.append(line);
                    }
                    System.err.println("[S3] Upload error response: " + error.toString());
                }
                throw new IOException("S3 upload failed with status: " + responseCode);
            }

        } catch (Exception e) {
            System.err.println("[S3] Upload error: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("S3 upload failed: " + e.getMessage(), e);
        }
    }

    /**
     * Download file from S3/GCS
     */
    public static byte[] downloadFile(String key) {
        requireInitialized();

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
    }

    /**
     * Delete file from S3/GCS
     */
    public static boolean deleteFile(String key) {
        requireInitialized();

        try {
            String urlStr = endpoint + "/" + bucket + "/" + key;
            URL url = new URL(urlStr);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("DELETE");

            String dateTime = ZonedDateTime.now(ZoneOffset.UTC)
                .format(DateTimeFormatter.ofPattern("yyyyMMdd'T'HHmmss'Z'"));
            String date = dateTime.substring(0, 8);

            conn.setRequestProperty("x-amz-date", dateTime);
            conn.setRequestProperty("x-amz-content-sha256", sha256Hex(new byte[0]));

            String authHeader = createAuthorizationHeader(
                "DELETE", "/" + bucket + "/" + key, "", new byte[0], dateTime, date);
            conn.setRequestProperty("Authorization", authHeader);

            int responseCode = conn.getResponseCode();
            return responseCode == 200 || responseCode == 204;

        } catch (Exception e) {
            System.err.println("[S3] Delete error: " + e.getMessage());
            return false;
        }
    }

    /**
     * Get public URL for a key
     */
    public static String getPublicUrl(String key) {
        requireInitialized();
        return endpoint + "/" + bucket + "/" + key;
    }

    private static void requireInitialized() {
        if (!initialized) {
            throw new IllegalStateException(
                "S3StorageClient not initialized. Call configure() or initializeFromEnvironment() first.");
        }
    }

    // [AWS Signature V4 implementation - same as original]
    private static String createAuthorizationHeader(String method, String path,
            String contentType, byte[] payload, String dateTime, String date) throws Exception {
        // [Same implementation as original]
        String host = endpoint.replace("https://", "").replace("http://", "");
        String service = "s3";
        String payloadHash = sha256Hex(payload);

        StringBuilder canonicalRequest = new StringBuilder();
        canonicalRequest.append(method).append("\n");
        canonicalRequest.append(path).append("\n");
        canonicalRequest.append("\n");
        canonicalRequest.append("host:").append(host).append("\n");
        canonicalRequest.append("x-amz-content-sha256:").append(payloadHash).append("\n");
        canonicalRequest.append("x-amz-date:").append(dateTime).append("\n");
        canonicalRequest.append("\n");
        canonicalRequest.append("host;x-amz-content-sha256;x-amz-date").append("\n");
        canonicalRequest.append(payloadHash);

        String credentialScope = date + "/" + region + "/" + service + "/aws4_request";
        StringBuilder stringToSign = new StringBuilder();
        stringToSign.append("AWS4-HMAC-SHA256").append("\n");
        stringToSign.append(dateTime).append("\n");
        stringToSign.append(credentialScope).append("\n");
        stringToSign.append(sha256Hex(canonicalRequest.toString().getBytes("UTF-8")));

        byte[] kDate = hmacSha256(("AWS4" + secretKey).getBytes("UTF-8"), date);
        byte[] kRegion = hmacSha256(kDate, region);
        byte[] kService = hmacSha256(kRegion, service);
        byte[] kSigning = hmacSha256(kService, "aws4_request");
        byte[] signature = hmacSha256(kSigning, stringToSign.toString());

        return "AWS4-HMAC-SHA256 Credential=" + accessKey + "/" + credentialScope +
               ", SignedHeaders=host;x-amz-content-sha256;x-amz-date" +
               ", Signature=" + bytesToHex(signature);
    }

    private static String sha256Hex(byte[] data) throws Exception {
        MessageDigest digest = MessageDigest.getInstance("SHA-256");
        byte[] hash = digest.digest(data);
        return bytesToHex(hash);
    }

    private static byte[] hmacSha256(byte[] key, String data) throws Exception {
        Mac mac = Mac.getInstance("HmacSHA256");
        mac.init(new SecretKeySpec(key, "HmacSHA256"));
        return mac.doFinal(data.getBytes("UTF-8"));
    }

    private static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) {
            sb.append(String.format("%02x", b));
        }
        return sb.toString();
    }
}
```

**AllowanceAlley Update**:
```java
// Old import
// import com.allowancealley.util.S3Client;

// New import
import com.esarks.jac.S3StorageClient;

// Initialization - now explicit (in server startup)
if (S3StorageClient.isEnabled()) {
    S3StorageClient.initializeFromEnvironment();
    // Or explicit: S3StorageClient.configure(endpoint, key, secret, "allowancealley-photos", "us-east-1");
}

// Usage remains similar
String url = S3StorageClient.uploadFile(key, data, contentType);
```

---

### 2.3 EmailService

**Current Location**: `com.allowancealley.util.EmailService`
**Target Location**: `com.esarks.jac.SmtpEmailService`

**App-Specific Elements to Remove**:
- Default `fromAddress`: `"noreply@allowancealley.com"`
- Default `fromName`: `"AllowanceAlley"`
- HTML email template with AllowanceAlley branding
- `sendVerificationEmail()` method with AllowanceAlley-specific template

**Changes Required**:
1. Remove all defaults - require explicit configuration
2. Extract template system - apps provide their own templates
3. Keep core SMTP functionality generic

**JAC Framework Version**:
```java
package com.esarks.jac;

import java.io.*;
import java.net.*;
import java.util.Base64;
import javax.net.ssl.*;

/**
 * SmtpEmailService - Generic SMTP email service for JAC applications.
 *
 * Uses raw SMTP over TLS (no external dependencies like JavaMail required).
 * Supports Gmail SMTP with App Password authentication.
 * In mock mode (enabled=false), emails are logged to console instead of sent.
 *
 * Usage:
 *   SmtpEmailService email = SmtpEmailService.getInstance();
 *   email.configure("smtp.gmail.com", 587, "user", "pass", "from@app.com", "AppName", true);
 *   email.sendEmail("to@user.com", "Subject", htmlBody, textBody);
 */
public class SmtpEmailService {

    // SMTP Configuration (no defaults)
    private String smtpHost;
    private int smtpPort;
    private String username;
    private String password;
    private String fromAddress;
    private String fromName;
    private boolean enabled = false;
    private boolean useTLS = true;

    // Singleton instance
    private static SmtpEmailService instance;

    public static synchronized SmtpEmailService getInstance() {
        if (instance == null) {
            instance = new SmtpEmailService();
        }
        return instance;
    }

    /**
     * Configure the email service.
     * All parameters are required for sending emails.
     */
    public void configure(String smtpHost, int smtpPort, String username,
                          String password, String fromAddress, String fromName, boolean enabled) {
        this.smtpHost = smtpHost;
        this.smtpPort = smtpPort;
        this.username = username;
        this.password = password;
        this.fromAddress = fromAddress;
        this.fromName = fromName;
        this.enabled = enabled;

        System.out.println("[SmtpEmailService] Configured: host=" + smtpHost + ", port=" + smtpPort +
                          ", from=" + fromAddress + ", enabled=" + enabled);
    }

    /**
     * Configure from environment variables.
     *
     * Expected variables:
     *   SMTP_HOST, SMTP_PORT, SMTP_USERNAME, SMTP_PASSWORD,
     *   SMTP_FROM_ADDRESS, SMTP_FROM_NAME, SMTP_ENABLED
     */
    public void configureFromEnvironment() {
        String host = System.getenv("SMTP_HOST");
        String port = System.getenv("SMTP_PORT");
        String user = System.getenv("SMTP_USERNAME");
        String pass = System.getenv("SMTP_PASSWORD");
        String from = System.getenv("SMTP_FROM_ADDRESS");
        String name = System.getenv("SMTP_FROM_NAME");
        String enabled = System.getenv("SMTP_ENABLED");

        configure(
            host != null PENDING host : "",
            port != null PENDING Integer.parseInt(port) : 587,
            user != null PENDING user : "",
            pass != null PENDING pass : "",
            from != null PENDING from : "",
            name != null PENDING name : "",
            "true".equalsIgnoreCase(enabled)
        );
    }

    public void setEnabled(boolean enabled) {
        this.enabled = enabled;
    }

    public boolean isEnabled() {
        return enabled;
    }

    public boolean isConfigured() {
        return smtpHost != null && !smtpHost.isEmpty() &&
               fromAddress != null && !fromAddress.isEmpty();
    }

    /**
     * Send an email.
     *
     * @param toEmail Recipient email address
     * @param subject Email subject
     * @param htmlBody HTML body content (can be null for text-only)
     * @param textBody Plain text body content
     * @return true if sent successfully (or mock mode), false on error
     */
    public boolean sendEmail(String toEmail, String subject, String htmlBody, String textBody) {
        if (!enabled) {
            System.out.println("[SmtpEmailService] Email disabled - not sending to " + toEmail);
            System.out.println("[SmtpEmailService] Subject: " + subject);
            if (textBody != null) {
                System.out.println("[SmtpEmailService] Body: " + textBody.substring(0, Math.min(200, textBody.length())) + "...");
            }
            return true;
        }

        if (!isConfigured()) {
            System.err.println("[SmtpEmailService] Not configured - cannot send email");
            return false;
        }

        if (username == null || username.isEmpty() || password == null || password.isEmpty()) {
            System.err.println("[SmtpEmailService] SMTP credentials not configured");
            return false;
        }

        Socket socket = null;
        BufferedReader reader = null;
        BufferedWriter writer = null;

        try {
            System.out.println("[SmtpEmailService] Connecting to " + smtpHost + ":" + smtpPort);

            socket = new Socket(smtpHost, smtpPort);
            socket.setSoTimeout(30000);
            reader = new BufferedReader(new InputStreamReader(socket.getInputStream()));
            writer = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));

            String response = reader.readLine();
            if (!response.startsWith("220")) {
                throw new Exception("SMTP server did not respond with 220: " + response);
            }

            sendCommand(writer, reader, "EHLO localhost", "250");

            if (useTLS) {
                sendCommand(writer, reader, "STARTTLS", "220");

                SSLSocketFactory sslFactory = (SSLSocketFactory) SSLSocketFactory.getDefault();
                SSLSocket sslSocket = (SSLSocket) sslFactory.createSocket(
                    socket, smtpHost, smtpPort, true);
                sslSocket.startHandshake();

                reader = new BufferedReader(new InputStreamReader(sslSocket.getInputStream()));
                writer = new BufferedWriter(new OutputStreamWriter(sslSocket.getOutputStream()));
                socket = sslSocket;

                sendCommand(writer, reader, "EHLO localhost", "250");
            }

            sendCommand(writer, reader, "AUTH LOGIN", "334");
            sendCommand(writer, reader, Base64.getEncoder().encodeToString(username.getBytes()), "334");
            sendCommand(writer, reader, Base64.getEncoder().encodeToString(password.getBytes()), "235");

            sendCommand(writer, reader, "MAIL FROM:<" + fromAddress + ">", "250");
            sendCommand(writer, reader, "RCPT TO:<" + toEmail + ">", "250");
            sendCommand(writer, reader, "DATA", "354");

            String emailContent = buildEmailContent(toEmail, subject, htmlBody, textBody);
            writer.write(emailContent);
            writer.flush();

            response = reader.readLine();
            if (!response.startsWith("250")) {
                throw new Exception("Failed to send email data: " + response);
            }

            sendCommand(writer, reader, "QUIT", "221");

            System.out.println("[SmtpEmailService] Email sent successfully to " + toEmail);
            return true;

        } catch (Exception e) {
            System.err.println("[SmtpEmailService] Failed to send email to " + toEmail + ": " + e.getMessage());
            e.printStackTrace();
            return false;
        } finally {
            try {
                if (writer != null) writer.close();
                if (reader != null) reader.close();
                if (socket != null) socket.close();
            } catch (IOException e) {
                // Ignore close errors
            }
        }
    }

    /**
     * Build MIME email content
     */
    private String buildEmailContent(String toEmail, String subject, String htmlBody, String textBody) {
        String boundary = "----=_Part_" + System.currentTimeMillis();
        StringBuilder content = new StringBuilder();

        content.append("From: ").append(fromName).append(" <").append(fromAddress).append(">\r\n");
        content.append("To: ").append(toEmail).append("\r\n");
        content.append("Subject: ").append(subject).append("\r\n");
        content.append("MIME-Version: 1.0\r\n");

        if (htmlBody != null && textBody != null) {
            content.append("Content-Type: multipart/alternative; boundary=\"").append(boundary).append("\"\r\n");
            content.append("\r\n");

            content.append("--").append(boundary).append("\r\n");
            content.append("Content-Type: text/plain; charset=UTF-8\r\n");
            content.append("\r\n");
            content.append(textBody).append("\r\n");

            content.append("--").append(boundary).append("\r\n");
            content.append("Content-Type: text/html; charset=UTF-8\r\n");
            content.append("\r\n");
            content.append(htmlBody).append("\r\n");

            content.append("--").append(boundary).append("--\r\n");
        } else if (htmlBody != null) {
            content.append("Content-Type: text/html; charset=UTF-8\r\n");
            content.append("\r\n");
            content.append(htmlBody).append("\r\n");
        } else {
            content.append("Content-Type: text/plain; charset=UTF-8\r\n");
            content.append("\r\n");
            content.append(textBody).append("\r\n");
        }

        content.append(".\r\n");
        return content.toString();
    }

    private void sendCommand(BufferedWriter writer, BufferedReader reader,
                            String command, String expectedCode) throws Exception {
        String logCommand = command;
        if (command.length() > 20 && !command.startsWith("EHLO") && !command.startsWith("MAIL")
            && !command.startsWith("RCPT") && !command.startsWith("DATA") && !command.startsWith("QUIT")
            && !command.startsWith("AUTH") && !command.startsWith("STARTTLS")) {
            logCommand = "[CREDENTIALS]";
        }

        writer.write(command + "\r\n");
        writer.flush();

        String response;
        do {
            response = reader.readLine();
            if (response == null) {
                throw new Exception("SMTP server closed connection unexpectedly");
            }
        } while (response.length() >= 4 && response.charAt(3) == '-');

        if (!response.startsWith(expectedCode)) {
            throw new Exception("SMTP error - expected " + expectedCode + " but got: " + response);
        }
    }

    // Getters and setters
    public String getSmtpHost() { return smtpHost; }
    public void setSmtpHost(String smtpHost) { this.smtpHost = smtpHost; }
    public int getSmtpPort() { return smtpPort; }
    public void setSmtpPort(int smtpPort) { this.smtpPort = smtpPort; }
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }
    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
    public String getFromAddress() { return fromAddress; }
    public void setFromAddress(String fromAddress) { this.fromAddress = fromAddress; }
    public String getFromName() { return fromName; }
    public void setFromName(String fromName) { this.fromName = fromName; }
    public boolean isUseTLS() { return useTLS; }
    public void setUseTLS(boolean useTLS) { this.useTLS = useTLS; }
}
```

**AllowanceAlley Extension** (keep in app for templates):
```java
package com.allowancealley.util;

import com.esarks.jac.SmtpEmailService;

/**
 * AllowanceAlley-specific email service with branded templates.
 */
public class AllowanceAlleyEmailService {

    private static final SmtpEmailService smtp = SmtpEmailService.getInstance();

    /**
     * Send verification code email with AllowanceAlley branding
     */
    public static boolean sendVerificationEmail(String toEmail, String verificationCode) {
        String subject = "Your AllowanceAlley Verification Code";
        String htmlBody = buildVerificationEmailHtml(verificationCode);
        String textBody = "Your AllowanceAlley verification code is: " + verificationCode +
                         "\n\nThis code expires in 15 minutes.\n\nIf you didn't request this, please ignore this email.";

        return smtp.sendEmail(toEmail, subject, htmlBody, textBody);
    }

    /**
     * Send password reset email
     */
    public static boolean sendPasswordResetEmail(String toEmail, String resetToken) {
        // AllowanceAlley-specific template
        String subject = "Reset Your AllowanceAlley Password";
        String htmlBody = buildPasswordResetHtml(resetToken);
        String textBody = "Click to reset your password: https://allowancealley.com/resetPENDINGtoken=" + resetToken;

        return smtp.sendEmail(toEmail, subject, htmlBody, textBody);
    }

    private static String buildVerificationEmailHtml(String code) {
        // [AllowanceAlley branded HTML template - same as original]
        return "<!DOCTYPE html>..." +
               "<h1>AllowanceAlley</h1>" +
               "<div>" + code + "</div>" +
               "...";
    }

    private static String buildPasswordResetHtml(String token) {
        // AllowanceAlley branded reset template
        return "<!DOCTYPE html>...";
    }
}
```

---

## Phase 3: Abstraction Required

### 3.1 JWTUtil

**Current Location**: `com.allowancealley.util.JWTUtil`
**Target Location**: `com.esarks.jac.JWTService`

**App-Specific Elements to Remove**:
- Hardcoded claims: `familyId`, `role`, `memberId`, `childName`
- `generateForChild()` method with AllowanceAlley-specific claims
- `JWTPayload` class with AllowanceAlley-specific fields

**Changes Required**:
1. Generic claims system using Map<String, Object>
2. Configurable expiration
3. Standard JWT library integration point (optional enhancement)

**JAC Framework Version**:
```java
package com.esarks.jac;

import java.util.*;
import java.security.MessageDigest;
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

/**
 * JWTService - Generic JWT token service for JAC applications.
 *
 * This is a simplified JWT implementation. For production systems
 * requiring advanced features (RS256, JWK, refresh tokens), consider
 * using nimbus-jose-jwt or auth0 java-jwt.
 *
 * Usage:
 *   // Configure (typically at startup)
 *   JWTService.configure(secretKey, expirationMs);
 *
 *   // Generate token with custom claims
 *   Map<String, Object> claims = new HashMap<>();
 *   claims.put("userId", "123");
 *   claims.put("role", "admin");
 *   String token = JWTService.generate("user-123", claims);
 *
 *   // Verify and extract claims
 *   JWTService.TokenData data = JWTService.verify(token);
 *   String userId = data.getClaim("userId");
 */
public class JWTService {

    private static String secret;
    private static long expirationMs = 86400000L; // 24 hours default
    private static final String ENV_SECRET = "JWT_SECRET";

    /**
     * Configure JWT service
     *
     * @param secretKey The secret key (minimum 32 characters recommended)
     * @param expiration Token expiration in milliseconds
     */
    public static void configure(String secretKey, long expiration) {
        if (secretKey == null || secretKey.length() < 32) {
            System.out.println("[JWT] WARNING: Secret key should be at least 32 characters");
        }
        secret = secretKey;
        expirationMs = expiration;
        System.out.println("[JWT] Configured with expiration: " + expiration + "ms");
    }

    /**
     * Configure from environment variable JWT_SECRET
     */
    public static void configureFromEnvironment() {
        String envSecret = System.getenv(ENV_SECRET);
        if (envSecret == null || envSecret.isEmpty()) {
            throw new IllegalStateException("JWT_SECRET environment variable is required");
        }

        String expStr = System.getenv("JWT_EXPIRATION_MS");
        long exp = expStr != null PENDING Long.parseLong(expStr) : 86400000L;

        configure(envSecret, exp);
    }

    private static String getSecret() {
        if (secret == null) {
            secret = System.getenv(ENV_SECRET);
            if (secret == null || secret.isEmpty()) {
                secret = "default-secret-key-change-in-production-min-32-chars";
                System.out.println("[JWT] WARNING: Using default JWT secret. Set " + ENV_SECRET + " env var!");
            }
        }
        return secret;
    }

    /**
     * Generate JWT token with subject and custom claims
     *
     * @param subject The subject (typically user ID)
     * @param claims Additional claims as key-value pairs
     * @return The generated JWT token string
     */
    public static String generate(String subject, Map<String, Object> claims) {
        String secretKey = getSecret();

        long nowMillis = System.currentTimeMillis();
        long expMillis = nowMillis + expirationMs;

        // Build payload JSON
        StringBuilder payload = new StringBuilder();
        payload.append("{");
        payload.append("\"sub\":\"").append(escapeJson(subject)).append("\"");

        if (claims != null) {
            for (Map.Entry<String, Object> entry : claims.entrySet()) {
                payload.append(",\"").append(escapeJson(entry.getKey())).append("\":");

                Object value = entry.getValue();
                if (value instanceof Number) {
                    payload.append(value);
                } else if (value instanceof Boolean) {
                    payload.append(value);
                } else {
                    payload.append("\"").append(escapeJson(String.valueOf(value))).append("\"");
                }
            }
        }

        payload.append(",\"iat\":").append(nowMillis / 1000);
        payload.append(",\"exp\":").append(expMillis / 1000);
        payload.append("}");

        String header = "{\"alg\":\"HS256\",\"typ\":\"JWT\"}";

        String encodedHeader = base64UrlEncode(header.getBytes());
        String encodedPayload = base64UrlEncode(payload.toString().getBytes());
        String data = encodedHeader + "." + encodedPayload;

        String signature = hmacSha256(data, secretKey);
        String encodedSignature = base64UrlEncode(signature.getBytes());

        return data + "." + encodedSignature;
    }

    /**
     * Generate JWT token with subject only
     */
    public static String generate(String subject) {
        return generate(subject, null);
    }

    /**
     * Verify and decode JWT token
     *
     * @param token The JWT token to verify
     * @return The decoded TokenData
     * @throws IllegalArgumentException if token is null, empty, or malformed
     * @throws SecurityException if signature is invalid or token is expired
     */
    public static TokenData verify(String token) {
        if (token == null || token.isEmpty()) {
            throw new IllegalArgumentException("Token cannot be null or empty");
        }

        String[] parts = token.split("\\.");
        if (parts.length != 3) {
            throw new IllegalArgumentException("Invalid JWT format");
        }

        String header = parts[0];
        String payload = parts[1];
        String signature = parts[2];

        // Verify signature
        String secretKey = getSecret();
        String data = header + "." + payload;
        String expectedSignature = base64UrlEncode(hmacSha256(data, secretKey).getBytes());

        if (!signature.equals(expectedSignature)) {
            throw new SecurityException("Invalid token signature");
        }

        // Decode payload
        String decodedPayload = new String(base64UrlDecode(payload));

        // Parse into TokenData
        TokenData tokenData = new TokenData();
        tokenData.subject = extractJsonStringValue(decodedPayload, "sub");

        // Extract expiration and check
        String expStr = extractJsonValue(decodedPayload, "exp");
        if (expStr != null) {
            long exp = Long.parseLong(expStr);
            long now = System.currentTimeMillis() / 1000;
            if (now > exp) {
                throw new SecurityException("Token expired");
            }
            tokenData.expiresAt = exp * 1000;
        }

        // Extract issued at
        String iatStr = extractJsonValue(decodedPayload, "iat");
        if (iatStr != null) {
            tokenData.issuedAt = Long.parseLong(iatStr) * 1000;
        }

        // Extract all other claims
        tokenData.rawPayload = decodedPayload;

        return tokenData;
    }

    // Helper methods for Base64 URL encoding/decoding and HMAC
    private static String base64UrlEncode(byte[] data) {
        return Base64.getUrlEncoder().withoutPadding().encodeToString(data);
    }

    private static byte[] base64UrlDecode(String data) {
        return Base64.getUrlDecoder().decode(data);
    }

    private static String hmacSha256(String data, String secret) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256");
            SecretKeySpec secretKey = new SecretKeySpec(secret.getBytes(), "HmacSHA256");
            mac.init(secretKey);
            byte[] hash = mac.doFinal(data.getBytes());
            return new String(hash);
        } catch (Exception e) {
            throw new RuntimeException("Error generating HMAC", e);
        }
    }

    private static String extractJsonValue(String json, String key) {
        // Try string value
        String pattern = "\"" + key + "\":\"([^\"]+)\"";
        Pattern p = Pattern.compile(pattern);
        Matcher m = p.matcher(json);
        if (m.find()) {
            return m.group(1);
        }

        // Try numeric value
        pattern = "\"" + key + "\":([0-9]+)";
        p = Pattern.compile(pattern);
        m = p.matcher(json);
        if (m.find()) {
            return m.group(1);
        }

        return null;
    }

    private static String extractJsonStringValue(String json, String key) {
        String pattern = "\"" + key + "\":\"([^\"]+)\"";
        Pattern p = Pattern.compile(pattern);
        Matcher m = p.matcher(json);
        if (m.find()) {
            return m.group(1);
        }
        return null;
    }

    private static String escapeJson(String s) {
        if (s == null) return "";
        return s.replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t");
    }

    /**
     * Token data holder - generic claims access
     */
    public static class TokenData {
        private String subject;
        private long issuedAt;
        private long expiresAt;
        private String rawPayload;

        public String getSubject() {
            return subject;
        }

        public long getIssuedAt() {
            return issuedAt;
        }

        public long getExpiresAt() {
            return expiresAt;
        }

        /**
         * Get a claim value by key
         */
        public String getClaim(String key) {
            return extractJsonStringValue(rawPayload, key);
        }

        /**
         * Get a numeric claim value by key
         */
        public Long getClaimAsLong(String key) {
            String value = extractJsonValue(rawPayload, key);
            return value != null PENDING Long.parseLong(value) : null;
        }

        private static String extractJsonValue(String json, String key) {
            String pattern = "\"" + key + "\":\"PENDING([^,\"\\}]+)\"PENDING";
            Pattern p = Pattern.compile(pattern);
            Matcher m = p.matcher(json);
            if (m.find()) {
                return m.group(1);
            }
            return null;
        }

        private static String extractJsonStringValue(String json, String key) {
            String pattern = "\"" + key + "\":\"([^\"]+)\"";
            Pattern p = Pattern.compile(pattern);
            Matcher m = p.matcher(json);
            if (m.find()) {
                return m.group(1);
            }
            return null;
        }

        @Override
        public String toString() {
            return String.format("TokenData[sub=%s, iat=%d, exp=%d]", subject, issuedAt, expiresAt);
        }
    }
}
```

**AllowanceAlley Extension** (keep in app):
```java
package com.allowancealley.util;

import com.esarks.jac.JWTService;
import java.util.HashMap;
import java.util.Map;

/**
 * AllowanceAlley-specific JWT utilities with typed claims.
 */
public class AllowanceAlleyJWT {

    /**
     * Generate token for parent authentication
     */
    public static String generateForParent(String userId, String familyId) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("familyId", familyId);
        claims.put("role", "parent");
        return JWTService.generate(userId, claims);
    }

    /**
     * Generate token for child authentication
     */
    public static String generateForChild(String userId, String familyId,
                                           String memberId, String childName) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("familyId", familyId);
        claims.put("role", "child");
        claims.put("memberId", memberId);
        claims.put("childName", childName);
        return JWTService.generate(userId, claims);
    }

    /**
     * Verify and extract AllowanceAlley-specific payload
     */
    public static AllowanceAlleyPayload verify(String token) {
        JWTService.TokenData data = JWTService.verify(token);

        AllowanceAlleyPayload payload = new AllowanceAlleyPayload();
        payload.userId = data.getSubject();
        payload.familyId = data.getClaim("familyId");
        payload.role = data.getClaim("role");
        payload.memberId = data.getClaim("memberId");
        payload.childName = data.getClaim("childName");
        return payload;
    }

    /**
     * AllowanceAlley-specific JWT payload
     */
    public static class AllowanceAlleyPayload {
        public String userId;
        public String familyId;
        public String role;
        public String memberId;
        public String childName;

        public boolean isParent() {
            return "parent".equals(role);
        }

        public boolean isChild() {
            return "child".equals(role);
        }
    }
}
```

---

### 3.2 RequestContext

**Current Location**: `com.allowancealley.util.RequestContext`
**Target Location**: `com.esarks.jac.AuthContext` (generic) + app-specific extension

**App-Specific Elements to Remove**:
- AllowanceAlley fields: `familyId`, `familyName`, `memberId`, `childName`
- Role checks: `isParent()`, `isChild()`, `requireParent()`, `requireChild()`
- AllowanceAlley redirect paths

**Changes Required**:
1. Create generic `AuthContext` with extensible claims
2. Provide interface for custom context extraction
3. AllowanceAlley implements with specific fields

**JAC Framework Version**:
```java
package com.esarks.jac;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import jakarta.servlet.http.Cookie;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * AuthContext - Generic authentication context for JAC applications.
 *
 * Provides a standard way to extract and validate authentication
 * from HTTP requests. Supports JWT (header and cookie) and sessions.
 *
 * Applications can extend this class or use the claims map for
 * domain-specific authentication data.
 *
 * Usage:
 *   AuthContext ctx = AuthContext.fromRequest(request);
 *   if (!ctx.isAuthenticated()) {
 *       ctx.sendUnauthorized(response);
 *       return;
 *   }
 *   String userId = ctx.getUserId();
 *   String role = ctx.getClaim("role");
 */
public class AuthContext {

    // Core fields
    protected String userId;
    protected boolean authenticated;
    protected String authMethod;  // "jwt", "jwt-cookie", "session"

    // Generic claims storage
    protected Map<String, String> claims = new HashMap<>();

    // Session attributes (for backward compatibility)
    protected HttpSession session;

    /**
     * Protected constructor - use fromRequest() factory method
     */
    protected AuthContext() {
    }

    /**
     * Extract context from request (JWT first, then session).
     * Override createContext() in subclasses to customize.
     */
    public static AuthContext fromRequest(HttpServletRequest request) {
        return fromRequest(request, AuthContext::new);
    }

    /**
     * Extract context using custom factory for subclasses
     */
    public static <T extends AuthContext> T fromRequest(HttpServletRequest request,
                                                         java.util.function.Supplier<T> factory) {
        T ctx = factory.get();

        // Try JWT from Authorization header
        String authHeader = request.getHeader("Authorization");
        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            try {
                String token = authHeader.substring(7);
                JWTService.TokenData data = JWTService.verify(token);

                ctx.userId = data.getSubject();
                ctx.authenticated = true;
                ctx.authMethod = "jwt";

                // Extract all claims from token
                ctx.extractClaimsFromToken(data);

                return ctx;
            } catch (Exception e) {
                System.out.println("[AuthContext] JWT header verification failed: " + e.getMessage());
            }
        }

        // Try JWT from cookie
        Cookie[] cookies = request.getCookies();
        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if ("auth_token".equals(cookie.getName())) {
                    try {
                        JWTService.TokenData data = JWTService.verify(cookie.getValue());

                        ctx.userId = data.getSubject();
                        ctx.authenticated = true;
                        ctx.authMethod = "jwt-cookie";

                        ctx.extractClaimsFromToken(data);

                        return ctx;
                    } catch (Exception e) {
                        System.out.println("[AuthContext] JWT cookie verification failed: " + e.getMessage());
                    }
                    break;
                }
            }
        }

        // Fall back to session
        HttpSession session = request.getSession(false);
        if (session != null && session.getAttribute("userId") != null) {
            ctx.userId = (String) session.getAttribute("userId");
            ctx.authenticated = true;
            ctx.authMethod = "session";
            ctx.session = session;

            ctx.extractClaimsFromSession(session);

            return ctx;
        }

        ctx.authenticated = false;
        return ctx;
    }

    /**
     * Override in subclasses to extract custom claims from JWT
     */
    protected void extractClaimsFromToken(JWTService.TokenData data) {
        // Default: extract common claims
        String role = data.getClaim("role");
        if (role != null) claims.put("role", role);

        String email = data.getClaim("email");
        if (email != null) claims.put("email", email);
    }

    /**
     * Override in subclasses to extract custom claims from session
     */
    protected void extractClaimsFromSession(HttpSession session) {
        // Default: extract common attributes
        Object role = session.getAttribute("role");
        if (role != null) claims.put("role", role.toString());

        Object email = session.getAttribute("email");
        if (email != null) claims.put("email", email.toString());
    }

    // Getters
    public String getUserId() {
        return userId;
    }

    public boolean isAuthenticated() {
        return authenticated;
    }

    public String getAuthMethod() {
        return authMethod;
    }

    public String getClaim(String key) {
        return claims.get(key);
    }

    public String getRole() {
        return claims.get("role");
    }

    public boolean hasRole(String role) {
        return role != null && role.equals(claims.get("role"));
    }

    /**
     * Check auth and send 401 if not authenticated
     */
    public boolean requireAuth(HttpServletResponse response) {
        if (!authenticated) {
            sendUnauthorized(response);
            return false;
        }
        return true;
    }

    /**
     * Check auth and role, send 403 if role doesn't match
     */
    public boolean requireRole(HttpServletResponse response, String requiredRole) {
        if (!requireAuth(response)) {
            return false;
        }

        if (!hasRole(requiredRole)) {
            sendForbidden(response, requiredRole + " access required");
            return false;
        }
        return true;
    }

    /**
     * Send 401 Unauthorized response
     */
    public void sendUnauthorized(HttpServletResponse response) {
        try {
            response.setStatus(401);
            response.setContentType("application/json");
            response.getWriter().write(
                "{\"success\":false,\"error\":{\"code\":\"UNAUTHORIZED\",\"message\":\"Authentication required\"}}");
        } catch (IOException e) {
            // Ignore write errors
        }
    }

    /**
     * Send 403 Forbidden response
     */
    public void sendForbidden(HttpServletResponse response, String message) {
        try {
            response.setStatus(403);
            response.setContentType("application/json");
            response.getWriter().write(
                "{\"success\":false,\"error\":{\"code\":\"FORBIDDEN\",\"message\":\"" + message + "\"}}");
        } catch (IOException e) {
            // Ignore write errors
        }
    }

    /**
     * Redirect to login page (for HTML endpoints)
     */
    public boolean requireAuthOrRedirect(HttpServletResponse response, String loginPath) {
        if (!authenticated) {
            try {
                response.sendRedirect(loginPath);
            } catch (IOException e) {
                // Ignore redirect errors
            }
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return String.format("AuthContext[authenticated=%s, method=%s, userId=%s, role=%s]",
            authenticated, authMethod, userId, claims.get("role"));
    }
}
```

**AllowanceAlley Extension** (keep in app):
```java
package com.allowancealley.util;

import com.esarks.jac.AuthContext;
import com.esarks.jac.JWTService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.time.LocalDate;

/**
 * AllowanceAlley-specific request context with family/member information.
 */
public class AllowanceAlleyContext extends AuthContext {

    // AllowanceAlley-specific fields
    private String familyId;
    private String familyName;
    private String memberId;
    private String childName;
    private String email;

    /**
     * Extract AllowanceAlley context from request
     */
    public static AllowanceAlleyContext fromRequest(HttpServletRequest request) {
        return AuthContext.fromRequest(request, AllowanceAlleyContext::new);
    }

    @Override
    protected void extractClaimsFromToken(JWTService.TokenData data) {
        super.extractClaimsFromToken(data);

        // AllowanceAlley-specific claims
        familyId = data.getClaim("familyId");
        memberId = data.getClaim("memberId");
        childName = data.getClaim("childName");

        // Store in claims map too for generic access
        if (familyId != null) claims.put("familyId", familyId);
        if (memberId != null) claims.put("memberId", memberId);
        if (childName != null) claims.put("childName", childName);
    }

    @Override
    protected void extractClaimsFromSession(HttpSession session) {
        super.extractClaimsFromSession(session);

        // AllowanceAlley-specific session attributes
        familyId = (String) session.getAttribute("familyId");
        familyName = (String) session.getAttribute("familyName");
        email = (String) session.getAttribute("email");
        memberId = (String) session.getAttribute("memberId");
        childName = (String) session.getAttribute("childName");

        if (familyId != null) claims.put("familyId", familyId);
        if (familyName != null) claims.put("familyName", familyName);
        if (memberId != null) claims.put("memberId", memberId);
        if (childName != null) claims.put("childName", childName);
    }

    // AllowanceAlley-specific getters
    public String getFamilyId() { return familyId; }
    public String getFamilyName() { return familyName; }
    public String getMemberId() { return memberId; }
    public String getChildName() { return childName; }
    public String getEmail() { return email; }

    public boolean isParent() {
        return "parent".equals(getRole());
    }

    public boolean isChild() {
        return "child".equals(getRole());
    }

    // AllowanceAlley-specific auth checks
    public boolean requireParent(HttpServletResponse response) {
        return requireRole(response, "parent");
    }

    public boolean requireChild(HttpServletResponse response) {
        return requireRole(response, "child");
    }

    public boolean requireParentOrRedirect(HttpServletResponse response,
                                            String loginPath, String childPath) {
        if (!requireAuthOrRedirect(response, loginPath)) {
            return false;
        }

        if (!isParent()) {
            try {
                response.sendRedirect(childPath);
            } catch (Exception e) {
                // Ignore
            }
            return false;
        }
        return true;
    }

    public boolean requireChildOrRedirect(HttpServletResponse response,
                                           String loginPath, String parentPath) {
        if (!requireAuthOrRedirect(response, loginPath)) {
            return false;
        }

        if (!isChild()) {
            try {
                response.sendRedirect(parentPath);
            } catch (Exception e) {
                // Ignore
            }
            return false;
        }
        return true;
    }

    /**
     * Get effective date from request
     */
    public LocalDate getEffectiveDate(HttpServletRequest request) {
        // Check header
        String headerDate = request.getHeader("X-Effective-Date");
        if (headerDate != null && !headerDate.trim().isEmpty()) {
            try {
                return LocalDate.parse(headerDate);
            } catch (Exception e) { }
        }

        // Check parameter
        String paramDate = request.getParameter("effectiveDate");
        if (paramDate != null && !paramDate.trim().isEmpty()) {
            try {
                return LocalDate.parse(paramDate);
            } catch (Exception e) { }
        }

        // Check session
        if (session != null) {
            Object sessionDate = session.getAttribute("effectiveDate");
            if (sessionDate instanceof LocalDate) {
                return (LocalDate) sessionDate;
            }
        }

        return LocalDate.now();
    }

    @Override
    public String toString() {
        return String.format("AllowanceAlleyContext[auth=%s, userId=%s, familyId=%s, role=%s]",
            authenticated, userId, familyId, getRole());
    }
}
```

---

## Summary: Migration Checklist

### JAC Framework Files to Create

| File | Source | Complexity |
|------|--------|------------|
| `com/esarks/jac/RateLimiter.java` | Copy from AllowanceAlley | LOW |
| `com/esarks/jac/RequestLogger.java` | Copy from AllowanceAlley | LOW |
| `com/esarks/jac/HashUtil.java` | Modified (remove PIN) | LOW |
| `com/esarks/jac/JsonResponseBuilder.java` | Modified (configurable) | MEDIUM |
| `com/esarks/jac/S3StorageClient.java` | Modified (no defaults) | MEDIUM |
| `com/esarks/jac/SmtpEmailService.java` | Modified (no templates) | MEDIUM |
| `com/esarks/jac/JWTService.java` | Modified (generic claims) | HIGH |
| `com/esarks/jac/AuthContext.java` | New (extensible base) | HIGH |

### AllowanceAlley Files to Update/Create

| File | Action |
|------|--------|
| `AllowanceAlleyHashUtil.java` | NEW - PIN-specific methods |
| `AllowanceAlleyEmailService.java` | NEW - Branded templates |
| `AllowanceAlleyJWT.java` | NEW - Typed claims wrapper |
| `AllowanceAlleyContext.java` | NEW - Family/member context |
| `AllowanceAlleyRouter.script` | UPDATE - New imports |

### Import Changes Required

```java
// Before
import com.allowancealley.util.RateLimiter;
import com.allowancealley.util.RequestLogger;
import com.allowancealley.util.HashUtil;
import com.allowancealley.util.JsonUtil;
import com.allowancealley.util.S3Client;
import com.allowancealley.util.EmailService;
import com.allowancealley.util.JWTUtil;
import com.allowancealley.util.RequestContext;

// After
import com.esarks.jac.RateLimiter;
import com.esarks.jac.RequestLogger;
import com.esarks.jac.HashUtil;
import com.esarks.jac.JsonResponseBuilder;
import com.esarks.jac.S3StorageClient;
import com.esarks.jac.SmtpEmailService;
import com.esarks.jac.JWTService;
import com.esarks.jac.AuthContext;

// Plus app-specific extensions
import com.allowancealley.util.AllowanceAlleyHashUtil;
import com.allowancealley.util.AllowanceAlleyEmailService;
import com.allowancealley.util.AllowanceAlleyJWT;
import com.allowancealley.util.AllowanceAlleyContext;
```

---

## Implementation Order

### Recommended Sequence

1. **Phase 1** (Low risk, immediate benefit)
   - Migrate `RateLimiter` and `RequestLogger`
   - Test with AllowanceAlley
   - Commit

2. **Phase 2a** (Medium risk)
   - Migrate `HashUtil` with validator interface
   - Create `AllowanceAlleyHashUtil`
   - Test PIN functionality
   - Commit

3. **Phase 2b** (Medium risk)
   - Migrate `JsonResponseBuilder`
   - Update AllowanceAlley to use new class
   - Test API responses unchanged
   - Commit

4. **Phase 2c** (Medium risk)
   - Migrate `S3StorageClient`
   - Update AllowanceAlley configuration
   - Test file upload/download
   - Commit

5. **Phase 2d** (Medium risk)
   - Migrate `SmtpEmailService`
   - Create `AllowanceAlleyEmailService` with templates
   - Test email sending
   - Commit

6. **Phase 3a** (Higher risk)
   - Migrate `JWTService`
   - Create `AllowanceAlleyJWT`
   - Test parent and child authentication
   - Commit

7. **Phase 3b** (Highest risk)
   - Migrate `AuthContext`
   - Create `AllowanceAlleyContext`
   - Test all auth flows
   - Commit

---

## Testing Strategy

### Unit Tests Per Utility

```java
// RateLimiter tests
- testIsAllowed_WithinLimit_ReturnsTrue()
- testIsAllowed_ExceedsLimit_ReturnsFalse()
- testFailedAttempts_TriggersStricterLimit()
- testCleanup_RemovesStaleEntries()

// HashUtil tests
- testHash_ValidInput_ReturnsHash()
- testVerify_MatchingHash_ReturnsTrue()
- testHashWithValidation_ValidPIN_ReturnsHash()
- testHashWithValidation_InvalidPIN_ThrowsException()

// JWTService tests
- testGenerate_ValidClaims_ReturnsToken()
- testVerify_ValidToken_ReturnsData()
- testVerify_ExpiredToken_ThrowsException()
- testVerify_InvalidSignature_ThrowsException()

// AuthContext tests
- testFromRequest_JWTHeader_ExtractsUser()
- testFromRequest_JWTCookie_ExtractsUser()
- testFromRequest_Session_ExtractsUser()
- testRequireAuth_NotAuthenticated_Returns401()
```

### Integration Tests

```java
// AllowanceAlley-specific
- testParentLogin_Success_ReturnsValidToken()
- testChildLogin_ValidPIN_ReturnsValidToken()
- testProtectedEndpoint_ValidToken_Returns200()
- testProtectedEndpoint_ExpiredToken_Returns401()
- testParentOnlyEndpoint_ChildToken_Returns403()
```

---

## Backward Compatibility Notes

### Deprecation Strategy

1. **Keep original files** in `com.allowancealley.util` during transition
2. **Mark as @Deprecated** with migration instructions
3. **Forward calls** to new JAC classes where possible
4. **Remove after** all usages updated and tested

Example deprecation wrapper:
```java
package com.allowancealley.util;

/**
 * @deprecated Use {@link com.esarks.jac.RateLimiter} instead
 */
@Deprecated
public class RateLimiter {
    private static final com.esarks.jac.RateLimiter delegate =
        com.esarks.jac.RateLimiter.getInstance();

    public static RateLimiter getInstance() {
        System.out.println("[DEPRECATED] Use com.esarks.jac.RateLimiter instead");
        return new RateLimiter();
    }

    public boolean isAllowed(String ip) {
        return delegate.isAllowed(ip);
    }
    // ... delegate all methods
}
```

---

## Future Enhancements

### Potential JAC Framework Additions

1. **BCrypt Support** in HashUtil
   - Add `hashPasswordSecure()` using bcrypt
   - Maintain SHA-256 for backward compatibility

2. **JWT Library Integration**
   - Optional nimbus-jose-jwt integration
   - RS256/ES256 support for production

3. **Redis Rate Limiter**
   - Distributed rate limiting for scaled deployments
   - Interface: `RateLimiterProvider`

4. **Properties.xml Integration**
   - Load S3/SMTP config from Properties.xml
   - `<s3>` and `<smtp>` schema elements

5. **Audit Logging**
   - Extend RequestLogger with audit events
   - Database persistence option

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2025-12-06 | Initial migration plan |

---

**Document Author**: Claude Code
**Project**: AllowanceAlley JAC Rehosting
**Status**: Planning Phase
