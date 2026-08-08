import React, { useState } from 'react';
import { 
  Sparkles, RefreshCw, Maximize2, Check, Sliders, Cpu, Bot, Wand2, FileText, Zap, ChevronDown, ShieldCheck
} from 'lucide-react';
import { 
  LocalAiConfig, 
  LocalAiTone, 
  LocalAiMode, 
  LocalAiCreativity,
  DUMMY_CONTEXT_PRESETS,
  DummyContextScopePreset,
  rephraseTextLocally,
  expandTextLocally,
  polishTextLocally
} from '../utils/localAiEngine';

interface LocalAIAssistantToolbarProps {
  targetField: 'description' | 'data_flow' | 'both';
  currentText: string;
  onUpdateText: (newText: string) => void;
  onAutoFillPreset?: (preset: DummyContextScopePreset) => void;
  label?: string;
  className?: string;
}

export const LocalAIAssistantToolbar: React.FC<LocalAIAssistantToolbarProps> = ({
  targetField,
  currentText,
  onUpdateText,
  onAutoFillPreset,
  label = 'Local AI Text Assistant',
  className = '',
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const [showConfig, setShowConfig] = useState(false);
  const [showPresetDropdown, setShowPresetDropdown] = useState(false);

  // Local AI Configuration state
  const [config, setConfig] = useState<LocalAiConfig>({
    mode: 'local_airgapped',
    tone: 'formal_audit',
    creativity: 'balanced',
  });

  const handleApplyAction = (action: 'rephrase' | 'expand' | 'polish') => {
    setIsProcessing(true);
    setActiveAction(action);

    setTimeout(() => {
      let result = currentText;
      if (action === 'rephrase') {
        result = rephraseTextLocally(currentText, config);
      } else if (action === 'expand') {
        result = expandTextLocally(currentText, targetField === 'description' ? 'description' : 'data_flow', config);
      } else if (action === 'polish') {
        result = polishTextLocally(currentText, config);
      }

      onUpdateText(result);
      setIsProcessing(false);
      setActiveAction(null);
    }, 400); // realistic local AI latency simulation
  };

  const handleSelectPreset = (preset: DummyContextScopePreset) => {
    setIsProcessing(true);
    setActiveAction('preset');
    setShowPresetDropdown(false);

    setTimeout(() => {
      if (onAutoFillPreset) {
        onAutoFillPreset(preset);
      } else {
        if (targetField === 'description') {
          onUpdateText(preset.projectDescription);
        } else {
          onUpdateText(preset.structuredDataFlow.whatApp + '\n\n' + preset.structuredDataFlow.whyPia);
        }
      }
      setIsProcessing(false);
      setActiveAction(null);
    }, 500);
  };

  return (
    <div className={`bg-zinc-900/90 border border-zinc-800 rounded-xl p-2.5 space-y-2 text-xs ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-800/80 pb-2">
        <div className="flex items-center gap-1.5 text-cyan-400 font-semibold">
          <Bot className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span className="text-[11px] uppercase tracking-wider text-zinc-300 font-bold">{label}</span>
          <span className="px-1.5 py-0.5 text-[9px] bg-cyan-950/80 text-cyan-300 rounded border border-cyan-800/60 font-mono flex items-center gap-1">
            <Cpu className="w-2.5 h-2.5" />
            Air-Gapped Local AI
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => setShowConfig(!showConfig)}
            className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded border border-zinc-700 transition"
            title="Configure Local AI Model Settings"
          >
            <Sliders className="w-2.5 h-2.5 text-cyan-400" />
            AI Config
          </button>

          {onAutoFillPreset && (
            <div className="relative inline-block text-left">
              <button
                type="button"
                onClick={() => setShowPresetDropdown(!showPresetDropdown)}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-bold bg-purple-950/80 hover:bg-purple-900 text-purple-300 rounded border border-purple-800 transition"
              >
                <Wand2 className="w-3 h-3 text-purple-400" />
                Auto-Fill Dummy Context & Scope
                <ChevronDown className="w-3 h-3 ml-0.5" />
              </button>

              {showPresetDropdown && (
                <div className="absolute right-0 mt-1 w-72 bg-zinc-950 border border-purple-800/80 rounded-xl shadow-2xl z-50 p-2 space-y-1">
                  <div className="text-[10px] font-bold text-purple-400 uppercase tracking-wider px-2 py-1 border-b border-zinc-800">
                    Select Context & Scope Preset
                  </div>
                  {DUMMY_CONTEXT_PRESETS.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => handleSelectPreset(p)}
                      className="w-full text-left px-2.5 py-1.5 text-[11px] text-zinc-200 hover:bg-purple-900/40 hover:text-white rounded transition flex flex-col"
                    >
                      <span className="font-semibold text-purple-300">{p.label}</span>
                      <span className="text-[10px] text-zinc-400 truncate">{p.projectTitle}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Expanded AI Config Drawer */}
      {showConfig && (
        <div className="bg-zinc-950 p-2.5 rounded-lg border border-cyan-900/50 space-y-2 text-[11px] text-zinc-300">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-1 font-bold text-cyan-400">
            <span>Local AI Model Configuration</span>
            <span className="text-[10px] text-emerald-400 flex items-center gap-1">
              <ShieldCheck className="w-3 h-3" />
              100% Offline / Zero Exfiltration
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div>
              <label className="block text-[10px] text-zinc-400 mb-0.5">Engine Mode</label>
              <select
                value={config.mode}
                onChange={(e) => setConfig({ ...config, mode: e.target.value as LocalAiMode })}
                className="w-full bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-zinc-200 text-[10px]"
              >
                <option value="local_airgapped">Air-Gapped On-Device Engine</option>
                <option value="local_quantized">Local Quantized LLM (GGUF)</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] text-zinc-400 mb-0.5">Audit Tone</label>
              <select
                value={config.tone}
                onChange={(e) => setConfig({ ...config, tone: e.target.value as LocalAiTone })}
                className="w-full bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-zinc-200 text-[10px]"
              >
                <option value="formal_audit">Formal Audit Governance</option>
                <option value="technical">Technical Precision</option>
                <option value="executive">Executive Summary</option>
              </select>
            </div>

            <div>
              <label className="block text-[10px] text-zinc-400 mb-0.5">Creativity / Strictness</label>
              <select
                value={config.creativity}
                onChange={(e) => setConfig({ ...config, creativity: e.target.value as LocalAiCreativity })}
                className="w-full bg-zinc-900 border border-zinc-800 rounded px-2 py-1 text-zinc-200 text-[10px]"
              >
                <option value="precise">Strict Regulatory Rules</option>
                <option value="balanced">Balanced Governance</option>
                <option value="creative">Descriptive Enhancement</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Quick Local AI Action Toolbar Buttons */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[10px] text-zinc-500 font-medium">Local AI Quick Transforms:</span>

        <button
          type="button"
          disabled={isProcessing || !currentText.trim()}
          onClick={() => handleApplyAction('rephrase')}
          className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold bg-zinc-800 hover:bg-zinc-700 text-cyan-300 rounded border border-zinc-700 disabled:opacity-40 transition"
        >
          <RefreshCw className={`w-3 h-3 mr-1 ${activeAction === 'rephrase' ? 'animate-spin' : ''}`} />
          Rephrase Text
        </button>

        <button
          type="button"
          disabled={isProcessing}
          onClick={() => handleApplyAction('expand')}
          className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold bg-zinc-800 hover:bg-zinc-700 text-emerald-300 rounded border border-zinc-700 disabled:opacity-40 transition"
        >
          <Maximize2 className={`w-3 h-3 mr-1 ${activeAction === 'expand' ? 'animate-pulse' : ''}`} />
          Expand Narrative
        </button>

        <button
          type="button"
          disabled={isProcessing || !currentText.trim()}
          onClick={() => handleApplyAction('polish')}
          className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold bg-zinc-800 hover:bg-zinc-700 text-purple-300 rounded border border-zinc-700 disabled:opacity-40 transition"
        >
          <Sparkles className={`w-3 h-3 mr-1 ${activeAction === 'polish' ? 'animate-bounce' : ''}`} />
          Polish & Refine
        </button>

        {isProcessing && (
          <span className="text-[10px] text-cyan-400 font-mono flex items-center gap-1 ml-auto animate-pulse">
            <Bot className="w-3 h-3 text-cyan-400 animate-spin" />
            Local AI executing transformation...
          </span>
        )}
      </div>
    </div>
  );
};
