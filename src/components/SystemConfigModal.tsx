import React, { useState, useEffect } from 'react';
import { Server, Cpu, RefreshCw, CheckCircle2, XCircle, Database, Shield, Save, Sparkles, Terminal, Activity, Zap } from 'lucide-react';

interface DiscoveredService {
  name: string;
  url: string;
  status: 'online' | 'offline';
  type: string;
  latencyMs?: number;
}

interface ConfigData {
  appInstance: number;
  loopbackIp: string;
  host: string;
  port: number;
  pid: number;
  dbPath: string;
  ollamaEndpoint: string;
  ollamaModel: string;
  lmStudioEndpoint?: string;
  anythingLlmEndpoint?: string;
  discoveredServices: DiscoveredService[];
  lastScanTimestamp?: string;
  activeAiEngine: string;
}

interface SystemConfigModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  isEmbedded?: boolean;
}

export const SystemConfigModal: React.FC<SystemConfigModalProps> = ({
  isOpen = true,
  onClose,
  isEmbedded = false
}) => {
  const [config, setConfig] = useState<ConfigData | null>(null);
  const [loading, setLoading] = useState(false);
  const [scanning, setScanning] = useState(false);
  const [saving, setSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<string | null>(null);

  // Editable Form States
  const [ollamaEndpoint, setOllamaEndpoint] = useState('');
  const [ollamaModel, setOllamaModel] = useState('llama3');
  const [lmStudioEndpoint, setLmStudioEndpoint] = useState('');
  const [anythingLlmEndpoint, setAnythingLlmEndpoint] = useState('');
  const [appInstance, setAppInstance] = useState(3);

  useEffect(() => {
    if (isOpen || isEmbedded) {
      fetchConfig();
    }
  }, [isOpen, isEmbedded]);

  const fetchConfig = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/config');
      if (res.ok) {
        const data: ConfigData = await res.json();
        setConfig(data);
        setOllamaEndpoint(data.ollamaEndpoint || 'http://localhost:11434/api/generate');
        setOllamaModel(data.ollamaModel || 'llama3');
        setLmStudioEndpoint(data.lmStudioEndpoint || 'http://localhost:1234/v1/chat/completions');
        setAnythingLlmEndpoint(data.anythingLlmEndpoint || 'http://localhost:3001/api/v1');
        setAppInstance(data.appInstance || 3);
      }
    } catch (err) {
      console.error('Failed to load system config:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAutoDiscover = async () => {
    setScanning(true);
    setSaveMessage(null);
    try {
      const res = await fetch('/api/config/autodiscover', { method: 'POST' });
      if (res.ok) {
        const updated: ConfigData = await res.json();
        setConfig(updated);
        setOllamaEndpoint(updated.ollamaEndpoint || ollamaEndpoint);
        setOllamaModel(updated.ollamaModel || ollamaModel);
        setSaveMessage('Auto-discovery scan completed! Online services identified and auto-configured.');
      }
    } catch (err) {
      console.error('Auto discovery error:', err);
      setSaveMessage('Auto-discovery scan failed to reach local network server.');
    } finally {
      setScanning(false);
    }
  };

  const handleSaveConfig = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaveMessage(null);
    try {
      const res = await fetch('/api/config', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ollamaEndpoint,
          ollamaModel,
          lmStudioEndpoint,
          anythingLlmEndpoint,
          appInstance,
        }),
      });
      if (res.ok) {
        const updated: ConfigData = await res.json();
        setConfig(updated);
        setSaveMessage('System configuration saved and active immediately without server restart!');
      } else {
        setSaveMessage('Failed to update system configuration.');
      }
    } catch (err) {
      console.error('Save config error:', err);
      setSaveMessage('Error connecting to backend server.');
    } finally {
      setSaving(false);
    }
  };

  if (!isEmbedded && !isOpen) return null;

  const content = (
    <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl w-full overflow-hidden shadow-2xl text-zinc-100 ${isEmbedded ? '' : 'max-w-3xl my-8'}`}>
      {/* Header */}
      <div className="p-5 border-b border-zinc-800 bg-gradient-to-r from-zinc-950 via-zinc-900 to-zinc-950 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-cyan-950/80 border border-cyan-500/40 rounded-xl text-cyan-400">
            <Cpu className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              Server Environment & AI Auto-Discovery Console
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-800 rounded-md">
                ZERO-ENV CONFIG
              </span>
            </h2>
            <p className="text-xs text-zinc-400">
              Automatic service discovery, dynamic port allocation & air-gapped AI configuration.
            </p>
          </div>
        </div>
        {onClose && !isEmbedded && (
          <button
            onClick={onClose}
            className="p-1.5 text-zinc-400 hover:text-white bg-zinc-800/80 hover:bg-zinc-800 rounded-lg transition"
          >
            ✕
          </button>
        )}
      </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {saveMessage && (
            <div className="p-3.5 bg-cyan-950/60 border border-cyan-500/50 rounded-xl text-cyan-200 text-xs flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{saveMessage}</span>
            </div>
          )}

          {/* Quick Auto-Discovery Panel */}
          <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white">Local Service Auto-Discovery Engine</h3>
              </div>
              <button
                type="button"
                onClick={handleAutoDiscover}
                disabled={scanning}
                className="inline-flex items-center space-x-2 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold rounded-lg text-xs transition shadow-sm disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${scanning ? 'animate-spin' : ''}`} />
                <span>{scanning ? 'Scanning Local Ports...' : 'Run Auto-Discovery Scan'}</span>
              </button>
            </div>
            <p className="text-xs text-zinc-400">
              Scans local workstation loops (Ollama, LM Studio, LocalAI) and automatically binds active compliance engines without manual environment setup.
            </p>

            {/* Discovered Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {config?.discoveredServices?.map((service, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-lg border text-xs flex items-center justify-between ${
                    service.status === 'online'
                      ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-200'
                      : 'bg-zinc-900/60 border-zinc-800 text-zinc-400'
                  }`}
                >
                  <div className="space-y-0.5">
                    <div className="font-semibold flex items-center gap-1.5 text-white">
                      <span>{service.name}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 bg-zinc-800 text-zinc-300 rounded">
                        {service.type}
                      </span>
                    </div>
                    <div className="text-[11px] font-mono truncate max-w-[200px]">{service.url}</div>
                  </div>
                  <div className="flex items-center space-x-1 shrink-0">
                    {service.status === 'online' ? (
                      <span className="inline-flex items-center text-emerald-400 font-bold gap-1 text-[11px]">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Online {service.latencyMs ? `(${service.latencyMs}ms)` : ''}
                      </span>
                    ) : (
                      <span className="inline-flex items-center text-zinc-500 text-[11px] gap-1">
                        <XCircle className="w-3.5 h-3.5" />
                        Offline
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Runtime Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
              <div className="text-[10px] font-mono uppercase text-zinc-400">Active Port</div>
              <div className="text-base font-bold font-mono text-cyan-300">{config?.port || 3000}</div>
              <div className="text-[10px] text-zinc-500">Dynamic allocation</div>
            </div>

            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
              <div className="text-[10px] font-mono uppercase text-zinc-400">Process PID</div>
              <div className="text-base font-bold font-mono text-purple-300">{config?.pid || 'Native'}</div>
              <div className="text-[10px] text-zinc-500">Isolated Lockfile</div>
            </div>

            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
              <div className="text-[10px] font-mono uppercase text-zinc-400">Storage Engine</div>
              <div className="text-base font-bold font-mono text-emerald-300">SQLite / JSON</div>
              <div className="text-[10px] text-zinc-500 truncate">{config?.dbPath || 'data/pia_store.json'}</div>
            </div>

            <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800">
              <div className="text-[10px] font-mono uppercase text-zinc-400">AI Engine State</div>
              <div className="text-xs font-bold text-amber-300 truncate mt-1">
                {config?.activeAiEngine || 'Rule Engine'}
              </div>
              <div className="text-[10px] text-zinc-500">Air-gapped ready</div>
            </div>
          </div>

          {/* Configuration Form */}
          <form onSubmit={handleSaveConfig} className="space-y-4">
            <h3 className="text-sm font-bold text-white flex items-center gap-2 border-b border-zinc-800 pb-2">
              <Server className="w-4 h-4 text-cyan-400" />
              Dynamic Endpoint & Key Settings
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Local Ollama / AI REST Endpoint</label>
                <input
                  type="text"
                  value={ollamaEndpoint}
                  onChange={e => setOllamaEndpoint(e.target.value)}
                  placeholder="http://localhost:11434/api/generate"
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-100 focus:outline-none focus:border-cyan-500"
                />
                <p className="text-[10px] text-zinc-500">Auto-detected local LLM REST endpoint URL.</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Local LLM Model Identifier</label>
                <input
                  type="text"
                  value={ollamaModel}
                  onChange={e => setOllamaModel(e.target.value)}
                  placeholder="llama3, mistral, or phi3"
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-100 focus:outline-none focus:border-cyan-500"
                />
                <p className="text-[10px] text-zinc-500">Target local model name running on Ollama.</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">LM Studio OpenAI-Compat Endpoint</label>
                <input
                  type="text"
                  value={lmStudioEndpoint}
                  onChange={e => setLmStudioEndpoint(e.target.value)}
                  placeholder="http://localhost:1234/v1/chat/completions"
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-100 focus:outline-none focus:border-cyan-500"
                />
                <p className="text-[10px] text-zinc-500">Local LM Studio REST API endpoint.</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">Anything LLM Local API Base</label>
                <input
                  type="text"
                  value={anythingLlmEndpoint}
                  onChange={e => setAnythingLlmEndpoint(e.target.value)}
                  placeholder="http://localhost:3001/api/v1"
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-100 focus:outline-none focus:border-cyan-500"
                />
                <p className="text-[10px] text-zinc-500">Local Anything LLM server API base URL.</p>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-zinc-300">App Instance Index</label>
                <input
                  type="number"
                  value={appInstance}
                  onChange={e => setAppInstance(parseInt(e.target.value) || 1)}
                  className="w-full px-3 py-2 bg-zinc-950 border border-zinc-800 rounded-xl text-xs font-mono text-zinc-100 focus:outline-none focus:border-cyan-500"
                />
                <p className="text-[10px] text-zinc-500">Local workstation instance identifier.</p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between border-t border-zinc-800">
              <span className="text-[11px] text-zinc-500">
                All settings auto-persist to local runtime configuration file (<code className="font-mono text-zinc-400">data/runtime_config.json</code>).
              </span>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-400 hover:bg-cyan-300 text-zinc-950 font-bold rounded-xl text-xs transition shadow-md shadow-cyan-950/50"
              >
                <Save className="w-4 h-4" />
                <span>{saving ? 'Saving...' : 'Apply & Save Config'}</span>
              </button>
            </div>
          </form>
        </div>
    </div>
  );

  if (isEmbedded) {
    return content;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      {content}
    </div>
  );
};
