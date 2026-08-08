/**
 * Portable Privacy Impact Assessment (PIA) Management Platform - Core Types
 */

export type AssessmentStatus = 
  | 'Draft' 
  | 'Submitted' 
  | 'IN_REVISION'
  | 'DPO Review' 
  | 'Remediation' 
  | 'Approved' 
  | 'Archived';

export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Critical';

export type GapStatus = 'Open' | 'In Progress' | 'Overdue' | 'Resolved';

export type WorkflowMode = 'frontend' | 'backend';

export type UserRole = 'admin' | 'frontend_user';

export interface AppUser {
  id: string; // e.g. "USR-ADMIN-01" or "USR-2026-SLIN"
  username: string; // e.g. "admin" or "slin"
  fullName: string;
  corporateEmail: string;
  assignedDepartment: string;
  role: UserRole;
  scopeLevel: string; // e.g. "Full System Admin", "Departmental Lead", "Contributor"
  status: 'Active' | 'Revoked' | 'Locked';
  requiresPasswordReset: boolean;
  mfaEnabled: boolean;
  mfaSecret?: string;
  failedLoginAttempts: number;
  lockoutUntil?: string | null; // ISO 8601 timestamp if locked
  createdAt: string;
  lastLoginAt?: string;
}

export interface AuthSession {
  token: string;
  user: AppUser;
  loginTime: string;
  lastActiveTime: string;
}

export type ActionExecutedType =
  | 'INITIAL_SUBMISSION'
  | 'FRONTEND_DRAFT_UPDATE'
  | 'SME_REVISION'
  | 'REGULATORY_TAILORING'
  | 'AUDIT_SIGN_OFF'
  | 'REVISION_REQUESTED'
  | 'USER_PROVISIONED'
  | 'PASSWORD_RESET'
  | 'MFA_ESTABLISHED'
  | 'USER_REVOKED';

export interface DeltaLogEntry {
  sectionId: string;
  parameter: string;
  previousValue: string;
  newValue: string;
  rationale?: string;
}

export interface DataProvenanceEntry {
  id: string;
  timestamp: string; // ISO 8601
  triggeringFid: string; // Frontend Server ID (FID)
  backendBid?: string; // Backend Audit ID (BID)
  parentVersion: string; // e.g. "v1.0"
  newVersion: string; // e.g. "v1.1" or "v2.0"
  actionExecuted: ActionExecutedType;
  modifiedBy: string; // User Role & ID
  deltaLog: DeltaLogEntry[];
  provenanceHash: string; // Cryptographic lineage verification hash
}

export type TargetRegulatoryFramework =
  | 'UK GDPR & DPA 2018'
  | 'EU GDPR & EU AI Act'
  | 'DPDP Act 2023 (India)'
  | 'US CCPA/CPRA & State Laws'
  | 'ISO/IEC 42001 (AI Management)'
  | 'NIST AI RMF 1.0';

export interface RegulatoryTailoringConfig {
  selectedFrameworks: TargetRegulatoryFramework[];
  tailoredResponses?: Record<string, string>;
  smeOverrideNotes?: string;
  smeRiskAdjustment?: RiskLevel;
}

export interface QuestionOption {
  label: string;
  score: number;
  description?: string;
}

export interface QuestionDefinition {
  id: string; // e.g., 'A1', 'B2', 'C1'
  section: string; // e.g., 'Section A: General Information & Project Classification'
  title: string;
  description?: string;
  options: QuestionOption[];
  reference: string; // e.g., 'IIAC A4, NHS 1A'
  conditionalParentId?: string;
  conditionalValue?: string | number | (string | number)[];
}

export interface SectionAnswers {
  [questionId: string]: {
    optionIndex: number;
    selectedLabel: string;
    score: number;
    qualitativeNotes?: string;
  };
}

export interface LawfulBasisRightsEvaluation {
  selectedBasis: string;
  applicableRights: {
    erasure: boolean;
    portability: boolean;
    object: boolean;
    withdrawConsent: boolean;
  };
  complianceStatus: 'Compliant' | 'At Risk' | 'Non-Compliant' | 'Not Evaluated';
  findings: string[];
  rightsPenaltyMultiplier: number;
}

export interface StructuredDataFlow {
  whatApp?: string;
  whyPia?: string;
  howFlows?: string;
  whenRecordStd?: string;
  whereStored?: string;
  crossBorder?: string;
}

export interface RiskCalculationResult {
  impactScore: number;
  likelihoodScore: number;
  baseRiskScore: number;
  appliedModifiers: {
    vendorMultiplier: number;
    aiMultiplier: number;
    crossBorderMultiplier: number;
    specialCategoryMultiplier: number;
    noLawfulBasisMultiplier: number;
    lawfulBasisRightsMultiplier: number;
    totalMultiplier: number;
  };
  finalRiskScore: number;
  riskLevel: RiskLevel;
  requiredAction: string;
  lawfulBasisEvaluation?: LawfulBasisRightsEvaluation;
  sectionRiskProfiles: {
    dataProcessingRisk: number; // Avg Section B
    legalComplianceRisk: number; // Avg Section C
    dataSharingRisk: number; // Avg Section E
    securityRisk: number; // Avg Section I
    governanceRisk: number; // Avg Section K
  };
  topRiskAreas: {
    questionId: string;
    questionTitle: string;
    score: number;
    section: string;
  }[];
}

export interface NHSComplianceChecklist {
  fairLawfulProcessing: 'Compliant' | 'Issues' | 'Not Evaluated';
  purposeLimitation: 'Compliant' | 'Issues' | 'Not Evaluated';
  dataMinimization: 'Compliant' | 'Issues' | 'Not Evaluated';
  accuracy: 'Compliant' | 'Issues' | 'Not Evaluated';
  retention: 'Compliant' | 'Issues' | 'Not Evaluated';
  rightsOfIndividuals: 'Compliant' | 'Issues' | 'Not Evaluated';
  security: 'Compliant' | 'Issues' | 'Not Evaluated';
  internationalTransfers: 'Compliant' | 'Issues' | 'Not Evaluated';
  commonLawConfidentiality: {
    consentObtained: boolean;
    publicInterestJustification: boolean;
    legalDutyExists: boolean;
    statutoryBasis: boolean;
  };
  notes?: string;
}

export interface EndorsementSignOff {
  role: 'Project/Process Owner' | 'Data Protection Officer' | 'Legal/Compliance' | 'Caldicott Guardian / SIRO';
  name: string;
  signed: boolean;
  signedDate?: string;
  comments?: string;
}

export interface GapFollowUp {
  id: string;
  author: string;
  role: string;
  timestamp: string;
  comment: string;
  statusUpdate?: GapStatus;
}

export interface RemediationGap {
  id: string;
  piaId: string;
  piaTitle: string;
  code: string; // e.g. "GAP-D2"
  section: string;
  description: string;
  regulatoryReference: string;
  riskLevel: RiskLevel;
  assignedOwner: string;
  mitigationAction: string;
  createdAt: string;
  targetDueDate: string;
  status: GapStatus;
  followUps: GapFollowUp[];
}

export interface PIAAssessment {
  id: string; // Internal/Display Key
  fid: string; // FRONTEND SERVER ID: e.g. "PIA-FE-2026-A8F9K2L1"
  bid?: string; // BACKEND AUDIT ID: e.g. "PIA-BE-UK-2026-000412"
  version: string; // e.g. "v1.0", "v1.1", "v2.0"
  workflowMode?: WorkflowMode;

  projectTitle: string;
  organization: string;
  projectOwner: string;
  projectOwnerEmail: string;
  dpoName: string;
  dpoEmail: string;
  projectDescription: string;
  dataFlowDescription: string;
  structuredDataFlow?: StructuredDataFlow;
  industrySector?: IndustrySectorId;
  status: AssessmentStatus;
  createdAt: string;
  updatedAt: string;
  
  answers: SectionAnswers;
  riskResult?: RiskCalculationResult;
  nhsChecklist?: NHSComplianceChecklist;
  endorsements: EndorsementSignOff[];
  nextReviewDate?: string;

  // Data Lineage & Provenance Log
  provenanceTrail: DataProvenanceEntry[];
  regulatoryTailoring?: RegulatoryTailoringConfig;
}

export type IndustrySectorId = 
  | 'banking' 
  | 'healthcare' 
  | 'retail' 
  | 'corporate' 
  | 'logistics' 
  | 'agtech' 
  | 'pharma';

export interface IndustrySectorProfile {
  id: IndustrySectorId;
  name: string;
  shortName: string;
  iconName: string;
  badgeColor: string;
  context: string;
  dynamicRules: string[];
  regulatoryAlignment: string[];
  baseRiskWeightingNote: string;
}

export interface SystemSetupConfig {
  organizationName: string;
  dataProtectionContact: string;
  dpoEmail: string;
  defaultDepartment: string;
  industrySector: IndustrySectorId;
  primaryRegulatoryFramework: TargetRegulatoryFramework;
  fidPrefix: string;
  fidOffset: number;
  bidPrefix: string;
  bidOffset: number;
  defaultAuditorName: string;
  defaultAuditorRole: string;
  isSetupComplete: boolean;
  lastUpdated: string;
}

