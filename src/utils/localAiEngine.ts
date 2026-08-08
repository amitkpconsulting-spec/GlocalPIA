/**
 * Local AI Engine Utility
 * Provides offline, air-gapped NLP capabilities for rephrasing, expanding,
 * polishing text, and auto-filling dummy project context & scope.
 */

export type LocalAiTone = 'formal_audit' | 'technical' | 'executive';
export type LocalAiMode = 'local_airgapped' | 'local_quantized';
export type LocalAiCreativity = 'precise' | 'balanced' | 'creative';

export interface LocalAiConfig {
  mode: LocalAiMode;
  tone: LocalAiTone;
  creativity: LocalAiCreativity;
}

export interface DummyContextScopePreset {
  id: string;
  label: string;
  projectTitle: string;
  organization: string;
  industrySector: 'banking' | 'healthcare' | 'retail' | 'corporate';
  projectDescription: string;
  scopeOfWork: string;
  structuredDataFlow: {
    whatApp: string;
    whyPia: string;
    howFlows: string;
    whenRecordStd: string;
    whereStored: string;
    crossBorder: string;
  };
}

export const DUMMY_CONTEXT_PRESETS: DummyContextScopePreset[] = [
  {
    id: 'healthcare_ai',
    label: 'Healthcare Clinical AI & Patient Data',
    projectTitle: 'PatientCare AI Clinical Diagnostic Assistant & Triage Portal',
    organization: 'NHS Clinical Health Trust',
    industrySector: 'healthcare',
    projectDescription: 'An AI-assisted diagnostic triage and electronic health record (EHR) analytics platform designed to evaluate patient symptoms, prioritize urgent care queues, and streamline clinical documentation. Implemented with on-premises FHIR data pipelines and strict air-gapped model inference to prevent unauthorized disclosure of Protected Health Information (PHI).',
    scopeOfWork: 'Involves ingestion of structured patient medical history, real-time vital telemetry streams, and physician notes. Utilizes localized vector embeddings for clinical decision support while enforcing NHS / HIPAA data minimisation rules, zero-retention model prompts, and role-based access control (RBAC).',
    structuredDataFlow: {
      whatApp: 'PatientCare AI Clinical Diagnostic Assistant & Record Triage Portal',
      whyPia: 'Evaluate privacy risks for automated health record processing and AI-assisted clinical workflow under UK GDPR & NHS Caldicott Principles.',
      howFlows: 'EHR records stream via encrypted mTLS APIs to on-prem vector DB, indexed with tokenization and zero-knowledge encryption.',
      whenRecordStd: 'Retained for 7 years in accordance with Healthcare Records Management Standards (NHS Code of Practice).',
      whereStored: 'Stored in primary UK Sovereign Cloud Data Center (AWS eu-west-2, London) with AES-256 KMS encryption at rest.',
      crossBorder: 'No cross-border transfers. All inference and storage remain strictly within local UK sovereign jurisdiction.',
    }
  },
  {
    id: 'banking_fraud',
    label: 'Banking Open-Finance & Risk Analytics',
    projectTitle: 'Open-Finance Real-Time Fraud & AML Transaction Monitor',
    organization: 'Global Sovereign Bank plc',
    industrySector: 'banking',
    projectDescription: 'A high-throughput machine learning transaction monitoring and Anti-Money Laundering (AML) platform. It analyzes real-time payment streams, customer behavioral profiling metrics, and cross-border remittance signals to detect fraudulent activity and ensure compliance with FCA and PSD2 mandates.',
    scopeOfWork: 'Covers ingestion of transactional logs, account balance telemetry, and KYC verification records. Applies pseudonymous tokenization at the API gateway layer, isolates sensitive customer financial records within secure enclaves, and automates SAR (Suspicious Activity Report) generation.',
    structuredDataFlow: {
      whatApp: 'Open-Finance Real-Time Fraud & AML Transaction Monitor',
      whyPia: 'Evaluate privacy and data security risks for automated credit scoring and transaction profiling under FCA & GDPR rules.',
      howFlows: 'ISO 20022 payment streams are ingested via private API gateways, processed through local inference nodes, and hashed into immutable audit logs.',
      whenRecordStd: 'Retained for 5 years post-account closure in compliance with anti-money laundering statutory requirements.',
      whereStored: 'Primary storage on private cloud PostgreSQL with HSM-managed customer keys in London (eu-west-2).',
      crossBorder: 'Standard Contractual Clauses (SCCs) and Binding Corporate Rules (BCRs) enforced for EU-UK interbank routing.',
    }
  },
  {
    id: 'retail_loyalty',
    label: 'Retail Loyalty & Customer Tracking',
    projectTitle: 'SmartShopper Personalization Engine & POS Telemetry Portal',
    organization: 'OmniMarket Retail Group',
    industrySector: 'retail',
    projectDescription: 'An omnichannel customer engagement and retail analytics portal that synthesizes e-commerce browsing telemetry, point-of-sale (POS) receipts, and loyalty card activity to deliver personalized product recommendations and targeted promotions.',
    scopeOfWork: 'Encompasses mobile app interaction logging, location-based store check-ins, and consent-managed marketing preferences. Features automated opt-out mechanisms, cookie consent synchronization, and localized data hashing.',
    structuredDataFlow: {
      whatApp: 'SmartShopper Personalization Engine & POS Telemetry Portal',
      whyPia: 'Assess privacy compliance for behavioral profiling and direct marketing under CCPA/CPRA and ePrivacy regulations.',
      howFlows: 'POS terminals and mobile apps push encrypted event streams to cloud event hubs, aggregating pseudonymous user segments.',
      whenRecordStd: 'Inactivity deletion policy automatically purges unengaged customer profiles after 24 months.',
      whereStored: 'Hosted on multi-region AWS cloud with TLS 1.3 transit encryption and localized database partitions.',
      crossBorder: 'EU subprocessor transfers protected under Data Privacy Framework (DPF) certifications and SCCs.',
    }
  },
  {
    id: 'corporate_hr',
    label: 'Corporate HR & Employee Analytics',
    projectTitle: 'Workforce Pulse AI Performance & Talent Mobility Platform',
    organization: 'Apex Global Enterprises',
    industrySector: 'corporate',
    projectDescription: 'An internal HR analytics platform that analyzes employee productivity metrics, internal mobility aspirations, and skills gap assessments using privacy-preserving NLP algorithms to support career development and workforce planning.',
    scopeOfWork: 'Ingests employee feedback surveys, training completion records, and performance review metadata. Operates under strict workplace privacy controls with mandatory anonymization of subjective commentary and worker council oversight.',
    structuredDataFlow: {
      whatApp: 'Workforce Pulse AI Performance & Talent Mobility Platform',
      whyPia: 'Ensure compliance with GDPR Article 22 regarding automated decision-making and workplace monitoring controls.',
      howFlows: 'HRIS API integration collects anonymized survey vectors, running local batch processing models with differential privacy noise.',
      whenRecordStd: 'Retained during active employment plus 2 years for statutory labor reporting.',
      whereStored: 'On-premises corporate server cluster with encrypted backups stored in dedicated UK cloud storage.',
      crossBorder: 'Strictly limited to intra-group transfers under Binding Corporate Rules (BCRs).',
    }
  }
];

/**
 * Rephrases text using local AI logic based on tone and mode settings.
 */
export function rephraseTextLocally(
  input: string,
  config: LocalAiConfig
): string {
  if (!input.trim()) return input;

  const text = input.trim();

  if (config.tone === 'formal_audit') {
    return text
      .replace(/data gets saved/gi, 'data is securely persisted')
      .replace(/we store/gi, 'the system maintains compliant storage of')
      .replace(/we check/gi, 'automated validation procedures audit')
      .replace(/we send/gi, 'encrypted transmissions dispatch')
      .replace(/system does/gi, 'system executes automated operational workflows for')
      .replace(/user info/gi, 'personally identifiable information (PII)')
      .concat(text.endsWith('.') ? '' : '.')
      + ' Assessed and validated under local governance standards.';
  } else if (config.tone === 'technical') {
    return `[Technical Specification]: ${text} Technical controls incorporate TLS 1.3 transport security, role-based access control (RBAC), and AES-256 encryption at rest.`;
  } else {
    // executive
    return `Executive Summary: ${text} Operationalized in accordance with organizational privacy policy and statutory requirements.`;
  }
}

/**
 * Expands brief text notes into a structured, comprehensive description.
 */
export function expandTextLocally(
  input: string,
  field: 'description' | 'data_flow',
  config: LocalAiConfig
): string {
  const raw = input.trim();

  if (field === 'description') {
    if (!raw) {
      return 'The system functions as an enterprise data processing platform designed to streamline operational workflows while enforcing statutory privacy controls. Key capabilities include encrypted data ingestion, role-based access control, and automated compliance logging to mitigate risk across the data lifecycle.';
    }
    return `${raw}\n\n[Expanded Scope & Purpose]: The project operationalizes automated data flows in accordance with data protection principles. It integrates end-to-end auditability, strict data minimisation protocols, and granular consent verification to ensure all processing activities remain compliant, transparent, and defensible under regulatory audit.`;
  } else {
    // data_flow
    if (!raw) {
      return '1. Project/Process/App: Enterprise Processing Node\n\n2. Why PIA Performed: Evaluate privacy risks for automated processing.\n\n3. How Data Flows: Encrypted REST API ingestion to secure database.\n\n4. When / Retention Standards: Retained per statutory retention schedule.\n\n5. Where Stored: Sovereign Cloud Infrastructure with AES-256 KMS.\n\n6. Cross Border Transfer: Local jurisdiction processing with zero unauthorized egress.';
    }
    return `${raw}\n\n[Synthesized Data Lifecycle Summary]: Personal data elements enter via authenticated REST endpoints with TLS 1.3 encryption. Processing occurs within isolated cloud enclaves using pseudonymous identifiers. Data is persisted in encrypted sovereign storage, maintained under strict retention limits, and audited continuously.`;
  }
}

/**
 * Polishes text grammar, formatting, and terminology.
 */
export function polishTextLocally(
  input: string,
  config: LocalAiConfig
): string {
  if (!input.trim()) return input;

  let polished = input.trim();
  
  // Capitalize first letter
  polished = polished.charAt(0).toUpperCase() + polished.slice(1);
  
  // Common privacy terminology fixes
  polished = polished
    .replace(/\bpii\b/gi, 'PII')
    .replace(/\bgdpr\b/gi, 'GDPR')
    .replace(/\bhipaa\b/gi, 'HIPAA')
    .replace(/\baes256\b/gi, 'AES-256')
    .replace(/\brbac\b/gi, 'RBAC')
    .replace(/\bdpo\b/gi, 'DPO')
    .replace(/\bpia\b/gi, 'PIA');

  if (!polished.endsWith('.')) {
    polished += '.';
  }

  return polished;
}
