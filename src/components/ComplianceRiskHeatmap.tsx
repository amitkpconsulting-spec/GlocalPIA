import React, { useState, useMemo } from 'react';
import { 
  Flame, 
  ShieldAlert, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Layers, 
  Grid, 
  BarChart2, 
  Filter, 
  ArrowUpRight, 
  ChevronRight, 
  SlidersHorizontal,
  ExternalLink,
  Shield,
  HelpCircle,
  X,
  Activity
} from 'lucide-react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip as ChartJSTooltip,
  Legend as ChartJSLegend,
} from 'chart.js';
import { Scatter, Bar } from 'react-chartjs-2';
import { PIAAssessment, RiskLevel, RemediationGap } from '../types';
import { calculatePIARisk } from '../utils/riskCalculator';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  ChartJSTooltip,
  ChartJSLegend
);

interface ComplianceRiskHeatmapProps {
  pias: PIAAssessment[];
  gaps?: RemediationGap[];
  onSelectPia: (pia: PIAAssessment) => void;
  activeRiskFilter: string | null;
  onFilterByRisk: (level: string | null) => void;
}

interface ProcessedPiaRisk {
  pia: PIAAssessment;
  finalScore: number;
  baseScore: number;
  impactScore: number;
  likelihoodScore: number;
  impactCoord: number; // 1 to 5
  likelihoodCoord: number; // 1 to 5
  riskLevel: RiskLevel;
  totalMultiplier: number;
  sectionProfiles: {
    dataProcessingRisk: number;
    legalComplianceRisk: number;
    dataSharingRisk: number;
    securityRisk: number;
    governanceRisk: number;
  };
  hasGaps: boolean;
  openGapsCount: number;
}

// 5x5 Matrix definition
const IMPACT_LABELS = [
  { val: 1, name: 'Negligible', desc: 'Minimal/no privacy impact' },
  { val: 2, name: 'Minor', desc: 'Limited personal data impact' },
  { val: 3, name: 'Moderate', desc: 'Noticeable privacy friction' },
  { val: 4, name: 'Major', desc: 'Significant rights infringement' },
  { val: 5, name: 'Severe', desc: 'Catastrophic rights violation' },
];

const LIKELIHOOD_LABELS = [
  { val: 5, name: 'Almost Certain', desc: '> 80% probability' },
  { val: 4, name: 'Likely', desc: '50% - 80% probability' },
  { val: 3, name: 'Possible', desc: '20% - 50% probability' },
  { val: 2, name: 'Unlikely', desc: '5% - 20% probability' },
  { val: 1, name: 'Rare', desc: '< 5% probability' },
];

// Helper to get standard matrix base cell risk
const getMatrixCellRisk = (impact: number, likelihood: number): {
  level: RiskLevel;
  score: number;
  colorClass: string;
  badgeClass: string;
} => {
  const score = impact * likelihood;
  if (score >= 20) {
    return { 
      level: 'Critical', 
      score, 
      colorClass: 'from-rose-950/70 to-red-900/50 border-rose-500/60 hover:border-rose-400', 
      badgeClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40' 
    };
  }
  if (score >= 12) {
    return { 
      level: 'High', 
      score, 
      colorClass: 'from-amber-950/70 to-orange-900/50 border-amber-500/60 hover:border-amber-400', 
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
    };
  }
  if (score >= 6) {
    return { 
      level: 'Medium', 
      score, 
      colorClass: 'from-purple-950/70 to-indigo-900/50 border-purple-500/50 hover:border-purple-400', 
      badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40' 
    };
  }
  return { 
    level: 'Low', 
    score, 
    colorClass: 'from-emerald-950/70 to-teal-900/50 border-emerald-500/50 hover:border-emerald-400', 
    badgeClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
  };
};

export const ComplianceRiskHeatmap: React.FC<ComplianceRiskHeatmapProps> = ({
  pias,
  gaps = [],
  onSelectPia,
  activeRiskFilter,
  onFilterByRisk,
}) => {
  const [activeTab, setActiveTab] = useState<'matrix' | 'domainHeatmap' | 'cards'>('matrix');
  const [matrixMode, setMatrixMode] = useState<'grid' | 'chartjs'>('grid');
  const [selectedCell, setSelectedCell] = useState<{ impact: number; likelihood: number } | null>(null);
  const [inspectPia, setInspectPia] = useState<ProcessedPiaRisk | null>(null);

  // Process all PIAs with fallback to dynamic risk calculator
  const processedPias: ProcessedPiaRisk[] = useMemo(() => {
    return pias.map((pia) => {
      let riskResult = pia.riskResult;
      if (!riskResult || !riskResult.finalRiskScore) {
        riskResult = calculatePIARisk(pia.answers || {}, pia.industrySector);
      }

      const impact = riskResult.impactScore || 1.0;
      const likelihood = riskResult.likelihoodScore || 1.0;
      const finalScore = Math.round((riskResult.finalRiskScore || 1.0) * 10) / 10;
      const baseScore = Math.round((riskResult.baseRiskScore || impact * likelihood) * 10) / 10;

      // Coordinate bins (1 to 5)
      const impactCoord = Math.min(5, Math.max(1, Math.round(impact)));
      const likelihoodCoord = Math.min(5, Math.max(1, Math.round(likelihood)));

      // Associated gaps
      const matchingGaps = gaps.filter(g => g.piaId === pia.id && g.status === 'OPEN');

      return {
        pia,
        finalScore,
        baseScore,
        impactScore: impact,
        likelihoodScore: likelihood,
        impactCoord,
        likelihoodCoord,
        riskLevel: riskResult.riskLevel || 'Low',
        totalMultiplier: riskResult.appliedModifiers?.totalMultiplier || 1.0,
        sectionProfiles: riskResult.sectionRiskProfiles || {
          dataProcessingRisk: 1.0,
          legalComplianceRisk: 1.0,
          dataSharingRisk: 1.0,
          securityRisk: 1.0,
          governanceRisk: 1.0,
        },
        hasGaps: matchingGaps.length > 0,
        openGapsCount: matchingGaps.length,
      };
    });
  }, [pias, gaps]);

  // Aggregate stats across evaluated PIAs
  const stats = useMemo(() => {
    const total = processedPias.length;
    const critical = processedPias.filter(p => p.riskLevel === 'Critical').length;
    const high = processedPias.filter(p => p.riskLevel === 'High').length;
    const medium = processedPias.filter(p => p.riskLevel === 'Medium').length;
    const low = processedPias.filter(p => p.riskLevel === 'Low').length;
    
    const avgScore = total > 0 
      ? Math.round((processedPias.reduce((acc, p) => acc + p.finalScore, 0) / total) * 10) / 10
      : 0;

    const highestRiskPia = processedPias.reduce<ProcessedPiaRisk | null>((max, p) => {
      if (!max || p.finalScore > max.finalScore) return p;
      return max;
    }, null);

    return { total, critical, high, medium, low, avgScore, highestRiskPia };
  }, [processedPias]);

  // Cell lookup map: `${likelihood}_${impact}` -> ProcessedPiaRisk[]
  const matrixPias = useMemo(() => {
    const map = new Map<string, ProcessedPiaRisk[]>();
    processedPias.forEach(p => {
      const key = `${p.likelihoodCoord}_${p.impactCoord}`;
      const list = map.get(key) || [];
      list.push(p);
      map.set(key, list);
    });
    return map;
  }, [processedPias]);

  // Distinct sectors present
  const sectors = useMemo(() => {
    const set = new Set<string>();
    processedPias.forEach(p => {
      set.add(p.pia.industrySector || 'banking');
    });
    return Array.from(set);
  }, [processedPias]);

  // Average risk by Sector and Domain
  const sectorDomainHeatmap = useMemo(() => {
    const domains = [
      { id: 'dataProcessingRisk', label: 'Data Processing Scope', key: 'dataProcessingRisk' as const },
      { id: 'legalComplianceRisk', label: 'Lawful Basis & Rights', key: 'legalComplianceRisk' as const },
      { id: 'dataSharingRisk', label: 'Vendor & Cross-Border', key: 'dataSharingRisk' as const },
      { id: 'securityRisk', label: 'Technical Security', key: 'securityRisk' as const },
      { id: 'governanceRisk', label: 'Governance & RoPA', key: 'governanceRisk' as const },
    ];

    const rows = sectors.map(sector => {
      const sectorPias = processedPias.filter(p => (p.pia.industrySector || 'banking') === sector);
      const count = sectorPias.length;

      const domainScores = domains.map(d => {
        const sum = sectorPias.reduce((acc, p) => acc + (p.sectionProfiles[d.key] || 1.0), 0);
        const avg = count > 0 ? Math.round((sum / count) * 10) / 10 : 1.0;
        return {
          domainId: d.id,
          avg,
          count,
        };
      });

      const avgFinal = count > 0
        ? Math.round((sectorPias.reduce((acc, p) => acc + p.finalScore, 0) / count) * 10) / 10
        : 1.0;

      return {
        sector,
        count,
        domainScores,
        avgFinal,
      };
    });

    return { domains, rows };
  }, [sectors, processedPias]);

  // Selected cell items for drawer/modal
  const selectedCellPias = useMemo(() => {
    if (!selectedCell) return [];
    return matrixPias.get(`${selectedCell.likelihood}_${selectedCell.impact}`) || [];
  }, [selectedCell, matrixPias]);

  // Chart.js Scatter dataset for Interactive Matrix
  const scatterChartData = useMemo(() => {
    return {
      datasets: [
        {
          label: 'Critical Risk',
          data: processedPias
            .filter(p => p.riskLevel === 'Critical')
            .map(p => ({ x: p.impactCoord, y: p.likelihoodCoord, pia: p.pia, score: p.finalScore })),
          backgroundColor: 'rgba(244, 63, 94, 0.85)',
          borderColor: '#f43f5e',
          pointRadius: 9,
          pointHoverRadius: 13,
        },
        {
          label: 'High Risk',
          data: processedPias
            .filter(p => p.riskLevel === 'High')
            .map(p => ({ x: p.impactCoord, y: p.likelihoodCoord, pia: p.pia, score: p.finalScore })),
          backgroundColor: 'rgba(245, 158, 11, 0.85)',
          borderColor: '#f59e0b',
          pointRadius: 8,
          pointHoverRadius: 12,
        },
        {
          label: 'Medium Risk',
          data: processedPias
            .filter(p => p.riskLevel === 'Medium')
            .map(p => ({ x: p.impactCoord, y: p.likelihoodCoord, pia: p.pia, score: p.finalScore })),
          backgroundColor: 'rgba(168, 85, 247, 0.85)',
          borderColor: '#a855f7',
          pointRadius: 7,
          pointHoverRadius: 11,
        },
        {
          label: 'Low Risk',
          data: processedPias
            .filter(p => p.riskLevel === 'Low')
            .map(p => ({ x: p.impactCoord, y: p.likelihoodCoord, pia: p.pia, score: p.finalScore })),
          backgroundColor: 'rgba(16, 185, 129, 0.85)',
          borderColor: '#10b981',
          pointRadius: 6,
          pointHoverRadius: 10,
        },
      ],
    };
  }, [processedPias]);

  const scatterChartOptions = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    onClick: (_event: any, elements: any[]) => {
      if (elements && elements.length > 0) {
        const { datasetIndex, index } = elements[0];
        const dataset = scatterChartData.datasets[datasetIndex];
        const point = dataset?.data[index] as any;
        if (point?.pia) {
          onSelectPia(point.pia);
        }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: '#a1a1aa',
          font: { size: 11, family: 'monospace' },
          boxWidth: 12,
        },
      },
      tooltip: {
        backgroundColor: '#09090b',
        borderColor: '#27272a',
        borderWidth: 1,
        titleFont: { size: 12, weight: 'bold' as const },
        bodyFont: { size: 11, family: 'monospace' },
        padding: 10,
        callbacks: {
          title: (tooltipItems: any[]) => {
            const item = tooltipItems[0];
            const raw = item?.raw as any;
            return raw?.pia?.projectTitle || 'PIA Assessment';
          },
          label: (context: any) => {
            const raw = context.raw as any;
            return [
              `ID: ${raw?.pia?.id}`,
              `Impact: ${raw?.x} | Likelihood: ${raw?.y}`,
              `Aggregate Score: ${raw?.score} / 25`,
              'Click point to open review',
            ];
          },
        },
      },
    },
    scales: {
      x: {
        min: 0.5,
        max: 5.5,
        title: {
          display: true,
          text: 'IMPACT SEVERITY (1 to 5) →',
          color: '#a1a1aa',
          font: { size: 11, weight: 'bold' as const, family: 'monospace' },
        },
        grid: { color: 'rgba(255, 255, 255, 0.06)' },
        ticks: { color: '#71717a', stepSize: 1 },
      },
      y: {
        min: 0.5,
        max: 5.5,
        title: {
          display: true,
          text: 'LIKELIHOOD (1 to 5) ↑',
          color: '#a1a1aa',
          font: { size: 11, weight: 'bold' as const, family: 'monospace' },
        },
        grid: { color: 'rgba(255, 255, 255, 0.06)' },
        ticks: { color: '#71717a', stepSize: 1 },
      },
    },
  }), [scatterChartData, onSelectPia]);

  return (
    <div className="bg-[#12151e] border border-[#1e2330] rounded-2xl p-6 shadow-xl space-y-6">
      
      {/* 1. Header & Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-zinc-800/80 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 bg-rose-950/70 border border-rose-500/40 rounded-lg text-rose-400">
              <Flame className="w-4 h-4" />
            </span>
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span>Compliance Risk Heatmap</span>
              <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-purple-950/70 text-purple-300 border border-purple-800/60">
                AGGREGATE SCORES
              </span>
            </h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
            Live ISO 31000 / ISO 42001 risk matrix color-coding PIAs based on inherent severity, likelihood, and multiplier penalties.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-xs self-stretch sm:self-auto justify-between sm:justify-start">
          <button
            onClick={() => setActiveTab('matrix')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
              activeTab === 'matrix'
                ? 'bg-purple-600 text-white shadow'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>5×5 Matrix</span>
          </button>

          <button
            onClick={() => setActiveTab('domainHeatmap')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
              activeTab === 'domainHeatmap'
                ? 'bg-purple-600 text-white shadow'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" />
            <span>Sector Vectors</span>
          </button>

          <button
            onClick={() => setActiveTab('cards')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium transition ${
              activeTab === 'cards'
                ? 'bg-purple-600 text-white shadow'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>PIA Tiles</span>
          </button>
        </div>
      </div>

      {/* 2. Key Metrics & Risk Filter Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        
        {/* Total PIAs Filter Button */}
        <button
          onClick={() => onFilterByRisk(null)}
          className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
            activeRiskFilter === null 
              ? 'bg-zinc-800/80 border-purple-500 ring-2 ring-purple-500/30' 
              : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-800/40'
          }`}
        >
          <div className="text-[10px] text-zinc-400 font-mono flex items-center justify-between">
            <span>ALL ASSESSMENTS</span>
            {activeRiskFilter === null && <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />}
          </div>
          <div className="text-xl font-black text-white mt-1">{stats.total}</div>
          <div className="text-[10px] text-zinc-500 mt-0.5">Avg Score: <strong className="text-zinc-300">{stats.avgScore}/25</strong></div>
        </button>

        {/* Critical Risk Filter */}
        <button
          onClick={() => onFilterByRisk(activeRiskFilter === 'Critical' ? null : 'Critical')}
          className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
            activeRiskFilter === 'Critical' 
              ? 'bg-rose-950/60 border-rose-500 ring-2 ring-rose-500/30' 
              : 'bg-zinc-900/50 border-zinc-800 hover:bg-rose-950/20'
          }`}
        >
          <div className="text-[10px] text-rose-400 font-mono flex items-center justify-between">
            <span>CRITICAL (20-25)</span>
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          </div>
          <div className="text-xl font-black text-rose-400 mt-1">{stats.critical}</div>
          <div className="text-[10px] text-zinc-500 mt-0.5">Mandatory Escalation</div>
        </button>

        {/* High Risk Filter */}
        <button
          onClick={() => onFilterByRisk(activeRiskFilter === 'High' ? null : 'High')}
          className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
            activeRiskFilter === 'High' 
              ? 'bg-amber-950/60 border-amber-500 ring-2 ring-amber-500/30' 
              : 'bg-zinc-900/50 border-zinc-800 hover:bg-amber-950/20'
          }`}
        >
          <div className="text-[10px] text-amber-400 font-mono flex items-center justify-between">
            <span>HIGH (12-19.9)</span>
            <span className="w-2 h-2 rounded-full bg-amber-500" />
          </div>
          <div className="text-xl font-black text-amber-400 mt-1">{stats.high}</div>
          <div className="text-[10px] text-zinc-500 mt-0.5">Remediation Required</div>
        </button>

        {/* Medium Risk Filter */}
        <button
          onClick={() => onFilterByRisk(activeRiskFilter === 'Medium' ? null : 'Medium')}
          className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
            activeRiskFilter === 'Medium' 
              ? 'bg-purple-950/60 border-purple-500 ring-2 ring-purple-500/30' 
              : 'bg-zinc-900/50 border-zinc-800 hover:bg-purple-950/20'
          }`}
        >
          <div className="text-[10px] text-purple-400 font-mono flex items-center justify-between">
            <span>MEDIUM (6-11.9)</span>
            <span className="w-2 h-2 rounded-full bg-purple-500" />
          </div>
          <div className="text-xl font-black text-purple-400 mt-1">{stats.medium}</div>
          <div className="text-[10px] text-zinc-500 mt-0.5">Routine Controls</div>
        </button>

        {/* Low Risk Filter */}
        <button
          onClick={() => onFilterByRisk(activeRiskFilter === 'Low' ? null : 'Low')}
          className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
            activeRiskFilter === 'Low' 
              ? 'bg-emerald-950/60 border-emerald-500 ring-2 ring-emerald-500/30' 
              : 'bg-zinc-900/50 border-zinc-800 hover:bg-emerald-950/20'
          }`}
        >
          <div className="text-[10px] text-emerald-400 font-mono flex items-center justify-between">
            <span>LOW (1-5.9)</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <div className="text-xl font-black text-emerald-400 mt-1">{stats.low}</div>
          <div className="text-[10px] text-zinc-500 mt-0.5">Compliant / Negligible</div>
        </button>

        {/* Peak Risk Spotlight Card */}
        <div className="p-3 rounded-xl border border-zinc-800 bg-zinc-950/70 flex flex-col justify-between">
          <div className="text-[10px] text-zinc-400 font-mono flex items-center justify-between">
            <span>HIGHEST EXPOSURE</span>
            <ShieldAlert className="w-3.5 h-3.5 text-rose-400" />
          </div>
          {stats.highestRiskPia ? (
            <div>
              <div className="text-xs font-bold text-white truncate" title={stats.highestRiskPia.pia.projectTitle}>
                {stats.highestRiskPia.pia.projectTitle}
              </div>
              <div className="text-[10px] text-rose-400 font-mono font-bold mt-0.5">
                Score: {stats.highestRiskPia.finalScore} (×{stats.highestRiskPia.totalMultiplier})
              </div>
            </div>
          ) : (
            <div className="text-xs text-zinc-500 italic">No PIAs recorded</div>
          )}
        </div>

      </div>

      {/* Active Filter Banner if set */}
      {activeRiskFilter && (
        <div className="flex items-center justify-between bg-purple-950/40 border border-purple-500/40 px-4 py-2 rounded-xl text-xs text-purple-200">
          <div className="flex items-center space-x-2">
            <Filter className="w-3.5 h-3.5 text-purple-400" />
            <span>
              Filtering dashboard reviews by: <strong className="text-white font-mono uppercase">{activeRiskFilter} RISK</strong> ({
                processedPias.filter(p => p.riskLevel === activeRiskFilter).length
              } assessment(s))
            </span>
          </div>
          <button 
            onClick={() => onFilterByRisk(null)}
            className="flex items-center space-x-1 text-purple-300 hover:text-white underline text-[11px]"
          >
            <span>Reset filter</span>
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* 3. TAB 1: 5x5 Likelihood vs Impact Matrix */}
      {activeTab === 'matrix' && (
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-xs text-zinc-400 gap-3">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-zinc-200">Interactive 5×5 Risk Matrix</span>
              <span className="text-zinc-500">•</span>
              <span>Click any grid cell to view assessments or select a PIA chip directly</span>
            </div>

            <div className="flex items-center gap-4 flex-wrap">
              {/* Mode Switcher */}
              <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-[11px] font-mono">
                <button
                  onClick={() => setMatrixMode('grid')}
                  className={`px-3 py-1 rounded-lg transition font-medium ${
                    matrixMode === 'grid'
                      ? 'bg-purple-600 text-white shadow'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  5×5 Grid
                </button>
                <button
                  onClick={() => setMatrixMode('chartjs')}
                  className={`px-3 py-1 rounded-lg transition font-medium flex items-center gap-1.5 ${
                    matrixMode === 'chartjs'
                      ? 'bg-purple-600 text-white shadow'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Activity className="w-3.5 h-3.5 text-purple-300" />
                  <span>Chart.js Matrix</span>
                </button>
              </div>
              
              {/* Legend */}
              <div className="flex items-center gap-3 text-[11px] font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" /> Low (1-5)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-purple-500" /> Med (6-11)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" /> High (12-19)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-sm bg-rose-500" /> Critical (20-25)
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="min-w-[720px] bg-gradient-to-b from-zinc-950/95 via-[#0c0e15] to-zinc-950/95 border border-[#23293a] hover:border-purple-500/30 transition duration-300 rounded-2xl p-6 shadow-2xl backdrop-blur-md ring-1 ring-white/5">
              
              {matrixMode === 'chartjs' ? (
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-zinc-800/80">
                    <div>
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <span>ISO 31000 Risk Coordinate Matrix</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800">
                          React-Chartjs-2
                        </span>
                      </h4>
                      <p className="text-[11px] text-zinc-400 mt-0.5">
                        Plotted by Impact Severity (X-axis) vs Likelihood (Y-axis). Click any data point to open its comprehensive assessment.
                      </p>
                    </div>
                  </div>
                  <div className="h-80 w-full relative pt-2">
                    <Scatter data={scatterChartData} options={scatterChartOptions} />
                  </div>
                </div>
              ) : (
                <>
              
              {/* Top X-Axis Header (Impact) */}
              <div className="mb-2 text-center">
                <span className="text-xs font-mono font-bold text-zinc-300 tracking-wider uppercase bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">
                  IMPACT SEVERITY (I) →
                </span>
              </div>

              {/* Column labels for Impact (1 to 5) */}
              <div className="grid grid-cols-6 gap-2 mb-2 text-center">
                <div className="text-[11px] font-mono font-bold text-zinc-500 flex items-center justify-center">
                  LIKELIHOOD ↓
                </div>
                {IMPACT_LABELS.map(col => (
                  <div key={col.val} className="text-center p-1">
                    <div className="text-xs font-bold text-zinc-200">{col.val} - {col.name}</div>
                    <div className="text-[9px] text-zinc-500 truncate">{col.desc}</div>
                  </div>
                ))}
              </div>

              {/* 5 Rows for Likelihood (5 down to 1) */}
              <div className="space-y-2">
                {LIKELIHOOD_LABELS.map(row => (
                  <div key={row.val} className="grid grid-cols-6 gap-2">
                    
                    {/* Y-Axis Row Header */}
                    <div className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-2 flex flex-col justify-center text-left">
                      <div className="text-xs font-bold text-zinc-200">{row.val} - {row.name}</div>
                      <div className="text-[9px] text-zinc-500 truncate">{row.desc}</div>
                    </div>

                    {/* 5 Cells across Impact 1 to 5 */}
                    {[1, 2, 3, 4, 5].map(colVal => {
                      const cellRisk = getMatrixCellRisk(colVal, row.val);
                      const key = `${row.val}_${colVal}`;
                      const cellPias = matrixPias.get(key) || [];
                      const isSelected = selectedCell?.impact === colVal && selectedCell?.likelihood === row.val;
                      const hasPias = cellPias.length > 0;

                      return (
                        <div
                          key={colVal}
                          onClick={() => setSelectedCell(isSelected ? null : { impact: colVal, likelihood: row.val })}
                          className={`min-h-[78px] rounded-xl p-2.5 border transition-all cursor-pointer relative flex flex-col justify-between bg-gradient-to-br ${cellRisk.colorClass} ${
                            isSelected 
                              ? 'ring-2 ring-white shadow-lg scale-[1.02] z-10' 
                              : hasPias 
                                ? 'shadow-md hover:scale-[1.01]' 
                                : 'opacity-80 hover:opacity-100'
                          }`}
                        >
                          {/* Cell Header: Coordinate & Base Score */}
                          <div className="flex items-center justify-between text-[10px] font-mono">
                            <span className="text-zinc-300 font-bold opacity-75">
                              {colVal}×{row.val}={cellRisk.score}
                            </span>
                            <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold uppercase border ${cellRisk.badgeClass}`}>
                              {cellRisk.level}
                            </span>
                          </div>

                          {/* Cell Body: Plotted PIAs */}
                          <div className="mt-1 flex-1 flex flex-col justify-center">
                            {hasPias ? (
                              <div className="space-y-1">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-black text-white flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                                    {cellPias.length} PIA{cellPias.length > 1 ? 's' : ''}
                                  </span>
                                  <span className="text-[9px] text-zinc-300 font-mono">
                                    Avg: {Math.round(cellPias.reduce((a, c) => a + c.finalScore, 0) / cellPias.length)}
                                  </span>
                                </div>

                                {/* Mini chips for individual PIAs */}
                                <div className="flex flex-wrap gap-1">
                                  {cellPias.slice(0, 2).map(p => (
                                    <button
                                      key={p.pia.id}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        onSelectPia(p.pia);
                                      }}
                                      title={`${p.pia.projectTitle} - Aggregate Score: ${p.finalScore} / 25.0`}
                                      className="px-1.5 py-0.5 bg-black/60 hover:bg-black/90 text-white rounded text-[9px] font-mono border border-white/20 truncate max-w-[95px] flex items-center gap-0.5 transition"
                                    >
                                      <span>{p.pia.id}</span>
                                      <ArrowUpRight className="w-2.5 h-2.5 text-zinc-400" />
                                    </button>
                                  ))}
                                  {cellPias.length > 2 && (
                                    <span className="text-[9px] font-mono text-zinc-300 px-1 py-0.5 bg-black/40 rounded">
                                      +{cellPias.length - 2} more
                                    </span>
                                  )}
                                </div>
                              </div>
                            ) : (
                              <div className="text-[10px] text-zinc-500/80 italic text-center py-1">
                                0 PIAs
                              </div>
                            )}
                          </div>

                        </div>
                      );
                    })}

                  </div>
                ))}
              </div>
            </>
          )}

            </div>
          </div>

          {/* Cell Inspector Drawer / Flyout */}
          {selectedCell && (
            <div className="bg-zinc-950 border border-purple-500/40 rounded-xl p-4 animate-in slide-in-from-top duration-200">
              <div className="flex justify-between items-center border-b border-zinc-800 pb-3 mb-3">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 bg-purple-950 text-purple-300 border border-purple-700 rounded text-xs font-mono font-bold">
                    Quadrant: Impact {selectedCell.impact} × Likelihood {selectedCell.likelihood}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">
                    Base Risk: {selectedCell.impact * selectedCell.likelihood} / 25
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCell(null)}
                  className="text-zinc-400 hover:text-white text-xs p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {selectedCellPias.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {selectedCellPias.map(item => (
                    <div 
                      key={item.pia.id}
                      className="bg-zinc-900 border border-zinc-800 hover:border-purple-500 rounded-xl p-3.5 flex flex-col justify-between transition group cursor-pointer"
                      onClick={() => onSelectPia(item.pia)}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-1.5">
                          <span className="text-[10px] font-mono text-purple-400 font-bold">{item.pia.id}</span>
                          <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full border ${
                            item.riskLevel === 'Critical' 
                              ? 'bg-rose-950 text-rose-400 border-rose-800' 
                              : item.riskLevel === 'High' 
                                ? 'bg-amber-950 text-amber-400 border-amber-800' 
                                : item.riskLevel === 'Medium' 
                                  ? 'bg-purple-950 text-purple-400 border-purple-800' 
                                  : 'bg-emerald-950 text-emerald-400 border-emerald-800'
                          }`}>
                            {item.riskLevel}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white group-hover:text-purple-300 transition line-clamp-1">
                          {item.pia.projectTitle}
                        </h4>
                        <p className="text-[11px] text-zinc-400 line-clamp-2 mt-1">
                          {item.pia.projectDescription || 'No description provided'}
                        </p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-zinc-800/80 flex justify-between items-center text-[10px] font-mono">
                        <span className="text-zinc-400">
                          Aggregate: <strong className="text-white">{item.finalScore}</strong> (×{item.totalMultiplier})
                        </span>
                        <span className="text-purple-400 group-hover:underline flex items-center gap-0.5 font-sans font-bold">
                          <span>Open Review</span>
                          <ChevronRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-zinc-500 italic py-2">
                  No assessments currently match this exact risk coordinate.
                </p>
              )}
            </div>
          )}
        </div>
      )}

      {/* 4. TAB 2: Sector vs Compliance Domain Heatmap */}
      {activeTab === 'domainHeatmap' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs text-zinc-400">
            <div>
              <span className="font-semibold text-zinc-200">Cross-Sector Compliance Vectors</span>
              <span className="text-zinc-500 ml-2">Mean risk score (1.0 to 5.0) evaluated per compliance domain</span>
            </div>
            <div className="flex items-center gap-2 text-[11px] font-mono">
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">1.0 - 1.9 Low</span>
              <span className="px-2 py-0.5 rounded bg-purple-950 text-purple-400 border border-purple-800">2.0 - 3.4 Moderate</span>
              <span className="px-2 py-0.5 rounded bg-amber-950 text-amber-400 border border-amber-800">3.5 - 4.4 Elevated</span>
              <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-400 border border-rose-800">4.5 - 5.0 Severe</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="text-[11px] uppercase bg-zinc-950 text-zinc-400 font-mono border-b border-zinc-800">
                <tr>
                  <th className="p-3.5">Industry Sector</th>
                  <th className="p-3.5">Assessments</th>
                  {sectorDomainHeatmap.domains.map(d => (
                    <th key={d.id} className="p-3.5 text-center">{d.label}</th>
                  ))}
                  <th className="p-3.5 text-right">Aggregate Mean</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/60 bg-zinc-900/30">
                {sectorDomainHeatmap.rows.map(row => (
                  <tr key={row.sector} className="hover:bg-zinc-800/40 transition">
                    <td className="p-3.5 font-bold text-white uppercase font-mono">
                      {row.sector}
                    </td>
                    <td className="p-3.5 font-mono text-zinc-400">
                      {row.count} PIA(s)
                    </td>

                    {/* Domain Scores */}
                    {row.domainScores.map(ds => {
                      let cellStyle = 'bg-emerald-950/60 text-emerald-400 border-emerald-800/60';
                      if (ds.avg >= 4.0) cellStyle = 'bg-rose-950/70 text-rose-300 border-rose-700/60 font-black';
                      else if (ds.avg >= 3.0) cellStyle = 'bg-amber-950/70 text-amber-300 border-amber-700/60 font-bold';
                      else if (ds.avg >= 2.0) cellStyle = 'bg-purple-950/60 text-purple-300 border-purple-800/60';

                      return (
                        <td key={ds.domainId} className="p-3 text-center">
                          <span className={`inline-block px-3 py-1 rounded-lg border text-xs font-mono shadow-sm ${cellStyle}`}>
                            {ds.avg.toFixed(1)}
                          </span>
                        </td>
                      );
                    })}

                    <td className="p-3.5 text-right font-mono font-bold text-white">
                      <span className={`px-2 py-0.5 rounded ${
                        row.avgFinal >= 15 ? 'text-rose-400' : row.avgFinal >= 10 ? 'text-amber-400' : 'text-emerald-400'
                      }`}>
                        {row.avgFinal.toFixed(1)} / 25
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. TAB 3: PIA Card Tiles Color-Coded by Aggregate Risk */}
      {activeTab === 'cards' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center text-xs text-zinc-400">
            <span>Color-coded assessments ordered by aggregate calculated risk score</span>
            <span className="font-mono text-zinc-500">Showing {processedPias.length} assessments</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {processedPias
              .sort((a, b) => b.finalScore - a.finalScore)
              .map(item => {
                const isCritical = item.riskLevel === 'Critical';
                const isHigh = item.riskLevel === 'High';
                const isMed = item.riskLevel === 'Medium';

                let cardBorder = 'border-emerald-800/50 hover:border-emerald-500';
                let headerBg = 'from-emerald-950/40 to-zinc-900';
                let scoreBadge = 'bg-emerald-950 text-emerald-300 border-emerald-700';

                if (isCritical) {
                  cardBorder = 'border-rose-700/70 hover:border-rose-400 shadow-rose-950/30';
                  headerBg = 'from-rose-950/50 to-zinc-900';
                  scoreBadge = 'bg-rose-950 text-rose-300 border-rose-700';
                } else if (isHigh) {
                  cardBorder = 'border-amber-700/70 hover:border-amber-400 shadow-amber-950/30';
                  headerBg = 'from-amber-950/50 to-zinc-900';
                  scoreBadge = 'bg-amber-950 text-amber-300 border-amber-700';
                } else if (isMed) {
                  cardBorder = 'border-purple-700/60 hover:border-purple-400';
                  headerBg = 'from-purple-950/40 to-zinc-900';
                  scoreBadge = 'bg-purple-950 text-purple-300 border-purple-700';
                }

                return (
                  <div
                    key={item.pia.id}
                    onClick={() => onSelectPia(item.pia)}
                    className={`bg-zinc-900/60 border rounded-2xl overflow-hidden transition-all duration-200 hover:shadow-xl hover:scale-[1.01] cursor-pointer flex flex-col justify-between ${cardBorder}`}
                  >
                    <div className={`p-4 bg-gradient-to-r ${headerBg} border-b border-zinc-800/80`}>
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase">
                            {item.pia.id} • {item.pia.industrySector || 'Enterprise'}
                          </span>
                          <h3 className="text-sm font-bold text-white line-clamp-1 mt-0.5">
                            {item.pia.projectTitle}
                          </h3>
                        </div>
                        <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded-lg border shrink-0 ${scoreBadge}`}>
                          {item.finalScore} / 25
                        </span>
                      </div>

                      {/* Risk Thermometer Bar */}
                      <div className="w-full bg-zinc-950 rounded-full h-2 mt-3 overflow-hidden border border-zinc-800">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            isCritical ? 'bg-rose-500' : isHigh ? 'bg-amber-500' : isMed ? 'bg-purple-500' : 'bg-emerald-500'
                          }`}
                          style={{ width: `${Math.min(100, Math.max(5, (item.finalScore / 25) * 100))}%` }}
                        />
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
                      <p className="text-xs text-zinc-400 line-clamp-2">
                        {item.pia.projectDescription || 'Privacy Impact Assessment and Personal Data Flow audit'}
                      </p>

                      {/* Key Indicators */}
                      <div className="grid grid-cols-2 gap-2 text-[11px] font-mono bg-zinc-950/60 p-2.5 rounded-xl border border-zinc-800/60">
                        <div>
                          <span className="text-zinc-500 text-[10px]">COORDINATES:</span>
                          <div className="text-zinc-200 font-bold">
                            I:{item.impactScore.toFixed(1)} × L:{item.likelihoodScore.toFixed(1)}
                          </div>
                        </div>
                        <div>
                          <span className="text-zinc-500 text-[10px]">MULTIPLIER:</span>
                          <div className="text-purple-300 font-bold">
                            ×{item.totalMultiplier.toFixed(2)}
                          </div>
                        </div>
                      </div>

                      {/* Footer Action */}
                      <div className="pt-2 border-t border-zinc-800/60 flex justify-between items-center text-xs">
                        <span className="text-[11px] text-zinc-400 font-mono">
                          Owner: {item.pia.projectOwner || 'Compliance Team'}
                        </span>
                        <span className="text-purple-400 hover:text-purple-300 font-bold flex items-center gap-1">
                          <span>Review</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

    </div>
  );
};
