import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Target,
  Eye,
  ShieldCheck,
  Scale,
  Code2,
  RefreshCw,
  Users2,
  Handshake,
  CheckCircle2,
  Lock,
  Building,
  Globe
} from 'lucide-react';
import { Page } from '../types';
import { SEO } from '../components/SEO';

interface AboutPageProps {
  setCurrentPage: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const principles = [
    {
      icon: <Target className="w-5 h-5" />,
      title: 'Business Value Before Technology Selection',
      desc: 'We never deploy artificial intelligence for novelty. Every architecture starts with a real operational problem, validated baseline data, and defined business objectives.',
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      title: 'Engineering Discipline & Technical Quality',
      desc: 'AI components must fit into robust software engineering pipelines. We hold models to strict benchmarks: deterministic error handling, comprehensive test suites, and clean API integration.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: 'Responsible AI Adoption',
      desc: 'We build systems with transparent human oversight, robust data privacy safeguards, verifiable outputs, and explicit fallback protocols for operational stability.',
    },
    {
      icon: <Scale className="w-5 h-5" />,
      title: 'Transparent Delivery & Clear Accountability',
      desc: 'No black-box promises or ambiguous vendor deliverables. Our clients receive structured project scopes, verifiable milestones, documented architectures, and inspectable code.',
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: 'Continuous Evaluation & Improvement',
      desc: 'Real-world business environments evolve. We instrument telemetry, feedback loops, and ongoing validation protocols to ensure systems maintain operational accuracy over time.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="About Us | Syntellum Systems"
        description="Learn about Syntellum Systems: our engineering principles, mission to deliver measurable operational value, and focus on practical enterprise technology."
        canonical="https://syntellum.si/about"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about' }
        ]}
      />

      {/* Hero Header */}
      <section className="py-20 lg:py-28 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            About Syntellum Systems
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            Engineering-Led Enterprise AI & Connected Systems.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            Syntellum Systems is an enterprise technology company focused on applying practical artificial intelligence, intelligent workflow automation, software engineering, and systems integration to high-stakes business operations.
          </p>
        </div>
      </section>

      {/* Company Introduction & Philosophy */}
      <section className="py-20 border-b border-[#43515D]/40 bg-[#101820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8]">
                Our Focus
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] tracking-tight">
                Practical Implementation in Complex Operating Environments
              </h2>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                Many organizations face a common dilemma: off-the-shelf software is too rigid to match their specific operational nuances, while generic AI tools lack the integration, security, and precision required for production enterprise workflows.
              </p>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                We bridge that gap. We engineer systems that connect seamlessly into existing enterprise architectures—bridging legacy databases, ERP platforms, communication channels, and document repositories to automate information-dense tasks and reduce costly operational bottlenecks.
              </p>
              <div className="p-4 bg-[#16222e] border-l-2 border-[#65D9E8] rounded-r-lg text-xs sm:text-sm text-[#F4F7FA]">
                <span className="font-semibold text-[#65D9E8]">Engineering Stance:</span> We treat AI models as functional components within a broader, deterministic software system—never as an excuse to bypass software discipline.
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#43515D]/60 shadow-xl">
              <img
                src="/assets/images/enterprise_ai_engineering_1792436544878.jpg"
                alt="Syntellum Systems software architects and engineers designing workflow architectures"
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-[#8DA2B3]">
                Collaborative architecture review: from workflow discovery to production integration.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-b border-[#43515D]/40 bg-[#16222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-[#101820] border border-[#43515D]/60 rounded-xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#16222e] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
                  Our Mission
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#F4F7FA] mb-4">
                  Engineering Measurable Operational Value
                </h3>
                <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                  To engineer practical, reliable, and business-aligned AI systems that improve operational efficiency, strengthen decision-making, and create measurable value.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="bg-[#101820] border border-[#43515D]/60 rounded-xl p-8 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#16222e] border border-[#43515D]/60 flex items-center justify-center text-[#65D9E8] mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
                  Our Vision
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#F4F7FA] mb-4">
                  A Trusted International Technology Partner
                </h3>
                <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                  To become a trusted international technology partner for organizations adopting artificial intelligence, intelligent automation, and integrated digital systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-24 border-b border-[#43515D]/40 bg-[#101820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Values & Standards
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              Our Operating Principles
            </h2>
            <p className="text-base sm:text-lg text-[#8DA2B3]">
              The commitments that govern how we evaluate problems, architect solutions, and deliver software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#16222e] border border-[#43515D]/50 hover:border-[#65D9E8]/50 hover:shadow-lg rounded-xl p-6 flex flex-col justify-between transition-colors"
              >
                <div>
                  <div className="text-[#65D9E8] mb-4">{principle.icon}</div>
                  <h3 className="text-base font-bold text-[#F4F7FA] mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Geographic & Operational Scope Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-[#16222e] border border-[#65D9E8]/40 hover:border-[#65D9E8] hover:shadow-lg rounded-xl p-6 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="text-[#65D9E8] mb-4">
                  <Handshake className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#F4F7FA] mb-2">
                  Global Reach with Engineering Efficiency
                </h3>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                  Headquartered in Pakistan, our team serves domestic organizations and international clients across cross-border commercial environments with high-caliber technical fluency and responsive communication.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Audience & Partnership Models */}
      <section className="py-20 border-b border-[#43515D]/40 bg-[#16222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Who We Work With
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] tracking-tight">
              Aligned with Enterprise Clients and Delivery Partners
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#101820] border border-[#43515D]/60 rounded-xl p-8">
              <div className="flex items-center gap-2 text-[#65D9E8] mb-4">
                <Users2 className="w-5 h-5" />
                <h3 className="text-lg font-bold text-[#F4F7FA]">
                  For Enterprise Clients & Operational Leaders
                </h3>
              </div>
              <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                Business owners, operations executives, and IT leaders seeking practical, reliable methods to streamline RFQs, document processing, and system interoperability without taking on open-ended R&D risk.
              </p>
              <ul className="space-y-2 text-xs text-[#F4F7FA]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#65D9E8] shrink-0" />
                  <span>Clearly scoped deliverables and milestone acceptance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#65D9E8] shrink-0" />
                  <span>Compatibility with existing enterprise security policies</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#65D9E8] shrink-0" />
                  <span>Human-in-the-loop controls for sensitive decisions</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/60 rounded-xl p-8">
              <div className="flex items-center gap-2 text-[#65D9E8] mb-4">
                <Handshake className="w-5 h-5" />
                <h3 className="text-lg font-bold text-[#F4F7FA]">
                  For Strategic Technology & Consulting Partners
                </h3>
              </div>
              <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                Consultancies, system integrators, and software providers seeking a dependable engineering execution partner to design, build, and deploy custom AI and automation modules for client initiatives.
              </p>
              <ul className="space-y-2 text-xs text-[#F4F7FA]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#65D9E8] shrink-0" />
                  <span>Dedicated engineering pods and sprint alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#65D9E8] shrink-0" />
                  <span>Modular codebases and clean documentation handover</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#65D9E8] shrink-0" />
                  <span>Technical feasibility advisory for complex RFPs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Engineering Desk Governance */}
      <section className="py-20 border-b border-[#43515D]/40 bg-[#101820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2 font-mono">
              ENGINEERING PRACTICE & LEADERSHIP DESK
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] tracking-tight mb-3">
              Direct Engineering Oversight on Every Engagement
            </h2>
            <p className="text-sm text-[#8DA2B3] leading-relaxed">
              Syntellum Systems does not operate as a generic sales agency. Every client engagement is staffed, architected, and led directly by senior practicing software engineers and enterprise systems architects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-[#16222e] border border-[#43515D]/50 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#65D9E8]">
                <Code2 className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#F4F7FA]">AI & Data Engineering Practice</h3>
              </div>
              <p className="text-xs text-[#8DA2B3] leading-relaxed">
                Specializing in deterministic retrieval pipelines (RAG), layout-aware OCR/vision models, and prompt guardrails engineered specifically for industrial catalogues and technical drawings.
              </p>
            </div>

            <div className="bg-[#16222e] border border-[#43515D]/50 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#65D9E8]">
                <Building className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#F4F7FA]">Enterprise Systems Architecture</h3>
              </div>
              <p className="text-xs text-[#8DA2B3] leading-relaxed">
                Engineers with hands-on integration mastery across SAP Business One/ECC/S4, NetSuite SuiteTalk, Microsoft Dynamics 365, and transactional SQL environments.
              </p>
            </div>

            <div className="bg-[#16222e] border border-[#43515D]/50 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#65D9E8]">
                <Lock className="w-5 h-5" />
                <h3 className="text-base font-bold text-[#F4F7FA]">Security & Compliance Desk</h3>
              </div>
              <p className="text-xs text-[#8DA2B3] leading-relaxed">
                Managing private VPC isolations, AES-256 data-at-rest encryption, bilateral non-disclosure agreements, and strict zero-training compliance audits.
              </p>
            </div>
          </div>

          {/* Corporate Transparency & Official Channels Card */}
          <div className="p-8 bg-[#16222e] border border-[#65D9E8]/40 rounded-2xl flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block">
                COMMERCIAL HEADQUARTERS & CONTACT
              </span>
              <h3 className="text-xl font-bold text-[#F4F7FA]">
                Syntellum Systems · Operating from Pakistan
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed max-w-2xl">
                Serving domestic and international enterprises across EU/UK/US, Middle East, and Pakistan markets with aligned time-zone coverage and responsive SLA delivery.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="https://linkedin.com/company/syntellum-systems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#101820] border border-[#43515D] hover:border-[#65D9E8] text-xs font-bold text-[#F4F7FA] hover:text-[#65D9E8] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 1.64 1.64 1.64 1.64 0 0 0-1.64-1.64z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://x.com/syntellum"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#101820] border border-[#43515D] hover:border-[#65D9E8] text-xs font-bold text-[#F4F7FA] hover:text-[#65D9E8] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span>X</span>
              </a>
              <a
                href="https://instagram.com/syntellumsystems"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#101820] border border-[#43515D] hover:border-[#65D9E8] text-xs font-bold text-[#F4F7FA] hover:text-[#65D9E8] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-[#101820] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
            Discuss Your Operational Requirements
          </h2>
          <p className="text-base text-[#8DA2B3] max-w-2xl mx-auto mb-8 leading-relaxed">
            Whether evaluating an AI opportunity or integrating mission-critical business systems, we welcome technical discovery conversations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer"
            >
              <span>CONNECT WITH OUR TEAM</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNav('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F4F7FA] border border-[#43515D] hover:border-[#65D9E8] hover:text-[#65D9E8] rounded transition-colors cursor-pointer"
            >
              <span>EXPLORE SERVICES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
