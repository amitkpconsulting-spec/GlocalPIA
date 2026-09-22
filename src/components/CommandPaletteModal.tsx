import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Search,
  LayoutDashboard,
  TrendingUp,
  Sparkles,
  FileText,
  AlertTriangle,
  Plus,
  Sliders,
  Server,
  Download,
  X,
  ArrowRight,
  ShieldCheck,
  Cpu,
  CornerDownLeft,
  Presentation,
} from 'lucide-react';
import { PIAAssessment, TabType, WorkflowMode } from '../types';

interface CommandPaletteModalProps {
  isOpen: boolean;
  onClose: () => void;
  pias: PIAAssessment[];
  onNavigateTab: (tab: TabType) => void;
  onSelectPia: (pia: PIAAssessment) => void;
  onNewAssessment: () => void;
  workflowMode: WorkflowMode;
  setWorkflowMode: (mode: WorkflowMode) => void;
  onOpenExportReport?: () => void;
  onDownloadPdfReport?: () => void;
}

export const CommandPaletteModal: React.FC<CommandPaletteModalProps> = ({
  isOpen,
  onClose,
  pias,
  onNavigateTab,
  onSelectPia,
  onNewAssessment,
  workflowMode,
  setWorkflowMode,
  onOpenExportReport,
  onDownloadPdfReport,
}) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut listener (Cmd+K / Ctrl+K and Escape)
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Actions list
  const systemActions = useMemo(() => {
    return [
      {
        id: 'action-dashboard',
        category: 'Navigation',
        title: 'Open Summary Dashboard',
        subtitle: 'PIA Governance, Compliance Heatmap & Core Telemetry',
        icon: LayoutDashboard,
        badge: 'VIEW',
        badgeColor: 'bg-zinc-800 text-zinc-300',
        action: () => {
          onNavigateTab('dashboard');
          onClose();
        },
      },
      {
        id: 'action-executive',
        category: 'Navigation',
        title: 'Executive Summary & Presentation Mode',
        subtitle: 'CISO / DPO Board Level Presentation, Risk Burndown, GAPs & Cycle Timelines',
        icon: Presentation,
        badge: 'CISO / DPO',
        badgeColor: 'bg-purple-900/80 text-purple-300',
        action: () => {
          onNavigateTab('executive');
          onClose();
        },
      },
      {
        id: 'action-benchmarking',
        category: 'Navigation',
        title: 'Sector Benchmarking',
        subtitle: 'Recharts Risk & Gap Velocity across Banking Sub-Categories',
        icon: TrendingUp,
        badge: 'RECHARTS',
        badgeColor: 'bg-purple-900/60 text-purple-300',
        action: () => {
          onNavigateTab('benchmarking');
          onClose();
        },
      },
      {
        id: 'action-forecasting',
        category: 'Navigation',
        title: 'Predictive Risk Forecasting',
        subtitle: 'Trend Analysis & AI Remediation Velocity Trajectory',
        icon: Sparkles,
        badge: 'TREND AI',
        badgeColor: 'bg-indigo-900/60 text-indigo-300',
        action: () => {
          onNavigateTab('forecasting');
          onClose();
        },
      },
      {
        id: 'action-directory',
        category: 'Navigation',
        title: 'Central Directory & Cockpit',
        subtitle: 'Access all 83 Banking PIAs with search and batch tools',
        icon: FileText,
        badge: `${pias.length} PIAs`,
        badgeColor: 'bg-cyan-900/60 text-cyan-300',
        action: () => {
          onNavigateTab('directory');
          onClose();
        },
      },
      {
        id: 'action-new-pia',
        category: 'Quick Actions',
        title: 'Create New Privacy Impact Assessment',
        subtitle: 'Initiate a new statutory assessment for banking process or AI model',
        icon: Plus,
        badge: 'NEW',
        badgeColor: 'bg-indigo-600 text-white',
        action: () => {
          onNewAssessment();
          onClose();
        },
      },
      {
        id: 'action-gaps',
        category: 'Navigation',
        title: 'Remediation Gap Log',
        subtitle: 'Inspect overdue action items, SLA adherence & follow-ups',
        icon: AlertTriangle,
        badge: 'ACTIONS',
        badgeColor: 'bg-amber-900/60 text-amber-300',
        action: () => {
          onNavigateTab('gaps');
          onClose();
        },
      },
      {
        id: 'action-setup',
        category: 'System',
        title: 'System Setup & Rules Engine',
        subtitle: 'Configure FIDs, regulatory thresholds & DPO governance',
        icon: Sliders,
        badge: 'ADMIN',
        badgeColor: 'bg-emerald-900/60 text-emerald-300',
        action: () => {
          onNavigateTab('setup');
          onClose();
        },
      },
      ...(onDownloadPdfReport ? [{
        id: 'action-download-pdf',
        category: 'Export',
        title: 'Download Formal Compliance Snapshot (PDF)',
        subtitle: 'Generate executive multi-page audit report with ISO 42001 & DPDPA telemetry via jsPDF',
        icon: Download,
        badge: 'PDF',
        badgeColor: 'bg-indigo-900/60 text-indigo-300',
        action: () => {
          onDownloadPdfReport();
          onClose();
        },
      }] : []),
      {
        id: 'action-toggle-mode',
        category: 'System',
        title: `Switch Mode to ${workflowMode === 'frontend' ? 'Air-Gapped Local AI (Backend)' : 'Browser Sandbox (Frontend)'}`,
        subtitle: `Currently operating in ${workflowMode.toUpperCase()} mode`,
        icon: Cpu,
        badge: 'TOGGLE',
        badgeColor: 'bg-zinc-800 text-zinc-300',
        action: () => {
          setWorkflowMode(workflowMode === 'frontend' ? 'backend' : 'frontend');
          onClose();
        },
      },
    ];
  }, [pias.length, workflowMode, onNavigateTab, onNewAssessment, setWorkflowMode, onDownloadPdfReport, onClose]);

  // Filter items based on query
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return systemActions;
    }

    // Filter actions
    const matchedActions = systemActions.filter(
      a => a.title.toLowerCase().includes(q) || a.subtitle.toLowerCase().includes(q)
    );

    // Filter PIAs
    const matchedPias = pias
      .filter(p => {
        const title = (p.title || '').toLowerCase();
        const fid = (p.id || '').toLowerCase();
        const framework = (p.answers?.['A3']?.selectedLabel || '').toLowerCase();
        const subCat = (p.answers?.['A1']?.selectedLabel || '').toLowerCase();
        const dept = (p.department || '').toLowerCase();
        return (
          title.includes(q) ||
          fid.includes(q) ||
          framework.includes(q) ||
          subCat.includes(q) ||
          dept.includes(q)
        );
      })
      .slice(0, 8)
      .map(p => ({
        id: `pia-${p.id}`,
        category: 'Assessments',
        title: p.title,
        subtitle: `${p.id} • ${p.answers?.['A1']?.selectedLabel || 'Banking System'} • ${p.department || 'Risk & Audit'}`,
        icon: (p.answers?.['A1']?.selectedLabel || '').includes('AI') ? Cpu : ShieldCheck,
        badge: `${p.riskResult?.finalRiskScore ?? 50}/100 • ${p.riskResult?.riskLevel || 'Medium'}`,
        badgeColor:
          p.riskResult?.riskLevel === 'Critical'
            ? 'bg-rose-950 text-rose-300 border border-rose-800'
            : p.riskResult?.riskLevel === 'High'
            ? 'bg-amber-950 text-amber-300 border border-amber-800'
            : 'bg-emerald-950 text-emerald-300 border border-emerald-800',
        action: () => {
          onSelectPia(p);
          onClose();
        },
      }));

    return [...matchedActions, ...matchedPias];
  }, [query, systemActions, pias, onSelectPia, onClose]);

  // Handle keyboard arrows
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-start justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col max-h-[85vh] ring-1 ring-white/10 animate-in zoom-in-95 duration-150"
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-zinc-800 px-4 py-3.5 bg-zinc-950/60">
          <Search className="w-5 h-5 text-zinc-400 shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command, assessment title, FID, or framework..."
            className="w-full bg-transparent text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-white rounded-md transition"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <div className="flex items-center gap-1.5 ml-2 text-[10px] font-mono text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-700/50 shrink-0">
            <span>ESC</span>
          </div>
        </div>

        {/* Results List (Independent Scroll Pane) */}
        <div className="scroll-pane max-h-[60vh] p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-zinc-400">
              <Search className="w-8 h-8 text-zinc-600 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-medium">No matching assessments or commands found</p>
              <p className="text-xs text-zinc-500 mt-1">Try searching by FID (e.g. PIA-FE-2026-101), "AI", or "Benchmarking"</p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const Icon = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all duration-100 ${
                    isSelected
                      ? 'bg-indigo-950/60 border border-indigo-700/60 text-white shadow-sm'
                      : 'text-zinc-300 hover:bg-zinc-800/60 border border-transparent'
                  }`}
                >
                  <div className="flex items-center space-x-3 min-w-0 pr-2">
                    <div
                      className={`p-2 rounded-lg shrink-0 ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs font-semibold truncate text-zinc-100">
                          {item.title}
                        </span>
                        <span
                          className={`text-[9px] font-mono px-1.5 py-0.5 rounded uppercase font-bold shrink-0 ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-400 truncate mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="shrink-0 flex items-center text-indigo-400 text-xs font-mono font-bold space-x-1">
                      <span>Jump</span>
                      <CornerDownLeft className="w-3.5 h-3.5" />
                    </div>
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-zinc-800/80 px-4 py-2.5 bg-zinc-950/80 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1">
              <kbd className="bg-zinc-800 px-1.5 py-0.5 rounded text-[10px] text-zinc-300 border border-zinc-700">↑</kbd>
              <kbd className="bg-zinc-800 px-1.5 py-0.5 rounded text-[10px] text-zinc-300 border border-zinc-700">↓</kbd>
              <span className="text-zinc-500">Navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="bg-zinc-800 px-1.5 py-0.5 rounded text-[10px] text-zinc-300 border border-zinc-700">↵</kbd>
              <span className="text-zinc-500">Select</span>
            </span>
          </div>
          <span className="text-zinc-500">
            {pias.length} Total Banking PIAs Indexed
          </span>
        </div>
      </div>
    </div>
  );
};
