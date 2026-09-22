import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { Sidebar } from './components/Sidebar';
import { TopUtilityHeader } from './components/TopUtilityHeader';
import { CommandPaletteModal } from './components/CommandPaletteModal';
import { SummaryDashboard } from './components/SummaryDashboard';
import { DirectoryView } from './components/DirectoryView';
import { AssessmentForm } from './components/AssessmentForm';
import { GapLogDashboard } from './components/GapLogDashboard';
import { ExportReportModal } from './components/ExportReportModal';
import { AuthModal } from './components/AuthModal';
import { UserDirectoryModal } from './components/UserDirectoryModal';
import { SystemConfigModal } from './components/SystemConfigModal';
import { ServerHealthDashboard } from './components/ServerHealthDashboard';
import { SetupPage } from './components/SetupPage';
import { WidgetsPage, WidgetSubTab } from './components/WidgetsPage';
import { SectorBenchmarking } from './components/SectorBenchmarking';
import { PredictiveRiskForecasting } from './components/PredictiveRiskForecasting';
import { ExecutiveSummaryView } from './components/ExecutiveSummaryView';
import { PIAAssessment, RemediationGap, GapStatus, WorkflowMode, AppUser, SystemSetupConfig, TabType } from './types';
import { INITIAL_PIAS, INITIAL_GAPS } from './data/mockData';
import { generateSummaryPdfReport } from './utils/pdfReportGenerator';

export function App() {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');
  const [widgetsSubTab, setWidgetsSubTab] = useState<WidgetSubTab>('server-health');
  const [workflowMode, setWorkflowMode] = useState<WorkflowMode>('frontend');
  
  // Full-viewport sidebar and command palette states
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(() => {
    try {
      return localStorage.getItem('glocal_sidebar_collapsed') === 'true';
    } catch {
      return false;
    }
  });
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem('glocal_sidebar_collapsed', String(isSidebarCollapsed));
    } catch {
      // Ignore
    }
  }, [isSidebarCollapsed]);

  // Global Keyboard Shortcuts (Cmd/Ctrl + K for search, Cmd/Ctrl + B for sidebar)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'b') {
        e.preventDefault();
        setIsSidebarCollapsed(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
  
  const [pias, setPias] = useState<PIAAssessment[]>(INITIAL_PIAS);
  const [gaps, setGaps] = useState<RemediationGap[]>(INITIAL_GAPS);
  const [selectedPia, setSelectedPia] = useState<PIAAssessment | null>(null);

  // One-Time System Setup & Rules Engine Configuration State
  const [systemSetup, setSystemSetup] = useState<SystemSetupConfig>({
    organizationName: 'Enterprise Governance & Healthcare Trust',
    dataProtectionContact: 'Amit Kumar Pandey',
    dpoEmail: 'dpo.lead@enterprise-governance.org',
    defaultDepartment: 'Data Protection & Compliance Office',
    industrySector: 'banking',
    primaryRegulatoryFramework: 'UK GDPR & DPA 2018',
    fidPrefix: 'PIA-FE-2026-',
    fidOffset: 100,
    bidPrefix: 'PIA-BE-UK-2026-',
    bidOffset: 412,
    defaultAuditorName: 'Amit Kumar Pandey (DPO)',
    defaultAuditorRole: 'Lead Privacy Auditor',
    isSetupComplete: true,
    lastUpdated: new Date().toISOString(),
  });

  // Authentication & Security Governance State
  const [currentUser, setCurrentUser] = useState<AppUser | null>({
    id: 'USR-ADMIN-01',
    username: 'admin',
    fullName: 'Amit Kumar Pandey (DPO Lead Auditor)',
    corporateEmail: 'dpo.lead@enterprise-governance.org',
    assignedDepartment: 'Data Protection & Compliance Office',
    role: 'admin',
    scopeLevel: 'Full System Auditor & Governance Lead',
    status: 'Active',
    requiresPasswordReset: false,
    mfaEnabled: true,
    failedLoginAttempts: 0,
    createdAt: '2026-01-01T08:00:00Z',
  });
  const [authToken, setAuthToken] = useState<string | null>('DEFAULT-AUDITOR-TOKEN');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserDirectoryOpen, setIsUserDirectoryOpen] = useState(false);
  const [isSystemConfigOpen, setIsSystemConfigOpen] = useState(false);
  const [isServerHealthModalOpen, setIsServerHealthModalOpen] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  // Check active session or initialize default auditor
  useEffect(() => {
    fetchInitialData();
    checkActiveSession();
  }, []);

  const checkActiveSession = async () => {
    const savedToken = localStorage.getItem('pia_auth_token');
    if (!savedToken) return;

    try {
      const res = await fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${savedToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setCurrentUser(data.user);
        setAuthToken(savedToken);
      } else {
        localStorage.removeItem('pia_auth_token');
      }
    } catch (err) {
      console.warn('Session verification error:', err);
    }
  };

  const handleLoginSuccess = (user: AppUser, token: string) => {
    setCurrentUser(user);
    setAuthToken(token);
    localStorage.setItem('pia_auth_token', token);
    // Align workflow mode if admin auditor
    if (user.role === 'admin') {
      setWorkflowMode('backend');
    } else {
      setWorkflowMode('frontend');
    }
  };

  const handleLogout = () => {
    if (authToken) {
      fetch('/api/auth/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${authToken}` },
      }).catch(console.error);
    }
    setCurrentUser(null);
    setAuthToken(null);
    localStorage.removeItem('pia_auth_token');
    setIsAuthModalOpen(false);
  };

  const fetchInitialData = async () => {
    setIsLoading(true);
    try {
      const configRes = await fetch('/api/config');
      if (configRes.ok) {
        const configData = await configRes.json();
        if (configData.systemSetup) {
          setSystemSetup(configData.systemSetup);
        }
      }

      const piasRes = await fetch('/api/pias');
      if (piasRes.ok) {
        const piasData = await piasRes.json();
        if (Array.isArray(piasData) && piasData.length > 0) setPias(piasData);
      }

      const gapsRes = await fetch('/api/gaps');
      if (gapsRes.ok) {
        const gapsData = await gapsRes.json();
        if (Array.isArray(gapsData) && gapsData.length > 0) setGaps(gapsData);
      }
    } catch (err) {
      console.warn('Backend API server offline or loading fallback state:', err);
    } finally {
      setIsLoading(false);
    }
  };

  // Create or Update Assessment
  const handleSavePia = async (piaData: Partial<PIAAssessment>) => {
    try {
      let savedPia: PIAAssessment | null = null;
      if (piaData.id) {
        // Update
        const res = await fetch(`/api/pias/${piaData.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(piaData),
        });
        if (res.ok) {
          savedPia = await res.json();
          setPias(prev => prev.map(p => (p.id === savedPia!.id ? savedPia! : p)));
        }
      } else {
        // Create
        const res = await fetch('/api/pias', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(piaData),
        });
        if (res.ok) {
          savedPia = await res.json();
          setPias(prev => [savedPia!, ...prev]);
        }
      }

      // Automatically trigger Local AI Gap Analysis for assessment
      if (savedPia) {
        try {
          const aiRes = await fetch('/api/ai/analyze-gaps', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ piaId: savedPia.id, piaData: savedPia }),
          });
          if (aiRes.ok) {
            const aiData = await aiRes.json();
            if (aiData.gaps && aiData.gaps.length > 0) {
              const gapsRes = await fetch('/api/gaps');
              if (gapsRes.ok) {
                const refreshedGaps = await gapsRes.json();
                setGaps(refreshedGaps);
              }
            }
          }
        } catch (aiErr) {
          console.warn('AI Gap analysis trigger error:', aiErr);
        }

        alert(`Assessment saved successfully! (ID: ${savedPia.id} • Version ${savedPia.version})`);
      }
    } catch (err) {
      console.error('Save PIA failed, applying local fallback update:', err);
    } finally {
      setActiveTab('directory');
    }
  };

  // Delete Assessment
  const handleDeletePia = async (id: string) => {
    try {
      await fetch(`/api/pias/${id}`, { method: 'DELETE' });
      setPias(prev => prev.filter(p => p.id !== id));
      setGaps(prev => prev.filter(g => g.piaId !== id));
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  // Update Gap Details
  const handleUpdateGap = async (gapId: string, updates: Partial<RemediationGap>) => {
    try {
      const res = await fetch(`/api/gaps/${gapId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updates),
      });
      if (res.ok) {
        const updated = await res.json();
        setGaps(prev => prev.map(g => (g.id === updated.id ? updated : g)));
      }
    } catch (err) {
      console.error('Update gap error:', err);
    }
  };

  // Add DPO Follow-Up Comment
  const handleAddFollowUp = async (gapId: string, comment: string, statusUpdate?: GapStatus) => {
    try {
      const res = await fetch(`/api/gaps/${gapId}/followup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          author: 'Amit Kumar Pandey (DPO)',
          role: 'Data Protection Officer',
          comment,
          statusUpdate,
        }),
      });
      if (res.ok) {
        const updated = await res.json();
        setGaps(prev => prev.map(g => (g.id === updated.id ? updated : g)));
      }
    } catch (err) {
      console.error('Add follow-up error:', err);
    }
  };

  // Create Manual Gap
  const handleCreateManualGap = async (gapData: Partial<RemediationGap>) => {
    try {
      const res = await fetch('/api/gaps', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(gapData),
      });
      if (res.ok) {
        const created = await res.json();
        setGaps(prev => [created, ...prev]);
        alert('Manual Gap item added to remediation log!');
      }
    } catch (err) {
      console.error('Create gap error:', err);
    }
  };

  // Update Sign-Off Endorsement
  const handleSignOff = async (piaId: string, role: string, name: string, signed: boolean) => {
    try {
      const res = await fetch(`/api/pias/${piaId}/sign-off`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, name, signed }),
      });
      if (res.ok) {
        const updatedPia = await res.json();
        setPias(prev => prev.map(p => (p.id === updatedPia.id ? updatedPia : p)));
        if (selectedPia?.id === updatedPia.id) setSelectedPia(updatedPia);
      }
    } catch (err) {
      console.error('Sign-off error:', err);
    }
  };

  const highRiskCount = pias.filter(
    p => p.riskResult?.riskLevel === 'High' || p.riskResult?.riskLevel === 'Critical'
  ).length;

  const openGapsCount = gaps.filter(g => g.status === 'Open' || g.status === 'Overdue').length;

  return (
    <div className="h-screen h-[100dvh] w-screen overflow-hidden bg-zinc-950 font-sans text-zinc-100 flex antialiased selection:bg-indigo-600 selection:text-white">
      {/* Collapsible Sidebar Navigation with Independent Scroll Pane */}
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isCollapsed={isSidebarCollapsed}
        setIsCollapsed={setIsSidebarCollapsed}
        isMobileOpen={isMobileSidebarOpen}
        setIsMobileOpen={setIsMobileSidebarOpen}
        totalPias={pias.length}
        highRiskCount={highRiskCount}
        openGapsCount={openGapsCount}
        workflowMode={workflowMode}
        setWorkflowMode={setWorkflowMode}
        currentUser={currentUser}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onOpenUserDirectory={() => {
          setWidgetsSubTab('user-directory');
          setActiveTab('widgets');
        }}
        onOpenSystemConfig={() => {
          setWidgetsSubTab('system-config');
          setActiveTab('widgets');
        }}
        onOpenServerHealth={() => {
          setWidgetsSubTab('server-health');
          setActiveTab('widgets');
        }}
        onNewAssessment={() => {
          setSelectedPia(null);
          setActiveTab('form');
        }}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
      />

      {/* Primary Viewport Area (Header + Main Grid Workspace) */}
      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden">
        {/* Sticky Top Utility Header */}
        <TopUtilityHeader
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isSidebarCollapsed={isSidebarCollapsed}
          setIsSidebarCollapsed={setIsSidebarCollapsed}
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
          totalPias={pias.length}
          highRiskCount={highRiskCount}
          openGapsCount={openGapsCount}
          workflowMode={workflowMode}
          setWorkflowMode={setWorkflowMode}
          currentUser={currentUser}
          onOpenAuthModal={() => setIsAuthModalOpen(true)}
          onOpenUserDirectory={() => {
            setWidgetsSubTab('user-directory');
            setActiveTab('widgets');
          }}
          onOpenSystemConfig={() => {
            setWidgetsSubTab('system-config');
            setActiveTab('widgets');
          }}
          onOpenServerHealth={() => {
            setWidgetsSubTab('server-health');
            setActiveTab('widgets');
          }}
          onNewAssessment={() => {
            setSelectedPia(null);
            setActiveTab('form');
          }}
        />

        {/* Main Content Workspace (Independent Scroll Pane, consistent 16-24px breathing room) */}
        <main className="flex-1 overflow-y-auto scroll-pane p-4 sm:p-5 md:p-6 lg:p-7">
          <div className="max-w-7xl mx-auto space-y-6">
            {activeTab === 'dashboard' && (
              <SummaryDashboard
                pias={pias}
                gaps={gaps}
                currentUser={currentUser}
                systemSetup={systemSetup}
                onSelectPia={(pia) => {
                  setSelectedPia(pia);
                  setActiveTab('form');
                }}
                onNewAssessment={() => {
                  setSelectedPia(null);
                  setActiveTab('form');
                }}
                onNavigateToGaps={() => setActiveTab('gaps')}
                onNavigateToDirectory={() => setActiveTab('directory')}
                onNavigateToBenchmarking={() => setActiveTab('benchmarking')}
                onNavigateToForecasting={() => setActiveTab('forecasting')}
                onNavigateToExecutive={() => setActiveTab('executive')}
              />
            )}

            {activeTab === 'executive' && (
              <ExecutiveSummaryView
                pias={pias}
                gaps={gaps}
                currentUser={currentUser}
                systemSetup={systemSetup}
                onSelectPia={(pia) => {
                  setSelectedPia(pia);
                  setActiveTab('form');
                }}
                onNavigateToGaps={() => setActiveTab('gaps')}
                onNavigateToDirectory={() => setActiveTab('directory')}
                onRefreshData={fetchInitialData}
              />
            )}

            {activeTab === 'benchmarking' && (
              <SectorBenchmarking
                pias={pias}
                gaps={gaps}
                onSelectPia={(pia) => {
                  setSelectedPia(pia);
                  setActiveTab('form');
                }}
                onNavigateToGaps={() => setActiveTab('gaps')}
                onNavigateToForecasting={() => setActiveTab('forecasting')}
              />
            )}

            {activeTab === 'forecasting' && (
              <PredictiveRiskForecasting
                pias={pias}
                gaps={gaps}
                onSelectPia={(pia) => {
                  setSelectedPia(pia);
                  setActiveTab('form');
                }}
                onNavigateToGaps={() => setActiveTab('gaps')}
                onNavigateToBenchmarking={() => setActiveTab('benchmarking')}
              />
            )}

            {activeTab === 'setup' && (
              <SetupPage
                currentSetup={systemSetup}
                onSaveSetup={updatedSetup => setSystemSetup(updatedSetup)}
                onSavePia={(piaDraft) => {
                  handleSavePia(piaDraft);
                  setActiveTab('directory');
                }}
                onNavigateToForm={() => {
                  setSelectedPia(null);
                  setActiveTab('form');
                }}
                onNavigateToDirectory={() => setActiveTab('directory')}
              />
            )}

            {activeTab === 'directory' && (
              <DirectoryView
                pias={pias}
                workflowMode={workflowMode}
                onSelectPia={pia => {
                  setSelectedPia(pia);
                  setActiveTab('form');
                }}
                onNewAssessment={() => {
                  setSelectedPia(null);
                  setActiveTab('form');
                }}
                onDeletePia={handleDeletePia}
                onViewReport={pia => {
                  setSelectedPia(pia);
                  setActiveTab('report');
                }}
              />
            )}

            {activeTab === 'form' && (
              <AssessmentForm
                initialPia={selectedPia}
                systemSetup={systemSetup}
                workflowMode={workflowMode}
                onSavePia={handleSavePia}
                onCancel={() => setActiveTab('directory')}
                onOpenSetup={() => setActiveTab('setup')}
              />
            )}

            {activeTab === 'gaps' && (
              <GapLogDashboard
                gaps={gaps}
                pias={pias}
                onUpdateGap={handleUpdateGap}
                onAddFollowUp={handleAddFollowUp}
                onCreateManualGap={handleCreateManualGap}
                onDeleteGap={id => setGaps(prev => prev.filter(g => g.id !== id))}
              />
            )}

            {activeTab === 'report' && (
              <ExportReportModal
                pias={pias}
                selectedPia={selectedPia}
                onSelectPia={setSelectedPia}
                onSignOff={handleSignOff}
              />
            )}

            {activeTab === 'widgets' && (
              <WidgetsPage
                authToken={authToken}
                initialSubTab={widgetsSubTab}
              />
            )}

            {/* Global Workspace Footer */}
            <footer className="mt-12 pt-6 pb-4 border-t border-zinc-800/80 text-xs text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>
                  Developed by{' '}
                  <a
                    href="https://www.technoscope.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors underline-offset-2 hover:underline"
                  >
                    www.technoscope.co.in
                  </a>
                </span>
                <span className="text-zinc-600 hidden sm:inline">•</span>
                <span>
                  License: <span className="font-mono text-zinc-300 font-medium">Proprietary</span>
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-400">
                <span>To consult connect with</span>
                <a
                  href="https://www.technoscope.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors underline-offset-2 hover:underline inline-flex items-center gap-1"
                >
                  <span>Technoscope</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </footer>
          </div>
        </main>
      </div>

      {/* Global Command Palette (Cmd + K / Ctrl + K) */}
      <CommandPaletteModal
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        pias={pias}
        onNavigateTab={setActiveTab}
        onSelectPia={(pia) => {
          setSelectedPia(pia);
          setActiveTab('form');
        }}
        onNewAssessment={() => {
          setSelectedPia(null);
          setActiveTab('form');
        }}
        workflowMode={workflowMode}
        setWorkflowMode={setWorkflowMode}
        onDownloadPdfReport={() => {
          generateSummaryPdfReport({
            pias,
            gaps,
            organizationName: systemSetup?.organizationName || 'Glocal Privacy & AI Governance Directorate',
            generatedBy: currentUser?.fullName 
              ? `${currentUser.fullName} (${currentUser.role === 'admin' ? 'Lead DPO Auditor' : 'Privacy Lead'})`
              : 'Chief Privacy Officer / Lead DPO Auditor',
          });
        }}
      />

      {/* Security Governance Modals */}
      <AuthModal
        isOpen={isAuthModalOpen}
        currentUser={currentUser}
        authToken={authToken}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        onLogout={handleLogout}
      />

      <UserDirectoryModal
        isOpen={isUserDirectoryOpen}
        authToken={authToken}
        onClose={() => setIsUserDirectoryOpen(false)}
      />

      <SystemConfigModal
        isOpen={isSystemConfigOpen}
        onClose={() => setIsSystemConfigOpen(false)}
      />

      {isServerHealthModalOpen && (
        <ServerHealthDashboard
          isModal
          onClose={() => setIsServerHealthModalOpen(false)}
        />
      )}
    </div>
  );
}

export default App;
