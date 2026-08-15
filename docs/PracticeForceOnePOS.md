---
title: "PracticeForceOnePOS"
---

# PracticeForceOne POS — Point of Sale Solution Design

**Status:** Design of record · v1 mock foundation BUILT (2026-08-06, deploy-gated) · real-processor phases awaiting founder decisions
**Author:** AgentUI, from founder directives issued live during the 2026-08-06 clinic visit
**Related:** [PracticeForceOnePlatformArchitecture](PracticeForceOnePlatformArchitecture.html) · [PracticeForceOnePlatformArchitectureGuide](PracticeForceOnePlatformArchitectureGuide.html)

---

## 1. Why this exists — the founder's asks, verbatim

All of these arrived live from the clinic on 2026-08-06, within ninety minutes:

> "Is it possible to add a list of supplements that can go into the Meds list... such as GLPACE"
>
> "these can be sold in house... so we'll need a way to do that."
>
> "They have a separate business called 'Between the Sheets' that they have private labled. We'll need to handle those too."
>
> "This is a supply list and cost catalog that we will need to implement in addition to the supplements." *(28-item in-office dispensing price sheet, photographed)*
>
> "Again, we will need to build a complete POS system... some kind of checkout that will contain items to be checked out... and then go through a payment system for Credit Card or cash."
>
> "I will need a Mock POS provider. And a POS Order Entry system, that then gets processed through the MOCK."

The pattern behind them: **practices sell things** — dispensed medications, branded supplements, private-label retail lines, service add-ons — and the platform must handle the whole selling motion: catalog → cart → payment → receipt → money reporting. Today that motion lives in a paper price sheet and a separate card terminal that knows nothing about the visit.

## 2. Vision in one paragraph

PracticeForceOne POS is a **platform capability, not a screen**: a practice-scoped product catalog, a definition-driven order-entry surface, a pluggable payment-provider layer (mock today, real processors tomorrow), and an honest order ledger that records every attempt — approved or declined — with receipts, refunds, end-of-day reconciliation, and analytics. A front desk sells a bottle of GLPace the same way a provider signs an encounter: through configuration executing on generic engines, scoped to exactly one business, with nothing shared between businesses that the founder has not explicitly shared.

## 3. What is already LIVE or BUILT (Phase 0 — done 2026-08-06)

| Piece | State | Where |
|---|---|---|
| Generic supplement dictionary (14 items) | **LIVE** | `medication_codes`, `bin/seed-supplements.mjs` |
| ReCenter Core 15 branded supplement line (GLPace, MitoCharge, Heart Harmony, …) with former names as search synonyms | **LIVE** | `medication_codes`, `bin/seed-core15-supplements.mjs`; source doc `docs/platform/recenter-core-15-supplements.txt` |
| 28-item in-office dispensing price catalog (founder's price sheet) | **LIVE** | ReCenter Medical `charge_master`, codes `DISP-001..028`, `bin/seed-dispensing-catalog.mjs` |
| Mock POS provider (stateless processor; card ending **0000** always declines — deliberate demo failure path) | **BUILT, deploy-gated** | `util/PosRoutes.script` → `POST /api/pos/mock-provider/charge` |
| POS order API — server-side pricing from charge master, cash + mock card, receipts, declined-attempt ledger | **BUILT, deploy-gated** | `POST /api/pos/orders`, `GET /api/pos/orders?practiceId=` |
| POS Order Entry screen | **NEXT** — stored CF definition, publishes as data after the deploy | `pos_order_entry_cf` (planned) |

Durability note: `medication_codes` **and** `charge_master` are both in CleanDb's PRESERVED list — every seed above survives scrub and restage, and the `bin/` seeders are one-command recovery regardless.

## 4. Platform alignment (non-negotiables)

1. **Metadata is the platform.** The order-entry screen, receipt layout, quick-pick item groups, and per-practice behavior are **definitions**, not code. The POS engine executes them and knows nothing about any specific practice's products.
2. **One selling problem, solved once.** Medical's dispensing, Oasis's retail supplements, and Between the Sheets' private-label line are the *same capability* with different catalogs. No per-business checkout code, ever.
3. **Separation doctrine.** Configurations AND data never shared between businesses. Practice-scoped catalogs, practice-scoped orders, and — critically — **per-business merchant accounts** at the payment layer. A shared processor account is a sharing channel with money in it.
4. **Honest ledger.** Declined payments are recorded with their reason. A receipt reference exists for every attempt. Voids and refunds are new rows that reference the original — never edits — mirroring the clinical amend model.
5. **Unified persistence contract.** v1's ensure-tables + sanctioned raw SQL (mock/test infrastructure exception, RETIRE-WHEN noted in code) migrates to JAC-generated CRUD as the durable relational spine when the capability goes real.

## 5. Solution architecture

```
 Product & Price Catalog        Order Entry (CF definition)         Payment Providers
 ┌──────────────────────┐       ┌──────────────────────────┐       ┌──────────────────┐
 │ charge_master (v1)   │──────▶│ pos_order_entry_cf       │──────▶│ MockPOS (v1)     │
 │ product_catalog (v2) │ price │  · item pick / quick keys│ charge│ Stripe Terminal? │
 │  - SKUs, inventory   │ lookup│  · qty, running total    │       │ Square?          │
 │  - per practice      │       │  · patient (optional)    │       │ (founder call)   │
 └──────────────────────┘       │  · card | cash           │       └──────────────────┘
                                └────────────┬─────────────┘                │
                                             ▼                              ▼
                                ┌──────────────────────────┐       ┌──────────────────┐
                                │ POS Order Ledger         │◀──────│ provider result  │
                                │ pos_orders / _lines      │       │ txn id, auth,    │
                                │ approved AND declined    │       │ decline reason   │
                                └────────────┬─────────────┘       └──────────────────┘
                                             ▼
                       Receipts · Refunds/Voids · End-of-Day Reconciliation · Analytics
```

Every arrow is practice-scoped. The provider layer is an interface: `charge(amount, method, instrument) → {approved, transactionId, authCode | declineReason}` — MockPOS implements it today; a real processor implements it tomorrow behind the same order API, so **nothing above the provider layer changes when the mock retires**.

## 6. Product & Price Catalog

**v1 (live):** the practice `charge_master` is the price source. House codes (`DISP-001..028`; `varchar(10)` limit on codes — learned the hard way), descriptions, prices. Server-side pricing only: the order API prices every line by code from the practice's catalog; a client can never send its own price; an unknown code refuses the whole order (a partial sale is worse than no sale).

**v2 (build):** a proper `product_catalog` per practice:
- SKU, display name, brand line (e.g., "ReCenter Core 15", "Between the Sheets"), category
- price, cost (margin reporting), tax class (see §13 decisions)
- inventory tracking flag + reorder threshold
- active/seasonal flags, effective dates
- optional link to `medication_codes` entry (a supplement can be both *recordable on the med list* and *sellable* — two different facts about one product, deliberately kept in two stores: the med list is clinical, the catalog is commerce)

**Catalog management:** the existing charge-master admin surface in v1; a ProductCatalogCF definition in v2 so each business curates its own list — the Between the Sheets manager never sees Medical's dispensing catalog.

## 7. Order Entry (the checkout)

A **stored CF definition** (`pos_order_entry_cf`), one per practice, rendered by the existing runtime — no new page code:

- **Item entry:** typeahead over the practice catalog + configurable quick-pick buttons for the top sellers (definitions can pin "GLPace", "Vitamin D3", the 3 most-dispensed meds as one-tap tiles)
- **Lines:** item, qty, unit price (read-only, server truth), line total; running order total (computed field)
- **Patient link (optional):** walk-in retail needs no patient; a dispensed prescription should link the patient so the sale shows on their chart's financial history
- **Tender:** two actions — **Charge Card** and **Cash** — both `kind:'request'` POSTs to `/api/pos/orders`; the card path carries last-4 for the mock (a real terminal integration replaces this input with a terminal handoff)
- **Outcome:** approved → receipt view (print via the existing `printDetail`); declined → the reason on screen, order recorded as declined, retry with another tender is a *new* order referencing the first

v1 constraint honored in the API already: CF collection widgets post their value as a JSON string — the order endpoint accepts `lines` as an array or a JSON string.

## 8. Payment provider layer

**MockPOS (v1, built):**
- Stateless; the order is the record.
- Approves everything except the demo rule: card ending `0000` declines with a stated reason. Cash always records.
- Also exposed standalone (`POST /api/pos/mock-provider/charge`) so UAT scenarios and demos can exercise the processor contract directly.

**Real processors (Phase 3):** integrate ONE first, behind the same interface. Candidates and the founder's decision matrix:

| Consideration | Stripe Terminal | Square | Existing merchant acct |
|---|---|---|---|
| Card-present terminal hardware | WisePOS E etc., strong SDK | Square Terminal, simplest | depends on gateway |
| Per-business (multi-merchant) accounts | Connected accounts — clean fit for BTS separation | Multiple locations/accounts, workable | usually painful |
| PCI scope for us | SAQ-minimal (tokenized, PAN never touches us) | same | varies |
| HSA/FSA card support (relevant for dispensed meds) | yes with IIAS-capable setup | partial | varies |
| Fees | ~2.7% + 5¢ card-present (indicative) | ~2.6% + 10¢ (indicative) | negotiated |

**Hard rules regardless of choice:** PAN never touches PracticeForceOne servers (terminal/tokenization only — keeps PCI scope minimal); per-business merchant accounts (Between the Sheets settles to its own account); refunds only through the provider that took the payment.

## 9. Receipts

- Every order attempt gets an `orderRef` (`POS-XXXXXX`).
- Receipt content: business identity (the practice's own branding — BTS receipts say Between the Sheets, not ReCenter Medical), lines, totals, tender, last-4 + auth code for card, timestamp, served-by.
- v1: receipt view from `GET /api/pos/orders` + print. Phase 2: email/SMS receipt via the existing communication preferences.

## 10. Refunds, voids, end-of-day

- **Void:** same-day, before settlement — a `voided` status row referencing the original order; mock provider acknowledges instantly.
- **Refund:** new order row of type `refund`, negative total, referencing the original; through the provider for card, recorded for cash. Never an edit of the original (the clinical amend model, applied to money).
- **End-of-day reconciliation (Phase 2):** a ReconciliationCF definition — expected cash (cash orders minus cash refunds) vs. counted cash, card batch total vs. provider settlement report; discrepancies recorded, not silently absorbed. This is the report a practice manager actually opens every night.

## 11. Inventory (Phase 2)

Minimal and honest, not an ERP:
- On-hand count per SKU per practice; sale decrements, receiving increments, adjustment records the reason (damage, count correction).
- Reorder threshold surfacing as a **dashboard widget / worklist item**, not a blocking rule (no blocking — the doctrine applies to commerce too).
- Private-label lines (Core 15, BTS) are where inventory matters most: the practice owns the stock.

## 12. Multi-business operation

| Business | Catalog | Merchant account | Receipt identity |
|---|---|---|---|
| ReCenter Medical | dispensing (DISP-*) + Core 15 | its own | ReCenter Medical |
| ReCenter Oasis | med-spa retail + Core 15 subset | its own | ReCenter Oasis |
| Between the Sheets | private-label line (product names still owed by the founder — **never invented**) | **its own** | Between the Sheets |

Open founder decision: BTS as its **own practice** (cleanest under the separation doctrine; own logins, own board, own everything) vs. a **product-line dimension** within Oasis (lighter; shared staff/register). The POS design works either way because everything keys on practice + catalog; the decision changes tenancy, not POS architecture.

## 13. Security, compliance, RBAC, audit

- **PCI:** never store PAN/CVV; last-4 + provider token only; card-present terminals keep us in the smallest SAQ class. The mock stores nothing sensitive by construction.
- **RBAC:** `pos.sell` (front desk), `pos.refund` (manager — refunds are where retail fraud lives), `pos.catalog` (catalog maintenance), `pos.reconcile` (EOD). Deny-by-default per the governance directive.
- **Audit:** every order/void/refund writes the standard audit log with actor; catalog price changes are audited (a price change the day before a big refund is a story an auditor wants to read).
- **Tax:** sales tax on retail supplements varies by state and product class (dispensed prescription meds generally exempt; supplements generally taxable). **Founder decision + accountant input required**; the catalog's tax-class field is where the answer lands.
- **HSA/FSA:** dispensed medications may be HSA/FSA-eligible; requires IIAS-capable processing. Phase 3 decision alongside processor choice.

## 14. Data model

**v1 (built — ensure-tables, sanctioned mock infrastructure):**
- `pos_orders` (id, org_id, practice_id, patient_id?, order_ref, method, card_last4, mock_transaction_id, auth_code, status approved|declined, decline_reason, total, created_by/at)
- `pos_order_lines` (order_id FK cascade, practice_id, code, description, qty, unit_price, line_total)

**Target (Phase 2+, generated CRUD in `ClaimsProcessingDdl.xml` — the durable spine):**
- `pos_orders` gains: type (sale|refund|void), references_order_id, provider (mock|stripe|square), settlement_batch_id, tax_total
- `product_catalog` (per §6), `inventory_movements` (sku, practice, delta, reason, actor, at)
- `pos_settlements` (provider batch reconciliation)

Migration path: the v1 tables are additive and schema-compatible with the target; promotion = DDL entry + generated CRUD + the RETIRE-WHEN swap in `PosRoutes`, per the write-up in the module header.

## 15. Reporting & analytics

- Daily sales by practice / brand line / category; margin once cost lands in the catalog
- Declined-payment rate (a rising decline rate is an operations signal)
- Top sellers → feeds the quick-pick definition
- Retail attach rate: % of encounters with a same-day sale (the clinic asked for supplements *because* the provider recommends them — the analytics should close that loop with the recommendation engine: recommended → sold)
- Surfaces: existing dashboard widget engine; no new reporting stack

## 16. Integration map

| Surface | Integration |
|---|---|
| Checkout Desk CF | "Sell items" action opens POS order entry carrying the patient |
| Patient chart | sales visible in financial history when patient-linked |
| Encounter / recommendations | a recommended supplement (condition-driven rules, in AgentCF's lane) links to "sell it now" at checkout — recommendation → decision → sale, one thread |
| Kanban | checkout lane card can carry an unpaid-order flag (advisory, never blocking) |
| Dashboard | daily sales widget, reconciliation status |
| RCM boundary | **retail sales are NOT claims.** They never touch the claims pipeline; patient-linked sales may appear on statements later (Phase 4 decision) |

## 17. Delivery phases

- **Phase 0 — DONE (2026-08-06):** catalogs seeded (scrub-proof) · Mock POS provider · order API with server-side pricing, honest ledger, receipts. One deploy from live.
- **Phase 1 — Order entry (days):** `pos_order_entry_cf` definition per practice · receipt view/print · quick-picks · patient linking · UAT scenario through the mock (approve + decline paths) in `bin/uat-characterize.ps1`.
- **Phase 2 — Operations (1–2 weeks):** voids/refunds · EOD reconciliation CF · inventory counts + receiving · product_catalog with brand lines/tax class · generated-CRUD promotion · sales analytics widget.
- **Phase 3 — Real money (founder-gated):** processor selection (§8 matrix) · terminal hardware at the desk · per-business merchant accounts · HSA/FSA + tax decisions wired · MockPOS retires to the test lane (it stays forever as the UAT provider).
- **Phase 4 — Growth (optional):** BTS online storefront/e-commerce · patient statements including retail · membership/package pricing (med-spa staple: prepaid packages redeemed at POS).

## 18. Founder decisions required (nothing above Phase 2 proceeds without them)

1. Payment processor + terminal hardware (§8 matrix)
2. Per-business merchant accounts — confirm BTS settles separately
3. Between the Sheets: own practice vs. product line within Oasis
4. BTS product names (the seeder is staged; the catalog is never invented)
5. Sales-tax posture per product class (with the accountant)
6. HSA/FSA support for dispensed meds — yes/no/later
7. Whether patient statements eventually include retail purchases

## 19. Testing & gates

- The **mock provider is the permanent test double**: UAT characterization drives full order flows (approve, decline-0000, cash, refund) with zero real-money risk, on every deploy, forever — including after real processors land.
- Behavioral scenarios in `bin/uat-characterize.ps1` (B7 ratchet honored — no static fingerprints).
- The order API's tenancy (practice ∈ org on every read/write) gets a control-pair probe like every other route family.

## 20. Risks

| Risk | Mitigation |
|---|---|
| Retail scope creep into an ERP | phases are gated; inventory stays minimal-honest; e-commerce is explicitly Phase 4 |
| PCI drift if card data ever touches a form | terminal/tokenization-only rule stated here and enforced at review; the mock never needs real numbers |
| Two catalogs drift (med list vs. product catalog) | deliberate: they answer different questions; the optional SKU→medication_codes link is the bridge, and the CM/drift tooling (separate initiative) covers definitions |
| Mock behavior mistaken for real (a demo "sale" believed settled) | receipts say `(mock)` in the tender line until Phase 3; provider field on every order |
| Boot-seeder-class regressions clobbering catalogs | both catalog tables are CleanDb-PRESERVED; seeders in `bin/` are one-command recovery; the 2026-08-06 boot-converter incident has an open root-cause hunt |

---

*Phase 0 built and compile-verified 2026-08-06 while the founder was at the clinic; this document is the design of record for everything after it. Questions or rulings: append to AGENTS.md addressed to @AgentUI (checkout surface), @AgentARCH (processor/PCI/tenancy rulings), @AgentCF (recommendation→sale thread), payments/RCM lane (money path).*
