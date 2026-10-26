import React from 'react';
import {
  FileCheck2,
  Sliders,
  ArrowRight,
  ArrowUpRight,
  Calculator,
  Check,
  HelpCircle,
  Eye,
  CheckCircle2,
  Factory
} from 'lucide-react';
import { Page } from '../../types';
import { SEO } from '../../components/SEO';

interface CapabilityPageProps {
  setCurrentPage: (page: Page) => void;
}

export const RFQQuotationPage: React.FC<CapabilityPageProps> = ({ setCurrentPage }) => {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'RFQ & Quotation Automation', url: '/services/rfq-quotation-automation' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'RFQ and Quotation Workflow Automation',
    'serviceType': 'RFQ & Quotation Automation',
    'provider': {
      '@type': 'Organization',
      'name': 'Syntellum Systems',
      'url': 'https://syntellum.si/',
      'logo': 'https://syntellum.si/assets/images/hero_enterprise_operations_1792436542613.jpg'
    },
    'description': 'Accelerate intake-to-quote cycles: parse incoming requests for quotation, validate pricing catalogs, and assemble draft quotes for engineering sign-off.',
    'areaServed': ['Pakistan', 'International']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can the quotation system apply customer-specific tier discounts and dynamic margin rules?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We connect the quoting logic directly to your ERP customer matrices, applying contract pricing tiers, volume discounts, freight surcharges, and minimum order margins automatically.'
        }
      },
      {
        '@type': 'Question',
        'name': 'Does the system send quotes to clients autonomously?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'By default, no. We recommend an engineering sign-off checkpoint where an estimator reviews the pre-assembled draft quote with highlighted pricing logic before final customer transmission.'
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="RFQ & Quotation Workflow Automation | Syntellum Systems"
        description="Accelerate intake-to-quote cycles: parse incoming requests for quotation, validate pricing catalogs, and assemble draft quotes for engineering sign-off."
        canonical="https://syntellum.si/services/rfq-quotation-automation"
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
              RFQ & Quotation Automation
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="py-20 lg:py-24 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            Industrial & Commercial Focus
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            RFQ and Quotation Workflow Automation.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            Shorten the distance between incoming customer tenders and signed purchase orders. Automate specification extraction, pricing lookups, and draft quote generation with human engineering oversight.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-md"
            >
              <span>Accelerate Your Quoting</span>
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

      {/* Section 1: The Commercial Challenge */}
      <section className="py-20 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FA]">
                Quote Velocity Wins Contracts in B2B Operations
              </h2>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                Industrial suppliers and precision engineering fabricators lose deals not on price, but on response time. When estimating teams spend three to five days manually transcribing line items, cross-referencing raw material surcharges, and verifying stock levels, competitors who quote in 24 hours win the order.
              </p>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                Our RFQ automation solution ingests incoming tenders, extracts technical line items, checks inventory databases, applies approved contract pricing formulas, and produces an editable draft quotation. Your senior estimators retain 100% control over the final pricing and delivery terms.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#16222e] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs font-bold text-[#65D9E8] uppercase tracking-wider mb-1">
                    70% Faster Turnaround
                  </div>
                  <p className="text-xs text-[#8DA2B3]">
                    Reduces quotation assembly time from days to minutes while eliminating calculation errors.
                  </p>
                </div>
                <div className="bg-[#16222e] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs font-bold text-[#65D9E8] uppercase tracking-wider mb-1">
                    Margin Protection
                  </div>
                  <p className="text-xs text-[#8DA2B3]">
                    Automatically flags minimum margin violations and raw material price fluctuations.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#16222e] border border-[#43515D]/60 rounded-2xl p-8 space-y-4">
              <h3 className="text-base font-bold text-[#F4F7FA] border-b border-[#43515D]/40 pb-3 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#65D9E8]" />
                RFQ Workflow Architecture
              </h3>
              <ul className="space-y-3">
                {[
                  'Automated tender packet ingestion (PDF, XLS, CSV, Email attachments)',
                  'Part number and specification extraction with catalog tolerance matching',
                  'Inventory availability and supplier lead-time verification',
                  'Dynamic contract pricing calculation (tier rates, scrap, freight)',
                  'One-click draft ERP quotation creation with human approval gate'
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#8DA2B3]">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>{step}</span>
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
              Frequently Asked Questions: RFQ Automation
            </h2>
            <p className="text-sm text-[#8DA2B3]">
              Operational details for automated quotation drafting.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                Can the quotation system apply customer-specific tier discounts and dynamic margin rules?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                Yes. We connect the quoting logic directly to your ERP customer matrices, applying contract pricing tiers, volume discounts, freight surcharges, and minimum order margins automatically.
              </p>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                Does the system send quotes to clients autonomously?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                By default, no. We recommend an engineering sign-off checkpoint where an estimator reviews the pre-assembled draft quote with highlighted pricing logic before final customer transmission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-20 bg-[#101820]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#F4F7FA] mb-4">
            Transform Your RFQ Intake Cycle
          </h2>
          <p className="text-base text-[#8DA2B3] mb-8 max-w-2xl mx-auto">
            Discuss your quotation volume and system architecture with our engineering team.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-lg"
          >
            <span>SCHEDULE RFQ DISCOVERY</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
