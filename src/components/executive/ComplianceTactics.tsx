import React, { useState, useMemo } from 'react';
import {
  ShieldCheck,
  Cpu,
  Lock,
  Clock,
  Globe,
  Users,
  AlertOctagon,
  CheckCircle2,
  Sliders,
  Sparkles,
  ArrowRight,
  FileText,
  Search,
  Layers,
  Award,
  ExternalLink
} from 'lucide-react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  Legend as RechartsLegend,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from 'recharts';
import { PIAAssessment } from '../../types';

interface ComplianceTacticsProps {
  pias: PIAAssessment[];
  onSelectPia?: (pia: PIAAssessment) => void;
}

export interface ComplianceTactic {
  id: string;
  name: string;
  category: 'AI_GOVERNANCE' | 'CRYPTOGRAPHY' | 'DATA_MINIMIZATION' | 'CROSS_BORDER' | 'CONSENT' | 'VENDOR' | 'TEST_ISOLATION' | 'INCIDENT_RESPONSE';
  categoryLabel: string;
  frameworkMandate: string;
  statutoryArticle: string;
  icon: any;
  status: 'FULLY_ENFORCED' | 'ACTIVE_ROLLOUT' | 'AUDIT_STAGE';
  adoptionRate: number; // percentage e.g. 92
  riskReductionDelta: number; // percentage reduction e.g. -46%
  effectivenessScore: number; // e.g. 94/100
  summary: string;
  technicalMechanisms: string[];
  operationalBenefits: string;
  applicablePiasCount: number;
}

const TACTICS_CATALOG: ComplianceTactic[] = [
  {
    id: 'tac-hitl',
    name: 'Algorithmic Transparency & Human-In-The-Loop (HITL)',
    category: 'AI_GOVERNANCE',
    categoryLabel: 'AI & Algorithmic Controls',
    frameworkMandate: 'EU AI Act & ISO/IEC 42001',
    statutoryArticle: 'EU AI Act Art 14 & Art 26',
    icon: Cpu,
    status: 'FULLY_ENFORCED',
    adoptionRate: 94,
    riskReductionDelta: 48,
    effectivenessScore: 96,
    summary: 'Enforces dual-analyst override capabilities, model card metadata registry, and continuous algorithmic drift telemetry across credit scoring and biometric engines.',
    technicalMechanisms: [
      'Dual-key authorization for automated credit/loan decisions exceeding threshold',
      'Real-time feature attribution and SHAP value explainability dashboards',
      'Instantaneous algorithmic kill-switch disabling automated model execution'
    ],
    operationalBenefits: 'Completely eliminates unmonitored automated legal effects, guaranteeing full compliance with Art 22 GDPR.',
    applicablePiasCount: 14,
  },
  {
    id: 'tac-crypto',
    name: 'End-to-End Cryptographic Tokenization & Field Masking',
    category: 'CRYPTOGRAPHY',
    categoryLabel: 'Data Security & Cryptography',
    frameworkMandate: 'UK GDPR / PCI-DSS v4.0',
    statutoryArticle: 'GDPR Art 32(1)(a) & PCI Req 3.4',
    icon: Lock,
    status: 'FULLY_ENFORCED',
    adoptionRate: 98,
    riskReductionDelta: 52,
    effectivenessScore: 98,
    summary: 'Substitutes raw national identifiers, PAN cardholder data, and bank account numbers with irreversible FPE (Format-Preserving Encryption) tokens backed by HSMs.',
    technicalMechanisms: [
      'Hardware Security Module (HSM) FIPS 140-2 Level 3 root key management',
      'Format-Preserving Encryption (FPE) for database searchability without exposure',
      'Ephemeral dynamic masking on user-facing frontend client portals'
    ],
    operationalBenefits: 'Reduces blast radius of insider breaches or query exfiltration to near-zero usable data.',
    applicablePiasCount: 28,
  },
  {
    id: 'tac-retention',
    name: 'Purpose Limitation & Automated Retention TTL Purging',
    category: 'DATA_MINIMIZATION',
    categoryLabel: 'Data Minimization',
    frameworkMandate: 'GDPR & ICO Principle 3 & 5',
    statutoryArticle: 'GDPR Art 5(1)(c) & 5(1)(e)',
    icon: Clock,
    status: 'ACTIVE_ROLLOUT',
    adoptionRate: 86,
    riskReductionDelta: 38,
    effectivenessScore: 89,
    summary: 'Automated policy-driven data purging routines that continuously delete or aggregate transactional records immediately after statutory limitation periods expire.',
    technicalMechanisms: [
      'Automated 7-year statutory financial limitation purge daemon',
      'Pre-contractual prospective customer TTL deletion after 90 days',
      'Cryptographic erasure certificate emission to audit log'
    ],
    operationalBenefits: 'Ensures enterprise storage compliance and blocks discovery exposure during civil litigation.',
    applicablePiasCount: 22,
  },
  {
    id: 'tac-sovereign',
    name: 'Sovereign Cloud Enclaves & Transfer Impact Attestations',
    category: 'CROSS_BORDER',
    categoryLabel: 'Cross-Border Governance',
    frameworkMandate: 'Schrems II & EDPB 01/2020',
    statutoryArticle: 'GDPR Chapter V & DPDP Act 2023',
    icon: Globe,
    status: 'FULLY_ENFORCED',
    adoptionRate: 92,
    riskReductionDelta: 44,
    effectivenessScore: 93,
    summary: 'Standard Contractual Clauses (SCCs) coupled with supplementary technical controls, customer-managed encryption keys (CMEK), and localized EU/UK region geofencing.',
    technicalMechanisms: [
      'Customer Managed Encryption Keys (CMEK) preventing cloud provider subpoena access',
      'Geofenced egress filters restricting outbound API packets to authorized jurisdictions',
      'Quarterly statutory Transfer Impact Assessment (TIA) review schedule'
    ],
    operationalBenefits: 'Prevents cross-border regulatory enforcement injunctions for international correspondent banking.',
    applicablePiasCount: 19,
  },
  {
    id: 'tac-consent',
    name: 'Dynamic Consent Orchestration & Real-Time Revocation',
    category: 'CONSENT',
    categoryLabel: 'Consent & Rights Management',
    frameworkMandate: 'DPDP Act 2023 & GDPR Art 7',
    statutoryArticle: 'DPDP Act Sec 6 & GDPR Art 7(3)',
    icon: ShieldCheck,
    status: 'ACTIVE_ROLLOUT',
    adoptionRate: 88,
    riskReductionDelta: 40,
    effectivenessScore: 90,
    summary: 'Real-time pub-sub event bus broadcasting customer consent revocations downstream to data lakes, CRM platforms, and ML training pipelines within 120 seconds.',
    technicalMechanisms: [
      'Kafka-based real-time consent state propagation bus',
      'Granular multi-purpose consent toggles (Marketing, Analytics, AI Profiling)',
      'Automated Right to Erasure / DSAR orchestration pipeline'
    ],
    operationalBenefits: 'Guarantees sub-minute adherence to user opt-outs and eliminates statutory fines for unlawful profiling.',
    applicablePiasCount: 17,
  },
  {
    id: 'tac-vendor',
    name: 'Tier-1 Sub-Processor Security Binding & Continuous Auditing',
    category: 'VENDOR',
    categoryLabel: 'Third-Party & Supply Chain',
    frameworkMandate: 'EBA Outsourcing & GDPR Art 28',
    statutoryArticle: 'GDPR Art 28 & EBA/GL/2019/02',
    icon: Users,
    status: 'AUDIT_STAGE',
    adoptionRate: 82,
    riskReductionDelta: 35,
    effectivenessScore: 87,
    summary: 'Mandatory Data Processing Addendums (DPAs), annual SOC 2 Type II attestation verifications, and continuous cyber risk score monitoring for external vendors.',
    technicalMechanisms: [
      'Continuous automated vendor security posture telemetry scraping',
      'Strict contractual indemnification and 24-hour breach notification covenants',
      'Zero-trust isolated VPC peering and private link endpoints'
    ],
    operationalBenefits: 'Protects the enterprise from vicarious supply-chain data liability and third-party SaaS vulnerabilities.',
    applicablePiasCount: 24,
  },
  {
    id: 'tac-synth',
    name: 'Differential Privacy & Synthetic Testing Isolation',
    category: 'TEST_ISOLATION',
    categoryLabel: 'Privacy-Preserving Computation',
    frameworkMandate: 'ISO 27001 & EDPB Guidelines',
    statutoryArticle: 'GDPR Art 25 (Privacy by Design)',
    icon: Sparkles,
    status: 'FULLY_ENFORCED',
    adoptionRate: 95,
    riskReductionDelta: 50,
    effectivenessScore: 97,
    summary: 'Strict prohibition of production PII in non-production environments; generation of mathematically validated synthetic replica datasets with differential noise injection.',
    technicalMechanisms: [
      'Epsilon-differential privacy mathematical noise generator',
      'Automated synthetic tabular dataset generation for QA and model training',
      'Continuous air-gapped barrier between staging and production datastores'
    ],
    operationalBenefits: 'Completely eliminates staging/dev environment data leaks, safeguarding all developer sandboxes.',
    applicablePiasCount: 31,
  },
  {
    id: 'tac-breach',
    name: 'Automated Incident Containment & 72-Hour Breach Playbooks',
    category: 'INCIDENT_RESPONSE',
    categoryLabel: 'Incident Readiness',
    frameworkMandate: 'UK GDPR / FCA SYSC / DPA 2018',
    statutoryArticle: 'GDPR Art 33 & 34',
    icon: AlertOctagon,
    status: 'FULLY_ENFORCED',
    adoptionRate: 100,
    riskReductionDelta: 45,
    effectivenessScore: 95,
    summary: 'Orchestrated forensic containment runbooks, simulated regulatory notification drills, and pre-templated statutory filings for the ICO, EDPB, and affected data subjects.',
    technicalMechanisms: [
      'Automated SIEM alert integration triggering immediate network isolation',
      'Automated forensic log snapshotting and cryptographic timestamp preservation',
      'Pre-approved board escalation matrix and statutory disclosure template generator'
    ],
    operationalBenefits: 'Guarantees sub-72-hour regulatory notification capability, avoiding severe procedural penalties.',
    applicablePiasCount: 36,
  }
];

export const ComplianceTactics: React.FC<ComplianceTacticsProps> = ({
  pias,
  onSelectPia,
}) => {
  const [selectedTacticId, setSelectedTacticId] = useState<string>(TACTICS_CATALOG[0].id);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('ALL');

  const activeTactic = useMemo(() => {
    return TACTICS_CATALOG.find(t => t.id === selectedTacticId) || TACTICS_CATALOG[0];
  }, [selectedTacticId]);

  const filteredTactics = useMemo(() => {
    if (activeCategoryFilter === 'ALL') return TACTICS_CATALOG;
    return TACTICS_CATALOG.filter(t => t.category === activeCategoryFilter);
  }, [activeCategoryFilter]);

  // High-Level KPIs
  const totalTactics = TACTICS_CATALOG.length;
  const avgEffectiveness = Math.round(TACTICS_CATALOG.reduce((acc, t) => acc + t.effectivenessScore, 0) / totalTactics);
  const avgAdoption = Math.round(TACTICS_CATALOG.reduce((acc, t) => acc + t.adoptionRate, 0) / totalTactics);
  const avgRiskReduction = Math.round(TACTICS_CATALOG.reduce((acc, t) => acc + t.riskReductionDelta, 0) / totalTactics);

  // Chart Data: Tactic Adoption vs Efficacy
  const barChartData = useMemo(() => {
    return TACTICS_CATALOG.map(t => ({
      name: t.name.split('&')[0].split(' ')[0] + ' ' + (t.name.split('&')[0].split(' ')[1] || ''),
      fullName: t.name,
      adoption: t.adoptionRate,
      effectiveness: t.effectivenessScore,
      reduction: t.riskReductionDelta,
    }));
  }, []);

  // Radar Data: Control Coverage across Pillars
  const radarData = useMemo(() => {
    return [
      { subject: 'AI Transparency', A: 96, fullMark: 100 },
      { subject: 'Cryptography', A: 98, fullMark: 100 },
      { subject: 'Minimization', A: 89, fullMark: 100 },
      { subject: 'Cross-Border', A: 93, fullMark: 100 },
      { subject: 'Consent Mgmt', A: 90, fullMark: 100 },
      { subject: 'Vendor Audit', A: 87, fullMark: 100 },
      { subject: 'Test Isolation', A: 97, fullMark: 100 },
      { subject: 'Breach Response', A: 95, fullMark: 100 },
    ];
  }, []);

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-950 text-purple-300 border border-purple-800 uppercase tracking-wider">
              PAGE 02 • EXECUTIVE ELEMENT
            </span>
            <span className="text-xs text-zinc-400 font-mono">Technical & Organizational Safeguards (TOMs)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1 flex items-center gap-2.5">
            <ShieldCheck className="w-6 h-6 text-purple-400" />
            PIA COMPLIANCE Tactics
          </h2>
          <p className="text-xs text-zinc-400 mt-1 max-w-3xl">
            Strategic safeguards, technical controls, and operational architectures deployed across the PIA portfolio to satisfy global statutory mandates.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="px-3 py-1.5 rounded-xl bg-purple-950/60 border border-purple-800/80 text-purple-300 text-xs font-mono font-bold flex items-center gap-1.5">
            <Award className="w-4 h-4 text-purple-400" />
            8 Standardized Safeguards
          </span>
        </div>
      </div>

      {/* Top 4 KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        <div className="bg-zinc-900/90 border border-zinc-800 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider block">
            STANDARDIZED TACTICS
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-white font-mono mt-1">
            {totalTactics} Controls
          </div>
          <span className="text-[11px] text-zinc-400 mt-0.5 block">
            Enforced across all 83 systems
          </span>
        </div>

        <div className="bg-zinc-900/90 border border-purple-900/40 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-purple-400 uppercase tracking-wider block">
            AVERAGE ADOPTION RATE
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-purple-400 font-mono mt-1">
            {avgAdoption}%
          </div>
          <span className="text-[11px] text-purple-300/80 mt-0.5 block">
            Enterprise rollout velocity
          </span>
        </div>

        <div className="bg-zinc-900/90 border border-emerald-900/40 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
            AVG RISK REDUCTION DELTA
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono mt-1">
            -{avgRiskReduction}%
          </div>
          <span className="text-[11px] text-emerald-300/80 mt-0.5 block">
            Residual score drop after safeguards
          </span>
        </div>

        <div className="bg-zinc-900/90 border border-cyan-900/40 p-4 rounded-xl">
          <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wider block">
            CONTROL EFFICACY SCORE
          </span>
          <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono mt-1">
            {avgEffectiveness}<span className="text-sm text-zinc-500 font-normal">/100</span>
          </div>
          <span className="text-[11px] text-zinc-400 mt-0.5 block">
            Audited DPO defense resilience
          </span>
        </div>
      </div>

      {/* Visual Analytics: Radar + Bar Composed Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Bar Chart: Adoption vs Effectiveness */}
        <div className="lg:col-span-8 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-purple-400" />
                Safeguard Adoption Rate vs. Control Effectiveness
              </h3>
              <p className="text-xs text-zinc-400">
                Evaluation across all 8 enterprise privacy & AI governance pillars.
              </p>
            </div>
            <span className="text-[10px] font-mono text-zinc-400 bg-zinc-950 px-2.5 py-1 rounded-lg border border-zinc-800">
              Scale 0 - 100%
            </span>
          </div>

          <div className="h-64 sm:h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={barChartData}
                margin={{ top: 10, right: 10, left: -20, bottom: 20 }}
                onClick={(e: any) => {
                  if (e && e.activePayload && e.activePayload[0]) {
                    const match = TACTICS_CATALOG.find(t => t.name === e.activePayload[0].payload.fullName);
                    if (match) setSelectedTacticId(match.id);
                  }
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                <XAxis dataKey="name" stroke="#71717a" tick={{ fontSize: 10 }} interval={0} angle={-15} textAnchor="end" />
                <YAxis stroke="#71717a" tick={{ fontSize: 10 }} domain={[60, 100]} />
                <RechartsTooltip
                  contentStyle={{ backgroundColor: '#18181b', borderColor: '#3f3f46', borderRadius: '12px', fontSize: '11px' }}
                />
                <RechartsLegend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
                <Bar dataKey="adoption" name="Portfolio Adoption Rate (%)" fill="#a855f7" radius={[4, 4, 0, 0]} />
                <Bar dataKey="effectiveness" name="Control Efficacy Index" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Radar Chart: Control Balance */}
        <div className="lg:col-span-4 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-lg flex flex-col justify-between">
          <div>
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              Pillar Assurance Radar
            </h3>
            <p className="text-xs text-zinc-400">
              Multi-axial resilience profile across statutory categories.
            </p>
          </div>

          <div className="h-56 w-full flex items-center justify-center my-2">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="75%" data={radarData}>
                <PolarGrid stroke="#3f3f46" />
                <PolarAngleAxis dataKey="subject" stroke="#a1a1aa" tick={{ fontSize: 9 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#52525b" tick={{ fontSize: 8 }} />
                <Radar name="Assurance Level" dataKey="A" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="text-[11px] text-zinc-400 font-mono bg-zinc-950 p-2 rounded-xl border border-zinc-800 text-center">
            Minimum pillar score: <strong className="text-white">87% (Vendor Audit)</strong>
          </div>
        </div>
      </div>

      {/* Interactive Tactics Catalog & Detail Inspection Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left List of Tactics */}
        <div className="lg:col-span-5 space-y-2.5">
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-zinc-300 uppercase tracking-wider font-mono">
              COMPLIANCE TACTICS DIRECTORY
            </span>
            <span className="text-xs text-zinc-500 font-mono">Select to inspect</span>
          </div>

          <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1">
            {filteredTactics.map(tactic => {
              const Icon = tactic.icon;
              const isSelected = tactic.id === selectedTacticId;

              return (
                <button
                  key={tactic.id}
                  onClick={() => setSelectedTacticId(tactic.id)}
                  className={`w-full p-3.5 rounded-xl border text-left transition flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'bg-purple-950/40 border-purple-600 ring-1 ring-purple-500/50 shadow-md'
                      : 'bg-zinc-900 border-zinc-800 hover:border-zinc-750 hover:bg-zinc-850'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg shrink-0 ${isSelected ? 'bg-purple-900/70 text-purple-300' : 'bg-zinc-800 text-zinc-400'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">{tactic.name}</h4>
                      <p className="text-[10px] text-zinc-400 font-mono mt-0.5 truncate">
                        {tactic.frameworkMandate} • {tactic.statutoryArticle}
                      </p>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-emerald-400">
                      {tactic.effectivenessScore}%
                    </span>
                    <span className="block text-[9px] text-zinc-500 uppercase font-mono">
                      Efficacy
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Tactic Dossier */}
        <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-lg space-y-5">
          <div className="flex items-start justify-between gap-4 border-b border-zinc-800 pb-4">
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-purple-950 text-purple-300 border border-purple-800 uppercase tracking-wider">
                {activeTactic.categoryLabel}
              </span>
              <h3 className="text-lg font-bold text-white mt-1.5">{activeTactic.name}</h3>
              <p className="text-xs text-zinc-400 font-mono mt-0.5">
                Statutory Authority: <strong className="text-purple-300">{activeTactic.frameworkMandate}</strong> ({activeTactic.statutoryArticle})
              </p>
            </div>

            <div className="text-right shrink-0">
              <span className={`px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase ${
                activeTactic.status === 'FULLY_ENFORCED'
                  ? 'bg-emerald-950 text-emerald-300 border border-emerald-800'
                  : 'bg-amber-950 text-amber-300 border border-amber-800'
              }`}>
                {activeTactic.status.replace('_', ' ')}
              </span>
            </div>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed">
            {activeTactic.summary}
          </p>

          {/* Technical Implementation Mechanisms */}
          <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-4 space-y-2.5">
            <span className="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-wider block">
              TECHNICAL & ARCHITECTURAL IMPLEMENTATION MECHANISMS
            </span>
            <div className="space-y-2">
              {activeTactic.technicalMechanisms.map((mech, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{mech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Operational Impact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-xl">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block">RESIDUAL RISK DROP</span>
              <span className="text-xl font-bold text-emerald-400 font-mono mt-0.5 block">
                -{activeTactic.riskReductionDelta}% Post-Deployment
              </span>
              <span className="text-[11px] text-zinc-400 mt-0.5 block">Calculated against inherent scoring</span>
            </div>

            <div className="bg-zinc-950 border border-zinc-800 p-3.5 rounded-xl">
              <span className="text-[10px] font-mono text-zinc-400 uppercase block">PORTFOLIO DEPLOYMENT</span>
              <span className="text-xl font-bold text-purple-400 font-mono mt-0.5 block">
                {activeTactic.applicablePiasCount} Systems Enforced
              </span>
              <span className="text-[11px] text-zinc-400 mt-0.5 block">{activeTactic.adoptionRate}% coverage in scope</span>
            </div>
          </div>

          <div className="pt-1 text-[11px] text-zinc-400 italic">
            Operational Outcome: {activeTactic.operationalBenefits}
          </div>
        </div>
      </div>
    </div>
  );
};
