import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Briefcase,
  Database,
  Activity,
  FileText,
  Calculator,
  CheckCircle2,
  Workflow,
  Search,
  Lock,
  Layers,
  Cpu
} from 'lucide-react';
import { Page } from '../types';
import { SEO } from '../components/SEO';

interface IndustriesPageProps {
  setCurrentPage: (page: Page) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ setCurrentPage }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // RFQ Workflow Interactive Demo Steps
  const rfqWorkflowSteps = [
    {
      step: 'Step 01',
      title: 'Multimodal Ingestion & Inbound Triage',
      desc: 'Incoming RFQ emails, scanned customer PDF tenders, and Excel parts lists are ingested automatically through secure webhooks and mail listeners.',
      technicalDetails: 'Optical Character Recognition (OCR), layout parser, table boundary detection, and metadata tagger.',
    },
    {
      step: 'Step 02',
      title: 'Technical Line-Item & Spec Extraction',
      desc: 'Context-aware extraction parses part numbers, material grades, tolerances, dimensions, quantities, and target delivery windows.',
      technicalDetails: 'Domain-trained entity recognition, fuzzy part-number matching against master catalog database.',
    },
    {
      step: 'Step 03',
      title: 'Pricing Rules & Inventory Verification',
      desc: 'Engine checks real-time warehouse inventory, supplier cost matrices, margin policies, and currency conversion parameters.',
      technicalDetails: 'Direct bi-directional ERP API call (e.g., SAP / NetSuite / custom SQL) with tier pricing algorithms.',
    },
    {
      step: 'Step 04',
      title: 'Human-in-the-Loop Review & Quotation Generation',
      desc: 'Estimators receive an organized review screen highlighting high-confidence items and flagging exceptions for one-click adjustment and sign-off.',
      technicalDetails: 'Branded PDF quote generation, automated CRM record update, and audit trail generation.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="Industrial & B2B Operations Focus | Syntellum Systems"
        description="Applied operational automation for industrial and B2B enterprises: RFQ ingestion, automated quotation drafting, document processing, and ERP synchronization."
        canonical="https://syntellum.si/industries"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Industries', url: '/industries' }
        ]}
      />

      {/* Header */}
      <section className="py-20 lg:py-28 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            Industry Focus & Operational Context
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            Technology for Complex Business Operations.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            We focus our engineering where business processes are heavy with technical specifications, document flows, and cross-application dependencies—prioritizing industrial and B2B workflow automation.
          </p>
        </div>
      </section>

      {/* Primary Focus: Industrial & B2B Operations */}
      <section className="py-24 border-b border-[#43515D]/40 bg-[#101820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block mb-2">
              Primary Commercial Emphasis
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              01. Industrial & B2B Operations
            </h2>
            <p className="text-base sm:text-lg text-[#8DA2B3] leading-relaxed">
              Industrial distributors, manufacturers, and B2B supply-chain operators manage high-volume customer inquiries, requests for quotes (RFQs), specification sheets, and complex procurement paperwork.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-xl font-bold text-[#F4F7FA]">
                The Operational Bottleneck in Industrial Sales
              </h3>
              <p className="text-sm text-[#8DA2B3] leading-relaxed">
                In most B2B and industrial operations, technical estimators and sales engineers spend over 40% of their working hours manually transcribing multi-page RFQs, cross-referencing part numbers across obsolete catalogs, checking warehouse availability, and typing line items into ERP quote screens.
              </p>
              <p className="text-sm text-[#8DA2B3] leading-relaxed">
                This manual overhead delays quote delivery from minutes to days—often losing the deal to competitors—while introducing costly human transcription errors on critical part dimensions and specifications.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-[#16222e] border border-[#43515D]/50 p-4 rounded-xl">
                  <span className="text-xs font-semibold text-[#65D9E8] block mb-1">
                    RFQ & Tender Extraction
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Parsing line items, engineering tolerances, quantities, and delivery schedules from incoming PDFs and spreadsheets.
                  </p>
                </div>
                <div className="bg-[#16222e] border border-[#43515D]/50 p-4 rounded-xl">
                  <span className="text-xs font-semibold text-[#65D9E8] block mb-1">
                    Quotation Preparation
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Automated cost lookup, margin rule application, and generation of draft quotation packets for engineering sign-off.
                  </p>
                </div>
                <div className="bg-[#16222e] border border-[#43515D]/50 p-4 rounded-xl">
                  <span className="text-xs font-semibold text-[#65D9E8] block mb-1">
                    Document Processing
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Processing bills of materials (BOMs), mill test certificates, material safety sheets, and purchase order confirmations.
                  </p>
                </div>
                <div className="bg-[#16222e] border border-[#43515D]/50 p-4 rounded-xl">
                  <span className="text-xs font-semibold text-[#65D9E8] block mb-1">
                    ERP & Operational Integration
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Bi-directional sync between incoming customer requests and legacy ERP platforms (SAP, NetSuite, Dynamics, custom databases).
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-[#43515D]/60 shadow-xl bg-[#16222e]">
              <img
                src="/assets/images/industrial_workflow_rfq_1792436543258.jpg"
                alt="Automated RFQ intake and industrial workflow operations interface"
                width={600}
                height={380}
                loading="lazy"
                decoding="async"
                className="w-full h-64 object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="p-6">
                <div className="text-xs font-mono text-[#65D9E8] uppercase tracking-wider mb-2">
                  System Architecture
                </div>
                <h4 className="text-base font-bold text-[#F4F7FA] mb-2">
                  Deterministic Human-in-the-Loop Pipeline
                </h4>
                <p className="text-xs text-[#8DA2B3] leading-relaxed mb-4">
                  We engineer automation systems that keep human domain experts in control. The pipeline automatically resolves straightforward items and highlights ambiguous specifications for human verification.
                </p>
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer"
                >
                  <span>Discuss Industrial Automation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Interactive Walkthrough: The Engineered RFQ Lifecycle */}
          <div className="bg-[#16222e] border border-[#43515D]/60 rounded-2xl p-6 sm:p-10">
            <div className="mb-8">
              <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block mb-1">
                Interactive Architecture
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F4F7FA]">
                The End-to-End Automated RFQ Pipeline
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3]">
                Click through the operational stages to see how Syntellum Systems constructs the workflow.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
              {rfqWorkflowSteps.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-3 text-left rounded-lg border transition-all cursor-pointer ${
                    activeStep === idx
                      ? 'bg-[#101820] border-[#65D9E8] text-[#F4F7FA]'
                      : 'bg-[#16222e] border-[#43515D]/40 text-[#8DA2B3] hover:text-[#F4F7FA]'
                  }`}
                >
                  <span className={`text-[10px] font-mono block ${activeStep === idx ? 'text-[#65D9E8]' : 'text-[#8DA2B3]'}`}>
                    {item.step}
                  </span>
                  <span className="text-xs font-semibold line-clamp-1">
                    {item.title}
                  </span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#101820] border border-[#43515D]/60 rounded-xl p-6 sm:p-8 shadow-xl"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2.5 py-1 text-xs font-mono font-bold bg-[#16222e] text-[#65D9E8] rounded border border-[#43515D]/60">
                    {rfqWorkflowSteps[activeStep].step}
                  </span>
                  <h4 className="text-lg font-bold text-[#F4F7FA]">
                    {rfqWorkflowSteps[activeStep].title}
                  </h4>
                </div>
                <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  {rfqWorkflowSteps[activeStep].desc}
                </p>
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40 text-xs text-[#F4F7FA]">
                  <span className="font-semibold text-[#65D9E8] block mb-1">
                    Engineered Solution Components:
                  </span>
                  {rfqWorkflowSteps[activeStep].technicalDetails}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Secondary Industries */}
      <section className="py-24 border-b border-[#43515D]/40 bg-[#16222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Industry 2: Enterprise & Professional Services */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="w-12 h-12 rounded-lg bg-[#101820] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#65D9E8] uppercase tracking-wider block mb-1">
                Sector 02
              </span>
              <h3 className="text-2xl font-bold text-[#F4F7FA] mb-3">
                Enterprise & Professional Services
              </h3>
              <p className="text-sm text-[#8DA2B3] leading-relaxed">
                Consultancies, corporate legal departments, and multi-disciplinary practices managing high volumes of client documentation and complex project records.
              </p>
            </div>
            <div className="lg:col-span-8 bg-[#101820] border border-[#43515D]/50 rounded-xl p-8 space-y-4">
              <h4 className="text-base font-bold text-[#F4F7FA]">
                Applied Operational Solutions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    Knowledge Retrieval & Synthesis
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Secure internal semantic search allowing professionals to query thousands of historical case files, briefs, and deliverables with exact citations.
                  </p>
                </div>
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    Automated Matter & Intake Routing
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Categorizing inbound client inquiries by urgency, matter type, and complexity, assigning them directly to the appropriate team.
                  </p>
                </div>
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    Document Intelligence & Redaction
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Automated clause cross-referencing, metadata extraction, and policy-compliant redaction prior to external sharing.
                  </p>
                </div>
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    Cross-Tool Application Integration
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Connecting document repositories, client billing systems, and collaboration tools to eliminate manual tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Industry 3: Data-Intensive Organizations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="w-12 h-12 rounded-lg bg-[#101820] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-4">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#65D9E8] uppercase tracking-wider block mb-1">
                Sector 03
              </span>
              <h3 className="text-2xl font-bold text-[#F4F7FA] mb-3">
                Data-Intensive Organizations
              </h3>
              <p className="text-sm text-[#8DA2B3] leading-relaxed">
                Enterprises handling large continuous streams of unstructured reports, telemetry, supplier feeds, and operational data.
              </p>
            </div>
            <div className="lg:col-span-8 bg-[#101820] border border-[#43515D]/50 rounded-xl p-8 space-y-4">
              <h4 className="text-base font-bold text-[#F4F7FA]">
                Applied Operational Solutions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    Automated Ingestion & ETL Normalization
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Converting disparate vendor feeds, Excel spreadsheets, and API dumps into unified, verified operational schemas.
                  </p>
                </div>
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    Operational Anomaly Detection
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Continuous algorithmic inspection of operational metrics to alert teams of data discrepancies before downstream systems break.
                  </p>
                </div>
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    AI-Assisted Executive Reporting
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Generating structured operational summaries and performance trend analyses from fragmented corporate databases.
                  </p>
                </div>
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    System-of-Record Consolidation
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Synchronizing distributed department silos into a single verified repository with role-based access governance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Industry 4: Healthcare Technology Operations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <div className="w-12 h-12 rounded-lg bg-[#101820] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-[#65D9E8] uppercase tracking-wider block mb-1">
                Sector 04
              </span>
              <h3 className="text-2xl font-bold text-[#F4F7FA] mb-3">
                Healthcare Technology Operations
              </h3>
              <p className="text-sm text-[#8DA2B3] leading-relaxed">
                Health systems, diagnostic labs, and healthcare technology organizations seeking to reduce administrative friction and improve back-office efficiency.
              </p>
            </div>
            <div className="lg:col-span-8 bg-[#101820] border border-[#43515D]/50 rounded-xl p-8 space-y-4">
              <h4 className="text-base font-bold text-[#F4F7FA]">
                Applied Operational Solutions
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    Administrative Intake & Form Processing
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Parsing referral letters, insurance forms, and provider documentation to eliminate manual typing into administrative systems.
                  </p>
                </div>
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    Non-Clinical Operational Tracking
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Equipment maintenance scheduling, supply chain inventory reordering, and administrative staff roster coordination.
                  </p>
                </div>
                <div className="p-4 bg-[#16222e] rounded-lg border border-[#43515D]/40 sm:col-span-2">
                  <span className="font-semibold text-xs text-[#65D9E8] block mb-1">
                    Regulatory Compliance & Privacy Safeguards
                  </span>
                  <p className="text-xs text-[#8DA2B3]">
                    Rigorous encryption, strict local access boundaries, zero cloud model training on client payloads, and verifiable audit logging.
                  </p>
                </div>
              </div>

              {/* Responsible Healthcare Disclaimer */}
              <div className="p-4 bg-[#101820] rounded-lg border border-[#43515D]/60 text-xs text-[#8DA2B3] mt-4">
                <span className="font-semibold text-[#F4F7FA] block mb-1">
                  Responsible Technology Scope:
                </span>
                Syntellum Systems provides software engineering and administrative workflow integration. We do not provide certified medical devices, automated clinical diagnostic software, or regulated clinical treatment tools. All healthcare sector engagements are evaluated strictly under applicable regional data privacy, safety, and regulatory frameworks.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-[#101820] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
            Explore Feasibility for Your Specific Workflow
          </h2>
          <p className="text-base text-[#8DA2B3] max-w-2xl mx-auto mb-8 leading-relaxed">
            Every business environment has unique constraints, data formats, and legacy dependencies. Let's examine your process and determine whether automated engineering is viable.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer"
          >
            <span>DISCUSS AN INDUSTRY USE CASE</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
