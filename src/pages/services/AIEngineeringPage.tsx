import React from 'react';
import { motion } from 'framer-motion';
import {
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowRight,
  ArrowUpRight,
  Server,
  Database,
  Layers,
  Sliders,
  Check,
  HelpCircle
} from 'lucide-react';
import { Page } from '../../types';
import { SEO } from '../../components/SEO';

interface CapabilityPageProps {
  setCurrentPage: (page: Page) => void;
}

export const AIEngineeringPage: React.FC<CapabilityPageProps> = ({ setCurrentPage }) => {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'AI Engineering', url: '/services/ai-engineering' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Enterprise AI Engineering & Applied LLMs',
    'serviceType': 'AI Engineering',
    'provider': {
      '@type': 'Organization',
      'name': 'Syntellum Systems',
      'url': 'https://syntellum.si/',
      'logo': 'https://syntellum.si/assets/images/hero_enterprise_operations_1792436542613.jpg'
    },
    'description': 'Purpose-built enterprise AI models, private RAG pipelines, and deterministic document intelligence engineered for strict corporate data boundaries.',
    'areaServed': ['Pakistan', 'International'],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'AI Engineering Capabilities',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Retrieval-Augmented Generation (RAG) Systems'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Document Intelligence & Extraction Pipelines'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Private Model Hosting & Tenant Isolation'
          }
        }
      ]
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'How does Syntellum ensure enterprise data is not used to train external AI models?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We engineer systems that run strictly within your private cloud tenant (AWS, Azure, GCP) or on-premise infrastructure using isolated inference instances with zero data retention policies. Proprietary documentation never traverses public shared pools.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do you prevent hallucinations in technical operations?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We implement deterministic validation layers, strict retrieval citation matching, and confidence thresholds. If a query falls below acceptable benchmark thresholds, the system defaults to human-in-the-loop review rather than producing unverified outputs.'
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="Enterprise AI Engineering & Applied LLMs | Syntellum Systems"
        description="Purpose-built enterprise AI models, private RAG pipelines, and deterministic document intelligence engineered for strict corporate data boundaries."
        canonical="https://syntellum.si/services/ai-engineering"
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
              AI Engineering
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="py-20 lg:py-24 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            Core Capability · Pillar 01
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            Enterprise AI Engineering, Built for Production Operations.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            We architect and deploy specialized AI systems, private retrieval-augmented generation (RAG) engines, and deterministic document intelligence designed to operate securely within high-stakes enterprise environments.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-md"
            >
              <span>Discuss an AI Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#architecture"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F4F7FA] border border-[#43515D] hover:border-[#65D9E8] hover:text-[#65D9E8] bg-[#16222e]/60 rounded transition-colors"
            >
              <span>View Technical Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Section 1: The Engineering Challenge */}
      <section className="py-20 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FA]">
                Why Generic Foundation Models Fail in Enterprise Operations
              </h2>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                Consumer chat interfaces and general-purpose LLM APIs cannot meet the requirements of industrial or commercial operations. They suffer from unpredictable hallucinations, lack access to proprietary enterprise context, and risk exposing sensitive corporate IP when routed through public multi-tenant endpoints.
              </p>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                Syntellum Systems engineers custom AI architectures that pair foundation models with deterministic software guardrails, strict document citation mechanisms, and dedicated private tenant environments. The result is artificial intelligence that delivers measurable accuracy, repeatable outputs, and full auditable traceability.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#16222e] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs font-bold text-[#65D9E8] uppercase tracking-wider mb-1">
                    Zero IP Exposure
                  </div>
                  <p className="text-xs text-[#8DA2B3]">
                    Inference hosted within dedicated VPCs with zero external model training on your data.
                  </p>
                </div>
                <div className="bg-[#16222e] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs font-bold text-[#65D9E8] uppercase tracking-wider mb-1">
                    Verifiable Citations
                  </div>
                  <p className="text-xs text-[#8DA2B3]">
                    Every extracted metric and synthesis links directly back to the exact source page and paragraph.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#16222e] border border-[#43515D]/60 rounded-2xl p-8 space-y-4">
              <h3 className="text-base font-bold text-[#F4F7FA] border-b border-[#43515D]/40 pb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-[#65D9E8]" />
                Technical Capabilities Breakdown
              </h3>
              <ul className="space-y-3">
                {[
                  'Retrieval-Augmented Generation (RAG) over complex enterprise archives',
                  'Deterministic guardrails restricting model outputs to validated schemas',
                  'Fine-tuning and LoRA adaptations on domain-specific technical vocabularies',
                  'Multi-modal document intelligence parsing mixed text, schematics, and tables',
                  'Automated evaluation test benches measuring precision, recall, and latency'
                ].map((cap, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#8DA2B3]">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Architecture Blueprint */}
      <section id="architecture" className="py-20 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              System Design
            </p>
            <h2 className="text-3xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              Our 4-Layer Enterprise AI Stack
            </h2>
            <p className="text-base text-[#8DA2B3]">
              Every solution is structured across four decoupled layers to ensure maintainability, security, and technological agility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Layer 01',
                title: 'Data Ingestion & Parsing',
                desc: 'Raw inputs (PDFs, spec sheets, emails, databases) are normalized via layout-aware OCR and semantic chunking.',
                icon: <Database className="w-5 h-5" />
              },
              {
                step: 'Layer 02',
                title: 'Vector & Hybrid Retrieval',
                desc: 'Indexed across dense vector embeddings and BM25 sparse keyword indices for high-precision recall.',
                icon: <Layers className="w-5 h-5" />
              },
              {
                step: 'Layer 03',
                title: 'Deterministic Reasoning',
                desc: 'Private model inferences constrained by JSON Schema validators, confidence scores, and safety bounds.',
                icon: <Cpu className="w-5 h-5" />
              },
              {
                step: 'Layer 04',
                title: 'Integration & Action',
                desc: 'Direct dispatch into downstream ERPs, databases, or human-in-the-loop verification workbenches.',
                icon: <Server className="w-5 h-5" />
              },
            ].map((layer, idx) => (
              <div key={idx} className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6 space-y-3">
                <div className="text-xs font-mono font-bold text-[#65D9E8]">{layer.step}</div>
                <div className="text-[#65D9E8]">{layer.icon}</div>
                <h3 className="text-base font-bold text-[#F4F7FA]">{layer.title}</h3>
                <p className="text-xs text-[#8DA2B3] leading-relaxed">{layer.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: FAQ Section */}
      <section className="py-20 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FA] mb-3">
              Frequently Asked Questions: AI Engineering
            </h2>
            <p className="text-sm text-[#8DA2B3]">
              Technical considerations for deploying artificial intelligence in enterprise environments.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#16222e] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                How does Syntellum ensure enterprise data is not used to train external models?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                We engineer systems that run strictly within your private cloud tenant (AWS, Azure, GCP) or on-premise infrastructure using isolated inference instances with zero data retention policies. Proprietary documentation never traverses public shared pools.
              </p>
            </div>

            <div className="bg-[#16222e] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                How do you prevent hallucinations in technical operations?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                We implement deterministic validation layers, strict retrieval citation matching, and confidence thresholds. If a query falls below acceptable benchmark thresholds, the system defaults to human-in-the-loop review rather than producing unverified outputs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-20 bg-[#16222e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#F4F7FA] mb-4">
            Ready to Build a Production-Grade AI Architecture?
          </h2>
          <p className="text-base text-[#8DA2B3] mb-8 max-w-2xl mx-auto">
            Schedule a technical discovery session with a practicing engineer to evaluate your data readiness and architecture roadmap.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-lg"
          >
            <span>DISCUSS AN AI PROJECT</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
