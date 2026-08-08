import { PIAAssessment, RemediationGap } from '../types';

export const INITIAL_PIAS: PIAAssessment[] = [
  {
    id: 'PIA-2026-001',
    fid: 'PIA-FE-2026-A8F9K2L1',
    bid: 'PIA-BE-UK-2026-000412',
    version: 'v2.0',
    workflowMode: 'backend',
    projectTitle: 'PatientCare AI Clinical Diagnostic Assistant',
    organization: 'HealthTech Innovation Labs',
    projectOwner: 'Dr. Sarah Lin',
    projectOwnerEmail: 'sarah.lin@healthtech-labs.io',
    dpoName: 'Amit Kumar Pandey (DPO)',
    dpoEmail: 'amit.pandey@healthtech-labs.io',
    projectDescription: 'Deploying an LLM-powered clinical decision support tool to summarize patient health records and suggest triage pathways in regional clinics.',
    dataFlowDescription: 'EHR records stream to on-prem inference server via mTLS. De-identified patient notes are indexed in vector DB. AI outputs are stored in audit database.',
    industrySector: 'healthcare',
    status: 'DPO Review',
    createdAt: '2026-06-15T09:00:00Z',
    updatedAt: '2026-07-20T14:30:00Z',
    provenanceTrail: [
      {
        id: 'PROV-1001',
        timestamp: '2026-06-15T09:00:00Z',
        triggeringFid: 'PIA-FE-2026-A8F9K2L1',
        parentVersion: 'v0.0',
        newVersion: 'v1.0',
        actionExecuted: 'INITIAL_SUBMISSION',
        modifiedBy: 'Project Lead (Dr. Sarah Lin)',
        deltaLog: [
          { sectionId: 'SECTION A', parameter: 'Project Classification', previousValue: 'None', newValue: 'AI/Machine Learning Use Case', rationale: 'Initial draft assessment created' }
        ],
        provenanceHash: '0x7e8f9a2b1c3d4e5f6a7b8c9d0e1f2a3b'
      },
      {
        id: 'PROV-1002',
        timestamp: '2026-06-18T10:15:00Z',
        triggeringFid: 'PIA-FE-2026-A8F9K2L1',
        backendBid: 'PIA-BE-UK-2026-000412',
        parentVersion: 'v1.0',
        newVersion: 'v1.1',
        actionExecuted: 'FRONTEND_DRAFT_UPDATE',
        modifiedBy: 'Data SME (Dr. Sarah Lin)',
        deltaLog: [
          { sectionId: 'SECTION B', parameter: 'B2. Data Sensitivity Level', previousValue: 'General Personal Data', newValue: 'Health/medical data', rationale: 'Updated data characteristic questionnaire' }
        ],
        provenanceHash: '0x8f9a2b1c3d4e5f6a7b8c9d0e1f2a3b4c'
      },
      {
        id: 'PROV-1003',
        timestamp: '2026-07-20T14:30:00Z',
        triggeringFid: 'PIA-FE-2026-A8F9K2L1',
        backendBid: 'PIA-BE-UK-2026-000412',
        parentVersion: 'v1.1',
        newVersion: 'v2.0',
        actionExecuted: 'REGULATORY_TAILORING',
        modifiedBy: 'Privacy Officer (Amit Kumar Pandey DPO)',
        deltaLog: [
          { sectionId: 'BACKEND_TAILORING', parameter: 'Target Framework Alignment', previousValue: 'UK GDPR Only', newValue: 'UK GDPR & DPA 2018 + EU AI Act + NIST AI RMF 1.0', rationale: 'Backend SME Regulatory Override & Alignment' }
        ],
        provenanceHash: '0x9a2b1c3d4e5f6a7b8c9d0e1f2a3b4c5d'
      }
    ],
    regulatoryTailoring: {
      selectedFrameworks: ['UK GDPR & DPA 2018', 'EU GDPR & EU AI Act', 'NIST AI RMF 1.0'],
      smeOverrideNotes: 'AI Decision support requires human-in-the-loop override telemetry audit logs under EU AI Act Art 14.',
      smeRiskAdjustment: 'High'
    },
    answers: {
      A1: { optionIndex: 5, selectedLabel: 'AI/Machine Learning Use Case', score: 5 },
      A2: { optionIndex: 3, selectedLabel: 'Regulated service (healthcare, finance)', score: 5 },
      A3: { optionIndex: 1, selectedLabel: 'Design/development phase', score: 2 },
      A4: { optionIndex: 0, selectedLabel: 'No - First assessment', score: 5 },
      
      B1: { optionIndex: 4, selectedLabel: 'Vulnerable populations (patients, elderly, disabled)', score: 5 },
      B2: { optionIndex: 4, selectedLabel: 'Health/medical data', score: 5 },
      B3: { optionIndex: 3, selectedLabel: '10,000-100,000 individuals', score: 4 },
      B4: { optionIndex: 1, selectedLabel: 'From existing internal systems', score: 2 },
      B5: { optionIndex: 1, selectedLabel: 'Health data', score: 5 },

      C1: { optionIndex: 0, selectedLabel: 'Explicit Consent obtained and documented', score: 2 },
      C2: { optionIndex: 0, selectedLabel: 'Granular, specific, documented consent', score: 1 },
      C3: { optionIndex: 0, selectedLabel: 'Easy withdrawal process available', score: 1 },
      C4: { optionIndex: 0, selectedLabel: 'Single, specific documented purpose', score: 1 },
      C5: { optionIndex: 2, selectedLabel: 'Section 251/S251 approval (health)', score: 3 },

      D1: { optionIndex: 1, selectedLabel: 'Limited additional data with justification', score: 2 },
      D2: { optionIndex: 2, selectedLabel: 'Partially pseudonymized', score: 3 },
      D3: { optionIndex: 1, selectedLabel: 'Standard form/questionnaire', score: 2 },

      E1: { optionIndex: 1, selectedLabel: 'Shared with 1-2 vetted processors', score: 2 },
      E2: { optionIndex: 1, selectedLabel: 'Pre-approved list with notification', score: 2 },
      E3: { optionIndex: 0, selectedLabel: 'No cross-border transfers', score: 1 },
      E4: { optionIndex: 1, selectedLabel: 'Single jurisdiction compliance', score: 2 },

      F1: { optionIndex: 1, selectedLabel: 'Manual process with documented procedures', score: 2 },
      F2: { optionIndex: 1, selectedLabel: 'Within statutory timelines', score: 2 },
      F3: { optionIndex: 0, selectedLabel: 'Comprehensive, layered notice provided', score: 1 },
      F4: { optionIndex: 1, selectedLabel: 'Human-in-the-loop required', score: 2 },

      G1: { optionIndex: 0, selectedLabel: 'Up-to-date flow diagram exists', score: 1 },
      G2: { optionIndex: 0, selectedLabel: 'All transmissions encrypted', score: 1 },
      G3: { optionIndex: 1, selectedLabel: 'Sensitive data encrypted', score: 2 },
      G4: { optionIndex: 0, selectedLabel: 'Complete logical/virtual separation', score: 1 },

      H1: { optionIndex: 0, selectedLabel: 'Clear retention schedule exists', score: 1 },
      H2: { optionIndex: 1, selectedLabel: 'Manual secure disposal', score: 2 },
      H3: { optionIndex: 0, selectedLabel: 'Contractual return/destruction obligation', score: 1 },

      I1: { optionIndex: 0, selectedLabel: 'Role-based with MFA', score: 1 },
      I2: { optionIndex: 0, selectedLabel: 'Comprehensive logging with alerts', score: 1 },
      I3: { optionIndex: 1, selectedLabel: 'Documented plan exists', score: 2 },
      I4: { optionIndex: 0, selectedLabel: 'Comprehensive privacy training', score: 1 },
      I5: { optionIndex: 0, selectedLabel: 'ISO 27001/27701 certified', score: 1 },

      K1: { optionIndex: 0, selectedLabel: 'Clear roles with assigned owners', score: 1 },
      K2: { optionIndex: 0, selectedLabel: 'Privacy integrated throughout', score: 1 },
      K3: { optionIndex: 1, selectedLabel: 'Documented in central RoPA', score: 2 },
      K4: { optionIndex: 0, selectedLabel: 'Comprehensive consultation completed', score: 1 }
    },
    riskResult: {
      impactScore: 4.2,
      likelihoodScore: 1.5,
      baseRiskScore: 6.3,
      appliedModifiers: {
        vendorMultiplier: 1.0,
        aiMultiplier: 1.4,
        crossBorderMultiplier: 1.0,
        specialCategoryMultiplier: 1.3,
        noLawfulBasisMultiplier: 1.0,
        lawfulBasisRightsMultiplier: 1.0,
        totalMultiplier: 1.82
      },
      finalRiskScore: 11.5,
      riskLevel: 'High',
      requiredAction: 'Significant changes required, Executive approval',
      sectionRiskProfiles: {
        dataProcessingRisk: 4.4,
        legalComplianceRisk: 1.8,
        dataSharingRisk: 1.8,
        securityRisk: 1.2,
        governanceRisk: 1.3
      },
      topRiskAreas: [
        { questionId: 'A1', questionTitle: 'A1. Project/Process Category', score: 5, section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION' },
        { questionId: 'A2', questionTitle: 'A2. Project Criticality', score: 5, section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION' },
        { questionId: 'B1', questionTitle: 'B1. Data Subject Categories', score: 5, section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY' },
        { questionId: 'B2', questionTitle: 'B2. Data Sensitivity Level', score: 5, section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY' },
        { questionId: 'B5', questionTitle: 'B5. Special Categories Processing', score: 5, section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY' }
      ]
    },
    nhsChecklist: {
      fairLawfulProcessing: 'Compliant',
      purposeLimitation: 'Compliant',
      dataMinimization: 'Issues',
      accuracy: 'Compliant',
      retention: 'Compliant',
      rightsOfIndividuals: 'Compliant',
      security: 'Compliant',
      internationalTransfers: 'Compliant',
      commonLawConfidentiality: {
        consentObtained: true,
        publicInterestJustification: true,
        legalDutyExists: false,
        statutoryBasis: true
      },
      notes: 'Requires stronger technical controls for full pseudonymization prior to model tokenization.'
    },
    endorsements: [
      { role: 'Project/Process Owner', name: 'Dr. Sarah Lin', signed: true, signedDate: '2026-06-18' },
      { role: 'Data Protection Officer', name: 'Amit Kumar Pandey', signed: false },
      { role: 'Legal/Compliance', name: 'Elena Rostova', signed: true, signedDate: '2026-06-20' },
      { role: 'Caldicott Guardian / SIRO', name: 'Prof. Arthur Pendelton', signed: false }
    ]
  },
  {
    id: 'PIA-2026-002',
    fid: 'PIA-FE-2026-B9X7M4R2',
    bid: 'PIA-BE-EU-2026-000413',
    version: 'v1.1',
    workflowMode: 'frontend',
    projectTitle: 'Global Pay-Link Cross-Border Vendor Gateway',
    organization: 'FinTech Treasury Operations',
    projectOwner: 'Alex Rivera',
    projectOwnerEmail: 'alex.rivera@paylink-global.com',
    dpoName: 'Amit Kumar Pandey (DPO)',
    dpoEmail: 'amit.pandey@paylink-global.com',
    projectDescription: 'Integrating a third-party vendor payment gateway to process merchant financial settlements across EU and US jurisdictions.',
    dataFlowDescription: 'Merchant transaction logs and banking details are processed via cloud APIs hosted in US East region with encrypted DB backups.',
    industrySector: 'banking',
    status: 'Remediation',
    createdAt: '2026-05-10T11:20:00Z',
    updatedAt: '2026-07-19T16:00:00Z',
    provenanceTrail: [
      {
        id: 'PROV-2001',
        timestamp: '2026-05-10T11:20:00Z',
        triggeringFid: 'PIA-FE-2026-B9X7M4R2',
        parentVersion: 'v0.0',
        newVersion: 'v1.0',
        actionExecuted: 'INITIAL_SUBMISSION',
        modifiedBy: 'Project Lead (Alex Rivera)',
        deltaLog: [
          { sectionId: 'SECTION A', parameter: 'Project Category', previousValue: 'Draft', newValue: 'Vendor/Supplier Engagement', rationale: 'New payment gateway vendor integration' }
        ],
        provenanceHash: '0x1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e'
      },
      {
        id: 'PROV-2002',
        timestamp: '2026-07-19T16:00:00Z',
        triggeringFid: 'PIA-FE-2026-B9X7M4R2',
        backendBid: 'PIA-BE-EU-2026-000413',
        parentVersion: 'v1.0',
        newVersion: 'v1.1',
        actionExecuted: 'REVISION_REQUESTED',
        modifiedBy: 'Data SME (Amit Kumar Pandey DPO)',
        deltaLog: [
          { sectionId: 'SECTION E', parameter: 'Cross Border Transfers', previousValue: 'Standard', newValue: 'Requires TIA for US Cloud hosting', rationale: 'Triggered remediation gap GAP-E3' }
        ],
        provenanceHash: '0x2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f'
      }
    ],
    regulatoryTailoring: {
      selectedFrameworks: ['EU GDPR & EU AI Act', 'US CCPA/CPRA & State Laws'],
      smeOverrideNotes: 'Transfer Impact Assessment required for US server hosting.',
      smeRiskAdjustment: 'Medium'
    },
    answers: {
      A1: { optionIndex: 3, selectedLabel: 'Vendor/Supplier Engagement', score: 4 },
      A2: { optionIndex: 2, selectedLabel: 'Mission-critical business function', score: 4 },
      A3: { optionIndex: 2, selectedLabel: 'Implementation phase', score: 3 },
      A4: { optionIndex: 0, selectedLabel: 'No - First assessment', score: 5 },

      B1: { optionIndex: 1, selectedLabel: 'B2B customers/business contacts', score: 2 },
      B2: { optionIndex: 2, selectedLabel: 'Financial/transaction data', score: 3 },
      B3: { optionIndex: 3, selectedLabel: '10,000-100,000 individuals', score: 4 },
      B4: { optionIndex: 2, selectedLabel: 'From third parties/suppliers', score: 3 },
      B5: { optionIndex: 0, selectedLabel: 'No special category data', score: 1 },

      C1: { optionIndex: 1, selectedLabel: 'Contractual necessity', score: 2 },
      C2: { optionIndex: 4, selectedLabel: 'N/A - consent not required basis', score: 1 },
      C3: { optionIndex: 4, selectedLabel: 'N/A - consent not required', score: 1 },
      C4: { optionIndex: 0, selectedLabel: 'Single, specific documented purpose', score: 1 },
      C5: { optionIndex: 4, selectedLabel: 'No public interest justification', score: 5 },

      D1: { optionIndex: 0, selectedLabel: 'Only strictly necessary data collected', score: 1 },
      D2: { optionIndex: 3, selectedLabel: 'Identifiable with some controls', score: 4 },
      D3: { optionIndex: 1, selectedLabel: 'Standard form/questionnaire', score: 2 },

      E1: { optionIndex: 2, selectedLabel: 'Multiple processors with DPAs', score: 3 },
      E2: { optionIndex: 2, selectedLabel: 'General authorization', score: 3 },
      E3: { optionIndex: 2, selectedLabel: 'SCCs/BCRs in place', score: 3 },
      E4: { optionIndex: 2, selectedLabel: 'Multiple jurisdictions', score: 3 },

      F1: { optionIndex: 1, selectedLabel: 'Manual process with documented procedures', score: 2 },
      F2: { optionIndex: 1, selectedLabel: 'Within statutory timelines', score: 2 },
      F3: { optionIndex: 1, selectedLabel: 'Standard privacy policy available', score: 2 },
      F4: { optionIndex: 0, selectedLabel: 'No automated decisions', score: 1 },

      G1: { optionIndex: 1, selectedLabel: 'Basic documentation available', score: 2 },
      G2: { optionIndex: 0, selectedLabel: 'All transmissions encrypted', score: 1 },
      G3: { optionIndex: 0, selectedLabel: 'All data encrypted at rest', score: 1 },
      G4: { optionIndex: 1, selectedLabel: 'Adequate segmentation', score: 2 },

      H1: { optionIndex: 1, selectedLabel: 'Basic retention policy', score: 2 },
      H2: { optionIndex: 1, selectedLabel: 'Manual secure disposal', score: 2 },
      H3: { optionIndex: 0, selectedLabel: 'Contractual return/destruction obligation', score: 1 },

      I1: { optionIndex: 0, selectedLabel: 'Role-based with MFA', score: 1 },
      I2: { optionIndex: 1, selectedLabel: 'Basic logging', score: 2 },
      I3: { optionIndex: 1, selectedLabel: 'Documented plan exists', score: 2 },
      I4: { optionIndex: 1, selectedLabel: 'Basic training provided', score: 2 },
      I5: { optionIndex: 1, selectedLabel: 'Industry certifications', score: 2 },

      J1: { optionIndex: 1, selectedLabel: 'Basic checks completed', score: 2 },
      J2: { optionIndex: 1, selectedLabel: 'Basic DPA included', score: 2 },
      J3: { optionIndex: 2, selectedLabel: 'Ad-hoc oversight', score: 3 },
      J4: { optionIndex: 0, selectedLabel: 'No incidents in 3 years', score: 1 },

      K1: { optionIndex: 0, selectedLabel: 'Clear roles with assigned owners', score: 1 },
      K2: { optionIndex: 1, selectedLabel: 'Most principles implemented', score: 2 },
      K3: { optionIndex: 1, selectedLabel: 'Documented in central RoPA', score: 2 },
      K4: { optionIndex: 1, selectedLabel: 'Basic consultation', score: 2 }
    },
    riskResult: {
      impactScore: 2.5,
      likelihoodScore: 2.1,
      baseRiskScore: 5.3,
      appliedModifiers: {
        vendorMultiplier: 1.3,
        aiMultiplier: 1.0,
        crossBorderMultiplier: 1.2,
        specialCategoryMultiplier: 1.0,
        noLawfulBasisMultiplier: 1.0,
        lawfulBasisRightsMultiplier: 1.0,
        totalMultiplier: 1.56
      },
      finalRiskScore: 8.3,
      riskLevel: 'Medium',
      requiredAction: 'Mitigation plan required, DPO review',
      sectionRiskProfiles: {
        dataProcessingRisk: 2.6,
        legalComplianceRisk: 2.0,
        dataSharingRisk: 3.0,
        securityRisk: 1.8,
        governanceRisk: 1.8
      },
      topRiskAreas: [
        { questionId: 'A4', questionTitle: 'A4. Has a PIA/DPIA been done before for this supplier/project?', score: 5, section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION' },
        { questionId: 'A1', questionTitle: 'A1. Project/Process Category', score: 4, section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION' },
        { questionId: 'B3', questionTitle: 'B3. Data Volume Scale', score: 4, section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY' },
        { questionId: 'D2', questionTitle: 'D2. Pseudonymization/Anonymization', score: 4, section: 'SECTION D: DATA MINIMIZATION & COLLECTION' },
        { questionId: 'E1', questionTitle: 'E1. Third-Party Sharing', score: 3, section: 'SECTION E: DATA SHARING & TRANSFERS' }
      ]
    },
    nhsChecklist: {
      fairLawfulProcessing: 'Compliant',
      purposeLimitation: 'Compliant',
      dataMinimization: 'Compliant',
      accuracy: 'Compliant',
      retention: 'Issues',
      rightsOfIndividuals: 'Compliant',
      security: 'Compliant',
      internationalTransfers: 'Issues',
      commonLawConfidentiality: {
        consentObtained: false,
        publicInterestJustification: false,
        legalDutyExists: true,
        statutoryBasis: true
      },
      notes: 'SCCs require supplementary Transfer Impact Assessment (TIA) review for US Cloud hosting.'
    },
    endorsements: [
      { role: 'Project/Process Owner', name: 'Alex Rivera', signed: true, signedDate: '2026-05-15' },
      { role: 'Data Protection Officer', name: 'Amit Kumar Pandey', signed: true, signedDate: '2026-06-01' },
      { role: 'Legal/Compliance', name: 'Elena Rostova', signed: true, signedDate: '2026-05-20' },
      { role: 'Caldicott Guardian / SIRO', name: 'N/A', signed: true, signedDate: '2026-06-02' }
    ]
  },
  {
    id: 'PIA-2026-003',
    fid: 'PIA-FE-2026-C3P2Q8W9',
    bid: 'PIA-BE-UK-2026-000414',
    version: 'v1.0',
    workflowMode: 'frontend',
    projectTitle: 'Internal HR Pulse Survey & Engagement Portal',
    organization: 'People & Culture',
    projectOwner: 'David Kim',
    projectOwnerEmail: 'david.kim@enterprise.org',
    dpoName: 'Amit Kumar Pandey (DPO)',
    dpoEmail: 'amit.pandey@enterprise.org',
    projectDescription: 'Quarterly anonymous employee engagement feedback tool.',
    dataFlowDescription: 'Self-hosted web container stores responses aggregated by department in local PostgreSQL instance.',
    industrySector: 'corporate',
    status: 'Approved',
    createdAt: '2026-02-01T08:00:00Z',
    updatedAt: '2026-03-10T12:00:00Z',
    provenanceTrail: [
      {
        id: 'PROV-3001',
        timestamp: '2026-02-01T08:00:00Z',
        triggeringFid: 'PIA-FE-2026-C3P2Q8W9',
        backendBid: 'PIA-BE-UK-2026-000414',
        parentVersion: 'v0.0',
        newVersion: 'v1.0',
        actionExecuted: 'INITIAL_SUBMISSION',
        modifiedBy: 'Project Lead (David Kim)',
        deltaLog: [
          { sectionId: 'SECTION A', parameter: 'Internal Survey System', previousValue: 'Draft', newValue: 'Internal HR Pulse', rationale: 'Routine employee survey system assessment' }
        ],
        provenanceHash: '0x3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a'
      }
    ],
    regulatoryTailoring: {
      selectedFrameworks: ['UK GDPR & DPA 2018'],
      smeOverrideNotes: 'Fully compliant low-risk internal processing.'
    },
    answers: {
      A1: { optionIndex: 0, selectedLabel: 'New Internal Project/System', score: 2 },
      A2: { optionIndex: 0, selectedLabel: 'Back-office/internal only', score: 1 },
      A3: { optionIndex: 3, selectedLabel: 'Live/production', score: 5 },
      A4: { optionIndex: 1, selectedLabel: 'Yes - Within last 12 months', score: 1 },

      B1: { optionIndex: 0, selectedLabel: 'Employees only', score: 2 },
      B2: { optionIndex: 0, selectedLabel: 'Anonymous/non-identifiable data', score: 1 },
      B3: { optionIndex: 1, selectedLabel: '100-1,000 individuals', score: 2 },
      B4: { optionIndex: 0, selectedLabel: 'Directly from data subjects', score: 2 },
      B5: { optionIndex: 0, selectedLabel: 'No special category data', score: 1 },

      C1: { optionIndex: 3, selectedLabel: 'Legitimate Interests (with LIA completed)', score: 3 },
      C2: { optionIndex: 0, selectedLabel: 'Granular, specific, documented consent', score: 1 },
      C3: { optionIndex: 0, selectedLabel: 'Easy withdrawal process available', score: 1 },
      C4: { optionIndex: 0, selectedLabel: 'Single, specific documented purpose', score: 1 },
      C5: { optionIndex: 4, selectedLabel: 'No public interest justification', score: 5 },

      D1: { optionIndex: 0, selectedLabel: 'Only strictly necessary data collected', score: 1 },
      D2: { optionIndex: 0, selectedLabel: 'Data fully anonymized', score: 1 },
      D3: { optionIndex: 1, selectedLabel: 'Standard form/questionnaire', score: 2 },

      E1: { optionIndex: 0, selectedLabel: 'No third-party sharing', score: 1 },
      E2: { optionIndex: 0, selectedLabel: 'No sub-processors', score: 1 },
      E3: { optionIndex: 0, selectedLabel: 'No cross-border transfers', score: 1 },
      E4: { optionIndex: 0, selectedLabel: 'No localization requirements', score: 1 },

      F1: { optionIndex: 0, selectedLabel: 'Automated portal with full rights support', score: 1 },
      F2: { optionIndex: 0, selectedLabel: 'Automated/instant response', score: 1 },
      F3: { optionIndex: 0, selectedLabel: 'Comprehensive, layered notice provided', score: 1 },
      F4: { optionIndex: 0, selectedLabel: 'No automated decisions', score: 1 },

      G1: { optionIndex: 0, selectedLabel: 'Up-to-date flow diagram exists', score: 1 },
      G2: { optionIndex: 0, selectedLabel: 'All transmissions encrypted', score: 1 },
      G3: { optionIndex: 0, selectedLabel: 'All data encrypted at rest', score: 1 },
      G4: { optionIndex: 0, selectedLabel: 'Complete logical/virtual separation', score: 1 },

      H1: { optionIndex: 0, selectedLabel: 'Clear retention schedule exists', score: 1 },
      H2: { optionIndex: 0, selectedLabel: 'Automated secure disposal', score: 1 },
      H3: { optionIndex: 0, selectedLabel: 'Contractual return/destruction obligation', score: 1 },

      I1: { optionIndex: 0, selectedLabel: 'Role-based with MFA', score: 1 },
      I2: { optionIndex: 0, selectedLabel: 'Comprehensive logging with alerts', score: 1 },
      I3: { optionIndex: 0, selectedLabel: 'Fully tested incident response plan', score: 1 },
      I4: { optionIndex: 0, selectedLabel: 'Comprehensive privacy training', score: 1 },
      I5: { optionIndex: 0, selectedLabel: 'ISO 27001/27701 certified', score: 1 },

      K1: { optionIndex: 0, selectedLabel: 'Clear roles with assigned owners', score: 1 },
      K2: { optionIndex: 0, selectedLabel: 'Privacy integrated throughout', score: 1 },
      K3: { optionIndex: 0, selectedLabel: 'Automated RoPA maintenance', score: 1 },
      K4: { optionIndex: 0, selectedLabel: 'Comprehensive consultation completed', score: 1 }
    },
    riskResult: {
      impactScore: 1.4,
      likelihoodScore: 1.0,
      baseRiskScore: 1.4,
      appliedModifiers: {
        vendorMultiplier: 1.0,
        aiMultiplier: 1.0,
        crossBorderMultiplier: 1.0,
        specialCategoryMultiplier: 1.0,
        noLawfulBasisMultiplier: 1.0,
        lawfulBasisRightsMultiplier: 1.0,
        totalMultiplier: 1.0
      },
      finalRiskScore: 1.4,
      riskLevel: 'Low',
      requiredAction: 'Accept with routine monitoring',
      sectionRiskProfiles: {
        dataProcessingRisk: 1.4,
        legalComplianceRisk: 1.8,
        dataSharingRisk: 1.0,
        securityRisk: 1.0,
        governanceRisk: 1.0
      },
      topRiskAreas: [
        { questionId: 'A3', questionTitle: 'A3. Project Status', score: 5, section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION' },
        { questionId: 'C1', questionTitle: 'C1. Primary Lawful Basis', score: 3, section: 'SECTION C: LAWFUL BASIS & FAIR PROCESSING' },
        { questionId: 'A1', questionTitle: 'A1. Project/Process Category', score: 2, section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION' },
        { questionId: 'B1', questionTitle: 'B1. Data Subject Categories', score: 2, section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY' },
        { questionId: 'B3', questionTitle: 'B3. Data Volume Scale', score: 2, section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY' }
      ]
    },
    nhsChecklist: {
      fairLawfulProcessing: 'Compliant',
      purposeLimitation: 'Compliant',
      dataMinimization: 'Compliant',
      accuracy: 'Compliant',
      retention: 'Compliant',
      rightsOfIndividuals: 'Compliant',
      security: 'Compliant',
      internationalTransfers: 'Compliant',
      commonLawConfidentiality: {
        consentObtained: true,
        publicInterestJustification: false,
        legalDutyExists: false,
        statutoryBasis: false
      }
    },
    endorsements: [
      { role: 'Project/Process Owner', name: 'David Kim', signed: true, signedDate: '2026-02-15' },
      { role: 'Data Protection Officer', name: 'Amit Kumar Pandey', signed: true, signedDate: '2026-03-01' },
      { role: 'Legal/Compliance', name: 'Elena Rostova', signed: true, signedDate: '2026-02-28' },
      { role: 'Caldicott Guardian / SIRO', name: 'N/A', signed: true, signedDate: '2026-03-02' }
    ]
  }
];

export const INITIAL_GAPS: RemediationGap[] = [
  {
    id: 'GAP-001',
    piaId: 'PIA-2026-001',
    piaTitle: 'PatientCare AI Clinical Diagnostic Assistant',
    code: 'GAP-D2',
    section: 'SECTION D: DATA MINIMIZATION & COLLECTION',
    description: 'Pseudonymization keys are accessible to the inference container environment, risking potential re-identification during error state dumps.',
    regulatoryReference: 'NOREA 2.2 / NHS 1D3',
    riskLevel: 'High',
    assignedOwner: 'DevOps Lead (J. Tanaka)',
    mitigationAction: 'Deploy upstream Key Vault proxy and execute HMAC-SHA256 token substitution prior to payload dispatch to AI inference cluster.',
    createdAt: '2026-06-18T10:00:00Z',
    targetDueDate: '2026-07-18T23:59:59Z',
    status: 'Overdue',
    followUps: [
      {
        id: 'FU-101',
        author: 'Amit Kumar Pandey (DPO)',
        role: 'Data Protection Officer',
        timestamp: '2026-07-02T11:30:00Z',
        comment: 'Followed up with DevOps. Hash proxy build in QA testing. Deployment pending DPO re-validation.'
      },
      {
        id: 'FU-102',
        author: 'Dr. Sarah Lin',
        role: 'Project Owner',
        timestamp: '2026-07-15T09:10:00Z',
        comment: 'SLA target missed due to staging environment migration. Requested 10-day extension.'
      }
    ]
  },
  {
    id: 'GAP-002',
    piaId: 'PIA-2026-001',
    piaTitle: 'PatientCare AI Clinical Diagnostic Assistant',
    code: 'GAP-F4',
    section: 'SECTION F: INDIVIDUAL RIGHTS MANAGEMENT',
    description: 'Clinician override telemetry and human-in-the-loop decision feedback loops lack immutable audit logging.',
    regulatoryReference: 'EU AI Act Art 14 / IIAC B8',
    riskLevel: 'High',
    assignedOwner: 'Lead Backend Engineer (M. Chen)',
    mitigationAction: 'Implement append-only audit trail service storing clinician feedback and overrides with cryptographic checksums.',
    createdAt: '2026-06-18T10:00:00Z',
    targetDueDate: '2026-07-28T23:59:59Z',
    status: 'In Progress',
    followUps: [
      {
        id: 'FU-103',
        author: 'Amit Kumar Pandey (DPO)',
        role: 'Data Protection Officer',
        timestamp: '2026-07-10T14:00:00Z',
        comment: 'Audit schema reviewed and approved. Code PR under security review.'
      }
    ]
  },
  {
    id: 'GAP-003',
    piaId: 'PIA-2026-002',
    piaTitle: 'Global Pay-Link Cross-Border Vendor Gateway',
    code: 'GAP-E3',
    section: 'SECTION E: DATA SHARING & TRANSFERS',
    description: 'Third-party US Cloud hosting lacks formal Transfer Impact Assessment (TIA) documentation required for EU SCC compliance.',
    regulatoryReference: 'GDPR Art 46 / IIAC D21-24',
    riskLevel: 'Medium',
    assignedOwner: 'Legal Counsel (E. Rostova)',
    mitigationAction: 'Complete formal TIA documenting US Cloud encryption controls and government access safeguards.',
    createdAt: '2026-06-01T14:00:00Z',
    targetDueDate: '2026-07-16T23:59:59Z',
    status: 'Open',
    followUps: [
      {
        id: 'FU-104',
        author: 'Amit Kumar Pandey (DPO)',
        role: 'Data Protection Officer',
        timestamp: '2026-06-15T16:00:00Z',
        comment: 'TIA template issued to vendor legal team. Response expected shortly.'
      }
    ]
  }
];
