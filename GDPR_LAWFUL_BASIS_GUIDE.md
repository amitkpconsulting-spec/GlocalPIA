# GDPR Compliance Guide: Lawful Bases and Individual Rights Matrix

> **Authoritative Operational Reference & DSAR Triage Playbook**  
> *Regulatory Basis: UK GDPR & EU GDPR Articles 6, 12, 17, 18, 20, 21 | Data Protection Act 2018 | ICO Statutory Guidance*  
> *Target Audience: Privacy Officers, DPOs, Legal Counsel, Customer Support Leads, Product Managers, and DSAR Operations Specialists*

---

## 📑 Table of Contents

1. [Overview & Purpose](#1-overview--purpose)
   - [The Constitutional Principle: Why Lawful Basis Dictates Rights](#the-constitutional-principle-why-lawful-basis-dictates-rights)
   - [Core Operational Rules & Response Timelines](#core-operational-rules--response-timelines)
   - [Identity Verification & Authentication Thresholds](#identity-verification--authentication-thresholds)
2. [Lawful Bases & Individual Rights Matrix](#2-lawful-bases--individual-rights-matrix)
   - [Comprehensive Regulatory Matrix](#comprehensive-regulatory-matrix)
   - [Deep-Dive Analysis by Lawful Basis](#deep-dive-analysis-by-lawful-basis)
3. [Interactive Self-Assessment Questionnaire (Triage Decision Tree)](#3-interactive-self-assessment-questionnaire-triage-decision-tree)
   - [Triage Visual Architecture](#triage-visual-architecture)
   - [Step 1: Identify the Right Being Exercised](#step-1-identify-the-right-being-exercised)
   - [Step 2: Determine Primary Lawful Basis (RoPA Lookup)](#step-2-determine-primary-lawful-basis-ropa-lookup)
   - [Step 3: Evaluate Conditional Exemptions & Balances](#step-3-evaluate-conditional-exemptions--balances)
   - [Step 4: Formal Determination & Standard Response Outcomes](#step-4-formal-determination--standard-response-outcomes)
4. [Escalation Pathways & Practical Edge Cases](#4-escalation-pathways--practical-edge-cases)
   - [Scenario A: The Dual-Purpose Conflict (Billing Records vs. Marketing Consent)](#scenario-a-the-dual-purpose-conflict-billing-records-vs-marketing-consent)
   - [Scenario B: Portability Request for Inferred, Aggregated, or AI-Generated Data](#scenario-b-portability-request-for-inferred-aggregated-or-ai-generated-data)
   - [Scenario C: Objection to Legitimate Interests During an Active Fraud Investigation](#scenario-c-objection-to-legitimate-interests-during-an-active-fraud-investigation)
   - [Scenario D: Blanket Erasure Demand Across Live Backups and Archive Tapes](#scenario-d-blanket-erasure-demand-across-live-backups-and-archive-tapes)
   - [Mandatory DPO / Legal Escalation Triggers](#mandatory-dpo--legal-escalation-triggers)

---

## 1. Overview & Purpose

### The Constitutional Principle: Why Lawful Basis Dictates Rights

Under the General Data Protection Regulation (GDPR Art. 6) and the UK Data Protection Act 2018, every processing activity involving personal data must be anchored to one of **six designated lawful bases**:
1. **Consent** (Art. 6(1)(a))
2. **Contract Performance** (Art. 6(1)(b))
3. **Legal Obligation** (Art. 6(1)(c))
4. **Vital Interests** (Art. 6(1)(d))
5. **Public Task** (Art. 6(1)(e))
6. **Legitimate Interests** (Art. 6(1)(f))

A widespread compliance misconception is that data subjects possess an absolute, unconditional right to demand erasure (*"right to be forgotten"*), data portability, or processing cessation across all corporate databases. 

**Under European and UK jurisprudence, data subject rights are not absolute.** Instead, they are directly calibrated against the lawful basis upon which the organization originally captured and currently retains the personal data:

- **When processing relies on Consent**, the individual retains sovereign control; withdrawing consent fundamentally invalidates future processing and triggers the right to erasure.
- **When processing is compelled by Legal Obligation** (e.g., anti-money laundering regulations, tax filings, clinical drug safety reporting), the statutory duty of the controller strictly supersedes an individual's preference for erasure or objection.
- **When processing relies on Legitimate Interests**, the organization must conduct a formal balancing test (Legitimate Interests Assessment - LIA) weighing enterprise necessity against individual fundamental rights.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                       THE LAWFUL BASIS DICTATES THE RIGHT                   │
│                                                                             │
│   Lawful Basis (Art. 6)            Scope of Processing                      │
│   ┌───────────────────┐            ┌────────────────────────────────────┐   │
│   │ Consent           │───────────▶│ Maximum Individual Sovereignty     │   │
│   │ Contract          │───────────▶│ Contractual Delivery Constraints   │   │
│   │ Legitimate Int.   │───────────▶│ Balancing Test (LIA) Required      │   │
│   │ Legal Obligation  │───────────▶│ Statutory Override (No Erasure)    │   │
│   │ Public Task       │───────────▶│ Official Authority Priority        │   │
│   │ Vital Interests   │───────────▶│ Life/Safety Emergency Exemption   │   │
│   └───────────────────┘            └────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Core Operational Rules & Response Timelines

Every Data Subject Access Request (DSAR) and Individual Rights Request must adhere to strict operational benchmarks mandated by the UK Information Commissioner’s Office (ICO) and the European Data Protection Board (EDPB):

| Parameter | Regulatory Requirement | Operational Protocol |
| :--- | :--- | :--- |
| **Standard Statutory Deadline** | **One Calendar Month** (GDPR Art. 12(3)) | Day 0 is the date of receipt. Deadline is the corresponding date in the subsequent calendar month (or nearest working day if falling on a weekend/bank holiday). |
| **Extension Rule** | Up to **Two Additional Months** (Total 3 Months) | Permissible only where requests are demonstrably **complex or numerous**. The controller must notify the data subject within the initial month, stating the specific reasons for delay. |
| **Fee Structure** | **Free of Charge** | Fees are prohibited. Exception: A *"reasonable fee"* reflecting administrative costs may be levied only if requests are manifestly unfounded or excessive. |
| **Record of Processing** | Article 30 RoPA Cross-Check | Every dataset touched must correspond to an active Record of Processing Activities (RoPA) entry verified in the internal PIA registry. |
| **Audit Logging** | Verifiable Lineage | Every action taken (Acceptance, Partial Fulfillment, Rejection, Escalation) must be immutably recorded in the internal compliance log with cryptographic checksums. |

---

### Identity Verification & Authentication Thresholds

Before disclosing, modifying, porting, or deleting personal data, operational teams must verify the identity of the requester to prevent unauthorized disclosures and malicious data exfiltration:

1. **Proportional Authentication**:
   - If the request originates from an **authenticated account** (e.g., active customer portal with 2FA), additional ID is generally **not required** unless suspicious account takeover signals exist.
   - If the request arrives via public email or web form, request reasonable confirmation (e.g., email verification link, utility bill, government photo ID redacted of unneeded fields).
2. **"Reasonable Doubt" Principle (Art. 12(6))**:
   - Only ask for additional identification if genuine uncertainty exists regarding the requester's identity.
   - *Prohibition against obstructive friction*: Organizations cannot demand notarized passports or excessive biometric verification solely to discourage DSAR submissions.
3. **Clock Pausing Rule**:
   - The statutory one-calendar-month deadline is **paused** while waiting for necessary identity verification documents, provided the controller requested them promptly.

---

## 2. Lawful Bases & Rights Matrix

### Comprehensive Regulatory Matrix

The following reference matrix outlines the precise legal applicability of the four core GDPR individual rights across all six Article 6 lawful bases, as established by the UK Information Commissioner's Office (ICO) and statutory case law:

| Lawful Basis (GDPR Art. 6) | Right to Erasure (Art. 17) | Right to Portability (Art. 20) | Right to Object (Art. 21) | Right to Restriction (Art. 18) |
| :--- | :---: | :---: | :---: | :---: |
| **1. Consent**<br>`Art. 6(1)(a)` | ✅ **Applicable**<br>*(Individual can withdraw consent anytime; data must be purged unless another basis applies)* | ⚠️ **Conditional**<br>*(Applies ONLY if processing is carried out by automated means)* | ❌ **Not Applicable**<br>*(Individual exercises Withdrawal of Consent instead under Art. 7(3))* | ✅ **Applicable**<br>*(Applies while verifying disputes or when processing is unlawful)* |
| **2. Contract**<br>`Art. 6(1)(b)` | ⚠️ **Conditional**<br>*(Applies if data is no longer necessary for contract performance or ongoing warranty/claims)* | ⚠️ **Conditional**<br>*(Applies ONLY if processing is carried out by automated means & data was provided by subject)* | ❌ **Not Applicable**<br>*(No general right to object to core terms; contract termination rules apply)* | ✅ **Applicable**<br>*(Applies while contesting accuracy of contract records)* |
| **3. Legal Obligation**<br>`Art. 6(1)(c)` | ❌ **Not Applicable**<br>*(Statutory preservation duty overrides erasure request)* | ❌ **Not Applicable**<br>*(Portability is legally excluded for statutory compliance datasets)* | ❌ **Not Applicable**<br>*(Data subject cannot object to controller fulfilling statutory duty)* | ✅ **Applicable**<br>*(Applies while contesting factual accuracy of stored records)* |
| **4. Vital Interests**<br>`Art. 6(1)(d)` | ❌ **Not Applicable**<br>*(Essential to protect life/safety; cannot be erased while vital need persists)* | ❌ **Not Applicable**<br>*(Portability does not apply to emergency medical/life-critical records)* | ❌ **Not Applicable**<br>*(Cannot object to life-saving or public emergency interventions)* | ✅ **Applicable**<br>*(Applies while contesting accuracy of medical/emergency records)* |
| **5. Public Task**<br>`Art. 6(1)(e)` | ❌ **Not Applicable**<br>*(Erasure does not apply where processing is necessary for official public authority)* | ❌ **Not Applicable**<br>*(Portability excluded for public tasks or statutory public duties)* | ⚠️ **Conditional**<br>*(Subject can object based on grounds relating to their particular situation)* | ✅ **Applicable**<br>*(Applies while verifying objection balance or contesting accuracy)* |
| **6. Legitimate Interests**<br>`Art. 6(1)(f)` | ⚠️ **Conditional**<br>*(Applies if objection is upheld, unless controller demonstrates overriding legitimate grounds)* | ❌ **Not Applicable**<br>*(Portability does not apply to legitimate interest processing)* | ✅ **Applicable**<br>*(Absolute right to object for direct marketing; conditional for other processing via LIA)* | ✅ **Applicable**<br>*(Applies while balancing test is assessed or accuracy is contested)* |

---

### Deep-Dive Analysis by Lawful Basis

#### 1. Consent (`Art. 6(1)(a)`)
- **Erasure**: When an individual withdraws consent, the lawful basis collapses. If no secondary basis exists (e.g., accounting retention for purchases), the controller **must erase** the data without undue delay.
- **Portability**: Applicable only to data *provided by the data subject* and processed by *automated means* (e.g., online playlists, customer activity logs). Excludes controller-generated diagnostic inferences or internal evaluations.
- **Object**: Formally categorized as *Not Applicable* because Article 21 specifies objections apply to Public Task and Legitimate Interests. However, the data subject accomplishes an equivalent outcome by executing their absolute right to **withdraw consent** under Article 7(3).
- **Restriction**: Applies while contesting data accuracy or when the individual requests restriction rather than outright deletion.

#### 2. Performance of a Contract (`Art. 6(1)(b)`)
- **Erasure**: Not applicable while the contract is active or during statutory limitation periods for breach of contract claims (typically 6 years under the UK Limitation Act 1980). Once all terms, guarantees, and dispute periods expire, data no longer necessary must be purged upon request.
- **Portability**: Fully applicable to data submitted by the user to execute the service (e.g., contact records, purchase history, uploaded files) in a structured, commonly used, machine-readable format (e.g., JSON, CSV).
- **Object**: Not applicable. If the customer does not wish their data processed to deliver the core service, their legal remedy is contract cancellation, not a GDPR Article 21 objection.

#### 3. Compliance with a Legal Obligation (`Art. 6(1)(c)`)
- **Erasure**: **Strictly Prohibited**. Controllers are legally required to retain records under sector-specific statutes (e.g., HMRC tax filings, FCA anti-money laundering records, OSHA/HSE accident reports). Article 17(3)(b) explicitly exempts legal obligations from erasure.
- **Portability**: Inapplicable. The law intends for statutory records to remain within the regulated repository, not ported between commercial platforms.
- **Object**: Inapplicable. An individual cannot legally compel a bank or healthcare provider to halt statutory reporting.
- **Restriction**: Restricted to verifying factual accuracy (e.g., verifying whether an income figure reported to tax authorities was mistyped).

#### 4. Protection of Vital Interests (`Art. 6(1)(d)`)
- **Application**: Pertains strictly to life-or-death emergencies (e.g., emergency room medical treatment, severe disaster rescue operations).
- **Rights Scope**: Erasure, portability, and objection are all inapplicable while the vital interest exists. Accuracy-based restriction remains available if incorrect blood type or allergy records could jeopardize the individual.

#### 5. Public Task / Official Authority (`Art. 6(1)(e)`)
- **Erasure**: Inapplicable where processing is necessary to perform a task carried out in the public interest or under official authority (e.g., electoral roll maintenance, statutory licensing).
- **Object**: Conditional right. The individual may object on grounds relating to their *particular personal situation*. The public authority must cease processing unless it proves *compelling legitimate grounds* overriding the individual’s interests.

#### 6. Legitimate Interests (`Art. 6(1)(f)`)
- **Erasure**: Directly coupled with the Right to Object. If the individual objects to processing and the organization cannot demonstrate *compelling legitimate grounds*, the data must be erased.
- **Direct Marketing Absolute Right**: Under Art. 21(2), if legitimate interests are used for **direct marketing or profiling**, the data subject has an **unconditional, absolute right to object**. The controller *cannot* perform a balancing test and must cease marketing immediately.
- **Portability**: Excluded under Article 20(1)(a). Portability strictly requires Consent or Contract.

---

## 3. Interactive Self-Assessment Questionnaire (Triage Flow)

This operational triage decision tree allows frontline support, privacy operations, and legal teams to systematically evaluate any incoming DSAR or rights invocation.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                          DSAR TRIAGE FLOWCHART                              │
│                                                                             │
│   [START: Incoming Data Subject Request]                                    │
│        │                                                                    │
│        ▼                                                                    │
│   [STEP 1: Verify Subject Identity & Determine Right Exercised]             │
│        │                                                                    │
│        ├────────────────┬───────────────┬──────────────┬────────────────┐   │
│        ▼                ▼               ▼              ▼                │   │
│   (A) ERASURE      (B) PORTABILITY   (C) OBJECT   (D) RESTRICTION       │   │
│        │                │               │              │                │   │
│        ▼                ▼               ▼              ▼                │   │
│   [STEP 2: Identify Lawful Basis via RoPA / PIA Database]                  │   │
│        │                                                                    │
│        ▼                                                                    │
│   [STEP 3: Check Mandatory Statutory Exemptions & Conditional Tests]        │
│        │                                                                    │
│        ▼                                                                    │
│   [STEP 4: Render Formal Determination (Accept / Reject / Escalate)]        │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

### Step 1: Identify Which Right the User is Exercising

Select the primary right invoked by the data subject:

- **[OPTION A] Right to Erasure / "Right to be Forgotten" (Art. 17)**: Requester asks to permanently delete, purge, or expunge their personal data.
- **[OPTION B] Right to Data Portability (Art. 20)**: Requester asks to export their data in a machine-readable format (JSON, CSV) or transfer it directly to a competitor.
- **[OPTION C] Right to Object (Art. 21)**: Requester demands that the organization halt a specific processing operation (e.g., stop profiling, cease marketing, stop AI model training).
- **[OPTION D] Right to Restriction of Processing (Art. 18)**: Requester asks the organization to freeze/quarantine data without deleting it (e.g., while a dispute or accuracy review is pending).

---

### Step 2: Determine Primary Lawful Basis (RoPA Lookup)

Check the internal Record of Processing Activities (RoPA) or PIA assessment for the specific dataset requested:

- **Basis 1: Consent (Art. 6(1)(a))** → *e.g., Marketing newsletter, optional telemetry, non-essential cookies, voluntary biometrics.*
- **Basis 2: Contract (Art. 6(1)(b))** → *e.g., Customer subscription, order delivery, user account credentials, SaaS billing records.*
- **Basis 3: Legal Obligation (Art. 6(1)(c))** → *e.g., Statutory accounting records, tax audit trail, AML/KYC identity verification.*
- **Basis 4: Vital Interests (Art. 6(1)(d))** → *e.g., Emergency medical intake, disaster response rescue roster.*
- **Basis 5: Public Task (Art. 6(1)(e))** → *e.g., Public health surveillance, government vehicle registration.*
- **Basis 6: Legitimate Interests (Art. 6(1)(f))** → *e.g., Network security logging, internal fraud detection, business analytics, direct B2B outreach.*

---

### Step 3: Check Conditional Exemptions & Balances

Evaluate the specific criteria corresponding to the selected branch:

#### Branch A: Right to Erasure Evaluation
1. *Is the data held under Legal Obligation (Basis 3) or Vital Interests (Basis 4)?*
   - **YES** → **REJECT ERASURE** (Exempt under Art. 17(3)(b)).
   - **NO** → Proceed to sub-question 2.
2. *Was the data collected under Consent (Basis 1)?*
   - **YES** → Has consent been withdrawn? If yes, and no other basis exists → **ACCEPT ERASURE**.
   - **NO** → Proceed to sub-question 3.
3. *Is the data held under Contract (Basis 2)?*
   - *Is the contract still active or within the 6-year statutory limitation period for financial/contract claims?*
     - **YES** → **REJECT ERASURE** (Data remains necessary for legal defense/performance).
     - **NO** → If contract is terminated and retention schedule has expired → **ACCEPT ERASURE**.
4. *Is the data held under Legitimate Interests (Basis 6)?*
   - *Did the user object, and does the company lack overriding legitimate grounds (e.g., fraud defense)?*
     - **YES (No overriding grounds)** → **ACCEPT ERASURE**.
     - **NO (Compelling grounds exist)** → **REJECT ERASURE / ESCALATE TO DPO**.

#### Branch B: Right to Data Portability Evaluation
1. *Was the data collected under Consent (Basis 1) OR Contract (Basis 2)?*
   - **NO (Held under Bases 3, 4, 5, or 6)** → **REJECT PORTABILITY** (Portability is legally inapplicable to Legal Obligation, Vital Interests, Public Task, and Legitimate Interests).
   - **YES** → Proceed to sub-question 2.
2. *Is the processing carried out by automated means?*
   - **NO (Manual/Paper files)** → **REJECT PORTABILITY** (Applies only to automated processing).
   - **YES** → Proceed to sub-question 3.
3. *Did the data subject directly provide the data (or was it generated by their direct device/service activity)?*
   - **YES** → **ACCEPT PORTABILITY** (Provide structured JSON/CSV export).
   - **NO (Data consists of proprietary algorithms, internal credit scores, or inferred AI metrics)** → **REJECT INFERRED DATA / ACCEPT RAW USER INPUTS ONLY**.

#### Branch C: Right to Object Evaluation
1. *Is the objection directed at Direct Marketing or Marketing Profiling?*
   - **YES** → **UNCONDITIONALLY ACCEPT OBJECTION** (Under Art. 21(2), marketing objections are absolute. Cease processing within 48 hours).
   - **NO** → Proceed to sub-question 2.
2. *Is the processing grounded in Legitimate Interests (Basis 6) or Public Task (Basis 5)?*
   - **NO (Held under Consent, Contract, or Legal Obligation)** → **REJECT OBJECTION** (Explain that objection does not apply to these bases; guide to contract cancellation or consent withdrawal).
   - **YES** → Proceed to sub-question 3.
3. *Has the organization conducted a Legitimate Interests Assessment (LIA) showing compelling grounds that override the individual's specific situation?*
   - **NO / UNCERTAIN** → **ESCALATE TO DPO & SUSPEND PROCESSING PENDING REVIEW**.
   - **YES (Demonstrable compelling grounds, e.g., ongoing fraud investigation)** → **REJECT OBJECTION WITH DOCUMENTED RATIONALE**.

#### Branch D: Right to Restriction Evaluation
1. *Is the user actively contesting accuracy (Art. 18(1)(a)) OR verifying an objection (Art. 18(1)(d))?*
   - **YES** → **ACCEPT RESTRICTION IMMEDIATELY** (Quarantine the data from active processing pipelines until accuracy or objection balancing is resolved).
   - **NO** → Proceed to sub-question 2.
2. *Is the processing alleged to be unlawful, but the subject opposes erasure (Art. 18(1)(b))?*
   - **YES** → **ACCEPT RESTRICTION & ESCALATE TO LEGAL**.
   - **NO** → **REJECT RESTRICTION**.

---

### Step 4: Final Determination & Standard Response Outcomes

Based on the decision tree branch, select the appropriate response template:

#### OUTCOME 1: FULL ACCEPTANCE
- **Action**: Execute request in primary database, cache layers, backups (per retention policy), and dispatch automated downstream notices to third-party sub-processors (GDPR Art. 19).
- **Notice**: Send standard confirmation template citing action taken within the statutory 30-day window.

#### OUTCOME 2: PARTIAL ACCEPTANCE (HYBRID PROCESSING)
- **Action**: Fulfill the applicable portion (e.g., delete marketing newsletter profile and optional tracking data) while preserving statutory records (e.g., transaction invoices retained under tax statutes).
- **Notice**: Provide itemized disclosure explaining which data was purged and which data was retained, referencing the governing statute.

#### OUTCOME 3: REJECTION WITH STATUTORY RATIONALE
- **Action**: Preserve dataset without modification.
- **Notice**: Issue formal rejection letter within 30 days containing:
  1. Specific legal justification (e.g., Art. 17(3)(b) exemption for statutory compliance).
  2. The specific retention period governing the preserved data.
  3. Mandatory advisory of their right to lodge a complaint with the supervisory authority (e.g., UK ICO) and seek judicial remedy.

#### OUTCOME 4: ESCALATE TO DATA PROTECTION OFFICER (DPO)
- **Action**: Flag ticket as `LEGAL_REVIEW_REQUIRED`. Quarantine records if restriction is claimed. Assign to DPO queue with SLA of 5 working days.

---

## 4. Escalation Pathways & Practical Edge Cases

### Scenario A: The Dual-Purpose Conflict (Billing Records vs. Marketing Consent)

**Context**: A customer cancels their software subscription and submits a blanket Right to Erasure request demanding that the enterprise *"delete every single trace of my existence."*

**Analysis & Resolution**:
- **Dataset 1: Marketing Profile & Telemetry**: Collected under **Consent** (`Art. 6(1)(a)`) or **Legitimate Interests** (`Art. 6(1)(f)`).
  - *Action*: **MUST BE ERASED**. Purge CRM leads, email subscription records, and analytics tracking immediately.
- **Dataset 2: Invoices, Tax VAT Records, and Financial Ledger**: Collected and retained under **Legal Obligation** (`Art. 6(1)(c)`) pursuant to UK HMRC / VAT statutory rules (compulsory 6-year retention).
  - *Action*: **CANNOT BE ERASED**. Under Article 17(3)(b), the legal obligation strictly overrides the erasure demand.
- **Operational Resolution**: Apply the **Bifurcated Fulfillment Protocol**:
  1. Purge marketing and profile data.
  2. Isolate billing records to an archive partition accessible only to Finance and Audit personnel.
  3. Send formal response: *"Your marketing profile and tracking data have been purged. Your financial transaction records have been isolated and retained in accordance with HMRC VAT tax compliance obligations (6-year statutory retention), after which they will be permanently destroyed."*

---

### Scenario B: Portability Request for Inferred, Aggregated, or AI-Generated Data

**Context**: A user submits a Right to Data Portability (Art. 20) request demanding a machine-readable export of their full file, including their internal credit risk score, fraud propensity rating, and AI classification tags.

**Analysis & Resolution**:
- **Article 20 Scope**: Portability applies exclusively to personal data that the data subject has **"provided to a controller"** (including observed raw telemetry from device usage) processed under Consent or Contract.
- **Inferred & Derived Data**: Internal credit ratings, risk scores, algorithmic assessments, and proprietary analytical models are **derived** by the controller and are **exempt from Data Portability**.
- **Operational Resolution**:
  1. Export raw user-provided profile data, uploaded files, and raw interaction logs in JSON or CSV format.
  2. Redact internal derived scores, proprietary predictive models, and third-party trade secrets.
  3. Inform the requester: *"In accordance with Article 20 and ICO guidance, we have provided all personal data directly submitted by you. Algorithmic scores and internal business classifications generated by our systems are excluded from data portability."*

---

### Scenario C: Objection to Legitimate Interests During an Active Fraud Investigation

**Context**: An account holder under active investigation for payment fraud submits an Article 21 Right to Object, demanding that the security team halt all monitoring, fraud scoring, and IP tracking.

**Analysis & Resolution**:
- **Lawful Basis**: Fraud prevention and information security are processed under **Legitimate Interests** (`Art. 6(1)(f)`) as recognized in Recital 47 of the GDPR.
- **Balancing Test**: The enterprise’s legitimate interest in preventing criminal fraud, protecting other platform users, and securing financial infrastructure constitutes **"compelling legitimate grounds"** that clearly outweigh the individual's request.
- **Operational Resolution**:
  1. **DO NOT** halt fraud monitoring.
  2. Document the specific LIA justification in the compliance audit trail.
  3. Issue an Article 21(1) refusal notice detailing compelling legitimate grounds for fraud prevention, providing contact information for the supervisory authority.

---

### Scenario D: Blanket Erasure Demand Across Live Backups and Archive Tapes

**Context**: A customer demands that their data be scrubbed not only from active production databases but also from cold-storage disaster recovery tape backups.

**Analysis & Resolution**:
- **Technical Reality**: Overwriting cold disaster recovery tapes or immutable cloud snapshots instantly is technically infeasible and risks corrupting entire backup snapshots.
- **ICO & EDPB Guidance**: The UK ICO acknowledges that data stored in disaster recovery archives does not need to be instantly rewritten, provided:
  1. The personal data is put **beyond operational use** (quarantined).
  2. If a disaster recovery restoration ever occurs, the system must **re-apply the erasure log** before the restored backup is brought live.
  3. The archived tapes naturally expire and overwrite in accordance with the documented disaster recovery cycle (e.g., 30–90 days).
- **Operational Resolution**:
  1. Delete data from all primary transactional systems, caches, and read replicas immediately.
  2. Record the user ID in an immutable **"Suppression / Re-Erasure Register"**.
  3. Reassure the user in the response notice that their data is removed from all operational systems and will naturally age out of archival backups per the disaster recovery cycle.

---

### Mandatory DPO / Legal Escalation Triggers

Frontline agents must immediately escalate tickets to the **Data Protection Officer (DPO)** or **Legal Counsel** within **24 hours** upon encountering any of the following triggers:

| Trigger Code | Incident Classification | Mandatory Action |
| :--- | :--- | :--- |
| **ESC-01** | **Pending or Threatened Litigation** | Freeze all deletion routines. Issue internal Legal Hold across all systems. |
| **ESC-02** | **Law Enforcement / Regulatory Investigation** | Coordinate with Legal before disclosing or deleting any subpoenaed records. |
| **ESC-03** | **Unclear Lawful Basis in RoPA** | If the processing database lacks a verified Article 6 basis, DPO must assess classification. |
| **ESC-04** | **Whistleblower / Grievance Records** | Where personal data involves internal employee grievances, sensitive allegations, or whistleblower protections. |
| **ESC-05** | **Manifestly Unfounded / Excessive Demands** | Where a subject submits repetitive, harassing, or bad-faith requests requiring formal refusal or cost levying. |
| **ESC-06** | **Special Category (Art. 9) Genetic / Health Disputes** | Disputes involving health, biometric, or trade union data requiring Article 9 condition reassessments. |

---

## 5. Document Governance & Revision Lineage

| Version | Publication Date | Author | Approver | Change Summary |
| :--- | :--- | :--- | :--- | :--- |
| **v1.0** | February 2026 | Privacy Operations Team | Lead DPO Auditor | Initial publication of Lawful Basis & Individual Rights Matrix |
| **v1.1** | June 2026 | Compliance & Legal Engineering | Head of Data Governance | Incorporated EDPB Guidelines on Inferred Data & Portability |
| **v2.0** | September 2026 | Lead Privacy Consultant & UX Writer | Executive Privacy Board | Comprehensive overhaul: Interactive triage decision tree, UK ICO lawful basis alignment, and dual-purpose edge cases |

*This document is maintained by the Data Protection Office. All inquiries regarding interpretation or application should be directed to `dpo@enterprise-governance.org`.*
