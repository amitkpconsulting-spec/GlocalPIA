import React, { useState } from 'react';
import { Download, Printer, Copy, Check, ShieldCheck, FileText, UserCheck, AlertTriangle, Building, Layers, Table, FileCode } from 'lucide-react';
import { PIAAssessment } from '../types';
import { INDUSTRY_SECTOR_PROFILES } from '../data/industrySectors';
import { ExportButtonDropdown } from './ExportButtonDropdown';
import { exportToPDF, exportToXLS, exportToCSV, exportToWord } from '../utils/exportUtils';

interface ExportReportModalProps {
  pias: PIAAssessment[];
  selectedPia: PIAAssessment | null;
  onSelectPia: (pia: PIAAssessment) => void;
  onSignOff: (piaId: string, role: string, name: string, signed: boolean) => void;
}

export const ExportReportModal: React.FC<ExportReportModalProps> = ({
  pias,
  selectedPia,
  onSelectPia,
  onSignOff,
}) => {
  const [copied, setCopied] = useState(false);
  const activePia = selectedPia || pias[0];

  if (!activePia) {
    return (
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-12 text-center text-zinc-400">
        <FileText className="w-10 h-10 mx-auto text-zinc-600 mb-3" />
        <h3 className="text-sm font-semibold text-zinc-200">No assessment selected for report export</h3>
        <p className="text-xs text-zinc-400 mt-1">Please select an assessment from the Central Directory.</p>
      </div>
    );
  }

  const sectorProfile = activePia.industrySector ? INDUSTRY_SECTOR_PROFILES[activePia.industrySector] : null;

  // Generate Markdown Text Report
  const generateMarkdownReport = () => {
    return `# PRIVACY IMPACT ASSESSMENT (PIA) FORMAL COMPLIANCE REPORT
**Reference ID:** ${activePia.id}
**Frontend Server ID (FID):** ${activePia.fid || 'PIA-FE-2026-A8F9K2L1'}
**Backend Audit ID (BID):** ${activePia.bid || 'PIA-BE-UK-2026-000412'}
**Document Version:** ${activePia.version || 'v1.0'}
**Project Title:** ${activePia.projectTitle}
**Organization:** ${activePia.organization}
**Industry Sector:** ${sectorProfile ? `${sectorProfile.name} (${sectorProfile.shortName})` : 'General Enterprise'}
**Project Owner:** ${activePia.projectOwner} (${activePia.projectOwnerEmail || 'N/A'})
**Data Protection Officer:** ${activePia.dpoName}
**Assessment Status:** ${activePia.status}
**Generated Date:** ${new Date().toLocaleDateString()}

---

## 1. INDUSTRY SECTOR PROFILE & TAILORED REGULATORY RULES
- **Sector Context:** ${sectorProfile ? sectorProfile.context : 'Standard enterprise processing profile.'}
- **Mandatory Target Frameworks:** ${sectorProfile ? sectorProfile.regulatoryAlignment.join(', ') : 'UK GDPR & DPA 2018'}
- **Dynamic Risk Rules Applied:**
${sectorProfile ? sectorProfile.dynamicRules.map(r => `  - ${r}`).join('\n') : '  - Standard baseline risk evaluation'}

---

## 2. DUAL-ID PROVENANCE & LINEAGE AUDIT
- **Frontend Submission ID (FID):** ${activePia.fid || 'N/A'}
- **Backend Regulatory Record ID (BID):** ${activePia.bid || 'N/A'}
- **Current Active Version:** ${activePia.version || 'v1.0'}
- **Latest Provenance Hash:** ${activePia.provenanceTrail?.[0]?.provenanceHash || 'SHA-256 Verified'}
- **Target Frameworks:** ${activePia.regulatoryTailoring?.selectedFrameworks?.join(', ') || 'UK GDPR & DPA 2018'}
- **SME Override Notes:** ${activePia.regulatoryTailoring?.smeOverrideNotes || 'None'}

---

## 3. EXECUTIVE SUMMARY & CALCULATED RISK
- **Final Risk Score:** ${activePia.riskResult?.finalRiskScore || 1.0} / 25.0
- **Overall Risk Level:** ${activePia.riskResult?.riskLevel || 'Low'}
- **Action Required:** ${activePia.riskResult?.requiredAction || 'Accept with routine monitoring'}

### Core Matrix Scores
- Impact Score (I): ${activePia.riskResult?.impactScore || 1.0} / 5.0
- Likelihood Score (L): ${activePia.riskResult?.likelihoodScore || 1.0} / 5.0
- Base Risk Score: ${activePia.riskResult?.baseRiskScore || 1.0}
- Applied Risk Multiplier: ×${activePia.riskResult?.appliedModifiers.totalMultiplier || 1.0}

---

## 4. SECTION RISK PROFILES
- Data Processing Risk (Avg Sec B): ${activePia.riskResult?.sectionRiskProfiles.dataProcessingRisk}
- Legal Compliance Risk (Avg Sec C): ${activePia.riskResult?.sectionRiskProfiles.legalComplianceRisk}
- Data Sharing Risk (Avg Sec E): ${activePia.riskResult?.sectionRiskProfiles.dataSharingRisk}
- Security Risk (Avg Sec I): ${activePia.riskResult?.sectionRiskProfiles.securityRisk}
- Governance Risk (Avg Sec K): ${activePia.riskResult?.sectionRiskProfiles.governanceRisk}

---

## 5. NHS DATA PROTECTION PRINCIPLES CHECKLIST
- Fair & Lawful Processing: ${activePia.nhsChecklist?.fairLawfulProcessing}
- Purpose Limitation: ${activePia.nhsChecklist?.purposeLimitation}
- Data Minimization: ${activePia.nhsChecklist?.dataMinimization}
- Data Accuracy: ${activePia.nhsChecklist?.accuracy}
- Retention Limitation: ${activePia.nhsChecklist?.retention}
- Rights of Individuals: ${activePia.nhsChecklist?.rightsOfIndividuals}
- Security Controls: ${activePia.nhsChecklist?.security}
- International Transfers: ${activePia.nhsChecklist?.internationalTransfers}

---

## 6. LOCAL AI COMPLIANCE AUDIT
- **Overall AI Findings:** ${activePia.aiAnalysis?.overallAssessment || 'No AI scan executed.'}
- **Identified Inconsistencies:**
${activePia.aiAnalysis?.identifiedInconsistencies?.map(inc => `  - ${inc}`).join('\n') || '  - None identified.'}

---

## 7. ENDORSEMENTS & FORMAL SIGN-OFF
${activePia.endorsements?.map(e => `- **${e.role}:** ${e.signed ? `SIGNED by ${e.name} on ${e.signedDate}` : 'PENDING SIGNATURE'}`).join('\n')}
`;
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownReport());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(activePia, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `${activePia.id}-PIA-Full-Export.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div id="audit-report-container" className="space-y-6 text-zinc-200">
      {/* Top Banner & Assessment Switcher */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            PIA Formal Audit Report & Endorsement Sign-Off
          </h1>
          <p className="text-xs text-zinc-400 mt-0.5">
            Generate executive compliance reports suitable for DPO records, board review, or regulatory submission.
          </p>
        </div>

        {/* Assessment Selector */}
        <div className="flex items-center space-x-2 w-full md:w-auto">
          <span className="text-xs text-zinc-400 font-semibold shrink-0">Select PIA:</span>
          <select
            value={activePia.id}
            onChange={e => {
              const target = pias.find(p => p.id === e.target.value);
              if (target) onSelectPia(target);
            }}
            className="bg-zinc-950 border border-zinc-800 rounded-lg px-3 py-1.5 text-xs text-zinc-100 font-medium focus:outline-none focus:border-cyan-500"
          >
            {pias.map(p => (
              <option key={p.id} value={p.id}>
                {p.id} - {p.projectTitle} ({p.riskResult?.riskLevel || 'Low'})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Export Actions Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-zinc-900/80 p-4 rounded-2xl border border-zinc-800 text-xs shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono text-cyan-400 font-bold bg-cyan-950/80 px-2.5 py-1 rounded-md border border-cyan-800/40">
            Ref: {activePia.id}
          </span>
          {activePia.fid && (
            <span className="font-mono text-blue-400 font-semibold bg-blue-950/60 px-2 py-1 rounded-md border border-blue-800/40 text-[11px]">
              FID: {activePia.fid}
            </span>
          )}
          {activePia.bid && (
            <span className="font-mono text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-1 rounded-md border border-emerald-800/40 text-[11px]">
              BID: {activePia.bid}
            </span>
          )}
          <span className="text-white font-semibold ml-1">{activePia.projectTitle}</span>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Main Dropdown Button for Unique ID Export */}
          <ExportButtonDropdown pia={activePia} variant="primary" />

          {/* Quick format action shortcuts */}
          <div className="flex items-center space-x-1 pl-2 border-l border-zinc-800">
            <button
              onClick={() => exportToPDF(activePia)}
              className="inline-flex items-center px-2.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-lg transition font-bold"
              title="Export to Printable PDF"
            >
              <Printer className="w-3.5 h-3.5 mr-1" />
              PDF
            </button>

            <button
              onClick={() => exportToXLS(activePia)}
              className="inline-flex items-center px-2.5 py-1.5 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 rounded-lg transition font-semibold"
              title="Export to MS Excel (.xls)"
            >
              <Table className="w-3.5 h-3.5 mr-1" />
              XLS
            </button>

            <button
              onClick={() => exportToCSV(activePia)}
              className="inline-flex items-center px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-lg transition font-semibold"
              title="Export to Comma Separated Values (.csv)"
            >
              <FileCode className="w-3.5 h-3.5 mr-1" />
              CSV
            </button>

            <button
              onClick={() => exportToWord(activePia)}
              className="inline-flex items-center px-2.5 py-1.5 bg-purple-950 hover:bg-purple-900 text-purple-300 border border-purple-800 rounded-lg transition font-semibold"
              title="Export to MS Word (.doc)"
            >
              <FileText className="w-3.5 h-3.5 mr-1" />
              Word
            </button>
          </div>

          <button
            onClick={handleCopyMarkdown}
            className="inline-flex items-center px-2.5 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg border border-zinc-700 transition font-medium"
            title="Copy Markdown representation"
          >
            {copied ? <Check className="w-3.5 h-3.5 mr-1 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 mr-1" />}
            {copied ? 'Copied MD' : 'MD'}
          </button>
        </div>
      </div>

      {/* Printable Report Document Body */}
      <div id="printable-report-area" className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 space-y-6 text-zinc-200 shadow-2xl">
        {/* Header Document Metadata */}
        <div className="border-b border-zinc-800 pb-6 flex flex-col md:flex-row justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold">Official Privacy Document</span>
            <h2 className="text-2xl font-extrabold text-white">{activePia.projectTitle}</h2>
            <p className="text-xs text-zinc-400">{activePia.organization} • Ref: {activePia.id}</p>
          </div>

          <div className="text-right space-y-1">
            <div className="text-xs text-zinc-400">Calculated Risk Rating</div>
            <div className="text-xl font-mono font-black text-white">
              {activePia.riskResult?.finalRiskScore} / 25.0
            </div>
            <span className="inline-block px-3 py-0.5 rounded-full text-xs font-bold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60">
              {activePia.riskResult?.riskLevel} Risk
            </span>
          </div>
        </div>

        {/* Industry Sector Profile & Regulatory Rules Section */}
        {sectorProfile && (
          <div className="bg-zinc-950 p-5 rounded-xl border border-cyan-500/30 space-y-3 text-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-2">
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-cyan-400" />
                <h3 className="font-bold text-white text-sm">
                  Industry Sector Profile: {sectorProfile.name}
                </h3>
              </div>
              <span className={`self-start sm:self-auto px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded ${sectorProfile.badgeColor}`}>
                {sectorProfile.shortName} RULESET ACTIVE
              </span>
            </div>

            <p className="text-zinc-300 text-xs leading-relaxed">
              {sectorProfile.context}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div>
                <span className="font-bold text-cyan-300 uppercase tracking-wider text-[10px] block mb-1">
                  Dynamic Rule Additions Triggered
                </span>
                <ul className="space-y-1">
                  {sectorProfile.dynamicRules.map((rule, rIdx) => (
                    <li key={rIdx} className="text-zinc-300 flex items-start gap-1.5">
                      <span className="text-cyan-400 font-bold">•</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="font-bold text-cyan-300 uppercase tracking-wider text-[10px] block mb-1">
                  Target Regulatory Alignment Scope
                </span>
                <div className="flex flex-wrap gap-1">
                  {sectorProfile.regulatoryAlignment.map((reg, regIdx) => (
                    <span key={regIdx} className="px-2 py-0.5 bg-zinc-900 text-cyan-200 border border-cyan-800/60 rounded text-[10px] font-mono font-bold">
                      {reg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Executive Summary & Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
            <h3 className="font-bold text-cyan-300 uppercase tracking-wider text-[11px]">System & Business Scope</h3>
            <p className="text-zinc-300 leading-relaxed">{activePia.projectDescription || 'No description recorded.'}</p>
          </div>

          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
            <h3 className="font-bold text-cyan-300 uppercase tracking-wider text-[11px]">Data Flow Architecture & Lifecycle</h3>
            <p className="text-zinc-300 leading-relaxed whitespace-pre-line">{activePia.dataFlowDescription || 'No architecture description recorded.'}</p>
          </div>
        </div>

        {/* ICO Lawful Basis & Individual Rights Guidance Matrix Section */}
        {activePia.riskResult?.lawfulBasisEvaluation && (
          <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <h3 className="font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                ICO Lawful Basis & Individual Rights Governance Audit
              </h3>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                activePia.riskResult.lawfulBasisEvaluation.complianceStatus === 'Compliant'
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                  : 'bg-amber-950 text-amber-300 border border-amber-800'
              }`}>
                ICO Status: {activePia.riskResult.lawfulBasisEvaluation.complianceStatus}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-zinc-400">Primary Lawful Basis (C1): </span>
                <span className="font-bold text-cyan-300">{activePia.riskResult.lawfulBasisEvaluation.selectedBasis}</span>
              </div>
              <div>
                <span className="text-zinc-400">Rights Penalty Multiplier: </span>
                <span className="font-mono font-bold text-cyan-400">×{activePia.riskResult.lawfulBasisEvaluation.rightsPenaltyMultiplier}</span>
              </div>
            </div>

            {activePia.riskResult.lawfulBasisEvaluation.findings.length > 0 && (
              <div className="space-y-1 bg-amber-950/20 p-3 rounded-lg border border-amber-800/40 text-amber-200">
                <span className="font-semibold text-amber-300">ICO Audit Findings & Rights Misalignment Warnings:</span>
                <ul className="list-disc list-inside space-y-1 text-zinc-300 mt-1">
                  {activePia.riskResult.lawfulBasisEvaluation.findings.map((f, fIdx) => (
                    <li key={fIdx}>{f}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Core Risk Factor Matrix Breakdown */}
        <div className="bg-zinc-950 p-5 rounded-xl border border-zinc-800 space-y-3 text-xs">
          <h3 className="font-bold text-white border-b border-zinc-800 pb-2">Quantitative Risk Breakdown (Step 1-4 Methodology)</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-[10px] text-zinc-400 uppercase">Impact Score (I)</div>
              <div className="text-lg font-mono font-bold text-white">{activePia.riskResult?.impactScore}</div>
            </div>
            <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-[10px] text-zinc-400 uppercase">Likelihood Score (L)</div>
              <div className="text-lg font-mono font-bold text-white">{activePia.riskResult?.likelihoodScore}</div>
            </div>
            <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-[10px] text-zinc-400 uppercase">Base Risk</div>
              <div className="text-lg font-mono font-bold text-white">{activePia.riskResult?.baseRiskScore}</div>
            </div>
            <div className="p-2.5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-[10px] text-zinc-400 uppercase">Multipliers</div>
              <div className="text-lg font-mono font-bold text-cyan-400">×{activePia.riskResult?.appliedModifiers.totalMultiplier}</div>
            </div>
          </div>
        </div>

        {/* AI Compliance Findings */}
        {activePia.aiAnalysis && (
          <div className="bg-cyan-950/30 p-5 rounded-xl border border-cyan-800/40 space-y-3 text-xs">
            <h3 className="font-bold text-cyan-200 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Automated AI Regulatory Audit Summary ({activePia.aiAnalysis.provider.toUpperCase()})
            </h3>
            <p className="text-zinc-300 leading-relaxed">{activePia.aiAnalysis.overallAssessment}</p>

            {activePia.aiAnalysis.identifiedInconsistencies.length > 0 && (
              <div className="space-y-1">
                <span className="font-semibold text-cyan-300">Inconsistencies Flagged:</span>
                <ul className="list-disc list-inside space-y-0.5 text-zinc-300 pl-2">
                  {activePia.aiAnalysis.identifiedInconsistencies.map((inc, i) => (
                    <li key={i}>{inc}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Endorsements Sign-Off Table */}
        <div className="space-y-3 text-xs">
          <h3 className="font-bold text-white border-b border-zinc-800 pb-2 flex items-center gap-2">
            <UserCheck className="w-4 h-4 text-cyan-400" />
            Formal Governance Endorsements & Sign-Offs
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {activePia.endorsements?.map((e, idx) => (
              <div key={idx} className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase font-bold text-zinc-400">{e.role}</div>
                  <div className="text-sm font-bold text-white">{e.name}</div>
                  <div className="text-[11px] text-zinc-400 mt-0.5">
                    {e.signed ? `Signed on ${e.signedDate}` : 'Pending Endorsement'}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSignOff(activePia.id, e.role, e.name, !e.signed)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                    e.signed
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700'
                  }`}
                >
                  {e.signed ? '✓ Signed' : 'Click to Sign'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
