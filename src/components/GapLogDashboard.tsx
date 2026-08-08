import React, { useState } from 'react';
import { 
  AlertTriangle, CheckCircle2, Clock, User, MessageSquare, 
  Plus, Search, Filter, ShieldAlert, ArrowRight, CornerDownRight,
  Send, Edit3, Trash2, Calendar
} from 'lucide-react';
import { RemediationGap, GapStatus, RiskLevel, PIAAssessment } from '../types';

interface GapLogDashboardProps {
  gaps: RemediationGap[];
  pias: PIAAssessment[];
  onUpdateGap: (id: string, updates: Partial<RemediationGap>) => void;
  onAddFollowUp: (gapId: string, comment: string, statusUpdate?: GapStatus) => void;
  onCreateManualGap: (gapData: Partial<RemediationGap>) => void;
  onDeleteGap: (id: string) => void;
}

export const GapLogDashboard: React.FC<GapLogDashboardProps> = ({
  gaps,
  pias,
  onUpdateGap,
  onAddFollowUp,
  onCreateManualGap,
  onDeleteGap,
}) => {
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedRisk, setSelectedRisk] = useState<string>('All');
  const [selectedOwner, setSelectedOwner] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Comment Modal State
  const [activeGapForComment, setActiveGapForComment] = useState<RemediationGap | null>(null);
  const [newCommentText, setNewCommentText] = useState('');
  const [newStatusSelection, setNewStatusSelection] = useState<GapStatus | ''>('');

  // Manual Gap Create Modal State
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newGapPiaId, setNewGapPiaId] = useState(pias[0]?.id || '');
  const [newGapCode, setNewGapCode] = useState('GAP-M01');
  const [newGapSection, setNewGapSection] = useState('SECTION D: DATA MINIMIZATION & COLLECTION');
  const [newGapDesc, setNewGapDesc] = useState('');
  const [newGapRef, setNewGapRef] = useState('IIAC B4 / NOREA 2.1');
  const [newGapRisk, setNewGapRisk] = useState<RiskLevel>('High');
  const [newGapOwner, setNewGapOwner] = useState('');
  const [newGapMitigation, setNewGapMitigation] = useState('');

  // Filter Gaps
  const filteredGaps = (gaps || []).filter(g => {
    if (!g) return false;
    const term = (searchTerm || '').toLowerCase();
    const matchesSearch =
      (g.code || '').toLowerCase().includes(term) ||
      (g.description || '').toLowerCase().includes(term) ||
      (g.piaTitle || '').toLowerCase().includes(term) ||
      (g.assignedOwner || '').toLowerCase().includes(term);

    const matchesStatus = selectedStatus === 'All' || g.status === selectedStatus;
    const matchesRisk = selectedRisk === 'All' || g.riskLevel === selectedRisk;
    const matchesOwner = selectedOwner === 'All' || g.assignedOwner === selectedOwner;

    return matchesSearch && matchesStatus && matchesRisk && matchesOwner;
  });

  // Calculate Metrics
  const totalGaps = gaps.length;
  const openGaps = gaps.filter(g => g.status === 'Open').length;
  const inProgressGaps = gaps.filter(g => g.status === 'In Progress').length;
  const overdueGaps = gaps.filter(g => g.status === 'Overdue').length;
  const resolvedGaps = gaps.filter(g => g.status === 'Resolved').length;

  const getStatusBadge = (status: GapStatus) => {
    switch (status) {
      case 'Resolved':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60';
      case 'In Progress':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-800/60';
      case 'Overdue':
        return 'bg-rose-950/80 text-rose-300 border-rose-800/60 animate-pulse';
      case 'Open':
      default:
        return 'bg-amber-950/80 text-amber-300 border-amber-800/60';
    }
  };

  const getRiskBadge = (level: RiskLevel) => {
    switch (level) {
      case 'Critical':
        return 'bg-rose-500 text-white font-bold';
      case 'High':
        return 'bg-orange-500 text-white font-bold';
      case 'Medium':
        return 'bg-amber-500 text-zinc-950 font-bold';
      case 'Low':
      default:
        return 'bg-emerald-500 text-white font-bold';
    }
  };

  // Days remaining calculation
  const getDaysRemaining = (dueDateIso: string) => {
    const due = new Date(dueDateIso).getTime();
    const now = new Date().getTime();
    const diff = Math.ceil((due - now) / (1000 * 60 * 60 * 24));
    if (diff < 0) return <span className="text-rose-400 font-bold">{Math.abs(diff)} days overdue</span>;
    return <span className="text-zinc-300 font-medium">{diff} days left</span>;
  };

  const handleCreateGapSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGapDesc || !newGapMitigation) {
      alert('Please fill in Description and Mitigation Action.');
      return;
    }
    onCreateManualGap({
      piaId: newGapPiaId,
      code: newGapCode,
      section: newGapSection,
      description: newGapDesc,
      regulatoryReference: newGapRef,
      riskLevel: newGapRisk,
      assignedOwner: newGapOwner || 'Unassigned',
      mitigationAction: newGapMitigation,
    });
    setShowCreateModal(false);
    setNewGapDesc('');
    setNewGapMitigation('');
  };

  return (
    <div id="gap-log-dashboard-container" className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-zinc-900 via-rose-950/40 to-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-xl text-zinc-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-amber-400" />
              Gap Log & Remediation SLA Management
            </h1>
            <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              Track compliance gaps identified during PIA assessments. Automatically calculate SLA target completion dates
              based on risk level, assign responsible mitigation owners, and log DPO follow-up comments.
            </p>
          </div>

          <button
            id="btn-add-gap-modal"
            onClick={() => setShowCreateModal(true)}
            className="inline-flex items-center px-4 py-2 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg shadow-md transition shrink-0"
          >
            <Plus className="w-4 h-4 mr-1.5 stroke-[2.5]" />
            Add Manual Gap
          </button>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6 text-xs">
          <div className="bg-zinc-950/80 p-3 rounded-xl border border-zinc-800 shadow-inner">
            <span className="text-zinc-400 font-medium">Total Identified</span>
            <div className="text-xl font-mono font-bold text-white mt-0.5">{totalGaps}</div>
          </div>
          <div className="bg-amber-950/40 p-3 rounded-xl border border-amber-800/40">
            <span className="text-amber-300 font-medium">Open</span>
            <div className="text-xl font-mono font-bold text-amber-200 mt-0.5">{openGaps}</div>
          </div>
          <div className="bg-cyan-950/40 p-3 rounded-xl border border-cyan-800/40">
            <span className="text-cyan-300 font-medium">In Progress</span>
            <div className="text-xl font-mono font-bold text-cyan-200 mt-0.5">{inProgressGaps}</div>
          </div>
          <div className="bg-rose-950/50 p-3 rounded-xl border border-rose-800/50">
            <span className="text-rose-300 font-medium">Overdue SLAs</span>
            <div className="text-xl font-mono font-bold text-rose-200 mt-0.5">{overdueGaps}</div>
          </div>
          <div className="bg-emerald-950/40 p-3 rounded-xl border border-emerald-800/40">
            <span className="text-emerald-300 font-medium">Resolved & Mitigated</span>
            <div className="text-xl font-mono font-bold text-emerald-200 mt-0.5">{resolvedGaps}</div>
          </div>
        </div>
      </div>

      {/* Toolbar & Filter Options */}
      <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-zinc-200 shadow-sm">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-zinc-400" />
          <input
            id="input-search-gaps"
            type="text"
            placeholder="Search gaps, code, owner, assessment..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto text-zinc-300">
          <div className="flex items-center space-x-1.5">
            <span className="text-zinc-400 font-medium">Status:</span>
            <select
              id="select-gap-status"
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Statuses</option>
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Overdue">Overdue</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          <div className="flex items-center space-x-1.5">
            <span className="text-zinc-400 font-medium">Risk Level:</span>
            <select
              id="select-gap-risk"
              value={selectedRisk}
              onChange={e => setSelectedRisk(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Risk Levels</option>
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Gap Cards List */}
      <div className="space-y-4">
        {filteredGaps.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center text-zinc-400">
            <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-500 mb-3" />
            <h3 className="text-sm font-semibold text-zinc-200">No remediation gaps found</h3>
            <p className="text-xs text-zinc-400 mt-1">All identified control gaps have been mitigated or match search filters.</p>
          </div>
        ) : (
          filteredGaps.map(gap => (
            <div
              key={gap.id}
              id={`gap-card-${gap.id}`}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono font-bold text-rose-400 bg-rose-950 px-2.5 py-0.5 rounded-md border border-rose-800/40">
                      {gap.code}
                    </span>
                    <span className={`text-[10px] uppercase px-2 py-0.5 rounded-full ${getRiskBadge(gap.riskLevel)}`}>
                      {gap.riskLevel} Risk
                    </span>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-bold ${getStatusBadge(gap.status)}`}>
                      {gap.status}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-white mt-1">{gap.description}</h3>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400">
                    <span>Assessment: <strong className="text-cyan-300 font-medium">{gap.piaTitle}</strong> ({gap.piaId})</span>
                    <span>Section: <strong className="text-zinc-300 font-medium">{gap.section}</strong></span>
                    <span>Reference: <strong className="text-zinc-400 font-mono">{gap.regulatoryReference}</strong></span>
                  </div>
                </div>

                {/* Status & Owner Inline Controls */}
                <div className="flex flex-col sm:flex-row items-end sm:items-center gap-3 shrink-0 text-xs">
                  <div className="text-right">
                    <div className="text-[10px] text-zinc-400 uppercase font-bold">Assigned Owner</div>
                    <input
                      type="text"
                      value={gap.assignedOwner}
                      onChange={e => onUpdateGap(gap.id, { assignedOwner: e.target.value })}
                      className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-200 font-semibold focus:outline-none focus:border-cyan-500 text-right"
                    />
                  </div>

                  <div className="text-right">
                    <div className="text-[10px] text-zinc-400 uppercase font-bold">Status Toggle</div>
                    <select
                      value={gap.status}
                      onChange={e => onUpdateGap(gap.id, { status: e.target.value as GapStatus })}
                      className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-200 font-bold focus:outline-none focus:border-cyan-500"
                    >
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Overdue">Overdue</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Action Plan & SLA Section */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 bg-zinc-950 p-3.5 rounded-xl border border-zinc-800 text-xs">
                <div className="md:col-span-8 space-y-1">
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider block">
                    Mitigation Action Plan
                  </span>
                  <p className="text-zinc-200 text-xs leading-relaxed">{gap.mitigationAction}</p>
                </div>

                <div className="md:col-span-4 border-l border-zinc-800 pl-4 space-y-1 text-right flex flex-col justify-center">
                  <span className="text-[10px] text-zinc-400 uppercase font-bold">SLA Target Due Date</span>
                  <div className="text-xs font-mono font-bold text-white flex items-center justify-end gap-1">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    {new Date(gap.targetDueDate).toLocaleDateString()}
                  </div>
                  <div className="text-xs">{getDaysRemaining(gap.targetDueDate)}</div>
                </div>
              </div>

              {/* DPO Follow-ups Thread */}
              <div className="space-y-2 text-xs pt-1">
                <div className="flex items-center justify-between text-zinc-400 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                    DPO Follow-ups & Activity Logs ({gap.followUps.length})
                  </span>
                  <button
                    onClick={() => {
                      setActiveGapForComment(gap);
                      setNewCommentText('');
                    }}
                    className="text-cyan-400 hover:text-cyan-300 font-medium transition"
                  >
                    + Add DPO Comment
                  </button>
                </div>

                {gap.followUps.length > 0 && (
                  <div className="space-y-2 bg-zinc-950/80 p-3 rounded-xl border border-zinc-800">
                    {gap.followUps.map(fu => (
                      <div key={fu.id} className="text-xs space-y-0.5 border-b border-zinc-800/60 pb-2 last:border-b-0 last:pb-0">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-cyan-300">{fu.author} ({fu.role})</span>
                          <span className="text-[10px] text-zinc-500">{new Date(fu.timestamp).toLocaleString()}</span>
                        </div>
                        <p className="text-zinc-300 leading-relaxed">{fu.comment}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Add DPO Comment Modal */}
      {activeGapForComment && (
        <div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-lg w-full space-y-4 text-zinc-200 shadow-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              Add DPO Follow-Up Comment ({activeGapForComment.code})
            </h3>

            <p className="text-xs text-zinc-400">{activeGapForComment.description}</p>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Status Update (Optional)</label>
              <select
                value={newStatusSelection}
                onChange={e => setNewStatusSelection(e.target.value as GapStatus)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="">Keep Current Status ({activeGapForComment.status})</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">DPO Audit Comment</label>
              <textarea
                rows={4}
                placeholder="Log follow-up details, testing notes, or SLA extensions..."
                value={newCommentText}
                onChange={e => setNewCommentText(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div className="flex justify-end space-x-2 pt-2 border-t border-zinc-800">
              <button
                type="button"
                onClick={() => setActiveGapForComment(null)}
                className="px-3.5 py-1.5 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  if (newCommentText.trim()) {
                    onAddFollowUp(activeGapForComment.id, newCommentText, newStatusSelection || undefined);
                    setActiveGapForComment(null);
                  }
                }}
                className="px-4 py-1.5 text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-lg transition shadow-md"
              >
                Post Follow-up
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manual Gap Creation Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-zinc-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <form onSubmit={handleCreateGapSubmit} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 max-w-xl w-full space-y-4 text-zinc-200 shadow-2xl">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Plus className="w-5 h-5 text-rose-400" />
              Add Manual Remediation Gap
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Link to Assessment</label>
                <select
                  value={newGapPiaId}
                  onChange={e => setNewGapPiaId(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-zinc-200"
                >
                  {pias.map(p => (
                    <option key={p.id} value={p.id}>{p.id} - {p.projectTitle}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Gap Code</label>
                <input
                  type="text"
                  value={newGapCode}
                  onChange={e => setNewGapCode(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-zinc-200 font-mono"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Risk Severity</label>
                <select
                  value={newGapRisk}
                  onChange={e => setNewGapRisk(e.target.value as RiskLevel)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-zinc-200"
                >
                  <option value="Critical">Critical (14-day SLA)</option>
                  <option value="High">High (30-day SLA)</option>
                  <option value="Medium">Medium (45-day SLA)</option>
                  <option value="Low">Low (90-day SLA)</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Assigned Owner</label>
                <input
                  type="text"
                  placeholder="e.g. Lead Engineer (A. Smith)"
                  value={newGapOwner}
                  onChange={e => setNewGapOwner(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-zinc-200"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Gap Description</label>
              <textarea
                rows={2}
                placeholder="Specific missing control or non-compliance finding..."
                value={newGapDesc}
                onChange={e => setNewGapDesc(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-xs text-zinc-200"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">Mitigation Action Plan</label>
              <textarea
                rows={2}
                placeholder="Concrete technical or organizational fix..."
                value={newGapMitigation}
                onChange={e => setNewGapMitigation(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2 text-xs text-zinc-200"
              />
            </div>

            <div className="flex justify-end space-x-2 pt-2 border-t border-zinc-800">
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="px-3.5 py-1.5 text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-1.5 text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white rounded-lg shadow-md"
              >
                Save Gap Item
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
