import React, { useState } from 'react';
import { 
  Landmark, 
  Stethoscope, 
  ShoppingBag, 
  Briefcase, 
  Truck, 
  Sprout, 
  FlaskConical, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles,
  Layers,
  FileCheck2,
  AlertCircle
} from 'lucide-react';
import { IndustrySectorId, IndustrySectorProfile } from '../types';
import { INDUSTRY_SECTOR_PROFILES } from '../data/industrySectors';

interface InitialSetupSectorWizardProps {
  currentSector?: IndustrySectorId;
  onSelectSector: (sectorId: IndustrySectorId) => void;
  onClose?: () => void;
  isInitialSetup?: boolean;
}

export const InitialSetupSectorWizard: React.FC<InitialSetupSectorWizardProps> = ({
  currentSector,
  onSelectSector,
  onClose,
  isInitialSetup = false,
}) => {
  const [selectedId, setSelectedId] = useState<IndustrySectorId>(currentSector || 'banking');

  const activeProfile = INDUSTRY_SECTOR_PROFILES[selectedId];

  const getSectorIcon = (id: IndustrySectorId, className: string = 'w-6 h-6') => {
    switch (id) {
      case 'banking': return <Landmark className={className} />;
      case 'healthcare': return <Stethoscope className={className} />;
      case 'retail': return <ShoppingBag className={className} />;
      case 'corporate': return <Briefcase className={className} />;
      case 'logistics': return <Truck className={className} />;
      case 'agtech': return <Sprout className={className} />;
      case 'pharma': return <FlaskConical className={className} />;
      default: return <ShieldCheck className={className} />;
    }
  };

  const handleConfirm = () => {
    onSelectSector(selectedId);
    if (onClose) onClose();
  };

  return (
    <div id="initial-setup-sector-wizard" className="bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-5xl mx-auto text-zinc-100">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
        <div>
          <div className="flex items-center space-x-2 text-cyan-400 font-mono text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span>STEP 1: INITIAL SETUP & GOVERNANCE INITIALIZATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Industry Sector & Regulatory Rules Engine
          </h2>
          <p className="text-zinc-400 text-sm mt-1 max-w-3xl">
            Select your organization's industry sector. LOCAL-PIA will dynamically calibrate assessment questions, risk weighting factors (1–5 scale), data classification standards, and target regulatory compliance rules.
          </p>
        </div>

        {onClose && !isInitialSetup && (
          <button
            onClick={onClose}
            className="self-start sm:self-center px-3 py-1.5 text-xs font-semibold rounded-xl bg-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-700 transition"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Grid of 7 Industry Sectors */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <label className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Select Target Industry Sector (Required)</span>
          </label>
          <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
            7 Dynamic Regulatory Engines Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {(Object.values(INDUSTRY_SECTOR_PROFILES) as IndustrySectorProfile[]).map((sector) => {
            const isSelected = selectedId === sector.id;
            return (
              <div
                key={sector.id}
                onClick={() => setSelectedId(sector.id)}
                className={`group relative p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-zinc-800/90 border-cyan-400 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-400/50'
                    : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900/60'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-3 right-3 text-cyan-400">
                    <CheckCircle2 className="w-5 h-5 fill-cyan-950" />
                  </div>
                )}

                <div>
                  <div className={`p-2.5 w-fit rounded-lg mb-3 ${
                    isSelected ? 'bg-cyan-950 text-cyan-300 border border-cyan-500/40' : 'bg-zinc-900 text-zinc-400 group-hover:text-cyan-400'
                  }`}>
                    {getSectorIcon(sector.id, "w-6 h-6")}
                  </div>

                  <h3 className={`font-bold text-sm leading-snug ${isSelected ? 'text-cyan-200' : 'text-white'}`}>
                    {sector.name}
                  </h3>

                  <p className="text-[11px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                    {sector.context}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-800/60 flex items-center justify-between text-[10px]">
                  <span className={`px-2 py-0.5 font-mono font-semibold rounded ${sector.badgeColor}`}>
                    {sector.regulatoryAlignment.length} Reg Frameworks
                  </span>
                  <span className="text-zinc-500 font-mono">
                    {sector.shortName}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Rule Preview Panel for Selected Sector */}
      {activeProfile && (
        <div className="mt-6 bg-zinc-950/90 border border-cyan-500/30 rounded-xl p-5 sm:p-6 shadow-inner">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-zinc-800/80">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-lg">
                {getSectorIcon(activeProfile.id, "w-5 h-5")}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-bold text-base text-white">
                    {activeProfile.name} Regulatory Profile
                  </h4>
                  <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded ${activeProfile.badgeColor}`}>
                    ACTIVE RULESET
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {activeProfile.context}
                </p>
              </div>
            </div>

            <div className="text-xs font-mono bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 text-zinc-300">
              <span className="text-cyan-400 font-bold">Rule Engine ID: </span>
              {activeProfile.id.toUpperCase()}-RULESET-V2.6
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4 text-xs">
            {/* Dynamic Rule Additions */}
            <div>
              <h5 className="font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5 text-[11px]">
                <FileCheck2 className="w-4 h-4 text-cyan-400" />
                Dynamic Assessment Rule Additions
              </h5>
              <ul className="space-y-2">
                {activeProfile.dynamicRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2 bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Regulatory Frameworks & Risk Weighting Note */}
            <div className="flex flex-col justify-between space-y-4">
              <div>
                <h5 className="font-bold text-cyan-300 uppercase tracking-wider mb-2 flex items-center gap-1.5 text-[11px]">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" />
                  Target Regulatory Alignments
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {activeProfile.regulatoryAlignment.map((reg, idx) => (
                    <span key={idx} className="px-2.5 py-1 font-mono text-[11px] font-semibold bg-zinc-900 text-cyan-200 border border-cyan-800/60 rounded-md">
                      {reg}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-cyan-950/30 border border-cyan-800/40 rounded-lg">
                <div className="flex items-center gap-1.5 text-cyan-300 font-bold text-[11px] uppercase tracking-wider mb-1">
                  <AlertCircle className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Sector Risk Weighting Calibrations</span>
                </div>
                <p className="text-zinc-300 text-[11px] leading-relaxed">
                  {activeProfile.baseRiskWeightingNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Action Footer */}
      <div className="mt-8 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-zinc-400 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Selecting a sector automatically injects industry compliance questions into Section S.</span>
        </div>

        <button
          id="btn-confirm-sector-setup"
          onClick={handleConfirm}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-black text-sm rounded-xl shadow-lg shadow-cyan-950/60 transition transform active:scale-95"
        >
          <span>Confirm {activeProfile?.shortName} Sector & Launch PIA</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
