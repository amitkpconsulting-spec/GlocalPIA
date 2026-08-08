import React, { useState } from 'react';
import { ShieldCheck, FileText, AlertTriangle, Download, Plus, Search, Server, Globe, Shield, User, Users, Lock, Cpu, Activity, Sliders, Bot, Sparkles, Layers, ChevronDown, LayoutDashboard } from 'lucide-react';
import { WorkflowMode, AppUser } from '../types';

export type TabType = 'dashboard' | 'directory' | 'form' | 'gaps' | 'report' | 'widgets' | 'setup';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  onOpenWidgetSubTab?: (subTab: 'server-health' | 'system-config' | 'user-directory') => void;
  totalPias: number;
  highRiskCount: number;
  openGapsCount: number;
  workflowMode: WorkflowMode;
  setWorkflowMode: (mode: WorkflowMode) => void;
  currentUser: AppUser | null;
  onOpenAuthModal: () => void;
  onOpenUserDirectory: () => void;
  onOpenSystemConfig?: () => void;
  onOpenServerHealth?: () => void;
  onNewAssessment: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenWidgetSubTab,
  totalPias,
  highRiskCount,
  openGapsCount,
  workflowMode,
  setWorkflowMode,
  currentUser,
  onOpenAuthModal,
  onOpenUserDirectory,
  onOpenSystemConfig,
  onOpenServerHealth,
  onNewAssessment,
}) => {
  const [isConfigDropdownOpen, setIsConfigDropdownOpen] = useState(false);
  const [isTopConfigOpen, setIsTopConfigOpen] = useState(false);
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  return (
    <header id="main-app-header" className="bg-zinc-900/95 border-b border-zinc-800/90 text-zinc-100 sticky top-0 z-40 backdrop-blur-md shadow-xl shadow-black/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[64px] py-2 gap-2 sm:gap-4">
          {/* Logo & Branding */}
          <div className="flex items-center space-x-3 cursor-pointer group shrink-0" onClick={() => setActiveTab('directory')}>
            <div className="p-2 bg-gradient-to-br from-cyan-950 to-blue-950 rounded-xl border border-cyan-500/40 text-cyan-400 shadow-sm shadow-cyan-950/60 group-hover:border-cyan-400 group-hover:scale-105 transition">
              <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-black text-lg sm:text-xl text-white tracking-tight group-hover:text-cyan-300 transition">
                  Local PIA
                </span>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-950/90 text-cyan-300 border border-cyan-500/40 rounded-md shadow-sm">
                  v2.6 ENGINE
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 hidden sm:block font-medium leading-none mt-0.5">
                Privacy Impact Assessment & Governance Engine
              </p>
            </div>
          </div>

          {/* Quick Metrics & System Status (Visible on xl screens to prevent squishing) */}
          <div className="hidden xl:flex items-center space-x-2 text-xs">
            <div className="flex items-center space-x-1.5 bg-zinc-950/90 px-2.5 py-1.5 rounded-lg border border-zinc-800">
              <span className="text-zinc-400 font-medium">PIAs:</span>
              <span className="font-mono font-bold text-zinc-100">{totalPias}</span>
            </div>

            <div className="flex items-center space-x-1.5 bg-rose-950/40 px-2.5 py-1.5 rounded-lg border border-rose-800/50">
              <span className="text-rose-300 font-medium">High Risk:</span>
              <span className="font-mono font-bold text-rose-200">{highRiskCount}</span>
            </div>

            <div className="flex items-center space-x-1.5 bg-amber-950/40 px-2.5 py-1.5 rounded-lg border border-amber-800/50">
              <span className="text-amber-300 font-medium">Open Gaps:</span>
              <span className="font-mono font-bold text-amber-200">{openGapsCount}</span>
            </div>
          </div>

          {/* User Profile & Security Governance Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Server Health Status Button */}
            <button
              onClick={() => {
                if (onOpenWidgetSubTab) {
                  onOpenWidgetSubTab('server-health');
                } else if (onOpenServerHealth) {
                  onOpenServerHealth();
                } else {
                  setActiveTab('widgets');
                }
              }}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 border rounded-xl text-xs font-semibold transition shadow-sm shrink-0 ${
                activeTab === 'widgets'
                  ? 'bg-emerald-950 text-emerald-200 border-emerald-500'
                  : 'bg-emerald-950/60 hover:bg-emerald-900 text-emerald-300 border-emerald-800/70'
              }`}
              title="Backend Process Status, Port, PID & Graceful Restart"
            >
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span className="hidden md:inline">Server Health</span>
            </button>

            {/* Top Configuration Dropdown */}
            <div className="relative shrink-0">
              <button
                onClick={() => setIsTopConfigOpen(!isTopConfigOpen)}
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-200 border border-cyan-700/60 rounded-xl text-xs font-semibold transition shadow-sm"
                title="Configuration: System Config & User Directory"
              >
                <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Configuration</span>
                <ChevronDown className={`w-3 h-3 text-cyan-300 transition-transform duration-200 ${isTopConfigOpen ? 'rotate-180' : ''}`} />
              </button>

              {isTopConfigOpen && (
                <div
                  className="absolute right-0 mt-2 w-64 bg-zinc-900 border border-zinc-700 rounded-2xl shadow-2xl z-50 p-2 space-y-1 backdrop-blur-xl"
                  onMouseLeave={() => setIsTopConfigOpen(false)}
                >
                  <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-zinc-800 flex items-center justify-between">
                    <span>Configuration Controls</span>
                    <span className="px-1.5 py-0.5 bg-cyan-950 text-cyan-300 rounded text-[9px]">DROPDOWN</span>
                  </div>

                  <button
                    onClick={() => {
                      setIsTopConfigOpen(false);
                      if (onOpenWidgetSubTab) onOpenWidgetSubTab('system-config');
                      else if (onOpenSystemConfig) onOpenSystemConfig();
                    }}
                    className="w-full flex items-start space-x-2.5 p-2 rounded-xl hover:bg-zinc-800/80 transition text-left group"
                  >
                    <div className="p-1.5 bg-cyan-950 text-cyan-400 rounded-lg border border-cyan-800 shrink-0 mt-0.5">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                        System Config
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        AI Auto-Discovery & Zero-ENV Config
                      </div>
                    </div>
                  </button>

                  <button
                    onClick={() => {
                      setIsTopConfigOpen(false);
                      if (onOpenWidgetSubTab) onOpenWidgetSubTab('user-directory');
                      else onOpenUserDirectory();
                    }}
                    className="w-full flex items-start space-x-2.5 p-2 rounded-xl hover:bg-zinc-800/80 transition text-left group"
                  >
                    <div className="p-1.5 bg-purple-950 text-purple-400 rounded-lg border border-purple-800 shrink-0 mt-0.5">
                      <Users className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-purple-300 transition">
                        User Directory
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        Admin User Directory Governance
                      </div>
                    </div>
                  </button>
                </div>
              )}
            </div>

            {/* Multi-Tier Auth Profile Badge */}
            <button
              onClick={onOpenAuthModal}
              className="inline-flex items-center gap-2 px-2.5 py-1.5 bg-zinc-950 hover:bg-zinc-800 border border-zinc-800 rounded-xl text-xs font-semibold transition shrink-0"
              title="User Authentication & Governance"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <User className="w-3.5 h-3.5 text-cyan-400" />
              <div className="text-left hidden sm:block leading-tight">
                <div className="text-white text-[11px] font-bold truncate max-w-[110px]">
                  {currentUser ? currentUser.fullName : 'Guest Auditor'}
                </div>
                <div className="text-[9px] text-zinc-400 font-mono uppercase">
                  {currentUser ? currentUser.role : 'Unauthenticated'}
                </div>
              </div>
            </button>

            {/* Workflow Environment Toggle */}
            <div className="flex items-center bg-zinc-950 p-1 rounded-xl border border-zinc-800 shrink-0">
              <button
                onClick={() => setWorkflowMode('frontend')}
                className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold transition ${
                  workflowMode === 'frontend'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="Frontend Server ID (FID) Submission Environment"
              >
                <Globe className="w-3 h-3 text-blue-300" />
                <span>FID</span>
              </button>
              <button
                onClick={() => setWorkflowMode('backend')}
                className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold transition ${
                  workflowMode === 'backend'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                title="Backend Audit ID (BID) Regulatory & SME Environment"
              >
                <Shield className="w-3 h-3 text-purple-300" />
                <span>BID</span>
              </button>
            </div>

            {/* Primary CTA */}
            <button
              id="btn-header-new-assessment"
              onClick={onNewAssessment}
              className="inline-flex items-center px-3 py-1.5 text-xs font-bold rounded-xl text-zinc-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-950/50 transition active:scale-[0.98] shrink-0"
            >
              <Plus className="w-3.5 h-3.5 mr-1 stroke-[2.5]" />
              New PIA
            </button>
          </div>
        </div>

        {/* Navigation Dropdown Menu Bar */}
        <div className="border-t border-zinc-800/80 py-2 relative">
          <button
            id="tab-navigation-dropdown-trigger"
            onClick={() => setIsNavDropdownOpen(!isNavDropdownOpen)}
            className="w-full flex items-center justify-between px-4 py-2.5 bg-zinc-800/90 hover:bg-zinc-800 text-zinc-100 border border-zinc-700/80 rounded-xl font-medium transition text-xs shadow-md group"
          >
            <div className="flex items-center space-x-2.5 min-w-0">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 shrink-0">
                NAVIGATION
              </span>
              <span className="truncate font-semibold text-white flex items-center gap-1.5">
                {activeTab === 'dashboard' && (
                  <>
                    <LayoutDashboard className="w-3.5 h-3.5 text-purple-400 inline" />
                    <span>Summary Dashboard (PIA Governance)</span>
                  </>
                )}
                {activeTab === 'directory' && (
                  <>
                    <FileText className="w-3.5 h-3.5 text-cyan-400 inline" />
                    <span>Central Directory & Cockpit</span>
                  </>
                )}
                {activeTab === 'form' && (
                  <>
                    <Plus className="w-3.5 h-3.5 text-cyan-400 inline" />
                    <span>PIA Assessment Questionnaire</span>
                  </>
                )}
                {activeTab === 'gaps' && (
                  <>
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-400 inline" />
                    <span>Gap Log & Remediation SLAs</span>
                  </>
                )}
                {activeTab === 'report' && (
                  <>
                    <Download className="w-3.5 h-3.5 text-cyan-400 inline" />
                    <span>Audit Report & Sign-Off</span>
                  </>
                )}
                {activeTab === 'setup' && (
                  <>
                    <Sliders className="w-3.5 h-3.5 text-indigo-400 inline" />
                    <span>System Setup & Rules Engine</span>
                  </>
                )}
                {activeTab === 'widgets' && (
                  <>
                    <Layers className="w-3.5 h-3.5 text-cyan-400 inline" />
                    <span>Operations & System Widgets</span>
                  </>
                )}
              </span>
            </div>
            <div className="flex items-center space-x-2 shrink-0">
              {openGapsCount > 0 && (
                <span className="px-2 py-0.5 bg-rose-500 text-white font-mono font-bold rounded-full text-[10px]">
                  {openGapsCount} Gaps
                </span>
              )}
              <ChevronDown className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${isNavDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
          </button>

          {isNavDropdownOpen && (
            <div
              className="absolute left-0 right-0 mt-2 bg-zinc-900 border border-zinc-700/90 rounded-2xl shadow-2xl z-50 p-2 space-y-1 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-700"
              onMouseLeave={() => setIsNavDropdownOpen(false)}
            >
              <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-zinc-800 flex items-center justify-between">
                <span>Navigation Menu</span>
                <span className="px-1.5 py-0.5 bg-cyan-950 text-cyan-300 rounded text-[9px]">DROPDOWN MENU</span>
              </div>

              {/* Summary Dashboard */}
              <button
                id="tab-dashboard"
                onClick={() => {
                  setActiveTab('dashboard');
                  setIsNavDropdownOpen(false);
                }}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-xl transition text-left group ${
                  activeTab === 'dashboard'
                    ? 'bg-purple-950/80 text-purple-300 border border-purple-800 font-bold'
                    : 'text-zinc-300 hover:bg-zinc-800/80'
                }`}
              >
                <div className="p-2 bg-purple-950 text-purple-400 rounded-lg border border-purple-800 shrink-0">
                  <LayoutDashboard className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-purple-300 transition flex items-center gap-1.5">
                    <span>Summary Dashboard</span>
                    <span className="px-1.5 py-0.2 bg-purple-900 text-purple-200 text-[9px] rounded font-mono">PIA</span>
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Fortexa PIA Governance risk telemetry & active reviews
                  </div>
                </div>
              </button>

              {/* Central Directory */}
              <button
                id="tab-directory"
                onClick={() => {
                  setActiveTab('directory');
                  setIsNavDropdownOpen(false);
                }}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-xl transition text-left group ${
                  activeTab === 'directory'
                    ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800 font-bold'
                    : 'text-zinc-300 hover:bg-zinc-800/80'
                }`}
              >
                <div className="p-2 bg-cyan-950 text-cyan-400 rounded-lg border border-cyan-800 shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                    Central Directory & Cockpit
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Master list of all local PIA assessments
                  </div>
                </div>
              </button>

              {/* Assessment Form */}
              <button
                id="tab-form"
                onClick={() => {
                  setActiveTab('form');
                  setIsNavDropdownOpen(false);
                }}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-xl transition text-left group ${
                  activeTab === 'form'
                    ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800 font-bold'
                    : 'text-zinc-300 hover:bg-zinc-800/80'
                }`}
              >
                <div className="p-2 bg-blue-950 text-blue-400 rounded-lg border border-blue-800 shrink-0">
                  <Plus className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition">
                    PIA Assessment Questionnaire
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Interactive DPDPA assessment entry form
                  </div>
                </div>
              </button>

              {/* Gap Log */}
              <button
                id="tab-gaps"
                onClick={() => {
                  setActiveTab('gaps');
                  setIsNavDropdownOpen(false);
                }}
                className={`w-full flex items-center justify-between p-2.5 rounded-xl transition text-left group ${
                  activeTab === 'gaps'
                    ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800 font-bold'
                    : 'text-zinc-300 hover:bg-zinc-800/80'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-amber-950 text-amber-400 rounded-lg border border-amber-800 shrink-0">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white group-hover:text-amber-300 transition">
                      Gap Log & Remediation SLAs
                    </div>
                    <div className="text-[11px] text-zinc-400">
                      Compliance gap tracking & mitigation deadlines
                    </div>
                  </div>
                </div>
                {openGapsCount > 0 && (
                  <span className="px-2 py-0.5 bg-rose-500 text-white font-mono font-bold rounded-full text-[10px]">
                    {openGapsCount}
                  </span>
                )}
              </button>

              {/* Audit Report */}
              <button
                id="tab-report"
                onClick={() => {
                  setActiveTab('report');
                  setIsNavDropdownOpen(false);
                }}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-xl transition text-left group ${
                  activeTab === 'report'
                    ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800 font-bold'
                    : 'text-zinc-300 hover:bg-zinc-800/80'
                }`}
              >
                <div className="p-2 bg-emerald-950 text-emerald-400 rounded-lg border border-emerald-800 shrink-0">
                  <Download className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-emerald-300 transition">
                    Audit Report & Sign-Off
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Export sign-off ready regulatory report
                  </div>
                </div>
              </button>

              {/* System Setup */}
              <button
                id="tab-setup"
                onClick={() => {
                  setActiveTab('setup');
                  setIsNavDropdownOpen(false);
                }}
                className={`w-full flex items-center space-x-3 p-2.5 rounded-xl transition text-left group border-t border-zinc-800/80 pt-2.5 ${
                  activeTab === 'setup'
                    ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800 font-bold'
                    : 'text-zinc-300 hover:bg-zinc-800/80'
                }`}
              >
                <div className="p-2 bg-indigo-950 text-indigo-400 rounded-lg border border-indigo-800 shrink-0">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-indigo-300 transition">
                    System Setup & Rules Engine
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    FID/BID prefixes & risk scoring multipliers
                  </div>
                </div>
              </button>

              {/* Configuration: System Config */}
              <button
                onClick={() => {
                  setIsNavDropdownOpen(false);
                  if (onOpenWidgetSubTab) onOpenWidgetSubTab('system-config');
                  else if (onOpenSystemConfig) onOpenSystemConfig();
                }}
                className="w-full flex items-center space-x-3 p-2.5 rounded-xl text-zinc-300 hover:bg-zinc-800/80 transition text-left group"
              >
                <div className="p-2 bg-purple-950 text-purple-400 rounded-lg border border-purple-800 shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-purple-300 transition">
                    System Config & Air-Gapped AI
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    AI Auto-Discovery & Zero-ENV Configuration
                  </div>
                </div>
              </button>

              {/* Configuration: User Directory */}
              <button
                onClick={() => {
                  setIsNavDropdownOpen(false);
                  if (onOpenWidgetSubTab) onOpenWidgetSubTab('user-directory');
                  else onOpenUserDirectory();
                }}
                className="w-full flex items-center space-x-3 p-2.5 rounded-xl text-zinc-300 hover:bg-zinc-800/80 transition text-left group"
              >
                <div className="p-2 bg-pink-950 text-pink-400 rounded-lg border border-pink-800 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-pink-300 transition">
                    User Directory Governance
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Admin user account provisioning & authorization
                  </div>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
