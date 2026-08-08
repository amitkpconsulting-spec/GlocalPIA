import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  X, 
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
import { PIAAssessment, RiskLevel, IndustrySectorId } from '../types';
import { RCSA_ASSESSMENT_TYPES as ASSESSMENT_TYPES, AssessmentInitiativeType as AssessmentType } from '../data/rcsaTaxonomy';

interface RCSAAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConvertToPIA?: (piaDraft: Partial<PIAAssessment>) => void;
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

export const RCSAAssistantModal: React.FC<RCSAAssistantModalProps> = ({
  isOpen,
  onClose,
  onConvertToPIA,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedType, setSelectedType] = useState<AssessmentType | null>(null);
  const [questionAnswers, setQuestionAnswers] = useState<Record<number, string>>({});
  const [inputText, setInputText] = useState('');
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Initialize conversation when modal opens or when reset
  React.useEffect(() => {
    if (isOpen && messages.length === 0) {
      initiateConversation();
    }
  }, [isOpen]);

  const initiateConversation = () => {
    setCurrentStep(1);
    setSelectedType(null);
    setQuestionAnswers({});
    setMessages([
      {
        id: 'msg-init',
        sender: 'assistant',
        step: 1,
        text: 'Welcome to the RCSA Privacy Impact Assessment (PIA). To set your baseline Inherent Risk rating and dynamically tailor your assessment, please select what you are assessing:\n\n1. **Project**\n2. **Process**\n3. **Application (App)**\n4. **Proof of Concept (PoC)**\n5. **Pilot**\n6. **AI Initiative**',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  if (!isOpen) return null;

  const handleSelectType = (type: AssessmentType) => {
    setSelectedType(type);
    setCurrentStep(2);

    const typeDef = ASSESSMENT_TYPES[type];

    // Add User response message
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: type,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    // Add Assistant Step 2 Response Message
    const assistantMsg: ChatMessage = {
      id: `asst-${Date.now()}`,
      sender: 'assistant',
      step: 2,
      text: `You selected: **${type}**\n\n**1. Definition:**\n${typeDef.definition}\n\n**2. Declared Baseline Inherent Risk:**\nScore: ${typeDef.inherentBaseScore}/5 (${typeDef.inherentRating} Inherent Risk)\n\n**3. Dynamic Tailored Assessment Questionnaire:**\nPlease answer the 5 questions below to calculate your Control Effectiveness and Residual Risk Rating:`,
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

    // Auto-fill unanswered questions with standard response
    const updatedAnswers = { ...questionAnswers };
    typeDef.questions.forEach((_, idx) => {
      if (!updatedAnswers[idx] || updatedAnswers[idx].trim() === '') {
        updatedAnswers[idx] = 'Standard governance policies and access controls are maintained.';
      }
    });
    setQuestionAnswers(updatedAnswers);

    setCurrentStep(3);

    // Analyze Control Effectiveness Factor (0%, 30%, 60%)
    const answersText = Object.values(updatedAnswers).join(' ').toLowerCase();
    
    // Key control indicators
    const controlKeywords = [
      'encrypt', 'mfa', 'rbac', 'anonym', 'sandbox', 'purge', 'scc', 'dpa', 'iso', 'nist', 'tls',
      'audit', 'opt-in', 'consent', 'synthetic', 'air-gap', 'policy', 'tokeniz', 'rollback'
    ];
    
    const matchedCount = controlKeywords.filter(kw => answersText.includes(kw)).length;

    let controlEffectivenessText: string;
    let controlFactor: number;

    if (matchedCount >= 4) {
      controlEffectivenessText = 'Strong (60%)';
      controlFactor = 0.6;
    } else if (matchedCount >= 1) {
      controlEffectivenessText = 'Moderate (30%)';
      controlFactor = 0.3;
    } else {
      controlEffectivenessText = 'Weak (0%)';
      controlFactor = 0.0;
    }

    // Mathematical RCSA Matrix Calculations
    const baseInherentScore = typeDef.inherentBaseScore; // 1-5
    const inherentMatrixScore = baseInherentScore * baseInherentScore; // 1-25
    
    const residualMatrixScore = Math.max(1, Math.min(25, Math.round(inherentMatrixScore * (1 - controlFactor))));
    const residualLikelihood = Math.max(1, Math.round(baseInherentScore * (1 - (controlFactor * 0.5))));
    const residualImpact = Math.max(1, Math.round(baseInherentScore * (1 - (controlFactor * 0.5))));

    let residualRatingText: string;
    if (residualMatrixScore <= 5) {
      residualRatingText = '🟢 Low';
    } else if (residualMatrixScore <= 11) {
      residualRatingText = '🟡 Medium';
    } else if (residualMatrixScore <= 19) {
      residualRatingText = '🟠 High';
    } else {
      residualRatingText = '🔴 Critical';
    }

    // Control Gaps & Actionable Mitigations
    let gaps: string[] = [];
    let mitigations: string[] = [];

    if (selectedType === 'AI Initiative') {
      if (!answersText.includes('anonym') && !answersText.includes('tokeniz')) {
        gaps.push('Potential presence of un-sanitized PII in model training datasets or embeddings.');
        mitigations.push('Implement automated PII scrubbing and tokenization pipelines prior to vector ingestion.');
      }
      if (!answersText.includes('iso') && !answersText.includes('nist')) {
        gaps.push('Lack of formal alignment with ISO/IEC 42001 or NIST AI RMF governance frameworks.');
        mitigations.push('Establish AI Risk Committee sign-off and align model lifecycle with ISO 42001 controls.');
      }
      gaps.push('Vector database context windows require automated retention and purging rules.');
      mitigations.push('Configure 30-day TTL purges on vector embedding stores and LLM cache.');
    } else if (selectedType === 'Application (App)') {
      if (!answersText.includes('mfa') && !answersText.includes('2fa')) {
        gaps.push('Multi-Factor Authentication (MFA) or SAML SSO enforcement gap identified.');
        mitigations.push('Mandate OAuth 2.0 / SAML SSO with forced MFA for all application user accounts.');
      }
      if (!answersText.includes('pen') && !answersText.includes('scan')) {
        gaps.push('Absence of recent independent penetration testing or SAST/DAST code scans.');
        mitigations.push('Schedule third-party penetration testing prior to production deployment.');
      }
      gaps.push('API endpoint rate limiting and payload encryption checks required.');
      mitigations.push('Enforce API gateway TLS 1.3 encryption and IP rate limiting.');
    } else if (selectedType === 'Proof of Concept (PoC)') {
      if (answersText.includes('live') || answersText.includes('real')) {
        gaps.push('Risk of live production PII leakage into sandboxed PoC environment.');
        mitigations.push('Strictly enforce synthetic data generators and block live database access.');
      } else {
        gaps.push('Sandbox teardown schedule requires automated execution confirmation.');
        mitigations.push('Schedule automated environment wipe upon PoC trial completion date.');
      }
    } else if (selectedType === 'Pilot') {
      gaps.push('Pilot rollback kill-switch and participant opt-in consent logs require DPO audit.');
      mitigations.push('Archive pilot participant consent forms and test kill-switch trigger daily.');
      gaps.push('Live PII exposure duration should be capped to the minimal pilot timeframe.');
      mitigations.push('Enforce 60-day maximum pilot data retention limit.');
    } else { // Project / Process
      gaps.push('Cross-border data transfer mechanisms require Article 46 Standard Contractual Clauses (SCCs).');
      mitigations.push('Execute UK Addendum / EU SCCs with third-party cloud vendors.');
      gaps.push('Data retention schedules and employee RBAC require formal DPO policy binding.');
      mitigations.push('Document retention workflows in departmental Record of Processing Activities (RoPA).');
    }

    if (mitigations.length === 0) {
      mitigations.push('Conduct quarterly DPO privacy audit review on active controls.');
    }

    const reportText = `=====================================================
               RCSA & PIA RISK REPORT
=====================================================

1. SCOPE SUMMARY
- Initiative Type: ${selectedType}
- Definition: ${typeDef.definition}

2. INHERENT RISK EVALUATION
- Base Score: ${baseInherentScore}/5
- Identified Threat Drivers: ${typeDef.threatDrivers}
- Inherent Risk Rating: ${typeDef.inherentRating}

3. CONTROL EFFECTIVENESS RATING
- Existing Controls Evaluated: ${matchedCount > 0 ? `Verified ${matchedCount} control safeguards from assessment inputs.` : 'Basic policy declarations provided.'}
- Control Effectiveness: ${controlEffectivenessText}

4. RESIDUAL RISK EVALUATION
- Residual Likelihood: ${residualLikelihood}/5
- Residual Impact: ${residualImpact}/5
- Final Residual Risk Score: ${residualMatrixScore}/25
- Final Residual Risk Rating: ${residualRatingText}

5. MANDATORY MITIGATION PLAN
${mitigations.map(m => `- ${m}`).join('\n')}`;

    const userSummaryMsg: ChatMessage = {
      id: `user-sub-${Date.now()}`,
      sender: 'user',
      text: 'Submitted 5-Question PIA Assessment Responses.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const assistantSummaryMsg: ChatMessage = {
      id: `asst-sum-${Date.now()}`,
      sender: 'assistant',
      step: 3,
      text: reportText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      data: {
        selection: selectedType,
        answers: updatedAnswers,
        summary: {
          residualRisk: `${residualRatingText} (${residualMatrixScore}/25)`,
          riskScore: residualMatrixScore,
          controlGaps: gaps,
          recommendedMitigations: mitigations,
          gdprStatus: 'Compliant with Mitigations',
          dpdpStatus: 'Data Fiduciary Obligations Satisfied'
        }
      }
    };

    setMessages(prev => [...prev, userSummaryMsg, assistantSummaryMsg]);
  };

  const handleCustomSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputText.trim()) return;

    const trimmed = inputText.trim();
    setInputText('');

    // Check if user typed "Start PIA" or similar trigger
    if (trimmed.toLowerCase().includes('start pia') || trimmed.toLowerCase().includes('restart')) {
      initiateConversation();
      return;
    }

    // Check if input matches one of the 6 options directly
    const matchedOption = (Object.keys(ASSESSMENT_TYPES) as AssessmentType[]).find(
      t => t.toLowerCase() === trimmed.toLowerCase() || trimmed.toLowerCase().includes(t.toLowerCase())
    );

    if (currentStep === 1 && matchedOption) {
      handleSelectType(matchedOption);
      return;
    }

    // Default chat fallback message
    const userMsg: ChatMessage = {
      id: `user-custom-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    let replyText = '';
    if (currentStep === 1) {
      replyText = 'Welcome to the RCSA Privacy Impact Assessment. To determine the correct inherent risk and tailored questionnaire, please select what you are assessing from the following list:\n[Project] | [Process] | [Application] | [Proof of Concept (PoC)] | [Pilot] | [AI Initiative]';
    } else {
      replyText = 'Please complete the 5 questionnaire inputs above and click "Analyze & Generate Residual Risk Summary" to receive your RCSA privacy audit report.';
    }

    const asstMsg: ChatMessage = {
      id: `asst-reply-${Date.now()}`,
      sender: 'assistant',
      text: replyText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg, asstMsg]);
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
      projectTitle: `RCSA Tailored Assessment: ${selectedType}`,
      projectDescription: `${typeDef.definition} (Inherent Risk: ${typeDef.inherentRisk})`,
      industrySector: selectedType === 'AI Initiative' ? 'banking' : selectedType === 'Application' ? 'retail' : 'corporate',
      riskResult: {
        impactScore: typeDef.riskScore,
        likelihoodScore: typeDef.riskScore,
        baseRiskScore: typeDef.riskScore * 3,
        appliedModifiers: {
          vendorMultiplier: 1,
          aiMultiplier: selectedType === 'AI Initiative' ? 1.5 : 1,
          crossBorderMultiplier: 1,
          specialCategoryMultiplier: 1,
          noLawfulBasisMultiplier: 1,
          lawfulBasisRightsMultiplier: 1,
          totalMultiplier: 1
        },
        finalRiskScore: typeDef.riskScore * 3,
        riskLevel: typeDef.riskLevel,
        requiredAction: 'Implement RCSA recommended mitigations and verify control gaps.',
        sectionRiskProfiles: {
          dataProcessingRisk: 3,
          legalComplianceRisk: 3,
          dataSharingRisk: 3,
          securityRisk: 3,
          governanceRisk: 3
        },
        topRiskAreas: []
      },
      status: 'Draft',
      answers: {}
    };

    onConvertToPIA(newDraft);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col shadow-2xl overflow-hidden relative">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-zinc-900 via-zinc-900 to-cyan-950/60 border-b border-zinc-800 flex items-center justify-between shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-950 text-cyan-400 rounded-xl border border-cyan-800 shadow-sm">
              <Bot className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-base sm:text-lg font-black text-white tracking-tight">
                  RCSA Privacy Impact Assistant
                </h2>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800 rounded-md">
                  RCSA MATRIX ENGINE
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Dynamic Privacy Control Self-Assessment & Inherent Risk Mapping Workflow
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={initiateConversation}
              className="p-2 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 rounded-xl transition text-xs font-semibold flex items-center gap-1.5"
              title="Reset Assessment Workflow"
            >
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Reset PIA</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-xl transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat / Assessment Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 scrollbar-thin scrollbar-thumb-zinc-700">
          {messages.map((msg, index) => (
            <div
              key={msg.id}
              className={`flex flex-col space-y-2 ${
                msg.sender === 'user' ? 'items-end' : 'items-start'
              }`}
            >
              <div className="flex items-center space-x-2 text-[11px] text-zinc-500 font-mono">
                <span>{msg.sender === 'user' ? 'Risk Assessor (User)' : 'RCSA Assistant'}</span>
                <span>•</span>
                <span>{msg.timestamp}</span>
              </div>

              <div
                className={`max-w-3xl rounded-2xl p-4 sm:p-5 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-cyan-950/80 border border-cyan-500/40 text-cyan-100 rounded-tr-none'
                    : 'bg-zinc-950 border border-zinc-800 text-zinc-200 rounded-tl-none shadow-xl'
                }`}
              >
                {/* STEP 1: Selection Message */}
                {msg.step === 1 && (
                  <div className="space-y-4">
                    <p className="whitespace-pre-line text-zinc-200 font-medium">
                      {msg.text}
                    </p>

                    <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                      {(Object.keys(ASSESSMENT_TYPES) as AssessmentType[]).map(type => {
                        const item = ASSESSMENT_TYPES[type];
                        return (
                          <button
                            key={type}
                            onClick={() => handleSelectType(type)}
                            className="p-3 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-cyan-500/60 rounded-xl text-left transition group flex flex-col justify-between"
                          >
                            <div>
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-bold text-sm text-white group-hover:text-cyan-300 transition">
                                  [{type}]
                                </span>
                                <span className={`px-2 py-0.5 text-[10px] font-mono font-bold rounded border ${item.badgeClass}`}>
                                  Risk: {item.inherentBaseScore}/5 ({item.inherentRating})
                                </span>
                              </div>
                              <p className="text-[11px] text-zinc-400 line-clamp-2 leading-snug">
                                {item.definition}
                              </p>
                            </div>

                            <div className="mt-2 text-[10px] text-cyan-400 font-bold flex items-center justify-between pt-2 border-t border-zinc-800/80">
                              <span>Select {type}</span>
                              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* STEP 2: Risk Declaration & Dynamic 5-Question Questionnaire */}
                {msg.step === 2 && msg.data && (
                  <div className="space-y-5">
                    <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-between">
                      <div>
                        <span className="text-xs text-zinc-400 block font-mono">SELECTED INITIATIVE</span>
                        <span className="text-base font-extrabold text-white">[{msg.data.selection}]</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-zinc-400 block font-mono">INHERENT RISK SCORE</span>
                        <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded border ${ASSESSMENT_TYPES[msg.data.selection!].badgeClass}`}>
                          {msg.data.inherentRisk}
                        </span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-zinc-900/60 border border-zinc-800/80 rounded-xl text-xs text-zinc-300">
                      <strong className="text-white block mb-1">Definition:</strong>
                      {msg.data.definition}
                    </div>

                    <div className="space-y-4 pt-2">
                      <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-1.5">
                          <Sliders className="w-3.5 h-3.5" />
                          <span>Tailored 5-Question PIA Assessment Questionnaire</span>
                        </span>
                        <span className="text-[10px] text-zinc-500 font-mono">
                          Mapped to [{msg.data.selection}]
                        </span>
                      </div>

                      {msg.data.questions?.map((q, idx) => (
                        <div key={idx} className="p-3.5 bg-zinc-900 border border-zinc-800 rounded-xl space-y-2">
                          <label className="block text-xs font-bold text-white leading-snug">
                            Question {idx + 1}: {q}
                          </label>
                          <textarea
                            rows={2}
                            value={questionAnswers[idx] || ''}
                            onChange={(e) => handleAnswerChange(idx, e.target.value)}
                            placeholder={`Enter your control details or response for Question ${idx + 1}...`}
                            className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500 transition resize-none"
                          />
                        </div>
                      ))}

                      {currentStep === 2 && (
                        <button
                          type="button"
                          onClick={handleSubmitAnswers}
                          className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-zinc-950 font-extrabold text-sm rounded-xl shadow-lg transition active:scale-[0.99] flex items-center justify-center gap-2"
                        >
                          <Zap className="w-4 h-4 fill-current" />
                          <span>Analyze Responses & Generate Residual Risk Summary</span>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 3: Residual Risk Summary & Monospace Text Report */}
                {msg.step === 3 && msg.data && (
                  <div className="space-y-4">
                    <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                        <div className="flex items-center space-x-2">
                          <ShieldCheck className="w-5 h-5 text-emerald-400" />
                          <span className="font-extrabold text-white text-base">
                            RCSA Residual Risk Audit Summary
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

                      {/* Exact Formatted Report Box */}
                      <pre className="whitespace-pre-wrap font-mono text-xs text-cyan-200 bg-zinc-950 p-4 rounded-xl border border-zinc-800 leading-relaxed overflow-x-auto select-all">
                        {msg.text}
                      </pre>

                      <div className="grid grid-cols-2 gap-3 text-xs font-mono pt-2">
                        <div className="p-2.5 bg-zinc-950 rounded-lg border border-zinc-800">
                          <span className="text-zinc-500 text-[10px] block">INITIATIVE TYPE</span>
                          <span className="font-bold text-white">[{msg.data.selection}]</span>
                        </div>
                        <div className="p-2.5 bg-zinc-950 rounded-lg border border-zinc-800">
                          <span className="text-zinc-500 text-[10px] block">RESIDUAL RISK RATING</span>
                          <span className="font-bold text-emerald-400">{msg.data.summary?.residualRisk}</span>
                        </div>
                      </div>

                      {/* Control Gaps */}
                      {msg.data.summary?.controlGaps && msg.data.summary.controlGaps.length > 0 && (
                        <div>
                          <span className="text-xs font-bold text-rose-400 uppercase font-mono block mb-1.5 flex items-center gap-1">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Identified Control Gaps:</span>
                          </span>
                          <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                            {msg.data.summary?.controlGaps.map((gap, i) => (
                              <li key={i}>{gap}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Recommended Mitigations */}
                      <div>
                        <span className="text-xs font-bold text-cyan-400 uppercase font-mono block mb-1.5 flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Recommended Risk Mitigations:</span>
                        </span>
                        <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300 bg-zinc-950 p-3 rounded-lg border border-zinc-800">
                          {msg.data.summary?.recommendedMitigations.map((mit, i) => (
                            <li key={i}>{mit}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Convert to Full System PIA CTA */}
                    {onConvertToPIA && (
                      <div className="p-4 bg-gradient-to-r from-cyan-950 to-blue-950 border border-cyan-800 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="text-xs text-cyan-200">
                          <strong className="text-white block font-bold text-sm">Convert to Full Platform PIA Assessment</strong>
                          Save this RCSA assessment directly into your local PIA directory and assign DPO sign-off tracking.
                        </div>
                        <button
                          type="button"
                          onClick={handleConvertToFullPia}
                          className="px-4 py-2.5 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-xs rounded-xl transition flex items-center gap-1.5 shrink-0"
                        >
                          <FileText className="w-4 h-4" />
                          <span>Convert to System PIA</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Standard Message Text (when not special step) */}
                {!msg.step && (
                  <p className="whitespace-pre-line text-zinc-200">{msg.text}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Bottom Input Bar */}
        <div className="p-4 bg-zinc-900 border-t border-zinc-800 shrink-0">
          <form onSubmit={handleCustomSend} className="flex items-center space-x-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder='Type "Start PIA" or ask a question...'
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
    </div>
  );
};
