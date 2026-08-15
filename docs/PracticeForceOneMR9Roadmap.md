---
title: "PracticeForceOneMR9Roadmap"
---

# Recommended MR9 Roadmap — Activation & First Customer

**Date:** 2026-07-06 · **Last reviewed: 2026-07-24** · **Author:** AgentMR8 · **Thesis:** MR9 is an **activation-and-hardening release, not a feature release.** MR8 finished the product; MR9 puts a paying practice on it safely and turns the AI billing engine loose on real money. · **Sources:** [Executive MR8 Closeout](<PracticeForceOneMR8ExecutiveCloseout.md>) · [Risk Register](<PracticeForceOneProductionRiskRegister.md>) · [Vendor Activation Playbook](<PracticeForceOneVendorActivationPlaybook.md>) · [ONC Readiness](<PracticeForceOneONCCertificationReadiness.md>) · [Go-Live Checklist](<PracticeForceOneFirstCustomerGoLiveChecklist.md>)

**Selection key (same as MR8):** ☐ pick · 💰 makes/recovers money · 🧱 table-stakes · ⛔ founder decision · 🤝 vendor/contract · Size: S=days M=weeks L=months.

---

## Wave 1 — Make production safe (week 1; mostly switches)

| Pick | # | Item | What you get | Size · Gate |
|:--:|---|---|---|---|
| ☐ | **M9-1** 🧱 | **Backups live end-to-end** — schedule on, Cloud SQL automated + PITR on, one rehearsed restore, runbook §Backup&Restore written from the drill | data-loss risk (R1) retired; a real RTO number | **S** · ⛔ two console flips + a drill window |
| ☐ | **M9-2** 🧱 | **Staging posture off in prod** (M7-10 Phase 2: `ALLOW_DESTRUCTIVE_STAGING_OPS`, `PORTAL_TEST_MODE`, `JAC_ENV`) with fleet cutover of restage workflows to the shadow service | destructive-tooling risk (R2) retired; prerequisite for vendor credentials | **S** · ⛔ flip + ALL-AGENTS ack |
| ☐ | **M9-3** 🧱 | **Monitoring & alerting**: uptime check + health/error/DB alerts + runbook §Monitoring; operator card (1-pager) | outage discovery goes from "next session" to minutes (R3, R4) | **S** · ⛔ alert channel choice |
| ☐ | **M9-4** | **Ops doc pack**: onboarding guide, migration guide, support triage, SLA one-pager (write-while-doing per the [Runbook Review](<PracticeForceOneOperationsRunbookReview.md>)) | repeatable onboarding; R14 retired | **S–M** · none |

## Wave 2 — Revenue activation (starts at signature; the calendar driver)

| Pick | # | Item | What you get | Size · Gate |
|:--:|---|---|---|---|
| ☐ | **M9-10** 💰🤝 | **Clearinghouse activation** (playbook M8-1): connection persistence + transport adapter + payer shakeout | real claims out the door; unlocks everything below | **M** eng, L calendar · 🤝 **the signature** |
| ☐ | **M9-11** 💰 | Eligibility + ERA activation (playbook M8-2/3) **incl. the R13 blind-index reader flip** | live coverage checks; auto-posting; real denial feed | **S–M** · rides M9-10 |
| ☐ | **M9-12** 💰⭐ | **AI denial loop LIVE** — real-variant flags + founder autopilot window | the differentiator working on real money — the demo becomes the product | **S (hours)** · ⛔ flag window |
| ☐ | **M9-13** 💰🤝 | Payments + statements (playbook M8-5/6) + SendGrid cutover (retires R7/Gmail) | patient money in; professional sender | **M** · 🤝 Stripe + SendGrid |
| ☐ | **M9-14** 💰🤝 | SMS reminders (playbook M8-40; 10DLC filed at signing) | no-show reduction | **S** · 🤝 Twilio |

## Wave 3 — First customer proof (parallel with Wave 2 tail)

| Pick | # | Item | What you get | Size · Gate |
|:--:|---|---|---|---|
| ☐ | **M9-20** 🧱⛔ | **First practice go-live** (M8-10) executed per the [Go-Live Checklist](<PracticeForceOneFirstCustomerGoLiveChecklist.md>) | the reference customer; the sales story | **L** · ⛔ a willing practice |
| ☐ | **M9-21** 🧱 | **Performance under real volume**: finish M7-14 #2 (A/R N+1), load-test during pilot, fix what surfaces (R10) | stays fast at multi-provider volume | **M** · best under real data |
| ☐ | **M9-22** | **Pool/txn root-cause**: the idle-in-transaction holder + 25P01 class (R5) | removes the last known latent availability defect before volume | **M** · none — schedule it |
| ☐ | **M9-23** | 2nd-operator drill + operator card validation (R4) | founder can take a vacation | **S** · ⛔ a person |

## Wave 4 — Certification track (independent clock; start Phase 0/1 early)

| Pick | # | Item | What you get | Size · Gate |
|:--:|---|---|---|---|
| ☐ | **M9-30** ⛔ | ONC Phase 0: buyer-need decision + ACB scoping call + budget | the go/no-go with real numbers | **S** · ⛔ founder |
| ☐ | **M9-31** | ONC Phase 1: **free** Inferno + ETT conformance baseline → punch list | converts certification unknowns into a work list; market-valuable regardless | **S–M** · none |
| ☐ | **M9-32** | SMART on FHIR OAuth2 + Bulk FHIR `$export` (= (g)(10) + (b)(10) EHI export) | the criterion buyers actually feel; doubles as an integration feature | **M–L** · after M9-31 |

## Deliberately NOT in MR9 (keep the discipline)

Native patient app · telehealth build (partner if a pilot demands) · population health/MIPS dashboards (revisit with certification) · deep specialty content (build per customer) · new AI surfaces (the existing engine must earn on real money first) · architecture refactors (the monolith + ratchets are winning; don't disturb them mid-activation).

## Sequencing picture

```
Week 1        │ Wave 1 (M9-1..4)  — switches + docs; platform SAFE
Signature day │ Wave 2 starts (M9-10 enrollments filed) ─────────────┐
Weeks 2–6     │ M9-22 pool fix · M9-31 Inferno baseline · M9-4 docs  │ enrollment
Weeks 4–10    │ M9-10 transport + shakeout → M9-11 → M9-12 AI LIVE   │ latency
Weeks 6–12    │ M9-20 go-live phases A–D → billing cutover → M9-21   │ dominates
Month 3+      │ M9-13/14 money+messaging · M9-23 drill · M9-32 SMART │
```

**Definition of MR9 done:** one practice running daily operations on PFO, real claims flowing through a live clearinghouse, the AI denial loop acting on real denials with its audit ledger, backups+alerts+drills all green, and a costed ONC go/no-go decision made. That is the moment PracticeForceOne stops being a project and becomes a company.

## Review Epilog — 2026-07-24

- Roadmap authored 2026-07-06 by AgentMR8 as the MR9 transition document. The original framing (activation-and-hardening) was superseded by the 2026-07-10 founder directive making MR9 the August Clinic Demonstration Readiness Program.
- Wave 1 safety switches (M9-1..4) remain unflipped: Cloud SQL backups OFF, staging posture still ON in prod, alerting not yet wired. These are the highest-risk founder-gated items.
- Live build 1943, gate 251/251 GREEN. Active CF platform runtime drives demo surfaces. August demo prep is the current mission priority across all lanes.
- Revenue activation (Wave 2+) awaits vendor contracts; clearinghouse M9-80 signature remains the revenue keystone.
