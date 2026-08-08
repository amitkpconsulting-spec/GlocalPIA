import { DataProvenanceEntry, DeltaLogEntry, ActionExecutedType } from '../types';

/**
 * Generate a Frontend Server ID (FID)
 * Format: [PREFIX]-[8-Char Random Hash]
 */
export function generateFID(customPrefix?: string): string {
  const year = new Date().getFullYear();
  const prefix = customPrefix ? customPrefix : `PIA-FE-${year}-`;
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let hash = '';
  for (let i = 0; i < 8; i++) {
    hash += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  // Ensure hyphen separation if not included in customPrefix
  const cleanPrefix = prefix.endsWith('-') ? prefix : `${prefix}-`;
  return `${cleanPrefix}${hash}`;
}

/**
 * Generate a Backend Audit ID (BID)
 * Format: [PREFIX]-[6-Digit Incremental Sequence]
 */
export function generateBID(regionOrPrefix: string = 'UK', sequenceNum: number = 412): string {
  const year = new Date().getFullYear();
  let prefix = regionOrPrefix;
  if (regionOrPrefix === 'UK' || regionOrPrefix === 'US' || regionOrPrefix === 'EU' || regionOrPrefix.length <= 4) {
    prefix = `PIA-BE-${regionOrPrefix.toUpperCase()}-${year}-`;
  }
  const cleanPrefix = prefix.endsWith('-') ? prefix : `${prefix}-`;
  const seqStr = String(sequenceNum).padStart(6, '0');
  return `${cleanPrefix}${seqStr}`;
}

/**
 * Computes a pseudo SHA-256 style hex digest for provenance lineage verification
 */
export function generateProvenanceHash(
  previousHash: string,
  timestamp: string,
  fid: string,
  action: string,
  deltaCount: number
): string {
  const sourceStr = `${previousHash}_${timestamp}_${fid}_${action}_${deltaCount}_${Math.random()}`;
  let hash1 = 0;
  let hash2 = 0;

  for (let i = 0; i < sourceStr.length; i++) {
    const ch = sourceStr.charCodeAt(i);
    hash1 = (hash1 << 5) - hash1 + ch;
    hash1 |= 0;
    hash2 = (hash2 << 7) - hash2 + ch;
    hash2 |= 0;
  }

  const hex1 = Math.abs(hash1).toString(16).padStart(8, '0');
  const hex2 = Math.abs(hash2).toString(16).padStart(8, '0');
  const hex3 = Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0');
  const hex4 = Math.floor(Math.random() * 0xffffffff).toString(16).padStart(8, '0');

  return `0x${hex1}${hex2}${hex3}${hex4}`.toLowerCase();
}

/**
 * Creates a Data Provenance Entry record for audit trail
 */
export function createProvenanceEntry(
  triggeringFid: string,
  parentVersion: string,
  newVersion: string,
  actionExecuted: ActionExecutedType,
  modifiedBy: string,
  deltaLog: DeltaLogEntry[],
  backendBid?: string,
  previousHash: string = '0x00000000000000000000000000000000'
): DataProvenanceEntry {
  const timestamp = new Date().toISOString();
  const hash = generateProvenanceHash(previousHash, timestamp, triggeringFid, actionExecuted, deltaLog.length);

  return {
    id: `PROV-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    timestamp,
    triggeringFid,
    backendBid,
    parentVersion,
    newVersion,
    actionExecuted,
    modifiedBy,
    deltaLog,
    provenanceHash: hash,
  };
}

/**
 * Increment Version string helper
 * Minor bump (v1.0 -> v1.1) for frontend edits
 * Major bump (v1.1 -> v2.0) for backend SME/audit overrides
 */
export function bumpVersion(currentVersion: string, bumpType: 'minor' | 'major'): string {
  if (!currentVersion || !currentVersion.startsWith('v')) {
    return bumpType === 'major' ? 'v2.0' : 'v1.1';
  }

  const parts = currentVersion.replace('v', '').split('.');
  let major = parseInt(parts[0], 10) || 1;
  let minor = parseInt(parts[1], 10) || 0;

  if (bumpType === 'major') {
    major += 1;
    minor = 0;
  } else {
    minor += 1;
  }

  return `v${major}.${minor}`;
}
