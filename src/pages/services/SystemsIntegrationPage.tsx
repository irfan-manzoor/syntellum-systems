import React from 'react';
import {
  Network,
  Server,
  Database,
  ArrowRight,
  ArrowUpRight,
  Check,
  HelpCircle,
  ShieldCheck,
  Activity,
  Layers,
  Lock
} from 'lucide-react';
import { Page } from '../../types';
import { SEO } from '../../components/SEO';

interface CapabilityPageProps {
  setCurrentPage: (page: Page) => void;
}

export const SystemsIntegrationPage: React.FC<CapabilityPageProps> = ({ setCurrentPage }) => {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Systems Integration', url: '/services/systems-integration' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Enterprise Systems Integration & ERP Connectivity',
    'serviceType': 'Systems Integration',
    'provider': {
      '@type': 'Organization',
      'name': 'Syntellum Systems',
      'url': 'https://syntellum.si/',
      'logo': 'https://syntellum.si/assets/images/hero_enterprise_operations_1792436542613.jpg'
    },
    'description': 'Connect legacy ERPs, CRMs, warehouse databases, and cloud platforms with robust API middleware, event queues, and bidirectional sync.',
    'areaServed': ['Pakistan', 'International']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can you connect to on-premise legacy databases without modern REST APIs?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We build secure containerized middleware adapters that interface with legacy relational databases (SQL Server, Oracle, DB2, PostgreSQL) via read-only views, change data capture (CDC), or transactional queues without altering core schema.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How do you prevent data loss during network disruptions?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'All integration pipelines are engineered with transactional idempotency, persistent message queues (Redis/RabbitMQ/Kafka), and dead-letter queue (DLQ) retry policies, ensuring zero dropped transactions.'
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="Enterprise Systems Integration & ERP Connectivity | Syntellum Systems"
        description="Connect legacy ERPs, CRMs, warehouse databases, and cloud platforms with robust API middleware, event queues, and bidirectional sync."
        canonical="https://syntellum.si/services/systems-integration"
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
              Systems Integration
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="py-20 lg:py-24 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            Core Capability · Pillar 03
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            Enterprise Systems Integration & ERP Connectivity.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            Bridge disparate enterprise software, on-premise ERPs, cloud platforms, and modern automation pipelines into a cohesive, real-time operational network.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-md"
            >
              <span>Discuss Systems Integration</span>
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

      {/* Section 1: The Integration Challenge */}
      <section className="py-20 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FA]">
                Connecting the Enterprise Fabric Without Disruptive Migrations
              </h2>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                Core enterprise systems (SAP, Oracle, Microsoft Dynamics, bespoke legacy databases) represent decades of operational investment. Tearing them out is financially hazardous and operationally reckless.
              </p>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                Syntellum Systems engineers connective tissue. We develop robust API middleware, event brokers, and webhook gateways that synchronize data bi-directionally between your legacy systems and modern automation tools. You gain automated workflows and unified reporting today without disturbing core operations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#16222e] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs font-bold text-[#65D9E8] uppercase tracking-wider mb-1">
                    Zero Disruption
                  </div>
                  <p className="text-xs text-[#8DA2B3]">
                    Enhances existing infrastructure without requiring expensive core platform replacements.
                  </p>
                </div>
                <div className="bg-[#16222e] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs font-bold text-[#65D9E8] uppercase tracking-wider mb-1">
                    Fault-Tolerant Queues
                  </div>
                  <p className="text-xs text-[#8DA2B3]">
                    Persistent message queues guarantee zero transaction loss during downstream network downtime.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#16222e] border border-[#43515D]/60 rounded-2xl p-8 space-y-4">
              <h3 className="text-base font-bold text-[#F4F7FA] border-b border-[#43515D]/40 pb-3 flex items-center gap-2">
                <Network className="w-5 h-5 text-[#65D9E8]" />
                Integration Capabilities
              </h3>
              <ul className="space-y-3">
                {[
                  'Bespoke API gateways & middleware adapters (REST, GraphQL, gRPC)',
                  'Connectors for SAP, NetSuite, Dynamics 365, and proprietary databases',
                  'Asynchronous event queues (RabbitMQ, Kafka, Redis) with dead-letter recovery',
                  'Change Data Capture (CDC) pipelines for real-time warehouse replication',
                  'Audited security logging and end-to-end transaction tracing'
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

      {/* Section 2: FAQ */}
      <section className="py-20 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FA] mb-3">
              Frequently Asked Questions: Systems Integration
            </h2>
            <p className="text-sm text-[#8DA2B3]">
              Technical inquiries regarding middleware, ERP bridges, and data security.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                Can you connect to on-premise legacy databases without modern REST APIs?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                Yes. We build secure containerized middleware adapters that interface with legacy relational databases (SQL Server, Oracle, DB2, PostgreSQL) via read-only views, change data capture (CDC), or transactional queues without altering core schema.
              </p>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                How do you prevent data loss during network disruptions?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                All integration pipelines are engineered with transactional idempotency, persistent message queues (Redis/RabbitMQ/Kafka), and dead-letter queue (DLQ) retry policies, ensuring zero dropped transactions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-20 bg-[#101820]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#F4F7FA] mb-4">
            Connect Your Operational Infrastructure
          </h2>
          <p className="text-base text-[#8DA2B3] mb-8 max-w-2xl mx-auto">
            Discuss your application topology with an enterprise integration engineer.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-lg"
          >
            <span>DISCUSS AN INTEGRATION</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
