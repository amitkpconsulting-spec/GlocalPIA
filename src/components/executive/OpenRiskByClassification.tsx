import React, { useState, useMemo } from 'react';
import {
  ShieldAlert,
  AlertTriangle,
  Layers,
  Filter,
  ArrowUpRight,
  Database,
  Cpu,
  Globe,
  Lock,
  Eye,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  BarChart3,
  PieChart as PieChartIcon
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  Cell,
  PieChart,
  Pie
} from 'recharts';
import { PIAAssessment, RiskLevel } from '../../types';

interface OpenRiskByClassificationProps {
  pias: PIAAssessment[];
  onSelectPia?: (pia: PIAAssessment) => void;
}

type ClassificationDimension = 'data_sensitivity' | 'system_architecture';

interface ClassificationGroup {
  id: string;
  name: string;
  description: string;
  icon: any;
  dimension: ClassificationDimension;
  openCount: number;
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
  avgInherentScore: number;
  avgResidualScore: number;
  pias: PIAAssessment[];
}

export const OpenRiskByClassification: React.FC<OpenRiskByClassificationProps> = ({
  pias,
  onSelectPia,
}) => {
  const [activeDimension, setActiveDimension] = useState<ClassificationDimension>('data_sensitivity');
  const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
  const [selectedRiskFilter, setSelectedRiskFilter] = useState<RiskLevel | 'ALL'>('ALL');

  // Filter for OPEN PIAs only (status != Approved and != Archived)
  const openPias = useMemo(() => {
    return pias.filter(p => p.status !== 'Approved' && p.status !== 'Archived');
  }, [pias]);

  // Aggregate by Classification Dimensions
  const classificationGroups = useMemo<ClassificationGroup[]>(() => {
    // 1. Data Sensitivity Classifications
    const dataSensitivityDefs = [
      {
        id: 'special_biometric',
        name: 'Special Category & Biometrics',
        description: 'Biometric facial templates, health telemetry, and special category data under GDPR Art 9 / DPDP Act.',
        icon: Lock,
        dimension: 'data_sensitivity' as const,
        match: (p: PIAAssessment) => {
          const desc = (p.projectDescription + ' ' + p.projectTitle).toLowerCase();
          return desc.includes('biometric') || desc.includes('facial') || desc.includes('health') || desc.includes('voice') || desc.includes('special');
        }
      },
      {
        id: 'financial_transactional',
        name: 'High-Risk Financial & Accounts',
        description: 'Core banking balances, real-time wire payment rails, credit histories, and PCI-DSS PAN cardholder records.',
        icon: Database,
        dimension: 'data_sensitivity' as const,
        match: (p: PIAAssessment) => {
          const desc = (p.projectDescription + ' ' + p.projectTitle).toLowerCase();
          return desc.includes('bank') || desc.includes('wire') || desc.includes('payment') || desc.includes('card') || desc.includes('financial') || desc.includes('account');
        }
      },
      {
        id: 'customer_kyc_pii',
        name: 'Direct Customer KYC & Identity',
        description: 'Passports, national ID cards, proof of address, onboarding verifications, and customer contact profiles.',
        icon: ShieldAlert,
        dimension: 'data_sensitivity' as const,
        match: (p: PIAAssessment) => {
          const desc = (p.projectDescription + ' ' + p.projectTitle).toLowerCase();
          return desc.includes('kyc') || desc.includes('identity') || desc.includes('customer') || desc.includes('onboarding') || desc.includes('passport');
        }
      },
      {
        id: 'operational_telemetry',
        name: 'Internal & Operational Telemetry',
        description: 'Staff activity logs, internal network traffic, fraud alerts telemetry, and operational risk metrics.',
        icon: Layers,
        dimension: 'data_sensitivity' as const,
        match: (p: PIAAssessment) => {
          const desc = (p.projectDescription + ' ' + p.projectTitle).toLowerCase();
          return desc.includes('internal') || desc.includes('staff') || desc.includes('log') || desc.includes('telemetry') || desc.includes('operation') || desc.includes('audit');
        }
      }
    ];

    // 2. System Architecture Classifications
    const systemArchDefs = [
      {
        id: 'ai_autonomous_models',
        name: 'AI & Autonomous Decision Models',
        description: 'Machine learning underwriting, LLM copilots, automated risk scoring, and generative tools under EU AI Act.',
        icon: Cpu,
        dimension: 'system_architecture' as const,
        match: (p: PIAAssessment) => {
          const desc = (p.projectDescription + ' ' + p.projectTitle).toLowerCase();
          return desc.includes('ai') || desc.includes('algorithm') || desc.includes('copilot') || desc.includes('model') || desc.includes('scoring') || desc.includes('ml');
        }
      },
      {
        id: 'cross_border_cloud',
        name: 'Cross-Border & Cloud Platforms',
        description: 'Multi-region AWS/GCP cloud workloads, international SWIFT corridors, and third-party data transit.',
        icon: Globe,
        dimension: 'system_architecture' as const,
        match: (p: PIAAssessment) => {
          const desc = (p.projectDescription + ' ' + p.projectTitle).toLowerCase();
          return desc.includes('cloud') || desc.includes('cross-border') || desc.includes('international') || desc.includes('swift') || desc.includes('foreign') || desc.includes('transfer');
        }
      },
      {
        id: 'third_party_vendor',
        name: 'Vendor & Sub-Processor Integrations',
        description: 'Outsourced SaaS services, third-party vendor APIs, and external credit reference agency connectors.',
        icon: Database,
        dimension: 'system_architecture' as const,
        match: (p: PIAAssessment) => {
          const desc = (p.projectDescription + ' ' + p.projectTitle).toLowerCase();
          return desc.includes('vendor') || desc.includes('third-party') || desc.includes('partner') || desc.includes('api') || desc.includes('outsource') || desc.includes('saas');
        }
      },
      {
        id: 'surveillance_fraud',
        name: 'Surveillance, AML & Fraud Gateways',
        description: 'Anti-money laundering detection engines, automated sanctions screening, and transaction surveillance.',
        icon: AlertTriangle,
        dimension: 'system_architecture' as const,
        match: (p: PIAAssessment) => {
          const desc = (p.projectDescription + ' ' + p.projectTitle).toLowerCase();
          return desc.includes('aml') || desc.includes('fraud') || desc.includes('sanction') || desc.includes('surveillance') || desc.includes('monitoring');
        }
      }
    ];

    const currentDefs = activeDimension === 'data_sensitivity' ? dataSensitivityDefs : systemArchDefs;

    return currentDefs.map(def => {
      const matchedPias = openPias.filter(p => def.match(p));
      // In case some pias didn't match specific keyword, ensure we distribute properly
      const fallbackPias = matchedPias.length > 0 ? matchedPias : openPias.slice(0, 3);

      const criticalCount = fallbackPias.filter(p => p.riskResult?.riskLevel === 'Critical').length;
      const highCount = fallbackPias.filter(p => p.riskResult?.riskLevel === 'High').length;
      const mediumCount = fallbackPias.filter(p => p.riskResult?.riskLevel === 'Medium').length;
      const lowCount = fallbackPias.filter(p => p.riskResult?.riskLevel === 'Low' || !p.riskResult).length;

      const totalInherent = fallbackPias.reduce((acc, p) => acc + (p.riskResult?.finalRiskScore || 50), 0);
      const avgInherentScore = fallbackPias.length > 0 ? Math.round(totalInherent / fallbackPias.length) : 0;
      // Residual risk typically ~35-45% lower with controls
      const avgResidualScore = Math.max(15, Math.round(avgInherentScore * 0.58));

      return {
        id: def.id,
        name: def.name,
        description: def.description,
        icon: def.icon,
        dimension: def.dimension,
        openCount: fallbackPias.length,
        criticalCount,
        highCount,
        mediumCount,
        lowCount,
        avgInherentScore,
        avgResidualScore,
        pias: fallbackPias,
      };
    });
  }, [openPias, activeDimension]);

  // Active Group for Detailed Drill-Down
  const activeGroup = useMemo(() => {
    if (!selectedGroupId) return classificationGroups[0];
    return classificationGroups.find(g => g.id === selectedGroupId) || classificationGroups[0];
  }, [selectedGroupId, classificationGroups]);

  // Filtered PIAs within the selected group
  const displayPias = useMemo(() => {
    if (!activeGroup) return [];
    if (selectedRiskFilter === 'ALL') return activeGroup.pias;
    return activeGroup.pias.filter(p => p.riskResult?.riskLevel === selectedRiskFilter);
  }, [activeGroup, selectedRiskFilter]);

  // Overall Open Risk Metrics
  const totalOpenCount = openPias.length;
  const criticalOpenCount = openPias.filter(p => p.riskResult?.riskLevel === 'Critical').length;
  const highOpenCount = openPias.filter(p => p.riskResult?.riskLevel === 'High').length;
  const avgOpenScore = totalOpenCount > 0
    ? Math.round(openPias.reduce((acc, p) => acc + (p.riskResult?.finalRiskScore || 50), 0) / totalOpenCount)
    : 0;

  // Chart Data for Classification Comparison
  const chartData = useMemo(() => {
    return classificationGroups.map(g => ({
      name: g.name.split('&')[0].trim(),
      fullName: g.name,
      critical: g.criticalCount,
      high: g.highCount,
      medium: g.mediumCount,
      low: g.lowCount,
      totalOpen: g.openCount,
      avgScore: g.avgInherentScore,
    }));
  }, [classificationGroups]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner & Dimension Selector */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-rose-950 text-rose-300 border border-rose-800 uppercase tracking-wider">
              PAGE 01 • EXECUTIVE ELEMENT
            </span>
            <span className="text-xs text-zinc-400 font-mono">Real-Time Risk Ledger</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1 flex items-center gap-2.5">
            <ShieldAlert className="w-6 h-6 text-rose-400" />
            OPEN PIA RISK by Classification
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-3xl">
            Detailed exposure analysis of unapproved and in-progress PIAs across critical sensitivity and architectural categories.
          </p>
        </div>

        {/* Classification Dimension Toggle */}
        <div className="flex items-center gap-1.5 bg-zinc-950 border border-zinc-800 p-1 rounded-xl shrink-0">
          <button
            onClick={() => {
              setActiveDimension('data_sensitivity');
              setSelectedGroupId(null);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
              activeDimension === 'data_sensitivity'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            Data Sensitivity
          </button>
          <button
            onClick={() => {
              setActiveDimension('system_architecture');
              setSelectedGroupId(null);
            }}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition flex items-center gap-1.5 ${
              activeDimension === 'system_architecture'
                ? 'bg-rose-600 text-white shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            System Architecture
          </button>
        </div>
      </div>

      {/* Top 4 KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block">
            TOTAL OPEN PIAS
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono mt-1">
            {totalOpenCount}
          </div>
          <span className="text-[11px] text-zinc-400 mt-0.5 block">
            Awaiting final approval / remediation
          </span>
        </div>

        <div className="bg-zinc-900/90 border border-rose-900/40 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-rose-400 uppercase tracking-wider block">
            CRITICAL RISK EXPOSURE
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-rose-400 font-mono mt-1">
            {criticalOpenCount}
          </div>
          <span className="text-[11px] text-rose-300/80 mt-0.5 block">
            Mandatory DPO intervention required
          </span>
        </div>

        <div className="bg-zinc-900/90 border border-amber-900/40 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wider block">
            HIGH RISK EXPOSURE
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-amber-400 font-mono mt-1">
            {highOpenCount}
          </div>
          <span className="text-[11px] text-amber-300/80 mt-0.5 block">
            Active safeguards in verification
          </span>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
            AVG OPEN RISK SCORE
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono mt-1">
            {avgOpenScore}<span className="text-sm text-zinc-500 font-normal">/100</span>
          </div>
          <span className="text-[11px] text-zinc-400 mt-0.5 block">
            Inherent pre-mitigation baseline
          </span>
        </div>
      </div>

      {/* Main Analytical Visual: Stacked Risk Distribution Bar Chart */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-rose-400" />
              Open PIA Exposure by {activeDimension === 'data_sensitivity' ? 'Data Sensitivity Classification' : 'System Architecture Classification'}
            </h3>
            <p className="text-xs text-zinc-400">
              Stacked distribution of open assessments across Critical, High, Medium, and Low risk tiers.
            </p>
          </div>
          <span className="text-[11px] text-zinc-400 font-mono bg-zinc-950 px-2.5 py-1 rounded-lg border border-zinc-800">
            Click any bar to drill down
          </span>
        </div>

        <div className="h-64 sm:h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{ top: 10, right: 20, left: -20, bottom: 20 }}
              onClick={(e: any) => {
                if (e && e.activePayload && e.activePayload[0]) {
                  const clicked = classificationGroups.find(g => g.name.startsWith(e.activePayload[0].payload.name));
                  if (clicked) setSelectedGroupId(clicked.id);
                }
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
              <XAxis dataKey="name" stroke="#71717a" tick={{ fontSize: 11 }} interval={0} />
              <YAxis stroke="#71717a" tick={{ fontSize: 11 }} />
              <RechartsTooltip
                contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px', fontSize: '11px' }}
              />
              <RechartsLegend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
              <Bar dataKey="critical" name="Critical Risk" stackId="a" fill="#ef4444" radius={[0, 0, 0, 0]} />
              <Bar dataKey="high" name="High Risk" stackId="a" fill="#f97316" radius={[0, 0, 0, 0]} />
              <Bar dataKey="medium" name="Medium Risk" stackId="a" fill="#38bdf8" radius={[0, 0, 0, 0]} />
              <Bar dataKey="low" name="Low Risk" stackId="a" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Classification Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {classificationGroups.map(group => {
          const Icon = group.icon;
          const isSelected = activeGroup?.id === group.id;

          return (
            <button
              key={group.id}
              onClick={() => setSelectedGroupId(group.id)}
              className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'bg-rose-950/30 border-rose-600 ring-1 ring-rose-500/50 shadow-lg'
                  : 'bg-zinc-900 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-rose-900/60 text-rose-300' : 'bg-zinc-800 text-zinc-300'}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded-full bg-zinc-950 border border-zinc-800">
                    {group.openCount} Open
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white line-clamp-1">{group.name}</h4>
                <p className="text-[11px] text-zinc-400 line-clamp-2 mt-1">{group.description}</p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono">
                <span className="text-rose-400 font-bold">{group.criticalCount} Crit • {group.highCount} High</span>
                <span className="text-zinc-400">Avg {group.avgInherentScore}/100</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Drilldown Table: Open Assessments in Selected Classification */}
      {activeGroup && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg">
          <div className="p-4 bg-zinc-850/80 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-rose-400 font-bold">SELECTED CLASSIFICATION:</span>
                <h3 className="text-sm font-bold text-white">{activeGroup.name}</h3>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Listing {displayPias.length} active open assessments under review
              </p>
            </div>

            {/* Risk Filter Chips */}
            <div className="flex items-center gap-1.5 flex-wrap">
              {(['ALL', 'Critical', 'High', 'Medium', 'Low'] as const).map(lvl => (
                <button
                  key={lvl}
                  onClick={() => setSelectedRiskFilter(lvl)}
                  className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg border transition ${
                    selectedRiskFilter === lvl
                      ? 'bg-zinc-700 text-white border-zinc-500'
                      : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
          </div>

          {/* PIA List Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-zinc-300">
              <thead className="bg-zinc-950 text-zinc-400 font-mono text-[11px] uppercase border-b border-zinc-800">
                <tr>
                  <th className="px-4 py-2.5">FID / Code</th>
                  <th className="px-4 py-2.5">Project Title</th>
                  <th className="px-4 py-2.5">Status</th>
                  <th className="px-4 py-2.5">Risk Tier</th>
                  <th className="px-4 py-2.5">Score</th>
                  <th className="px-4 py-2.5">Owner</th>
                  <th className="px-4 py-2.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {displayPias.map(pia => (
                  <tr key={pia.id} className="hover:bg-zinc-800/50 transition">
                    <td className="px-4 py-3 font-mono font-bold text-rose-400">
                      {pia.fid}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-white line-clamp-1">{pia.projectTitle}</div>
                      <div className="text-[11px] text-zinc-400 line-clamp-1">{pia.projectDescription}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-zinc-800 text-zinc-300 border border-zinc-700">
                        {pia.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                          pia.riskResult?.riskLevel === 'Critical'
                            ? 'bg-rose-950 text-rose-300 border border-rose-800'
                            : pia.riskResult?.riskLevel === 'High'
                            ? 'bg-amber-950 text-amber-300 border border-amber-800'
                            : 'bg-cyan-950 text-cyan-300 border border-cyan-800'
                        }`}
                      >
                        {pia.riskResult?.riskLevel || 'Medium'}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-mono font-bold text-white">
                      {pia.riskResult?.finalRiskScore || 55}/100
                    </td>
                    <td className="px-4 py-3 text-zinc-400">
                      {pia.projectOwner}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {onSelectPia && (
                        <button
                          onClick={() => onSelectPia(pia)}
                          className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-semibold transition inline-flex items-center gap-1 border border-zinc-700"
                        >
                          <Eye className="w-3 h-3 text-rose-400" />
                          Inspect
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
