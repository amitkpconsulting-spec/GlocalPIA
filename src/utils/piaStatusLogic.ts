import { PIAAssessment, AssessmentStatus, RemediationGap } from '../types';

export interface PIAStatusEvaluationResult {
  status: AssessmentStatus;
  statusLabel: string;
  statusReason: string;
  badgeColorClass: string;
  hasOpenGaps: boolean;
  openGapsCount: number;
  isDpoSigned: boolean;
  isOwnerSigned: boolean;
  isHighOrCriticalRisk: boolean;
  nextRequiredAction: string;
  completionPercentage: number;
  lawfulBasisStatus: 'Compliant' | 'At Risk' | 'Non-Compliant' | 'Not Evaluated';
}

/**
 * Calculates actual field completion percentage (0-100%) for a PIA assessment.
 * Evaluates core project metadata, data flow descriptions, questionnaire answers,
 * risk calculations, and endorsement sign-offs.
 */
export function calculatePIACompletionPercentage(pia: PIAAssessment): number {
  let completedPoints = 0;
  const totalPoints = 40;

  // 1. Core Metadata Fields (8 points)
  if (pia.projectTitle?.trim()) completedPoints += 1;
  if (pia.organization?.trim()) completedPoints += 1;
  if (pia.projectOwner?.trim()) completedPoints += 1;
  if (pia.projectOwnerEmail?.trim()) completedPoints += 1;
  if (pia.dpoName?.trim()) completedPoints += 1;
  if (pia.dpoEmail?.trim()) completedPoints += 1;
  if (pia.projectDescription?.trim()) completedPoints += 1;
  if (pia.dataFlowDescription?.trim()) completedPoints += 1;

  // 2. Structured Data Flow Details (2 points)
  if (pia.structuredDataFlow) {
    const sdf = pia.structuredDataFlow;
    const sdfFilled = [sdf.whatApp, sdf.whyPia, sdf.howFlows, sdf.whenRecordStd, sdf.whereStored, sdf.crossBorder].filter(
      f => f && f.trim().length > 0
    ).length;
    if (sdfFilled >= 3) completedPoints += 2;
    else if (sdfFilled >= 1) completedPoints += 1;
  } else if (pia.dataFlowDescription?.trim() && pia.dataFlowDescription.length > 50) {
    completedPoints += 2;
  }

  // 3. Questionnaire Section Answers (25 points max)
  const totalQuestions = 25;
  const answeredQuestions = pia.answers ? Object.keys(pia.answers).length : 0;
  completedPoints += Math.min(totalQuestions, answeredQuestions);

  // 4. Risk Calculation Engine (3 points)
  if (pia.riskResult && pia.riskResult.finalRiskScore > 0) {
    completedPoints += 3;
  }

  // 5. Endorsements & Sign-Offs (2 points)
  const endorsements = pia.endorsements || [];
  const ownerEndorsement = endorsements.find(
    e => e.role === 'Project/Process Owner' || e.role.includes('Owner') || e.role.includes('Lead')
  );
  const dpoEndorsement = endorsements.find(
    e => e.role === 'Data Protection Officer' || e.role.includes('DPO')
  );

  if (ownerEndorsement?.signed) completedPoints += 1;
  if (dpoEndorsement?.signed) completedPoints += 1;

  return Math.min(100, Math.max(0, Math.round((completedPoints / totalPoints) * 100)));
}

/**
 * Computes the definitive overall Privacy Impact Assessment (PIA) Status
 * based on lifecycle stage, endorsement sign-offs, remediation gap logs,
 * risk matrix outputs, and lawful basis evaluations.
 */
export function evaluateOverallPIAStatus(
  pia: PIAAssessment,
  allGaps: RemediationGap[] = []
): PIAStatusEvaluationResult {
  // 1. Identify open/overdue gaps associated with this assessment
  const piaGaps = allGaps.filter(g => g.piaId === pia.id || g.piaTitle === pia.projectTitle);
  const openGaps = piaGaps.filter(g => g.status === 'Open' || g.status === 'In Progress' || g.status === 'Overdue');
  const openGapsCount = openGaps.length;
  const hasOpenGaps = openGapsCount > 0;

  // 2. Check endorsement sign-off statuses
  const endorsements = pia.endorsements || [];
  const dpoEndorsement = endorsements.find(
    e => e.role === 'Data Protection Officer' || e.role.includes('DPO')
  );
  const ownerEndorsement = endorsements.find(
    e => e.role === 'Project/Process Owner' || e.role.includes('Owner') || e.role.includes('Lead')
  );

  const isDpoSigned = Boolean(dpoEndorsement?.signed);
  const isOwnerSigned = Boolean(ownerEndorsement?.signed);

  // 3. Risk level & Lawful basis check
  const riskLevel = pia.riskResult?.riskLevel || 'Low';
  const isHighOrCriticalRisk = riskLevel === 'High' || riskLevel === 'Critical';
  const lawfulBasisStatus = pia.riskResult?.lawfulBasisEvaluation?.complianceStatus || 'Not Evaluated';

  // 4. Calculate actual field completion percentage (0-100%)
  const completionPercentage = calculatePIACompletionPercentage(pia);

  // 5. Evaluate state transition logic
  let computedStatus: AssessmentStatus = pia.status || 'Draft';
  let statusReason = '';
  let badgeColorClass = '';
  let nextRequiredAction = '';

  // Rule 1: Explicitly Archived
  if (pia.status === 'Archived') {
    computedStatus = 'Archived';
    statusReason = 'Assessment has been decommissioned or superseded by a newer version.';
    badgeColorClass = 'bg-zinc-800 text-zinc-400 border-zinc-700';
    nextRequiredAction = 'No further action required unless reactivated.';
  }
  // Rule 2: Open Remediation Gaps or Non-Compliant Lawful Basis forces Remediation
  else if (hasOpenGaps || lawfulBasisStatus === 'Non-Compliant' || pia.status === 'Remediation') {
    computedStatus = 'Remediation';
    statusReason = hasOpenGaps
      ? `${openGapsCount} active remediation gap(s) require technical mitigation before sign-off.`
      : 'Lawful basis or individual rights evaluation flagged non-compliance issues.';
    badgeColorClass = 'bg-amber-950 text-amber-300 border-amber-800/80';
    nextRequiredAction = 'Assign and resolve open items in the Gap Log & Remediation SLA Manager.';
  }
  // Rule 3: Approved Condition (Fully signed off + zero open remediation gaps + valid lawful basis)
  else if (isDpoSigned && isOwnerSigned && !hasOpenGaps && pia.status !== 'IN_REVISION') {
    computedStatus = 'Approved';
    statusReason = 'Fully endorsed and signed off by Project Owner and DPO with zero open remediation gaps.';
    badgeColorClass = 'bg-emerald-950 text-emerald-300 border-emerald-800/80';
    nextRequiredAction = 'Maintain routine monitoring and schedule next annual privacy review.';
  }
  // Rule 4: Revisions Requested
  else if (pia.status === 'IN_REVISION') {
    computedStatus = 'IN_REVISION';
    statusReason = 'DPO or Governance reviewer requested revisions from the Project Owner.';
    badgeColorClass = 'bg-purple-950 text-purple-300 border-purple-800/80';
    nextRequiredAction = 'Project Owner must update assessment responses and resubmit.';
  }
  // Rule 5: Active DPO Review
  else if (
    pia.status === 'DPO Review' ||
    (pia.status === 'Submitted' && (isHighOrCriticalRisk || !isDpoSigned))
  ) {
    computedStatus = 'DPO Review';
    statusReason = isHighOrCriticalRisk
      ? `${riskLevel} inherent risk rating requires formal DPO governance review and sign-off.`
      : 'Assessment submitted and queued for DPO audit and endorsement.';
    badgeColorClass = 'bg-cyan-950 text-cyan-300 border-cyan-800/80';
    nextRequiredAction = 'Awaiting DPO review, comments, and formal endorsement.';
  }
  // Rule 6: Submitted Awaiting Review
  else if (pia.status === 'Submitted') {
    computedStatus = 'Submitted';
    statusReason = 'Submitted by Project Owner and logged in governance registry.';
    badgeColorClass = 'bg-blue-950 text-blue-300 border-blue-800/80';
    nextRequiredAction = 'Assign DPO for formal privacy risk audit.';
  }
  // Rule 7: Draft Mode
  else {
    computedStatus = 'Draft';
    statusReason = `Assessment in progress (${completionPercentage}% completed).`;
    badgeColorClass = 'bg-zinc-900 text-zinc-300 border-zinc-700';
    nextRequiredAction = 'Complete all mandatory sections and submit for DPO review.';
  }

  const statusLabel = computedStatus === 'IN_REVISION' ? 'In Revision' : computedStatus;

  return {
    status: computedStatus,
    statusLabel,
    statusReason,
    badgeColorClass,
    hasOpenGaps,
    openGapsCount,
    isDpoSigned,
    isOwnerSigned,
    isHighOrCriticalRisk,
    nextRequiredAction,
    completionPercentage,
    lawfulBasisStatus,
  };
}
