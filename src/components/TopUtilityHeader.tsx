import React, { useState, useRef, useEffect } from 'react';
import {
  Search,
  Bell,
  Menu,
  ChevronLeft,
  ChevronRight,
  Plus,
  ShieldCheck,
  User,
  LogOut,
  Users,
  Sliders,
  Server,
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  Cpu,
  Clock,
  ExternalLink,
  Presentation,
} from 'lucide-react';
import { TabType, WorkflowMode, AppUser } from '../types';

interface TopUtilityHeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: (collapsed: boolean | ((prev: boolean) => boolean)) => void;
  onOpenMobileSidebar: () => void;
  onOpenCommandPalette: () => void;
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

export const TopUtilityHeader: React.FC<TopUtilityHeaderProps> = ({
  activeTab,
  setActiveTab,
  isSidebarCollapsed,
  setIsSidebarCollapsed,
  onOpenMobileSidebar,
  onOpenCommandPalette,
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
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setIsNotificationsOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getBreadcrumbTitle = () => {
    switch (activeTab) {
      case 'dashboard':
        return 'Summary Dashboard';
      case 'executive':
        return 'Executive Summary (CISO / DPO Presentation)';
      case 'benchmarking':
        return 'Sector Benchmarking';
      case 'forecasting':
        return 'Predictive Risk Forecasting';
      case 'directory':
        return 'Central Directory & Cockpit';
      case 'form':
        return 'Assessment Studio';
      case 'gaps':
        return 'Remediation Gap Log';
      case 'setup':
        return 'System Setup & Rules Engine';
      case 'widgets':
        return 'Security & Telemetry Hub';
      case 'report':
        return 'Assessment Report';
      default:
        return 'Governance Workspace';
    }
  };

  const notifications = [
    {
      id: 'n1',
      title: 'Critical AI Underwriting Gap Overdue',
      desc: 'Algorithmic bias audit for credit underwriting exceeded SLA by 4 days',
      time: '12m ago',
      level: 'critical',
      tab: 'gaps' as TabType,
    },
    {
      id: 'n2',
      title: 'EU AI Act Dossier Threshold Triggered',
      desc: 'High-risk assessment PIA-AI-2026-001 requires DPO sign-off validation',
      time: '1h ago',
      level: 'high',
      tab: 'forecasting' as TabType,
    },
    {
      id: 'n3',
      title: '7 AI Critical Samples Synchronized',
      desc: 'Full banking sector risk trajectory updated with 83 evaluated systems',
      time: '3h ago',
      level: 'info',
      tab: 'benchmarking' as TabType,
    },
  ];

  return (
    <header className="sticky top-0 z-30 h-14 bg-zinc-950/85 backdrop-blur-md border-b border-zinc-800/80 px-3 sm:px-5 flex items-center justify-between shrink-0">
      {/* Left Section: Mobile Toggle, Desktop Toggle & Breadcrumb */}
      <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
        {/* Mobile Hamburger Button */}
        <button
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition focus-visible:ring-2 focus-visible:ring-indigo-500"
          aria-label="Open sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>

        {/* Desktop Sidebar Toggle */}
        <button
          onClick={() => setIsSidebarCollapsed(prev => !prev)}
          className="hidden lg:flex p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition focus-visible:ring-2 focus-visible:ring-indigo-500"
          title={isSidebarCollapsed ? 'Expand sidebar (Ctrl + B)' : 'Collapse sidebar (Ctrl + B)'}
          aria-label="Toggle sidebar"
        >
          {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Breadcrumb Hierarchy */}
        <nav className="flex items-center space-x-2 text-xs truncate" aria-label="Breadcrumb">
          <button
            onClick={() => setActiveTab('dashboard')}
            className="font-mono text-zinc-400 hover:text-zinc-100 transition-colors font-bold hidden sm:inline cursor-pointer focus:outline-none focus-visible:underline"
            title="Return to Home (Summary Dashboard)"
          >
            GLOCAL PIA
          </button>
          <span className="text-zinc-600 hidden sm:inline">/</span>
          <span className="text-zinc-200 font-semibold truncate">
            {getBreadcrumbTitle()}
          </span>
        </nav>
      </div>

      {/* Center Section: Global Search Bar with Keyboard Hint */}
      <div className="flex-1 max-w-md mx-2 sm:mx-4 hidden md:block">
        <button
          onClick={onOpenCommandPalette}
          className="w-full flex items-center justify-between px-3 py-1.5 rounded-xl bg-zinc-900/90 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-zinc-200 transition text-xs shadow-inner group"
        >
          <div className="flex items-center space-x-2 truncate">
            <Search className="w-3.5 h-3.5 text-zinc-400 group-hover:text-indigo-400 transition-colors shrink-0" />
            <span className="truncate">Search assessments, gaps, telemetry...</span>
          </div>
          <div className="flex items-center space-x-1 shrink-0 ml-2">
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 text-zinc-300 rounded border border-zinc-700 shadow-sm">
              ⌘K
            </kbd>
          </div>
        </button>
      </div>

      {/* Right Section: Telemetry Badges, Quick Actions, Notifications & Profile */}
      <div className="flex items-center space-x-2 sm:space-x-3 shrink-0">
        {/* Mobile Search Icon */}
        <button
          onClick={onOpenCommandPalette}
          className="md:hidden p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          title="Search (⌘K)"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Workflow Mode Pill */}
        <button
          onClick={() => setWorkflowMode(workflowMode === 'frontend' ? 'backend' : 'frontend')}
          className="hidden xl:flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono border transition bg-zinc-900/80 hover:bg-zinc-850 border-zinc-800"
          title="Click to toggle Air-Gapped vs Frontend Mode"
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${
              workflowMode === 'backend' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
            }`}
          />
          <span className="text-zinc-300">
            {workflowMode === 'backend' ? 'Air-Gapped' : 'Frontend'}
          </span>
        </button>

        {/* Live Governance Stat Badges */}
        <div className="hidden sm:flex items-center space-x-1.5 text-[11px] font-mono">
          <div
            onClick={() => setActiveTab('directory')}
            className="px-2 py-0.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer transition"
            title="Total Evaluated Banking PIAs"
          >
            <span className="text-zinc-400 font-normal">PIAs: </span>
            <span className="font-bold text-white">{totalPias}</span>
          </div>
          <div
            onClick={() => setActiveTab('gaps')}
            className="px-2 py-0.5 rounded-md bg-amber-950/60 border border-amber-800/80 text-amber-300 hover:bg-amber-950 cursor-pointer transition"
            title="Open Remediation Gaps"
          >
            <span className="text-amber-400/80 font-normal">Gaps: </span>
            <span className="font-bold text-amber-200">{openGapsCount}</span>
          </div>
        </div>

        {/* Executive Presentation Quick Action */}
        <button
          onClick={() => setActiveTab('executive')}
          className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold transition border ${
            activeTab === 'executive'
              ? 'bg-purple-600 text-white border-purple-400 shadow-sm shadow-purple-900/40 ring-1 ring-purple-400/50'
              : 'bg-purple-950/40 hover:bg-purple-900/50 text-purple-300 border-purple-800/70 hover:border-purple-600'
          }`}
          title="Switch to CISO / DPO Executive Summary & Presentation Mode"
        >
          <Presentation className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span className="hidden md:inline font-mono text-[11px]">Executive</span>
        </button>

        {/* Quick Action Button: New Assessment (Indigo CTA) */}
        <button
          onClick={onNewAssessment}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all duration-150 focus-visible:ring-2 focus-visible:ring-indigo-500"
        >
          <Plus className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">New PIA</span>
        </button>

        {/* Notifications Popover */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setIsNotificationsOpen(prev => !prev)}
            className="relative p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition focus-visible:ring-2 focus-visible:ring-indigo-500"
            title="Compliance Notifications"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-zinc-950" />
          </button>

          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl z-50 overflow-hidden ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-100">
              <div className="px-4 py-3 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/60">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-white">Governance Alerts</span>
                  <span className="px-1.5 py-0.2 bg-rose-950 text-rose-300 border border-rose-800 text-[10px] font-mono rounded-full font-bold">
                    3 New
                  </span>
                </div>
                <button
                  onClick={() => setIsNotificationsOpen(false)}
                  className="text-[11px] text-zinc-400 hover:text-zinc-200 transition"
                >
                  Dismiss
                </button>
              </div>

              <div className="divide-y divide-zinc-800/60 max-h-72 overflow-y-auto scroll-pane">
                {notifications.map(n => (
                  <div
                    key={n.id}
                    onClick={() => {
                      setActiveTab(n.tab);
                      setIsNotificationsOpen(false);
                    }}
                    className="p-3 hover:bg-zinc-800/60 cursor-pointer transition text-left"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center space-x-1.5">
                        {n.level === 'critical' && (
                          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shrink-0" />
                        )}
                        {n.level === 'high' && (
                          <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                        )}
                        {n.level === 'info' && (
                          <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0" />
                        )}
                        <span className="text-xs font-semibold text-zinc-200">
                          {n.title}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400 shrink-0">
                        {n.time}
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400 mt-1 pl-3.5 leading-relaxed">
                      {n.desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-2 border-t border-zinc-800 bg-zinc-950/60 text-center">
                <button
                  onClick={() => {
                    setActiveTab('gaps');
                    setIsNotificationsOpen(false);
                  }}
                  className="text-[11px] font-medium text-indigo-400 hover:text-indigo-300 transition"
                >
                  View All Action Plans in Gap Log →
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Auditor Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setIsProfileMenuOpen(prev => !prev)}
            className="flex items-center space-x-2 p-1 rounded-lg hover:bg-zinc-850 transition focus-visible:ring-2 focus-visible:ring-indigo-500"
            title="DPO Auditor Account"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
              {currentUser?.fullName?.charAt(0) || 'A'}
            </div>
          </button>

          {isProfileMenuOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl z-50 overflow-hidden ring-1 ring-white/10 animate-in fade-in zoom-in-95 duration-100">
              <div className="p-3 border-b border-zinc-800 bg-zinc-950/60">
                <div className="text-xs font-bold text-white truncate">
                  {currentUser?.fullName || 'Lead Privacy Auditor'}
                </div>
                <div className="text-[11px] text-zinc-400 font-mono truncate">
                  {currentUser?.corporateEmail || 'dpo.lead@enterprise.org'}
                </div>
                <div className="mt-1.5 inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {currentUser?.scopeLevel || 'System Lead Auditor'}
                </div>
              </div>

              <div className="p-1 space-y-0.5 text-xs">
                <button
                  onClick={() => {
                    onOpenUserDirectory();
                    setIsProfileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition text-left"
                >
                  <Users className="w-4 h-4 text-zinc-400" />
                  <span>Auditor Directory & RBAC</span>
                </button>
                {onOpenSystemConfig && (
                  <button
                    onClick={() => {
                      onOpenSystemConfig();
                      setIsProfileMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition text-left"
                  >
                    <Sliders className="w-4 h-4 text-zinc-400" />
                    <span>System Config & Rules</span>
                  </button>
                )}
                {onOpenServerHealth && (
                  <button
                    onClick={() => {
                      onOpenServerHealth();
                      setIsProfileMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-zinc-300 hover:text-white hover:bg-zinc-800 transition text-left"
                  >
                    <Server className="w-4 h-4 text-zinc-400" />
                    <span>Server & AI Health</span>
                  </button>
                )}
              </div>

              <div className="p-1 border-t border-zinc-800 bg-zinc-950/60">
                <button
                  onClick={() => {
                    onOpenAuthModal();
                    setIsProfileMenuOpen(false);
                  }}
                  className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-lg text-rose-400 hover:bg-rose-950/40 transition text-left"
                >
                  <LogOut className="w-4 h-4 text-rose-400" />
                  <span>Sign In / Switch Auditor</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
