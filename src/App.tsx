import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Page } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { ApproachPage } from './pages/ApproachPage';
import { ContactPage } from './pages/ContactPage';
import { SecurityDossierPage } from './pages/SecurityDossierPage';

// Specialized Capability Pages
import { AIEngineeringPage } from './pages/services/AIEngineeringPage';
import { WorkflowAutomationPage } from './pages/services/WorkflowAutomationPage';
import { DocumentProcessingPage } from './pages/services/DocumentProcessingPage';
import { RFQQuotationPage } from './pages/services/RFQQuotationPage';
import { SystemsIntegrationPage } from './pages/services/SystemsIntegrationPage';

const pathToPageMap: Record<string, Page> = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/services/ai-engineering': 'service-ai-engineering',
  '/services/ai-workflow-automation': 'service-ai-workflow-automation',
  '/services/document-processing-automation': 'service-document-processing-automation',
  '/services/rfq-quotation-automation': 'service-rfq-quotation-automation',
  '/services/systems-integration': 'service-systems-integration',
  '/industries': 'industries',
  '/approach': 'approach',
  '/security': 'security',
  '/contact': 'contact',
};

const pageToPathMap: Record<Page, string> = {
  'home': '/',
  'about': '/about',
  'services': '/services',
  'service-ai-engineering': '/services/ai-engineering',
  'service-ai-workflow-automation': '/services/ai-workflow-automation',
  'service-document-processing-automation': '/services/document-processing-automation',
  'service-rfq-quotation-automation': '/services/rfq-quotation-automation',
  'service-systems-integration': '/services/systems-integration',
  'industries': '/industries',
  'approach': '/approach',
  'security': '/security',
  'contact': '/contact',
};

function resolveCurrentRoute(): Page {
  const path = window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  if (pathToPageMap[path]) {
    return pathToPageMap[path];
  }

  // Backwards compatibility with hash URLs (#contact, #security, #about, etc.)
  const hash = window.location.hash.toLowerCase().replace('#', '') as Page;
  if (['home', 'about', 'services', 'industries', 'approach', 'security', 'contact'].includes(hash)) {
    return hash;
  }

  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(resolveCurrentRoute);
  const [prefilledChallenge, setPrefilledChallenge] = useState<string>('');

  // Sync state with browser back/forward and hash changes
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(resolveCurrentRoute());
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const navigateTo = (page: Page, scopingNote?: string) => {
    setCurrentPage(page);
    if (scopingNote) {
      setPrefilledChallenge(scopingNote);
    }
    const targetPath = pageToPathMap[page] || '/';
    if (window.location.pathname !== targetPath) {
      window.history.pushState(null, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#101820] text-[#F4F7FA] flex flex-col font-sans selection:bg-[#65D9E8] selection:text-[#101820]">
      {/* Top Navigation Bar with crawlable semantic links */}
      <Navbar currentPage={currentPage} setCurrentPage={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentPage === 'home' && <HomePage setCurrentPage={navigateTo} />}
            {currentPage === 'about' && <AboutPage setCurrentPage={navigateTo} />}
            {currentPage === 'services' && <ServicesPage setCurrentPage={navigateTo} />}
            {currentPage === 'service-ai-engineering' && <AIEngineeringPage setCurrentPage={navigateTo} />}
            {currentPage === 'service-ai-workflow-automation' && <WorkflowAutomationPage setCurrentPage={navigateTo} />}
            {currentPage === 'service-document-processing-automation' && <DocumentProcessingPage setCurrentPage={navigateTo} />}
            {currentPage === 'service-rfq-quotation-automation' && <RFQQuotationPage setCurrentPage={navigateTo} />}
            {currentPage === 'service-systems-integration' && <SystemsIntegrationPage setCurrentPage={navigateTo} />}
            {currentPage === 'industries' && <IndustriesPage setCurrentPage={navigateTo} />}
            {currentPage === 'approach' && <ApproachPage setCurrentPage={navigateTo} />}
            {currentPage === 'security' && <SecurityDossierPage setCurrentPage={navigateTo} />}
            {currentPage === 'contact' && (
              <ContactPage
                setCurrentPage={navigateTo}
                prefilledChallenge={prefilledChallenge}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Footer with crawlable semantic links */}
      <Footer setCurrentPage={navigateTo} />
    </div>
  );
}
