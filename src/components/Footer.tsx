import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Page } from '../types';
import { PrivacyModal } from './PrivacyModal';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleNav = (page: Page, path: string) => {
    setCurrentPage(page);
    window.history.pushState(null, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-[#101820] border-t border-[#43515D]/50 text-[#8DA2B3]">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Column 1: Brand & Positioning */}
            <div className="lg:col-span-4 space-y-4">
              <a
                href="/"
                onClick={(e) => { e.preventDefault(); handleNav('home', '/'); }}
                className="flex flex-col items-start group"
              >
                <span className="font-['Orbitron',sans-serif] text-2xl font-black tracking-[0.14em] text-[#F4F7FA] group-hover:text-[#65D9E8] transition-colors">
                  SYNTELLUM
                </span>
                <span className="font-['Orbitron',sans-serif] text-xs font-semibold text-[#8DA2B3] tracking-[0.42em] uppercase pt-1">
                  SYSTEMS
                </span>
              </a>
              <p className="text-sm font-semibold text-[#65D9E8]">
                Put AI to work in your operations.
              </p>
              <p className="text-sm text-[#8DA2B3] leading-relaxed">
                An engineering-led enterprise technology company applying practical AI, intelligent workflow automation, and systems integration to high-stakes business operations.
              </p>
              <div className="pt-2 text-xs text-[#8DA2B3]/80">
                <span className="font-semibold text-[#F4F7FA]">Delivery Reach:</span> Serving enterprise clients and engineering partners across Pakistan and international markets.
              </div>
            </div>

            {/* Column 2: Navigation Links */}
            <div className="lg:col-span-2 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F4F7FA]">
                Navigation
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/"
                    onClick={(e) => { e.preventDefault(); handleNav('home', '/'); }}
                    className="hover:text-[#65D9E8] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    onClick={(e) => { e.preventDefault(); handleNav('about', '/about'); }}
                    className="hover:text-[#65D9E8] transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    onClick={(e) => { e.preventDefault(); handleNav('services', '/services'); }}
                    className="hover:text-[#65D9E8] transition-colors"
                  >
                    Services Overview
                  </a>
                </li>
                <li>
                  <a
                    href="/industries"
                    onClick={(e) => { e.preventDefault(); handleNav('industries', '/industries'); }}
                    className="hover:text-[#65D9E8] transition-colors"
                  >
                    Industries & Focus
                  </a>
                </li>
                <li>
                  <a
                    href="/approach"
                    onClick={(e) => { e.preventDefault(); handleNav('approach', '/approach'); }}
                    className="hover:text-[#65D9E8] transition-colors"
                  >
                    Our Approach
                  </a>
                </li>
                <li>
                  <a
                    href="/security"
                    onClick={(e) => { e.preventDefault(); handleNav('security', '/security'); }}
                    className="hover:text-[#65D9E8] transition-colors"
                  >
                    Security & Trust
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    onClick={(e) => { e.preventDefault(); handleNav('contact', '/contact'); }}
                    className="hover:text-[#65D9E8] transition-colors"
                  >
                    Contact & Inquiries
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Dedicated Capabilities (Crawlable SEO Routes) */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F4F7FA]">
                Capabilities & Solutions
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="/services/ai-engineering"
                    onClick={(e) => { e.preventDefault(); handleNav('service-ai-engineering', '/services/ai-engineering'); }}
                    className="text-left hover:text-[#65D9E8] transition-colors block"
                  >
                    AI Engineering & Applied LLMs
                  </a>
                </li>
                <li>
                  <a
                    href="/services/ai-workflow-automation"
                    onClick={(e) => { e.preventDefault(); handleNav('service-ai-workflow-automation', '/services/ai-workflow-automation'); }}
                    className="text-left hover:text-[#65D9E8] transition-colors block"
                  >
                    AI Workflow Automation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/document-processing-automation"
                    onClick={(e) => { e.preventDefault(); handleNav('service-document-processing-automation', '/services/document-processing-automation'); }}
                    className="text-left hover:text-[#65D9E8] transition-colors block"
                  >
                    Document Processing Automation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/rfq-quotation-automation"
                    onClick={(e) => { e.preventDefault(); handleNav('service-rfq-quotation-automation', '/services/rfq-quotation-automation'); }}
                    className="text-left hover:text-[#65D9E8] transition-colors block"
                  >
                    RFQ & Quotation Workflow Automation
                  </a>
                </li>
                <li>
                  <a
                    href="/services/systems-integration"
                    onClick={(e) => { e.preventDefault(); handleNav('service-systems-integration', '/services/systems-integration'); }}
                    className="text-left hover:text-[#65D9E8] transition-colors block"
                  >
                    Enterprise Systems Integration
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Engagement CTA & Contact */}
            <div className="lg:col-span-2 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-[#F4F7FA]">
                Inquiries
              </p>
              <p className="text-xs text-[#8DA2B3] leading-relaxed">
                Have an operational workflow bottleneck to solve?
              </p>
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); handleNav('contact', '/contact'); }}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors whitespace-nowrap cursor-pointer"
              >
                <span>Discuss Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <div className="pt-2 text-xs space-y-1">
                <div>
                  <a
                    href="mailto:info@syntellum.si"
                    className="font-mono text-[#65D9E8] hover:underline"
                  >
                    info@syntellum.si
                  </a>
                </div>
                <div>
                  <a
                    href="https://syntellum.si/"
                    className="font-mono text-[#8DA2B3] hover:text-[#65D9E8] hover:underline"
                  >
                    syntellum.si
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-14 pt-8 border-t border-[#43515D]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>
              &copy; {currentYear} Syntellum Systems. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-[#65D9E8] transition-colors cursor-pointer"
              >
                Privacy & Data Governance
              </button>
              <span>·</span>
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); handleNav('contact', '/contact'); }}
                className="hover:text-[#65D9E8] transition-colors cursor-pointer"
              >
                Commercial Inquiries
              </a>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};
