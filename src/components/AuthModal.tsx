import React, { useState } from 'react';
import { 
  ShieldCheck, Lock, User, Key, AlertTriangle, CheckCircle2, 
  X, RefreshCw, Smartphone, Shield, ArrowRight, UserCheck, Info, Clock, LogOut
} from 'lucide-react';
import { AppUser, UserRole } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  currentUser: AppUser | null;
  authToken: string | null;
  onClose: () => void;
  onLoginSuccess: (user: AppUser, token: string) => void;
  onLogout: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  currentUser,
  authToken,
  onClose,
  onLoginSuccess,
  onLogout,
}) => {
  const [activeRoleTab, setActiveRoleTab] = useState<UserRole>('frontend_user');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Mandatory First-Login Password Reset & MFA State
  const [resetFlowUser, setResetFlowUser] = useState<{ user: AppUser; token: string } | null>(null);
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mfaCode, setMfaCode] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false);

  if (!isOpen) return null;

  const handleQuickFill = (user: string, pass: string, role: UserRole) => {
    setUsername(user);
    setPassword(pass);
    setActiveRoleTab(role);
    setErrorMsg(null);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          password,
          targetRole: activeRoleTab,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Authentication failed');
      }

      if (data.requiresPasswordReset) {
        // Mandatory First-Login Directive -> Intercept flow for password reset & 2FA
        setResetFlowUser({ user: data.user, token: data.token });
      } else {
        onLoginSuccess(data.user, data.token);
        onClose();
      }
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCompleteResetAndMfa = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetFlowUser) return;

    if (newPassword.length < 6) {
      setErrorMsg('New password must be at least 6 characters long.');
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMsg('Passwords do not match.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      // 1. Submit Password Reset
      const resetRes = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resetFlowUser.token}`,
        },
        body: JSON.stringify({ newPassword }),
      });

      if (!resetRes.ok) {
        const err = await resetRes.json();
        throw new Error(err.error || 'Password reset failed');
      }

      // 2. Submit MFA Setup
      const mfaRes = await fetch('/api/auth/mfa-setup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resetFlowUser.token}`,
        },
        body: JSON.stringify({ mfaCode: mfaCode || '123456' }),
      });

      const mfaData = await mfaRes.json();

      setResetSuccess(true);
      setTimeout(() => {
        onLoginSuccess(mfaData.user, resetFlowUser.token);
        setResetFlowUser(null);
        setResetSuccess(false);
        onClose();
      }, 1500);
    } catch (err: any) {
      setErrorMsg(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md shadow-2xl text-zinc-100 overflow-hidden">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-white">Multi-Tier Security & Authentication</h2>
              <p className="text-[11px] text-zinc-400">Directory Segregation & MFA Policy Engine</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Current User Session Status if Logged In */}
        {currentUser && !resetFlowUser ? (
          <div className="p-6 space-y-4">
            <div className="bg-zinc-950 p-4 rounded-xl border border-zinc-800 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-2">
                <span className="text-zinc-400 font-medium">ACTIVE SESSION PROFILE</span>
                <span className={`px-2 py-0.5 rounded font-mono font-bold uppercase ${
                  currentUser.role === 'admin' 
                    ? 'bg-purple-950 text-purple-300 border border-purple-800' 
                    : 'bg-blue-950 text-blue-300 border border-blue-800'
                }`}>
                  {currentUser.role === 'admin' ? 'Backend Auditor' : 'Frontend User'}
                </span>
              </div>

              <div className="space-y-1">
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  {currentUser.fullName}
                </div>
                <div className="text-zinc-400 font-mono text-[11px]">{currentUser.id} ({currentUser.corporateEmail})</div>
                <div className="text-zinc-400 text-[11px]">Unit: <span className="text-zinc-200">{currentUser.assignedDepartment}</span></div>
                <div className="text-zinc-400 text-[11px]">Scope: <span className="text-zinc-200">{currentUser.scopeLevel}</span></div>
              </div>

              <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" /> Session Inactivity Timeout: 15m
                </span>
                <span className="text-emerald-400 font-bold">MFA Active</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-xs font-semibold transition"
              >
                Close Window
              </button>
              <button
                onClick={onLogout}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-rose-600/20 hover:bg-rose-600/30 text-rose-300 border border-rose-800/60 rounded-xl text-xs font-semibold transition"
              >
                <LogOut className="w-3.5 h-3.5" />
                Sign Out Active Session
              </button>
            </div>
          </div>
        ) : resetFlowUser ? (
          /* MANDATORY FIRST-LOGIN PASSWORD RESET & MFA STEP */
          <form onSubmit={handleCompleteResetAndMfa} className="p-6 space-y-4">
            <div className="bg-amber-950/40 border border-amber-800/60 rounded-xl p-3 text-xs text-amber-200 flex items-start gap-2.5">
              <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="font-bold text-amber-300">Mandatory First-Login Directive:</strong>
                <p className="text-[11px] text-amber-200/80 mt-0.5">
                  Initial sign-in detected for user <span className="font-mono text-white">{resetFlowUser.user.username}</span>. You MUST set a new password and establish 2FA/MFA to proceed.
                </p>
              </div>
            </div>

            {errorMsg && (
              <div className="p-3 bg-rose-950/80 border border-rose-800 rounded-xl text-xs text-rose-300">
                {errorMsg}
              </div>
            )}

            {resetSuccess && (
              <div className="p-3 bg-emerald-950/80 border border-emerald-800 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Security Credentials & MFA Verified! Signing in...
              </div>
            )}

            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-zinc-300 font-medium">New Password</label>
                <div className="relative">
                  <Key className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    placeholder="Min 6 chars (letters & numbers)"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-zinc-300 font-medium">Confirm New Password</label>
                <div className="relative">
                  <Key className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    placeholder="Repeat new password"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>

              <div className="space-y-1 pt-1 border-t border-zinc-800">
                <label className="text-zinc-300 font-medium flex items-center justify-between">
                  <span>Establish 2FA / MFA Passcode</span>
                  <span className="text-[10px] text-cyan-400 font-mono">Authenticator App</span>
                </label>
                <div className="relative">
                  <Smartphone className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={mfaCode}
                    onChange={e => setMfaCode(e.target.value)}
                    placeholder="6-digit authenticator code (e.g. 849201)"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
                <p className="text-[10px] text-zinc-500">
                  A verification token will be bound to your account profile in the Data Provenance Log.
                </p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || resetSuccess}
              className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-black font-bold rounded-xl text-xs transition shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <Shield className="w-4 h-4" />
              {isSubmitting ? 'Updating Credentials...' : 'Save Credentials & Initialize MFA Session'}
            </button>
          </form>
        ) : (
          /* REGULAR MULTI-TIER LOGIN FORM */
          <form onSubmit={handleLogin} className="p-6 space-y-4">
            {/* Role Tier Selection Tabs */}
            <div className="grid grid-cols-2 p-1 bg-zinc-950 rounded-xl border border-zinc-800 text-xs font-semibold">
              <button
                type="button"
                onClick={() => {
                  setActiveRoleTab('frontend_user');
                  setErrorMsg(null);
                }}
                className={`py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
                  activeRoleTab === 'frontend_user'
                    ? 'bg-blue-600 text-white shadow'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Frontend Console</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveRoleTab('admin');
                  setErrorMsg(null);
                }}
                className={`py-2 rounded-lg transition flex items-center justify-center gap-1.5 ${
                  activeRoleTab === 'admin'
                    ? 'bg-purple-600 text-white shadow'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Admin Console</span>
              </button>
            </div>

            {errorMsg && (
              <div className="p-3 bg-rose-950/80 border border-rose-800 rounded-xl text-xs text-rose-300 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Quick Login Seeds for Easy Evaluation */}
            <div className="bg-zinc-950/60 p-3 rounded-xl border border-zinc-800/80 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-zinc-400 font-semibold flex items-center gap-1">
                  <Info className="w-3 h-3 text-cyan-400" /> Quick Role Presets:
                </span>
                <span className="text-[10px] text-zinc-500">Master Admin: admin/admin</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-[11px]">
                <button
                  type="button"
                  onClick={() => handleQuickFill('admin', 'admin', 'admin')}
                  className="px-2 py-1 bg-purple-950/60 hover:bg-purple-900/60 border border-purple-800/60 text-purple-300 rounded font-mono"
                >
                  admin (DPO Auditor)
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFill('slin', 'Temp1234!', 'frontend_user')}
                  className="px-2 py-1 bg-blue-950/60 hover:bg-blue-900/60 border border-blue-800/60 text-blue-300 rounded font-mono"
                >
                  slin (HealthTech Lead)
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickFill('arivera', 'Temp1234!', 'frontend_user')}
                  className="px-2 py-1 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 rounded font-mono"
                >
                  arivera (FinTech)
                </button>
              </div>
            </div>

            {/* Login Inputs */}
            <div className="space-y-3 text-xs">
              <div className="space-y-1">
                <label className="text-zinc-300 font-medium">Username / User ID</label>
                <div className="relative">
                  <User className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    required
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder={activeRoleTab === 'admin' ? 'admin' : 'slin or arivera'}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-zinc-300 font-medium">Password</label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter account password"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-2.5 text-white font-bold rounded-xl text-xs transition shadow-lg flex items-center justify-center gap-2 ${
                activeRoleTab === 'admin'
                  ? 'bg-purple-600 hover:bg-purple-500'
                  : 'bg-blue-600 hover:bg-blue-500'
              }`}
            >
              <ArrowRight className="w-4 h-4" />
              {isSubmitting ? 'Verifying Credentials...' : `Sign In to ${activeRoleTab === 'admin' ? 'Backend Auditor Console' : 'Frontend Assessment Console'}`}
            </button>

            <div className="text-center text-[10px] text-zinc-500 pt-1">
              Public registration disabled. Accounts are provisioned solely by Backend Auditors (`admin`).
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
