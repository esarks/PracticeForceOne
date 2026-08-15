---
title: "PracticeForceOneECWMatrixDocumentsLetters"
---

# ECW Screen & Field Inventory — Documents & Letters (folders, fax lifecycle, letter engine)

Part of the [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>) deep-dive
(founder directive: capture **every field and every feature** seen in eCW vs PFO, and
plan where each lands in PFO). Hierarchy: **domain (this page) → screen (each `###`
entry) → sub-screens/tabs & fields (the Screen & fields bullet)**. Per entry:

- **Screen & fields (eCW)** — the fields, tabs, buttons, and navigation components observed
- **PFO today** — current PracticeForceOne state
- **Gap/Enh** — the finding and proposed change
- **PFO implementation** — where those fields will be implemented (legend on the master page: Extend / New / CF binding / Mock-seam / Server / Chrome / Autopilot / User-preferences / Specialty wave)

Trace any entry to its screenshot files via `review-ledger.tsv` in
`C:\Users\ptm\Downloads\ecw` (grep the screen name). Corpus: 1,778 screens,
2,078 images ledgered, 100% reviewed. Updated 2026-07-11 (inventory + implementation-plan view).

---

**Last reviewed: 2026-07-24** | Live build: 1943 | Gate: 251/251 GREEN | MR2–MR7 DELIVERED · MR8/MR9/MR10 ACTIVE

## Completion Status — as of 2026-07-24 (current live build)

- **Assessment & specification: ✅ COMPLETE.** All 14 findings on this page are fully inventoried (every field, tab, and navigation component + a PFO implementation target).
- **Implementation: 🟢 0 live/done · 🟡 14 working screen (build-slice or demo surface) · ⏸️ 0 deferred · ⬜ 0 not started (of 14).** Sequence follows the 24-theme shortlist in [PracticeForceOneECWTable](<PracticeForceOneECWTable.md>); fleet directive in `AGENTS.md`.

> **Reading the numbers.** 🟢 = the deep every-field finding is substantially delivered. 🟡 = a **live, working screen exists** for this finding — either a real build-slice or one of AgentCF's live configurable screens (current live build) that covers this eCW screen at **demo depth** (deep field-by-field parity still open). The 🟡 demo-surface mapping is AgentECW's first pass from the AgentCF sheet; CF is confirming depth per row. So 🟡 means "you can click it today, not that it's finished."

Legend: 🟢 Live/Done (deep parity) · 🟡 Working screen — build-slice or demo surface (parity pending) · ⏸️ Deferred (post-demo) · ⬜ Not started.

| ID | Screen | Status |
|---|---|---|
| ECW-DOC-1 | Patient Documents | 🟡 Done — folder tree LIVE (DocumentFoldersRoutes `/api/document-folders`); scan/OCR/fax = mock-seam |
| ECW-DOC-2 | document metadata + actions | 🟡 Done — misfile MOVE-TO-PATIENT LIVE (PUT `/api/documents/{id}/move-patient`); review flags + expiry + fax composer = CF pending |
| ECW-DOC-3 | Review Documents work queue | 🟡 Done |
| ECW-DOC-4 | document-to-order association + metadata templates | 🟡 Done |
| ECW-DOC-5 | document power-tools | 🟡 Done |
| ECW-DOC-6 | Fax Inbox lifecycle | 🟡 Done |
| ECW-DOC-7 | fax OUTBOUND lifecycle | 🟡 Done |
| ECW-DOC-8 | fax compliance + failure notification | 🟡 Done |
| ECW-DOC-9 | digital fax ROUTING RULES + doc portal publish | 🟡 Done |
| ECW-DOC-10 | per-category document EXPIRATION policy | 🟡 Done |
| ECW-LT-1 | Letter Templates console | 🟡 Done |
| ECW-LT-2 | letter EXECUTION surfaces | 🟡 Done |
| ECW-LT-3 | letter lifecycle | 🟡 Done |
| ECW-DOC-11 | CONSULT NOTES generator | 🟡 Done |

**Rollup: 0 live · 14 working screen · 0 deferred · 0 not started (of 14).**

*Regenerated 2026-07-21 from the unified status across all `MasterSchedule.xlsx` sheets + AgentECW's surface→ECW crosswalk. Documentation-only lane (AgentECW).*

---

### ECW-DOC-1 — Patient Documents

- **Screen & fields (eCW):** Patient Documents: per-patient FOLDER TREE w/ 20+ standard categories (progress notes, labs/EKG/paps, imaging, hospital reports, eligibility docs, Rx refill requests, controlled-substance info, specialty forms, portal box, dental/ophthalmology/social work), scanner integration (duplex/DPI/ADF), OCR, fax inbox routing, multi-doc, description + scanned-by/date audit
- **PFO today:** documents.html flat
- **Gap:** category folder tree + scan/fax/OCR pipeline + per-category forms
- **PFO implementation:** Extend `documents.html` — per-patient category folder tree; scan/OCR/fax ingestion = mock-seam

### ECW-DOC-2 — document metadata + actions

- **Screen & fields (eCW):** document metadata + actions (extends note 14): per-doc Reviewed / Reviewed Doc&Lab / HIGH PRIORITY flags, tag, scanned-by, EXPIRY date (drives expiring-document alerts) + service date, attach-to-referral association; context menu incl Send To, Fax, Move to Category, MOVE TO ANOTHER PATIENT (misfile fix), Association Deletion; plus outbound FAX COMPOSER w/ rich-text cover page, provider-picker to/cc, scheduled send, signature stamp
- **PFO today:** documents.html flat upload list
- **Gap:** document review flags + expiry + misfile-move + outbound fax/send composer (transport mocked)
- **PFO implementation:** `documents.html` — review/priority flags, expiry + service dates, misfile move, outbound fax composer (mock)

### ECW-DOC-3 — Review Documents work queue

- **Screen & fields (eCW):** Review Documents work queue (extends notes 14/122): practice-wide inbound-document review console w/ Outstanding/Reviewed/All/All-Outstanding count tabs, filters by ASSIGNED-TO provider + scanned-by + facility, bulk actions (View Document / View Worksheet / Delete / REASSIGN TO / mark High Priority), named saved-filter templates
- **PFO today:** no document review workflow
- **Gap:** scanned/inbound document triage queue w/ provider assignment + reassign (front-office daily driver)
- **PFO implementation:** `documents.html` — practice-wide inbound review queue w/ assigned-to + reassign + saved filters

### ECW-DOC-4 — document-to-order association + metadata templates

- **Screen & fields (eCW):** document-to-order association + metadata templates (extends doc notes): a reviewed document can be ASSOCIATED to a reviewed ORDER (toast confirm; warning if saved unassociated), docs tied to a progress note are move-locked w/ explanatory tooltip, TAG catalog w/ favorites, DOCUMENT DETAIL TEMPLATES (Copy/Merge named metadata templates per category e.g. Lab Docs, Pre Auth Template), AUTO-ASSIGN button routes the doc to the right owner
- **PFO today:** none of this metadata workflow
- **Gap:** order-linked results filing + metadata templates + auto-assignment
- **PFO implementation:** `documents.html` — document↔order association, metadata templates, auto-assign routing

### ECW-DOC-5 — document power-tools

- **Screen & fields (eCW):** document power-tools (extends doc notes): cross-folder Document SEARCH (name, folder, facility, scanned-by, scan/service/expiry date ranges, tags w/ exact-match + EXCLUDE-tags), DELETED-document recycle view w/ RESTORE DOCUMENT, COMPARE DOCUMENT side-by-side, IMPORT SIGNATURE (stamp provider signature onto a form in the viewer), TAG GROUPS admin (specialty-scoped tag sets driving a tree filter) + personal tag TEMPLATES (private/public, favorite)
- **PFO today:** documents.html has none
- **Gap:** doc search + soft-delete/restore + signature stamping + tag taxonomy
- **PFO implementation:** `documents.html` — cross-folder search, soft-delete/restore, compare view, signature stamp, tag taxonomy

### ECW-DOC-6 — Fax Inbox lifecycle

- **Screen & fields (eCW):** Fax Inbox lifecycle (extends note 14): inbox rows w/ sender fax number + CSID search, ADD TO PATIENT routing dialog (patient, ASSIGNED-TO owner, target folder, rename/describe, mark reviewed/high-priority, auto-remove from inbox), Deleted Faxes view w/ AGING-days counter + per-fax Restore + logs, scheduled permanent-purge confirm for aged soft-deletes
- **PFO today:** none
- **Gap:** inbound-fax triage inbox (mock transport) w/ soft-delete lifecycle
- **PFO implementation:** New fax inbox (mock transport) — CSID search, add-to-patient routing, soft-delete aging + purge

### ECW-DOC-7 — fax OUTBOUND lifecycle

- **Screen & fields (eCW):** fax OUTBOUND lifecycle (completes the fax-inbox note): D-jellybean dropdown exposes Fax Inbox (web + plug-in, each w/ PARTIAL-fax sub-queue), FAX OUTBOX (per-fax status Logged->Pending->Sending->Completed/FAILED w/ color chips, status-description text, retry via Update/Send, Fax Server console link, Unaddressed filter), FAILED FAXES queue, Add-Page-to-Patient split for multi-page faxes
- **PFO today:** none
- **Gap:** outbound-fax queue w/ retry + failure triage (mock transport)
- **PFO implementation:** Fax outbox queue — status chips, retry, failed-faxes triage (mock transport)

### ECW-DOC-8 — fax compliance + failure notification

- **Screen & fields (eCW):** fax compliance + failure notification (extends fax notes): optional SUPERIMPOSE PATIENT IDENTIFIERS stamps patient name+DOB on every outbound fax page (w/ review-for-obscured-data warning); failed faxes auto-generate an in-app MESSAGE to the sender (fax number, recipient, date) with reply/new-action follow-up
- **PFO today:** no in-app notification plumbing for failed sends
- **Enh:** failure-notice messages into a staff inbox (pairs w/ I3 team-inbox concept)
- **PFO implementation:** Fax — patient-identifier stamping option + failure notices into staff inbox (I3 tie)

### ECW-DOC-9 — digital fax ROUTING RULES + doc portal publish

- **Screen & fields (eCW):** digital fax ROUTING RULES + doc portal publish (closes the documents guide): Digital Fax Inbox Routing rule table (receiver provider/staff + receiver fax number + assigned fax number + sender name/fax + leave-copy flag + send TSID/CSID + target Patient Document Category + enable toggle, w/ section-locked-for-editing concurrency guard); Document Details carries a "Review & Publish To Portal" flag; printing a doc prompts Add / Do-NOT-Add patient identifiers
- **PFO today:** none
- **Gap:** rule-based inbound-document routing + per-doc portal publish flag
- **PFO implementation:** Fax admin — inbound routing rule table + per-doc portal-publish flag

### ECW-DOC-10 — per-category document EXPIRATION policy

- **Screen & fields (eCW):** per-category document EXPIRATION policy (extends doc-expiry note): Document Management admin defines categories + Configure Expiration Document grid (category, parent category, EXPIRE IN MONTHS) driving automatic expiry on filed docs
- **PFO today:** none
- **Gap:** category-level doc-expiry policy feeding the appointment Document Verification panel
- **PFO implementation:** Documents admin — per-category expiration policy grid (feeds ECW-FO-12 verification panel)

### ECW-LT-1 — Letter Templates console

- **Screen & fields (eCW):** Letter Templates console (extends Letter Designer note): categorized practice template LIBRARY (Form/* — consult request, DOT physical, employee injury, payment plan, physician's order, pre-op eval, psychiatric referral, student inhaler auth...) w/ per-template favorites + edit, MS WORD viewer toggle, Letter Designer + Update Template buttons, generated letter saves into a chosen Patient Documents folder
- **PFO today:** none
- **Gap:** letter template library w/ chart filing
- **PFO implementation:** Letters module — categorized template library w/ favorites + chart filing

### ECW-LT-2 — letter EXECUTION surfaces

- **Screen & fields (eCW):** letter EXECUTION surfaces (extends letter-library note): per-patient Letters launcher from the Hub and from the SCHEDULE right-click menu (QuickLetter-PDF / QuickLetter-Word / Letters-Web / Letters-Plug-in), letter picker shows the practice library incl a guarantor DUNNING SERIES (First/Second/Final guarantor, No-Insurance, Outstanding Balance, Insufficient Funds), missed-appointment, flu-shot + immunization-due reminders, tests-due; recall cohorts EXPORT to TXT/CSV; every outreach lands in per-patient COMMUNICATION LOGS w/ modality tabs (Email/Portal/Voice/Text-SMS/h2h) + status; schedule context menu also prints ENCOUNTER FORM (3 modes) + appointment card
- **PFO today:** statements only, no letters engine or communication log
- **Gap:** patient-letter execution + dunning series + communication log
- **PFO implementation:** Letters — per-patient launcher (hub + schedule menu), dunning series, communication logs w/ modality tabs

### ECW-LT-3 — letter lifecycle

- **Screen & fields (eCW):** letter lifecycle (completes letters set): generated letters open in DRAFT MODE w/ annotation toolbar, save into a chosen chart folder w/ rename + ASSIGN-TO routing (drops into the assignee's Review Documents queue; editable-field letters must be completed from the outstanding queue), print/fax from the same dialog, and every letter carries a LETTER LOG (created-as-draft/viewed/printed w/ user+timestamp)
- **PFO today:** none
- **Gap:** letter draft->assign->finalize workflow w/ audit
- **PFO implementation:** Letters — draft→annotate→assign-to→finalize lifecycle w/ per-letter log

### ECW-DOC-11 — CONSULT NOTES generator

- **Screen & fields (eCW):** CONSULT NOTES generator (mock-seam fax): from a note, build a CONSULT REPORT (specialist->referrer) or CONSULT REQUEST (PCP->specialist, + PREOP CONSULTATION variant) — pick NOTE SECTIONS to include (CC/HPI/meds/history/allergies/hospitalization/treatment...), note style, INCLUDE COVER LETTER auto-drafts a personalized referral letter ("Thank you for evaluating \<patient>... enclosing the note") w/ provider signature, editable in the fax preview + schedulable send; note PRINT menu fans out per module (Print Rx / Orders / Labs / DI / Procedures / Visit Summary / Rx+Orders+Summary / Consult Notes via HTML or Letters / Vision Rx)
- **PFO today:** none
- **Gap:** consult-letter generation from note content
- **PFO implementation:** Letters/notes — consult report/request generator w/ section picker + auto cover letter (fax mock)

---

## Review Epilog — 2026-07-24

- Live build updated to 1943; gate 251/251 GREEN; MR2–MR7 delivered, MR8/MR9/MR10 active.
- ECW-DOC-1 (DocumentFoldersRoutes) and ECW-DOC-2 (misfile MOVE-TO-PATIENT) have live backends; CF UI binding pending for remaining actions.
- No 🟢 live rows in this domain yet; all 14 remain at 🟡 working-screen status.
- No individual parity rows updated; status regeneration is AgentECW's lane on MasterSchedule sync.

