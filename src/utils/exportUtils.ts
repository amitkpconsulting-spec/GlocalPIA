import { PIAAssessment } from '../types';
import { INDUSTRY_SECTOR_PROFILES } from '../data/industrySectors';

/**
 * Utility functions for exporting PIA assessments in PDF, XLS, CSV, and Word formats
 * with Unique ID tracking (Primary ID, FID, BID).
 */

// Helper to sanitize filenames
const getExportFilename = (pia: PIAAssessment, ext: string) => {
  const cleanId = (pia.id || 'PIA-UNTITLED').replace(/[^a-zA-Z0-9_-]/g, '_');
  const cleanTitle = (pia.projectTitle || 'Assessment').replace(/[^a-zA-Z0-9_-]/g, '_').substring(0, 30);
  return `${cleanId}_${cleanTitle}_Export.${ext}`;
};

/**
 * EXPORT TO CSV
 */
export const exportToCSV = (pia: PIAAssessment) => {
  const sectorName = pia.industrySector && INDUSTRY_SECTOR_PROFILES[pia.industrySector]
    ? INDUSTRY_SECTOR_PROFILES[pia.industrySector].name
    : 'General Enterprise';

  const rows: [string, string | number][] = [
    ['ASSESSMENT METADATA', ''],
    ['Unique Reference ID', pia.id || 'N/A'],
    ['Frontend Server ID (FID)', pia.fid || 'PIA-FE-2026-A8F9K2L1'],
    ['Backend Audit ID (BID)', pia.bid || 'PIA-BE-UK-2026-000412'],
    ['Document Version', pia.version || 'v1.0'],
    ['Project Title', pia.projectTitle || 'Untitled Project'],
    ['Organization', pia.organization || 'N/A'],
    ['Industry Sector', sectorName],
    ['Project Owner', pia.projectOwner || 'N/A'],
    ['Project Owner Email', pia.projectOwnerEmail || 'N/A'],
    ['Data Protection Officer', pia.dpoName || 'N/A'],
    ['DPO Email', pia.dpoEmail || 'N/A'],
    ['Status', pia.status || 'Draft'],
    ['Created Date', pia.createdAt ? new Date(pia.createdAt).toLocaleString() : 'N/A'],
    ['Last Updated Date', pia.updatedAt ? new Date(pia.updatedAt).toLocaleString() : 'N/A'],
    ['', ''],
    ['QUANTITATIVE RISK SCORE MATRIX', ''],
    ['Final Calculated Risk Score', pia.riskResult?.finalRiskScore ?? 1.0],
    ['Overall Risk Rating Level', pia.riskResult?.riskLevel ?? 'Low'],
    ['Required Governance Action', pia.riskResult?.requiredAction ?? 'Routine monitoring'],
    ['Impact Score (I)', pia.riskResult?.impactScore ?? 1.0],
    ['Likelihood Score (L)', pia.riskResult?.likelihoodScore ?? 1.0],
    ['Base Risk Score (I x L)', pia.riskResult?.baseRiskScore ?? 1.0],
    ['Total Applied Risk Multiplier', pia.riskResult?.appliedModifiers?.totalMultiplier ?? 1.0],
    ['', ''],
    ['SECTION RISK PROFILES', ''],
    ['Data Processing Risk', pia.riskResult?.sectionRiskProfiles?.dataProcessingRisk ?? 'N/A'],
    ['Legal Compliance Risk', pia.riskResult?.sectionRiskProfiles?.legalComplianceRisk ?? 'N/A'],
    ['Data Sharing Risk', pia.riskResult?.sectionRiskProfiles?.dataSharingRisk ?? 'N/A'],
    ['Security Risk', pia.riskResult?.sectionRiskProfiles?.securityRisk ?? 'N/A'],
    ['Governance Risk', pia.riskResult?.sectionRiskProfiles?.governanceRisk ?? 'N/A'],
    ['', ''],
    ['SYSTEM & DATA FLOW NARRATIVE', ''],
    ['Project Description', (pia.projectDescription || 'N/A').replace(/\n/g, ' ')],
    ['Data Flow Description', (pia.dataFlowDescription || 'N/A').replace(/\n/g, ' ')],
    ['', ''],
    ['NHS & GDPR DATA PROTECTION PRINCIPLES', ''],
    ['Fair & Lawful Processing', pia.nhsChecklist?.fairLawfulProcessing || 'Not Evaluated'],
    ['Purpose Limitation', pia.nhsChecklist?.purposeLimitation || 'Not Evaluated'],
    ['Data Minimization', pia.nhsChecklist?.dataMinimization || 'Not Evaluated'],
    ['Data Accuracy', pia.nhsChecklist?.accuracy || 'Not Evaluated'],
    ['Storage & Retention Limitation', pia.nhsChecklist?.retention || 'Not Evaluated'],
    ['Rights of Individuals', pia.nhsChecklist?.rightsOfIndividuals || 'Not Evaluated'],
    ['Security & Confidentiality', pia.nhsChecklist?.security || 'Not Evaluated'],
    ['International Transfers', pia.nhsChecklist?.internationalTransfers || 'Not Evaluated'],
    ['', ''],
    ['ENDORSEMENTS & SIGN-OFFS', ''],
  ];

  if (pia.endorsements && pia.endorsements.length > 0) {
    pia.endorsements.forEach(e => {
      rows.push([
        `Endorsement: ${e.role}`,
        `${e.name} (${e.signed ? 'SIGNED on ' + e.signedDate : 'PENDING SIGNATURE'})`
      ]);
    });
  } else {
    rows.push(['Endorsements', 'None recorded']);
  }

  // Format as CSV lines
  const csvContent = rows
    .map(([key, val]) => {
      const sanitizedKey = `"${String(key).replace(/"/g, '""')}"`;
      const sanitizedVal = `"${String(val).replace(/"/g, '""')}"`;
      return `${sanitizedKey},${sanitizedVal}`;
    })
    .join('\n');

  const blob = new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', getExportFilename(pia, 'csv'));
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * EXPORT TO EXCEL (.xls formatted spreadsheet with HTML XML layout)
 */
export const exportToXLS = (pia: PIAAssessment) => {
  const sectorName = pia.industrySector && INDUSTRY_SECTOR_PROFILES[pia.industrySector]
    ? INDUSTRY_SECTOR_PROFILES[pia.industrySector].name
    : 'General Enterprise';

  const xlsHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8" />
        <!--[if gte mso 9]>
        <xml>
          <x:ExcelWorkbook>
            <x:ExcelWorksheets>
              <x:ExcelWorksheet>
                <x:Name>PIA Compliance Report</x:Name>
                <x:WorksheetOptions>
                  <x:DisplayGridlines/>
                </x:WorksheetOptions>
              </x:ExcelWorksheet>
            </x:WorksheetOptions>
          </x:ExcelWorkbook>
        </xml>
        <![endif]-->
        <style>
          body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; }
          table { border-collapse: collapse; width: 100%; }
          th, td { border: 1px solid #d4d4d8; padding: 8px 12px; text-align: left; vertical-align: top; }
          .header-row { background-color: #0f172a; color: #ffffff; font-weight: bold; font-size: 13pt; }
          .section-title { background-color: #1e293b; color: #38bdf8; font-weight: bold; font-size: 11pt; }
          .label { font-weight: bold; background-color: #f8fafc; color: #334155; width: 250px; }
          .highlight { font-weight: bold; color: #0284c7; }
          .badge-high { background-color: #fef2f2; color: #dc2626; font-weight: bold; }
          .badge-med { background-color: #fefce8; color: #ca8a04; font-weight: bold; }
          .badge-low { background-color: #f0fdf4; color: #16a34a; font-weight: bold; }
        </style>
      </head>
      <body>
        <table>
          <tr class="header-row">
            <td colspan="2">PRIVACY IMPACT ASSESSMENT (PIA) COMPLIANCE RECORD</td>
          </tr>
          <tr>
            <td class="label">Primary Unique ID</td>
            <td class="highlight">${pia.id || 'N/A'}</td>
          </tr>
          <tr>
            <td class="label">Frontend Server ID (FID)</td>
            <td>${pia.fid || 'PIA-FE-2026-A8F9K2L1'}</td>
          </tr>
          <tr>
            <td class="label">Backend Audit ID (BID)</td>
            <td>${pia.bid || 'PIA-BE-UK-2026-000412'}</td>
          </tr>
          <tr>
            <td class="label">Document Version</td>
            <td>${pia.version || 'v1.0'}</td>
          </tr>
          <tr>
            <td class="label">Project Title</td>
            <td><strong>${pia.projectTitle || 'Untitled Project'}</strong></td>
          </tr>
          <tr>
            <td class="label">Organization</td>
            <td>${pia.organization || 'N/A'}</td>
          </tr>
          <tr>
            <td class="label">Industry Sector Profile</td>
            <td>${sectorName}</td>
          </tr>
          <tr>
            <td class="label">Project Owner</td>
            <td>${pia.projectOwner || 'N/A'} (${pia.projectOwnerEmail || 'N/A'})</td>
          </tr>
          <tr>
            <td class="label">Data Protection Officer (DPO)</td>
            <td>${pia.dpoName || 'N/A'} (${pia.dpoEmail || 'N/A'})</td>
          </tr>
          <tr>
            <td class="label">Assessment Status</td>
            <td><strong>${pia.status || 'Draft'}</strong></td>
          </tr>

          <tr class="section-title">
            <td colspan="2">RISK EVALUATION MATRIX</td>
          </tr>
          <tr>
            <td class="label">Final Risk Score</td>
            <td class="highlight">${pia.riskResult?.finalRiskScore ?? 1.0} / 25.0</td>
          </tr>
          <tr>
            <td class="label">Overall Risk Rating Level</td>
            <td class="${pia.riskResult?.riskLevel === 'High' || pia.riskResult?.riskLevel === 'Critical' ? 'badge-high' : pia.riskResult?.riskLevel === 'Medium' ? 'badge-med' : 'badge-low'}">
              ${pia.riskResult?.riskLevel ?? 'Low'} Risk
            </td>
          </tr>
          <tr>
            <td class="label">Required Governance Action</td>
            <td>${pia.riskResult?.requiredAction ?? 'Routine monitoring'}</td>
          </tr>
          <tr>
            <td class="label">Impact Score (I)</td>
            <td>${pia.riskResult?.impactScore ?? 1.0} / 5.0</td>
          </tr>
          <tr>
            <td class="label">Likelihood Score (L)</td>
            <td>${pia.riskResult?.likelihoodScore ?? 1.0} / 5.0</td>
          </tr>
          <tr>
            <td class="label">Base Risk (I x L)</td>
            <td>${pia.riskResult?.baseRiskScore ?? 1.0}</td>
          </tr>
          <tr>
            <td class="label">Total Risk Multipliers</td>
            <td>x${pia.riskResult?.appliedModifiers?.totalMultiplier ?? 1.0}</td>
          </tr>

          <tr class="section-title">
            <td colspan="2">SECTION RISK BREAKDOWN</td>
          </tr>
          <tr>
            <td class="label">Data Processing Risk</td>
            <td>${pia.riskResult?.sectionRiskProfiles?.dataProcessingRisk ?? 'N/A'}</td>
          </tr>
          <tr>
            <td class="label">Legal Compliance Risk</td>
            <td>${pia.riskResult?.sectionRiskProfiles?.legalComplianceRisk ?? 'N/A'}</td>
          </tr>
          <tr>
            <td class="label">Data Sharing Risk</td>
            <td>${pia.riskResult?.sectionRiskProfiles?.dataSharingRisk ?? 'N/A'}</td>
          </tr>
          <tr>
            <td class="label">Security Controls Risk</td>
            <td>${pia.riskResult?.sectionRiskProfiles?.securityRisk ?? 'N/A'}</td>
          </tr>
          <tr>
            <td class="label">Governance & Rights Risk</td>
            <td>${pia.riskResult?.sectionRiskProfiles?.governanceRisk ?? 'N/A'}</td>
          </tr>

          <tr class="section-title">
            <td colspan="2">NHS & GDPR DATA PROTECTION PRINCIPLES</td>
          </tr>
          ${
            Object.entries(pia.nhsChecklist || {
              fairLawfulProcessing: 'Not Evaluated',
              purposeLimitation: 'Not Evaluated',
              dataMinimization: 'Not Evaluated',
              accuracy: 'Not Evaluated',
              retention: 'Not Evaluated',
              rightsOfIndividuals: 'Not Evaluated',
              security: 'Not Evaluated',
              internationalTransfers: 'Not Evaluated'
            }).map(([k, v]) => `
              <tr>
                <td class="label">${k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</td>
                <td>${v}</td>
              </tr>
            `).join('')
          }

          <tr class="section-title">
            <td colspan="2">FORMAL ENDORSEMENTS & SIGN-OFFS</td>
          </tr>
          ${
            pia.endorsements && pia.endorsements.length > 0
              ? pia.endorsements.map(e => `
                <tr>
                  <td class="label">${e.role}</td>
                  <td>${e.name} - <strong>${e.signed ? 'SIGNED on ' + e.signedDate : 'PENDING'}</strong></td>
                </tr>
              `).join('')
              : '<tr><td colspan="2">No endorsements recorded.</td></tr>'
          }
        </table>
      </body>
    </html>
  `;

  const blob = new Blob([xlsHtml], { type: 'application/vnd.ms-excel;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', getExportFilename(pia, 'xls'));
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * EXPORT TO WORD (.doc formatted document for MS Word / Office)
 */
export const exportToWord = (pia: PIAAssessment) => {
  const sectorName = pia.industrySector && INDUSTRY_SECTOR_PROFILES[pia.industrySector]
    ? INDUSTRY_SECTOR_PROFILES[pia.industrySector].name
    : 'General Enterprise';

  const docHtml = `
    <html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
      <head>
        <meta charset="utf-8" />
        <title>PIA Compliance Report - ${pia.id}</title>
        <!--[if gte mso 9]>
        <xml>
          <w:WordDocument>
            <w:View>Print</w:View>
            <w:Zoom>100</w:Zoom>
            <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
        </xml>
        <![endif]-->
        <style>
          body { font-family: 'Calibri', 'Segoe UI', Arial, sans-serif; font-size: 11pt; color: #1e293b; line-height: 1.5; margin: 40px; }
          h1 { color: #0f172a; font-size: 20pt; font-weight: bold; border-bottom: 2px solid #0284c7; padding-bottom: 8px; margin-bottom: 4px; }
          h2 { color: #0369a1; font-size: 14pt; font-weight: bold; margin-top: 24px; border-bottom: 1px solid #cbd5e1; padding-bottom: 4px; }
          .meta-box { background-color: #f8fafc; border: 1px solid #cbd5e1; padding: 12px; margin-bottom: 20px; border-radius: 6px; }
          .meta-grid { display: table; width: 100%; }
          .meta-row { display: table-row; }
          .meta-cell { display: table-cell; padding: 4px 10px; font-size: 10.5pt; }
          .meta-label { font-weight: bold; color: #475569; width: 180px; }
          .unique-badge { font-family: monospace; font-weight: bold; background-color: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; }
          table { border-collapse: collapse; width: 100%; margin-top: 10px; margin-bottom: 20px; }
          th { background-color: #0f172a; color: #ffffff; text-align: left; padding: 8px 12px; font-size: 10.5pt; }
          td { border: 1px solid #e2e8f0; padding: 8px 12px; font-size: 10.5pt; vertical-align: top; }
          tr:nth-child(even) td { background-color: #f8fafc; }
          .risk-pill { display: inline-block; padding: 4px 10px; font-weight: bold; border-radius: 12px; font-size: 10pt; }
          .risk-critical { background-color: #fee2e2; color: #991b1b; }
          .risk-high { background-color: #ffedd5; color: #c2410c; }
          .risk-medium { background-color: #fef9c3; color: #a16207; }
          .risk-low { background-color: #dcfce7; color: #15803d; }
          .signed-box { background-color: #f0fdf4; border: 1px solid #86efac; color: #166534; padding: 8px; border-radius: 4px; font-weight: bold; }
          .pending-box { background-color: #fffbebf; border: 1px solid #fde68a; color: #92400e; padding: 8px; border-radius: 4px; }
        </style>
      </head>
      <body>
        <h1>PRIVACY IMPACT ASSESSMENT (PIA) FORMAL COMPLIANCE REPORT</h1>
        <p style="font-size: 10pt; color: #64748b; margin-top: -8px;">
          Generated on ${new Date().toLocaleDateString()} | Formal Governance Record
        </p>

        <div class="meta-box">
          <table>
            <tr>
              <td class="meta-label">Primary Unique Reference ID:</td>
              <td><span class="unique-badge">${pia.id || 'N/A'}</span></td>
            </tr>
            <tr>
              <td class="meta-label">Frontend Server ID (FID):</td>
              <td><span class="unique-badge">${pia.fid || 'PIA-FE-2026-A8F9K2L1'}</span></td>
            </tr>
            <tr>
              <td class="meta-label">Backend Audit Record ID (BID):</td>
              <td><span class="unique-badge">${pia.bid || 'PIA-BE-UK-2026-000412'}</span></td>
            </tr>
            <tr>
              <td class="meta-label">Document Version:</td>
              <td>${pia.version || 'v1.0'}</td>
            </tr>
            <tr>
              <td class="meta-label">Project Title:</td>
              <td><strong>${pia.projectTitle || 'Untitled Project'}</strong></td>
            </tr>
            <tr>
              <td class="meta-label">Organization:</td>
              <td>${pia.organization || 'Enterprise Trust'}</td>
            </tr>
            <tr>
              <td class="meta-label">Industry Sector:</td>
              <td>${sectorName}</td>
            </tr>
            <tr>
              <td class="meta-label">Project Owner:</td>
              <td>${pia.projectOwner || 'N/A'} (${pia.projectOwnerEmail || 'N/A'})</td>
            </tr>
            <tr>
              <td class="meta-label">Data Protection Officer:</td>
              <td>${pia.dpoName || 'N/A'} (${pia.dpoEmail || 'N/A'})</td>
            </tr>
            <tr>
              <td class="meta-label">Assessment Status:</td>
              <td><strong>${pia.status || 'Draft'}</strong></td>
            </tr>
          </table>
        </div>

        <h2>1. EXECUTIVE RISK EVALUATION & GOVERNANCE SUMMARY</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Calculated Value</th>
              <th>Governance Guidance & Remarks</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Final Calculated Risk Score</strong></td>
              <td><strong style="font-size: 13pt; color: #0284c7;">${pia.riskResult?.finalRiskScore ?? 1.0} / 25.0</strong></td>
              <td>Mathematical calculation based on NHS step 1-4 methodology</td>
            </tr>
            <tr>
              <td><strong>Overall Risk Rating</strong></td>
              <td>
                <span class="risk-pill ${
                  pia.riskResult?.riskLevel === 'Critical' ? 'risk-critical' :
                  pia.riskResult?.riskLevel === 'High' ? 'risk-high' :
                  pia.riskResult?.riskLevel === 'Medium' ? 'risk-medium' : 'risk-low'
                }">
                  ${pia.riskResult?.riskLevel ?? 'Low'} Risk
                </span>
              </td>
              <td>${pia.riskResult?.requiredAction ?? 'Acceptable with routine monitoring'}</td>
            </tr>
            <tr>
              <td><strong>Impact Score (I)</strong></td>
              <td>${pia.riskResult?.impactScore ?? 1.0} / 5.0</td>
              <td>Evaluates harm to individual rights & data subjects</td>
            </tr>
            <tr>
              <td><strong>Likelihood Score (L)</strong></td>
              <td>${pia.riskResult?.likelihoodScore ?? 1.0} / 5.0</td>
              <td>Evaluates probability of occurrence</td>
            </tr>
            <tr>
              <td><strong>Base Risk Score (I x L)</strong></td>
              <td>${pia.riskResult?.baseRiskScore ?? 1.0}</td>
              <td>Unadjusted baseline multiplier score</td>
            </tr>
            <tr>
              <td><strong>Applied Modifiers Multiplier</strong></td>
              <td>x${pia.riskResult?.appliedModifiers?.totalMultiplier ?? 1.0}</td>
              <td>Triggered by vendor access, cross-border flows, or AI processing</td>
            </tr>
          </tbody>
        </table>

        <h2>2. SECTION RISK PROFILE SCORES</h2>
        <table>
          <thead>
            <tr>
              <th>Risk Category Section</th>
              <th>Risk Score</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data Processing Scope (Section B)</td>
              <td>${pia.riskResult?.sectionRiskProfiles?.dataProcessingRisk ?? '1.0'} / 5.0</td>
              <td>Evaluated</td>
            </tr>
            <tr>
              <td>Legal Compliance & Lawful Basis (Section C)</td>
              <td>${pia.riskResult?.sectionRiskProfiles?.legalComplianceRisk ?? '1.0'} / 5.0</td>
              <td>Evaluated</td>
            </tr>
            <tr>
              <td>Third-Party & Data Sharing (Section E)</td>
              <td>${pia.riskResult?.sectionRiskProfiles?.dataSharingRisk ?? '1.0'} / 5.0</td>
              <td>Evaluated</td>
            </tr>
            <tr>
              <td>Technical & Organizational Security (Section I)</td>
              <td>${pia.riskResult?.sectionRiskProfiles?.securityRisk ?? '1.0'} / 5.0</td>
              <td>Evaluated</td>
            </tr>
            <tr>
              <td>Governance & Rights (Section K)</td>
              <td>${pia.riskResult?.sectionRiskProfiles?.governanceRisk ?? '1.0'} / 5.0</td>
              <td>Evaluated</td>
            </tr>
          </tbody>
        </table>

        <h2>3. SYSTEM ARCHITECTURE & DATA FLOW NARRATIVE</h2>
        <div style="background-color: #f8fafc; border-left: 4px solid #0284c7; padding: 12px; margin-bottom: 12px;">
          <strong>Project Description & Objectives:</strong><br/>
          ${pia.projectDescription ? pia.projectDescription.replace(/\n/g, '<br/>') : 'No description recorded.'}
        </div>
        <div style="background-color: #f8fafc; border-left: 4px solid #0369a1; padding: 12px; margin-bottom: 20px;">
          <strong>Data Flow Architecture & Data Lifecycle:</strong><br/>
          ${pia.dataFlowDescription ? pia.dataFlowDescription.replace(/\n/g, '<br/>') : 'No data flow architecture description recorded.'}
        </div>

        <h2>4. NHS & GDPR DATA PROTECTION PRINCIPLES</h2>
        <table>
          <thead>
            <tr>
              <th>Principle</th>
              <th>Compliance Status</th>
            </tr>
          </thead>
          <tbody>
            ${
              Object.entries(pia.nhsChecklist || {
                fairLawfulProcessing: 'Not Evaluated',
                purposeLimitation: 'Not Evaluated',
                dataMinimization: 'Not Evaluated',
                accuracy: 'Not Evaluated',
                retention: 'Not Evaluated',
                rightsOfIndividuals: 'Not Evaluated',
                security: 'Not Evaluated',
                internationalTransfers: 'Not Evaluated'
              }).map(([k, v]) => `
                <tr>
                  <td><strong>${k.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}</strong></td>
                  <td>${v}</td>
                </tr>
              `).join('')
            }
          </tbody>
        </table>

        <h2>5. FORMAL ENDORSEMENTS & GOVERNANCE SIGN-OFFS</h2>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Endorser Name</th>
              <th>Sign-Off Status</th>
            </tr>
          </thead>
          <tbody>
            ${
              pia.endorsements && pia.endorsements.length > 0
                ? pia.endorsements.map(e => `
                  <tr>
                    <td><strong>${e.role}</strong></td>
                    <td>${e.name}</td>
                    <td>
                      ${
                        e.signed
                          ? `<div class="signed-box">✓ SIGNED on ${e.signedDate}</div>`
                          : `<div class="pending-box">PENDING SIGNATURE</div>`
                      }
                    </td>
                  </tr>
                `).join('')
                : '<tr><td colspan="3">No formal endorsements recorded.</td></tr>'
            }
          </tbody>
        </table>
      </body>
    </html>
  `;

  const blob = new Blob([docHtml], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', getExportFilename(pia, 'doc'));
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * EXPORT TO PDF (Triggers browser print with print-optimized window / dialog)
 */
export const exportToPDF = (pia: PIAAssessment) => {
  // Option 1: Trigger window.print if printable report is mounted
  const printableContainer = document.getElementById('printable-report-area');
  if (printableContainer) {
    window.print();
    return;
  }

  // Option 2: Fallback to creating a print window if container isn't rendered directly on current page
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Pop-up blocked. Please allow pop-ups to generate PDF.');
    return;
  }

  const sectorName = pia.industrySector && INDUSTRY_SECTOR_PROFILES[pia.industrySector]
    ? INDUSTRY_SECTOR_PROFILES[pia.industrySector].name
    : 'General Enterprise';

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>PIA Assessment - ${pia.id}</title>
        <style>
          @page { size: A4; margin: 15mm; }
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #0f172a; line-height: 1.5; font-size: 11px; padding: 20px; }
          .header { border-bottom: 2px solid #0284c7; padding-bottom: 12px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: flex-start; }
          .header h1 { font-size: 20px; font-weight: 800; margin: 0; color: #0284c7; }
          .header p { margin: 4px 0 0 0; color: #64748b; font-size: 10px; }
          .meta-grid { display: grid; grid-template-cols: repeat(2, 1fr); gap: 8px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 8px; margin-bottom: 16px; }
          .meta-item { display: flex; font-size: 10px; }
          .meta-label { font-weight: bold; width: 140px; color: #475569; }
          .badge { display: inline-block; padding: 2px 6px; font-family: monospace; font-weight: bold; background: #e0f2fe; color: #0369a1; border-radius: 4px; font-size: 10px; }
          h2 { font-size: 13px; font-weight: bold; color: #0f172a; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-top: 16px; margin-bottom: 8px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 12px; }
          th, td { border: 1px solid #cbd5e1; padding: 6px 8px; text-align: left; font-size: 10px; }
          th { background: #f1f5f9; font-weight: bold; }
          .risk-pill { display: inline-block; padding: 2px 8px; border-radius: 10px; font-weight: bold; font-size: 10px; }
          .risk-high { background: #fee2e2; color: #991b1b; }
          .risk-med { background: #fef9c3; color: #854d0e; }
          .risk-low { background: #dcfce7; color: #166534; }
        </style>
      </head>
      <body>
        <div class="header">
          <div>
            <h1>PRIVACY IMPACT ASSESSMENT (PIA) REPORT</h1>
            <p>Official Compliance & Risk Audit Document | Ref ID: <strong>${pia.id}</strong></p>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 16px; font-weight: 900; color: #0284c7;">${pia.riskResult?.finalRiskScore ?? 1.0} / 25.0</div>
            <div class="risk-pill ${pia.riskResult?.riskLevel === 'High' ? 'risk-high' : pia.riskResult?.riskLevel === 'Medium' ? 'risk-med' : 'risk-low'}">
              ${pia.riskResult?.riskLevel ?? 'Low'} Risk
            </div>
          </div>
        </div>

        <div class="meta-grid">
          <div class="meta-item"><span class="meta-label">Primary Assessment ID:</span> <span class="badge">${pia.id || 'N/A'}</span></div>
          <div class="meta-item"><span class="meta-label">Frontend Server ID (FID):</span> <span class="badge">${pia.fid || 'N/A'}</span></div>
          <div class="meta-item"><span class="meta-label">Backend Audit ID (BID):</span> <span class="badge">${pia.bid || 'N/A'}</span></div>
          <div class="meta-item"><span class="meta-label">Document Version:</span> <span>${pia.version || 'v1.0'}</span></div>
          <div class="meta-item"><span class="meta-label">Project Title:</span> <strong>${pia.projectTitle}</strong></div>
          <div class="meta-item"><span class="meta-label">Organization:</span> <span>${pia.organization}</span></div>
          <div class="meta-item"><span class="meta-label">Industry Sector:</span> <span>${sectorName}</span></div>
          <div class="meta-item"><span class="meta-label">Assessment Status:</span> <strong>${pia.status}</strong></div>
          <div class="meta-item"><span class="meta-label">Project Owner:</span> <span>${pia.projectOwner}</span></div>
          <div class="meta-item"><span class="meta-label">Data Protection Officer:</span> <span>${pia.dpoName}</span></div>
        </div>

        <h2>1. QUANTITATIVE RISK MATRIX BREAKDOWN</h2>
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              <th>Value</th>
              <th>Governance Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Final Calculated Score</td>
              <td><strong>${pia.riskResult?.finalRiskScore ?? 1.0} / 25.0</strong></td>
              <td>${pia.riskResult?.requiredAction ?? 'Routine monitoring'}</td>
            </tr>
            <tr>
              <td>Impact x Likelihood</td>
              <td>Impact (${pia.riskResult?.impactScore ?? 1.0}) x Likelihood (${pia.riskResult?.likelihoodScore ?? 1.0}) = Base ${pia.riskResult?.baseRiskScore ?? 1.0}</td>
              <td>Applied Multipliers: x${pia.riskResult?.appliedModifiers?.totalMultiplier ?? 1.0}</td>
            </tr>
          </tbody>
        </table>

        <h2>2. SECTION RISK SCORES</h2>
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Risk Score</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Data Processing Scope (Sec B)</td><td>${pia.riskResult?.sectionRiskProfiles?.dataProcessingRisk ?? '1.0'} / 5.0</td></tr>
            <tr><td>Legal Compliance (Sec C)</td><td>${pia.riskResult?.sectionRiskProfiles?.legalComplianceRisk ?? '1.0'} / 5.0</td></tr>
            <tr><td>Data Sharing & Vendors (Sec E)</td><td>${pia.riskResult?.sectionRiskProfiles?.dataSharingRisk ?? '1.0'} / 5.0</td></tr>
            <tr><td>Technical Security (Sec I)</td><td>${pia.riskResult?.sectionRiskProfiles?.securityRisk ?? '1.0'} / 5.0</td></tr>
            <tr><td>Governance & Rights (Sec K)</td><td>${pia.riskResult?.sectionRiskProfiles?.governanceRisk ?? '1.0'} / 5.0</td></tr>
          </tbody>
        </table>

        <h2>3. SYSTEM ARCHITECTURE & DATA FLOW</h2>
        <p><strong>Description:</strong> ${pia.projectDescription || 'N/A'}</p>
        <p><strong>Data Flow:</strong> ${pia.dataFlowDescription || 'N/A'}</p>

        <h2>4. FORMAL SIGN-OFFS & ENDORSEMENTS</h2>
        <table>
          <thead>
            <tr>
              <th>Role</th>
              <th>Endorser Name</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            ${
              pia.endorsements && pia.endorsements.length > 0
                ? pia.endorsements.map(e => `
                  <tr>
                    <td>${e.role}</td>
                    <td>${e.name}</td>
                    <td><strong>${e.signed ? '✓ SIGNED on ' + e.signedDate : 'PENDING'}</strong></td>
                  </tr>
                `).join('')
                : '<tr><td colspan="3">No formal endorsements recorded.</td></tr>'
            }
          </tbody>
        </table>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>
      </body>
    </html>
  `;

  printWindow.document.open();
  printWindow.document.write(html);
  printWindow.document.close();
};
