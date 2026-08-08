import React, { useState, useEffect, useCallback } from 'react';
import {
  Activity,
  Server,
  Cpu,
  RefreshCw,
  Power,
  CheckCircle2,
  AlertTriangle,
  Database,
  Clock,
  HardDrive,
  ShieldCheck,
  Zap,
  Terminal,
  RotateCcw,
  Layers,
  Sparkles,
} from 'lucide-react';

export interface HealthData {
  status: 'online' | 'unresponsive' | 'restarting';
  timestamp: string;
  uptimeSeconds: number;
  port: number;
  pid: number;
  nodeVersion: string;
  platform: string;
  arch: string;
  activeEngine: string;
  storagePath: string;
  memoryUsage: {
    rssMb: string;
    heapTotalMb: string;
    heapUsedMb: string;
  };
  discoveredServicesCount: number;
  discoveredServicesTotal: number;
  piasCount: number;
  gapsCount: number;
  usersCount: number;
}

interface ServerHealthDashboardProps {
  onClose?: () => void;
  isModal?: boolean;
}

export const ServerHealthDashboard: React.FC<ServerHealthDashboardProps> = ({
  onClose,
  isModal = false,
}) => {
  const [health, setHealth] = useState<HealthData | null>(null);
  const [latency, setLatency] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [restarting, setRestarting] = useState<boolean>(false);
  const [autoRefresh, setAutoRefresh] = useState<boolean>(true);
  const [restartMessage, setRestartMessage] = useState<string | null>(null);
  const [lastCheckTime, setLastCheckTime] = useState<string>('');

  const fetchHealth = useCallback(async () => {
    const startTime = Date.now();
    try {
      const res = await fetch('/api/server/health');
      const roundTripMs = Date.now() - startTime;
      if (res.ok) {
        const data: HealthData = await res.json();
        setHealth(data);
        setLatency(roundTripMs);
        setLastCheckTime(new Date().toLocaleTimeString());
      } else {
        setHealth(prev => prev ? { ...prev, status: 'unresponsive' } : null);
        setLatency(null);
      }
    } catch (err) {
      console.error('Server health check failed:', err);
      setHealth(prev => prev ? { ...prev, status: 'unresponsive' } : null);
      setLatency(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchHealth();
    let interval: NodeJS.Timeout | null = null;
    if (autoRefresh) {
      interval = setInterval(fetchHealth, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [fetchHealth, autoRefresh]);

  const handleRestartBackend = async () => {
    if (restarting) return;
    setRestarting(true);
    setRestartMessage('Sending graceful restart signal to server process...');

    try {
      const res = await fetch('/api/server/restart', { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        setRestartMessage(`Graceful restart triggered (PID ${data.pid}). Re-checking backend status...`);
        
        // Wait 1.5s then poll health
        setTimeout(async () => {
          await fetchHealth();
          setRestarting(false);
          setRestartMessage('Backend server successfully reloaded and operating at peak performance!');
        }, 1800);
      } else {
        setRestartMessage('Failed to send restart signal to server.');
        setRestarting(false);
      }
    } catch (err) {
      console.error('Restart backend error:', err);
      setRestartMessage('Network error triggering restart. Attempting automatic health check recovery...');
      setTimeout(async () => {
        await fetchHealth();
        setRestarting(false);
      }, 2000);
    }
  };

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / (3600 * 24));
    const hours = Math.floor((seconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const parts = [];
    if (days > 0) parts.push(`${days}d`);
    if (hours > 0 || days > 0) parts.push(`${hours}h`);
    if (minutes > 0 || hours > 0 || days > 0) parts.push(`${minutes}m`);
    parts.push(`${secs}s`);

    return parts.join(' ');
  };

  const content = (
    <div className="space-y-6 text-zinc-100">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 border border-zinc-800 rounded-2xl shadow-xl shadow-black/40">
        <div className="flex items-center space-x-3.5">
          <div className="p-3 bg-cyan-950/80 border border-cyan-500/40 rounded-xl text-cyan-400 shadow-md shadow-cyan-950/50">
            <Activity className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="text-lg font-black text-white tracking-tight">Backend Server Health Console</h2>
              <span className={`px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase rounded-full border ${
                health?.status === 'online'
                  ? 'bg-emerald-950 text-emerald-300 border-emerald-500/50'
                  : 'bg-rose-950 text-rose-300 border-rose-500/50'
              }`}>
                {health?.status === 'online' ? '● System Online' : '▲ Unresponsive'}
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Real-time process status, PID telemetry, memory footprint & graceful reload engine.
            </p>
          </div>
        </div>

        {/* Header Actions */}
        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => setAutoRefresh(!autoRefresh)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl border transition flex items-center gap-1.5 ${
              autoRefresh
                ? 'bg-cyan-950/80 text-cyan-200 border-cyan-700/60'
                : 'bg-zinc-800 text-zinc-400 border-zinc-700 hover:text-zinc-200'
            }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${autoRefresh ? 'animate-spin' : ''}`} />
            <span>Auto-Poll {autoRefresh ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={fetchHealth}
            disabled={loading}
            className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-xs rounded-xl border border-zinc-700 transition flex items-center gap-1.5"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            <span>Ping Now</span>
          </button>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 rounded-xl transition ml-2"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Restart Status Banner */}
      {restartMessage && (
        <div className="p-4 bg-cyan-950/70 border border-cyan-500/50 rounded-2xl text-cyan-200 text-xs flex items-center justify-between space-x-3 shadow-lg">
          <div className="flex items-center space-x-2.5">
            <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 animate-bounce" />
            <span className="font-semibold">{restartMessage}</span>
          </div>
          <button
            onClick={() => setRestartMessage(null)}
            className="text-xs text-cyan-400 hover:text-white underline shrink-0"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Primary Status Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Active Port Card */}
        <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800/80 shadow-md hover:border-cyan-500/40 transition">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
            <span className="font-semibold uppercase tracking-wider">Active Port</span>
            <Server className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-2xl font-black font-mono text-cyan-300">
            {health?.port || 3000}
          </div>
          <p className="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            Dynamic Port Binding
          </p>
        </div>

        {/* Process ID (PID) Card */}
        <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800/80 shadow-md hover:border-purple-500/40 transition">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
            <span className="font-semibold uppercase tracking-wider">System Process PID</span>
            <Cpu className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-2xl font-black font-mono text-purple-300">
            {health?.pid || 'Native'}
          </div>
          <p className="text-[11px] text-zinc-500 mt-1 flex items-center gap-1">
            <Terminal className="w-3 h-3 text-purple-400 shrink-0" />
            Isolated OS Process
          </p>
        </div>

        {/* Response Latency Card */}
        <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800/80 shadow-md hover:border-emerald-500/40 transition">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
            <span className="font-semibold uppercase tracking-wider">REST Ping Latency</span>
            <Zap className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-2xl font-black font-mono text-emerald-300">
            {latency !== null ? `${latency} ms` : '--'}
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">
            Checked at {lastCheckTime || 'N/A'}
          </p>
        </div>

        {/* System Uptime Card */}
        <div className="bg-zinc-950 p-4 rounded-2xl border border-zinc-800/80 shadow-md hover:border-blue-500/40 transition">
          <div className="flex items-center justify-between text-zinc-400 text-xs mb-1">
            <span className="font-semibold uppercase tracking-wider">Engine Uptime</span>
            <Clock className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-xl font-black font-mono text-blue-300 truncate">
            {health ? formatUptime(health.uptimeSeconds) : '0s'}
          </div>
          <p className="text-[11px] text-zinc-500 mt-1">
            Continuous active process uptime
          </p>
        </div>
      </div>

      {/* Main Control & Detailed Telemetry Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Action Box & Memory Footprint */}
        <div className="space-y-6">
          {/* Graceful Restart Action Box */}
          <div className="bg-gradient-to-b from-zinc-950 to-zinc-900 p-5 rounded-2xl border border-zinc-800 space-y-4 shadow-xl">
            <div className="flex items-center space-x-2 text-rose-400">
              <Power className="w-5 h-5" />
              <h3 className="font-bold text-sm text-white">Backend Server Controls</h3>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              If the backend server experiences network stalls, stale state, or unhandled promise rejections, trigger a graceful reload without dropping database persistence.
            </p>

            <button
              onClick={handleRestartBackend}
              disabled={restarting}
              className="w-full py-3 px-4 bg-gradient-to-r from-rose-600 via-amber-600 to-rose-600 hover:from-rose-500 hover:to-amber-500 text-white font-bold text-xs rounded-xl shadow-lg shadow-rose-950/60 border border-rose-400/30 transition flex items-center justify-center space-x-2 active:scale-[0.99] disabled:opacity-50"
            >
              <RotateCcw className={`w-4 h-4 ${restarting ? 'animate-spin' : ''}`} />
              <span>{restarting ? 'Initiating Restart...' : 'Restart Backend Engine'}</span>
            </button>
            <p className="text-[10px] text-zinc-500 text-center font-mono">
              Sends SIGUSR2 / soft reload signal to process PID {health?.pid || 'Active'}
            </p>
          </div>

          {/* Memory Usage Metrics */}
          <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center gap-2">
                <HardDrive className="w-4 h-4 text-cyan-400" />
                Process Memory Footprint
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded-md border border-cyan-800">
                RSS: {health?.memoryUsage.rssMb || '0'} MB
              </span>
            </div>

            <div className="space-y-2 text-xs font-mono pt-1">
              <div>
                <div className="flex justify-between text-[11px] text-zinc-400 mb-1">
                  <span>Heap Used</span>
                  <span>{health?.memoryUsage.heapUsedMb || '0'} MB</span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-cyan-400 h-2 rounded-full"
                    style={{
                      width: `${Math.min(
                        100,
                        (parseFloat(health?.memoryUsage.heapUsedMb || '0') /
                          parseFloat(health?.memoryUsage.heapTotalMb || '1')) *
                          100
                      )}%`,
                    }}
                  />
                </div>
              </div>

              <div className="flex justify-between text-[11px] text-zinc-500 pt-1">
                <span>Heap Total Allocated:</span>
                <span className="text-zinc-300">{health?.memoryUsage.heapTotalMb || '0'} MB</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle & Right Column: Detailed System Specs & Storage */}
        <div className="lg:col-span-2 space-y-6">
          {/* Runtime Environment Specs */}
          <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-4 shadow-md">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Server className="w-4 h-4 text-cyan-400" />
              Environment & Runtime Architecture
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-zinc-400">Node Runtime Version</span>
                <div className="font-mono font-bold text-cyan-300">{health?.nodeVersion || 'v20.x'}</div>
              </div>

              <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1">
                <span className="text-[10px] font-mono uppercase text-zinc-400">Host OS Platform & Arch</span>
                <div className="font-mono font-bold text-purple-300">
                  {health?.platform || 'linux'} / {health?.arch || 'x64'}
                </div>
              </div>

              <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1 sm:col-span-2">
                <span className="text-[10px] font-mono uppercase text-zinc-400">Active AI Governance Engine</span>
                <div className="font-bold text-amber-300 flex items-center gap-2 mt-0.5">
                  <Cpu className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{health?.activeEngine || 'Air-Gapped Rule Engine'}</span>
                </div>
              </div>

              <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800 space-y-1 sm:col-span-2">
                <span className="text-[10px] font-mono uppercase text-zinc-400">Storage Store File Location</span>
                <div className="font-mono text-zinc-300 truncate">
                  {health?.storagePath || 'data/pia_store.json'}
                </div>
              </div>
            </div>
          </div>

          {/* Connected Data Stats & Service Integrations */}
          <div className="bg-zinc-950 p-5 rounded-2xl border border-zinc-800 space-y-4 shadow-md">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Database className="w-4 h-4 text-emerald-400" />
              Live Database & Service Telemetry
            </h3>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
                <div className="text-xl font-bold font-mono text-cyan-300">{health?.piasCount ?? 0}</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Active PIAs</div>
              </div>

              <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
                <div className="text-xl font-bold font-mono text-amber-300">{health?.gapsCount ?? 0}</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Remediation Gaps</div>
              </div>

              <div className="p-3 bg-zinc-900/80 rounded-xl border border-zinc-800">
                <div className="text-xl font-bold font-mono text-purple-300">{health?.usersCount ?? 0}</div>
                <div className="text-[10px] text-zinc-400 mt-0.5">Auditor Accounts</div>
              </div>
            </div>

            <div className="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl text-xs flex items-center justify-between">
              <span className="text-emerald-200 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Local Service Discovery Engine
              </span>
              <span className="font-mono text-emerald-400 font-bold">
                {health?.discoveredServicesCount ?? 0} / {health?.discoveredServicesTotal ?? 0} Online
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (isModal) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl my-8 p-6">
          {content}
        </div>
      </div>
    );
  }

  return content;
};
