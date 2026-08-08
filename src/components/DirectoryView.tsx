import React, { useState } from 'react';
import { 
  Search, Filter, ShieldAlert, CheckCircle2, Clock, 
  FileEdit, Trash2, ArrowRight, AlertTriangle, Layers, User,
  Building, Download, GitCommit, Globe, Shield
} from 'lucide-react';
import { PIAAssessment, RiskLevel, AssessmentStatus, WorkflowMode } from '../types';
import { ProvenanceViewerModal } from './ProvenanceViewerModal';
import { ExportButtonDropdown } from './ExportButtonDropdown';

interface DirectoryViewProps {
  pias: PIAAssessment[];
  workflowMode?: WorkflowMode;
  onSelectPia: (pia: PIAAssessment) => void;
  onNewAssessment: () => void;
  onDeletePia: (id: string) => void;
  onViewReport: (pia: PIAAssessment) => void;
}

export const DirectoryView: React.FC<DirectoryViewProps> = ({
  pias,
  workflowMode = 'frontend',
  onSelectPia,
  onNewAssessment,
  onDeletePia,
  onViewReport,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRisk, setSelectedRisk] = useState<string>('All');
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [provenanceModalPia, setProvenanceModalPia] = useState<PIAAssessment | null>(null);

  // Filter Logic
  const filteredPias = (pias || []).filter(p => {
    if (!p) return false;
    const term = (searchTerm || '').toLowerCase();
    const matchesSearch =
      (p.projectTitle || p.title || '').toLowerCase().includes(term) ||
      (p.organization || p.dataController || '').toLowerCase().includes(term) ||
      (p.projectOwner || p.assessorName || '').toLowerCase().includes(term) ||
      (p.id || '').toLowerCase().includes(term) ||
      (p.fid ? p.fid.toLowerCase().includes(term) : false) ||
      (p.bid ? p.bid.toLowerCase().includes(term) : false);

    const matchesRisk = selectedRisk === 'All' || p.riskResult?.riskLevel === selectedRisk;
    const matchesStatus = selectedStatus === 'All' || p.status === selectedStatus;
    const matchesCategory =
      selectedCategory === 'All' || p.answers['A1']?.selectedLabel === selectedCategory;

    return matchesSearch && matchesRisk && matchesStatus && matchesCategory;
  });

  // Unique Categories & Owners for Filter Dropdowns
  const categories = Array.from(new Set(pias.map(p => p.answers['A1']?.selectedLabel).filter(Boolean)));

  // Risk Badge Color Mapping
  const getRiskColor = (level?: RiskLevel) => {
    switch (level) {
      case 'Critical':
        return 'bg-rose-500/10 text-rose-400 border-rose-500/30';
      case 'High':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      case 'Medium':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/30';
      case 'Low':
      default:
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30';
    }
  };

  // Status Badge Color Mapping
  const getStatusColor = (status: AssessmentStatus) => {
    switch (status) {
      case 'Approved':
        return 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60';
      case 'Remediation':
        return 'bg-rose-950/80 text-rose-300 border-rose-800/60';
      case 'DPO Review':
        return 'bg-cyan-950/80 text-cyan-300 border-cyan-800/60';
      case 'Submitted':
        return 'bg-blue-950/80 text-blue-300 border-blue-800/60';
      case 'Draft':
      default:
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    }
  };

  return (
    <div id="central-directory-container" className="space-y-6">
      {/* Top Banner / Cockpit Overview */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-900/90 to-zinc-900 rounded-2xl p-6 border border-zinc-800 shadow-xl text-zinc-100">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-cyan-400" />
              Central PIA Directory & Governance Cockpit
            </h1>
            <p className="text-xs text-zinc-400 mt-1 max-w-2xl leading-relaxed">
              Centralized repository for Privacy Officers and Assessment Owners. Monitor privacy risk profiles,
              track compliance gaps against NHS, IIAC, and NOREA frameworks, and maintain immutable audit provenance.
            </p>
          </div>
          <button
            id="btn-directory-create"
            onClick={onNewAssessment}
            className="inline-flex items-center px-4 py-2 text-xs font-bold text-zinc-950 bg-cyan-500 hover:bg-cyan-400 rounded-lg shadow-md transition shrink-0"
          >
            + Start Digital Assessment
          </button>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          <div className="bg-zinc-950/80 rounded-xl p-4 border border-zinc-800 shadow-inner">
            <span className="text-xs font-medium text-zinc-400">Total Assessments</span>
            <div className="text-2xl font-mono font-bold text-white mt-1">{pias.length}</div>
          </div>
          <div className="bg-rose-950/30 rounded-xl p-4 border border-rose-800/40 text-rose-300">
            <span className="text-xs font-medium text-rose-300">High & Critical Risk</span>
            <div className="text-2xl font-mono font-bold text-rose-400 mt-1">
              {pias.filter(p => p.riskResult?.riskLevel === 'High' || p.riskResult?.riskLevel === 'Critical').length}
            </div>
          </div>
          <div className="bg-emerald-950/30 rounded-xl p-4 border border-emerald-800/40 text-emerald-300">
            <span className="text-xs font-medium text-emerald-300">Approved & Compliant</span>
            <div className="text-2xl font-mono font-bold text-emerald-400 mt-1">
              {pias.filter(p => p.status === 'Approved').length}
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Toolbar */}
      <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800 shadow-sm flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-zinc-200">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-2.5 text-zinc-400" />
          <input
            id="input-search-pias"
            type="text"
            placeholder="Search by title, owner, or ID..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Risk Level Filter */}
          <div className="flex items-center space-x-1.5">
            <span className="text-zinc-400 font-medium">Risk:</span>
            <select
              id="select-risk-filter"
              value={selectedRisk}
              onChange={e => setSelectedRisk(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Risks</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-1.5">
            <span className="text-zinc-400 font-medium">Status:</span>
            <select
              id="select-status-filter"
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              className="bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Statuses</option>
              <option value="Draft">Draft</option>
              <option value="Submitted">Submitted</option>
              <option value="DPO Review">DPO Review</option>
              <option value="Remediation">Remediation</option>
              <option value="Approved">Approved</option>
            </select>
          </div>

          {/* Category Filter */}
          {categories.length > 0 && (
            <div className="flex items-center space-x-1.5">
              <span className="text-zinc-400 font-medium">Category:</span>
              <select
                id="select-category-filter"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
                className="bg-zinc-950 border border-zinc-800 rounded-lg px-2.5 py-1.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500"
              >
                <option value="All">All Categories</option>
                {categories.map(c => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Directory List */}
      <div className="space-y-4">
        {filteredPias.length === 0 ? (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-12 text-center text-zinc-400">
            <ShieldAlert className="w-10 h-10 mx-auto text-zinc-600 mb-3" />
            <h3 className="text-sm font-semibold text-zinc-200">No assessments found</h3>
            <p className="text-xs text-zinc-400 mt-1">
              Try clearing search filters or create a new Privacy Impact Assessment.
            </p>
            <button
              onClick={onNewAssessment}
              className="mt-4 inline-flex items-center px-4 py-2 text-xs font-bold text-zinc-950 bg-cyan-500 rounded-lg hover:bg-cyan-400"
            >
              + Create Assessment
            </button>
          </div>
        ) : (
          filteredPias.map(pia => {
            const riskLevel = pia.riskResult?.riskLevel || 'Low';
            const riskScore = pia.riskResult?.finalRiskScore || 1.0;
            const categoryLabel = pia.answers['A1']?.selectedLabel || 'Unclassified';

            return (
              <div
                key={pia.id}
                id={`pia-card-${pia.id}`}
                className="bg-zinc-900 hover:bg-zinc-900/90 transition rounded-xl border border-zinc-800 p-5 shadow-sm space-y-4"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                  <div className="space-y-1.5">
                    {/* Dual-ID & Version Badges */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/60 px-2.5 py-0.5 rounded-md border border-blue-800/60 flex items-center gap-1" title="Frontend Server Identifier">
                        <Globe className="w-3 h-3 text-blue-400" />
                        FID: {pia.fid || pia.id}
                      </span>

                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-md border border-emerald-800/60 flex items-center gap-1" title="Backend Audit Identifier">
                        <Shield className="w-3 h-3 text-emerald-400" />
                        BID: {pia.bid || 'PIA-BE-UK-2026-000412'}
                      </span>

                      <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded-md border border-purple-800/60" title="Assessment Version">
                        {pia.version || 'v1.0'}
                      </span>

                      <span className={`text-xs px-2.5 py-0.5 rounded-full border font-semibold ${getStatusColor(pia.status)}`}>
                        {pia.status}
                      </span>
                    </div>

                    <h3
                      onClick={() => onSelectPia(pia)}
                      className="text-base font-bold text-white hover:text-cyan-400 cursor-pointer transition"
                    >
                      {pia.projectTitle}
                    </h3>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Building className="w-3.5 h-3.5 text-zinc-500" />
                        {pia.organization}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3.5 h-3.5 text-zinc-500" />
                        Owner: <strong className="text-zinc-200 font-medium">{pia.projectOwner}</strong>
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-zinc-500" />
                        Updated: {new Date(pia.updatedAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  {/* Calculated Risk Score & Badge */}
                  <div className="flex items-center space-x-3 bg-zinc-950 p-3 rounded-xl border border-zinc-800">
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold text-zinc-400">Calculated Risk Score</div>
                      <div className="text-lg font-mono font-black text-white leading-tight">
                        {riskScore} <span className="text-xs text-zinc-500 font-normal">/ 25.0</span>
                      </div>
                    </div>
                    <div className={`px-3 py-1.5 rounded-lg border font-bold text-xs uppercase tracking-wide text-center ${getRiskColor(riskLevel)}`}>
                      {riskLevel}
                    </div>
                  </div>
                </div>

                {/* Brief Narrative & AI Analysis Status */}
                <p className="text-xs text-zinc-300 line-clamp-2 bg-zinc-950/60 p-3 rounded-lg border border-zinc-800/60 leading-relaxed">
                  {pia.projectDescription || 'No project description provided.'}
                </p>

                {/* Footer Controls & Quick Actions */}
                <div className="flex flex-wrap items-center justify-between pt-2 border-t border-zinc-800 text-xs">
                  <div className="flex items-center space-x-3 text-zinc-400">
                    <span className="text-zinc-400 font-mono text-[11px]">
                      Sector: {categoryLabel}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      id={`btn-provenance-${pia.id}`}
                      onClick={() => setProvenanceModalPia(pia)}
                      className="inline-flex items-center px-3 py-1.5 bg-zinc-950 hover:bg-zinc-800 text-cyan-400 border border-zinc-800 rounded-lg font-medium transition"
                      title="Inspect Cryptographic Data Provenance & Lineage"
                    >
                      <GitCommit className="w-3.5 h-3.5 mr-1 text-cyan-400" />
                      Provenance Block
                    </button>

                    <ExportButtonDropdown pia={pia} variant="compact" />

                    <button
                      id={`btn-view-report-${pia.id}`}
                      onClick={() => onViewReport(pia)}
                      className="inline-flex items-center px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-lg font-medium transition text-xs"
                    >
                      <Download className="w-3.5 h-3.5 mr-1" />
                      Report
                    </button>

                    <button
                      id={`btn-edit-pia-${pia.id}`}
                      onClick={() => onSelectPia(pia)}
                      className="inline-flex items-center px-3.5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 rounded-lg font-bold transition shadow-sm"
                    >
                      <FileEdit className="w-3.5 h-3.5 mr-1" />
                      Open Form
                    </button>

                    <button
                      id={`btn-delete-pia-${pia.id}`}
                      onClick={() => {
                        if (confirm(`Are you sure you want to delete assessment ${pia.id}?`)) {
                          onDeletePia(pia.id);
                        }
                      }}
                      className="p-1.5 text-zinc-500 hover:text-rose-400 hover:bg-rose-950/40 rounded-lg transition"
                      title="Delete assessment"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Provenance Viewer Modal */}
      {provenanceModalPia && (
        <ProvenanceViewerModal
          pia={provenanceModalPia}
          isOpen={Boolean(provenanceModalPia)}
          onClose={() => setProvenanceModalPia(null)}
        />
      )}
    </div>
  );
};
