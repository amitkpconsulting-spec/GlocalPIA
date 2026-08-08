import React, { useState } from 'react';
import { Sliders, Shield, Check, AlertTriangle, Sparkles, Send, FileCode } from 'lucide-react';
import { PIAAssessment, TargetRegulatoryFramework, RiskLevel } from '../types';

interface RegulatoryTailoringPanelProps {
  pia: PIAAssessment;
  onUpdatePia: (updatedPia: PIAAssessment) => void;
}

const FRAMEWORK_OPTIONS: { id: TargetRegulatoryFramework; label: string; desc: string }[] = [
  { id: 'UK GDPR & DPA 2018', label: 'UK GDPR & DPA 2018', desc: 'ICO Lawful Basis & Rights Matrix alignment' },
  { id: 'EU GDPR & EU AI Act', label: 'EU GDPR & EU AI Act', desc: 'Art 14 Human Oversight & High-Risk AI Classification' },
  { id: 'DPDP Act 2023 (India)', label: 'DPDP Act 2023 (India)', desc: 'Digital Personal Data Protection Act compliance' },
  { id: 'US CCPA/CPRA & State Laws', label: 'US CCPA/CPRA & State Laws', desc: 'Opt-out rights, Sensitive Personal Info rules' },
  { id: 'ISO/IEC 42001 (AI Management)', label: 'ISO/IEC 42001 (AIMS)', desc: 'Artificial Intelligence Management System controls' },
  { id: 'NIST AI RMF 1.0', label: 'NIST AI Risk Management', desc: 'Govern, Map, Measure, Manage AI framework' },
];

export const RegulatoryTailoringPanel: React.FC<RegulatoryTailoringPanelProps> = ({
  pia,
  onUpdatePia,
}) => {
  const [selectedFrameworks, setSelectedFrameworks] = useState<TargetRegulatoryFramework[]>(
    pia.regulatoryTailoring?.selectedFrameworks || ['UK GDPR & DPA 2018']
  );
  const [smeNotes, setSmeNotes] = useState<string>(
    pia.regulatoryTailoring?.smeOverrideNotes || ''
  );
  const [smeRisk, setSmeRisk] = useState<RiskLevel>(
    pia.regulatoryTailoring?.smeRiskAdjustment || pia.riskResult?.riskLevel || 'Medium'
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const toggleFramework = (fw: TargetRegulatoryFramework) => {
    if (selectedFrameworks.includes(fw)) {
      if (selectedFrameworks.length === 1) return; // Keep at least one
      setSelectedFrameworks(selectedFrameworks.filter(f => f !== fw));
    } else {
      setSelectedFrameworks([...selectedFrameworks, fw]);
    }
  };

  const handleApplyTailoring = async () => {
    setIsSubmitting(true);
    setSuccessMessage(null);

    try {
      const res = await fetch(`/api/pias/${pia.id}/tailor-regulatory`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          selectedFrameworks,
          smeOverrideNotes: smeNotes,
          smeRiskAdjustment: smeRisk,
          modifiedBy: 'Data SME / Privacy Officer',
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to apply regulatory tailoring');
      }

      const updatedData: PIAAssessment = await res.json();
      onUpdatePia(updatedData);
      setSuccessMessage(`Regulatory Tailoring applied! Provenance block updated to version ${updatedData.version}.`);
      setTimeout(() => setSuccessMessage(null), 4000);
    } catch (err) {
      console.error(err);
      alert('Error updating regulatory tailoring');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 shadow-xl text-zinc-100">
      {/* Panel Header */}
      <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Sliders className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              Backend Regulatory Tailoring & SME Override Engine
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Align assessment against international privacy regimes and execute Data SME risk rating overrides.
            </p>
          </div>
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-950 text-purple-300 border border-purple-800">
          SME Mode (BID: {pia.bid || 'PIA-BE-UK-2026-000412'})
        </span>
      </div>

      {successMessage && (
        <div className="p-3 bg-emerald-950/80 border border-emerald-800 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          {successMessage}
        </div>
      )}

      {/* Regulatory Framework Selection */}
      <div className="space-y-3">
        <label className="text-xs font-bold text-zinc-300 uppercase tracking-wider flex items-center gap-2">
          <Shield className="w-4 h-4 text-purple-400" /> Target Regulatory Frameworks
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FRAMEWORK_OPTIONS.map(fw => {
            const isSelected = selectedFrameworks.includes(fw.id);
            return (
              <button
                key={fw.id}
                type="button"
                onClick={() => toggleFramework(fw.id)}
                className={`text-left p-3.5 rounded-xl border transition flex flex-col justify-between gap-2 ${
                  isSelected
                    ? 'bg-purple-950/40 border-purple-500/50 text-white shadow-sm'
                    : 'bg-zinc-950/60 border-zinc-800 text-zinc-400 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span className="text-xs font-bold text-zinc-200">{fw.label}</span>
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center border ${
                      isSelected ? 'bg-purple-500 border-purple-400 text-black' : 'border-zinc-700'
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                </div>
                <p className="text-[11px] text-zinc-400 leading-normal">{fw.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* SME Manual Risk Adjustment */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
        <div className="space-y-2">
          <label className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-amber-400" /> SME Risk Rating Override
          </label>
          <select
            value={smeRisk}
            onChange={e => setSmeRisk(e.target.value as RiskLevel)}
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-200 focus:outline-none focus:border-purple-500"
          >
            <option value="Low">Low Risk</option>
            <option value="Medium">Medium Risk</option>
            <option value="High">High Risk</option>
            <option value="Critical">Critical Risk</option>
          </select>
          <p className="text-[10px] text-zinc-500">
            Calculated score: <span className="font-mono text-zinc-300">{pia.riskResult?.finalRiskScore?.toFixed(1) || '0.0'}</span> ({pia.riskResult?.riskLevel})
          </p>
        </div>

        <div className="md:col-span-2 space-y-2">
          <label className="text-xs font-bold text-zinc-300">SME Rationale & Compliance Notes</label>
          <textarea
            rows={3}
            value={smeNotes}
            onChange={e => setSmeNotes(e.target.value)}
            placeholder="Document expert SME overrides, transfer assessment requirements, or supplemental technical safeguards..."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-3 text-xs text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-purple-500"
          />
        </div>
      </div>

      {/* Submit Trigger Action */}
      <div className="flex items-center justify-between border-t border-zinc-800 pt-4 text-xs">
        <div className="text-zinc-500 text-[11px]">
          Executing tailoring will trigger a major version bump (<span className="font-mono text-purple-400">{pia.version || 'v1.0'}</span> → <span className="font-mono text-purple-300">v{parseInt((pia.version || 'v1.0').replace('v','')) + 1}.0</span>) and log a cryptographic hash block.
        </div>
        <button
          onClick={handleApplyTailoring}
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl shadow-lg transition disabled:opacity-50"
        >
          <Send className="w-3.5 h-3.5" />
          {isSubmitting ? 'Applying Major Override...' : 'Apply Regulatory Tailoring (Bump Major Version)'}
        </button>
      </div>
    </div>
  );
};
