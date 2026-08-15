---
title: "awoverview"
---

# AllowanceAlley - Product Overview

## Transform Family Chores into Learning Opportunities

**AllowanceAlley** is a modern family allowance and chore management platform that teaches children financial responsibility through real-world experience. Parents assign chores, children complete them with photo verification, and everyone tracks progress through an intuitive points-based reward system.

---

## The Problem

Managing family chores and allowances is chaotic:
- Sticky notes get lost, verbal promises forgotten
- Children lack visibility into their earnings
- Parents struggle to track who did what
- No connection between work and rewards
- Traditional allowance teaches nothing about earning

## The Solution

AllowanceAlley creates a structured, engaging system where:
- **Work = Reward** - Children see the direct connection
- **Transparency** - Everyone sees chores, points, and progress
- **Accountability** - Photo proof and parent approval
- **Financial Literacy** - Points become real-world rewards

---

## Key Features

### For Parents
- **Easy Chore Creation** - Set up recurring or one-time chores with point values
- **Assignment Management** - Assign chores to specific children or let them choose
- **Approval Workflow** - Review photo submissions before awarding points
- **Reward Catalog** - Create custom rewards children can redeem
- **Family Dashboard** - Track all activity at a glance
- **Effective Date Testing** - Test time-sensitive features

### For Children
- **My Chores View** - See assigned chores and due dates
- **Photo Submission** - Take pictures to prove completion
- **Points Balance** - Track earnings in real-time
- **Reward Shop** - Browse and redeem available rewards
- **Progress Tracking** - See completed chores and history

---

## Platform Availability

| Platform | Technology | Status |
|----------|------------|--------|
| **Web App** | JAC MIC Framework | Live |
| **iOS App** | Swift/SwiftUI | Live |
| **Android** | WebView Wrapper | Planned |

---

## Why AllowanceAlley?

### Built on Enterprise Architecture
AllowanceAlley is powered by the **JAC (Java Architects Companion)** framework - the same enterprise-grade technology used in professional applications. This means:
- **Reliability** - Battle-tested architecture
- **Security** - Role-based access with JWT authentication
- **Scalability** - Cloud-native on Google Cloud Platform
- **Speed** - Rapid development with JAC generators

### Family-First Design
- Complete family data isolation
- Age-appropriate interfaces for children
- Simple PIN login for kids (no email required)
- Privacy-focused (no third-party data sharing)

### Points-Based Economy
- Double-entry ledger for accurate tracking
- Audit trail of all transactions
- Flexible reward values
- Auto-approval rules for trusted children

---

## Quick Stats

| Metric | Value |
|--------|-------|
| Database Tables | 8 |
| User Roles | 2 (Parent, Child) |
| Workflow States | 3 (Pending, Approved, Rejected) |
| API Endpoints | 25+ |
| iOS Version | 17.0+ |

---

## Technology Highlights

- **Backend**: JAC Framework on Google Cloud
- **Database**: MySQL with UUID primary keys
- **Authentication**: JWT tokens + HTTP-only cookies
- **Photo Storage**: Google Cloud Storage
- **iOS**: Native SwiftUI with WKWebView hybrid
- **Code Generation**: JAC generators for DDL, JEO, Forms, Reports, Services

---

## Domain Model Summary

```
FAMILIES
  └── FAMILY_MEMBERS (parents + children)
        ├── CHORES (templates)
        │     └── CHORE_ASSIGNMENTS
        │           └── CHORE_COMPLETIONS (with photos)
        ├── REWARDS (catalog)
        │     └── REDEMPTIONS
        └── POINTS_LEDGER (double-entry transactions)
```

---

## Get Started

1. **Create Family Account** - Parent signs up with email
2. **Verify Email** - Confirm your email address
3. **Add Children** - Create profiles with 4-digit PINs
4. **Create Chores** - Set up tasks with point values
5. **Create Rewards** - Define what points can buy
6. **Start Earning!** - Children complete chores, earn points, redeem rewards

---

## Contact

**Developer**: Esarks LLC
**Website**: [allowancealley.com](https://allowancealley.com)
**Bundle ID**: com.esarks.allowancealley2

---

*AllowanceAlley - Teaching Kids That Hard Work Pays Off*
