import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import { PIAAssessment, RemediationGap, GapStatus, DeltaLogEntry, ActionExecutedType, AppUser, AuthSession, SystemSetupConfig } from './src/types';
import { INITIAL_PIAS, INITIAL_GAPS } from './src/data/mockData';
import { calculatePIARisk, calculateSLA } from './src/utils/riskCalculator';
import { generateFID, generateBID, createProvenanceEntry, bumpVersion } from './src/utils/provenanceUtils';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// Local Data Storage Directory Setup
const DATA_DIR = path.join(process.cwd(), 'data');
const LOGS_DIR = path.join(process.cwd(), 'logs');
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(LOGS_DIR)) fs.mkdirSync(LOGS_DIR, { recursive: true });

const STORE_FILE = path.join(DATA_DIR, 'pia_store.json');
const PID_FILE = path.join(LOGS_DIR, 'app.pid');

const CONFIG_FILE = path.join(DATA_DIR, 'runtime_config.json');

interface DiscoveredService {
  name: string;
  url: string;
  status: 'online' | 'offline';
  type: string;
  latencyMs?: number;
}

interface RuntimeConfig {
  appInstance: number;
  loopbackIp: string;
  host: string;
  port: number;
  dbPath: string;
  ollamaEndpoint: string;
  ollamaModel: string;
  lmStudioEndpoint: string;
  anythingLlmEndpoint: string;
  autoDiscoverOnStartup: boolean;
  discoveredServices: DiscoveredService[];
  lastScanTimestamp?: string;
  systemSetup?: SystemSetupConfig;
}

function loadRuntimeConfig(): RuntimeConfig {
  const defaultConfig: RuntimeConfig = {
    appInstance: 1,
    loopbackIp: '127.0.0.1',
    host: process.env.HOST || '0.0.0.0',
    port: PORT,
    dbPath: path.join(DATA_DIR, 'pia_store.json'),
    ollamaEndpoint: process.env.OLLAMA_ENDPOINT || 'http://localhost:11434/api/generate',
    ollamaModel: process.env.OLLAMA_MODEL || 'llama3',
    lmStudioEndpoint: process.env.LM_STUDIO_ENDPOINT || 'http://localhost:1234/v1/chat/completions',
    anythingLlmEndpoint: process.env.ANYTHING_LLM_ENDPOINT || 'http://localhost:3001/api/v1',
    autoDiscoverOnStartup: true,
    systemSetup: {
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
    },
    discoveredServices: [
      { name: 'Ollama Local AI', url: 'http://localhost:11434/api/tags', status: 'offline', type: 'Local REST' },
      { name: 'LM Studio OpenAI Compat', url: 'http://localhost:1234/v1/models', status: 'offline', type: 'Local REST' },
      { name: 'Anything LLM Local API', url: 'http://localhost:3001/api/v1/auth', status: 'offline', type: 'Local REST' },
      { name: 'LocalAI Container Engine', url: 'http://localhost:8080/v1/models', status: 'offline', type: 'Local REST' },
    ]
  };

  if (fs.existsSync(CONFIG_FILE)) {
    try {
      const content = fs.readFileSync(CONFIG_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      return { ...defaultConfig, ...parsed };
    } catch (err) {
      console.warn('[Runtime Config] Could not parse runtime_config.json, using defaults:', err);
    }
  }
  return defaultConfig;
}

let runtimeConfig: RuntimeConfig = loadRuntimeConfig();

function saveRuntimeConfig() {
  try {
    fs.writeFileSync(CONFIG_FILE, JSON.stringify(runtimeConfig, null, 2), 'utf-8');
  } catch (err) {
    console.error('[Runtime Config] Failed to write config file:', err);
  }
}

async function autoDiscoverServices(): Promise<DiscoveredService[]> {
  const targets = [
    { name: 'Ollama Local AI', url: 'http://localhost:11434/api/tags', generateUrl: 'http://localhost:11434/api/generate', type: 'Local REST' },
    { name: 'LM Studio OpenAI Compat', url: 'http://localhost:1234/v1/models', generateUrl: 'http://localhost:1234/v1/chat/completions', type: 'Local REST' },
    { name: 'Anything LLM Local API', url: 'http://localhost:3001/api/v1/auth', generateUrl: 'http://localhost:3001/api/v1', type: 'Local REST' },
    { name: 'LocalAI Container Engine', url: 'http://localhost:8080/v1/models', generateUrl: 'http://localhost:8080/v1/chat/completions', type: 'Local REST' },
  ];

  const results: DiscoveredService[] = [];

  for (const t of targets) {
    const start = Date.now();
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 1200);
      const res = await fetch(t.url, { signal: controller.signal });
      clearTimeout(timeoutId);
      const latencyMs = Date.now() - start;

      if (res.ok || res.status < 500) {
        results.push({ name: t.name, url: t.url, status: 'online', type: t.type, latencyMs });
        // Automatically bind active endpoint if not previously configured
        if (!runtimeConfig.ollamaEndpoint || runtimeConfig.ollamaEndpoint.includes('localhost:11434')) {
          runtimeConfig.ollamaEndpoint = t.generateUrl;
        }
      } else {
        results.push({ name: t.name, url: t.url, status: 'offline', type: t.type });
      }
    } catch (err) {
      results.push({ name: t.name, url: t.url, status: 'offline', type: t.type });
    }
  }

  runtimeConfig.discoveredServices = results;
  runtimeConfig.lastScanTimestamp = new Date().toISOString();
  saveRuntimeConfig();

  return results;
}

// Initial silent auto-discovery
autoDiscoverServices().catch(console.warn);

// Write PID File for process isolation & port collision prevention
fs.writeFileSync(PID_FILE, JSON.stringify({ pid: process.pid, port: PORT, startTime: new Date().toISOString() }));

process.on('exit', () => {
  try { if (fs.existsSync(PID_FILE)) fs.unlinkSync(PID_FILE); } catch (e) {}
});

// Persistent File Storage Helper
function loadStore() {
  if (fs.existsSync(STORE_FILE)) {
    try {
      const content = fs.readFileSync(STORE_FILE, 'utf-8');
      const parsed = JSON.parse(content);
      return {
        pias: parsed.pias || [...INITIAL_PIAS],
        gaps: parsed.gaps || [...INITIAL_GAPS],
        users: parsed.users || initialUsers,
        userPasswords: parsed.userPasswords || initialPasswords,
        securityAuditLogs: parsed.securityAuditLogs || initialSecurityLogs,
      };
    } catch (err) {
      console.warn('[PIA Storage] Error reading store file, initializing from seed defaults:', err);
    }
  }
  return {
    pias: [...INITIAL_PIAS],
    gaps: [...INITIAL_GAPS],
    users: initialUsers,
    userPasswords: initialPasswords,
    securityAuditLogs: initialSecurityLogs,
  };
}

const initialUsers: AppUser[] = [
  {
    id: 'USR-ADMIN-01',
    username: 'admin',
    fullName: 'Amit Kumar Pandey (DPO Lead Auditor)',
    corporateEmail: 'dpo.lead@enterprise-governance.org',
    assignedDepartment: 'Data Protection & Compliance Office',
    role: 'admin',
    scopeLevel: 'Full System Auditor & Governance Lead',
    status: 'Active',
    requiresPasswordReset: true,
    mfaEnabled: false,
    failedLoginAttempts: 0,
    createdAt: '2026-01-01T08:00:00Z',
  },
  {
    id: 'USR-2026-SLIN',
    username: 'slin',
    fullName: 'Dr. Sarah Lin',
    corporateEmail: 'sarah.lin@healthtech.org',
    assignedDepartment: 'HealthTech Innovation Labs',
    role: 'frontend_user',
    scopeLevel: 'Clinical Diagnostic AI Lead',
    status: 'Active',
    requiresPasswordReset: true,
    mfaEnabled: true,
    failedLoginAttempts: 0,
    createdAt: '2026-06-01T10:00:00Z',
  },
  {
    id: 'USR-2026-ARIV',
    username: 'arivera',
    fullName: 'Alex Rivera',
    corporateEmail: 'alex.rivera@fintech-ops.com',
    assignedDepartment: 'FinTech Treasury Operations',
    role: 'frontend_user',
    scopeLevel: 'Senior Payment Systems Lead',
    status: 'Active',
    requiresPasswordReset: true,
    mfaEnabled: false,
    failedLoginAttempts: 0,
    createdAt: '2026-05-01T11:00:00Z',
  },
  {
    id: 'USR-2026-DKIM',
    username: 'dkim',
    fullName: 'David Kim',
    corporateEmail: 'david.kim@people-culture.org',
    assignedDepartment: 'People & Culture',
    role: 'frontend_user',
    scopeLevel: 'HR Operations Manager',
    status: 'Active',
    requiresPasswordReset: false,
    mfaEnabled: true,
    failedLoginAttempts: 0,
    createdAt: '2026-02-01T09:00:00Z',
  },
];

const initialPasswords: Record<string, string> = {
  admin: 'admin',
  slin: 'Temp1234!',
  arivera: 'Temp1234!',
  dkim: 'Temp1234!',
};

const initialSecurityLogs = [
  {
    id: 'SEC-LOG-001',
    timestamp: '2026-06-01T08:00:00Z',
    userId: 'USR-ADMIN-01',
    action: 'SYSTEM_INITIALIZATION',
    details: 'Initial Master Admin Directory Provisioned',
    ip: '127.0.0.1',
  },
];

// Initialize Persistent Store
const loadedStore = loadStore();
let pias: PIAAssessment[] = loadedStore.pias;
let gaps: RemediationGap[] = loadedStore.gaps;
let users: AppUser[] = loadedStore.users;
let userPasswords: Record<string, string> = loadedStore.userPasswords;
let securityAuditLogs = loadedStore.securityAuditLogs;

function saveStore() {
  try {
    fs.writeFileSync(
      STORE_FILE,
      JSON.stringify({ pias, gaps, users, userPasswords, securityAuditLogs }, null, 2),
      'utf-8'
    );
  } catch (err) {
    console.error('[PIA Storage] Failed to write persistent store:', err);
  }
}

// Active Session Store (token -> AuthSession)
const activeSessions: Record<string, AuthSession> = {};

// Helper: Check session validity (15 minute inactivity timeout)
function getValidSession(token: string | undefined): AuthSession | null {
  if (!token) return null;
  const session = activeSessions[token];
  if (!session) return null;

  const now = Date.now();
  const lastActive = new Date(session.lastActiveTime).getTime();
  const INACTIVITY_LIMIT_MS = 15 * 60 * 1000;

  if (now - lastActive > INACTIVITY_LIMIT_MS) {
    delete activeSessions[token];
    return null;
  }

  session.lastActiveTime = new Date().toISOString();
  return session;
}

// ================= API ROUTES =================

// ================= AUTHENTICATION & SECURITY GOVERNANCE ROUTES =================

// POST /api/auth/login - Multi-tier Authentication & Lockout Protection
app.post('/api/auth/login', (req, res) => {
  const { username, password, targetRole } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const cleanUsername = username.trim().toLowerCase();
  const user = users.find(u => u.username.toLowerCase() === cleanUsername);

  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Directory Governance: Check if Account is Revoked
  if (user.status === 'Revoked') {
    return res.status(403).json({ error: 'Account access has been revoked by a Backend Auditor.' });
  }

  // Rate Limiting & Lockout Check (15 Minutes Lockout)
  if (user.lockoutUntil) {
    const lockoutEnd = new Date(user.lockoutUntil).getTime();
    const now = Date.now();
    if (now < lockoutEnd) {
      const remainingMins = Math.ceil((lockoutEnd - now) / (60 * 1000));
      return res.status(429).json({
        error: `Account locked due to 5 consecutive failed login attempts. Try again in ${remainingMins} minute(s) or contact a Backend Auditor.`,
      });
    } else {
      // Lockout expired, reset counters
      user.lockoutUntil = null;
      user.failedLoginAttempts = 0;
      user.status = 'Active';
    }
  }

  // Role Mismatch Warning Check
  if (targetRole && targetRole === 'admin' && user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Account lacks Backend Auditor (Admin) permissions.' });
  }

  // Password Verification
  const correctPassword = userPasswords[user.username];
  if (password !== correctPassword) {
    user.failedLoginAttempts += 1;
    securityAuditLogs.push({
      id: `SEC-LOG-${Date.now()}`,
      timestamp: new Date().toISOString(),
      userId: user.id,
      action: 'LOGIN_FAILED',
      details: `Failed password attempt (${user.failedLoginAttempts}/5)`,
      ip: req.ip || '127.0.0.1',
    });

    if (user.failedLoginAttempts >= 5) {
      const lockUntilIso = new Date(Date.now() + 15 * 60 * 1000).toISOString();
      user.lockoutUntil = lockUntilIso;
      user.status = 'Locked';

      securityAuditLogs.push({
        id: `SEC-LOG-${Date.now()}`,
        timestamp: new Date().toISOString(),
        userId: user.id,
        action: 'ACCOUNT_LOCKED',
        details: 'Locked for 15 minutes due to 5 consecutive failed attempts',
        ip: req.ip || '127.0.0.1',
      });

      return res.status(429).json({
        error: 'Account locked for 15 minutes due to 5 consecutive failed login attempts.',
      });
    }

    return res.status(401).json({
      error: `Invalid credentials. Failed attempt ${user.failedLoginAttempts} of 5.`,
    });
  }

  // Authentication Successful -> Reset Lockout Counters
  user.failedLoginAttempts = 0;
  user.lockoutUntil = null;
  user.lastLoginAt = new Date().toISOString();

  const token = `AUTH-TOK-${user.id}-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
  const nowIso = new Date().toISOString();

  activeSessions[token] = {
    token,
    user,
    loginTime: nowIso,
    lastActiveTime: nowIso,
  };

  securityAuditLogs.push({
    id: `SEC-LOG-${Date.now()}`,
    timestamp: nowIso,
    userId: user.id,
    action: 'USER_AUTHENTICATED',
    details: `Successful sign-in as ${user.role.toUpperCase()}`,
    ip: req.ip || '127.0.0.1',
  });

  res.json({
    token,
    user,
    requiresPasswordReset: user.requiresPasswordReset,
    message: user.requiresPasswordReset
      ? 'Mandatory password reset required upon initial sign-in.'
      : 'Authentication successful',
  });
});

// POST /api/auth/reset-password - Mandatory Password Reset
app.post('/api/auth/reset-password', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const session = getValidSession(token);

  if (!session) {
    return res.status(401).json({ error: 'Session expired or invalid token. Please log in again.' });
  }

  const { newPassword } = req.body;
  if (!newPassword || newPassword.length < 6) {
    return res.status(400).json({ error: 'New password must be at least 6 characters long.' });
  }

  const user = session.user;
  userPasswords[user.username] = newPassword;
  user.requiresPasswordReset = false;

  securityAuditLogs.push({
    id: `SEC-LOG-${Date.now()}`,
    timestamp: new Date().toISOString(),
    userId: user.id,
    action: 'PASSWORD_RESET_COMPLETED',
    details: 'User updated initial temporary password.',
    ip: req.ip || '127.0.0.1',
  });

  res.json({ success: true, user, message: 'Password updated successfully.' });
});

// POST /api/auth/mfa-setup - 2FA / MFA Establishment
app.post('/api/auth/mfa-setup', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const session = getValidSession(token);

  if (!session) {
    return res.status(401).json({ error: 'Session expired or invalid token.' });
  }

  const user = session.user;
  user.mfaEnabled = true;
  user.mfaSecret = `MFA-KEY-${Date.now()}-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;

  securityAuditLogs.push({
    id: `SEC-LOG-${Date.now()}`,
    timestamp: new Date().toISOString(),
    userId: user.id,
    action: 'MFA_ESTABLISHED',
    details: 'User enabled Multi-Factor Authentication',
    ip: req.ip || '127.0.0.1',
  });

  res.json({ success: true, user, message: 'MFA established successfully.' });
});

// GET /api/auth/me - Validate Session & Profile Check (15 min auto-timeout)
app.get('/api/auth/me', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const session = getValidSession(token);

  if (!session) {
    return res.status(401).json({ error: 'Session expired due to 15 minutes of inactivity.' });
  }

  res.json({ user: session.user, session });
});

// POST /api/auth/logout - Terminate Session
app.post('/api/auth/logout', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (token && activeSessions[token]) {
    delete activeSessions[token];
  }
  res.json({ success: true, message: 'Logged out successfully.' });
});

// ================= ADMIN USER DIRECTORY & PROVISIONING ROUTES =================

// GET /api/admin/users - Backend Auditor Directory Management
app.get('/api/admin/users', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const session = getValidSession(token);

  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Backend Auditor privileges required.' });
  }

  res.json(users);
});

// POST /api/admin/users - Provision New Frontend User
app.post('/api/admin/users', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const session = getValidSession(token);

  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Backend Auditor privileges required.' });
  }

  const { fullName, corporateEmail, assignedDepartment, username, scopeLevel } = req.body;

  if (!fullName || !corporateEmail || !username || !assignedDepartment) {
    return res.status(400).json({
      error: 'Full Name, Corporate Email, Username, and Assigned Department are required.',
    });
  }

  const cleanUsername = username.trim().toLowerCase();
  if (users.some(u => u.username.toLowerCase() === cleanUsername)) {
    return res.status(400).json({ error: `Username "${cleanUsername}" is already taken.` });
  }

  const userId = `USR-2026-${cleanUsername.toUpperCase()}`;
  const initialTempPassword = `Temp${Math.floor(1000 + Math.random() * 9000)}!`;

  const newUser: AppUser = {
    id: userId,
    username: cleanUsername,
    fullName,
    corporateEmail,
    assignedDepartment,
    role: 'frontend_user',
    scopeLevel: scopeLevel || 'Departmental Contributor',
    status: 'Active',
    requiresPasswordReset: true,
    mfaEnabled: false,
    failedLoginAttempts: 0,
    createdAt: new Date().toISOString(),
  };

  users.push(newUser);
  userPasswords[cleanUsername] = initialTempPassword;

  const invitationToken = `INVITE-${userId}-${Date.now()}`;
  const invitationLink = `http://localhost:3000/login?invitationToken=${invitationToken}&username=${cleanUsername}`;

  securityAuditLogs.push({
    id: `SEC-LOG-${Date.now()}`,
    timestamp: new Date().toISOString(),
    userId: session.user.id,
    action: 'USER_PROVISIONED',
    details: `Auditor provisioned user ${newUser.id} (${newUser.corporateEmail}) with temp pass: ${initialTempPassword}`,
    ip: req.ip || '127.0.0.1',
  });

  res.status(201).json({
    user: newUser,
    initialTempPassword,
    invitationToken,
    invitationLink,
    message: 'Frontend User account successfully provisioned by Backend Auditor.',
  });
});

// PUT /api/admin/users/:id - Update User Status (Revoke / Unlock / Reset)
app.put('/api/admin/users/:id', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const session = getValidSession(token);

  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Backend Auditor privileges required.' });
  }

  const user = users.find(u => u.id === req.params.id || u.username === req.params.id);
  if (!user) {
    return res.status(404).json({ error: 'User account not found' });
  }

  const { status, scopeLevel, resetPasswordRequest, unlockAccount } = req.body;

  if (status && ['Active', 'Revoked', 'Locked'].includes(status)) {
    user.status = status;
  }
  if (scopeLevel) {
    user.scopeLevel = scopeLevel;
  }

  let resetTempPassword = '';
  if (resetPasswordRequest) {
    user.requiresPasswordReset = true;
    resetTempPassword = `Reset${Math.floor(1000 + Math.random() * 9000)}!`;
    userPasswords[user.username] = resetTempPassword;
  }

  if (unlockAccount) {
    user.failedLoginAttempts = 0;
    user.lockoutUntil = null;
    user.status = 'Active';
  }

  securityAuditLogs.push({
    id: `SEC-LOG-${Date.now()}`,
    timestamp: new Date().toISOString(),
    userId: session.user.id,
    action: 'USER_DIRECTORY_UPDATED',
    details: `Auditor updated account ${user.id} status: ${user.status}`,
    ip: req.ip || '127.0.0.1',
  });

  saveStore();

  res.json({
    user,
    resetTempPassword: resetTempPassword || undefined,
    message: 'User directory record updated successfully.',
  });
});

// GET /api/admin/security-logs - Security Audit Trail
app.get('/api/admin/security-logs', (req, res) => {
  const token = req.headers.authorization?.replace('Bearer ', '');
  const session = getValidSession(token);

  if (!session || session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied. Backend Auditor privileges required.' });
  }

  res.json(securityAuditLogs);
});

// GET /api/server/health - Comprehensive Backend Server Health Status Endpoint
app.get('/api/server/health', (req, res) => {
  const memoryUsage = process.memoryUsage();
  const activeOnlineService = runtimeConfig.discoveredServices.find(s => s.status === 'online');
  const activeEngine = activeOnlineService
    ? `${activeOnlineService.name} (${runtimeConfig.ollamaModel})`
    : 'Deterministic Rule Engine (Air-Gapped Offline)';

  res.json({
    status: 'online',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    port: PORT,
    pid: process.pid,
    nodeVersion: process.version,
    platform: process.platform,
    arch: process.arch,
    activeEngine,
    storagePath: STORE_FILE,
    memoryUsage: {
      rssMb: (memoryUsage.rss / 1024 / 1024).toFixed(2),
      heapTotalMb: (memoryUsage.heapTotal / 1024 / 1024).toFixed(2),
      heapUsedMb: (memoryUsage.heapUsed / 1024 / 1024).toFixed(2),
    },
    discoveredServicesCount: runtimeConfig.discoveredServices.filter(s => s.status === 'online').length,
    discoveredServicesTotal: runtimeConfig.discoveredServices.length,
    piasCount: pias.length,
    gapsCount: gaps.length,
    usersCount: users.length,
  });
});

// POST /api/server/restart - Trigger Graceful Server Reload / Soft Restart
app.post('/api/server/restart', (req, res) => {
  securityAuditLogs.push({
    id: `SEC-LOG-${Date.now()}`,
    timestamp: new Date().toISOString(),
    userId: 'SYSTEM-OPERATOR',
    action: 'SERVER_RESTART_TRIGGERED',
    details: `Graceful backend restart initiated via Server Health dashboard. PID: ${process.pid}`,
    ipAddress: req.ip || '127.0.0.1',
    status: 'Success'
  });

  res.json({
    message: 'Graceful server reload initiated. Re-initializing runtime state...',
    pid: process.pid,
    port: PORT,
    timestamp: new Date().toISOString(),
  });

  setTimeout(() => {
    try {
      saveStore();
      saveRuntimeConfig();
      console.log(`[Server Health] Graceful backend state reload completed for PID ${process.pid}`);
    } catch (err) {
      console.error('[Server Health] Error during graceful restart:', err);
    }
  }, 200);
});

// GET /api/config - Return current dynamic runtime configuration & discovered local services
app.get('/api/config', (req, res) => {
  const activeOnlineService = runtimeConfig.discoveredServices.find(s => s.status === 'online');
  const activeEngine = activeOnlineService
    ? `${activeOnlineService.name} (${runtimeConfig.ollamaModel})`
    : 'Deterministic Rule Engine (Air-Gapped Offline)';

  res.json({
    ...runtimeConfig,
    pid: process.pid,
    activeAiEngine: activeEngine,
  });
});

// POST /api/config - Update dynamic runtime configuration without server restarts
app.post('/api/config', (req, res) => {
  const { ollamaEndpoint, ollamaModel, lmStudioEndpoint, anythingLlmEndpoint, appInstance, systemSetup } = req.body;

  if (ollamaEndpoint !== undefined) runtimeConfig.ollamaEndpoint = ollamaEndpoint;
  if (ollamaModel !== undefined) runtimeConfig.ollamaModel = ollamaModel;
  if (lmStudioEndpoint !== undefined) runtimeConfig.lmStudioEndpoint = lmStudioEndpoint;
  if (anythingLlmEndpoint !== undefined) runtimeConfig.anythingLlmEndpoint = anythingLlmEndpoint;
  if (appInstance !== undefined) runtimeConfig.appInstance = Number(appInstance) || 1;
  if (systemSetup !== undefined) {
    runtimeConfig.systemSetup = {
      ...runtimeConfig.systemSetup,
      ...systemSetup,
      lastUpdated: new Date().toISOString(),
    };
  }

  saveRuntimeConfig();

  const activeOnlineService = runtimeConfig.discoveredServices.find(s => s.status === 'online');
  const activeEngine = activeOnlineService
    ? `${activeOnlineService.name} (${runtimeConfig.ollamaModel})`
    : 'Deterministic Rule Engine (Air-Gapped Offline)';

  res.json({
    ...runtimeConfig,
    pid: process.pid,
    activeAiEngine: activeEngine,
    message: 'Runtime configuration updated and saved successfully.',
  });
});

// POST /api/config/autodiscover - Trigger immediate local service auto-discovery scan
app.post('/api/config/autodiscover', async (req, res) => {
  try {
    const discovered = await autoDiscoverServices();
    const activeOnlineService = discovered.find(s => s.status === 'online');
    const activeEngine = activeOnlineService
      ? `${activeOnlineService.name} (${runtimeConfig.ollamaModel})`
      : 'Deterministic Rule Engine (Air-Gapped Offline)';

    res.json({
      ...runtimeConfig,
      pid: process.pid,
      discoveredServices: discovered,
      activeAiEngine: activeEngine,
    });
  } catch (err) {
    res.status(500).json({ error: 'Auto-discovery scan failed' });
  }
});

// POST /api/ai/analyze-gaps - Local AI & Rule-based Privacy Gap Analysis Engine
app.post('/api/ai/analyze-gaps', async (req, res) => {
  const { piaId, piaData } = req.body;

  let targetPia: PIAAssessment | undefined = piaData;
  if (!targetPia && piaId) {
    targetPia = pias.find(p => p.id === piaId || p.fid === piaId || p.bid === piaId);
  }

  if (!targetPia) {
    return res.status(400).json({ error: 'Valid PIA Assessment payload or piaId is required' });
  }

  let identifiedGaps: Partial<RemediationGap>[] = [];
  let aiEngineUsed = 'Deterministic Rule Engine (Air-Gapped Offline)';

  const promptText = `You are a Data Protection Officer (DPO) and Senior Privacy Compliance Auditor.
Analyze the following Privacy Impact Assessment (PIA) for compliance gaps against UK GDPR, NHS Information Governance, and IIAC / NOREA standards.

Project Title: ${targetPia.projectTitle}
Organization: ${targetPia.organization}
Sector: ${targetPia.industrySector || 'General'}
Description: ${targetPia.projectDescription || 'N/A'}
Data Flow: ${targetPia.dataFlowDescription || 'N/A'}
Risk Score: ${targetPia.riskResult?.finalRiskScore} / 25 (${targetPia.riskResult?.riskLevel} Risk)

Section Answers JSON:
${JSON.stringify(targetPia.answers, null, 2)}

Identify up to 4 critical compliance gaps. Return ONLY a valid JSON array of objects with the following keys:
- code: string (e.g. "GAP-AI-01")
- section: string (e.g. "SECTION D: DATA MINIMIZATION")
- description: string (detailed non-compliance finding)
- regulatoryReference: string (e.g. "UK GDPR Art. 6(1)" or "NHS IG Standard 4")
- riskLevel: "Critical" | "High" | "Medium" | "Low"
- assignedOwner: string (suggested role, e.g. "Lead Engineer")
- mitigationAction: string (concrete technical/operational fix)
`;

  // 1. Try LM Studio / OpenAI Compat REST Endpoint
  const effectiveLmStudioEndpoint = runtimeConfig.lmStudioEndpoint || process.env.LM_STUDIO_ENDPOINT;
  if (effectiveLmStudioEndpoint) {
    try {
      const lmRes = await fetch(effectiveLmStudioEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: runtimeConfig.ollamaModel || 'local-model',
          messages: [
            { role: 'system', content: 'You are an air-gapped DPO privacy compliance auditor. Return strictly valid JSON arrays.' },
            { role: 'user', content: promptText }
          ],
          temperature: 0.2,
        }),
      });
      if (lmRes.ok) {
        const lmData = await lmRes.json();
        const text = lmData.choices?.[0]?.message?.content || '';
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          identifiedGaps = JSON.parse(jsonMatch[0]);
          aiEngineUsed = 'LM Studio Local AI (OpenAI Compatible REST)';
        }
      }
    } catch (err) {
      console.warn('[AI Gap Analysis] LM Studio invocation failed, trying Ollama:', err);
    }
  }

  // 2. Try Ollama Local AI Endpoint
  const effectiveOllamaEndpoint = runtimeConfig.ollamaEndpoint || process.env.OLLAMA_ENDPOINT;
  if (identifiedGaps.length === 0 && effectiveOllamaEndpoint) {
    try {
      const ollamaRes = await fetch(effectiveOllamaEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: runtimeConfig.ollamaModel || process.env.OLLAMA_MODEL || 'llama3',
          prompt: `${promptText}\nOutput JSON array ONLY:`,
          stream: false,
        }),
      });
      if (ollamaRes.ok) {
        const ollamaData = await ollamaRes.json();
        const text = ollamaData.response || '';
        const jsonMatch = text.match(/\[[\s\S]*\]/);
        if (jsonMatch) {
          identifiedGaps = JSON.parse(jsonMatch[0]);
          aiEngineUsed = `Ollama Local Model (${runtimeConfig.ollamaModel})`;
        }
      }
    } catch (err) {
      console.warn('[AI Gap Analysis] Local Ollama call failed, using rule engine:', err);
    }
  }

  // Built-in Deterministic Privacy Audit Rule Engine if AI unavailable or offline
  if (identifiedGaps.length === 0) {
    const answers = targetPia.answers || {};

    // Check C1: Lawful Basis
    const c1Label = answers['C1']?.selectedLabel || '';
    if (!c1Label || c1Label.toLowerCase().includes('unclear') || c1Label.toLowerCase().includes('none')) {
      identifiedGaps.push({
        code: 'GAP-A01',
        section: 'SECTION C: LAWFUL BASIS & TRANSPARENCY',
        description: 'No explicit UK GDPR Article 6 lawful basis established for processing personal data.',
        regulatoryReference: 'UK GDPR Art. 6(1) & Art. 9(2)',
        riskLevel: 'Critical',
        assignedOwner: 'DPO / Legal Counsel',
        mitigationAction: 'Define and document an explicit UK GDPR lawful basis prior to system deployment.',
      });
    }

    // Check Section I: Security / Encryption
    const i1Label = answers['I1']?.selectedLabel || '';
    if (i1Label.toLowerCase().includes('no') || i1Label.toLowerCase().includes('partial') || answers['I1']?.score > 3) {
      identifiedGaps.push({
        code: 'GAP-A02',
        section: 'SECTION I: SECURITY CONTROLS',
        description: 'Insufficient AES-256 encryption at rest or TLS 1.3 in transit for sensitive payload data.',
        regulatoryReference: 'UK GDPR Art. 32 & NHS IG Security Standard',
        riskLevel: 'High',
        assignedOwner: 'Infosec / Systems Architect',
        mitigationAction: 'Mandate end-to-end encryption using KMS keys for database volumes and mTLS for internal APIs.',
      });
    }

    // Check Section J: Vendor risk
    if (answers['A1']?.selectedLabel?.toLowerCase().includes('vendor') || (targetPia.riskResult?.appliedModifiers?.vendorMultiplier || 1) > 1) {
      identifiedGaps.push({
        code: 'GAP-A03',
        section: 'SECTION J: VENDOR & THIRD-PARTY RISK',
        description: 'External vendor / processor engaged without executed Data Processing Agreement (DPA).',
        regulatoryReference: 'UK GDPR Art. 28(3)',
        riskLevel: 'High',
        assignedOwner: 'Procurement & Vendor Compliance Lead',
        mitigationAction: 'Execute Art. 28 DPA containing mandatory subprocessor notification clauses.',
      });
    }

    // Check AI / Automated Decisioning
    if ((targetPia.riskResult?.appliedModifiers?.aiMultiplier || 1) > 1) {
      identifiedGaps.push({
        code: 'GAP-A04',
        section: 'SECTION G: AUTOMATED DECISION-MAKING & AI',
        description: 'Automated AI processing lacks human-in-the-loop oversight and bias monitoring logs.',
        regulatoryReference: 'UK GDPR Art. 22 & EU AI Act Governance',
        riskLevel: 'High',
        assignedOwner: 'AI System Owner & Lead Data Scientist',
        mitigationAction: 'Implement human review stage for high-impact outputs and conduct quarterly bias audits.',
      });
    }

    // Default gap if still empty
    if (identifiedGaps.length === 0) {
      identifiedGaps.push({
        code: 'GAP-A05',
        section: 'SECTION E: RETENTION & DISPOSAL',
        description: 'Data retention schedules require alignment with departmental records disposal policies.',
        regulatoryReference: 'NHS Code of Practice / ICO Principle 5',
        riskLevel: 'Medium',
        assignedOwner: 'Records Manager',
        mitigationAction: 'Configure automated purge triggers for records older than the mandatory retention period.',
      });
    }
  }

  // Materialize & Save Gaps into store
  const createdGaps: RemediationGap[] = [];
  const targetPiaObj = pias.find(p => p.id === targetPia?.id || p.fid === targetPia?.id) || targetPia;

  identifiedGaps.forEach((raw, idx) => {
    const riskLvl = (raw.riskLevel as any) || 'Medium';
    const sla = calculateSLA(riskLvl);

    const newGap: RemediationGap = {
      id: `GAP-AI-${Date.now().toString().slice(-4)}-${idx + 1}`,
      piaId: targetPiaObj.id,
      piaTitle: targetPiaObj.projectTitle,
      code: raw.code || `GAP-AI-0${idx + 1}`,
      section: raw.section || 'SECTION A: GENERAL PRIVACY CONTROLS',
      description: raw.description || 'Identified privacy non-compliance finding.',
      regulatoryReference: raw.regulatoryReference || 'ICO / UK GDPR Guidelines',
      riskLevel: riskLvl,
      assignedOwner: raw.assignedOwner || 'Unassigned',
      mitigationAction: raw.mitigationAction || 'Implement recommended privacy controls.',
      createdAt: new Date().toISOString(),
      targetDueDate: sla.dueDateIso,
      status: 'Open',
      followUps: [],
    };

    if (!gaps.some(g => g.piaId === newGap.piaId && g.code === newGap.code)) {
      gaps.unshift(newGap);
      createdGaps.push(newGap);
    }
  });

  saveStore();

  res.json({
    success: true,
    engine: aiEngineUsed,
    analyzedPiaId: targetPiaObj.id,
    newGapsCreatedCount: createdGaps.length,
    gaps: createdGaps,
    message: `Gap analysis executed successfully via ${aiEngineUsed}.`,
  });
});

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    totalPias: pias.length,
    totalGaps: gaps.length,
    database: 'SQLite persistent file store (pia_store.json)',
    port: PORT,
    localAiAvailable: !!(process.env.OLLAMA_ENDPOINT || process.env.LM_STUDIO_ENDPOINT || runtimeConfig.discoveredServices.some(s => s.status === 'online')),
  });
});

// GET /api/pias - List Assessments with Search & Filters
app.get('/api/pias', (req, res) => {
  const { search, risk, status, owner, category } = req.query;

  let filtered = [...pias];

  if (search && typeof search === 'string') {
    const q = search.toLowerCase();
    filtered = filtered.filter(
      p =>
        p.projectTitle.toLowerCase().includes(q) ||
        p.organization.toLowerCase().includes(q) ||
        p.projectOwner.toLowerCase().includes(q) ||
        p.id.toLowerCase().includes(q) ||
        (p.fid && p.fid.toLowerCase().includes(q)) ||
        (p.bid && p.bid.toLowerCase().includes(q))
    );
  }

  if (risk && typeof risk === 'string' && risk !== 'All') {
    filtered = filtered.filter(p => p.riskResult?.riskLevel === risk);
  }

  if (status && typeof status === 'string' && status !== 'All') {
    filtered = filtered.filter(p => p.status === status);
  }

  if (owner && typeof owner === 'string' && owner !== 'All') {
    filtered = filtered.filter(p => p.projectOwner === owner);
  }

  if (category && typeof category === 'string' && category !== 'All') {
    filtered = filtered.filter(p => p.answers['A1']?.selectedLabel === category);
  }

  // Sort by updatedAt descending
  filtered.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

  res.json(filtered);
});

// GET /api/pias/:id - Get Single Assessment (by ID, FID, or BID)
app.get('/api/pias/:id', (req, res) => {
  const targetId = req.params.id.toUpperCase();
  const pia = pias.find(p => p.id === req.params.id || p.fid === targetId || p.bid === targetId);
  if (!pia) {
    return res.status(404).json({ error: 'Assessment not found' });
  }
  res.json(pia);
});

// POST /api/pias - Create New Assessment (Dual-ID & Provenance)
app.post('/api/pias', (req, res) => {
  const {
    projectTitle,
    organization,
    projectOwner,
    projectOwnerEmail,
    dpoName,
    dpoEmail,
    projectDescription,
    dataFlowDescription,
    answers,
    status = 'Draft',
    structuredDataFlow,
  } = req.body;

  if (!projectTitle || !projectOwner) {
    return res.status(400).json({ error: 'Project Title and Project Owner are required' });
  }

  const newId = `PIA-2026-${String(pias.length + 1).padStart(3, '0')}`;
  const fidPrefix = runtimeConfig.systemSetup?.fidPrefix || 'PIA-FE-2026-';
  const bidPrefix = runtimeConfig.systemSetup?.bidPrefix || 'PIA-BE-UK-2026-';
  const bidSeq = (runtimeConfig.systemSetup?.bidOffset || 412) + pias.length;

  const fid = generateFID(fidPrefix);
  const bid = generateBID(bidPrefix, bidSeq);
  const now = new Date().toISOString();

  const sectionAnswers = answers || {};
  const riskResult = calculatePIARisk(sectionAnswers);

  const initialDelta: DeltaLogEntry[] = [
    {
      sectionId: 'SECTION A',
      parameter: 'Initial Assessment Creation',
      previousValue: 'None',
      newValue: projectTitle,
      rationale: 'Created initial PIA draft in Frontend Environment',
    },
  ];

  const initialProv = createProvenanceEntry(
    fid,
    'v0.0',
    'v1.0',
    'INITIAL_SUBMISSION',
    `Project Lead (${projectOwner})`,
    initialDelta,
    bid
  );

  const newPia: PIAAssessment = {
    id: newId,
    fid,
    bid,
    version: 'v1.0',
    workflowMode: 'frontend',
    projectTitle,
    organization: organization || 'General Operations',
    projectOwner,
    projectOwnerEmail: projectOwnerEmail || '',
    dpoName: dpoName || 'Marcus Vance (DPO)',
    dpoEmail: dpoEmail || 'dpo@enterprise.org',
    projectDescription: projectDescription || '',
    dataFlowDescription: dataFlowDescription || '',
    structuredDataFlow: structuredDataFlow || undefined,
    status: status as any,
    createdAt: now,
    updatedAt: now,
    answers: sectionAnswers,
    riskResult,
    provenanceTrail: [initialProv],
    regulatoryTailoring: {
      selectedFrameworks: ['UK GDPR & DPA 2018'],
    },
    nhsChecklist: {
      fairLawfulProcessing: 'Not Evaluated',
      purposeLimitation: 'Not Evaluated',
      dataMinimization: 'Not Evaluated',
      accuracy: 'Not Evaluated',
      retention: 'Not Evaluated',
      rightsOfIndividuals: 'Not Evaluated',
      security: 'Not Evaluated',
      internationalTransfers: 'Not Evaluated',
      commonLawConfidentiality: {
        consentObtained: false,
        publicInterestJustification: false,
        legalDutyExists: false,
        statutoryBasis: false,
      },
    },
    endorsements: [
      { role: 'Project/Process Owner', name: projectOwner, signed: false },
      { role: 'Data Protection Officer', name: dpoName || 'Marcus Vance (DPO)', signed: false },
      { role: 'Legal/Compliance', name: 'Legal Counsel', signed: false },
      { role: 'Caldicott Guardian / SIRO', name: 'SIRO / Caldicott', signed: false },
    ],
  };

  pias.unshift(newPia);
  saveStore();
  res.status(201).json(newPia);
});

// PUT /api/pias/:id - Update Assessment with Provenance & Version Control
app.put('/api/pias/:id', (req, res) => {
  const index = pias.findIndex(p => p.id === req.params.id || p.fid === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Assessment not found' });
  }

  const existing = pias[index];
  const {
    projectTitle,
    organization,
    projectOwner,
    projectOwnerEmail,
    dpoName,
    dpoEmail,
    projectDescription,
    dataFlowDescription,
    answers,
    status,
    nhsChecklist,
    endorsements,
    workflowMode = existing.workflowMode || 'frontend',
    modifiedBy = `User (${existing.projectOwner})`,
    actionExecuted = 'FRONTEND_DRAFT_UPDATE',
    rationale = 'Updated assessment questionnaire',
  } = req.body;

  const updatedAnswers = answers || existing.answers;
  const recalculatedRisk = calculatePIARisk(updatedAnswers);

  const deltaLog: DeltaLogEntry[] = [];
  if (projectTitle && projectTitle !== existing.projectTitle) {
    deltaLog.push({ sectionId: 'META', parameter: 'Project Title', previousValue: existing.projectTitle, newValue: projectTitle, rationale });
  }
  if (status && status !== existing.status) {
    deltaLog.push({ sectionId: 'WORKFLOW', parameter: 'Assessment Status', previousValue: existing.status, newValue: status, rationale });
  }
  if (deltaLog.length === 0) {
    deltaLog.push({ sectionId: 'QUESTIONNAIRE', parameter: 'Answers Update', previousValue: 'vPrevious Answers', newValue: 'vUpdated Answers', rationale });
  }

  const isMajor = actionExecuted === 'SME_REVISION' || actionExecuted === 'REGULATORY_TAILORING';
  const newVer = bumpVersion(existing.version || 'v1.0', isMajor ? 'major' : 'minor');

  const prevHash = existing.provenanceTrail?.[0]?.provenanceHash || '0x00000000000000000000000000000000';
  const provEntry = createProvenanceEntry(
    existing.fid || generateFID(),
    existing.version || 'v1.0',
    newVer,
    actionExecuted as ActionExecutedType,
    modifiedBy,
    deltaLog,
    existing.bid,
    prevHash
  );

  const updated: PIAAssessment = {
    ...existing,
    version: newVer,
    workflowMode,
    projectTitle: projectTitle ?? existing.projectTitle,
    organization: organization ?? existing.organization,
    projectOwner: projectOwner ?? existing.projectOwner,
    projectOwnerEmail: projectOwnerEmail ?? existing.projectOwnerEmail,
    dpoName: dpoName ?? existing.dpoName,
    dpoEmail: dpoEmail ?? existing.dpoEmail,
    projectDescription: projectDescription ?? existing.projectDescription,
    dataFlowDescription: dataFlowDescription ?? existing.dataFlowDescription,
    answers: updatedAnswers,
    riskResult: recalculatedRisk,
    status: status ?? existing.status,
    nhsChecklist: nhsChecklist ?? existing.nhsChecklist,
    endorsements: endorsements ?? existing.endorsements,
    provenanceTrail: [provEntry, ...(existing.provenanceTrail || [])],
    updatedAt: new Date().toISOString(),
  };

  pias[index] = updated;

  // Update corresponding gap titles if project title changed
  if (projectTitle && projectTitle !== existing.projectTitle) {
    gaps.forEach(g => {
      if (g.piaId === existing.id) g.piaTitle = projectTitle;
    });
  }

  saveStore();
  res.json(updated);
});

// POST /api/pias/:id/tailor-regulatory - Backend Regulatory Tailoring & Major Override
app.post('/api/pias/:id/tailor-regulatory', (req, res) => {
  const index = pias.findIndex(p => p.id === req.params.id || p.fid === req.params.id || p.bid === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Assessment not found' });
  }

  const existing = pias[index];
  const { selectedFrameworks, smeOverrideNotes, smeRiskAdjustment, modifiedBy = 'Data SME / Auditor' } = req.body;

  const newVer = bumpVersion(existing.version || 'v1.0', 'major');
  const prevHash = existing.provenanceTrail?.[0]?.provenanceHash || '0x00000000000000000000000000000000';

  const deltaLog: DeltaLogEntry[] = [
    {
      sectionId: 'REGULATORY_TAILORING',
      parameter: 'Selected Frameworks',
      previousValue: existing.regulatoryTailoring?.selectedFrameworks?.join(', ') || 'UK GDPR & DPA 2018',
      newValue: (selectedFrameworks || []).join(', '),
      rationale: smeOverrideNotes || 'Backend SME Regulatory Framework Alignment',
    },
  ];

  if (smeRiskAdjustment) {
    deltaLog.push({
      sectionId: 'SME_OVERRIDE',
      parameter: 'Risk Level Override',
      previousValue: existing.riskResult?.riskLevel || 'Medium',
      newValue: smeRiskAdjustment,
      rationale: 'SME Manual Risk Rating Override',
    });
  }

  const provEntry = createProvenanceEntry(
    existing.fid || generateFID(),
    existing.version || 'v1.0',
    newVer,
    'REGULATORY_TAILORING',
    modifiedBy,
    deltaLog,
    existing.bid || generateBID('UK', 999),
    prevHash
  );

  const updated: PIAAssessment = {
    ...existing,
    version: newVer,
    workflowMode: 'backend',
    regulatoryTailoring: {
      selectedFrameworks: selectedFrameworks || ['UK GDPR & DPA 2018'],
      smeOverrideNotes: smeOverrideNotes || '',
      smeRiskAdjustment: smeRiskAdjustment || existing.riskResult?.riskLevel,
    },
    riskResult: smeRiskAdjustment
      ? {
          ...existing.riskResult!,
          riskLevel: smeRiskAdjustment,
        }
      : existing.riskResult,
    provenanceTrail: [provEntry, ...(existing.provenanceTrail || [])],
    updatedAt: new Date().toISOString(),
  };

  pias[index] = updated;
  saveStore();
  res.json(updated);
});

// DELETE /api/pias/:id - Delete or Archive Assessment
app.delete('/api/pias/:id', (req, res) => {
  const index = pias.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Assessment not found' });
  }

  pias.splice(index, 1);
  // Remove associated gaps
  gaps = gaps.filter(g => g.piaId !== req.params.id);

  saveStore();
  res.json({ success: true, id: req.params.id });
});

// POST /api/pias/:id/sign-off - Update Signature Status
app.post('/api/pias/:id/sign-off', (req, res) => {
  const pia = pias.find(p => p.id === req.params.id);
  if (!pia) {
    return res.status(404).json({ error: 'Assessment not found' });
  }

  const { role, name, signed, comments } = req.body;

  const endorsement = pia.endorsements.find(e => e.role === role);
  if (endorsement) {
    endorsement.signed = signed;
    endorsement.name = name || endorsement.name;
    endorsement.signedDate = signed ? new Date().toISOString().split('T')[0] : undefined;
    endorsement.comments = comments;
  }

  // Check if all endorsements are signed
  const allSigned = pia.endorsements.every(e => e.signed || e.name === 'N/A');
  if (allSigned) {
    pia.status = 'Approved';
  }

  pia.updatedAt = new Date().toISOString();
  saveStore();
  res.json(pia);
});

// ================= GAPS & REMEDIATION ENDPOINTS =================

// GET /api/gaps - List Remediation Gaps
app.get('/api/gaps', (req, res) => {
  const { status, risk, owner, piaId } = req.query;

  let filtered = [...gaps];

  if (piaId && typeof piaId === 'string') {
    filtered = filtered.filter(g => g.piaId === piaId);
  }

  if (status && typeof status === 'string' && status !== 'All') {
    filtered = filtered.filter(g => g.status === status);
  }

  if (risk && typeof risk === 'string' && risk !== 'All') {
    filtered = filtered.filter(g => g.riskLevel === risk);
  }

  if (owner && typeof owner === 'string' && owner !== 'All') {
    filtered = filtered.filter(g => g.assignedOwner === owner);
  }

  // Auto-mark overdue items if targetDueDate passed and status is Open / In Progress
  const now = new Date();
  filtered.forEach(g => {
    if (g.status !== 'Resolved' && new Date(g.targetDueDate) < now) {
      g.status = 'Overdue';
    }
  });

  res.json(filtered);
});

// POST /api/gaps - Create Manual Gap
app.post('/api/gaps', (req, res) => {
  const { piaId, code, section, description, regulatoryReference, riskLevel, assignedOwner, mitigationAction, targetDueDate } = req.body;

  const pia = pias.find(p => p.id === piaId);

  const sla = calculateSLA(riskLevel || 'Medium');

  const newGap: RemediationGap = {
    id: `GAP-${Date.now().toString().slice(-4)}`,
    piaId: piaId || 'GEN-2026',
    piaTitle: pia ? pia.projectTitle : 'General Organizational Control',
    code: code || `GAP-M-${Date.now().toString().slice(-3)}`,
    section: section || 'SECTION I: SECURITY CONTROLS',
    description: description || 'Identified privacy risk',
    regulatoryReference: regulatoryReference || 'IIAC / NOREA Guidelines',
    riskLevel: riskLevel || 'Medium',
    assignedOwner: assignedOwner || 'Unassigned',
    mitigationAction: mitigationAction || '',
    createdAt: new Date().toISOString(),
    targetDueDate: targetDueDate || sla.dueDateIso,
    status: 'Open',
    followUps: [],
  };

  gaps.unshift(newGap);

  // Update PIA status to Remediation if needed
  if (pia && pia.status !== 'Remediation' && pia.status !== 'Approved') {
    pia.status = 'Remediation';
    pia.updatedAt = new Date().toISOString();
  }

  saveStore();
  res.status(201).json(newGap);
});

// PUT /api/gaps/:id - Update Gap Item
app.put('/api/gaps/:id', (req, res) => {
  const gap = gaps.find(g => g.id === req.params.id);
  if (!gap) {
    return res.status(404).json({ error: 'Gap item not found' });
  }

  const { assignedOwner, mitigationAction, targetDueDate, status, riskLevel } = req.body;

  if (assignedOwner !== undefined) gap.assignedOwner = assignedOwner;
  if (mitigationAction !== undefined) gap.mitigationAction = mitigationAction;
  if (targetDueDate !== undefined) gap.targetDueDate = targetDueDate;
  if (status !== undefined) gap.status = status;
  if (riskLevel !== undefined) gap.riskLevel = riskLevel;

  saveStore();
  res.json(gap);
});

// POST /api/gaps/:id/followup - Add DPO Follow-up Comment
app.post('/api/gaps/:id/followup', (req, res) => {
  const gap = gaps.find(g => g.id === req.params.id);
  if (!gap) {
    return res.status(404).json({ error: 'Gap item not found' });
  }

  const { author, role, comment, statusUpdate } = req.body;

  if (!comment) {
    return res.status(400).json({ error: 'Comment text is required' });
  }

  const newFollowUp = {
    id: `FU-${Date.now()}`,
    author: author || 'Marcus Vance (DPO)',
    role: role || 'Data Protection Officer',
    timestamp: new Date().toISOString(),
    comment,
    statusUpdate,
  };

  gap.followUps.push(newFollowUp);

  if (statusUpdate && ['Open', 'In Progress', 'Overdue', 'Resolved'].includes(statusUpdate)) {
    gap.status = statusUpdate as GapStatus;
  }

  saveStore();
  res.json(gap);
});

// DELETE /api/gaps/:id - Delete Gap Item
app.delete('/api/gaps/:id', (req, res) => {
  const index = gaps.findIndex(g => g.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: 'Gap item not found' });
  }
  gaps.splice(index, 1);
  saveStore();
  res.json({ success: true, id: req.params.id });
});

// ================= VITE / STATIC MIDDLEWARE =================

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const host = process.env.HOST || '0.0.0.0';

  const server = app.listen(PORT, host, () => {
    console.log(`[PIA Platform] Server running on http://${host}:${PORT}`);
  });

  server.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`[PIA Platform ERROR] Port ${PORT} on ${host} is already in use.`);
      console.error(`Please close the process using port ${PORT} or specify a different PORT/HOST environment variable.`);
      process.exit(1);
    } else {
      console.error('[PIA Platform ERROR] Server failed to start:', err);
      process.exit(1);
    }
  });
}

startServer();
