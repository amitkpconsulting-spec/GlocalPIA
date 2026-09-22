import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Presentation,
  Maximize2,
  Minimize2,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ShieldAlert,
  ShieldCheck,
  FileText,
  TrendingUp,
  Grid,
  Flame,
  Activity,
  Play,
  Pause,
  Printer,
  Sparkles,
  Award,
  ChevronDown,
  Layers,
  TrendingDown,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Target,
  RefreshCw,
  Bot,
  Clock
} from 'lucide-react';
import { PIAAssessment, RemediationGap, AppUser, SystemSetupConfig } from '../types';
import { calculatePIARisk } from '../utils/riskCalculator';
import { evaluateOverallPIAStatus } from '../utils/piaStatusLogic';
import { aggregateExecutivePiaSnapshot, ExecutiveSnapshotResult } from '../utils/localAiEngine';

// Page Elements
import { OpenRiskByClassification } from './executive/OpenRiskByClassification';
import { ComplianceTactics } from './executive/ComplianceTactics';
import { PiaStatusOverview } from './executive/PiaStatusOverview';
import { PredictiveRiskForecasting } from './PredictiveRiskForecasting';
import { FrameworkRiskHeatmapWidget } from './FrameworkRiskHeatmapWidget';
import { ComplianceRiskHeatmap } from './ComplianceRiskHeatmap';
import { RiskProgressionLineChart } from './RiskProgressionLineChart';

interface ExecutiveSummaryViewProps {
  pias: PIAAssessment[];
  gaps: RemediationGap[];
  currentUser: AppUser | null;
  systemSetup: SystemSetupConfig;
  onSelectPia?: (pia: PIAAssessment) => void;
  onNavigateToGaps?: () => void;
  onNavigateToDirectory?: () => void;
  onRefreshData?: () => Promise<void> | void;
}

export type ReportingCycleId = 'q1-2026' | 'h1-2026' | 'annual-2025-2026' | 'rolling-90';

interface ReportingCycleMeta {
  id: ReportingCycleId;
  label: string;
  subtext: string;
  dateRange: string;
  daysRemaining: number;
  mandate: string;
  auditJurisdiction: string;
}

const REPORTING_CYCLES: ReportingCycleMeta[] = [
  {
    id: 'q1-2026',
    label: 'Q1 2026 Executive Cycle',
    subtext: 'Current Active Audit Period',
    dateRange: '01 Jan 2026 – 31 Mar 2026',
    daysRemaining: 19,
    mandate: 'Enterprise AI Governance, EU AI Act Enforcement & Cross-Border Attestation',
    auditJurisdiction: 'ICO (UK), EDPB / EU AI Office, DPDP Board of India',
  },
  {
    id: 'h1-2026',
    label: 'H1 2026 Half-Year Target',
    subtext: 'Strategic 6-Month Trajectory',
    dateRange: '01 Jan 2026 – 30 Jun 2026',
    daysRemaining: 110,
    mandate: 'Algorithmic Transparency, Biometric Guardrails & Third-Party Recertification',
    auditJurisdiction: 'Global Unified Privacy & CISO Oversight',
  },
  {
    id: 'annual-2025-2026',
    label: 'Annual Board Cycle (2025–2026)',
    subtext: 'Trailing 12-Month Attestation',
    dateRange: '01 Apr 2025 – 31 Mar 2026',
    daysRemaining: 19,
    mandate: 'Statutory Data Protection Officer Annual Report to the Supervisory Board',
    auditJurisdiction: 'Board Risk & Audit Committee (BRAC)',
  },
  {
    id: 'rolling-90',
    label: 'Rolling 90-Day Cadence',
    subtext: 'Continuous Assurance Feed',
    dateRange: '13 Dec 2025 – 11 Mar 2026',
    daysRemaining: 0,
    mandate: 'Real-Time DPO & CISO Automated Telemetry & Risk Drift Detection',
    auditJurisdiction: 'Operational Risk & Information Security Committee',
  },
];

interface ExecutivePageConfig {
  id: string;
  pageNum: number;
  title: string;
  navLabel: string;
  tag: string;
  icon: any;
}

export const EXECUTIVE_PAGES: ExecutivePageConfig[] = [
  {
    id: 'open-risk-classification',
    pageNum: 1,
    title: 'OPEN PIA RISK by Classification',
    navLabel: 'Open Risk by Classification',
    tag: 'Risk Distribution',
    icon: ShieldAlert,
  },
  {
    id: 'compliance-tactics',
    pageNum: 2,
    title: 'PIA COMPLIANCE Tactics',
    navLabel: 'PIA Compliance Tactics',
    tag: 'Controls & Measures',
    icon: ShieldCheck,
  },
  {
    id: 'pia-status',
    pageNum: 3,
    title: 'PIA Status',
    navLabel: 'PIA Status',
    tag: 'Lifecycle Pipeline',
    icon: FileText,
  },
  {
    id: 'predictive-forecasting',
    pageNum: 4,
    title: 'Predictive Forecasting',
    navLabel: 'Predictive Forecasting',
    tag: 'Trajectory & Burndown',
    icon: TrendingUp,
  },
  {
    id: 'regulatory-heatmap',
    pageNum: 5,
    title: 'Regulatory Framework vs. Risk Score Heatmap',
    navLabel: 'Framework vs Risk Heatmap',
    tag: 'Regulatory Matrix',
    icon: Grid,
  },
  {
    id: 'compliance-heatmap',
    pageNum: 6,
    title: 'Compliance Risk Heatmap',
    navLabel: 'Compliance Risk Heatmap',
    tag: '5x5 Likelihood/Impact',
    icon: Flame,
  },
  {
    id: 'historical-progression',
    pageNum: 7,
    title: 'Historical Aggregate Risk Progression',
    navLabel: 'Historical Progression',
    tag: 'Longitudinal Trend',
    icon: Activity,
  },
];

export const ExecutiveSummaryView: React.FC<ExecutiveSummaryViewProps> = ({
  pias,
  gaps,
  currentUser,
  systemSetup,
  onSelectPia,
  onNavigateToGaps,
  onNavigateToDirectory,
  onRefreshData,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(false);
  const [selectedCycleId, setSelectedCycleId] = useState<ReportingCycleId>('q1-2026');
  const [showCycleMenu, setShowCycleMenu] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Local AI Data Aggregation & Snapshot Refresh State
  const [isRefreshingSnapshot, setIsRefreshingSnapshot] = useState<boolean>(false);
  const [lastRefreshedAt, setLastRefreshedAt] = useState<Date>(new Date());
  const [refreshNotification, setRefreshNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [isAiBriefingExpanded, setIsAiBriefingExpanded] = useState<boolean>(false);

  const activeCycle = useMemo(() => {
    return REPORTING_CYCLES.find(c => c.id === selectedCycleId) || REPORTING_CYCLES[0];
  }, [selectedCycleId]);

  // Aggregate initial snapshot from current data
  const [latestSnapshot, setLatestSnapshot] = useState<ExecutiveSnapshotResult>(() => {
    return aggregateExecutivePiaSnapshot(pias, gaps, activeCycle.label, systemSetup?.companyName);
  });

  // Re-sync snapshot when cycle changes or pias/gaps change
  useEffect(() => {
    setLatestSnapshot(aggregateExecutivePiaSnapshot(pias, gaps, activeCycle.label, systemSetup?.companyName));
  }, [selectedCycleId, pias, gaps, systemSetup?.companyName]);

  // Re-triggers the local AI data aggregation service to ensure presented metrics reflect latest PIA state
  const handleRefreshSnapshot = async () => {
    setIsRefreshingSnapshot(true);
    setRefreshNotification(null);
    try {
      // 1. Re-fetch latest records from backend if available
      if (onRefreshData) {
        await onRefreshData();
      } else {
        try {
          await Promise.allSettled([fetch('/api/pias'), fetch('/api/gaps')]);
        } catch {
          // ignore offline fetch errors
        }
      }

      // 2. Call local AI snapshot aggregation backend service if active
      let snapshotResult: ExecutiveSnapshotResult | null = null;
      try {
        const aiRes = await fetch('/api/ai/aggregate-snapshot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            cycleId: activeCycle.id,
            cycleLabel: activeCycle.label,
            companyName: systemSetup?.companyName || 'Enterprise Governance',
          }),
        });
        if (aiRes.ok) {
          const aiData = await aiRes.json();
          if (aiData.snapshot) {
            snapshotResult = aiData.snapshot;
          }
        }
      } catch (e) {
        console.warn('Local AI backend service offline, utilizing embedded air-gapped engine:', e);
      }

      // 3. Fallback or client-side synthesis via aggregateExecutivePiaSnapshot
      if (!snapshotResult) {
        snapshotResult = aggregateExecutivePiaSnapshot(
          pias,
          gaps,
          activeCycle.label,
          systemSetup?.companyName
        );
      }

      setLatestSnapshot(snapshotResult);
      setLastRefreshedAt(new Date());
      setRefreshNotification({
        type: 'success',
        message: `Snapshot refreshed via ${snapshotResult.engineUsed}. ${snapshotResult.totalPias} active PIAs and ${snapshotResult.openGaps} open gaps synchronized.`,
      });

      setTimeout(() => {
        setRefreshNotification(null);
      }, 6000);
    } catch (err) {
      console.error('Snapshot refresh failed:', err);
      const fallbackResult = aggregateExecutivePiaSnapshot(
        pias,
        gaps,
        activeCycle.label,
        systemSetup?.companyName
      );
      setLatestSnapshot(fallbackResult);
      setLastRefreshedAt(new Date());
      setRefreshNotification({
        type: 'success',
        message: 'Snapshot re-aggregated via local air-gapped NLP engine.',
      });
      setTimeout(() => {
        setRefreshNotification(null);
      }, 5000);
    } finally {
      setIsRefreshingSnapshot(false);
    }
  };

  // High-level DPO Executive KPI metrics calculation
  const kpiMetrics = useMemo(() => {
    const totalPias = pias.length;
    
    // Evaluate risk and status for each PIA
    const evaluatedList = pias.map(pia => {
      const risk = (pia.riskResult && pia.riskResult.finalRiskScore > 0)
        ? pia.riskResult
        : calculatePIARisk(pia.answers || {}, pia.industrySector);
      
      const statusEval = evaluateOverallPIAStatus(pia, gaps);
      return {
        pia,
        risk,
        finalScore: risk.finalRiskScore,
        baseScore: risk.baseRiskScore,
        riskLevel: risk.riskLevel,
        statusEval,
      };
    });

    // 1. Total Risk: Mean portfolio residual score & baseline comparison
    const sumFinal = evaluatedList.reduce((acc, curr) => acc + curr.finalScore, 0);
    const sumBase = evaluatedList.reduce((acc, curr) => acc + curr.baseScore, 0);
    const avgScore = totalPias > 0 ? Math.round((sumFinal / totalPias) * 10) / 10 : 0;
    const avgBaseScore = totalPias > 0 ? Math.round((sumBase / totalPias) * 10) / 10 : 0;
    const peakScore = totalPias > 0 ? Math.max(...evaluatedList.map(e => e.finalScore)) : 0;
    const riskReductionPercent = avgBaseScore > 0 
      ? Math.max(0, Math.round(((avgBaseScore - avgScore) / avgBaseScore) * 100)) 
      : 0;

    let portfolioRiskTier = 'Low';
    if (avgScore >= 16.1) {
      portfolioRiskTier = 'Critical';
    } else if (avgScore >= 9.1) {
      portfolioRiskTier = 'High';
    } else if (avgScore >= 4.1) {
      portfolioRiskTier = 'Medium';
    }

    // 2. Open Gaps
    const openGaps = (gaps || []).filter(
      g => g.status === 'Open' || g.status === 'In Progress' || g.status === 'Overdue'
    );
    const criticalGaps = openGaps.filter(g => g.severity === 'Critical');
    const highGaps = openGaps.filter(g => g.severity === 'High');
    const overdueGaps = openGaps.filter(g => g.status === 'Overdue');
    const resolvedGaps = (gaps || []).filter(g => g.status === 'Resolved' || g.status === 'Closed');

    // 3. Critical PIAs
    const criticalPias = evaluatedList.filter(e => e.riskLevel === 'Critical');
    const highPias = evaluatedList.filter(e => e.riskLevel === 'High');
    const criticalRatioPercent = totalPias > 0 
      ? Math.round((criticalPias.length / totalPias) * 100) 
      : 0;

    // 4. Compliance Rate
    const approvedCount = evaluatedList.filter(
      e => e.statusEval.status === 'Approved' || e.pia.status === 'Approved'
    ).length;
    
    const gapResolutionRate = (gaps && gaps.length > 0)
      ? (resolvedGaps.length / gaps.length)
      : 1;

    const piaApprovalRate = totalPias > 0 
      ? (approvedCount / totalPias) 
      : 1;

    const avgFieldCompletion = totalPias > 0
      ? Math.round(evaluatedList.reduce((acc, curr) => acc + curr.statusEval.completionPercentage, 0) / totalPias)
      : 100;

    // DPO Composite Compliance Rate (50% approved PIAs, 30% gap SLA resolution, 20% completion)
    const compositeComplianceRate = Math.min(
      100,
      Math.max(
        0,
        Math.round((piaApprovalRate * 0.5 + gapResolutionRate * 0.3 + (avgFieldCompletion / 100) * 0.2) * 100)
      )
    );

    return {
      totalPias,
      avgScore,
      avgBaseScore,
      peakScore,
      riskReductionPercent,
      portfolioRiskTier,
      openGapsCount: openGaps.length,
      criticalGapsCount: criticalGaps.length,
      highGapsCount: highGaps.length,
      overdueGapsCount: overdueGaps.length,
      totalGapsCount: (gaps || []).length,
      resolvedGapsCount: resolvedGaps.length,
      criticalPiasCount: criticalPias.length,
      highPiasCount: highPias.length,
      criticalRatioPercent,
      approvedCount,
      compositeComplianceRate,
      avgFieldCompletion,
    };
  }, [pias, gaps]);

  const totalPages = EXECUTIVE_PAGES.length;
  const currentPage = EXECUTIVE_PAGES[currentPageIndex];

  // Navigation handlers
  const goToNextPage = () => {
    setCurrentPageIndex(prev => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPageIndex(prev => (prev - 1 + totalPages) % totalPages);
  };

  // Keyboard navigation: ArrowLeft, ArrowRight, and digits 1-7
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement)?.tagName)) {
        return;
      }

      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        goToNextPage();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        goToPrevPage();
      } else if (e.key >= '1' && e.key <= '7') {
        const target = parseInt(e.key, 10) - 1;
        if (target >= 0 && target < totalPages) {
          setCurrentPageIndex(target);
        }
      } else if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalPages, isFullscreen]);

  // Auto-play timer (15 seconds per page)
  useEffect(() => {
    if (!isAutoPlay) return;

    const timer = setInterval(() => {
      goToNextPage();
    }, 15000);

    return () => clearInterval(timer);
  }, [isAutoPlay, currentPageIndex]);

  // Fullscreen toggle
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {
          setIsFullscreen(true);
        });
      } else {
        setIsFullscreen(true);
      }
      setIsFullscreen(true);
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  // Handle native fullscreen change
  useEffect(() => {
    const handleFsChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    return () => document.removeEventListener('fullscreenchange', handleFsChange);
  }, []);

  // Print / Export
  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      ref={containerRef}
      className={`min-h-screen transition-colors duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-50 overflow-y-auto bg-zinc-950 p-4 sm:p-8'
          : 'space-y-6'
      }`}
    >
      {/* Top Executive Master Control Bar */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-5 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Brand & Cycle Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 shrink-0">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-800 tracking-wider uppercase">
                  CISO & DPO EXECUTIVE BRIEFING
                </span>
                <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                  {systemSetup?.companyName || 'Enterprise Governance'}
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                Executive Summary
                <span className="text-xs font-normal text-zinc-400 font-mono">
                  (Per-Page One Element Architecture)
                </span>
              </h1>
            </div>
          </div>

          {/* Right Controls: Cycle Selector, Refresh Snapshot, Presentation Mode, Auto-play, Fullscreen */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            {/* Refresh Snapshot Button */}
            <button
              id="refresh-snapshot-btn"
              onClick={handleRefreshSnapshot}
              disabled={isRefreshingSnapshot}
              title="Re-trigger local AI data aggregation service to ensure presented metrics reflect latest PIA state"
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold shadow-sm transition flex items-center gap-1.5 ${
                isRefreshingSnapshot
                  ? 'bg-indigo-950/80 border-indigo-700 text-indigo-300 cursor-wait'
                  : 'bg-gradient-to-r from-indigo-950/80 to-purple-950/80 hover:from-indigo-900 hover:to-purple-900 border-indigo-700/70 text-indigo-200 hover:border-indigo-500 hover:text-white shadow-indigo-950/40'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 text-indigo-400 ${isRefreshingSnapshot ? 'animate-spin' : ''}`} />
              <span>{isRefreshingSnapshot ? 'Aggregating...' : 'Refresh Snapshot'}</span>
              <span className="px-1.5 py-0.2 text-[9px] font-mono uppercase bg-indigo-500/20 text-indigo-300 rounded border border-indigo-400/30 flex items-center gap-0.5">
                <Sparkles className="w-2.5 h-2.5 text-indigo-300" />
                <span>AI</span>
              </span>
            </button>

            {/* Cycle Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowCycleMenu(!showCycleMenu)}
                className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 transition flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                <span>{activeCycle.label}</span>
                <ChevronDown className="w-3.5 h-3.5 text-zinc-500" />
              </button>

              {showCycleMenu && (
                <div className="absolute right-0 mt-2 w-72 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl z-30 p-2 space-y-1">
                  <div className="text-[10px] font-mono font-bold text-zinc-400 px-2 py-1 uppercase">
                    Select Governance Cycle
                  </div>
                  {REPORTING_CYCLES.map(c => (
                    <button
                      key={c.id}
                      onClick={() => {
                        setSelectedCycleId(c.id);
                        setShowCycleMenu(false);
                      }}
                      className={`w-full text-left p-2 rounded-lg text-xs transition flex flex-col ${
                        c.id === selectedCycleId
                          ? 'bg-indigo-950 text-indigo-200 border border-indigo-800'
                          : 'text-zinc-300 hover:bg-zinc-800'
                      }`}
                    >
                      <span className="font-bold">{c.label}</span>
                      <span className="text-[10px] text-zinc-400 font-mono">{c.dateRange}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Auto-Play Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              title={isAutoPlay ? 'Pause auto-cycling' : 'Start auto-cycling (15s per page)'}
              className={`px-3 py-1.5 rounded-xl border text-xs font-medium transition flex items-center gap-1.5 ${
                isAutoPlay
                  ? 'bg-amber-950/60 border-amber-800 text-amber-300'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {isAutoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="hidden md:inline">{isAutoPlay ? 'Auto: ON' : 'Auto-Play'}</span>
            </button>

            {/* Print / Export */}
            <button
              onClick={handlePrint}
              title="Print / Save PDF Dossier"
              className="px-3 py-1.5 rounded-xl bg-zinc-950 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 text-xs font-medium transition flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Print</span>
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Exit Full Screen' : 'Full Screen Presentation Mode'}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition flex items-center gap-1.5"
            >
              {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span>{isFullscreen ? 'Exit Fullscreen' : 'Presentation Mode'}</span>
            </button>
          </div>
        </div>

        {/* 7-Page Navigation Stepper Tabs: "Per Page One Element" */}
        <div className="mt-4 pt-4 border-t border-zinc-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          {/* Stepper Buttons (Pages 1 to 7) */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {EXECUTIVE_PAGES.map((page, idx) => {
              const Icon = page.icon;
              const isActive = currentPageIndex === idx;

              return (
                <button
                  key={page.id}
                  onClick={() => setCurrentPageIndex(idx)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition flex items-center gap-2 border ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-950 border-white font-bold shadow-md'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800/80 hover:bg-zinc-850 hover:text-zinc-200'
                  }`}
                >
                  <span className={`w-5 h-5 rounded-full text-[10px] font-mono font-bold flex items-center justify-center shrink-0 ${
                    isActive ? 'bg-zinc-900 text-white' : 'bg-zinc-800 text-zinc-400'
                  }`}>
                    {page.pageNum}
                  </span>
                  <span className="hidden sm:inline">{page.navLabel}</span>
                  <span className="sm:hidden">P{page.pageNum}</span>
                </button>
              );
            })}
          </div>

          {/* Quick Prev / Next Pagination Controls */}
          <div className="flex items-center gap-2 self-end md:self-auto shrink-0">
            <span className="text-xs font-mono text-zinc-400">
              Page <strong className="text-white">{currentPageIndex + 1}</strong> of <strong className="text-white">{totalPages}</strong>
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={goToPrevPage}
                title="Previous Page (ArrowLeft)"
                className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={goToNextPage}
                title="Next Page (ArrowRight)"
                className="p-1.5 rounded-lg bg-zinc-950 border border-zinc-800 hover:bg-zinc-800 text-zinc-300 transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Snapshot Refresh Feedback Banner (if active) */}
      {refreshNotification && (
        <div
          id="snapshot-refresh-alert"
          className="p-3 rounded-xl bg-emerald-950/70 border border-emerald-800/80 text-emerald-200 text-xs flex items-center justify-between gap-3 shadow-lg transition"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="font-medium">{refreshNotification.message}</span>
          </div>
          <button
            onClick={() => setRefreshNotification(null)}
            className="text-emerald-400 hover:text-emerald-200 text-[11px] font-mono uppercase underline cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Snapshot Telemetry & Local AI Status Bar */}
      <div 
        id="snapshot-telemetry-bar"
        className="bg-zinc-900/80 border border-zinc-800 rounded-xl px-4 py-2.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs"
      >
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isRefreshingSnapshot ? 'bg-amber-400' : 'bg-emerald-400'
              }`}></span>
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isRefreshingSnapshot ? 'bg-amber-500' : 'bg-emerald-500'
              }`}></span>
            </span>
            <span className="font-mono font-semibold text-zinc-300 flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5 text-indigo-400" />
              <span>{latestSnapshot.engineUsed}</span>
            </span>
          </div>

          <span className="text-zinc-700 hidden sm:inline">•</span>

          <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[11px]">
            <Clock className="w-3 h-3 text-zinc-500" />
            <span>Aggregated: {latestSnapshot.formattedTime || lastRefreshedAt.toLocaleTimeString()}</span>
            <span className="text-zinc-600 hidden md:inline">({latestSnapshot.snapshotId})</span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <span className="text-[11px] font-mono text-zinc-400 hidden lg:inline">
            {latestSnapshot.totalPias} PIAs • {latestSnapshot.openGaps} Open Gaps • {latestSnapshot.complianceRate}% Attested
          </span>
          <button
            id="toggle-ai-briefing-btn"
            onClick={() => setIsAiBriefingExpanded(!isAiBriefingExpanded)}
            className={`px-2.5 py-1 rounded-lg border text-[11px] font-medium transition flex items-center gap-1.5 cursor-pointer ${
              isAiBriefingExpanded
                ? 'bg-indigo-950 text-indigo-200 border-indigo-700'
                : 'bg-zinc-950 text-zinc-300 border-zinc-800 hover:bg-zinc-850 hover:text-white'
            }`}
          >
            <Sparkles className="w-3 h-3 text-indigo-400" />
            <span>{isAiBriefingExpanded ? 'Hide AI Briefing' : 'AI DPO Briefing'}</span>
            <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isAiBriefingExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>

      {/* Expandable Local AI Executive Briefing Panel */}
      {isAiBriefingExpanded && (
        <div 
          id="ai-executive-briefing-panel"
          className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-indigo-950/40 border border-indigo-800/40 rounded-2xl p-4 sm:p-5 shadow-xl space-y-4"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3 flex-wrap gap-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-950 border border-indigo-800 text-indigo-300 flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-white flex items-center gap-2">
                  Air-Gapped AI Executive Briefing
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-indigo-900/60 text-indigo-300 border border-indigo-700">
                    GDPR Art. 35/36 & DPDPA
                  </span>
                </h2>
                <p className="text-[11px] text-zinc-400 font-mono">
                  Synthesized directly from live assessment telemetry and statutory remediation milestones
                </p>
              </div>
            </div>
            <button
              onClick={handleRefreshSnapshot}
              disabled={isRefreshingSnapshot}
              className="text-xs text-indigo-400 hover:text-indigo-300 flex items-center gap-1 font-mono transition cursor-pointer"
            >
              <RefreshCw className={`w-3 h-3 ${isRefreshingSnapshot ? 'animate-spin' : ''}`} />
              <span>{isRefreshingSnapshot ? 'Aggregating...' : 'Re-aggregate'}</span>
            </button>
          </div>

          <div className="bg-zinc-950/70 border border-zinc-800/80 rounded-xl p-3.5 text-xs text-zinc-200 leading-relaxed font-sans">
            <p>{latestSnapshot.aiExecutiveBriefing}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {/* Statutory Directives */}
            <div className="bg-zinc-950/50 border border-zinc-800/70 rounded-xl p-3 space-y-2 lg:col-span-2">
              <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-3 h-3" />
                Statutory Action Priorities
              </span>
              <ul className="space-y-1.5 text-xs text-zinc-300">
                {latestSnapshot.statutoryDirectives.map((directive, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-2">
                    <span className="text-indigo-400 font-bold">•</span>
                    <span>{directive}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Regulatory Readiness Scorecard */}
            <div className="bg-zinc-950/50 border border-zinc-800/70 rounded-xl p-3 space-y-2">
              <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3 h-3" />
                Regulatory Posture Readiness
              </span>
              <div className="space-y-1.5 text-[11px] font-mono">
                <div className="flex justify-between items-center py-0.5 border-b border-zinc-800/50">
                  <span className="text-zinc-400">GDPR Art. 35/36:</span>
                  <span className={latestSnapshot.regulatoryReadiness.gdprArticle35 === 'Compliant' ? 'text-emerald-400 font-semibold' : 'text-amber-400 font-semibold'}>
                    {latestSnapshot.regulatoryReadiness.gdprArticle35}
                  </span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-zinc-800/50">
                  <span className="text-zinc-400">NHS IG Standard:</span>
                  <span className="text-emerald-400 font-semibold">
                    {latestSnapshot.regulatoryReadiness.nhsIgCompliance}
                  </span>
                </div>
                <div className="flex justify-between items-center py-0.5 border-b border-zinc-800/50">
                  <span className="text-zinc-400">DPDP Act (India):</span>
                  <span className="text-emerald-400 font-semibold">
                    {latestSnapshot.regulatoryReadiness.dpdpaReadiness}
                  </span>
                </div>
                <div className="flex justify-between items-center py-0.5">
                  <span className="text-zinc-400">Risk Tolerance:</span>
                  <span className={latestSnapshot.regulatoryReadiness.residualRiskTolerance === 'Within Tolerance' ? 'text-indigo-300 font-semibold' : 'text-rose-400 font-semibold'}>
                    {latestSnapshot.regulatoryReadiness.residualRiskTolerance}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* High-Level Executive KPI Summary Cards: DPO Status Cockpit */}
      <section 
        aria-label="Executive KPI Summary Cards" 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5"
      >
        {/* KPI 1: Total Risk */}
        <div
          id="kpi-card-total-risk"
          onClick={() => setCurrentPageIndex(6)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setCurrentPageIndex(6); }}
          title="Click to inspect Longitudinal Risk Progression (Page 7)"
          className="group text-left bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-indigo-500/50 rounded-2xl p-4 transition-all duration-200 shadow-md cursor-pointer flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-indigo-500/40"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-950/80 border border-indigo-800/80 text-indigo-400 flex items-center justify-center shrink-0">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  Total Risk
                </span>
              </div>
              <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border whitespace-nowrap ${
                kpiMetrics.portfolioRiskTier === 'Critical'
                  ? 'bg-rose-950/80 text-rose-300 border-rose-800/80'
                  : kpiMetrics.portfolioRiskTier === 'High'
                  ? 'bg-amber-950/80 text-amber-300 border-amber-800/80'
                  : kpiMetrics.portfolioRiskTier === 'Medium'
                  ? 'bg-purple-950/80 text-purple-300 border-purple-800/80'
                  : 'bg-emerald-950/80 text-emerald-300 border-emerald-800/80'
              }`}>
                {kpiMetrics.portfolioRiskTier} Tier
              </span>
            </div>

            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                {kpiMetrics.avgScore.toFixed(1)}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                / 25.0 max
              </span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-800/70 space-y-2">
            {/* Risk Scale Progress Track */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>0.0 Low</span>
                <span className="text-zinc-300 font-semibold">Peak: {kpiMetrics.peakScore.toFixed(1)}</span>
                <span>25.0 Crit</span>
              </div>
              <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden border border-zinc-800 flex">
                <div 
                  className="bg-gradient-to-r from-emerald-500 via-amber-500 to-rose-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.max(4, (kpiMetrics.avgScore / 25) * 100))}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-emerald-400 flex items-center gap-1">
                <TrendingDown className="w-3 h-3 shrink-0" />
                <span>-{kpiMetrics.riskReductionPercent}% vs Baseline</span>
              </span>
              <span className="text-indigo-400 group-hover:text-indigo-300 flex items-center gap-0.5">
                <span>Page 7</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>
        </div>

        {/* KPI 2: Open Gaps */}
        <div
          id="kpi-card-open-gaps"
          onClick={() => {
            if (onNavigateToGaps) onNavigateToGaps();
            else setCurrentPageIndex(1);
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { 
            if (e.key === 'Enter' || e.key === ' ') {
              if (onNavigateToGaps) onNavigateToGaps();
              else setCurrentPageIndex(1);
            }
          }}
          title="Click to inspect Remediation Gap Log"
          className="group text-left bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-amber-500/50 rounded-2xl p-4 transition-all duration-200 shadow-md cursor-pointer flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-amber-500/40"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-amber-950/80 border border-amber-800/80 text-amber-400 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  Open Gaps
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-950/80 text-amber-300 border border-amber-800/80 whitespace-nowrap">
                {kpiMetrics.criticalGapsCount} Crit • {kpiMetrics.highGapsCount} High
              </span>
            </div>

            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
                {kpiMetrics.openGapsCount}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                unresolved / {kpiMetrics.totalGapsCount} total
              </span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-800/70 space-y-2">
            {/* Resolution Progress */}
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>Mitigation Progress</span>
                <span className="text-zinc-300 font-semibold">{kpiMetrics.resolvedGapsCount} resolved</span>
              </div>
              <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden border border-zinc-800">
                <div 
                  className="bg-amber-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${kpiMetrics.totalGapsCount > 0 ? (kpiMetrics.resolvedGapsCount / kpiMetrics.totalGapsCount) * 100 : 100}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className={kpiMetrics.overdueGapsCount > 0 ? 'text-rose-400 font-semibold' : 'text-zinc-400'}>
                {kpiMetrics.overdueGapsCount > 0 ? `${kpiMetrics.overdueGapsCount} SLA Overdue` : 'Zero Overdue SLAs'}
              </span>
              <span className="text-amber-400 group-hover:text-amber-300 flex items-center gap-0.5">
                <span>Manage Gaps</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>
        </div>

        {/* KPI 3: Critical PIAs */}
        <div
          id="kpi-card-critical-pias"
          onClick={() => setCurrentPageIndex(0)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setCurrentPageIndex(0); }}
          title="Click to inspect Open Risk by Classification (Page 1)"
          className="group text-left bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-rose-500/50 rounded-2xl p-4 transition-all duration-200 shadow-md cursor-pointer flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-rose-500/40"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-rose-950/80 border border-rose-800/80 text-rose-400 flex items-center justify-center shrink-0">
                  <Flame className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  Critical PIAs
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-rose-950/80 text-rose-300 border border-rose-800/80 whitespace-nowrap">
                {kpiMetrics.criticalRatioPercent}% Portfolio
              </span>
            </div>

            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-rose-400 tracking-tight">
                {kpiMetrics.criticalPiasCount}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                of {kpiMetrics.totalPias} active PIAs
              </span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-800/70 space-y-2">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400">
              <span>High Risk Cohort</span>
              <span className="text-amber-300 font-semibold">+{kpiMetrics.highPiasCount} High Risk</span>
            </div>

            <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden border border-zinc-800">
              <div 
                className="bg-rose-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${kpiMetrics.totalPias > 0 ? (kpiMetrics.criticalPiasCount / kpiMetrics.totalPias) * 100 : 0}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-zinc-400 truncate max-w-[140px]" title="Article 36 Mandate">
                Art 36 Consultation
              </span>
              <span className="text-rose-400 group-hover:text-rose-300 flex items-center gap-0.5">
                <span>Page 1</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>
        </div>

        {/* KPI 4: Compliance Rate */}
        <div
          id="kpi-card-compliance-rate"
          onClick={() => setCurrentPageIndex(2)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setCurrentPageIndex(2); }}
          title="Click to inspect PIA Status Overview (Page 3)"
          className="group text-left bg-zinc-900/90 hover:bg-zinc-850 border border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-4 transition-all duration-200 shadow-md cursor-pointer flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
        >
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <span className="text-[11px] font-mono font-bold text-zinc-400 uppercase tracking-wider">
                  Compliance Rate
                </span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-950/80 text-emerald-300 border border-emerald-800/80 whitespace-nowrap">
                Target ≥90%
              </span>
            </div>

            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl sm:text-3xl font-bold font-mono text-emerald-400 tracking-tight">
                {kpiMetrics.compositeComplianceRate}%
              </span>
              <span className="text-xs font-mono text-zinc-400">
                DPO attested
              </span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-zinc-800/70 space-y-2">
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-mono text-zinc-400">
                <span>{kpiMetrics.approvedCount} of {kpiMetrics.totalPias} Approved</span>
                <span className="text-zinc-300 font-semibold">{kpiMetrics.avgFieldCompletion}% fields</span>
              </div>
              <div className="w-full bg-zinc-950 rounded-full h-1.5 overflow-hidden border border-zinc-800">
                <div 
                  className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                  style={{ width: `${kpiMetrics.compositeComplianceRate}%` }}
                />
              </div>
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono">
              <span className="text-zinc-400">
                {activeCycle.label.split(' ')[0]} SLA
              </span>
              <span className="text-emerald-400 group-hover:text-emerald-300 flex items-center gap-0.5">
                <span>Page 3</span>
                <ArrowRight className="w-2.5 h-2.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Page Canvas: EXACTLY ONE ELEMENT PER PAGE */}
      <main className="min-h-[600px]">
        {/* Page 1: OPEN PIA RISK by Classification */}
        {currentPageIndex === 0 && (
          <OpenRiskByClassification
            pias={pias}
            onSelectPia={onSelectPia}
          />
        )}

        {/* Page 2: PIA COMPLIANCE Tactics */}
        {currentPageIndex === 1 && (
          <ComplianceTactics
            pias={pias}
            onSelectPia={onSelectPia}
          />
        )}

        {/* Page 3: PIA Status */}
        {currentPageIndex === 2 && (
          <PiaStatusOverview
            pias={pias}
            onSelectPia={onSelectPia}
          />
        )}

        {/* Page 4: Predictive Forecasting */}
        {currentPageIndex === 3 && (
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex items-center justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-950 text-amber-300 border border-amber-800 uppercase tracking-wider">
                  PAGE 04 • EXECUTIVE ELEMENT
                </span>
                <h2 className="text-lg font-bold text-white mt-1">Predictive Risk Forecasting</h2>
                <p className="text-xs text-zinc-400">
                  Algorithmic forward-looking risk trajectory, GAP burndown velocity, and confidence intervals across 6, 12, and 24-month horizons.
                </p>
              </div>
            </div>
            <PredictiveRiskForecasting
              pias={pias}
              gaps={gaps}
              onSelectPia={onSelectPia || (() => {})}
              onNavigateToGaps={onNavigateToGaps || (() => {})}
            />
          </div>
        )}

        {/* Page 5: Regulatory Framework vs. Risk Score Heatmap */}
        {currentPageIndex === 4 && (
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex items-center justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-800 uppercase tracking-wider">
                  PAGE 05 • EXECUTIVE ELEMENT
                </span>
                <h2 className="text-lg font-bold text-white mt-1">Regulatory Framework vs. Risk Score Heatmap</h2>
                <p className="text-xs text-zinc-400">
                  Two-dimensional cross-regulatory matrix correlating international mandates with quantitative risk score bands.
                </p>
              </div>
            </div>
            <FrameworkRiskHeatmapWidget
              pias={pias}
              onSelectPia={onSelectPia}
            />
          </div>
        )}

        {/* Page 6: Compliance Risk Heatmap */}
        {currentPageIndex === 5 && (
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex items-center justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-950 text-rose-300 border border-rose-800 uppercase tracking-wider">
                  PAGE 06 • EXECUTIVE ELEMENT
                </span>
                <h2 className="text-lg font-bold text-white mt-1">Compliance Risk Heatmap</h2>
                <p className="text-xs text-zinc-400">
                  5x5 Likelihood vs. Impact risk matrix mapping inherent baseline exposure against post-safeguard residual risk.
                </p>
              </div>
            </div>
            <ComplianceRiskHeatmap
              pias={pias}
              gaps={gaps}
              onSelectPia={onSelectPia || (() => {})}
              activeRiskFilter={null}
              onFilterByRisk={() => {}}
            />
          </div>
        )}

        {/* Page 7: Historical Aggregate Risk Progression */}
        {currentPageIndex === 6 && (
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-lg flex items-center justify-between">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-950 text-emerald-300 border border-emerald-800 uppercase tracking-wider">
                  PAGE 07 • EXECUTIVE ELEMENT
                </span>
                <h2 className="text-lg font-bold text-white mt-1">Historical Aggregate Risk Progression</h2>
                <p className="text-xs text-zinc-400">
                  Longitudinal time-series analysis tracing portfolio risk evolution, mitigation velocity, and regulatory audit milestones.
                </p>
              </div>
            </div>
            <RiskProgressionLineChart
              pias={pias}
              gaps={gaps}
              onSelectPia={onSelectPia}
            />
          </div>
        )}
      </main>

      {/* Bottom Sticky Slide Footer / Stepper Navigation */}
      <footer className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={goToPrevPage}
            className="px-3 py-1.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 text-xs font-semibold transition flex items-center gap-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous Element
          </button>
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
            Use <kbd className="px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-300">←</kbd> and <kbd className="px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-300">→</kbd> or keys <kbd className="px-1.5 py-0.5 rounded bg-zinc-950 border border-zinc-800 text-[10px] text-zinc-300">1-7</kbd> to flip slides
          </span>
        </div>

        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-1.5">
          {EXECUTIVE_PAGES.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setCurrentPageIndex(idx)}
              title={`Jump to Page ${p.pageNum}: ${p.title}`}
              className={`h-2 rounded-full transition-all ${
                currentPageIndex === idx
                  ? 'w-8 bg-indigo-500 shadow-sm shadow-indigo-500/50'
                  : 'w-2 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={goToNextPage}
            className="px-4 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition flex items-center gap-1.5"
          >
            Next Element
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </footer>
    </div>
  );
};
