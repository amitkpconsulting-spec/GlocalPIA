import React, { useState, useEffect } from 'react';
import { 
  Save, Sparkles, CheckCircle2, AlertTriangle, ShieldCheck, 
  HelpCircle, ChevronRight, ChevronLeft, Send, Info, Lock,
  Building, User, Mail, Layers, FileText, GitCommit, Globe, Shield, Sliders, RefreshCw, Bot
} from 'lucide-react';
import { PIAAssessment, SectionAnswers, RiskLevel, WorkflowMode, IndustrySectorId, SystemSetupConfig } from '../types';
import { QUESTIONNAIRE_SECTIONS, QUESTIONNAIRE_DEFINITIONS } from '../data/questionnaire';
import { INDUSTRY_SECTOR_PROFILES, SECTOR_SPECIFIC_QUESTIONS } from '../data/industrySectors';
import { calculatePIARisk } from '../utils/riskCalculator';
import { ProvenanceViewerModal } from './ProvenanceViewerModal';
import { RegulatoryTailoringPanel } from './RegulatoryTailoringPanel';
import { InitialSetupSectorWizard } from './InitialSetupSectorWizard';
import { RCSAEnginePanel } from './RCSAEnginePanel';
import { ExportButtonDropdown } from './ExportButtonDropdown';
import { LocalAIAssistantToolbar } from './LocalAIAssistantToolbar';
import { DummyContextScopePreset } from '../utils/localAiEngine';

interface AssessmentFormProps {
  initialPia?: PIAAssessment | null;
  systemSetup?: SystemSetupConfig;
  workflowMode?: WorkflowMode;
  onSavePia: (piaData: Partial<PIAAssessment>) => void;
  onCancel: () => void;
  onOpenSetup?: () => void;
}

export const AssessmentForm: React.FC<AssessmentFormProps> = ({
  initialPia,
  systemSetup,
  workflowMode = 'frontend',
  onSavePia,
  onCancel,
  onOpenSetup,
}) => {
  const [showProvModal, setShowProvModal] = useState(false);
  const [currentPiaState, setCurrentPiaState] = useState<PIAAssessment | null>(initialPia || null);
  
  // Industry Sector Setup State (inherited from initialPia or systemSetup)
  const [industrySector, setIndustrySector] = useState<IndustrySectorId>(
    initialPia?.industrySector || systemSetup?.industrySector || 'banking'
  );
  const [showSectorWizard, setShowSectorWizard] = useState<boolean>(!initialPia && !systemSetup);

  // General Info State
  const [projectTitle, setProjectTitle] = useState(initialPia?.projectTitle || '');
  const [organization, setOrganization] = useState(
    initialPia?.organization || systemSetup?.organizationName || 'Enterprise Governance & Healthcare Trust'
  );
  const [projectOwner, setProjectOwner] = useState(initialPia?.projectOwner || '');
  const [projectOwnerEmail, setProjectOwnerEmail] = useState(initialPia?.projectOwnerEmail || '');
  const [dpoName, setDpoName] = useState(
    initialPia?.dpoName || systemSetup?.dataProtectionContact || 'Amit Kumar Pandey (DPO)'
  );
  const [dpoEmail, setDpoEmail] = useState(
    initialPia?.dpoEmail || systemSetup?.dpoEmail || 'dpo.lead@enterprise-governance.org'
  );
  const [projectDescription, setProjectDescription] = useState(initialPia?.projectDescription || '');
  const [dataFlowDescription, setDataFlowDescription] = useState(initialPia?.dataFlowDescription || '');
  
  // Structured Data Flow State
  const [whatApp, setWhatApp] = useState(initialPia?.structuredDataFlow?.whatApp || '');
  const [whyPia, setWhyPia] = useState(initialPia?.structuredDataFlow?.whyPia || '');
  const [howFlows, setHowFlows] = useState(initialPia?.structuredDataFlow?.howFlows || '');
  const [whenRecordStd, setWhenRecordStd] = useState(initialPia?.structuredDataFlow?.whenRecordStd || '');
  const [whereStored, setWhereStored] = useState(initialPia?.structuredDataFlow?.whereStored || '');
  const [crossBorder, setCrossBorder] = useState(initialPia?.structuredDataFlow?.crossBorder || '');

  // Auto-synthesize full dataFlowDescription when structured subfields change
  const handleAutoSynthesizeDataFlow = (
    wApp: string, wPia: string, hFlows: string, wWhen: string, wWhere: string, cBorder: string
  ) => {
    const parts = [
      wApp ? `1. Project/Process/App: ${wApp}` : '',
      wPia ? `2. Why PIA Performed: ${wPia}` : '',
      hFlows ? `3. How Data Flows: ${hFlows}` : '',
      wWhen ? `4. When / Retention Standards: ${wWhen}` : '',
      wWhere ? `5. Where Stored: ${wWhere}` : '',
      cBorder ? `6. Cross Border Transfer: ${cBorder}` : '',
    ].filter(Boolean);

    if (parts.length > 0) {
      setDataFlowDescription(parts.join('\n\n'));
    }
  };

  const fillDataFlowTemplate = () => {
    const defaultWhat = 'PatientCare AI Clinical Diagnostic Assistant & Record Triage Portal';
    const defaultWhy = 'Assess privacy risks for automated health record processing and AI-assisted clinical workflow.';
    const defaultHow = 'EHR data is ingested via encrypted mTLS APIs, processed in isolated inference containers, and logged for audit.';
    const defaultWhen = 'Retained for 7 years in accordance with Healthcare Records Management Standards (NHS Code of Practice).';
    const defaultWhere = 'Stored in primary UK Sovereign Cloud Data Center (AWS eu-west-2, London) with AES-256 encryption at rest.';
    const defaultCrossBorder = 'No cross-border transfers. Data remains entirely within local UK jurisdiction.';

    setWhatApp(defaultWhat);
    setWhyPia(defaultWhy);
    setHowFlows(defaultHow);
    setWhenRecordStd(defaultWhen);
    setWhereStored(defaultWhere);
    setCrossBorder(defaultCrossBorder);

    handleAutoSynthesizeDataFlow(defaultWhat, defaultWhy, defaultHow, defaultWhen, defaultWhere, defaultCrossBorder);
  };

  const handleAutoFillPreset = (preset: DummyContextScopePreset) => {
    if (preset.projectTitle) setProjectTitle(preset.projectTitle);
    if (preset.organization) setOrganization(preset.organization);
    if (preset.industrySector) setIndustrySector(preset.industrySector);
    if (preset.projectDescription) setProjectDescription(preset.projectDescription);

    setWhatApp(preset.structuredDataFlow.whatApp);
    setWhyPia(preset.structuredDataFlow.whyPia);
    setHowFlows(preset.structuredDataFlow.howFlows);
    setWhenRecordStd(preset.structuredDataFlow.whenRecordStd);
    setWhereStored(preset.structuredDataFlow.whereStored);
    setCrossBorder(preset.structuredDataFlow.crossBorder);

    handleAutoSynthesizeDataFlow(
      preset.structuredDataFlow.whatApp,
      preset.structuredDataFlow.whyPia,
      preset.structuredDataFlow.howFlows,
      preset.structuredDataFlow.whenRecordStd,
      preset.structuredDataFlow.whereStored,
      preset.structuredDataFlow.crossBorder
    );
  };

  // Section Answers State
  const [answers, setAnswers] = useState<SectionAnswers>(initialPia?.answers || {});

  // NHS Checklist State
  const [nhsChecklist, setNhsChecklist] = useState(initialPia?.nhsChecklist || {
    fairLawfulProcessing: 'Not Evaluated',
    purposeLimitation: 'Not Evaluated',
    dataMinimization: 'Not Evaluated',
    accuracy: 'Not Evaluated',
    retention: 'Not Evaluated',
    rightsOfIndividuals: 'Not Evaluated',
    security: 'Not Evaluated',
    internationalTransfers: 'Not Evaluated',
    commonLawConfidentiality: {
      consentObtained: false,
      publicInterestJustification: false,
      legalDutyExists: false,
      statutoryBasis: false,
    }
  });

  // Current Active Section Index
  const [activeSectionId, setActiveSectionId] = useState<string>('section_meta');

  // Ref for section tab bar scroll container
  const sectionBarRef = React.useRef<HTMLDivElement>(null);

  const scrollSectionBar = (direction: 'left' | 'right') => {
    if (sectionBarRef.current) {
      const scrollAmount = 260;
      sectionBarRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Calculate Risk Scores dynamically including Industry Sector Rules
  const calculatedRisk = calculatePIARisk(answers, industrySector);
  const activeSectorProfile = INDUSTRY_SECTOR_PROFILES[industrySector];
  const sectorQuestions = SECTOR_SPECIFIC_QUESTIONS[industrySector] || [];

  // Check if Section J (Vendor Management) should be visible based on A1
  const a1Label = answers['A1']?.selectedLabel || '';
  const showSectionJ =
    a1Label.toLowerCase().includes('vendor') ||
    a1Label.toLowerCase().includes('outsourcing') ||
    a1Label.toLowerCase().includes('supplier');

  // Handle Option Select for a Question
  const handleSelectOption = (qId: string, optIdx: number, label: string, score: number) => {
    setAnswers(prev => ({
      ...prev,
      [qId]: {
        ...prev[qId],
        optionIndex: optIdx,
        selectedLabel: label,
        score,
      }
    }));
  };

  // Handle Qualitative Note for a Question
  const handleNoteChange = (qId: string, noteText: string) => {
    setAnswers(prev => ({
      ...prev,
      [qId]: {
        ...(prev[qId] || { optionIndex: 0, selectedLabel: '', score: 1 }),
        qualitativeNotes: noteText,
      }
    }));
  };

  // Active PIA Object for Exporting
  const activePiaForExport: PIAAssessment = {
    id: initialPia?.id || 'PIA-2026-001',
    fid: initialPia?.fid || 'PIA-FE-2026-101',
    bid: initialPia?.bid || 'PIA-BE-UK-2026-412',
    version: initialPia?.version || 'v1.0',
    projectTitle: projectTitle || 'Untitled Assessment',
    organization: organization || 'Enterprise Trust',
    industrySector,
    projectOwner: projectOwner || 'Unassigned Owner',
    projectOwnerEmail,
    dpoName,
    dpoEmail,
    projectDescription,
    dataFlowDescription,
    structuredDataFlow: {
      whatApp,
      whyPia,
      howFlows,
      whenRecordStd,
      whereStored,
      crossBorder,
    },
    answers,
    status: initialPia?.status || 'Draft',
    riskResult: calculatedRisk,
    nhsChecklist,
    endorsements: initialPia?.endorsements || [
      { role: 'Project/Process Owner', name: projectOwner || 'Project Lead', signed: true, signedDate: new Date().toLocaleDateString() },
      { role: 'Data Protection Officer', name: dpoName || 'Amit Kumar Pandey', signed: true, signedDate: new Date().toLocaleDateString() }
    ],
    provenanceTrail: initialPia?.provenanceTrail || [],
    createdAt: initialPia?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  // Save / Submit Handler
  const handleSubmit = (targetStatus: 'Draft' | 'Submitted') => {
    if (!projectTitle.trim() || !projectOwner.trim()) {
      alert('Please fill in required fields: Project Title and Project Owner.');
      return;
    }

    onSavePia({
      id: initialPia?.id,
      projectTitle,
      organization,
      industrySector,
      projectOwner,
      projectOwnerEmail,
      dpoName,
      dpoEmail,
      projectDescription,
      dataFlowDescription,
      structuredDataFlow: {
        whatApp,
        whyPia,
        howFlows,
        whenRecordStd,
        whereStored,
        crossBorder,
      },
      answers,
      status: targetStatus,
      nhsChecklist,
    });
  };

  // Color mapper for live risk levels
  const getRiskBadge = (level: RiskLevel) => {
    switch (level) {
      case 'Critical':
        return 'bg-rose-500 text-white font-bold';
      case 'High':
        return 'bg-orange-500 text-white font-bold';
      case 'Medium':
        return 'bg-amber-500 text-slate-950 font-bold';
      case 'Low':
      default:
        return 'bg-emerald-500 text-white font-bold';
    }
  };

  if (showSectorWizard) {
    return (
      <div className="space-y-4">
        <InitialSetupSectorWizard
          currentSector={industrySector}
          onSelectSector={(sId) => {
            setIndustrySector(sId);
            setShowSectorWizard(false);
          }}
          onClose={initialPia ? () => setShowSectorWizard(false) : undefined}
          isInitialSetup={!initialPia}
        />
      </div>
    );
  }

  return (
    <div id="assessment-form-container" className="grid grid-cols-1 lg:grid-cols-12 gap-6">
      {/* Main Questionnaire Column */}
      <div className="lg:col-span-8 space-y-6">
        {/* Export Banner for Filled/Submitted/Signed Off Assessment */}
        <ExportButtonDropdown pia={activePiaForExport} variant="full-banner" />

        {/* System Setup Calibration Header Banner */}
        <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-cyan-950/40 border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-950 text-cyan-400 rounded-xl border border-cyan-800 shrink-0">
              <Sliders className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
                  Rules Engine Calibrated
                </span>
                <span className="px-2 py-0.5 bg-cyan-950 text-cyan-300 border border-cyan-800 rounded text-[10px] font-bold">
                  {activeSectorProfile?.name}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-0.5">
                Target Framework: <strong className="text-white">{systemSetup?.primaryRegulatoryFramework || 'UK GDPR & DPA 2018'}</strong> • Rules: {activeSectorProfile?.baseRiskWeightingNote}
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 shrink-0 self-end sm:self-auto">
            {onOpenSetup && (
              <button
                type="button"
                onClick={onOpenSetup}
                className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 rounded-xl text-xs font-semibold transition"
              >
                System Setup
              </button>
            )}
            <button
              type="button"
              onClick={() => setShowSectorWizard(true)}
              className="px-3 py-1.5 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 rounded-xl text-xs font-semibold transition"
            >
              Switch Sector
            </button>
          </div>
        </div>

        {/* Section Navigation Header / Tabs */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-2.5 shadow-md group">
          {/* Left Scroll Button */}
          <button
            type="button"
            onClick={() => scrollSectionBar('left')}
            className="hidden sm:flex absolute left-1.5 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-zinc-950/90 hover:bg-zinc-800 text-zinc-300 rounded-full border border-zinc-800 shadow-lg backdrop-blur transition active:scale-95"
            aria-label="Scroll section tabs left"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>

          {/* Scrollable Tab Strip Container */}
          <div
            ref={sectionBarRef}
            onWheel={(e) => {
              if (e.deltaY !== 0) {
                e.preventDefault();
                e.currentTarget.scrollLeft += e.deltaY;
              }
            }}
            className="text-xs overflow-x-auto flex items-center space-x-2 scrollbar-none no-scrollbar touch-pan-x cursor-grab active:cursor-grabbing select-none scroll-smooth px-1 sm:px-6"
          >
            <button
              onClick={() => setActiveSectionId('section_meta')}
              className={`shrink-0 px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition ${
                activeSectionId === 'section_meta'
                  ? 'bg-cyan-500 text-zinc-950 shadow-sm'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              0. Project Details
            </button>

            {/* Embedded RCSA Taxonomy & Risk Engine Tab */}
            <button
              onClick={() => setActiveSectionId('section_rcsa')}
              className={`shrink-0 px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition ${
                activeSectionId === 'section_rcsa'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-zinc-950 text-purple-300 border border-purple-900/60 hover:text-white hover:bg-purple-950/60'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-purple-300" />
              RCSA Taxonomy & Engine
            </button>

            {/* Industry Sector Tab */}
            <button
              onClick={() => setActiveSectionId('section_sector')}
              className={`shrink-0 px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition ${
                activeSectionId === 'section_sector'
                  ? 'bg-cyan-500 text-zinc-950 shadow-sm'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <Building className="w-3.5 h-3.5" />
              S. {activeSectorProfile?.shortName || 'Sector'} Rules
            </button>

            {QUESTIONNAIRE_SECTIONS.map((sec, idx) => {
              if (sec.id === 'section_j' && !showSectionJ) return null; // Conditional Branching
              const isActive = activeSectionId === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => setActiveSectionId(sec.id)}
                  className={`shrink-0 px-3.5 py-2 rounded-xl font-bold whitespace-nowrap transition ${
                    isActive
                      ? 'bg-cyan-500 text-zinc-950 shadow-sm'
                      : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
                  }`}
                >
                  {idx + 1}. {sec.title.split(':')[0]}
                </button>
              );
            })}

            <button
              onClick={() => setActiveSectionId('section_nhs')}
              className={`shrink-0 px-3.5 py-2 rounded-xl font-bold flex items-center gap-1.5 transition ${
                activeSectionId === 'section_nhs'
                  ? 'bg-cyan-500 text-zinc-950 shadow-sm'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              NHS Checklist
            </button>
          </div>

          {/* Right Scroll Button */}
          <button
            type="button"
            onClick={() => scrollSectionBar('right')}
            className="hidden sm:flex absolute right-1.5 top-1/2 -translate-y-1/2 z-10 p-1.5 bg-zinc-950/90 hover:bg-zinc-800 text-zinc-300 rounded-full border border-zinc-800 shadow-lg backdrop-blur transition active:scale-95"
            aria-label="Scroll section tabs right"
          >
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Sector Profile Active Bar & Change Button */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-xl border ${activeSectorProfile?.badgeColor || 'bg-cyan-950 text-cyan-400 border-cyan-800'}`}>
              <Building className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded border border-cyan-800">
                  SECTOR: {activeSectorProfile?.name.toUpperCase()}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                  {sectorQuestions.length} SECTOR QUESTIONS INJECTED
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1 line-clamp-1">
                {activeSectorProfile?.context}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowSectorWizard(true)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950 hover:bg-zinc-800 text-cyan-400 border border-zinc-800 rounded-xl text-xs font-bold transition shrink-0"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Switch Sector Rules
          </button>
        </div>

        {/* Dual-ID Architecture Banner */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/80 px-2.5 py-0.5 rounded border border-blue-800">
                  FID: {currentPiaState?.fid || initialPia?.fid || 'PIA-FE-2026-A8F9K2L1'}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2.5 py-0.5 rounded border border-emerald-800">
                  BID: {currentPiaState?.bid || initialPia?.bid || 'PIA-BE-UK-2026-000412'}
                </span>
                <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                  {currentPiaState?.version || initialPia?.version || 'v1.0'}
                </span>
              </div>
              <p className="text-xs text-zinc-400 mt-1">
                Environment: <strong className="text-zinc-200 capitalize">{workflowMode} Mode</strong> • Immutable Dual-ID Lineage & SHA-256 Provenance Log
              </p>
            </div>
          </div>

          {(currentPiaState || initialPia) && (
            <button
              type="button"
              onClick={() => setShowProvModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-zinc-950 hover:bg-zinc-800 text-cyan-400 border border-zinc-800 rounded-xl text-xs font-bold transition"
            >
              <GitCommit className="w-3.5 h-3.5 text-cyan-400" />
              Provenance Audit Block
            </button>
          )}
        </div>

        {/* Backend Regulatory Tailoring Panel (Active in Backend Mode or when editing an existing assessment) */}
        {(workflowMode === 'backend' || activeSectionId === 'section_meta') && (currentPiaState || initialPia) && (
          <RegulatoryTailoringPanel
            pia={currentPiaState || initialPia!}
            onUpdatePia={(updated) => {
              setCurrentPiaState(updated);
            }}
          />
        )}

        {/* STEP 0: Project Details & Metadata */}
        {activeSectionId === 'section_meta' && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-5 text-zinc-200 shadow-sm">
            <h2 className="text-lg font-bold text-white border-b border-zinc-800 pb-3 flex items-center gap-2">
              <Building className="w-5 h-5 text-cyan-400" />
              General Information & Project Overview
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  Project / Process Title <span className="text-rose-400">*</span>
                </label>
                <input
                  id="input-project-title"
                  type="text"
                  placeholder="e.g. PatientCare AI Clinical Assistant"
                  value={projectTitle}
                  onChange={e => setProjectTitle(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Organization / Department</label>
                <input
                  id="input-organization"
                  type="text"
                  placeholder="e.g. HealthTech Innovation Labs"
                  value={organization}
                  onChange={e => setOrganization(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">
                  Project Owner Name <span className="text-rose-400">*</span>
                </label>
                <input
                  id="input-project-owner"
                  type="text"
                  placeholder="e.g. Dr. Sarah Lin"
                  value={projectOwner}
                  onChange={e => setProjectOwner(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Project Owner Email</label>
                <input
                  id="input-owner-email"
                  type="email"
                  placeholder="sarah.lin@enterprise.org"
                  value={projectOwnerEmail}
                  onChange={e => setProjectOwnerEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">Data Protection Officer (DPO)</label>
                <input
                  id="input-dpo-name"
                  type="text"
                  value={dpoName}
                  onChange={e => setDpoName(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-100 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div>
                <label className="block text-zinc-300 font-semibold mb-1">DPO Email</label>
                <input
                  id="input-dpo-email"
                  type="email"
                  value={dpoEmail}
                  onChange={e => setDpoEmail(e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-zinc-100 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-zinc-300 font-semibold text-xs mb-1">
                Detailed Project Description & Purpose
              </label>
              <textarea
                id="textarea-project-description"
                rows={3}
                placeholder="Describe what the system does, key business goals, and operational context..."
                value={projectDescription}
                onChange={e => setProjectDescription(e.target.value)}
                className="w-full bg-zinc-950 border border-zinc-800 rounded-lg p-2.5 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-cyan-500 leading-relaxed"
              />
              <LocalAIAssistantToolbar
                targetField="description"
                currentText={projectDescription}
                onUpdateText={setProjectDescription}
                onAutoFillPreset={handleAutoFillPreset}
                label="Local AI Assistant: Project Description & Scope"
              />
            </div>

            {/* Structured 6-Point Descriptive Data Flow Section */}
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-2">
                <div>
                  <h3 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-cyan-400" />
                    Structured Descriptive Data Flow Narrative (Section A Standard)
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Define the 6 core lifecycle parameters required for audit and risk scoring.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={fillDataFlowTemplate}
                  className="inline-flex items-center px-2.5 py-1 text-[11px] font-semibold bg-zinc-800 hover:bg-zinc-700 text-cyan-300 rounded border border-zinc-700 transition self-start sm:self-auto shrink-0"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  Auto-Fill Example Template
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    1. What is the Project / Process / App?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. PatientCare AI Clinical Assistant app"
                    value={whatApp}
                    onChange={e => {
                      setWhatApp(e.target.value);
                      handleAutoSynthesizeDataFlow(e.target.value, whyPia, howFlows, whenRecordStd, whereStored, crossBorder);
                    }}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    2. Why is the PIA being performed?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Regulated AI health data processing and clinical deployment"
                    value={whyPia}
                    onChange={e => {
                      setWhyPia(e.target.value);
                      handleAutoSynthesizeDataFlow(whatApp, e.target.value, howFlows, whenRecordStd, whereStored, crossBorder);
                    }}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-zinc-300 font-semibold mb-1">
                    3. How does Data Flow? (Ingestion, Processing & APIs)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. EHR records stream via mTLS REST API to on-prem vector DB, indexed with tokenization..."
                    value={howFlows}
                    onChange={e => {
                      setHowFlows(e.target.value);
                      handleAutoSynthesizeDataFlow(whatApp, whyPia, e.target.value, whenRecordStd, whereStored, crossBorder);
                    }}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500 leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    4. When? (Record Management & Retention Standards)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Retained for 7 years as per NHS Records Management Code of Practice"
                    value={whenRecordStd}
                    onChange={e => {
                      setWhenRecordStd(e.target.value);
                      handleAutoSynthesizeDataFlow(whatApp, whyPia, howFlows, e.target.value, whereStored, crossBorder);
                    }}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-300 font-semibold mb-1">
                    5. Where is data stored?
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Primary AWS eu-west-2 (London) encrypted with AES-256 KMS"
                    value={whereStored}
                    onChange={e => {
                      setWhereStored(e.target.value);
                      handleAutoSynthesizeDataFlow(whatApp, whyPia, howFlows, whenRecordStd, e.target.value, crossBorder);
                    }}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-zinc-300 font-semibold mb-1">
                    6. Cross Border Data Transfer details
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. No transfers outside UK / SCCs & BCRs implemented for EU subprocessors"
                    value={crossBorder}
                    onChange={e => {
                      setCrossBorder(e.target.value);
                      handleAutoSynthesizeDataFlow(whatApp, whyPia, howFlows, whenRecordStd, whereStored, e.target.value);
                    }}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-zinc-400 font-semibold text-[11px] mb-1">
                  Synthesized Full Data Flow Narrative Summary
                </label>
                <textarea
                  id="textarea-data-flow"
                  rows={3}
                  placeholder="Data flow narrative synthesized from the 6 subfields..."
                  value={dataFlowDescription}
                  onChange={e => setDataFlowDescription(e.target.value)}
                  className="w-full bg-zinc-900 border border-zinc-800/80 rounded-lg p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-cyan-500 leading-relaxed font-mono"
                />
                <LocalAIAssistantToolbar
                  targetField="data_flow"
                  currentText={dataFlowDescription}
                  onUpdateText={setDataFlowDescription}
                  onAutoFillPreset={handleAutoFillPreset}
                  label="Local AI Assistant: Data Flow Narrative"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center">
              <button
                type="button"
                onClick={() => setActiveSectionId('section_rcsa')}
                className="inline-flex items-center px-3.5 py-2 text-xs font-bold text-purple-300 bg-purple-950/80 border border-purple-800 rounded-lg hover:bg-purple-900 transition"
              >
                <Bot className="w-4 h-4 mr-1.5 text-purple-400" />
                Launch Tailored RCSA Matrix Engine
              </button>

              <button
                type="button"
                onClick={() => setActiveSectionId('section_sector')}
                className="inline-flex items-center px-4 py-2 text-xs font-bold text-zinc-950 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
              >
                Proceed to Sector Rules Questionnaire
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        )}

        {/* EMBEDDED RCSA TAXONOMY & RISK MATRIX ENGINE VIEW */}
        {activeSectionId === 'section_rcsa' && (
          <RCSAEnginePanel
            industrySector={industrySector}
            systemSetup={systemSetup}
            onApplyToPIA={({ initiativeType, result, a1OptionIndex, a1Label, a1Score }) => {
              handleSelectOption('A1', a1OptionIndex, a1Label, a1Score);
              setAnswers(prev => ({
                ...prev,
                A1: {
                  optionIndex: a1OptionIndex,
                  selectedLabel: a1Label,
                  score: a1Score,
                  qualitativeNotes: `RCSA Matrix Calibrated: Inherent ${result.inherentScoreMath}/25, Control Factor ${Math.round(result.controlFactor * 100)}%, Residual ${result.residualScoreMath}/25 (${result.residualRating})`,
                }
              }));
              alert(`RCSA Matrix Engine calculations bound successfully into PIA assessment!\n\nInitiative Scope: ${initiativeType}\nInherent Risk Score: ${result.inherentScoreMath}/25 (${result.inherentRating})\nControl Reduction: ${Math.round(result.controlFactor * 100)}%\nResidual Risk Score: ${result.residualScoreMath}/25 (${result.residualRating})`);
            }}
          />
        )}

        {/* STEP S: Industry-Specific Sector Rules */}
        {activeSectionId === 'section_sector' && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 text-zinc-200 shadow-sm">
            <div className="border-b border-zinc-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-[10px] font-mono font-bold uppercase rounded ${activeSectorProfile?.badgeColor || 'bg-cyan-950 text-cyan-300'}`}>
                    {activeSectorProfile?.shortName} SECTOR RULESET
                  </span>
                  <h2 className="text-base font-bold text-white tracking-wide">
                    {activeSectorProfile?.name} Compliance Module
                  </h2>
                </div>
                <p className="text-xs text-zinc-400 mt-1">
                  {activeSectorProfile?.context}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowSectorWizard(true)}
                className="text-xs text-cyan-400 hover:underline font-semibold flex items-center gap-1 shrink-0"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Change Sector
              </button>
            </div>

            {/* Target Regulatory Alignment Badges */}
            <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800/80 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-zinc-400 font-semibold">Mandatory Compliance Frameworks:</span>
              {activeSectorProfile?.regulatoryAlignment.map((framework, fIdx) => (
                <span key={fIdx} className="px-2.5 py-0.5 bg-zinc-900 text-cyan-200 border border-cyan-800/60 rounded font-mono font-semibold text-[11px]">
                  {framework}
                </span>
              ))}
            </div>

            {/* Sector Questions */}
            <div className="space-y-6">
              {sectorQuestions.map((q) => {
                const currentAns = answers[q.id];

                return (
                  <div key={q.id} className="bg-zinc-950 rounded-xl p-4 border border-zinc-800 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-sm font-bold text-zinc-100">{q.title}</h3>
                        {q.description && <p className="text-xs text-zinc-400 mt-0.5">{q.description}</p>}
                      </div>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded-md border border-cyan-800/40 shrink-0">
                        {q.reference}
                      </span>
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, optIdx) => {
                        const isSelected = currentAns?.optionIndex === optIdx;

                        return (
                          <button
                            key={optIdx}
                            type="button"
                            onClick={() => handleSelectOption(q.id, optIdx, opt.label, opt.score)}
                            className={`flex items-center justify-between p-3 rounded-lg border text-left transition ${
                              isSelected
                                ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200 font-semibold'
                                : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] ${
                                isSelected ? 'border-cyan-400 bg-cyan-500 text-zinc-950 font-bold' : 'border-zinc-600'
                              }`}>
                                {isSelected ? '✓' : ''}
                              </span>
                              {opt.label}
                            </span>
                            <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                              opt.score >= 4 ? 'bg-rose-950 text-rose-300' : 'bg-zinc-800 text-zinc-400'
                            }`}>
                              Score: {opt.score}
                            </span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Qualitative Notes */}
                    <div>
                      <input
                        type="text"
                        placeholder="Optional justification or sector compliance notes..."
                        value={currentAns?.qualitativeNotes || ''}
                        onChange={e => handleNoteChange(q.id, e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800/80 rounded-md px-3 py-1.5 text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveSectionId('section_a')}
                className="inline-flex items-center px-4 py-2 text-xs font-bold text-zinc-950 bg-cyan-500 rounded-lg hover:bg-cyan-400 transition"
              >
                Proceed to Section A Questionnaire
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        )}

        {/* QUESTIONNAIRE SECTIONS A THROUGH K */}
        {QUESTIONNAIRE_SECTIONS.map(sec => {
          if (sec.id !== activeSectionId) return null;
          if (sec.id === 'section_j' && !showSectionJ) return null;

          const questions = QUESTIONNAIRE_DEFINITIONS.filter(q => q.section === sec.title);

          return (
            <div key={sec.id} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 text-zinc-200 shadow-sm">
              <div className="border-b border-zinc-800 pb-3">
                <h2 className="text-base font-bold text-white tracking-wide">{sec.title}</h2>
                <p className="text-xs text-zinc-400 mt-0.5">{sec.description}</p>
              </div>

              {/* RCSA Tailored Questionnaire Guidance Banner for Section A */}
              {sec.id === 'section_a' && (
                <div className="bg-gradient-to-r from-purple-950/60 via-zinc-950 to-zinc-950 p-4 rounded-xl border border-purple-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-900/80 text-purple-300 rounded-lg border border-purple-700 shrink-0">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-white block">
                        RCSA Taxonomy & Tailored Risk Matrix Engine
                      </span>
                      <p className="text-zinc-400 text-[11px] mt-0.5">
                        Selecting your initiative scope (PoC, Project, Process, App, Pilot, AI Initiative) automatically triggers tailored questionnaires and residual risk math.
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveSectionId('section_rcsa')}
                    className="inline-flex items-center px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs rounded-xl transition shrink-0 self-start sm:self-auto shadow"
                  >
                    Open RCSA Engine Workspace
                    <ChevronRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              )}

              {/* ICO Lawful Basis & Individual Rights Matrix Guidance (Section C / F) */}
              {(sec.id === 'section_c' || sec.id === 'section_f') && calculatedRisk.lawfulBasisEvaluation && (
                <div className="bg-zinc-950 p-4 rounded-xl border border-cyan-800/60 space-y-3 text-xs">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-zinc-800 pb-2">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-cyan-400" />
                      <h3 className="font-bold text-white text-xs">ICO Lawful Basis & Individual Rights Matrix Guidance</h3>
                    </div>
                    <a
                      href="https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/lawful-basis/a-guide-to-lawful-basis/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[11px] text-cyan-400 hover:underline flex items-center gap-1 font-semibold"
                    >
                      ICO Guidance Guide ↗
                    </a>
                  </div>

                  {/* Live Evaluation summary */}
                  <div className="flex flex-wrap items-center justify-between gap-2 bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                    <div>
                      <span className="text-zinc-400">Selected Primary Lawful Basis (C1): </span>
                      <span className="font-bold text-cyan-300">{calculatedRisk.lawfulBasisEvaluation.selectedBasis}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-zinc-400 uppercase font-semibold">ICO Rights Alignment:</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        calculatedRisk.lawfulBasisEvaluation.complianceStatus === 'Compliant'
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                          : calculatedRisk.lawfulBasisEvaluation.complianceStatus === 'At Risk'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-rose-950 text-rose-300 border border-rose-800'
                      }`}>
                        {calculatedRisk.lawfulBasisEvaluation.complianceStatus}
                      </span>
                    </div>
                  </div>

                  {/* ICO Rights Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full text-[11px] text-left border-collapse">
                      <thead>
                        <tr className="border-b border-zinc-800 text-zinc-400 font-mono">
                          <th className="py-1.5 px-2">Lawful Basis (UK GDPR Art 6)</th>
                          <th className="py-1.5 px-2 text-center">Right to Erasure</th>
                          <th className="py-1.5 px-2 text-center">Right to Portability</th>
                          <th className="py-1.5 px-2 text-center">Right to Object</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-zinc-800/60">
                        {[
                          { name: 'Consent', erasure: '✓ Yes', portability: '✓ Yes', object: 'x (withdraw consent)' },
                          { name: 'Contract', erasure: '✓ Yes', portability: '✓ Yes', object: 'x No' },
                          { name: 'Legal obligation', erasure: 'x No', portability: 'x No', object: 'x No' },
                          { name: 'Vital interests', erasure: '✓ Yes', portability: 'x No', object: 'x No' },
                          { name: 'Public task', erasure: 'x No', portability: 'x No', object: '✓ Yes' },
                          { name: 'Legitimate interests', erasure: '✓ Yes', portability: 'x No', object: '✓ Yes' },
                        ].map((row, rIdx) => {
                          const isMatch = calculatedRisk.lawfulBasisEvaluation?.selectedBasis.toLowerCase().includes(row.name.toLowerCase());
                          return (
                            <tr key={rIdx} className={isMatch ? 'bg-cyan-950/70 font-semibold text-cyan-200' : 'text-zinc-400'}>
                              <td className="py-1.5 px-2 flex items-center gap-1.5">
                                {isMatch && <span className="text-cyan-400 font-bold">▶</span>}
                                {row.name}
                              </td>
                              <td className={`py-1.5 px-2 text-center ${row.erasure.startsWith('✓') ? 'text-emerald-400 font-bold' : 'text-zinc-500'}`}>{row.erasure}</td>
                              <td className={`py-1.5 px-2 text-center ${row.portability.startsWith('✓') ? 'text-emerald-400 font-bold' : 'text-zinc-500'}`}>{row.portability}</td>
                              <td className={`py-1.5 px-2 text-center ${row.object.startsWith('✓') ? 'text-emerald-400 font-bold' : 'text-zinc-500'}`}>{row.object}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  {/* Findings */}
                  {calculatedRisk.lawfulBasisEvaluation.findings.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <span className="text-zinc-300 font-semibold text-[11px]">Audit Findings & Risk Adjustments:</span>
                      <ul className="list-disc list-inside space-y-1 text-[11px] text-amber-300 bg-amber-950/30 p-2.5 rounded-lg border border-amber-800/40">
                        {calculatedRisk.lawfulBasisEvaluation.findings.map((f, fIdx) => (
                          <li key={fIdx}>{f}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              <div className="space-y-6">
                {questions.map((q, idx) => {
                  const currentAns = answers[q.id];

                  return (
                    <div key={q.id} className="bg-zinc-950 rounded-xl p-4 border border-zinc-800 space-y-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-sm font-bold text-zinc-100">{q.title}</h3>
                          {q.description && <p className="text-xs text-zinc-400 mt-0.5">{q.description}</p>}
                        </div>
                        <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded-md border border-cyan-800/40 shrink-0">
                          {q.reference}
                        </span>
                      </div>

                      {/* Options Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                        {q.options.map((opt, optIdx) => {
                          const isSelected = currentAns?.optionIndex === optIdx;

                          return (
                            <button
                              key={optIdx}
                              type="button"
                              onClick={() => handleSelectOption(q.id, optIdx, opt.label, opt.score)}
                              className={`flex items-center justify-between p-3 rounded-lg border text-left transition ${
                                isSelected
                                  ? 'bg-cyan-950/80 border-cyan-500 text-cyan-200 font-semibold'
                                  : 'bg-zinc-900/60 border-zinc-800 text-zinc-300 hover:bg-zinc-800'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[9px] ${
                                  isSelected ? 'border-cyan-400 bg-cyan-500 text-zinc-950 font-bold' : 'border-zinc-600'
                                }`}>
                                  {isSelected ? '✓' : ''}
                                </span>
                                {opt.label}
                              </span>
                              <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                                opt.score >= 4 ? 'bg-rose-950 text-rose-300' : 'bg-zinc-800 text-zinc-400'
                              }`}>
                                Score: {opt.score}
                              </span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Qualitative Notes for this question */}
                      <div>
                        <input
                          type="text"
                          placeholder="Optional justification or qualitative context for this answer..."
                          value={currentAns?.qualitativeNotes || ''}
                          onChange={e => handleNoteChange(q.id, e.target.value)}
                          className="w-full bg-zinc-900 border border-zinc-800/80 rounded-md px-3 py-1.5 text-xs text-zinc-300 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {/* STEP: NHS Principles Compliance Checklist */}
        {activeSectionId === 'section_nhs' && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 space-y-6 text-zinc-200 shadow-sm">
            <h2 className="text-base font-bold text-white border-b border-zinc-800 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              NHS & GDPR Data Protection Principles Checklist
            </h2>

            <div className="space-y-3 text-xs">
              {[
                { key: 'fairLawfulProcessing', title: '1. Fair & Lawful Processing' },
                { key: 'purposeLimitation', title: '2. Purpose Limitation' },
                { key: 'dataMinimization', title: '3. Data Minimization' },
                { key: 'accuracy', title: '4. Data Accuracy' },
                { key: 'retention', title: '5. Storage & Retention Limitation' },
                { key: 'rightsOfIndividuals', title: '6. Rights of Individuals' },
                { key: 'security', title: '7. Integrity & Confidentiality (Security)' },
                { key: 'internationalTransfers', title: '8. International Data Transfers' },
              ].map(principle => (
                <div key={principle.key} className="flex items-center justify-between p-3.5 bg-zinc-950 rounded-xl border border-zinc-800">
                  <span className="font-semibold text-zinc-200">{principle.title}</span>
                  <div className="flex space-x-2">
                    {(['Compliant', 'Issues', 'Not Evaluated'] as const).map(st => (
                      <button
                        key={st}
                        type="button"
                        onClick={() =>
                          setNhsChecklist(prev => ({
                            ...prev,
                            [principle.key]: st,
                          }))
                        }
                        className={`px-2.5 py-1 rounded text-xs font-semibold transition ${
                          (nhsChecklist as any)[principle.key] === st
                            ? st === 'Compliant'
                              ? 'bg-emerald-600 text-white font-bold'
                              : st === 'Issues'
                              ? 'bg-rose-600 text-white font-bold'
                              : 'bg-zinc-700 text-white font-bold'
                            : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200'
                        }`}
                      >
                        {st}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Dynamic Real-time Risk Calculation Sidebar */}
      <div className="lg:col-span-4 space-y-6">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-xl space-y-5 text-zinc-200 sticky top-20">
          <div className="border-b border-zinc-800 pb-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              Live Risk Calculation
            </h3>
            <p className="text-[11px] text-zinc-400 mt-0.5">Calculated based on IIAC / NHS step 1-4 methodology.</p>
          </div>

          {/* Final Score Gauge Box */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 text-center space-y-2">
            <div className="text-xs uppercase font-bold text-zinc-400">Final PIA Risk Score</div>
            <div className="text-3xl font-mono font-black text-white">
              {calculatedRisk.finalRiskScore} <span className="text-xs font-normal text-zinc-500">/ 25.0</span>
            </div>
            <div className={`inline-block px-3 py-1 rounded-full text-xs uppercase tracking-widest ${getRiskBadge(calculatedRisk.riskLevel)}`}>
              {calculatedRisk.riskLevel} Risk
            </div>
            <p className="text-[11px] text-zinc-300 bg-zinc-900/80 p-2.5 rounded-lg border border-zinc-800 font-medium leading-relaxed">
              Action Required: {calculatedRisk.requiredAction}
            </p>
          </div>

          {/* Breakdown Scores */}
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center py-1 border-b border-zinc-800">
              <span className="text-zinc-400">Impact Score (I):</span>
              <span className="font-mono font-bold text-zinc-200">{calculatedRisk.impactScore} / 5.0</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-zinc-800">
              <span className="text-zinc-400">Likelihood Score (L):</span>
              <span className="font-mono font-bold text-zinc-200">{calculatedRisk.likelihoodScore} / 5.0</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-zinc-800">
              <span className="text-zinc-400">Base Risk (I × L):</span>
              <span className="font-mono font-bold text-zinc-200">{calculatedRisk.baseRiskScore}</span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-zinc-400">Applied Risk Multipliers:</span>
              <span className="font-mono font-bold text-cyan-400">×{calculatedRisk.appliedModifiers.totalMultiplier}</span>
            </div>
          </div>

          {/* Applied Modifiers Detail */}
          <div className="bg-zinc-950/60 p-3 rounded-lg border border-zinc-800/60 text-[11px] space-y-1">
            <div className="font-semibold text-zinc-300">Active Risk Modifiers:</div>
            {calculatedRisk.appliedModifiers.vendorMultiplier > 1 && (
              <div className="text-amber-400">⚡ Vendor Engagement (×1.3)</div>
            )}
            {calculatedRisk.appliedModifiers.aiMultiplier > 1 && (
              <div className="text-amber-400">⚡ AI / Machine Learning Case (×1.4)</div>
            )}
            {calculatedRisk.appliedModifiers.crossBorderMultiplier > 1 && (
              <div className="text-amber-400">⚡ Cross-Border Data Flow (×1.2)</div>
            )}
            {calculatedRisk.appliedModifiers.specialCategoryMultiplier > 1 && (
              <div className="text-amber-400">⚡ Special Category Data (×1.3)</div>
            )}
            {calculatedRisk.appliedModifiers.noLawfulBasisMultiplier > 1 && (
              <div className="text-rose-400 font-bold">⚠️ No Lawful Basis Identified (×1.5)</div>
            )}
            {calculatedRisk.appliedModifiers.lawfulBasisRightsMultiplier > 1 && (
              <div className="text-amber-400 font-semibold">
                🛡️ ICO Individual Rights Penalty (×{calculatedRisk.appliedModifiers.lawfulBasisRightsMultiplier})
              </div>
            )}
            {calculatedRisk.appliedModifiers.totalMultiplier === 1 && (
              <div className="text-zinc-500 italic">No risk multipliers triggered.</div>
            )}
          </div>

          {/* Section Risk Profiles */}
          <div className="space-y-1.5 text-xs">
            <div className="font-semibold text-zinc-300 mb-1">Section Risk Profiles:</div>
            {Object.entries(calculatedRisk.sectionRiskProfiles).map(([key, val]) => (
              <div key={key} className="space-y-0.5">
                <div className="flex justify-between text-[11px] text-zinc-400 capitalize">
                  <span>{key.replace('Risk', '')}:</span>
                  <span className="font-mono text-zinc-200">{val}</span>
                </div>
                <div className="w-full bg-zinc-950 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${val >= 4 ? 'bg-rose-500' : val >= 2.5 ? 'bg-amber-500' : 'bg-emerald-500'}`}
                    style={{ width: `${(val / 5) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons & Export Action */}
          <div className="pt-2 space-y-2.5">
            <div className="w-full">
              <ExportButtonDropdown pia={activePiaForExport} variant="primary" className="w-full" />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                id="btn-save-draft"
                type="button"
                onClick={() => handleSubmit('Draft')}
                className="inline-flex items-center justify-center px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-lg border border-zinc-700 transition"
              >
                <Save className="w-3.5 h-3.5 mr-1" />
                Save Draft
              </button>

              <button
                id="btn-submit-pia"
                type="button"
                onClick={() => handleSubmit('Submitted')}
                className="inline-flex items-center justify-center px-3 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg transition"
              >
                <Send className="w-3.5 h-3.5 mr-1" />
                Submit PIA
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Provenance Viewer Modal */}
      {(currentPiaState || initialPia) && showProvModal && (
        <ProvenanceViewerModal
          pia={(currentPiaState || initialPia)!}
          isOpen={showProvModal}
          onClose={() => setShowProvModal(false)}
        />
      )}
    </div>
  );
};
