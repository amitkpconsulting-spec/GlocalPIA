import { SectionAnswers, RiskCalculationResult, RiskLevel, LawfulBasisRightsEvaluation, IndustrySectorId } from '../types';
import { QUESTIONNAIRE_DEFINITIONS } from '../data/questionnaire';
import { SECTOR_SPECIFIC_QUESTIONS } from '../data/industrySectors';

export function evaluateLawfulBasisRights(answers: SectionAnswers, industrySector?: IndustrySectorId): LawfulBasisRightsEvaluation {
  const lawfulBasisLabel = answers['C1']?.selectedLabel ?? 'Explicit Consent obtained and documented';
  const f1Score = answers['F1']?.score ?? 1; // Rights fulfillment mechanism (1 = Automated, 5 = None)
  const c3Score = answers['C3']?.score ?? 1; // Consent withdrawal mechanism

  let applicableRights = {
    erasure: true,
    portability: true,
    object: false,
    withdrawConsent: true,
  };

  const findings: string[] = [];
  let rightsPenaltyMultiplier = 1.0;
  let status: 'Compliant' | 'At Risk' | 'Non-Compliant' | 'Not Evaluated' = 'Compliant';

  const basisLower = lawfulBasisLabel.toLowerCase();

  if (basisLower.includes('consent')) {
    applicableRights = { erasure: true, portability: true, object: false, withdrawConsent: true };
    if (c3Score >= 4) {
      findings.push('ICO Violation: Consent basis mandates an effortless consent withdrawal mechanism (Art 7(3)).');
      rightsPenaltyMultiplier += 0.25;
      status = 'Non-Compliant';
    } else if (c3Score === 2 || c3Score === 3) {
      findings.push('ICO Warning: Consent withdrawal process is manual or requires extra effort.');
      rightsPenaltyMultiplier += 0.1;
      if (status === 'Compliant') status = 'At Risk';
    }
    if (f1Score >= 4) {
      findings.push('ICO Violation: Consent basis requires active support for Right to Erasure & Data Portability.');
      rightsPenaltyMultiplier += 0.15;
      status = 'Non-Compliant';
    }
  } else if (basisLower.includes('contract')) {
    applicableRights = { erasure: true, portability: true, object: false, withdrawConsent: false };
    if (f1Score >= 4) {
      findings.push('ICO Risk: Contractual necessity requires mechanisms for Data Portability & Erasure.');
      rightsPenaltyMultiplier += 0.2;
      status = 'Non-Compliant';
    } else if (f1Score === 3) {
      findings.push('ICO Warning: Manual handling of Data Portability and Erasure under Contractual basis.');
      rightsPenaltyMultiplier += 0.1;
      if (status === 'Compliant') status = 'At Risk';
    }
  } else if (basisLower.includes('legal obligation')) {
    applicableRights = { erasure: false, portability: false, object: false, withdrawConsent: false };
    findings.push('ICO Guidance: Legal Obligation overrides Right to Erasure, Portability, and Right to Object.');
  } else if (basisLower.includes('vital interests')) {
    applicableRights = { erasure: true, portability: false, object: false, withdrawConsent: false };
    if (f1Score >= 4) {
      findings.push('ICO Risk: Right to Erasure applies under Vital Interests but fulfillment mechanism is missing.');
      rightsPenaltyMultiplier += 0.15;
      status = 'At Risk';
    }
  } else if (basisLower.includes('public task') || basisLower.includes('official authority')) {
    applicableRights = { erasure: false, portability: false, object: true, withdrawConsent: false };
    if (f1Score >= 4) {
      findings.push('ICO Violation: Public Task processing mandates supporting the Right to Object.');
      rightsPenaltyMultiplier += 0.2;
      status = 'Non-Compliant';
    }
  } else if (basisLower.includes('legitimate interest')) {
    applicableRights = { erasure: true, portability: false, object: true, withdrawConsent: false };
    if (f1Score >= 4) {
      findings.push('ICO Violation: Legitimate Interests basis requires mechanisms for Right to Object & Erasure.');
      rightsPenaltyMultiplier += 0.25;
      status = 'Non-Compliant';
    } else if (f1Score === 3) {
      findings.push('ICO Warning: Manual response process for Right to Object under Legitimate Interests.');
      rightsPenaltyMultiplier += 0.1;
      if (status === 'Compliant') status = 'At Risk';
    }
  } else if (basisLower.includes('no lawful basis')) {
    applicableRights = { erasure: true, portability: true, object: true, withdrawConsent: true };
    findings.push('CRITICAL ICO VIOLATION: No lawful basis identified. Unlawful processing under UK GDPR Art 6.');
    rightsPenaltyMultiplier += 0.5;
    status = 'Non-Compliant';
  }

  // Sector-Specific Lawful Basis & Dynamic Rule Findings
  if (industrySector === 'healthcare') {
    findings.push('Healthcare Sector Rule: Processing of Protected Health Information (PHI) elevates base risk to Maximum (5.0) under HIPAA & EU MDR.');
  } else if (industrySector === 'banking') {
    findings.push('Banking Sector Rule: High-frequency financial identifiers and AI credit scoring trigger mandatory GLBA & PCI-DSS v4.0 evaluation.');
  } else if (industrySector === 'retail') {
    findings.push('Retail Sector Rule: Behavioral tracking and POS gateway isolation subject to CCPA/CPRA & PCI-DSS scope rules.');
  } else if (industrySector === 'corporate') {
    findings.push('Corporate Sector Rule: Employee monitoring and workplace surveillance require Works Council & Labor Law compliance.');
  } else if (industrySector === 'logistics') {
    findings.push('Logistics Sector Rule: Multi-jurisdictional transborder data flows (TDF) subject to World Customs Organization (WCO) standards.');
  } else if (industrySector === 'agtech') {
    findings.push('AgTech Sector Rule: Farm geospatial telemetry co-mingling with AI crop yield models audited under AgData Transparent standards.');
  } else if (industrySector === 'pharma') {
    findings.push('Pharma Sector Rule: Clinical trial subject key-coding and bio-bank consent audited under GCP & FDA 21 CFR Part 11.');
  }

  return {
    selectedBasis: lawfulBasisLabel,
    applicableRights,
    complianceStatus: status,
    findings,
    rightsPenaltyMultiplier: Math.round(rightsPenaltyMultiplier * 100) / 100,
  };
}

export function calculatePIARisk(answers: SectionAnswers, industrySector?: IndustrySectorId): RiskCalculationResult {
  // Helper to get score for a question ID or fallback
  const getScore = (id: string, fallback = 1): number => {
    return answers[id]?.score ?? fallback;
  };

  // Helper to average scores for a list of question IDs
  const avgScores = (ids: string[], fallback = 1): number => {
    const validScores = ids
      .map(id => answers[id]?.score)
      .filter((s): s is number => typeof s === 'number');
    if (validScores.length === 0) return fallback;
    return validScores.reduce((acc, curr) => acc + curr, 0) / validScores.length;
  };

  // Factor 1: Data Sensitivity = MAX(B2, B5)
  // Dynamic Rule: Hospitals & Healthcare automatically elevates any processing of Health/Medical/Biometric data to Base Score = 5
  let impactFactor1 = Math.max(getScore('B2'), getScore('B5'));
  if (industrySector === 'healthcare' && (getScore('B2') >= 3 || getScore('B5') >= 3 || getScore('SEC_HEALTH_1') >= 3)) {
    impactFactor1 = 5.0; // Automatically elevated to Critical Base Risk
  }

  // Factor 2: Scale & Scope = AVERAGE(B1, B3)
  const impactFactor2 = avgScores(['B1', 'B3']);

  // Section C Average
  const sectionCAvg = avgScores(['C1', 'C2', 'C3', 'C4', 'C5']);

  // Factor 3: Potential Harm = AVERAGE(D3, F4, sectionCAvg)
  const impactFactor3 = (getScore('D3') + getScore('F4') + sectionCAvg) / 3;

  // Impact Score (I)
  const impactScore = (impactFactor1 + impactFactor2 + impactFactor3) / 3;

  // Likelihood Factor 1: Processing Complexity = AVERAGE(E1, E2, G1)
  const likelihoodFactor1 = avgScores(['E1', 'E2', 'G1']);

  // Likelihood Factor 2: Security Maturity = AVERAGE(I1, I2, I3)
  const likelihoodFactor2 = avgScores(['I1', 'I2', 'I3']);

  // Likelihood Factor 3: Governance & Controls = AVERAGE(K1, K2, K3)
  const likelihoodFactor3 = avgScores(['K1', 'K2', 'K3']);

  // Likelihood Factor 4: External Dependencies = AVERAGE(J1, J2, J3)
  const jScores = ['J1', 'J2', 'J3'].map(id => answers[id]?.score).filter((s): s is number => typeof s === 'number');
  const likelihoodFactor4 = jScores.length > 0
    ? jScores.reduce((a, b) => a + b, 0) / jScores.length
    : 1.0;

  // Likelihood Score (L)
  const likelihoodScore = (likelihoodFactor1 + likelihoodFactor2 + likelihoodFactor3 + likelihoodFactor4) / 4;

  // Step 2: Base Risk
  const baseRiskScore = impactScore * likelihoodScore;

  // Step 3: Modifiers
  const a1Text = answers['A1']?.selectedLabel ?? '';
  const vendorMultiplier = (a1Text.toLowerCase().includes('vendor') || a1Text.toLowerCase().includes('outsourcing') || answers['A1']?.score === 4) ? 1.3 : 1.0;
  const aiMultiplier = (a1Text.toLowerCase().includes('ai') || a1Text.toLowerCase().includes('machine learning') || answers['A1']?.score === 5) ? 1.4 : 1.0;
  const crossBorderMultiplier = getScore('E3') >= 3 ? 1.2 : 1.0;
  const specialCategoryMultiplier = getScore('B5') >= 5 ? 1.3 : 1.0;
  const noLawfulBasisMultiplier = getScore('C1') === 5 ? 1.5 : 1.0;

  // Sector-specific risk multipliers based on sector rules
  let sectorMultiplier = 1.0;
  if (industrySector === 'banking' && (getScore('SEC_FIN_1') >= 3 || getScore('SEC_FIN_3') >= 3)) {
    sectorMultiplier = 1.25;
  } else if (industrySector === 'healthcare') {
    sectorMultiplier = 1.3;
  } else if (industrySector === 'retail' && (getScore('SEC_RETAIL_1') >= 3 || getScore('SEC_RETAIL_3') >= 3)) {
    sectorMultiplier = 1.15;
  } else if (industrySector === 'corporate' && getScore('SEC_CORP_2') >= 3) {
    sectorMultiplier = 1.2;
  } else if (industrySector === 'logistics' && (getScore('SEC_LOG_1') >= 3 || getScore('SEC_LOG_2') >= 3)) {
    sectorMultiplier = 1.2;
  } else if (industrySector === 'agtech' && (getScore('SEC_AG_1') >= 3 || getScore('SEC_AG_2') >= 3)) {
    sectorMultiplier = 1.15;
  } else if (industrySector === 'pharma' && (getScore('SEC_PHARMA_1') >= 3 || getScore('SEC_PHARMA_2') >= 3)) {
    sectorMultiplier = 1.25;
  }

  // ICO Lawful Basis & Individual Rights Matrix Evaluation
  const lawfulBasisEval = evaluateLawfulBasisRights(answers, industrySector);
  const lawfulBasisRightsMultiplier = lawfulBasisEval.rightsPenaltyMultiplier;

  const totalMultiplier = vendorMultiplier * aiMultiplier * crossBorderMultiplier * specialCategoryMultiplier * noLawfulBasisMultiplier * lawfulBasisRightsMultiplier * sectorMultiplier;

  let rawFinalScore = baseRiskScore * totalMultiplier;
  // Cap score at max scale (25.0)
  if (rawFinalScore > 25.0) rawFinalScore = 25.0;

  const finalRiskScore = Math.round(rawFinalScore * 10) / 10;

  // Step 4: Final Risk Level & Required Actions
  let riskLevel: RiskLevel = 'Low';
  let requiredAction = 'Accept with routine monitoring';

  if (finalRiskScore >= 16.1) {
    riskLevel = 'Critical';
    requiredAction = 'Stop project, mandatory consultation';
  } else if (finalRiskScore >= 9.1) {
    riskLevel = 'High';
    requiredAction = 'Significant changes required, Executive approval';
  } else if (finalRiskScore >= 4.1) {
    riskLevel = 'Medium';
    requiredAction = 'Mitigation plan required, DPO review';
  }

  // Section Risk Profiles
  const sectionRiskProfiles = {
    dataProcessingRisk: Math.round(avgScores(['B1', 'B2', 'B3', 'B4', 'B5']) * 10) / 10,
    legalComplianceRisk: Math.round(avgScores(['C1', 'C2', 'C3', 'C4', 'C5']) * 10) / 10,
    dataSharingRisk: Math.round(avgScores(['E1', 'E2', 'E3', 'E4']) * 10) / 10,
    securityRisk: Math.round(avgScores(['I1', 'I2', 'I3', 'I4', 'I5']) * 10) / 10,
    governanceRisk: Math.round(avgScores(['K1', 'K2', 'K3', 'K4']) * 10) / 10,
  };

  // Combine core definitions and sector questions for top risk evaluation
  const sectorDefs = industrySector ? (SECTOR_SPECIFIC_QUESTIONS[industrySector] || []) : [];
  const combinedDefs = [...QUESTIONNAIRE_DEFINITIONS, ...sectorDefs];

  // Top Risk Areas Identified
  const allAnswered = combinedDefs.map(def => {
    const ans = answers[def.id];
    return {
      questionId: def.id,
      questionTitle: def.title,
      score: ans ? ans.score : 0,
      section: def.section,
    };
  }).filter(item => item.score > 0);

  allAnswered.sort((a, b) => b.score - a.score);
  const topRiskAreas = allAnswered.slice(0, 5);

  return {
    impactScore: Math.round(impactScore * 10) / 10,
    likelihoodScore: Math.round(likelihoodScore * 10) / 10,
    baseRiskScore: Math.round(baseRiskScore * 10) / 10,
    appliedModifiers: {
      vendorMultiplier,
      aiMultiplier,
      crossBorderMultiplier,
      specialCategoryMultiplier,
      noLawfulBasisMultiplier,
      lawfulBasisRightsMultiplier,
      totalMultiplier: Math.round(totalMultiplier * 100) / 100,
    },
    finalRiskScore,
    riskLevel,
    requiredAction,
    lawfulBasisEvaluation: lawfulBasisEval,
    sectionRiskProfiles,
    topRiskAreas,
  };
}

export function calculateSLA(riskLevel: RiskLevel, createdAtIso?: string): { targetDays: number; dueDateIso: string } {
  let targetDays = 90;
  if (riskLevel === 'Critical') targetDays = 14;
  else if (riskLevel === 'High') targetDays = 30;
  else if (riskLevel === 'Medium') targetDays = 45;

  const baseDate = createdAtIso ? new Date(createdAtIso) : new Date();
  const dueDate = new Date(baseDate.getTime() + targetDays * 24 * 60 * 60 * 1000);
  return {
    targetDays,
    dueDateIso: dueDate.toISOString(),
  };
}

export type AssessmentInitiativeType =
  | 'Proof of Concept (PoC)'
  | 'Project'
  | 'Process'
  | 'Application (App)'
  | 'Pilot'
  | 'AI Initiative';

export interface RCSACustomParams {
  sectorMultiplier?: number;
  strongControlReduction?: number;
  moderateControlReduction?: number;
  weakControlReduction?: number;
}

export interface RCSACalculationResult {
  initiativeType: AssessmentInitiativeType;
  inherentBaseScore: number;
  inherentRating: RiskLevel;
  inherentScoreMath: number;
  sectorMultiplier: number;
  controlEffectiveness: 'Strong' | 'Moderate' | 'Weak';
  controlFactor: number;
  residualScoreMath: number;
  residualRating: RiskLevel;
  requiredAction: string;
}

export function calculateRCSARisk(
  type: AssessmentInitiativeType,
  industrySector?: IndustrySectorId,
  answeredSafeguardsCount: number = 0,
  totalQuestionsCount: number = 5,
  customParams?: RCSACustomParams
): RCSACalculationResult {
  const baseScoreMap: Record<AssessmentInitiativeType, { score: number; rating: RiskLevel }> = {
    'Proof of Concept (PoC)': { score: 2, rating: 'Low' },
    'Project': { score: 3, rating: 'Medium' },
    'Process': { score: 3, rating: 'Medium' },
    'Application (App)': { score: 4, rating: 'High' },
    'Pilot': { score: 4, rating: 'High' },
    'AI Initiative': { score: 5, rating: 'Critical' },
  };

  const base = baseScoreMap[type] || { score: 3, rating: 'Medium' };

  let defaultSectorMult = 1.2;
  if (industrySector === 'healthcare') defaultSectorMult = 1.5;
  else if (industrySector === 'banking' || industrySector === 'pharma') defaultSectorMult = 1.4;
  else if (industrySector === 'corporate') defaultSectorMult = 1.2;

  const sectorMult = customParams?.sectorMultiplier ?? defaultSectorMult;
  const inherentScoreMath = Math.min(25, Math.max(1, Math.round(base.score * base.score * sectorMult)));

  const ratio = totalQuestionsCount > 0 ? answeredSafeguardsCount / totalQuestionsCount : 0;
  const strongVal = customParams?.strongControlReduction ?? 0.6;
  const modVal = customParams?.moderateControlReduction ?? 0.3;
  const weakVal = customParams?.weakControlReduction ?? 0.0;

  let controlEffectiveness: 'Strong' | 'Moderate' | 'Weak' = 'Weak';
  let controlFactor = weakVal;

  if (ratio >= 0.75) {
    controlEffectiveness = 'Strong';
    controlFactor = strongVal;
  } else if (ratio >= 0.35) {
    controlEffectiveness = 'Moderate';
    controlFactor = modVal;
  }

  const residualScoreMath = Math.max(1, Math.round(inherentScoreMath * (1 - controlFactor)));

  let residualRating: RiskLevel = 'Low';
  let requiredAction = 'Accept with routine monitoring';

  if (residualScoreMath >= 20) {
    residualRating = 'Critical';
    requiredAction = 'Mandatory executive & DPO escalation, halt deployment until controls verified';
  } else if (residualScoreMath >= 12) {
    residualRating = 'High';
    requiredAction = 'Significant changes & formal remediation plan required';
  } else if (residualScoreMath >= 6) {
    residualRating = 'Medium';
    requiredAction = 'Mitigation plan required with 45-day review window';
  }

  return {
    initiativeType: type,
    inherentBaseScore: base.score,
    inherentRating: base.rating,
    inherentScoreMath,
    sectorMultiplier: sectorMult,
    controlEffectiveness,
    controlFactor,
    residualScoreMath,
    residualRating,
    requiredAction,
  };
}

