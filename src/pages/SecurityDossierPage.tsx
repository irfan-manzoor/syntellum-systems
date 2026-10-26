import React, { useState } from 'react';
import {
  ShieldCheck,
  Lock,
  Server,
  FileCheck2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  FileText,
  Key,
  Eye,
  Check,
  Download,
  Copy,
  Mail,
  HelpCircle
} from 'lucide-react';
import { Page } from '../types';
import { SEO } from '../components/SEO';
import { SecurityTopologyPreview } from '../components/SecurityTopologyPreview';

interface SecurityPageProps {
  setCurrentPage: (page: Page) => void;
}

export const SecurityDossierPage: React.FC<SecurityPageProps> = ({ setCurrentPage }) => {
  const [copiedTerms, setCopiedTerms] = useState(false);

  const handleNav = (page: Page, path: string) => {
    setCurrentPage(page);
    window.history.pushState(null, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Security & Governance', url: '/security' },
  ];

  const handleCopyNDAText = () => {
    const ndaText = `SYNTELLUM SYSTEMS — MUTUAL CONFIDENTIALITY & DATA BOUNDARY STATEMENT\n` +
      `1. Purpose: Evaluation of technical requirements, document automation, and systems integration.\n` +
      `2. Proprietary Data: Technical CAD drawings, pricing matrices, line-item archives, and ERP credentials.\n` +
      `3. Zero Training: No client proprietary data shall be used to train public or foundation AI models.\n` +
      `4. Tenant Isolation: Code, models, and embeddings shall execute within designated private tenant infrastructure.\n` +
      `5. Contact: Legal & Engineering Desk, info@syntellum.si.`;

    navigator.clipboard.writeText(ndaText);
    setCopiedTerms(true);
    setTimeout(() => setCopiedTerms(false), 2500);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Is our company data used to train foundation models?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Never. Syntellum Systems enforces a strict zero-retention and zero-training policy. Inferences occur inside private tenant environments or dedicated VPC instances with commercial zero-training agreements.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Can Syntellum deploy entirely within our private corporate network or on-premise servers?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We support on-premise containerized deployments (Docker/Kubernetes) utilizing open-weight models (e.g. Llama 3, Mistral) running on internal GPUs without any external outbound network dependencies.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does Syntellum execute bilateral Non-Disclosure Agreements (NDAs)?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We routinely sign bilateral NDAs before reviewing sample engineering drawings, bills of materials, or historical pricing matrices.'
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="Enterprise Security, Privacy & Data Governance Dossier | Syntellum Systems"
        description="Strict enterprise data boundaries: private VPC deployment options, zero public model training, mutual bilateral NDA execution, and SOC2/ISO aligned controls."
        canonical="https://syntellum.si/security"
        breadcrumbs={breadcrumbs}
        schema={faqSchema}
      />

      {/* Breadcrumb Navigation Bar */}
      <nav aria-label="Breadcrumb" className="bg-[#16222e] border-b border-[#43515D]/40 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-xs text-[#8DA2B3]">
            <li>
              <a 
                href="/" 
                onClick={(e) => { e.preventDefault(); handleNav('home', '/'); }} 
                className="hover:text-[#65D9E8] transition-colors"
              >
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[#65D9E8] font-medium" aria-current="page">
              Security & Data Governance
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="py-20 lg:py-24 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-[#65D9E8]">
            <ShieldCheck className="w-4 h-4" />
            <span>Governance & Trust Protocol</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            Enterprise Security & Data Governance Dossier.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            Enterprise operations require uncompromising privacy, strict tenant isolation, and auditable governance. Here is how Syntellum Systems protects your proprietary data and operational integrity.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => handleNav('contact', '/contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-md"
            >
              <span>Request Bilateral NDA</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="#topologies"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F4F7FA] border border-[#43515D] hover:border-[#65D9E8] hover:text-[#65D9E8] bg-[#16222e]/60 rounded transition-colors"
            >
              <span>Inspect Deployment Topologies</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Core Security Commitments (The 4 Pillars of Data Trust) */}
      <section className="py-20 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Foundational Principles
            </p>
            <h2 className="text-3xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              Our Non-Negotiable Data Boundaries
            </h2>
            <p className="text-base text-[#8DA2B3]">
              Every architecture we engineer adheres to four strict principles designed to satisfy corporate IT security, legal, and operational compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Lock className="w-6 h-6 text-[#65D9E8]" />,
                title: 'Zero Model Training',
                desc: 'Your proprietary technical drawings, customer inquiries, pricing matrices, and invoices are never used to train or fine-tune public foundation models.',
              },
              {
                icon: <Server className="w-6 h-6 text-[#65D9E8]" />,
                title: 'Private Tenant Isolation',
                desc: 'All pipelines and databases run in dedicated, isolated virtual private cloud (VPC) containers or on your on-premise hardware. Zero shared multi-tenant memory.',
              },
              {
                icon: <Eye className="w-6 h-6 text-[#65D9E8]" />,
                title: 'Human-in-the-Loop Bounds',
                desc: 'Automated systems propose draft actions with confidence metrics. Binding commitments (quote dispatch, purchase orders) require explicit human sign-off.',
              },
              {
                icon: <Key className="w-6 h-6 text-[#65D9E8]" />,
                title: 'Full Source Code Ownership',
                desc: 'We engineer using standardized TypeScript, Python, and open API protocols. You retain full IP ownership of custom adapters and models—no vendor lock-in.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-[#16222e] border border-[#43515D]/50 hover:border-[#65D9E8]/60 rounded-xl p-6 space-y-3 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-[#101820] border border-[#43515D]/60 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[#F4F7FA]">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Topologies */}
      <section id="topologies" className="py-20 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              Infrastructure Architecture
            </p>
            <h2 className="text-3xl font-extrabold text-[#F4F7FA] tracking-tight mb-4">
              Supported Deployment Topologies
            </h2>
            <p className="text-base text-[#8DA2B3]">
              We adapt to your corporate infrastructure standards—whether that requires dedicated cloud VPCs, hybrid gateways, or completely air-gapped on-premise clusters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Topology 1 */}
            <div className="bg-[#101820] border border-[#43515D]/60 hover:border-[#65D9E8]/60 rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block mb-2">
                  TOPOLOGY A · CLOUD NATIVE
                </span>
                <h3 className="text-xl font-bold text-[#F4F7FA] mb-3">
                  Dedicated Client VPC
                </h3>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  Deployed entirely inside your enterprise AWS, Microsoft Azure, or Google Cloud Virtual Private Cloud.
                </p>
                <ul className="space-y-2.5 text-xs text-[#8DA2B3]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>Private endpoints with no public internet ingress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>Customer-managed encryption keys (CMEK)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>Direct peering with existing enterprise ERP VPCs</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 bg-[#16222e] border border-[#43515D]/40 rounded text-[11px] text-[#65D9E8] font-mono">
                Best For: Enterprise SaaS & Cloud-First Operations
              </div>
            </div>

            {/* Topology 2 */}
            <div className="bg-[#101820] border border-[#65D9E8]/60 rounded-2xl p-8 space-y-6 flex flex-col justify-between relative shadow-xl shadow-[#65D9E8]/5">
              <div className="absolute top-4 right-4 text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#65D9E8] text-[#101820]">
                High Security
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block mb-2">
                  TOPOLOGY B · ON-PREMISE
                </span>
                <h3 className="text-xl font-bold text-[#F4F7FA] mb-3">
                  Air-Gapped Private Cluster
                </h3>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  Self-contained Docker or Kubernetes deployment running on internal GPU hardware behind corporate firewalls.
                </p>
                <ul className="space-y-2.5 text-xs text-[#8DA2B3]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>Zero outbound internet traffic required for inference</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>Open-weight models (Llama 3, Mistral) hosted locally via vLLM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>Complies with strict defense and high-confidentiality IP policies</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 bg-[#16222e] border border-[#65D9E8]/30 rounded text-[11px] text-[#65D9E8] font-mono">
                Best For: Defense, Precision Fabricators & Regulated Data
              </div>
            </div>

            {/* Topology 3 */}
            <div className="bg-[#101820] border border-[#43515D]/60 hover:border-[#65D9E8]/60 rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block mb-2">
                  TOPOLOGY C · HYBRID GATEWAY
                </span>
                <h3 className="text-xl font-bold text-[#F4F7FA] mb-3">
                  Secure API Tunneling & CDC
                </h3>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed mb-6">
                  Connects on-premise ERP tables to scalable cloud automation microservices via secure mutual TLS tunnels.
                </p>
                <ul className="space-y-2.5 text-xs text-[#8DA2B3]">
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>mTLS encrypted tunnels with token authentication</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>Read-only CDC replicators protecting production master</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>Automatic circuit breaker and queue failovers</span>
                  </li>
                </ul>
              </div>
              <div className="p-3 bg-[#16222e] border border-[#43515D]/40 rounded text-[11px] text-[#65D9E8] font-mono">
                Best For: Multi-Site Manufacturing & Legacy ERPs
              </div>
            </div>
          </div>

          {/* Interactive Topology Visualizer */}
          <div className="mt-16">
            <div className="mb-6">
              <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider block mb-1">
                INTERACTIVE ARCHITECTURE VISUALIZATION
              </span>
              <h3 className="text-xl font-bold text-[#F4F7FA]">
                Inspect Network Isolation & Cryptographic Safeguards
              </h3>
            </div>
            <SecurityTopologyPreview />
          </div>
        </div>
      </section>

      {/* Bilateral NDA & Mutual Confidentiality Section */}
      <section className="py-20 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#16222e] border border-[#65D9E8]/40 rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-[#43515D]/40">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                  MUTUAL NON-DISCLOSURE PROTOCOL
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA]">
                  Confidentiality Prior to Technical Discovery
                </h3>
                <p className="text-sm text-[#8DA2B3] leading-relaxed">
                  We routinely execute bilateral Non-Disclosure Agreements prior to receiving proprietary engineering drawings, parts catalog pricing matrices, or sample customer inquiry archives.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                <button
                  onClick={() => handleNav('contact', '/contact')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-md"
                >
                  <span>Request NDA Execution</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCopyNDAText}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-[#F4F7FA] bg-[#101820] border border-[#43515D] hover:border-[#65D9E8] rounded transition-colors cursor-pointer"
                >
                  {copiedTerms ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#65D9E8]" />
                      <span className="text-[#65D9E8]">Copied Terms</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#8DA2B3]" />
                      <span>Copy Standard Terms</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#8DA2B3]">
              <div>
                <strong className="text-[#F4F7FA] block mb-1">Mutual Legal Protection</strong>
                Bilateral obligations protecting proprietary documentation, customer lists, and pricing models.
              </div>
              <div>
                <strong className="text-[#F4F7FA] block mb-1">Standard 24h Turnaround</strong>
                Legal review and counter-signature executed promptly by authorized company directors.
              </div>
              <div>
                <strong className="text-[#F4F7FA] block mb-1">Direct Counsel Cooperation</strong>
                We happily accept and review client standard corporate enterprise NDA agreements.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security FAQ Section */}
      <section className="py-20 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FA] mb-3">
              Security & Compliance FAQs
            </h2>
            <p className="text-sm text-[#8DA2B3]">
              Addressing IT security, data residency, and compliance questions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                Is our company data used to train foundation models?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                Never. Syntellum Systems enforces a strict zero-retention and zero-training policy. Inferences occur inside private tenant environments or dedicated VPC instances with commercial zero-training agreements.
              </p>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                Can Syntellum deploy entirely within our private corporate network or on-premise servers?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                Yes. We support on-premise containerized deployments (Docker/Kubernetes) utilizing open-weight models (e.g. Llama 3, Mistral) running on internal GPUs without any external outbound network dependencies.
              </p>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                Does Syntellum execute bilateral Non-Disclosure Agreements (NDAs)?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                Yes. We routinely sign bilateral NDAs before reviewing sample engineering drawings, bills of materials, or historical pricing matrices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-20 bg-[#101820]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#F4F7FA] mb-4">
            Have Specific Corporate Security Inquiries?
          </h2>
          <p className="text-base text-[#8DA2B3] mb-8 max-w-2xl mx-auto">
            Our engineering desk will review your architectural constraints, compliance standards, and IT security requirements.
          </p>
          <button
            onClick={() => handleNav('contact', '/contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-lg"
          >
            <span>CONTACT ENGINEERING & LEGAL</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
