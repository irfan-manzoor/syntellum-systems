import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Workflow,
  Network,
  FileCheck2,
  Database,
  Layers,
  Search,
  Clock,
  Eye,
  CheckCircle2,
  ShieldCheck,
  Server,
  Lock,
  Compass,
  FileText,
  Boxes,
  Sliders,
  Check
} from 'lucide-react';
import { Page } from '../types';
import { SEO } from '../components/SEO';
import { ROIEstimator } from '../components/ROIEstimator';
import { InteractiveStudio } from '../components/InteractiveStudio';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

interface HomePageProps {
  setCurrentPage: (page: Page, scopingNote?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage }) => {
  const handleNav = (page: Page, scopingNote?: string) => {
    setCurrentPage(page, scopingNote);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToCapabilities = () => {
    const el = document.getElementById('capabilities');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="Syntellum Systems | Put AI to Work in Your Operations"
        description="We engineer practical AI, automate information-heavy workflows, and connect business systems to reduce manual work and improve how operations run."
        canonical="https://syntellum.si/"
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://syntellum.si/#organization',
              name: 'Syntellum Systems',
              url: 'https://syntellum.si/',
              logo: 'https://syntellum.si/assets/images/hero_enterprise_operations_1792436542613.jpg',
              description: 'Syntellum Systems engineers practical enterprise AI, intelligent workflow automation, and enterprise systems integration.',
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'info@syntellum.si',
                contactType: 'technical discovery & inquiries',
                url: 'https://syntellum.si/contact'
              }
            },
            {
              '@type': 'WebSite',
              '@id': 'https://syntellum.si/#website',
              url: 'https://syntellum.si/',
              name: 'Syntellum Systems',
              publisher: {
                '@id': 'https://syntellum.si/#organization'
              }
            }
          ]
        }}
      />

      {/* =========================================================================
          SECTION 1 — HERO: OUTCOME-FOCUSED VALUE PROPOSITION & CLEAR CTAs
         ========================================================================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-[#43515D]/40">
        {/* Background Image with Dark Navy Scrim Overlay */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.05, opacity: 0.15 }}
            animate={{ scale: 1, opacity: 0.24 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src="/assets/images/hero_enterprise_operations_1792436542613.jpg"
            alt="Enterprise Technology and Operations Infrastructure"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="w-full h-full object-cover object-center filter brightness-75 contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/80 to-[#101820]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#16222e]/40 via-transparent to-transparent" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
        >
          {/* Unboxed Metadata Eyebrow */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm font-semibold tracking-wider text-[#65D9E8] uppercase"
          >
            <span>AI ENGINEERING</span>
            <span className="text-[#8DA2B3]" aria-hidden="true">·</span>
            <span>WORKFLOW AUTOMATION</span>
            <span className="text-[#8DA2B3]" aria-hidden="true">·</span>
            <span>SYSTEMS INTEGRATION</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F4F7FA] leading-[1.08] mb-6 text-balance"
          >
            Put AI to work in your operations.
          </motion.h1>

          {/* Supporting Outcome Copy */}
          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-lg sm:text-xl text-[#8DA2B3] leading-relaxed mb-10 font-normal text-balance"
          >
            We engineer practical AI, automate information-heavy workflows, and connect business systems to reduce manual work and improve how operations run.
          </motion.p>

          {/* Dual CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-lg hover:shadow-[#65D9E8]/25"
            >
              <span>DISCUSS A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={scrollToCapabilities}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#F4F7FA] border border-[#43515D] hover:border-[#65D9E8] hover:text-[#65D9E8] bg-[#16222e]/60 hover:bg-[#1c2a38] rounded transition-colors cursor-pointer"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Quick-Jump to Interactive Studio Tools */}
          <motion.div
            variants={fadeInUp}
            className="mt-8 pt-6 border-t border-[#43515D]/40 flex flex-wrap items-center justify-center gap-2 text-xs text-[#8DA2B3]"
          >
            <span className="font-mono text-[#65D9E8] uppercase tracking-wider text-[11px] font-bold mr-1">
              Interactive Lab:
            </span>
            {[
              { id: 'workbench', label: 'Document Intelligence', icon: <FileCheck2 className="w-3.5 h-3.5 text-[#65D9E8]" /> },
              { id: 'architecture', label: 'Systems Architecture', icon: <Network className="w-3.5 h-3.5 text-[#65D9E8]" /> },
              { id: 'roadmap', label: 'Adoption Roadmap', icon: <Compass className="w-3.5 h-3.5 text-[#65D9E8]" /> },
              { id: 'security', label: 'Zero-Trust Security', icon: <ShieldCheck className="w-3.5 h-3.5 text-[#65D9E8]" /> }
            ].map((tool) => (
              <a
                key={tool.id}
                href={`#${tool.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  window.location.hash = tool.id;
                  document.getElementById('interactive-studio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#16222e] hover:bg-[#1c2c3d] border border-[#43515D]/50 hover:border-[#65D9E8] text-[#F4F7FA] transition-colors cursor-pointer text-xs"
              >
                {tool.icon}
                <span>{tool.label}</span>
              </a>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Brand Statement Banner */}
      <section className="bg-[#16222e] border-b border-[#43515D]/40 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <blockquote className="text-lg sm:text-xl font-medium tracking-tight text-[#F4F7FA] italic">
            “Technology creates measurable value when it solves a real operational problem.”
          </blockquote>
          <p className="text-xs uppercase tracking-[0.25em] font-semibold text-[#65D9E8]">
            The Syntellum Systems Engineering Principle
          </p>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — BUSINESS CHALLENGES: SPECIFIC PROBLEMS WE ELIMINATE
         ========================================================================= */}
      <section id="challenges" className="py-24 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Operational Realities
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              Where Manual Work Slows Operations Down.
            </h2>
            <p className="text-lg text-[#8DA2B3]">
              Before introducing any model or integration, we identify the exact points of friction where information stalls, data is re-keyed, or decisions are delayed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FileCheck2 className="w-6 h-6" />,
                title: 'Manual Document Handling',
                desc: 'Technical PDFs, RFQ specification sheets, invoices, and supplier confirmations require hours of manual reading, verification, and re-entry.',
              },
              {
                icon: <Network className="w-6 h-6" />,
                title: 'Disconnected Systems',
                desc: 'ERPs, CRM tools, inventory spreadsheets, and engineering databases operate in silos, forcing staff to act as manual data connectors.',
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: 'Repetitive Workflows',
                desc: 'Skilled technical estimators and operational leads spend up to 40% of their workday handling routine data transfers and status chasing.',
              },
              {
                icon: <Search className="w-6 h-6" />,
                title: 'Information Bottlenecks',
                desc: 'Critical knowledge is locked in isolated file drives, email threads, and complex technical archives, slowing down response times.',
              },
            ].map((prob, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#16222e] border border-[#43515D]/40 hover:border-[#65D9E8]/50 hover:shadow-lg rounded-xl p-6 space-y-3 transition-colors"
              >
                <div className="text-[#65D9E8]">{prob.icon}</div>
                <h3 className="text-base font-bold text-[#F4F7FA]">
                  {prob.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                  {prob.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — CORE CAPABILITIES: THE 3 CORE PILLARS
         ========================================================================= */}
      <section id="capabilities" className="py-24 bg-[#16222e] border-b border-[#43515D]/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
                Core Offering
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
                Three Pillars of Practical Engineering
              </h2>
              <p className="text-lg text-[#8DA2B3]">
                Clear, production-tested capabilities structured around enterprise reliability and measurable return on investment.
              </p>
            </div>
            <button
              onClick={() => handleNav('services')}
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65D9E8] hover:text-[#4ec2d1] cursor-pointer"
            >
              <span>View Full Services Matrix</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: AI Engineering */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-[#101820] border border-[#43515D]/50 hover:border-[#65D9E8]/70 rounded-xl p-8 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#16222e] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-6 group-hover:scale-105 transition-transform">
                  <Cpu className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-semibold text-[#65D9E8] uppercase tracking-wider mb-2">
                  PILLAR 01
                </div>
                <h3 className="text-2xl font-bold text-[#F4F7FA] mb-3 group-hover:text-[#65D9E8] transition-colors">
                  AI Engineering
                </h3>
                <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  Enterprise AI applications, LLMs, private knowledge retrieval (RAG), and document intelligence engineered specifically for business data boundaries.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Retrieval-Augmented Generation (RAG) over internal repositories',
                    'Document intelligence & technical spec extraction',
                    'Deterministic validation guardrails & zero hallucinations',
                    'Private tenant model deployment with strict data isolation'
                  ].map((feat, idx) => (
                    <div key={idx} className="text-xs text-[#F4F7FA] flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#65D9E8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="/services/ai-engineering"
                onClick={(e) => { e.preventDefault(); handleNav('service-ai-engineering'); }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65D9E8] group-hover:text-[#4ec2d1] cursor-pointer pt-4 border-t border-[#43515D]/40"
              >
                <span>Explore AI Engineering</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Pillar 2: Workflow Automation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-[#101820] border border-[#43515D]/50 hover:border-[#65D9E8]/70 rounded-xl p-8 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#16222e] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-6 group-hover:scale-105 transition-transform">
                  <Workflow className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-semibold text-[#65D9E8] uppercase tracking-wider mb-2">
                  PILLAR 02
                </div>
                <h3 className="text-2xl font-bold text-[#F4F7FA] mb-3 group-hover:text-[#65D9E8] transition-colors">
                  Workflow Automation
                </h3>
                <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  Intelligent document processing, RFQ intake pipelines, incoming inquiry classification, and multi-step approval workflows with human-in-the-loop oversight.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Automated RFQ ingestion and requirement normalization',
                    'Pricing draft assembly and quotation acceleration',
                    'Inquiry triage and missing parameter validation',
                    'Configurable human verification checkpoints'
                  ].map((feat, idx) => (
                    <div key={idx} className="text-xs text-[#F4F7FA] flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#65D9E8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="/services/ai-workflow-automation"
                onClick={(e) => { e.preventDefault(); handleNav('service-ai-workflow-automation'); }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65D9E8] group-hover:text-[#4ec2d1] cursor-pointer pt-4 border-t border-[#43515D]/40"
              >
                <span>Explore Workflow Automation</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Pillar 3: Systems Integration */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group bg-[#101820] border border-[#43515D]/50 hover:border-[#65D9E8]/70 rounded-xl p-8 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#16222e] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-6 group-hover:scale-105 transition-transform">
                  <Network className="w-6 h-6" />
                </div>
                <div className="text-xs font-mono font-semibold text-[#65D9E8] uppercase tracking-wider mb-2">
                  PILLAR 03
                </div>
                <h3 className="text-2xl font-bold text-[#F4F7FA] mb-3 group-hover:text-[#65D9E8] transition-colors">
                  Systems Integration
                </h3>
                <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  Enterprise APIs, ERP extensions, application connectivity, and data synchronization bridging legacy on-prem systems with modern automation platforms.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    'Bespoke ERP connectors (SAP, NetSuite, Microsoft Dynamics)',
                    'Secure REST, GraphQL, and event-driven webhook bridges',
                    'Bidirectional database and warehouse synchronization',
                    'Audited transactional logging and telemetry'
                  ].map((feat, idx) => (
                    <div key={idx} className="text-xs text-[#F4F7FA] flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#65D9E8] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="/services/systems-integration"
                onClick={(e) => { e.preventDefault(); handleNav('service-systems-integration'); }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65D9E8] group-hover:text-[#4ec2d1] cursor-pointer pt-4 border-t border-[#43515D]/40"
              >
                <span>Explore Systems Integration</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — EXAMPLE SOLUTIONS: CONCRETE INDUSTRIAL & B2B USE CASES
         ========================================================================= */}
      <section id="solutions" className="py-24 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Demonstrated Architecture
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              Example Solutions for B2B & Industrial Operations
            </h2>
            <p className="text-lg text-[#8DA2B3]">
              Representative implementations designed for information-dense operations. Every solution integrates directly with your existing infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Solution 01 */}
            <div className="bg-[#16222e] border border-[#43515D]/50 hover:border-[#65D9E8]/60 rounded-xl p-8 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                    EXAMPLE SOLUTION 01
                  </span>
                  <span className="text-xs text-[#8DA2B3] font-medium">
                    Industrial & Manufacturing
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F4F7FA] mb-3">
                  Automated RFQ Intake & Specification Extraction
                </h3>
                <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  Industrial suppliers receive multi-page technical RFQs containing PDF drawings, Excel line items, and non-standard material specifications.
                </p>
                <div className="space-y-3 mb-6 bg-[#101820] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs text-[#8DA2B3]">
                    <strong className="text-[#F4F7FA] block mb-1">How It Works:</strong>
                    Document intelligence models parse incoming documents, extract item codes, material grades, and requested delivery dates, and flag non-standard tolerances for engineer review.
                  </div>
                  <div className="text-xs text-[#65D9E8] font-medium">
                    Operational Impact: Reduces RFQ turnaround from days to hours, preventing missed requirements.
                  </div>
                </div>
              </div>
              <a
                href="/services/document-processing-automation"
                onClick={(e) => { e.preventDefault(); handleNav('service-document-processing-automation'); }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65D9E8] hover:underline cursor-pointer"
              >
                <span>Review Document Processing</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Solution 02 */}
            <div className="bg-[#16222e] border border-[#43515D]/50 hover:border-[#65D9E8]/60 rounded-xl p-8 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                    EXAMPLE SOLUTION 02
                  </span>
                  <span className="text-xs text-[#8DA2B3] font-medium">
                    Commercial Distribution
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F4F7FA] mb-3">
                  Pricing & Quotation Draft Assembly
                </h3>
                <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  Converting extracted line items into accurate quotations typically requires checking tier discounts, lead times, and current stock availability across multiple systems.
                </p>
                <div className="space-y-3 mb-6 bg-[#101820] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs text-[#8DA2B3]">
                    <strong className="text-[#F4F7FA] block mb-1">How It Works:</strong>
                    Rule-based pricing logic automatically pairs parsed specifications with approved ERP price schedules, generating a complete draft quote ready for final human sign-off.
                  </div>
                  <div className="text-xs text-[#65D9E8] font-medium">
                    Operational Impact: Accelerates response velocity while enforcing consistent commercial margin rules.
                  </div>
                </div>
              </div>
              <a
                href="/services/rfq-quotation-automation"
                onClick={(e) => { e.preventDefault(); handleNav('service-rfq-quotation-automation'); }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65D9E8] hover:underline cursor-pointer"
              >
                <span>Review Quotation Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Solution 03 */}
            <div className="bg-[#16222e] border border-[#43515D]/50 hover:border-[#65D9E8]/60 rounded-xl p-8 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                    EXAMPLE SOLUTION 03
                  </span>
                  <span className="text-xs text-[#8DA2B3] font-medium">
                    Operations & Customer Support
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F4F7FA] mb-3">
                  Inquiry Routing & Missing Parameter Verification
                </h3>
                <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  Customer and partner communications often arrive incomplete, causing days of back-and-forth emails before an engineer can even begin work.
                </p>
                <div className="space-y-3 mb-6 bg-[#101820] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs text-[#8DA2B3]">
                    <strong className="text-[#F4F7FA] block mb-1">How It Works:</strong>
                    Natural language classification inspects incoming messages, verifies required technical attachments, prompts senders for missing parameters, and routes the ticket to the qualified specialist.
                  </div>
                  <div className="text-xs text-[#65D9E8] font-medium">
                    Operational Impact: Eliminates clerical email chasing and ensures engineers receive fully qualified tickets.
                  </div>
                </div>
              </div>
              <a
                href="/services/ai-workflow-automation"
                onClick={(e) => { e.preventDefault(); handleNav('service-ai-workflow-automation'); }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65D9E8] hover:underline cursor-pointer"
              >
                <span>Review Classification Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Solution 04 */}
            <div className="bg-[#16222e] border border-[#43515D]/50 hover:border-[#65D9E8]/60 rounded-xl p-8 transition-colors flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                    EXAMPLE SOLUTION 04
                  </span>
                  <span className="text-xs text-[#8DA2B3] font-medium">
                    Enterprise IT & Operations
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#F4F7FA] mb-3">
                  Legacy ERP & Operational Data Synchronization
                </h3>
                <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  Replacing established ERP systems (SAP, NetSuite, Dynamics) is expensive and risky, yet teams need modern automated workflows today.
                </p>
                <div className="space-y-3 mb-6 bg-[#101820] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs text-[#8DA2B3]">
                    <strong className="text-[#F4F7FA] block mb-1">How It Works:</strong>
                    Custom API wrappers, database CDC (Change Data Capture) pipelines, and transactional webhooks connect your modern tools directly to legacy tables with complete rollback audit logs.
                  </div>
                  <div className="text-xs text-[#65D9E8] font-medium">
                    Operational Impact: Unlocks automated workflows immediately without replacing core legacy databases.
                  </div>
                </div>
              </div>
              <a
                href="/services/systems-integration"
                onClick={(e) => { e.preventDefault(); handleNav('service-systems-integration'); }}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65D9E8] hover:underline cursor-pointer"
              >
                <span>Review Integration Architecture</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4.5 — INTERACTIVE SYSTEMS & ARCHITECTURE STUDIO
         ========================================================================= */}
      <section id="interactive-studio" className="py-24 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2 font-mono">
              INTERACTIVE ENGINEERING LAB · LIVE ARCHITECTURE & VISUALIZATIONS
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              Explore How Syntellum Works in Production
            </h2>
            <p className="text-lg text-[#8DA2B3]">
              Inspect our core capabilities in an interactive environment. Toggle between our live Document Intelligence Workbench, Systems Architecture Explorer, 4-Stage Adoption Roadmap, and Zero-Trust VPC Security Topology.
            </p>
          </div>

          <InteractiveStudio onNavigateToContact={(summary) => handleNav('contact', summary)} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — HOW WE WORK: 5-STAGE ENGAGEMENT WITH DELIVERABLES
         ========================================================================= */}
      <section id="how-we-work" className="py-24 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Engagement Model
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              How Engagements Work: From Assessment to Production
            </h2>
            <p className="text-lg text-[#8DA2B3]">
              Every stage produces a defined, reviewable deliverable so stakeholders have complete technical clarity before code is deployed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {[
              {
                num: '01',
                title: 'Discover',
                summary: 'Assess operational workflows, data sources, system constraints, and exact business objectives.',
                deliverable: 'Requirements Assessment & Feasibility Report detailing ROI boundaries and technical risks.',
              },
              {
                num: '02',
                title: 'Design',
                summary: 'Map integration endpoints, system schemas, model parameters, and human review touchpoints.',
                deliverable: 'Solution Architecture Blueprint with data schemas and agreed acceptance criteria.',
              },
              {
                num: '03',
                title: 'Engineer',
                summary: 'Develop custom AI pipelines, integration adapters, and automated workflow triggers.',
                deliverable: 'Production-Grade Working Implementation deployed to your private tenant or cloud.',
              },
              {
                num: '04',
                title: 'Validate',
                summary: 'Conduct edge-case stress tests, validation runs against historical data, and security audits.',
                deliverable: 'Benchmark Validation Report demonstrating precision against agreed acceptance criteria.',
              },
              {
                num: '05',
                title: 'Improve',
                summary: 'Deploy with monitoring telemetry, maintain ongoing system accuracy, and expand capabilities.',
                deliverable: 'Operational SLA Handover, system documentation, and progressive optimization schedule.',
              },
            ].map((stage, i) => (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#101820] border border-[#43515D]/50 hover:border-[#65D9E8]/60 rounded-xl p-6 relative flex flex-col justify-between transition-colors"
              >
                <div>
                  <span className="text-2xl font-mono font-bold text-[#65D9E8] block mb-3">
                    {stage.num}
                  </span>
                  <h3 className="text-lg font-bold text-[#F4F7FA] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-[#8DA2B3] leading-relaxed mb-4">
                    {stage.summary}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#43515D]/40">
                  <span className="text-[10px] font-mono font-semibold uppercase text-[#65D9E8] block mb-1">
                    What You Receive:
                  </span>
                  <p className="text-xs text-[#F4F7FA] leading-tight font-medium">
                    {stage.deliverable}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="p-6 bg-[#101820] border border-[#43515D]/60 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-sm text-[#8DA2B3]">
              Need to evaluate an initial workflow? We begin with a structured 30-minute technical discovery.
            </div>
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors whitespace-nowrap cursor-pointer shrink-0"
            >
              <span>SCHEDULE A DISCOVERY CALL</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5.5 — OPERATIONAL BOTTLENECK & ROI ESTIMATOR
         ========================================================================= */}
      <section id="roi-estimator" className="py-24 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROIEstimator
            onNavigateToContact={(dataSummary) => handleNav('contact', dataSummary)}
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — ENGINEERING PRINCIPLES & DATA TRUST
         ========================================================================= */}
      <section id="principles" className="py-24 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Trust & Governance
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              Built on Realistic Engineering Standards.
            </h2>
            <p className="text-lg text-[#8DA2B3]">
              Enterprise buyers require transparent security and operational reliability. Here are our actual architectural practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Lock className="w-5 h-5 text-[#65D9E8]" />,
                title: 'Private Tenant Deployments',
                desc: 'Models and pipelines run within your dedicated virtual private cloud (VPC) or client-isolated containers. Your data never traverses shared public multi-tenant pools.',
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-[#65D9E8]" />,
                title: 'Zero Training on Client Data',
                desc: 'Your technical specifications, documents, and customer correspondence are strictly protected. We enforce zero-retention policies; data is never used to train foundation models.',
              },
              {
                icon: <Eye className="w-5 h-5 text-[#65D9E8]" />,
                title: 'Human-in-the-Loop Thresholds',
                desc: 'High-consequence actions (issuing quotes, approving legal changes, modifying production tables) default to human sign-off checkpoints before execution.',
              },
              {
                icon: <Sliders className="w-5 h-5 text-[#65D9E8]" />,
                title: 'Deterministic Fallback Controls',
                desc: 'When document quality or model confidence scores fall below defined reliability benchmarks, workflows automatically route to human review queues with audit logs.',
              },
              {
                icon: <Boxes className="w-5 h-5 text-[#65D9E8]" />,
                title: 'Standardized, Maintainable Code',
                desc: 'We engineer with TypeScript, Python, and open API protocols. No black-box dependencies or vendor lock-in. Your internal team receives complete documentation and source ownership.',
              },
              {
                icon: <Server className="w-5 h-5 text-[#65D9E8]" />,
                title: 'Auditable Event Logging',
                desc: 'Every automated step, extraction result, and system modification is recorded in structured audit logs, ensuring compliance transparency and traceability.',
              },
            ].map((principle, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="bg-[#16222e] border border-[#43515D]/40 hover:border-[#65D9E8]/50 rounded-xl p-6 space-y-3 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#101820] border border-[#43515D]/50 flex items-center justify-center">
                  {principle.icon}
                </div>
                <h3 className="text-base font-bold text-[#F4F7FA]">
                  {principle.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                  {principle.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Enterprise Security & NDA Governance Callout */}
          <div className="mt-16 p-8 bg-[#16222e] border border-[#65D9E8]/30 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#65D9E8]" />
                <span>Enterprise Security & NDA Governance</span>
              </div>
              <h3 className="text-xl font-bold text-[#F4F7FA]">
                Require strict data boundaries, VPC topologies, or a signed Mutual NDA?
              </h3>
              <p className="text-sm text-[#8DA2B3] leading-relaxed">
                Review our comprehensive security architecture dossier covering isolated client VPC topologies, zero model training protocols, and standard bilateral non-disclosure execution terms.
              </p>
            </div>
            <a
              href="/security"
              onClick={(e) => { e.preventDefault(); handleNav('security'); }}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors whitespace-nowrap cursor-pointer shrink-0 shadow-md"
            >
              <span>Review Security & NDA Dossier</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — ABOUT SYNTELLUM: MISSION, PHILOSOPHY & GEOGRAPHIC REACH
         ========================================================================= */}
      <section id="about" className="py-24 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8]">
                About Syntellum Systems
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight">
                An Engineering Practice Focused on Operational Reality.
              </h2>
              <p className="text-base text-[#8DA2B3] leading-relaxed">
                Syntellum Systems was founded on a simple observation: modern AI and automation tools offer immense promise, but their commercial value is frequently lost in hype, unrealistic claims, and fragile proof-of-concepts that fail in production.
              </p>
              <p className="text-base text-[#8DA2B3] leading-relaxed">
                We bridge that gap. We operate as senior engineering partners to industrial, commercial, and data-intensive organizations. Our focus is the hard operational work: integrating disparate systems, handling messy documents, establishing strict security boundaries, and designing software that teams actually trust.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#43515D]/40">
                <div>
                  <span className="text-xs font-mono font-semibold text-[#65D9E8] uppercase block mb-1">
                    Operational Base
                  </span>
                  <p className="text-sm font-medium text-[#F4F7FA]">
                    Pakistan
                  </p>
                </div>
                <div>
                  <span className="text-xs font-mono font-semibold text-[#65D9E8] uppercase block mb-1">
                    Delivery Reach
                  </span>
                  <p className="text-sm font-medium text-[#F4F7FA]">
                    Serving enterprise clients and engineering partners across Pakistan and international markets.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('about')}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#65D9E8] hover:text-[#4ec2d1] cursor-pointer"
                >
                  <span>Read More About Our Company & Background</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#101820] border border-[#43515D]/60 rounded-2xl p-8 space-y-6">
              <h3 className="text-lg font-bold text-[#F4F7FA] border-b border-[#43515D]/40 pb-3">
                Operating Philosophy
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[#8DA2B3]">
                  <CheckCircle2 className="w-5 h-5 text-[#65D9E8] shrink-0 mt-0.5" />
                  <span><strong>Solve the real bottleneck:</strong> We do not deploy AI where simple rule-based logic is more reliable and cost-effective.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[#8DA2B3]">
                  <CheckCircle2 className="w-5 h-5 text-[#65D9E8] shrink-0 mt-0.5" />
                  <span><strong>Respect existing investments:</strong> We build connective adapters that enhance your existing ERP and databases rather than demanding disruptive migrations.</span>
                </li>
                <li className="flex items-start gap-3 text-xs sm:text-sm text-[#8DA2B3]">
                  <CheckCircle2 className="w-5 h-5 text-[#65D9E8] shrink-0 mt-0.5" />
                  <span><strong>Honest feasibility:</strong> If a technical challenge cannot be reliably automated, we state it transparently during discovery.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — FINAL CALL TO ACTION: DIRECT INVITATION TO SOLVE A PROBLEM
         ========================================================================= */}
      <section className="py-24 bg-[#101820] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1c2a38]/40 via-transparent to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            Initiate a Technical Conversation
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F4F7FA] tracking-tight mb-6">
            Have an operational bottleneck ready to be solved?
          </h2>
          <p className="text-base sm:text-lg text-[#8DA2B3] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Tell us about your workflow, existing systems, or automation goals. We will review your requirements and provide an initial feasibility assessment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-lg hover:shadow-[#65D9E8]/25"
            >
              <span>DISCUSS A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNav('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#F4F7FA] border border-[#43515D] hover:border-[#65D9E8] hover:text-[#65D9E8] bg-[#16222e]/60 rounded transition-colors cursor-pointer"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
