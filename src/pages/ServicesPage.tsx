import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Workflow,
  Network,
  Cpu,
  Compass,
  CheckCircle2,
  Sliders,
  Layers,
  FileSpreadsheet,
  Server,
  Sparkles,
  ShieldAlert
} from 'lucide-react';
import { Page } from '../types';
import { SEO } from '../components/SEO';

interface ServicesPageProps {
  setCurrentPage: (page: Page) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage }) => {
  const [selectedServiceTab, setSelectedServiceTab] = useState<'all' | 'ai' | 'automation' | 'integration' | 'consulting'>('all');

  // Interactive Solution Explorer State
  const [operationalNeed, setOperationalNeed] = useState<string>('rfq');

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      id: 'ai-engineering',
      category: 'ai',
      badge: 'Service 01',
      title: 'AI Engineering & Applied AI',
      subtitle: 'Purpose-built models, RAG pipelines, and document intelligence systems engineered for business reliability.',
      problemsSolved: [
        'Unstructured enterprise knowledge trapped in manuals, contracts, and archives',
        'Inability of generic LLMs to adhere to strict corporate security and internal data boundaries',
        'High latency and hallucination risks in off-the-shelf AI implementations',
        'Complex document formats requiring context-aware extraction and normalization',
      ],
      components: [
        'Retrieval-Augmented Generation (RAG) over internal knowledge bases',
        'Fine-tuned and prompt-engineered domain models with deterministic guardrails',
        'Document intelligence pipelines (OCR, table parsing, schema mapping)',
        'Contextual classification and entity extraction engines',
        'Evaluation test harnesses measuring precision, recall, and hallucination rates',
      ],
      useCases: [
        'Internal technical specification query engines for engineering teams',
        'Automated contract clause extraction and compliance cross-referencing',
        'Automated categorization and sentiment/intent triage for customer support desks',
        'Computer vision quality verification checks in light assembly workflows',
      ],
      architectureNote: 'We choose models (open-source weights, commercial APIs, or hybrid on-premise deployments) strictly based on your data privacy policies, latency budgets, and cost parameters.',
    },
    {
      id: 'workflow-automation',
      category: 'automation',
      badge: 'Service 02',
      title: 'Intelligent Workflow Automation',
      subtitle: 'Streamlining high-volume operational cycles from initial inquiry to validated execution with human oversight.',
      problemsSolved: [
        'Days lost manually transcribing technical RFQs and customer quotation requests',
        'Disjointed handoffs between sales, estimation engineers, and order entry',
        'High error rates in multi-line item orders transcribed between emails and ERPs',
        'Slow operational turnaround times leading to lost commercial opportunities',
      ],
      components: [
        'Inquiry & RFQ parsing pipelines with automatic catalog matching',
        'Quotation calculation engines applying margin, discount, and inventory rules',
        'Human-in-the-loop review interfaces for edge-case validation and approval',
        'Automated customer acknowledgment and status communication triggers',
        'Bi-directional ERP order and line-item creation sync',
      ],
      useCases: [
        'Industrial distributor RFQ processing turning PDF inquiries into draft ERP quotes in minutes',
        'Vendor invoice and purchase order matching with discrepancy flagging',
        'Customer onboarding and compliance document collection queues',
        'Operational exception management routing problematic orders to domain specialists',
      ],
      architectureNote: 'Our automation frameworks always incorporate explicit confidence scoring: high-confidence routine transactions pass straight through, while exceptions are flagged with highlighted source context for rapid human verification.',
    },
    {
      id: 'systems-integration',
      category: 'integration',
      badge: 'Service 03',
      title: 'Enterprise Software & Systems Integration',
      subtitle: 'Connecting disparate ERPs, CRMs, legacy databases, and cloud services into a unified operational fabric.',
      problemsSolved: [
        'Siloed core applications that cannot communicate without manual exports and CSV imports',
        'Legacy on-premise systems lacking modern REST or webhook APIs',
        'Data inconsistency and synchronization lag across operational departments',
        'Fragile point-to-point scripts that break upon software version upgrades',
      ],
      components: [
        'Robust middleware and secure REST / GraphQL API gateway development',
        'Custom connectors for SAP, Oracle, Microsoft Dynamics, NetSuite, and bespoke databases',
        'Asynchronous event queues and real-time webhook processing (Kafka, RabbitMQ, Redis)',
        'Data transformation, schema validation, and error recovery pipelines',
        'End-to-end integration telemetry, health checks, and automatic alerting',
      ],
      useCases: [
        'Connecting bespoke web portals to enterprise inventory and financial ledgers',
        'Automated order synchronization across e-commerce channels, 3PLs, and accounting',
        'Secure field-technician mobile app integration with central work order systems',
        'Data warehouse ETL consolidation for executive operational reporting',
      ],
      architectureNote: 'Integrations are built with fault tolerance: idempotent operations, dead-letter queues for unhandled payloads, and complete audit logging ensure no transaction is ever lost.',
    },
    {
      id: 'consulting-delivery',
      category: 'consulting',
      badge: 'Service 04',
      title: 'AI Program Delivery & Technology Consulting',
      subtitle: 'Strategic roadmapping, feasibility assessments, and disciplined engineering execution for mission-critical initiatives.',
      problemsSolved: [
        'Uncertainty about where AI can genuinely produce measurable ROI versus novelty',
        'Failed internal prototypes that cannot scale to production security and throughput standards',
        'Lack of technical architecture documentation and risk management governance',
        'Vendor lock-in and opaque pricing models from proprietary AI platforms',
      ],
      components: [
        'Operational process audits identifying highest-impact automation candidates',
        'Technical feasibility and data readiness assessments',
        'Production architecture design documents (security, compute, network, APIs)',
        'Proof-of-Concept (POC) staging with concrete quantitative acceptance criteria',
        'Deployment readiness checklists, runbooks, and staff handover training',
      ],
      useCases: [
        'Executive feasibility advisory on automating multi-branch quotation processes',
        'Architecture audit of existing internal AI prototypes prior to enterprise rollout',
        'Vendor-neutral RFP preparation and technical evaluation for system modernizations',
        'Design of phased 12-month automation roadmaps with defined milestone gates',
      ],
      architectureNote: 'We deliver clear, tangible assets: architecture blueprints, security assessments, benchmark reports, and clean source code with full client ownership.',
    },
  ];

  const filteredServices = selectedServiceTab === 'all'
    ? services
    : services.filter(s => s.category === selectedServiceTab);

  // Engagement Models
  const engagementModels = [
    {
      title: 'AI Discovery & Advisory',
      duration: '2–4 Weeks',
      bestFor: 'Organizations evaluating feasibility, identifying automation opportunities, and defining architecture blueprints.',
      deliverables: ['Operational workflow audit', 'Technical feasibility report', 'System architecture blueprint', 'POC roadmap & risk matrix'],
    },
    {
      title: 'Proof of Concept (POC)',
      duration: '4–8 Weeks',
      bestFor: 'Validating model accuracy, data integration viability, and business value on a constrained subset of workflows.',
      deliverables: ['Functional prototype on representative data', 'Accuracy & performance benchmarks', 'Integration feasibility assessment', 'Production rollout plan'],
    },
    {
      title: 'Fixed-Scope Implementation',
      duration: 'Milestone-based',
      bestFor: 'Clearly defined projects such as a specific RFQ automation pipeline, ERP connector, or document extraction engine.',
      deliverables: ['Complete production software build', 'Automated test suite & security audit', 'Integration into existing systems', 'Documentation & admin handover'],
    },
    {
      title: 'Dedicated Engineering & Delivery',
      duration: 'Ongoing Sprints',
      bestFor: 'Enterprises and strategic consulting partners requiring continuous technical execution across multiple operational workflows.',
      deliverables: ['Senior full-stack & AI engineers', 'Bi-weekly sprint planning & demos', 'Continuous deployment pipelines', 'Direct architecture collaboration'],
    },
    {
      title: 'Systems Integration & Modernization',
      duration: 'Project-based',
      bestFor: 'Connecting fragmented business applications, legacy database migration, and custom API bridge engineering.',
      deliverables: ['Secure API middleware', 'Data synchronization connectors', 'Error handling & retry mechanisms', 'Monitoring & logging infrastructure'],
    },
    {
      title: 'Ongoing Support & Optimization',
      duration: 'SLA-backed',
      bestFor: 'Post-deployment maintenance, model performance monitoring, schema adjustments, and system enhancements.',
      deliverables: ['Continuous accuracy monitoring', 'API & dependency version maintenance', 'Operational anomaly response', 'Performance fine-tuning'],
    },
  ];

  // Interactive Solution Explorer scenarios
  const solutionAdvisorScenarios: Record<string, {
    title: string;
    description: string;
    recommendedServices: string[];
    recommendedModel: string;
    keyDeliverables: string[];
  }> = {
    rfq: {
      title: 'High-Volume RFQ & Quotation Bottlenecks',
      description: 'Incoming customer inquiries and tenders arrive in PDF, spreadsheet, and email formats. Estimators spend days keying items into ERP systems.',
      recommendedServices: ['Intelligent Workflow Automation', 'Enterprise Software & Systems Integration'],
      recommendedModel: 'Fixed-Scope Implementation with Discovery Phase',
      keyDeliverables: ['Document parsing pipeline for spec sheets & BOMs', 'Catalog pricing & margin calculation engine', 'Human verification review UI', 'ERP quote creation connector'],
    },
    legacy: {
      title: 'Fragmented Legacy ERPs & Disconnected Silos',
      description: 'Core inventory, CRM, and accounting platforms run on different architectures without real-time synchronization, causing data lag and manual double-entry.',
      recommendedServices: ['Enterprise Software & Systems Integration'],
      recommendedModel: 'Systems Integration & Modernization',
      keyDeliverables: ['Secure API middleware & webhook gateway', 'Bidirectional sync with conflict resolution', 'Dead-letter error queue & audit logging', 'Operational health dashboard'],
    },
    knowledge: {
      title: 'Buried Knowledge & Slow Document Retrieval',
      description: 'Technical teams and operations staff waste hours searching through hundreds of manuals, engineering drawings, and regulatory contracts.',
      recommendedServices: ['AI Engineering & Applied AI'],
      recommendedModel: 'Proof of Concept (POC) followed by Phased Rollout',
      keyDeliverables: ['Secure private vector search & RAG pipeline', 'Source document citation verification', 'Access-controlled internal query assistant', 'Zero third-party model training guarantee'],
    },
    feasibility: {
      title: 'Exploring AI Feasibility & Strategic Roadmapping',
      description: 'Executive leadership wants to adopt AI where it delivers real ROI, but needs an objective technical roadmap before committing significant capital.',
      recommendedServices: ['AI Program Delivery & Technology Consulting'],
      recommendedModel: 'AI Discovery & Advisory (2–4 Weeks)',
      keyDeliverables: ['Process friction audit & ROI prioritization', 'Data readiness & privacy assessment', 'Vendor-neutral architecture blueprint', 'Implementation milestone scope'],
    },
  };

  const currentScenario = solutionAdvisorScenarios[operationalNeed];

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="Services & Enterprise Capabilities | Syntellum Systems"
        description="Enterprise AI engineering, intelligent workflow automation, legacy ERP systems integration, and technical AI program consulting engineered for operations."
        canonical="https://syntellum.si/services"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Services', url: '/services' }
        ]}
      />

      {/* Header */}
      <section className="py-20 lg:py-28 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            Capabilities & Services
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            Enterprise AI, Engineered for Real Operations.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            We deliver end-to-end software engineering, intelligent workflow automation, and custom AI systems designed to solve concrete operational bottlenecks with technical rigor.
          </p>
        </div>
      </section>

      {/* Services Filter Bar */}
      <section className="sticky top-20 z-40 bg-[#101820]/95 backdrop-blur-md border-b border-[#43515D]/40 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#8DA2B3] hidden sm:inline mr-2">Filter View:</span>
            {[
              { id: 'all', label: 'All Pillars' },
              { id: 'ai', label: 'AI Engineering' },
              { id: 'automation', label: 'Workflow Automation' },
              { id: 'integration', label: 'Systems Integration' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedServiceTab(tab.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap cursor-pointer ${
                  selectedServiceTab === tab.id
                    ? 'bg-[#65D9E8] text-[#101820] font-bold'
                    : 'text-[#8DA2B3] hover:text-[#F4F7FA] hover:bg-[#16222e]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => handleNav('contact')}
            className="text-xs font-bold uppercase tracking-wider text-[#65D9E8] hover:text-[#4ec2d1] whitespace-nowrap hidden md:inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Request Technical Discovery</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* Detailed Services Breakdown */}
      <section className="py-20 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#16222e] border border-[#43515D]/50 rounded-2xl p-8 sm:p-12 hover:border-[#65D9E8]/50 hover:shadow-xl hover:shadow-[#65D9E8]/5 transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 pb-8 border-b border-[#43515D]/50">
                  <div className="max-w-3xl">
                    <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block mb-2">
                      {service.badge}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] tracking-tight mb-3">
                      {service.title}
                    </h2>
                    <p className="text-base text-[#8DA2B3] leading-relaxed">
                      {service.subtitle}
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNav('contact')}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors whitespace-nowrap self-start cursor-pointer"
                  >
                    <span>Discuss This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>

                {/* Three Column Specifications: Problems, Components, Applications */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
                  {/* Column 1: Problems Addressed */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#65D9E8] mb-4 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4" />
                      <span>Business Problems Addressed</span>
                    </h3>
                    <ul className="space-y-3">
                      {service.problemsSolved.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed flex items-start gap-2">
                          <span className="text-[#65D9E8] mt-1 shrink-0 font-bold">―</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Solution Components */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#65D9E8] mb-4 flex items-center gap-2">
                      <Layers className="w-4 h-4" />
                      <span>Typical Solution Components</span>
                    </h3>
                    <ul className="space-y-3">
                      {service.components.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#65D9E8] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Example Applications */}
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-[#65D9E8] mb-4 flex items-center gap-2">
                      <Workflow className="w-4 h-4" />
                      <span>Relevant Applications</span>
                    </h3>
                    <ul className="space-y-3">
                      {service.useCases.map((item, i) => (
                        <li key={i} className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#65D9E8] mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Architecture & Engineering Note */}
                <div className="mt-8 pt-6 border-t border-[#43515D]/40 text-xs text-[#8DA2B3] bg-[#101820]/60 p-4 rounded-lg">
                  <span className="font-semibold text-[#F4F7FA]">Architecture Discipline: </span>
                  {service.architectureNote}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* INTERACTIVE SOLUTION & ARCHITECTURE ADVISOR */}
      <section className="py-20 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Interactive Explorer
            </p>
            <h2 className="text-3xl font-extrabold text-[#F4F7FA] tracking-tight mb-3">
              Solution & Architecture Matcher
            </h2>
            <p className="text-sm sm:text-base text-[#8DA2B3]">
              Select your organization's primary operational focus to view the recommended engineering approach, components, and engagement model.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Interactive Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {[
                { id: 'rfq', label: 'High-Volume RFQ & Quotation Workflows', icon: <FileSpreadsheet className="w-4 h-4" /> },
                { id: 'legacy', label: 'Fragmented Legacy ERPs & Systems', icon: <Network className="w-4 h-4" /> },
                { id: 'knowledge', label: 'Unstructured Documents & Knowledge Retrieval', icon: <Cpu className="w-4 h-4" /> },
                { id: 'feasibility', label: 'AI Strategy & Technical Feasibility Audit', icon: <Compass className="w-4 h-4" /> },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setOperationalNeed(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between cursor-pointer ${
                    operationalNeed === item.id
                      ? 'bg-[#101820] border-[#65D9E8] text-[#F4F7FA] shadow-md'
                      : 'bg-[#16222e] border-[#43515D]/60 text-[#8DA2B3] hover:text-[#F4F7FA] hover:border-[#8DA2B3]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={operationalNeed === item.id ? 'text-[#65D9E8]' : 'text-[#8DA2B3]'}>
                      {item.icon}
                    </span>
                    <span className="text-xs sm:text-sm font-semibold">{item.label}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 ${operationalNeed === item.id ? 'text-[#65D9E8]' : 'text-transparent'}`} />
                </button>
              ))}
            </div>

            {/* Dynamic Recommendation Panel */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={operationalNeed}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#101820] border border-[#65D9E8]/50 rounded-2xl p-6 sm:p-8 shadow-xl shadow-[#65D9E8]/5"
                >
                  <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block mb-2">
                    Engineered Match
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F7FA] mb-3">
                    {currentScenario.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed mb-6">
                    {currentScenario.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="bg-[#16222e] p-4 rounded-lg border border-[#43515D]/40">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#65D9E8] block mb-1">
                        Recommended Services
                      </span>
                      <div className="space-y-1">
                        {currentScenario.recommendedServices.map((s, i) => (
                          <p key={i} className="text-xs font-medium text-[#F4F7FA]">
                            {s}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div className="bg-[#16222e] p-4 rounded-lg border border-[#43515D]/40">
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-[#65D9E8] block mb-1">
                        Typical Engagement Structure
                      </span>
                      <p className="text-xs font-medium text-[#F4F7FA]">
                        {currentScenario.recommendedModel}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F4F7FA] block mb-3">
                      Core Solution Deliverables
                    </span>
                    <ul className="space-y-2 mb-6">
                      {currentScenario.keyDeliverables.map((item, i) => (
                        <li key={i} className="text-xs text-[#8DA2B3] flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#65D9E8] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleNav('contact')}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer"
                  >
                    <span>Discuss This Architecture</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Engagement Frameworks
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              Structured Engagement Models
            </h2>
            <p className="text-base sm:text-lg text-[#8DA2B3]">
              Every enterprise initiative is distinct. We structure engagements with clearly established scopes, milestones, acceptance criteria, and responsibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="bg-[#16222e] border border-[#43515D]/50 rounded-xl p-6 flex flex-col justify-between hover:border-[#65D9E8]/40 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h3 className="text-base font-bold text-[#F4F7FA]">
                      {model.title}
                    </h3>
                    <span className="text-[11px] font-mono text-[#65D9E8] bg-[#101820] px-2 py-0.5 rounded border border-[#43515D]/50">
                      {model.duration}
                    </span>
                  </div>
                  <p className="text-xs text-[#8DA2B3] leading-relaxed mb-4">
                    {model.bestFor}
                  </p>
                  <div className="border-t border-[#43515D]/40 pt-4 mb-4">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#65D9E8] block mb-2">
                      Key Deliverables
                    </span>
                    <ul className="space-y-1.5">
                      {model.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="text-xs text-[#8DA2B3] flex items-center gap-1.5">
                          <span className="text-[#65D9E8]">·</span>
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-[#16222e] border border-[#43515D]/60 rounded-xl text-center max-w-4xl mx-auto space-y-2">
            <p className="text-xs sm:text-sm text-[#F4F7FA] font-medium">
              Transparent, Value-Based Commercials
            </p>
            <p className="text-xs text-[#8DA2B3] leading-relaxed">
              Scope, timelines, technical deliverables, and commercial arrangements are established collaboratively during initial discovery. We do not publish speculative pricing tables.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-[#16222e] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
            Plan Your Implementation with Engineers
          </h2>
          <p className="text-base text-[#8DA2B3] max-w-2xl mx-auto mb-8 leading-relaxed">
            Send us an overview of your systems and operational goals. We will evaluate technical feasibility and propose a structured delivery plan.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer"
          >
            <span>DISCUSS A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
