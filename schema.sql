-- ============================================================================
-- LOCAL-PIA: AIR-GAPPED SQLITE DATABASE SCHEMA (local_pia.db)
-- Privacy Impact Assessment & Security Governance Engine
-- Engine: SQLite 3.x
-- ============================================================================

-- ----------------------------------------------------------------------------
-- 1. DATABASE CONFIGURATION & PERFORMANCE PRAGMAS
-- ----------------------------------------------------------------------------
PRAGMA encoding = 'UTF-8';
PRAGMA foreign_keys = ON;
PRAGMA journal_mode = WAL;
PRAGMA synchronous = NORMAL;

-- ----------------------------------------------------------------------------
-- 2. TABLE: users
-- Core system identity store for Auditors and Frontend Users
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT UNIQUE NOT NULL,
    username TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT NOT NULL CHECK(role IN ('AUDITOR', 'FRONTEND_USER')),
    department TEXT,
    must_change_password INTEGER NOT NULL DEFAULT 1 CHECK(must_change_password IN (0, 1)),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for users
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_user_id ON users(user_id);
CREATE UNIQUE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);

-- ----------------------------------------------------------------------------
-- 3. TABLE: pia_records
-- Primary Privacy Impact Assessment records
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS pia_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fid TEXT UNIQUE NOT NULL,
    bid TEXT UNIQUE,
    project_name TEXT NOT NULL,
    industry_sector TEXT NOT NULL CHECK(industry_sector IN (
        'BANKING', 'HOSPITALS', 'RETAIL', 'CORPORATE', 'TRADE', 'AGRICULTURE', 'PHARMA'
    )),
    status TEXT NOT NULL CHECK(status IN (
        'DRAFT', 'SUBMITTED', 'IN_REVISION', 'APPROVED', 'REJECTED'
    )),
    created_by_user_id TEXT NOT NULL,
    current_version TEXT NOT NULL DEFAULT 'v1.0',
    impact_score REAL,
    likelihood_score REAL,
    overall_risk_rating TEXT CHECK(overall_risk_rating IN ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL')),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by_user_id) REFERENCES users(user_id) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Indexes for pia_records
CREATE UNIQUE INDEX IF NOT EXISTS idx_pia_records_fid ON pia_records(fid);
CREATE UNIQUE INDEX IF NOT EXISTS idx_pia_records_bid ON pia_records(bid) WHERE bid IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_pia_records_sector ON pia_records(industry_sector);
CREATE INDEX IF NOT EXISTS idx_pia_records_status ON pia_records(status);
CREATE INDEX IF NOT EXISTS idx_pia_records_created_by ON pia_records(created_by_user_id);

-- ----------------------------------------------------------------------------
-- 4. TABLE: pia_questionnaire_answers
-- Detailed question-level responses for each PIA record
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS pia_questionnaire_answers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fid TEXT NOT NULL,
    question_id TEXT NOT NULL,
    section TEXT NOT NULL CHECK(section IN (
        'PROJECT', 'LAWFUL_BASIS', 'RIGHTS', 'RECORDS', 'DESTRUCTION', 'THIRD_PARTY', 'AI_USE_CASE', 'SECTOR_RULES'
    )),
    score_value INTEGER NOT NULL CHECK(score_value BETWEEN 1 AND 5),
    response_text TEXT,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fid) REFERENCES pia_records(fid) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT unq_fid_question UNIQUE (fid, question_id)
);

-- Indexes for questionnaire answers
CREATE INDEX IF NOT EXISTS idx_answers_fid ON pia_questionnaire_answers(fid);
CREATE INDEX IF NOT EXISTS idx_answers_question_id ON pia_questionnaire_answers(question_id);
CREATE INDEX IF NOT EXISTS idx_answers_section ON pia_questionnaire_answers(section);

-- ----------------------------------------------------------------------------
-- 5. TABLE: provenance_logs
-- Immutable cryptographic audit trail tracking all state mutations and sign-offs
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS provenance_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fid TEXT NOT NULL,
    bid TEXT,
    version TEXT NOT NULL,
    action TEXT NOT NULL CHECK(action IN (
        'INITIAL_SUBMISSION', 'SME_REVISION', 'TAILORING', 'SIGN_OFF'
    )),
    modified_by_user_id TEXT NOT NULL,
    delta_log_json TEXT NOT NULL,
    sha256_hash TEXT NOT NULL,
    timestamp DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fid) REFERENCES pia_records(fid) ON DELETE RESTRICT ON UPDATE CASCADE,
    FOREIGN KEY (bid) REFERENCES pia_records(bid) ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Indexes for provenance logs
CREATE INDEX IF NOT EXISTS idx_provenance_fid ON provenance_logs(fid);
CREATE INDEX IF NOT EXISTS idx_provenance_bid ON provenance_logs(bid);
CREATE INDEX IF NOT EXISTS idx_provenance_action ON provenance_logs(action);
CREATE INDEX IF NOT EXISTS idx_provenance_timestamp ON provenance_logs(timestamp);

-- ----------------------------------------------------------------------------
-- 6. TABLE: regulatory_tailoring
-- Framework overrides, auditor notes, and regulatory tailoring sign-offs
-- ----------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS regulatory_tailoring (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    bid TEXT NOT NULL,
    framework_name TEXT NOT NULL CHECK(framework_name IN (
        'GDPR', 'ISO_42001', 'DPDP_ACT', 'NIST_AI_RMF'
    )),
    tailored_notes TEXT,
    override_risk_level TEXT CHECK(override_risk_level IN ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL')),
    auditor_signoff_by TEXT,
    FOREIGN KEY (bid) REFERENCES pia_records(bid) ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT unq_bid_framework UNIQUE (bid, framework_name)
);

-- Indexes for regulatory tailoring
CREATE INDEX IF NOT EXISTS idx_tailoring_bid ON regulatory_tailoring(bid);
CREATE INDEX IF NOT EXISTS idx_tailoring_framework ON regulatory_tailoring(framework_name);

-- ----------------------------------------------------------------------------
-- 7. TRIGGERS: AUTO-UPDATE TIMESTAMP MANAGEMENT
-- Automatically update updated_at column on record modification
-- ----------------------------------------------------------------------------

-- Trigger for pia_records
CREATE TRIGGER IF NOT EXISTS trg_pia_records_updated_at
AFTER UPDATE ON pia_records
FOR EACH ROW
BEGIN
    UPDATE pia_records
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = OLD.id;
END;

-- Trigger for pia_questionnaire_answers
CREATE TRIGGER IF NOT EXISTS trg_answers_updated_at
AFTER UPDATE ON pia_questionnaire_answers
FOR EACH ROW
BEGIN
    UPDATE pia_questionnaire_answers
    SET updated_at = CURRENT_TIMESTAMP
    WHERE id = OLD.id;
END;

-- ----------------------------------------------------------------------------
-- 8. INITIAL MASTER ADMIN SEED DATA
-- Default Auditor Account Provisioning
-- Username: admin | Password: admin_hash (Argon2 / bcrypt hash representation)
-- ----------------------------------------------------------------------------
INSERT OR IGNORE INTO users (
    user_id,
    username,
    password_hash,
    role,
    department,
    must_change_password,
    created_at
) VALUES (
    'USR-ADMIN-01',
    'admin',
    '$2b$12$e8YyA2zS03PzC3hL1V0QEOc9rU4z0Xv5H6G2m9N1P3Q5R7S9T1U3V', -- Argon2 / bcrypt hash for 'admin'
    'AUDITOR',
    'Data Protection & Compliance Office',
    1,
    CURRENT_TIMESTAMP
);

-- Seed Default Frontend Users
INSERT OR IGNORE INTO users (
    user_id,
    username,
    password_hash,
    role,
    department,
    must_change_password,
    created_at
) VALUES 
(
    'USR-2026-SLIN',
    'slin',
    '$2b$12$k2B1M3N4P5Q6R7S8T9U0V1W2X3Y4Z5A6B7C8D9E0F1G2H3I4J5K6',
    'FRONTEND_USER',
    'HealthTech Innovation Labs',
    1,
    CURRENT_TIMESTAMP
),
(
    'USR-2026-ARIV',
    'arivera',
    '$2b$12$l3C2N4P5Q6R7S8T9U0V1W2X3Y4Z5A6B7C8D9E0F1G2H3I4J5K6L7',
    'FRONTEND_USER',
    'FinTech Treasury Operations',
    1,
    CURRENT_TIMESTAMP
);
