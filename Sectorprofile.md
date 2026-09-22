# GLOCAL PIA — Industry Sector Profiles & Dynamic Governance Rules

> **Local Privacy Impact Assessment (PIA) & Governance Engine**  
> *Dynamic Sector Rule Profiles, Regulatory Alignment, Risk Multipliers, and Sector-Specific Governance Controls (Section S)*

---

## 📋 Executive Overview

GLOCAL PIA embeds **7 specialized Industry Sector Rule Profiles** tailored for domain-specific data protection regulations, threat vectors, and compliance standards. When an assessment is initialized or tailored for a specific industry sector, the engine dynamically applies:

1. **Sector-Specific Risk Modifiers & Multipliers** (e.g., PHI Base Score escalation, AI Credit Scoring multipliers, Cross-border transfer penalties).
2. **Domain-Specific Regulatory Framework Alignments** (e.g., HIPAA, PCI-DSS v4.0, GLBA, AgData Transparent, FDA 21 CFR Part 11).
3. **Dynamic Rule Assertions** (e.g., Mandatory break-glass auditing, Works Council review, double-blinding protocols).
4. **Sector-Specific Questionnaire Section S** (Targeted governance control questions with quantitative 1–5 scoring).

---

## 🏢 Summary Table: 7 Industry Sector Profiles

| Sector ID | Sector Name | Short Name | Key Regulatory Frameworks | Base Risk & Multiplier Rule |
| :--- | :--- | :--- | :--- | :--- |
| `banking` | **Banking & Financial Services** | Banking & Finance | PCI-DSS v4.0, GLBA §501(b), Basel III, PSD2, SWIFT | Financial Identifiers elevate Base Impact. Automated AI credit scoring triggers a **+30% risk multiplier** ($1.30\times$). |
| `healthcare` | **Hospitals & Healthcare** | Healthcare & HealthTech | HIPAA Privacy/Security, HITECH, EU MDR, NHS Caldicott | Processing PHI or biometric data automatically forces Base Risk Score to maximum **5.0 (Critical Tier)**. |
| `retail` | **Retail & E-Commerce** | Retail & E-Com | CCPA/CPRA, ePrivacy Directive, PCI-DSS v4.0 | Mass public consumer tracking and third-party ad profiling trigger additional ePrivacy and opt-out compliance checks. |
| `corporate` | **Corporate & Enterprise Operations** | Corporate & HR | Article 88 GDPR, Labor Laws, Works Council Directives | Workplace surveillance, CCTV, DLP, or keystroke logging triggers high governance scrutiny under Labor Law. |
| `logistics` | **Trade, Logistics & Supply Chain** | Trade & Logistics | WCO SAFE Framework, Cross-Border TDF, ISO 28000 | Multi-jurisdictional transborder flows add cross-border transfer penalties ($1.25\times$). |
| `agtech` | **Agriculture & AgTech** | AgTech & Agriculture | AgData Transparent (ADT), USDA Data Governance | Linking geospatial drone telemetry to identified farmers requires clear commercial AI model consent. |
| `pharma` | **Pharma & Life Sciences** | Pharma & Clinical | ICH GCP E6(R2), FDA 21 CFR Part 11 / 50, EU CTR | Key-coded trial subject records require strict sponsor blinding, IRB ethics review, and bio-bank consent auditing. |

---

## 🔍 Detailed Sector Profiles & Dynamic Governance Rules

---

### 1. 🏦 Banking & Financial Services (`banking`)

- **Identifier**: `banking`
- **Full Name**: Banking & Financial Services
- **Short Name**: Banking & Finance
- **Icon**: `Landmark`
- **Badge Style**: `bg-emerald-950 text-emerald-300 border-emerald-800`

#### Operational Context & Scope
High-frequency processing of financial assets, credit risk scoring, open banking APIs, cross-border wire transactions, algorithmic trading, and anti-money laundering (AML) / fraud detection pipelines.

#### Dynamic Governance Rules
1. **Financial Identifiers Enforcement**: Strict mandatory evaluation of all Financial Identifiers (IBAN, Credit Card numbers, Credit Scores, Account Balances, and Transaction Histories).
2. **Automated AI Decisioning Controls**: Mandatory risk evaluation and explainability audit for algorithmic loan underwriting, credit limit scoring, or automated account blocking.
3. **Data Residency & Transaction Localization**: Verification of sovereign data residency requirements for core banking transaction logs and payment switch telemetry.

#### Regulatory Alignment
- **PCI-DSS v4.0** (Payment Card Industry Data Security Standard)
- **Gramm-Leach-Bliley Act (GLBA §501(b))**
- **Basel III / BCBS 239** (Risk Data Aggregation & Reporting)
- **PSD2 / Open Banking Directive** (Payment Services Directive 2)
- **SWIFT Data Privacy & CSP Guidelines**
- **Local Central Bank Regulations**

#### Base Risk & Multiplier Rule
> *Financial Identifiers elevate Base Impact. Automated AI credit scoring triggers a **+30% risk multiplier** ($1.30\times$).*

---

#### Sector Governance Questions (Section S: Banking)

```yaml
- Question ID: SEC_FIN_1
  Title: Banking S1. Financial Identifiers & Credit Data Scope
  Description: Sensitivity level of processed financial records (IBAN, Credit Cards, Credit Scores, Account Balances).
  Reference: PCI-DSS v4.0 / GLBA §501(b)
  Options:
    - Score 1: Basic payment receipt / transaction metadata only
    - Score 2: Tokenized credit card / payment data via PCI-DSS gateway
    - Score 4: Bank account numbers, IBAN, and account balances
    - Score 5: Full credit scores, financial asset histories, and credit risk profiles

- Question ID: SEC_FIN_2
  Title: Banking S2. Open Banking & Third-Party API Sharing
  Description: Data sharing mechanisms under Open Banking / PSD2 regulations.
  Reference: PSD2 Art 66/67 / Open Banking API Standards
  Options:
    - Score 1: No third-party open banking API integrations
    - Score 2: Read-only financial data API with explicit consent token
    - Score 3: Payment initiation service (PISP) integration
    - Score 5: Unverified third-party financial aggregator data sharing

- Question ID: SEC_FIN_3
  Title: Banking S3. AI/Automated Credit Scoring & Fraud Profiling
  Description: Algorithmic decision-making for loan approvals, credit limits, or fraud flags.
  Reference: EU AI Act High-Risk AI / Basel III Risk Models
  Options:
    - Score 1: No automated scoring or profiling used
    - Score 2: Human credit analyst makes final decision based on AI recommendation
    - Score 3: Automated credit limit adjustments with right to human appeal
    - Score 5: Fully automated credit denial / account blocking without human review
```

---

### 2. 🏥 Hospitals & Healthcare (`healthcare`)

- **Identifier**: `healthcare`
- **Full Name**: Hospitals & Healthcare
- **Short Name**: Healthcare & HealthTech
- **Icon**: `Activity`
- **Badge Style**: `bg-rose-950 text-rose-300 border-rose-800`

#### Operational Context & Scope
Processing of Protected Health Information (PHI), Electronic Health Record (EHR) / Electronic Medical Record (EMR) systems, telemedicine platforms, connected medical IoT diagnostic devices, and emergency care registries.

#### Dynamic Governance Rules
1. **Critical Base Score Escalation**: Processing of any Health, Medical, Biometric, or Genetic data automatically elevates the assessment Base Risk Score to maximum **5.0 (Critical Tier)**.
2. **Break-Glass Access & Practitioner Auditing**: Strict audit trail logging for every view/query of patient electronic health records and real-time alerts on emergency "break-glass" overrides.
3. **Medical Device & Telemedicine Isolation**: Mandatory security validation of connected medical IoT devices, remote patient monitors, and encrypted patient communications.

#### Regulatory Alignment
- **HIPAA Privacy & Security Rules** (45 CFR Part 160/164)
- **HITECH Act** (Health Information Technology for Economic and Clinical Health)
- **EU Medical Device Regulation (MDR Art 62 / Annex I)**
- **NHS IG Caldicott Principles** (UK Health & Social Care)
- **National Health Data Protection Acts**

#### Base Risk & Multiplier Rule
> *Processing PHI or biometric data automatically forces Base Risk Score to maximum **5.0 (Critical Tier)**.*

---

#### Sector Governance Questions (Section S: Healthcare)

```yaml
- Question ID: SEC_HEALTH_1
  Title: Healthcare S1. Protected Health Information (PHI) & EHR Scope
  Description: Depth and classification of patient health records processed.
  Reference: HIPAA §164.502 / EU MDR Art 62
  Options:
    - Score 1: Basic appointment booking / contact details only
    - Score 2: Anonymized or aggregated epidemiological statistics
    - Score 5: Electronic Health Records (EHR), diagnostic images, prescriptions
    - Score 5: Genomic data, mental health records, or biometric health tracking

- Question ID: SEC_HEALTH_2
  Title: Healthcare S2. Emergency Break-Glass & Practitioner Audit Controls
  Description: Access auditing and emergency override capability for medical staff.
  Reference: HIPAA Security Rule §164.312(b) / NHS Caldicott Principles
  Options:
    - Score 1: Strict RBAC with mandatory 100% audit logging for every record view
    - Score 2: Emergency break-glass access enabled with immediate mandatory DPO audit alert
    - Score 4: Manual break-glass logging without real-time audit triggers
    - Score 5: Shared practitioner accounts or un-audited EHR access

- Question ID: SEC_HEALTH_3
  Title: Healthcare S3. Medical IoT & Telemedicine Endpoint Security
  Description: Security controls on connected medical diagnostic devices and remote care apps.
  Reference: EU MDR Annex I / FDA Medical Device Cybersecurity
  Options:
    - Score 1: No connected medical IoT or remote devices involved
    - Score 2: Hospital-managed encrypted medical IoT devices on isolated VLAN
    - Score 3: Patient-owned mobile telemedicine app with TLS and device verification
    - Score 5: Unencrypted wireless medical telemetry or remote patient monitors
```

---

### 3. 🛍️ Retail & E-Commerce (`retail`)

- **Identifier**: `retail`
- **Full Name**: Retail & E-Commerce
- **Short Name**: Retail & E-Com
- **Icon**: `ShoppingBag`
- **Badge Style**: `bg-amber-950 text-amber-300 border-amber-800`

#### Operational Context & Scope
Mass consumer data processing, loyalty reward programs, direct email/SMS marketing, behavioral web tracking, cross-site advertising pixels, e-commerce checkout funnels, and physical Point-of-Sale (POS) store networks.

#### Dynamic Governance Rules
1. **Consumer Profiling & Tracking Scope**: Rigorous scrutiny over third-party advertising pixels, cross-device tracking, browser fingerprinting, and behavioral profile synthesis.
2. **Consent & Preference Management**: Verification of explicit opt-in for promotional communications and compliant "Do Not Sell/Share My Personal Information" opt-out mechanisms.
3. **POS Network Segmentation**: Physical and logical segmentation of store payment hardware from general corporate and guest Wi-Fi networks under PCI-DSS scope separation.

#### Regulatory Alignment
- **Consumer Privacy Acts** (CCPA / CPRA / VCDPA / CPA)
- **GDPR ePrivacy Directive** (Cookie & Electronic Communications)
- **PCI-DSS v4.0** (Requirement 9 & 12)
- **National Consumer Protection & Advertising Laws**

#### Base Risk & Multiplier Rule
> *Mass public consumer tracking triggers additional ePrivacy and opt-out compliance checks.*

---

#### Sector Governance Questions (Section S: Retail)

```yaml
- Question ID: SEC_RETAIL_1
  Title: Retail S1. Digital Footprinting & Behavioral Profiling
  Description: Tracking consumer shopping habits, cookies, location, and targeted advertising.
  Reference: GDPR ePrivacy Directive / CCPA §1798.120
  Options:
    - Score 1: Transactional processing only, no marketing profiling or tracking cookies
    - Score 2: First-party loyalty program analytics with explicit opt-in
    - Score 4: Cross-site third-party tracking pixels and targeted ad profiling
    - Score 5: In-store facial recognition or real-time beacon location tracking

- Question ID: SEC_RETAIL_2
  Title: Retail S2. Consumer Preference & Opt-Out Mechanism
  Description: Ease of withdrawing marketing consent or opting out of data sale/sharing.
  Reference: CCPA/CPRA Do Not Sell My Info / ICO Marketing Guidance
  Options:
    - Score 1: One-click preference center for instant opt-out/unsubscribe
    - Score 2: Granular consent banner with default-off cookies
    - Score 4: Pre-checked opt-in boxes during online checkout
    - Score 5: No consumer opt-out interface available

- Question ID: SEC_RETAIL_3
  Title: Retail S3. POS Terminal & Payment Isolation
  Description: Network segmentation and hardware security of Point-of-Sale terminals.
  Reference: PCI-DSS v4.0 Requirement 9 & 12
  Options:
    - Score 1: Full P2PE (Point-to-Point Encryption) hardware POS terminals
    - Score 2: Outsourced tokenized checkout portal (e.g. Stripe, Adyen)
    - Score 4: Legacy POS hardware connected to corporate internal network
    - Score 5: Unsegmented store payment network
```

---

### 4. 💼 Corporate & Enterprise Operations (`corporate`)

- **Identifier**: `corporate`
- **Full Name**: Corporate & Enterprise Operations
- **Short Name**: Corporate & HR
- **Icon**: `Briefcase`
- **Badge Style**: `bg-blue-950 text-blue-300 border-blue-800`

#### Operational Context & Scope
Human resources & employee lifecycle management, corporate IT infrastructure, employee performance evaluations, workplace monitoring tools, confidential whistleblower intake hotlines, and internal audit dossiers.

#### Dynamic Governance Rules
1. **Employee vs. Customer PII Segregation**: Separation of employee internal data (background vetting, health/sickness records, salary, appraisals) from public customer data.
2. **Workplace Monitoring Assessment**: Detailed impact assessment of endpoint monitoring agents (DLP, keystroke loggers, screen capture, email scanning, and CCTV surveillance).
3. **Lawful Basis in Employment**: Enforcing compliance under employment contracts and statutory obligations rather than invalid "freely given" employee consent.

#### Regulatory Alignment
- **Article 88 GDPR** (Data Processing in the Employment Context)
- **National Labor Codes & Employment Directives**
- **Works Council Privacy Agreements / Codetermination Laws**
- **EU Whistleblower Protection Directive (2019/1937)**
- **Corporate Governance & Internal Audit Standards**

#### Base Risk & Multiplier Rule
> *Workplace surveillance or keystroke logging triggers high governance scrutiny under Labor Law.*

---

#### Sector Governance Questions (Section S: Corporate)

```yaml
- Question ID: SEC_CORP_1
  Title: Corporate S1. Employee PII vs Customer PII Governance
  Description: Handling of sensitive employee lifecycle records (payroll, appraisals, background checks).
  Reference: Article 88 GDPR / National Labor Code Privacy Rules
  Options:
    - Score 1: Basic business contact directory data only
    - Score 2: Standard payroll & HR administration records with role-based access
    - Score 4: Employee health assessments, sickness records, or background vetting logs
    - Score 5: Whistleblower allegations or disciplinary investigation dossiers

- Question ID: SEC_CORP_2
  Title: Corporate S2. Workplace Surveillance & Monitoring Tools
  Description: Use of endpoint surveillance agents, DLP, CCTV, or keystroke tracking.
  Reference: Works Council Privacy Frameworks / ECHR Art 8 Privacy at Work
  Options:
    - Score 1: No employee monitoring or surveillance agents deployed
    - Score 2: Standard corporate email spam filters & network security logging with prior notice
    - Score 3: Endpoint Data Loss Prevention (DLP) inspects file transfers & external USBs
    - Score 5: Continuous keystroke logging, webcam monitoring, or covert employee tracking

- Question ID: SEC_CORP_3
  Title: Corporate S3. Whistleblower Anonymity & Works Council Review
  Description: Safeguards for confidential reporting channels and employee representative sign-off.
  Reference: EU Whistleblower Protection Directive 2019/1937
  Options:
    - Score 1: Third-party encrypted whistleblower portal with guaranteed anonymity
    - Score 2: Internal email hot-line managed by Legal/Compliance
    - Score 2: Works Council / Trade Union consultation completed and documented
    - Score 5: Unencrypted internal whistleblower reporting without identity protection
```

---

### 5. 🚚 Trade, Logistics & Supply Chain (`logistics`)

- **Identifier**: `logistics`
- **Full Name**: Trade, Logistics & Supply Chain
- **Short Name**: Trade & Logistics
- **Icon**: `Truck`
- **Badge Style**: `bg-cyan-950 text-cyan-300 border-cyan-800`

#### Operational Context & Scope
Cross-border transport of cargo and goods, customs declarations, shipping manifests, driver GPS and fatigue monitoring, 3PL sub-contractor data exchanges, freight broker portals, and enterprise ERP integrations.

#### Dynamic Governance Rules
1. **Transborder Data Flows (TDF)**: Multi-jurisdictional transfer impact evaluation across origin, transit, and destination customs authorities.
2. **Operator & Telemetry Governance**: Distinguishing commercial freight telemetry from driver personal identifiable information; verifying off-duty tracking disablers.
3. **3PL Sub-processor Security**: Verification of scoped API integrations, authentication mechanisms, and Data Processing Agreements (DPAs) for freight forwarders.

#### Regulatory Alignment
- **WCO SAFE Framework** (World Customs Organization)
- **International Trade Customs Data Privacy Protocols**
- **Cross-Border Transborder Data Flow (TDF) Frameworks**
- **EU Tachograph & Driver Rest Regulations**
- **ISO 28000** (Supply Chain Security Management)

#### Base Risk & Multiplier Rule
> *Multi-jurisdictional transborder flows add cross-border transfer penalties ($1.25\times$).*

---

#### Sector Governance Questions (Section S: Logistics)

```yaml
- Question ID: SEC_LOG_1
  Title: Logistics S1. Cross-Border Supply Route Data Flow (TDF)
  Description: Transborder movement of logistics manifests, customs declarations, and vendor data.
  Reference: WCO SAFE Framework / International Customs Data Privacy
  Options:
    - Score 1: Domestic supply chain only, zero cross-border data transfers
    - Score 2: Intra-regional transfers within adequacy-approved trade zones
    - Score 3: Global supply route manifests transferred via Standard Contractual Clauses (SCCs)
    - Score 5: Customs data transmitted to non-adequate third countries without transfer impact assessment

- Question ID: SEC_LOG_2
  Title: Logistics S2. Fleet GPS Telemetry & Operator Tracking
  Description: Real-time location tracking of delivery drivers, operators, and transport fleets.
  Reference: ICO Employee Location Tracking Guidance / EU Tachograph Rules
  Options:
    - Score 1: Vehicle tracking only (no driver identity linked)
    - Score 2: Shift-based driver GPS tracking with automatic off-duty privacy toggle
    - Score 4: Continuous 24/7 driver location tracking without off-duty disablement
    - Score 5: In-cab facial fatigue monitoring cameras without explicit privacy impact assessment

- Question ID: SEC_LOG_3
  Title: Logistics S3. 3PL Sub-contractor & Vendor Portal Security
  Description: API access and data sharing with third-party logistics (3PL) partners.
  Reference: ISO 28000 Supply Chain Security
  Options:
    - Score 1: Direct operating fleet only, no 3PL vendor integrations
    - Score 2: OAuth 2.0 scoped API access for audited 3PL logistics partners
    - Score 3: Shared cloud portal with basic password authentication for sub-contractors
    - Score 5: Unrestricted database view access granted to external freight brokers
```

---

### 6. 🌱 Agriculture & AgTech (`agtech`)

- **Identifier**: `agtech`
- **Full Name**: Agriculture & AgTech
- **Short Name**: AgTech & Agriculture
- **Icon**: `Sprout`
- **Badge Style**: `bg-lime-950 text-lime-300 border-lime-800`

#### Operational Context & Scope
Precision agriculture software, drone field mapping, soil IoT telemetry sensors, livestock health trackers, farm management SaaS platforms, farmer subsidy registries, and AI crop-yield predictive modeling.

#### Dynamic Governance Rules
1. **Geospatial vs. Identity Isolation**: Separating farm soil/yield telemetry and drone satellite maps from identifiable farmer personal data and land ownership titles.
2. **Commercial AI Model Co-mingling**: Assessing data ownership when private farm metrics are ingested to train commercial yield or commodity prediction models.
3. **Subsidy & Banking Interfaces**: Securing integrations with government agricultural grants, crop insurance portals, and direct subsidy payout switches.

#### Regulatory Alignment
- **AgData Transparent (ADT) Core Principles**
- **USDA Agricultural Data Governance Guidelines**
- **National Rural Development Payment Rules**
- **Farm Bureau Data Privacy Agreements**

#### Base Risk & Multiplier Rule
> *Linking geospatial drone telemetry to identified farmers requires clear commercial AI consent.*

---

#### Sector Governance Questions (Section S: AgTech)

```yaml
- Question ID: SEC_AG_1
  Title: AgTech S1. Geospatial Farm Telemetry vs Farmer Identity Isolation
  Description: Separation of farm spatial/sensor metrics from personal land owner identities.
  Reference: AgData Transparent Core Principles / USDA Data Governance
  Options:
    - Score 1: Anonymized soil/weather sensor data with zero farmer identification
    - Score 2: Farm telemetry pseudonymized with strict key-code separation from owner name
    - Score 4: Drone mapping & satellite imagery directly linked to farmer name & tax ID
    - Score 5: Publicly available farm spatial database linking crop yield to individual farmer

- Question ID: SEC_AG_2
  Title: AgTech S2. Commercial AI Crop Model Data Co-mingling
  Description: Secondary use of private farm telemetry for commercial machine learning models.
  Reference: AgData Transparent Certification Standard
  Options:
    - Score 1: No secondary reuse of farmer data for commercial AI models
    - Score 2: Aggregated & de-identified farm metrics used for AI models with explicit opt-in
    - Score 4: Commercial AI model trained on individual farm metrics without opt-out capability
    - Score 5: Selling private farm operational metrics to third-party commodities traders

- Question ID: SEC_AG_3
  Title: AgTech S3. Government Subsidy & Direct Payout Integrations
  Description: Interfacing with agricultural grant registries and direct-to-farmer disbursements.
  Reference: National Rural Development Payment Rules
  Options:
    - Score 1: No government subsidy or financial payout interfaces
    - Score 2: Encrypted government subsidy verification API with tokenized authentication
    - Score 3: Direct banking integration for subsidy payouts with DPA in place
    - Score 5: Unencrypted transmission of farmer banking & tax ID details to external grant portals
```

---

### 7. 🧪 Pharma & Life Sciences (`pharma`)

- **Identifier**: `pharma`
- **Full Name**: Pharma & Life Sciences
- **Short Name**: Pharma & Clinical
- **Icon**: `FlaskConical`
- **Badge Style**: `bg-purple-950 text-purple-300 border-purple-800`

#### Operational Context & Scope
Phase I–IV clinical trials, investigational medicinal product (IMP) studies, Pharmacovigilance adverse event reporting, genomic sequencing, bio-bank sample storage, and Contract Research Organization (CRO) collaborations.

#### Dynamic Governance Rules
1. **Trial Subject Double-Blinding & Key-Coding**: Enforcing strict separation between patient identities (kept strictly at clinical investigator sites) and coded trial dossiers transmitted to sponsors.
2. **Informed Consent & Secondary Bio-Bank Reuse**: Ensuring Informed Consent Forms (ICFs) provide granular opt-ins for exploratory genetics or future secondary study reuse.
3. **Mandatory Pharmacovigilance Safeguards**: Balancing statutory expedited adverse drug reaction reporting with mandatory patient pseudonymization.

#### Regulatory Alignment
- **ICH Good Clinical Practice (GCP E6(R2))**
- **FDA 21 CFR Part 11** (Electronic Records & Electronic Signatures)
- **FDA 21 CFR Part 50** (Protection of Human Subjects / Informed Consent)
- **EU Clinical Trials Regulation (CTR 536/2014)**
- **EMA Good Pharmacovigilance Practices (GVP)**
- **Declaration of Helsinki Ethics Principles**

#### Base Risk & Multiplier Rule
> *Key-coded trial subject records require strict sponsor blinding, IRB ethics review, and bio-bank consent auditing.*

---

#### Sector Governance Questions (Section S: Pharma)

```yaml
- Question ID: SEC_PHARMA_1
  Title: Pharma S1. Clinical Trial Key-Coding & Sponsor Blinding
  Description: Isolation of trial subject identities from pharmaceutical sponsors and R&D labs.
  Reference: ICH GCP E6(R2) / EU Clinical Trials Regulation (CTR) Art 81
  Options:
    - Score 1: Double-blinded trial with master identity key retained strictly at clinical site
    - Score 2: Pseudonymized trial records with secure CRO key management
    - Score 3: Single-coded patient records accessible to trial monitors
    - Score 5: Unblinded trial subject PII visible to pharmaceutical sponsor R&D team

- Question ID: SEC_PHARMA_2
  Title: Pharma S2. Informed Consent Forms (ICF) & Bio-bank Reuse
  Description: Scope of participant consent for future observational studies and genetic research.
  Reference: FDA 21 CFR Part 50 / Declaration of Helsinki
  Options:
    - Score 1: Granular ICF covering primary trial and optional tier-by-tier secondary research
    - Score 2: Broad ICF covering defined therapeutic area research
    - Score 4: Vague consent for unspecified future commercial research
    - Score 5: Secondary genetic sequencing without participant consent or IRB approval

- Question ID: SEC_PHARMA_3
  Title: Pharma S3. Pharmacovigilance & Adverse Event Reporting
  Description: Data protection safeguards during mandatory drug safety reporting to regulatory authorities.
  Reference: FDA 21 CFR Part 314.80 / EMA Good Pharmacovigilance Practices
  Options:
    - Score 1: Adverse event disclosures redacting all non-essential patient identifiers
    - Score 2: De-identified safety report filed with medical authority with secure audit trail
    - Score 4: Full patient contact details transmitted in safety report without pseudonymization
    - Score 5: Non-compliant or delayed adverse event reporting due to privacy confusion
```

---

## 🧮 Sector Integration with Quantitative Risk Engine

In GLOCAL PIA, the final assessment score is computed deterministically using the formula:

$$\text{Final Risk Score} = \min\left(25, \text{Base Risk Score} \times \prod \text{Applied Multipliers}\right)$$

When an Industry Sector is selected:
1. **Base Risk Weighting**: If sector is `healthcare` and PHI/Biometrics are processed, Base Risk Score is capped at maximum $5.0$.
2. **AI Credit Scoring Modifier**: If sector is `banking` and automated scoring is detected, a $1.30\times$ multiplier is added.
3. **Cross-Border Modifier**: If sector is `logistics` and transborder flow is indicated, a $1.25\times$ multiplier is applied.
4. **Section S Governance Score**: Sector questions (`SEC_*_1`, `SEC_*_2`, `SEC_*_3`) contribute directly to the section-level scoring, gap identification, and DPO audit report.

---

## 📦 File Source References
- Sector Profiles & Questions: `/src/data/industrySectors.ts`
- Questionnaire Master Registry: `/src/data/questionnaire.ts`
- Status & Risk Evaluation Logic: `/src/utils/piaStatusLogic.ts`
- Provenance & Tailoring Types: `/src/types.ts`
- Initial Sector Selection Wizard: `/src/components/InitialSetupSectorWizard.tsx`
