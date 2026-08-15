---
title: "PracticeForceOneLegal"
---

# PracticeForceOne™ — Legal, Regulatory, and Certification Path to Real-Clinic Go-Live

**Document owner:** Agent4
**Created:** 2026-06-05
**Last reviewed:** 2026-07-24
**Status:** Founder planning reference — comprehensive deep dive
**Scope:** The technical platform (RCM + Practice EHR + patient portal + AI resolution + mock eRx) is assumed *fully developed*. The two integrations not yet real are (1) a production clearinghouse / payer EDI connection and (2) a certified e-prescribing (Surescripts/EPCS) connection. This document maps **every stage, legal hurdle, certification, contract, and approximate cost** required to move from that point to a **legally deployable, production integration inside a real clinic**.

> ⚠️ **NOT LEGAL ADVICE.** This is an internal engineering/founder planning document prepared by an AI agent. It is a roadmap and budgeting tool, not a legal opinion. Every item below must be confirmed and executed with **licensed healthcare regulatory counsel** before relying on it. Laws, fees, and certification programs change; all dollar figures are **2026 planning-grade estimates in USD** with wide ranges and must be re-quoted. The founder must retain qualified counsel (Phase 0) before acting on any conclusion here.

---

## 0. Executive Summary

PracticeForceOne is, in regulatory terms, a **Business Associate** (under HIPAA) that provides a SaaS platform performing **revenue cycle management, electronic health record, patient engagement, and (planned) electronic prescribing** functions on behalf of a **Covered Entity** (the clinic — Customer #1, a California cardiology practice per founder context). Going live legally is **not a single approval**. It is the parallel completion of **ten workstreams**, several of which are gated by external auditors, certifying bodies, and trading partners on multi-month clocks.

The critical path is driven by three slow external gates:

1. **Clearinghouse + payer EDI enrollment** (weeks–months per payer; ERA/EFT enrollment is per-payer paperwork).
2. **Surescripts certification** for e-prescribing (months; transaction-by-transaction certification).
3. **EPCS third-party audit / DEA controls** for controlled substances (months; identity proofing + audit).

And one optional-but-commercially-important slow gate: **SOC 2 Type II** (3–6 month observation window) and, if pursued, **ONC Health IT Certification** and/or **HITRUST**.

**Rough total first-year budget to a single-clinic production go-live:**

| Scope | First-year all-in (legal + audits + licenses + insurance) |
|---|---|
| **Minimum viable legal** (HIPAA program + BAAs + clearinghouse + commercial contracts, **no** eRx, **no** SOC 2, **no** ONC) | **~$120k – $300k** |
| **+ Surescripts eRx + EPCS + SOC 2 Type II** | **~$300k – $600k** |
| **+ ONC Health IT Certification and/or HITRUST r2** | **~$600k – $1.2M+** |

Recurring annual run-rate after go-live (counsel retainer, license renewals, audit refresh, insurance, transaction fees) is typically **~$150k – $400k/yr** depending on certification scope and claim/script volume.

The single most important first action is **Phase 0: retain counsel and form/confirm the operating entity.** Nothing else should be signed or integrated until that is done.

---

## 0.1 The Two Views: MVP Legal Go-Live vs `> MVP`

This roadmap is deliberately split into two views. **Build the MVP view first; treat everything in the `> MVP` view as deferrable.**

### ✅ MVP View — minimum legal path to put the app in one real clinic

**Definition:** the smallest set of legal, contractual, and integration steps that lets the **first clinic use PracticeForceOne in production for RCM + EHR + patient portal, submitting real claims** — **without** real e-prescribing, **without** SOC 2/HITRUST certification, and **without** ONC certification.

The MVP scope deliberately **excludes e-prescribing/EPCS** (the clinic keeps using its existing eRx tool at first) and **excludes optional trust certifications**. It includes only what is **legally mandatory to handle PHI and bill payers**, plus the **one insurance and one license** that are effectively non-negotiable (cyber liability; AMA CPT).

**MVP must-haves (and nothing more):**

| MVP item | Why it's mandatory, not optional | Phase |
|---|---|---|
| Operating entity + IP assignment | Needed to contract and to ring-fence liability | 0 |
| Health-IT regulatory counsel retained | Validates the whole MVP; drafts BAA/MSA | 0/B |
| HIPAA program: risk analysis, policies, officers, breach plan | Legally required of a Business Associate handling ePHI | 1 |
| **BAA with the clinic** + **GCP HIPAA BAA** + subprocessor BAAs | No real PHI may flow without these | 1 |
| California state-law layer (CMIA/CCPA memo + privacy policy) | CMIA is stricter than HIPAA with statutory damages | 2 |
| **Cyber liability insurance** (+ basic E&O/GL) | Contractually required by clinic; covers breach | 3 |
| **AMA CPT license** (correct SaaS class) | Cannot legally display CPT without it | 4 |
| Clearinghouse TPA/BAA + sandbox certification | Required to submit real 837 claims / ingest 835 ERA | 5 |
| **Per-payer EDI/ERA/eligibility enrollment** | Required before each payer accepts real claims | 5 |
| Commercial contract suite (MSA, SLA, ToS, portal terms) | The paper that lets you legally sell/operate | 9 |
| Light regulatory memos (AKS/Stark/FCA + FDA-CDS posture) | Keep AI clinical features OFF; confirm billing is defensible | 8 |

**Explicitly NOT in MVP:** real eRx, EPCS/DEA audit, drug-database license, Surescripts, SOC 2 Type II, HITRUST, ONC Health IT Certification, PDMP integration, FDA-cleared clinical CDS.

**MVP cost:** **~$120k–$300k** Year 1. **MVP timeline:** **~2–4 months** from Phase 0, gated mainly by payer enrollment and the HIPAA program.

**MVP go-live gate:** clinic BAA + GCP BAA signed · HIPAA risk analysis complete · CPT license secured · cyber insurance bound · clearinghouse certified · first payer set enrolled and a real claim accepted (277CA) + a real ERA ingested · MSA/BAA executed · AI clinical features default-OFF.

### ➕ `> MVP` View — everything beyond the minimum (deferrable, phased)

**Definition:** the work that turns the MVP into a **full, certified, multi-clinic, e-prescribing-capable platform.** Each item is real and eventually expected, but **none blocks the first clinic from billing**. Pull each in only when a customer, payer, or partner contractually requires it.

| `> MVP` item | Trigger to pull it in | Phase | Added cost |
|---|---|---|---|
| **SOC 2 Type II** | Clinic/partner requires it, or before second customer | 3 | +$40k–$110k |
| **Penetration test (formal annual)** | SOC 2 / Surescripts / prudence | 3 | +$10k–$30k |
| **Real e-Prescribing — Surescripts certification** | Clinic wants in-app prescribing | 5b/6 | +$5k–$25k + per-txn |
| **Drug database license (FDB/Medi-Span)** | Required for real eRx + clinical safety | 4 | +$20k–$100k/yr |
| **EPCS — DEA audit, identity proofing, 2FA** | Clinic wants to e-prescribe controlled substances | 6 | +$18k–$70k |
| **State e-Rx mandates + PDMP (CURES)** | Comes with real eRx | 6 | counsel hours |
| **ONC Health IT Certification + info-blocking program** | Clinic needs CEHRT for MIPS/Promoting Interoperability | 7 | +$50k–$250k+ |
| **HITRUST CSF (i1/r2)** | A large payer/enterprise partner demands it | 3 | +$30k–$200k+ |
| **FDA clearance for any clinical CDS/AI feature** | Only if a feature stops being advisory/review-able | 8 | case-by-case |

**`> MVP` cost (cumulative on top of MVP):** eRx/EPCS + SOC 2 brings the total to **~$300k–$600k**; adding ONC and/or HITRUST pushes it to **~$600k–$1.2M+**. **`> MVP` timeline:** SOC 2 (3–6 mo window), Surescripts/EPCS (months), and ONC (multi-month) are the long poles — start whichever ones you've committed to **as early as Phase 0** even though they land later.

> **Founder rule of thumb:** ship the **MVP view** to bill the first clinic, then pull `> MVP` items in **one customer/partner requirement at a time** rather than building all certifications up front.

---

## 1. Workstream Map (the ten parallel tracks)

| # | Workstream | MVP? | Gatekeeper | Slow gate? | Legally required to operate? |
|---|---|---|---|---|---|
| A | Corporate / entity / IP foundation | ✅ MVP | State, internal | No | Yes (to contract) |
| B | Counsel engagement | ✅ MVP | Law firm | No | Practically yes |
| C | HIPAA compliance program (Privacy, Security, Breach) | ✅ MVP | HHS OCR (enforcement), self-attested | Risk analysis takes weeks | **Yes** |
| D | State privacy/breach law (esp. California CMIA/CCPA) | ✅ MVP | State AG | No | **Yes** |
| E | Security attestations & insurance (SOC 2, pen test, cyber/E&O) | **Partial** — insurance ✅ MVP; SOC 2/HITRUST `> MVP` | CPA firm, insurer | SOC 2 = 3–6 mo | Commercially yes; legally insurance often contractually required |
| F | Code-set & clinical-content licensing (CPT/AMA, drug DB) | **Partial** — CPT ✅ MVP; drug DB `> MVP` (eRx only) | AMA, FDB/Medi-Span | No | **Yes** (CPT license is mandatory to display CPT) |
| G | Clearinghouse / EDI integration + payer enrollment | ✅ MVP | Clearinghouse, each payer | **Yes**, per-payer | **Yes** to submit real claims |
| H | e-Prescribing — Surescripts certification | ➕ `> MVP` | Surescripts | **Yes** | Yes to send real Rx |
| I | EPCS — DEA controlled-substance e-Rx controls | ➕ `> MVP` | DEA rule + third-party auditor | **Yes** | Yes to e-prescribe controlled substances |
| J | ONC Health IT Certification + Information Blocking | ➕ `> MVP` | ONC-ACB (Drummond/SLI) | **Yes** | **Conditional** (needed for CMS incentive programs, not to merely operate) |

Cross-cutting: **K. Commercial contracts** (MSA, BAA, ToS) and **L. Fraud-and-abuse / FDA analysis** touch every track.

---

## 2. Phase 0 — Corporate Foundation & Retaining Counsel

### 2.1 Operating entity & liability ring-fencing
- Confirm or form the **operating entity** that will contract with the clinic and sign partner agreements. The existing corp (Architects of Software Design, Corp.) may sign, but counsel will likely recommend a **dedicated subsidiary or LLC** to ring-fence healthcare/PHI liability from the founder's other assets.
- Confirm clean **IP assignment**: all platform code, the JAC toolchain, and AI prompts owned by the contracting entity (founder→entity assignment agreement; any contractor/AI-generated code chain of title documented).
- Cap table / equity housekeeping if outside capital is ever raised.
- **Cost:** $2k–$10k (formation, registered agent, IP assignment docs). Counsel-drafted.

### 2.2 Retain the right attorneys
You need **more than one specialty**. Options: a single full-service health-tech boutique, or a lead firm plus specialists. Recommended coverage:

| Specialty | What they do here | Typical 2026 rate |
|---|---|---|
| **Health-care regulatory / digital health** (lead) | HIPAA, fraud & abuse, Stark/AKS, FDA/CDS, EPCS, state telehealth/e-Rx, ONC/info-blocking | $450–$900/hr; boutiques often $400–$650 |
| **Privacy & data security** (often same firm) | HIPAA Security Rule, CMIA/CCPA, breach playbook, DPA | $400–$750/hr |
| **Commercial / contracts** | MSA, BAA, vendor agreements, ToS, SLA | $350–$650/hr |
| **IP** | Trademark (PracticeForceOne™), code ownership, patent strategy (optional) | $400–$700/hr |
| **Corporate** | Entity, equity, financing | $350–$650/hr |

- **How to engage:** Request 2–3 proposals from health-IT boutiques (search ABA Health Law Section, state bar referral, or HLTH/HIMSS vendor networks). Ask for a **fixed-fee compliance package** for the predictable deliverables (HIPAA policy suite, BAA templates, MSA) and **hourly** for advisory.
- **Budget a Year-1 legal spend of ~$50k–$150k** for the minimum scope; $100k–$250k+ if EPCS, ONC, and financing are in play. Negotiate a **monthly retainer** (e.g., $3k–$8k/mo) plus project fees.
- **Trademark:** clearance search + USPTO filing for "PracticeForceOne" ~$1.5k–$4k in legal + ~$250–$350/class USPTO fees.

**Phase 0 exit criteria:** entity confirmed, engagement letters signed, conflicts cleared, counsel has reviewed this roadmap and produced a prioritized legal work plan and budget.

---

## 3. Phase 1 — HIPAA Compliance Program (the non-negotiable core)

PracticeForceOne is a **Business Associate** under 45 CFR Parts 160 & 164. Three rules apply in full: **Privacy Rule**, **Security Rule**, **Breach Notification Rule**, plus HITECH direct liability for BAs.

### 3.1 Risk Analysis & Risk Management (Security Rule §164.308(a)(1))
- Conduct a **formal, documented enterprise risk analysis** of all systems that create/receive/maintain/transmit ePHI (GCP Cloud Run, Cloud SQL, storage, AI prompt paths, logs). This is the foundational, OCR-scrutinized artifact.
- Produce a **risk management plan** that remediates findings, with owners and dates.
- **Do it with a qualified third party** the first time (defensible independence).
- **Cost:** $15k–$40k third-party; refresh annually (cheaper after first).

### 3.2 Safeguards (Security Rule)
Implement and **document** administrative, physical, and technical safeguards. The platform already has several Stage-1 controls (idle timer, 8h JWT, scrubPhi, policy docs — per build 1203/1204 evidence). Full program adds:

- **Administrative:** designated **Security Officer** and **Privacy Officer**; workforce training & sanctions; access management (least privilege, role-based); contingency plan (backup, disaster recovery, emergency mode); periodic evaluations.
- **Physical:** facility access (GCP handles data-center physical security via their BAA + their SOC 2/ISO — document reliance); workstation/device controls and policy for the founder/agents.
- **Technical:** access control (unique IDs, automatic logoff, encryption); **audit controls** (audit logging of ePHI access — verify coverage with `audit-phi-coverage-check`); integrity controls; **transmission security** (TLS in transit); **encryption at rest** (Cloud SQL/storage CMEK); **MFA** for all admin/clinical access (HIPAA Stage 2 backlog item — required for production-grade posture and many partner contracts).
- **Authentication hardening:** SSN/field-level encryption for sensitive identifiers (Stage 2 backlog).

### 3.3 Policies, procedures, training (Privacy + Security)
- A **complete written policy suite** (15–25 policies): access, audit, breach response, sanctions, data retention/disposal, minimum necessary, BA management, encryption, incident response, change management, contingency/DR, etc. Counsel + a GRC platform (see §5) generate most of these.
- **Workforce training** program with attestation records (even a solo founder + AI-agent operation needs documented training/role definitions).
- **Minimum-necessary** and **access logging** enforced in product.

### 3.4 Breach Notification Rule
- Written **breach response / incident response plan** with the 60-day notification obligations to the covered entity (and, as BA, your duty to notify the clinic, which then notifies individuals/HHS/media as required).
- Pre-negotiated **breach counsel + forensics retainer** (cyber-insurance panel usually provides this).

### 3.5 The BAA chain
- **Upstream BAA with the clinic** (covered entity) — you are their BA. This is mandatory before any real PHI flows. Counsel drafts your standard BAA.
- **Downstream BAAs with every subcontractor that touches ePHI:**
  - **Google Cloud** — execute the **GCP HIPAA BAA** (available through the Cloud console / account team). *This must be signed and the in-scope products confined to GCP's HIPAA-covered services list.*
  - **Clearinghouse** (Availity/Waystar/etc.) — BAA + Trading Partner Agreement.
  - **Surescripts / eRx network** — BAA within the solution-provider agreement.
  - **Drug database vendor**, **email/SMS** (if PHI), **any analytics/logging** vendor, **AI model provider** (Anthropic API — confirm a BAA or zero-retention/PHI-handling posture; `scrubPhi` reduces but does not eliminate the question — get counsel's view on whether de-identified prompts avoid BA status or whether a BAA is needed).
- **Cost:** counsel-drafted BAA template ~$3k–$8k; downstream BAAs mostly free to execute.

**Phase 1 exit criteria:** risk analysis complete with remediation underway; full policy suite adopted; officers designated; GCP BAA + clinic BAA executed; breach plan in place; audit logging verified across all PHI endpoints.

**Phase 1 cost:** ~$30k–$80k (risk analysis + counsel policy package + remediation engineering time; GRC tooling counted in §5).

---

## 4. Phase 2 — State Privacy & Breach Law (California-weighted)

The first clinic is in California, which is **stricter than HIPAA** in places. Counsel must layer state law on top of HIPAA.

- **CMIA (Confidentiality of Medical Information Act, Cal. Civ. Code §56 et seq.):** California's medical-privacy statute. It **directly regulates certain businesses that handle medical information**, can apply to software/SaaS vendors, and carries **statutory and punitive damages per violation** — a meaningful liability beyond HIPAA. Counsel must confirm PracticeForceOne's status and obligations under CMIA, including any required contractual language and safeguards.
- **CCPA/CPRA:** PHI handled under HIPAA is largely **exempt**, but **employee data, non-PHI personal data, and the entity's own consumer data** may be in scope. Need a public **privacy policy**, data-subject-request handling, and a CPRA risk assessment for any non-exempt data.
- **California breach notification (Cal. Civ. Code §1798.82):** specific content/timing requirements; plus **all 50 states' breach laws** become relevant as you expand beyond California.
- **State medical-records retention** rules (CA retention periods for records you store/process on the clinic's behalf — typically aligned to the provider's obligations).
- **State medical-billing / third-party-biller registration:** some states regulate or require registration of medical billing companies; confirm California and any expansion-state requirements.
- **State e-prescribing & PDMP mandates** (covered in Phase 6).

**Cost:** mostly counsel hours within the Phase 0/1 budget; ~$5k–$20k incremental for a CMIA/CCPA-specific memo and privacy-policy drafting.

---

## 5. Phase 3 — Security Certifications, Pen Testing & Insurance

None of these are *strictly* required to operate, but **clinics, Surescripts, and payers contractually require most of them**, and they materially reduce breach liability.

### 5.1 SOC 2 Type II (AICPA)
- The de facto trust credential for health-tech SaaS. **Type II** requires an **observation window (typically 3–6 months)** during which controls are tested — this is a **critical-path long pole**, so start early.
- Process: choose Trust Services Criteria (Security required; add Confidentiality, Availability, Privacy); readiness assessment; remediation; observation window; auditor (licensed CPA firm) issues the report.
- Use a **GRC automation platform** (Vanta, Drata, Secureframe) to manage evidence, policies, and continuous monitoring — these also generate much of the HIPAA policy suite.
- **Cost:** GRC platform $10k–$25k/yr; readiness $10k–$30k; Type II audit $20k–$60k. **First-year SOC 2 ≈ $40k–$110k.**

### 5.2 HITRUST CSF (optional, often deferred)
- Increasingly demanded by **large payers and enterprise partners**. Expensive and heavy. **r2 (validated assessment)** is the gold standard; **e1/i1** are lighter entry points.
- **Cost:** i1 ~$30k–$60k; **r2 ~$60k–$200k+** including readiness and external assessor. Usually deferred until a partner explicitly requires it.

### 5.3 Penetration testing & vulnerability management
- Independent **annual penetration test** (network + web app + API) — required by SOC 2, Surescripts, and prudent regardless.
- Continuous vulnerability scanning.
- **Cost:** pen test $10k–$30k/engagement; scanning $1k–$8k/yr.

### 5.4 Insurance
- **Cyber liability** (breach response, notification, forensics, regulatory defense, business interruption). Often **contractually mandated** (Surescripts and clinics set minimum limits, e.g., $1M–$5M).
- **Technology Errors & Omissions (E&O)** / professional liability.
- **General liability** (and D&O if raising capital).
- **Cost:** early-stage cyber $5k–$30k/yr; E&O $3k–$20k/yr; GL $1k–$3k/yr. Premiums scale with limits and data volume.

### 5.5 Payment processing (if you collect patient payments)
- Use a **tokenizing processor (Stripe, etc.)** so card data never touches your servers → reduces PCI scope to **SAQ A**.
- Execute merchant agreement; complete annual SAQ; ensure no PAN storage.
- **Cost:** processor fees (~2.9% + $0.30 typical); PCI tooling minimal at SAQ A.

**Phase 2/3 cost:** ~$60k–$180k first year (SOC 2 + pen test + insurance + GRC), excluding HITRUST.

---

## 6. Phase 4 — Code-Set & Clinical-Content Licensing

You **cannot legally ship** software that displays/uses certain code sets or clinical content without a license. This is frequently overlooked and is a hard legal requirement.

| Content | Source | License needed? | Approx. cost |
|---|---|---|---|
| **CPT®** (procedure codes) | **AMA** | **Yes — mandatory** for any product displaying/using CPT. SaaS distributing to customers needs a paid distribution/end-user license + royalties. | Tiered royalties; **~$1k–$50k+/yr** by model/volume |
| **ICD-10-CM / ICD-10-PCS** | CMS/CDC (NCHS) | Free (public domain) | $0 |
| **HCPCS Level II** | CMS | Free | $0 |
| **NDC** (drug codes) | FDA | Free | $0 |
| **RxNorm, LOINC** | NLM | Free (UMLS license/registration) | $0 |
| **SNOMED CT** | NLM (US member) | Free via UMLS in US | $0 |
| **CARC / RARC** (denial codes) | X12 / WPC | Free to use | $0 |
| **NUCC provider taxonomy** | NUCC | Free | $0 |
| **Drug knowledge base** (drug–drug interactions, dosing, allergy, formulary) — required for real eRx/clinical safety | **First Databank (FDB)**, **Medi-Span (Wolters Kluwer)**, or **Multum** | **Yes — commercial license** | **~$20k–$100k+/yr**, often with minimums and per-provider tiers |

- **CPT/AMA** is the one most likely to trip a startup: the AMA actively enforces. Counsel must secure the correct license class (the free internal-use license is **not** sufficient for a multi-tenant SaaS surfacing CPT to clinic users).
- **Drug database** is required before real e-prescribing — the mock medication search must be replaced by a licensed clinical DB for interaction/allergy checking, and Surescripts/EPCS workflows assume it.

**Phase 4 cost:** ~$25k–$150k/yr depending on CPT model and drug-DB tier.

---

## 7. Phase 5 — Clearinghouse / EDI Integration & Payer Enrollment

This replaces the mock RCM/EDI layer with a real, HIPAA-compliant transaction pipeline.

### 7.1 HIPAA Transactions & Code Sets (TCS) standard
Real claims must use **ASC X12N HIPAA-mandated transactions**:
- **837** Professional/Institutional claims
- **835** Electronic Remittance Advice (ERA)
- **270/271** Eligibility inquiry/response
- **276/277** Claim status
- **278** Prior authorization
- **999 / 277CA** Acknowledgments
- **NCPDP** for pharmacy (eRx side, Phase 5b)

Implement per the **TR3 implementation guides** and each payer/clearinghouse **companion guide**. Compliance with **CAQH CORE Operating Rules** (eligibility, claim status, EFT/ERA) is required for some transactions and strongly expected.

### 7.2 Select a clearinghouse / trading partner
Candidates: **Availity, Waystar, Optum/Change Healthcare, Office Ally, TriZetto, Claim.MD**. Selection criteria: payer reach, ERA support, API vs SFTP, sandbox quality, BAA terms, pricing.
- Execute **Trading Partner Agreement (TPA)** + **BAA**.
- Complete **connectivity & certification testing** in the clearinghouse sandbox (837 generation, 999/277CA handling, 835 ingestion, 270/271).

### 7.3 Payer enrollment (the per-payer paperwork grind — biggest schedule risk)
For each payer the clinic bills:
- **EDI enrollment** (claims submission authorization).
- **ERA (835) enrollment** and **EFT enrollment** — payer-specific forms, often requiring the provider's NPI/Tax ID and signatures; some via CAQH EnrollHub.
- **Eligibility (270/271)** access.
- Govern this per-payer; Medicare/Medicaid have their own enrollment portals and timelines (often **2–6 weeks each**, sometimes longer).

### 7.4 Identifiers
- The **clinic** supplies its **NPI** (Type 1/Type 2) and Tax ID; verify they're active and correctly registered. Confirm the clinic's payer contracts and CAQH provider profiles are current.

**Phase 5 cost:** clearinghouse setup $0–$50k (Office Ally is low/no setup; enterprise platforms charge setup + per-claim/per-transaction fees, often ~$0.05–$0.50/transaction or monthly minimums); plus engineering integration time. Payer enrollment is labor, not large fees.

**Phase 5 exit criteria:** clearinghouse TPA/BAA signed; sandbox certification passed; first payer set enrolled for 837/835/270; a real test claim accepted (277CA) and a real ERA ingested.

---

## 8. Phase 5b / 6 — e-Prescribing (Surescripts) + EPCS (Controlled Substances)

This is the heaviest external certification track. **Do not send a single real prescription before completing it.**

### 8.1 Surescripts certification (NewRx and friends)
- **Surescripts** operates the dominant US e-prescribing network. You must become a **certified Solution Provider**.
- Execute the **Surescripts Solution Provider agreement** (includes BAA, security requirements, **insurance minimums**, and SOC 2 / security attestation expectations).
- **Certify each transaction type separately** through Surescripts' testing program: **NewRx, RxRenewal/Refill, RxChange, CancelRx, RxFill, Medication History, Eligibility & Formulary, Directory (pharmacy)**. The platform's existing mock NCPDP SCRIPT adapter (build 1248) maps to these but must be certified against the live network.
- Meet **NCPDP SCRIPT standard** version mandated by Surescripts/CMS.
- **Costs:** onboarding/setup (~$5k–$25k range), **annual fees**, and **per-transaction fees**. Get a current quote — pricing is negotiated and volume-based.

### 8.2 EPCS — Electronic Prescribing of Controlled Substances (DEA, 21 CFR Part 1311)
To e-prescribe **Schedule II–V** controlled substances you must meet the **DEA EPCS rule**, which is strict and independently audited:
- **Identity proofing** of each prescriber to **NIST 800-63 IAL2** (via an approved Credential Service Provider / identity-proofing vendor, e.g., IDEMIA/Experian/ID.me-class providers). Per-prescriber cost.
- **Two-factor authentication** meeting DEA requirements (two of: something you know / have / are — e.g., hard token or compliant push + biometric/PIN; SMS-only generally does not qualify).
- **Logical access controls** requiring **two individuals** to set EPCS permissions (or documented equivalent).
- **Digital signing** and tamper-evident, **non-repudiable audit trails** of every controlled-substance transaction.
- **Third-party audit or certification:** before EPCS use, the application **must pass a DEA-compliant audit** (e.g., a **SOC 2 / SSAE 18-style EPCS audit by a qualified independent auditor**, or certification by a DEA-approved certifying organization) verifying all Part 1311 processing requirements. This is **separate** from your general SOC 2.
- The platform already gates Schedule II–V behind an `EPCS_REQUIRED` block (build 1248) — correct posture; that block lifts **only after** identity proofing, MFA signing, credentialing, and the third-party audit exist.
- **Cost:** EPCS third-party audit ~$15k–$50k; identity-proofing vendor per-prescriber fees; two-factor token costs.

### 8.3 State e-prescribing & PDMP mandates
- **Federal:** the SUPPORT Act mandates **EPCS for Schedule II–V under Medicare Part D**.
- **State:** most states now **mandate e-prescribing and/or EPCS**, with state-specific nuances (e.g., New York's I-STOP). California has its own e-prescribing mandate and exceptions.
- **PDMP integration:** many states require **Prescription Drug Monitoring Program** checks before prescribing controlled substances; integration is often via state PDMP or hubs (e.g., through Surescripts/Bamboo Health). Confirm California PDMP (**CURES**) requirements and integration path.

**Phase 6 exit criteria:** Surescripts Solution Provider agreement signed; required transaction types certified on the live network; EPCS third-party audit passed; prescriber identity proofing + DEA two-factor live; state mandate + PDMP obligations satisfied; controlled-substance gate lifted only post-audit.

**Phase 5b/6 cost:** ~$40k–$120k first year (Surescripts onboarding + EPCS audit + identity proofing + drug-DB already counted in Phase 4) plus per-transaction fees.

---

## 9. Phase 7 — ONC Health IT Certification & Information Blocking (Conditional)

**Important distinction:** ONC certification is **not legally required to operate** an EHR/RCM platform. It becomes important if the **clinic wants to participate in CMS programs** (MIPS / Promoting Interoperability) and **attest to using Certified EHR Technology (CEHRT)** — without CEHRT the clinic may face MIPS penalties or forgo incentives. Decide with the clinic whether this is in scope for go-live or deferred (current roadmap defers it to Phase 3/Enterprise).

If pursued:
- Certify under the **ONC Health IT Certification Program (45 CFR Part 170)**, **2015 Edition Cures Update** criteria, through an **ONC-Authorized Certification Body (ONC-ACB)** — **Drummond Group** or **SLI Compliance (ICSA)** — with testing via an **ONC-ATL**.
- Relevant criteria depend on scope: e.g., **(g)(10) standardized FHIR API**, **USCDI** data classes, **(b) care coordination**, **(c) clinical quality measures**, e-prescribing **(b)(3)**, **(d) privacy & security**, **real-world testing**, and **surveillance**.
- **Information Blocking (21st Century Cures Act):** as a developer of certified health IT (and as an actor handling EHI), you become subject to **information-blocking prohibitions** and the **Conditions & Maintenance of Certification** (including the "**API**," "**assurances**," and "**communications**" conditions). This brings ongoing obligations and potential penalties — counsel must scope this carefully **if** you certify.
- **Cost & time:** **large** — engineering to meet criteria can dominate; ACB testing fees plus consultant support commonly **$50k–$250k+ all-in**, multi-month, with ongoing real-world testing and surveillance costs.

**Recommendation:** Confirm with the first clinic whether CEHRT/MIPS participation is needed at go-live. If not, **defer ONC** (as the roadmap does) and document that PracticeForceOne is **not** certified health IT yet, so info-blocking developer obligations are scoped accordingly.

---

## 10. Phase 8 — Fraud & Abuse, FDA / Software-as-a-Medical-Device, and Other Regulatory Analysis

Counsel must produce memos on each:

### 10.1 FDA — is any feature a regulated medical device?
- Pure **RCM/billing and administrative** features are **not** devices.
- **Clinical Decision Support (CDS)** and AI features (denial reasoning is administrative; but **drug–drug interaction, dosing, allergy, or diagnostic suggestions** are clinical) must qualify for the **CDS exemption** under the **21st Century Cures Act §3060** and FDA's **CDS guidance** — generally the software must (a) not analyze a signal/image, (b) display recommendations the provider can independently review, and (c) the basis is transparent. If a feature directs rather than informs, or the provider can't independently evaluate it, it may be a **regulated device** requiring FDA clearance. **Get a written FDA/SaMD analysis** before enabling any AI clinical-recommendation feature in production (your AI clinical features ship default-OFF — keep them off until cleared by counsel).

### 10.2 Fraud & abuse (touches go-to-market structuring)
- **Anti-Kickback Statute (AKS) & Stark Law:** relevant if pricing, free/discounted software, or referral arrangements could be seen as inducing referrals. There is an **EHR donation safe harbor / Stark exception** if a referring entity subsidizes EHR for providers — structure any such arrangement within it. Avoid percentage-of-collections pricing tied to referrals without counsel review.
- **False Claims Act (FCA):** billing software must **not facilitate upcoding, cloned notes, or unsupported claims**. Defensible, auditable coding logic; avoid "make the claim pay" features that encourage fraud. Document that AI suggestions are advisory and provider-reviewed.
- **Beneficiary inducement / patient-payment features:** ensure portal payment/discount features comply.

### 10.3 Business licensing
- Confirm whether California (and expansion states) require **third-party medical billing registration/licensure**; some states do.

**Cost:** counsel memos ~$10k–$40k total within the legal budget.

---

## 11. Phase 9 — Commercial Contracts (the paper that lets you sell)

Counsel-drafted, reusable templates:
- **Master Services Agreement (MSA) / SaaS Subscription Agreement** with the clinic (scope, fees, SLA, liability caps, indemnities, IP, termination, data return/destruction).
- **Business Associate Agreement** (mandatory; see §3.5).
- **Service Level Agreement (SLA)** (uptime, support, RTO/RPO).
- **Data Processing Addendum** (state-law privacy terms).
- **Order Form / pricing schedule.**
- **Terms of Service, Acceptable Use, Privacy Policy** (public).
- **Patient portal terms & consent** (e-sign/E-SIGN Act compliant; patient consent for electronic communication, SMS/email if used — TCPA considerations for SMS).
- **End-user/clinic-staff license terms.**
- **Vendor paper review:** GCP, clearinghouse, Surescripts, drug DB, AMA CPT, GRC, insurer — counsel reviews each for indemnity/liability/BAA adequacy.

**Cost:** $15k–$50k for the full reusable contract suite (one-time, amortized across all future clinics).

---

## 12. Phase 10 — Go-Live Operational Readiness

- **Pilot / parallel run:** run real claims and (non-controlled) prescriptions in parallel with the clinic's existing process before cutover; reconcile.
- **Payer ramp:** enroll payers in priority order; go live payer-by-payer as enrollments clear.
- **Production support & incident response:** on-call, monitoring, the breach playbook tested.
- **Ongoing compliance program:** annual risk analysis refresh, annual pen test, SOC 2 renewal, license renewals (CPT, drug DB), training refresh, policy review, Surescripts/EPCS re-attestation, real-world testing if ONC-certified.
- **Documentation of evidence:** keep an auditable trail (mirrors the project's existing BUILD-STATUS/UAT evidence discipline — extend it to compliance artifacts).

---

## 13. Consolidated Cost & Timeline Tables

### 13.1 Cost summary (first-year, planning-grade USD)

| Phase | Item | Low | High |
|---|---|---|---|
| 0 | Entity, IP assignment, trademark | $4k | $15k |
| 0/B | Legal counsel (Year 1, minimum scope) | $50k | $150k |
| 0/B | Legal counsel (incremental for EPCS/ONC/financing) | — | +$100k |
| 1 | HIPAA risk analysis (3rd-party) | $15k | $40k |
| 1 | Policy suite, remediation, officers | $15k | $40k |
| 2 | CMIA/CCPA memo + privacy policy | $5k | $20k |
| 3 | SOC 2 Type II (GRC + readiness + audit) | $40k | $110k |
| 3 | Penetration test | $10k | $30k |
| 3 | Insurance (cyber + E&O + GL) | $9k | $53k/yr |
| 3 | HITRUST r2 (optional, often deferred) | $0 | $200k |
| 4 | CPT/AMA license | $1k | $50k/yr |
| 4 | Drug database (FDB/Medi-Span) | $20k | $100k/yr |
| 5 | Clearinghouse setup + integration | $0 | $50k |
| 6 | Surescripts onboarding (+annual) | $5k | $25k |
| 6 | EPCS third-party audit | $15k | $50k |
| 6 | Identity proofing + 2FA tokens | $3k | $20k |
| 9 | Commercial contract suite | $15k | $50k |
| 8 | Regulatory memos (FDA/AKS/Stark/FCA) | $10k | $40k |
| 7 | ONC Health IT Certification (if pursued) | $50k | $250k+ |

**Bottom lines:**
- **Minimum viable legal (no eRx, no SOC 2, no ONC):** **~$120k–$300k** Year 1.
- **+ eRx/EPCS + SOC 2:** **~$300k–$600k.**
- **+ ONC and/or HITRUST:** **~$600k–$1.2M+.**
- **Recurring run-rate:** **~$150k–$400k/yr** (retainer, license renewals, audit refresh, insurance, transaction fees).

### 13.2 Critical-path timeline (illustrative — overlap the tracks)

| Months | Milestones |
|---|---|
| 0–1 | Phase 0: counsel retained, entity confirmed, legal work plan. **Start SOC 2 clock and payer enrollments immediately** (longest poles). |
| 1–3 | HIPAA risk analysis + policies; GCP/clinic BAAs signed; CPT + drug-DB licenses; clearinghouse selected + TPA/BAA; insurance bound; pen test scheduled. |
| 2–5 | Clearinghouse sandbox certification; per-payer EDI/ERA enrollment grind; Surescripts Solution Provider agreement + transaction certification begins. |
| 3–6 | SOC 2 Type II observation window runs; EPCS identity proofing + third-party audit; PDMP integration; commercial contracts finalized. |
| 5–7 | First payers live; pilot/parallel run of real claims; non-controlled eRx live post-Surescripts cert. |
| 6–9 | EPCS audit passed → controlled-substance prescribing enabled; SOC 2 report issued; full production go-live with the first clinic. |
| 9–18 | (Optional) ONC certification + info-blocking program; HITRUST; multi-clinic scale. |

**Realistic single-clinic full go-live (incl. eRx/EPCS + SOC 2):** **~6–9 months** from Phase 0, gated by SOC 2 window, Surescripts/EPCS, and payer enrollment. **Minimum-scope (claims + portal, no eRx/SOC 2):** **~2–4 months**, gated mainly by payer enrollment and the HIPAA program.

---

## 14. Risk Register (top legal/schedule risks)

| Risk | Impact | Mitigation |
|---|---|---|
| Sending real PHI/claims/Rx before BAAs + certs complete | Regulatory liability, breach | Hard gate: no production PHI until Phase 1 + relevant BAAs signed |
| CPT license missed | AMA enforcement | Secure correct SaaS-class CPT license in Phase 4 before display |
| EPCS launched without DEA audit | DEA violation | Keep `EPCS_REQUIRED` gate until audit passed |
| SOC 2 / payer-enrollment underestimated on schedule | Slips go-live | Start both in Month 0 |
| AI clinical CDS treated as non-device | FDA exposure | Keep AI clinical features default-OFF until FDA/SaMD memo clears them |
| CMIA underestimated (CA) | Statutory/punitive damages | CMIA-specific memo + contract language in Phase 2 |
| Anthropic/AI prompt path = undisclosed PHI disclosure | HIPAA breach | BAA or proven de-identification (`scrubPhi`) confirmed by counsel |
| Solo-operator workforce/training gaps | OCR finding | Document roles, training, sanctions even for a lean team |

---

## 15. Recommended Immediate Next Actions (founder)

1. **Retain a health-IT regulatory attorney** (Phase 0) and have them validate/prioritize this roadmap. Nothing else should be signed first.
2. **Confirm the contracting entity** and execute founder→entity IP assignment; file the **PracticeForceOne™** trademark.
3. **Sign the GCP HIPAA BAA** today (free, immediate) and confine ePHI to HIPAA-covered GCP services.
4. **Commission the third-party HIPAA risk analysis** and stand up a **GRC platform** (which doubles as SOC 2 + policy engine) to **start the SOC 2 Type II clock**.
5. **Decide eRx/EPCS and ONC scope** with the first clinic — these are the expensive, slow tracks; defer if not needed at go-live.
6. **Begin payer enrollment paperwork** with the clinic immediately (longest-lead, lowest-cost track).
7. **Keep all AI clinical-recommendation features default-OFF** until the FDA/SaMD and HIPAA memos clear them.

---

## 16. Appendix A — Authorities & Programs Referenced

- HIPAA: 45 CFR Parts 160, 162, 164 (Privacy, TCS, Security/Breach); HITECH Act; HHS OCR.
- California: CMIA (Cal. Civ. Code §56 et seq.); CCPA/CPRA; Cal. Civ. Code §1798.82.
- EDI: ASC X12N 837/835/270-271/276-277/278/999/277CA; CAQH CORE Operating Rules; NCPDP SCRIPT.
- e-Prescribing: Surescripts Solution Provider program; SUPPORT Act EPCS mandate; state e-Rx mandates; PDMP (CA CURES).
- Controlled substances: DEA EPCS rule, 21 CFR Part 1311; NIST SP 800-63 (identity assurance).
- Health IT: ONC Health IT Certification Program, 45 CFR Part 170, 2015 Edition Cures Update, USCDI, (g)(10) FHIR API; 21st Century Cures Act information-blocking rules.
- Code sets/content: AMA CPT license; ICD-10 (CMS/CDC); HCPCS; RxNorm/LOINC/SNOMED (NLM/UMLS); FDB/Medi-Span/Multum drug knowledge.
- Security: SOC 2 (AICPA TSC); HITRUST CSF; PCI DSS.
- Fraud & abuse: Anti-Kickback Statute; Stark Law (incl. EHR donation exception/safe harbor); False Claims Act.
- FDA: 21st Century Cures Act §3060 CDS exemption; FDA Clinical Decision Support Software guidance; SaMD framework.
- Other: E-SIGN Act; TCPA (SMS); state third-party billing registration.

---

## 17. Appendix B — Glossary of Acronyms & Abbreviations

Every acronym and abbreviation used in this document, alphabetical. "≈$" notes appear where a term maps to a budgeted cost line above.

| Acronym | Expansion | Plain-language meaning in this document |
|---|---|---|
| **2FA** | Two-Factor Authentication | Requiring two independent proofs of identity (e.g., password + hardware token). Mandated for EPCS. |
| **ACB** | (ONC-)Authorized Certification Body | The private organization (Drummond Group, SLI/ICSA) authorized by ONC to certify health IT. |
| **AICPA** | American Institute of Certified Public Accountants | The body that defines the SOC 2 audit framework. |
| **AKS** | Anti-Kickback Statute | Federal law banning payments to induce referrals of items/services paid by federal health programs. |
| **AMA** | American Medical Association | Owner/licensor of CPT codes; you must license CPT from them. |
| **API** | Application Programming Interface | A software-to-software connection; here, the FHIR (g)(10) API and clearinghouse APIs. |
| **ASC X12 / X12N** | Accredited Standards Committee X12 (Subcommittee N = Insurance) | The standards body whose formats (837/835/etc.) are the HIPAA-mandated EDI transactions. |
| **ATL** | (ONC-)Authorized Testing Laboratory | Lab that tests health IT against ONC criteria before an ACB certifies it. |
| **BA** | Business Associate | A vendor that handles PHI on behalf of a covered entity. **PracticeForceOne is a BA.** |
| **BAA** | Business Associate Agreement | The mandatory HIPAA contract between a covered entity and its BA (and between a BA and its subcontractors). |
| **CAQH** | Council for Affordable Quality Healthcare | Industry body; runs provider data (CAQH ProView) and the CORE operating rules; EnrollHub for EFT/ERA enrollment. |
| **CARC** | Claim Adjustment Reason Code | Standard code on a remittance explaining why a claim line was adjusted/denied. |
| **CCPA** | California Consumer Privacy Act | California consumer-privacy law; PHI is largely exempt but employee/other data may apply. |
| **CDC** | Centers for Disease Control and Prevention | Via NCHS, maintains ICD-10-CM (free). |
| **CDS** | Clinical Decision Support | Software that gives clinicians guidance; relevant to FDA "device or not" analysis. |
| **CEHRT** | Certified EHR Technology | An EHR certified under the ONC program; needed for clinics to claim CMS incentives / avoid MIPS penalties. |
| **CFR** | Code of Federal Regulations | Where federal rules live (e.g., 45 CFR Part 164 = HIPAA; 21 CFR Part 1311 = EPCS). |
| **CMEK** | Customer-Managed Encryption Keys | Encryption keys you control in the cloud, for encryption at rest. |
| **CMIA** | Confidentiality of Medical Information Act | California medical-privacy law, **stricter than HIPAA**, with statutory/punitive damages. |
| **CMS** | Centers for Medicare & Medicaid Services | Federal agency running Medicare/Medicaid and MIPS; publishes ICD/HCPCS. |
| **COB** | Coordination of Benefits | Rules ordering primary/secondary/tertiary insurance payment. |
| **CORE** | Committee on Operating Rules for Information Exchange | CAQH's EDI operating-rules program; CORE certification is expected for some transactions. |
| **CPRA** | California Privacy Rights Act | The 2023 amendment that strengthened CCPA. |
| **CPT®** | Current Procedural Terminology | AMA-owned procedure code set; **a paid license is mandatory** to display it. |
| **CSF** | Common Security Framework | HITRUST's certifiable security framework. |
| **CSP** | Credential Service Provider | A vendor that performs identity proofing (e.g., for EPCS prescriber verification). |
| **CURES** | Controlled Substance Utilization Review and Evaluation System | California's PDMP that must be checked before prescribing controlled substances. |
| **D&O** | Directors and Officers (insurance) | Liability coverage for company leadership; relevant if raising capital. |
| **DEA** | Drug Enforcement Administration | Federal agency that regulates controlled substances and sets EPCS rules. |
| **DPA** | Data Processing Addendum | Contract addendum specifying how personal data is processed (state-law privacy terms). |
| **DR** | Disaster Recovery | Plans/systems to restore service after an outage; part of the HIPAA contingency plan. |
| **E&O** | Errors and Omissions (insurance) | Professional-liability coverage for tech/service mistakes. Also "Tech E&O." |
| **EDI** | Electronic Data Interchange | Structured electronic exchange of business documents (claims, remittances, eligibility). |
| **EFT** | Electronic Funds Transfer | Electronic payment from payer to provider; enrolled alongside ERA. |
| **EHI** | Electronic Health Information | The data category governed by the information-blocking rules. |
| **EHR** | Electronic Health Record | The clinical record system; PracticeForceOne includes EHR functions. |
| **ePHI** | electronic Protected Health Information | PHI in electronic form — the focus of the HIPAA Security Rule. |
| **EPCS** | Electronic Prescribing of Controlled Substances | DEA-regulated e-prescribing of Schedule II–V drugs; requires audit + identity proofing + 2FA. |
| **eRx** | Electronic Prescribing | Sending prescriptions electronically to pharmacies (via Surescripts/NCPDP). |
| **E-SIGN Act** | Electronic Signatures in Global and National Commerce Act | Federal law making electronic signatures legally valid (patient portal consents). |
| **EULA** | End User License Agreement | License terms governing end users' use of the software. |
| **FCA** | False Claims Act | Federal law penalizing submission of false/fraudulent claims to the government. |
| **FDA** | Food and Drug Administration | Regulates medical devices, including some software (SaMD). |
| **FDB** | First Databank | A commercial drug-knowledge database (drug interactions, dosing); requires a license. |
| **FHIR** | Fast Healthcare Interoperability Resources | Modern healthcare data/API standard; the ONC (g)(10) API criterion. |
| **FPR** | First-Pass Resolution (rate) | RCM metric: share of claims paid on first submission (used in the reports backlog). |
| **GCP** | Google Cloud Platform | The cloud host; requires a signed HIPAA BAA for ePHI. |
| **GL** | General Liability (insurance) | Baseline business-liability coverage. (In the RCM context "GL" can also mean General Ledger; here it is insurance.) |
| **GRC** | Governance, Risk, and Compliance | Tooling (Vanta/Drata/Secureframe) that automates policy + evidence for HIPAA/SOC 2. |
| **HCPCS** | Healthcare Common Procedure Coding System | CMS code set for products/supplies/services (free to use). |
| **HHS** | (U.S. Department of) Health and Human Services | Parent agency of OCR, CMS, FDA, ONC. |
| **HIN** | Health Information Network | An actor type under the information-blocking rules. |
| **HIPAA** | Health Insurance Portability and Accountability Act | The core federal health-privacy/security law (Privacy, Security, Breach rules). |
| **HITECH** | Health Information Technology for Economic and Clinical Health Act | 2009 law that gave BAs direct HIPAA liability and added breach rules. |
| **HITRUST** | Health Information Trust Alliance | Issuer of the HITRUST CSF certification (i1/r2), often demanded by large payers. |
| **IAL2** | Identity Assurance Level 2 | The NIST identity-proofing strength required for EPCS prescribers. |
| **ICD-10-CM / -PCS** | International Classification of Diseases, 10th Rev. — Clinical Modification / Procedure Coding System | Diagnosis (CM) and inpatient-procedure (PCS) code sets; free. |
| **IP** | Intellectual Property | Ownership of code/brand; must be assigned to the contracting entity. |
| **I-STOP** | Internet System for Tracking Over-Prescribing | New York's e-prescribing/PDMP mandate (example of state variation). |
| **ISO** | International Organization for Standardization | Standards body; GCP's ISO certifications support your physical-safeguard reliance. |
| **JWT** | JSON Web Token | The session-token format; the platform uses an 8-hour expiry for HIPAA session limits. |
| **LOINC** | Logical Observation Identifiers Names and Codes | Standard codes for labs/observations; free. |
| **MFA** | Multi-Factor Authentication | Same idea as 2FA; required for production-grade admin/clinical access. |
| **MIPS** | Merit-based Incentive Payment System | CMS program that adjusts provider payments; participation drives the CEHRT/ONC decision. |
| **MSA** | Master Services Agreement | The top-level commercial contract with the clinic. |
| **NCHS** | National Center for Health Statistics | CDC unit that maintains ICD-10-CM. |
| **NCPDP** | National Council for Prescription Drug Programs | Standards body for pharmacy/e-prescribing; owns the SCRIPT standard. |
| **NDC** | National Drug Code | FDA drug identifier; free. |
| **NewRx / RxRenewal / RxChange / CancelRx / RxFill** | (NCPDP SCRIPT transaction types) | The individual e-prescribing messages, each certified separately with Surescripts. |
| **NIST** | National Institute of Standards and Technology | Publishes security/identity standards (SP 800-63). |
| **NLM** | National Library of Medicine | Distributes RxNorm/LOINC/SNOMED via the UMLS (free in the US). |
| **NPI** | National Provider Identifier | The provider's unique HIPAA identifier; supplied by the clinic for payer enrollment. |
| **NUCC** | National Uniform Claim Committee | Maintains the provider taxonomy code set; free. |
| **OCR** | Office for Civil Rights (within HHS) | The agency that enforces HIPAA and investigates breaches. |
| **ONC** | Office of the National Coordinator for Health Information Technology | Runs the health-IT certification program and information-blocking rules. |
| **PAN** | Primary Account Number | The card number; keeping it off your servers reduces PCI scope to SAQ A. |
| **PCI DSS** | Payment Card Industry Data Security Standard | Security standard for handling card payments. |
| **PDMP** | Prescription Drug Monitoring Program | State database checked before prescribing controlled substances (CA = CURES). |
| **PHI** | Protected Health Information | Individually identifiable health information protected by HIPAA. |
| **RARC** | Remittance Advice Remark Code | Supplemental code on a remittance that clarifies a CARC. |
| **RCM** | Revenue Cycle Management | Billing/claims/collections workflow — PracticeForceOne's core. |
| **RPO** | Recovery Point Objective | Max acceptable data loss (time) after an incident; an SLA/DR metric. |
| **RTO** | Recovery Time Objective | Max acceptable downtime before recovery; an SLA/DR metric. |
| **RxNorm** | (NLM normalized drug naming system) | Standard normalized drug names/identifiers; free. |
| **SaaS** | Software as a Service | The cloud-subscription delivery model PracticeForceOne uses. |
| **SaMD** | Software as a Medical Device | FDA category for software that is itself a regulated medical device. |
| **SAQ** | Self-Assessment Questionnaire | PCI DSS compliance form; "SAQ A" is the lightest tier (tokenized payments). |
| **SAS 70 / SSAE 18** | Statement on Auditing Standards No. 70 / Statement on Standards for Attestation Engagements No. 18 | Audit standards; SSAE 18 underlies modern SOC 2 / EPCS third-party audits (SAS 70 is its predecessor). |
| **SCRIPT** | (NCPDP SCRIPT standard) | The NCPDP e-prescribing message standard the platform's mock adapter targets. |
| **SFTP** | Secure File Transfer Protocol | A clearinghouse connection method (alternative to API). |
| **SLA** | Service Level Agreement | Contractual uptime/support commitments. |
| **SNOMED CT** | Systematized Nomenclature of Medicine — Clinical Terms | Comprehensive clinical terminology; free in the US via UMLS. |
| **SOC 2** | System and Organization Controls 2 | AICPA trust audit; **Type II** tests controls over a 3–6 month window. |
| **SSN** | Social Security Number | Sensitive identifier; field-level encryption is a HIPAA Stage 2 item. |
| **Stark Law** | Physician Self-Referral Law | Bans certain physician referrals where a financial relationship exists; has an EHR-donation exception. |
| **SUPPORT Act** | Substance Use-Disorder Prevention that Promotes Opioid Recovery and Treatment Act | Federal law mandating EPCS for Schedule II–V under Medicare Part D. |
| **TAM** | Total Addressable Market | Business-case sizing term (referenced in related docs). |
| **TCPA** | Telephone Consumer Protection Act | Federal law governing SMS/automated calls; relevant to portal text messaging. |
| **TCS** | Transactions and Code Sets | The HIPAA rule mandating standard EDI transactions/codes. |
| **TIN / Tax ID** | Taxpayer Identification Number | The clinic's tax identifier, used in payer enrollment. |
| **TLS** | Transport Layer Security | Encryption in transit (HTTPS) for transmission security. |
| **ToS** | Terms of Service | Public terms governing use of the platform. |
| **TOTP** | Time-based One-Time Password | A common MFA second factor (authenticator-app code). |
| **TPA** | Trading Partner Agreement | Contract governing EDI exchange with a clearinghouse/payer. |
| **TR3** | Technical Report Type 3 | The X12 implementation guide that specifies exactly how to build each transaction. |
| **TSC** | Trust Services Criteria | The SOC 2 control categories (Security, Availability, Confidentiality, Processing Integrity, Privacy). |
| **UMLS** | Unified Medical Language System | NLM's umbrella license granting access to RxNorm/LOINC/SNOMED. |
| **USCDI** | United States Core Data for Interoperability | The standardized data set ONC-certified APIs must support. |
| **USPTO** | United States Patent and Trademark Office | Where the PracticeForceOne™ trademark is filed. |
| **WPC** | Washington Publishing Company | Publisher of CARC/RARC code lists (free to use). |
| **837 / 835 / 270 / 271 / 276 / 277 / 277CA / 278 / 999** | (X12 transaction numbers) | Claim / remittance(ERA) / eligibility request / eligibility response / claim-status request / claim-status response / claim acknowledgment / prior authorization / acknowledgment. |
| **(b)(1) (b)(3) (c) (d) (g)(10)** | (45 CFR Part 170 certification criteria) | Specific ONC certification criteria — e.g., (b)(3) e-prescribing, (g)(10) standardized FHIR API. |

## 18. Appendix C — Key Definitions (Terms of Art)

Concepts that are not acronyms but carry specific legal meaning in this document.

- **Covered Entity (CE):** A health plan, healthcare clearinghouse, or healthcare provider that transmits health information electronically. **The clinic is the covered entity; PracticeForceOne is its business associate**, which is why the relationship is governed by a BAA.
- **Business Associate (BA):** A person/entity that performs functions involving PHI *on behalf of* a covered entity. BAs have **direct HIPAA liability** under HITECH. This is PracticeForceOne's legal status.
- **Subcontractor / Downstream BA:** A BA's own vendor that touches PHI (GCP, clearinghouse, Surescripts, drug-DB, AI provider). Each needs its **own BAA** with PracticeForceOne, forming the "BAA chain."
- **Clearinghouse:** An intermediary that translates/validates and routes EDI claims between providers and payers (e.g., Availity, Waystar, Office Ally). Note: a clearinghouse is *also* a HIPAA covered entity in its own right.
- **Trading Partner:** Any entity you exchange EDI transactions with (a clearinghouse or a payer); governed by a Trading Partner Agreement.
- **Payer Enrollment:** The per-payer paperwork that authorizes electronic claim submission, ERA, and EFT for a specific provider — the slowest, lowest-cost track to go-live.
- **Risk Analysis (HIPAA):** The formal, documented, OCR-scrutinized assessment of risks to ePHI required by the Security Rule §164.308(a)(1). The foundational compliance artifact.
- **Safeguards (Administrative / Physical / Technical):** The three HIPAA Security Rule control families — respectively people/process, facility/device, and system/encryption controls.
- **Minimum Necessary:** HIPAA principle that you access/use/disclose only the least PHI needed for the task.
- **Breach Notification:** HIPAA obligation to notify (as a BA, you notify the clinic) within prescribed timeframes after discovering a breach of unsecured PHI.
- **Identity Proofing:** Verifying that a person is who they claim to be (to NIST IAL2) before issuing EPCS prescribing credentials.
- **Information Blocking:** A practice (by a certified-health-IT developer, provider, or HIN) that interferes with access/exchange/use of EHI — prohibited under the 21st Century Cures Act. Becomes a developer obligation **only if you certify under ONC**.
- **Clinical Decision Support (CDS) Exemption:** The statutory carve-out (Cures Act §3060) under which certain advisory, transparent, provider-reviewable software is **not** a regulated FDA device. AI clinical features must fit within it or face FDA clearance.
- **Software as a Medical Device (SaMD):** Software that performs a medical function (diagnose/treat) on its own and is therefore an FDA-regulated device.
- **Safe Harbor / Exception (AKS / Stark):** Defined arrangements (e.g., the EHR-donation safe harbor) that, if precisely met, immunize an otherwise-suspect financial arrangement. Relevant to how the software may be priced or subsidized.
- **Trust Services Criteria (TSC):** The five SOC 2 control categories. "Security" is required; the others are optional add-ons that partners may demand.
- **Observation Window (SOC 2 Type II):** The continuous period (typically 3–6 months) over which an auditor tests that controls actually operated — the reason SOC 2 must start early.
- **Companion Guide:** A payer- or clearinghouse-specific supplement to the X12 TR3 that tells you exactly how *that* partner wants a transaction formatted.
- **Notice of Privacy Practices (NPP):** The covered entity's patient-facing privacy disclosure; the platform must support the clinic's NPP obligations (the clinic, not the BA, issues it).
- **De-identification:** Removing identifiers so data is no longer PHI (HIPAA Safe Harbor or Expert Determination methods). Relevant to whether AI prompts (`scrubPhi`) escape BA/PHI treatment — a question for counsel.

---

*End of document. This is a planning roadmap, not legal advice. Validate every item with retained counsel before acting. — Agent4, 2026-06-05*

---

## Review Epilog — 2026-07-24

Reviewed 2026-07-24. Status: CURRENT — no body edits required.

- Evergreen legal/regulatory/certification roadmap + budgeting tool. No live-build stamps or MR-status claims in the body that require updating.
- Technical load-bearing claims remain accurate: platform is GCP Cloud Run + Cloud SQL PostgreSQL (g1-small as of 2026-07-18 tier bump) + Secret Manager; `EPCS_REQUIRED` gate, mock NCPDP/Surescripts adapter, and `scrubPhi` AI prompt path all confirmed live. Business-Associate posture consistent with current codebase HIPAA docs.
- Historical build citations (1203/1204 Stage-1 controls; 1248 eRx mock + EPCS gate) correctly framed as implementation-evidence milestones, not live-prod-build status — left as-is.
- PracticeForceOne, LLC (Florida, filed 2026-06-11) confirmed formed; GCP HIPAA BAA and the broader compliance roadmap remain the operative next actions for go-live.
- Previous epilog (2026-06-23) retained above this entry.
