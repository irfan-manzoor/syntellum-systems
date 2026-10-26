import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Network, 
  Calendar, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  Layers,
  Cpu
} from 'lucide-react';
import { VisualDocumentPreview } from './VisualDocumentPreview';
import { ArchitectureExplorer } from './ArchitectureExplorer';
import { InteractiveRoadmap } from './InteractiveRoadmap';
import { SecurityTopologyPreview } from './SecurityTopologyPreview';

type StudioTab = 'workbench' | 'architecture' | 'roadmap' | 'security';

interface InteractiveStudioProps {
  initialTab?: StudioTab;
  onNavigateToContact?: (contextSummary?: string) => void;
}

export const InteractiveStudio: React.FC<InteractiveStudioProps> = ({ 
  initialTab = 'workbench',
  onNavigateToContact
}) => {
  const [activeTab, setActiveTab] = useState<StudioTab>(initialTab);

  // Sync with window hash if present (e.g. #workbench, #architecture, #roadmap, #security)
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['workbench', 'visual-workbench'].includes(hash)) {
        setActiveTab('workbench');
      } else if (['architecture', 'architecture-explorer'].includes(hash)) {
        setActiveTab('architecture');
      } else if (['roadmap', 'implementation-roadmap'].includes(hash)) {
        setActiveTab('roadmap');
      } else if (['security', 'security-topology'].includes(hash)) {
        setActiveTab('security');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const studioTabs = [
    {
      id: 'workbench' as StudioTab,
      label: 'Document Intelligence',
      shortLabel: 'Document AI',
      icon: <FileText className="w-4 h-4" />,
      tag: 'OCR & Bounding Boxes',
      description: 'Simulate layout extraction, bounding box localization, and deterministic confidence gates on technical documents.'
    },
    {
      id: 'architecture' as StudioTab,
      label: 'Systems Architecture',
      shortLabel: 'Architecture',
      icon: <Network className="w-4 h-4" />,
      tag: 'ERP & Cloud Sync',
      description: 'Inspect end-to-end transaction flows, webhook bridges, and bi-directional ERP integration pipelines.'
    },
    {
      id: 'roadmap' as StudioTab,
      label: 'Implementation Roadmap',
      shortLabel: 'Roadmap',
      icon: <Calendar className="w-4 h-4" />,
      tag: '4-Stage Staged Rollout',
      description: 'Explore the 4-phase engineering lifecycle with reviewable deliverables, Go/No-Go gates, and resource plans.'
    },
    {
      id: 'security' as StudioTab,
      label: 'Zero-Trust VPC Security',
      shortLabel: 'Security & VPC',
      icon: <ShieldCheck className="w-4 h-4" />,
      tag: 'Air-Gapped & Ephemeral',
      description: 'Verify network boundaries, mTLS 1.3 encryption handshakes, and strict zero-data-retention guarantees.'
    }
  ];

  return (
    <div id="interactive-studio" className="relative scroll-mt-24">
      {/* Studio Master Nav Tab Bar */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#16222e] border border-[#43515D]/50 rounded-2xl max-w-4xl mx-auto shadow-xl">
          {studioTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  window.history.replaceState(null, '', `#${tab.id}`);
                }}
                className={`flex-1 min-w-[140px] sm:min-w-[180px] py-3 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#65D9E8] text-[#101820] font-bold shadow-lg shadow-[#65D9E8]/20'
                    : 'text-[#8DA2B3] hover:text-[#F4F7FA] hover:bg-[#1a2838]'
                }`}
              >
                <span className={isActive ? 'text-[#101820]' : 'text-[#65D9E8]'}>
                  {tab.icon}
                </span>
                <span className="hidden md:inline">{tab.label}</span>
                <span className="md:hidden">{tab.shortLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Context Explanation Banner */}
        <div className="mt-4 text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm text-[#8DA2B3]">
            {studioTabs.find(t => t.id === activeTab)?.description}
          </p>
        </div>
      </div>

      {/* Render Active Interactive Tool */}
      <div className="transition-all duration-300">
        {activeTab === 'workbench' && (
          <div className="animate-in fade-in duration-300">
            <VisualDocumentPreview />
          </div>
        )}

        {activeTab === 'architecture' && (
          <div className="animate-in fade-in duration-300">
            <ArchitectureExplorer />
          </div>
        )}

        {activeTab === 'roadmap' && (
          <div className="animate-in fade-in duration-300">
            <InteractiveRoadmap
              onSelectPhase={(phaseTitle) => {
                if (onNavigateToContact) {
                  onNavigateToContact(`Roadmap Phase Interest: ${phaseTitle}`);
                }
              }}
            />
          </div>
        )}

        {activeTab === 'security' && (
          <div className="animate-in fade-in duration-300">
            <SecurityTopologyPreview />
          </div>
        )}
      </div>
    </div>
  );
};
