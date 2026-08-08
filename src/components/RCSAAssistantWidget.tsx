import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  RefreshCw, 
  ArrowRight, 
  FileText, 
  Cpu, 
  Copy, 
  Check, 
  Sliders,
  HelpCircle,
  Zap,
  ChevronRight
} from 'lucide-react';
import { PIAAssessment, SystemSetupConfig } from '../types';
import { RCSA_ASSESSMENT_TYPES as ASSESSMENT_TYPES, AssessmentInitiativeType as AssessmentType } from '../data/rcsaTaxonomy';

interface RCSAAssistantWidgetProps {
  onConvertToPIA?: (piaDraft: Partial<PIAAssessment>) => void;
  systemSetup?: SystemSetupConfig;
}

interface ChatMessage {
  id: string;
  sender: 'assistant' | 'user';
  text: string;
  timestamp: string;
  step?: 1 | 2 | 3;
  data?: {
    selection?: AssessmentType;
    definition?: string;
    inherentRisk?: string;
    questions?: string[];
    answers?: Record<number, string>;
    summary?: {
      residualRisk: string;
      riskScore: number;
      controlGaps: string[];
      recommendedMitigations: string[];
      gdprStatus: string;
      dpdpStatus: string;
    };
  };
}

export const RCSAAssistantWidget: React.FC<RCSAAssistantWidgetProps> = ({
  onConvertToPIA,
  systemSetup
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedType, setSelectedType] = useState<AssessmentType | null>(null);
  const [questionAnswers, setQuestionAnswers] = useState<Record<number, string>>({});
  const [inputText, setInputText] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  React.useEffect(() => {
    if (messages.length === 0) {
      initiateConversation();
    }
  }, []);

  const initiateConversation = () => {
    setCurrentStep(1);
    setSelectedType(null);
    setQuestionAnswers({});
    setMessages([
      {
        id: 'msg-init',
        sender: 'assistant',
        step: 1,
        text: 'Welcome to the RCSA Privacy Impact Assessment (PIA) Assistant. To calibrate your baseline inherent risk and trigger tailored evaluation questions, please select your initiative scope below:',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  const handleSelectType = (type: AssessmentType) => {
    const typeDef = ASSESSMENT_TYPES[type];
    setSelectedType(type);
    setCurrentStep(2);

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: `Selected Initiative Scope: [${type}] (Base Inherent Risk: ${typeDef.inherentRiskText})`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const assistantMsg: ChatMessage = {
      id: `assistant-${Date.now()}`,
      sender: 'assistant',
      step: 2,
      text: `Initialized RCSA baseline for [${type}]. Here are your 5 tailored privacy control questions:`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      data: {
        selection: type,
        definition: typeDef.definition,
        inherentRisk: `${typeDef.inherentBaseScore}/5 (${typeDef.inherentRating})`,
        questions: typeDef.questions
      }
    };

    setMessages(prev => [...prev, userMsg, assistantMsg]);
  };

  const handleAnswerChange = (qIndex: number, val: string) => {
    setQuestionAnswers(prev => ({ ...prev, [qIndex]: val }));
  };

  const handleSubmitAnswers = () => {
    if (!selectedType) return;
    const typeDef = ASSESSMENT_TYPES[selectedType];
    setCurrentStep(3);

    const answeredCount = Object.values(questionAnswers).filter((a): a is string => typeof a === 'string' && a.trim().length > 0).length;
    let controlEffectiveness = 'Weak (0% Reduction)';
    let factor = 0.0;
    if (answeredCount >= 4) {
      controlEffectiveness = 'Strong (60% Reduction)';
      factor = 0.6;
    } else if (answeredCount >= 2) {
      controlEffectiveness = 'Moderate (30% Reduction)';
      factor = 0.3;
    }

    const fid = systemSetup?.fidPrefix ? `${systemSetup.fidPrefix}001` : 'FID-2026-001';
    const bid = systemSetup?.bidPrefix ? `${systemSetup.bidPrefix}${systemSetup.bidOffset || 101}` : 'BID-SYS-101';
    const sector = systemSetup?.industrySector?.toUpperCase() || 'FINANCIAL SERVICES';
    const fw = systemSetup?.primaryRegulatoryFramework || 'UK GDPR & DPA 2018';

    const baseInherent = typeDef.inherentBaseScore;
    const sectorMult = systemSetup?.industrySector === 'healthcare' ? 1.5 : systemSetup?.industrySector === 'banking' ? 1.4 : 1.2;
    const inherentScoreMath = Math.min(25, Math.round(baseInherent * baseInherent * sectorMult));
    const residualScoreMath = Math.max(1, Math.round(inherentScoreMath * (1 - factor)));

    let residualRatingText = '🟢 Low Risk';
    if (residualScoreMath >= 20) residualRatingText = '🔴 Critical Risk';
    else if (residualScoreMath >= 12) residualRatingText = '🟠 High Risk';
    else if (residualScoreMath >= 6) residualRatingText = '🟡 Medium Risk';

    const controlGaps: string[] = [];
    typeDef.questions.forEach((q, idx) => {
      const ans = questionAnswers[idx] || '';
      if (!ans.trim() || ans.toLowerCase().includes('no') || ans.toLowerCase().includes('pending')) {
        controlGaps.push(`Question ${idx + 1}: ${q} -> Gap identified: Insufficient documented controls.`);
      }
    });

    const mitigations = [
      'Enforce end-to-end encryption (AES-256 / TLS 1.3) across all storage & transit endpoints.',
      'Implement strict Role-Based Access Control (RBAC) and Multi-Factor Authentication (MFA).',
      'Establish automated data retention schedules and Record of Processing Activities (RoPA) logs.',
      'Conduct formal third-party vendor Article 28 DPA contract reviews and security audits.'
    ];

    const formattedReport = `================================================================================
               ENTERPRISE RCSA & PRIVACY IMPACT ASSESSMENT REPORT
================================================================================
SYSTEM TRACKING & CONFIGURATION:
- Frontend Identifier (FID): ${fid}
- Backend Identifier (BID):  ${bid}
- Organization & Sector:     ${systemSetup?.organizationName || 'Enterprise'} (${sector}, Multiplier: ${sectorMult}x)
- Active Regulatory Rules:   ${fw}

1. INITIATIVE SCOPE & RCSA BASELINE
- Selected Subject:    ${selectedType}
- Description:         ${typeDef.definition}
- Base Inherent Score: ${baseInherent}/5 (${typeDef.inherentRating})

2. INHERENT RISK EVALUATION
- Inherent Likelihood: ${baseInherent}/5
- Inherent Impact:     ${baseInherent}/5
- Base Inherent Score:  ${inherentScoreMath}/25 (${typeDef.inherentRating})

3. CONTROL EFFECTIVENESS EVALUATION
- Evaluated Controls:  ${answeredCount}/5 questions answered with documented safeguards
- Control Effectiveness: ${controlEffectiveness}

4. RESIDUAL RISK RATING
- Final Residual Score:  ${residualScoreMath}/25
- Final Residual Rating: ${residualRatingText}

5. MANDATORY REGULATORY REMEDIATION PLAN
- ${mitigations[0]}
- ${mitigations[1]}
- ${mitigations[2]}
- ${mitigations[3]}
================================================================================`;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: `Submitted answers for ${answeredCount}/5 questions. Analyzing controls...`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const summaryMsg: ChatMessage = {
      id: `summary-${Date.now()}`,
      sender: 'assistant',
      step: 3,
      text: formattedReport,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      data: {
        selection: selectedType,
        summary: {
          residualRisk: residualRatingText,
          riskScore: residualScoreMath,
          controlGaps,
          recommendedMitigations: mitigations,
          gdprStatus: 'Article 35 Compliant',
          dpdpStatus: 'Section 8 Compliant'
        }
      }
    };

    setMessages(prev => [...prev, userMsg, summaryMsg]);
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userText = inputText;
    setInputText('');

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    let reply = `Understood. Processing command: "${userText}". Select an initiative above to begin or reset the RCSA engine.`;
    if (userText.toLowerCase().includes('initialize') || userText.toLowerCase().includes('setup') || userText.toLowerCase().includes('start')) {
      reply = `Welcome to the Enterprise System Initialization & Configuration Engine. System configured for ${systemSetup?.organizationName || 'Enterprise'} under ${systemSetup?.primaryRegulatoryFramework || 'UK GDPR & DPA 2018'}. Please select your RCSA initiative scope above.`;
    }

    const assistantMsg: ChatMessage = {
      id: `assistant-${Date.now()}`,
      sender: 'assistant',
      text: reply,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg, assistantMsg]);
  };

  const handleCopySummary = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleConvertToFullPia = () => {
    if (!selectedType || !onConvertToPIA) return;
    const typeDef = ASSESSMENT_TYPES[selectedType];

    const newDraft: Partial<PIAAssessment> = {
      projectTitle: `RCSA Assessment: ${selectedType}`,
      projectDescription: `${typeDef.definition} (Inherent Baseline: ${typeDef.inherentBaseScore}/5)`,
      industrySector: systemSetup?.industrySector || 'banking',
      status: 'Draft',
      answers: {}
    };

    onConvertToPIA(newDraft);
  };

  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
      {/* Widget Header */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-zinc-900 via-zinc-900 to-cyan-950/70 border-b border-zinc-800 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-cyan-950 text-cyan-400 rounded-xl border border-cyan-800 shadow-sm">
            <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-base sm:text-lg font-black text-white tracking-tight">
                RCSA Privacy Impact Assistant
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800 rounded-md">
                LIVE WORKSPACE
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Interactive Privacy Control Assessment & Inherent Baseline Risk Engine
            </p>
          </div>
        </div>

        <button
          onClick={initiateConversation}
          className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl transition text-xs font-semibold flex items-center gap-1.5"
          title="Reset Assessment Workflow"
        >
          <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
          <span>Reset PIA</span>
        </button>
      </div>

      {/* Messages Body */}
      <div className="p-4 sm:p-6 space-y-6 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-800">
        {messages.map((msg, index) => (
          <div
            key={msg.id}
            className={`flex flex-col space-y-2 ${
              msg.sender === 'user' ? 'items-end' : 'items-start'
            }`}
          >
            <div className="flex items-center space-x-2 text-[11px] text-zinc-500 font-mono">
              <span>{msg.sender === 'user' ? 'Risk Assessor' : 'RCSA Engine'}</span>
              <span>•</span>
              <span>{msg.timestamp}</span>
            </div>

            <div
              className={`max-w-4xl w-full rounded-2xl p-4 sm:p-5 text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-100 rounded-tr-none ml-auto max-w-xl'
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-200 rounded-tl-none shadow-xl'
              }`}
            >
              {/* STEP 1: Initiative Selection */}
              {msg.step === 1 && (
                <div className="space-y-4">
                  <p className="text-zinc-200 font-medium">{msg.text}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {(Object.keys(ASSESSMENT_TYPES) as AssessmentType[]).map(type => {
                      const item = ASSESSMENT_TYPES[type];
                      return (
                        <button
                          key={type}
                          onClick={() => handleSelectType(type)}
                          className="p-3.5 bg-zinc-950 hover:bg-zinc-800/80 border border-zinc-800 hover:border-cyan-500/60 rounded-xl text-left transition group flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="font-bold text-xs text-white group-hover:text-cyan-300 transition">
                                [{type}]
                              </span>
                              <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border ${item.badgeClass}`}>
                                {item.inherentBaseScore}/5 ({item.inherentRating})
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-400 line-clamp-2 leading-snug">
                              {item.definition}
                            </p>
                          </div>

                          <div className="mt-3 text-[10px] text-cyan-400 font-bold flex items-center justify-between pt-2 border-t border-zinc-800">
                            <span>Calibrate [{type}]</span>
                            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Tailored Questionnaire */}
              {msg.step === 2 && msg.data && (
                <div className="space-y-5">
                  <div className="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-zinc-500 font-mono block">SELECTED SUBJECT</span>
                      <span className="text-sm font-extrabold text-white">[{msg.data.selection}]</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-zinc-500 font-mono block">INHERENT SCORE</span>
                      <span className={`px-2.5 py-0.5 text-xs font-mono font-bold rounded border ${ASSESSMENT_TYPES[msg.data.selection!].badgeClass}`}>
                        {msg.data.inherentRisk}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5" />
                      <span>5 Tailored Control Assessment Questions</span>
                    </span>

                    {msg.data.questions?.map((q, idx) => (
                      <div key={idx} className="p-3.5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-2">
                        <label className="block text-xs font-bold text-white leading-snug">
                          {idx + 1}. {q}
                        </label>
                        <textarea
                          rows={2}
                          value={questionAnswers[idx] || ''}
                          onChange={(e) => handleAnswerChange(idx, e.target.value)}
                          placeholder={`Specify controls or response for Q${idx + 1}...`}
                          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500 transition resize-none"
                        />
                      </div>
                    ))}

                    {currentStep === 2 && (
                      <button
                        type="button"
                        onClick={handleSubmitAnswers}
                        className="w-full py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-zinc-950 font-extrabold text-xs rounded-xl shadow-lg transition active:scale-[0.99] flex items-center justify-center gap-2"
                      >
                        <Zap className="w-4 h-4 fill-current" />
                        <span>Run RCSA Engine & Generate Residual Risk Report</span>
                      </button>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 3: Report Display */}
              {msg.step === 3 && msg.data && (
                <div className="space-y-4">
                  <div className="p-4 bg-zinc-950 border border-zinc-800 rounded-xl space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                      <div className="flex items-center space-x-2">
                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                        <span className="font-extrabold text-white text-sm">
                          RCSA Residual Risk Report
                        </span>
                      </div>
                      <button
                        onClick={() => handleCopySummary(msg.text, index)}
                        className="px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-xs font-mono transition flex items-center gap-1"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>Copy Text Report</span>
                          </>
                        )}
                      </button>
                    </div>

                    <pre className="whitespace-pre-wrap font-mono text-[11px] text-cyan-200 bg-black p-4 rounded-xl border border-zinc-800 leading-relaxed overflow-x-auto select-all">
                      {msg.text}
                    </pre>
                  </div>

                  {onConvertToPIA && (
                    <div className="p-4 bg-gradient-to-r from-cyan-950 to-blue-950 border border-cyan-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
                      <div className="text-xs text-cyan-200">
                        <strong className="text-white block font-bold text-xs sm:text-sm">Convert & Save as PIA Draft</strong>
                        Save this assessment directly into your active PIA directory.
                      </div>
                      <button
                        type="button"
                        onClick={handleConvertToFullPia}
                        className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-xs rounded-xl transition flex items-center gap-1.5 shrink-0"
                      >
                        <FileText className="w-4 h-4" />
                        <span>Save to Directory</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              )}

              {!msg.step && (
                <p className="whitespace-pre-line text-zinc-200">{msg.text}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Bar */}
      <div className="p-4 bg-zinc-900 border-t border-zinc-800">
        <form onSubmit={handleCustomSend} className="flex items-center space-x-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder='Type "Initialize System" or ask RCSA questions...'
            className="flex-1 bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500 transition"
          />
          <button
            type="submit"
            disabled={!inputText.trim()}
            className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-xs rounded-xl transition disabled:opacity-40 flex items-center gap-1.5 shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
  );
};
