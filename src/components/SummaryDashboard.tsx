import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Search, 
  Plus, 
  Layers, 
  AlertTriangle, 
  FileText, 
  CheckCircle2, 
  Database, 
  ChevronRight, 
  ArrowUpRight, 
  Filter, 
  Activity,
  Cpu,
  BarChart3,
  ExternalLink,
  ShieldAlert
} from 'lucide-react';
import { PIAAssessment, RemediationGap } from '../types';
import { evaluateOverallPIAStatus } from '../utils/piaStatusLogic';

interface SummaryDashboardProps {
  pias: PIAAssessment[];
  gaps: RemediationGap[];
  onSelectPia: (pia: PIAAssessment) => void;
  onNewAssessment: () => void;
  onNavigateToGaps: () => void;
  onNavigateToDirectory: () => void;
}

export const SummaryDashboard: React.FC<SummaryDashboardProps> = ({
  pias,
  gaps,
  onSelectPia,
  onNewAssessment,
  onNavigateToGaps,
  onNavigateToDirectory,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [riskTimeframe, setRiskTimeframe] = useState<'Today' | 'This Week' | 'All Time'>('This Week');

  // Calculated metrics from actual PIAs using centralized status logic
  const totalPias = pias.length;
  const piaEvaluations = pias.map(p => evaluateOverallPIAStatus(p, gaps));

  const openAssessments = piaEvaluations.filter(
    e => e.status === 'Draft' || e.status === 'IN_REVISION' || e.status === 'Remediation' || e.status === 'DPO Review' || e.status === 'Submitted'
  ).length;

  const approvedAssessments = piaEvaluations.filter(
    e => e.status === 'Approved' || e.status === 'Archived'
  ).length;
  
  // Calculate average actual field completion percentage across all PIAs (0-100%)
  const evaluatedPercentage = totalPias > 0 
    ? Math.min(100, Math.max(0, Math.round(
        piaEvaluations.reduce((acc, curr) => acc + curr.completionPercentage, 0) / totalPias
      )))
    : 100;

  // Filter PIAs based on search
  const filteredPias = (pias || []).filter(pia => {
    if (!pia) return false;
    const term = (searchTerm || '').toLowerCase();
    return (
      (pia.title || '').toLowerCase().includes(term) ||
      (pia.dataController || '').toLowerCase().includes(term) ||
      (pia.systemName || '').toLowerCase().includes(term) ||
      (pia.scopeDescription || '').toLowerCase().includes(term) ||
      (pia.id || '').toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Banner / Hero Bar */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-purple-950/40 border border-zinc-800 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center space-x-2 mb-1">
            <span className="px-2.5 py-0.5 bg-purple-950/90 text-purple-300 border border-purple-500/40 rounded-full text-xs font-mono font-bold">
              FORTEXA PIA GOVERNANCE
            </span>
            <span className="text-xs text-zinc-400 font-mono">ISO 42001 & DPDPA COCKPIT</span>
          </div>
          <h1 className="text-2xl font-black text-white tracking-tight">
            Privacy Impact Assessment (PIA) Summary Dashboard
          </h1>
          <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
            Real-time telemetry and risk classification for third-party vendors, AI model deployments, and personal data pipelines.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search assessments, models, vendors..."
              className="bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-4 py-2 text-xs text-zinc-200 focus:outline-none focus:border-purple-500 w-56 sm:w-64 transition"
            />
          </div>
          <button
            onClick={onNewAssessment}
            className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-lg shadow-purple-950/50 flex items-center gap-1.5 shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span>New Assessment</span>
          </button>
        </div>
      </div>

      {/* Top Metrics Row: 3 Core Governance Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Widget 1: Open PIA Risks by Classification */}
        <div className="bg-[#12151e] border border-[#1e2330] p-5 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span>Open PIA Risks by Classification</span>
              </h3>
              <select 
                value={riskTimeframe}
                onChange={(e) => setRiskTimeframe(e.target.value as any)}
                className="bg-zinc-900 text-[11px] text-zinc-300 rounded-lg px-2 py-1 border border-zinc-800 outline-none cursor-pointer"
              >
                <option value="Today">Today</option>
                <option value="This Week">This Week</option>
                <option value="All Time">All Time</option>
              </select>
            </div>
            
            {/* Category Legend */}
            <div className="flex flex-wrap gap-3 text-[11px] text-zinc-400 mb-4">
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-amber-400 mr-1.5 animate-pulse" /> PII Leakage
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-purple-500 mr-1.5" /> Vendor Sharing
              </span>
              <span className="flex items-center">
                <span className="w-2 h-2 rounded-full bg-pink-500 mr-1.5" /> Model Retention
              </span>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="h-36 flex items-end justify-between gap-3 pt-2 border-b border-zinc-800/60 pb-2">
            {/* Column 1 */}
            <div className="w-full bg-purple-950/30 rounded-t h-24 flex flex-col justify-end overflow-hidden group relative">
              <div className="bg-pink-500 h-8 rounded-t group-hover:brightness-110 transition" title="Model Retention: 8" />
              <div className="bg-purple-500 h-10 group-hover:brightness-110 transition" title="Vendor Sharing: 10" />
              <div className="bg-amber-400 h-6 group-hover:brightness-110 transition" title="PII Leakage: 6" />
              <span className="absolute bottom-1 left-0 right-0 text-center text-[9px] font-mono font-bold text-zinc-950">
                AWS
              </span>
            </div>

            {/* Column 2 */}
            <div className="w-full bg-purple-950/30 rounded-t h-32 flex flex-col justify-end overflow-hidden group relative">
              <div className="bg-pink-500 h-12 rounded-t group-hover:brightness-110 transition" title="Model Retention: 12" />
              <div className="bg-purple-500 h-14 group-hover:brightness-110 transition" title="Vendor Sharing: 14" />
              <div className="bg-amber-400 h-6 group-hover:brightness-110 transition" title="PII Leakage: 6" />
              <span className="absolute bottom-1 left-0 right-0 text-center text-[9px] font-mono font-bold text-zinc-950">
                Azure
              </span>
            </div>

            {/* Column 3 */}
            <div className="w-full bg-purple-950/30 rounded-t h-20 flex flex-col justify-end overflow-hidden group relative">
              <div className="bg-pink-500 h-6 rounded-t group-hover:brightness-110 transition" title="Model Retention: 6" />
              <div className="bg-purple-500 h-8 group-hover:brightness-110 transition" title="Vendor Sharing: 8" />
              <div className="bg-amber-400 h-6 group-hover:brightness-110 transition" title="PII Leakage: 6" />
              <span className="absolute bottom-1 left-0 right-0 text-center text-[9px] font-mono font-bold text-zinc-950">
                GCP
              </span>
            </div>

            {/* Column 4 */}
            <div className="w-full bg-purple-950/30 rounded-t h-28 flex flex-col justify-end overflow-hidden group relative">
              <div className="bg-pink-500 h-10 rounded-t group-hover:brightness-110 transition" title="Model Retention: 10" />
              <div className="bg-purple-500 h-12 group-hover:brightness-110 transition" title="Vendor Sharing: 12" />
              <div className="bg-amber-400 h-6 group-hover:brightness-110 transition" title="PII Leakage: 6" />
              <span className="absolute bottom-1 left-0 right-0 text-center text-[9px] font-mono font-bold text-zinc-950">
                Local
              </span>
            </div>
          </div>

          <div className="text-[10px] text-zinc-500 flex justify-between items-center mt-2 font-mono">
            <span>Risk Score Average: High (7.4)</span>
            <button onClick={onNavigateToGaps} className="text-purple-400 hover:underline flex items-center gap-0.5">
              <span>View Gap Log</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Widget 2: Privacy Threat Vectors / GDPR & DPDP Taxonomy */}
        <div className="bg-[#12151e] border border-[#1e2330] p-5 rounded-2xl shadow-lg flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <div>
              <h3 className="text-sm font-bold text-zinc-100">PIA Compliance Tactics</h3>
              <p className="text-[10px] text-zinc-400">NIST SP 800-53 / ISO 42001 Controls</p>
            </div>
            <button 
              onClick={onNavigateToDirectory}
              className="text-xs text-purple-400 hover:text-purple-300 transition font-medium"
            >
              View All
            </button>
          </div>

          {/* Constellation Style Central Diagram */}
          <div className="relative h-40 flex items-center justify-center my-1">
            {/* Orbit Circles */}
            <div className="absolute w-36 h-36 border border-purple-500/20 rounded-full animate-spin-slow" />
            <div className="absolute w-24 h-24 border border-indigo-500/20 rounded-full" />
            
            {/* Central Node */}
            <div className="z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-pink-500 flex flex-col items-center justify-center text-white font-black text-sm shadow-lg shadow-purple-950/60 ring-4 ring-purple-900/40">
              <span className="text-base leading-none">354</span>
              <span className="text-[8px] font-normal text-purple-200 uppercase tracking-tighter">Controls</span>
            </div>

            {/* Orbiting Nodes */}
            <div className="absolute top-2 left-8 w-8 h-8 rounded-full bg-amber-500/20 border border-amber-400/70 flex items-center justify-center text-[10px] text-amber-300 font-bold shadow">
              19
            </div>
            <div className="absolute bottom-2 right-10 w-9 h-9 rounded-full bg-purple-500/20 border border-purple-400/70 flex items-center justify-center text-[10px] text-purple-300 font-bold shadow">
              27
            </div>
            <div className="absolute top-3 right-6 w-7 h-7 rounded-full bg-indigo-500/20 border border-indigo-400/70 flex items-center justify-center text-[10px] text-indigo-300 font-bold shadow">
              12
            </div>
          </div>

          <div className="flex justify-around text-[11px] text-zinc-400 mt-1 border-t border-zinc-800/60 pt-2">
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-400 mr-1" /> Consent Failure
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-purple-400 mr-1" /> Excessive Scope
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-indigo-400 mr-1" /> Cross-Border
            </span>
          </div>
        </div>

        {/* Widget 3: Assessment Status Overview */}
        <div className="bg-[#12151e] border border-[#1e2330] p-5 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-zinc-100">PIA Status</h3>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                {evaluatedPercentage}% Evaluated
              </span>
            </div>

            <div className="flex items-baseline space-x-6 my-4">
              <div>
                <div className="text-3xl font-black text-white">{openAssessments}</div>
                <div className="text-xs text-zinc-400 flex items-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mr-1.5" /> Open Reviews
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-white">{approvedAssessments}</div>
                <div className="text-xs text-zinc-400 flex items-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-purple-500 mr-1.5" /> Approved / Signed
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Mini Sparkline / Trend Bar */}
            <div className="w-full bg-zinc-900 rounded-full h-2 mb-2 overflow-hidden border border-zinc-800">
              <div 
                className="bg-gradient-to-r from-amber-500 via-purple-500 to-emerald-400 h-2 rounded-full transition-all duration-500" 
                style={{ width: `${evaluatedPercentage}%` }} 
              />
            </div>
            <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
              <span>Automated Gap Monitoring</span>
              <span>Updated just now</span>
            </div>
          </div>
        </div>

      </div>

      {/* Main Section: Active Privacy Impact Reviews Table */}
      <section className="bg-[#12151e] border border-[#1e2330] rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-purple-400" />
              <span>Active Privacy Impact Reviews</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Evaluated third-party vendors, models, and personal data processing pipelines
            </p>
          </div>
          <button
            onClick={onNewAssessment}
            className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold px-4 py-2 rounded-xl transition shadow-lg shadow-purple-950/50 flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>New Assessment</span>
          </button>
        </div>

        {/* Data Table */}
        <div className="overflow-x-auto rounded-xl border border-zinc-800/80">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead className="text-[11px] uppercase bg-zinc-950/90 text-zinc-400 border-b border-zinc-800 font-mono">
              <tr>
                <th scope="col" className="p-4">Vendor / System Entity</th>
                <th scope="col" className="p-4">PIA Title & Scope</th>
                <th scope="col" className="p-4">Risk Level</th>
                <th scope="col" className="p-4">Last Activity</th>
                <th scope="col" className="p-4">Data Sources</th>
                <th scope="col" className="p-4">Status</th>
                <th scope="col" className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 bg-zinc-900/30">
              
              {/* Render Filtered PIA items */}
              {filteredPias.length > 0 ? (
                filteredPias.map((pia) => {
                  const evalResult = evaluateOverallPIAStatus(pia, gaps);
                  const riskLevel = pia.riskResult?.riskLevel || 'Medium';
                  const isHigh = riskLevel === 'High' || riskLevel === 'Critical';

                  return (
                    <tr 
                      key={pia.id}
                      className="hover:bg-purple-950/20 transition cursor-pointer group"
                      onClick={() => onSelectPia(pia)}
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold border shrink-0 ${
                            isHigh
                              ? 'bg-rose-950/60 text-rose-300 border-rose-700/60'
                              : 'bg-indigo-950/60 text-indigo-300 border-indigo-700/60'
                          }`}>
                            {pia.organization?.charAt(0) || pia.projectOwner?.charAt(0) || 'P'}
                          </div>
                          <div>
                            <div className="font-bold text-white group-hover:text-purple-300 transition">
                              {pia.projectTitle || 'Privacy Assessment'}
                            </div>
                            <div className="text-[11px] text-zinc-500 font-mono">
                              {pia.id} • {pia.organization || 'Enterprise'}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="p-4 text-zinc-300 max-w-xs">
                        <div className="font-medium text-zinc-200 truncate">{pia.projectTitle}</div>
                        <div className="text-[11px] text-zinc-500 truncate">{pia.projectDescription || 'Privacy Risk Assessment'}</div>
                      </td>

                      <td className="p-4">
                        <div className="flex items-center space-x-1">
                          <div className={`w-3 h-1.5 rounded-sm ${riskLevel === 'Low' ? 'bg-emerald-500' : 'bg-purple-500'}`} />
                          <div className={`w-3 h-1.5 rounded-sm ${riskLevel === 'Low' ? 'bg-zinc-800' : 'bg-purple-500'}`} />
                          <div className={`w-3 h-1.5 rounded-sm ${isHigh ? 'bg-purple-500' : 'bg-zinc-800'}`} />
                          <div className={`w-3 h-1.5 rounded-sm ${riskLevel === 'Critical' ? 'bg-pink-500' : 'bg-zinc-800'}`} />
                          <span className={`text-xs ml-2 font-bold ${
                            riskLevel === 'Critical' || riskLevel === 'High' 
                              ? 'text-pink-400' 
                              : riskLevel === 'Medium' 
                                ? 'text-purple-400' 
                                : 'text-emerald-400'
                          }`}>
                            {riskLevel}
                          </span>
                        </div>
                      </td>

                      <td className="p-4 text-xs text-zinc-400 font-mono whitespace-nowrap">
                        {new Date(pia.updatedAt).toLocaleDateString()}
                      </td>

                      <td className="p-4">
                        <div className="flex flex-wrap gap-1">
                          <span className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700 font-mono">
                            {pia.industrySector?.toUpperCase() || 'FINANCE'}
                          </span>
                          {evalResult.hasOpenGaps && (
                            <span className="px-2 py-0.5 text-[10px] bg-amber-950 text-amber-300 rounded border border-amber-800 font-mono">
                              {evalResult.openGapsCount} Gap(s)
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span 
                            title={evalResult.statusReason}
                            className={`px-2.5 py-1 text-[11px] font-bold rounded-full border ${evalResult.badgeColorClass}`}
                          >
                            {evalResult.statusLabel}
                          </span>
                          <span 
                            title={`Field completion: ${evalResult.completionPercentage}%`}
                            className="px-2 py-0.5 text-[10px] bg-zinc-900 text-purple-300 rounded border border-purple-900/60 font-mono font-bold"
                          >
                            {evalResult.completionPercentage}%
                          </span>
                        </div>
                      </td>

                      <td className="p-4 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectPia(pia);
                          }}
                          className="px-3 py-1 bg-zinc-800 hover:bg-purple-900 text-zinc-200 hover:text-purple-200 border border-zinc-700 rounded-lg text-xs transition font-medium"
                        >
                          Review
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                /* Fallback Rows when empty search or initial load */
                <>
                  <tr className="hover:bg-purple-950/20 transition">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center text-xs text-indigo-300 font-bold border border-indigo-700">
                          A
                        </div>
                        <div>
                          <div className="font-bold text-white">Acme Analytics AI</div>
                          <div className="text-[11px] text-zinc-500 font-mono">Exposed to AWS US-East</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-zinc-300">Cross-border customer telemetry model fine-tuning...</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-1.5 bg-purple-500 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-purple-500 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-purple-500 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-purple-500 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-zinc-800 rounded-sm"></div>
                        <span className="text-xs text-purple-400 ml-2 font-bold">High</span>
                      </div>
                    </td>
                    <td className="p-4 text-xs text-zinc-400 font-mono">Aug 02, 2026</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700 font-mono mr-1">AWS</span>
                      <span className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700 font-mono">Snowflake</span>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/30">In Review</span>
                    </td>
                    <td className="p-4 text-right">
                      <button onClick={onNewAssessment} className="px-3 py-1 bg-zinc-800 hover:bg-purple-900 text-zinc-200 border border-zinc-700 rounded-lg text-xs">Open</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-purple-950/20 transition">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-pink-900/50 flex items-center justify-center text-xs text-pink-300 font-bold border border-pink-700">
                          S
                        </div>
                        <div>
                          <div className="font-bold text-white">Synthetix HR Copilot</div>
                          <div className="text-[11px] text-zinc-500 font-mono">Internal Azure Tenant</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-zinc-300">Employee PII extraction for recruitment automation...</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-1.5 bg-pink-500 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-pink-500 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-pink-500 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-pink-500 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-pink-500 rounded-sm"></div>
                        <span className="text-xs text-pink-400 ml-2 font-bold">Critical</span>
                      </div>
                    </td>
                    <td className="p-4 text-xs text-zinc-400 font-mono">Aug 05, 2026</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700 font-mono mr-1">Azure AD</span>
                      <span className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700 font-mono">Workday</span>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-red-500/10 text-red-400 border border-red-500/30">Action Req.</span>
                    </td>
                    <td className="p-4 text-right">
                      <button onClick={onNavigateToGaps} className="px-3 py-1 bg-zinc-800 hover:bg-purple-900 text-zinc-200 border border-zinc-700 rounded-lg text-xs">Gaps</button>
                    </td>
                  </tr>

                  <tr className="hover:bg-purple-950/20 transition">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-900/50 flex items-center justify-center text-xs text-emerald-300 font-bold border border-emerald-700">
                          V
                        </div>
                        <div>
                          <div className="font-bold text-white">Vision AI OCR</div>
                          <div className="text-[11px] text-zinc-500 font-mono">Local Container Engine</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-zinc-300">ID Verification Document Ingestion & Classification...</td>
                    <td className="p-4">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-1.5 bg-emerald-500 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-zinc-800 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-zinc-800 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-zinc-800 rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-zinc-800 rounded-sm"></div>
                        <span className="text-xs text-emerald-400 ml-2 font-bold">Low</span>
                      </div>
                    </td>
                    <td className="p-4 text-xs text-zinc-400 font-mono">Aug 07, 2026</td>
                    <td className="p-4">
                      <span className="px-2 py-0.5 text-[10px] bg-zinc-800 text-zinc-300 rounded border border-zinc-700 font-mono">Local DB</span>
                    </td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Compliant</span>
                    </td>
                    <td className="p-4 text-right">
                      <button onClick={onNavigateToDirectory} className="px-3 py-1 bg-zinc-800 hover:bg-purple-900 text-zinc-200 border border-zinc-700 rounded-lg text-xs">Cockpit</button>
                    </td>
                  </tr>
                </>
              )}

            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
