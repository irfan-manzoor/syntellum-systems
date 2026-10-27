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
                Turn Incoming RFQs into ERP-Ready Quotes — in Minutes, Not Days.
              </p>
              <p className="text-sm text-[#8DA2B3] leading-relaxed">
                An engineering-led enterprise technology company applying practical AI, intelligent workflow automation, and systems integration to high-stakes business operations.
              </p>
              <div className="pt-2 text-xs text-[#8DA2B3]/90 space-y-1">
                <div>
                  <span className="font-semibold text-[#F4F7FA]">Operational Base:</span> Headquartered in Pakistan
                </div>
                <div>
                  <span className="font-semibold text-[#F4F7FA]">Delivery Reach:</span> Serving enterprise clients and engineering partners across Pakistan and international markets (EU, UK, US, Middle East).
                </div>
              </div>

              {/* Social Media Channels */}
              <div className="pt-3 flex items-center gap-3">
                <a
                  href="https://linkedin.com/company/syntellum-systems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#16222e] border border-[#43515D]/60 hover:border-[#65D9E8] hover:text-[#65D9E8] text-[#8DA2B3] flex items-center justify-center transition-all"
                  aria-label="Syntellum Systems on LinkedIn"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 1.64 1.64 1.64 1.64 0 0 0-1.64-1.64z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com/syntellum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#16222e] border border-[#43515D]/60 hover:border-[#65D9E8] hover:text-[#65D9E8] text-[#8DA2B3] flex items-center justify-center transition-all"
                  aria-label="Syntellum Systems on X"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/syntellumsystems"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-[#16222e] border border-[#43515D]/60 hover:border-[#65D9E8] hover:text-[#65D9E8] text-[#8DA2B3] flex items-center justify-center transition-all"
                  aria-label="Syntellum Systems on Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
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

          {/* Enterprise Trust & Governance Strip */}
          <div className="mt-12 pt-6 border-t border-[#43515D]/40 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#8DA2B3]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#65D9E8] shrink-0" />
              <span>Private VPC / On-Premise Execution</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#65D9E8] shrink-0" />
              <span>Zero Retention & Zero Model Training</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#65D9E8] shrink-0" />
              <span>Bilateral NDA Executed First</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#65D9E8] shrink-0" />
              <span>Deterministic Human-in-the-Loop Review</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-6 border-t border-[#43515D]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
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
                href="/security"
                onClick={(e) => { e.preventDefault(); handleNav('security', '/security'); }}
                className="hover:text-[#65D9E8] transition-colors cursor-pointer"
              >
                Security Dossier
              </a>
              <span>·</span>
              <a
                href="/contact"
                onClick={(e) => { e.preventDefault(); handleNav('contact', '/contact'); }}
                className="hover:text-[#65D9E8] transition-colors cursor-pointer"
              >
                Commercial Discovery Desk
              </a>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </>
  );
};
