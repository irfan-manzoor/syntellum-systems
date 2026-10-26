import React from 'react';
import {
  FileCheck2,
  Database,
  ArrowRight,
  ArrowUpRight,
  Search,
  Check,
  HelpCircle,
  FileText,
  Layers,
  ShieldCheck
} from 'lucide-react';
import { Page } from '../../types';
import { SEO } from '../../components/SEO';
import { VisualDocumentPreview } from '../../components/VisualDocumentPreview';

interface CapabilityPageProps {
  setCurrentPage: (page: Page) => void;
}

export const DocumentProcessingPage: React.FC<CapabilityPageProps> = ({ setCurrentPage }) => {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Document Processing Automation', url: '/services/document-processing-automation' },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': 'Document Processing Automation & Technical Extraction',
    'serviceType': 'Document Processing Automation',
    'provider': {
      '@type': 'Organization',
      'name': 'Syntellum Systems',
      'url': 'https://syntellum.si/',
      'logo': 'https://syntellum.si/assets/images/hero_enterprise_operations_1792436542613.jpg'
    },
    'description': 'Extract structured data from unstructured technical PDFs, spec sheets, invoices, and compliance documentation with OCR and layout-aware models.',
    'areaServed': ['Pakistan', 'International']
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': 'Can the system extract tables spanning across multiple PDF pages?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. We employ layout-aware vision models and heuristic table boundary parsers capable of linking continuous line items and headers across multi-page technical specification documents.'
        }
      },
      {
        '@type': 'Question',
        'name': 'How are scanned or low-resolution documents handled?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'We pre-process incoming documents using computer vision image enhancement filters (dewarping, contrast normalization, noise removal) before executing OCR, ensuring high character recognition even on faxed or scanned copies.'
        }
      }
    ]
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="Document Processing Automation & Extraction | Syntellum Systems"
        description="Extract structured data from unstructured technical PDFs, spec sheets, invoices, and compliance documentation with OCR and layout-aware models."
        canonical="https://syntellum.si/services/document-processing-automation"
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
              Document Processing Automation
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="py-20 lg:py-24 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            Specialized Capability
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            Automated Document Processing & Data Extraction.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            Transform high volumes of non-standard technical PDFs, specification sheets, bills of materials (BOM), and invoices into validated, schema-compliant database records.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => handleNav('contact')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-md"
            >
              <span>Automate Document Intake</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => handleNav('services')}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F4F7FA] border border-[#43515D] hover:border-[#65D9E8] hover:text-[#65D9E8] bg-[#16222e]/60 rounded transition-colors"
            >
              <span>View All Capabilities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Section 1: The Problem & Solution */}
      <section className="py-20 bg-[#101820] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FA]">
                Beyond Standard OCR: Context-Aware Document Intelligence
              </h2>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                Basic optical character recognition (OCR) tools convert pixels into text strings, but they fail when confronted with multi-column layouts, nested tables, irregular item descriptions, or technical drawings.
              </p>
              <p className="text-sm sm:text-base text-[#8DA2B3] leading-relaxed">
                Syntellum Systems engineers custom multi-modal document pipelines. We combine vision-based layout analysis with semantic entity extraction models to recognize table structures, normalize engineering units of measure, identify line item part numbers, and cross-check records against your product catalog in real time.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-[#16222e] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs font-bold text-[#65D9E8] uppercase tracking-wider mb-1">
                    Multi-Page Table Stitching
                  </div>
                  <p className="text-xs text-[#8DA2B3]">
                    Seamlessly joins split rows and headers across long technical bills of materials.
                  </p>
                </div>
                <div className="bg-[#16222e] border border-[#43515D]/40 p-4 rounded-lg">
                  <div className="text-xs font-bold text-[#65D9E8] uppercase tracking-wider mb-1">
                    Automatic Schema Mapping
                  </div>
                  <p className="text-xs text-[#8DA2B3]">
                    Converts unstructured documents directly into your standard ERP JSON or SQL tables.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#16222e] border border-[#43515D]/60 rounded-2xl p-8 space-y-4">
              <h3 className="text-base font-bold text-[#F4F7FA] border-b border-[#43515D]/40 pb-3 flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-[#65D9E8]" />
                Supported Document Types
              </h3>
              <ul className="space-y-3">
                {[
                  'Technical Requests for Quotation (RFQs) and specifications',
                  'Bills of Materials (BOM) and parts catalog schedules',
                  'Commercial vendor invoices and supplier packing slips',
                  'Engineering drawings, tolerances, and quality certifications',
                  'Material Test Reports (MTR) and compliance certificates'
                ].map((doc, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#8DA2B3]">
                    <Check className="w-4 h-4 text-[#65D9E8] shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Visual Extraction Workbench */}
      <section className="py-20 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
              LIVE EXTRACTION PREVIEW
            </p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] tracking-tight mb-3">
              Interactive Document Extraction Workbench
            </h2>
            <p className="text-sm sm:text-base text-[#8DA2B3]">
              Test our extraction engine across engineering RFQs, supplier tax invoices, and multi-level bills of materials. Observe real-time bounding box tracking, confidence scores, and structured JSON generation.
            </p>
          </div>
          <VisualDocumentPreview />
        </div>
      </section>

      {/* Section 2: FAQ */}
      <section className="py-20 bg-[#16222e] border-b border-[#43515D]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F4F7FA] mb-3">
              Frequently Asked Questions: Document Processing
            </h2>
            <p className="text-sm text-[#8DA2B3]">
              Technical and operational details for document automation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                Can the system extract tables spanning across multiple PDF pages?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                Yes. We employ layout-aware vision models and heuristic table boundary parsers capable of linking continuous line items and headers across multi-page technical specification documents.
              </p>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-6">
              <h3 className="text-base font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#65D9E8]" />
                How are scanned or low-resolution documents handled?
              </h3>
              <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                We pre-process incoming documents using computer vision image enhancement filters (dewarping, contrast normalization, noise removal) before executing OCR, ensuring high character recognition even on faxed or scanned copies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Action CTA */}
      <section className="py-20 bg-[#101820]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-[#F4F7FA] mb-4">
            Evaluate Document Processing on Your Sample Files
          </h2>
          <p className="text-base text-[#8DA2B3] mb-8 max-w-2xl mx-auto">
            Share sanitized sample documents under NDA for an initial parsing feasibility benchmark.
          </p>
          <button
            onClick={() => handleNav('contact')}
            className="inline-flex items-center gap-2 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-lg"
          >
            <span>SUBMIT SAMPLE INQUIRY</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
