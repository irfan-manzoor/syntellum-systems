import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Search,
  PenTool,
  Code2,
  CheckCircle2,
  ShieldCheck,
  UserCheck,
  FileCheck,
  Server,
  Layers,
  Activity
} from 'lucide-react';
import { Page } from '../types';
import { SEO } from '../components/SEO';
import { InteractiveRoadmap } from '../components/InteractiveRoadmap';

interface ApproachPageProps {
  setCurrentPage: (page: Page) => void;
}

export const ApproachPage: React.FC<ApproachPageProps> = ({ setCurrentPage }) => {
  const [selectedStage, setSelectedStage] = useState<number>(0);

  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stages = [
    {
      number: '01',
      title: 'Discover',
      tagline: 'Understand the business problem before proposing technology.',
      description: 'We conduct a structured review of your current operational workflows, system interfaces, data availability, and pain points. Our goal is to identify genuine friction, establish baseline metrics, and determine whether AI or standard software engineering is the right solution.',
      executiveSummary: 'Eliminates wasted capital by screening out low-ROI initiatives and defining clear business goals.',
      technicalFocus: 'Reviewing API access, data schemas, document variance, latency requirements, and network security policies.',
      activities: [
        'Stakeholder and operator workflow mapping',
        'Sample document and data quality evaluation',
        'Legacy system interface and API audit',
        'Feasibility assessment and risk identification',
        'Quantified baseline performance benchmarks',
      ],
      deliverables: [
        'Operational Workflow Diagram',
        'Technical Feasibility Assessment',
        'Defined Success Metrics & Acceptance Criteria',
      ],
    },
    {
      number: '02',
      title: 'Design',
      tagline: 'Architecting for reliability, security, and enterprise fit.',
      description: 'We specify the end-to-end technical architecture, integration touchpoints, model selection, data pipelines, and user interfaces. Every component is designed to operate within your existing security boundaries and compliance protocols.',
      executiveSummary: 'Guarantees that the solution fits your enterprise roadmap with transparent scopes, timelines, and costs.',
      technicalFocus: 'API contract definition, database schemas, model evaluation harness, fallbacks, and UI wireframes.',
      activities: [
        'Solution architecture and system topology blueprinting',
        'Integration contract and data mapping specification',
        'Human-in-the-loop review interface mockups',
        'Security, role-based access, and compliance planning',
        'Detailed milestone schedule and acceptance criteria',
      ],
      deliverables: [
        'System Architecture Document (SAD)',
        'API & Integration Contracts',
        'Security & Data Governance Protocol',
      ],
    },
    {
      number: '03',
      title: 'Engineer',
      tagline: 'Rigorous software development and seamless integration.',
      description: 'Our engineering team implements the solution in iterative sprints. We build deterministic software wrappers around AI models, configure robust data pipelines, establish automated test suites, and connect into your core business applications.',
      executiveSummary: 'Provides regular demonstrations of working software with clear progress against defined milestones.',
      technicalFocus: 'Clean code, idempotent operations, dead-letter message queues, unit & integration test coverage, and Dockerized deployment.',
      activities: [
        'Core model configuration, prompting, and fine-tuning',
        'Custom middleware and API bridge development',
        'Human-in-the-loop validation dashboards',
        'Automated regression, security, and edge-case testing',
        'Staging environment deployment and live data dry-runs',
      ],
      deliverables: [
        'Modular, Well-Documented Source Code',
        'Automated Test Suites & Benchmarks',
        'Staging Environment Deployment',
      ],
    },
    {
      number: '04',
      title: 'Validate',
      tagline: 'Operational acceptance and benchmark validation.',
      description: 'We test the system against agreed business criteria in realistic conditions, conduct edge-case stress tests, and verify human-in-the-loop escalation paths.',
      executiveSummary: 'Guarantees the system performs to precision benchmarks before going live.',
      technicalFocus: 'Edge-case validation runs, precision/recall testing, error fallback simulation, and security checks.',
      activities: [
        'User acceptance testing (UAT) with real operational personnel',
        'Validation runs against historical benchmark datasets',
        'Fallback and human-in-the-loop escalation verification',
        'Role-based access and security audit',
      ],
      deliverables: [
        'Benchmark Validation Report',
        'Edge-Case Handling Verification Document',
        'Operational Acceptance Sign-Off',
      ],
    },
    {
      number: '05',
      title: 'Improve',
      tagline: 'Production telemetry, SLA support, and continuous refinement.',
      description: 'We execute production cutover, instrument real-time telemetry to monitor system health and accuracy, and progressively fine-tune capabilities based on live operational feedback.',
      executiveSummary: 'Ensures long-term accuracy stability and continuous return on investment.',
      technicalFocus: 'Continuous drift monitoring, latency tracking, audit log verification, and maintenance runbooks.',
      activities: [
        'Production rollout with gradual traffic migration',
        'Operator documentation and handover training',
        'Live telemetry setup for accuracy and throughput monitoring',
        'Scheduled model and rule optimization reviews',
      ],
      deliverables: [
        'Operational SLA Handover & Support Agreement',
        'System Runbooks & Admin Documentation',
        'Ongoing Optimization Schedule',
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="Our Approach: 5-Stage Engineering Methodology | Syntellum Systems"
        description="A structured, 5-stage engineering-led delivery process: Discover, Design, Engineer, Validate, and Improve, aligning technology with operational business goals."
        canonical="https://syntellum.si/approach"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Our Approach', url: '/approach' }
        ]}
      />

      {/* Header */}
      <section className="py-20 lg:py-28 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            Engineering Methodology
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            From Business Challenge to Practical Solution.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            A structured, engineering-led process designed to eliminate guesswork, mitigate technical risk, and deliver production systems that integrate cleanly into your operating environment.
          </p>
        </div>
      </section>

      {/* 4-Stage Overview Matrix */}
      <section className="py-20 border-b border-[#43515D]/40 bg-[#101820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
            {stages.map((st, i) => (
              <button
                key={i}
                onClick={() => setSelectedStage(i)}
                className={`p-6 text-left rounded-xl border transition-all cursor-pointer ${
                  selectedStage === i
                    ? 'bg-[#16222e] border-[#65D9E8] shadow-lg ring-1 ring-[#65D9E8]'
                    : 'bg-[#16222e]/50 border-[#43515D]/40 hover:border-[#8DA2B3]'
                }`}
              >
                <span className="text-2xl font-mono font-bold text-[#65D9E8] block mb-2">
                  {st.number}
                </span>
                <h3 className="text-lg font-bold text-[#F4F7FA] mb-1">
                  {st.title}
                </h3>
                <p className="text-xs text-[#8DA2B3] leading-relaxed">
                  {st.tagline}
                </p>
              </button>
            ))}
          </div>

          {/* Detailed Stage Deep-Dive */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#16222e] border border-[#43515D]/60 rounded-2xl p-8 sm:p-12 shadow-xl"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-8 border-b border-[#43515D]/50 mb-8">
                <div>
                  <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block mb-1">
                    Stage {stages[selectedStage].number} Deep Dive
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] tracking-tight">
                    {stages[selectedStage].title}: {stages[selectedStage].tagline}
                  </h2>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleNav('contact')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors whitespace-nowrap self-start cursor-pointer"
                >
                  <span>Initiate Stage 01 Discovery</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.button>
              </div>

              <p className="text-base text-[#F4F7FA] leading-relaxed mb-8">
                {stages[selectedStage].description}
              </p>

              {/* Executive vs Technical Perspectives */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#101820] p-6 rounded-xl border border-[#43515D]/50">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#65D9E8] block mb-2">
                    Executive Perspective
                  </span>
                  <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                    {stages[selectedStage].executiveSummary}
                  </p>
                </div>

                <div className="bg-[#101820] p-6 rounded-xl border border-[#43515D]/50">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#65D9E8] block mb-2">
                    Technical & Engineering Focus
                  </span>
                  <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                    {stages[selectedStage].technicalFocus}
                  </p>
                </div>
              </div>

              {/* Activities and Deliverables */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#43515D]/40">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-4">
                    Key Stage Activities
                  </h4>
                  <ul className="space-y-2.5">
                    {stages[selectedStage].activities.map((act, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#8DA2B3] flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-4">
                    Tangible Deliverables
                  </h4>
                  <ul className="space-y-2.5">
                    {stages[selectedStage].deliverables.map((del, idx) => (
                      <li key={idx} className="text-xs sm:text-sm text-[#F4F7FA] flex items-start gap-2 bg-[#101820] p-3 rounded-lg border border-[#43515D]/40">
                        <FileCheck className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Interactive Implementation Roadmap */}
      <section className="py-20 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              LIFECYCLE TIMELINE & GOVERNANCE
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] tracking-tight mb-3">
              Interactive Implementation & Adoption Roadmap
            </h2>
            <p className="text-sm sm:text-base text-[#8DA2B3]">
              Review the complete engineering lifecycle from requirements discovery to production cutover. Switch between standard enterprise pacing and fast-track pilots to inspect tangible deliverables and Go/No-Go gates.
            </p>
          </div>

          <InteractiveRoadmap
            onSelectPhase={(phase) => {
              handleNav('contact');
            }}
          />
        </div>
      </section>

      {/* Engineering Pillars of Operational Systems */}
      <section className="py-20 border-b border-[#43515D]/40 bg-[#16222e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Operational Standards
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] tracking-tight">
              Non-Negotiable Architecture Standards
            </h2>
            <p className="text-sm sm:text-base text-[#8DA2B3] mt-2">
              Enterprise technology must be resilient, secure, and maintainable long after initial deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#101820] border border-[#43515D]/60 rounded-xl p-6 space-y-3">
              <div className="text-[#65D9E8]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F7FA]">
                Data Privacy & Boundary Security
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                Your company's proprietary data, engineering drawings, and customer lists never leave authorized perimeters. We deploy within your cloud infrastructure or on-premise environments with zero external model training on your payloads.
              </p>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/60 rounded-xl p-6 space-y-3">
              <div className="text-[#65D9E8]">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F7FA]">
                Human-in-the-Loop Safeguards
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                We design explicit confidence-threshold logic: routine, unambiguous calculations pass through with full audit trails, while borderline cases or novel line items are flagged for human domain expert review.
              </p>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/60 rounded-xl p-6 space-y-3">
              <div className="text-[#65D9E8]">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#F4F7FA]">
                Deterministic Software Discipline
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                Probabilistic AI models are wrapped inside deterministic validation layers. If a model generates an unexpected schema, our middleware catches and handles it safely without breaking downstream ERP ledgers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-[#101820] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
            Start with Stage 01 Discovery
          </h2>
          <p className="text-base text-[#8DA2B3] max-w-2xl mx-auto mb-8 leading-relaxed">
            The best way to begin is a straightforward conversation about your workflows and operational priorities. We will tell you directly what is feasible, what is not, and how to proceed.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer"
          >
            <span>DISCUSS YOUR OBJECTIVES</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
