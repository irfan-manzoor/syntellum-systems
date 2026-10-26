# Syntellum Systems — Official Enterprise Platform

> **Put AI to Work in Your Operations.**  
> Purpose-engineered enterprise AI, intelligent workflow automation, and enterprise systems integration designed around real operational needs.

[![Website](https://img.shields.io/badge/Website-syntellum.si-0ea5e9?style=flat-square)](https://syntellum.si)
[![Email](https://img.shields.io/badge/Contact-info%40syntellum.si-10b981?style=flat-square)](mailto:info@syntellum.si)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.x-646cff?style=flat-square&logo=vite)](https://vitejs.dev)

---

## 🏛️ About Syntellum Systems

**Syntellum Systems** is an engineering-first technology firm headquartered in **Pakistan**, serving industrial and commercial enterprises across Pakistan and international markets. 

We bridge the gap between emerging artificial intelligence and practical enterprise execution. Rather than building generic chatbots or speculative prototypes, we engineer production systems that eliminate repetitive operational bottlenecks, parse complex technical documentation, and synchronize legacy core software (ERP, CRM, warehouse management systems) with modern data pipelines.

- **Official Web Domain:** [https://syntellum.si](https://syntellum.si)
- **Direct Engineering & Discovery:** [info@syntellum.si](mailto:info@syntellum.si)
- **Operational Base:** Pakistan
- **Market Coverage:** Pakistan & International Markets

---

## ⚡ Core Capability Pillars

### 1. Enterprise AI Engineering
* **Private Retrieval-Augmented Generation (RAG):** Deterministic semantic search grounded exclusively in company-approved technical archives, operating procedures, and CAD specifications.
* **Tenant Isolation & Zero Training:** Guaranteed zero retention and zero public model training. Client proprietary information never enters public foundation model pools.
* **On-Premise & Private Cloud Deployment:** Support for containerized on-premise execution (Docker/Kubernetes) using open-weight models (Llama 3, Mistral) on internal GPUs with no outbound internet dependency, or private tenant VPC hosting (AWS, Azure, GCP).

### 2. Intelligent Workflow Automation
* **Automated RFQ & Quotation Processing:** Rapid extraction of customer requirements, bills of materials (BOM), and line items from unstructured RFQ emails, spreadsheets, and PDFs.
* **Dynamic Pricing Engine:** Automatic lookup of customer contract pricing tiers, volume breaks, and freight rules to produce pre-assembled quote drafts for engineering sign-off.
* **Human-in-the-Loop Oversight:** Exception workbenches with confidence-score gating to ensure operational accuracy before transactional commit.

### 3. Document Processing Automation
* **Technical Extraction:** Vision-language models and layout-aware OCR for multi-page tables, blueprints, compliance certs, and delivery slips.
* **Automated Validation:** Cross-referencing against ERP purchase orders and inventory databases with deterministic reconciliation.

### 4. Systems Integration & Legacy ERP Connectivity
* **Enterprise ERP Connectors:** Bi-directional synchronization with SAP, Microsoft Dynamics, NetSuite, Odoo, and custom relational databases (SQL Server, PostgreSQL, Oracle).
* **Fault-Tolerant Architecture:** Transactional idempotency, persistent message queues, and dead-letter queues (DLQ) ensuring zero dropped transactions during network disruptions.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) |
| **Build & Dev Tooling** | [Vite 8](https://vitejs.dev/) + [ESBuild](https://esbuild.github.io/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/) with custom dark enterprise industrial aesthetic |
| **Motion & Micro-interactions** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **SEO & Schema.org Structured Data** | [react-helmet-async](https://github.com/staylor/react-helmet-async) (JSON-LD Breadcrumbs, Service, and FAQ schemas) |
| **Form Processing** | FormSubmit AJAX pipeline with client-side validation and fallback direct email protocol |

---

## 📂 Repository Structure

```text
├── public/                 # Static assets, branding, and generated high-res visual assets
│   ├── assets/images/      # Operational diagrams, hero imagery, architecture visuals
│   └── contact.php         # Standalone PHP form handler fallback for Apache/Nginx hosts
├── src/
│   ├── components/         # Reusable UI & Layout Components
│   │   ├── Navbar.tsx      # Responsive header with live route handling & quick action
│   │   ├── Footer.tsx      # Comprehensive site map, contact details, legal links
│   │   ├── SEO.tsx         # Universal OpenGraph, Twitter Cards, and Schema.org injector
│   │   └── PrivacyModal.tsx# Enterprise data handling, compliance, and NDA notice
│   ├── pages/              # Primary View Routings
│   │   ├── HomePage.tsx    # High-impact outcome hero, interactive roadmap, ROI estimator
│   │   ├── ServicesPage.tsx# Capability catalog, implementation tiers, architecture tabs
│   │   ├── IndustriesPage.tsx# Industrial, B2B, logistics, and manufacturing playbooks
│   │   ├── ApproachPage.tsx# 5-stage engineering delivery lifecycle
│   │   ├── AboutPage.tsx   # Engineering values, company mission, operational footprint
│   │   ├── ContactPage.tsx # FormSubmit-powered technical inquiry & discovery desk
│   │   ├── SecurityDossierPage.tsx # Data governance, NDA terms, private VPC specifications
│   │   └── services/       # Deep-dive service capability briefs
│   │       ├── AIEngineeringPage.tsx
│   │       ├── RFQQuotationPage.tsx
│   │       ├── SystemsIntegrationPage.tsx
│   │       ├── DocumentProcessingPage.tsx
│   │       └── WorkflowAutomationPage.tsx
│   ├── App.tsx             # Route orchestration & application state
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global Tailwind CSS imports and typography
├── index.html              # HTML entry point with preload tags and meta headers
├── package.json            # Node.js project manifest & dependencies
├── tsconfig.json           # Strict TypeScript configuration
└── vite.config.ts          # Vite build and Tailwind integration plugin
```

---

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v18.0.0 or higher recommended) or **Bun**
* **npm** (v9+) or **pnpm** / **yarn** / **bun**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/syntellum-systems/syntellum-web.git
   cd syntellum-web
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   The local application will launch at `http://localhost:3000`.

4. **Verify TypeScript compilation & linting:**
   ```bash
   npm run lint
   ```

---

## 📦 Production Build & Deployment

To create an optimized production build:

```bash
npm run build
```

This generates an optimized static bundle in the `dist/` directory.

### Deployment Options

* **Static Hosting (Vercel / Netlify / Cloudflare Pages):**
  Deploy the `dist/` output directly. Ensure single-page app (SPA) rewrites redirect all routes to `/index.html`.
* **Traditional Web Hosting (Hostinger / cPanel / Apache / Nginx):**
  Upload the contents of `dist/` to `public_html`. A standard `.htaccess` file can route incoming requests to `index.html`. The included `public/contact.php` provides an optional direct server-side mailer if required.
* **Form Inquiries Configuration:**
  The inquiry form is wired to `https://formsubmit.co/ajax/info@syntellum.si`. Submissions are delivered with full metadata, reference tokens, and zero spam friction.

---

## 🔒 Security & Data Privacy Principles

Syntellum Systems operates on strict enterprise governance principles:

1. **Zero Retention & Training Policy:** Client operational data, proprietary technical drawings, bills of materials, and customer pricing lists are never used to train or fine-tune public models.
2. **Tenant Isolation:** All inferencing and document extraction pipelines operate within private client tenants or isolated private infrastructure.
3. **Mutual Confidentiality:** We routinely execute bilateral NDAs with our enterprise clients prior to reviewing technical documentation or data samples.

---

## 📬 Contact & Inquiries

For project inquiries, technical discovery, or partnership opportunities:

* **Email:** [info@syntellum.si](mailto:info@syntellum.si)
* **Website:** [syntellum.si](https://syntellum.si)
* **Discovery Desk:** [syntellum.si/contact](https://syntellum.si/contact)
* **Headquarters:** Pakistan (serving Pakistan & International Markets)

---

&copy; 2026 Syntellum Systems. All rights reserved.
