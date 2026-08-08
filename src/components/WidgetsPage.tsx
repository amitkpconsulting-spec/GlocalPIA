import React, { useState, useEffect } from 'react';
import { Activity, Cpu, Users, Layers, ChevronDown } from 'lucide-react';
import { ServerHealthDashboard } from './ServerHealthDashboard';
import { SystemConfigModal } from './SystemConfigModal';
import { UserDirectoryModal } from './UserDirectoryModal';

export type WidgetSubTab = 'server-health' | 'system-config' | 'user-directory';

interface WidgetsPageProps {
  authToken: string | null;
  initialSubTab?: WidgetSubTab;
}

export const WidgetsPage: React.FC<WidgetsPageProps> = ({
  authToken,
  initialSubTab = 'server-health',
}) => {
  const [activeSubTab, setActiveSubTab] = useState<WidgetSubTab>(initialSubTab);
  const [isConfigDropdownOpen, setIsConfigDropdownOpen] = useState(false);

  useEffect(() => {
    setActiveSubTab(initialSubTab);
  }, [initialSubTab]);

  const isConfigActive = activeSubTab === 'system-config' || activeSubTab === 'user-directory';

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Page Header */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="p-3 bg-gradient-to-br from-cyan-950 to-purple-950 border border-cyan-500/40 rounded-2xl text-cyan-400 shadow-md">
            <Layers className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                System Widgets & Operations Console
              </h1>
              <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider bg-cyan-950 text-cyan-300 border border-cyan-800 rounded-md">
                WIDGETS HUB
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              Integrated monitoring, air-gapped AI auto-discovery & user directory governance widgets.
            </p>
          </div>
        </div>

        {/* Sub-tab Selectors with Configuration Dropdown */}
        <div className="flex items-center bg-zinc-950 p-1.5 rounded-xl border border-zinc-800 shrink-0 gap-1.5">
          <button
            onClick={() => {
              setActiveSubTab('server-health');
              setIsConfigDropdownOpen(false);
            }}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
              activeSubTab === 'server-health'
                ? 'bg-emerald-950 text-emerald-300 border border-emerald-700/60 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
            }`}
          >
            <Activity className="w-4 h-4 text-emerald-400" />
            <span>Server Health</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse ml-0.5" />
          </button>

          {/* Configuration Dropdown Selector */}
          <div className="relative">
            <button
              onClick={() => setIsConfigDropdownOpen(!isConfigDropdownOpen)}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs font-bold transition whitespace-nowrap ${
                isConfigActive
                  ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/60 shadow-sm'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
              }`}
            >
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span>
                Configuration: {activeSubTab === 'user-directory' ? 'User Directory' : 'System Config'}
              </span>
              <ChevronDown className={`w-3.5 h-3.5 ml-1 transition-transform duration-200 ${isConfigDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isConfigDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-64 bg-zinc-900 border border-zinc-700/90 rounded-xl shadow-2xl z-50 p-1.5 space-y-1 backdrop-blur-xl"
                onMouseLeave={() => setIsConfigDropdownOpen(false)}
              >
                <div className="px-2.5 py-1 text-[10px] font-mono font-bold text-zinc-400 uppercase tracking-wider border-b border-zinc-800">
                  Configuration Options
                </div>

                <button
                  onClick={() => {
                    setActiveSubTab('system-config');
                    setIsConfigDropdownOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2.5 p-2 rounded-lg text-xs font-bold transition text-left ${
                    activeSubTab === 'system-config'
                      ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-800'
                      : 'text-zinc-300 hover:bg-zinc-800/80'
                  }`}
                >
                  <Cpu className="w-4 h-4 text-cyan-400 shrink-0" />
                  <div>
                    <div>System Config</div>
                    <div className="text-[10px] text-zinc-400 font-normal">
                      AI Auto-Discovery & Zero-ENV Config
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => {
                    setActiveSubTab('user-directory');
                    setIsConfigDropdownOpen(false);
                  }}
                  className={`w-full flex items-center space-x-2.5 p-2 rounded-lg text-xs font-bold transition text-left ${
                    activeSubTab === 'user-directory'
                      ? 'bg-purple-950/80 text-purple-300 border border-purple-800'
                      : 'text-zinc-300 hover:bg-zinc-800/80'
                  }`}
                >
                  <Users className="w-4 h-4 text-purple-400 shrink-0" />
                  <div>
                    <div>User Directory</div>
                    <div className="text-[10px] text-zinc-400 font-normal">
                      Admin User Account Provisioning
                    </div>
                  </div>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Widget Render Container */}
      <div className="min-h-[500px]">
        {activeSubTab === 'server-health' && (
          <ServerHealthDashboard isModal={false} />
        )}

        {activeSubTab === 'system-config' && (
          <SystemConfigModal isEmbedded={true} />
        )}

        {activeSubTab === 'user-directory' && (
          <UserDirectoryModal isEmbedded={true} authToken={authToken} />
        )}
      </div>
    </div>
  );
};
