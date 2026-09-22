// AUTO-GENERATED BANKING PIA ASSESSMENTS DATASET
// Total: 76 assessments across all 8 subcategories in the Banking sector
// Generated on 2026-09-11T19:04:07.698Z

import { PIAAssessment, RemediationGap } from '../types';

export const BANKING_PIAS: PIAAssessment[] = [
  {
    "id": "PIA-2026-001",
    "fid": "PIA-FE-2026-B101",
    "bid": "PIA-BE-UK-2026-00101",
    "version": "v2.1",
    "workflowMode": "backend",
    "projectTitle": "Core Banking Multi-Currency Ledger Modernization",
    "organization": "Barclays Commercial Banking",
    "projectOwner": "Julian Vance (Head of Core Architecture)",
    "projectOwnerEmail": "julian.vance@barclays.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Migrating legacy mainframe customer deposit and wholesale ledger to high-throughput cloud-native microservices architecture supporting 45 global currencies with real-time settlement auditing.",
    "dataFlowDescription": "Customer IBANs, transaction timestamps, counterparty account details, and balance records stream over mTLS 1.3 Kafka event topics into encrypted ledger partitions.",
    "structuredDataFlow": {
      "whatApp": "Core multi-currency ledger and deposit accounting platform",
      "whyPia": "Architecture overhaul migrating over 12 million corporate accounts to modern distributed database",
      "howFlows": "API gateway -> Kafka event brokers -> Encrypted distributed database -> Real-time regulatory feed",
      "whenRecordStd": "ISO 20022 and BCBS 239 banking record retention rules (7 years statutory minimum)",
      "whereStored": "Private Banking Cloud on AWS (UK London eu-west-2 region) with hardware security module (HSM) encryption",
      "crossBorder": "EEA and UK adequacy corridor with strictly segregated EU entity ledgers"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-11-10T09:30:00Z",
    "updatedAt": "2026-06-14T15:20:00Z",
    "answers": {
      "A1": {
        "optionIndex": 0,
        "selectedLabel": "New Internal Project/System",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.2,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.7,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.7,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 2,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Julian Vance (Head of Core Architecture)",
        "signed": true,
        "signedDate": "2025-11-10T09:30:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-06-14T15:20:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1001",
        "timestamp": "2025-11-10T09:30:00Z",
        "triggeringFid": "PIA-FE-2026-B101",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Julian Vance (Head of Core Architecture))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New Internal Project/System",
            "rationale": "Initial banking New Internal Project/System privacy assessment submission"
          }
        ],
        "provenanceHash": "0x174876e800"
      },
      {
        "id": "PROV-1002",
        "timestamp": "2026-06-14T15:20:00Z",
        "triggeringFid": "PIA-FE-2026-B101",
        "backendBid": "PIA-BE-UK-2026-00101",
        "parentVersion": "v1.0",
        "newVersion": "v2.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + BCBS 239 Risk Data Aggregation + PRA Operational Resilience",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd18c2e2800"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "BCBS 239 Risk Data Aggregation",
        "PRA Operational Resilience"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-002",
    "fid": "PIA-FE-2026-B102",
    "bid": "PIA-BE-UK-2026-00102",
    "version": "v1.2",
    "workflowMode": "backend",
    "projectTitle": "SWIFT ISO 20022 High-Value Messaging Gateway",
    "organization": "HSBC Global Markets & Treasury",
    "projectOwner": "Marcus Thorne (Treasury Systems Lead)",
    "projectOwnerEmail": "marcus.thorne@hsbc.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Full migration of cross-border financial messaging to ISO 20022 MX format, requiring enriched originator and beneficiary PII data elements for wholesale payments.",
    "dataFlowDescription": "Enriched payment instructions containing structured remitter names, physical addresses, national tax IDs, and LEI identifiers parsed through real-time message validation hubs.",
    "structuredDataFlow": {
      "whatApp": "SWIFT MX Messaging Gateway and payment sanitization hub",
      "whyPia": "Mandatory international standard adoption capturing expanded personal data elements in wire instructions",
      "howFlows": "SWIFT Alliance Gateway -> Validation Parser -> Sanctions Screening Filter -> Core Settlement",
      "whenRecordStd": "FinCEN and FCA Travel Rule record-keeping requirements (5 years post settlement)",
      "whereStored": "On-premise Tier-4 Data Centre in Slough & redundant secondary in Gloucester",
      "crossBorder": "Global financial network routing across 110 countries under SWIFT Operating Regulations"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-10-04T11:00:00Z",
    "updatedAt": "2026-05-18T10:45:00Z",
    "answers": {
      "A1": {
        "optionIndex": 0,
        "selectedLabel": "New Internal Project/System",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Re-assessment of live system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 2,
        "selectedLabel": "Standard formal request procedure",
        "score": 3
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 2,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 3
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.2,
      "likelihoodScore": 1.3,
      "baseRiskScore": 4,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 4.8,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3,
        "legalComplianceRisk": 1.6,
        "dataSharingRisk": 2.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Marcus Thorne (Treasury Systems Lead)",
        "signed": true,
        "signedDate": "2025-10-04T11:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-05-18T10:45:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1003",
        "timestamp": "2025-10-04T11:00:00Z",
        "triggeringFid": "PIA-FE-2026-B102",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Marcus Thorne (Treasury Systems Lead))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New Internal Project/System",
            "rationale": "Initial banking New Internal Project/System privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1777850cfb"
      },
      {
        "id": "PROV-1004",
        "timestamp": "2026-05-18T10:45:00Z",
        "triggeringFid": "PIA-FE-2026-B102",
        "backendBid": "PIA-BE-UK-2026-00102",
        "parentVersion": "v1.0",
        "newVersion": "v1.2",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Travel Rule + FATF Recommendation 16",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd1a75e0d8d"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Travel Rule",
        "FATF Recommendation 16"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-003",
    "fid": "PIA-FE-2026-B103",
    "bid": "PIA-BE-UK-2026-00103",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Treasury Real-Time Liquidity Settlement Engine",
    "organization": "Standard Chartered Treasury Ops",
    "projectOwner": "Priya Narayanan (Liquidity Product VP)",
    "projectOwnerEmail": "priya.narayanan@sc.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Intraday multi-market liquidity monitoring system consolidating high-net-worth deposit volatility metrics and institutional cash buffer forecasting.",
    "dataFlowDescription": "Intraday account balances and wire obligations aggregated into columnar in-memory database with anonymized account hash mapping for treasury analysts.",
    "structuredDataFlow": {
      "whatApp": "Intraday Liquidity Settlement and Basel III LCR Monitor",
      "whyPia": "Deployment of consolidated telemetry monitoring high-frequency commercial capital movements",
      "howFlows": "Ledger stream -> In-memory analytics engine -> Treasury risk dashboard",
      "whenRecordStd": "7 years under Prudential Regulation Authority (PRA) liquidity reporting rules",
      "whereStored": "Microsoft Azure UK South financial enclave",
      "crossBorder": "Intra-group liquidity reporting between London and Singapore booking hubs"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2026-02-14T14:15:00Z",
    "updatedAt": "2026-07-02T09:00:00Z",
    "answers": {
      "A1": {
        "optionIndex": 0,
        "selectedLabel": "New Internal Project/System",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Design/development phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 0,
        "selectedLabel": "Strong field-level tokenization",
        "score": 1
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.1,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Priya Narayanan (Liquidity Product VP)",
        "signed": true,
        "signedDate": "2026-02-14T14:15:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1005",
        "timestamp": "2026-02-14T14:15:00Z",
        "triggeringFid": "PIA-FE-2026-B103",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Priya Narayanan (Liquidity Product VP))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New Internal Project/System",
            "rationale": "Initial banking New Internal Project/System privacy assessment submission"
          }
        ],
        "provenanceHash": "0x17a69331f6"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "PRA Rulebook (Liquidity)",
        "Basel III LCR"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-004",
    "fid": "PIA-FE-2026-B104",
    "bid": "PIA-BE-UK-2026-00104",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Sovereign Cloud Trade Finance Repository",
    "organization": "NatWest Corporate & Commercial",
    "projectOwner": "Gareth Evans (Trade Finance Tech Director)",
    "projectOwnerEmail": "gareth.evans@natwest.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Centralized repository of international trade documentation including bills of lading, corporate officer passports, and export control attestations.",
    "dataFlowDescription": "Commercial documentation encrypted at rest with customer-managed keys (CMK) and OCR indexing to verify ultimate beneficial ownership (UBO).",
    "structuredDataFlow": {
      "whatApp": "Trade Finance Document Vault & UBO Verification Service",
      "whyPia": "Storage of corporate director identity documents and sensitive bills of lading in sovereign cloud",
      "howFlows": "Customer document portal -> OCR extraction microservice -> Encrypted S3 bucket -> Audit logging",
      "whenRecordStd": "10 years under maritime trade and AML statutory retention regulations",
      "whereStored": "AWS UK Sovereign Cloud with dedicated HSM partition",
      "crossBorder": "Strictly restricted to UK data boundaries with cryptographic perimeter"
    },
    "industrySector": "banking",
    "status": "IN_REVISION",
    "createdAt": "2026-03-01T10:00:00Z",
    "updatedAt": "2026-06-25T16:40:00Z",
    "answers": {
      "A1": {
        "optionIndex": 0,
        "selectedLabel": "New Internal Project/System",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 2,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 3
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 2,
        "selectedLabel": "Standard formal request procedure",
        "score": 3
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.3,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.3,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.6,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Gareth Evans (Trade Finance Tech Director)",
        "signed": true,
        "signedDate": "2026-03-01T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1007",
        "timestamp": "2026-03-01T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B104",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Gareth Evans (Trade Finance Tech Director))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New Internal Project/System",
            "rationale": "Initial banking New Internal Project/System privacy assessment submission"
          }
        ],
        "provenanceHash": "0x17d5a156f1"
      },
      {
        "id": "PROV-1008",
        "timestamp": "2026-06-25T16:40:00Z",
        "triggeringFid": "PIA-FE-2026-B104",
        "backendBid": "PIA-BE-UK-2026-00104",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + Money Laundering Regulations 2017 + ICC UCP 600",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd1ddbdd8a7"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "Money Laundering Regulations 2017",
        "ICC UCP 600"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-005",
    "fid": "PIA-FE-2026-B105",
    "bid": "PIA-BE-UK-2026-00105",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "Retail Branch Teller Automation & Digital Cash Terminal",
    "organization": "Lloyds Banking Group Retail",
    "projectOwner": "Fiona Campbell (Branch Modernization Lead)",
    "projectOwnerEmail": "fiona.campbell@lloydsbanking.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Next-generation branch teller assist devices with customer card pin verification, smart deposit counting, and branch video telemetry.",
    "dataFlowDescription": "Customer debit card telemetry, debit pin transaction tokens, and cashier event stamps transmitted via private MPLS circuits to regional core.",
    "structuredDataFlow": {
      "whatApp": "Branch Teller Automation & Smart Cash Deposit Station",
      "whyPia": "Physical branch upgrade introducing digital capture of customer identity tokens at tellers",
      "howFlows": "Counter terminal -> Encrypted branch LAN -> Bank Private MPLS -> Central clearing engine",
      "whenRecordStd": "6 years financial transaction record standard",
      "whereStored": "On-premise branch hardware (transient) and central secure datacentres in Pudsey & Edinburgh",
      "crossBorder": "None (Domestic UK network only)"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-08-20T13:00:00Z",
    "updatedAt": "2026-04-10T11:20:00Z",
    "answers": {
      "A1": {
        "optionIndex": 0,
        "selectedLabel": "New Internal Project/System",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 0,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 1
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.1,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.1,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Fiona Campbell (Branch Modernization Lead)",
        "signed": true,
        "signedDate": "2025-08-20T13:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-04-10T11:20:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1009",
        "timestamp": "2025-08-20T13:00:00Z",
        "triggeringFid": "PIA-FE-2026-B105",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Fiona Campbell (Branch Modernization Lead))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New Internal Project/System",
            "rationale": "Initial banking New Internal Project/System privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1804af7bec"
      },
      {
        "id": "PROV-1010",
        "timestamp": "2026-04-10T11:20:00Z",
        "triggeringFid": "PIA-FE-2026-B105",
        "backendBid": "PIA-BE-UK-2026-00105",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + PCI-DSS v4.0 Level 1 + FCA Branch Access Standards",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd1f8edbe34"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "PCI-DSS v4.0 Level 1",
        "FCA Branch Access Standards"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-006",
    "fid": "PIA-FE-2026-B106",
    "bid": "PIA-BE-UK-2026-00106",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Wholesale Institutional FX Algorithmic Settlement Platform",
    "organization": "Citadel Banking & Financial Markets",
    "projectOwner": "Alexander Drake (Head of e-FX Clearing)",
    "projectOwnerEmail": "alex.drake@citadel-markets.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Low-latency foreign exchange execution platform processing continuous multi-asset matching and settlement for hedge fund and sovereign wealth clients.",
    "dataFlowDescription": "Trader names, FIX protocol trading IDs, authorized phone audio recordings, and order book timestamps stored in write-once-read-many (WORM) storage.",
    "structuredDataFlow": {
      "whatApp": "Institutional e-FX Matching Engine & Trade Confirmation Network",
      "whyPia": "Capture of licensed trader individual IDs and algorithmic trade execution audits",
      "howFlows": "Trading desk GUI -> FPGA Matching Engine -> Clearing house gateway -> WORM compliance vault",
      "whenRecordStd": "7 years under MiFID II and FCA Senior Managers Regime requirements",
      "whereStored": "Equinix LD4 Datacentre (Slough) co-location racks",
      "crossBorder": "London, New York, and Tokyo financial trading nodes via dedicated dark fibre"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2026-05-11T08:30:00Z",
    "updatedAt": "2026-06-30T14:10:00Z",
    "answers": {
      "A1": {
        "optionIndex": 0,
        "selectedLabel": "New Internal Project/System",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Design/development phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 2,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 3
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 2,
        "selectedLabel": "Standard formal request procedure",
        "score": 3
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.5,
      "likelihoodScore": 1.2,
      "baseRiskScore": 2.9,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 3.5,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.4,
        "legalComplianceRisk": 1.6,
        "dataSharingRisk": 2.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Alexander Drake (Head of e-FX Clearing)",
        "signed": true,
        "signedDate": "2026-05-11T08:30:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1011",
        "timestamp": "2026-05-11T08:30:00Z",
        "triggeringFid": "PIA-FE-2026-B106",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Alexander Drake (Head of e-FX Clearing))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New Internal Project/System",
            "rationale": "Initial banking New Internal Project/System privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1833bda0e7"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "MiFID II Art 16(6)",
        "FCA SYSC 9"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-007",
    "fid": "PIA-FE-2026-B107",
    "bid": "PIA-BE-UK-2026-00107",
    "version": "v1.3",
    "workflowMode": "backend",
    "projectTitle": "Centralized Enterprise Cloud Data Lakehouse",
    "organization": "Apex Global Commercial Bank",
    "projectOwner": "Elena Rostova (Chief Data Officer)",
    "projectOwnerEmail": "elena.rostova@apexbank-global.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Consolidating legacy retail, SME, and mortgage operational data stores into a centralized Snowflake cloud lakehouse for enterprise reporting and privacy governance.",
    "dataFlowDescription": "Nightly batch and streaming CDC pipelines extract client profile records, masked credit histories, and card transactions with automated column-level tokenization.",
    "structuredDataFlow": {
      "whatApp": "Enterprise Snowflake Data Lakehouse & Data Governance Fabric",
      "whyPia": "Centralization of over 8 million customer profiles across bank subsidiaries",
      "howFlows": "Source operational databases -> Apache Kafka CDC -> Immuta Dynamic Masking -> Snowflake Lakehouse",
      "whenRecordStd": "Configured dynamically by data domain (3 to 10 years per data classification policy)",
      "whereStored": "Snowflake on AWS London Region (eu-west-2)",
      "crossBorder": "Encrypted replication to AWS Ireland (eu-west-1) for disaster recovery only"
    },
    "industrySector": "banking",
    "status": "Remediation",
    "createdAt": "2025-12-05T14:00:00Z",
    "updatedAt": "2026-07-04T16:00:00Z",
    "answers": {
      "A1": {
        "optionIndex": 0,
        "selectedLabel": "New Internal Project/System",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 2
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 2,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 3
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.6,
      "likelihoodScore": 1.3,
      "baseRiskScore": 4.4,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 4.4,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.4,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 2.3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "C3",
          "questionTitle": "C3. Consent Withdrawal Mechanism",
          "score": 4,
          "section": "SECTION C: LAWFUL BASIS & FAIR PROCESSING"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Elena Rostova (Chief Data Officer)",
        "signed": true,
        "signedDate": "2025-12-05T14:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1013",
        "timestamp": "2025-12-05T14:00:00Z",
        "triggeringFid": "PIA-FE-2026-B107",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Elena Rostova (Chief Data Officer))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New Internal Project/System",
            "rationale": "Initial banking New Internal Project/System privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1862cbc5e2"
      },
      {
        "id": "PROV-1014",
        "timestamp": "2026-07-04T16:00:00Z",
        "triggeringFid": "PIA-FE-2026-B107",
        "backendBid": "PIA-BE-UK-2026-00107",
        "parentVersion": "v1.0",
        "newVersion": "v1.3",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + BCBS 239 + ISO 27001:2022",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd22f4d894e"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "BCBS 239",
        "ISO 27001:2022"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-008",
    "fid": "PIA-FE-2026-B108",
    "bid": "PIA-BE-UK-2026-00108",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Inter-Branch Physical Vault & Cash Telemetry System",
    "organization": "Santander UK Retail Operations",
    "projectOwner": "Simon Gallagher (Security & Vault Ops)",
    "projectOwnerEmail": "simon.gallagher@santander.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Smart electronic vault locks and biometric employee sign-on tracking physical movement of wholesale cash, gold bullion, and safe-deposit access logs.",
    "dataFlowDescription": "Employee biometric fingerprint templates, physical access badge serials, and safe-deposit customer escort logs transmitted to centralized bank security operations center.",
    "structuredDataFlow": {
      "whatApp": "Branch Vault Electronic Security & Safe Deposit Access Portal",
      "whyPia": "Collection of employee biometric credentials and safe deposit visitor telemetry",
      "howFlows": "Biometric reader on vault door -> Encrypted security bridge -> SOC event database",
      "whenRecordStd": "5 years post-visit under bank physical security and anti-theft rules",
      "whereStored": "On-premise security servers in Milton Keynes with encrypted offline magnetic tapes",
      "crossBorder": "None (Domestic UK operations)"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-09-12T10:15:00Z",
    "updatedAt": "2026-03-22T13:40:00Z",
    "answers": {
      "A1": {
        "optionIndex": 0,
        "selectedLabel": "New Internal Project/System",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Back-office/internal only",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 1,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 2
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 3,
        "selectedLabel": "Biometric data for identification",
        "score": 5
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 0,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 1
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3,
      "likelihoodScore": 1.1,
      "baseRiskScore": 3.2,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1.3,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.3
      },
      "finalRiskScore": 4.2,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.2,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Simon Gallagher (Security & Vault Ops)",
        "signed": true,
        "signedDate": "2025-09-12T10:15:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-03-22T13:40:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1015",
        "timestamp": "2025-09-12T10:15:00Z",
        "triggeringFid": "PIA-FE-2026-B108",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Simon Gallagher (Security & Vault Ops))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New Internal Project/System",
            "rationale": "Initial banking New Internal Project/System privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1891d9eadd"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "Special Category Biometric Policy Rule",
        "BS 7858 Security Screening"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-009",
    "fid": "PIA-FE-2026-B109",
    "bid": "PIA-BE-UK-2026-00109",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Single Customer View (SCV) Regulatory Consolidation",
    "organization": "Metro Bank Enterprise Operations",
    "projectOwner": "Nathalie Dupont (Regulatory Reporting VP)",
    "projectOwnerEmail": "nathalie.dupont@metrobankplc.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Automated single customer view reporting engine mandated by the Financial Services Compensation Scheme (FSCS) to identify eligible depositors within 24 hours of default.",
    "dataFlowDescription": "Extracts real-time national insurance numbers, aggregate balances across accounts, permanent residences, and legal power of attorney assignments.",
    "structuredDataFlow": {
      "whatApp": "FSCS Single Customer View (SCV) Generator",
      "whyPia": "Consolidation of full customer identity and wealth holdings for regulatory solvency contingency",
      "howFlows": "Nightly staging extract -> Entity resolution engine -> SCV secure file format generator",
      "whenRecordStd": "Continuously maintained with immediate 24-hour delivery capability",
      "whereStored": "Internal High-Security Tier-3 Datacentre (London)",
      "crossBorder": "None"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-07-15T09:00:00Z",
    "updatedAt": "2026-05-30T11:00:00Z",
    "answers": {
      "A1": {
        "optionIndex": 0,
        "selectedLabel": "New Internal Project/System",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Re-assessment of live system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 2,
        "selectedLabel": "Standard formal request procedure",
        "score": 3
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 0,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 1
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3,
      "likelihoodScore": 1.1,
      "baseRiskScore": 3.3,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.3,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.6,
        "dataSharingRisk": 1.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Nathalie Dupont (Regulatory Reporting VP)",
        "signed": true,
        "signedDate": "2025-07-15T09:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-05-30T11:00:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1017",
        "timestamp": "2025-07-15T09:00:00Z",
        "triggeringFid": "PIA-FE-2026-B109",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Nathalie Dupont (Regulatory Reporting VP))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New Internal Project/System",
            "rationale": "Initial banking New Internal Project/System privacy assessment submission"
          }
        ],
        "provenanceHash": "0x18c0e80fd8"
      },
      {
        "id": "PROV-1018",
        "timestamp": "2026-05-30T11:00:00Z",
        "triggeringFid": "PIA-FE-2026-B109",
        "backendBid": "PIA-BE-UK-2026-00109",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + PRA Rulebook FSCS Protection + FCA SUP 16",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd265ad5468"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "PRA Rulebook FSCS Protection",
        "FCA SUP 16"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-010",
    "fid": "PIA-FE-2026-B110",
    "bid": "PIA-BE-UK-2026-00110",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Syndicated Loan Distributed Ledger Infrastructure",
    "organization": "BNP Paribas Wholesale London Branch",
    "projectOwner": "Etienne Moreau (Syndications Technology)",
    "projectOwnerEmail": "etienne.moreau@bnpparibas.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Permissioned enterprise blockchain ledger coordinating multi-bank syndicated loan participation, drawdown requests, and borrower covenants.",
    "dataFlowDescription": "Corporate borrower financial statements, director passport copies, debt amortization schedules, and participant bank signing authorizations replicated across permissioned nodes.",
    "structuredDataFlow": {
      "whatApp": "Multi-Bank Syndicated Loan Settlement Ledger (R3 Corda)",
      "whyPia": "Sharing of high-value credit underwriting documents across 12 syndicate lenders",
      "howFlows": "Arranging bank node -> Cryptographic peer-to-peer notary -> Syndicate participant nodes",
      "whenRecordStd": "12 years post-loan maturity under commercial deeds limitation",
      "whereStored": "Private cloud nodes hosted in Frankfurt and London financial datacentres",
      "crossBorder": "Cross-border syndicate member nodes across UK, France, Germany, and Switzerland"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2026-03-18T16:00:00Z",
    "updatedAt": "2026-07-01T10:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 0,
        "selectedLabel": "New Internal Project/System",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Design/development phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 1,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 2
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 2,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 3
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.3,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.3,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.4,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2.3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "D2",
          "questionTitle": "D2. Pseudonymization/Anonymization",
          "score": 3,
          "section": "SECTION D: DATA MINIMIZATION & COLLECTION"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Etienne Moreau (Syndications Technology)",
        "signed": true,
        "signedDate": "2026-03-18T16:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1019",
        "timestamp": "2026-03-18T16:00:00Z",
        "triggeringFid": "PIA-FE-2026-B110",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Etienne Moreau (Syndications Technology))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New Internal Project/System",
            "rationale": "Initial banking New Internal Project/System privacy assessment submission"
          }
        ],
        "provenanceHash": "0x18eff634d3"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU GDPR",
        "LMA Syndicated Loan Documentation Standard"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-011",
    "fid": "PIA-FE-2026-B201",
    "bid": "PIA-BE-UK-2026-00201",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "Real-Time Cross-Border Wire AML Screening Workflow",
    "organization": "JPMorgan Chase EMEA Treasury Operations",
    "projectOwner": "Claire Holloway (FinCrime Head)",
    "projectOwnerEmail": "claire.holloway@jpmorgan.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Enhancing the automated screening of outbound SWIFT transactions against OFAC, EU, and UK Sanctions lists with low-latency fuzzy matching.",
    "dataFlowDescription": "Originator and beneficiary names, addresses, and transaction narratives matched against global sanction watchlists within 350ms of wire submission.",
    "structuredDataFlow": {
      "whatApp": "Real-Time Wire Sanctions Screening Gateway",
      "whyPia": "Process revision introducing secondary automated screening tiers with automated blocking triggers",
      "howFlows": "Payment queue -> Kafka sanctions filter -> Match triage queue -> Clearance / Hold decision",
      "whenRecordStd": "5 years mandatory under UK Sanctions and Anti-Money Laundering Act (SAMLA)",
      "whereStored": "JPMorgan Private Cloud (Bournemouth & Frankfurt)",
      "crossBorder": "Escalation to global sanctions clearance team in New York under UK SCCs"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-11-28T09:00:00Z",
    "updatedAt": "2026-06-19T14:20:00Z",
    "answers": {
      "A1": {
        "optionIndex": 1,
        "selectedLabel": "Process Change/Improvement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 2,
        "selectedLabel": "Standard formal request procedure",
        "score": 3
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.5,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 4.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.8,
        "legalComplianceRisk": 1.6,
        "dataSharingRisk": 2.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Claire Holloway (FinCrime Head)",
        "signed": true,
        "signedDate": "2025-11-28T09:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-06-19T14:20:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1021",
        "timestamp": "2025-11-28T09:00:00Z",
        "triggeringFid": "PIA-FE-2026-B201",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Claire Holloway (FinCrime Head))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Process Change/Improvement",
            "rationale": "Initial banking Process Change/Improvement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x191f0459ce"
      },
      {
        "id": "PROV-1022",
        "timestamp": "2026-06-19T14:20:00Z",
        "triggeringFid": "PIA-FE-2026-B201",
        "backendBid": "PIA-BE-UK-2026-00201",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + UK SAMLA 2018 + OFAC Regulations",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd29c0d1f82"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "UK SAMLA 2018",
        "OFAC Regulations"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-012",
    "fid": "PIA-FE-2026-B202",
    "bid": "PIA-BE-UK-2026-00202",
    "version": "v1.2",
    "workflowMode": "backend",
    "projectTitle": "Perpetual KYC & Ongoing Customer Due Diligence",
    "organization": "Deutsche Bank UK Wealth Management",
    "projectOwner": "Sebastian Vogel (Wealth Compliance Director)",
    "projectOwnerEmail": "sebastian.vogel@db.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Transitioning from periodic 3-year manual KYC reviews to continuous event-driven customer due diligence monitoring public registries, adverse media, and corporate changes.",
    "dataFlowDescription": "Client identity profiles, wealth source attestations, and corporate registry feeds polled continuously to flag risk rating revisions.",
    "structuredDataFlow": {
      "whatApp": "Continuous Perpetual KYC (pKYC) Orchestration Engine",
      "whyPia": "Process change from periodic static review to 24/7 automated continuous surveillance of client status",
      "howFlows": "Corporate registry APIs -> Entity matching engine -> Risk scoring recalculator -> Analyst queue",
      "whenRecordStd": "5 years after customer relationship termination",
      "whereStored": "Private Cloud on Microsoft Azure (Frankfurt & London)",
      "crossBorder": "Cross-border data access for compliance staff in UK, Germany, and Switzerland"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2026-01-15T11:30:00Z",
    "updatedAt": "2026-06-28T16:00:00Z",
    "answers": {
      "A1": {
        "optionIndex": 1,
        "selectedLabel": "Process Change/Improvement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 2,
        "selectedLabel": "Standard formal request procedure",
        "score": 3
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.9,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.9,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.6,
        "legalComplianceRisk": 1.6,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Sebastian Vogel (Wealth Compliance Director)",
        "signed": true,
        "signedDate": "2026-01-15T11:30:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1023",
        "timestamp": "2026-01-15T11:30:00Z",
        "triggeringFid": "PIA-FE-2026-B202",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Sebastian Vogel (Wealth Compliance Director))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Process Change/Improvement",
            "rationale": "Initial banking Process Change/Improvement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x194e127ec9"
      },
      {
        "id": "PROV-1024",
        "timestamp": "2026-06-28T16:00:00Z",
        "triggeringFid": "PIA-FE-2026-B202",
        "backendBid": "PIA-BE-UK-2026-00202",
        "parentVersion": "v1.0",
        "newVersion": "v1.2",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU 6AMLD + JMLSG Guidance Part I",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd2b73d050f"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU 6AMLD",
        "JMLSG Guidance Part I"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-013",
    "fid": "PIA-FE-2026-B203",
    "bid": "PIA-BE-UK-2026-00203",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "High-Net-Worth Wealth Advisory Onboarding Process",
    "organization": "UBS Private Banking London",
    "projectOwner": "Charlotte De-Clercq (HNW Onboarding Head)",
    "projectOwnerEmail": "charlotte.declercq@ubs.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Digital overhaul of the high-net-worth client onboarding process, replacing paper binders with secure tablet-based source-of-wealth documentation.",
    "dataFlowDescription": "Tax declarations, estate trust deeds, offshore company structures, and photographic identity documents uploaded via encrypted client portal.",
    "structuredDataFlow": {
      "whatApp": "Wealth Client Digital Dossier & Onboarding Suite",
      "whyPia": "Digital conversion of highly sensitive ultra-high-net-worth personal and tax records",
      "howFlows": "Advisor iPad app -> Encrypted TLS tunnel -> Core Swiss/UK wealth repository -> Sign-off workflow",
      "whenRecordStd": "10 years post-relationship termination under wealth advisory statute",
      "whereStored": "UBS Private Cloud enclave in Zurich and London",
      "crossBorder": "Bilateral processing between London booking branch and Zurich parent bank"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2026-04-02T13:45:00Z",
    "updatedAt": "2026-06-20T10:15:00Z",
    "answers": {
      "A1": {
        "optionIndex": 1,
        "selectedLabel": "Process Change/Improvement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Customer-facing service",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Design/development phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 2,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 3
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.2,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.7,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.7,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Charlotte De-Clercq (HNW Onboarding Head)",
        "signed": true,
        "signedDate": "2026-04-02T13:45:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1025",
        "timestamp": "2026-04-02T13:45:00Z",
        "triggeringFid": "PIA-FE-2026-B203",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Charlotte De-Clercq (HNW Onboarding Head))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Process Change/Improvement",
            "rationale": "Initial banking Process Change/Improvement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x197d20a3c4"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "Swiss FADP",
        "FCA COBS 9 Suitability"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-014",
    "fid": "PIA-FE-2026-B204",
    "bid": "PIA-BE-UK-2026-00204",
    "version": "v2.1",
    "workflowMode": "backend",
    "projectTitle": "Automated Mortgage Fast-Track Valuation & Approval",
    "organization": "Halifax Mortgage Services (Lloyds Group)",
    "projectOwner": "Martin Briggs (Mortgage Innovation VP)",
    "projectOwnerEmail": "martin.briggs@halifax.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Accelerating mortgage decisioning from 14 days to under 48 hours using automated desktop valuation models (AVM) and open banking bank-statement verification.",
    "dataFlowDescription": "Borrower payslips, 12 months open banking transaction histories, Land Registry title data, and credit bureau scores aggregated into automated credit decisioning engine.",
    "structuredDataFlow": {
      "whatApp": "Automated Mortgage Decision Engine (AMDE)",
      "whyPia": "Major process improvement incorporating open banking transaction harvesting for instant underwriting",
      "howFlows": "Broker portal -> Open Banking AISP fetch -> Automated Valuation Model -> Underwriter console",
      "whenRecordStd": "Duration of mortgage term plus 7 years post-redemption",
      "whereStored": "Lloyds Banking Group Secure Cloud on AWS eu-west-2",
      "crossBorder": "None (UK domestic mortgages only)"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-10-18T10:00:00Z",
    "updatedAt": "2026-05-12T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 1,
        "selectedLabel": "Process Change/Improvement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.2,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.7,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.7,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Martin Briggs (Mortgage Innovation VP)",
        "signed": true,
        "signedDate": "2025-10-18T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-05-12T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1027",
        "timestamp": "2025-10-18T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B204",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Martin Briggs (Mortgage Innovation VP))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Process Change/Improvement",
            "rationale": "Initial banking Process Change/Improvement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x19ac2ec8bf"
      },
      {
        "id": "PROV-1028",
        "timestamp": "2026-05-12T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B204",
        "backendBid": "PIA-BE-UK-2026-00204",
        "parentVersion": "v1.0",
        "newVersion": "v2.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA MCOB (Mortgages) + Open Banking Regulations",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd2ed9cd029"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA MCOB (Mortgages)",
        "Open Banking Regulations"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-015",
    "fid": "PIA-FE-2026-B205",
    "bid": "PIA-BE-UK-2026-00205",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Credit Card Fraud Chargeback & Dispute Resolution",
    "organization": "Barclaycard Consumer Services",
    "projectOwner": "Danielle Cooper (Head of Customer Operations)",
    "projectOwnerEmail": "danielle.cooper@barclaycard.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Streamlining customer unauthorized transaction disputes by integrating Visa/Mastercard claim portals with in-app self-service evidence submission.",
    "dataFlowDescription": "Customer chargeback declarations, geolocation receipt data, merchant communication transcripts, and card PAN tokens transmitted through Visa Resolve Online (VROL).",
    "structuredDataFlow": {
      "whatApp": "Self-Service Dispute & Chargeback Management Engine",
      "whyPia": "Process change enabling mobile app customer evidence submission with direct card network linkage",
      "howFlows": "Barclaycard App -> Dispute API -> Core Card Processor -> Visa/Mastercard Network Gateway",
      "whenRecordStd": "6 years financial dispute records standard",
      "whereStored": "On-premise core card vault (Northampton) and AWS UK cloud",
      "crossBorder": "Dispute evidence transmitted to overseas acquiring banks via card schemes"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-01-20T14:30:00Z",
    "updatedAt": "2026-06-11T12:00:00Z",
    "answers": {
      "A1": {
        "optionIndex": 1,
        "selectedLabel": "Process Change/Improvement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Customer-facing service",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Re-assessment of live system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.2,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.7,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 4.4,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Danielle Cooper (Head of Customer Operations)",
        "signed": true,
        "signedDate": "2026-01-20T14:30:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-06-11T12:00:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1029",
        "timestamp": "2026-01-20T14:30:00Z",
        "triggeringFid": "PIA-FE-2026-B205",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Danielle Cooper (Head of Customer Operations))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Process Change/Improvement",
            "rationale": "Initial banking Process Change/Improvement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x19db3cedba"
      },
      {
        "id": "PROV-1030",
        "timestamp": "2026-06-11T12:00:00Z",
        "triggeringFid": "PIA-FE-2026-B205",
        "backendBid": "PIA-BE-UK-2026-00205",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + PCI-DSS v4.0 + Visa Core Rules & Chargeback Guides",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd308ccb5b6"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "PCI-DSS v4.0",
        "Visa Core Rules & Chargeback Guides"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-016",
    "fid": "PIA-FE-2026-B206",
    "bid": "PIA-BE-UK-2026-00206",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Corporate Escrow Account Lifecycle Automation",
    "organization": "Standard Chartered Commercial Escrow",
    "projectOwner": "Tanmay Saxena (Escrow Operations Lead)",
    "projectOwnerEmail": "tanmay.saxena@sc.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Automating multi-party escrow agreement execution, dual-authorization fund releases, and KYC verification for mergers and acquisitions transactions.",
    "dataFlowDescription": "Solicitor ID credentials, client escrow mandate contracts, digital signatures, and high-value wire release authorizations tracked in tamper-evident workflow engine.",
    "structuredDataFlow": {
      "whatApp": "Corporate M&A Escrow Lifecycle Engine",
      "whyPia": "Transition from manual email/fax escrow release instructions to verified digital portal",
      "howFlows": "Legal counsel web portal -> 2FA SMS/Biometric confirmation -> Core Escrow Ledger -> Wire Execution",
      "whenRecordStd": "12 years post-contract execution under UK deeds rules",
      "whereStored": "Private cloud on Azure (London & Singapore)",
      "crossBorder": "Cross-border M&A transactions involving European and Asian buyer entities"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2026-03-25T11:00:00Z",
    "updatedAt": "2026-06-15T09:45:00Z",
    "answers": {
      "A1": {
        "optionIndex": 1,
        "selectedLabel": "Process Change/Improvement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Design/development phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 2,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 3
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.3,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.3,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Tanmay Saxena (Escrow Operations Lead)",
        "signed": true,
        "signedDate": "2026-03-25T11:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1031",
        "timestamp": "2026-03-25T11:00:00Z",
        "triggeringFid": "PIA-FE-2026-B206",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Tanmay Saxena (Escrow Operations Lead))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Process Change/Improvement",
            "rationale": "Initial banking Process Change/Improvement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1a0a4b12b5"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "SRA Accounts Rules",
        "FCA Client Assets (CASS)"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-017",
    "fid": "PIA-FE-2026-B207",
    "bid": "PIA-BE-UK-2026-00207",
    "version": "v1.4",
    "workflowMode": "backend",
    "projectTitle": "PEP & Sanctions False Positive Triaging Protocol",
    "organization": "HSBC Financial Crime Operations",
    "projectOwner": "Oliver Vance (Global Sanctions Officer)",
    "projectOwnerEmail": "oliver.vance@hsbc.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Redesigning the alert clearance procedure for Politically Exposed Persons (PEPs) by integrating automated biographical disambiguation and passport OCR matching.",
    "dataFlowDescription": "Customer full names, dates of birth, country of origin, political office history, and close associate records cross-referenced against Refinitiv World-Check.",
    "structuredDataFlow": {
      "whatApp": "Sanctions False Positive Triaging Workflow",
      "whyPia": "Process change reducing false-positive customer account freezes from 3 days to under 1 hour",
      "howFlows": "Alert generator -> Disambiguation engine -> L2 investigator workbench -> Clearance sign-off",
      "whenRecordStd": "7 years under international anti-money laundering and CFT mandates",
      "whereStored": "HSBC Universal Cloud Datacentres in Sheffield and Markham",
      "crossBorder": "Global triage operations shared across UK, Poland, and India operational centers"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-08-14T10:00:00Z",
    "updatedAt": "2026-05-24T17:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 1,
        "selectedLabel": "Process Change/Improvement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Re-assessment of live system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 2,
        "selectedLabel": "Standard formal request procedure",
        "score": 3
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 2,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 3
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.5,
      "likelihoodScore": 1.3,
      "baseRiskScore": 4.4,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 5.3,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.8,
        "legalComplianceRisk": 1.6,
        "dataSharingRisk": 2.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Oliver Vance (Global Sanctions Officer)",
        "signed": true,
        "signedDate": "2025-08-14T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-05-24T17:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1033",
        "timestamp": "2025-08-14T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B207",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Oliver Vance (Global Sanctions Officer))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Process Change/Improvement",
            "rationale": "Initial banking Process Change/Improvement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1a395937b0"
      },
      {
        "id": "PROV-1034",
        "timestamp": "2026-05-24T17:30:00Z",
        "triggeringFid": "PIA-FE-2026-B207",
        "backendBid": "PIA-BE-UK-2026-00207",
        "parentVersion": "v1.0",
        "newVersion": "v1.4",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Financial Crime Guide + FATF Recommendations",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd33f2c80d0"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Financial Crime Guide",
        "FATF Recommendations"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-018",
    "fid": "PIA-FE-2026-B208",
    "bid": "PIA-BE-UK-2026-00208",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Inward Cheque Image Exchange & Clearing Process",
    "organization": "NatWest Payments & Clearing Ops",
    "projectOwner": "Rachel Higgins (Clearing Operations)",
    "projectOwnerEmail": "rachel.higgins@natwest.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Migrating branch and mobile cheque deposit verification to the UK Image Clearing System (ICS) with automatic signature matching and fraud deterrence.",
    "dataFlowDescription": "High-resolution cheque front/back scans, handwritten drawer signatures, sort codes, account numbers, and payee names transmitted to the central ICS clearing hub.",
    "structuredDataFlow": {
      "whatApp": "Cheque Image Clearing System (ICS) Gateway",
      "whyPia": "Transition from physical paper transportation to digital image exchange across clearing banks",
      "howFlows": "Mobile scan / Branch scanner -> OCR magnetic ink parser -> ICS central hub -> Drawee bank verification",
      "whenRecordStd": "6 years statutory limitation for negotiable instruments",
      "whereStored": "NatWest Edinburgh Secure Data Enclave",
      "crossBorder": "None (UK Cheque and Credit Clearing Company domain)"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-11-03T15:20:00Z",
    "updatedAt": "2026-04-18T09:15:00Z",
    "answers": {
      "A1": {
        "optionIndex": 1,
        "selectedLabel": "Process Change/Improvement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.5,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Rachel Higgins (Clearing Operations)",
        "signed": true,
        "signedDate": "2025-11-03T15:20:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-04-18T09:15:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1035",
        "timestamp": "2025-11-03T15:20:00Z",
        "triggeringFid": "PIA-FE-2026-B208",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Rachel Higgins (Clearing Operations))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Process Change/Improvement",
            "rationale": "Initial banking Process Change/Improvement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1a68675cab"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "Bills of Exchange Act 1882",
        "Pay.UK ICS Rules"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-019",
    "fid": "PIA-FE-2026-B209",
    "bid": "PIA-BE-UK-2026-00209",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Dormant Account Reactivation & Asset Recovery",
    "organization": "Lloyds Private Wealth Management",
    "projectOwner": "Christopher Bell (Asset Reclaim Team)",
    "projectOwnerEmail": "christopher.bell@lloydsbanking.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Updated process tracing beneficiaries and next of kin for accounts inactive for over 15 years, prior to statutory transfer to the Reclaim Fund.",
    "dataFlowDescription": "Deceased client death certificates, probate registry extracts, heir family trees, National Insurance numbers, and historical postal addresses.",
    "structuredDataFlow": {
      "whatApp": "Dormant Asset Tracing & Heir Verification Workflow",
      "whyPia": "Process change integrating external tracing agencies to reunite lost depositors with funds",
      "howFlows": "Dormant ledger -> Genealogist investigator portal -> Probate verification -> Account reactivation",
      "whenRecordStd": "Permanent record of account final closure or transfer to Dormant Assets Scheme",
      "whereStored": "Lloyds Tier-4 datacentre (Chester) with restricted probate access permissions",
      "crossBorder": "Tracing international heirs residing in Australia, Canada, and EU countries"
    },
    "industrySector": "banking",
    "status": "IN_REVISION",
    "createdAt": "2026-02-18T10:30:00Z",
    "updatedAt": "2026-06-22T11:45:00Z",
    "answers": {
      "A1": {
        "optionIndex": 1,
        "selectedLabel": "Process Change/Improvement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Back-office/internal only",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 2,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 3
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 2,
        "selectedLabel": "Standard formal request procedure",
        "score": 3
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 2,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 3
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.6,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.6,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.6,
        "dataSharingRisk": 2.3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "C3",
          "questionTitle": "C3. Consent Withdrawal Mechanism",
          "score": 3,
          "section": "SECTION C: LAWFUL BASIS & FAIR PROCESSING"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Christopher Bell (Asset Reclaim Team)",
        "signed": true,
        "signedDate": "2026-02-18T10:30:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1037",
        "timestamp": "2026-02-18T10:30:00Z",
        "triggeringFid": "PIA-FE-2026-B209",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Christopher Bell (Asset Reclaim Team))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Process Change/Improvement",
            "rationale": "Initial banking Process Change/Improvement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1a977581a6"
      },
      {
        "id": "PROV-1038",
        "timestamp": "2026-06-22T11:45:00Z",
        "triggeringFid": "PIA-FE-2026-B209",
        "backendBid": "PIA-BE-UK-2026-00209",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + Dormant Assets Act 2022 + Administration of Estates Act",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd3758c4bea"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "Dormant Assets Act 2022",
        "Administration of Estates Act"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-020",
    "fid": "PIA-FE-2026-B210",
    "bid": "PIA-BE-UK-2026-00210",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Cross-Border FX Margin & Fee Transparency Protocol",
    "organization": "Santander Global FX Services",
    "projectOwner": "Beatriz Morales (FX Regulatory Lead)",
    "projectOwnerEmail": "beatriz.morales@santander.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Implementation of the EU Cross-Border Payments Regulation (CBPR2) real-time currency conversion markup disclosure workflow in customer digital channels.",
    "dataFlowDescription": "Customer transaction amounts, recipient currency choice, ECB reference rate comparison, and pre-payment fee consent acknowledgements logged in audit stream.",
    "structuredDataFlow": {
      "whatApp": "FX Currency Conversion Markup Transparency Service",
      "whyPia": "Regulatory requirement to present dynamic markup comparison prior to payment authorization",
      "howFlows": "Payment initiation screen -> FX rate quote service -> Client acknowledgement log -> Core payment",
      "whenRecordStd": "5 years under FCA and EU consumer financial transparency rules",
      "whereStored": "Santander European Cloud Infrastructure (Madrid & London)",
      "crossBorder": "Continuous data synchronisation between UK and EU entities"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-09-29T14:00:00Z",
    "updatedAt": "2026-04-05T16:10:00Z",
    "answers": {
      "A1": {
        "optionIndex": 1,
        "selectedLabel": "Process Change/Improvement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Customer-facing service",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.3,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.3,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Beatriz Morales (FX Regulatory Lead)",
        "signed": true,
        "signedDate": "2025-09-29T14:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-04-05T16:10:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1039",
        "timestamp": "2025-09-29T14:00:00Z",
        "triggeringFid": "PIA-FE-2026-B210",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Beatriz Morales (FX Regulatory Lead))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Process Change/Improvement",
            "rationale": "Initial banking Process Change/Improvement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1ac683a6a1"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU CBPR2 Regulation 2019/518",
        "FCA PSRs 2017"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-021",
    "fid": "PIA-FE-2026-B121",
    "bid": "PIA-BE-UK-2026-1021",
    "version": "v2.0",
    "workflowMode": "frontend",
    "projectTitle": "NextGen Mobile Retail Banking App v6.0",
    "organization": "HSBC Global Markets & Treasury",
    "projectOwner": "Julian Vance (Head of Core Architecture)",
    "projectOwnerEmail": "julian.vance@barclays.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Native iOS & Android mobile banking client supporting biometrics, virtual cards, and instant peer-to-peer payments.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "NextGen Mobile Retail Banking App v6.0",
      "whyPia": "PIA governance review for banking new/changed application in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Draft",
    "createdAt": "2026-04-13T10:00:00Z",
    "updatedAt": "2026-06-13T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 2,
        "selectedLabel": "New/Changed Application",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Initial concept/planning phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.9,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.9,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Julian Vance (Head of Core Architecture)",
        "signed": true,
        "signedDate": "2026-04-13T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1041",
        "timestamp": "2026-04-13T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B121",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Julian Vance (Head of Core Architecture))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New/Changed Application",
            "rationale": "Initial banking New/Changed Application privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1af591cb9c"
      },
      {
        "id": "PROV-1042",
        "timestamp": "2026-06-13T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B121",
        "backendBid": "PIA-BE-UK-2026-1021",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd3abec1704"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-022",
    "fid": "PIA-FE-2026-B122",
    "bid": "PIA-BE-UK-2026-1022",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Corporate Cash Management & Treasury Portal",
    "organization": "Standard Chartered Corporate",
    "projectOwner": "Elena Rostova (Chief Data Officer)",
    "projectOwnerEmail": "elena.rostova@apexbank-global.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Secure web application for corporate treasurers executing multi-million sterling liquidity sweeps and payroll batches.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Corporate Cash Management & Treasury Portal",
      "whyPia": "PIA governance review for banking new/changed application in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-07-20T10:00:00Z",
    "updatedAt": "2026-09-20T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 2,
        "selectedLabel": "New/Changed Application",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.1,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Elena Rostova (Chief Data Officer)",
        "signed": true,
        "signedDate": "2026-07-20T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-09-20T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1043",
        "timestamp": "2026-07-20T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B122",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Elena Rostova (Chief Data Officer))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New/Changed Application",
            "rationale": "Initial banking New/Changed Application privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1b249ff097"
      },
      {
        "id": "PROV-1044",
        "timestamp": "2026-09-20T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B122",
        "backendBid": "PIA-BE-UK-2026-1022",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd3c71bfc91"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-023",
    "fid": "PIA-FE-2026-B123",
    "bid": "PIA-BE-UK-2026-1023",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Open Banking PSD2/PSD3 AISP & PISP API Gateway",
    "organization": "NatWest Corporate & Commercial",
    "projectOwner": "Sebastian Vogel (Wealth Compliance Director)",
    "projectOwnerEmail": "sebastian.vogel@db.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Regulatory API platform exposing account information and payment initiation to authorized third-party fintech providers.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Open Banking PSD2/PSD3 AISP & PISP API Gateway",
      "whyPia": "PIA governance review for banking new/changed application in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-10-27T10:00:00Z",
    "updatedAt": "2026-12-27T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 2,
        "selectedLabel": "New/Changed Application",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.1,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Sebastian Vogel (Wealth Compliance Director)",
        "signed": true,
        "signedDate": "2025-10-27T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-12-27T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1045",
        "timestamp": "2025-10-27T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B123",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Sebastian Vogel (Wealth Compliance Director))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New/Changed Application",
            "rationale": "Initial banking New/Changed Application privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1b53ae1592"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-024",
    "fid": "PIA-FE-2026-B124",
    "bid": "PIA-BE-UK-2026-1024",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "Biometric Mobile Customer Onboarding & Liveness App",
    "organization": "Lloyds Banking Group Retail",
    "projectOwner": "Priya Narayanan (Liquidity Product VP)",
    "projectOwnerEmail": "priya.narayanan@sc.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Selfie biometric matching and government chip passport NFC reading application for rapid customer identity verification.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Biometric Mobile Customer Onboarding & Liveness App",
      "whyPia": "PIA governance review for banking new/changed application in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2026-01-07T10:00:00Z",
    "updatedAt": "2026-03-07T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 2,
        "selectedLabel": "New/Changed Application",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.5,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 4.1,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.2,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 2,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Priya Narayanan (Liquidity Product VP)",
        "signed": true,
        "signedDate": "2026-01-07T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1047",
        "timestamp": "2026-01-07T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B124",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Priya Narayanan (Liquidity Product VP))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New/Changed Application",
            "rationale": "Initial banking New/Changed Application privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1b82bc3a8d"
      },
      {
        "id": "PROV-1048",
        "timestamp": "2026-03-07T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B124",
        "backendBid": "PIA-BE-UK-2026-1024",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd3fd7bc7ab"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-025",
    "fid": "PIA-FE-2026-B125",
    "bid": "PIA-BE-UK-2026-1025",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "SME Micro-Lending & Instant Overdraft Portal",
    "organization": "Citadel Banking & Markets",
    "projectOwner": "Gareth Evans (Trade Finance Tech Director)",
    "projectOwnerEmail": "gareth.evans@natwest.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Algorithmic short-term working capital credit line application for small businesses with automated underwriting.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "SME Micro-Lending & Instant Overdraft Portal",
      "whyPia": "PIA governance review for banking new/changed application in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2026-04-14T10:00:00Z",
    "updatedAt": "2026-06-14T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 2,
        "selectedLabel": "New/Changed Application",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.5,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.2,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Gareth Evans (Trade Finance Tech Director)",
        "signed": true,
        "signedDate": "2026-04-14T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1049",
        "timestamp": "2026-04-14T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B125",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Gareth Evans (Trade Finance Tech Director))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New/Changed Application",
            "rationale": "Initial banking New/Changed Application privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1bb1ca5f88"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-026",
    "fid": "PIA-FE-2026-B126",
    "bid": "PIA-BE-UK-2026-1026",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Virtual Credit Card Tokenization & Digital Wallet App",
    "organization": "Apex Global Commercial Bank",
    "projectOwner": "Fiona Campbell (Branch Modernization Lead)",
    "projectOwnerEmail": "fiona.campbell@lloydsbanking.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Generation of single-use and subscription virtual payment cards integrated with Apple Pay and Google Wallet APIs.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Virtual Credit Card Tokenization & Digital Wallet App",
      "whyPia": "PIA governance review for banking new/changed application in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "IN_REVISION",
    "createdAt": "2026-07-21T10:00:00Z",
    "updatedAt": "2026-09-21T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 2,
        "selectedLabel": "New/Changed Application",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.1,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 2,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Fiona Campbell (Branch Modernization Lead)",
        "signed": true,
        "signedDate": "2026-07-21T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1051",
        "timestamp": "2026-07-21T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B126",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Fiona Campbell (Branch Modernization Lead))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New/Changed Application",
            "rationale": "Initial banking New/Changed Application privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1be0d88483"
      },
      {
        "id": "PROV-1052",
        "timestamp": "2026-09-21T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B126",
        "backendBid": "PIA-BE-UK-2026-1026",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd433db92c5"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-027",
    "fid": "PIA-FE-2026-B127",
    "bid": "PIA-BE-UK-2026-1027",
    "version": "v2.0",
    "workflowMode": "frontend",
    "projectTitle": "Trade Finance Digital Letter of Credit Portal",
    "organization": "Santander UK Commercial Services",
    "projectOwner": "Alexander Drake (Head of e-FX Clearing)",
    "projectOwnerEmail": "alex.drake@citadel-markets.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Web platform for exporters and importers managing commercial letters of credit, freight tracking, and customs invoices.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Trade Finance Digital Letter of Credit Portal",
      "whyPia": "PIA governance review for banking new/changed application in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Remediation",
    "createdAt": "2025-10-01T10:00:00Z",
    "updatedAt": "2026-12-01T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 2,
        "selectedLabel": "New/Changed Application",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.9,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.9,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Alexander Drake (Head of e-FX Clearing)",
        "signed": true,
        "signedDate": "2025-10-01T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1053",
        "timestamp": "2025-10-01T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B127",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Alexander Drake (Head of e-FX Clearing))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New/Changed Application",
            "rationale": "Initial banking New/Changed Application privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1c0fe6a97e"
      },
      {
        "id": "PROV-1054",
        "timestamp": "2026-12-01T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B127",
        "backendBid": "PIA-BE-UK-2026-1027",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd44f0b7852"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-028",
    "fid": "PIA-FE-2026-B128",
    "bid": "PIA-BE-UK-2026-1028",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Commercial Real Estate Portfolio Servicing App",
    "organization": "Metro Bank Enterprise Operations",
    "projectOwner": "Simon Gallagher (Security & Vault Ops)",
    "projectOwnerEmail": "simon.gallagher@santander.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Asset valuation and debt service coverage monitoring portal for commercial property borrowers and syndicate lenders.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Commercial Real Estate Portfolio Servicing App",
      "whyPia": "PIA governance review for banking new/changed application in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Draft",
    "createdAt": "2026-01-08T10:00:00Z",
    "updatedAt": "2026-03-08T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 2,
        "selectedLabel": "New/Changed Application",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Initial concept/planning phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.3,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.3,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 2,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Simon Gallagher (Security & Vault Ops)",
        "signed": true,
        "signedDate": "2026-01-08T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1055",
        "timestamp": "2026-01-08T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B128",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Simon Gallagher (Security & Vault Ops))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New/Changed Application",
            "rationale": "Initial banking New/Changed Application privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1c3ef4ce79"
      },
      {
        "id": "PROV-1056",
        "timestamp": "2026-03-08T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B128",
        "backendBid": "PIA-BE-UK-2026-1028",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd46a3b5ddf"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-029",
    "fid": "PIA-FE-2026-B129",
    "bid": "PIA-BE-UK-2026-1029",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Private Wealth Client Portal & Secure e-Signature Suite",
    "organization": "BNP Paribas Wholesale London",
    "projectOwner": "Nathalie Dupont (Regulatory Reporting VP)",
    "projectOwnerEmail": "nathalie.dupont@metrobankplc.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Encrypted document vault, portfolio performance analytics, and QES-compliant electronic signature tool for wealthy families.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Private Wealth Client Portal & Secure e-Signature Suite",
      "whyPia": "PIA governance review for banking new/changed application in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-04-15T10:00:00Z",
    "updatedAt": "2026-06-15T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 2,
        "selectedLabel": "New/Changed Application",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.1,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Nathalie Dupont (Regulatory Reporting VP)",
        "signed": true,
        "signedDate": "2026-04-15T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-06-15T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1057",
        "timestamp": "2026-04-15T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B129",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Nathalie Dupont (Regulatory Reporting VP))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New/Changed Application",
            "rationale": "Initial banking New/Changed Application privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1c6e02f374"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-030",
    "fid": "PIA-FE-2026-B130",
    "bid": "PIA-BE-UK-2026-1030",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "Student & Youth Financial Literacy & Prepaid Debit App",
    "organization": "JPMorgan Chase EMEA Treasury",
    "projectOwner": "Claire Holloway (FinCrime Head)",
    "projectOwnerEmail": "claire.holloway@jpmorgan.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Parental control-enabled smart debit card and savings goals mobile application designed for minors aged 11-17.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Student & Youth Financial Literacy & Prepaid Debit App",
      "whyPia": "PIA governance review for banking new/changed application in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-07-22T10:00:00Z",
    "updatedAt": "2026-09-22T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 2,
        "selectedLabel": "New/Changed Application",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.9,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.9,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Claire Holloway (FinCrime Head)",
        "signed": true,
        "signedDate": "2026-07-22T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-09-22T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1059",
        "timestamp": "2026-07-22T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B130",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Claire Holloway (FinCrime Head))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "New/Changed Application",
            "rationale": "Initial banking New/Changed Application privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1c9d11186f"
      },
      {
        "id": "PROV-1060",
        "timestamp": "2026-09-22T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B130",
        "backendBid": "PIA-BE-UK-2026-1030",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd4a09b28f9"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-031",
    "fid": "PIA-FE-2026-B131",
    "bid": "PIA-BE-UK-2026-1031",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Real-Time Transaction Fraud & Mule Account Detection ML",
    "organization": "Deutsche Bank UK Wealth Management",
    "projectOwner": "Danielle Cooper (Head of Customer Operations)",
    "projectOwnerEmail": "danielle.cooper@barclaycard.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Graph neural network and streaming gradient boosted trees analyzing millisecond transaction graphs to identify mule accounts.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Real-Time Transaction Fraud & Mule Account Detection ML",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2025-10-02T10:00:00Z",
    "updatedAt": "2026-12-02T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 1.54
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Danielle Cooper (Head of Customer Operations)",
        "signed": true,
        "signedDate": "2025-10-02T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1061",
        "timestamp": "2025-10-02T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B131",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Danielle Cooper (Head of Customer Operations))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1ccc1f3d6a"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-032",
    "fid": "PIA-FE-2026-B132",
    "bid": "PIA-BE-UK-2026-1032",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Generative AI Wealth Advisory & Portfolio Copilot",
    "organization": "UBS Private Banking London",
    "projectOwner": "Rachel Higgins (Clearing Operations)",
    "projectOwnerEmail": "rachel.higgins@natwest.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Internal LLM assistant synthesizing market research, customer risk questionnaires, and tax-efficient asset allocation suggestions.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Generative AI Wealth Advisory & Portfolio Copilot",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2026-01-09T10:00:00Z",
    "updatedAt": "2026-03-09T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 3,
        "selectedLabel": "Biometric data for identification",
        "score": 5
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.8,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4.4,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1.3,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 2
      },
      "finalRiskScore": 8.8,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.8,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Rachel Higgins (Clearing Operations)",
        "signed": true,
        "signedDate": "2026-01-09T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1063",
        "timestamp": "2026-01-09T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B132",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Rachel Higgins (Clearing Operations))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1cfb2d6265"
      },
      {
        "id": "PROV-1064",
        "timestamp": "2026-03-09T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B132",
        "backendBid": "PIA-BE-UK-2026-1032",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd4d6faf413"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-033",
    "fid": "PIA-FE-2026-B133",
    "bid": "PIA-BE-UK-2026-1033",
    "version": "v2.0",
    "workflowMode": "frontend",
    "projectTitle": "Algorithmic Credit Risk Underwriting & Default Classifier",
    "organization": "Halifax Mortgage Services",
    "projectOwner": "Christopher Bell (Asset Reclaim Team)",
    "projectOwnerEmail": "christopher.bell@lloydsbanking.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Deep learning credit scoring model trained on historical repayment patterns and macroeconomic indicators for unbanked borrowers.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Algorithmic Credit Risk Underwriting & Default Classifier",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "IN_REVISION",
    "createdAt": "2026-04-16T10:00:00Z",
    "updatedAt": "2026-06-16T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 1.54
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Christopher Bell (Asset Reclaim Team)",
        "signed": true,
        "signedDate": "2026-04-16T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1065",
        "timestamp": "2026-04-16T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B133",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Christopher Bell (Asset Reclaim Team))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1d2a3b8760"
      },
      {
        "id": "PROV-1066",
        "timestamp": "2026-06-16T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B133",
        "backendBid": "PIA-BE-UK-2026-1033",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd4f22ad9a0"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-034",
    "fid": "PIA-FE-2026-B134",
    "bid": "PIA-BE-UK-2026-1034",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Conversational AI Voice Banking Assistant & IVR Deflection",
    "organization": "Barclaycard Consumer Services",
    "projectOwner": "Beatriz Morales (FX Regulatory Lead)",
    "projectOwnerEmail": "beatriz.morales@santander.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Natural language speech-to-text and intent resolution engine resolving customer phone queries and routing high-value transfers.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Conversational AI Voice Banking Assistant & IVR Deflection",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Remediation",
    "createdAt": "2026-07-23T10:00:00Z",
    "updatedAt": "2026-09-23T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 3,
        "selectedLabel": "Biometric data for identification",
        "score": 5
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.6,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4.2,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1.3,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 2
      },
      "finalRiskScore": 8.4,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.6,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Beatriz Morales (FX Regulatory Lead)",
        "signed": true,
        "signedDate": "2026-07-23T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1067",
        "timestamp": "2026-07-23T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B134",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Beatriz Morales (FX Regulatory Lead))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1d5949ac5b"
      },
      {
        "id": "PROV-1068",
        "timestamp": "2026-09-23T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B134",
        "backendBid": "PIA-BE-UK-2026-1034",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd50d5abf2d"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-035",
    "fid": "PIA-FE-2026-B135",
    "bid": "PIA-BE-UK-2026-1035",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Commercial Loan Delinquency Early Warning Model",
    "organization": "Coutts & Co Private Bank",
    "projectOwner": "Dr. Alistair Finch (Director of Applied AI)",
    "projectOwnerEmail": "alistair.finch@bank-gov.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Supervised predictive classification model alerting relationship managers to distress signals in SME accounting feeds.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Commercial Loan Delinquency Early Warning Model",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Draft",
    "createdAt": "2025-10-03T10:00:00Z",
    "updatedAt": "2026-12-03T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Initial concept/planning phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 1.54
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.4,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Dr. Alistair Finch (Director of Applied AI)",
        "signed": true,
        "signedDate": "2025-10-03T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1069",
        "timestamp": "2025-10-03T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B135",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Dr. Alistair Finch (Director of Applied AI))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1d8857d156"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-036",
    "fid": "PIA-FE-2026-B136",
    "bid": "PIA-BE-UK-2026-1036",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "Computer Vision Cheque & ID Document OCR Extraction Engine",
    "organization": "Monzo Digital Banking",
    "projectOwner": "Marcus Sterling (VP of Payments Infrastructure)",
    "projectOwnerEmail": "marcus.sterling@apex-finance.org",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Transformer-based vision model extracting security holograms, MRZ passport lines, and handwritten cheque values.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Computer Vision Cheque & ID Document OCR Extraction Engine",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-01-10T10:00:00Z",
    "updatedAt": "2026-03-10T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 3,
        "selectedLabel": "Biometric data for identification",
        "score": 5
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.8,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4.4,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1.3,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 2
      },
      "finalRiskScore": 8.8,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.8,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Marcus Sterling (VP of Payments Infrastructure)",
        "signed": true,
        "signedDate": "2026-01-10T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-03-10T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1071",
        "timestamp": "2026-01-10T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B136",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Marcus Sterling (VP of Payments Infrastructure))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1db765f651"
      },
      {
        "id": "PROV-1072",
        "timestamp": "2026-03-10T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B136",
        "backendBid": "PIA-BE-UK-2026-1036",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd543ba8a47"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-037",
    "fid": "PIA-FE-2026-B137",
    "bid": "PIA-BE-UK-2026-1037",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Synthetic Identity & Coordinated Fraud Ring Graph Detector",
    "organization": "Starling Bank API Platform",
    "projectOwner": "Helena Bergstrom (Chief Risk Officer)",
    "projectOwnerEmail": "helena.bergstrom@nordic-invest.se",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Graph analytics cluster detecting synchronized multi-account creation sharing physical addresses, IP subnets, and device hashes.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Synthetic Identity & Coordinated Fraud Ring Graph Detector",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-04-17T10:00:00Z",
    "updatedAt": "2026-06-17T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 1.54
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Helena Bergstrom (Chief Risk Officer)",
        "signed": true,
        "signedDate": "2026-04-17T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-06-17T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1073",
        "timestamp": "2026-04-17T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B137",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Helena Bergstrom (Chief Risk Officer))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1de6741b4c"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-038",
    "fid": "PIA-FE-2026-B138",
    "bid": "PIA-BE-UK-2026-1038",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "AML Transaction Anomaly Detection & Auto-Triage Agent",
    "organization": "Virgin Money Digital Retail",
    "projectOwner": "Julian Vance (Head of Core Architecture)",
    "projectOwnerEmail": "julian.vance@barclays.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Unsupervised clustering model triaging thousands of anti-money laundering alerts to isolate genuinely suspicious transaction bursts.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "AML Transaction Anomaly Detection & Auto-Triage Agent",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2026-07-24T10:00:00Z",
    "updatedAt": "2026-09-24T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 3,
        "selectedLabel": "Biometric data for identification",
        "score": 5
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.6,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4.2,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1.3,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 2
      },
      "finalRiskScore": 8.4,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.6,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Julian Vance (Head of Core Architecture)",
        "signed": true,
        "signedDate": "2026-07-24T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1075",
        "timestamp": "2026-07-24T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B138",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Julian Vance (Head of Core Architecture))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1e15824047"
      },
      {
        "id": "PROV-1076",
        "timestamp": "2026-09-24T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B138",
        "backendBid": "PIA-BE-UK-2026-1038",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd57a1a5561"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-039",
    "fid": "PIA-FE-2026-B139",
    "bid": "PIA-BE-UK-2026-1039",
    "version": "v2.0",
    "workflowMode": "frontend",
    "projectTitle": "GenAI Virtual Financial Health Coach for Retail Banking",
    "organization": "Barclays Commercial Banking",
    "projectOwner": "Elena Rostova (Chief Data Officer)",
    "projectOwnerEmail": "elena.rostova@apexbank-global.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Personalized customer budgeting chatbot analyzing categorized card spending to propose automated savings and subscription audits.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "GenAI Virtual Financial Health Coach for Retail Banking",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2025-10-04T10:00:00Z",
    "updatedAt": "2026-12-04T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 1.54
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Elena Rostova (Chief Data Officer)",
        "signed": true,
        "signedDate": "2025-10-04T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1077",
        "timestamp": "2025-10-04T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B139",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Elena Rostova (Chief Data Officer))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1e44906542"
      },
      {
        "id": "PROV-1078",
        "timestamp": "2026-12-04T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B139",
        "backendBid": "PIA-BE-UK-2026-1039",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd5954a3aee"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-040",
    "fid": "PIA-FE-2026-B140",
    "bid": "PIA-BE-UK-2026-1040",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Algorithmic FX Smart Order Routing & Execution Model",
    "organization": "HSBC Global Markets & Treasury",
    "projectOwner": "Sebastian Vogel (Wealth Compliance Director)",
    "projectOwnerEmail": "sebastian.vogel@db.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Reinforcement learning model optimizing order slicing and execution across fragmented interbank foreign exchange liquidity pools.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Algorithmic FX Smart Order Routing & Execution Model",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "IN_REVISION",
    "createdAt": "2026-01-11T10:00:00Z",
    "updatedAt": "2026-03-11T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.4,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 1.54
      },
      "finalRiskScore": 6.2,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.6,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Sebastian Vogel (Wealth Compliance Director)",
        "signed": true,
        "signedDate": "2026-01-11T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1079",
        "timestamp": "2026-01-11T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B140",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Sebastian Vogel (Wealth Compliance Director))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1e739e8a3d"
      },
      {
        "id": "PROV-1080",
        "timestamp": "2026-03-11T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B140",
        "backendBid": "PIA-BE-UK-2026-1040",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd5b07a207b"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-041",
    "fid": "PIA-FE-2026-B141",
    "bid": "PIA-BE-UK-2026-1041",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Dynamic Credit Card Limit Optimization Reinforcement Learning",
    "organization": "Standard Chartered Corporate",
    "projectOwner": "Priya Narayanan (Liquidity Product VP)",
    "projectOwnerEmail": "priya.narayanan@sc.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Contextual bandit model testing micro-adjustments to revolving credit limits based on real-time repayment behavior.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Dynamic Credit Card Limit Optimization Reinforcement Learning",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Remediation",
    "createdAt": "2026-04-18T10:00:00Z",
    "updatedAt": "2026-06-18T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 1.54
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Priya Narayanan (Liquidity Product VP)",
        "signed": true,
        "signedDate": "2026-04-18T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1081",
        "timestamp": "2026-04-18T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B141",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Priya Narayanan (Liquidity Product VP))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1ea2acaf38"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-042",
    "fid": "PIA-FE-2026-B142",
    "bid": "PIA-BE-UK-2026-1042",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "ATM Cash Demand Forecasting & Route Optimization Neural Net",
    "organization": "NatWest Corporate & Commercial",
    "projectOwner": "Gareth Evans (Trade Finance Tech Director)",
    "projectOwnerEmail": "gareth.evans@natwest.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Recurrent time-series forecasting model predicting cash withdrawal surges and optimizing armored transit replenishment routes.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "ATM Cash Demand Forecasting & Route Optimization Neural Net",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Draft",
    "createdAt": "2026-07-25T10:00:00Z",
    "updatedAt": "2026-09-25T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Initial concept/planning phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 3,
        "selectedLabel": "Biometric data for identification",
        "score": 5
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.6,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4.2,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1.3,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 2
      },
      "finalRiskScore": 8.4,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.6,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Gareth Evans (Trade Finance Tech Director)",
        "signed": true,
        "signedDate": "2026-07-25T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1083",
        "timestamp": "2026-07-25T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B142",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Gareth Evans (Trade Finance Tech Director))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1ed1bad433"
      },
      {
        "id": "PROV-1084",
        "timestamp": "2026-09-25T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B142",
        "backendBid": "PIA-BE-UK-2026-1042",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd5e6d9eb95"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-043",
    "fid": "PIA-FE-2026-B143",
    "bid": "PIA-BE-UK-2026-1043",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Behavioral Biometrics Continuous Keystroke & Touch Authenticator",
    "organization": "Lloyds Banking Group Retail",
    "projectOwner": "Fiona Campbell (Branch Modernization Lead)",
    "projectOwnerEmail": "fiona.campbell@lloydsbanking.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Passive biometric model profiling user swipe angles, typing cadence, and device orientation to detect account takeover in real time.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Behavioral Biometrics Continuous Keystroke & Touch Authenticator",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-10-05T10:00:00Z",
    "updatedAt": "2026-12-05T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 1.54
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Fiona Campbell (Branch Modernization Lead)",
        "signed": true,
        "signedDate": "2025-10-05T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-12-05T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1085",
        "timestamp": "2025-10-05T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B143",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Fiona Campbell (Branch Modernization Lead))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1f00c8f92e"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-044",
    "fid": "PIA-FE-2026-B144",
    "bid": "PIA-BE-UK-2026-1044",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Corporate Insolvency & Distressed Debt Prediction Classifier",
    "organization": "Citadel Banking & Markets",
    "projectOwner": "Alexander Drake (Head of e-FX Clearing)",
    "projectOwnerEmail": "alex.drake@citadel-markets.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Quantitative model evaluating commercial borrower balance sheet ratios and supplier payment delays to flag default risks.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Corporate Insolvency & Distressed Debt Prediction Classifier",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-01-12T10:00:00Z",
    "updatedAt": "2026-03-12T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 3,
        "selectedLabel": "Biometric data for identification",
        "score": 5
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.8,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4.4,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1.3,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 2
      },
      "finalRiskScore": 8.8,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.8,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Alexander Drake (Head of e-FX Clearing)",
        "signed": true,
        "signedDate": "2026-01-12T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-03-12T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1087",
        "timestamp": "2026-01-12T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B144",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Alexander Drake (Head of e-FX Clearing))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1f2fd71e29"
      },
      {
        "id": "PROV-1088",
        "timestamp": "2026-03-12T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B144",
        "backendBid": "PIA-BE-UK-2026-1044",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd61d39b6af"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-045",
    "fid": "PIA-FE-2026-B145",
    "bid": "PIA-BE-UK-2026-1045",
    "version": "v2.0",
    "workflowMode": "frontend",
    "projectTitle": "Automated ESG Scoring & Green Loan Compliance Model",
    "organization": "Apex Global Commercial Bank",
    "projectOwner": "Simon Gallagher (Security & Vault Ops)",
    "projectOwnerEmail": "simon.gallagher@santander.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Natural language processing model auditing corporate client sustainability reports against EU Taxonomy and TCFD disclosure standards.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Automated ESG Scoring & Green Loan Compliance Model",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2026-04-19T10:00:00Z",
    "updatedAt": "2026-06-19T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 1.54
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.4,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Simon Gallagher (Security & Vault Ops)",
        "signed": true,
        "signedDate": "2026-04-19T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1089",
        "timestamp": "2026-04-19T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B145",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Simon Gallagher (Security & Vault Ops))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1f5ee54324"
      },
      {
        "id": "PROV-1090",
        "timestamp": "2026-06-19T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B145",
        "backendBid": "PIA-BE-UK-2026-1045",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd638699c3c"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-046",
    "fid": "PIA-FE-2026-B146",
    "bid": "PIA-BE-UK-2026-1046",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Customer Churn Prediction & Next-Best-Action Recommendation Engine",
    "organization": "Santander UK Commercial Services",
    "projectOwner": "Nathalie Dupont (Regulatory Reporting VP)",
    "projectOwnerEmail": "nathalie.dupont@metrobankplc.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Machine learning propensity engine predicting customer dissatisfaction and triggering proactive retention mortgage offers.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Customer Churn Prediction & Next-Best-Action Recommendation Engine",
      "whyPia": "PIA governance review for banking ai/machine learning use case in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2026-07-26T10:00:00Z",
    "updatedAt": "2026-09-26T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 3,
        "selectedLabel": "AI/Machine Learning Use Case",
        "score": 5
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 3,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 4
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 3,
        "selectedLabel": "Biometric data for identification",
        "score": 5
      },
      "C1": {
        "optionIndex": 3,
        "selectedLabel": "Legitimate Interests (Art 6(1)(f))",
        "score": 3
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 3,
        "selectedLabel": "Standard formal request procedure",
        "score": 4
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 2,
        "selectedLabel": "Broad transaction parameters collected",
        "score": 3
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 2,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 3
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 2,
        "selectedLabel": "Human-in-the-loop review for adverse decisions",
        "score": 3
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.6,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4.2,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1.4,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1.3,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1.1,
        "totalMultiplier": 2
      },
      "finalRiskScore": 8.4,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Legitimate Interests (Art 6(1)(f))",
        "applicableRights": {
          "erasure": true,
          "portability": false,
          "object": true,
          "withdrawConsent": false
        },
        "complianceStatus": "At Risk",
        "findings": [
          "ICO Warning: Manual response process for Right to Object under Legitimate Interests.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1.1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.6,
        "legalComplianceRisk": 2,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Nathalie Dupont (Regulatory Reporting VP)",
        "signed": true,
        "signedDate": "2026-07-26T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1091",
        "timestamp": "2026-07-26T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B146",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Nathalie Dupont (Regulatory Reporting VP))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "AI/Machine Learning Use Case",
            "rationale": "Initial banking AI/Machine Learning Use Case privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1f8df3681f"
      },
      {
        "id": "PROV-1092",
        "timestamp": "2026-09-26T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B146",
        "backendBid": "PIA-BE-UK-2026-1046",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0 + FCA Model Risk Guidance",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd6539981c9"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "EU AI Act",
        "NIST AI RMF 1.0",
        "FCA Model Risk Guidance"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-047",
    "fid": "PIA-FE-2026-B147",
    "bid": "PIA-BE-UK-2026-1047",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Experian Global Credit Bureau Real-Time Gateway",
    "organization": "Metro Bank Enterprise Operations",
    "projectOwner": "Claire Holloway (FinCrime Head)",
    "projectOwnerEmail": "claire.holloway@jpmorgan.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Integration with Experian bureau APIs for automated credit file pulls, county court judgments (CCJ) checks, and electoral roll matching.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Experian Global Credit Bureau Real-Time Gateway",
      "whyPia": "PIA governance review for banking vendor/supplier engagement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "IN_REVISION",
    "createdAt": "2025-10-06T10:00:00Z",
    "updatedAt": "2026-12-06T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 4,
        "selectedLabel": "Vendor/Supplier Engagement",
        "score": 4
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.5,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 4,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Claire Holloway (FinCrime Head)",
        "signed": true,
        "signedDate": "2025-10-06T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1093",
        "timestamp": "2025-10-06T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B147",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Claire Holloway (FinCrime Head))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Vendor/Supplier Engagement",
            "rationale": "Initial banking Vendor/Supplier Engagement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1fbd018d1a"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-048",
    "fid": "PIA-FE-2026-B148",
    "bid": "PIA-BE-UK-2026-1048",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "Cloud SaaS Core Banking Engine (Thought Machine Vault)",
    "organization": "BNP Paribas Wholesale London",
    "projectOwner": "Danielle Cooper (Head of Customer Operations)",
    "projectOwnerEmail": "danielle.cooper@barclaycard.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Engagement of Thought Machine to host the bank modern multi-currency product engine in dedicated AWS cloud infrastructure.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Cloud SaaS Core Banking Engine (Thought Machine Vault)",
      "whyPia": "PIA governance review for banking vendor/supplier engagement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Remediation",
    "createdAt": "2026-01-13T10:00:00Z",
    "updatedAt": "2026-03-13T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 4,
        "selectedLabel": "Vendor/Supplier Engagement",
        "score": 4
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 4,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Danielle Cooper (Head of Customer Operations)",
        "signed": true,
        "signedDate": "2026-01-13T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1095",
        "timestamp": "2026-01-13T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B148",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Danielle Cooper (Head of Customer Operations))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Vendor/Supplier Engagement",
            "rationale": "Initial banking Vendor/Supplier Engagement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x1fec0fb215"
      },
      {
        "id": "PROV-1096",
        "timestamp": "2026-03-13T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B148",
        "backendBid": "PIA-BE-UK-2026-1048",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd689f94ce3"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-049",
    "fid": "PIA-FE-2026-B149",
    "bid": "PIA-BE-UK-2026-1049",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Refinitiv World-Check Politically Exposed Persons (PEP) API",
    "organization": "JPMorgan Chase EMEA Treasury",
    "projectOwner": "Rachel Higgins (Clearing Operations)",
    "projectOwnerEmail": "rachel.higgins@natwest.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Subscription to third-party global watchlist feed providing daily delta downloads of sanctioned individuals and state enterprise officials.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Refinitiv World-Check Politically Exposed Persons (PEP) API",
      "whyPia": "PIA governance review for banking vendor/supplier engagement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Draft",
    "createdAt": "2026-04-20T10:00:00Z",
    "updatedAt": "2026-06-20T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 4,
        "selectedLabel": "Vendor/Supplier Engagement",
        "score": 4
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Initial concept/planning phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.5,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 4,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Rachel Higgins (Clearing Operations)",
        "signed": true,
        "signedDate": "2026-04-20T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1097",
        "timestamp": "2026-04-20T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B149",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Rachel Higgins (Clearing Operations))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Vendor/Supplier Engagement",
            "rationale": "Initial banking Vendor/Supplier Engagement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x201b1dd710"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-050",
    "fid": "PIA-FE-2026-B150",
    "bid": "PIA-BE-UK-2026-1050",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "External Chip Card Personalization & Embossing Bureau (Idemia)",
    "organization": "Deutsche Bank UK Wealth Management",
    "projectOwner": "Christopher Bell (Asset Reclaim Team)",
    "projectOwnerEmail": "christopher.bell@lloydsbanking.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Outsourced secure manufacturing, EMV chip cryptographic key provisioning, and mailing of customer contact credit/debit cards.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "External Chip Card Personalization & Embossing Bureau (Idemia)",
      "whyPia": "PIA governance review for banking vendor/supplier engagement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-07-27T10:00:00Z",
    "updatedAt": "2026-09-27T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 4,
        "selectedLabel": "Vendor/Supplier Engagement",
        "score": 4
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3,
      "likelihoodScore": 1.3,
      "baseRiskScore": 4,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 6.2,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.2,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 4,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Christopher Bell (Asset Reclaim Team)",
        "signed": true,
        "signedDate": "2026-07-27T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-09-27T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1099",
        "timestamp": "2026-07-27T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B150",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Christopher Bell (Asset Reclaim Team))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Vendor/Supplier Engagement",
            "rationale": "Initial banking Vendor/Supplier Engagement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x204a2bfc0b"
      },
      {
        "id": "PROV-1100",
        "timestamp": "2026-09-27T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B150",
        "backendBid": "PIA-BE-UK-2026-1050",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd6c05917fd"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-051",
    "fid": "PIA-FE-2026-B151",
    "bid": "PIA-BE-UK-2026-1051",
    "version": "v2.0",
    "workflowMode": "frontend",
    "projectTitle": "NICE Actimize Financial Crime Cloud Surveillance Suite",
    "organization": "UBS Private Banking London",
    "projectOwner": "Beatriz Morales (FX Regulatory Lead)",
    "projectOwnerEmail": "beatriz.morales@santander.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Cloud-hosted market abuse and insider trading surveillance SaaS monitoring employee chat rooms, voice calls, and order books.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "NICE Actimize Financial Crime Cloud Surveillance Suite",
      "whyPia": "PIA governance review for banking vendor/supplier engagement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-10-07T10:00:00Z",
    "updatedAt": "2026-12-07T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 4,
        "selectedLabel": "Vendor/Supplier Engagement",
        "score": 4
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.5,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 4,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Beatriz Morales (FX Regulatory Lead)",
        "signed": true,
        "signedDate": "2025-10-07T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-12-07T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1101",
        "timestamp": "2025-10-07T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B151",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Beatriz Morales (FX Regulatory Lead))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Vendor/Supplier Engagement",
            "rationale": "Initial banking Vendor/Supplier Engagement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x20793a2106"
      },
      {
        "id": "PROV-1102",
        "timestamp": "2026-12-07T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B151",
        "backendBid": "PIA-BE-UK-2026-1051",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd6db88fd8a"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-052",
    "fid": "PIA-FE-2026-B152",
    "bid": "PIA-BE-UK-2026-1052",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Iron Mountain Secure Document Digitization & Destruction",
    "organization": "Halifax Mortgage Services",
    "projectOwner": "Dr. Alistair Finch (Director of Applied AI)",
    "projectOwnerEmail": "alistair.finch@bank-gov.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Third-party physical logistics provider handling vault storage of paper mortgage deeds, high-speed scanning, and certified shredding.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Iron Mountain Secure Document Digitization & Destruction",
      "whyPia": "PIA governance review for banking vendor/supplier engagement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2026-01-14T10:00:00Z",
    "updatedAt": "2026-03-14T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 4,
        "selectedLabel": "Vendor/Supplier Engagement",
        "score": 4
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 4,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Dr. Alistair Finch (Director of Applied AI)",
        "signed": true,
        "signedDate": "2026-01-14T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1103",
        "timestamp": "2026-01-14T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B152",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Dr. Alistair Finch (Director of Applied AI))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Vendor/Supplier Engagement",
            "rationale": "Initial banking Vendor/Supplier Engagement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x20a8484601"
      },
      {
        "id": "PROV-1104",
        "timestamp": "2026-03-14T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B152",
        "backendBid": "PIA-BE-UK-2026-1052",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd6f6b8e317"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-053",
    "fid": "PIA-FE-2026-B153",
    "bid": "PIA-BE-UK-2026-1053",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Salesforce Financial Services Cloud CRM Integration",
    "organization": "Barclaycard Consumer Services",
    "projectOwner": "Marcus Sterling (VP of Payments Infrastructure)",
    "projectOwnerEmail": "marcus.sterling@apex-finance.org",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Migration of commercial banking relationship management and client contact history to Salesforce cloud with Shield encryption.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Salesforce Financial Services Cloud CRM Integration",
      "whyPia": "PIA governance review for banking vendor/supplier engagement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2026-04-21T10:00:00Z",
    "updatedAt": "2026-06-21T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 4,
        "selectedLabel": "Vendor/Supplier Engagement",
        "score": 4
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.5,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 4,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Marcus Sterling (VP of Payments Infrastructure)",
        "signed": true,
        "signedDate": "2026-04-21T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1105",
        "timestamp": "2026-04-21T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B153",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Marcus Sterling (VP of Payments Infrastructure))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Vendor/Supplier Engagement",
            "rationale": "Initial banking Vendor/Supplier Engagement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x20d7566afc"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-054",
    "fid": "PIA-FE-2026-B154",
    "bid": "PIA-BE-UK-2026-1054",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "Adyen Global Payment Orchestration Gateway Integration",
    "organization": "Coutts & Co Private Bank",
    "projectOwner": "Helena Bergstrom (Chief Risk Officer)",
    "projectOwnerEmail": "helena.bergstrom@nordic-invest.se",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Integration with Adyen to process international e-commerce acquiring, 3D Secure 2.2 authentication, and multi-scheme clearing.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Adyen Global Payment Orchestration Gateway Integration",
      "whyPia": "PIA governance review for banking vendor/supplier engagement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "IN_REVISION",
    "createdAt": "2026-07-01T10:00:00Z",
    "updatedAt": "2026-09-01T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 4,
        "selectedLabel": "Vendor/Supplier Engagement",
        "score": 4
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.5,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 4,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Helena Bergstrom (Chief Risk Officer)",
        "signed": true,
        "signedDate": "2026-07-01T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1107",
        "timestamp": "2026-07-01T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B154",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Helena Bergstrom (Chief Risk Officer))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Vendor/Supplier Engagement",
            "rationale": "Initial banking Vendor/Supplier Engagement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x2106648ff7"
      },
      {
        "id": "PROV-1108",
        "timestamp": "2026-09-01T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B154",
        "backendBid": "PIA-BE-UK-2026-1054",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd72d18ae31"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-055",
    "fid": "PIA-FE-2026-B155",
    "bid": "PIA-BE-UK-2026-1055",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Moody Analytics CreditLens Commercial Underwriting Suite",
    "organization": "Monzo Digital Banking",
    "projectOwner": "Julian Vance (Head of Core Architecture)",
    "projectOwnerEmail": "julian.vance@barclays.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Implementation of Moody hosted financial statement spreading software for medium and large corporate balance sheet risk modeling.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Moody Analytics CreditLens Commercial Underwriting Suite",
      "whyPia": "PIA governance review for banking vendor/supplier engagement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Remediation",
    "createdAt": "2025-10-08T10:00:00Z",
    "updatedAt": "2026-12-08T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 4,
        "selectedLabel": "Vendor/Supplier Engagement",
        "score": 4
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3,
      "likelihoodScore": 1.3,
      "baseRiskScore": 4,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 6.2,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.2,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 4,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Julian Vance (Head of Core Architecture)",
        "signed": true,
        "signedDate": "2025-10-08T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1109",
        "timestamp": "2025-10-08T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B155",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Julian Vance (Head of Core Architecture))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Vendor/Supplier Engagement",
            "rationale": "Initial banking Vendor/Supplier Engagement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x213572b4f2"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-056",
    "fid": "PIA-FE-2026-B156",
    "bid": "PIA-BE-UK-2026-1056",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Onfido Biometric Identity Verification SaaS",
    "organization": "Starling Bank API Platform",
    "projectOwner": "Elena Rostova (Chief Data Officer)",
    "projectOwnerEmail": "elena.rostova@apexbank-global.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Third-party vendor SDK integrated into customer registration journey verifying passport holograms and matching live selfie videos.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Onfido Biometric Identity Verification SaaS",
      "whyPia": "PIA governance review for banking vendor/supplier engagement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Draft",
    "createdAt": "2026-01-15T10:00:00Z",
    "updatedAt": "2026-03-15T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 4,
        "selectedLabel": "Vendor/Supplier Engagement",
        "score": 4
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Initial concept/planning phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 4,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Elena Rostova (Chief Data Officer)",
        "signed": true,
        "signedDate": "2026-01-15T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1111",
        "timestamp": "2026-01-15T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B156",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Elena Rostova (Chief Data Officer))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Vendor/Supplier Engagement",
            "rationale": "Initial banking Vendor/Supplier Engagement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x216480d9ed"
      },
      {
        "id": "PROV-1112",
        "timestamp": "2026-03-15T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B156",
        "backendBid": "PIA-BE-UK-2026-1056",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd76378794b"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-057",
    "fid": "PIA-FE-2026-B157",
    "bid": "PIA-BE-UK-2026-1057",
    "version": "v2.0",
    "workflowMode": "frontend",
    "projectTitle": "Central Bank Digital Currency (CBDC) Wholesale Settlement Pilot",
    "organization": "Virgin Money Digital Retail",
    "projectOwner": "Sebastian Vogel (Wealth Compliance Director)",
    "projectOwnerEmail": "sebastian.vogel@db.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Bank of England Project Rosalind experimental sandbox testing programmatic retail API settlement over private distributed ledger.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Central Bank Digital Currency (CBDC) Wholesale Settlement Pilot",
      "whyPia": "PIA governance review for banking pilot program in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-04-22T10:00:00Z",
    "updatedAt": "2026-06-22T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 5,
        "selectedLabel": "Pilot Program",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.9,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.9,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Sebastian Vogel (Wealth Compliance Director)",
        "signed": true,
        "signedDate": "2026-04-22T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-06-22T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1113",
        "timestamp": "2026-04-22T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B157",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Sebastian Vogel (Wealth Compliance Director))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Pilot Program",
            "rationale": "Initial banking Pilot Program privacy assessment submission"
          }
        ],
        "provenanceHash": "0x21938efee8"
      },
      {
        "id": "PROV-1114",
        "timestamp": "2026-06-22T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B157",
        "backendBid": "PIA-BE-UK-2026-1057",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd77ea85ed8"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-058",
    "fid": "PIA-FE-2026-B158",
    "bid": "PIA-BE-UK-2026-1058",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Quantum-Safe Post-Quantum Cryptography (PQC) Encryption Pilot",
    "organization": "Barclays Commercial Banking",
    "projectOwner": "Priya Narayanan (Liquidity Product VP)",
    "projectOwnerEmail": "priya.narayanan@sc.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Experimental deployment of NIST-standardized Kyber and Dilithium algorithms on inter-bank wholesale payment communication channels.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Quantum-Safe Post-Quantum Cryptography (PQC) Encryption Pilot",
      "whyPia": "PIA governance review for banking pilot program in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-07-02T10:00:00Z",
    "updatedAt": "2026-09-02T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 5,
        "selectedLabel": "Pilot Program",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.1,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Priya Narayanan (Liquidity Product VP)",
        "signed": true,
        "signedDate": "2026-07-02T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-09-02T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1115",
        "timestamp": "2026-07-02T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B158",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Priya Narayanan (Liquidity Product VP))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Pilot Program",
            "rationale": "Initial banking Pilot Program privacy assessment submission"
          }
        ],
        "provenanceHash": "0x21c29d23e3"
      },
      {
        "id": "PROV-1116",
        "timestamp": "2026-09-02T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B158",
        "backendBid": "PIA-BE-UK-2026-1058",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd799d84465"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-059",
    "fid": "PIA-FE-2026-B159",
    "bid": "PIA-BE-UK-2026-1059",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Offline Contactless P2P Mesh Payment Pilot",
    "organization": "HSBC Global Markets & Treasury",
    "projectOwner": "Gareth Evans (Trade Finance Tech Director)",
    "projectOwnerEmail": "gareth.evans@natwest.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Low-energy Bluetooth mesh payment sandbox enabling emergency peer-to-peer electronic payments during telecommunication blackouts.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Offline Contactless P2P Mesh Payment Pilot",
      "whyPia": "PIA governance review for banking pilot program in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2025-10-09T10:00:00Z",
    "updatedAt": "2026-12-09T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 5,
        "selectedLabel": "Pilot Program",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.1,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Gareth Evans (Trade Finance Tech Director)",
        "signed": true,
        "signedDate": "2025-10-09T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1117",
        "timestamp": "2025-10-09T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B159",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Gareth Evans (Trade Finance Tech Director))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Pilot Program",
            "rationale": "Initial banking Pilot Program privacy assessment submission"
          }
        ],
        "provenanceHash": "0x21f1ab48de"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-060",
    "fid": "PIA-FE-2026-B160",
    "bid": "PIA-BE-UK-2026-1060",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "Palm-Vein Biometric Branch Teller Verification Sandbox",
    "organization": "Standard Chartered Corporate",
    "projectOwner": "Fiona Campbell (Branch Modernization Lead)",
    "projectOwnerEmail": "fiona.campbell@lloydsbanking.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Pilot testing infrared palm-vein scanners at 10 flagship retail branches for cardless, frictionless customer cash withdrawals.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Palm-Vein Biometric Branch Teller Verification Sandbox",
      "whyPia": "PIA governance review for banking pilot program in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2026-01-16T10:00:00Z",
    "updatedAt": "2026-03-16T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 5,
        "selectedLabel": "Pilot Program",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 1,
        "selectedLabel": "Adequate jurisdiction (EEA/UK)",
        "score": 2
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.5,
      "likelihoodScore": 1.2,
      "baseRiskScore": 4.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 4.1,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Fiona Campbell (Branch Modernization Lead)",
        "signed": true,
        "signedDate": "2026-01-16T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1119",
        "timestamp": "2026-01-16T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B160",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Fiona Campbell (Branch Modernization Lead))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Pilot Program",
            "rationale": "Initial banking Pilot Program privacy assessment submission"
          }
        ],
        "provenanceHash": "0x2220b96dd9"
      },
      {
        "id": "PROV-1120",
        "timestamp": "2026-03-16T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B160",
        "backendBid": "PIA-BE-UK-2026-1060",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd7d0380f7f"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-061",
    "fid": "PIA-FE-2026-B161",
    "bid": "PIA-BE-UK-2026-1061",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Zero-Knowledge Proof (ZKP) Decentralized ID Sandbox",
    "organization": "NatWest Corporate & Commercial",
    "projectOwner": "Alexander Drake (Head of e-FX Clearing)",
    "projectOwnerEmail": "alex.drake@citadel-markets.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Trialing verifiable credential sharing allowing customers to prove age and creditworthiness without disclosing raw bank account numbers.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Zero-Knowledge Proof (ZKP) Decentralized ID Sandbox",
      "whyPia": "PIA governance review for banking pilot program in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "IN_REVISION",
    "createdAt": "2026-04-23T10:00:00Z",
    "updatedAt": "2026-06-23T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 5,
        "selectedLabel": "Pilot Program",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.1,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Alexander Drake (Head of e-FX Clearing)",
        "signed": true,
        "signedDate": "2026-04-23T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1121",
        "timestamp": "2026-04-23T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B161",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Alexander Drake (Head of e-FX Clearing))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Pilot Program",
            "rationale": "Initial banking Pilot Program privacy assessment submission"
          }
        ],
        "provenanceHash": "0x224fc792d4"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-062",
    "fid": "PIA-FE-2026-B162",
    "bid": "PIA-BE-UK-2026-1062",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Dynamic Algorithmic Merchant Discount Rate Pricing Sandbox",
    "organization": "Lloyds Banking Group Retail",
    "projectOwner": "Simon Gallagher (Security & Vault Ops)",
    "projectOwnerEmail": "simon.gallagher@santander.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Small-scale pilot testing real-time merchant fee adjustments based on transaction volume volatility and fraud risk scores.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Dynamic Algorithmic Merchant Discount Rate Pricing Sandbox",
      "whyPia": "PIA governance review for banking pilot program in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Domestic UK jurisdiction boundary"
    },
    "industrySector": "banking",
    "status": "Remediation",
    "createdAt": "2026-07-03T10:00:00Z",
    "updatedAt": "2026-09-03T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 5,
        "selectedLabel": "Pilot Program",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 0,
        "selectedLabel": "No cross-border transfers",
        "score": 1
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1
      },
      "finalRiskScore": 3.1,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 1.8,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "A1",
          "questionTitle": "A1. Project/Process Category",
          "score": 2,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Simon Gallagher (Security & Vault Ops)",
        "signed": true,
        "signedDate": "2026-07-03T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1123",
        "timestamp": "2026-07-03T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B162",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Simon Gallagher (Security & Vault Ops))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Pilot Program",
            "rationale": "Initial banking Pilot Program privacy assessment submission"
          }
        ],
        "provenanceHash": "0x227ed5b7cf"
      },
      {
        "id": "PROV-1124",
        "timestamp": "2026-09-03T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B162",
        "backendBid": "PIA-BE-UK-2026-1062",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd80697da99"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-063",
    "fid": "PIA-FE-2026-B163",
    "bid": "PIA-BE-UK-2026-1063",
    "version": "v2.0",
    "workflowMode": "frontend",
    "projectTitle": "Inter-Bank Fraud Intelligence Consortium Shared Data Exchange",
    "organization": "Citadel Banking & Markets",
    "projectOwner": "Nathalie Dupont (Regulatory Reporting VP)",
    "projectOwnerEmail": "nathalie.dupont@metrobankplc.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Reciprocal data sharing agreement across top UK retail banks sharing mule account IBANs and confirmed fraudster device fingerprints.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Inter-Bank Fraud Intelligence Consortium Shared Data Exchange",
      "whyPia": "PIA governance review for banking data sharing agreement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Draft",
    "createdAt": "2025-10-10T10:00:00Z",
    "updatedAt": "2026-12-10T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 6,
        "selectedLabel": "Data Sharing Agreement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Initial concept/planning phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.9,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 4.7,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Nathalie Dupont (Regulatory Reporting VP)",
        "signed": true,
        "signedDate": "2025-10-10T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1125",
        "timestamp": "2025-10-10T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B163",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Nathalie Dupont (Regulatory Reporting VP))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Data Sharing Agreement",
            "rationale": "Initial banking Data Sharing Agreement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x22ade3dcca"
      },
      {
        "id": "PROV-1126",
        "timestamp": "2026-12-10T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B163",
        "backendBid": "PIA-BE-UK-2026-1063",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd821c7c026"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-064",
    "fid": "PIA-FE-2026-B164",
    "bid": "PIA-BE-UK-2026-1064",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Open Banking Third-Party Provider (TPP) Account Sharing Network",
    "organization": "Apex Global Commercial Bank",
    "projectOwner": "Claire Holloway (FinCrime Head)",
    "projectOwnerEmail": "claire.holloway@jpmorgan.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Bilateral and multilateral data sharing contracts enabling regulated fintech aggregators to access customer bank statements.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Open Banking Third-Party Provider (TPP) Account Sharing Network",
      "whyPia": "PIA governance review for banking data sharing agreement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-01-17T10:00:00Z",
    "updatedAt": "2026-03-17T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 6,
        "selectedLabel": "Data Sharing Agreement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.3,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 4,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Claire Holloway (FinCrime Head)",
        "signed": true,
        "signedDate": "2026-01-17T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-03-17T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1127",
        "timestamp": "2026-01-17T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B164",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Claire Holloway (FinCrime Head))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Data Sharing Agreement",
            "rationale": "Initial banking Data Sharing Agreement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x22dcf201c5"
      },
      {
        "id": "PROV-1128",
        "timestamp": "2026-03-17T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B164",
        "backendBid": "PIA-BE-UK-2026-1064",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd83cf7a5b3"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-065",
    "fid": "PIA-FE-2026-B165",
    "bid": "PIA-BE-UK-2026-1065",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "National Credit Reference Agency Reciprocal Data Pool Agreement",
    "organization": "Santander UK Commercial Services",
    "projectOwner": "Danielle Cooper (Head of Customer Operations)",
    "projectOwnerEmail": "danielle.cooper@barclaycard.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Closed user group agreement contributing monthly revolving credit performance histories to Experian, Equifax, and TransUnion.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "National Credit Reference Agency Reciprocal Data Pool Agreement",
      "whyPia": "PIA governance review for banking data sharing agreement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-04-24T10:00:00Z",
    "updatedAt": "2026-06-24T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 6,
        "selectedLabel": "Data Sharing Agreement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 4.2,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.2,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Danielle Cooper (Head of Customer Operations)",
        "signed": true,
        "signedDate": "2026-04-24T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-06-24T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1129",
        "timestamp": "2026-04-24T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B165",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Danielle Cooper (Head of Customer Operations))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Data Sharing Agreement",
            "rationale": "Initial banking Data Sharing Agreement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x230c0026c0"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-066",
    "fid": "PIA-FE-2026-B166",
    "bid": "PIA-BE-UK-2026-1066",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "Co-Branded Airline Premium Credit Card Partner Sharing Protocol",
    "organization": "Metro Bank Enterprise Operations",
    "projectOwner": "Rachel Higgins (Clearing Operations)",
    "projectOwnerEmail": "rachel.higgins@natwest.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Data exchange protocol sharing customer card spending tiers, frequent flyer loyalty miles, and concierge redemption preferences.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Co-Branded Airline Premium Credit Card Partner Sharing Protocol",
      "whyPia": "PIA governance review for banking data sharing agreement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2026-07-04T10:00:00Z",
    "updatedAt": "2026-09-04T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 6,
        "selectedLabel": "Data Sharing Agreement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.9,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 4.7,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Rachel Higgins (Clearing Operations)",
        "signed": true,
        "signedDate": "2026-07-04T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1131",
        "timestamp": "2026-07-04T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B166",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Rachel Higgins (Clearing Operations))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Data Sharing Agreement",
            "rationale": "Initial banking Data Sharing Agreement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x233b0e4bbb"
      },
      {
        "id": "PROV-1132",
        "timestamp": "2026-09-04T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B166",
        "backendBid": "PIA-BE-UK-2026-1066",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd8735770cd"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-067",
    "fid": "PIA-FE-2026-B167",
    "bid": "PIA-BE-UK-2026-1067",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Prudential Regulation Authority (PRA) Automated Regulatory Pipeline",
    "organization": "BNP Paribas Wholesale London",
    "projectOwner": "Christopher Bell (Asset Reclaim Team)",
    "projectOwnerEmail": "christopher.bell@lloydsbanking.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Direct machine-to-machine data sharing stream feeding daily liquidity ratios and loan exposure matrices to the central bank.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Prudential Regulation Authority (PRA) Automated Regulatory Pipeline",
      "whyPia": "PIA governance review for banking data sharing agreement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2025-10-11T10:00:00Z",
    "updatedAt": "2026-12-11T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 6,
        "selectedLabel": "Data Sharing Agreement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.1,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 3.7,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Christopher Bell (Asset Reclaim Team)",
        "signed": true,
        "signedDate": "2025-10-11T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1133",
        "timestamp": "2025-10-11T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B167",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Christopher Bell (Asset Reclaim Team))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Data Sharing Agreement",
            "rationale": "Initial banking Data Sharing Agreement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x236a1c70b6"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-068",
    "fid": "PIA-FE-2026-B168",
    "bid": "PIA-BE-UK-2026-1068",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Automatic Exchange of Financial Account Information (FATCA/CRS)",
    "organization": "JPMorgan Chase EMEA Treasury",
    "projectOwner": "Beatriz Morales (FX Regulatory Lead)",
    "projectOwnerEmail": "beatriz.morales@santander.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Statutory international data sharing protocol reporting overseas taxpayer account balances to HMRC for bilateral treaty exchange.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Automatic Exchange of Financial Account Information (FATCA/CRS)",
      "whyPia": "PIA governance review for banking data sharing agreement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "IN_REVISION",
    "createdAt": "2026-01-18T10:00:00Z",
    "updatedAt": "2026-03-18T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 6,
        "selectedLabel": "Data Sharing Agreement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.3,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 4,
      "riskLevel": "Low",
      "requiredAction": "Accept with routine monitoring",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Beatriz Morales (FX Regulatory Lead)",
        "signed": true,
        "signedDate": "2026-01-18T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1135",
        "timestamp": "2026-01-18T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B168",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Beatriz Morales (FX Regulatory Lead))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Data Sharing Agreement",
            "rationale": "Initial banking Data Sharing Agreement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x23992a95b1"
      },
      {
        "id": "PROV-1136",
        "timestamp": "2026-03-18T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B168",
        "backendBid": "PIA-BE-UK-2026-1068",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd8a9b73be7"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Low"
    }
  },
  {
    "id": "PIA-2026-069",
    "fid": "PIA-FE-2026-B169",
    "bid": "PIA-BE-UK-2026-1069",
    "version": "v2.0",
    "workflowMode": "frontend",
    "projectTitle": "Bancassurance Telemetry & Joint Underwriting Data Sharing Agreement",
    "organization": "Deutsche Bank UK Wealth Management",
    "projectOwner": "Dr. Alistair Finch (Director of Applied AI)",
    "projectOwnerEmail": "alistair.finch@bank-gov.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Data sharing framework between bank mortgage division and partner insurer for automated life insurance quoting at point of sale.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Bancassurance Telemetry & Joint Underwriting Data Sharing Agreement",
      "whyPia": "PIA governance review for banking data sharing agreement in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Remediation",
    "createdAt": "2026-04-25T10:00:00Z",
    "updatedAt": "2026-06-25T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 6,
        "selectedLabel": "Data Sharing Agreement",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Regulated service (healthcare, finance)",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 4,
        "selectedLabel": "Financial / Account / High-Value",
        "score": 5
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 1,
        "selectedLabel": "Strong field-level tokenization",
        "score": 2
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 1,
        "selectedLabel": "1-2 vetted cloud processors",
        "score": 2
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3.3,
      "likelihoodScore": 1.2,
      "baseRiskScore": 3.9,
      "appliedModifiers": {
        "vendorMultiplier": 1,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.2
      },
      "finalRiskScore": 4.7,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 2.5,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B2",
          "questionTitle": "B2. Data Sensitivity Level",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Dr. Alistair Finch (Director of Applied AI)",
        "signed": true,
        "signedDate": "2026-04-25T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1137",
        "timestamp": "2026-04-25T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B169",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Dr. Alistair Finch (Director of Applied AI))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Data Sharing Agreement",
            "rationale": "Initial banking Data Sharing Agreement privacy assessment submission"
          }
        ],
        "provenanceHash": "0x23c838baac"
      },
      {
        "id": "PROV-1138",
        "timestamp": "2026-06-25T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B169",
        "backendBid": "PIA-BE-UK-2026-1069",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd8c4e72174"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-070",
    "fid": "PIA-FE-2026-B170",
    "bid": "PIA-BE-UK-2026-1070",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Offshore 24/7 AML Transaction Monitoring Operations Hub",
    "organization": "UBS Private Banking London",
    "projectOwner": "Marcus Sterling (VP of Payments Infrastructure)",
    "projectOwnerEmail": "marcus.sterling@apex-finance.org",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Outsourcing overnight Level-1 anti-money laundering alert investigations to a dedicated, vetted facility in Hyderabad, India.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Offshore 24/7 AML Transaction Monitoring Operations Hub",
      "whyPia": "PIA governance review for banking outsourcing business process in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Draft",
    "createdAt": "2026-07-05T10:00:00Z",
    "updatedAt": "2026-09-05T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 7,
        "selectedLabel": "Outsourcing Business Process",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Initial concept/planning phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3,
      "likelihoodScore": 1.3,
      "baseRiskScore": 4,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 6.2,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.2,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Marcus Sterling (VP of Payments Infrastructure)",
        "signed": true,
        "signedDate": "2026-07-05T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1139",
        "timestamp": "2026-07-05T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B170",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Marcus Sterling (VP of Payments Infrastructure))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Outsourcing Business Process",
            "rationale": "Initial banking Outsourcing Business Process privacy assessment submission"
          }
        ],
        "provenanceHash": "0x23f746dfa7"
      },
      {
        "id": "PROV-1140",
        "timestamp": "2026-09-05T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B170",
        "backendBid": "PIA-BE-UK-2026-1070",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd8e0170701"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-071",
    "fid": "PIA-FE-2026-B171",
    "bid": "PIA-BE-UK-2026-1071",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Tier-1 Retail Customer Care Contact Center BPO",
    "organization": "Halifax Mortgage Services",
    "projectOwner": "Helena Bergstrom (Chief Risk Officer)",
    "projectOwnerEmail": "helena.bergstrom@nordic-invest.se",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Outsourcing high-volume inbound general telephone and chat inquiries to a certified business process outsourcer in Belfast and Cape Town.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Tier-1 Retail Customer Care Contact Center BPO",
      "whyPia": "PIA governance review for banking outsourcing business process in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2025-10-12T10:00:00Z",
    "updatedAt": "2026-12-12T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 7,
        "selectedLabel": "Outsourcing Business Process",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.5,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Helena Bergstrom (Chief Risk Officer)",
        "signed": true,
        "signedDate": "2025-10-12T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-12-12T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1141",
        "timestamp": "2025-10-12T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B171",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Helena Bergstrom (Chief Risk Officer))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Outsourcing Business Process",
            "rationale": "Initial banking Outsourcing Business Process privacy assessment submission"
          }
        ],
        "provenanceHash": "0x24265504a2"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-072",
    "fid": "PIA-FE-2026-B172",
    "bid": "PIA-BE-UK-2026-1072",
    "version": "v2.0",
    "workflowMode": "backend",
    "projectTitle": "Physical Mortgage Title Deeds Archival & Scanning BPO",
    "organization": "Barclaycard Consumer Services",
    "projectOwner": "Julian Vance (Head of Core Architecture)",
    "projectOwnerEmail": "julian.vance@barclays.co.uk",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Contracting specialized records management partner to maintain secure temperature-controlled storage and digitize historic land titles.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Physical Mortgage Title Deeds Archival & Scanning BPO",
      "whyPia": "PIA governance review for banking outsourcing business process in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Approved",
    "createdAt": "2026-01-19T10:00:00Z",
    "updatedAt": "2026-03-19T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 7,
        "selectedLabel": "Outsourcing Business Process",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 3,
        "selectedLabel": "Live/production",
        "score": 5
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A3",
          "questionTitle": "A3. Project Status",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Julian Vance (Head of Core Architecture)",
        "signed": true,
        "signedDate": "2026-01-19T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": true,
        "signedDate": "2026-03-19T15:30:00Z",
        "comments": "DPO review complete. Processing is lawful, fair, and proportional with adequate technical safeguards."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1143",
        "timestamp": "2026-01-19T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B172",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Julian Vance (Head of Core Architecture))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Outsourcing Business Process",
            "rationale": "Initial banking Outsourcing Business Process privacy assessment submission"
          }
        ],
        "provenanceHash": "0x245563299d"
      },
      {
        "id": "PROV-1144",
        "timestamp": "2026-03-19T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B172",
        "backendBid": "PIA-BE-UK-2026-1072",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd91676d21b"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-073",
    "fid": "PIA-FE-2026-B173",
    "bid": "PIA-BE-UK-2026-1073",
    "version": "v1.0",
    "workflowMode": "frontend",
    "projectTitle": "Cash-in-Transit Armored Logistics & ATM Replenishment Operations",
    "organization": "Coutts & Co Private Bank",
    "projectOwner": "Elena Rostova (Chief Data Officer)",
    "projectOwnerEmail": "elena.rostova@apexbank-global.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Outsourcing the collection, counting, and replenishment of cash across 2,400 off-site ATMs to G4S armored courier services.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under AWS Cloud.",
    "structuredDataFlow": {
      "whatApp": "Cash-in-Transit Armored Logistics & ATM Replenishment Operations",
      "whyPia": "PIA governance review for banking outsourcing business process in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> AWS Cloud Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "AWS Cloud UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "DPO Review",
    "createdAt": "2026-04-26T10:00:00Z",
    "updatedAt": "2026-06-26T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 7,
        "selectedLabel": "Outsourcing Business Process",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.5,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Elena Rostova (Chief Data Officer)",
        "signed": true,
        "signedDate": "2026-04-26T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1145",
        "timestamp": "2026-04-26T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B173",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Elena Rostova (Chief Data Officer))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Outsourcing Business Process",
            "rationale": "Initial banking Outsourcing Business Process privacy assessment submission"
          }
        ],
        "provenanceHash": "0x2484714e98"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-074",
    "fid": "PIA-FE-2026-B174",
    "bid": "PIA-BE-UK-2026-1074",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Commercial Collateral Asset Appraisal & Title Search BPO",
    "organization": "Monzo Digital Banking",
    "projectOwner": "Sebastian Vogel (Wealth Compliance Director)",
    "projectOwnerEmail": "sebastian.vogel@db.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Outsourcing commercial property valuation appraisals and environmental site risk searches to First American legal search services.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under Azure Gov.",
    "structuredDataFlow": {
      "whatApp": "Commercial Collateral Asset Appraisal & Title Search BPO",
      "whyPia": "PIA governance review for banking outsourcing business process in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> Azure Gov Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "Azure Gov UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Submitted",
    "createdAt": "2026-07-06T10:00:00Z",
    "updatedAt": "2026-09-06T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 7,
        "selectedLabel": "Outsourcing Business Process",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.7,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.5,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.5,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.6,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Sebastian Vogel (Wealth Compliance Director)",
        "signed": true,
        "signedDate": "2026-07-06T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1147",
        "timestamp": "2026-07-06T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B174",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Sebastian Vogel (Wealth Compliance Director))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Outsourcing Business Process",
            "rationale": "Initial banking Outsourcing Business Process privacy assessment submission"
          }
        ],
        "provenanceHash": "0x24b37f7393"
      },
      {
        "id": "PROV-1148",
        "timestamp": "2026-09-06T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B174",
        "backendBid": "PIA-BE-UK-2026-1074",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd94cd69d35"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-075",
    "fid": "PIA-FE-2026-B175",
    "bid": "PIA-BE-UK-2026-1075",
    "version": "v2.0",
    "workflowMode": "frontend",
    "projectTitle": "Night-Shift Fraud Alert Customer Outbound Verification Bureau",
    "organization": "Starling Bank API Platform",
    "projectOwner": "Priya Narayanan (Liquidity Product VP)",
    "projectOwnerEmail": "priya.narayanan@sc.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Engaging external specialized fraud contact center to phone customers during out-of-hours compromised card emergencies.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under GCP Vertex.",
    "structuredDataFlow": {
      "whatApp": "Night-Shift Fraud Alert Customer Outbound Verification Bureau",
      "whyPia": "PIA governance review for banking outsourcing business process in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> GCP Vertex Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "GCP Vertex UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "IN_REVISION",
    "createdAt": "2025-10-13T10:00:00Z",
    "updatedAt": "2026-12-13T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 7,
        "selectedLabel": "Outsourcing Business Process",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 0,
        "selectedLabel": "No - First assessment",
        "score": 5
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 3,
        "selectedLabel": "100,000 to 1,000,000 individuals",
        "score": 4
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "Criminal offence / fraud register",
        "score": 4
      },
      "C1": {
        "optionIndex": 2,
        "selectedLabel": "Compliance with Legal Obligation (Art 6(1)(c))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 1,
        "selectedLabel": "Documented procedure within statutory 30-day window",
        "score": 2
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 3,
      "likelihoodScore": 1.3,
      "baseRiskScore": 4,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 6.2,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Compliance with Legal Obligation (Art 6(1)(c))",
        "applicableRights": {
          "erasure": false,
          "portability": false,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.",
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 3.2,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "A4",
          "questionTitle": "A4. Has a PIA/DPIA been done before for this supplier/project?",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "B5",
          "questionTitle": "B5. Special Categories Processing",
          "score": 4,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Priya Narayanan (Liquidity Product VP)",
        "signed": true,
        "signedDate": "2025-10-13T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1149",
        "timestamp": "2025-10-13T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B175",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Priya Narayanan (Liquidity Product VP))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Outsourcing Business Process",
            "rationale": "Initial banking Outsourcing Business Process privacy assessment submission"
          }
        ],
        "provenanceHash": "0x24e28d988e"
      },
      {
        "id": "PROV-1150",
        "timestamp": "2026-12-13T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B175",
        "backendBid": "PIA-BE-UK-2026-1075",
        "parentVersion": "v1.0",
        "newVersion": "v2.0",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd9680682c2"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  },
  {
    "id": "PIA-2026-076",
    "fid": "PIA-FE-2026-B176",
    "bid": "PIA-BE-UK-2026-1076",
    "version": "v1.1",
    "workflowMode": "backend",
    "projectTitle": "Unclaimed Property & Deceased Estate Administration Service",
    "organization": "Virgin Money Digital Retail",
    "projectOwner": "Gareth Evans (Trade Finance Tech Director)",
    "projectOwnerEmail": "gareth.evans@natwest.com",
    "dpoName": "Amit Kumar Pandey (DPO)",
    "dpoEmail": "dpo.lead@enterprise-governance.org",
    "projectDescription": "Outsourcing probate tracing and deceased customer bereavement administration services to Equiniti financial administration bureau.",
    "dataFlowDescription": "Data ingested through mTLS endpoints into banking processing enclave, validated via tokenized schemas, and archived with hardware-level HSM encryption under On-Prem / Local.",
    "structuredDataFlow": {
      "whatApp": "Unclaimed Property & Deceased Estate Administration Service",
      "whyPia": "PIA governance review for banking outsourcing business process in compliance with UK GDPR and FCA standards",
      "howFlows": "Channel Gateway -> Encrypted Message Bus -> On-Prem / Local Enclave -> Audited Settlement Database",
      "whenRecordStd": "6 to 10 years statutory financial records retention",
      "whereStored": "On-Prem / Local UK financial security partition",
      "crossBorder": "Cross-border transfer under UK approved standard contractual clauses (SCCs)"
    },
    "industrySector": "banking",
    "status": "Remediation",
    "createdAt": "2026-01-20T10:00:00Z",
    "updatedAt": "2026-03-20T15:30:00Z",
    "answers": {
      "A1": {
        "optionIndex": 7,
        "selectedLabel": "Outsourcing Business Process",
        "score": 2
      },
      "A2": {
        "optionIndex": 3,
        "selectedLabel": "Mission-critical business function",
        "score": 5
      },
      "A3": {
        "optionIndex": 1,
        "selectedLabel": "Implementation phase",
        "score": 2
      },
      "A4": {
        "optionIndex": 1,
        "selectedLabel": "Yes - Major modification to existing system",
        "score": 2
      },
      "B1": {
        "optionIndex": 2,
        "selectedLabel": "Customers/consumers",
        "score": 3
      },
      "B2": {
        "optionIndex": 2,
        "selectedLabel": "Standard Personal Identifiers",
        "score": 3
      },
      "B3": {
        "optionIndex": 4,
        "selectedLabel": "Over 1,000,000 individuals",
        "score": 5
      },
      "B4": {
        "optionIndex": 1,
        "selectedLabel": "Direct from customer + internal transaction ledger",
        "score": 2
      },
      "B5": {
        "optionIndex": 0,
        "selectedLabel": "None / Not applicable",
        "score": 1
      },
      "C1": {
        "optionIndex": 1,
        "selectedLabel": "Necessary for performance of a Contract (Art 6(1)(b))",
        "score": 2
      },
      "C2": {
        "optionIndex": 0,
        "selectedLabel": "Granular, specific, documented purpose",
        "score": 1
      },
      "C3": {
        "optionIndex": 1,
        "selectedLabel": "Standard formal request procedure",
        "score": 2
      },
      "C4": {
        "optionIndex": 0,
        "selectedLabel": "Single, specific documented banking purpose",
        "score": 1
      },
      "C5": {
        "optionIndex": 0,
        "selectedLabel": "Regulatory banking authority justification",
        "score": 1
      },
      "D1": {
        "optionIndex": 1,
        "selectedLabel": "Strict data minimization enforced",
        "score": 2
      },
      "D2": {
        "optionIndex": 2,
        "selectedLabel": "Pseudonymized with reversible key",
        "score": 3
      },
      "D3": {
        "optionIndex": 1,
        "selectedLabel": "Verified structured schema with validation",
        "score": 2
      },
      "E1": {
        "optionIndex": 3,
        "selectedLabel": "Multiple third-party API sub-processors",
        "score": 4
      },
      "E2": {
        "optionIndex": 1,
        "selectedLabel": "Pre-approved processor list with customer notification",
        "score": 2
      },
      "E3": {
        "optionIndex": 3,
        "selectedLabel": "Standard Contractual Clauses with TIA",
        "score": 4
      },
      "E4": {
        "optionIndex": 1,
        "selectedLabel": "UK GDPR and FCA operational compliance",
        "score": 2
      },
      "F1": {
        "optionIndex": 0,
        "selectedLabel": "Automated self-service rights portal",
        "score": 1
      },
      "F2": {
        "optionIndex": 1,
        "selectedLabel": "Within statutory 30-day timeline",
        "score": 2
      },
      "F3": {
        "optionIndex": 0,
        "selectedLabel": "Layered privacy notice presented during onboarding",
        "score": 1
      },
      "F4": {
        "optionIndex": 0,
        "selectedLabel": "Automated processing strictly deterministic",
        "score": 1
      },
      "G1": {
        "optionIndex": 0,
        "selectedLabel": "Documented, verified end-to-end data flow map",
        "score": 1
      },
      "G2": {
        "optionIndex": 0,
        "selectedLabel": "TLS 1.3 with mTLS mutual certificate authentication",
        "score": 1
      },
      "G3": {
        "optionIndex": 0,
        "selectedLabel": "AES-256-GCM with hardware security module (HSM) keys",
        "score": 1
      },
      "H1": {
        "optionIndex": 0,
        "selectedLabel": "Documented statutory retention schedule (6-10 years)",
        "score": 1
      },
      "H2": {
        "optionIndex": 1,
        "selectedLabel": "Automated policy purging with verification certificate",
        "score": 2
      },
      "H3": {
        "optionIndex": 0,
        "selectedLabel": "Contractual post-termination deletion within 30 days",
        "score": 1
      },
      "I1": {
        "optionIndex": 0,
        "selectedLabel": "Role-based access control (RBAC) with MFA enforced",
        "score": 1
      },
      "I2": {
        "optionIndex": 0,
        "selectedLabel": "Annual third-party CREST-certified penetration test",
        "score": 1
      },
      "I3": {
        "optionIndex": 0,
        "selectedLabel": "Immutable SIEM event logging with 24/7 SOC monitoring",
        "score": 1
      },
      "I4": {
        "optionIndex": 0,
        "selectedLabel": "Incident response plan tested bi-annually",
        "score": 1
      },
      "K1": {
        "optionIndex": 0,
        "selectedLabel": "Independent DPO formal sign-off required",
        "score": 1
      },
      "K2": {
        "optionIndex": 0,
        "selectedLabel": "Formal Article 30 RoPA entry maintained",
        "score": 1
      },
      "K3": {
        "optionIndex": 0,
        "selectedLabel": "Technical architecture and compliance reviewed",
        "score": 1
      }
    },
    "riskResult": {
      "impactScore": 2.8,
      "likelihoodScore": 1.3,
      "baseRiskScore": 3.8,
      "appliedModifiers": {
        "vendorMultiplier": 1.3,
        "aiMultiplier": 1,
        "crossBorderMultiplier": 1.2,
        "specialCategoryMultiplier": 1,
        "noLawfulBasisMultiplier": 1,
        "lawfulBasisRightsMultiplier": 1,
        "totalMultiplier": 1.56
      },
      "finalRiskScore": 5.9,
      "riskLevel": "Medium",
      "requiredAction": "Mitigation plan required, DPO review",
      "lawfulBasisEvaluation": {
        "selectedBasis": "Necessary for performance of a Contract (Art 6(1)(b))",
        "applicableRights": {
          "erasure": true,
          "portability": true,
          "object": false,
          "withdrawConsent": false
        },
        "complianceStatus": "Compliant",
        "findings": [
          "Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation."
        ],
        "rightsPenaltyMultiplier": 1
      },
      "sectionRiskProfiles": {
        "dataProcessingRisk": 2.8,
        "legalComplianceRisk": 1.4,
        "dataSharingRisk": 3,
        "securityRisk": 1,
        "governanceRisk": 1
      },
      "topRiskAreas": [
        {
          "questionId": "A2",
          "questionTitle": "A2. Project Criticality",
          "score": 5,
          "section": "SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION"
        },
        {
          "questionId": "B3",
          "questionTitle": "B3. Data Volume Scale",
          "score": 5,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        },
        {
          "questionId": "E1",
          "questionTitle": "E1. Third-Party Sharing",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "E3",
          "questionTitle": "E3. Cross-Border Transfers",
          "score": 4,
          "section": "SECTION E: DATA SHARING & TRANSFERS"
        },
        {
          "questionId": "B1",
          "questionTitle": "B1. Data Subject Categories",
          "score": 3,
          "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY"
        }
      ]
    },
    "endorsements": [
      {
        "role": "Project/Process Owner",
        "name": "Gareth Evans (Trade Finance Tech Director)",
        "signed": true,
        "signedDate": "2026-01-20T10:00:00Z",
        "comments": "All data processing operations mapped and verified against operational documentation."
      },
      {
        "role": "Data Protection Officer",
        "name": "Amit Kumar Pandey (DPO)",
        "signed": false,
        "comments": "Under active compliance evaluation and DPIA necessity assessment."
      }
    ],
    "provenanceTrail": [
      {
        "id": "PROV-1151",
        "timestamp": "2026-01-20T10:00:00Z",
        "triggeringFid": "PIA-FE-2026-B176",
        "parentVersion": "v0.0",
        "newVersion": "v1.0",
        "actionExecuted": "INITIAL_SUBMISSION",
        "modifiedBy": "Project Lead (Gareth Evans (Trade Finance Tech Director))",
        "deltaLog": [
          {
            "sectionId": "SECTION A",
            "parameter": "Project Classification",
            "previousValue": "None",
            "newValue": "Outsourcing Business Process",
            "rationale": "Initial banking Outsourcing Business Process privacy assessment submission"
          }
        ],
        "provenanceHash": "0x25119bbd89"
      },
      {
        "id": "PROV-1152",
        "timestamp": "2026-03-20T15:30:00Z",
        "triggeringFid": "PIA-FE-2026-B176",
        "backendBid": "PIA-BE-UK-2026-1076",
        "parentVersion": "v1.0",
        "newVersion": "v1.1",
        "actionExecuted": "REGULATORY_TAILORING",
        "modifiedBy": "Data Protection Officer (Amit Kumar Pandey DPO)",
        "deltaLog": [
          {
            "sectionId": "REGULATORY_ALIGNMENT",
            "parameter": "Target Framework Alignment",
            "previousValue": "UK GDPR Only",
            "newValue": "UK GDPR & DPA 2018 + FCA Operational Resilience + PCI-DSS v4.0",
            "rationale": "Prudential and operational banking risk tailoring sign-off"
          }
        ],
        "provenanceHash": "0xd98336684f"
      }
    ],
    "regulatoryTailoring": {
      "selectedFrameworks": [
        "UK GDPR & DPA 2018",
        "FCA Operational Resilience",
        "PCI-DSS v4.0"
      ],
      "smeOverrideNotes": "Banking compliance verified under FCA Senior Managers and Certification Regime (SM&CR) and PRA operational resilience guidelines.",
      "smeRiskAdjustment": "Medium"
    }
  }
];

export const BANKING_GAPS: RemediationGap[] = [
  {
    "id": "GAP-BANK-001",
    "piaId": "PIA-2026-001",
    "piaTitle": "Core Banking Multi-Currency Ledger Modernization",
    "code": "GAP-D2",
    "section": "SECTION D: DATA MINIMIZATION & COLLECTION",
    "description": "Transaction memo free-text fields in international SWIFT MT103 wires occasionally contain unencrypted personal addresses and telephone numbers.",
    "regulatoryReference": "UK GDPR Art 5(1)(c) / IIAC D12",
    "riskLevel": "Medium",
    "assignedOwner": "Julian Vance (Head of Core Architecture)",
    "mitigationAction": "Deploy regex data-masking filter on incoming wire narratives to redact PII prior to core database ingestion.",
    "createdAt": "2026-04-10T10:00:00Z",
    "targetDueDate": "2026-08-15T23:59:59Z",
    "status": "In Progress",
    "followUps": [
      {
        "id": "FU-B101",
        "author": "Amit Kumar Pandey (DPO)",
        "role": "Data Protection Officer",
        "timestamp": "2026-05-12T11:00:00Z",
        "comment": "Regex rules tested against historical wire archive with 99.4% precision. Full deployment scheduled for next sprint."
      }
    ]
  },
  {
    "id": "GAP-BANK-002",
    "piaId": "PIA-2026-007",
    "piaTitle": "Centralized Enterprise Cloud Data Lakehouse",
    "code": "GAP-E3",
    "section": "SECTION E: DATA SHARING & TRANSFERS",
    "description": "Snowflake cloud backup replication to Ireland AWS region lacks formal updated UK Addendum to EU Standard Contractual Clauses.",
    "regulatoryReference": "UK GDPR Art 46 / ICO Transfer Guidance",
    "riskLevel": "High",
    "assignedOwner": "Elena Rostova (Chief Data Officer)",
    "mitigationAction": "Execute UK International Data Transfer Addendum with Snowflake Inc and verify European cloud storage boundaries.",
    "createdAt": "2026-03-01T14:00:00Z",
    "targetDueDate": "2026-07-20T23:59:59Z",
    "status": "Open",
    "followUps": [
      {
        "id": "FU-B102",
        "author": "Amit Kumar Pandey (DPO)",
        "role": "Data Protection Officer",
        "timestamp": "2026-04-18T16:30:00Z",
        "comment": "Legal team reviewed draft addendum. Awaiting signature from vendor enterprise counsel."
      }
    ]
  },
  {
    "id": "GAP-BANK-003",
    "piaId": "PIA-2026-011",
    "piaTitle": "Real-Time Cross-Border Wire AML Screening Workflow",
    "code": "GAP-F4",
    "section": "SECTION F: INDIVIDUAL RIGHTS MANAGEMENT",
    "description": "Automated sanctions false-positive alert freezing mechanism lacks self-service notification to innocent remitters under Tipping-Off constraints.",
    "regulatoryReference": "UK POCA 2002 s.333A vs UK GDPR Art 12",
    "riskLevel": "Critical",
    "assignedOwner": "Claire Holloway (FinCrime Head)",
    "mitigationAction": "Establish legal protocol balancing statutory anti-tipping-off restrictions with fair processing explanations for delayed wires.",
    "createdAt": "2026-02-15T09:30:00Z",
    "targetDueDate": "2026-06-30T23:59:59Z",
    "status": "Overdue",
    "followUps": [
      {
        "id": "FU-B103",
        "author": "Amit Kumar Pandey (DPO)",
        "role": "Data Protection Officer",
        "timestamp": "2026-06-25T14:00:00Z",
        "comment": "Target date missed due to joint consultation with National Crime Agency (NCA). Extension requested to August 2026."
      }
    ]
  },
  {
    "id": "GAP-BANK-004",
    "piaId": "PIA-2026-031",
    "piaTitle": "Real-Time Transaction Fraud & Mule Account Detection ML",
    "code": "GAP-AI-01",
    "section": "SECTION F: INDIVIDUAL RIGHTS MANAGEMENT",
    "description": "Graph neural network automated account suspension model lacks documented explainability logs for customer redress under EU AI Act Art 14.",
    "regulatoryReference": "EU AI Act Art 14 / UK GDPR Art 22",
    "riskLevel": "Critical",
    "assignedOwner": "Dr. Alistair Finch (Director of Applied AI)",
    "mitigationAction": "Integrate SHAP value attribution telemetry storing explainability features for all automated account restriction events.",
    "createdAt": "2026-03-20T11:00:00Z",
    "targetDueDate": "2026-08-30T23:59:59Z",
    "status": "In Progress",
    "followUps": [
      {
        "id": "FU-B104",
        "author": "Amit Kumar Pandey (DPO)",
        "role": "Data Protection Officer",
        "timestamp": "2026-05-30T10:00:00Z",
        "comment": "SHAP calculation module integrated into QA inference cluster. Performance impact is under 15ms per transaction."
      }
    ]
  },
  {
    "id": "GAP-BANK-005",
    "piaId": "PIA-2026-032",
    "piaTitle": "Generative AI Wealth Advisory & Portfolio Copilot",
    "code": "GAP-AI-02",
    "section": "SECTION C: LAWFUL BASIS & FAIR PROCESSING",
    "description": "Wealth management client financial queries and portfolio notes ingested into LLM inference context without explicit prompt retention bounds.",
    "regulatoryReference": "FCA FG21/1 / UK GDPR Art 5(1)(e)",
    "riskLevel": "High",
    "assignedOwner": "Marcus Sterling (VP of Payments)",
    "mitigationAction": "Enforce zero-data-retention API contracts with enterprise LLM provider ensuring no training on bank client prompts.",
    "createdAt": "2026-04-05T13:00:00Z",
    "targetDueDate": "2026-07-31T23:59:59Z",
    "status": "Resolved",
    "followUps": [
      {
        "id": "FU-B105",
        "author": "Amit Kumar Pandey (DPO)",
        "role": "Data Protection Officer",
        "timestamp": "2026-06-15T15:00:00Z",
        "comment": "Enterprise zero-retention addendum signed and cryptographically verified via gateway headers. Gap resolved."
      }
    ]
  },
  {
    "id": "GAP-BANK-006",
    "piaId": "PIA-2026-024",
    "piaTitle": "Biometric Mobile Customer Onboarding & Liveness App",
    "code": "GAP-B5",
    "section": "SECTION B: DATA CHARACTERISTICS & SENSITIVITY",
    "description": "Customer facial biometric geometry vectors stored for 90 days after account opening for fraud defense exceeds necessary retention window.",
    "regulatoryReference": "UK DPA 2018 Special Category / ICO Biometrics Guidance",
    "riskLevel": "High",
    "assignedOwner": "Helena Bergstrom (Chief Risk Officer)",
    "mitigationAction": "Reduce biometric raw vector storage to 72 hours post-onboarding; replace with irreversible one-way cryptographic hash token.",
    "createdAt": "2026-03-15T10:00:00Z",
    "targetDueDate": "2026-08-10T23:59:59Z",
    "status": "In Progress",
    "followUps": []
  },
  {
    "id": "GAP-BANK-007",
    "piaId": "PIA-2026-048",
    "piaTitle": "Cloud SaaS Core Banking Engine (Thought Machine Vault)",
    "code": "GAP-E1",
    "section": "SECTION E: DATA SHARING & TRANSFERS",
    "description": "Sub-processor notification timeline in Thought Machine SaaS agreement requires 14 days notice, whereas bank policy mandates 30 days.",
    "regulatoryReference": "UK GDPR Art 28(2) / EBA Outsourcing Guidelines",
    "riskLevel": "Medium",
    "assignedOwner": "Julian Vance (Head of Core Architecture)",
    "mitigationAction": "Negotiate custom DPA amendment aligning sub-processor notification with bank 30-day objection window.",
    "createdAt": "2026-02-10T14:00:00Z",
    "targetDueDate": "2026-07-15T23:59:59Z",
    "status": "Resolved",
    "followUps": [
      {
        "id": "FU-B106",
        "author": "Julian Vance",
        "role": "Project Owner",
        "timestamp": "2026-05-02T11:00:00Z",
        "comment": "Contract amendment signed with Thought Machine legal team. 30-day notice confirmed."
      }
    ]
  },
  {
    "id": "GAP-BANK-008",
    "piaId": "PIA-2026-070",
    "piaTitle": "Offshore 24/7 AML Transaction Monitoring Operations Hub",
    "code": "GAP-SEC-01",
    "section": "SECTION I: SECURITY CONTROLS",
    "description": "Offshore analyst thin-client workstations lack physical webcam privacy shutters and biometric room-entry access logs.",
    "regulatoryReference": "ISO 27001:2022 A.7.4 / PRA SS2/21",
    "riskLevel": "High",
    "assignedOwner": "Claire Holloway (FinCrime Head)",
    "mitigationAction": "Deploy Faraday cleanroom protocol with biometric turnstiles and zero-personal-device enforcement at offshore monitoring facility.",
    "createdAt": "2026-01-28T09:00:00Z",
    "targetDueDate": "2026-07-25T23:59:59Z",
    "status": "In Progress",
    "followUps": []
  },
  {
    "id": "GAP-BANK-009",
    "piaId": "PIA-2026-033",
    "piaTitle": "Algorithmic Credit Risk Underwriting & Default Classifier",
    "code": "GAP-AI-03",
    "section": "SECTION F: INDIVIDUAL RIGHTS MANAGEMENT",
    "description": "Underwriting neural network model uses residential postcode clustering which correlates with demographic protected characteristics.",
    "regulatoryReference": "Equality Act 2010 s.19 / FCA Principle 6",
    "riskLevel": "Critical",
    "assignedOwner": "Dr. Alistair Finch (Director of Applied AI)",
    "mitigationAction": "Execute disparate impact fairness audit and remove geographic proxy features from neural network training pipeline.",
    "createdAt": "2026-03-05T14:30:00Z",
    "targetDueDate": "2026-07-10T23:59:59Z",
    "status": "Overdue",
    "followUps": [
      {
        "id": "FU-B107",
        "author": "Amit Kumar Pandey (DPO)",
        "role": "Data Protection Officer",
        "timestamp": "2026-06-20T16:00:00Z",
        "comment": "Fairness audit report submitted. Disparate impact ratio corrected from 0.76 to 0.94. Code merge pending final review."
      }
    ]
  },
  {
    "id": "GAP-BANK-010",
    "piaId": "PIA-2026-063",
    "piaTitle": "Inter-Bank Fraud Intelligence Consortium Shared Data Exchange",
    "code": "GAP-C1",
    "section": "SECTION C: LAWFUL BASIS & FAIR PROCESSING",
    "description": "Participating banks share suspected mule account telephone numbers without unified data privacy notice wording across all partner institutions.",
    "regulatoryReference": "UK GDPR Art 14 / ICO Data Sharing Code of Practice",
    "riskLevel": "Medium",
    "assignedOwner": "Marcus Sterling (VP of Payments)",
    "mitigationAction": "Issue harmonized customer transparency notice updates across UK Finance consortium member digital banking terms.",
    "createdAt": "2026-04-12T11:15:00Z",
    "targetDueDate": "2026-09-01T23:59:59Z",
    "status": "In Progress",
    "followUps": []
  }
];
