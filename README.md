# Global Local PIA (GlocalPIA) — Privacy Impact Assessment & Governance Engine

> **Zero-Cloud, Air-Gapped Privacy Impact Assessment (PIA) & Data Governance Platform**  
> *Dual-ID Lineage Audit Engine, 7-Sector Dynamic Rules, Local LLM Discovery, Deterministic Compliance Matrix, and SQLite Relational Store*

---

## 📌 Repository & GitHub Information

- **GitHub Repository Reference**: [https://github.com/amitkpconsulting-spec/GlocalPIA](https://github.com/amitkpconsulting-spec/GlocalPIA)
- **Clone Command**:
  ```bash
  git clone https://github.com/amitkpconsulting-spec/GlocalPIA.git
  cd GlocalPIA
  ```

---

## 🎯 What This Tool Is

**Local PIA (GlocalPIA)** is an enterprise-grade, air-gapped, zero-cloud **Privacy Impact Assessment (PIA) and Data Protection Governance Engine**. Designed for Data Protection Officers (DPOs), Information Security Auditors, and Project Leads across privacy-critical sectors (Healthcare, Banking, Retail, Corporate, Logistics, AgTech, Pharma), GlocalPIA enables organizations to perform structured, quantitative Privacy Impact Assessments completely on-premise without sending personal data or assessment telemetry to external cloud services.

It integrates an **ICO/UK GDPR / EU GDPR quantitative risk matrix**, **7 industry sector rule profiles**, **cryptographic dual-ID provenance tracking** (`FID` vs `BID`), **local LLM auto-discovery** (Ollama, LM Studio, AnythingLLM, LocalAI) with a **deterministic offline rule fallback**, and an **air-gapped database store**.

---

## 🚀 Key Features of This Tool

### 1. 🌐 Zero-Cloud Air-Gapped Execution
- **100% Offline Integrity**: Operates with zero external API dependencies or CDN tracking. All assets, fonts, and logic are self-contained.
- **Local Network Binding**: Default binding to `http://localhost:3000` with automatic port collision resolution.

### 2. 🏢 7 Tailored Industry Sector Rule Engines
- **Banking & Financial Services**: GLBA, PCI-DSS v4.0, SOX, PSD2. Evaluates financial PII (IBAN, Credit Cards, Credit Scores) and applies a +30% risk multiplier for AI credit decisioning.
- **Hospitals & Healthcare**: HIPAA, HITECH, EU MDR, NHS IG Principles. Automatically escalates base risk to maximum `5.0` (Critical Tier) whenever health/biometric data (PHI/EHR) is processed.
- **Retail & E-Commerce**: CCPA/CPRA, PCI-DSS, ePrivacy Directive. Assesses mass consumer tracking, web cookies, POS systems, and consent management.
- **Corporate & Enterprise Operations**: Differentiates employee PII from customer data; evaluates workplace surveillance (CCTV, DLP agents, keystroke logging, Works Council compliance).
- **Trade, Logistics & Supply Chain**: Evaluates Transborder Data Flows (TDF) and 3PL vendor telemetry tracking.
- **AgTech & Smart Agriculture**: AgData Transparent (ADT) standards, geospatial farm data, and vendor telemetry sharing.
- **Pharmaceuticals & Clinical Research**: Good Clinical Practice (GCP), FDA 21 CFR Part 11, clinical trial consent, and bio-bank anonymization.

### 3. 🤖 Dual AI Processing Strategy
- **Local AI Auto-Discovery**: Automatically scans and connects to locally hosted AI servers via REST APIs:
  - **Ollama**: `http://localhost:11434`
  - **LM Studio**: `http://localhost:1234`
  - **Anything LLM**: `http://localhost:3001`
  - **LocalAI**: `http://localhost:8080`
- **Deterministic Compliance Fallback Engine**: Instant offline rule engine applying UK GDPR, NHS IG, and DPDPA compliance rules when local AI servers are unavailable.

### 4. 🔗 Cryptographic Dual-ID Provenance Lineage Engine
- **Dual Tracking Keys**:
  - **Frontend Server ID (FID)**: e.g., `PIA-FE-2026-A8F9K2L1` (assigned at initial draft creation).
  - **Backend Audit ID (BID)**: e.g., `PIA-BE-UK-2026-000412` (assigned upon formal DPO audit submission).
- **Immutable Delta Logging**: Tracks version evolution (`v1.0` → `v1.1` → `v2.0`) backed by **SHA-256 cryptographic hashes** for compliance audit trails.

### 5. 🧮 Quantitative Mathematical Risk Matrix
- **Base Risk Score**: $\text{Base Risk} = \text{Impact Score (1–5)} \times \text{Likelihood Score (1–5)}$
- **Final Risk Score**:
  $$\text{Final Risk Score} = \min\left(25, \text{Base Risk Score} \times \prod \text{Applied Modifiers}\right)$$
- **Applied Multipliers**:
  - External Vendor Multiplier ($1.0\times - 1.25\times$)
  - Automated AI Decisioning Multiplier ($1.0\times - 1.30\times$)
  - Cross-Border Transfer Multiplier ($1.0\times - 1.25\times$)
  - Special Category / PHI Data Multiplier ($1.0\times - 1.40\times$)
  - Missing Lawful Basis Penalty Multiplier ($1.0\times - 1.50\times$)
- **Risk Rating Tiers**: `Low` (1–5), `Medium` (6–11), `High` (12–18), `Critical` (19–25).

### 6. 🏥 NHS IG & Common Law Confidentiality Module
- Evaluates 8 core NHS Information Governance Principles and Common Law Duty of Confidentiality justifications (Consent, Public Interest, Legal Duty, Statutory Basis).

### 7. 🛠️ Remediation Gap Log Dashboard
- Automated gap discovery via local AI or offline rule engine.
- Assign gaps to team members with SLA targets, risk ratings, and DPO status tracking (`Open` → `In Progress` → `Overdue` → `Resolved`).

### 8. 🔐 Role-Based Access Control (RBAC) & Security Engine
- Roles: `admin` (Full access, security log inspection, user provisioning) and `frontend_user` (Draft contributor).
- Account lockout policy (3 failed attempts), MFA / TOTP support, mandatory password reset flags, and security audit log.

### 9. 📊 Server Health & Auto-Discovery Diagnostics
- Real-time diagnostic monitoring of PID, Uptime, Memory usage, Network port binding, storage item counts, and local LLM connectivity.

### 10. 📄 High-Fidelity Print & Export Engine
- Styled PDF print layout for formal DPO sign-offs and JSON backup/restore capabilities.

---

## 🏗️ Architecture Overview (from `PROMPT.md`)

```
                        ┌─────────────────────────────────────────┐
                        │      Client Browser / Web Interface     │
                        │       (React 18 + Vite + Tailwind)      │
                        └────────────────────┬────────────────────┘
                                             │
                                  REST API / HTTP Port 3000
                                             │
                        ┌────────────────────▼────────────────────┐
                        │       Monolithic Backend Server         │
                        │     (Express.js / Node.js + server.ts)   │
                        └──────┬───────────────────────────┬──────┘
                               │                           │
            ┌──────────────────▼───────────────┐ ┌─────────▼─────────────────────┐
            │ Dual AI Processing Layer         │ │ Local Data Persistence         │
            │  - Ollama (11434)                │ │  - ./data/pia_store.json       │
            │  - LM Studio (1234)              │ │  - ./data/runtime_config.json  │
            │  - AnythingLLM (3001)            │ │  - SQLite: local_pia.db        │
            │  - LocalAI (8080)                │ └────────────────────────────────┘
            │  - Deterministic Rule Fallback   │
            └──────────────────────────────────┘
```

### Architectural Directives & Specifications
1. **Zero Cloud Dependencies**: Completely air-gapped system. All fonts, scripts, and libraries are locally bundled.
2. **Dual Execution Engine**:
   - Primary Express Node.js backend (`server.ts` compiled via `esbuild` to CommonJS `dist/server.cjs`).
   - Secondary Python wrapper (`app.py` & `db_init.py`) for Python-native environments.
3. **Database Architecture**:
   - Concurrency-optimized SQLite database (`local_pia.db` / `dpdpa_assessment.db`) running in Write-Ahead Logging (`WAL`) mode with foreign key enforcement.
   - Primary local JSON store (`./data/pia_store.json`) for zero-dependency instant startup.

---

## 📁 Directory & File Structure Blueprint

```
/
├── .env.example                # Configuration template with local fallback defaults
├── Dockerfile                  # Multi-stage container build instructions for air-gapped deployment
├── docker-compose.yml          # Container orchestration service configuration
├── setup.bat                   # Automated Windows setup & environment gap fulfillment engine
├── start.bat                   # 1-Click Windows launcher with port discovery & auto-browser launch
├── Start.bat                   # Convenient root 1-click launcher alias
├── scripts/
│   └── wait-and-open.cjs       # Node.js server health detector & automatic browser launcher
├── schema.sql                  # Relational SQLite database schema
├── db_init.py                  # Python database initialization tool
├── app.py                      # Python backend server alternative wrapper
├── server.ts                   # Primary Express backend server with Vite middleware
├── package.json                # Dependencies and script definitions
├── tsconfig.json               # TypeScript configuration
├── vite.config.ts              # Vite bundle configuration
├── data/
│   ├── pia_store.json          # Primary local JSON database store
│   └── runtime_config.json    # Dynamic runtime config & auto-discovered AI services
├── src/
│   ├── App.tsx                 # Main UI entry point and state container
│   ├── main.tsx                # React DOM root setup
│   ├── index.css               # Tailwind CSS imports & custom dark theme
│   ├── types.ts                # Master TypeScript definitions
│   ├── data/
│   │   ├── industrySectors.ts  # 7 Industry Sector Profiles & dynamic rules
│   │   ├── questionnaire.ts    # Multi-section questionnaire (Sections A–K)
│   │   └── mockData.ts         # Initial seed assessments & gaps
│   ├── utils/
│   │   └── piaStatusLogic.ts   # Status transitions & field completion percentage calculator
│   └── components/
│       ├── Header.tsx          # Top navigation, status indicator & configuration menu
│       ├── InitialSetupSectorWizard.tsx # Industry sector wizard modal
│       ├── AssessmentForm.tsx  # Assessment form wizard with section tabs
│       ├── RegulatoryTailoringPanel.tsx # Framework tailoring & override controls
│       ├── ProvenanceViewerModal.tsx    # Dual-ID lineage & delta log audit viewer
│       ├── GapLogDashboard.tsx          # Compliance gap tracking dashboard
│       ├── SummaryDashboard.tsx         # Directory & analytics summary panel
│       ├── ServerHealthDashboard.tsx    # System diagnostics, PID, & local AI scanner
│       ├── AuthModal.tsx                # Authentication modal with MFA TOTP
│       ├── UserDirectoryModal.tsx       # RBAC user management modal
│       ├── SystemConfigModal.tsx        # Local AI endpoint configuration modal
│       └── ExportReportModal.tsx        # High-fidelity PDF print preview & JSON export
```

---

## 🔌 REST API Endpoint Specification

### Authentication & User Management
- `POST /api/auth/login`: Authenticate user credentials (returns session or prompts MFA).
- `POST /api/auth/mfa/verify`: Verify 6-digit TOTP code for MFA-enabled users.
- `POST /api/auth/logout`: End active session.
- `GET /api/users`: List provisioned accounts (Admin only).
- `POST /api/users`: Provision a new user account (Admin only).
- `POST /api/users/:id/reset-password`: Reset user credentials (Admin only).
- `POST /api/users/:id/toggle-status`: Activate/deactivate user account.

### Assessment Management
- `GET /api/pias`: List all PIA assessments stored in local JSON database.
- `GET /api/pias/:id`: Retrieve single assessment by ID, `FID`, or `BID`.
- `POST /api/pias`: Create new PIA draft (assigns `FID`, sets version to `v1.0`).
- `PUT /api/pias/:id`: Update assessment or submit for DPO review (generates provenance log entry).
- `DELETE /api/pias/:id`: Archive or delete assessment (Admin only).
- `POST /api/pias/:id/tailor`: Update regulatory framework tailoring settings.

### AI & Gap Analysis
- `POST /api/ai/analyze-gaps`: Run local AI prompt or offline rule engine to identify compliance gaps.
- `GET /api/config`: Return active server runtime configuration and local AI endpoint status.
- `POST /api/config`: Update local LLM server URLs and model names.
- `POST /api/config/autodiscover`: Trigger immediate scan for local AI endpoints on `localhost`.

### Remediation Gaps
- `GET /api/gaps`: Retrieve all tracked remediation gaps.
- `POST /api/gaps`: Create a compliance gap entry.
- `PUT /api/gaps/:id`: Update gap status, owner, or SLA mitigation target.
- `POST /api/gaps/:id/followup`: Append follow-up commentary.
- `DELETE /api/gaps/:id`: Delete gap entry.

### System Diagnostics
- `GET /api/server/health`: Returns PID, uptime, memory usage, port binding, storage item counts, and discovered AI services.
- `POST /api/server/restart`: Soft reload of runtime server state.
- `GET /api/security-logs`: Retrieve system security audit log entries.

---

## 💻 Installation & Execution Guide

### Method 1: Manual Host Setup
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/amitkpconsulting-spec/GlocalPIA.git
   cd GlocalPIA
   ```
2. **Install Node.js Dependencies**:
   ```bash
   npm install
   ```
3. **Start Development Server**:
   ```bash
   npm run dev
   ```
4. **Access Web Console**: Navigate to `http://localhost:3000`.

---

### Method 2: Windows 1-Click Setup & Execution (`setup.bat`, `start.bat`, `Start.bat`)

Local PIA includes a fully automated, self-healing execution suite engineered specifically for air-gapped Windows workstation environments.

#### Step 1: Automated Environment & Dependency Setup (`setup.bat`)
Double-click `setup.bat` or run from Command Prompt:
```cmd
setup.bat
```
What `setup.bat` does automatically:
- **Prerequisite Detection**: Verifies Node.js and npm (offers automated `winget install OpenJS.NodeJS.LTS` on Windows 10/11 if missing). Checks optional Python/`.venv` tools.
- **Storage & Directory Fulfillment**: Creates `data/`, `logs/`, `uploads/`, and `scripts/` directories if missing.
- **Configuration & Store Generation**: Generates `.env` and initializes `data/pia_store.json` with a clean schema.
- **Automated Dependency Installation**: Executes `npm install` with automatic peer-dependency resolution.
- **High-Speed Production Compilation**: Automatically compiles the standalone Express backend and Vite client into `dist/server.cjs` and `dist/index.html`.
- **Immediate Launch Option**: Prompts `Would you like to launch Local PIA and open browser now? [Y/n]` to launch the application and open your browser immediately.

*Tip: For automated deployments or CI, run `setup.bat --no-pause` to bypass interactive prompts.*

#### Step 2: 1-Click Launch & Zero-Race Browser Launch (`start.bat` / `Start.bat`)
Double-click `Start.bat` (or `start.bat`) at any time to launch the platform:
```cmd
start.bat
```
Features of the launcher engine:
- **Self-Healing Dependencies**: If `.env` or `node_modules` are missing, `start.bat` automatically triggers `setup.bat --no-pause` to heal the environment before starting.
- **Dynamic Port Availability Detection**: Probes the configured port (default `3000`) via a native Node.js socket check. If port 3000 is occupied by another service, it automatically allocates the next available port (e.g. `3001`, `3002`) to prevent conflicts.
- **Smart Readiness Poller (`scripts/wait-and-open.cjs`)**: Rather than relying on arbitrary sleep timers, a dedicated background poller pings `http://127.0.0.1:%PORT%/api/health`. The default web browser opens the **exact millisecond** the server answers with HTTP 200 OK, completely eliminating `ERR_CONNECTION_REFUSED` errors.
- **Universal Fallback Launcher**: A secondary timer ensures the browser opens even in environments with restricted background execution.
- **High-Speed Standalone Production Engine**: Automatically launches `dist/server.cjs` if compiled, or falls back seamlessly to `npm run dev` in dynamic development environments.

#### Step 3: Default Credentials
- **Administrator Role**: Username: `admin` | Password: `admin`
- **Contributor Role**: Username: `contributor` | Password: `contributor`

#### 💡 Troubleshooting Local Browser & Port Access
- **Application URLs**:
  - Primary URL: [http://localhost:3000](http://localhost:3000)
  - Direct Loopback IP: [http://127.0.0.1:3000](http://127.0.0.1:3000)
  - Health Endpoint: [http://localhost:3000/api/health](http://localhost:3000/api/health)
- **If the browser does not open automatically**: Open your preferred browser (Chrome, Edge, Firefox, Brave) and navigate directly to the URL printed in the launcher window (e.g., `http://localhost:3000` or the dynamically allocated port).
- **If Port 3000 is already in use**: `start.bat` automatically detects port collisions and selects an alternate available port (e.g., 3001). Check the console output for the assigned URL.
- **To stop the server**: Focus the launcher command prompt window and press `Ctrl+C` or close the window.

---

### Method 3: Docker & Docker Compose
1. **Clone Repository & Build Container**:
   ```bash
   git clone https://github.com/amitkpconsulting-spec/GlocalPIA.git
   cd GlocalPIA
   docker compose up -d --build
   ```
2. **Access Application**: `http://localhost:3000`
3. **Stop Container Stack**: `docker compose down`

---

## 📄 Database Architecture (`schema.sql`)

When using the relational SQLite mode (`local_pia.db`), the system initializes 5 core tables in `WAL` journal mode:

```sql
PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

-- Core Tables:
1. users                     -- Master user store for Auditors and Contributors
2. pia_records               -- Primary PIA metadata, Dual-IDs (fid, bid), Sector rules, and Risk Scores
3. pia_questionnaire_answers -- Scored responses (1–5) across questionnaire sections
4. provenance_logs          -- Immutable audit logs with SHA-256 cryptographic hashes
5. regulatory_tailoring      -- Framework overrides (GDPR, ISO 42001, DPDPA, NIST AI RMF)
```

---

## 📜 License

This project is licensed under the **MIT License**.

```
Copyright (c) 2026 LOCAL-PIA / GlocalPIA Project
```
