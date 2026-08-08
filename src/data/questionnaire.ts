import { QuestionDefinition } from '../types';

export const QUESTIONNAIRE_SECTIONS = [
  { id: 'section_a', title: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION', description: 'Complete this section for all new projects, processes, applications, vendor engagements, or changes to existing systems.' },
  { id: 'section_b', title: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY', description: 'Assess the nature, scope, and special categories of personal data involved.' },
  { id: 'section_c', title: 'SECTION C: LAWFUL BASIS & FAIR PROCESSING', description: 'Determine the legal basis and consent mechanisms for processing.' },
  { id: 'section_d', title: 'SECTION D: DATA MINIMIZATION & COLLECTION', description: 'Assess data minimization principles, pseudonymization, and collection methods.' },
  { id: 'section_e', title: 'SECTION E: DATA SHARING & TRANSFERS', description: 'Review data sharing, sub-processors, cross-border transfers, and sovereignty.' },
  { id: 'section_f', title: 'SECTION F: INDIVIDUAL RIGHTS MANAGEMENT', description: 'Assess mechanisms and response capabilities for data subject rights.' },
  { id: 'section_g', title: 'SECTION G: DATA FLOW & ARCHITECTURE', description: 'Map data flows, transmission security, data at rest, and system segmentation.' },
  { id: 'section_h', title: 'SECTION H: RETENTION & DISPOSAL', description: 'Review data retention schedules, disposal mechanisms, and post-termination provisions.' },
  { id: 'section_i', title: 'SECTION I: SECURITY CONTROLS', description: 'Assess technical and organizational security measures, audit logging, and incident response.' },
  { id: 'section_j', title: 'SECTION J: VENDOR MANAGEMENT (Conditional)', description: 'Complete for vendor, supplier, or outsourced processing engagements.' },
  { id: 'section_k', title: 'SECTION K: GOVERNANCE & ACCOUNTABILITY', description: 'Assess organizational governance, Privacy by Design, RoPA records, and stakeholder consultation.' },
];

export const QUESTIONNAIRE_DEFINITIONS: QuestionDefinition[] = [
  // SECTION A
  {
    id: 'A1',
    section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION',
    title: 'A1. Project/Process Category',
    description: 'Select the primary classification of this initiative.',
    reference: 'IIAC A4, NHS 1A',
    options: [
      { label: 'New Internal Project/System', score: 2 },
      { label: 'Process Change/Improvement', score: 2 },
      { label: 'New/Changed Application', score: 2 },
      { label: 'Vendor/Supplier Engagement', score: 4 },
      { label: 'Pilot Program', score: 3 },
      { label: 'AI/Machine Learning Use Case', score: 5 },
      { label: 'Data Sharing Agreement', score: 4 },
      { label: 'Outsourcing Business Process', score: 4 },
    ]
  },
  {
    id: 'A2',
    section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION',
    title: 'A2. Project Criticality',
    description: 'Operational reliance and business criticality.',
    reference: 'NHS 1.6, NOREA 1.8',
    options: [
      { label: 'Back-office/internal only', score: 1 },
      { label: 'Customer-facing service', score: 3 },
      { label: 'Mission-critical business function', score: 4 },
      { label: 'Regulated service (healthcare, finance)', score: 5 },
      { label: 'Public sector/government service', score: 5 },
    ]
  },
  {
    id: 'A3',
    section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION',
    title: 'A3. Project Status',
    description: 'Current stage in project lifecycle.',
    reference: 'IIAC A5, NHS 1',
    options: [
      { label: 'Initial concept/planning phase', score: 1 },
      { label: 'Design/development phase', score: 2 },
      { label: 'Implementation phase', score: 3 },
      { label: 'Live/production', score: 5 },
      { label: 'Post-implementation review', score: 1 },
    ]
  },
  {
    id: 'A4',
    section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION',
    title: 'A4. Has a PIA/DPIA been done before for this supplier/project?',
    description: 'Prior assessment history.',
    reference: 'IIAC A7',
    options: [
      { label: 'No - First assessment', score: 5 },
      { label: 'Yes - Within last 12 months', score: 1 },
      { label: 'Yes - 1-3 years ago', score: 2 },
      { label: 'Yes - Over 3 years ago', score: 3 },
      { label: 'Not applicable', score: 1 },
    ]
  },
  {
    id: 'A5',
    section: 'SECTION A: GENERAL INFORMATION & PROJECT CLASSIFICATION',
    title: 'A5. Descriptive Data Flow & Architecture Documentation Level',
    description: 'Completeness of descriptive data flow narrative covering: 1. What is Project/Process/App, 2. Why PIA is performed, 3. How Data Flows, 4. When (Record Management Standards), 5. Where stored, 6. Cross Border data transfer.',
    reference: 'ICO Guidance / UK GDPR Art 30',
    options: [
      { label: 'Fully documented addressing all 6 required data flow & lifecycle aspects', score: 1 },
      { label: 'Partially documented (3-5 aspects covered)', score: 2 },
      { label: 'High-level summary only (1-2 aspects covered)', score: 3 },
      { label: 'Draft or incomplete data flow narrative', score: 4 },
      { label: 'No descriptive data flow or architecture documented', score: 5 },
    ]
  },

  // SECTION B
  {
    id: 'B1',
    section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY',
    title: 'B1. Data Subject Categories',
    description: 'Primary populations whose data is being processed.',
    reference: 'IIAC B1, NHS 1.7',
    options: [
      { label: 'Employees only', score: 2 },
      { label: 'B2B customers/business contacts', score: 2 },
      { label: 'General consumers/public', score: 3 },
      { label: 'Children/minors under 18', score: 5 },
      { label: 'Vulnerable populations (patients, elderly, disabled)', score: 5 },
      { label: 'Mass public/large population segments', score: 4 },
      { label: 'Special categories (celebrities, officials)', score: 4 },
    ]
  },
  {
    id: 'B2',
    section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY',
    title: 'B2. Data Sensitivity Level',
    description: 'Highest sensitivity level of processed data.',
    reference: 'IIAC B3, NHS 1.7, NOREA 2.4',
    options: [
      { label: 'Anonymous/non-identifiable data', score: 1 },
      { label: 'Basic identity/contact data', score: 2 },
      { label: 'Financial/transaction data', score: 3 },
      { label: 'Location/behavioral data', score: 4 },
      { label: 'Health/medical data', score: 5 },
      { label: 'Special categories + criminal data', score: 5 },
      { label: 'Biometric/genetic data', score: 5 },
    ]
  },
  {
    id: 'B3',
    section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY',
    title: 'B3. Data Volume Scale',
    description: 'Estimated number of unique data subjects.',
    reference: 'IIAC A6, NOREA 2.6',
    options: [
      { label: '< 100 individuals', score: 1 },
      { label: '100-1,000 individuals', score: 2 },
      { label: '1,000-10,000 individuals', score: 3 },
      { label: '10,000-100,000 individuals', score: 4 },
      { label: '> 100,000 individuals', score: 5 },
      { label: 'Entire population segment', score: 5 },
    ]
  },
  {
    id: 'B4',
    section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY',
    title: 'B4. Data Sources',
    description: 'How data is acquired or gathered.',
    reference: 'IIAC B5, NOREA 4.1',
    options: [
      { label: 'Directly from data subjects', score: 2 },
      { label: 'From existing internal systems', score: 2 },
      { label: 'From third parties/suppliers', score: 3 },
      { label: 'Public sources/observational data', score: 3 },
      { label: 'Combination of multiple sources', score: 4 },
      { label: 'New collection methods (surveys, tracking)', score: 4 },
    ]
  },
  {
    id: 'B5',
    section: 'SECTION B: DATA CHARACTERISTICS & SENSITIVITY',
    title: 'B5. Special Categories Processing',
    description: 'Art 9 GDPR / HIPAA special category triggers.',
    reference: 'NHS 2.2, NOREA 2.4',
    options: [
      { label: 'No special category data', score: 1 },
      { label: 'Health data', score: 5 },
      { label: 'Racial/ethnic origin', score: 5 },
      { label: 'Political/religious beliefs', score: 5 },
      { label: 'Trade union membership', score: 5 },
      { label: 'Sexual orientation', score: 5 },
      { label: 'Criminal conviction data', score: 5 },
      { label: 'Biometric data', score: 5 },
    ]
  },

  // SECTION C
  {
    id: 'C1',
    section: 'SECTION C: LAWFUL BASIS & FAIR PROCESSING',
    title: 'C1. Primary Lawful Basis',
    description: 'Article 6 GDPR or equivalent statutory basis.',
    reference: 'NHS 4.3, NOREA 4.3, IIAC B7',
    options: [
      { label: 'Explicit Consent obtained and documented', score: 2 },
      { label: 'Contractual necessity', score: 2 },
      { label: 'Legal obligation/statutory requirement', score: 3 },
      { label: 'Legitimate Interests (with LIA completed)', score: 3 },
      { label: 'Vital interests', score: 4 },
      { label: 'Public task/official authority', score: 3 },
      { label: 'No lawful basis identified', score: 5 },
    ]
  },
  {
    id: 'C2',
    section: 'SECTION C: LAWFUL BASIS & FAIR PROCESSING',
    title: 'C2. Consent Management (if applicable)',
    description: 'Mechanisms for collecting and recording consent.',
    reference: 'NHS 2.23, NOREA 4.4',
    options: [
      { label: 'Granular, specific, documented consent', score: 1 },
      { label: 'General consent obtained', score: 3 },
      { label: 'Implied/opt-out consent', score: 4 },
      { label: 'No consent mechanism', score: 5 },
      { label: 'N/A - consent not required basis', score: 1 },
    ]
  },
  {
    id: 'C3',
    section: 'SECTION C: LAWFUL BASIS & FAIR PROCESSING',
    title: 'C3. Consent Withdrawal Mechanism',
    description: 'Ability for users to revoke consent effortlessly.',
    reference: 'NOREA 4.4.1',
    options: [
      { label: 'Easy withdrawal process available', score: 1 },
      { label: 'Withdrawal possible with effort', score: 2 },
      { label: 'Withdrawal technically difficult', score: 4 },
      { label: 'No withdrawal mechanism', score: 5 },
      { label: 'N/A - consent not required', score: 1 },
    ]
  },
  {
    id: 'C4',
    section: 'SECTION C: LAWFUL BASIS & FAIR PROCESSING',
    title: 'C4. Purpose Specification & Limitation',
    description: 'Definition and boundaries of processing scope.',
    reference: 'NHS 2.6, NOREA 5.1',
    options: [
      { label: 'Single, specific documented purpose', score: 1 },
      { label: 'Multiple related purposes documented', score: 2 },
      { label: 'Broad/vague purposes', score: 3 },
      { label: 'Secondary use without proper basis', score: 4 },
      { label: 'Unclear/undefined purposes', score: 5 },
    ]
  },
  {
    id: 'C5',
    section: 'SECTION C: LAWFUL BASIS & FAIR PROCESSING',
    title: 'C5. Public Interest Justification (if applicable)',
    description: 'Legal grounds for statutory or public task functions.',
    reference: 'NHS 2.23, Grounds doc',
    options: [
      { label: 'Clear public interest documented', score: 2 },
      { label: 'Statutory authority exists', score: 2 },
      { label: 'Section 251/S251 approval (health)', score: 3 },
      { label: 'Overriding public interest claimed', score: 4 },
      { label: 'No public interest justification', score: 5 },
    ]
  },

  // SECTION D
  {
    id: 'D1',
    section: 'SECTION D: DATA MINIMIZATION & COLLECTION',
    title: 'D1. Data Minimization Assessment',
    description: 'Extent to which data collected is strictly necessary.',
    reference: 'IIAC B4, NOREA 2.1',
    options: [
      { label: 'Only strictly necessary data collected', score: 1 },
      { label: 'Limited additional data with justification', score: 2 },
      { label: 'Moderate additional data', score: 3 },
      { label: 'Extensive data collection', score: 4 },
      { label: '"Collect everything" approach', score: 5 },
    ]
  },
  {
    id: 'D2',
    section: 'SECTION D: DATA MINIMIZATION & COLLECTION',
    title: 'D2. Pseudonymization/Anonymization',
    description: 'Implementation of de-identification controls.',
    reference: 'NOREA 2.2, NHS 1D',
    options: [
      { label: 'Data fully anonymized', score: 1 },
      { label: 'Pseudonymized with controls', score: 2 },
      { label: 'Partially pseudonymized', score: 3 },
      { label: 'Identifiable with some controls', score: 4 },
      { label: 'Fully identifiable, no controls', score: 5 },
    ]
  },
  {
    id: 'D3',
    section: 'SECTION D: DATA MINIMIZATION & COLLECTION',
    title: 'D3. Collection Method Privacy Impact',
    description: 'Mode and transparency of data capture.',
    reference: 'IIAC B8, NOREA 4.1',
    options: [
      { label: 'Non-intrusive collection', score: 1 },
      { label: 'Standard form/questionnaire', score: 2 },
      { label: 'Observation/tracking', score: 4 },
      { label: 'Surveillance/monitoring', score: 5 },
      { label: 'Biometric collection', score: 5 },
      { label: 'Collection without notice', score: 5 },
    ]
  },

  // SECTION E
  {
    id: 'E1',
    section: 'SECTION E: DATA SHARING & TRANSFERS',
    title: 'E1. Third-Party Sharing',
    description: 'Sharing with vendors, partners, or third parties.',
    reference: 'IIAC E1, NOREA 3.5',
    options: [
      { label: 'No third-party sharing', score: 1 },
      { label: 'Shared with 1-2 vetted processors', score: 2 },
      { label: 'Multiple processors with DPAs', score: 3 },
      { label: 'Uncontrolled sharing with partners', score: 4 },
      { label: 'Public/shared widely', score: 5 },
      { label: 'Commercial sale of data', score: 5 },
    ]
  },
  {
    id: 'E2',
    section: 'SECTION E: DATA SHARING & TRANSFERS',
    title: 'E2. Sub-processor Management',
    description: 'Governance over downstream sub-processors.',
    reference: 'IIAC E3, F35',
    options: [
      { label: 'No sub-processors', score: 1 },
      { label: 'Pre-approved list with notification', score: 2 },
      { label: 'General authorization', score: 3 },
      { label: 'Limited visibility/control', score: 4 },
      { label: 'No control over sub-processors', score: 5 },
    ]
  },
  {
    id: 'E3',
    section: 'SECTION E: DATA SHARING & TRANSFERS',
    title: 'E3. Cross-Border Transfers',
    description: 'International transfers outside local jurisdiction.',
    reference: 'IIAC D21-24, NOREA 3.3',
    options: [
      { label: 'No cross-border transfers', score: 1 },
      { label: 'Adequacy decision countries only', score: 2 },
      { label: 'SCCs/BCRs in place', score: 3 },
      { label: 'Derogations used', score: 4 },
      { label: 'No transfer safeguards', score: 5 },
      { label: 'High-risk countries involved', score: 5 },
    ]
  },
  {
    id: 'E4',
    section: 'SECTION E: DATA SHARING & TRANSFERS',
    title: 'E4. Data Sovereignty Requirements',
    description: 'Data localization and jurisdictional constraints.',
    reference: 'IIAC D21-24',
    options: [
      { label: 'No localization requirements', score: 1 },
      { label: 'Single jurisdiction compliance', score: 2 },
      { label: 'Multiple jurisdictions', score: 3 },
      { label: 'Conflicting requirements', score: 4 },
      { label: 'No localization controls', score: 5 },
    ]
  },

  // SECTION F
  {
    id: 'F1',
    section: 'SECTION F: INDIVIDUAL RIGHTS MANAGEMENT',
    title: 'F1. Rights Fulfillment Mechanism',
    description: 'Process for handling DSARs, erasure, rectification.',
    reference: 'IIAC B11-13, NOREA 5.9-5.11',
    options: [
      { label: 'Automated portal with full rights support', score: 1 },
      { label: 'Manual process with documented procedures', score: 2 },
      { label: 'Basic email/contact process', score: 3 },
      { label: 'Ad-hoc response only', score: 4 },
      { label: 'No defined process', score: 5 },
    ]
  },
  {
    id: 'F2',
    section: 'SECTION F: INDIVIDUAL RIGHTS MANAGEMENT',
    title: 'F2. Response Time Capability',
    description: 'Ability to complete requests within statutory deadlines.',
    reference: 'NOREA 5.9-5.11',
    options: [
      { label: 'Automated/instant response', score: 1 },
      { label: 'Within statutory timelines', score: 2 },
      { label: 'Within 30 days', score: 3 },
      { label: '> 30 days', score: 4 },
      { label: 'No timeline commitment', score: 5 },
    ]
  },
  {
    id: 'F3',
    section: 'SECTION F: INDIVIDUAL RIGHTS MANAGEMENT',
    title: 'F3. Privacy Notice Compliance',
    description: 'Transparency and privacy disclosures.',
    reference: 'IIAC B44, NOREA 4.5',
    options: [
      { label: 'Comprehensive, layered notice provided', score: 1 },
      { label: 'Standard privacy policy available', score: 2 },
      { label: 'Limited/basic information', score: 3 },
      { label: 'Notice at point of collection only', score: 4 },
      { label: 'No privacy notice', score: 5 },
    ]
  },
  {
    id: 'F4',
    section: 'SECTION F: INDIVIDUAL RIGHTS MANAGEMENT',
    title: 'F4. Automated Decision-Making',
    description: 'Profiling or algorithmic processing (GDPR Art 22 / EU AI Act).',
    reference: 'IIAC B8, NOREA 5.4',
    options: [
      { label: 'No automated decisions', score: 1 },
      { label: 'Human-in-the-loop required', score: 2 },
      { label: 'Automated with human review', score: 3 },
      { label: 'Fully automated, significant effects', score: 4 },
      { label: 'Fully automated, legal/health effects', score: 5 },
    ]
  },

  // SECTION G
  {
    id: 'G1',
    section: 'SECTION G: DATA FLOW & ARCHITECTURE',
    title: 'G1. Data Flow Documentation',
    description: 'Diagramming and documentation of system data flows.',
    reference: 'IIAC E25-26, NHS 2.4, 3.0',
    options: [
      { label: 'Up-to-date flow diagram exists', score: 1 },
      { label: 'Basic documentation available', score: 2 },
      { label: 'Partial documentation', score: 3 },
      { label: 'No documentation', score: 4 },
      { label: 'Complex/unclear flows', score: 5 },
    ]
  },
  {
    id: 'G2',
    section: 'SECTION G: DATA FLOW & ARCHITECTURE',
    title: 'G2. Data Transmission Security',
    description: 'Encryption in transit (TLS 1.3, mTLS, etc.).',
    reference: 'IIAC E27, NHS 2.16',
    options: [
      { label: 'All transmissions encrypted', score: 1 },
      { label: 'Most transmissions encrypted', score: 2 },
      { label: 'Some encryption used', score: 3 },
      { label: 'Limited encryption', score: 4 },
      { label: 'No encryption', score: 5 },
    ]
  },
  {
    id: 'G3',
    section: 'SECTION G: DATA FLOW & ARCHITECTURE',
    title: 'G3. Data at Rest Security',
    description: 'Encryption at rest (AES-256, KMS).',
    reference: 'IIAC E33',
    options: [
      { label: 'All data encrypted at rest', score: 1 },
      { label: 'Sensitive data encrypted', score: 2 },
      { label: 'Some encryption at rest', score: 3 },
      { label: 'Limited encryption', score: 4 },
      { label: 'No encryption at rest', score: 5 },
    ]
  },
  {
    id: 'G4',
    section: 'SECTION G: DATA FLOW & ARCHITECTURE',
    title: 'G4. System Segmentation',
    description: 'Network or database isolation.',
    reference: 'IIAC E31',
    options: [
      { label: 'Complete logical/virtual separation', score: 1 },
      { label: 'Adequate segmentation', score: 2 },
      { label: 'Basic segmentation', score: 3 },
      { label: 'Limited segmentation', score: 4 },
      { label: 'No segmentation', score: 5 },
    ]
  },

  // SECTION H
  {
    id: 'H1',
    section: 'SECTION H: RETENTION & DISPOSAL',
    title: 'H1. Retention Period Definition',
    description: 'Defined schedule for data retention lifecycle.',
    reference: 'IIAC C17, NOREA 6.1',
    options: [
      { label: 'Clear retention schedule exists', score: 1 },
      { label: 'Basic retention policy', score: 2 },
      { label: 'Ad-hoc retention decisions', score: 3 },
      { label: 'No defined retention', score: 4 },
      { label: 'Indefinite retention', score: 5 },
    ]
  },
  {
    id: 'H2',
    section: 'SECTION H: RETENTION & DISPOSAL',
    title: 'H2. Disposal Mechanisms',
    description: 'Secure sanitization, purging, or shredding.',
    reference: 'IIAC C18-20, NOREA 6.2',
    options: [
      { label: 'Automated secure disposal', score: 1 },
      { label: 'Manual secure disposal', score: 2 },
      { label: 'Basic disposal procedures', score: 3 },
      { label: 'Insecure disposal methods', score: 4 },
      { label: 'No disposal mechanism', score: 5 },
    ]
  },
  {
    id: 'H3',
    section: 'SECTION H: RETENTION & DISPOSAL',
    title: 'H3. Post-Termination Handling',
    description: 'Vendor contract expiration data destruction/return.',
    reference: 'IIAC C18',
    options: [
      { label: 'Contractual return/destruction obligation', score: 1 },
      { label: 'Basic return procedures', score: 2 },
      { label: 'Ad-hoc arrangements', score: 3 },
      { label: 'No termination provisions', score: 4 },
      { label: 'Data retained indefinitely', score: 5 },
    ]
  },

  // SECTION I
  {
    id: 'I1',
    section: 'SECTION I: SECURITY CONTROLS',
    title: 'I1. Access Controls',
    description: 'Authentication, authorization, and MFA.',
    reference: 'IIAC F38, NHS 2.14',
    options: [
      { label: 'Role-based with MFA', score: 1 },
      { label: 'Basic access controls', score: 2 },
      { label: 'Limited controls', score: 3 },
      { label: 'Weak controls', score: 4 },
      { label: 'No access controls', score: 5 },
    ]
  },
  {
    id: 'I2',
    section: 'SECTION I: SECURITY CONTROLS',
    title: 'I2. Audit Logging & Monitoring',
    description: 'Security logs, SIEM, and real-time alerts.',
    reference: 'IIAC F38, NHS 2.10',
    options: [
      { label: 'Comprehensive logging with alerts', score: 1 },
      { label: 'Basic logging', score: 2 },
      { label: 'Limited logging', score: 3 },
      { label: 'Minimal logging', score: 4 },
      { label: 'No logging', score: 5 },
    ]
  },
  {
    id: 'I3',
    section: 'SECTION I: SECURITY CONTROLS',
    title: 'I3. Breach Response Capability',
    description: 'Incidence response plan and 72-hour notification preparedness.',
    reference: 'IIAC I48, NOREA 8.1',
    options: [
      { label: 'Fully tested incident response plan', score: 1 },
      { label: 'Documented plan exists', score: 2 },
      { label: 'Ad-hoc response capability', score: 3 },
      { label: 'Limited response capability', score: 4 },
      { label: 'No response capability', score: 5 },
    ]
  },
  {
    id: 'I4',
    section: 'SECTION I: SECURITY CONTROLS',
    title: 'I4. Staff Training & Awareness',
    description: 'Mandatory privacy and security training.',
    reference: 'IIAC G45, NHS 2.18',
    options: [
      { label: 'Comprehensive privacy training', score: 1 },
      { label: 'Basic training provided', score: 2 },
      { label: 'Limited training', score: 3 },
      { label: 'Ad-hoc training', score: 4 },
      { label: 'No training', score: 5 },
    ]
  },
  {
    id: 'I5',
    section: 'SECTION I: SECURITY CONTROLS',
    title: 'I5. Certifications & Standards',
    description: 'Independent security certifications (ISO, SOC 2, HIPAA).',
    reference: 'IIAC G39, NOREA 7.3',
    options: [
      { label: 'ISO 27001/27701 certified', score: 1 },
      { label: 'Industry certifications', score: 2 },
      { label: 'Basic security standards', score: 3 },
      { label: 'Limited compliance', score: 4 },
      { label: 'No certifications', score: 5 },
    ]
  },

  // SECTION J (Vendor Management - Conditional if A1 is vendor/outsourcing)
  {
    id: 'J1',
    section: 'SECTION J: VENDOR MANAGEMENT (Conditional)',
    title: 'J1. Vendor Due Diligence',
    description: 'Pre-contractual privacy & security vetting.',
    reference: 'IIAC F35-36',
    conditionalParentId: 'A1',
    options: [
      { label: 'Comprehensive due diligence', score: 1 },
      { label: 'Basic checks completed', score: 2 },
      { label: 'Limited due diligence', score: 3 },
      { label: 'Minimal checks', score: 4 },
      { label: 'No due diligence', score: 5 },
    ]
  },
  {
    id: 'J2',
    section: 'SECTION J: VENDOR MANAGEMENT (Conditional)',
    title: 'J2. Contractual Protections',
    description: 'Data Processing Agreements (DPA) & Standard Contractual Clauses.',
    reference: 'IIAC F36',
    conditionalParentId: 'A1',
    options: [
      { label: 'Comprehensive DPA with all requirements', score: 1 },
      { label: 'Basic DPA included', score: 2 },
      { label: 'Limited contractual terms', score: 3 },
      { label: 'No specific privacy terms', score: 4 },
      { label: 'No written contract', score: 5 },
    ]
  },
  {
    id: 'J3',
    section: 'SECTION J: VENDOR MANAGEMENT (Conditional)',
    title: 'J3. Vendor Oversight & Auditing',
    description: 'Ongoing audit rights and compliance monitoring.',
    reference: 'IIAC J51, K52-53',
    conditionalParentId: 'A1',
    options: [
      { label: 'Regular audits and reporting', score: 1 },
      { label: 'Periodic reviews', score: 2 },
      { label: 'Ad-hoc oversight', score: 3 },
      { label: 'Limited oversight', score: 4 },
      { label: 'No oversight', score: 5 },
    ]
  },
  {
    id: 'J4',
    section: 'SECTION J: VENDOR MANAGEMENT (Conditional)',
    title: 'J4. Vendor Incident History',
    description: 'Historical security breaches or data leaks.',
    reference: 'IIAC I50',
    conditionalParentId: 'A1',
    options: [
      { label: 'No incidents in 3 years', score: 1 },
      { label: 'Minor incidents with remediation', score: 2 },
      { label: 'Some incidents', score: 3 },
      { label: 'Significant incident history', score: 4 },
      { label: 'Unknown/undisclosed', score: 5 },
    ]
  },

  // SECTION K
  {
    id: 'K1',
    section: 'SECTION K: GOVERNANCE & ACCOUNTABILITY',
    title: 'K1. Roles & Responsibilities',
    description: 'Assigned accountability for privacy compliance.',
    reference: 'NOREA 1.2, 1.4',
    options: [
      { label: 'Clear roles with assigned owners', score: 1 },
      { label: 'Basic role definitions', score: 2 },
      { label: 'Some role clarity', score: 3 },
      { label: 'Unclear responsibilities', score: 4 },
      { label: 'No defined roles', score: 5 },
    ]
  },
  {
    id: 'K2',
    section: 'SECTION K: GOVERNANCE & ACCOUNTABILITY',
    title: 'K2. Privacy by Design',
    description: 'Embedding privacy into architectural design.',
    reference: 'IIAC F1, NOREA 5.5',
    options: [
      { label: 'Privacy integrated throughout', score: 1 },
      { label: 'Most principles implemented', score: 2 },
      { label: 'Some consideration given', score: 3 },
      { label: 'Minimal consideration', score: 4 },
      { label: 'No consideration', score: 5 },
    ]
  },
  {
    id: 'K3',
    section: 'SECTION K: GOVERNANCE & ACCOUNTABILITY',
    title: 'K3. Record Management (RoPA)',
    description: 'Record of Processing Activities documentation.',
    reference: 'IIAC H2K4',
    options: [
      { label: 'Automated RoPA maintenance', score: 1 },
      { label: 'Documented in central RoPA', score: 2 },
      { label: 'Local documentation only', score: 3 },
      { label: 'Partial documentation', score: 4 },
      { label: 'No documentation', score: 5 },
    ]
  },
  {
    id: 'K4',
    section: 'SECTION K: GOVERNANCE & ACCOUNTABILITY',
    title: 'K4. Stakeholder Consultation',
    description: 'Consultation with internal stakeholders, SIRO, DPO, or end-users.',
    reference: 'NOREA 1.9, NHS CG/SIRO',
    options: [
      { label: 'Comprehensive consultation completed', score: 1 },
      { label: 'Basic consultation', score: 2 },
      { label: 'Limited consultation', score: 3 },
      { label: 'Minimal consultation', score: 4 },
      { label: 'No consultation', score: 5 },
    ]
  }
];
