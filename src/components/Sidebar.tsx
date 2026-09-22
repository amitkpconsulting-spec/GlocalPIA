import React from 'react';
import {
  LayoutDashboard,
  TrendingUp,
  Sparkles,
  FileText,
  FileEdit,
  AlertTriangle,
  Sliders,
  Server,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
  Plus,
  Cpu,
  User,
  LogOut,
  Users,
  Building,
  ShieldAlert,
  X,
  ExternalLink,
  Presentation,
} from 'lucide-react';
import { TabType, WorkflowMode, AppUser } from '../types';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean | ((prev: boolean) => boolean)) => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
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
  onOpenCommandPalette: () => void;
}

interface NavItem {
  id: TabType;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string | number;
  badgeVariant?: 'default' | 'accent' | 'danger' | 'warning' | 'purple';
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isCollapsed,
  setIsCollapsed,
  isMobileOpen,
  setIsMobileOpen,
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
  onOpenCommandPalette,
}) => {
  const navSections: NavSection[] = [
    {
      title: 'Telemetry & Analytics',
      items: [
        {
          id: 'dashboard',
          label: 'Summary Dashboard',
          shortLabel: 'Overview',
          icon: LayoutDashboard,
          badge: totalPias,
          badgeVariant: 'default',
        },
        {
          id: 'executive',
          label: 'Executive Summary',
          shortLabel: 'Executive',
          icon: Presentation,
          badge: 'CISO/DPO',
          badgeVariant: 'purple',
        },
        {
          id: 'benchmarking',
          label: 'Sector Benchmarking',
          shortLabel: 'Benchmark',
          icon: TrendingUp,
          badge: 'RECHARTS',
          badgeVariant: 'purple',
        },
        {
          id: 'forecasting',
          label: 'Predictive Forecasting',
          shortLabel: 'Forecast',
          icon: Sparkles,
          badge: 'TREND AI',
          badgeVariant: 'accent',
        },
      ],
    },
    {
      title: 'Governance Operations',
      items: [
        {
          id: 'directory',
          label: 'Central Directory',
          shortLabel: 'Directory',
          icon: FileText,
          badge: totalPias,
          badgeVariant: 'default',
        },
        {
          id: 'form',
          label: 'Assessment Studio',
          shortLabel: 'Studio',
          icon: FileEdit,
        },
        {
          id: 'gaps',
          label: 'Remediation Gap Log',
          shortLabel: 'Gaps',
          icon: AlertTriangle,
          badge: openGapsCount > 0 ? openGapsCount : undefined,
          badgeVariant: highRiskCount > 0 ? 'danger' : 'warning',
        },
      ],
    },
    {
      title: 'System & Architecture',
      items: [
        {
          id: 'setup',
          label: 'Rules Engine & Setup',
          shortLabel: 'Setup',
          icon: Sliders,
        },
        {
          id: 'widgets',
          label: 'Security & Telemetry Hub',
          shortLabel: 'Widgets',
          icon: Server,
        },
      ],
    },
  ];

  const handleNavClick = (tab: TabType) => {
    setActiveTab(tab);
    if (isMobileOpen) {
      setIsMobileOpen(false);
    }
  };

  const getBadgeClass = (variant?: string) => {
    switch (variant) {
      case 'accent':
        return 'bg-indigo-900/60 text-indigo-300 border border-indigo-700/60';
      case 'purple':
        return 'bg-purple-900/60 text-purple-300 border border-purple-700/60';
      case 'danger':
        return 'bg-rose-950 text-rose-300 border border-rose-800 animate-pulse';
      case 'warning':
        return 'bg-amber-950 text-amber-300 border border-amber-800';
      default:
        return 'bg-zinc-800 text-zinc-300 border border-zinc-700/50';
    }
  };

  const sidebarContent = (
    <div className="flex flex-col h-full select-none bg-zinc-950 border-r border-zinc-800/90">
      {/* Brand Header */}
      <div className="h-16 px-4 flex items-center justify-between border-b border-zinc-800/80 shrink-0">
        <button
          onClick={() => handleNavClick('dashboard')}
          className="flex items-center space-x-3 overflow-hidden text-left group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-xl p-1 -m-1 transition-all"
          title="Return to Home (Summary Dashboard)"
          aria-label="Return to Home Page"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-800 flex items-center justify-center text-white shadow-md shadow-indigo-950/60 shrink-0 border border-indigo-500/40 group-hover:scale-105 group-hover:border-indigo-400/80 transition-all duration-150">
            <ShieldCheck className="w-5 h-5" />
          </div>
          {!isCollapsed && (
            <div className="min-w-0 transition-opacity duration-200">
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-sm text-zinc-100 group-hover:text-white tracking-tight font-mono transition-colors">
                  GLOCAL<span className="text-indigo-400 group-hover:text-indigo-300">PIA</span>
                </span>
                <span className="px-1.5 py-0.2 text-[9px] font-mono font-bold bg-indigo-950 text-indigo-300 border border-indigo-800 rounded">
                  v2.6
                </span>
              </div>
              <div className="text-[11px] text-zinc-400 group-hover:text-zinc-300 truncate transition-colors">
                Banking Governance Engine
              </div>
            </div>
          )}
        </button>

        {/* Desktop Collapse Button */}
        <button
          onClick={() => setIsCollapsed(prev => !prev)}
          className="hidden lg:flex items-center justify-center p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/80 transition focus-visible:ring-2 focus-visible:ring-indigo-500 shrink-0"
          title={isCollapsed ? 'Expand sidebar (Ctrl + B)' : 'Collapse sidebar (Ctrl + B)'}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>

        {/* Mobile Close Button */}
        <button
          onClick={() => setIsMobileOpen(false)}
          className="lg:hidden p-1.5 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 transition shrink-0"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Quick Action Button (Primary CTA) */}
      <div className="p-3 border-b border-zinc-800/60 shrink-0">
        <button
          onClick={() => {
            onNewAssessment();
            if (isMobileOpen) setIsMobileOpen(false);
          }}
          className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-semibold text-xs transition-all duration-150 shadow-md ${
            isCollapsed
              ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
              : 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white shadow-indigo-950/50'
          }`}
          title="Create New Assessment"
        >
          <Plus className="w-4 h-4 shrink-0" />
          {!isCollapsed && <span>New Assessment</span>}
        </button>
      </div>

      {/* Navigation Links (Independent Scroll Pane) */}
      <div className="flex-1 scroll-pane px-3 py-3 space-y-6">
        {navSections.map((section, sIdx) => (
          <div key={sIdx} className="space-y-1">
            {!isCollapsed && (
              <div className="px-3 text-[10px] font-mono uppercase tracking-wider text-zinc-400 font-bold mb-1.5">
                {section.title}
              </div>
            )}
            <div className="space-y-0.5">
              {section.items.map(item => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full flex items-center rounded-xl transition-all duration-150 text-left group relative ${
                      isCollapsed ? 'justify-center p-2.5' : 'px-3 py-2 space-x-3'
                    } ${
                      isActive
                        ? 'bg-indigo-600 text-white font-semibold shadow-md shadow-indigo-950/40'
                        : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900/80'
                    }`}
                    title={isCollapsed ? `${item.label} (${item.badge || ''})` : undefined}
                  >
                    <Icon
                      className={`w-4 h-4 shrink-0 transition-colors ${
                        isActive ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-200'
                      }`}
                    />

                    {!isCollapsed && (
                      <div className="flex-1 flex items-center justify-between min-w-0">
                        <span className="text-xs truncate tracking-tight">
                          {item.label}
                        </span>
                        {item.badge !== undefined && (
                          <span
                            className={`ml-2 text-[10px] font-mono font-bold px-1.5 py-0.2 rounded shrink-0 ${
                              isActive
                                ? 'bg-indigo-950 text-indigo-200 border border-indigo-400/40'
                                : getBadgeClass(item.badgeVariant)
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </div>
                    )}

                    {/* Floating badge for collapsed mode */}
                    {isCollapsed && item.badge !== undefined && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-indigo-500 ring-2 ring-zinc-950" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Status Tile & Auditor Identity */}
      <div className="border-t border-zinc-800/80 bg-zinc-950/90 p-3 shrink-0 space-y-2">
        {/* Operational Mode Toggle */}
        {!isCollapsed ? (
          <div className="bg-zinc-900/80 border border-zinc-800/80 rounded-xl p-2.5 space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-2 h-2 rounded-full ${
                    workflowMode === 'backend' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'
                  }`}
                />
                <span className="text-[11px] font-mono text-zinc-300 font-bold">
                  {workflowMode === 'backend' ? 'Air-Gapped AI' : 'Frontend Client'}
                </span>
              </div>
              <button
                onClick={() => setWorkflowMode(workflowMode === 'frontend' ? 'backend' : 'frontend')}
                className="text-[10px] font-mono text-indigo-400 hover:text-indigo-300 underline"
              >
                Switch
              </button>
            </div>
            <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono pt-1 border-t border-zinc-800/60">
              <span>Risk Gate:</span>
              <span className="text-rose-400 font-bold">{highRiskCount} High / Critical</span>
            </div>
          </div>
        ) : (
          <div className="flex justify-center py-1">
            <button
              onClick={() => setWorkflowMode(workflowMode === 'frontend' ? 'backend' : 'frontend')}
              className={`p-2 rounded-lg border ${
                workflowMode === 'backend'
                  ? 'bg-emerald-950/60 border-emerald-800 text-emerald-400'
                  : 'bg-zinc-900 border-zinc-800 text-zinc-400'
              }`}
              title={`Mode: ${workflowMode.toUpperCase()} (Click to toggle)`}
            >
              <Cpu className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Auditor Profile Card */}
        <div
          className={`flex items-center rounded-xl p-2 transition ${
            isCollapsed ? 'justify-center' : 'justify-between bg-zinc-900/40 border border-zinc-800/50'
          }`}
        >
          <button
            onClick={onOpenAuthModal}
            className="flex items-center space-x-2.5 min-w-0 text-left group"
            title="DPO Auditor Profile & Sign-In"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-700 to-purple-600 flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-inner">
              {currentUser?.fullName?.charAt(0) || 'A'}
            </div>
            {!isCollapsed && (
              <div className="min-w-0">
                <div className="text-xs font-semibold text-zinc-200 group-hover:text-white truncate">
                  {currentUser?.fullName || 'Lead Privacy Auditor'}
                </div>
                <div className="text-[10px] text-zinc-400 font-mono truncate">
                  {currentUser?.role === 'admin' ? 'DPO Auditor' : 'Contributor'}
                </div>
              </div>
            )}
          </button>

          {!isCollapsed && (
            <button
              onClick={onOpenAuthModal}
              className="text-zinc-400 hover:text-zinc-200 p-1 rounded-md transition"
              title="Account & Security Governance"
            >
              <Users className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Technoscope Footer & Proprietary License */}
        {!isCollapsed ? (
          <div className="mt-2.5 pt-2.5 border-t border-zinc-800/60 text-[10px] text-zinc-400 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">Developed by</span>
              <a
                href="https://www.technoscope.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors hover:underline"
              >
                www.technoscope.co.in
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">License</span>
              <span className="font-mono text-zinc-300 font-medium">Proprietary</span>
            </div>
            <div className="pt-0.5 text-zinc-400 flex items-center justify-between gap-1">
              <span>To consult connect with</span>
              <a
                href="https://www.technoscope.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors hover:underline inline-flex items-center gap-0.5"
              >
                <span>Technoscope</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>
        ) : (
          <div className="mt-2 pt-2 border-t border-zinc-800/60 flex justify-center">
            <a
              href="https://www.technoscope.co.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-indigo-400 transition-colors p-1"
              title="Developed by Technoscope (www.technoscope.co.in) • License: Proprietary • Click to consult"
              aria-label="Technoscope website"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside
        className={`hidden lg:flex flex-col h-full shrink-0 transition-all duration-200 z-20 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150"
            onClick={() => setIsMobileOpen(false)}
          />
          <aside className="relative w-72 h-full z-10 shadow-2xl animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </aside>
        </div>
      )}
    </>
  );
};
