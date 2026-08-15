---
title: "PracticeForceOneRouterRegistrationDesign"
---

# Router Registration — Table-Driven Design (paper only, post-August)

**AgentARCH, 2026-07-26.** Assessment item §5.10a. **Paper only** per the August-demo directive —
no implementation before the demo window. Presented for founder/AgentMR10 review.

## Problem

`server/ClaimsProcessingRouter.script` is ~9.9k lines, of which ~3.2k are 461 near-identical
7-line registration blocks:

```java
com.claimsprocessing.util.XxxRoutes.register(server, contextPath, jsonHelper, jwtHelper, apiLogger, iScript);
```

Zero inline endpoints (good — the A2 split holds), but every new module edits the router, the file
grows monotonically, and the registration order is implicit and unreviewable. The 7-26 assessment
verified the registry is exactly bidirectional (461 modules ↔ 461 registrations) — that invariant
is currently maintained by hand.

## Design

One registration table, one loop, reflection-free (JAC-friendly):

1. **`util/RouteRegistry.script`** exposes `public static String[] MODULES = { "AccountRoutes",
   "AcupunctureRoutes", … }` — one line per module, alphabetized, the single source of truth.
2. The router replaces the 461 blocks with one loop calling
   `Class.forName("com.claimsprocessing.util." + name).getMethod("register", …).invoke(…)`.
   If reflection is undesirable under JAC, generate the loop body: a tiny generator emits
   `RouterRegistrations.script` from the table at build time (same pattern as generated CRUD —
   metadata → generated code, consistent with the platform thesis).
3. **The bidirectional invariant becomes a ratchet**: extend `bin/check-jac-architecture.ps1` to
   diff `util/*Routes.script` against `RouteRegistry.MODULES` — a module missing from the table
   fails the build instead of silently not registering (today's failure mode is a 404 discovered
   at runtime).
4. Registration ORDER becomes explicit and reviewable (the table), and specialized boot phases
   (auth first, static handlers last) become labeled sections of the table instead of positional
   convention.

## Why not further (and the North-Star note)

A definition-driven route table (routes as metadata in the Definition Repository) is the eventual
North-Star shape, but HTTP surface registration is platform bootstrap, not clinical knowledge —
and under North Star v2 the route catalog should be **shrinking** (DR-4: specialty modules retire
into the engine), not getting a richer registration mechanism. This design is deliberately the
smallest step that (a) removes ~3.2k boilerplate lines, (b) turns the hand-maintained invariant
into a checked one, and (c) does not invest in infrastructure for a surface scheduled to shrink.

**Effort when scheduled:** ~half a day including the ratchet extension and a full 461-route smoke.
**Risk:** low (mechanical, verifiable by the existing route inventory diff).

Related: [Architecture Assessment 7-26](PracticeForceOneArchAsses7-26-2026.html) §2.1/§5.10 ·
[Duplication Register](PracticeForceOneDuplicationRegister.html) DR-4 ·
[North Star v2](PracticeForceOneNorthStar.html)
