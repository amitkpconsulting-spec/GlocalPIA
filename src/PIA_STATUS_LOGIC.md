# Privacy Impact Assessment (PIA) Overall Status & Lifecycle Logic Specification

## Executive Summary
This document defines the formal state evaluation rules, lifecycle transitions, and risk-driven logic governing the **Overall PIA Status** across the Portable Privacy Impact Assessment platform.

The system ensures strict governance compliance with UK GDPR, Data Protection Act 2018, and NHS Information Governance standards.

---

## 1. PIA Status Lifecycle Architecture

The overall status of a Privacy Impact Assessment (PIA) transitions through seven deterministic stages:

```
                  ┌──────────────┐
                  │    Draft     │
                  └──────┬───────┘
                         │ (Project Owner Submits)
                         ▼
                  ┌──────────────┐
                  │  Submitted   │
                  └──────┬───────┘
                         │
        ┌────────────────┼────────────────┐
        │ (High Risk or  │                │ (DPO Requests
        │  Needs Review) ▼                │  Revisions)
        │         ┌──────────────┐        ▼
        │         │  DPO Review  │ ┌──────────────┐
        │         └──────┬───────┘ │ IN_REVISION  │
        │                │         └──────────────┘
        │                ▼
        │    ┌───────────────────────┐
        │    │ Remediation Required? │
        │    └───────────┬───────────┘
        │                │
        │       YES ─────┼─────► ┌──────────────┐
        │                │       │ Remediation  │ (Open Gaps / Lawful Basis Issue)
        │                │       └──────┬───────┘
        │             NO │              │ (All Gaps Resolved)
        │                ▼              │
        └─────────► ┌──────────────┐◄───┘
                    │   Approved   │
                    └──────┬───────┘
                           │ (Decommissioned)
                           ▼
                    ┌──────────────┐
                    │   Archived   │
                    └──────────────┘
```

---

## 2. Status Evaluation Matrix & Deterministic Rules

| Overall Status | Badge Theme | Trigger Conditions & Evaluation Logic | Next Governance Action Required |
| :--- | :--- | :--- | :--- |
| **`Draft`** | Warm Zinc | Questionnaire incomplete (<100%) or unsubmitted by Project Owner (`isSubmitted = false`). | Project Owner completes all 25 sections and submits. |
| **`Submitted`** | Slate Blue | Form filled and submitted by Project/Process Owner. Logged into governance registry with unique FID/BID keys. | Assigned to DPO queue for initial risk triage. |
| **`DPO Review`** | Deep Cyan | Active privacy audit underway OR triggered automatically if: <br/>• Inherent Risk Rating is **High** or **Critical** <br/>• Special Category PII or Cross-Border Transfers present <br/>• DPO sign-off is pending (`isDpoSigned = false`). | DPO evaluates controls, records comments, and signs off or requests gaps. |
| **`IN_REVISION`** | Royal Purple | DPO or Governance Reviewer rejected specific items or requested policy updates from the Project Owner. | Project Owner updates answers and resubmits assessment. |
| **`Remediation`** | Amber Gold | Mandatory remediation triggered if: <br/>• At least 1 open/overdue gap exists in the **Remediation SLA Manager** (`openGapsCount > 0`) <br/>• Lawful Basis status is **`Non-Compliant`** (e.g. invalid consent withdrawal mechanism). | Assigned Owners resolve gaps and submit technical proof of mitigation. |
| **`Approved`** | Emerald Green | Fully endorsed with: <br/>• Both Project Owner & DPO formal sign-offs (`isOwnerSigned = true` & `isDpoSigned = true`) <br/>• **0 open remediation gaps** <br/>• Compliant Lawful Basis status. | Maintained under routine monitoring; annual re-review scheduled. |
| **`Archived`** | Charcoal Gray | Initiative decommissioned, replaced by newer parent version, or marked inactive. | Retained for compliance audit trail and regulatory logging. |

---

## 3. Key Decision Variables & Inputs

The overall status is evaluated dynamically via `evaluateOverallPIAStatus(pia, gaps)` using the following inputs:

```typescript
export interface PIAStatusEvaluationInput {
  status: AssessmentStatus;               // Primary status flag
  answers: SectionAnswers;                 // 25-section questionnaire responses
  riskResult?: RiskCalculationResult;      // Inherent & Residual Risk Score (1-25)
  endorsements: EndorsementSignOff[];      // Owner and DPO digital signatures
  remediationGaps: RemediationGap[];       // Active SLA gap tracking items
  lawfulBasisCompliance: 'Compliant' | 'At Risk' | 'Non-Compliant';
}
```

### 3.1 Sign-Off Verification
1. **Project Owner Endorsement**: Verified when `endorsements.find(e => e.role.includes('Owner')).signed === true`.
2. **DPO Endorsement**: Verified when `endorsements.find(e => e.role.includes('DPO')).signed === true`.

### 3.2 Remediation Thresholds
- Any gap with status `'Open'`, `'In Progress'`, or `'Overdue'` forces the overall status to **`Remediation`**, overriding standard submission states.
- Once all gaps transition to `'Resolved'`, the assessment automatically unblocks for final DPO Approval.

---

## 4. Technical Implementation & Utility Integration

The logic is codified in `src/utils/piaStatusLogic.ts`:

```typescript
import { evaluateOverallPIAStatus } from '../utils/piaStatusLogic';

// Example evaluation call
const evaluation = evaluateOverallPIAStatus(activePia, allGaps);

console.log(evaluation.status);               // e.g. "DPO Review"
console.log(evaluation.statusReason);         // e.g. "High inherent risk requires formal DPO audit."
console.log(evaluation.hasOpenGaps);          // boolean
console.log(evaluation.openGapsCount);        // number
console.log(evaluation.badgeColorClass);      // Tailwind styling string
```

---

## 5. Audit Lineage & Provenance Tracking

Each status transition generates an immutable **Data Provenance Entry**:
- **Frontend Server ID (FID)**: Tracks user interface submission context (e.g., `PIA-FE-2026-A8F9K2L1`).
- **Backend Audit ID (BID)**: Server-side cryptographic audit key (e.g., `PIA-BE-UK-2026-000412`).
- **Delta Logs**: Captures modified fields, previous values, and rationale for regulatory inspection.
