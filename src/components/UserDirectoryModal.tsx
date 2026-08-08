import React, { useState, useEffect } from 'react';
import { 
  Users, UserPlus, Search, Shield, Lock, Unlock, CheckCircle2, 
  X, Copy, RefreshCw, Key, Mail, Building, AlertCircle, FileText, UserX
} from 'lucide-react';
import { AppUser } from '../types';

interface UserDirectoryModalProps {
  isOpen?: boolean;
  authToken: string | null;
  onClose?: () => void;
  isEmbedded?: boolean;
}

export const UserDirectoryModal: React.FC<UserDirectoryModalProps> = ({
  isOpen = true,
  authToken,
  onClose,
  isEmbedded = false
}) => {
  const [users, setUsers] = useState<AppUser[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);

  // New Provisioning Form State
  const [fullName, setFullName] = useState('');
  const [corporateEmail, setCorporateEmail] = useState('');
  const [assignedDepartment, setAssignedDepartment] = useState('');
  const [username, setUsername] = useState('');
  const [scopeLevel, setScopeLevel] = useState('Departmental Contributor');
  const [provisionResult, setProvisionResult] = useState<{
    user: AppUser;
    initialTempPassword?: string;
    invitationLink?: string;
  } | null>(null);

  const [copiedLink, setCopiedLink] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/users', {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      if (res.ok) {
        const data = await res.json();
        setUsers(data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if ((isOpen || isEmbedded) && authToken) {
      fetchUsers();
    }
  }, [isOpen, isEmbedded, authToken]);

  if (!isEmbedded && !isOpen) return null;

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setProvisionResult(null);

    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
          fullName,
          corporateEmail,
          assignedDepartment,
          username,
          scopeLevel,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || 'Failed to provision user');
      }

      setProvisionResult({
        user: data.user,
        initialTempPassword: data.initialTempPassword,
        invitationLink: data.invitationLink,
      });

      // Reset Form
      setFullName('');
      setCorporateEmail('');
      setAssignedDepartment('');
      setUsername('');
      fetchUsers();
    } catch (err: any) {
      setErrorMsg(err.message);
    }
  };

  const handleToggleUserStatus = async (user: AppUser, newStatus: 'Active' | 'Revoked') => {
    try {
      const res = await fetch(`/api/admin/users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });
      if (res.ok) {
        fetchUsers();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnlockUser = async (userId: string) => {
    try {
      const res = await fetch(`/api/admin/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({ unlockAccount: true }),
      });
      if (res.ok) {
        fetchUsers();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const filteredUsers = (users || []).filter(u => {
    if (!u) return false;
    const term = (searchTerm || '').toLowerCase();
    return (
      (u.fullName || '').toLowerCase().includes(term) ||
      (u.username || '').toLowerCase().includes(term) ||
      (u.corporateEmail || '').toLowerCase().includes(term) ||
      (u.assignedDepartment || '').toLowerCase().includes(term)
    );
  });

  const content = (
    <div className={`bg-zinc-900 border border-zinc-800 rounded-2xl w-full flex flex-col shadow-2xl text-zinc-100 overflow-hidden ${isEmbedded ? '' : 'max-w-4xl max-h-[90vh]'}`}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-zinc-800 flex items-center justify-between bg-zinc-950/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-white">Backend Admin User Directory Governance</h2>
              <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold rounded bg-purple-950 text-purple-300 border border-purple-800">
                Auditor Console
              </span>
            </div>
            <p className="text-xs text-zinc-400 mt-0.5">
              Directory Segregation & User Account Provisioning Engine
            </p>
          </div>
        </div>
        {onClose && !isEmbedded && (
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

        {/* Action Bar */}
        <div className="bg-zinc-950 px-6 py-3 border-b border-zinc-800 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="Search user directory by name, email, department or User ID..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-purple-500"
            />
          </div>

          <button
            onClick={() => {
              setShowCreateForm(!showCreateForm);
              setProvisionResult(null);
            }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs shadow transition"
          >
            <UserPlus className="w-4 h-4" />
            {showCreateForm ? 'View User Directory' : 'Provision New Frontend User'}
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {showCreateForm ? (
            /* STEP 1: PROVISION NEW USER FORM */
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <UserPlus className="w-4 h-4 text-purple-400" /> Frontend User Account Provisioning
                </h3>
                <span className="text-[11px] text-zinc-400">Public Registration Disabled</span>
              </div>

              {errorMsg && (
                <div className="p-3 bg-rose-950/80 border border-rose-800 rounded-xl text-xs text-rose-300">
                  {errorMsg}
                </div>
              )}

              {provisionResult ? (
                <div className="bg-purple-950/40 border border-purple-800/60 rounded-xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    Frontend User Provisioned & Credentials Generated!
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                    <div>
                      <span className="text-zinc-500">User ID:</span>
                      <p className="font-mono font-bold text-cyan-400">{provisionResult.user.id}</p>
                    </div>
                    <div>
                      <span className="text-zinc-500">Corporate Email:</span>
                      <p className="font-medium text-zinc-200">{provisionResult.user.corporateEmail}</p>
                    </div>
                    <div>
                      <span className="text-zinc-500">Temporary Password:</span>
                      <p className="font-mono font-bold text-amber-400">{provisionResult.initialTempPassword}</p>
                    </div>
                    <div>
                      <span className="text-zinc-500">Mandatory Reset Flag:</span>
                      <p className="font-semibold text-emerald-400">Enabled (First Login)</p>
                    </div>
                  </div>

                  {provisionResult.invitationLink && (
                    <div className="space-y-1">
                      <label className="text-[11px] text-zinc-400 font-medium">System Invitation Token Link:</label>
                      <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-lg border border-zinc-800">
                        <input
                          type="text"
                          readOnly
                          value={provisionResult.invitationLink}
                          className="w-full bg-transparent font-mono text-[11px] text-zinc-300 focus:outline-none"
                        />
                        <button
                          onClick={() => handleCopy(provisionResult.invitationLink!)}
                          className="px-2.5 py-1 bg-purple-600 hover:bg-purple-500 text-white rounded text-[11px] font-bold transition flex items-center gap-1 shrink-0"
                        >
                          <Copy className="w-3 h-3" />
                          {copiedLink ? 'Copied!' : 'Copy Link'}
                        </button>
                      </div>
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setProvisionResult(null);
                      setShowCreateForm(false);
                    }}
                    className="w-full py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 rounded-xl text-xs font-semibold transition"
                  >
                    Return to Directory Overview
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCreateUser} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div className="space-y-1">
                      <label className="text-zinc-300 font-medium">Full Name</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="e.g. Dr. Eleanor Vance"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-300 font-medium">Corporate Email</label>
                      <input
                        type="email"
                        required
                        value={corporateEmail}
                        onChange={e => setCorporateEmail(e.target.value)}
                        placeholder="e.g. eleanor.vance@enterprise.org"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-300 font-medium">Assigned Department / Unit</label>
                      <input
                        type="text"
                        required
                        value={assignedDepartment}
                        onChange={e => setAssignedDepartment(e.target.value)}
                        placeholder="e.g. HealthTech Innovation Labs"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-purple-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-zinc-300 font-medium">Unique Username / User ID</label>
                      <input
                        type="text"
                        required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="e.g. evance"
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-purple-500 font-mono"
                      />
                    </div>

                    <div className="md:col-span-2 space-y-1">
                      <label className="text-zinc-300 font-medium">Scope & System Access Level</label>
                      <select
                        value={scopeLevel}
                        onChange={e => setScopeLevel(e.target.value)}
                        className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-3 py-2 text-xs text-zinc-100 focus:outline-none focus:border-purple-500"
                      >
                        <option value="Departmental Contributor">Departmental Contributor (Specific Unit Scope)</option>
                        <option value="Clinical Diagnostic AI Lead">Clinical Diagnostic AI Lead</option>
                        <option value="Senior Payment Systems Architect">Senior Payment Systems Architect</option>
                        <option value="Lead Information Governance Analyst">Lead Information Governance Analyst</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setShowCreateForm(false)}
                      className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-xl text-xs font-semibold transition"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-xl text-xs shadow transition flex items-center gap-1.5"
                    >
                      <UserPlus className="w-4 h-4" />
                      Provision Account & Generate Temp Password
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* USER DIRECTORY LIST TABLE */
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden">
              <table className="w-full text-left text-xs text-zinc-300">
                <thead className="bg-zinc-900 border-b border-zinc-800 text-zinc-400 font-semibold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="p-3.5">User Identity & Role</th>
                    <th className="p-3.5">Corporate Email & Unit</th>
                    <th className="p-3.5">Account Status</th>
                    <th className="p-3.5">MFA / Security Flags</th>
                    <th className="p-3.5 text-right">Auditor Controls</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/80">
                  {filteredUsers.length > 0 ? (
                    filteredUsers.map(u => (
                      <tr key={u.id} className="hover:bg-zinc-900/50 transition">
                        <td className="p-3.5">
                          <div className="font-bold text-white flex items-center gap-1.5">
                            {u.role === 'admin' ? (
                              <Shield className="w-3.5 h-3.5 text-purple-400" />
                            ) : (
                              <Users className="w-3.5 h-3.5 text-blue-400" />
                            )}
                            {u.fullName}
                          </div>
                          <div className="text-[11px] font-mono text-cyan-400 mt-0.5">
                            {u.id} ({u.username})
                          </div>
                        </td>

                        <td className="p-3.5">
                          <div className="text-zinc-200">{u.corporateEmail}</div>
                          <div className="text-[11px] text-zinc-500">{u.assignedDepartment}</div>
                        </td>

                        <td className="p-3.5">
                          <span
                            className={`px-2.5 py-1 rounded-full text-[10px] font-bold border ${
                              u.status === 'Active'
                                ? 'bg-emerald-950 text-emerald-300 border-emerald-800'
                                : u.status === 'Locked'
                                ? 'bg-amber-950 text-amber-300 border-amber-800'
                                : 'bg-rose-950 text-rose-300 border-rose-800'
                            }`}
                          >
                            {u.status}
                          </span>
                          {u.lockoutUntil && (
                            <div className="text-[10px] text-amber-400 mt-1">Brute-Force Lock Active</div>
                          )}
                        </td>

                        <td className="p-3.5 space-y-1">
                          <div className="flex items-center gap-1 text-[11px]">
                            <span className="text-zinc-500">MFA:</span>
                            <span className={u.mfaEnabled ? 'text-emerald-400 font-bold' : 'text-zinc-500'}>
                              {u.mfaEnabled ? 'Enabled' : 'Pending First Setup'}
                            </span>
                          </div>
                          <div className="text-[10px] text-zinc-500">
                            Reset Required: {u.requiresPasswordReset ? 'Yes' : 'No'}
                          </div>
                        </td>

                        <td className="p-3.5 text-right space-x-2">
                          {u.status === 'Locked' && (
                            <button
                              onClick={() => handleUnlockUser(u.id)}
                              className="px-2.5 py-1 bg-amber-950 hover:bg-amber-900 text-amber-300 border border-amber-800 rounded font-semibold text-[11px] transition inline-flex items-center gap-1"
                              title="Unlock brute-force account lockout"
                            >
                              <Unlock className="w-3 h-3" /> Unlock Account
                            </button>
                          )}

                          {u.role !== 'admin' && (
                            <button
                              onClick={() =>
                                handleToggleUserStatus(u, u.status === 'Active' ? 'Revoked' : 'Active')
                              }
                              className={`px-2.5 py-1 rounded font-semibold text-[11px] transition inline-flex items-center gap-1 ${
                                u.status === 'Active'
                                  ? 'bg-rose-950 hover:bg-rose-900 text-rose-300 border border-rose-800'
                                  : 'bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800'
                              }`}
                            >
                              {u.status === 'Active' ? (
                                <>
                                  <UserX className="w-3 h-3" /> Revoke Access
                                </>
                              ) : (
                                <>
                                  <CheckCircle2 className="w-3 h-3" /> Re-Activate
                                </>
                              )}
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="p-8 text-center text-zinc-500 text-xs">
                        No user accounts match search query.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-950/80 flex items-center justify-between text-xs text-zinc-400">
          <span>Active User Directory Count: {users.length}</span>
          {onClose && !isEmbedded && (
            <button
              onClick={onClose}
              className="px-4 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg font-medium transition"
            >
              Close Directory View
            </button>
          )}
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
