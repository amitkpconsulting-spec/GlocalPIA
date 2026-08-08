import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Sliders, 
  Building, 
  User, 
  Mail, 
  Globe, 
  Shield, 
  CheckCircle2, 
  Save, 
  Info, 
  AlertCircle,
  Landmark,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  Truck,
  Sprout,
  FlaskConical,
  Cpu,
  RefreshCw,
  FileText,
  ArrowRight,
  Calculator,
  Bot,
  Zap,
  AlertTriangle,
  Table
} from 'lucide-react';
import { SystemSetupConfig, IndustrySectorId, TargetRegulatoryFramework, PIAAssessment } from '../types';
import { INDUSTRY_SECTOR_PROFILES, SECTOR_SPECIFIC_QUESTIONS } from '../data/industrySectors';
import { generateFID, generateBID } from '../utils/provenanceUtils';
import { RCSAAssistantWidget } from './RCSAAssistantWidget';

interface SetupPageProps {
  currentSetup: SystemSetupConfig;
  onSaveSetup: (updatedSetup: SystemSetupConfig) => void;
  onSavePia?: (piaDraft: Partial<PIAAssessment>) => void;
  onNavigateToForm?: () => void;
  onNavigateToDirectory?: () => void;
}

export const SetupPage: React.FC<SetupPageProps> = ({
  currentSetup,
  onSaveSetup,
  onSavePia,
  onNavigateToForm,
  onNavigateToDirectory,
}) => {
  // Setup Form State
  const [orgName, setOrgName] = useState(currentSetup.organizationName || 'Enterprise Governance & Healthcare Trust');
  const [contactName, setContactName] = useState(currentSetup.dataProtectionContact || 'Amit Kumar Pandey');
  const [contactEmail, setContactEmail] = useState(currentSetup.dpoEmail || 'dpo.lead@enterprise-governance.org');
  const [department, setDepartment] = useState(currentSetup.defaultDepartment || 'Data Protection & Compliance Office');
  
  // Sector & Regulatory Rules Engine State
  const [selectedSector, setSelectedSector] = useState<IndustrySectorId>(currentSetup.industrySector || 'banking');
  const [selectedFramework, setSelectedFramework] = useState<TargetRegulatoryFramework>(
    currentSetup.primaryRegulatoryFramework || 'UK GDPR & DPA 2018'
  );

  // User FID and BID Identification State
  const [fidPrefix, setFidPrefix] = useState(currentSetup.fidPrefix || 'PIA-FE-2026-');
  const [fidOffset, setFidOffset] = useState(currentSetup.fidOffset || 100);
  const [bidPrefix, setBidPrefix] = useState(currentSetup.bidPrefix || 'PIA-BE-UK-2026-');
  const [bidOffset, setBidOffset] = useState(currentSetup.bidOffset || 412);
  const [auditorName, setAuditorName] = useState(currentSetup.defaultAuditorName || 'Amit Kumar Pandey (DPO)');
  const [auditorRole, setAuditorRole] = useState(currentSetup.defaultAuditorRole || 'Lead Privacy Auditor & DPO');

  // Preview State
  const [sampleFid, setSampleFid] = useState('');
  const [sampleBid, setSampleBid] = useState('');
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Regenerate ID previews when inputs change
  useEffect(() => {
    setSampleFid(generateFID(fidPrefix));
    setSampleBid(generateBID(bidPrefix, bidOffset));
  }, [fidPrefix, bidPrefix, bidOffset]);

  const activeSectorProfile = INDUSTRY_SECTOR_PROFILES[selectedSector];
  const sectorQuestions = SECTOR_SPECIFIC_QUESTIONS[selectedSector] || [];

  const getSectorIcon = (id: IndustrySectorId, className: string = 'w-5 h-5') => {
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

  const handleSave = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    const updatedConfig: SystemSetupConfig = {
      organizationName: orgName,
      dataProtectionContact: contactName,
      dpoEmail: contactEmail,
      defaultDepartment: department,
      industrySector: selectedSector,
      primaryRegulatoryFramework: selectedFramework,
      fidPrefix: fidPrefix.trim() || 'PIA-FE-2026-',
      fidOffset: Number(fidOffset) || 100,
      bidPrefix: bidPrefix.trim() || 'PIA-BE-UK-2026-',
      bidOffset: Number(bidOffset) || 412,
      defaultAuditorName: auditorName,
      defaultAuditorRole: auditorRole,
      isSetupComplete: true,
      lastUpdated: new Date().toISOString(),
    };

    try {
      // Save to backend REST API
      const res = await fetch('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ systemSetup: updatedConfig }),
      });

      if (!res.ok) {
        console.warn('Backend API config update returned non-200, saving locally.');
      }
    } catch (err) {
      console.warn('Error saving setup to backend, applying local update:', err);
    } finally {
      onSaveSetup(updatedConfig);
      setIsSaving(false);
      setSaveSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div id="system-setup-page" className="space-y-8 animate-fade-in pb-12">
      {/* Top Banner & Context Header */}
      <div className="bg-gradient-to-r from-zinc-900 via-zinc-900 to-cyan-950/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 rounded-full text-xs font-mono font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>System Initialization & Configuration Engine</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              One-Time System Setup & Rules Engine
            </h1>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              Configure your organization context, select your primary Industry Sector & Regulatory Framework, and define custom Frontend (FID) & Backend (BID) identifier prefixes. Your selections dynamically calibrate the Assessment Questionnaire, risk calculation multipliers, and required compliance controls.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold text-sm shadow-lg shadow-cyan-950/60 transition active:scale-[0.98] disabled:opacity-50"
            >
              {isSaving ? (
                <>
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                  Applying Setup...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save & Apply Setup
                </>
              )}
            </button>
          </div>
        </div>

        {/* Success Banner */}
        {saveSuccess && (
          <div className="mt-6 p-4 bg-emerald-950/90 border border-emerald-500/60 rounded-xl text-emerald-200 text-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg animate-fade-in">
            <div className="flex items-center space-x-3">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <div>
                <span className="font-bold text-white">System Setup Saved & Calibrated!</span>
                <p className="text-xs text-emerald-300/90 mt-0.5">
                  Questionnaire & Rules Engine updated for <strong className="text-white">{activeSectorProfile.name}</strong> under <strong className="text-white">{selectedFramework}</strong>.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              {onNavigateToForm && (
                <button
                  onClick={onNavigateToForm}
                  className="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs rounded-lg transition flex items-center gap-1"
                >
                  <span>Launch Questionnaire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}
              {onNavigateToDirectory && (
                <button
                  onClick={onNavigateToDirectory}
                  className="px-3 py-1.5 bg-emerald-900/80 hover:bg-emerald-800 text-emerald-100 font-semibold text-xs rounded-lg transition"
                >
                  View Directory
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* 3 Core Architecture Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-5 space-y-2">
          <div className="flex items-center space-x-2 text-cyan-400 font-bold text-xs font-mono uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>Zero-Cloud Air-Gapped</span>
          </div>
          <h3 className="text-base font-bold text-white">100% Offline Processing</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            All assessment data, risk formulas, and AI audit recommendations run locally on your host machine without external API dependencies or cloud leakage.
          </p>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-5 space-y-2">
          <div className="flex items-center space-x-2 text-purple-400 font-bold text-xs font-mono uppercase tracking-wider">
            <Sliders className="w-4 h-4" />
            <span>Dynamic Calibration</span>
          </div>
          <h3 className="text-base font-bold text-white">Sector & Rules Engine</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Selecting your industry sector dynamically adjusts questionnaire questions, injects sector-specific controls, and tunes risk multiplier weights.
          </p>
        </div>

        <div className="bg-zinc-900/90 border border-zinc-800 rounded-xl p-5 space-y-2">
          <div className="flex items-center space-x-2 text-emerald-400 font-bold text-xs font-mono uppercase tracking-wider">
            <Globe className="w-4 h-4" />
            <span>Dual-ID Lineage</span>
          </div>
          <h3 className="text-base font-bold text-white">Users FID & BID Setup</h3>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Configures your Frontend Server ID (<strong className="text-zinc-200">FID</strong>) draft format and Backend Audit ID (<strong className="text-zinc-200">BID</strong>) DPO sign-off audit sequence.
          </p>
        </div>
      </div>

      <form onSubmit={handleSave} className="space-y-8">
        {/* PANEL 1: Organization & Context Setup */}
        <section className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-950 rounded-xl border border-blue-800 text-blue-400">
                <Building className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">
                  1. Organization & System Context Setup
                </h2>
                <p className="text-xs text-zinc-400">
                  Default departmental details applied across new assessments and audit reports.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-zinc-500 bg-zinc-950 px-2.5 py-1 rounded-md border border-zinc-800">
              Context Defaults
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                <Building className="w-3.5 h-3.5 text-cyan-400" />
                <span>Organization / Trust Name</span>
              </label>
              <input
                type="text"
                value={orgName}
                onChange={e => setOrgName(e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                placeholder="e.g. Enterprise Governance & Healthcare Trust"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>Default Department / Division</span>
              </label>
              <input
                type="text"
                value={department}
                onChange={e => setDepartment(e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                placeholder="e.g. Data Protection & Compliance Office"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-cyan-400" />
                <span>Data Protection Officer / Lead Auditor</span>
              </label>
              <input
                type="text"
                value={contactName}
                onChange={e => setContactName(e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                placeholder="e.g. Amit Kumar Pandey"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>DPO Contact Email</span>
              </label>
              <input
                type="email"
                value={contactEmail}
                onChange={e => setContactEmail(e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition"
                placeholder="e.g. dpo.lead@enterprise-governance.org"
              />
            </div>
          </div>
        </section>

        {/* PANEL 2: Industry Sector & Regulatory Rules Engine Setup */}
        <section className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800 gap-2">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-purple-950 rounded-xl border border-purple-800 text-purple-400">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">
                  2. Industry Sector & Regulatory Rules Engine Setup
                </h2>
                <p className="text-xs text-zinc-400">
                  Select your primary sector and target regulatory rules framework. Questionnaire & risk engine will be calibrated accordingly.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950 px-2.5 py-1 rounded-md border border-cyan-800 self-start sm:self-auto">
              One-Time Rules Calibration
            </span>
          </div>

          {/* 7 Industry Sectors Grid */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              <span>Select Target Industry Sector (Required)</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
              {(Object.values(INDUSTRY_SECTOR_PROFILES)).map((sector) => {
                const isSelected = selectedSector === sector.id;
                return (
                  <div
                    key={sector.id}
                    onClick={() => setSelectedSector(sector.id)}
                    className={`p-4 rounded-xl border cursor-pointer transition flex flex-col justify-between relative ${
                      isSelected
                        ? 'bg-gradient-to-b from-zinc-800 to-zinc-900 border-cyan-400 ring-2 ring-cyan-500/30 shadow-lg'
                        : 'bg-zinc-950/80 border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 text-cyan-400">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}

                    <div>
                      <div className="flex items-center space-x-2.5 mb-2">
                        <div className={`p-2 rounded-lg border ${sector.badgeColor}`}>
                          {getSectorIcon(sector.id)}
                        </div>
                        <span className="font-bold text-sm text-white leading-tight">
                          {sector.shortName}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-400 line-clamp-2 leading-relaxed mb-3">
                        {sector.context}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono">
                      <span className="text-zinc-500">Base Weight:</span>
                      <span className="text-cyan-300 font-bold">{sector.id === 'healthcare' ? 'Base 5.0 Force' : sector.id === 'banking' ? '+30% AI Mult' : 'Standard'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Target Regulatory Framework Selector */}
          <div className="pt-4 border-t border-zinc-800">
            <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Primary Target Regulatory Framework</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { name: 'UK GDPR & DPA 2018', desc: 'UK Information Commissioner Office (ICO) & Data Protection Act standards' },
                { name: 'EU GDPR & EU AI Act', desc: 'European Data Protection Board (EDPB) & High-Risk AI System conformity' },
                { name: 'DPDP Act 2023 (India)', desc: 'Digital Personal Data Protection Act compliance & Consent Manager rules' },
                { name: 'US CCPA/CPRA & State Laws', desc: 'California Consumer Privacy Act, VCDPA, and US state privacy mandates' },
                { name: 'ISO/IEC 42001 (AI Management)', desc: 'Artificial Intelligence Management System (AIMS) governance controls' },
                { name: 'NIST AI RMF 1.0', desc: 'NIST Artificial Intelligence Risk Management Framework mapping' },
              ].map((fw) => {
                const isSelected = selectedFramework === fw.name;
                return (
                  <div
                    key={fw.name}
                    onClick={() => setSelectedFramework(fw.name as TargetRegulatoryFramework)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition ${
                      isSelected
                        ? 'bg-cyan-950/70 border-cyan-400 text-white ring-1 ring-cyan-500/50'
                        : 'bg-zinc-950 border-zinc-800 text-zinc-300 hover:border-zinc-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">{fw.name}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />}
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-normal">
                      {fw.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Live Dynamic Calibration Preview */}
          <div className="p-4 bg-zinc-950 rounded-xl border border-cyan-900/60 space-y-3">
            <div className="flex items-center justify-between text-xs font-mono font-bold text-cyan-300">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>DYNAMIC RULES ENGINE CALIBRATION PREVIEW</span>
              </div>
              <span className="px-2 py-0.5 bg-cyan-950 border border-cyan-800 rounded text-[10px]">
                {activeSectorProfile.name}
              </span>
            </div>

            <div className="text-xs text-zinc-300 space-y-2">
              <p>
                <strong className="text-white">Active Sector Rules:</strong> {activeSectorProfile.baseRiskWeightingNote}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] font-mono text-zinc-400 pt-2 border-t border-zinc-800">
                <div>
                  <span className="text-cyan-400 font-bold block mb-1">Dynamic Sector Questions Added:</span>
                  <ul className="list-disc list-inside space-y-0.5">
                    {sectorQuestions.slice(0, 3).map(q => (
                      <li key={q.id} className="truncate" title={q.title}>{q.title}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="text-purple-400 font-bold block mb-1">Target Framework Alignment:</span>
                  <div className="flex flex-wrap gap-1">
                    {activeSectorProfile.regulatoryAlignment.map(reg => (
                      <span key={reg} className="px-1.5 py-0.5 bg-zinc-900 text-zinc-300 rounded border border-zinc-800 text-[10px]">
                        {reg}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PANEL 3: Users FID & BID Identification Setup */}
        <section className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-emerald-950 rounded-xl border border-emerald-800 text-emerald-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">
                  3. Users FID & BID Identification Setup
                </h2>
                <p className="text-xs text-zinc-400">
                  Define Frontend Server ID (FID) draft prefixes and Backend Audit ID (BID) regulatory tracking sequences.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded-md border border-emerald-800">
              Audit Lineage Setup
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FID Configuration Card */}
            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="font-bold text-sm text-white">Frontend Server ID (FID) Setup</span>
                </div>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-950 px-2 py-0.5 rounded border border-blue-900">
                  Frontend Draft Key
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                  FID Prefix Format
                </label>
                <input
                  type="text"
                  value={fidPrefix}
                  onChange={e => setFidPrefix(e.target.value)}
                  required
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm font-mono text-blue-300 focus:outline-none focus:border-blue-500"
                  placeholder="e.g. PIA-FE-2026- or PIA-FE-FIN-"
                />
                <p className="text-[11px] text-zinc-500 mt-1">
                  Prefix applied when a contributor creates a new PIA draft in the frontend.
                </p>
              </div>

              <div className="p-3 bg-zinc-900/80 rounded-lg border border-zinc-800 text-xs font-mono space-y-1">
                <span className="text-zinc-500 text-[10px] uppercase font-bold block">Live FID Preview:</span>
                <span className="text-blue-300 font-bold">{sampleFid}</span>
              </div>
            </div>

            {/* BID Configuration Card */}
            <div className="p-5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                  <span className="font-bold text-sm text-white">Backend Audit ID (BID) Setup</span>
                </div>
                <span className="text-[10px] font-mono text-purple-400 bg-purple-950 px-2 py-0.5 rounded border border-purple-900">
                  DPO Audit Key
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    BID Prefix Format
                  </label>
                  <input
                    type="text"
                    value={bidPrefix}
                    onChange={e => setBidPrefix(e.target.value)}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm font-mono text-purple-300 focus:outline-none focus:border-purple-500"
                    placeholder="e.g. PIA-BE-UK-2026-"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">
                    Sequence Counter
                  </label>
                  <input
                    type="number"
                    value={bidOffset}
                    onChange={e => setBidOffset(Number(e.target.value))}
                    required
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-purple-500"
                  />
                </div>
              </div>

              <div className="p-3 bg-zinc-900/80 rounded-lg border border-zinc-800 text-xs font-mono space-y-1">
                <span className="text-zinc-500 text-[10px] uppercase font-bold block">Live BID Preview:</span>
                <span className="text-purple-300 font-bold">{sampleBid}</span>
              </div>
            </div>
          </div>

          {/* Lead Auditor Signature Credentials */}
          <div className="pt-4 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-purple-400" />
                <span>Lead DPO Auditor Name</span>
              </label>
              <input
                type="text"
                value={auditorName}
                onChange={e => setAuditorName(e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-300 mb-1.5 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                <span>Auditor Official Role / Designation</span>
              </label>
              <input
                type="text"
                value={auditorRole}
                onChange={e => setAuditorRole(e.target.value)}
                required
                className="w-full bg-zinc-950 border border-zinc-700/80 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-purple-500 transition"
              />
            </div>
          </div>
        </section>

        {/* PANEL 4: Embedded RCSA Privacy Impact Assistant & Risk Matrix Engine */}
        <section className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-zinc-800 gap-2">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-cyan-950 rounded-xl border border-cyan-800 text-cyan-400">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white">
                  4. Embedded RCSA Privacy Impact Assistant & Risk Matrix Engine
                </h2>
                <p className="text-xs text-zinc-400">
                  Standardized RCSA Taxonomy, Mathematical Risk Engine formulas, and interactive Privacy Control Calibration.
                </p>
              </div>
            </div>
            <span className="text-[11px] font-mono text-cyan-300 bg-cyan-950 px-2.5 py-1 rounded-md border border-cyan-800 self-start sm:self-auto">
              Embedded Rules Engine
            </span>
          </div>

          {/* Subsection A: RCSA Taxonomy Table */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
              <Table className="w-4 h-4" />
              <span>Standardized RCSA Baseline Taxonomy Matrix</span>
            </div>

            <div className="overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-950">
              <table className="w-full text-left text-xs">
                <thead className="bg-zinc-900 text-zinc-400 font-mono text-[11px] uppercase border-b border-zinc-800">
                  <tr>
                    <th className="p-3">Initiative Scope</th>
                    <th className="p-3">RCSA Definition</th>
                    <th className="p-3 text-center">Base Inherent Score</th>
                    <th className="p-3 text-center">Inherent Rating</th>
                    <th className="p-3">Primary Threat Drivers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80 text-zinc-300">
                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white whitespace-nowrap">Proof of Concept (PoC)</td>
                    <td className="p-3 text-zinc-400">Sandbox feasibility demonstration using synthetic/dummy data.</td>
                    <td className="p-3 text-center font-mono font-bold text-emerald-400">2 / 5</td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                        Low
                      </span>
                    </td>
                    <td className="p-3 text-zinc-400 text-[11px]">Sanitized dummy data verification, air-gapped sandbox network isolation.</td>
                  </tr>

                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white whitespace-nowrap">Project</td>
                    <td className="p-3 text-zinc-400">Temporary endeavor creating a unique product, service, or operational change.</td>
                    <td className="p-3 text-center font-mono font-bold text-yellow-400">3 / 5</td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-yellow-950 text-yellow-400 border border-yellow-800">
                        Medium
                      </span>
                    </td>
                    <td className="p-3 text-zinc-400 text-[11px]">Third-party vendor access, cross-border transfers, employee RBAC, retention schedules.</td>
                  </tr>

                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white whitespace-nowrap">Process</td>
                    <td className="p-3 text-zinc-400">Structured set of activities producing recurring business outputs.</td>
                    <td className="p-3 text-center font-mono font-bold text-yellow-400">3 / 5</td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-yellow-950 text-yellow-400 border border-yellow-800">
                        Medium
                      </span>
                    </td>
                    <td className="p-3 text-zinc-400 text-[11px]">Outsourced processing steps, operational privileges, DPA deeds, RoPA logs.</td>
                  </tr>

                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white whitespace-nowrap">Application (App)</td>
                    <td className="p-3 text-zinc-400">Software application/platform handling user data, APIs, and authentication.</td>
                    <td className="p-3 text-center font-mono font-bold text-orange-400">4 / 5</td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-orange-950 text-orange-400 border border-orange-800">
                        High
                      </span>
                    </td>
                    <td className="p-3 text-zinc-400 text-[11px]">User consent mechanisms, API sharing, AES-256 / TLS 1.3 encryption, MFA/SSO protocols.</td>
                  </tr>

                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white whitespace-nowrap">Pilot</td>
                    <td className="p-3 text-zinc-400">Small-scale live implementation testing viability with real user data.</td>
                    <td className="p-3 text-center font-mono font-bold text-orange-400">4 / 5</td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-orange-950 text-orange-400 border border-orange-800">
                        High
                      </span>
                    </td>
                    <td className="p-3 text-zinc-400 text-[11px]">Live PII exposure scale, participant opt-in consent, rollback kill-switches.</td>
                  </tr>

                  <tr className="hover:bg-zinc-900/40">
                    <td className="p-3 font-bold text-white whitespace-nowrap">AI Initiative</td>
                    <td className="p-3 text-zinc-400">Systems utilizing ML, GenAI, or algorithmic decision-making logic.</td>
                    <td className="p-3 text-center font-mono font-bold text-rose-400">5 / 5</td>
                    <td className="p-3 text-center">
                      <span className="px-2 py-0.5 text-[10px] font-mono font-bold rounded bg-rose-950 text-rose-400 border border-rose-800">
                        Critical
                      </span>
                    </td>
                    <td className="p-3 text-zinc-400 text-[11px]">Model training data PII, automated profiling, vector DB retention, ISO 42001/NIST AI RMF.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Subsection B: Mathematical Calculation Formulas */}
          <div className="p-4 bg-zinc-950 rounded-xl border border-zinc-800 space-y-3">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
              <Calculator className="w-4 h-4" />
              <span>Mathematical Risk Engine Calculation Formulas</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 space-y-1">
                <span className="text-zinc-500 text-[10px] font-bold block uppercase">Inherent Risk Formula:</span>
                <p className="text-cyan-300 font-bold">
                  Inherent Score (1–25) = Base Score (1–5)² × Sector Multiplier
                </p>
                <p className="text-[11px] text-zinc-400 font-sans mt-1">
                  Evaluates base scope complexity multiplied by active sector sensitivity (Healthcare 1.5x, Banking 1.4x, SaaS 1.3x).
                </p>
              </div>

              <div className="p-3 bg-zinc-900 rounded-lg border border-zinc-800 space-y-1">
                <span className="text-zinc-500 text-[10px] font-bold block uppercase">Residual Risk Formula:</span>
                <p className="text-purple-300 font-bold">
                  Residual Risk (1–25) = Inherent Score × (1 - Control Factor)
                </p>
                <p className="text-[11px] text-zinc-400 font-sans mt-1">
                  Adjusts inherent rating by verified technical controls: Strong (0.6 / 60%), Moderate (0.3 / 30%), Weak (0.0 / 0%).
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-2 text-[10px] font-mono">
              <span className="text-zinc-400 font-bold">Residual Rating Thresholds:</span>
              <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 font-bold">1–5: 🟢 Low</span>
              <span className="px-2 py-0.5 rounded bg-yellow-950 text-yellow-400 border border-yellow-800 font-bold">6–11: 🟡 Medium</span>
              <span className="px-2 py-0.5 rounded bg-orange-950 text-orange-400 border border-orange-800 font-bold">12–19: 🟠 High</span>
              <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-400 border border-rose-800 font-bold">20–25: 🔴 Critical</span>
            </div>
          </div>

          {/* Subsection C: Interactive RCSA Workspace */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center space-x-2 text-xs font-mono font-bold text-cyan-300 uppercase tracking-wider">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Interactive RCSA Privacy Control Calibration Workspace</span>
            </div>

            <RCSAAssistantWidget
              onConvertToPIA={onSavePia}
              systemSetup={currentSetup}
            />
          </div>
        </section>

        {/* Bottom CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl">
          <div className="flex items-center space-x-3 text-xs text-zinc-400">
            <Info className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>
              Saving setup applies configuration across all newly created and existing assessments in local storage.
            </span>
          </div>

          <button
            type="submit"
            disabled={isSaving}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-extrabold text-sm shadow-xl shadow-cyan-950/80 transition active:scale-[0.98] flex items-center justify-center gap-2 shrink-0 disabled:opacity-50"
          >
            {isSaving ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Applying Setup...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>Save & Apply One-Time Setup</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};
