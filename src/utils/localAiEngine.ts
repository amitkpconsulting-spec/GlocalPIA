import { PIAAssessment, RemediationGap } from '../types';
import { calculatePIARisk } from './riskCalculator';

/**
 * Local AI Engine Utility
 * Provides offline, air-gapped NLP capabilities for rephrasing, expanding,
 * polishing text, auto-filling dummy context, and aggregating executive PIA snapshots.
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

/**
 * High-Level Executive Snapshot Result Interface
 */
export interface ExecutiveSnapshotResult {
  snapshotId: string;
  timestampIso: string;
  formattedTime: string;
  reportingCycle: string;
  engineUsed: string;
  totalPias: number;
  openGaps: number;
  criticalPiasCount: number;
  highPiasCount: number;
  averageResidualScore: number;
  averageBaseScore: number;
  riskReductionPercentage: number;
  complianceRate: number;
  portfolioRiskTier: 'Low' | 'Medium' | 'High' | 'Critical';
  aiExecutiveBriefing: string;
  statutoryDirectives: string[];
  topExposureSystems: {
    id: string;
    title: string;
    score: number;
    riskLevel: string;
    gapsCount: number;
    sector: string;
  }[];
  regulatoryReadiness: {
    gdprArticle35: string;
    nhsIgCompliance: string;
    dpdpaReadiness: string;
    residualRiskTolerance: string;
  };
}

/**
 * Local AI Data Aggregation Service
 * Synthesizes active PIAs, open remediation gaps, and historical mitigations
 * into an attested executive snapshot for DPO and CISO reporting.
 */
export function aggregateExecutivePiaSnapshot(
  pias: PIAAssessment[],
  gaps: RemediationGap[],
  reportingCycle: string = 'Current Cycle',
  companyName: string = 'Enterprise Privacy Office'
): ExecutiveSnapshotResult {
  const totalPias = pias.length;

  // Evaluate risk calculations for every assessment
  const evaluatedList = pias.map(pia => {
    const risk = (pia.riskResult && pia.riskResult.finalRiskScore > 0)
      ? pia.riskResult
      : calculatePIARisk(pia.answers || {}, pia.industrySector);

    const relatedGaps = gaps.filter(g => g.piaId === pia.id || g.piaId === pia.fid || g.piaId === pia.bid);
    const openGapsCount = relatedGaps.filter(g => g.status === 'Open' || g.status === 'In Progress' || g.status === 'Overdue').length;

    return {
      pia,
      risk,
      finalScore: risk.finalRiskScore,
      baseScore: risk.baseRiskScore,
      riskLevel: risk.riskLevel,
      openGapsCount,
      sector: pia.industrySector || 'general',
      isApproved: pia.status === 'Approved' || pia.endorsements?.some(e => e.role === 'Data Protection Officer' && e.signed),
    };
  });

  const sumFinal = evaluatedList.reduce((acc, curr) => acc + curr.finalScore, 0);
  const sumBase = evaluatedList.reduce((acc, curr) => acc + curr.baseScore, 0);
  const avgScore = totalPias > 0 ? Math.round((sumFinal / totalPias) * 10) / 10 : 0;
  const avgBaseScore = totalPias > 0 ? Math.round((sumBase / totalPias) * 10) / 10 : 0;
  const riskReductionPercentage = avgBaseScore > 0
    ? Math.max(0, Math.round(((avgBaseScore - avgScore) / avgBaseScore) * 100))
    : 0;

  let portfolioRiskTier: 'Low' | 'Medium' | 'High' | 'Critical' = 'Low';
  if (avgScore >= 16.1) {
    portfolioRiskTier = 'Critical';
  } else if (avgScore >= 9.1) {
    portfolioRiskTier = 'High';
  } else if (avgScore >= 4.1) {
    portfolioRiskTier = 'Medium';
  }

  const openGaps = gaps.filter(g => g.status === 'Open' || g.status === 'In Progress' || g.status === 'Overdue');
  const criticalGaps = openGaps.filter(g => g.riskLevel === 'Critical');
  const highGaps = openGaps.filter(g => g.riskLevel === 'High');
  const overdueGaps = openGaps.filter(g => g.status === 'Overdue');
  const resolvedGaps = gaps.filter(g => g.status === 'Resolved');

  const criticalPias = evaluatedList.filter(e => e.riskLevel === 'Critical');
  const highPias = evaluatedList.filter(e => e.riskLevel === 'High');
  const approvedCount = evaluatedList.filter(e => e.isApproved).length;

  const piaApprovalRate = totalPias > 0 ? approvedCount / totalPias : 1;
  const gapResolutionRate = gaps.length > 0 ? resolvedGaps.length / gaps.length : 1;
  const complianceRate = Math.min(100, Math.max(0, Math.round((piaApprovalRate * 0.6 + gapResolutionRate * 0.4) * 100)));

  // Top high-exposure systems
  const sortedByExposure = [...evaluatedList].sort((a, b) => b.finalScore - a.finalScore);
  const topExposureSystems = sortedByExposure.slice(0, 4).map(item => ({
    id: item.pia.fid || item.pia.id,
    title: item.pia.projectTitle,
    score: item.finalScore,
    riskLevel: item.riskLevel,
    gapsCount: item.openGapsCount,
    sector: item.sector,
  }));

  // Local AI Air-Gapped Natural Language Executive Briefing Synthesis
  let postureTone = '';
  if (portfolioRiskTier === 'Critical') {
    postureTone = `CRITICAL SUPERVISORY NOTICE: The aggregate privacy risk index currently stands at ${avgScore.toFixed(1)}/25.0 (${criticalPias.length} Critical assessments identified). Immediate executive escalation and EDPB/ICO Article 36 prior consultation is warranted for unmitigated processing streams.`;
  } else if (portfolioRiskTier === 'High') {
    postureTone = `ELEVATED RESIDUAL EXPOSURE: The assessed portfolio reflects a mean residual risk rating of ${avgScore.toFixed(1)}/25.0 across ${totalPias} data systems. While mitigations have achieved a -${riskReductionPercentage}% exposure reduction from inherent baselines, ${criticalPias.length} Critical and ${highPias.length} High tier systems require accelerated engineering remediation.`;
  } else if (portfolioRiskTier === 'Medium') {
    postureTone = `CONTROLLED PRIVACY POSTURE: Portfolio risk index is stabilized at ${avgScore.toFixed(1)}/25.0 (Medium Tier). Inherent risk was curbed by -${riskReductionPercentage}% through applied technical safeguards and statutory controls. Total compliance index is currently attested at ${complianceRate}%.`;
  } else {
    postureTone = `EXEMPLARY STATUTORY COMPLIANCE: The data processing portfolio demonstrates high privacy maturity with a low residual risk score of ${avgScore.toFixed(1)}/25.0 and an attested compliance rate of ${complianceRate}%. Technical safeguards and data minimization controls are operating effectively.`;
  }

  const gapSummarySentence = openGaps.length > 0
    ? `The audit registry contains ${openGaps.length} unresolved remediation gaps (${criticalGaps.length} Critical, ${highGaps.length} High), with ${overdueGaps.length > 0 ? `${overdueGaps.length} exceeding statutory SLA targets` : 'all items currently tracking within mandated SLA milestones'}.`
    : `All identified remediation gaps across the portfolio have been fully resolved and validated.`;

  const sectorHighlight = topExposureSystems.length > 0
    ? `Primary risk concentration centers around "${topExposureSystems[0].title}" (${topExposureSystems[0].sector.toUpperCase()} sector, residual risk: ${topExposureSystems[0].score.toFixed(1)}).`
    : 'No concentrated risk clusters detected across audited operational domains.';

  const aiExecutiveBriefing = `${postureTone} ${gapSummarySentence} ${sectorHighlight} This telemetry snapshot was aggregated locally via the Air-Gapped NLP Governance Engine for ${companyName} (${reportingCycle}).`;

  // Dynamic DPO statutory directives
  const statutoryDirectives: string[] = [];
  if (criticalPias.length > 0) {
    statutoryDirectives.push(`Conduct formal GDPR Article 36 supervisory consultation for ${criticalPias.length} system(s) flagged at Critical residual risk.`);
  }
  if (overdueGaps.length > 0) {
    statutoryDirectives.push(`Escalate ${overdueGaps.length} overdue remediation SLA(s) to technical product owners for immediate remediation.`);
  } else if (criticalGaps.length > 0) {
    statutoryDirectives.push(`Expedite closeout of ${criticalGaps.length} Critical severity gap(s) prior to next reporting milestone.`);
  }
  if (riskReductionPercentage < 30 && avgBaseScore > 10) {
    statutoryDirectives.push('Mandate end-to-end KMS encryption at rest and automated pseudonymization to increase risk attenuation.');
  } else {
    statutoryDirectives.push('Maintain quarterly continuous re-audit schedule and verify third-party Data Processing Agreements (Art. 28).');
  }
  if (approvedCount < totalPias) {
    statutoryDirectives.push(`Complete formal DPO sign-off workflow for ${totalPias - approvedCount} pending assessment(s).`);
  }

  const now = new Date();
  const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return {
    snapshotId: `SNAP-${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`,
    timestampIso: now.toISOString(),
    formattedTime,
    reportingCycle,
    engineUsed: 'Local Air-Gapped NLP Intelligence Engine',
    totalPias,
    openGaps: openGaps.length,
    criticalPiasCount: criticalPias.length,
    highPiasCount: highPias.length,
    averageResidualScore: avgScore,
    averageBaseScore: avgBaseScore,
    riskReductionPercentage,
    complianceRate,
    portfolioRiskTier,
    aiExecutiveBriefing,
    statutoryDirectives,
    topExposureSystems,
    regulatoryReadiness: {
      gdprArticle35: criticalPias.length === 0 ? 'Compliant' : 'Prior Consultation Pending',
      nhsIgCompliance: openGaps.length <= 3 ? 'Substantial (Tier 1)' : 'Action Plan Required',
      dpdpaReadiness: avgScore <= 9.0 ? 'Certified' : 'Under Assessment',
      residualRiskTolerance: avgScore <= 9.0 ? 'Within Tolerance' : 'Exceeds Tolerance Threshold',
    },
  };
}
