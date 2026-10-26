import React from 'react';
import {
  Workflow,
  CheckCircle2,
  Sliders,
  ArrowRight,
  ArrowUpRight,
  Eye,
  Clock,
  Check,
  HelpCircle,
  ShieldCheck,
  FileCheck
} from 'lucide-react';
import { Page } from '../../types';
import { SEO } from '../../components/SEO';

interface CapabilityPageProps {
  setCurrentPage: (page: Page) => void;
}

export const WorkflowAutomationPage: React.FC<CapabilityPageProps> = ({ setCurrentPage }) => {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'AI Workflow Automation', url: '/services/ai-workflow-automation' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'AI Workflow Automation & Intelligent Processing',
    'serviceType': 'Workflow Automation',
    'provider': {
      '@type': 'Organization',
      'name': 'Syntellum Systems',
      'url': 'https://syntellum.si/',
      'logo': 'https://syntellum.si/assets/images/hero_enterprise_operations_1792436542613.jpg'
    },
    'description': 'Automate high-volume operational cycles, inquiry classification, multi-tier approvals, and exception queues with human-in-the-loop oversight.',
    'areaServed': ['Pakistan', 'International']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'What happens when an automated workflow encounters an unexpected document format?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Our workflows use confidence scoring. If extraction certainty falls below predefined operational thresholds (e.g. 95%), the task is routed to an exception workbench where an operator validates the record in seconds with highlighted source context.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can these workflows trigger actions directly inside our existing ERP?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We engineer bi-directional connectors that interface with SAP, Microsoft Dynamics, NetSuite, and custom SQL databases via verified APIs or secure transactional queues.'
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="AI Workflow Automation & Intelligent Processing | Syntellum Systems"
        description="Automate high-volume operational cycles, inquiry classification, multi-tier approvals, and exception queues with human-in-the-loop oversight."
        canonical="https://syntellum.si/services/ai-workflow-automation"
        breadcrumbs={breadcrumbs}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Breadcrumb Navigation Bar */}
      <nav aria-label="Breadcrumb" className="bg-[#16222e] border-b border-[#43515D]/40 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-xs text-[#8DA2B3]">
            <li>
              <a 
                href="/" 
                onClick={(e) => { e.preventDefault(); handleNav('home'); }} 
                className="hover:text-[#65D9E8] transition-colors"
              >
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <a 
                href="/services" 
                onClick={(e) => { e.preventDefault(); handleNav('services'); }} 
                className="hover:text-[#65D9E8] transition-colors"
              >
                Services
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#65D9E8] font-medium" aria-current="page">
              AI Workflow Automation
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="py-20 lg:py-24 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            Core Capability · Pillar 02
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            Intelligent Workflow Automation for Operational Scale.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            Eliminate operational drag by transforming information-heavy administrative tasks, multi-tier approvals, and incoming communication streams into autonomous, audited workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-md"
            >
              <span>Automate a Workflow</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNav('services')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F4F7FA] border border-[#43515D] hover:border-[#65D9E8] hover:text-[#65D9E8] bg-[#16222e]/60 rounded transition-colors"
            >
              <span>Explore All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: The Operational Problem */}
      <section className="py-20 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FA]">
                Ending the Cycle of Manual Triage and Data Transfer
              </h2>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                In most growing organizations, operations teams spend hours every day acting as human routers: opening incoming emails, downloading attachments, re-typing line items into ERPs, and chasing internal approvals. These manual handoffs create severe throughput limits, increase turnaround latency, and introduce avoidable errors.
              </p>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                We design end-to-end automated pipelines that intake messy data, execute structured business validation logic, and trigger automated downstream actions. To preserve operational integrity, high-consequence transactions are routed to clean human verification queues.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#16222e] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs font-bold text-[#65D9E8] uppercase tracking-wider mb-1">
                    Turnaround Acceleration
                  </div>
                  <p className="text-xs text-[#8DA2B3]">
                    Cuts processing cycles from 24–48 hours down to minutes with real-time auditability.
                  </p>
                </div>
                <div className="bg-[#16222e] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs font-bold text-[#65D9E8] uppercase tracking-wider mb-1">
                    Human Oversight
                  </div>
                  <p className="text-xs text-[#8DA2B3]">
                    Staff review exceptions with pre-highlighted context instead of re-typing entire files.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#16222e] border border-[#43515D]/60 rounded-2xl p-8 space-y-4">
              <h3 className="text-base font-bold text-[#F4F7FA] border-b border-[#43515D]/40 pb-3 flex items-center gap-2">
                <Workflow className="w-5 h-5 text-[#65D9E8]" />
                Automated Workflow Features
              </h3>
              <ul className="space-y-3">
                {[
                  'Automated multi-channel inquiry ingestion (Email, Web, SFTP, APIs)',
                  'Semantic classification and intent extraction across business communications',
                  'Confidence-scored validation gating routine items straight through',
                  'Exception review dashboards for high-risk or low-confidence edge cases',
                  'Direct bi-directional synchronization with enterprise ERP and CRM systems'
                ].map((feat, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#8DA2B3]">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: FAQ */}
      <section className="py-20 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FA] mb-3">
              Frequently Asked Questions: Workflow Automation
            </h2>
            <p className="text-sm text-[#8DA2B3]">
              Addressing operational integration and reliability questions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                What happens when an automated workflow encounters an unexpected document format?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                Our workflows use confidence scoring. If extraction certainty falls below predefined operational thresholds (e.g. 95%), the task is routed to an exception workbench where an operator validates the record in seconds with highlighted source context.
              </p>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                Can these workflows trigger actions directly inside our existing ERP?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                Yes. We engineer bi-directional connectors that interface with SAP, Microsoft Dynamics, NetSuite, and custom SQL databases via verified APIs or secure transactional queues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-20 bg-[#101820]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#F4F7FA] mb-4">
            Identify Your High-Impact Automation Opportunities
          </h2>
          <p className="text-base text-[#8DA2B3] mb-8 max-w-2xl mx-auto">
            Book a 30-minute discovery call to map out repetitive tasks and review technical automation feasibility.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-lg"
          >
            <span>DISCUSS AN AUTOMATION PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
