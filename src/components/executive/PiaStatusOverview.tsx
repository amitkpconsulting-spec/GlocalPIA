import React, { useState, useMemo } from 'react';
import {
  FileText,
  CheckCircle2,
  Clock,
  AlertTriangle,
  RotateCcw,
  ShieldCheck,
  Archive,
  ArrowRight,
  TrendingUp,
  Eye,
  Filter,
  BarChart2,
  PieChart as PieChartIcon
} from 'lucide-react';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import { PIAAssessment, AssessmentStatus } from '../../types';

interface PiaStatusOverviewProps {
  pias: PIAAssessment[];
  onSelectPia?: (pia: PIAAssessment) => void;
}

interface StatusMeta {
  status: AssessmentStatus;
  label: string;
  description: string;
  color: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  icon: any;
  order: number;
}

const STATUS_METAS: Record<AssessmentStatus, StatusMeta> = {
  Draft: {
    status: 'Draft',
    label: 'Draft',
    description: 'Initial data mapping, asset documentation, and questionnaire authoring.',
    color: '#a1a1aa',
    badgeBg: 'bg-zinc-800',
    badgeText: 'text-zinc-300',
    badgeBorder: 'border-zinc-700',
    icon: FileText,
    order: 1,
  },
  Submitted: {
    status: 'Submitted',
    label: 'Submitted',
    description: 'Questionnaire locked and queued for formal regulatory screening.',
    color: '#38bdf8',
    badgeBg: 'bg-sky-950',
    badgeText: 'text-sky-300',
    badgeBorder: 'border-sky-800',
    icon: Clock,
    order: 2,
  },
  IN_REVISION: {
    status: 'IN_REVISION',
    label: 'In Revision',
    description: 'Returned to business owner with change requests or clarification questions.',
    color: '#f59e0b',
    badgeBg: 'bg-amber-950',
    badgeText: 'text-amber-300',
    badgeBorder: 'border-amber-800',
    icon: RotateCcw,
    order: 3,
  },
  'DPO Review': {
    status: 'DPO Review',
    label: 'DPO Review',
    description: 'Under active evaluation by the Statutory Data Protection Officer & CISO.',
    color: '#a855f7',
    badgeBg: 'bg-purple-950',
    badgeText: 'text-purple-300',
    badgeBorder: 'border-purple-800',
    icon: ShieldCheck,
    order: 4,
  },
  Remediation: {
    status: 'Remediation',
    label: 'Remediation',
    description: 'Conditional approval granted pending resolution of identified GAPs.',
    color: '#f43f5e',
    badgeBg: 'bg-rose-950',
    badgeText: 'text-rose-300',
    badgeBorder: 'border-rose-800',
    icon: AlertTriangle,
    order: 5,
  },
  Approved: {
    status: 'Approved',
    label: 'Approved',
    description: 'Full statutory sign-off achieved; authorized for enterprise production use.',
    color: '#10b981',
    badgeBg: 'bg-emerald-950',
    badgeText: 'text-emerald-300',
    badgeBorder: 'border-emerald-800',
    icon: CheckCircle2,
    order: 6,
  },
  Archived: {
    status: 'Archived',
    label: 'Archived',
    description: 'Decommissioned system or superseded historical assessment.',
    color: '#52525b',
    badgeBg: 'bg-zinc-900',
    badgeText: 'text-zinc-400',
    badgeBorder: 'border-zinc-800',
    icon: Archive,
    order: 7,
  }
};

export const PiaStatusOverview: React.FC<PiaStatusOverviewProps> = ({
  pias,
  onSelectPia,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<AssessmentStatus | 'ALL'>('ALL');

  // Status Breakdown aggregation
  const statusStats = useMemo(() => {
    const counts: Record<AssessmentStatus, number> = {
      Draft: 0,
      Submitted: 0,
      IN_REVISION: 0,
      'DPO Review': 0,
      Remediation: 0,
      Approved: 0,
      Archived: 0,
    };

    pias.forEach(p => {
      if (counts[p.status] !== undefined) {
        counts[p.status]++;
      } else {
        counts.Draft++;
      }
    });

    const total = pias.length;
    const approved = counts.Approved;
    const inReview = counts['DPO Review'] + counts.Submitted;
    const remediation = counts.Remediation + counts.IN_REVISION;
    const draft = counts.Draft;

    const clearanceRate = total > 0 ? Math.round((approved / total) * 100) : 0;
    const pipelineActive = total - approved - counts.Archived;

    return {
      counts,
      total,
      approved,
      inReview,
      remediation,
      draft,
      clearanceRate,
      pipelineActive,
    };
  }, [pias]);

  // Donut chart data
  const donutData = useMemo(() => {
    const statuses: AssessmentStatus[] = ['Approved', 'DPO Review', 'Remediation', 'Submitted', 'IN_REVISION', 'Draft', 'Archived'];
    return statuses
      .map(st => ({
        name: STATUS_METAS[st].label,
        statusKey: st,
        value: statusStats.counts[st],
        color: STATUS_METAS[st].color,
      }))
      .filter(item => item.value > 0);
  }, [statusStats]);

  // Funnel / Bar chart data
  const pipelineFlowData = useMemo(() => {
    return [
      { step: '1. Draft', count: statusStats.counts.Draft, fill: '#a1a1aa' },
      { step: '2. Submitted', count: statusStats.counts.Submitted, fill: '#38bdf8' },
      { step: '3. In Revision', count: statusStats.counts.IN_REVISION, fill: '#f59e0b' },
      { step: '4. DPO Review', count: statusStats.counts['DPO Review'], fill: '#a855f7' },
      { step: '5. Remediation', count: statusStats.counts.Remediation, fill: '#f43f5e' },
      { step: '6. Approved', count: statusStats.counts.Approved, fill: '#10b981' },
    ];
  }, [statusStats]);

  // Filtered PIAs
  const filteredPias = useMemo(() => {
    if (selectedStatus === 'ALL') return pias;
    return pias.filter(p => p.status === selectedStatus);
  }, [pias, selectedStatus]);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 uppercase tracking-wider">
              PAGE 03 • EXECUTIVE ELEMENT
            </span>
            <span className="text-xs text-zinc-400 font-mono">Portfolio Lifecycle Telemetry</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1 flex items-center gap-2.5">
            <FileText className="w-6 h-6 text-cyan-400" />
            PIA Status
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-3xl">
            Complete lifecycle tracking of the privacy impact assessment portfolio across drafting, independent DPO evaluation, remediation, and statutory authorization.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="px-3 py-1.5 rounded-xl bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs font-mono font-bold flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            {statusStats.clearanceRate}% Clearance Rate
          </span>
        </div>
      </div>

      {/* Top 4 KPI Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block">
            TOTAL ASSESSMENTS
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono mt-1">
            {statusStats.total}
          </div>
          <span className="text-[11px] text-zinc-400 mt-0.5 block">
            Total active enterprise registry
          </span>
        </div>

        <div className="bg-zinc-900/90 border border-emerald-900/40 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
            APPROVED & CERTIFIED
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono mt-1">
            {statusStats.approved} <span className="text-sm font-normal text-emerald-500">({statusStats.clearanceRate}%)</span>
          </div>
          <span className="text-[11px] text-emerald-300/80 mt-0.5 block">
            Fully authorized for production
          </span>
        </div>

        <div className="bg-zinc-900/90 border border-purple-900/40 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider block">
            ACTIVE PIPELINE
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-purple-400 font-mono mt-1">
            {statusStats.pipelineActive}
          </div>
          <span className="text-[11px] text-purple-300/80 mt-0.5 block">
            Under review, revision or fix
          </span>
        </div>

        <div className="bg-zinc-900/90 border border-cyan-900/40 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
            DPO SLA VELOCITY
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono mt-1">
            18.2 <span className="text-sm font-normal text-zinc-400">days</span>
          </div>
          <span className="text-[11px] text-cyan-300/80 mt-0.5 block">
            Average turnaround (Target &lt; 21d)
          </span>
        </div>
      </div>

      {/* Lifecycle Flow Pipeline Stepper */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg">
        <h3 className="text-sm font-bold text-white mb-3 flex items-center justify-between">
          <span>Statutory Lifecycle Progression Pipeline</span>
          <span className="text-xs text-zinc-400 font-mono font-normal">
            Click any stage to filter directory below
          </span>
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {(['Draft', 'Submitted', 'IN_REVISION', 'DPO Review', 'Remediation', 'Approved'] as AssessmentStatus[]).map((st) => {
            const meta = STATUS_METAS[st];
            const Icon = meta.icon;
            const count = statusStats.counts[st];
            const isSelected = selectedStatus === st;

            return (
              <button
                key={st}
                onClick={() => setSelectedStatus(selectedStatus === st ? 'ALL' : st)}
                className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden flex flex-col justify-between ${
                  isSelected
                    ? 'ring-2 ring-cyan-400 shadow-lg bg-zinc-800 border-cyan-500'
                    : 'bg-zinc-950 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-850'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`p-1.5 rounded-lg ${meta.badgeBg} ${meta.badgeText}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className={`text-base font-bold font-mono ${meta.badgeText}`}>
                      {count}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-white truncate">{meta.label}</h4>
                </div>
                <div className="text-[10px] text-zinc-500 mt-2 line-clamp-1">
                  {Math.round((count / (statusStats.total || 1)) * 100)}% of total
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Visual Analytics: Status Distribution Donut + Funnel Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left: Donut Chart */}
        <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <PieChartIcon className="w-4 h-4 text-cyan-400" />
              Portfolio Status Proportions
            </h3>
            <p className="text-xs text-zinc-400">
              Breakdown of all {statusStats.total} registered PIA assessments.
            </p>
          </div>

          <div className="h-60 w-full flex items-center justify-center my-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={3}
                  dataKey="value"
                  onClick={(entry: any) => {
                    if (entry && entry.statusKey) {
                      setSelectedStatus(entry.statusKey as AssessmentStatus);
                    }
                  }}
                >
                  {donutData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px', fontSize: '11px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-2 gap-2 text-[11px] font-mono border-t border-zinc-800 pt-3">
            {donutData.map(d => (
              <div key={d.name} className="flex items-center gap-1.5 truncate">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: d.color }} />
                <span className="text-zinc-300 truncate">{d.name}:</span>
                <strong className="text-white">{d.value}</strong>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Funnel / Stage Volume Bar */}
        <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-emerald-400" />
              Volume by Progression Stage
            </h3>
            <p className="text-xs text-zinc-400">
              Sequential assessment intake and gate completion velocity.
            </p>
          </div>

          <div className="h-64 w-full my-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={pipelineFlowData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="step" stroke="#71717a" tick={{ fontSize: 10 }} />
                <YAxis stroke="#71717a" tick={{ fontSize: 10 }} />
                <RechartsTooltip
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px', fontSize: '11px' }}
                />
                <Bar dataKey="count" name="Assessments" radius={[4, 4, 0, 0]}>
                  {pipelineFlowData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="text-[11px] text-zinc-400 font-mono bg-zinc-950 p-2.5 rounded-xl border border-zinc-800 flex items-center justify-between">
            <span>Peak throughput: <strong>Approved ({statusStats.approved})</strong></span>
            <span>Remediation Queue: <strong className="text-rose-400">{statusStats.remediation} GAPs</strong></span>
          </div>
        </div>
      </div>

      {/* Interactive PIA Table Filtered by Status */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg">
        <div className="p-4 bg-zinc-850/80 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-cyan-400 font-bold">STATUS FILTER:</span>
              <h3 className="text-sm font-bold text-white">
                {selectedStatus === 'ALL' ? 'All Portfolio Assessments' : STATUS_METAS[selectedStatus].label}
              </h3>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Showing {filteredPias.length} of {statusStats.total} assessments
            </p>
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            {(['ALL', 'Approved', 'DPO Review', 'Remediation', 'Submitted', 'IN_REVISION', 'Draft'] as const).map(st => (
              <button
                key={st}
                onClick={() => setSelectedStatus(st as any)}
                className={`px-2.5 py-1 text-[11px] font-mono font-bold rounded-lg border transition ${
                  selectedStatus === st
                    ? 'bg-cyan-600 text-white border-cyan-400'
                    : 'bg-zinc-950 text-zinc-400 border-zinc-800 hover:text-zinc-200'
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto max-h-[420px]">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead className="bg-zinc-950 text-zinc-400 font-mono text-[11px] uppercase border-b border-zinc-800 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-2.5">FID</th>
                <th className="px-4 py-2.5">Project Title</th>
                <th className="px-4 py-2.5">Status</th>
                <th className="px-4 py-2.5">Risk Level</th>
                <th className="px-4 py-2.5">Risk Score</th>
                <th className="px-4 py-2.5">Project Lead</th>
                <th className="px-4 py-2.5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800">
              {filteredPias.slice(0, 15).map(pia => {
                const meta = STATUS_METAS[pia.status] || STATUS_METAS.Draft;

                return (
                  <tr key={pia.id} className="hover:bg-zinc-800/50 transition">
                    <td className="px-4 py-3 font-mono font-bold text-cyan-400">
                      {pia.fid}
                    </td>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-white line-clamp-1">{pia.projectTitle}</div>
                      <div className="text-[11px] text-zinc-400 line-clamp-1">{pia.projectDescription}</div>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold border ${meta.badgeBg} ${meta.badgeText} ${meta.badgeBorder}`}>
                        {meta.label}
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
                      {pia.riskResult?.finalRiskScore || 50}/100
                    </td>
                    <td className="px-4 py-3 text-zinc-400 font-mono">
                      {pia.projectOwner}
                    </td>
                    <td className="px-4 py-3 text-right">
                      {onSelectPia && (
                        <button
                          onClick={() => onSelectPia(pia)}
                          className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-semibold transition inline-flex items-center gap-1 border border-zinc-700"
                        >
                          <Eye className="w-3 h-3 text-cyan-400" />
                          View
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
