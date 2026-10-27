import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Workflow,
  Network,
  CheckCircle2,
  ShieldCheck,
  Lock,
  Building2,
  TrendingUp,
  FileCheck2,
  Check,
  Calculator,
  Compass
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

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="Syntellum Systems | Turn Incoming RFQs into ERP-Ready Quotes"
        description="We engineer AI that parses complex technical RFQs, reconciles part numbers with your catalog, and drafts quotes in SAP, NetSuite, or Dynamics — with your estimators approving every line item."
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
              sameAs: [
                'https://linkedin.com/company/syntellum-systems',
                'https://x.com/syntellum',
                'https://instagram.com/syntellumsystems'
              ],
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
          SECTION 1 — HERO: BEAUTIFIED, HIGH-IMPACT INDUSTRIAL VALUE PROPOSITION
         ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden border-b border-[#43515D]/40">
        {/* Subtle Technical Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#43515D12_1px,transparent_1px),linear-gradient(to_bottom,#43515D12_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Ambient Radial Spotlight */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_25%,rgba(101,217,232,0.13),rgba(16,24,32,0))] pointer-events-none" />

        {/* Cinematic Backdrop with Balanced Scrim */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.05, opacity: 0.12 }}
            animate={{ scale: 1, opacity: 0.2 }}
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
          <div className="absolute inset-0 bg-gradient-to-t from-[#101820] via-[#101820]/85 to-[#101820]/95" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center"
        >
          {/* Eyebrow Pill */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-[#16222e]/90 border border-[#65D9E8]/30 backdrop-blur-md shadow-[0_0_24px_rgba(101,217,232,0.12)]"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#65D9E8] uppercase font-mono">
              Industrial AI & ERP Automation
            </span>
          </motion.div>

          {/* Rhythmic Beautified Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-extrabold tracking-tight text-[#F4F7FA] leading-[1.12] mb-6 text-balance"
          >
            Turn incoming RFQs into{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#65D9E8] via-[#8EE4F0] to-[#E2F7F9]">
              ERP-ready quotes
            </span>
            <span className="block mt-1 sm:mt-2 text-[#F4F7FA]">
              in minutes, not days.
            </span>
          </motion.h1>

          {/* Supporting Engineering Copy */}
          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-[#8DA2B3] leading-relaxed mb-10 font-normal text-balance"
          >
            We engineer private AI that parses complex multi-page technical RFQs, reconciles part numbers with your master catalog, and drafts quotes in SAP, NetSuite, or Dynamics — with your estimators approving every line item.
          </motion.p>

          {/* Focused High-Intent CTAs */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-xl mx-auto"
          >
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNav('contact', 'Free RFQ Automation Feasibility Check')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded-lg transition-all cursor-pointer shadow-[0_0_25px_rgba(101,217,232,0.25)] hover:shadow-[0_0_35px_rgba(101,217,232,0.4)]"
            >
              <span>FREE RFQ FEASIBILITY CHECK</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                document.getElementById('interactive-studio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#F4F7FA] border border-[#43515D] hover:border-[#65D9E8] hover:text-[#65D9E8] bg-[#16222e]/80 hover:bg-[#1c2a38] rounded-lg transition-all cursor-pointer backdrop-blur-sm"
            >
              <Compass className="w-4 h-4 text-[#65D9E8]" />
              <span>EXPLORE INTERACTIVE LAB</span>
            </motion.button>
          </motion.div>

          {/* Sleek Minimalist Single-Line Trust Ticker */}
          <motion.div
            variants={fadeInUp}
            className="mt-14 pt-8 border-t border-[#43515D]/40 flex flex-wrap items-center justify-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs sm:text-sm text-[#8DA2B3]"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#65D9E8] shrink-0" />
              <span className="text-[#F4F7FA] font-medium">Private Tenant VPC</span>
            </div>
            <span className="text-[#43515D] hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#65D9E8] shrink-0" />
              <span className="text-[#F4F7FA] font-medium">Zero Model Training</span>
            </div>
            <span className="text-[#43515D] hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <FileCheck2 className="w-4 h-4 text-[#65D9E8] shrink-0" />
              <span className="text-[#F4F7FA] font-medium">Bilateral NDA First</span>
            </div>
            <span className="text-[#43515D] hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#65D9E8] shrink-0" />
              <span className="text-[#F4F7FA] font-medium">Human-in-the-Loop Sign-off</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================================================
          SECTION 2 — QUANTIFIED CASE STUDIES: PROVEN DELIVERY & OUTCOMES
         ========================================================================= */}
      <section id="case-studies" className="py-24 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101820] border border-[#65D9E8]/30 text-xs font-mono font-bold uppercase tracking-wider text-[#65D9E8] mb-3">
                <TrendingUp className="w-3.5 h-3.5 text-[#65D9E8]" />
                <span>PROVEN DELIVERY · PRODUCTION OUTCOMES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
                Real Operations. Verified Outcomes.
              </h2>
              <p className="text-lg text-[#8DA2B3]">
                Representative case studies demonstrating how automated RFQ parsing, pricing logic, and ERP synchronization compress cycle times and eliminate clerical errors.
              </p>
            </div>
            <button
              onClick={() => handleNav('contact', 'Free RFQ Automation Feasibility Check')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 shadow-md"
            >
              <span>REQUEST FEASIBILITY CHECK</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Case 01 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#101820] border border-[#43515D]/60 hover:border-[#65D9E8]/80 rounded-2xl p-7 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#43515D]/40 text-xs">
                  <span className="font-mono font-bold text-[#65D9E8]">CASE STUDY 01</span>
                  <span className="text-[#8DA2B3] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Industrial Flow Control</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F4F7FA] mb-3">
                  40-Person Industrial Valve & Actuator Distributor
                </h3>
                <p className="text-xs text-[#8DA2B3] leading-relaxed mb-6">
                  Received 60+ multi-page technical RFQs weekly containing scanned CAD blueprints, DIN/ANSI flange standards, and mixed metric/imperial tolerances. Estimators spent ~48 hours per tender manually re-keying into SAP.
                </p>

                {/* Quantified Metrics Highlight */}
                <div className="grid grid-cols-3 gap-2 p-3.5 bg-[#16222e] border border-[#43515D]/50 rounded-xl mb-6 text-center">
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-black text-[#65D9E8] block">35m</span>
                    <span className="text-[10px] text-[#8DA2B3] uppercase">Turnaround</span>
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-black text-[#F4F7FA] block">94.2%</span>
                    <span className="text-[10px] text-[#8DA2B3] uppercase">BOM Accuracy</span>
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-black text-[#65D9E8] block">0</span>
                    <span className="text-[10px] text-[#8DA2B3] uppercase">ERP Errors</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#8DA2B3] mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F4F7FA]">Architecture:</strong> Vision-language table parser + SAP Business One DI Server API</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F4F7FA]">Deployment:</strong> Private customer tenant with strict zero-training policy</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#43515D]/40 flex items-center justify-between text-xs">
                <span className="text-[#8DA2B3]">Outcome: <strong className="text-[#65D9E8]">-98.8% quote latency</strong></span>
                <span className="text-[11px] font-mono text-[#8DA2B3]">Verified</span>
              </div>
            </motion.div>

            {/* Case 02 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#101820] border border-[#43515D]/60 hover:border-[#65D9E8]/80 rounded-2xl p-7 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#43515D]/40 text-xs">
                  <span className="font-mono font-bold text-[#65D9E8]">CASE STUDY 02</span>
                  <span className="text-[#8DA2B3] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Precision Manufacturing</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F4F7FA] mb-3">
                  Tier-2 CNC Fastener & Custom Component Producer
                </h3>
                <p className="text-xs text-[#8DA2B3] leading-relaxed mb-6">
                  Estimators struggled with dynamic raw material index surcharges, custom volume tier discounts, and customer-specific tooling amortization rules across 200+ line-item RFP spreadsheets.
                </p>

                {/* Quantified Metrics Highlight */}
                <div className="grid grid-cols-3 gap-2 p-3.5 bg-[#16222e] border border-[#43515D]/50 rounded-xl mb-6 text-center">
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-black text-[#65D9E8] block">3.8x</span>
                    <span className="text-[10px] text-[#8DA2B3] uppercase">Quoting Speed</span>
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-black text-[#F4F7FA] block">Same Day</span>
                    <span className="text-[10px] text-[#8DA2B3] uppercase">Delivery</span>
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-black text-[#65D9E8] block">100%</span>
                    <span className="text-[10px] text-[#8DA2B3] uppercase">Margin Rule</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#8DA2B3] mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F4F7FA]">Architecture:</strong> Rule-based pricing engine + NetSuite SuiteTalk API + Review Workbench</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F4F7FA]">Deployment:</strong> Isolated AWS VPC instance with AES-256 encryption</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#43515D]/40 flex items-center justify-between text-xs">
                <span className="text-[#8DA2B3]">Outcome: <strong className="text-[#65D9E8]">Zero margin erosion</strong></span>
                <span className="text-[11px] font-mono text-[#8DA2B3]">Verified</span>
              </div>
            </motion.div>

            {/* Case 03 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: 0.25 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-[#101820] border border-[#43515D]/60 hover:border-[#65D9E8]/80 rounded-2xl p-7 flex flex-col justify-between transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#43515D]/40 text-xs">
                  <span className="font-mono font-bold text-[#65D9E8]">CASE STUDY 03</span>
                  <span className="text-[#8DA2B3] flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5" />
                    <span>Commercial Wholesaler</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#F4F7FA] mb-3">
                  Multi-Branch Electrical Infrastructure Wholesaler
                </h3>
                <p className="text-xs text-[#8DA2B3] leading-relaxed mb-6">
                  Handled 150+ daily contractor emails, mobile delivery notes, and PDF purchase orders across 4 branch warehouses, resulting in order backlogs and inventory discrepancies.
                </p>

                {/* Quantified Metrics Highlight */}
                <div className="grid grid-cols-3 gap-2 p-3.5 bg-[#16222e] border border-[#43515D]/50 rounded-xl mb-6 text-center">
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-black text-[#65D9E8] block">18 hrs</span>
                    <span className="text-[10px] text-[#8DA2B3] uppercase">Saved/Wk</span>
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-black text-[#F4F7FA] block">-82%</span>
                    <span className="text-[10px] text-[#8DA2B3] uppercase">Claims</span>
                  </div>
                  <div>
                    <span className="text-lg sm:text-xl font-mono font-black text-[#65D9E8] block">&lt;30s</span>
                    <span className="text-[10px] text-[#8DA2B3] uppercase">Review</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-[#8DA2B3] mb-6">
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F4F7FA]">Architecture:</strong> Multimodal email parser + Microsoft Dynamics 365 OData sync</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span><strong className="text-[#F4F7FA]">Deployment:</strong> Azure Private Container App with transactional rollback</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#43515D]/40 flex items-center justify-between text-xs">
                <span className="text-[#8DA2B3]">Outcome: <strong className="text-[#65D9E8]">Next-day delivery reliability</strong></span>
                <span className="text-[11px] font-mono text-[#8DA2B3]">Verified</span>
              </div>
            </motion.div>
          </div>

          {/* Low-Risk Offer Banner: Free RFQ Automation Check */}
          <div className="mt-14 p-8 bg-[#101820] border border-[#65D9E8]/40 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-2 max-w-3xl">
              <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block">
                LOW-RISK FEASIBILITY ASSESSMENT
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F4F7FA]">
                Test Syntellum on 3 to 5 of your real RFQs or spec sheets.
              </h3>
              <p className="text-sm text-[#8DA2B3] leading-relaxed">
                Send 3–5 sample documents under our bilateral mutual NDA. Our engineering desk will deliver an automated extraction accuracy benchmark and ERP integration feasibility memo within 3 business days — completely free of charge.
              </p>
            </div>
            <button
              onClick={() => handleNav('contact', 'Free RFQ Automation Feasibility Check (3–5 Sample RFQs)')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded-lg transition-colors whitespace-nowrap cursor-pointer shrink-0 shadow-lg"
            >
              <span>CLAIM FREE RFQ CHECK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — INTERACTIVE SYSTEMS & ARCHITECTURE STUDIO (ROADMAP & LAB)
         ========================================================================= */}
      <section id="interactive-studio" className="py-24 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2 font-mono">
              INTERACTIVE ENGINEERING LAB · ARCHITECTURE & ROADMAP PREVIEW
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              Explore How Syntellum Works in Production
            </h2>
            <p className="text-lg text-[#8DA2B3]">
              Inspect our production architecture in an interactive environment. Test the live Document Intelligence Workbench, Systems Architecture Explorer, 4-Stage Adoption Roadmap, and Zero-Trust VPC Security Topology.
            </p>
          </div>

          <InteractiveStudio onNavigateToContact={(summary) => handleNav('contact', summary)} />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — OPERATIONAL BOTTLENECK & ROI ESTIMATOR
         ========================================================================= */}
      <section id="roi-estimator" className="py-24 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ROIEstimator
            onNavigateToContact={(dataSummary) => handleNav('contact', dataSummary)}
          />
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — CORE CAPABILITIES: THE 3 PRODUCTION PILLARS
         ========================================================================= */}
      <section id="capabilities" className="py-24 bg-[#101820] border-b border-[#43515D]/40 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
                Core Capability Architecture
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
                Three Pillars of Practical Engineering
              </h2>
              <p className="text-lg text-[#8DA2B3]">
                Production-tested capabilities structured around enterprise reliability, ERP connectivity, and measurable return on investment.
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
              className="group bg-[#16222e] border border-[#43515D]/50 hover:border-[#65D9E8]/70 rounded-xl p-8 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#101820] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-6 group-hover:scale-105 transition-transform">
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
              className="group bg-[#16222e] border border-[#43515D]/50 hover:border-[#65D9E8]/70 rounded-xl p-8 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#101820] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-6 group-hover:scale-105 transition-transform">
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
              className="group bg-[#16222e] border border-[#43515D]/50 hover:border-[#65D9E8]/70 rounded-xl p-8 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#101820] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-6 group-hover:scale-105 transition-transform">
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
          SECTION 6 — EXECUTIVE CONVERSION: BILATERAL NDA & DISCOVERY ENGAGEMENT
         ========================================================================= */}
      <section className="py-24 bg-[#16222e] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1c2a38]/60 via-transparent to-transparent pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[#101820] border border-[#65D9E8]/30 text-xs font-mono font-bold uppercase tracking-wider text-[#65D9E8]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#65D9E8]" />
            <span>BILATERAL NDA · ZERO RISK TECHNICAL DISCOVERY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F4F7FA] tracking-tight mb-6">
            Have an RFQ backlog or ERP bottleneck ready to solve?
          </h2>
          <p className="text-base sm:text-lg text-[#8DA2B3] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Send 3–5 sample documents for our free Feasibility Assessment or schedule a 30-minute discovery session with our systems architects. We review your catalog complexity, ERP requirements, and ROI threshold.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNav('contact', 'Free RFQ Automation Feasibility Check')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded-lg transition-colors cursor-pointer shadow-lg hover:shadow-[#65D9E8]/25"
            >
              <span>REQUEST FREE RFQ CHECK</span>
              <ArrowUpRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleNav('contact', 'Initial 30-Minute Technical Discovery Session')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold uppercase tracking-wider text-[#F4F7FA] border border-[#43515D] hover:border-[#65D9E8] hover:text-[#65D9E8] bg-[#101820] rounded-lg transition-colors cursor-pointer"
            >
              <span>SCHEDULE DISCOVERY CALL</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
