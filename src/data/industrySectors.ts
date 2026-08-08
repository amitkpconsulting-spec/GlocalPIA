import { IndustrySectorProfile, IndustrySectorId, QuestionDefinition } from '../types';

export const INDUSTRY_SECTOR_PROFILES: Record<IndustrySectorId, IndustrySectorProfile> = {
  banking: {
    id: 'banking',
    name: 'Banking & Financial Services',
    shortName: 'Banking & Finance',
    iconName: 'Landmark',
    badgeColor: 'bg-emerald-950 text-emerald-300 border-emerald-800',
    context: 'High-frequency processing of financial assets, credit risk scoring, open banking APIs, cross-border payments, and fraud detection.',
    dynamicRules: [
      'Enforce strict evaluation of Financial Identifiers (IBAN, Credit Card, Credit Score, Account Balance).',
      'Mandatory risk scoring for Automated Decisioning / AI Credit Scoring.',
      'Verification of Data Residency & Localization requirements for financial transaction logs.'
    ],
    regulatoryAlignment: [
      'PCI-DSS v4.0',
      'Gramm-Leach-Bliley Act (GLBA)',
      'Basel III / BCBS 239',
      'PSD2 / Open Banking Regulations',
      'SWIFT Data Privacy Guidelines',
      'Local Central Bank Regulations'
    ],
    baseRiskWeightingNote: 'Financial Identifiers elevate Base Impact. Automated AI credit scoring triggers a +30% risk multiplier.'
  },
  healthcare: {
    id: 'healthcare',
    name: 'Hospitals & Healthcare',
    shortName: 'Healthcare & HealthTech',
    iconName: 'Activity',
    badgeColor: 'bg-rose-950 text-rose-300 border-rose-800',
    context: 'Processing of Protected Health Information (PHI), Patient EHR/EMR systems, telemedicine, medical IoT devices, and emergency contact registries.',
    dynamicRules: [
      'Automatically elevate any processing of Health, Medical, or Biometric data to Critical Base Risk (Base Score = 5).',
      'Assess patient consent workflows, emergency break-glass procedures, and medical practitioner access controls.',
      'Audit logging requirements for every view/query of patient electronic health records.'
    ],
    regulatoryAlignment: [
      'HIPAA Privacy & Security Rules',
      'HITECH Act',
      'EU Medical Device Regulation (MDR)',
      'Local Health Data Protection Acts'
    ],
    baseRiskWeightingNote: 'Processing PHI or biometric data automatically forces Base Risk Score to maximum 5.0 (Critical Tier).'
  },
  retail: {
    id: 'retail',
    name: 'Retail & E-Commerce',
    shortName: 'Retail & E-Com',
    iconName: 'ShoppingBag',
    badgeColor: 'bg-amber-950 text-amber-300 border-amber-800',
    context: 'Mass consumer data processing, loyalty programs, direct marketing, behavioral tracking, e-commerce checkout portals, and POS terminals.',
    dynamicRules: [
      'Evaluate digital footprinting, web cookies, location tracking, and targeted advertising profiling.',
      'Assess consumer consent mechanisms (Opt-in vs. Opt-out for promotional data sharing).',
      'Mandatory assessment of POS/Payment Gateway PCI-DSS scope separation.'
    ],
    regulatoryAlignment: [
      'Consumer Privacy Acts (CCPA/CPRA)',
      'GDPR ePrivacy Directive',
      'PCI-DSS v4.0',
      'Local Consumer Protection Laws'
    ],
    baseRiskWeightingNote: 'Mass public consumer tracking triggers additional ePrivacy and opt-out compliance checks.'
  },
  corporate: {
    id: 'corporate',
    name: 'Corporate & Enterprise Operations',
    shortName: 'Corporate & HR',
    iconName: 'Briefcase',
    badgeColor: 'bg-blue-950 text-blue-300 border-blue-800',
    context: 'HR & Employee lifecycle management, corporate IT infrastructure, workplace surveillance, whistleblower portals, and executive communications.',
    dynamicRules: [
      'Differentiate between Customer PII and Employee PII (e.g., performance reviews, payroll, background checks).',
      'Evaluate employee monitoring tools (CCTV, DLP agents, keystroke logging, email auditing).',
      'Review lawful basis under employment contracts versus explicit consent constraints.'
    ],
    regulatoryAlignment: [
      'Labor Laws & Employment Directives',
      'Works Council Privacy Directives',
      'Corporate Governance Frameworks',
      'Whistleblower Protection Acts'
    ],
    baseRiskWeightingNote: 'Workplace surveillance or keystroke logging triggers high governance scrutiny under Labor Law.'
  },
  logistics: {
    id: 'logistics',
    name: 'Trade, Logistics & Supply Chain',
    shortName: 'Trade & Logistics',
    iconName: 'Truck',
    badgeColor: 'bg-cyan-950 text-cyan-300 border-cyan-800',
    context: 'Cross-border movement of goods, customs data, vendor portals, fleet GPS tracking, driver management, and ERP integrations.',
    dynamicRules: [
      'Focus on Cross-Border Transborder Data Flow (TDF) across multi-country supply routes.',
      'Evaluate driver/operator telemetry, location tracking, and third-party logistics (3PL) data sharing.',
      'Assess B2B contact data versus personal identifiable information.'
    ],
    regulatoryAlignment: [
      'International Trade Customs Data Rules',
      'Cross-Border Data Transfer Frameworks',
      'World Customs Organization (WCO) Standards',
      'TDF Sovereignty Regulations'
    ],
    baseRiskWeightingNote: 'Multi-jurisdictional transborder flows add cross-border transfer penalties.'
  },
  agtech: {
    id: 'agtech',
    name: 'Agriculture & AgTech',
    shortName: 'AgTech & Agriculture',
    iconName: 'Sprout',
    badgeColor: 'bg-lime-950 text-lime-300 border-lime-800',
    context: 'Precision agriculture platforms, drone mapping, farmer subsidy registries, IoT soil sensors, livestock tracking, and farm management apps.',
    dynamicRules: [
      'Differentiate between land/geospatial telemetry data and personal farmer identities.',
      'Assess data ownership and co-mingling of private farm metrics with commercial AI crop-yield models.',
      'Evaluate government subsidy database integrations and direct-to-farmer payout mechanisms.'
    ],
    regulatoryAlignment: [
      'Agricultural Data Privacy Frameworks',
      'AgData Transparent Standards',
      'National Rural Data Governance Guidelines'
    ],
    baseRiskWeightingNote: 'Linking geospatial drone telemetry to identified farmers requires clear commercial AI consent.'
  },
  pharma: {
    id: 'pharma',
    name: 'Pharma & Life Sciences',
    shortName: 'Pharma & Clinical',
    iconName: 'FlaskConical',
    badgeColor: 'bg-purple-950 text-purple-300 border-purple-800',
    context: 'Clinical trials, drug safety monitoring (Pharmacovigilance), genetic research, R&D labs, and patient support initiatives.',
    dynamicRules: [
      'Evaluate Informed Consent Forms (ICF) for clinical trial participants and secondary data reuse.',
      'Enforce strict pseudo-anonymization and key-coding of clinical trial subjects.',
      'Assess mandatory adverse event reporting workflows vs. privacy confidentiality rules.'
    ],
    regulatoryAlignment: [
      'Good Clinical Practice (GCP)',
      'FDA 21 CFR Part 11',
      'EU Clinical Trials Regulation (CTR)',
      'Pharmacovigilance Privacy Guidelines'
    ],
    baseRiskWeightingNote: 'Key-coded trial subject records require strict sponsor blinding and bio-bank consent auditing.'
  }
};

export const SECTOR_SPECIFIC_QUESTIONS: Record<IndustrySectorId, QuestionDefinition[]> = {
  banking: [
    {
      id: 'SEC_FIN_1',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Banking S1. Financial Identifiers & Credit Data Scope',
      description: 'Sensitivity level of processed financial records (IBAN, Credit Cards, Credit Scores, Account Balances).',
      reference: 'PCI-DSS v4.0 / GLBA §501(b)',
      options: [
        { label: 'Basic payment receipt/transaction metadata only', score: 1 },
        { label: 'Tokenized credit card / payment data via PCI-DSS gateway', score: 2 },
        { label: 'Bank account numbers, IBAN, and account balances', score: 4 },
        { label: 'Full credit scores, financial asset histories, and credit risk profiles', score: 5 }
      ]
    },
    {
      id: 'SEC_FIN_2',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Banking S2. Open Banking & Third-Party API Sharing',
      description: 'Data sharing mechanisms under Open Banking / PSD2 regulations.',
      reference: 'PSD2 Art 66/67 / Open Banking API Standards',
      options: [
        { label: 'No third-party open banking API integrations', score: 1 },
        { label: 'Read-only financial data API with explicit consent token', score: 2 },
        { label: 'Payment initiation service (PISP) integration', score: 3 },
        { label: 'Unverified third-party financial aggregator data sharing', score: 5 }
      ]
    },
    {
      id: 'SEC_FIN_3',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Banking S3. AI/Automated Credit Scoring & Fraud Profiling',
      description: 'Algorithmic decision-making for loan approvals, credit limits, or fraud flags.',
      reference: 'EU AI Act High-Risk AI / Basel III Risk Models',
      options: [
        { label: 'No automated scoring or profiling used', score: 1 },
        { label: 'Human credit analyst makes final decision based on AI recommendation', score: 2 },
        { label: 'Automated credit limit adjustments with right to human appeal', score: 3 },
        { label: 'Fully automated credit denial / account blocking without human review', score: 5 }
      ]
    }
  ],
  healthcare: [
    {
      id: 'SEC_HEALTH_1',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Healthcare S1. Protected Health Information (PHI) & EHR Scope',
      description: 'Depth and classification of patient health records processed.',
      reference: 'HIPAA §164.502 / EU MDR Art 62',
      options: [
        { label: 'Basic appointment booking / contact details only', score: 1 },
        { label: 'Anonymized or aggregated epidemiological statistics', score: 2 },
        { label: 'Electronic Health Records (EHR), diagnostic images, prescriptions', score: 5 },
        { label: 'Genomic data, mental health records, or biometric health tracking', score: 5 }
      ]
    },
    {
      id: 'SEC_HEALTH_2',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Healthcare S2. Emergency Break-Glass & Practitioner Audit Controls',
      description: 'Access auditing and emergency override capability for medical staff.',
      reference: 'HIPAA Security Rule §164.312(b) / NHS Caldicott Principles',
      options: [
        { label: 'Strict RBAC with mandatory 100% audit logging for every record view', score: 1 },
        { label: 'Emergency break-glass access enabled with immediate mandatory DPO audit alert', score: 2 },
        { label: 'Manual break-glass logging without real-time audit triggers', score: 4 },
        { label: 'Shared practitioner accounts or un-audited EHR access', score: 5 }
      ]
    },
    {
      id: 'SEC_HEALTH_3',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Healthcare S3. Medical IoT & Telemedicine Endpoint Security',
      description: 'Security controls on connected medical diagnostic devices and remote care apps.',
      reference: 'EU MDR Annex I / FDA Medical Device Cybersecurity',
      options: [
        { label: 'No connected medical IoT or remote devices involved', score: 1 },
        { label: 'Hospital-managed encrypted medical IoT devices on isolated VLAN', score: 2 },
        { label: 'Patient-owned mobile telemedicine app with TLS and device verification', score: 3 },
        { label: 'Unencrypted wireless medical telemetry or remote patient monitors', score: 5 }
      ]
    }
  ],
  retail: [
    {
      id: 'SEC_RETAIL_1',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Retail S1. Digital Footprinting & Behavioral Profiling',
      description: 'Tracking consumer shopping habits, cookies, location, and targeted advertising.',
      reference: 'GDPR ePrivacy Directive / CCPA §1798.120',
      options: [
        { label: 'Transactional processing only, no marketing profiling or tracking cookies', score: 1 },
        { label: 'First-party loyalty program analytics with explicit opt-in', score: 2 },
        { label: 'Cross-site third-party tracking pixels and targeted ad profiling', score: 4 },
        { label: 'In-store facial recognition or real-time beacon location tracking', score: 5 }
      ]
    },
    {
      id: 'SEC_RETAIL_2',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Retail S2. Consumer Preference & Opt-Out Mechanism',
      description: 'Ease of withdrawing marketing consent or opting out of data sale/sharing.',
      reference: 'CCPA/CPRA Do Not Sell My Info / ICO Marketing Guidance',
      options: [
        { label: 'One-click preference center for instant opt-out/unsubscribe', score: 1 },
        { label: 'Granular consent banner with default-off cookies', score: 2 },
        { label: 'Pre-checked opt-in boxes during online checkout', score: 4 },
        { label: 'No consumer opt-out interface available', score: 5 }
      ]
    },
    {
      id: 'SEC_RETAIL_3',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Retail S3. POS Terminal & Payment Isolation',
      description: 'Network segmentation and hardware security of Point-of-Sale terminals.',
      reference: 'PCI-DSS v4.0 Requirement 9 & 12',
      options: [
        { label: 'Full P2PE (Point-to-Point Encryption) hardware POS terminals', score: 1 },
        { label: 'Outsourced tokenized checkout portal (e.g. Stripe, Adyen)', score: 2 },
        { label: 'Legacy POS hardware connected to corporate internal network', score: 4 },
        { label: 'Unsegmented store payment network', score: 5 }
      ]
    }
  ],
  corporate: [
    {
      id: 'SEC_CORP_1',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Corporate S1. Employee PII vs Customer PII Governance',
      description: 'Handling of sensitive employee lifecycle records (payroll, appraisals, background checks).',
      reference: 'Article 88 GDPR / National Labor Code Privacy Rules',
      options: [
        { label: 'Basic business contact directory data only', score: 1 },
        { label: 'Standard payroll & HR administration records with role-based access', score: 2 },
        { label: 'Employee health assessments, sickness records, or background vetting logs', score: 4 },
        { label: 'Whistleblower allegations or disciplinary investigation dossiers', score: 5 }
      ]
    },
    {
      id: 'SEC_CORP_2',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Corporate S2. Workplace Surveillance & Monitoring Tools',
      description: 'Use of endpoint surveillance agents, DLP, CCTV, or keystroke tracking.',
      reference: 'Works Council Privacy Frameworks / ECHR Art 8 Privacy at Work',
      options: [
        { label: 'No employee monitoring or surveillance agents deployed', score: 1 },
        { label: 'Standard corporate email spam filters & network security logging with prior notice', score: 2 },
        { label: 'Endpoint Data Loss Prevention (DLP) inspects file transfers & external USBs', score: 3 },
        { label: 'Continuous keystroke logging, webcam monitoring, or covert employee tracking', score: 5 }
      ]
    },
    {
      id: 'SEC_CORP_3',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Corporate S3. Whistleblower Anonymity & Works Council Review',
      description: 'Safeguards for confidential reporting channels and employee representative sign-off.',
      reference: 'EU Whistleblower Protection Directive 2019/1937',
      options: [
        { label: 'Third-party encrypted whistleblower portal with guaranteed anonymity', score: 1 },
        { label: 'Internal email hot-line managed by Legal/Compliance', score: 2 },
        { label: 'Works Council / Trade Union consultation completed and documented', score: 2 },
        { label: 'Unencrypted internal whistleblower reporting without identity protection', score: 5 }
      ]
    }
  ],
  logistics: [
    {
      id: 'SEC_LOG_1',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Logistics S1. Cross-Border Supply Route Data Flow (TDF)',
      description: 'Transborder movement of logistics manifests, customs declarations, and vendor data.',
      reference: 'WCO SAFE Framework / International Customs Data Privacy',
      options: [
        { label: 'Domestic supply chain only, zero cross-border data transfers', score: 1 },
        { label: 'Intra-regional transfers within adequacy-approved trade zones', score: 2 },
        { label: 'Global supply route manifests transferred via Standard Contractual Clauses', score: 3 },
        { label: 'Customs data transmitted to non-adequate third countries without transfer impact assessment', score: 5 }
      ]
    },
    {
      id: 'SEC_LOG_2',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Logistics S2. Fleet GPS Telemetry & Operator Tracking',
      description: 'Real-time location tracking of delivery drivers, operators, and transport fleets.',
      reference: 'ICO Employee Location Tracking Guidance / EU Tachograph Rules',
      options: [
        { label: 'Vehicle tracking only (no driver identity linked)', score: 1 },
        { label: 'Shift-based driver GPS tracking with automatic off-duty privacy toggle', score: 2 },
        { label: 'Continuous 24/7 driver location tracking without off-duty disablement', score: 4 },
        { label: 'In-cab facial fatigue monitoring cameras without explicit privacy impact assessment', score: 5 }
      ]
    },
    {
      id: 'SEC_LOG_3',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Logistics S3. 3PL Sub-contractor & Vendor Portal Security',
      description: 'API access and data sharing with third-party logistics (3PL) partners.',
      reference: 'ISO 28000 Supply Chain Security',
      options: [
        { label: 'Direct operating fleet only, no 3PL vendor integrations', score: 1 },
        { label: 'OAuth 2.0 scoped API access for audited 3PL logistics partners', score: 2 },
        { label: 'Shared cloud portal with basic password authentication for sub-contractors', score: 3 },
        { label: 'Unrestricted database view access granted to external freight brokers', score: 5 }
      ]
    }
  ],
  agtech: [
    {
      id: 'SEC_AG_1',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'AgTech S1. Geospatial Farm Telemetry vs Farmer Identity Isolation',
      description: 'Separation of farm spatial/sensor metrics from personal land owner identities.',
      reference: 'AgData Transparent Core Principles / USDA Data Governance',
      options: [
        { label: 'Anonymized soil/weather sensor data with zero farmer identification', score: 1 },
        { label: 'Farm telemetry pseudonymized with strict key-code separation from owner name', score: 2 },
        { label: 'Drone mapping & satellite imagery directly linked to farmer name & tax ID', score: 4 },
        { label: 'Publicly available farm spatial database linking crop yield to individual farmer', score: 5 }
      ]
    },
    {
      id: 'SEC_AG_2',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'AgTech S2. Commercial AI Crop Model Data Co-mingling',
      description: 'Secondary use of private farm telemetry for commercial machine learning models.',
      reference: 'AgData Transparent Certification Standard',
      options: [
        { label: 'No secondary reuse of farmer data for commercial AI models', score: 1 },
        { label: 'Aggregated & de-identified farm metrics used for AI models with explicit opt-in', score: 2 },
        { label: 'Commercial AI model trained on individual farm metrics without opt-out capability', score: 4 },
        { label: 'Selling private farm operational metrics to third-party commodities traders', score: 5 }
      ]
    },
    {
      id: 'SEC_AG_3',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'AgTech S3. Government Subsidy & Direct Payout Integrations',
      description: 'Interfacing with agricultural grant registries and direct-to-farmer disbursements.',
      reference: 'National Rural Development Payment Rules',
      options: [
        { label: 'No government subsidy or financial payout interfaces', score: 1 },
        { label: 'Encrypted government subsidy verification API with tokenized authentication', score: 2 },
        { label: 'Direct banking integration for subsidy payouts with DPA in place', score: 3 },
        { label: 'Unencrypted transmission of farmer banking & tax ID details to external grant portals', score: 5 }
      ]
    }
  ],
  pharma: [
    {
      id: 'SEC_PHARMA_1',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Pharma S1. Clinical Trial Key-Coding & Sponsor Blinding',
      description: 'Isolation of trial subject identities from pharmaceutical sponsors and R&D labs.',
      reference: 'ICH GCP E6(R2) / EU Clinical Trials Regulation (CTR) Art 81',
      options: [
        { label: 'Double-blinded trial with master identity key retained strictly at clinical site', score: 1 },
        { label: 'Pseudonymized trial records with secure CRO key management', score: 2 },
        { label: 'Single-coded patient records accessible to trial monitors', score: 3 },
        { label: 'Unblinded trial subject PII visible to pharmaceutical sponsor R&D team', score: 5 }
      ]
    },
    {
      id: 'SEC_PHARMA_2',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Pharma S2. Informed Consent Forms (ICF) & Bio-bank Reuse',
      description: 'Scope of participant consent for future observational studies and genetic research.',
      reference: 'FDA 21 CFR Part 50 / Declaration of Helsinki',
      options: [
        { label: 'Granular ICF covering primary trial and optional tier-by-tier secondary research', score: 1 },
        { label: 'Broad ICF covering defined therapeutic area research', score: 2 },
        { label: 'Vague consent for unspecified future commercial research', score: 4 },
        { label: 'Secondary genetic sequencing without participant consent or IRB approval', score: 5 }
      ]
    },
    {
      id: 'SEC_PHARMA_3',
      section: 'SECTION S: SECTOR-SPECIFIC GOVERNANCE CONTROLS',
      title: 'Pharma S3. Pharmacovigilance & Adverse Event Reporting',
      description: 'Data protection safeguards during mandatory drug safety reporting to regulatory authorities.',
      reference: 'FDA 21 CFR Part 314.80 / EMA Good Pharmacovigilance Practices',
      options: [
        { label: 'Adverse event disclosures redacting all non-essential patient identifiers', score: 1 },
        { label: 'De-identified safety report filed with medical authority with secure audit trail', score: 2 },
        { label: 'Full patient contact details transmitted in safety report without pseudonymization', score: 4 },
        { label: 'Non-compliant or delayed adverse event reporting due to privacy confusion', score: 5 }
      ]
    }
  ]
};
