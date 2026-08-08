import React, { useState, useEffect } from 'react';
import { 
  Bot, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Sliders, 
  Calculator, 
  Table, 
  RefreshCw, 
  FileText, 
  Cpu, 
  Check, 
  Layers, 
  ArrowRight,
  Settings,
  HelpCircle,
  Zap,
  Info
} from 'lucide-react';
import { RiskLevel, IndustrySectorId, SystemSetupConfig, SectionAnswers } from '../types';
import { RCSA_ASSESSMENT_TYPES, AssessmentInitiativeType, RCSATypeDefinition } from '../data/rcsaTaxonomy';
import { calculateRCSARisk, RCSACustomParams, RCSACalculationResult } from '../utils/riskCalculator';

interface RCSAEnginePanelProps {
  industrySector?: IndustrySectorId;
  systemSetup?: SystemSetupConfig;
  initialInitiativeType?: AssessmentInitiativeType;
  initialAnswers?: Record<number, string>;
  onApplyToPIA?: (rcsaData: {
    initiativeType: AssessmentInitiativeType;
    result: RCSACalculationResult;
    questionAnswers: Record<number, string>;
    a1OptionIndex: number;
    a1Label: string;
    a1Score: number;
  }) => void;
  isEmbeddedInForm?: boolean;
}

export const RCSAEnginePanel: React.FC<RCSAEnginePanelProps> = ({
  industrySector = 'banking',
  systemSetup,
  initialInitiativeType = 'AI Initiative',
  initialAnswers = {},
  onApplyToPIA,
  isEmbeddedInForm = true,
}) => {
  const [selectedType, setSelectedType] = useState<AssessmentInitiativeType>(initialInitiativeType);
  const [answers, setAnswers] = useState<Record<number, string>>(initialAnswers);
  const [showCustomizer, setShowCustomizer] = useState<boolean>(false);

  // Custom parameters state
  const defaultSectorMult = industrySector === 'healthcare' ? 1.5 : (industrySector === 'banking' || industrySector === 'pharma') ? 1.4 : 1.2;
  const [sectorMultiplier, setSectorMultiplier] = useState<number>(defaultSectorMult);
  const [strongControlVal, setStrongControlVal] = useState<number>(0.6);
  const [moderateControlVal, setModerateControlVal] = useState<number>(0.3);
  const [weakControlVal, setWeakControlVal] = useState<number>(0.0);

  // Sync sector multiplier if sector changes
  useEffect(() => {
    const mult = industrySector === 'healthcare' ? 1.5 : (industrySector === 'banking' || industrySector === 'pharma') ? 1.4 : 1.2;
    setSectorMultiplier(mult);
  }, [industrySector]);

  const activeTypeDef: RCSATypeDefinition = RCSA_ASSESSMENT_TYPES[selectedType] || RCSA_ASSESSMENT_TYPES['AI Initiative'];

  // Calculate answered count
  const answeredCount = activeTypeDef.questions.filter((_, idx) => {
    const val = answers[idx] || '';
    return val.trim().length > 0 && !val.toLowerCase().includes('no') && !val.toLowerCase().includes('pending');
  }).length;

  const customParams: RCSACustomParams = {
    sectorMultiplier,
    strongControlReduction: strongControlVal,
    moderateControlReduction: moderateControlVal,
    weakControlReduction: weakControlVal,
  };

  const rcsaResult: RCSACalculationResult = calculateRCSARisk(
    selectedType,
    industrySector as IndustrySectorId,
    answeredCount,
    activeTypeDef.questions.length,
    customParams
  );

  const handleSelectInitiative = (type: AssessmentInitiativeType) => {
    setSelectedType(type);
    // Reset or preserve answers if desired
    setAnswers({});
  };

  const handleAnswerChange = (idx: number, val: string) => {
    setAnswers(prev => ({ ...prev, [idx]: val }));
  };

  const handleAutoFillSafeguards = () => {
    const filled: Record<number, string> = {};
    activeTypeDef.questions.forEach((_, idx) => {
      filled[idx] = 'Yes - Documented technical safeguard verified & active in production';
    });
    setAnswers(filled);
  };

  const handleApplyToPIA = () => {
    if (!onApplyToPIA) return;

    // Map initiative type to A1 Option
    let a1OptIndex = 0;
    let a1Score = 1;
    if (selectedType === 'Proof of Concept (PoC)') { a1OptIndex = 0; a1Score = 2; }
    else if (selectedType === 'Project') { a1OptIndex = 1; a1Score = 3; }
    else if (selectedType === 'Process') { a1OptIndex = 2; a1Score = 3; }
    else if (selectedType === 'Application (App)') { a1OptIndex = 3; a1Score = 4; }
    else if (selectedType === 'Pilot') { a1OptIndex = 4; a1Score = 4; }
    else if (selectedType === 'AI Initiative') { a1OptIndex = 5; a1Score = 5; }

    onApplyToPIA({
      initiativeType: selectedType,
      result: rcsaResult,
      questionAnswers: answers,
      a1OptionIndex: a1OptIndex,
      a1Label: selectedType,
      a1Score,
    });
  };

  const getBadgeColor = (level: RiskLevel) => {
    switch (level) {
      case 'Critical': return 'bg-rose-950 text-rose-400 border-rose-800';
      case 'High': return 'bg-orange-950 text-orange-400 border-orange-800';
      case 'Medium': return 'bg-yellow-950 text-yellow-400 border-yellow-800';
      case 'Low': default: return 'bg-emerald-950 text-emerald-400 border-emerald-800';
    }
  };

  return (
    <div className="space-y-6">
      {/* RCSA Header Banner */}
      <div className="bg-gradient-to-r from-zinc-950 via-zinc-900 to-cyan-950/60 border border-zinc-800 rounded-2xl p-5 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-800/80 pb-4">
          <div className="flex items-center space-x-3">
            <div className="p-3 bg-cyan-950 text-cyan-400 rounded-2xl border border-cyan-800/80 shadow-inner">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base font-extrabold text-white tracking-wide">
                  Embedded RCSA Privacy Impact Assistant & Risk Matrix Engine
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  ISO 42001 & DPDPA Engine
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Select an initiative scope below to automatically trigger tailored questionnaires & compute Inherent vs. Residual Risk.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setShowCustomizer(!showCustomizer)}
              className="inline-flex items-center px-3 py-1.5 text-xs font-mono font-bold bg-zinc-900 hover:bg-zinc-800 text-purple-300 border border-purple-800/60 rounded-xl transition shadow-sm"
            >
              <Settings className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
              {showCustomizer ? 'Close Logic Customizer' : 'Customize RCSA Logic & Weights'}
            </button>
          </div>
        </div>

        {/* Customizable Parameters Panel */}
        {showCustomizer && (
          <div className="mt-4 p-4 bg-zinc-950/90 border border-purple-900/50 rounded-xl space-y-4 animate-fadeIn text-xs">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
              <span className="font-mono font-bold text-purple-300 flex items-center gap-1.5">
                <Sliders className="w-4 h-4 text-purple-400" />
                Customizable RCSA Risk Engine Parameters
              </span>
              <span className="text-[10px] text-zinc-400 font-mono">Real-Time Calibration</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-zinc-400 font-mono text-[11px] mb-1">
                  Sector Sensitivity Multiplier
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="1.0"
                    max="2.0"
                    step="0.1"
                    value={sectorMultiplier}
                    onChange={e => setSectorMultiplier(parseFloat(e.target.value))}
                    className="w-full accent-cyan-500"
                  />
                  <span className="font-mono font-bold text-cyan-300 w-12 text-right">
                    {sectorMultiplier.toFixed(1)}x
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 block mt-1">Healthcare 1.5x, Banking 1.4x, SaaS 1.2x</span>
              </div>

              <div>
                <label className="block text-zinc-400 font-mono text-[11px] mb-1">
                  Strong Control Reduction %
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0.4"
                    max="0.8"
                    step="0.05"
                    value={strongControlVal}
                    onChange={e => setStrongControlVal(parseFloat(e.target.value))}
                    className="w-full accent-emerald-500"
                  />
                  <span className="font-mono font-bold text-emerald-400 w-12 text-right">
                    {Math.round(strongControlVal * 100)}%
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 block mt-1">Default 60% risk reduction</span>
              </div>

              <div>
                <label className="block text-zinc-400 font-mono text-[11px] mb-1">
                  Moderate Control Reduction %
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0.1"
                    max="0.5"
                    step="0.05"
                    value={moderateControlVal}
                    onChange={e => setModerateControlVal(parseFloat(e.target.value))}
                    className="w-full accent-yellow-500"
                  />
                  <span className="font-mono font-bold text-yellow-400 w-12 text-right">
                    {Math.round(moderateControlVal * 100)}%
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 block mt-1">Default 30% risk reduction</span>
              </div>

              <div>
                <label className="block text-zinc-400 font-mono text-[11px] mb-1">
                  Weak Control Reduction %
                </label>
                <div className="flex items-center space-x-2">
                  <input
                    type="range"
                    min="0.0"
                    max="0.2"
                    step="0.05"
                    value={weakControlVal}
                    onChange={e => setWeakControlVal(parseFloat(e.target.value))}
                    className="w-full accent-rose-500"
                  />
                  <span className="font-mono font-bold text-rose-400 w-12 text-right">
                    {Math.round(weakControlVal * 100)}%
                  </span>
                </div>
                <span className="text-[10px] text-zinc-500 block mt-1">Default 0% risk reduction</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* STEP 1: Initiative Type Taxonomy Selector */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-lg">
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-lg text-xs font-mono font-bold">
              STEP 1
            </span>
            <h3 className="text-sm font-bold text-white">
              Select Initiative Scope (Triggers Tailored Questionnaire)
            </h3>
          </div>
          <span className="text-xs text-zinc-400 font-mono">
            Active Selection: <strong className="text-cyan-300">{selectedType}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {(Object.keys(RCSA_ASSESSMENT_TYPES) as AssessmentInitiativeType[]).map((typeKey) => {
            const item = RCSA_ASSESSMENT_TYPES[typeKey];
            const isSelected = selectedType === typeKey;

            return (
              <button
                key={typeKey}
                type="button"
                onClick={() => handleSelectInitiative(typeKey)}
                className={`p-3.5 rounded-xl border text-left transition-all relative flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-zinc-950 border-cyan-500 shadow-md ring-1 ring-cyan-500/50'
                    : 'bg-zinc-950/60 border-zinc-800 hover:bg-zinc-900 hover:border-zinc-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-white flex items-center gap-1.5">
                      {typeKey}
                      {isSelected && <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />}
                    </span>
                    <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border ${item.badgeClass}`}>
                      {item.inherentRating}
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-400 leading-snug line-clamp-2">
                    {item.definition}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-800/60 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-zinc-500">Base Inherent:</span>
                  <span className="text-cyan-300 font-bold">{item.inherentBaseScore} / 5</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* STEP 2: Tailored Risk Assessment Questionnaire */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-3 gap-2">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded-lg text-xs font-mono font-bold">
              STEP 2
            </span>
            <div>
              <h3 className="text-sm font-bold text-white">
                Tailored Privacy Control Evaluation Questionnaire for [{selectedType}]
              </h3>
              <p className="text-[11px] text-zinc-400">
                Threat Drivers: {activeTypeDef.threatDrivers}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleAutoFillSafeguards}
            className="inline-flex items-center px-3 py-1.5 bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 rounded-xl text-xs font-bold transition self-start sm:self-auto shrink-0"
          >
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Auto-Fill Compliant Safeguards
          </button>
        </div>

        <div className="space-y-4">
          {activeTypeDef.questions.map((qText, idx) => {
            const currentAns = answers[idx] || '';
            const isAnswered = currentAns.trim().length > 0 && !currentAns.toLowerCase().includes('no') && !currentAns.toLowerCase().includes('pending');

            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border text-xs space-y-2 transition ${
                  isAnswered
                    ? 'bg-zinc-950 border-emerald-900/50'
                    : 'bg-zinc-950/80 border-zinc-800'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start space-x-2">
                    <span className="px-2 py-0.5 bg-zinc-800 text-cyan-300 font-mono font-bold rounded shrink-0 text-[11px]">
                      Q{idx + 1}
                    </span>
                    <p className="font-semibold text-zinc-200 leading-snug">
                      {qText}
                    </p>
                  </div>
                  {isAnswered ? (
                    <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded text-[10px] font-mono font-bold shrink-0">
                      Verified
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 bg-amber-950 text-amber-400 border border-amber-800 rounded text-[10px] font-mono font-bold shrink-0">
                      Pending
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => handleAnswerChange(idx, 'Yes - Fully Implemented & Documented')}
                    className={`py-1.5 px-3 rounded-lg border text-center font-semibold transition ${
                      currentAns.includes('Yes') || currentAns.includes('Fully')
                        ? 'bg-emerald-950 text-emerald-300 border-emerald-700 shadow-sm'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-850 hover:text-zinc-200'
                    }`}
                  >
                    Yes (Full Safeguard)
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAnswerChange(idx, 'Partial - Under Development / SLA Pending')}
                    className={`py-1.5 px-3 rounded-lg border text-center font-semibold transition ${
                      currentAns.includes('Partial')
                        ? 'bg-yellow-950 text-yellow-300 border-yellow-700 shadow-sm'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-850 hover:text-zinc-200'
                    }`}
                  >
                    Partial Safeguard
                  </button>

                  <button
                    type="button"
                    onClick={() => handleAnswerChange(idx, 'No - Missing Control / Pending Remediation')}
                    className={`py-1.5 px-3 rounded-lg border text-center font-semibold transition ${
                      currentAns.includes('No')
                        ? 'bg-rose-950 text-rose-300 border-rose-700 shadow-sm'
                        : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:bg-zinc-850 hover:text-zinc-200'
                    }`}
                  >
                    No (Control Gap)
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STEP 3: Final RCSA Report Dashboard & Risk Matrix Engine */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-zinc-800 pb-4 gap-3">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 bg-purple-950 text-purple-300 border border-purple-800 rounded-lg text-xs font-mono font-bold">
              STEP 3
            </span>
            <div>
              <h3 className="text-base font-extrabold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-purple-400" />
                Final RCSA Residual Risk Audit Dashboard
              </h3>
              <p className="text-xs text-zinc-400">
                Mathematical RCSA Matrix Output: Inherent Risk vs. Control Effectiveness vs. Residual Risk
              </p>
            </div>
          </div>

          {onApplyToPIA && (
            <button
              type="button"
              onClick={handleApplyToPIA}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-xs rounded-xl shadow-lg transition transform active:scale-95 shrink-0"
            >
              <Zap className="w-4 h-4 mr-1.5" />
              Bind RCSA Calculations into PIA Assessment
            </button>
          )}
        </div>

        {/* Core Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Inherent Risk Card */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block">
              Inherent Risk Score
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black font-mono text-cyan-300">
                {rcsaResult.inherentScoreMath} <span className="text-xs font-normal text-zinc-500">/ 25</span>
              </span>
              <span className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded border ${getBadgeColor(rcsaResult.inherentRating)}`}>
                {rcsaResult.inherentRating}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400">
              Base: {rcsaResult.inherentBaseScore}/5 × Sector ({rcsaResult.sectorMultiplier}x)
            </p>
          </div>

          {/* Control Effectiveness Card */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block">
              Control Factor & Reduction
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black font-mono text-emerald-400">
                {Math.round(rcsaResult.controlFactor * 100)}%
              </span>
              <span className="px-2.5 py-0.5 text-xs font-mono font-bold rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
                {rcsaResult.controlEffectiveness}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400">
              Answered: {answeredCount}/{activeTypeDef.questions.length} safeguards verified
            </p>
          </div>

          {/* Residual Risk Card */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block">
              Residual Risk Score
            </span>
            <div className="flex items-baseline justify-between">
              <span className="text-2xl font-black font-mono text-purple-300">
                {rcsaResult.residualScoreMath} <span className="text-xs font-normal text-zinc-500">/ 25</span>
              </span>
              <span className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded border ${getBadgeColor(rcsaResult.residualRating)}`}>
                {rcsaResult.residualRating}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400">
              Inherent × (1 - {rcsaResult.controlFactor.toFixed(2)})
            </p>
          </div>

          {/* Governance SLA / Action */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-2">
            <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider block">
              Governance Action
            </span>
            <span className="text-xs font-bold text-zinc-200 block line-clamp-2">
              {rcsaResult.requiredAction}
            </span>
            <span className="text-[10px] text-cyan-400 font-mono block">
              Target Framework: {systemSetup?.primaryRegulatoryFramework || 'UK GDPR & DPA 2018'}
            </span>
          </div>
        </div>

        {/* RCSA 5x5 Heatmap Visualizer */}
        <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <Table className="w-4 h-4" />
              RCSA Risk Matrix Grid (Shift from Inherent to Residual Risk)
            </span>
            <div className="flex items-center space-x-3 text-[11px]">
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span> Inherent Score ({rcsaResult.inherentScoreMath})</span>
              <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span> Residual Score ({rcsaResult.residualScoreMath})</span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-2 text-center text-xs font-mono">
            {[
              { level: 'Low (1–5)', color: 'bg-emerald-950/80 border-emerald-800 text-emerald-400', range: [1, 5] },
              { level: 'Medium (6–11)', color: 'bg-yellow-950/80 border-yellow-800 text-yellow-400', range: [6, 11] },
              { level: 'High (12–19)', color: 'bg-orange-950/80 border-orange-800 text-orange-400', range: [12, 19] },
              { level: 'Critical (20–25)', color: 'bg-rose-950/80 border-rose-800 text-rose-400', range: [20, 25] },
            ].map((cell, idx) => {
              const isInherentInCell = rcsaResult.inherentScoreMath >= cell.range[0] && rcsaResult.inherentScoreMath <= cell.range[1];
              const isResidualInCell = rcsaResult.residualScoreMath >= cell.range[0] && rcsaResult.residualScoreMath <= cell.range[1];

              return (
                <div
                  key={idx}
                  className={`p-3 rounded-lg border ${cell.color} flex flex-col justify-between items-center space-y-2 relative`}
                >
                  <span className="font-bold text-[11px] block">{cell.level}</span>

                  <div className="flex items-center justify-center space-x-1.5">
                    {isInherentInCell && (
                      <span className="px-1.5 py-0.5 bg-cyan-500 text-zinc-950 text-[10px] font-extrabold rounded shadow">
                        INHERENT
                      </span>
                    )}
                    {isResidualInCell && (
                      <span className="px-1.5 py-0.5 bg-purple-500 text-white text-[10px] font-extrabold rounded shadow">
                        RESIDUAL
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Identified Control Gaps & Remediation Plan */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2">
            <span className="font-mono font-bold text-amber-400 uppercase tracking-wider block flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Identified Control Gaps ({activeTypeDef.questions.length - answeredCount})
            </span>
            {activeTypeDef.questions.length - answeredCount === 0 ? (
              <p className="text-emerald-400 text-[11px] pt-1">
                ✓ Zero control gaps detected. All 5 privacy safeguards fully verified and documented.
              </p>
            ) : (
              <ul className="space-y-1.5 text-zinc-300 text-[11px] pt-1 list-disc list-inside">
                {activeTypeDef.questions.map((q, idx) => {
                  const val = answers[idx] || '';
                  if (!val.trim() || val.toLowerCase().includes('no') || val.toLowerCase().includes('pending')) {
                    return (
                      <li key={idx} className="text-amber-200/90">
                        <strong>Q{idx + 1}:</strong> {q}
                      </li>
                    );
                  }
                  return null;
                })}
              </ul>
            )}
          </div>

          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-2">
            <span className="font-mono font-bold text-cyan-400 uppercase tracking-wider block flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              Mandatory RCSA Remediation Controls
            </span>
            <ul className="space-y-1.5 text-zinc-300 text-[11px] pt-1 list-disc list-inside">
              <li>Enforce AES-256 at rest & TLS 1.3 in transit with mTLS verification.</li>
              <li>Implement strict least-privilege Role-Based Access Control (RBAC) & SAML/MFA.</li>
              <li>Establish automated data retention schedules and immutable RoPA audit logs.</li>
              <li>Execute Article 28 DPA agreements with all subprocessors prior to release.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
