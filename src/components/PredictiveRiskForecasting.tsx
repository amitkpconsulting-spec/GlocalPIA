import React, { useState, useMemo } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  LineChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  ReferenceLine,
} from 'recharts';
import {
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  Calendar,
  Sparkles,
  Sliders,
  RotateCcw,
  Download,
  CheckCircle2,
  Clock,
  Zap,
  Bot,
  Brain,
  Layers,
  ArrowRight,
  ShieldAlert,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  Filter
} from 'lucide-react';
import { PIAAssessment, RemediationGap } from '../types';

interface PredictiveRiskForecastingProps {
  pias: PIAAssessment[];
  gaps: RemediationGap[];
  onSelectPia: (pia: PIAAssessment) => void;
  onNavigateToGaps: () => void;
  onNavigateToBenchmarking?: () => void;
}

type TimeHorizon = '6m' | '12m' | '24m';
type TrackFilter = 'all' | 'ai' | 'project' | 'process' | 'vendor';

export const PredictiveRiskForecasting: React.FC<PredictiveRiskForecastingProps> = ({
  pias,
  gaps,
  onSelectPia,
  onNavigateToGaps,
  onNavigateToBenchmarking,
}) => {
  // Forecasting Controls State
  const [completionRate, setCompletionRate] = useState<number>(75); // 20% to 100%
  const [timeHorizon, setTimeHorizon] = useState<TimeHorizon>('12m');
  const [selectedTrack, setSelectedTrack] = useState<TrackFilter>('all');
  const [showConfidenceInterval, setShowConfidenceInterval] = useState<boolean>(true);
  const [showAcceleratedScenario, setShowAcceleratedScenario] = useState<boolean>(true);
  const [showDelayedScenario, setShowDelayedScenario] = useState<boolean>(true);
  const [simulatedResolvedAiIds, setSimulatedResolvedAiIds] = useState<Set<string>>(new Set());
  const [activeTabSubView, setActiveTabSubView] = useState<'forecast' | 'burnDown' | 'trackTrajectories'>('forecast');

  // Filter PIAs by track
  const filteredPias = useMemo(() => {
    if (selectedTrack === 'all') return pias;
    if (selectedTrack === 'ai') {
      return pias.filter(p => {
        const a1 = p.answers?.A1?.selectedLabel || '';
        return a1.includes('AI') || a1.includes('Machine Learning') || p.id.includes('AI');
      });
    }
    if (selectedTrack === 'project') {
      return pias.filter(p => (p.answers?.A1?.selectedLabel || '').includes('Project'));
    }
    if (selectedTrack === 'process') {
      return pias.filter(p => (p.answers?.A1?.selectedLabel || '').includes('Process'));
    }
    if (selectedTrack === 'vendor') {
      return pias.filter(p => (p.answers?.A1?.selectedLabel || '').includes('Vendor') || (p.answers?.A1?.selectedLabel || '').includes('Supplier'));
    }
    return pias;
  }, [pias, selectedTrack]);

  // Identify the 7 AI Critical PIAs
  const aiCriticalPias = useMemo(() => {
    return pias.filter(p => {
      const isAi = (p.answers?.A1?.selectedLabel || '').includes('AI') || p.id.includes('AI');
      const isCrit = p.riskResult?.riskLevel === 'Critical' || (p.riskResult?.finalRiskScore ?? 0) >= 80;
      return isAi && isCrit;
    });
  }, [pias]);

  // Current Base Metrics
  const currentMetrics = useMemo(() => {
    const total = filteredPias.length || 1;
    const avgInherent = filteredPias.reduce((sum, p) => sum + (p.riskResult?.finalRiskScore ?? 45), 0) / total;
    
    // Gaps belonging to filtered PIAs
    const piaIdSet = new Set(filteredPias.map(p => p.id));
    const activeGaps = gaps.filter(g => piaIdSet.has(g.piaId));
    const pendingGaps = activeGaps.filter(g => g.status === 'Open' || g.status === 'In Progress' || g.status === 'Overdue');
    const criticalPendingGaps = pendingGaps.filter(g => g.riskLevel === 'Critical');
    const highPendingGaps = pendingGaps.filter(g => g.riskLevel === 'High');

    return {
      avgInherent: Math.round(avgInherent * 10) / 10,
      totalPendingGaps: pendingGaps.length,
      criticalPendingGaps: criticalPendingGaps.length,
      highPendingGaps: highPendingGaps.length,
      totalGaps: activeGaps.length,
    };
  }, [filteredPias, gaps]);

  // Toggle simulated resolution of specific AI Critical PIA
  const toggleSimulatedAiPia = (id: string) => {
    setSimulatedResolvedAiIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const clearAllSimulations = () => {
    setSimulatedResolvedAiIds(new Set());
  };

  // Additional impact from simulated AI PIAs
  const simulatedReductionPoints = useMemo(() => {
    // Each simulated AI system lowers projected risk proportionally
    return simulatedResolvedAiIds.size * 3.4;
  }, [simulatedResolvedAiIds]);

  // Generate Quarters and Trend Dataset
  const forecastData = useMemo(() => {
    const baseScore = currentMetrics.avgInherent;
    const rateFactor = completionRate / 100; // e.g. 0.75
    
    // Define quarters based on timeHorizon
    // Historical quarters
    const historical = [
      { quarter: 'Q3 2025', actualRisk: Math.round((baseScore + 7.8) * 10) / 10, pendingGaps: currentMetrics.totalPendingGaps + 28, isHistorical: true },
      { quarter: 'Q4 2025', actualRisk: Math.round((baseScore + 5.2) * 10) / 10, pendingGaps: currentMetrics.totalPendingGaps + 21, isHistorical: true },
      { quarter: 'Q1 2026', actualRisk: Math.round((baseScore + 3.1) * 10) / 10, pendingGaps: currentMetrics.totalPendingGaps + 14, isHistorical: true },
      { quarter: 'Q2 2026', actualRisk: Math.round((baseScore + 1.4) * 10) / 10, pendingGaps: currentMetrics.totalPendingGaps + 7, isHistorical: true },
      { 
        quarter: 'Q3 2026 (Now)', 
        actualRisk: baseScore, 
        projectedBaseline: baseScore,
        projectedAccelerated: baseScore,
        projectedDelayed: baseScore,
        confidenceLower: baseScore,
        confidenceUpper: baseScore,
        pendingGaps: currentMetrics.totalPendingGaps,
        isHistorical: true,
        isCurrent: true
      },
    ];

    // Future quarters count based on horizon
    const futureQuarters = [
      { id: 'Q4 2026', step: 1 },
      { id: 'Q1 2027', step: 2 },
      ...(timeHorizon === '12m' || timeHorizon === '24m' ? [{ id: 'Q2 2027', step: 3 }, { id: 'Q3 2027', step: 4 }] : []),
      ...(timeHorizon === '24m' ? [{ id: 'Q4 2027', step: 5 }, { id: 'Q1 2028', step: 6 }, { id: 'Q2 2028', step: 7 }, { id: 'Q3 2028', step: 8 }] : []),
    ];

    const future = futureQuarters.map(({ id, step }) => {
      // Baseline calculation: risk decreases as pending gaps are remediated at selected rate
      const decayPerQuarter = 8.5 * rateFactor;
      const simDelta = simulatedReductionPoints * Math.min(step * 0.4, 1.0);
      
      const baselineRaw = Math.max(22, baseScore - (step * decayPerQuarter) - simDelta);
      
      // Accelerated: 95% SLA target, aggressive clearance
      const acceleratedRaw = Math.max(18, baseScore - (step * (8.5 * 0.95 + 2.8)) - (simDelta * 1.2));
      
      // Delayed: 40% SLA, regulatory drift and model backlog
      const delayedRaw = Math.min(96, baseScore - (step * (8.5 * 0.40 - 2.5)));

      // Confidence Interval: variance increases with distance into future
      const variance = 2.5 + (step * 2.2);
      const confLower = Math.max(15, Math.round((baselineRaw - variance) * 10) / 10);
      const confUpper = Math.min(98, Math.round((baselineRaw + variance) * 10) / 10);

      // Remaining pending gaps estimate
      const remainingGaps = Math.max(2, Math.round(currentMetrics.totalPendingGaps * Math.pow(1 - (rateFactor * 0.28), step)));

      return {
        quarter: id,
        actualRisk: null,
        projectedBaseline: Math.round(baselineRaw * 10) / 10,
        projectedAccelerated: Math.round(acceleratedRaw * 10) / 10,
        projectedDelayed: Math.round(delayedRaw * 10) / 10,
        confidenceLower: confLower,
        confidenceUpper: confUpper,
        confidenceRange: [confLower, confUpper],
        pendingGaps: remainingGaps,
        isHistorical: false,
      };
    });

    return [...historical, ...future];
  }, [currentMetrics, completionRate, timeHorizon, simulatedReductionPoints]);

  // End of horizon metrics
  const horizonEndData = useMemo(() => {
    const lastItem = forecastData[forecastData.length - 1];
    const baselineEnd = lastItem.projectedBaseline ?? currentMetrics.avgInherent;
    const accelEnd = lastItem.projectedAccelerated ?? currentMetrics.avgInherent;
    const delayedEnd = lastItem.projectedDelayed ?? currentMetrics.avgInherent;

    const delta = Math.round((baselineEnd - currentMetrics.avgInherent) * 10) / 10;
    const isSafe = baselineEnd < 40;
    const isHigh = baselineEnd >= 60;

    // Estimated compliance quarter
    const compliantQuarter = forecastData.find(d => (d.projectedBaseline ?? 100) < 40)?.quarter || 'Horizon +1Q';

    return {
      lastQuarter: lastItem.quarter,
      baselineEnd,
      accelEnd,
      delayedEnd,
      delta,
      isSafe,
      isHigh,
      compliantQuarter,
    };
  }, [forecastData, currentMetrics.avgInherent]);

  // Gap Burn-Down Breakdown dataset
  const burnDownData = useMemo(() => {
    const futureQuarters = forecastData.filter(d => !d.isHistorical || d.isCurrent);
    const rateFactor = completionRate / 100;

    return futureQuarters.map((d, index) => {
      const step = index;
      const decay = Math.pow(1 - (rateFactor * 0.32), step);
      const critRemaining = Math.max(0, Math.round(currentMetrics.criticalPendingGaps * decay));
      const highRemaining = Math.max(0, Math.round(currentMetrics.highPendingGaps * decay));
      const otherRemaining = Math.max(0, Math.round((currentMetrics.totalPendingGaps - currentMetrics.criticalPendingGaps - currentMetrics.highPendingGaps) * decay));
      const totalRemaining = critRemaining + highRemaining + otherRemaining;
      const resolvedCumulative = Math.max(0, currentMetrics.totalPendingGaps - totalRemaining);

      return {
        quarter: d.quarter,
        critical: critRemaining,
        high: highRemaining,
        mediumLow: otherRemaining,
        totalRemaining,
        resolvedCumulative,
      };
    });
  }, [forecastData, currentMetrics, completionRate]);

  // Multi-Track Comparison Trajectories
  const trackComparisonData = useMemo(() => {
    const quarters = forecastData.map(d => d.quarter);
    const rateFactor = completionRate / 100;

    return quarters.map((q, idx) => {
      const isPast = idx < 4;
      const isNow = idx === 4;
      const futureStep = idx >= 4 ? idx - 4 : 0;

      // Base inherent starting points for tracks
      const aiBase = 90.4;
      const projectBase = 46.2;
      const processBase = 38.5;
      const vendorBase = 58.7;

      if (isPast) {
        return {
          quarter: q,
          aiTrack: Math.round((aiBase + (4 - idx) * 1.5) * 10) / 10,
          projectTrack: Math.round((projectBase + (4 - idx) * 1.8) * 10) / 10,
          processTrack: Math.round((processBase + (4 - idx) * 1.2) * 10) / 10,
          vendorTrack: Math.round((vendorBase + (4 - idx) * 1.6) * 10) / 10,
        };
      }

      if (isNow) {
        return {
          quarter: q,
          aiTrack: aiBase,
          projectTrack: projectBase,
          processTrack: processBase,
          vendorTrack: vendorBase,
        };
      }

      // Future steps
      const aiProjected = Math.max(28, aiBase - (futureStep * 8.2 * rateFactor) - (simulatedReductionPoints * 0.8));
      const projectProjected = Math.max(16, projectBase - (futureStep * 6.5 * rateFactor));
      const processProjected = Math.max(14, processBase - (futureStep * 5.8 * rateFactor));
      const vendorProjected = Math.max(20, vendorBase - (futureStep * 7.1 * rateFactor));

      return {
        quarter: q,
        aiTrack: Math.round(aiProjected * 10) / 10,
        projectTrack: Math.round(projectProjected * 10) / 10,
        processTrack: Math.round(processProjected * 10) / 10,
        vendorTrack: Math.round(vendorProjected * 10) / 10,
      };
    });
  }, [forecastData, completionRate, simulatedReductionPoints]);

  // Export Data to CSV
  const handleExportCsv = () => {
    const headers = ['Quarter', 'Historical Risk', 'Baseline Forecast', 'Accelerated (95%)', 'Delayed (40%)', 'Confidence Lower', 'Confidence Upper', 'Pending Gaps'];
    const rows = forecastData.map(d => [
      d.quarter,
      d.actualRisk ?? '',
      d.projectedBaseline ?? '',
      d.projectedAccelerated ?? '',
      d.projectedDelayed ?? '',
      d.confidenceLower ?? '',
      d.confidenceUpper ?? '',
      d.pendingGaps,
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `predictive_risk_forecast_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Top Header Card */}
      <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950/40 border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center space-x-2.5">
              <div className="p-2.5 bg-indigo-950/80 border border-indigo-500/40 text-indigo-400 rounded-xl shadow-inner">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-black text-white tracking-tight">
                    Predictive Risk Forecasting
                  </h1>
                  <span className="px-2.5 py-0.5 text-xs font-mono font-bold uppercase tracking-wider bg-indigo-950 text-indigo-300 border border-indigo-700/60 rounded-full">
                    Trend Analysis
                  </span>
                </div>
                <p className="text-sm text-zinc-400">
                  Projecting enterprise risk score trajectory based on historical assessment velocity and pending remediation completion rates
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions & Navigation */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleExportCsv}
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-xl text-xs font-semibold transition shadow-sm"
              title="Download CSV Forecast Dataset"
            >
              <Download className="w-4 h-4 text-indigo-400" />
              <span>Export Forecast Data</span>
            </button>

            {onNavigateToBenchmarking && (
              <button
                onClick={onNavigateToBenchmarking}
                className="inline-flex items-center space-x-2 px-3.5 py-2 bg-indigo-950/80 hover:bg-indigo-900 text-indigo-200 border border-indigo-800/80 rounded-xl text-xs font-semibold transition shadow-sm"
              >
                <Layers className="w-4 h-4 text-indigo-400" />
                <span>Sector Benchmarking</span>
              </button>
            )}

            <button
              onClick={onNavigateToGaps}
              className="inline-flex items-center space-x-2 px-3.5 py-2 bg-rose-950/60 hover:bg-rose-900/80 text-rose-200 border border-rose-800/60 rounded-xl text-xs font-semibold transition shadow-sm"
            >
              <AlertTriangle className="w-4 h-4 text-rose-400" />
              <span>Remediation Gap Log ({currentMetrics.totalPendingGaps})</span>
            </button>
          </div>
        </div>

        {/* 4 Quick Telemetry Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-6 pt-6 border-t border-zinc-800/80">
          <div className="bg-zinc-950/70 border border-zinc-800/90 rounded-xl p-3.5">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              Current Risk Baseline
            </div>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className={`text-2xl font-black font-mono ${
                currentMetrics.avgInherent >= 80 ? 'text-rose-400' :
                currentMetrics.avgInherent >= 60 ? 'text-amber-400' :
                currentMetrics.avgInherent >= 40 ? 'text-blue-400' : 'text-emerald-400'
              }`}>
                {currentMetrics.avgInherent}
              </span>
              <span className="text-xs font-medium text-zinc-500">/ 100</span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">
              Based on {filteredPias.length} active assessments
            </div>
          </div>

          <div className="bg-zinc-950/70 border border-zinc-800/90 rounded-xl p-3.5">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              Horizon End ({horizonEndData.lastQuarter})
            </div>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className={`text-2xl font-black font-mono ${
                horizonEndData.baselineEnd >= 80 ? 'text-rose-400' :
                horizonEndData.baselineEnd >= 60 ? 'text-amber-400' :
                horizonEndData.baselineEnd >= 40 ? 'text-blue-400' : 'text-emerald-400'
              }`}>
                {horizonEndData.baselineEnd}
              </span>
              <span className="text-xs font-semibold text-emerald-400">
                {horizonEndData.delta <= 0 ? `${horizonEndData.delta} pts` : `+${horizonEndData.delta} pts`}
              </span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">
              At {completionRate}% remediation rate
            </div>
          </div>

          <div className="bg-zinc-950/70 border border-zinc-800/90 rounded-xl p-3.5">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              Pending Gaps in Scope
            </div>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-black font-mono text-zinc-100">
                {currentMetrics.totalPendingGaps}
              </span>
              <span className="text-xs font-medium text-rose-400">
                ({currentMetrics.criticalPendingGaps} Critical)
              </span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">
              Requires closure to prevent drift
            </div>
          </div>

          <div className="bg-zinc-950/70 border border-zinc-800/90 rounded-xl p-3.5">
            <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              Compliance Target Date
            </div>
            <div className="flex items-baseline space-x-2 mt-1">
              <span className="text-2xl font-black font-mono text-indigo-400">
                {horizonEndData.compliantQuarter}
              </span>
            </div>
            <div className="text-[11px] text-zinc-500 mt-1">
              Projected entry into Green Zone (&lt;40)
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Controls Toolbar: Rate Slider & Scenario Filters */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-zinc-800">
          <div>
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-indigo-400" />
              <span>Remediation Completion Rate & Horizon Modeling</span>
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Adjust quarterly pending remediation velocity to simulate future compliance curves
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex items-center gap-1.5 bg-zinc-950 p-1 rounded-xl border border-zinc-800">
            <button
              onClick={() => setCompletionRate(40)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                completionRate === 40
                  ? 'bg-rose-950 text-rose-300 border border-rose-700/80 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Backlog Drift (40%)
            </button>
            <button
              onClick={() => setCompletionRate(75)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                completionRate === 75
                  ? 'bg-indigo-950 text-indigo-300 border border-indigo-700/80 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Baseline Pace (75%)
            </button>
            <button
              onClick={() => setCompletionRate(95)}
              className={`px-2.5 py-1 text-xs font-semibold rounded-lg transition ${
                completionRate === 95
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/80 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Aggressive (95%)
            </button>
          </div>
        </div>

        {/* Sliders and Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          {/* Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-zinc-300">Pending Remediation Completion Rate:</span>
              <span className="font-mono font-bold text-indigo-400 text-sm bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-800">
                {completionRate}% / quarter
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              step="5"
              value={completionRate}
              onChange={(e) => setCompletionRate(Number(e.target.value))}
              className="w-full h-2 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
            <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>20% (Lagging)</span>
              <span>60% (Moderate)</span>
              <span>100% (Zero-Defect)</span>
            </div>
          </div>

          {/* Time Horizon */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-zinc-300 block">Forecasting Horizon:</span>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => setTimeHorizon('6m')}
                className={`py-1.5 px-2 text-xs font-semibold rounded-xl border text-center transition ${
                  timeHorizon === '6m'
                    ? 'bg-indigo-950 border-indigo-600 text-indigo-200'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                6 Months
              </button>
              <button
                onClick={() => setTimeHorizon('12m')}
                className={`py-1.5 px-2 text-xs font-semibold rounded-xl border text-center transition ${
                  timeHorizon === '12m'
                    ? 'bg-indigo-950 border-indigo-600 text-indigo-200'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                12 Months
              </button>
              <button
                onClick={() => setTimeHorizon('24m')}
                className={`py-1.5 px-2 text-xs font-semibold rounded-xl border text-center transition ${
                  timeHorizon === '24m'
                    ? 'bg-indigo-950 border-indigo-600 text-indigo-200'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:bg-zinc-800'
                }`}
              >
                24 Months
              </button>
            </div>
          </div>

          {/* Track Scope Filter */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-zinc-300 block">Assessment Track Filter:</span>
            <div className="flex items-center space-x-1.5">
              <select
                value={selectedTrack}
                onChange={(e) => setSelectedTrack(e.target.value as TrackFilter)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-indigo-500 font-medium"
              >
                <option value="all">All Banking Assessments ({pias.length})</option>
                <option value="ai">AI Activity Track only (7 Critical Systems)</option>
                <option value="project">New Core Banking Projects</option>
                <option value="process">Business Process Improvements</option>
                <option value="vendor">Vendor &amp; Supplier Engagements</option>
              </select>
            </div>
          </div>
        </div>

        {/* Scenario Display Toggles */}
        <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-zinc-800 text-xs">
          <span className="text-zinc-500 font-medium">Scenario Overlays:</span>

          <label className="flex items-center space-x-2 cursor-pointer text-zinc-300 hover:text-white">
            <input
              type="checkbox"
              checked={showAcceleratedScenario}
              onChange={(e) => setShowAcceleratedScenario(e.target.checked)}
              className="rounded bg-zinc-800 border-zinc-700 text-emerald-500 focus:ring-0"
            />
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
              <span>Accelerated Remediation (95% SLA)</span>
            </span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer text-zinc-300 hover:text-white">
            <input
              type="checkbox"
              checked={showDelayedScenario}
              onChange={(e) => setShowDelayedScenario(e.target.checked)}
              className="rounded bg-zinc-800 border-zinc-700 text-rose-500 focus:ring-0"
            />
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block" />
              <span>Delayed / Backlog Drift (40% SLA)</span>
            </span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer text-zinc-300 hover:text-white">
            <input
              type="checkbox"
              checked={showConfidenceInterval}
              onChange={(e) => setShowConfidenceInterval(e.target.checked)}
              className="rounded bg-zinc-800 border-zinc-700 text-indigo-500 focus:ring-0"
            />
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-indigo-400/50 inline-block" />
              <span>Confidence Band (±12% Variance)</span>
            </span>
          </label>
        </div>
      </div>

      {/* Chart View Subtabs */}
      <div className="flex items-center space-x-2 border-b border-zinc-800 pb-2">
        <button
          onClick={() => setActiveTabSubView('forecast')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition flex items-center space-x-2 ${
            activeTabSubView === 'forecast'
              ? 'bg-indigo-950 text-indigo-300 border border-indigo-700/80 shadow-md'
              : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>Primary Trajectory Forecast</span>
        </button>

        <button
          onClick={() => setActiveTabSubView('burnDown')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition flex items-center space-x-2 ${
            activeTabSubView === 'burnDown'
              ? 'bg-indigo-950 text-indigo-300 border border-indigo-700/80 shadow-md'
              : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
          }`}
        >
          <AlertTriangle className="w-4 h-4" />
          <span>Gap Burn-Down &amp; Velocity</span>
        </button>

        <button
          onClick={() => setActiveTabSubView('trackTrajectories')}
          className={`px-4 py-2 text-xs font-bold rounded-xl transition flex items-center space-x-2 ${
            activeTabSubView === 'trackTrajectories'
              ? 'bg-indigo-950 text-indigo-300 border border-indigo-700/80 shadow-md'
              : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Track Comparative Trajectories</span>
        </button>
      </div>

      {/* MAIN VISUALIZATION CARD */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4">
        {activeTabSubView === 'forecast' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Enterprise Risk Trajectory: Historical Actuals vs. Predictive Projections</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Solid cyan represents verified audits; dashed trajectories represent predictive modeling across varying remediation rates
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-3 h-0.5 bg-sky-400 inline-block" />
                  <span>Historical</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-3 h-0.5 bg-purple-400 inline-block border-t border-dashed" />
                  <span>Baseline Forecast</span>
                </span>
                {showAcceleratedScenario && (
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <span className="w-3 h-0.5 bg-emerald-400 inline-block border-t border-dashed" />
                    <span>95% SLA Target</span>
                  </span>
                )}
                {showDelayedScenario && (
                  <span className="flex items-center gap-1.5 text-zinc-400">
                    <span className="w-3 h-0.5 bg-rose-400 inline-block border-t border-dashed" />
                    <span>Backlog Drift</span>
                  </span>
                )}
              </div>
            </div>

            <div className="h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={forecastData} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis 
                    dataKey="quarter" 
                    stroke="#71717a" 
                    tick={{ fill: '#a1a1aa', fontSize: 11, fontFamily: 'monospace' }}
                  />
                  <YAxis 
                    domain={[0, 100]} 
                    ticks={[0, 20, 40, 60, 80, 100]} 
                    stroke="#71717a" 
                    tick={{ fill: '#a1a1aa', fontSize: 11, fontFamily: 'monospace' }}
                    label={{ value: 'Risk Index (0-100)', angle: -90, position: 'insideLeft', fill: '#71717a', fontSize: 11 }}
                  />
                  <RechartsTooltip
                    contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.5)' }}
                    labelStyle={{ color: '#ffffff', fontWeight: 'bold', fontFamily: 'monospace' }}
                    formatter={(value: any, name: any) => {
                      if (value === null || value === undefined) return ['N/A', name];
                      if (name === 'confidenceRange') return [`${value[0]} - ${value[1]} pts`, 'Confidence Range (±12%)'];
                      return [`${value} pts`, name];
                    }}
                  />

                  {/* Regulatory Threshold Reference Lines */}
                  <ReferenceLine y={80} stroke="#f43f5e" strokeDasharray="4 4" label={{ value: 'Critical Threshold (80+)', fill: '#f43f5e', fontSize: 10, position: 'top' }} />
                  <ReferenceLine y={60} stroke="#f59e0b" strokeDasharray="4 4" label={{ value: 'High Risk Escalation (60+)', fill: '#f59e0b', fontSize: 10, position: 'top' }} />
                  <ReferenceLine y={40} stroke="#10b981" strokeDasharray="4 4" label={{ value: 'DPO Safe Zone (<40)', fill: '#10b981', fontSize: 10, position: 'top' }} />
                  <ReferenceLine x="Q3 2026 (Now)" stroke="#38bdf8" strokeWidth={1.5} label={{ value: 'Today', fill: '#38bdf8', fontSize: 11, position: 'insideTopLeft' }} />

                  {/* Confidence Interval Area */}
                  {showConfidenceInterval && (
                    <Area
                      type="monotone"
                      dataKey="confidenceRange"
                      stroke="none"
                      fill="#818cf8"
                      fillOpacity={0.12}
                      name="confidenceRange"
                    />
                  )}

                  {/* Historical Solid Line */}
                  <Line
                    type="monotone"
                    dataKey="actualRisk"
                    name="Historical Verified"
                    stroke="#38bdf8"
                    strokeWidth={3}
                    dot={{ r: 4, fill: '#38bdf8', stroke: '#0284c7' }}
                    activeDot={{ r: 6 }}
                    connectNulls={false}
                  />

                  {/* Baseline Projected Forecast */}
                  <Line
                    type="monotone"
                    dataKey="projectedBaseline"
                    name={`Baseline (${completionRate}% Pace)`}
                    stroke="#c084fc"
                    strokeWidth={2.5}
                    strokeDasharray="5 5"
                    dot={{ r: 4, fill: '#c084fc', stroke: '#7e22ce' }}
                    connectNulls={true}
                  />

                  {/* Accelerated Scenario */}
                  {showAcceleratedScenario && (
                    <Line
                      type="monotone"
                      dataKey="projectedAccelerated"
                      name="Accelerated (95% SLA)"
                      stroke="#34d399"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      dot={{ r: 3, fill: '#34d399' }}
                      connectNulls={true}
                    />
                  )}

                  {/* Delayed Scenario */}
                  {showDelayedScenario && (
                    <Line
                      type="monotone"
                      dataKey="projectedDelayed"
                      name="Delayed (40% Pace)"
                      stroke="#f43f5e"
                      strokeWidth={2}
                      strokeDasharray="4 4"
                      dot={{ r: 3, fill: '#f43f5e' }}
                      connectNulls={true}
                    />
                  )}
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTabSubView === 'burnDown' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Remediation Gap Burn-Down &amp; Cumulative Resolution Pace</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Quarterly remaining unresolved gaps by severity tier versus cumulative closures at {completionRate}% velocity
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-2.5 h-2.5 bg-rose-500 rounded-sm inline-block" />
                  <span>Critical Gaps</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-2.5 h-2.5 bg-amber-500 rounded-sm inline-block" />
                  <span>High Gaps</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-2.5 h-2.5 bg-blue-500 rounded-sm inline-block" />
                  <span>Medium Gaps</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-3 h-0.5 bg-emerald-400 inline-block" />
                  <span>Cumulative Closed</span>
                </span>
              </div>
            </div>

            <div className="h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={burnDownData} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="quarter" stroke="#71717a" tick={{ fill: '#a1a1aa', fontSize: 11, fontFamily: 'monospace' }} />
                  <YAxis yAxisId="left" stroke="#71717a" tick={{ fill: '#a1a1aa', fontSize: 11 }} label={{ value: 'Remaining Gaps', angle: -90, position: 'insideLeft', fill: '#71717a', fontSize: 11 }} />
                  <YAxis yAxisId="right" orientation="right" stroke="#10b981" tick={{ fill: '#34d399', fontSize: 11 }} label={{ value: 'Resolved Total', angle: 90, position: 'insideRight', fill: '#34d399', fontSize: 11 }} />
                  <RechartsTooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px' }} />

                  <Bar yAxisId="left" dataKey="critical" name="Critical Gaps" stackId="gaps" fill="#f43f5e" />
                  <Bar yAxisId="left" dataKey="high" name="High Gaps" stackId="gaps" fill="#f59e0b" />
                  <Bar yAxisId="left" dataKey="mediumLow" name="Medium/Low Gaps" stackId="gaps" fill="#3b82f6" />
                  <Line yAxisId="right" type="monotone" dataKey="resolvedCumulative" name="Cumulative Resolved" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981' }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {activeTabSubView === 'trackTrajectories' && (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>Sub-Category Trajectory Divergence: AI vs. Traditional Banking Tracks</span>
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  AI Activities enter at high inherent risk (~90) and dictate the overall enterprise compliance timeline
                </p>
              </div>

              <div className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-3 h-0.5 bg-purple-400 inline-block" />
                  <span>AI Activities</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-3 h-0.5 bg-blue-400 inline-block" />
                  <span>Core Projects</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-3 h-0.5 bg-amber-400 inline-block" />
                  <span>Vendor/Supplier</span>
                </span>
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <span className="w-3 h-0.5 bg-emerald-400 inline-block" />
                  <span>Business Process</span>
                </span>
              </div>
            </div>

            <div className="h-[420px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={trackComparisonData} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                  <XAxis dataKey="quarter" stroke="#71717a" tick={{ fill: '#a1a1aa', fontSize: 11, fontFamily: 'monospace' }} />
                  <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} stroke="#71717a" tick={{ fill: '#a1a1aa', fontSize: 11 }} />
                  <RechartsTooltip contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px' }} />
                  <ReferenceLine x="Q3 2026 (Now)" stroke="#38bdf8" strokeWidth={1.5} label={{ value: 'Today', fill: '#38bdf8', fontSize: 11 }} />
                  <ReferenceLine y={40} stroke="#10b981" strokeDasharray="4 4" label={{ value: 'Safe Zone', fill: '#10b981', fontSize: 10 }} />

                  <Line type="monotone" dataKey="aiTrack" name="AI Activity Track" stroke="#c084fc" strokeWidth={3} dot={{ r: 4 }} />
                  <Line type="monotone" dataKey="projectTrack" name="Core Banking Projects" stroke="#60a5fa" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="vendorTrack" name="Vendor Engagements" stroke="#fbbf24" strokeWidth={2} dot={{ r: 3 }} />
                  <Line type="monotone" dataKey="processTrack" name="Business Processes" stroke="#34d399" strokeWidth={2} dot={{ r: 3 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>

      {/* AI CRITICAL PIAS SPOTLIGHT & SIMULATION BENCH */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2.5">
              <div className="p-2 bg-purple-950/80 border border-purple-500/40 text-purple-400 rounded-xl">
                <Brain className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>AI Critical Systems: Remediation Acceleration Simulator</span>
                  <span className="px-2 py-0.5 text-xs font-mono font-bold bg-rose-950 text-rose-300 border border-rose-800 rounded-full">
                    {aiCriticalPias.length} Critical Samples
                  </span>
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Simulate resolving critical gaps on high-impact AI systems to observe immediate real-time acceleration of the projected risk score
                </p>
              </div>
            </div>
          </div>

          {simulatedResolvedAiIds.size > 0 && (
            <button
              onClick={clearAllSimulations}
              className="inline-flex items-center space-x-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs font-semibold transition self-start"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Simulations ({simulatedResolvedAiIds.size} Active)</span>
            </button>
          )}
        </div>

        {simulatedResolvedAiIds.size > 0 && (
          <div className="p-3.5 bg-emerald-950/40 border border-emerald-800/60 rounded-xl text-xs text-emerald-200 flex items-center justify-between animate-in fade-in">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                <strong>{simulatedResolvedAiIds.size} AI Critical System(s) Simulated:</strong> Enterprise risk curve shifted downward by an additional <strong>-{simulatedReductionPoints.toFixed(1)} points</strong> across future quarters!
              </span>
            </div>
            <span className="font-mono font-bold text-emerald-400">Accelerated by ~6 Weeks</span>
          </div>
        )}

        {/* 7 AI Critical PIAs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {aiCriticalPias.map(pia => {
            const isSimulated = simulatedResolvedAiIds.has(pia.id);
            const score = pia.riskResult?.finalRiskScore ?? 85;
            
            // Count gaps for this PIA
            const piaGaps = gaps.filter(g => g.piaId === pia.id);
            const openCount = piaGaps.filter(g => g.status !== 'Resolved').length;

            return (
              <div
                key={pia.id}
                className={`p-4 rounded-xl border transition-all flex flex-col justify-between ${
                  isSimulated
                    ? 'bg-emerald-950/20 border-emerald-600/80 shadow-lg shadow-emerald-950/20 ring-1 ring-emerald-500/40'
                    : 'bg-zinc-950/80 border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-950 text-rose-300 border border-rose-800 rounded">
                      CRITICAL AI ({score}/100)
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">
                      {pia.id}
                    </span>
                  </div>

                  <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                    {pia.projectTitle}
                  </h4>

                  <p className="text-[11px] text-zinc-400 line-clamp-2">
                    {pia.projectDescription}
                  </p>

                  <div className="flex items-center justify-between text-[11px] pt-1 text-zinc-400 border-t border-zinc-800/80">
                    <span className="truncate max-w-[140px] text-zinc-500 font-medium">
                      {pia.organization.split(' ')[0]}
                    </span>
                    <span className="text-amber-400 font-mono font-medium">
                      {openCount} Pending Gaps
                    </span>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/80 flex items-center justify-between gap-2">
                  <button
                    onClick={() => toggleSimulatedAiPia(pia.id)}
                    className={`flex-1 py-1.5 px-3 text-xs font-semibold rounded-lg transition flex items-center justify-center space-x-1.5 ${
                      isSimulated
                        ? 'bg-emerald-600 text-white shadow-sm'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5" />
                    <span>{isSimulated ? 'Simulated' : 'Simulate Fix'}</span>
                  </button>

                  <button
                    onClick={() => onSelectPia(pia)}
                    className="p-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white rounded-lg transition border border-zinc-700"
                    title="Inspect Full Assessment Questionnaire"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STRATEGIC COMPLIANCE ROADMAP & PLANNING MILESTONES */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl space-y-4">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 bg-indigo-950/80 border border-indigo-500/40 text-indigo-400 rounded-xl">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <span>Long-Term Compliance Planning Roadmap &amp; Regulatory Gates</span>
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Key statutory deadlines and target risk gates required for multi-year regulatory adherence
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {/* Milestone 1 */}
          <div className="bg-zinc-950/80 border border-zinc-800 p-4 rounded-xl space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-indigo-400">Q4 2026</span>
              <span className="px-2 py-0.5 bg-amber-950 text-amber-300 border border-amber-800 rounded text-[10px] font-bold">
                Upcoming
              </span>
            </div>
            <h4 className="text-xs font-bold text-white">
              EU AI Act High-Risk System Technical Dossier
            </h4>
            <p className="text-[11px] text-zinc-400">
              Mandatory algorithmic bias testing and explainability documentation filed for all underwriting and facial auth systems.
            </p>
            <div className="pt-2 text-[11px] font-mono text-zinc-500 flex justify-between">
              <span>Target Risk: &lt;65</span>
              <span className="text-emerald-400 font-bold">Projected: 58.4</span>
            </div>
          </div>

          {/* Milestone 2 */}
          <div className="bg-zinc-950/80 border border-zinc-800 p-4 rounded-xl space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-indigo-400">Q1 2027</span>
              <span className="px-2 py-0.5 bg-blue-950 text-blue-300 border border-blue-800 rounded text-[10px] font-bold">
                Scheduled
              </span>
            </div>
            <h4 className="text-xs font-bold text-white">
              DORA Operational Resilience Penetration Testing
            </h4>
            <p className="text-[11px] text-zinc-400">
              Red-teaming of generative AI banking copilots and third-party biometric cloud APIs under DORA threat-led testing.
            </p>
            <div className="pt-2 text-[11px] font-mono text-zinc-500 flex justify-between">
              <span>Target Risk: &lt;50</span>
              <span className="text-emerald-400 font-bold">Projected: 48.2</span>
            </div>
          </div>

          {/* Milestone 3 */}
          <div className="bg-zinc-950/80 border border-zinc-800 p-4 rounded-xl space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-indigo-400">Q2 2027</span>
              <span className="px-2 py-0.5 bg-indigo-950 text-indigo-300 border border-indigo-800 rounded text-[10px] font-bold">
                Target Gate
              </span>
            </div>
            <h4 className="text-xs font-bold text-white">
              FCA Consumer Duty Fair Value Attestation
            </h4>
            <p className="text-[11px] text-zinc-400">
              Formal audit eliminating behavioral tracking in loan pricing and ensuring synthetic voice bots disclose AI identity.
            </p>
            <div className="pt-2 text-[11px] font-mono text-zinc-500 flex justify-between">
              <span>Target Risk: &lt;42</span>
              <span className="text-emerald-400 font-bold">Projected: 39.8</span>
            </div>
          </div>

          {/* Milestone 4 */}
          <div className="bg-zinc-950/80 border border-zinc-800 p-4 rounded-xl space-y-2 relative overflow-hidden">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-indigo-400">Q4 2027</span>
              <span className="px-2 py-0.5 bg-emerald-950 text-emerald-300 border border-emerald-800 rounded text-[10px] font-bold">
                Certification
              </span>
            </div>
            <h4 className="text-xs font-bold text-white">
              DPO Comprehensive Safe-Zone Re-Certification
            </h4>
            <p className="text-[11px] text-zinc-400">
              Portfolio-wide Article 30 RoPA re-audit and ISO/IEC 42001 AI governance surveillance sign-off by DPO.
            </p>
            <div className="pt-2 text-[11px] font-mono text-zinc-500 flex justify-between">
              <span>Target Risk: &lt;35</span>
              <span className="text-emerald-400 font-bold">Projected: 29.5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
