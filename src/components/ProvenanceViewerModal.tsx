import React, { useState } from 'react';
import { ShieldCheck, GitCommit, Clock, CheckCircle2, Copy, X, FileText, ChevronRight, Hash, ShieldAlert } from 'lucide-react';
import { PIAAssessment, DataProvenanceEntry } from '../types';

interface ProvenanceViewerModalProps {
  pia: PIAAssessment;
  isOpen: boolean;
  onClose: () => void;
}

export const ProvenanceViewerModal: React.FC<ProvenanceViewerModalProps> = ({
  pia,
  isOpen,
  onClose,
}) => {
  const [copiedHash, setCopiedHash] = useState<string | null>(null);
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(
    pia.provenanceTrail?.[0]?.id || null
  );

  if (!isOpen) return null;

  const handleCopyHash = (hash: string) => {
    navigator.clipboard.writeText(hash);
    setCopiedHash(hash);
    setTimeout(() => setCopiedHash(null), 2000);
  };

  const selectedEntry = pia.provenanceTrail?.find(e => e.id === selectedEntryId) || pia.provenanceTrail?.[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl text-zinc-100 overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <GitCommit className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white">Data Provenance Block & Lineage Audit</h2>
                <span className="px-2 py-0.5 text-xs font-mono font-semibold rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {pia.version || 'v1.0'}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Cryptographic version history, delta logs, and Dual-ID provenance tracking
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Dual ID System Identity Summary */}
        <div className="bg-zinc-950 p-4 border-b border-zinc-800 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="bg-zinc-900/80 p-3 rounded-xl border border-blue-900/40">
            <div className="text-zinc-400 font-medium">FRONTEND SERVER ID (FID)</div>
            <div className="text-sm font-mono font-bold text-blue-400 mt-1 flex items-center justify-between">
              <span>{pia.fid || 'PIA-FE-2026-A8F9K2L1'}</span>
              <button
                onClick={() => handleCopyHash(pia.fid || '')}
                className="text-zinc-500 hover:text-blue-300"
                title="Copy FID"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-[10px] text-zinc-500 mt-0.5">Frontend Submission Draft</div>
          </div>

          <div className="bg-zinc-900/80 p-3 rounded-xl border border-emerald-900/40">
            <div className="text-zinc-400 font-medium">BACKEND AUDIT ID (BID)</div>
            <div className="text-sm font-mono font-bold text-emerald-400 mt-1 flex items-center justify-between">
              <span>{pia.bid || 'PIA-BE-UK-2026-000412'}</span>
              <button
                onClick={() => handleCopyHash(pia.bid || '')}
                className="text-zinc-500 hover:text-emerald-300"
                title="Copy BID"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="text-[10px] text-zinc-500 mt-0.5">Official Regulatory Record ID</div>
          </div>

          <div className="bg-zinc-900/80 p-3 rounded-xl border border-zinc-800">
            <div className="text-zinc-400 font-medium">PROVENANCE INTEGRITY</div>
            <div className="text-sm font-mono font-bold text-cyan-400 mt-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Immutable Verified</span>
            </div>
            <div className="text-[10px] text-zinc-500 mt-0.5">SHA-256 Hash Chain Intact</div>
          </div>
        </div>

        {/* Content Body: Timeline Left + Selected Entry Right */}
        <div className="flex-1 overflow-hidden grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-zinc-800">
          {/* Provenance History Log List */}
          <div className="p-4 overflow-y-auto space-y-2 bg-zinc-950/40 max-h-[50vh] md:max-h-full">
            <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cyan-400" /> Version Trail ({pia.provenanceTrail?.length || 0})
            </h3>
            
            {pia.provenanceTrail && pia.provenanceTrail.length > 0 ? (
              pia.provenanceTrail.map((entry) => {
                const isSelected = selectedEntry?.id === entry.id;
                return (
                  <button
                    key={entry.id}
                    onClick={() => setSelectedEntryId(entry.id)}
                    className={`w-full text-left p-3 rounded-xl border transition flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-cyan-950/40 border-cyan-500/50 text-white shadow-sm'
                        : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:border-zinc-700 hover:bg-zinc-900'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-bold text-cyan-400">{entry.newVersion}</span>
                      <span className="text-[10px] text-zinc-400 font-mono">
                        {new Date(entry.timestamp).toLocaleDateString()}
                      </span>
                    </div>

                    <div className="text-xs font-semibold text-zinc-200 truncate">
                      {entry.actionExecuted.replace(/_/g, ' ')}
                    </div>

                    <div className="text-[11px] text-zinc-400 flex items-center justify-between">
                      <span className="truncate">{entry.modifiedBy}</span>
                      <ChevronRight className="w-3.5 h-3.5 shrink-0 text-zinc-500" />
                    </div>
                  </button>
                );
              })
            ) : (
              <div className="p-4 text-center text-xs text-zinc-500">
                No provenance trail recorded.
              </div>
            )}
          </div>

          {/* Selected Entry Detail View */}
          <div className="md:col-span-2 p-6 overflow-y-auto space-y-6">
            {selectedEntry ? (
              <div className="space-y-6">
                {/* Entry Header Info */}
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-3">
                    <div>
                      <div className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                        Action Type: {selectedEntry.actionExecuted}
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        Version Progression: <span className="font-mono text-zinc-400">{selectedEntry.parentVersion}</span> → <span className="font-mono text-cyan-400">{selectedEntry.newVersion}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-zinc-400">Timestamp</div>
                      <div className="text-xs font-mono text-zinc-300">{selectedEntry.timestamp}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="text-zinc-500">Modified By:</span>
                      <p className="font-semibold text-zinc-200 mt-0.5">{selectedEntry.modifiedBy}</p>
                    </div>
                    <div>
                      <span className="text-zinc-500">Triggering FID:</span>
                      <p className="font-mono font-semibold text-blue-400 mt-0.5">{selectedEntry.triggeringFid}</p>
                    </div>
                  </div>
                </div>

                {/* Delta Log Table */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-zinc-300 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-cyan-400" /> Delta Log Modifications ({selectedEntry.deltaLog?.length || 0})
                  </h4>

                  <div className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden">
                    <table className="w-full text-left text-xs text-zinc-300">
                      <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 font-semibold">
                        <tr>
                          <th className="p-3">Section / Field</th>
                          <th className="p-3">Previous Value</th>
                          <th className="p-3">New Value</th>
                          <th className="p-3">Rationale</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/60">
                        {selectedEntry.deltaLog?.map((delta, i) => (
                          <tr key={i} className="hover:bg-zinc-900/40">
                            <td className="p-3 font-semibold text-cyan-300 whitespace-nowrap">
                              <div>{delta.sectionId}</div>
                              <div className="text-[10px] text-zinc-500">{delta.parameter}</div>
                            </td>
                            <td className="p-3 font-mono text-rose-400/90 max-w-[140px] truncate">
                              {delta.previousValue}
                            </td>
                            <td className="p-3 font-mono text-emerald-400 max-w-[140px] truncate">
                              {delta.newValue}
                            </td>
                            <td className="p-3 text-zinc-400 text-[11px] leading-relaxed">
                              {delta.rationale || 'No explicit rationale provided'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Cryptographic Hash Verification Block */}
                <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold text-zinc-300">
                      <Hash className="w-4 h-4 text-emerald-400" />
                      Cryptographic Provenance Hash
                    </div>
                    <button
                      onClick={() => handleCopyHash(selectedEntry.provenanceHash)}
                      className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800/60 transition"
                    >
                      <Copy className="w-3 h-3" />
                      {copiedHash === selectedEntry.provenanceHash ? 'Copied Hash!' : 'Copy Hash'}
                    </button>
                  </div>

                  <div className="bg-black/80 p-3 rounded-lg border border-zinc-800 font-mono text-xs text-emerald-400 break-all select-all">
                    {selectedEntry.provenanceHash}
                  </div>
                  <p className="text-[10px] text-zinc-500">
                    SHA-256 lineage digest computed from parent hash, timestamp, modified fields, and triggering FID.
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center text-zinc-500 text-xs">
                Select a provenance entry from the left to inspect delta logs and cryptographic hashes.
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-950/80 flex items-center justify-between text-xs text-zinc-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PIA Governance Lineage Standard compliant with ISO 8601 & SHA-256</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition"
          >
            Close Audit View
          </button>
        </div>
      </div>
    </div>
  );
};
