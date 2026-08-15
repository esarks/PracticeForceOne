---
title: "MockUpScreens"
---

# AllowanceAlley Nextgen - Screen Mockups & Build Sequence

**Version:** 1.0
**Date:** 2025-01-20
**Purpose:** Detailed screen specifications for web application development

---

## TABLE OF CONTENTS

1. [Overview](#overview)
2. [Design System](#design-system)
3. [Screen Inventory](#screen-inventory)
4. [Detailed Screen Specifications](#detailed-screen-specifications)
5. [Component Library](#component-library)
6. [Navigation & Routing](#navigation--routing)
7. [Build Sequence Plan](#build-sequence-plan)
8. [Responsive Design Notes](#responsive-design-notes)

---

## 1. OVERVIEW

### 1.1 Application Purpose
AllowanceAlley is a family chore and allowance management system with two distinct user types:
- **Parents**: Manage family, create chores, assign tasks, approve completions, manage rewards
- **Children**: View assigned chores, mark complete, redeem rewards, track points

### 1.2 Screen Count Summary
- **Authentication Screens**: 2
- **Parent Screens**: 8 main screens + 5 modals
- **Child Screens**: 3 main screens
- **Shared/Common**: 2
- **Total**: 20 unique screens/views

### 1.3 Technology Stack (Recommended for Web)
- **Frontend Framework**: React 18+ with TypeScript
- **Routing**: React Router v6
- **State Management**: React Context + hooks (or Zustand)
- **Styling**: Tailwind CSS + Headless UI components
- **Forms**: React Hook Form + Zod validation
- **HTTP Client**: Axios or Fetch API
- **Icons**: Heroicons or Lucide React

---

## 2. DESIGN SYSTEM

### 2.1 Color Palette

```css
/* Primary Colors */
--color-primary: #3B82F6;        /* Blue - Primary actions */
--color-primary-dark: #2563EB;
--color-primary-light: #DBEAFE;

/* Status Colors */
--color-success: #10B981;        /* Green - Approved, completed */
--color-warning: #F59E0B;        /* Orange - Pending */
--color-danger: #EF4444;         /* Red - Rejected, delete */
--color-info: #6366F1;           /* Purple - Rewards */

/* Neutrals */
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-500: #6B7280;
--color-gray-700: #374151;
--color-gray-900: #111827;

/* Background */
--bg-primary: #FFFFFF;
--bg-secondary: #F9FAFB;
--bg-tertiary: #F3F4F6;
```

### 2.2 Typography

```css
/* Font Family */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Font Sizes */
--text-xs: 0.75rem;      /* 12px - captions */
--text-sm: 0.875rem;     /* 14px - secondary text */
--text-base: 1rem;       /* 16px - body */
--text-lg: 1.125rem;     /* 18px - large body */
--text-xl: 1.25rem;      /* 20px - headings */
--text-2xl: 1.5rem;      /* 24px - page titles */
--text-3xl: 1.875rem;    /* 30px - hero titles */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### 2.3 Spacing Scale

```css
/* Spacing (based on 4px grid) */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
```

### 2.4 Border Radius

```css
--radius-sm: 0.25rem;   /* 4px - small elements */
--radius-md: 0.5rem;    /* 8px - buttons, inputs */
--radius-lg: 0.75rem;   /* 12px - cards */
--radius-xl: 1rem;      /* 16px - modals */
--radius-full: 9999px;  /* Pills, avatars */
```

### 2.5 Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
```

---

## 3. SCREEN INVENTORY

### 3.1 Authentication Flow
| Screen ID | Screen Name | Route | User Type |
|-----------|-------------|-------|-----------|
| AUTH-01 | Login/Register | `/auth` | All |
| AUTH-02 | Email Verification | `/auth/verify` | Parent |

### 3.2 Parent Screens
| Screen ID | Screen Name | Route | Description |
|-----------|-------------|-------|-------------|
| PAR-01 | Parent Dashboard | `/parent/dashboard` | Overview, stats, quick actions |
| PAR-02 | Chores List | `/parent/chores` | Manage chore templates |
| PAR-03 | Chore Assignments | `/parent/assignments` | Assign chores to children |
| PAR-04 | Approvals Queue | `/parent/approvals` | Review completed chores |
| PAR-05 | Rewards Management | `/parent/rewards` | Manage reward catalog |
| PAR-06 | Redemptions Queue | `/parent/redemptions` | Approve/reject redemptions |
| PAR-07 | Family Members | `/parent/family` | Manage children profiles |
| PAR-08 | Settings | `/parent/settings` | Account settings |

### 3.3 Parent Modals
| Modal ID | Modal Name | Trigger | Purpose |
|----------|------------|---------|---------|
| MOD-01 | Add Child | Button on Dashboard/Family | Create new child profile |
| MOD-02 | Edit Child | Edit action on child card | Update child info |
| MOD-03 | Add Chore | Button on Chores List | Create chore template |
| MOD-04 | Edit Chore | Edit action on chore | Update chore details |
| MOD-05 | Assign Chore | Button on Assignments | Assign chore to children |
| MOD-06 | Add Reward | Button on Rewards | Create new reward |
| MOD-07 | Edit Reward | Edit action on reward | Update reward details |

### 3.4 Child Screens
| Screen ID | Screen Name | Route | Description |
|-----------|-------------|-------|-------------|
| CHI-01 | My Chores | `/child/chores` | View and complete chores |
| CHI-02 | Rewards Shop | `/child/rewards` | Browse and redeem rewards |
| CHI-03 | Settings | `/child/settings` | Child account settings |

---

## 4. DETAILED SCREEN SPECIFICATIONS

---

## AUTH-01: Login/Register Screen

**Route:** `/auth`
**Access:** Public (unauthenticated users only)
**Redirect:** After successful login â†’ Parent Dashboard or Child Chores

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                                                                â”‚
â”‚                    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”                         â”‚
â”‚                    â”‚ Allowance Alley â”‚  â† Logo/Brand          â”‚
â”‚                    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜                         â”‚
â”‚                                                                â”‚
â”‚              Manage Chores, Earn Rewards                       â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”              â”‚ â”‚
â”‚  â”‚ â”‚ Sign In  â”‚ â”‚ Sign Up  â”‚ â”‚  Child PIN   â”‚  â† Tabs      â”‚ â”‚
â”‚  â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜              â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚  Email Address                                           â”‚ â”‚
â”‚  â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚ â”‚
â”‚  â”‚  â”‚   parent@example.com                              â”‚ â”‚ â”‚
â”‚  â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚  Password                                                â”‚ â”‚
â”‚  â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚ â”‚
â”‚  â”‚  â”‚   â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢                                        â”‚ â”‚ â”‚
â”‚  â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚  [If Sign Up mode only:]                                â”‚ â”‚
â”‚  â”‚  Family Name                                             â”‚ â”‚
â”‚  â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚ â”‚
â”‚  â”‚  â”‚   Smith Family                                   â”‚ â”‚ â”‚
â”‚  â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚  [If Child PIN mode only:]                              â”‚ â”‚
â”‚  â”‚  4-Digit PIN                                             â”‚ â”‚
â”‚  â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚ â”‚
â”‚  â”‚  â”‚   â€¢â€¢â€¢â€¢                                            â”‚ â”‚ â”‚
â”‚  â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚  â„¹ï¸  Enter parent's email and your 4-digit PIN          â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚ â”‚
â”‚  â”‚  â”‚                  Sign In                             â”‚ â”‚ â”‚
â”‚  â”‚  â”‚              (or Create Account / Sign In as Child)  â”‚ â”‚ â”‚
â”‚  â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚  [Error message area - red text if error]               â”‚ â”‚
â”‚  â”‚  FAIL Invalid credentials. Please try again.               â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Specifications

**Container:**
- Max width: 480px
- Centered horizontally and vertically
- Background: White card with shadow-lg
- Padding: 48px
- Border radius: xl (16px)

**Header:**
- Logo: 48px height, centered
- Tagline: text-lg, gray-600, centered
- Spacing: 32px below logo

**Tabs (Segmented Control):**
- 3 options: "Sign In" | "Sign Up" | "Child PIN"
- Active tab: blue background, white text
- Inactive: gray text, transparent
- Full width
- Height: 40px
- Border radius: md (8px)

### Form Fields

**Email Input:**
- Label: "Email Address" (text-sm, gray-700, font-medium)
- Icon: Envelope (left, gray-400)
- Type: email
- Placeholder: "parent@example.com"
- Validation: Must contain @ and .
- Error: "Please enter a valid email address"

**Password Input:**
- Label: "Password" (text-sm, gray-700, font-medium)
- Icon: Lock (left, gray-400)
- Type: password
- Placeholder: "Minimum 6 characters"
- Validation: Min 6 characters
- Error: "Password must be at least 6 characters"
- Show/Hide toggle: Eye icon (right)

**Family Name Input (Sign Up only):**
- Label: "Family Name" (text-sm, gray-700, font-medium)
- Icon: Users (left, gray-400)
- Type: text
- Placeholder: "Enter your family name"
- Validation: Not empty
- Error: "Family name is required"

**PIN Input (Child mode only):**
- Label: "4-Digit PIN" (text-sm, gray-700, font-medium)
- Icon: Key (left, gray-400)
- Type: password
- Maxlength: 4
- Keyboard: numeric
- Placeholder: "â€¢â€¢â€¢â€¢"
- Validation: Exactly 4 digits
- Error: "PIN must be exactly 4 digits"
- Info text below: "Enter parent's email and your 4-digit PIN" (text-sm, blue-600, with info icon)

### Submit Button

**Sign In Mode:**
- Text: "Sign In"
- Background: Blue (primary)
- Width: Full
- Height: 48px
- Border radius: md
- Disabled state: Gray, cursor not-allowed
- Loading state: Shows spinner + "Signing in..."

**Sign Up Mode:**
- Text: "Create Account"
- Same styling as Sign In

**Child PIN Mode:**
- Text: "Sign In as Child"
- Same styling

### States

**Loading State:**
- Button shows spinner icon
- Button text: "Signing in..." / "Creating account..."
- All inputs disabled
- Cursor: wait

**Error State:**
- Red text below button
- Red border on invalid input(s)
- Error icon (X in circle)
- Shake animation on error

**Success State:**
- Navigate to appropriate dashboard
- No intermediate success message

### Validation Rules

| Field | Mode | Required | Min Length | Max Length | Pattern |
|-------|------|----------|------------|------------|---------|
| Email | All | Yes | - | - | Email regex |
| Password | Sign In/Up | Yes | 6 | - | - |
| Family Name | Sign Up | Yes | 1 | 255 | - |
| PIN | Child | Yes | 4 | 4 | Numeric only |

### API Calls

**Sign In:**
```typescript
POST /api/auth/login
Body: { email: string, password: string }
Success: { user: User, token: string }
```

**Sign Up:**
```typescript
POST /api/auth/register
Body: { email: string, password: string, familyName: string }
Success: { user: User, token: string, family: Family }
```

**Child Sign In:**
```typescript
POST /api/auth/child-login
Body: { familyEmail: string, pin: string }
Success: { user: User, token: string }
```

### Responsive Behavior

**Mobile (<640px):**
- Reduce padding to 24px
- Logo smaller: 36px
- Font sizes reduce by 1 step

**Tablet (640px - 1024px):**
- Default sizing

**Desktop (>1024px):**
- Max width remains 480px
- Vertically centered on screen

---

## AUTH-02: Email Verification Screen

**Route:** `/auth/verify`
**Access:** Redirected from sign-up if email verification required
**Redirect:** After verification â†’ Parent Dashboard

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                                                                â”‚
â”‚                                                              â”‚
â”‚                    (Large icon)                                â”‚
â”‚                                                                â”‚
â”‚                   Check Your Email                             â”‚
â”‚                   â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€                            â”‚
â”‚                                                                â”‚
â”‚            We sent a verification code to:                     â”‚
â”‚               parent@example.com                               â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚                â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”                        â”‚ â”‚
â”‚  â”‚                â”‚  [6-digit code] â”‚  â† Input centered      â”‚ â”‚
â”‚  â”‚                â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜                        â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚ â”‚
â”‚  â”‚  â”‚               Verify Email                           â”‚ â”‚ â”‚
â”‚  â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚              Didn't receive the codePENDING                     â”‚ â”‚
â”‚  â”‚                [ Resend Code ]                            â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚                       or                                  â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚           [ Use Demo Mode Instead ]                       â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Specifications

**Container:**
- Max width: 480px
- Centered horizontally and vertically
- Background: White card
- Padding: 48px
- Border radius: xl

**Icon:**
- Envelope with badge (email icon)
- Size: 64px
- Color: Blue (primary)
- Margin bottom: 24px

**Title:**
- Text: "Check Your Email"
- Font: text-2xl, font-bold
- Color: gray-900
- Centered

**Subtitle:**
- Text: "We sent a verification code to:"
- Font: text-sm, gray-600
- Centered
- Margin bottom: 8px

**Email Display:**
- Text: User's email
- Font: text-base, font-semibold, blue-600
- Centered
- Margin bottom: 32px

### Code Input

**Specifications:**
- 6 individual boxes (one per digit)
- Each box: 48px Ã— 56px
- Border: 2px solid gray-300
- Focus: Blue border
- Font: text-2xl, monospace
- Auto-advance to next box on input
- Auto-submit when all 6 filled
- Paste support (pastes full code)

**States:**
- Empty: Gray border
- Focused: Blue border, shadow
- Filled: Dark text, gray border
- Error: Red border, shake animation

### Verify Button

**Specifications:**
- Text: "Verify Email"
- Width: Full
- Height: 48px
- Background: Blue (enabled) / Gray (disabled)
- Disabled when: code length < 6
- Loading state: Spinner + "Verifying..."

### Secondary Actions

**Resend Code:**
- Text link button
- Color: Blue-600
- Font: text-sm
- Spacing: 24px above
- States:
  - Default: Blue text
  - Hover: Underline
  - Loading: "Sending..." + spinner
  - Success: "Code sent!" (green, 3 sec)
  - Cooldown: "Wait 60s" (countdown timer)

**Demo Mode:**
- Text link button
- Color: Orange-600
- Font: text-sm
- Shows warning modal before proceeding

### States

**Loading (Verifying):**
- Button disabled with spinner
- Code inputs disabled
- Text: "Verifying..."

**Success:**
- Brief success message (green checkmark)
- Auto-redirect to dashboard (500ms delay)

**Error:**
- Red text below input: "Invalid code. Please try again."
- Code inputs clear
- Shake animation
- Focus returns to first input

### API Calls

**Verify Email:**
```typescript
POST /api/auth/verify-email
Body: { token: string }
Success: { user: User, token: string }
```

**Resend Code:**
```typescript
POST /api/auth/resend-verification
Body: { email: string }
Success: { message: "Code sent" }
```

### Auto-behaviors

1. **Auto-focus:** First input box on mount
2. **Auto-advance:** Next box when digit entered
3. **Auto-backspace:** Previous box on backspace if current empty
4. **Auto-submit:** Verify when 6th digit entered
5. **Paste handling:** Distribute 6-digit paste across boxes

---

## PAR-01: Parent Dashboard

**Route:** `/parent/dashboard`
**Access:** Authenticated parents only
**Layout:** Main app shell with navigation

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            John Doe  [â†“]   â”‚ â† Header
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ â”‚                                                              â”‚
â”‚ â”‚ Dashboard                                                    â”‚
â”‚ â”‚                                                              â”‚
â”‚ â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ â”‚ Family Overview                                          â”‚ â”‚
â”‚ â”‚ â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ â”‚
â”‚ â”‚ â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚ â”‚
â”‚ â”‚ â”‚  â”‚ Active Chores      â”‚  â”‚ Pending Approvals          â”‚ â”‚ â”‚
â”‚ â”‚ â”‚  â”‚                    â”‚  â”‚                            â”‚ â”‚ â”‚
â”‚ â”‚ â”‚  â”‚    5 / 10          â”‚  â”‚      3 / 3                 â”‚ â”‚ â”‚
â”‚ â”‚ â”‚  â”‚ â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–‘â–‘â–‘        â”‚  â”‚ â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆ                 â”‚ â”‚ â”‚
â”‚ â”‚ â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚ â”‚
â”‚ â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚ â”‚                                                              â”‚
â”‚ â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ â”‚ Quick Actions                                            â”‚ â”‚
â”‚ â”‚ â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ â”‚
â”‚ â”‚ â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚ â”‚
â”‚ â”‚ â”‚  â”‚       â”‚  â”‚    âž•    â”‚  â”‚        â”‚  â”‚    PASS   â”‚ â”‚ â”‚
â”‚ â”‚ â”‚  â”‚   Add    â”‚  â”‚  Create  â”‚  â”‚   Add    â”‚  â”‚ Review  â”‚ â”‚ â”‚
â”‚ â”‚ â”‚  â”‚  Child   â”‚  â”‚  Chore   â”‚  â”‚  Reward  â”‚  â”‚  Tasks  â”‚ â”‚ â”‚
â”‚ â”‚ â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚ â”‚
â”‚ â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚ â”‚                                                              â”‚
â”‚ â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ â”‚ Family Members                                           â”‚ â”‚
â”‚ â”‚ â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤ â”‚
â”‚ â”‚ â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”‚ â”‚
â”‚ â”‚ â”‚  â”‚   Alice                              35 pts   â”‚   â”‚ â”‚
â”‚ â”‚ â”‚  â”‚     Child                                        â”‚   â”‚ â”‚
â”‚ â”‚ â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â”‚ â”‚
â”‚ â”‚ â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”‚ â”‚
â”‚ â”‚ â”‚  â”‚   Bob                                10 pts   â”‚   â”‚ â”‚
â”‚ â”‚ â”‚  â”‚     Child                                        â”‚   â”‚ â”‚
â”‚ â”‚ â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜   â”‚ â”‚
â”‚ â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚ â”‚                                                              â”‚
â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚
â”‚     Dashboard    Chores    Rewards    Family      â”‚ â† Nav
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Main Container:**
- Max width: 1280px
- Centered
- Padding: 24px
- Background: gray-50

**Page Header:**
- Title: "Dashboard" (text-3xl, font-bold)
- Margin bottom: 32px

### Family Overview Section

**Container:**
- Background: White
- Border radius: lg
- Padding: 24px
- Shadow: sm
- Margin bottom: 24px

**Section Header:**
- Text: "Family Overview"
- Font: text-xl, font-semibold
- Margin bottom: 16px

**Stat Cards (Grid):**
- Layout: 2-column grid (1 column on mobile)
- Gap: 16px

**Stat Card Component:**
- Background: Gradient based on status
  - Active Chores: Blue gradient
  - Pending Approvals: Orange gradient
- Border radius: lg
- Padding: 20px
- Min height: 120px

**Stat Card Content:**
- Title: text-sm, white/80, font-medium
- Value: text-3xl, white, font-bold
- Format: "X / Y"
- Progress bar:
  - Height: 8px
  - Border radius: full
  - Background: white/20
  - Fill: white
  - Margin top: 12px

### Quick Actions Section

**Container:**
- Same styling as Family Overview
- Margin bottom: 24px

**Grid Layout:**
- 4 columns on desktop
- 2 columns on tablet
- 1 column on mobile
- Gap: 16px

**Action Button:**
- Aspect ratio: Square-ish (flexible height)
- Background: Color-specific gradient (10% opacity)
  - Add Child: Green
  - Create Chore: Blue
  - Add Reward: Purple
  - Review Tasks: Orange
- Border radius: lg
- Padding: 24px
- Cursor: pointer
- Hover: Scale 1.02, shadow-md
- Active: Scale 0.98

**Action Button Content:**
- Icon: 32px, centered, color-coded
- Text: text-base, font-medium, centered
- Layout: Vertical stack, gap 12px

### Family Members Section

**Container:**
- Same styling as above sections

**Section Header:**
- Text: "Family Members"
- Font: text-xl, font-semibold
- Right side: "+ Add Child" button (text, blue)

**Member Card:**
- Background: gray-50
- Border radius: lg
- Padding: 16px
- Margin bottom: 12px
- Display: flex, items-center

**Member Card Layout:**
- Left: Avatar (40px circle, blue background, person icon)
- Middle: Name + Role (flex-grow)
  - Name: text-base, font-semibold
  - Role: text-sm, gray-500
- Right: Points badge
  - Background: blue-100
  - Text: blue-700, font-medium
  - Padding: 4px 12px
  - Border radius: full

**Empty State:**
- Text: "No family members yet. Add your first child!"
- Color: gray-500
- Font: text-sm, italic
- Centered
- Padding: 32px

### Interactive Elements

**Buttons:**
- Add Child â†’ Opens MOD-01
- Create Chore â†’ Opens MOD-03
- Add Reward â†’ Opens MOD-06
- Review Tasks â†’ Navigate to `/parent/approvals`

**Member Cards:**
- Hover: Background gray-100
- Click: Opens member detail (future feature)

### Data Loading

**Loading State:**
- Skeleton loaders for each section
- Pulsing animation
- Same layout as loaded state

**Error State:**
- Error banner at top
- Retry button
- Shows last successful data if available

### Real-time Updates

**Auto-refresh:**
- Poll every 30 seconds for new approvals
- Show notification badge if new items
- Update stat cards automatically

---

## PAR-02: Chores List

**Route:** `/parent/chores`
**Access:** Authenticated parents only

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            John Doe  [â†“]   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                                â”‚
â”‚  Chores                                      [ + Add Chore ]   â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚   Search chores...                                     â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Clean Room                                           â”‚ â”‚
â”‚  â”‚ Organize toys and make bed                               â”‚ â”‚
â”‚  â”‚ 10 points â€¢  Photo required                            â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Wash Dishes                                          â”‚ â”‚
â”‚  â”‚ Load dishwasher and wipe counters                        â”‚ â”‚
â”‚  â”‚ 5 points                                                 â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Take Out Trash                                       â”‚ â”‚
â”‚  â”‚ 8 points â€¢  Daily                                      â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  [Empty state if no chores:]                                  â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚                                                         â”‚ â”‚
â”‚  â”‚           No chores yet                                   â”‚ â”‚
â”‚  â”‚     Create your first chore to get started!              â”‚ â”‚
â”‚  â”‚                  [ + Add Chore ]                          â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Page Header:**
- Left: "Chores" title (text-3xl, font-bold)
- Right: "+ Add Chore" button (blue, prominent)
- Margin bottom: 24px

**Search Bar:**
- Width: Full
- Height: 48px
- Icon: Magnifying glass (left)
- Placeholder: "Search chores..."
- Border: gray-300
- Background: white
- Border radius: lg
- Margin bottom: 24px

### Chore Card

**Container:**
- Background: White
- Border: 1px gray-200
- Border radius: lg
- Padding: 20px
- Margin bottom: 16px
- Hover: shadow-md, border-blue-300
- Transition: all 200ms

**Card Layout:**
- Display: flex
- Justify: space-between
- Align: flex-start

**Left Content:**
- Title: text-lg, font-semibold, gray-900
- Description: text-sm, gray-600, margin-top 4px
- Meta row: text-sm, gray-500, margin-top 8px
  - Format: "X points â€¢ [badges]"
  - Badges:
    -  Photo required (if requirePhoto)
    -  Daily/Weekly (if recurrence)

**Right Actions:**
- Edit icon (pencil): Blue-600, 20px
- Delete icon (trash): Red-600, 20px
- Gap: 12px
- Hover: Opacity 0.7

### States

**Hover State:**
- Shadow: md
- Border color: blue-300
- Cursor: pointer

**Loading State:**
- Skeleton cards (3-5)
- Pulsing animation

**Empty State:**
- Icon: Clipboard (64px, gray-400)
- Title: "No chores yet" (text-xl, gray-700)
- Subtitle: "Create your first chore to get started!" (text-sm, gray-500)
- Button: "+ Add Chore" (centered, blue)
- Background: gray-50
- Border: 2px dashed gray-300
- Border radius: lg
- Padding: 48px
- Text: centered

### Interactions

**Add Chore Button:**
- Opens MOD-03 (Add Chore Modal)

**Edit Icon:**
- Opens MOD-04 (Edit Chore Modal) with chore data pre-filled

**Delete Icon:**
- Shows confirmation dialog:
  - Title: "Delete ChorePENDING"
  - Message: "This will remove the chore template and all assignments. This action cannot be undone."
  - Actions: Cancel (gray) | Delete (red)

**Search:**
- Filters chores by title or description
- Debounced (300ms)
- Case-insensitive
- Shows result count: "Showing X of Y chores"

### Sorting & Filtering

**Sort Options (Dropdown):**
- Newest first (default)
- Oldest first
- Points (high to low)
- Points (low to high)
- A-Z
- Z-A

**Filter Options (Chips):**
- All (default)
- Photo required
- Daily recurrence
- Weekly recurrence
- One-time

---

## PAR-03: Chore Assignments

**Route:** `/parent/assignments`
**Access:** Authenticated parents only

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            John Doe  [â†“]   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                                â”‚
â”‚  Assignments                                 [ Assign Chore ]  â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”        â”‚
â”‚  â”‚ All        â”‚ Today      â”‚ This Week  â”‚ Overdue    â”‚  Tabs  â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜        â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  Alice                                                  â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚   Clean Room                               Oct 23     â”‚ â”‚
â”‚  â”‚   10 points â€¢  Photo required           â° Today       â”‚ â”‚
â”‚  â”‚                                                   []    â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚   Wash Dishes                              Oct 24     â”‚ â”‚
â”‚  â”‚   5 points                                â° Tomorrow    â”‚ â”‚
â”‚  â”‚                                                   []    â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  Bob                                                    â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚   Take Out Trash                           Oct 22     â”‚ â”‚
â”‚  â”‚   8 points                                WARNING Overdue     â”‚ â”‚
â”‚  â”‚                                                   []    â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  [Empty state:]                                               â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚                                                         â”‚ â”‚
â”‚  â”‚           No assignments yet                              â”‚ â”‚
â”‚  â”‚        Assign chores to get started!                      â”‚ â”‚
â”‚  â”‚                  [ Assign Chore ]                         â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Page Header:**
- Left: "Assignments" title
- Right: "Assign Chore" button (blue)

**Tab Navigation:**
- 4 tabs: All | Today | This Week | Overdue
- Active: Blue border-bottom, blue text
- Inactive: Gray text
- Badge on "Overdue" if count > 0 (red)

### Grouped by Child

**Child Group:**
- Header row:
  - Avatar (32px)
  - Child name (text-lg, font-semibold)
  - Points balance (gray, text-sm)
- Background: white
- Border radius: lg
- Padding: 16px
- Margin bottom: 16px

**Assignment Row:**
- Border top: 1px gray-200 (not first)
- Padding: 12px 0
- Display: flex, space-between

**Assignment Left:**
- Chore title (text-base, font-medium)
- Meta row:
  - Points (text-sm, blue-600)
  - Photo badge if required
  - Separator: â€¢

**Assignment Right:**
- Due date (text-sm)
- Status badge:
  - Today: Orange background, "Today"
  - Tomorrow: Blue background, "Tomorrow"
  - Overdue: Red background, "Overdue"
  - Future: Gray text, "Oct 25"
- Delete icon (hover to show)

### States

**Tab Filters:**
- All: Shows everything
- Today: Due date is today
- This Week: Due within 7 days
- Overdue: Due date < today

**Empty State per Tab:**
- Custom message per tab
- Icon: Calendar
- CTA: "Assign Chore" button

**Loading:**
- Skeleton group cards

### Interactions

**Assign Chore:**
- Opens MOD-05 (Assign Chore Modal)

**Delete Assignment:**
- Confirmation dialog
- Removes from list on success

---

## PAR-04: Approvals Queue

**Route:** `/parent/approvals`
**Access:** Authenticated parents only

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            John Doe  [â†“]   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                                â”‚
â”‚  Pending Approvals (3)                                         â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  Alice                               â° 2 hours ago     â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚   Clean Room                                             â”‚ â”‚
â”‚  â”‚   10 points â€¢  Photo required                          â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚   [Photo thumbnail if uploaded]                          â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚   [ Approve ]                              [ Reject ]    â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  Bob                                 â° 5 hours ago     â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚   Wash Dishes                                            â”‚ â”‚
â”‚  â”‚   5 points                                               â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚   [ Approve ]                              [ Reject ]    â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  Alice                               â° 1 day ago       â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚   Take Out Trash                                         â”‚ â”‚
â”‚  â”‚   8 points                                               â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚   [ Approve ]                              [ Reject ]    â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  [Empty state:]                                               â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚                         PASS                                â”‚ â”‚
â”‚  â”‚           No pending approvals                            â”‚ â”‚
â”‚  â”‚         All caught up! Great job!                         â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Page Header:**
- Title: "Pending Approvals" + count badge
- Count badge: Orange background, white text

### Approval Card

**Container:**
- Background: White
- Border radius: lg
- Padding: 20px
- Margin bottom: 16px
- Border: 1px gray-200

**Card Header:**
- Avatar + Name (left)
- Timestamp (right, gray-500)
- Format: "2 hours ago" / "1 day ago"

**Card Body:**
- Chore title (text-lg, font-semibold)
- Points + badges
- Photo section (if applicable):
  - Thumbnail: 200px Ã— 200px
  - Border radius: md
  - Clickable â†’ opens full-size modal
  - Margin: 12px 0

**Card Actions:**
- Two buttons, side-by-side
- Approve:
  - Background: Green-600
  - Text: "Approve"
  - Icon: Checkmark
- Reject:
  - Background: transparent
  - Border: 1px red-600
  - Text: red-600
  - Icon: X

### Photo Viewer Modal

**Trigger:** Click photo thumbnail

**Modal:**
- Full screen overlay
- Dark background (black, 90% opacity)
- Image: max 90vw Ã— 90vh, centered
- Close: X button top-right (white)
- Click outside to close

### States

**Approving:**
- Button shows spinner
- Disabled state
- Text: "Approving..."

**Success:**
- Card slides out (animation)
- Toast notification: "Approved! +10 points"
- Update counter

**Rejecting:**
- Shows confirmation: "Reject this completionPENDING"
- On confirm:
  - Card slides out
  - Toast: "Completion rejected"

**Empty State:**
- Icon: Checkmark in circle (green)
- Title: "No pending approvals"
- Subtitle: "All caught up! Great job!"
- Background: gray-50
- Padding: 64px

### Sorting

**Default:** Newest first (by completed_at)

**Options:**
- Newest first
- Oldest first
- By child
- By points (high to low)

---

## PAR-05: Rewards Management

**Route:** `/parent/rewards`
**Access:** Authenticated parents only

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            John Doe  [â†“]   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                                â”‚
â”‚  Rewards                                     [ + Add Reward ]  â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Ice Cream Trip                                       â”‚ â”‚
â”‚  â”‚ 25 points                                                 â”‚ â”‚
â”‚  â”‚  Available                                              â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Movie Night                                          â”‚ â”‚
â”‚  â”‚ 50 points                                                 â”‚ â”‚
â”‚  â”‚  Available                                              â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ New Video Game                                       â”‚ â”‚
â”‚  â”‚ 200 points                                                â”‚ â”‚
â”‚  â”‚  Available                                              â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  [Empty state:]                                               â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚                                                         â”‚ â”‚
â”‚  â”‚           No rewards yet                                  â”‚ â”‚
â”‚  â”‚       Create rewards to motivate your kids!               â”‚ â”‚
â”‚  â”‚                  [ + Add Reward ]                         â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Page Header:**
- Left: "Rewards" title
- Right: "+ Add Reward" button (purple gradient)

### Reward Card

**Container:**
- Background: White
- Border: 1px gray-200
- Border radius: lg
- Padding: 20px
- Margin bottom: 16px

**Card Layout:**
- Top row: Name (left) + Actions (right)
- Middle: Points cost
- Bottom: Status badge

**Name:**
- Text: text-lg, font-semibold
- Color: gray-900

**Points:**
- Text: text-base, purple-600
- Format: "X points"
- Margin: 8px 0

**Status Badge:**
- Background: green-100
- Text: green-700
- Icon: Green dot
- Text: "Available"
- Padding: 4px 12px
- Border radius: full
- Font: text-sm

**Actions:**
- Edit icon (pencil)
- Delete icon (trash)
- Same as chores

### Interactions

**Add Reward:**
- Opens MOD-06

**Edit:**
- Opens MOD-07 with data

**Delete:**
- Confirmation dialog
- Checks for pending redemptions
- Warning if redemptions exist

### Empty State

**Similar to chores:**
- Gift icon
- Title + subtitle
- CTA button

---

## PAR-06: Redemptions Queue

**Route:** `/parent/redemptions`
**Access:** Authenticated parents only

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            John Doe  [â†“]   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                                â”‚
â”‚  Pending Redemptions (2)                                       â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  Alice                               â° 1 hour ago      â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚    Ice Cream Trip                                      â”‚ â”‚
â”‚  â”‚   25 points                                              â”‚ â”‚
â”‚  â”‚   Current balance: 35 points                             â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚   [ Approve ]                              [ Reject ]    â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  Bob                                 â° 3 hours ago     â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚    Movie Night                                         â”‚ â”‚
â”‚  â”‚   50 points                                              â”‚ â”‚
â”‚  â”‚   Current balance: 45 points                             â”‚ â”‚
â”‚  â”‚   WARNING Insufficient balance!                               â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚   [ Approve ]                              [ Reject ]    â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”                     â”‚
â”‚  â”‚ Pending    â”‚ Approved   â”‚ Rejected   â”‚  History Tabs      â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜                     â”‚
â”‚                                                                â”‚
â”‚  [Approved tab:]                                              â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ PASS Alice - Ice Cream Trip                 Oct 20       â”‚ â”‚
â”‚  â”‚    25 points deducted                                     â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Page Header:**
- Title: "Pending Redemptions" + count
- Count badge: Purple

**Tabs:**
- Pending (default)
- Approved
- Rejected

### Redemption Card (Pending)

**Container:**
- Same as approval cards

**Content:**
- Child info (avatar + name)
- Reward name with gift icon
- Points cost
- Current balance display
  - If balance < cost: Warning banner
  - Text: "WARNING Insufficient balance!"
  - Background: red-50
  - Text color: red-700

**Actions:**
- Approve button (purple)
  - Disabled if insufficient balance
  - Tooltip: "Child needs X more points"
- Reject button (outlined, red)

### History Cards (Approved/Rejected tabs)

**Layout:**
- Child + Reward name
- Points (green for approved, red for rejected)
- Date
- Checkmark or X icon
- Read-only (no actions)

### States

**Approving:**
- Confirmation modal:
  - "Approve RedemptionPENDING"
  - Shows: Reward name, cost, new balance
  - Confirm/Cancel
- On success:
  - Deduct points
  - Move to Approved tab
  - Toast notification

**Rejecting:**
- Confirmation: "Reject this redemptionPENDING"
- Optional: Reason text field
- Move to Rejected tab

---

## PAR-07: Family Members

**Route:** `/parent/family`
**Access:** Authenticated parents only

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            John Doe  [â†“]   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                                â”‚
â”‚  Family Members                              [ + Add Child ]   â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚   Alice                                             â”‚ â”‚
â”‚  â”‚     10 years old                                          â”‚ â”‚
â”‚  â”‚     â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚     Points balance: 35                                    â”‚ â”‚
â”‚  â”‚     Active chores: 2                                      â”‚ â”‚
â”‚  â”‚     Completed this week: 5                                â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚   Bob                                               â”‚ â”‚
â”‚  â”‚     8 years old                                           â”‚ â”‚
â”‚  â”‚     â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚     Points balance: 10                                    â”‚ â”‚
â”‚  â”‚     Active chores: 1                                      â”‚ â”‚
â”‚  â”‚     Completed this week: 3                                â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚                       Family PIN Code                     â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚  Your family email: parent@example.com                    â”‚ â”‚
â”‚  â”‚  Each child uses their own 4-digit PIN to sign in        â”‚ â”‚
â”‚  â”‚  Set or change PINs when editing each child               â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Page Header:**
- Left: "Family Members"
- Right: "+ Add Child" button (green)

### Member Card (Expanded)

**Container:**
- Background: White
- Border radius: lg
- Padding: 24px
- Margin bottom: 16px
- Border: 1px gray-200

**Card Header:**
- Avatar (48px, larger than other screens)
- Name (text-xl, font-semibold)
- Age subtitle (text-sm, gray-500)
- Actions (edit, delete) on right

**Divider:**
- Margin: 16px 0
- Border: 1px gray-200

**Stats Grid:**
- 3 stats in a row (or stack on mobile)
- Each stat:
  - Label: text-sm, gray-500
  - Value: text-base, font-semibold, gray-900
  - Icons optional

**Stats:**
1. Points balance (with coin icon)
2. Active chores (with clipboard icon)
3. Completed this week (with checkmark icon)

### Info Panel

**Container:**
- Background: blue-50
- Border: 1px blue-200
- Border radius: lg
- Padding: 20px

**Content:**
- Icon: Info circle (blue)
- Title: "Family PIN Code" (font-semibold)
- Bullet points explaining:
  - Family email for child login
  - Each child has unique PIN
  - How to set/change PINs

### Interactions

**Add Child:**
- Opens MOD-01

**Edit:**
- Opens MOD-02 with child data

**Delete:**
- Confirmation dialog
- Warning: "This will delete all chores, assignments, and points for this child"
- Requires typing child name to confirm
- Irreversible action warning

---

## PAR-08: Parent Settings

**Route:** `/parent/settings`
**Access:** Authenticated parents only

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            John Doe  [â†“]   â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                                â”‚
â”‚  Settings                                                      â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Account                                                   â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚ Email                      parent@example.com             â”‚ â”‚
â”‚  â”‚ Family Name                Smith Family                   â”‚ â”‚
â”‚  â”‚ Family ID                  f1234567-89ab...               â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Preferences                                               â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚ Theme                       Light  â—‹   Dark  â—‹  Auto â”‚ â”‚
â”‚  â”‚ Notifications              [ Toggle: ON ]                 â”‚ â”‚
â”‚  â”‚ Email Digest               [ Weekly Summary â–¼ ]           â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Security                                                  â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚ [ Change Password ]                                       â”‚ â”‚
â”‚  â”‚ [ Manage Child PINs ]                                     â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Data                                                      â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚ [ Export Family Data ]                                    â”‚ â”‚
â”‚  â”‚ [ Import Data ]                                           â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ [ Sign Out ]                                              â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Page Title:**
- "Settings" (text-3xl, font-bold)

### Section Structure

**Each section:**
- Background: White
- Border radius: lg
- Padding: 24px
- Margin bottom: 16px
- Border: 1px gray-200

**Section Header:**
- Title (text-lg, font-semibold)
- Divider below

### Account Section

**Read-only fields:**
- Email (display only)
- Family Name (display only)
- Family ID (monospace, text-xs, with copy button)

### Preferences Section

**Theme Switcher:**
- Radio group: Light | Dark | Auto
- Icons for each option
- Saves to localStorage + user preferences

**Notification Toggle:**
- Switch component
- Enables/disables browser notifications

**Email Digest Dropdown:**
- Options: Daily | Weekly | Monthly | Off

### Security Section

**Buttons:**
- Change Password â†’ Modal with current + new password
- Manage Child PINs â†’ Navigate to family members or modal

### Data Section

**Export:**
- Button â†’ Downloads JSON file
- Filename: `allowance-alley-export-YYYY-MM-DD.json`

**Import:**
- Button â†’ File picker
- Validates JSON structure
- Confirmation before import

### Sign Out

**Button:**
- Full width
- Red border
- Red text
- Hover: Red background, white text
- Confirmation dialog
- Clears all local data

---

## MOD-01: Add Child Modal

**Trigger:** Click "+ Add Child" button
**Size:** Medium (500px width)

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Add Child                              [x]    â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                â”‚
â”‚ Child Information                              â”‚
â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€     â”‚
â”‚                                                â”‚
â”‚ First Name *                                   â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Alice                                      â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ [ ] Set Birthdate                                â”‚
â”‚ [If checked:]                                  â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ MM/DD/YYYY                                 â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ Security                                       â”‚
â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€     â”‚
â”‚                                                â”‚
â”‚ 4-Digit PIN (optional)                         â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ â€¢â€¢â€¢â€¢                                       â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ â„¹ï¸ PIN allows child to sign in independently   â”‚
â”‚                                                â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚   Cancel     â”‚              â”‚     Save     â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜              â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Modal Structure

**Header:**
- Title: "Add Child"
- Close button (X) on right
- Border bottom

**Body:**
- Padding: 24px
- Scroll if content overflows

**Footer:**
- Border top
- Padding: 16px
- Buttons: right-aligned
- Gap: 12px

### Form Fields

**First Name:**
- Required field (asterisk)
- Text input
- Placeholder: "Enter child's name"
- Validation: Not empty, max 50 chars
- Error: "Name is required"

**Birthdate Checkbox:**
- Optional toggle
- When ON: Shows date picker
- Calculates age automatically

**Date Picker:**
- Format: MM/DD/YYYY
- Max date: Today
- Min date: Today - 18 years
- Visual calendar dropdown

**PIN Field:**
- Type: password (masked)
- Maxlength: 4
- Keyboard: numeric (mobile)
- Pattern: [0-9]{4}
- Optional (can be set later)
- Show/hide toggle

**Info Alert:**
- Background: blue-50
- Icon: Info circle
- Text: Explains PIN purpose
- Font: text-sm

### Actions

**Cancel:**
- Gray button
- Closes modal
- No changes saved
- Confirmation if form dirty

**Save:**
- Blue button (primary)
- Disabled until valid
- Loading state: Spinner + "Saving..."
- On success:
  - Close modal
  - Refresh family members list
  - Toast: "Child added successfully!"
  - Focus on new child card

### Validation

**Client-side:**
- Real-time validation on blur
- Submit validation on click
- Error messages below fields

**Server-side:**
- Duplicate name check
- PIN uniqueness check
- Return errors to form

---

## MOD-02: Edit Child Modal

**Trigger:** Click edit icon on child card
**Size:** Medium (500px width)

### Similar to Add Child with differences:

**Pre-filled data:**
- Name
- Age/Birthdate
- Existing PIN (masked)

**Additional fields:**
- Avatar upload (future)

**PIN field label:**
- "Change PIN (leave blank to keep current)"

**Save button:**
- Text: "Update"
- Optimistic update on list

---

## MOD-03: Add Chore Modal

**Trigger:** Click "+ Add Chore" button
**Size:** Medium (600px width)

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Create Chore                           [x]    â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                â”‚
â”‚ Chore Details                                  â”‚
â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€     â”‚
â”‚                                                â”‚
â”‚ Title *                                        â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Clean Room                                 â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ Description                                    â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Organize toys and make bed                â”‚ â”‚
â”‚ â”‚                                            â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ Points: 10        [ - ]  [ + ]                 â”‚
â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€                           â”‚
â”‚ â– â– â– â– â– â– â– â– â– â– â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘  (slider: 1-100)      â”‚
â”‚                                                â”‚
â”‚ â˜‘ Require photo proof                          â”‚
â”‚                                                â”‚
â”‚ Recurrence                                     â”‚
â”‚ â—‹ One-time  â—‹ Daily  â—‹ Weekly                  â”‚
â”‚                                                â”‚
â”‚ Assign to Children                             â”‚
â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€     â”‚
â”‚                                                â”‚
â”‚ â˜‘ Alice (10 years)                             â”‚
â”‚ [ ] Bob (8 years)                                â”‚
â”‚                                                â”‚
â”‚ Due Date (for assigned children)               â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Tomorrow (Oct 23)                          â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚   Cancel     â”‚              â”‚    Create    â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜              â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Form Fields

**Title:**
- Required
- Max 100 chars
- Placeholder: "e.g., Clean Room"

**Description:**
- Textarea
- Optional
- Max 500 chars
- Rows: 3

**Points:**
- Range: 1-100
- Default: 10
- Stepper buttons (Â±5)
- Slider control
- Display value above slider

**Require Photo:**
- Checkbox
- Default: unchecked

**Recurrence:**
- Radio group
- Options: One-time (default) | Daily | Weekly
- Future: Custom schedule

**Assign to Children:**
- Checkbox list
- Shows all children
- Can select multiple
- Shows age in parentheses
- Default: all checked

**Due Date:**
- Date picker
- Only if children selected
- Default: Tomorrow
- Min: Today
- Relative dates: "Today", "Tomorrow"

### Actions

**Create:**
- Creates chore template
- Creates assignments for selected children
- Shows success toast
- Closes modal
- Navigates to assignments tab

---

## MOD-05: Assign Chore Modal

**Trigger:** Click "Assign Chore" button
**Size:** Medium (500px width)

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Assign Chore                           [x]    â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                â”‚
â”‚ Select Chore *                                 â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Clean Room (10 pts)                    â–¼  â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ Assign To *                                    â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Alice                                  â–¼  â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ Due Date *                                     â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚  Oct 23, 2025                           â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚   Cancel     â”‚              â”‚    Assign    â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜              â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Form Fields

**Select Chore:**
- Dropdown
- Shows: Title + points
- Grouped by recurrence type
- Search/filter

**Assign To:**
- Dropdown
- Multi-select version available
- Shows child name + age
- Shows current points balance

**Due Date:**
- Date picker
- Default: Tomorrow
- Quick picks: Today | Tomorrow | This Weekend | Next Week

### Multi-Assign Feature

**Toggle:** "Assign to multiple children"
- Changes "Assign To" to multi-select
- Creates multiple assignments
- Same due date for all

---

## MOD-06: Add Reward Modal

**Trigger:** Click "+ Add Reward" button
**Size:** Medium (500px width)

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Create Reward                          [x]    â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                â”‚
â”‚ Reward Name *                                  â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Ice Cream Trip                             â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ Cost: 25 points   [ - ]  [ + ]                 â”‚
â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€                           â”‚
â”‚ â– â– â– â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘  (slider: 1-500)         â”‚
â”‚                                                â”‚
â”‚ Description (optional)                         â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚ Trip to ice cream shop                     â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”              â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚ â”‚   Cancel     â”‚              â”‚    Create    â”‚ â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜              â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Form Fields

**Reward Name:**
- Required
- Max 100 chars

**Cost:**
- Range: 1-500
- Stepper: Â±5
- Slider
- Default: 25

**Description:**
- Optional
- Textarea
- Max 200 chars

---

## CHI-01: Child Chores View

**Route:** `/child/chores`
**Access:** Authenticated children only

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            Alice  [â†“]      â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                                â”‚
â”‚  My Chores                                                     â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  My Points: 35                                          â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  Today's Chores (2)                                            â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Clean Room                                  â° Due today  â”‚ â”‚
â”‚  â”‚ Organize toys and make bed                               â”‚ â”‚
â”‚  â”‚ 10 points â€¢  Photo required                            â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚                    [ Mark Complete ]                      â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Wash Dishes                                 â° Due today  â”‚ â”‚
â”‚  â”‚ Load dishwasher and wipe counters                        â”‚ â”‚
â”‚  â”‚ 5 points                                                 â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚                    [ Mark Complete ]                      â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  All My Chores                                                 â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Take Out Trash                          Oct 24  PASS     â”‚ â”‚
â”‚  â”‚ 8 points â€¢ Waiting for approval                          â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Feed Pet                                Oct 25         â”‚ â”‚
â”‚  â”‚ 5 points                                                 â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚                    [ Mark Complete ]                      â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  [Empty state if no chores:]                                  â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚                                                         â”‚ â”‚
â”‚  â”‚           No chores assigned yet!                         â”‚ â”‚
â”‚  â”‚         Check back later for new chores.                  â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Points Banner:**
- Background: Blue gradient
- Text: white, text-xl, font-bold
- Icon: Coin
- Centered
- Padding: 16px
- Border radius: lg
- Margin bottom: 24px

**Section Headers:**
- "Today's Chores" with count badge
- "All My Chores"
- Font: text-xl, font-semibold
- Margin: 24px 0 16px

### Chore Card (Child View)

**Container:**
- Background: White
- Border: 1px gray-200
- Border radius: lg
- Padding: 20px
- Margin bottom: 16px

**Card Header:**
- Title (text-lg, font-semibold)
- Due badge (right)
  - Today: Orange, "â° Due today"
  - Tomorrow: Blue, " Tomorrow"
  - Future: Gray, " Oct 25"
  - Overdue: Red, "WARNING Overdue"

**Card Body:**
- Description (text-sm, gray-600)
- Points + badges row
  - Format: "X points â€¢ [badges]"

**Completion Status:**
- Pending approval:
  - Green checkmark icon
  - Text: "Waiting for approval"
  - Background: green-50
  - Disable complete button
- Rejected:
  - Red X icon
  - Text: "Try again"
  - Can re-complete

**Complete Button:**
- Full width within card
- Blue background
- Text: "Mark Complete"
- Icon: Checkmark
- Height: 44px
- Border radius: md
- Margin top: 16px

### Complete Flow

**If photo required:**
1. Click "Mark Complete"
2. Opens camera/file picker
3. Shows preview
4. Confirm/Retake buttons
5. Upload photo
6. Mark complete

**If no photo:**
1. Click "Mark Complete"
2. Confirmation: "Mark this chore as completePENDING"
3. Confirm â†’ API call
4. Card updates to "Waiting for approval"

### States

**Completing:**
- Button shows spinner
- Text: "Submitting..."
- Card slightly dimmed

**Success:**
- Card animates
- Shows green checkmark
- Text changes to "Waiting for approval"
- Confetti animation (optional)

**Error:**
- Toast notification
- Button re-enabled
- Retry option

---

## CHI-02: Child Rewards View

**Route:** `/child/rewards`
**Access:** Authenticated children only

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            Alice  [â†“]      â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                                â”‚
â”‚  Rewards Shop                                                  â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  My Points: 35                                          â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  Available Rewards                                             â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  Ice Cream Trip                                         â”‚ â”‚
â”‚  â”‚ 25 points                                                 â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚ You have enough! check                                        â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚                      [ Redeem ]                           â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  Movie Night                                            â”‚ â”‚
â”‚  â”‚ 50 points                                                 â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚ Need 15 more points                                       â”‚ â”‚
â”‚  â”‚ â– â– â– â– â– â– â– â– â– â– â– â– â– â– â–‘â–‘â–‘â–‘â–‘â–‘  (70% progress)                     â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚                   [ Redeem ]                              â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  New Video Game                                         â”‚ â”‚
â”‚  â”‚ 200 points                                                â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚ Need 165 more points                                      â”‚ â”‚
â”‚  â”‚ â– â– â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘â–‘  (17% progress)                     â”‚ â”‚
â”‚  â”‚                                                           â”‚ â”‚
â”‚  â”‚                   [ Redeem ]                              â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  My Redemptions                                                â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚  Ice Cream Trip - Pending                   25 points  â”‚ â”‚
â”‚  â”‚    Requested 1 hour ago                                   â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ PASS Pizza Night - Approved                     30 points  â”‚ â”‚
â”‚  â”‚    Enjoyed on Oct 20                                      â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Points Banner:**
- Same as chores view
- Prominent display

**Sections:**
- "Available Rewards"
- "My Redemptions"

### Reward Card (Child View)

**Container:**
- Background: White â†’ Purple gradient (subtle)
- Border radius: lg
- Padding: 20px
- Margin bottom: 16px

**Card Content:**
- Gift icon (large, 32px)
- Reward name (text-lg, font-semibold)
- Points cost (text-base, purple-600)

**Affordability Indicator:**
- Can afford:
  - Green checkmark
  - Text: "You have enough! check"
  - Background: green-50
- Cannot afford:
  - Text: "Need X more points"
  - Progress bar showing %
  - Background: gray-50

**Progress Bar:**
- Height: 8px
- Background: gray-200
- Fill: Purple gradient
- Border radius: full
- Shows percentage to goal

**Redeem Button:**
- Full width
- Purple background (if can afford)
- Gray + disabled (if cannot afford)
- Text: "Redeem"
- Icon: Gift

### Redemption History Cards

**Layout:**
- Smaller cards
- Status icon (left)
  - Pending: Clock (orange)
  - Approved: Checkmark (green)
  - Rejected: X (red)

**Content:**
- Reward name + Status
- Points cost (right)
- Timestamp/message below

### Redeem Flow

**Click Redeem:**
1. Confirmation modal:
   - "Redeem [Reward Name]PENDING"
   - "This will cost X points"
   - "Your new balance: Y points"
   - Confirm/Cancel
2. On confirm:
   - API call
   - Show success message
   - Add to redemptions list
   - Update points balance

### States

**Redeeming:**
- Button shows spinner
- Text: "Requesting..."

**Success:**
- Toast: "Redemption requested!"
- Card moves to "Pending" section
- Points updated

**Error:**
- Toast with error message
- Button re-enabled

---

## CHI-03: Child Settings

**Route:** `/child/settings`
**Access:** Authenticated children only

### Visual Mockup

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ â˜°  Allowance Alley                            Alice  [â†“]      â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚                                                                â”‚
â”‚  Settings                                                      â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ About Me                                                  â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚ Name                       Alice                          â”‚ â”‚
â”‚  â”‚ Age                        10 years old                   â”‚ â”‚
â”‚  â”‚ Member since               Oct 20, 2025                   â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ My Stats                                                  â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚ Current points             35                             â”‚ â”‚
â”‚  â”‚ Total points earned        120                            â”‚ â”‚
â”‚  â”‚ Chores completed           12                             â”‚ â”‚
â”‚  â”‚ Rewards redeemed           2                              â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ Privacy                                                   â”‚ â”‚
â”‚  â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”‚ â”‚
â”‚  â”‚ â„¹ï¸ Your data is safe with us                             â”‚ â”‚
â”‚  â”‚    Only your family can see your progress                â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â” â”‚
â”‚  â”‚ [ Sign Out ]                                              â”‚ â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜ â”‚
â”‚                                                                â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### Layout Structure

**Sections:**
- About Me (read-only info)
- My Stats (achievements)
- Privacy (info)
- Sign Out

**All sections:**
- Same card styling
- Read-only (no edit for children)

**Stats Section:**
- Key-value pairs
- Icons optional
- Larger numbers emphasized

**Sign Out Button:**
- Full width
- Red outline
- Confirmation dialog

---

## 5. COMPONENT LIBRARY

### 5.1 Reusable Components

#### Button Component

**Variants:**
- Primary: Blue background
- Secondary: Gray outline
- Danger: Red background
- Ghost: Transparent

**Sizes:**
- sm: 32px height
- md: 40px height (default)
- lg: 48px height

**States:**
- Default
- Hover
- Active
- Disabled
- Loading

#### Card Component

**Props:**
- padding: sm | md | lg
- border: boolean
- shadow: none | sm | md | lg
- hover: boolean

#### Input Components

**TextField:**
- Label
- Placeholder
- Icon (left/right)
- Helper text
- Error message
- Validation state

**TextArea:**
- Same as TextField
- Rows prop
- Auto-resize option

**Select/Dropdown:**
- Single/multi select
- Search
- Custom options
- Grouping

**DatePicker:**
- Calendar view
- Quick picks
- Min/max dates
- Format options

**Toggle/Switch:**
- Label
- Disabled state
- onChange handler

**Checkbox:**
- Label
- Indeterminate state

**Radio Group:**
- Horizontal/vertical
- Custom styling

#### Badge Component

**Colors:**
- Blue (default/info)
- Green (success)
- Orange (warning)
- Red (danger)
- Gray (neutral)
- Purple (special)

**Sizes:**
- sm | md | lg

#### Avatar Component

**Sizes:**
- xs (24px) | sm (32px) | md (40px) | lg (48px) | xl (64px)
- Fallback: Initials or icon
- Online indicator (optional)

#### Modal Component

**Sizes:**
- sm (400px) | md (500px) | lg (700px) | xl (900px) | full

**Parts:**
- Header (title + close)
- Body (scrollable)
- Footer (actions)

#### Toast/Notification

**Positions:**
- top-right (default)
- top-center
- bottom-right
- bottom-center

**Types:**
- success (green)
- error (red)
- warning (orange)
- info (blue)

**Auto-dismiss:**
- Default: 5000ms
- Configurable
- Dismiss button

#### Loading States

**Skeleton:**
- Text lines
- Card
- Avatar
- Custom shapes

**Spinner:**
- Sizes: sm | md | lg
- Colors: primary | secondary | white

#### Empty State

**Components:**
- Icon (large)
- Title
- Subtitle
- Action button (optional)

---

## 6. NAVIGATION & ROUTING

### 6.1 Route Structure

```
/
â”œâ”€â”€ /auth
â”‚   â”œâ”€â”€ /login (redirects to /auth)
â”‚   â””â”€â”€ /verify
â”‚
â”œâ”€â”€ /parent
â”‚   â”œâ”€â”€ /dashboard
â”‚   â”œâ”€â”€ /chores
â”‚   â”œâ”€â”€ /assignments
â”‚   â”œâ”€â”€ /approvals
â”‚   â”œâ”€â”€ /rewards
â”‚   â”œâ”€â”€ /redemptions
â”‚   â”œâ”€â”€ /family
â”‚   â””â”€â”€ /settings
â”‚
â””â”€â”€ /child
    â”œâ”€â”€ /chores
    â”œâ”€â”€ /rewards
    â””â”€â”€ /settings
```

### 6.2 Route Guards

**Public Routes:**
- `/auth`
- `/auth/verify`

**Protected Routes:**
- All `/parent/*` â†’ requires parent role
- All `/child/*` â†’ requires child role

**Redirects:**
- `/` â†’ `/auth` (if not logged in)
- `/` â†’ `/parent/dashboard` (if parent)
- `/` â†’ `/child/chores` (if child)
- `/auth` â†’ redirect if already logged in

### 6.3 Navigation Components

**Parent Nav (Desktop):**
- Top bar with logo + user menu
- Side navigation (collapsible)
- Bottom: Settings + Sign Out

**Parent Nav (Mobile):**
- Top bar with hamburger
- Drawer menu
- Bottom tab bar

**Child Nav:**
- Simpler tab bar
- 3 tabs: Chores | Rewards | Settings
- Always visible at bottom

**User Menu Dropdown:**
- Avatar + Name
- Points balance (child only)
- Divider
- Settings link
- Sign Out

---

## 7. BUILD SEQUENCE PLAN

### Phase 1: Foundation (Week 1)

**Priority: CRITICAL**

#### Day 1-2: Project Setup
- [ ] Create React + TypeScript + Vite project
- [ ] Install dependencies (React Router, Tailwind, etc.)
- [ ] Configure Tailwind with design system
- [ ] Set up ESLint + Prettier
- [ ] Configure environment variables
- [ ] Set up folder structure

**Folder Structure:**
```
src/
â”œâ”€â”€ components/        # Reusable UI components
â”‚   â”œâ”€â”€ ui/           # Base components (Button, Input, etc.)
â”‚   â”œâ”€â”€ layout/       # Layout components (Header, Nav, etc.)
â”‚   â””â”€â”€ features/     # Feature-specific components
â”œâ”€â”€ pages/            # Page components (routes)
â”œâ”€â”€ hooks/            # Custom React hooks
â”œâ”€â”€ services/         # API services
â”œâ”€â”€ contexts/         # React contexts
â”œâ”€â”€ utils/            # Utility functions
â”œâ”€â”€ types/            # TypeScript types
â””â”€â”€ styles/           # Global styles
```

#### Day 3-4: Design System Implementation
- [ ] Create design tokens (colors, spacing, etc.)
- [ ] Build base UI components:
  - [ ] Button (all variants)
  - [ ] Input (text, password, number)
  - [ ] Card
  - [ ] Badge
  - [ ] Avatar
  - [ ] Modal
  - [ ] Toast/Notification system

#### Day 5-7: API & State Setup
- [ ] Create API client service
- [ ] Set up authentication context
- [ ] Implement token storage (localStorage)
- [ ] Create HTTP interceptors
- [ ] Build error handling
- [ ] Create loading states

---

### Phase 2: Authentication (Week 2)

**Priority: CRITICAL**

#### Day 1-3: Auth Screens
- [ ] AUTH-01: Login/Register screen
  - [ ] Tab navigation
  - [ ] Sign In form
  - [ ] Sign Up form
  - [ ] Child PIN form
  - [ ] Validation
  - [ ] Error handling
  - [ ] API integration

- [ ] AUTH-02: Email Verification
  - [ ] 6-digit code input
  - [ ] Auto-submit on complete
  - [ ] Resend code
  - [ ] Demo mode option

#### Day 4-5: Auth Flow
- [ ] Route guards
- [ ] Protected routes
- [ ] Role-based redirects
- [ ] Logout functionality
- [ ] Session management
- [ ] Token refresh

#### Day 6-7: Testing & Polish
- [ ] Form validation edge cases
- [ ] Loading states
- [ ] Error scenarios
- [ ] Mobile responsiveness
- [ ] Accessibility (a11y)

---

### Phase 3: Parent Dashboard (Week 3)

**Priority: HIGH**

#### Day 1-2: Layout Shell
- [ ] Main app layout
- [ ] Navigation bar
- [ ] Side navigation (desktop)
- [ ] Mobile menu
- [ ] User menu dropdown
- [ ] Breadcrumbs

#### Day 3-5: PAR-01 Dashboard
- [ ] Stat cards component
- [ ] Quick actions grid
- [ ] Family members list
- [ ] Points calculation
- [ ] Auto-refresh logic
- [ ] Loading states

#### Day 6-7: MOD-01 & MOD-02
- [ ] Add Child modal
- [ ] Edit Child modal
- [ ] Form validation
- [ ] PIN field
- [ ] Date picker
- [ ] API integration

---

### Phase 4: Chores Management (Week 4)

**Priority: HIGH**

#### Day 1-3: PAR-02 Chores List
- [ ] Chore cards
- [ ] Search functionality
- [ ] Sort/filter options
- [ ] Empty state
- [ ] Delete confirmation

#### Day 4-5: MOD-03 & MOD-04
- [ ] Add Chore modal
- [ ] Edit Chore modal
- [ ] Points slider
- [ ] Multi-child selection
- [ ] Recurrence options

#### Day 6-7: PAR-03 Assignments
- [ ] Tab navigation
- [ ] Grouped by child
- [ ] Due date badges
- [ ] MOD-05: Assign Chore modal

---

### Phase 5: Approvals & Rewards (Week 5)

**Priority: HIGH**

#### Day 1-3: PAR-04 Approvals
- [ ] Approval cards
- [ ] Photo viewer
- [ ] Approve/Reject actions
- [ ] Points ledger update
- [ ] Toast notifications

#### Day 4-7: PAR-05 & PAR-06
- [ ] Rewards list
- [ ] MOD-06: Add Reward
- [ ] MOD-07: Edit Reward
- [ ] Redemptions queue
- [ ] Balance checking
- [ ] Approve/Reject flow

---

### Phase 6: Child Interface (Week 6)

**Priority: HIGH**

#### Day 1-3: CHI-01 My Chores
- [ ] Points banner
- [ ] Chore cards (child view)
- [ ] Complete button
- [ ] Photo upload
- [ ] Pending status
- [ ] Empty state

#### Day 4-5: CHI-02 Rewards Shop
- [ ] Reward cards
- [ ] Affordability check
- [ ] Progress bars
- [ ] Redeem flow
- [ ] Redemption history

#### Day 6-7: CHI-03 Settings
- [ ] Stats display
- [ ] Privacy info
- [ ] Sign out

---

### Phase 7: Additional Features (Week 7)

**Priority: MEDIUM**

#### Day 1-3: PAR-07 & PAR-08
- [ ] Family members expanded view
- [ ] Settings page
- [ ] Theme switcher
- [ ] Data export
- [ ] Change password

#### Day 4-7: Polish & Optimization
- [ ] Loading skeletons
- [ ] Error boundaries
- [ ] 404 page
- [ ] Offline detection
- [ ] Performance optimization
- [ ] Code splitting

---

### Phase 8: Testing & Deployment (Week 8)

**Priority: CRITICAL**

#### Day 1-3: Testing
- [ ] Unit tests (components)
- [ ] Integration tests (flows)
- [ ] E2E tests (Playwright/Cypress)
- [ ] Browser compatibility
- [ ] Mobile device testing
- [ ] Accessibility audit

#### Day 4-5: Documentation
- [ ] User guide
- [ ] API documentation
- [ ] Deployment guide
- [ ] Environment setup

#### Day 6-7: Deployment
- [ ] Build optimization
- [ ] Environment variables
- [ ] CI/CD pipeline
- [ ] Production deployment
- [ ] Monitoring setup

---

### Build Priority Matrix

| Priority | Features | Timeframe |
|----------|----------|-----------|
| P0 (Critical) | Auth + Dashboard + Basic Chores | Week 1-3 |
| P1 (High) | Full Chores + Approvals + Rewards | Week 4-5 |
| P2 (Medium) | Child Interface | Week 6 |
| P3 (Nice-to-have) | Advanced Settings + Polish | Week 7 |
| P4 (Final) | Testing + Deployment | Week 8 |

---

## 8. RESPONSIVE DESIGN NOTES

### 8.1 Breakpoints

```css
/* Mobile First Approach */
--breakpoint-sm: 640px;   /* Small tablets */
--breakpoint-md: 768px;   /* Tablets */
--breakpoint-lg: 1024px;  /* Small laptops */
--breakpoint-xl: 1280px;  /* Desktops */
--breakpoint-2xl: 1536px; /* Large desktops */
```

### 8.2 Mobile Adaptations

**Forms:**
- Stack fields vertically
- Full-width buttons
- Larger touch targets (44px min)
- Bottom sheets instead of modals

**Navigation:**
- Hamburger menu
- Bottom tab bar for main nav
- Drawer for secondary nav

**Cards:**
- Single column layout
- Reduce padding
- Simplify action buttons

**Tables:**
- Convert to cards
- Stack columns
- Hide non-essential data

### 8.3 Touch Optimizations

**Minimum Touch Target:**
- 44x44px for all interactive elements
- Adequate spacing between targets
- Prevent accidental clicks

**Gestures:**
- Swipe to delete
- Pull to refresh
- Swipe navigation

**Feedback:**
- Active states on tap
- Haptic feedback (mobile)
- Loading indicators

---

## 9. ACCESSIBILITY CHECKLIST

### 9.1 Semantic HTML
- [ ] Use proper heading hierarchy
- [ ] Label all form inputs
- [ ] Use button/link appropriately
- [ ] ARIA labels where needed

### 9.2 Keyboard Navigation
- [ ] All interactive elements keyboard accessible
- [ ] Visible focus indicators
- [ ] Logical tab order
- [ ] Escape closes modals

### 9.3 Screen Reader Support
- [ ] Alt text for images
- [ ] ARIA live regions for updates
- [ ] Descriptive link text
- [ ] Form error announcements

### 9.4 Visual Accessibility
- [ ] Color contrast ratios (WCAG AA)
- [ ] No color-only indicators
- [ ] Scalable text
- [ ] Reduced motion option

---

## 10. PERFORMANCE TARGETS

### 10.1 Metrics

**Load Time:**
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- Time to Interactive: < 3.5s

**Runtime:**
- 60fps animations
- Input latency: < 100ms
- API response display: < 200ms

### 10.2 Optimization Strategies

**Code Splitting:**
- Route-based chunks
- Lazy load modals
- Dynamic imports

**Caching:**
- Cache API responses
- LocalStorage for user preferences
- Service worker for offline

**Image Optimization:**
- WebP format
- Lazy loading
- Responsive images
- Compression

**Bundle Size:**
- Tree shaking
- Minimize dependencies
- Analyze bundle

---

## CONCLUSION

This document provides complete specifications for building the AllowanceAlley web application. Each screen includes:
- Visual ASCII mockups
- Detailed layout specifications
- Component breakdown
- Interaction patterns
- API integration points
- Responsive behavior
- Accessibility considerations

Follow the build sequence plan to implement features in a logical order, ensuring a solid foundation before adding complexity.

**Next Steps:**
1. Review and approve mockups
2. Set up development environment
3. Begin Phase 1 (Foundation)
4. Iterate with user feedback
5. Deploy MVP in 8 weeks

---

**Document End**
