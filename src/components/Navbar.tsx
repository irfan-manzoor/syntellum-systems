import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, ChevronDown } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const navLinks: { label: string; page: Page; path: string }[] = [
    { label: 'Home', page: 'home', path: '/' },
    { label: 'About', page: 'about', path: '/about' },
    { label: 'Services', page: 'services', path: '/services' },
    { label: 'Industries', page: 'industries', path: '/industries' },
    { label: 'Our Approach', page: 'approach', path: '/approach' },
    { label: 'Security & Trust', page: 'security', path: '/security' },
    { label: 'Contact', page: 'contact', path: '/contact' },
  ];

  const capabilitySublinks: { label: string; page: Page; path: string }[] = [
    { label: 'AI Engineering & Applied LLMs', page: 'service-ai-engineering', path: '/services/ai-engineering' },
    { label: 'AI Workflow Automation', page: 'service-ai-workflow-automation', path: '/services/ai-workflow-automation' },
    { label: 'Document Processing Automation', page: 'service-document-processing-automation', path: '/services/document-processing-automation' },
    { label: 'RFQ & Quotation Automation', page: 'service-rfq-quotation-automation', path: '/services/rfq-quotation-automation' },
    { label: 'Enterprise Systems Integration', page: 'service-systems-integration', path: '/services/systems-integration' },
  ];

  const handleNavClick = (page: Page, path: string) => {
    setCurrentPage(page);
    window.history.pushState(null, '', path);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#101820]/95 backdrop-blur-md border-b border-[#43515D]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          {/* Zone 1: Brand Wordmark (SYNTELLUM / SYSTEMS) */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home', '/');
            }}
            className="flex flex-col items-start text-left shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65D9E8] rounded px-1"
            aria-label="Syntellum Systems Home"
          >
            <span className="font-['Orbitron',sans-serif] text-xl sm:text-2xl font-black tracking-[0.14em] text-[#F4F7FA] group-hover:text-[#65D9E8] transition-colors leading-none">
              SYNTELLUM
            </span>
            <span className="font-['Orbitron',sans-serif] text-[9px] sm:text-[10px] font-semibold text-[#8DA2B3] tracking-[0.42em] uppercase leading-tight pt-1.5 group-hover:text-[#65D9E8]/90 transition-colors">
              SYSTEMS
            </span>
          </a>

          {/* Zone 2: Semantic Crawlable Navigation Links */}
          <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page || (link.page === 'services' && currentPage.startsWith('service-'));
              
              if (link.page === 'services') {
                return (
                  <div
                    key={link.page}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <a
                      href={link.path}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.page, link.path);
                      }}
                      className={`relative py-1 inline-flex items-center gap-1 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#65D9E8] rounded ${
                        isActive
                          ? 'text-[#65D9E8] font-semibold'
                          : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3.5 h-3.5" />
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#65D9E8] rounded-full" />
                      )}
                    </a>

                    {/* Capabilities Flyout Menu */}
                    {servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-1 w-72 bg-[#16222e] border border-[#43515D] rounded-xl shadow-2xl p-2 z-50">
                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#65D9E8] px-3 py-1.5">
                          Capabilities & Solutions
                        </div>
                        {capabilitySublinks.map((sub) => (
                          <a
                            key={sub.path}
                            href={sub.path}
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(sub.page, sub.path);
                            }}
                            className={`block px-3 py-2 text-xs rounded-lg transition-colors ${
                              currentPage === sub.page
                                ? 'bg-[#101820] text-[#65D9E8] font-semibold'
                                : 'text-[#8DA2B3] hover:text-[#F4F7FA] hover:bg-[#101820]'
                            }`}
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.page}
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.page, link.path);
                  }}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#65D9E8] rounded ${
                    isActive
                      ? 'text-[#65D9E8] font-semibold'
                      : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#65D9E8] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact', '/contact');
              }}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#65D9E8] focus-visible:ring-offset-[#101820] shadow-sm cursor-pointer"
            >
              <span>DISCUSS A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact', '/contact');
              }}
              className="sm:hidden px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] rounded"
            >
              DISCUSS
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#8DA2B3] hover:text-[#F4F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65D9E8] rounded"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101820] border-b border-[#43515D]/50 px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.page;
            return (
              <a
                key={link.page}
                href={link.path}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.page, link.path);
                }}
                className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded transition-colors ${
                  isActive
                    ? 'bg-[#1c2a38] text-[#65D9E8] font-semibold'
                    : 'text-[#F4F7FA] hover:bg-[#16222e]'
                }`}
              >
                {link.label}
              </a>
            );
          })}

          <div className="pt-2 pb-1 px-4 text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
            Capabilities
          </div>
          {capabilitySublinks.map((sub) => (
            <a
              key={sub.path}
              href={sub.path}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(sub.page, sub.path);
              }}
              className="block w-full text-left px-4 py-1.5 text-xs text-[#8DA2B3] hover:text-[#F4F7FA] hover:bg-[#16222e] rounded"
            >
              {sub.label}
            </a>
          ))}

          <div className="pt-3 px-4">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact', '/contact');
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors"
            >
              <span>DISCUSS A PROJECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
