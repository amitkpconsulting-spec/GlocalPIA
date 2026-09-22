# GLOCAL PIA ↔ Individual Rights Operation Center (IROC)
## Enterprise Integration Architecture & Ingestion Specification

> **Zero-Cloud / Air-Gapped Privacy Impact Assessment (PIA) & Governance Engine**  
> *Ingestion Bridge for Data Subject Access Requests (DSAR), Right to Erasure, Portability, and Automated Rights Fulfillment*

---

## 📑 Table of Contents

1. [Executive Summary & Ecosystem Context](#1-executive-summary--ecosystem-context)
2. [Strategic Integration Value & Problem Statement](#2-strategic-integration-value--problem-statement)
3. [End-to-End Architecture & Data Flow Topology](#3-end-to-end-architecture--data-flow-topology)
4. [Ingested Data Contract & Schema Mapping](#4-ingested-data-contract--schema-mapping)
5. [Lawful Basis ↔ Rights Matrix Enforcement Engine](#5-lawful-basis--rights-matrix-enforcement-engine)
6. [Operational Integration Workflows](#6-operational-integration-workflows)
   - [Workflow A: PIA Approval & System-of-Record Ingestion](#workflow-a-pia-approval--system-of-record-ingestion)
   - [Workflow B: Dynamic DSAR Rights Eligibility Pre-Flight Check](#workflow-b-dynamic-dsar-rights-eligibility-pre-flight-check)
   - [Workflow C: Automated Downstream Vendor / Sub-Processor Propagation](#workflow-c-automated-downstream-vendor--sub-processor-propagation)
   - [Workflow D: Retention Schedule & Statutory Hold Validation](#workflow-d-retention-schedule--statutory-hold-validation)
7. [API Endpoints & Integration Interface Contracts](#7-api-endpoints--integration-interface-contracts)
8. [Air-Gapped & On-Premise Synchronization Protocols](#8-air-gapped--on-premise-synchronization-protocols)
9. [Cryptographic Lineage & Audit Reconciliation](#9-cryptographic-lineage--audit-reconciliation)
10. [Security, Governance & Access Control](#10-security-governance--access-control)

---

## 1. Executive Summary & Ecosystem Context

In modern enterprise privacy governance, the **Privacy Impact Assessment (PIA)** serves as the canonical source of truth for **what personal data is collected**, **where it is stored**, **why it is processed (lawful basis)**, and **which third parties receive it**.

The **Individual Rights Operation Center (IROC)** (also known as the *Data Subject Rights / DSAR Fulfillment Center*) is the operational engine responsible for executing data principal rights under global regulations (GDPR Arts. 15–22, CCPA/CPRA §1798.100–130, India DPDP Act 2023 Sec. 11–14, HIPAA, and NHS IG).

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             ENTERPRISE PRIVACY ECOSYSTEM                    │
│                                                                             │
│   ┌───────────────────────────────┐     Approved PIA     ┌───────────────────────────────┐
│   │          GLOCAL PIA           │────────────────────▶│         IROC ENGINE           │
│   │  (Policy, Risk, Data Mapping, │      Metadata &      │  (DSAR Intake, Verification,  │
│   │   Lawful Basis, Lineage)      │◀────────────────────│   Data Retrieval & Erasure)   │
│   └───────────────────────────────┘   Rights Eligibility └───────────────────────────────┘
│                  │                         Query                         │
│                  │                                                       │
│                  ▼                                                       ▼
│      ┌─────────────────────────┐                         ┌───────────────────────────────┐
│      │ Record of Processing    │                         │ Enterprise Systems of Record  │
│      │ Activities (RoPA) Store │                         │ (CRM, ERP, DBs, 3PL, CROs)    │
│      └─────────────────────────┘                         └───────────────────────────────┘
└─────────────────────────────────────────────────────────────────────────────┘
```

By ingesting approved assessments from **GLOCAL PIA**, the IROC automates data mapping, enforces statutory exceptions to erasure/objection, routes downstream deletion cascades to verified sub-processors, and prevents unlawful data disclosure.

---

## 2. Strategic Integration Value & Problem Statement

| Operational Challenge in DSAR Fulfillment | GLOCAL PIA Integration Solution |
| :--- | :--- |
| **Manual System Discovery**: DSAR teams do not know which internal databases, apps, or cloud silos hold data for a given project. | **Automated Data Mapping**: Ingests `StructuredDataFlow` (`whatApp`, `howFlows`, `whereStored`, `whenRecordStd`) directly into IROC data discovery orchestrators. |
| **Unlawful Erasure vs. Statutory Holds**: Deleting data that has a statutory retention requirement (e.g., AML/KYC 5–7 years, clinical trials 25 years) creates severe regulatory violations. | **Lawful Basis & Retention Intelligence**: Supplies `LawfulBasisRightsEvaluation` and `SectionAnswers` (Section H) to automatically validate or reject erasure requests. |
| **Orphaned Third-Party Data**: Organizations fail to notify downstream sub-processors, 3PL logistics vendors, or CROs when an individual requests deletion (GDPR Art. 19). | **Vendor Propagation Map**: Ingests Section E (Data Sharing & Transfers) and Section J (Vendor Management) to trigger automated third-party deletion notices. |
| **Audit Defense & Lineage Gaps**: Regulators question whether DSAR handling matched the officially approved DPO risk posture. | **Dual-ID Cryptographic Provenance**: Links every DSAR fulfillment ticket to the immutable `FID`, `BID`, and `SHA-256 Provenance Hash` of the governing PIA. |

---

## 3. End-to-End Architecture & Data Flow Topology

```
+---------------------------------------------------------------------------------------------------------+
|                                        GLOCAL PIA PLATFORM                                              |
|                                                                                                         |
|  [ Section A: Project Metadata ]    [ Section B: Data Sensitivity ]   [ Section C: Lawful Basis ]       |
|  [ Section E: Data Sharing/Vendors] [ Section F: Individual Rights]   [ Section G: Architecture/Flows ] |
|  [ Section H: Retention Schedules ] [ Section S: Industry Profiles]   [ Dual-ID Provenance Engine ]     |
+---------------------------------------------------------------------------------------------------------+
                                                     │
                                 Ingestion Payload Generation
                         (REST API / Webhook / Air-Gapped JSON Artifact)
                                                     │
                                                     ▼
+---------------------------------------------------------------------------------------------------------+
|                                    IROC INGESTION & PARSING ENGINE                                      |
|                                                                                                         |
|  1. Ingestion Adapter: Validates SHA-256 Provenance Hash and DPO Endorsement Signature                  |
|  2. System Catalog Synchronizer: Registers Systems of Record, API Gateways, & Data Stores              |
|  3. Rights Rule Matrix Compiler: Generates DSAR Decision Trees per Lawful Basis                         |
|  4. Sub-Processor Registry: Maps 3PLs, Cloud Sub-processors, and CROs for Downstream Cascades           |
|  5. Retention & Exemption Store: Records statutory hold schedules and non-derogable legal duties        |
+---------------------------------------------------------------------------------------------------------+
                                                     │
                                                     ▼
+---------------------------------------------------------------------------------------------------------+
|                                INDIVIDUAL RIGHTS OPERATION CENTER (IROC)                                |
|                                                                                                         |
|  [ Data Subject Intake Portal ]  ──▶  [ Pre-Flight Rights Validation ]  ──▶  [ Automated Orchestrator ] │
|   (Access, Erasure, Portability,      - Is Erasure Allowed? (Basis check)     - Query DBs / Data Lakes  │
|    Correction, Consent Revocation)    - Is Subject an Employee/Customer?      - Redact & Package ZIP    │
|                                       - Is Statutory Hold Active?             - Send Deletion to 3PLs   │
+---------------------------------------------------------------------------------------------------------+
```

---

## 4. Ingested Data Contract & Schema Mapping

When a PIA achieves `Approved` or `Submitted` status in GLOCAL PIA, it exports an **IROC Integration Bundle**. The schema maps directly to core GLOCAL PIA TypeScript data structures (`PIAAssessment`, `StructuredDataFlow`, `LawfulBasisRightsEvaluation`, `DataProvenanceEntry`).

### IROC Ingestion JSON Payload Specification

```json
{
  "$schema": "https://glocal-pia.internal/schemas/iroc-ingestion-v1.json",
  "integrationMetadata": {
    "sourceEngine": "GLOCAL-PIA-v2.6",
    "exportTimestamp": "2026-08-25T11:20:00Z",
    "exportType": "PIA_APPROVED_INGESTION"
  },
  "provenanceLineage": {
    "fid": "PIA-FE-2026-A8F9K2L1",
    "bid": "PIA-BE-UK-2026-000412",
    "version": "v2.0",
    "provenanceHash": "a3f89e47b9319808d29bca5b78f4b238dc8f2e2f9d1469e38d7890bce219f8e4",
    "status": "Approved",
    "dpoSignOff": {
      "dpoName": "Eleanor Vance, CIPP/E",
      "dpoEmail": "dpo@enterprise-health.org",
      "signedDate": "2026-08-24T16:45:00Z",
      "endorsementVerified": true
    }
  },
  "projectContext": {
    "projectTitle": "Patient Telehealth & AI Diagnostics Platform",
    "organization": "Enterprise Health NHS Trust",
    "industrySector": "healthcare",
    "primaryRegulatoryFramework": "UK GDPR & DPA 2018",
    "projectOwner": "Dr. Marcus Brody",
    "projectOwnerEmail": "m.brody@enterprise-health.org"
  },
  "systemsOfRecord": {
    "primaryApplication": "TeleHealth Web/Mobile Hub (Epic EMR API Gateway)",
    "dataStores": [
      {
        "storeId": "DS-01",
        "name": "Clinical EHR Database (PostgreSQL Encrypted)",
        "location": "UK South (London Data Center)",
        "storageType": "Structured Database",
        "containsSpecialCategory": true,
        "containsPhi": true
      },
      {
        "storeId": "DS-02",
        "name": "Diagnostic Imaging PACS / S3 Blob Store",
        "location": "UK West",
        "storageType": "Object Storage",
        "containsSpecialCategory": true,
        "containsPhi": true
      }
    ],
    "structuredFlow": {
      "whatApp": "Remote teleconsultations, digital prescription dispatch, and AI triage",
      "howFlows": "TLS 1.3 encrypted REST API -> RabbitMQ -> Core Epic EMR DB",
      "whereStored": "Encrypted PostgreSQL RDS & On-premise PACS Archive",
      "whenRecordStd": "Active treatment + 8 years statutory NHS retention",
      "crossBorder": "Zero cross-border transfers; restricted to UK Sovereign Cloud"
    }
  },
  "dataCharacteristics": {
    "categoriesProcessed": [
      "Patient Identifying Details (Name, NHS Number, DOB)",
      "Special Category / PHI (Diagnostic history, blood tests)",
      "Biometric Telemetry (Pulse oximeter, blood pressure streams)",
      "Financial Transaction Metadata (Pharmacy co-pays)"
    ],
    "isSpecialCategoryOrPhi": true,
    "isEmployeeData": false,
    "isMinorData": false
  },
  "rightsGovernance": {
    "lawfulBasis": "Article 6(1)(e) Public Task / Article 9(2)(h) Health Provision",
    "rightsMatrix": {
      "rightToAccess": {
        "allowed": true,
        "slaDays": 30,
        "exemptionConditions": ["Serious Harm Test (Mental Health Act)"]
      },
      "rightToErasure": {
        "allowed": false,
        "rejectionReason": "Statutory Duty under NHS Records Management Code of Practice (8-year minimum retention)",
        "exceptionArticle": "GDPR Art. 17(3)(b) Compliance with legal obligation / Art. 17(3)(h) Public Health"
      },
      "rightToRectification": {
        "allowed": true,
        "processNotes": "Clinical notes rectification requires audit trail amendment rather than deletion"
      },
      "rightToDataPortability": {
        "allowed": false,
        "rejectionReason": "Portability only applies to Consent or Contractual basis under GDPR Art. 20",
        "exceptionArticle": "GDPR Art. 20(1)(a)"
      },
      "rightToObject": {
        "allowed": true,
        "evaluationRequirement": "Caldicott Guardian review required to assess public task override"
      },
      "rightToWithdrawConsent": {
        "allowed": false,
        "rejectionReason": "Processing is governed by Public Task / Statutory Duty, not individual consent"
      }
    }
  },
  "downstreamVendors": [
    {
      "vendorId": "VND-EPIC-01",
      "vendorName": "Epic Systems UK",
      "role": "Data Processor",
      "serviceProvided": "Core Electronic Medical Record hosting",
      "dpaSigned": true,
      "requiresErasurePropagation": false,
      "requiresRectificationPropagation": true,
      "contactEndpoint": "https://privacy-api.epic-uk.internal/v1/dsar"
    },
    {
      "vendorId": "VND-TWILIO-02",
      "vendorName": "Twilio Telehealth Video Gateway",
      "role": "Communication Sub-processor",
      "serviceProvided": "WebRTC Video consult stream relay",
      "dpaSigned": true,
      "requiresErasurePropagation": true,
      "requiresRectificationPropagation": false,
      "contactEndpoint": "https://api.twilio.com/v1/compliance/erasure"
    }
  ],
  "retentionRules": {
    "retentionPeriod": "8 years post discharge / 25 years for obstetric records",
    "triggerEvent": "Date of Last Patient Encounter",
    "disposalMechanism": "Cryptographic erasure & certified physical media degaussing",
    "activeStatutoryHold": true
  }
}
```

---

## 5. Lawful Basis ↔ Rights Matrix Enforcement Engine

A critical failure point in individual rights management is **granting rights that are legally prohibited** or **denying rights that are statutory**. GLOCAL PIA computes this deterministically via `LawfulBasisRightsEvaluation` and injects it into IROC:

| Lawful Basis (GDPR Art. 6 / 9) | Right to Access (Art. 15) | Right to Rectification (Art. 16) | Right to Erasure / RTBF (Art. 17) | Right to Portability (Art. 20) | Right to Object (Art. 21) | Right to Withdraw Consent (Art. 7) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| **Consent (Art. 6(1)(a))** | ✅ **ALLOWED** | ✅ **ALLOWED** | ✅ **ALLOWED** (Default) | ✅ **ALLOWED** (Machine-readable) | ❌ *N/A (Use Withdraw)* | ✅ **MANDATORY** |
| **Contract (Art. 6(1)(b))** | ✅ **ALLOWED** | ✅ **ALLOWED** | ⚠️ *RESTRICTED* (Pending active contract) | ✅ **ALLOWED** (Digital format) | ❌ *RESTRICTED* | ❌ *N/A* |
| **Legal Obligation (Art. 6(1)(c))** | ✅ **ALLOWED** | ✅ **ALLOWED** | 🚫 **BARRED** (Statutory duty overrides) | 🚫 **BARRED** | 🚫 **BARRED** | ❌ *N/A* |
| **Vital Interests (Art. 6(1)(d))** | ✅ **ALLOWED** | ✅ **ALLOWED** | 🚫 **BARRED** (Life-safety preservation) | 🚫 **BARRED** | 🚫 **BARRED** | ❌ *N/A* |
| **Public Task (Art. 6(1)(e))** | ✅ **ALLOWED** | ✅ **ALLOWED** | 🚫 **BARRED** (Exempt under Art. 17(3)(b)) | 🚫 **BARRED** | ⚠️ *CONDITIONAL* (Legitimate grounds) | ❌ *N/A* |
| **Legitimate Interests (Art. 6(1)(f))** | ✅ **ALLOWED** | ✅ **ALLOWED** | ⚠️ *CONDITIONAL* (Subject to objection) | 🚫 **BARRED** | ✅ **ALLOWED** (Balance of interests) | ❌ *N/A* |

### Automated IROC Pre-Flight Evaluation Logic
```typescript
/**
 * IROC Pre-Flight Rule Evaluation Engine
 * Invoked when an individual submits a Data Subject Right request.
 */
function evaluateDsarEligibility(requestType: 'ERASURE' | 'PORTABILITY' | 'ACCESS' | 'OBJECT', pia: PIAAssessment): { eligible: boolean; rationale: string; statutoryCitation?: string } {
  const lawfulBasis = pia.riskResult?.lawfulBasisEvaluation?.selectedBasis || '';
  const sector = pia.industrySector;

  // 1. Erasure Evaluation
  if (requestType === 'ERASURE') {
    if (lawfulBasis.includes('Legal Obligation') || lawfulBasis.includes('Public Task')) {
      return {
        eligible: false,
        rationale: 'Erasure cannot be granted because processing is required under statutory legal obligation / public duty.',
        statutoryCitation: 'GDPR Art. 17(3)(b) / DPA 2018'
      };
    }
    if (sector === 'healthcare' && pia.nhsChecklist?.commonLawConfidentiality?.statutoryBasis) {
      return {
        eligible: false,
        rationale: 'Health records are protected under NHS Records Management Code of Practice retention schedules.',
        statutoryCitation: 'NHS IG Principles / Health & Social Care Act'
      };
    }
    if (sector === 'pharma' && pia.answers['SEC_PHARMA_1']) {
      return {
        eligible: false,
        rationale: 'Clinical trial patient data must be archived for 25 years under trial safety and GCP regulations.',
        statutoryCitation: 'ICH GCP E6(R2) / EU CTR 536/2014 Art. 58'
      };
    }
    return { eligible: true, rationale: 'Standard erasure process applicable. Trigger downstream sub-processor deletion cascades.' };
  }

  // 2. Data Portability Evaluation
  if (requestType === 'PORTABILITY') {
    if (!lawfulBasis.includes('Consent') && !lawfulBasis.includes('Contract')) {
      return {
        eligible: false,
        rationale: 'Right to Data Portability only applies to data processed on the basis of Consent or Contract.',
        statutoryCitation: 'GDPR Art. 20(1)(a)'
      };
    }
    return { eligible: true, rationale: 'Export data in structured JSON / CSV format.' };
  }

  return { eligible: true, rationale: 'Standard request processing.' };
}
```

---

## 6. Operational Integration Workflows

### Workflow A: PIA Approval & System-of-Record Ingestion

```
  [Project Lead / DPO]
          │
          ▼
  1. Signs DPO Endorsement in GLOCAL PIA
          │
          ▼
  2. System changes status to "Approved"
          │
          ▼
  3. GLOCAL PIA generates SHA-256 Provenance Hash & compiles IROC Bundle
          │
          ├──▶ [REST Webhook]: POST https://iroc.internal/api/v1/ingest-pia
          └──▶ [Air-Gapped Backup]: Writes to ./data/iroc_bundles/{bid}.json
          │
          ▼
  4. IROC Ingestion Engine registers:
     - Application ID & Target Databases
     - Lawful Basis & Rights Rules
     - Active Data Retention Schedules
     - Sub-processor Notification Webhooks
```

---

### Workflow B: Dynamic DSAR Rights Eligibility Pre-Flight Check

```
  [Data Subject / Citizen] submits DSAR Portal Request (e.g. "Delete all my records")
          │
          ▼
  [IROC Intake Gateway] identifies Target System / Project Name
          │
          ▼
  [IROC Engine] queries GLOCAL PIA Ingestion Database:
     - Query: GET /api/pias/lookup?systemId=TeleHealth-Hub
          │
          ▼
  [Rights Matrix Engine Evaluates]:
     - Lawful Basis = Legal Obligation (NHS Records Act)
     - Erasure Allowed = FALSE
          │
          ├──▶ [Automatic Exemption Letter]: Formulates legally cited explanation to requester within 72 hrs
          └──▶ [Internal Log]: Records DPO-approved exemption with FID/BID reference for compliance audit
```

---

### Workflow C: Automated Downstream Vendor / Sub-Processor Propagation

When a valid **Right to Erasure (Art. 17)** or **Right to Rectification (Art. 16)** is approved:

```
  [IROC Orchestrator] approves valid Erasure Request
          │
          ├──▶ Step 1: Internal DB purge across all `whereStored` database instances
          │
          ├──▶ Step 2: Queries GLOCAL PIA `downstreamVendors` registry
          │
          ├──▶ Step 3: Loops through all Processors with `requiresErasurePropagation: true`:
          │      ├── Vendor 1 (Twilio Gateway) ──▶ POST /v1/compliance/erasure
          │      ├── Vendor 2 (Cloud Backup)   ──▶ Trigger S3 Lifecycle Deletion
          │      └── Vendor 3 (Analytics 3PL)  ──▶ Dispatch Encrypted Webhook
          │
          └──▶ Step 4: Compiles Article 19 Downstream Notification Proof Dossier
```

---

### Workflow D: Retention Schedule & Statutory Hold Validation

```
  [Automated IROC Scheduled Cron]
          │
          ▼
  1. Inspects active System of Record retention rules from GLOCAL PIA Section H
          │
          ▼
  2. Identifies datasets exceeding retention threshold (e.g., Encounter Date > 8 Years)
          │
          ▼
  3. Checks if an active Litigation Hold or Pharmacovigilance Flag exists:
          ├── [Flag Present]: Pauses purge, generates Alert to Legal Compliance
          └── [Flag Clear]: Executes automated cryptographic shredding & writes deletion certificate
```

---

## 7. API Endpoints & Integration Interface Contracts

GLOCAL PIA exposes dedicated REST endpoints designed for integration with IROC and enterprise privacy orchestration platforms.

### 1. Retrieve Single PIA in IROC-Compliant Format
- **Endpoint**: `GET /api/pias/:id/iroc-bundle`
- **Headers**:
  - `Authorization: Bearer <IROC_SERVICE_TOKEN>`
  - `Accept: application/json`
- **Response**: `200 OK` with full IROC JSON payload (Section 4).

### 2. Batch Query Active Systems of Record
- **Endpoint**: `GET /api/iroc/systems-catalog`
- **Query Parameters**:
  - `sector=healthcare|banking|retail` (Optional)
  - `status=Approved` (Default)
- **Response**:
```json
{
  "totalSystems": 14,
  "catalog": [
    {
      "systemName": "TeleHealth Web/Mobile Hub",
      "fid": "PIA-FE-2026-A8F9K2L1",
      "bid": "PIA-BE-UK-2026-000412",
      "version": "v2.0",
      "sector": "healthcare",
      "lawfulBasis": "Public Task / Statutory Duty",
      "erasureSupported": false,
      "portabilitySupported": false,
      "rectificationSupported": true,
      "storageLocations": ["UK South RDS", "PACS S3"],
      "lastUpdated": "2026-08-24T16:45:00Z"
    }
  ]
}
```

### 3. Real-Time DSAR Rights Pre-Flight Query
- **Endpoint**: `POST /api/iroc/preflight-rights-check`
- **Request Body**:
```json
{
  "bid": "PIA-BE-UK-2026-000412",
  "requestedRight": "ERASURE",
  "dataSubjectRole": "Patient",
  "jurisdiction": "UK GDPR"
}
```
- **Response**:
```json
{
  "eligible": false,
  "statusCode": "EXEMPTION_APPLIED",
  "legalBasis": "Article 6(1)(e) Public Task / Article 9(2)(h)",
  "applicableExemption": "GDPR Art. 17(3)(b) - Compliance with statutory health record retention duty",
  "suggestedResponseTemplate": "TEMPLATE_UK_HEALTH_RECORD_RETENTION_EXEMPTION",
  "provenanceHashVerified": true
}
```

---

## 8. Air-Gapped & On-Premise Synchronization Protocols

In classified, high-security, or defense-grade environments where GLOCAL PIA runs in a **strictly air-gapped network** with no direct HTTP bridge to the IROC:

```
┌─────────────────────────────────┐                 ┌─────────────────────────────────┐
│     AIR-GAPPED GLOCAL PIA       │                 │      ENTERPRISE IROC HUB        │
│   (On-Prem / Secure Enclave)    │                 │   (Connected Business Network)  │
│                                 │                 │                                 │
│  1. DPO Signs Off Assessment    │                 │                                 │
│  2. Export Signed IROC Package  │                 │                                 │
│     (PIA-BUNDLE-000412.tar.enc) │                 │                                 │
│  3. SHA-256 Digest Generated    │                 │                                 │
└────────────────┬────────────────┘                 └────────────────▲────────────────┘
                 │                                                   │
                 │      Secure Optical Diode / USB Token / File Drop │
                 └───────────────────────────────────────────────────┘
                                   │
                         Verification & Ingestion:
                         1. Decrypt Package with Private PGP Key
                         2. Verify SHA-256 Checksum against DPO Ledger
                         3. Ingest System Metadata & Rights Catalog
```

### Air-Gapped Ingestion Verification Script (CLI)
```bash
# Verify integrity of exported bundle before ingestion into IROC
openssl dgst -sha256 -verify dpo_public_key.pem -signature PIA-BUNDLE-000412.sig PIA-BUNDLE-000412.json

# If verified, import directly into IROC database
iroc-cli sync --source-bundle PIA-BUNDLE-000412.json --target-env production
```

---

## 9. Cryptographic Lineage & Audit Reconciliation

To ensure defensibility before regulatory authorities (ICO, CNIL, FTC, DPA), the IROC maintains an **immutable audit record** linking every fulfilled DSAR ticket back to the GLOCAL PIA provenance trail:

```sql
-- IROC Audit Log Schema for Regulatory Defense
CREATE TABLE IF NOT EXISTS iroc_dsar_fulfillment_logs (
    dsar_ticket_id VARCHAR(64) PRIMARY KEY,
    subject_identifier_hash VARCHAR(64) NOT NULL, -- SHA-256 salted hash of citizen email/ID
    request_type VARCHAR(32) NOT NULL,            -- ACCESS, ERASURE, PORTABILITY, OBJECT
    governing_pia_fid VARCHAR(64) NOT NULL,       -- GLOCAL PIA Frontend ID
    governing_pia_bid VARCHAR(64) NOT NULL,       -- GLOCAL PIA Backend Audit ID
    governing_pia_version VARCHAR(16) NOT NULL,   -- e.g. "v2.0"
    provenance_hash VARCHAR(64) NOT NULL,         -- SHA-256 Provenance Hash
    decision_outcome VARCHAR(32) NOT NULL,        -- FULFILLED, EXEMPTED, PARTIALLY_FULFILLED
    exemption_citation TEXT,                      -- Legal grounds if denied
    downstream_vendors_notified JSON,             -- List of 3PLs/Processors notified
    completed_timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
```

---

## 10. Security, Governance & Access Control

1. **Mutual TLS (mTLS) & Scoped Tokens**: All automated REST communications between GLOCAL PIA and IROC require mutual TLS certificates and scoped API service tokens.
2. **Zero PII Leakage in Lineage**: GLOCAL PIA metadata exchanged with IROC contains **system schemas, rules, and classifications**, never individual citizen PII records.
3. **Immutable Delta Tracking**: If a project's data flow changes in GLOCAL PIA (e.g. adding a new cloud sub-processor), the version increments (e.g., `v2.0` $\rightarrow$ `v2.1`), and an automated **Delta Ingestion Trigger** updates the IROC routing rules within 60 seconds.
4. **Role-Based Authorization (RBAC)**: Only authorized DPOs (`admin` role in GLOCAL PIA) can sign and publish IROC Ingestion Bundles.

---

## 📌 Summary Reference Table

| Capability | GLOCAL PIA Responsibility | IROC Responsibility |
| :--- | :--- | :--- |
| **System & Data Inventory** | Defines data stores, flows, and sensitivity (`StructuredDataFlow`). | Queries mapped stores during subject data discovery. |
| **Lawful Basis & Rights Rules** | Computes statutory rights matrix (`LawfulBasisRightsEvaluation`). | Enforces statutory exemptions and rights decisions. |
| **Sub-Processor Governance** | Catalogs vendors, 3PLs, CROs, and transfer mechanisms. | Dispatches downstream erasure/rectification notices. |
| **Retention & Statutory Holds** | Defines retention schedules and legal hold criteria. | Executes automated data purges and hold freezes. |
| **Audit Provenance** | Generates dual-IDs (`FID`/`BID`) and SHA-256 provenance hashes. | Stores cryptographic proof of compliance per DSAR ticket. |
