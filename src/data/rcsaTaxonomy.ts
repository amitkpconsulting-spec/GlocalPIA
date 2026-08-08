import { RiskLevel } from '../types';

export type AssessmentInitiativeType =
  | 'Proof of Concept (PoC)'
  | 'Project'
  | 'Process'
  | 'Application (App)'
  | 'Pilot'
  | 'AI Initiative';

export interface RCSATypeDefinition {
  type: AssessmentInitiativeType;
  definition: string;
  inherentRiskText: string;
  inherentBaseScore: number;
  inherentRating: RiskLevel;
  threatDrivers: string;
  badgeClass: string;
  questions: string[];
}

export const RCSA_ASSESSMENT_TYPES: Record<AssessmentInitiativeType, RCSATypeDefinition> = {
  'Proof of Concept (PoC)': {
    type: 'Proof of Concept (PoC)',
    definition: 'Sandbox realization to demonstrate feasibility with dummy/synthetic data.',
    inherentRiskText: '2 - Low',
    inherentBaseScore: 2,
    inherentRating: 'Low',
    threatDrivers: 'Sanitized dummy data verification, air-gapped sandbox network isolation, access boundaries.',
    badgeClass: 'bg-emerald-950 text-emerald-400 border-emerald-800',
    questions: [
      'Is the PoC strictly limited to 100% synthetic, anonymized, or dummy test data with zero live PII?',
      'Is the execution environment completely sandboxed or air-gapped from production networks and customer databases?',
      'What technical safeguards prevent developers or testers from inadvertently importing production dataset dumps?',
      'Is access restricted exclusively to named sandbox developers with zero public internet endpoints?',
      'Is there an automated tear-down schedule to completely wipe and purge all PoC storage upon trial conclusion?'
    ]
  },
  'Project': {
    type: 'Project',
    definition: 'Temporary endeavor to create a unique product, service, or operational change.',
    inherentRiskText: '3 - Medium',
    inherentBaseScore: 3,
    inherentRating: 'Medium',
    threatDrivers: 'Third-party vendor access, cross-border data transfers, role-based access control, retention schedules.',
    badgeClass: 'bg-yellow-950 text-yellow-400 border-yellow-800',
    questions: [
      'Will project data or deliverables be transferred across international jurisdictions or cross-border cloud servers?',
      'Do third-party vendors, external contractors, or subprocessors have access to project databases or PII?',
      'Are strict employee Role-Based Access Controls (RBAC) and least-privilege principles enforced across environments?',
      'Is there an established data retention schedule and secure disposal policy defined for all project artifacts?',
      'Has a formal Data Protection Officer (DPO) governance review checkpoint been scheduled prior to release?'
    ]
  },
  'Process': {
    type: 'Process',
    definition: 'Structured set of activities producing a recurring output for business operations.',
    inherentRiskText: '3 - Medium',
    inherentBaseScore: 3,
    inherentRating: 'Medium',
    threatDrivers: 'Outsourced operational sub-steps, employee access privileges, data retention purge schedules, DPA deeds.',
    badgeClass: 'bg-yellow-950 text-yellow-400 border-yellow-800',
    questions: [
      'What specific categories of personal data (including sensitive/special category data) flow through this business process?',
      'Are any processing activities, sub-steps, or data storage outsourced to external vendors or cross-border locations?',
      'How are employee access privileges restricted, authenticated, and audited during daily process execution?',
      'What is the designated data retention period and automated purge schedule for operational process logs?',
      'Are third-party processors bound by formal Article 28 Data Processing Agreements (DPAs) and confidentiality deeds?'
    ]
  },
  'Application (App)': {
    type: 'Application (App)',
    definition: 'Software application/platform handling user data, APIs, and authentication.',
    inherentRiskText: '4 - High',
    inherentBaseScore: 4,
    inherentRating: 'High',
    threatDrivers: 'User consent mechanisms, API security/data sharing, rest/transit encryption, authentication protocols.',
    badgeClass: 'bg-orange-950 text-orange-400 border-orange-800',
    questions: [
      'How are explicit user consent mechanisms, privacy notices, opt-in/opt-out preferences, and cookie controls implemented?',
      'Is all user personal data encrypted both at rest (AES-256) and in transit (TLS 1.3) with secure key management?',
      'What third-party APIs, analytics tools, or external cloud endpoints receive user payload data or telemetry?',
      'Are robust authentication protocols (Multi-Factor Authentication / OAuth 2.0 / SAML SSO) strictly enforced for all users?',
      'Has the application undergone recent independent static code vulnerability scanning and penetration testing?'
    ]
  },
  'Pilot': {
    type: 'Pilot',
    definition: 'Limited live implementation testing viability with real user data.',
    inherentRiskText: '4 - High',
    inherentBaseScore: 4,
    inherentRating: 'High',
    threatDrivers: 'Live PII exposure scale, user notification, roll-back kill-switch, automated data purging criteria.',
    badgeClass: 'bg-orange-950 text-orange-400 border-orange-800',
    questions: [
      'Have pilot participants provided explicit, informed opt-in consent and received targeted pilot privacy notices?',
      'What specific volume, scope, and categories of live personal data are exposed to the pilot environment?',
      'Are technical rollback procedures and kill-switches active to immediately revert systems if a privacy defect occurs?',
      'What are the defined pilot exit criteria, data retention limits, and automated data destruction protocols post-pilot?',
      'Is continuous security monitoring, audit logging, and incident response operational throughout the pilot run?'
    ]
  },
  'AI Initiative': {
    type: 'AI Initiative',
    definition: 'Systems involving ML, GenAI, or algorithmic decision-making.',
    inherentRiskText: '5 - Critical',
    inherentBaseScore: 5,
    inherentRating: 'Critical',
    threatDrivers: 'Model training data sourcing (PII), automated decision impact, vector DB retention, DPDP/GDPR alignment, model drift/hallucinations.',
    badgeClass: 'bg-rose-950 text-rose-400 border-rose-800',
    questions: [
      'What training data sources are utilized (e.g. web scrapes, proprietary data), and is personal identifiable information (PII) present?',
      'Does the AI system perform automated profiling or decisions that produce legal or similarly significant impacts on individuals?',
      'How are model hallucinations, algorithmic bias, fairness, and decision explainability continuously audited and mitigated?',
      'Is the AI initiative compliant with relevant frameworks like ISO/IEC 42001 AIMS or NIST AI Risk Management Framework (RMF)?',
      'How is personal data handled, sanitized, and retained within vector databases, embeddings, and LLM context windows?'
    ]
  }
};
