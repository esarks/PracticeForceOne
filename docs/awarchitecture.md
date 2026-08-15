---
title: "awarchitecture"
---

# AllowanceAlley - Full Stack Architecture (JAC)

## Overview

AllowanceAlley is a **full-stack family management application** built on the JAC (Java Architects Companion) framework. This document details the complete architecture from iOS client to cloud database.

---

## Table of Contents

1. [Architecture Overview](#architecture-overview)
2. [Technology Stack](#technology-stack)
3. [Three-Tier Architecture](#three-tier-architecture)
4. [JAC Framework Integration](#jac-framework-integration)
5. [Database Design](#database-design)
6. [API Layer](#api-layer)
7. [iOS Application](#ios-application)
8. [Authentication System](#authentication-system)
9. [File Storage](#file-storage)
10. [Deployment Architecture](#deployment-architecture)

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                        CLIENT TIER                                   │
├─────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐    ┌─────────────────────┐                 │
│  │    iOS App          │    │    Web Browser      │                 │
│  │  (Swift/SwiftUI)    │    │   (HTML/CSS/JS)     │                 │
│  │                     │    │                     │                 │
│  │  ┌───────────────┐  │    │  ┌───────────────┐  │                 │
│  │  │   WKWebView   │──┼────┼──│  MIC UI Layer │  │                 │
│  │  │   + Native    │  │    │  │  (Forms,      │  │                 │
│  │  │   Photo UI    │  │    │  │   Reports)    │  │                 │
│  │  └───────────────┘  │    │  └───────────────┘  │                 │
│  └─────────────────────┘    └─────────────────────┘                 │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ HTTPS (REST API)
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      APPLICATION TIER                                │
│                    (Google Cloud Platform)                           │
├─────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                    JAC APPLICATION                           │    │
│  ├─────────────────────────────────────────────────────────────┤    │
│  │  MIC Framework                                               │    │
│  │  ├── AllowanceAlleyRouter.script (URL routing)              │    │
│  │  ├── Controllers (request handling)                         │    │
│  │  ├── Views (HTML generation)                                │    │
│  │  └── Forms (data entry, validation)                         │    │
│  ├─────────────────────────────────────────────────────────────┤    │
│  │  ARM Templates                                               │    │
│  │  ├── Service templates                                       │    │
│  │  ├── Report generators                                       │    │
│  │  └── Code generation scripts                                 │    │
│  ├─────────────────────────────────────────────────────────────┤    │
│  │  JAC Core Engine                                             │    │
│  │  ├── Script compiler                                         │    │
│  │  ├── XML processor                                           │    │
│  │  └── Runtime engine                                          │    │
│  └─────────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────────┘
                                    │
                                    │ JDBC
                                    ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        DATA TIER                                     │
├─────────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────┐    ┌─────────────────────┐                 │
│  │   MySQL Database    │    │  Google Cloud       │                 │
│  │   (Cloud SQL)       │    │  Storage (Photos)   │                 │
│  │                     │    │                     │                 │
│  │  - families         │    │  /uploads/photos/   │                 │
│  │  - family_members   │    │  - chore proofs     │                 │
│  │  - chores           │    │  - avatars          │                 │
│  │  - chore_assignments│    │                     │                 │
│  │  - chore_completions│    │                     │                 │
│  │  - rewards          │    │                     │                 │
│  │  - redemptions      │    │                     │                 │
│  │  - points_ledger    │    │                     │                 │
│  └─────────────────────┘    └─────────────────────┘                 │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **iOS Client** | Swift 5.x, SwiftUI | Native iOS application |
| **iOS WebView** | WKWebView (WebKit) | Embedded web browser |
| **Web UI** | MIC Framework (HTML/CSS/JS) | Generated forms and reports |
| **API Server** | JAC Runtime | REST API endpoints |
| **Business Logic** | JAC Scripts | Controllers and services |
| **Code Generation** | JAC Generators | DDL, JEO, Forms, Reports, Services |
| **Database** | MySQL 8.0 (Cloud SQL) | Persistent data storage |
| **File Storage** | Google Cloud Storage | Photo uploads |
| **Authentication** | JWT + HTTP-only cookies | Session management |
| **Hosting** | Google Cloud Platform | Application deployment |

---

## Three-Tier Architecture

### Tier 1: Client Layer

#### iOS Application (AllowanceAlleyJac)

```
AllowanceAlleyJac/
├── AllowanceAlleyJacApp.swift     # App entry point
├── Views/
│   ├── RootView.swift              # Navigation root
│   └── Main/
│       └── MainWebView.swift       # WKWebView wrapper (670 LOC)
├── Models/
│   ├── AppUser.swift               # User and role types
│   └── Family.swift                # Family and member types
├── Services/
│   ├── APIClient.swift             # HTTP client (actor)
│   └── AuthService.swift           # Authentication (@Observable)
└── Utilities/
    ├── KeychainHelper.swift        # Secure token storage
    ├── HashHelper.swift            # SHA256 hashing
    └── EffectiveDateManager.swift  # Test date override
```

**Key iOS Components:**

| Component | Type | Purpose |
|-----------|------|---------|
| `MainWebView` | SwiftUI View | WKWebView container with native photo picker |
| `WebViewCoordinator` | NSObject | Navigation delegate, JS bridge, photo upload |
| `WebViewWrapper` | UIViewRepresentable | SwiftUI ↔ UIKit bridge |
| `ImagePicker` | UIViewControllerRepresentable | Camera/photo library access |
| `APIClient` | Actor | Thread-safe HTTP client |
| `AuthService` | @Observable | Authentication state management |
| `KeychainHelper` | Class | Secure credential storage |

#### Web Browser Client

Direct access to MIC-generated UI at `https://allowancealley.com`

- Login/Registration forms
- Parent dashboard
- Child dashboard
- Chore management
- Reward management
- Reports

### Tier 2: Application Layer (JAC)

#### JAC Framework Structure

```
┌─────────────────────────────────────────┐
│          MIC Framework                  │  ← Application layer
│   (Model-Interface-Controller)          │    Web UI, business logic
├─────────────────────────────────────────┤
│          ARM Templates                   │  ← Template & script layer
│   (Architects Resource Model)           │    Reusable components
├─────────────────────────────────────────┤
│          JAC Engine                      │  ← Core engine layer
│   (Java Architects Companion)           │    Compiler, runtime, XML
└─────────────────────────────────────────┘
```

#### AllowanceAlley JAC Application

**Location:** `ArchitectsCompanion/jac2024/app/com/allowancealley/`

```
com/allowancealley/
├── server/
│   └── AllowanceAlleyRouter.script    # URL routing & controllers
├── model/
│   ├── Family.script                  # Family JEO
│   ├── FamilyMember.script            # Member JEO (parent/child)
│   ├── Chore.script                   # Chore template JEO
│   ├── ChoreAssignment.script         # Assignment JEO
│   ├── ChoreCompletion.script         # Completion JEO
│   ├── Reward.script                  # Reward catalog JEO
│   ├── Redemption.script              # Redemption JEO
│   └── PointsLedger.script            # Transaction JEO
├── service/
│   ├── FamilyService.script           # Family CRUD
│   ├── ChoreService.script            # Chore operations
│   ├── RewardService.script           # Reward operations
│   └── PointsService.script           # Points calculations
├── form/
│   ├── ChoreCreationForm.script       # Create/edit chore
│   ├── ChildRegistrationForm.script   # Add child to family
│   ├── RewardCreationForm.script      # Create reward
│   └── ChoreCompletionForm.script     # Submit completion
└── report/
    ├── ChoreCompletionReport.script   # Chore history
    ├── PointsLedgerReport.script      # Transaction history
    └── FamilyDashboard.script         # Overview report
```

### Tier 3: Data Layer

#### MySQL Database (Cloud SQL)

8 tables with complete referential integrity:

```sql
-- Core family structure
FAMILIES (id, name, owner_id, owner_email, created_at)
FAMILY_MEMBERS (id, family_id, user_id, child_name, pin_hash, age, role, created_at)

-- Chore system
CHORES (id, family_id, title, description, points, category, recurrence,
        difficulty, require_photo, duration_minutes, active, created_by, created_at)
CHORE_ASSIGNMENTS (id, family_id, chore_id, member_id, chore_title,
                   due_date, status, assigned_at, assigned_by)
CHORE_COMPLETIONS (id, assignment_id, family_id, member_id, photo_url,
                   notes, status, submitted_at, reviewed_at, reviewed_by, points_awarded)

-- Reward system
REWARDS (id, family_id, reward_name, description, cost_points, category,
         available_quantity, active, created_by, created_at)
REDEMPTIONS (id, family_id, reward_id, member_id, reward_name, cost_points,
             status, requested_at, approved_at, approved_by)

-- Financial ledger
POINTS_LEDGER (id, family_id, member_id, delta, balance_after,
               transaction_type, reference_id, description, created_at)
```

---

## JAC Framework Integration

### Code Generation Pipeline

AllowanceAlley uses all six JAC generators:

```
┌─────────────────┐
│  XML/JSON Spec  │
└────────┬────────┘
         │
         ▼
┌─────────────────────────────────────────────────────────────────┐
│                     JAC GENERATORS                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │ GenerateDdl  │  │ GenerateJeo  │  │GenerateFrame │           │
│  │              │  │              │  │              │           │
│  │ SQL Schema   │  │ Java Entity  │  │ Data Entry   │           │
│  │ CREATE TABLE │  │ Objects      │  │ Forms        │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐           │
│  │GenerateReport│  │GenerateServ  │  │GenerateDtable│           │
│  │              │  │              │  │              │           │
│  │ Business     │  │ CRUD         │  │ Decision     │           │
│  │ Reports      │  │ Services     │  │ Tables       │           │
│  └──────────────┘  └──────────────┘  └──────────────┘           │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
         │
         ▼
┌─────────────────┐
│  Generated Code │
│  .script, .sql  │
│  .html, .java   │
└─────────────────┘
```

### Generator Usage in AllowanceAlley

| Generator | Input | Output | Example |
|-----------|-------|--------|---------|
| **GenerateDdl** | AllowanceAlley_Ddl.xml | CREATE TABLE statements | 8 tables with FKs |
| **GenerateJeo** | AllowanceAlley_Ddl.xml | Entity .script files | Family.script, Chore.script |
| **GenerateFrame** | ChoreCreation_Frame.xml | HTML forms + validation | Chore creation form |
| **GenerateReport** | ChoreCompletion_Report.xml | Report templates | Points ledger report |
| **GenerateService** | AllowanceAlley_Services.xml | CRUD service scripts | FamilyService.script |
| **GenerateDtable** | ChorePoints_Rules.xml | Decision table logic | Points calculation rules |

### Business Rules (Decision Tables)

#### Chore Points Calculation

```
CONDITION: Age        | Young (3-7) | Tween (8-12) | Teen (13-18)
CONDITION: Difficulty | Easy        | Medium       | Hard
─────────────────────────────────────────────────────────────────
ACTION: Base Points   | 5           | 15           | 35
ACTION: Base Points   | 10          | 25           | 50
ACTION: Base Points   | 20          | 50           | 75
─────────────────────────────────────────────────────────────────
BONUS: Photo Required | +5
BONUS: First Time     | +10
BONUS: 60+ Minutes    | +15
PENALTY: Recurring    | -10%
```

#### Reward Approval Rules

```
CONDITION: Balance          | Insufficient | Sufficient
CONDITION: Age Group        | Young        | Tween/Teen
CONDITION: Reward Cost      | Low (1-25)   | High (26+)
CONDITION: Completion Rate  | <70%         | ≥70%
─────────────────────────────────────────────────────────────────
ACTION: Decision            | REJECTED     | APPROVED/MANUAL
```

---

## API Layer

### Base URL
```
https://allowancealley.com/api
```

### Authentication Endpoints

| Method | Endpoint | Request | Response |
|--------|----------|---------|----------|
| POST | `/auth/login` | `{email, password}` | `{token, user, effectiveDatePENDING}` |
| POST | `/auth/child-login` | `{familyEmail, childId, pin}` | `{token, user}` |
| POST | `/auth/register` | `{email, password, familyName}` | `{requiresVerification, email, familyId}` |
| POST | `/auth/verify-email` | `{email, code}` | `{token, user}` |
| GET | `/auth/me` | - | `{token, user}` |

### Family Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/family-childrenPENDINGemail={email}` | List children (public, for login) |
| GET | `/families/me` | Get current user's family |
| GET | `/families/:id/members` | List family members |
| POST | `/families/:id/members` | Add child to family |

### Chore Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/chores` | List family chores |
| POST | `/chores` | Create chore |
| PUT | `/chores/:id` | Update chore |
| DELETE | `/chores/:id` | Delete chore |
| GET | `/chore-assignments` | List assignments |
| POST | `/chore-assignments` | Assign chore |
| POST | `/chore-completions` | Submit completion |
| PUT | `/chore-completions/:id/approve` | Approve completion |
| PUT | `/chore-completions/:id/reject` | Reject completion |

### Reward Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/rewards` | List family rewards |
| POST | `/rewards` | Create reward |
| PUT | `/rewards/:id` | Update reward |
| DELETE | `/rewards/:id` | Delete reward |
| POST | `/redemptions` | Request redemption |
| PUT | `/redemptions/:id/approve` | Approve redemption |
| PUT | `/redemptions/:id/reject` | Reject redemption |

### Utility Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/upload/photo` | Upload photo (multipart) |
| GET | `/effective-date` | Get test date |
| POST | `/effective-date` | Set test date |
| DELETE | `/effective-date` | Clear test date |

---

## iOS Application

### Architecture Pattern

```
┌─────────────────────────────────────────────────────────────────┐
│                      MainWebView                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                    WKWebView                               │  │
│  │                                                            │  │
│  │  ┌──────────────────────────────────────────────────────┐ │  │
│  │  │              allowancealley.com                       │ │  │
│  │  │                                                        │ │  │
│  │  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │ │  │
│  │  │  │   Login     │  │  Dashboard  │  │   Chores    │   │ │  │
│  │  │  │   Page      │  │   Page      │  │   Page      │   │ │  │
│  │  │  └─────────────┘  └─────────────┘  └─────────────┘   │ │  │
│  │  │                                                        │ │  │
│  │  └──────────────────────────────────────────────────────┘ │  │
│  │                          │                                 │  │
│  │                          │ postMessage                     │  │
│  │                          ▼                                 │  │
│  │  ┌──────────────────────────────────────────────────────┐ │  │
│  │  │              WebViewCoordinator                       │ │  │
│  │  │                                                        │ │  │
│  │  │  • WKNavigationDelegate                               │ │  │
│  │  │  • WKUIDelegate                                       │ │  │
│  │  │  • WKScriptMessageHandler                             │ │  │
│  │  │                                                        │ │  │
│  │  └──────────────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────────────┘  │
│                              │                                   │
│                              │                                   │
│  ┌───────────────────────────▼───────────────────────────────┐  │
│  │                   Native iOS Features                      │  │
│  │                                                            │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐    │  │
│  │  │ ImagePicker  │  │   Keychain   │  │   Alerts     │    │  │
│  │  │ (Camera/     │  │   (Token     │  │   (JS        │    │  │
│  │  │  Photos)     │  │   Storage)   │  │   Dialogs)   │    │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘    │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### JavaScript Bridge

The iOS app injects JavaScript to intercept file inputs:

```javascript
// Injected on page load
function interceptFileInputs() {
    var inputs = document.querySelectorAll('input[type="file"]');
    inputs.forEach(function(input) {
        input.addEventListener('click', function(e) {
            e.preventDefault();
            window.webkit.messageHandlers.iosApp.postMessage({
                action: 'showPhotoPicker'
            });
        }, true);
    });
}
```

### Photo Upload Flow

```
┌──────────┐    ┌───────────┐    ┌────────────┐    ┌──────────┐
│  Web     │    │   iOS     │    │   iOS      │    │   API    │
│  Form    │───►│  Bridge   │───►│  Camera/   │───►│  Upload  │
│  (file   │    │  (inter-  │    │  Gallery   │    │  Endpoint│
│   input) │    │   cept)   │    │            │    │          │
└──────────┘    └───────────┘    └────────────┘    └──────────┘
                                       │                 │
                                       │                 │
                                       ▼                 ▼
                              ┌─────────────┐   ┌─────────────┐
                              │   Preview   │   │   Cloud     │
                              │   Image     │   │   Storage   │
                              └─────────────┘   └─────────────┘
                                       │                 │
                                       │     URL         │
                                       ◄─────────────────┘
                                       │
                                       ▼
                              ┌─────────────────────────┐
                              │   Inject URL into form  │
                              │   via JavaScript        │
                              └─────────────────────────┘
```

---

## Authentication System

### Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                    AUTHENTICATION FLOW                           │
└─────────────────────────────────────────────────────────────────┘

PARENT LOGIN:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Email   │───►│  POST    │───►│  Verify  │───►│  Return  │
│  +       │    │  /auth/  │    │  Hash    │    │  JWT +   │
│ Password │    │  login   │    │          │    │  Cookie  │
└──────────┘    └──────────┘    └──────────┘    └──────────┘

CHILD LOGIN:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Family  │───►│  GET     │───►│  Select  │───►│  POST    │
│  Email   │    │  /family │    │  Child   │    │  /auth/  │
│          │    │ -children│    │  + PIN   │    │child-login
└──────────┘    └──────────┘    └──────────┘    └──────────┘

REGISTRATION:
┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
│  Email   │───►│  POST    │───►│  Send    │───►│  POST    │
│  +       │    │  /auth/  │    │  6-digit │    │  /auth/  │
│ Password │    │ register │    │  code    │    │verify-email
│  +       │    │          │    │          │    │          │
│  Family  │    │          │    │          │    │          │
└──────────┘    └──────────┘    └──────────┘    └──────────┘
```

### Token Storage

| Platform | Storage | Security |
|----------|---------|----------|
| iOS | Keychain | `WhenUnlockedThisDeviceOnly` |
| Web | HTTP-only Cookie | `Secure`, `HttpOnly`, `SameSite=Strict` |
| API | Bearer Header | `Authorization: Bearer {token}` |

### Session Restoration

```swift
// iOS app startup
func restoreSession() async {
    if let token = KeychainHelper.shared.getToken() {
        APIClient.shared.setToken(token)
        // Validate token via /auth/me
        // If valid, user is logged in
        // If invalid, clear keychain and show login
    }
}
```

---

## File Storage

### Photo Upload Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    PHOTO UPLOAD SYSTEM                           │
└─────────────────────────────────────────────────────────────────┘

iOS Device                    JAC Server                 Cloud Storage
┌────────────┐               ┌────────────┐             ┌────────────┐
│            │   multipart   │            │   stream    │            │
│   Camera   │──────────────►│  /api/     │────────────►│   Google   │
│     or     │   POST        │  upload/   │             │   Cloud    │
│   Gallery  │   (JPEG 70%)  │  photo     │             │   Storage  │
│            │               │            │             │            │
└────────────┘               └────────────┘             └────────────┘
                                   │                          │
                                   │     ┌────────────────────┘
                                   │     │ URL path
                                   ▼     ▼
                             ┌────────────────┐
                             │ Response:      │
                             │ {              │
                             │   success:true │
                             │   data: {      │
                             │     url: "/..."│
                             │   }            │
                             │ }              │
                             └────────────────┘
```

### Image Processing

| Step | Description |
|------|-------------|
| 1. Capture | Camera or photo library selection |
| 2. Resize | Max 1200px on longest edge |
| 3. Compress | JPEG 70% quality |
| 4. Upload | Multipart form-data with Bearer token |
| 5. Store | Google Cloud Storage bucket |
| 6. Return | Relative URL path |

---

## Deployment Architecture

### Google Cloud Platform

```
┌─────────────────────────────────────────────────────────────────┐
│                    GOOGLE CLOUD PLATFORM                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                   Cloud Run / App Engine                 │    │
│  │                                                          │    │
│  │  ┌─────────────────────────────────────────────────┐    │    │
│  │  │              JAC Application Server              │    │    │
│  │  │                                                  │    │    │
│  │  │  • jac.jar (Core engine)                        │    │    │
│  │  │  • mic.jar (MIC + ARM)                          │    │    │
│  │  │  • AllowanceAlley .script files                 │    │    │
│  │  │                                                  │    │    │
│  │  └─────────────────────────────────────────────────┘    │    │
│  │                          │                               │    │
│  └──────────────────────────┼───────────────────────────────┘    │
│                             │                                     │
│      ┌──────────────────────┼──────────────────────┐             │
│      │                      │                      │             │
│      ▼                      ▼                      ▼             │
│  ┌────────────┐      ┌────────────┐        ┌────────────┐       │
│  │ Cloud SQL  │      │   Cloud    │        │  Secret    │       │
│  │ (MySQL)    │      │  Storage   │        │  Manager   │       │
│  │            │      │ (Photos)   │        │ (Keys)     │       │
│  │ 8 tables   │      │            │        │            │       │
│  └────────────┘      └────────────┘        └────────────┘       │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ HTTPS
                              ▼
                    ┌──────────────────┐
                    │  allowancealley  │
                    │      .com        │
                    └──────────────────┘
```

### JAR Dependencies

| JAR | Size | Contents |
|-----|------|----------|
| `jac.jar` | 177 KB | JAC core engine (26 classes) |
| `mic.jar` | 209 KB | MIC + ARM frameworks (43 classes) |
| `mysql-connector-j.jar` | ~2 MB | JDBC driver |

---

## Key Design Decisions

### 1. WebView Hybrid Architecture

**Decision:** Use WKWebView wrapper instead of native SwiftUI screens

**Rationale:**
- Single source of truth for UI (web app)
- Faster feature deployment (no App Store review)
- Consistent experience across platforms
- Native features still available (camera, keychain)

### 2. JAC Framework

**Decision:** Use JAC for backend instead of Node.js/Express or Spring Boot

**Rationale:**
- Rapid development with generators
- Consistent code generation patterns
- Built-in form/report generation
- XML-driven configuration
- Same framework as ArchitectsCompanion

### 3. Points-Based Ledger

**Decision:** Double-entry ledger for points tracking

**Rationale:**
- Complete audit trail
- Running balance calculations
- Easy reconciliation
- Fraud prevention (can't manipulate single record)

### 4. Family Isolation

**Decision:** All tables have `FAMILY_ID` with CASCADE DELETE

**Rationale:**
- Complete data isolation
- Easy family deletion
- No cross-family data leakage
- Simplified queries (always filter by family)

---

## Summary

AllowanceAlley demonstrates the full power of the JAC framework in a real-world application:

| Component | Technology |
|-----------|------------|
| **iOS Client** | Swift/SwiftUI + WKWebView |
| **Web UI** | MIC Framework (generated) |
| **Backend** | JAC Runtime on Google Cloud |
| **Database** | MySQL (Cloud SQL) |
| **Storage** | Google Cloud Storage |
| **Auth** | JWT + HTTP-only cookies |
| **Code Gen** | All 6 JAC generators |

The architecture balances:
- **Native performance** (iOS keychain, camera)
- **Web flexibility** (instant updates, cross-platform)
- **Enterprise reliability** (JAC framework, GCP)
- **Rapid development** (code generation)

---

*Architecture documentation for AllowanceAlley using JAC Framework*
*Last updated: 2026-01-03*
