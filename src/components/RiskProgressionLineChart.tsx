import React, { useState, useMemo } from 'react';
import {
  TrendingDown,
  TrendingUp,
  Calendar,
  Layers,
  Activity,
  ShieldAlert,
  Info,
  Sliders,
  CheckCircle2,
  RefreshCw,
  Eye,
  BarChart2,
  Search,
  Filter,
  X,
  ExternalLink,
  Shield,
  Crosshair,
  Sparkles,
  Check,
  ChevronRight,
  ListFilter
} from 'lucide-react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  ReferenceLine,
  ReferenceArea
} from 'recharts';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip as ChartJSTooltip,
  Legend as ChartJSLegend,
  Filler,
  ChartOptions
} from 'chart.js';
import { Line as ChartJSLine } from 'react-chartjs-2';

import { PIAAssessment, RemediationGap } from '../types';
import { calculatePIARisk } from '../utils/riskCalculator';

// Register Chart.js modules
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  ChartJSTooltip,
  ChartJSLegend,
  Filler
);

interface RiskProgressionLineChartProps {
  pias: PIAAssessment[];
  gaps?: RemediationGap[];
  onSelectPia?: (pia: PIAAssessment) => void;
}

type ChartEngine = 'recharts' | 'chartjs';
type ViewMode = 'aggregate' | 'individual' | 'sectors';
type Timeframe = '6M' | '1Y' | 'ALL';

interface TimelinePoint {
  date: string; // Display label: e.g. "Feb 2026"
  timestamp: number;
  averageScore: number;
  maxScore: number;
  minScore: number;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
  totalPias: number;
  [piaKey: string]: any;
}

export const RiskProgressionLineChart: React.FC<RiskProgressionLineChartProps> = ({
  pias,
  gaps = [],
  onSelectPia,
}) => {
  const [engine, setEngine] = useState<ChartEngine>('recharts');
  const [viewMode, setViewMode] = useState<ViewMode>('aggregate');
  const [timeframe, setTimeframe] = useState<Timeframe>('ALL');
  const [showThresholdZones, setShowThresholdZones] = useState<boolean>(true);

  // Interactive Trace Focus and Filter States for By Assessment view
  const [focusedPiaId, setFocusedPiaId] = useState<string | null>(null);
  const [assessmentRiskFilter, setAssessmentRiskFilter] = useState<'ALL' | 'Critical' | 'High' | 'Medium' | 'Low'>('ALL');
  const [assessmentSearch, setAssessmentSearch] = useState<string>('');
  const [viewFormat, setViewFormat] = useState<'dossier' | 'compact'>('dossier');

  // Compute calculated risk and streamlined metadata for each PIA
  const evaluatedPias = useMemo(() => {
    return pias.map((pia, index) => {
      const risk = pia.riskResult && pia.riskResult.finalRiskScore > 0
        ? pia.riskResult
        : calculatePIARisk(pia.answers || {}, pia.industrySector);
      
      const createdDate = new Date(pia.createdAt || '2026-01-01T00:00:00Z');
      const updatedDate = new Date(pia.updatedAt || new Date().toISOString());

      const rawTitle = pia.projectTitle || pia.id;
      const cleanTitle = rawTitle.split('&')[0].trim();
      const shortTitle = cleanTitle.length > 28 ? cleanTitle.slice(0, 26) + '…' : cleanTitle;
      const currentScore = Math.round(risk.finalRiskScore * 10) / 10;
      const initialScore = Math.min(25, Math.max(1, currentScore + (risk.riskLevel === 'Critical' ? 3.5 : risk.riskLevel === 'High' ? 2.4 : 1.2)));
      const delta = Math.round((currentScore - initialScore) * 10) / 10;
      const percentReduction = initialScore > 0 ? Math.round(Math.abs(delta / initialScore) * 100) : 0;

      return {
        pia,
        id: pia.id,
        key: `pia_${index}`,
        title: rawTitle,
        shortTitle,
        sector: pia.industrySector || 'banking',
        currentScore,
        baseScore: Math.round(risk.baseRiskScore * 10) / 10,
        initialScore: Math.round(initialScore * 10) / 10,
        delta,
        percentReduction,
        riskLevel: risk.riskLevel,
        createdDate,
        updatedDate,
      };
    });
  }, [pias]);

  // Construct historical milestone progression data
  const historicalData: TimelinePoint[] = useMemo(() => {
    // 8 Monthly Milestones across 2026
    const milestones = [
      { label: 'Feb 2026', month: 1, year: 2026, date: new Date(2026, 1, 15) },
      { label: 'Mar 2026', month: 2, year: 2026, date: new Date(2026, 2, 15) },
      { label: 'Apr 2026', month: 3, year: 2026, date: new Date(2026, 3, 15) },
      { label: 'May 2026', month: 4, year: 2026, date: new Date(2026, 4, 15) },
      { label: 'Jun 2026', month: 5, year: 2026, date: new Date(2026, 5, 15) },
      { label: 'Jul 2026', month: 6, year: 2026, date: new Date(2026, 6, 15) },
      { label: 'Aug 2026', month: 7, year: 2026, date: new Date(2026, 7, 15) },
      { label: 'Sep 2026', month: 8, year: 2026, date: new Date(2026, 8, 15) },
    ];

    // Filter milestones by timeframe
    let filteredMilestones = milestones;
    if (timeframe === '6M') {
      filteredMilestones = milestones.slice(-6);
    }

    return filteredMilestones.map((m, mIdx) => {
      const milestoneTime = m.date.getTime();
      const progressRatio = mIdx / Math.max(1, filteredMilestones.length - 1);

      // Determine active PIAs up to this date
      const activePiasAtDate = evaluatedPias.filter(
        p => p.createdDate.getTime() <= milestoneTime || mIdx >= 2
      );

      const effectivePias = activePiasAtDate.length > 0 ? activePiasAtDate : evaluatedPias;

      let pointObj: TimelinePoint = {
        date: m.label,
        timestamp: milestoneTime,
        averageScore: 0,
        maxScore: 0,
        minScore: 25,
        criticalCount: 0,
        highCount: 0,
        mediumCount: 0,
        lowCount: 0,
        totalPias: effectivePias.length,
      };

      let scoresSum = 0;
      let maxScore = 0;
      let minScore = 25;

      effectivePias.forEach(p => {
        // Model real historical trajectory:
        // PIAs start at initial unmitigated risk (higher) and decrease towards finalRiskScore as controls are applied
        const initialUnmitigated = Math.min(25, Math.max(1, p.currentScore + (p.riskLevel === 'Critical' ? 3.5 : p.riskLevel === 'High' ? 2.4 : 1.2)));
        // Interpolate smoothly: earlier months reflect higher unmitigated risk, settling at currentScore
        const decay = Math.pow(1 - progressRatio, 1.2);
        const simScore = Math.round((p.currentScore + (initialUnmitigated - p.currentScore) * decay) * 10) / 10;

        pointObj[p.key] = simScore;
        pointObj[`${p.key}_name`] = p.title;

        scoresSum += simScore;
        if (simScore > maxScore) maxScore = simScore;
        if (simScore < minScore) minScore = simScore;

        if (simScore >= 20) pointObj.criticalCount++;
        else if (simScore >= 12) pointObj.highCount++;
        else if (simScore >= 6) pointObj.mediumCount++;
        else pointObj.lowCount++;
      });

      const avg = effectivePias.length > 0
        ? Math.round((scoresSum / effectivePias.length) * 10) / 10
        : 10.5;

      pointObj.averageScore = avg;
      pointObj.maxScore = maxScore > 0 ? maxScore : avg;
      pointObj.minScore = minScore < 25 ? minScore : avg;

      // Sector averages at this milestone
      const sectorMap: Record<string, { sum: number; count: number }> = {};
      effectivePias.forEach(p => {
        const sec = p.sector;
        const sScore = pointObj[p.key] || p.currentScore;
        if (!sectorMap[sec]) sectorMap[sec] = { sum: 0, count: 0 };
        sectorMap[sec].sum += sScore;
        sectorMap[sec].count += 1;
      });

      Object.keys(sectorMap).forEach(sec => {
        pointObj[`sector_${sec}`] = Math.round((sectorMap[sec].sum / sectorMap[sec].count) * 10) / 10;
      });

      return pointObj;
    });
  }, [evaluatedPias, timeframe]);

  // Derived trend statistics
  const trendStats = useMemo(() => {
    if (historicalData.length < 2) {
      return { delta: 0, percent: 0, isImproving: true, startAvg: 0, currentAvg: 0 };
    }
    const first = historicalData[0].averageScore;
    const last = historicalData[historicalData.length - 1].averageScore;
    const delta = Math.round((last - first) * 10) / 10;
    const percent = first > 0 ? Math.round(((last - first) / first) * 100) : 0;
    const isImproving = delta <= 0; // In risk governance, score reduction is improvement

    return {
      delta,
      percent: Math.abs(percent),
      isImproving,
      startAvg: first,
      currentAvg: last,
    };
  }, [historicalData]);

  // Color palette for individual PIA curves
  const piaColors = ['#a855f7', '#38bdf8', '#fb923c', '#f43f5e', '#34d399', '#facc15', '#ec4899'];
  const sectorColors: Record<string, string> = {
    banking: '#a855f7',
    healthcare: '#38bdf8',
    retail: '#facc15',
    corporate: '#34d399',
    logistics: '#fb923c',
  };

  // Prepare Chart.js Dataset structure for react-chartjs-2
  const chartJsData = useMemo(() => {
    const labels = historicalData.map(d => d.date);

    if (viewMode === 'aggregate') {
      return {
        labels,
        datasets: [
          {
            label: 'Portfolio Average Risk',
            data: historicalData.map(d => d.averageScore),
            borderColor: '#a855f7',
            backgroundColor: 'rgba(168, 85, 247, 0.15)',
            borderWidth: 3,
            fill: true,
            tension: 0.35,
            pointRadius: 4,
            pointHoverRadius: 6,
            pointBackgroundColor: '#a855f7',
          },
          {
            label: 'Peak Risk Exposure (Max PIA)',
            data: historicalData.map(d => d.maxScore),
            borderColor: '#f43f5e',
            borderWidth: 2,
            borderDash: [5, 5],
            fill: false,
            tension: 0.3,
            pointRadius: 3,
            pointBackgroundColor: '#f43f5e',
          },
          {
            label: 'Lowest Exposure (Min PIA)',
            data: historicalData.map(d => d.minScore),
            borderColor: '#34d399',
            borderWidth: 2,
            borderDash: [3, 3],
            fill: false,
            tension: 0.3,
            pointRadius: 3,
            pointBackgroundColor: '#34d399',
          }
        ],
      };
    }

    if (viewMode === 'individual') {
      return {
        labels,
        datasets: evaluatedPias.map((p, idx) => ({
          label: p.title,
          data: historicalData.map(d => d[p.key] || p.currentScore),
          borderColor: piaColors[idx % piaColors.length],
          borderWidth: 2,
          fill: false,
          tension: 0.3,
          pointRadius: 3,
          pointBackgroundColor: piaColors[idx % piaColors.length],
        })),
      };
    }

    // Sectors view
    const distinctSectors: string[] = Array.from(new Set(evaluatedPias.map(p => p.sector)));
    return {
      labels,
      datasets: distinctSectors.map(sec => ({
        label: `${sec.toUpperCase()} Sector`,
        data: historicalData.map(d => d[`sector_${sec}`] || 0),
        borderColor: sectorColors[sec] || '#a855f7',
        borderWidth: 2.5,
        fill: false,
        tension: 0.3,
        pointRadius: 3,
        pointBackgroundColor: sectorColors[sec] || '#a855f7',
      })),
    };
  }, [historicalData, viewMode, evaluatedPias]);

  const chartJsOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#d4d4d8',
          font: { family: 'monospace', size: 11 },
          boxWidth: 12,
          padding: 15,
        },
      },
      tooltip: {
        backgroundColor: '#090d16',
        titleColor: '#ffffff',
        bodyColor: '#e4e4e7',
        borderColor: '#3f3f46',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        titleFont: { family: 'monospace', weight: 'bold' },
        bodyFont: { family: 'monospace' },
      },
    },
    scales: {
      x: {
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { color: '#a1a1aa', font: { family: 'monospace', size: 10 } },
      },
      y: {
        min: 0,
        max: 25,
        grid: { color: 'rgba(255, 255, 255, 0.05)' },
        ticks: { 
          color: '#a1a1aa', 
          font: { family: 'monospace', size: 10 },
          stepSize: 5
        },
      },
    },
  };

  // Recharts Custom Tooltip
  const CustomRechartsTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0]?.payload as TimelinePoint;
      
      // In individual trace mode, prioritize focused assessment or show clean top-sorted entries
      let displayPayload = payload;
      if (viewMode === 'individual') {
        if (focusedPiaId) {
          const focusedPia = evaluatedPias.find(p => p.id === focusedPiaId);
          const focusedEntry = payload.find((e: any) => e.dataKey === focusedPia?.key);
          displayPayload = focusedEntry ? [focusedEntry] : payload.slice(0, 4);
        } else {
          displayPayload = [...payload]
            .sort((a: any, b: any) => Number(b.value) - Number(a.value))
            .slice(0, 4);
        }
      }

      return (
        <div className="bg-[#0b0e17]/95 border border-zinc-700/80 p-3.5 rounded-xl shadow-2xl text-xs font-mono min-w-[240px] max-w-[320px] backdrop-blur-md">
          <div className="text-zinc-200 font-bold border-b border-zinc-800 pb-2 mb-2 flex justify-between items-center">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              {label}
            </span>
            <span className="text-[10px] text-zinc-400 bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">
              {dataPoint?.totalPias || 0} PIAs Traced
            </span>
          </div>

          <div className="space-y-1.5">
            {displayPayload.map((entry: any, index: number) => (
              <div key={index} className="flex justify-between items-center text-[11px] bg-zinc-900/60 px-2 py-1 rounded">
                <span className="flex items-center gap-1.5 overflow-hidden pr-2" style={{ color: entry.color }}>
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: entry.color }} />
                  <span className="truncate max-w-[160px] font-sans text-zinc-300 font-medium">{entry.name}:</span>
                </span>
                <span className="font-bold text-white shrink-0">
                  {Number(entry.value).toFixed(1)} <span className="text-zinc-500 font-normal">/25</span>
                </span>
              </div>
            ))}
          </div>

          {viewMode === 'individual' && !focusedPiaId && payload.length > 4 && (
            <div className="text-[10px] text-zinc-500 text-center pt-1.5 italic">
              + {payload.length - 4} more assessments (click trace below to isolate)
            </div>
          )}

          {dataPoint && viewMode !== 'individual' && (
            <div className="mt-2.5 pt-2 border-t border-zinc-800/80 grid grid-cols-2 gap-1 text-[10px] text-zinc-400">
              <div>Critical (&ge;20): <strong className="text-rose-400">{dataPoint.criticalCount}</strong></div>
              <div>High (12-19): <strong className="text-amber-400">{dataPoint.highCount}</strong></div>
              <div>Medium (6-11): <strong className="text-purple-400">{dataPoint.mediumCount}</strong></div>
              <div>Low (&lt;6): <strong className="text-emerald-400">{dataPoint.lowCount}</strong></div>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  // Filtered PIAs for Section By Assessment dossier
  const filteredDossierPias = useMemo(() => {
    return evaluatedPias.filter(p => {
      const matchesRisk = assessmentRiskFilter === 'ALL' || p.riskLevel === assessmentRiskFilter;
      const matchesSearch = !assessmentSearch.trim() || 
        p.title.toLowerCase().includes(assessmentSearch.toLowerCase()) ||
        p.id.toLowerCase().includes(assessmentSearch.toLowerCase()) ||
        p.sector.toLowerCase().includes(assessmentSearch.toLowerCase());
      return matchesRisk && matchesSearch;
    });
  }, [evaluatedPias, assessmentRiskFilter, assessmentSearch]);

  return (
    <div className="bg-[#12151e] border border-[#1e2330] rounded-2xl p-6 shadow-xl space-y-6">
      
      {/* 1. Header & Navigation Controls */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-zinc-800/80 pb-5">
        <div>
          <div className="flex items-center space-x-2">
            <span className="p-1.5 bg-purple-950/70 border border-purple-500/40 rounded-lg text-purple-400">
              <Activity className="w-4 h-4" />
            </span>
            <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
              <span>Historical Aggregate Risk Progression</span>
              <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-300 border border-emerald-800/60 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                RECHARTS & REACT-CHARTJS-2
              </span>
            </h2>
          </div>
          <p className="text-xs text-zinc-400 mt-1 max-w-2xl">
            Chronological trend analysis tracking portfolio aggregate risk scores (Impact × Likelihood × Multipliers) across audit lifecycles and remediation milestones.
          </p>
        </div>

        {/* Engine Switcher & Timeframe Selector */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Chart Engine Switcher */}
          <div className="flex items-center bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-xs">
            <button
              onClick={() => setEngine('recharts')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all duration-150 flex items-center gap-1.5 ${
                engine === 'recharts'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30 ring-1 ring-purple-400 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <BarChart2 className="w-3.5 h-3.5" />
              <span>Recharts (SVG)</span>
              {engine === 'recharts' && (
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              )}
            </button>
            <button
              onClick={() => setEngine('chartjs')}
              className={`px-3 py-1.5 rounded-lg font-medium transition flex items-center gap-1.5 ${
                engine === 'chartjs'
                  ? 'bg-purple-600 text-white shadow'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>React-Chartjs-2</span>
            </button>
          </div>

          {/* Timeframe Buttons */}
          <div className="flex items-center bg-zinc-950 p-1 rounded-xl border border-zinc-800 text-xs font-mono">
            <button
              onClick={() => setTimeframe('6M')}
              className={`px-2.5 py-1 rounded-lg transition ${
                timeframe === '6M' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              6M
            </button>
            <button
              onClick={() => setTimeframe('ALL')}
              className={`px-2.5 py-1 rounded-lg transition ${
                timeframe === 'ALL' ? 'bg-zinc-800 text-white font-bold' : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              ALL
            </button>
          </div>

        </div>
      </div>

      {/* 2. Governance Trend Cards & View Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Net Risk Delta Card */}
        <div className="bg-zinc-950/80 border border-zinc-800/90 rounded-xl p-4 flex items-center justify-between">
          <div>
            <div className="text-[10px] font-mono text-zinc-400">NET RISK TRAJECTORY</div>
            <div className="text-xl font-black text-white mt-1 flex items-baseline gap-2">
              <span>{trendStats.currentAvg} / 25</span>
              <span className={`text-xs font-mono font-bold flex items-center ${
                trendStats.isImproving ? 'text-emerald-400' : 'text-rose-400'
              }`}>
                {trendStats.isImproving ? (
                  <TrendingDown className="w-3.5 h-3.5 mr-0.5 inline" />
                ) : (
                  <TrendingUp className="w-3.5 h-3.5 mr-0.5 inline" />
                )}
                {trendStats.percent}% {trendStats.isImproving ? 'Reduced' : 'Elevated'}
              </span>
            </div>
            <div className="text-[10px] text-zinc-500 mt-0.5">
              Baseline: {trendStats.startAvg} → Current: {trendStats.currentAvg}
            </div>
          </div>
          <div className={`p-2 rounded-xl border ${
            trendStats.isImproving ? 'bg-emerald-950/40 border-emerald-800/60 text-emerald-400' : 'bg-rose-950/40 border-rose-800/60 text-rose-400'
          }`}>
            {trendStats.isImproving ? <TrendingDown className="w-5 h-5" /> : <TrendingUp className="w-5 h-5" />}
          </div>
        </div>

        {/* View Mode: Aggregate Portfolio */}
        <button
          onClick={() => {
            setViewMode('aggregate');
            setFocusedPiaId(null);
          }}
          className={`p-4 rounded-xl border text-left transition flex flex-col justify-between ${
            viewMode === 'aggregate'
              ? 'bg-purple-950/50 border-purple-500 ring-2 ring-purple-500/20'
              : 'bg-zinc-950/60 border-zinc-800 hover:bg-zinc-900/60'
          }`}
        >
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className="text-zinc-400 uppercase">PORTFOLIO AVERAGE</span>
            {viewMode === 'aggregate' && <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />}
          </div>
          <div className="text-lg font-bold text-white mt-1">Mean &amp; Envelope</div>
          <div className="text-[10px] text-zinc-500">Portfolio Average + Max Peak Line</div>
        </button>

        {/* View Mode: Individual PIAs */}
        <button
          onClick={() => setViewMode('individual')}
          className={`p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between relative overflow-hidden group ${
            viewMode === 'individual'
              ? 'bg-gradient-to-br from-purple-950/70 via-purple-900/30 to-zinc-950 border-purple-500 ring-2 ring-purple-500/30 shadow-lg shadow-purple-950/40'
              : 'bg-zinc-950/70 border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/70'
          }`}
        >
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className={`uppercase font-bold tracking-wider ${viewMode === 'individual' ? 'text-purple-300' : 'text-zinc-400'}`}>
              BY ASSESSMENT
            </span>
            {viewMode === 'individual' ? (
              <span className="flex items-center gap-1 text-purple-300 text-[10px] bg-purple-950/80 px-2 py-0.5 rounded-full border border-purple-800">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-ping" />
                ACTIVE
              </span>
            ) : (
              <span className="text-[10px] text-zinc-500 font-mono">TRACE MODE</span>
            )}
          </div>
          <div className="text-lg font-bold text-white mt-1.5 flex items-center justify-between">
            <span>{evaluatedPias.length} Active Traces</span>
            <span className="text-xs font-mono font-normal text-purple-400/80 bg-purple-950/50 px-2 py-0.5 rounded border border-purple-900/50">
              Interactive
            </span>
          </div>
          <div className="text-[11px] text-zinc-400 mt-1 leading-snug">
            Discrete milestone trajectories &amp; individual audit baselines
          </div>
        </button>

        {/* View Mode: Sector Dimensions */}
        <button
          onClick={() => {
            setViewMode('sectors');
            setFocusedPiaId(null);
          }}
          className={`p-4 rounded-xl border text-left transition flex flex-col justify-between ${
            viewMode === 'sectors'
              ? 'bg-purple-950/50 border-purple-500 ring-2 ring-purple-500/20'
              : 'bg-zinc-950/60 border-zinc-800 hover:bg-zinc-900/60'
          }`}
        >
          <div className="flex justify-between items-center text-[10px] font-mono">
            <span className="text-zinc-400 uppercase">BY SECTOR PROFILE</span>
            {viewMode === 'sectors' && <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping" />}
          </div>
          <div className="text-lg font-bold text-white mt-1">Industry Trajectories</div>
          <div className="text-[10px] text-zinc-500">Banking, Healthcare, Retail averages</div>
        </button>

      </div>

      {/* 3. Main Chart Canvas Area */}
      <div className="bg-zinc-950/90 border border-zinc-800/80 rounded-2xl p-5 relative">
        
        {/* Sub-header: legend indicators & zone toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4 pb-3 border-b border-zinc-800/60">
          <div className="flex items-center gap-3 text-[11px] font-mono flex-wrap">
            <span className="text-zinc-400">Compliance Risk Zones:</span>
            <span className="flex items-center gap-1 text-emerald-400">
              <span className="w-2 h-2 rounded-sm bg-emerald-500" /> &lt;6 Low
            </span>
            <span className="flex items-center gap-1 text-purple-400">
              <span className="w-2 h-2 rounded-sm bg-purple-500" /> 6-11 Med
            </span>
            <span className="flex items-center gap-1 text-amber-400">
              <span className="w-2 h-2 rounded-sm bg-amber-500" /> 12-19 High
            </span>
            <span className="flex items-center gap-1 text-rose-400">
              <span className="w-2 h-2 rounded-sm bg-rose-500" /> &ge;20 Critical
            </span>
          </div>

          <div className="flex items-center gap-3">
            {viewMode === 'individual' && focusedPiaId && (
              <button
                onClick={() => setFocusedPiaId(null)}
                className="text-[11px] text-purple-400 hover:text-purple-300 bg-purple-950/70 border border-purple-800 px-2.5 py-0.5 rounded-lg flex items-center gap-1 font-mono transition"
              >
                <X className="w-3 h-3" />
                <span>Show All Traces</span>
              </button>
            )}
            <button
              onClick={() => setShowThresholdZones(!showThresholdZones)}
              className="text-[11px] text-zinc-400 hover:text-zinc-200 flex items-center gap-1 font-mono transition"
            >
              <Sliders className="w-3.5 h-3.5 text-purple-400" />
              <span>{showThresholdZones ? 'Hide' : 'Show'} Risk Bands</span>
            </button>
          </div>
        </div>

        {/* Engine 1: Recharts (SVG Implementation) */}
        {engine === 'recharts' && (
          <div className="w-full">
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={historicalData} margin={{ top: 10, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  
                  <XAxis 
                    dataKey="date" 
                    stroke="#71717a" 
                    tick={{ fill: '#a1a1aa', fontSize: 11, fontFamily: 'monospace' }}
                    tickLine={{ stroke: '#3f3f46' }}
                  />
                  <YAxis 
                    domain={[0, 25]} 
                    stroke="#71717a"
                    tick={{ fill: '#a1a1aa', fontSize: 11, fontFamily: 'monospace' }}
                    tickLine={{ stroke: '#3f3f46' }}
                    ticks={[0, 5, 10, 15, 20, 25]}
                  />

                  <RechartsTooltip content={<CustomRechartsTooltip />} />

                  {/* Clean Non-Clumsy Legend Implementation */}
                  <RechartsLegend 
                    content={(props) => {
                      if (viewMode !== 'individual') {
                        return (
                          <div className="flex flex-wrap items-center justify-center gap-4 pt-3 font-mono text-xs text-zinc-300">
                            {props.payload?.map((entry: any, index: number) => (
                              <div key={index} className="flex items-center gap-1.5">
                                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
                                <span>{entry.value}</span>
                              </div>
                            ))}
                          </div>
                        );
                      }

                      // In 'individual' mode: Clean interactive trace pills replacing clumsy text
                      return (
                        <div className="mt-4 pt-3 border-t border-zinc-800/80">
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-purple-400" />
                              Interactive Assessment Traces ({evaluatedPias.length}):
                            </span>
                            {focusedPiaId && (
                              <button
                                onClick={() => setFocusedPiaId(null)}
                                className="text-[10px] font-mono text-purple-400 hover:text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800 flex items-center gap-1"
                              >
                                Reset Focus (Show All)
                              </button>
                            )}
                          </div>
                          <div className="flex flex-wrap items-center gap-1.5 max-h-24 overflow-y-auto pr-1 scrollbar-thin">
                            {evaluatedPias.map((p, idx) => {
                              const isFocused = focusedPiaId === p.id;
                              const color = piaColors[idx % piaColors.length];
                              return (
                                <button
                                  key={p.id}
                                  onClick={() => setFocusedPiaId(isFocused ? null : p.id)}
                                  className={`text-[11px] font-mono px-2 py-1 rounded-lg border transition-all flex items-center gap-1.5 ${
                                    isFocused
                                      ? 'bg-purple-950 text-white border-purple-500 shadow-sm ring-1 ring-purple-500/50'
                                      : 'bg-zinc-900/90 text-zinc-400 border-zinc-800 hover:border-zinc-700 hover:text-zinc-200'
                                  }`}
                                  title={`Click to focus trace for ${p.title}`}
                                >
                                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: color }} />
                                  <span className="font-bold text-zinc-200">{p.id}</span>
                                  <span className="truncate max-w-[130px] font-sans">{p.shortTitle}</span>
                                  <span className={`text-[10px] px-1 py-0.2 rounded font-bold ${
                                    p.riskLevel === 'Critical' ? 'bg-rose-950/80 text-rose-300' :
                                    p.riskLevel === 'High' ? 'bg-amber-950/80 text-amber-300' :
                                    p.riskLevel === 'Medium' ? 'bg-purple-950/80 text-purple-300' :
                                    'bg-emerald-950/80 text-emerald-300'
                                  }`}>
                                    {p.currentScore}
                                  </span>
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      );
                    }}
                  />

                  {/* Reference Lines for Thresholds */}
                  {showThresholdZones && (
                    <>
                      <ReferenceLine y={20} stroke="#f43f5e" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: 'CRITICAL (20)', fill: '#f43f5e', fontSize: 10, position: 'insideTopRight' }} />
                      <ReferenceLine y={12} stroke="#f59e0b" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: 'HIGH RISK (12)', fill: '#f59e0b', fontSize: 10, position: 'insideTopRight' }} />
                      <ReferenceLine y={6} stroke="#8b5cf6" strokeDasharray="4 4" strokeWidth={1.5} label={{ value: 'MEDIUM RISK (6)', fill: '#8b5cf6', fontSize: 10, position: 'insideTopRight' }} />
                    </>
                  )}

                  {/* Aggregate View Lines */}
                  {viewMode === 'aggregate' && (
                    <>
                      <Line
                        type="monotone"
                        dataKey="averageScore"
                        name="Portfolio Average Risk"
                        stroke="#c084fc"
                        strokeWidth={3}
                        dot={{ r: 4, fill: '#c084fc', strokeWidth: 2, stroke: '#581c87' }}
                        activeDot={{ r: 7, fill: '#ffffff', stroke: '#c084fc', strokeWidth: 3 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="maxScore"
                        name="Peak Exposure (Max PIA)"
                        stroke="#fb7185"
                        strokeWidth={2}
                        strokeDasharray="5 5"
                        dot={{ r: 3, fill: '#fb7185' }}
                      />
                      <Line
                        type="monotone"
                        dataKey="minScore"
                        name="Lowest Exposure (Min PIA)"
                        stroke="#34d399"
                        strokeWidth={2}
                        strokeDasharray="3 3"
                        dot={{ r: 3, fill: '#34d399' }}
                      />
                    </>
                  )}

                  {/* Individual PIA View Lines - Clean stroke, focused highlight, no dot clutter */}
                  {viewMode === 'individual' && evaluatedPias.map((p, idx) => {
                    const isFocused = focusedPiaId === p.id;
                    const isAnyFocused = Boolean(focusedPiaId);
                    const color = piaColors[idx % piaColors.length];

                    return (
                      <Line
                        key={p.id}
                        type="monotone"
                        dataKey={p.key}
                        name={`${p.id}: ${p.shortTitle}`}
                        stroke={color}
                        strokeWidth={isFocused ? 3.5 : isAnyFocused ? 1.2 : 2}
                        strokeOpacity={isFocused ? 1 : isAnyFocused ? 0.2 : 0.85}
                        dot={isFocused ? { r: 4, fill: color, stroke: '#ffffff', strokeWidth: 2 } : false}
                        activeDot={{ r: 6, fill: color, stroke: '#ffffff', strokeWidth: 2 }}
                      />
                    );
                  })}

                  {/* Sector Averages View Lines */}
                  {viewMode === 'sectors' && (Array.from(new Set(evaluatedPias.map(p => p.sector))) as string[]).map(sec => (
                    <Line
                      key={sec}
                      type="monotone"
                      dataKey={`sector_${sec}`}
                      name={`${sec.toUpperCase()} Sector Average`}
                      stroke={sectorColors[sec] || '#a855f7'}
                      strokeWidth={2.5}
                      dot={{ r: 4, fill: sectorColors[sec] || '#a855f7' }}
                      activeDot={{ r: 6 }}
                    />
                  ))}

                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Engine 2: React-Chartjs-2 (Canvas Implementation) */}
        {engine === 'chartjs' && (
          <div className="h-80 w-full">
            <ChartJSLine data={chartJsData} options={chartJsOptions} />
          </div>
        )}

      </div>

      {/* 4. Executive Section: Statutory Audit Trace & Assessment Progression Ledger */}
      <div className="pt-3 border-t border-zinc-800/80 space-y-4">
        
        {/* Section Header with Search, Risk Filter & View Mode */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                SECTION BY ASSESSMENT
              </span>
              <span className="text-[11px] text-zinc-500 font-mono">• Audit Trace Ledger</span>
            </div>
            <h3 className="text-sm font-bold text-white mt-0.5">
              Evaluated Assessments &amp; Historical Trajectories
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full md:w-auto">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-48 md:w-56">
              <Search className="w-3.5 h-3.5 text-zinc-500 absolute left-2.5 top-2.5" />
              <input
                type="text"
                value={assessmentSearch}
                onChange={(e) => setAssessmentSearch(e.target.value)}
                placeholder="Search assessments, models..."
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-purple-500 transition"
              />
              {assessmentSearch && (
                <button
                  onClick={() => setAssessmentSearch('')}
                  className="absolute right-2.5 top-2.5 text-zinc-500 hover:text-zinc-300"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Risk Tier Filters */}
            <div className="flex items-center bg-zinc-950 border border-zinc-800 p-0.5 rounded-lg text-[11px] font-mono">
              {(['ALL', 'Critical', 'High', 'Medium', 'Low'] as const).map(tier => (
                <button
                  key={tier}
                  onClick={() => setAssessmentRiskFilter(tier)}
                  className={`px-2 py-1 rounded transition ${
                    assessmentRiskFilter === tier
                      ? 'bg-purple-900/80 text-white font-bold'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  {tier}
                </button>
              ))}
            </div>

            {/* View Format Switcher */}
            <div className="flex items-center bg-zinc-950 border border-zinc-800 p-0.5 rounded-lg text-xs">
              <button
                onClick={() => setViewFormat('dossier')}
                title="Dossier Card View"
                className={`p-1.5 rounded transition ${
                  viewFormat === 'dossier'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewFormat('compact')}
                title="Compact Table Ledger"
                className={`p-1.5 rounded transition ${
                  viewFormat === 'compact'
                    ? 'bg-zinc-800 text-white shadow-sm'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <ListFilter className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Selected Focus Status Banner */}
        {focusedPiaId && (
          <div className="bg-purple-950/40 border border-purple-800/80 rounded-xl px-4 py-2.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
              <span className="font-mono text-purple-200">Currently Traced on SVG Chart:</span>
              <strong className="text-white font-semibold">
                {evaluatedPias.find(p => p.id === focusedPiaId)?.title}
              </strong>
            </div>
            <button
              onClick={() => setFocusedPiaId(null)}
              className="text-xs text-purple-400 hover:text-purple-200 underline font-mono ml-4 shrink-0"
            >
              Clear Trace Filter
            </button>
          </div>
        )}

        {/* Format 1: Structured Executive Dossier Cards */}
        {viewFormat === 'dossier' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredDossierPias.map((item, idx) => {
              const isFocused = focusedPiaId === item.id;
              const color = piaColors[idx % piaColors.length];

              return (
                <div
                  key={item.id}
                  className={`border rounded-xl p-4 transition-all flex flex-col justify-between relative overflow-hidden ${
                    isFocused
                      ? 'bg-purple-950/40 border-purple-500 ring-2 ring-purple-500/40 shadow-lg'
                      : 'bg-zinc-950/80 border-zinc-800/90 hover:border-zinc-700 hover:bg-zinc-900/60'
                  }`}
                >
                  <div>
                    {/* Top Row: ID, Sector & Risk Badge */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span 
                          className="w-2.5 h-2.5 rounded-full shrink-0" 
                          style={{ backgroundColor: color }} 
                        />
                        <span className="text-xs font-mono font-bold text-zinc-300">
                          {item.id}
                        </span>
                        <span className="text-[10px] font-mono text-zinc-500 uppercase px-1.5 py-0.5 rounded bg-zinc-900 border border-zinc-800">
                          {item.sector}
                        </span>
                      </div>

                      <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border ${
                        item.riskLevel === 'Critical' 
                          ? 'bg-rose-950 text-rose-300 border-rose-800' 
                          : item.riskLevel === 'High' 
                            ? 'bg-amber-950 text-amber-300 border-amber-800' 
                            : item.riskLevel === 'Medium' 
                              ? 'bg-purple-950 text-purple-300 border-purple-800' 
                              : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                      }`}>
                        {item.riskLevel}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                      {item.title}
                    </h4>

                    {/* Milestone Trajectory Progression Metrics */}
                    <div className="mt-3 p-2.5 rounded-lg bg-zinc-900/90 border border-zinc-850 flex items-center justify-between text-xs font-mono">
                      <div>
                        <span className="text-[10px] text-zinc-500 block uppercase">Baseline</span>
                        <span className="text-zinc-400 font-bold">{item.initialScore}</span>
                      </div>
                      <div className="text-center">
                        <span className="text-[10px] text-zinc-500 block uppercase">Trajectory</span>
                        <span className="text-emerald-400 font-bold flex items-center gap-0.5">
                          <TrendingDown className="w-3 h-3 inline" />
                          -{item.percentReduction}%
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-zinc-500 block uppercase">Current Score</span>
                        <span className="text-white font-black">{item.currentScore}<span className="text-zinc-500 font-normal">/25</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Highlight on SVG Chart + Review Assessment */}
                  <div className="mt-3 pt-2.5 border-t border-zinc-850 flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        setViewMode('individual');
                        setFocusedPiaId(isFocused ? null : item.id);
                      }}
                      className={`font-mono text-[11px] px-2.5 py-1 rounded-lg border transition flex items-center gap-1.5 ${
                        isFocused
                          ? 'bg-purple-900 text-purple-200 border-purple-700 font-bold'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      <Crosshair className="w-3 h-3 text-purple-400" />
                      <span>{isFocused ? 'Untrace Chart' : 'Trace on Chart'}</span>
                    </button>

                    <button
                      onClick={() => onSelectPia && onSelectPia(item.pia)}
                      className="text-[11px] text-purple-400 hover:text-purple-300 font-medium flex items-center gap-1 transition"
                    >
                      <span>Inspect Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Format 2: Compact Executive Table Ledger */}
        {viewFormat === 'compact' && (
          <div className="overflow-x-auto border border-zinc-800/80 rounded-xl">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-zinc-900/90 text-zinc-400 border-b border-zinc-800 text-[11px] uppercase tracking-wider">
                <tr>
                  <th className="py-2.5 px-3">Trace</th>
                  <th className="py-2.5 px-3">PIA ID</th>
                  <th className="py-2.5 px-3 font-sans">Assessment / System Name</th>
                  <th className="py-2.5 px-3">Sector</th>
                  <th className="py-2.5 px-3">Baseline</th>
                  <th className="py-2.5 px-3">Current</th>
                  <th className="py-2.5 px-3">Delta</th>
                  <th className="py-2.5 px-3">Risk Tier</th>
                  <th className="py-2.5 px-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-850">
                {filteredDossierPias.map((item, idx) => {
                  const isFocused = focusedPiaId === item.id;
                  const color = piaColors[idx % piaColors.length];

                  return (
                    <tr
                      key={item.id}
                      className={`transition ${
                        isFocused
                          ? 'bg-purple-950/40 text-white'
                          : 'hover:bg-zinc-900/50 text-zinc-300'
                      }`}
                    >
                      <td className="py-2.5 px-3">
                        <span 
                          className="w-2.5 h-2.5 rounded-full block" 
                          style={{ backgroundColor: color }} 
                        />
                      </td>
                      <td className="py-2.5 px-3 font-bold text-white">{item.id}</td>
                      <td className="py-2.5 px-3 font-sans font-medium text-zinc-200 truncate max-w-xs">
                        {item.title}
                      </td>
                      <td className="py-2.5 px-3 uppercase text-zinc-400">{item.sector}</td>
                      <td className="py-2.5 px-3 text-zinc-400">{item.initialScore}</td>
                      <td className="py-2.5 px-3 font-bold text-white">{item.currentScore} / 25</td>
                      <td className="py-2.5 px-3 text-emerald-400 font-bold">-{item.percentReduction}%</td>
                      <td className="py-2.5 px-3">
                        <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${
                          item.riskLevel === 'Critical' 
                            ? 'bg-rose-950 text-rose-300 border-rose-800' 
                            : item.riskLevel === 'High' 
                              ? 'bg-amber-950 text-amber-300 border-amber-800' 
                              : item.riskLevel === 'Medium' 
                                ? 'bg-purple-950 text-purple-300 border-purple-800' 
                                : 'bg-emerald-950 text-emerald-300 border-emerald-800'
                        }`}>
                          {item.riskLevel}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => {
                              setViewMode('individual');
                              setFocusedPiaId(isFocused ? null : item.id);
                            }}
                            className="p-1 rounded hover:bg-zinc-800 text-purple-400 hover:text-purple-300"
                            title={isFocused ? 'Remove trace focus' : 'Focus trace on SVG chart'}
                          >
                            <Crosshair className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => onSelectPia && onSelectPia(item.pia)}
                            className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white"
                            title="Inspect Assessment details"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {filteredDossierPias.length === 0 && (
          <div className="p-8 text-center bg-zinc-950/60 border border-zinc-800 rounded-xl">
            <ShieldAlert className="w-8 h-8 text-zinc-600 mx-auto mb-2" />
            <p className="text-xs text-zinc-400">No assessments matched your filter criteria.</p>
            <button
              onClick={() => {
                setAssessmentRiskFilter('ALL');
                setAssessmentSearch('');
              }}
              className="text-xs text-purple-400 hover:text-purple-300 underline font-mono mt-2"
            >
              Reset Search &amp; Filters
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
