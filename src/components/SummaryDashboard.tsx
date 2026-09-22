import React, { useState, useMemo } from 'react';
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
  ShieldAlert, 
  X,
  TrendingUp,
  FileDown,
  Loader2,
  Check,
  Info,
  Presentation
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip as ChartJSTooltip,
  Legend as ChartJSLegend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
} from 'chart.js';
import { Bar, Doughnut, Radar } from 'react-chartjs-2';
import { PIAAssessment, RemediationGap, AppUser, SystemSetupConfig } from '../types';
import { evaluateOverallPIAStatus } from '../utils/piaStatusLogic';
import { calculatePIARisk } from '../utils/riskCalculator';
import { generateSummaryPdfReport } from '../utils/pdfReportGenerator';
import { ComplianceRiskHeatmap } from './ComplianceRiskHeatmap';
import { RiskProgressionLineChart } from './RiskProgressionLineChart';
import { FrameworkRiskHeatmapWidget } from './FrameworkRiskHeatmapWidget';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  ChartJSTooltip,
  ChartJSLegend,
  ArcElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler
);

interface SummaryDashboardProps {
  pias: PIAAssessment[];
  gaps: RemediationGap[];
  onSelectPia: (pia: PIAAssessment) => void;
  onNewAssessment: () => void;
  onNavigateToGaps: () => void;
  onNavigateToDirectory: () => void;
  onNavigateToBenchmarking?: () => void;
  onNavigateToForecasting?: () => void;
  onNavigateToExecutive?: () => void;
  currentUser?: AppUser | null;
  systemSetup?: SystemSetupConfig;
}

export const SummaryDashboard: React.FC<SummaryDashboardProps> = ({
  pias,
  gaps,
  onSelectPia,
  onNewAssessment,
  onNavigateToGaps,
  onNavigateToDirectory,
  onNavigateToBenchmarking,
  onNavigateToForecasting,
  onNavigateToExecutive,
  currentUser,
  systemSetup,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeRiskFilter, setActiveRiskFilter] = useState<string | null>(null);
  const [riskTimeframe, setRiskTimeframe] = useState<'Today' | 'This Week' | 'All Time'>('This Week');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [pdfSuccess, setPdfSuccess] = useState(false);

  // Trigger formal PDF compliance snapshot generation via jsPDF
  const handleDownloadPdf = () => {
    try {
      setIsGeneratingPdf(true);
      setTimeout(() => {
        generateSummaryPdfReport({
          pias,
          gaps,
          organizationName: systemSetup?.organizationName || 'Glocal Privacy & AI Governance Directorate',
          generatedBy: currentUser?.fullName 
            ? `${currentUser.fullName} (${currentUser.role === 'admin' ? 'Lead DPO Auditor' : 'Privacy Lead'})`
            : 'Chief Privacy Officer / Lead DPO Auditor',
        });
        setIsGeneratingPdf(false);
        setPdfSuccess(true);
        setTimeout(() => setPdfSuccess(false), 4000);
      }, 150);
    } catch (err) {
      console.error('Error generating PDF compliance report:', err);
      setIsGeneratingPdf(false);
    }
  };

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

  // Filter PIAs based on search and selected risk level from heatmap
  const filteredPias = (pias || []).filter(pia => {
    if (!pia) return false;
    const term = (searchTerm || '').toLowerCase();
    const matchesSearch = (
      (pia.projectTitle || '').toLowerCase().includes(term) ||
      (pia.organization || '').toLowerCase().includes(term) ||
      (pia.projectOwner || '').toLowerCase().includes(term) ||
      (pia.projectDescription || '').toLowerCase().includes(term) ||
      (pia.dataFlowDescription || '').toLowerCase().includes(term) ||
      (pia.id || '').toLowerCase().includes(term) ||
      (pia.industrySector || '').toLowerCase().includes(term)
    );
    if (!matchesSearch) return false;

    if (activeRiskFilter) {
      const riskLevel = pia.riskResult?.riskLevel || calculatePIARisk(pia.answers || {}, pia.industrySector).riskLevel;
      if (riskLevel !== activeRiskFilter) return false;
    }

    return true;
  });

  // Chart.js Dataset & Configuration for Widget 1: Open PIA Risks by Classification
  const classificationBarData = useMemo(() => {
    const clouds = ['AWS Cloud', 'Azure Gov', 'GCP Vertex', 'On-Prem / Local'] as const;
    const piiCounts = [0, 0, 0, 0];
    const vendorCounts = [0, 0, 0, 0];
    const modelCounts = [0, 0, 0, 0];

    pias.forEach((pia, idx) => {
      let cloudIdx = idx % 4;
      const where = (pia.structuredDataFlow?.whereStored || '').toLowerCase();
      if (where.includes('aws')) cloudIdx = 0;
      else if (where.includes('azure')) cloudIdx = 1;
      else if (where.includes('vertex') || where.includes('gcp') || where.includes('google')) cloudIdx = 2;
      else if (where.includes('on-prem') || where.includes('slough') || where.includes('edinburgh') || where.includes('datacentre')) cloudIdx = 3;

      const piiScore = pia.answers?.['B2']?.score ?? 1;
      if (piiScore >= 3) piiCounts[cloudIdx]++;

      const vendorScore = Math.max(pia.answers?.['E1']?.score ?? 1, pia.answers?.['E3']?.score ?? 1);
      if (vendorScore >= 2) vendorCounts[cloudIdx]++;

      const isAI = pia.answers?.['A1']?.selectedLabel?.includes('AI') || (pia.answers?.['F4']?.score ?? 1) >= 2;
      if (isAI) modelCounts[cloudIdx]++;
    });

    return {
      labels: ['AWS Cloud', 'Azure Gov', 'GCP Vertex', 'On-Prem / Local'],
      datasets: [
        {
          label: 'PII Leakage',
          data: piiCounts,
          backgroundColor: '#f59e0b',
          borderRadius: { topLeft: 0, topRight: 0, bottomLeft: 4, bottomRight: 4 },
          barPercentage: 0.55,
        },
        {
          label: 'Vendor Sharing',
          data: vendorCounts,
          backgroundColor: '#a855f7',
          borderRadius: 0,
          barPercentage: 0.55,
        },
        {
          label: 'Model Retention',
          data: modelCounts,
          backgroundColor: '#ec4899',
          borderRadius: { topLeft: 4, topRight: 4, bottomLeft: 0, bottomRight: 0 },
          barPercentage: 0.55,
        },
      ],
    };
  }, [pias]);

  const classificationBarOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#09090b',
        borderColor: '#27272a',
        borderWidth: 1,
        titleFont: { size: 11, family: 'monospace' },
        bodyFont: { size: 11 },
        padding: 8,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: false },
        ticks: { color: '#a1a1aa', font: { size: 10, family: 'monospace' } },
        border: { display: false },
      },
      y: {
        stacked: true,
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#71717a', font: { size: 9, family: 'monospace' }, stepSize: 10 },
        border: { display: false },
      },
    },
  }), []);

  // Chart.js Dataset & Configuration for Widget 2: PIA Compliance Tactics / Controls
  const tacticsRadarData = useMemo(() => {
    let consentCount = 0;
    let scopeCount = 0;
    let crossBorderCount = 0;
    let minimizationCount = 0;
    let aiGovCount = 0;
    let securityCount = 0;

    pias.forEach(pia => {
      const a = pia.answers || {};
      if ((a['C1']?.score ?? 5) <= 3) consentCount++;
      if ((a['C4']?.score ?? 5) <= 2) scopeCount++;
      if ((a['E3']?.score ?? 5) <= 3) crossBorderCount++;
      if ((a['D1']?.score ?? 5) <= 2) minimizationCount++;
      if (a['A1']?.selectedLabel?.includes('AI') ? (a['F4']?.score ?? 5) <= 3 : true) aiGovCount++;
      if ((a['I1']?.score ?? 5) <= 2 && (a['I3']?.score ?? 5) <= 2) securityCount++;
    });

    return {
      labels: ['Consent', 'Scope', 'Cross-Border', 'Minimization', 'AI Governance', 'Security'],
      datasets: [
        {
          label: 'Active Controls',
          data: [consentCount, scopeCount, crossBorderCount, minimizationCount, aiGovCount, securityCount],
          backgroundColor: 'rgba(168, 85, 247, 0.25)',
          borderColor: '#c084fc',
          borderWidth: 2,
          pointBackgroundColor: '#c084fc',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
        },
      ],
    };
  }, [pias]);

  const tacticsRadarOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#09090b',
        borderColor: '#27272a',
        borderWidth: 1,
        titleFont: { size: 11 },
        bodyFont: { size: 10, family: 'monospace' },
      },
    },
    scales: {
      r: {
        angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
        grid: { color: 'rgba(255, 255, 255, 0.06)' },
        pointLabels: {
          color: '#a1a1aa',
          font: { size: 9 },
        },
        ticks: { display: false, backdropColor: 'transparent' },
        suggestedMin: 0,
        suggestedMax: Math.max(20, pias.length),
      },
    },
  }), [pias.length]);

  // Chart.js Dataset & Configuration for Widget 3: PIA Status Overview
  const statusDoughnutData = useMemo(() => {
    const draftCount = Math.max(0, pias.length - approvedAssessments - openAssessments);
    return {
      labels: ['Approved & Signed', 'Open Reviews', 'Under Draft'],
      datasets: [
        {
          data: [approvedAssessments, openAssessments, draftCount],
          backgroundColor: ['#a855f7', '#f59e0b', '#3f3f46'],
          borderColor: '#12151e',
          borderWidth: 2,
          hoverOffset: 4,
        },
      ],
    };
  }, [pias.length, approvedAssessments, openAssessments]);

  const statusDoughnutOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    cutout: '72%',
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: '#09090b',
        borderColor: '#27272a',
        borderWidth: 1,
        titleFont: { size: 11 },
        bodyFont: { size: 11, family: 'monospace' },
      },
    },
  }), []);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      
      {/* Top Banner / Hero Bar */}
      <div className="bg-zinc-900/90 border border-zinc-800 p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4 w-full max-w-full overflow-hidden relative">
        <div className="group relative cursor-default min-w-0 max-w-full">
          <div className="flex items-center space-x-2 mb-1.5 flex-wrap gap-y-1">
            <span className="px-2.5 py-0.5 bg-indigo-950/80 text-indigo-300 border border-indigo-700/60 rounded-full text-xs font-mono font-bold tracking-wide">
              GLOCAL PIA GOVERNANCE
            </span>
            <span className="text-xs text-zinc-400 font-mono">ISO 42001 & DPDPA COCKPIT</span>
          </div>
          <h1 
            title="Real-time telemetry and risk classification for third-party vendors, AI model deployments, and personal data pipelines."
            className="text-xl sm:text-2xl font-semibold text-zinc-100 group-hover:text-white tracking-tight inline-flex items-center gap-2 transition-colors cursor-help flex-wrap"
          >
            <span className="text-[12px] border-[3px] border-transparent leading-[17px]">Privacy Impact Assessment (PIA) Summary Dashboard</span>
            <Info className="w-4 h-4 text-zinc-500 group-hover:text-indigo-400 transition-colors shrink-0" />
          </h1>
          <p 
            title="Real-time telemetry and risk classification for third-party vendors, AI model deployments, and personal data pipelines."
            className="text-xs sm:text-sm text-zinc-300 mt-0 max-h-0 opacity-0 overflow-hidden group-hover:mt-1.5 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-300 ease-out max-w-2xl leading-relaxed flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0"></span>
            <span>Real-time telemetry and risk classification for third-party vendors, AI model deployments, and personal data pipelines.</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5 w-full xl:w-auto max-w-full justify-start xl:justify-end">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search assessments, models, vendors..."
              className="bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-4 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-indigo-500 w-52 sm:w-60 transition"
            />
          </div>
          {onNavigateToBenchmarking && (
            <button
              onClick={onNavigateToBenchmarking}
              className="bg-zinc-900 hover:bg-zinc-850 text-zinc-200 border border-zinc-750 text-xs font-semibold px-3 py-1.5 rounded-xl transition shadow-sm flex items-center gap-1.5"
              title="Compare aggregate risk levels and gap closure rates across banking sub-categories"
            >
              <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
              <span>Sector Benchmarking</span>
            </button>
          )}
          {onNavigateToForecasting && (
            <button
              onClick={onNavigateToForecasting}
              className="bg-indigo-950/60 hover:bg-indigo-900/60 text-indigo-200 border border-indigo-700/70 text-xs font-semibold px-3 py-1.5 rounded-xl transition shadow-sm flex items-center gap-1.5"
              title="Project future risk scores based on remediation velocity & simulate AI systems"
            >
              <Activity className="w-3.5 h-3.5 text-indigo-400" />
              <span>Predictive Forecasting</span>
            </button>
          )}
          {onNavigateToExecutive && (
            <button
              onClick={onNavigateToExecutive}
              className="bg-purple-950/60 hover:bg-purple-900/70 text-purple-200 border border-purple-750 text-xs font-semibold px-3 py-1.5 rounded-xl transition shadow-sm flex items-center gap-1.5"
              title="CISO / DPO Level Executive Summary & Full-Screen Presentation"
            >
              <Presentation className="w-3.5 h-3.5 text-purple-400" />
              <span>Executive Briefing</span>
            </button>
          )}

          {/* Download PDF Report Button */}
          <button
            id="download-pdf-report-btn"
            onClick={handleDownloadPdf}
            disabled={isGeneratingPdf}
            className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all duration-150 shadow-sm flex items-center gap-1.5 border ${
              pdfSuccess
                ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/80'
                : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border-zinc-700/80 hover:border-zinc-600'
            } disabled:opacity-50`}
            title="Download formal compliance snapshot report based on current PIA & remediation data via jsPDF"
          >
            {isGeneratingPdf ? (
              <>
                <Loader2 className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
                <span>Generating PDF...</span>
              </>
            ) : pdfSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>PDF Downloaded</span>
              </>
            ) : (
              <>
                <FileDown className="w-3.5 h-3.5 text-indigo-400" />
                <span>Download PDF Report</span>
              </>
            )}
          </button>

          <button
            onClick={onNewAssessment}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl transition-all duration-150 shadow-md shadow-indigo-950/50 flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Assessment</span>
          </button>
        </div>
      </div>

      {/* Top Metrics Row: 3 Core Governance Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Widget 1: Open PIA Risks by Classification */}
        <div id="widget-open-pia-risks" className="bg-[#12151e] border border-[#1e2330] hover:border-purple-500/40 transition p-5 rounded-2xl shadow-xl flex flex-col justify-between backdrop-blur-sm ring-1 ring-white/5">
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-purple-400" />
                <span>Open PIA Risks by Classification</span>
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/80">
                  Chart.js
                </span>
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
            </div>
            
            {/* Category Legend */}
            <div className="flex flex-wrap gap-3 text-[11px] text-zinc-400 mb-2">
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

          {/* React-Chartjs-2 Stacked Bar Chart Visualization */}
          <div className="h-36 pt-1 border-b border-zinc-800/60 pb-1 relative">
            <Bar data={classificationBarData} options={classificationBarOptions} />
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
        <div id="widget-compliance-tactics-radar" className="bg-[#12151e] border border-[#1e2330] hover:border-purple-500/40 transition p-5 rounded-2xl shadow-xl flex flex-col justify-between backdrop-blur-sm ring-1 ring-white/5">
          <div className="flex justify-between items-center mb-1">
            <div>
              <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                <span>PIA Compliance Tactics</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/80">
                  Chart.js
                </span>
              </h3>
              <p className="text-[10px] text-zinc-400">NIST SP 800-53 / ISO 42001 Controls</p>
            </div>
            <button 
              onClick={onNavigateToDirectory}
              className="text-xs text-purple-400 hover:text-purple-300 transition font-medium"
            >
              View All
            </button>
          </div>

          {/* React-Chartjs-2 Radar Visualization */}
          <div className="h-40 relative flex items-center justify-center my-0.5">
            <Radar data={tacticsRadarData} options={tacticsRadarOptions} />
            <div className="absolute bottom-0 right-1 pointer-events-none">
              <span className="text-[9px] font-mono font-bold text-purple-300 bg-purple-950/90 px-2 py-0.5 rounded-full border border-purple-700/60 shadow-md">
                354 Controls Active
              </span>
            </div>
          </div>

          <div className="flex justify-around text-[10px] text-zinc-400 mt-1 border-t border-zinc-800/60 pt-2 font-mono">
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-amber-400 mr-1" /> Consent
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-purple-400 mr-1" /> Scope
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-indigo-400 mr-1" /> Cross-Border
            </span>
            <span className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-pink-400 mr-1" /> Minimization
            </span>
          </div>
        </div>

        {/* Widget 3: Assessment Status Overview */}
        <div id="widget-pia-status-doughnut" className="bg-[#12151e] border border-[#1e2330] hover:border-purple-500/40 transition p-5 rounded-2xl shadow-xl flex flex-col justify-between backdrop-blur-sm ring-1 ring-white/5">
          <div>
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                <span>PIA Status</span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-purple-950/80 text-purple-300 border border-purple-800/80">
                  Chart.js
                </span>
              </h3>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                {evaluatedPercentage}% Evaluated
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 my-2 items-center">
              <div className="h-28 relative flex items-center justify-center">
                <Doughnut data={statusDoughnutData} options={statusDoughnutOptions} />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-sm font-black text-white leading-none">{evaluatedPercentage}%</span>
                  <span className="text-[8px] font-mono text-zinc-400 uppercase">Evaluated</span>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 text-[11px] flex items-center">
                      <span className="w-2 h-2 rounded-full bg-amber-500 mr-1.5" /> Open Reviews
                    </span>
                    <span className="font-bold text-white font-mono">{openAssessments}</span>
                  </div>
                </div>
                <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800/80">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400 text-[11px] flex items-center">
                      <span className="w-2 h-2 rounded-full bg-purple-500 mr-1.5" /> Approved
                    </span>
                    <span className="font-bold text-white font-mono">{approvedAssessments}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Mini Sparkline / Trend Bar */}
            <div className="w-full bg-zinc-900 rounded-full h-1.5 mb-2 overflow-hidden border border-zinc-800">
              <div 
                className="bg-gradient-to-r from-amber-500 via-purple-500 to-emerald-400 h-1.5 rounded-full transition-all duration-500" 
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
 
      {/* Visual Heatmap Widget: Regulatory Framework vs Risk Score (Custom SVG Styling) */}
      <FrameworkRiskHeatmapWidget
        pias={pias}
        onSelectPia={onSelectPia}
        onFilterByRisk={setActiveRiskFilter}
      />

      {/* Visual Compliance Risk Heatmap Section */}
      <ComplianceRiskHeatmap
        pias={pias}
        gaps={gaps}
        onSelectPia={onSelectPia}
        activeRiskFilter={activeRiskFilter}
        onFilterByRisk={setActiveRiskFilter}
      />

      {/* Historical Progression of Aggregate Risk Scores (Recharts & React-Chartjs-2) */}
      <RiskProgressionLineChart
        pias={pias}
        gaps={gaps}
        onSelectPia={onSelectPia}
      />

      {/* Main Section: Active Privacy Impact Reviews Table */}
      <section className="bg-[#12151e] border border-[#1e2330] rounded-2xl p-6 shadow-xl">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-purple-400" />
                <span>Active Privacy Impact Reviews</span>
              </h2>
              {activeRiskFilter && (
                <div className="flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-purple-950 text-purple-300 border border-purple-800">
                  <span>FILTER: {activeRiskFilter.toUpperCase()} RISK</span>
                  <button 
                    onClick={() => setActiveRiskFilter(null)}
                    className="hover:text-white"
                    title="Clear filter"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Evaluated third-party vendors, models, and personal data processing pipelines ({filteredPias.length} shown)
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={handleDownloadPdf}
              disabled={isGeneratingPdf}
              className={`text-xs font-semibold px-3 py-1.5 rounded-xl transition-all duration-150 shadow-sm flex items-center gap-1.5 border ${
                pdfSuccess
                  ? 'bg-emerald-950/80 text-emerald-300 border-emerald-700/80'
                  : 'bg-zinc-900 hover:bg-zinc-850 text-zinc-300 hover:text-white border-zinc-750'
              } disabled:opacity-50`}
              title="Download formal compliance snapshot report in PDF format via jsPDF"
            >
              {isGeneratingPdf ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
                  <span>Generating...</span>
                </>
              ) : pdfSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Downloaded</span>
                </>
              ) : (
                <>
                  <FileDown className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Download PDF</span>
                </>
              )}
            </button>
            <button
              onClick={onNewAssessment}
              className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3.5 py-1.5 rounded-xl transition shadow-md shadow-indigo-950/50 flex items-center gap-1.5"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>New Assessment</span>
            </button>
          </div>
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
              ) : pias.length > 0 ? (
                <tr>
                  <td colSpan={7} className="p-8 text-center text-zinc-400">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <AlertTriangle className="w-6 h-6 text-amber-400" />
                      <p className="text-sm font-medium text-zinc-200">No assessments found matching the active filter or search</p>
                      {activeRiskFilter && (
                        <button
                          onClick={() => setActiveRiskFilter(null)}
                          className="mt-2 text-xs text-purple-400 hover:text-purple-300 underline font-mono"
                        >
                          Clear {activeRiskFilter} Risk Filter
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ) : (
                /* Fallback Rows when initial empty load */
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
