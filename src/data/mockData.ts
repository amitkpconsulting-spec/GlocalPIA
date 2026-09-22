import { PIAAssessment, RemediationGap } from '../types';
import { BANKING_PIAS, BANKING_GAPS } from './bankingSampleData';
import { AI_CRITICAL_PIAS, AI_CRITICAL_GAPS } from './aiCriticalPias';

// Total 83 Realistic Banking Sector Assessments including 7 Dedicated AI Critical PIAs:
// - 7 Mission-Critical High-Risk AI Activity Systems (Credit Underwriting, Biometric Auth, Copilot, GNN AML, Surveillance, Dynamic Pricing, Voice Bot)
// - 76 Comprehensive Banking Sector Assessments across all 8 subcategories
export const INITIAL_PIAS: PIAAssessment[] = [...AI_CRITICAL_PIAS, ...BANKING_PIAS];

export const INITIAL_GAPS: RemediationGap[] = [...AI_CRITICAL_GAPS, ...BANKING_GAPS];

