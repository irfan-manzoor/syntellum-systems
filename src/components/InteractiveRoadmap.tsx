import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Users, 
  FileText, 
  ArrowRight, 
  Zap, 
  Layers, 
  Cpu, 
  Lock,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface RoadmapPhase {
  id: string;
  phaseNumber: string;
  title: string;
  durationStandard: string;
  durationFastTrack: string;
  tagline: string;
  objective: string;
  gate: string;
  deliverables: string[];
  syntellumRoles: string[];
  clientCommitment: string;
  riskMitigation: string;
}

const PHASES: RoadmapPhase[] = [
  {
    id: 'phase-1',
    phaseNumber: 'PHASE 01',
    title: 'Discovery & Feasibility Audit',
    durationStandard: 'Weeks 1–3',
    durationFastTrack: 'Weeks 1–2',
    tagline: 'Requirements verification, schema mapping, and deterministic feasibility test.',
    objective: 'Audit existing manual bottlenecks, analyze representative document samples (PDFs, drawings, tables), and establish mathematical acceptance criteria.',
    gate: 'Go/No-Go Gate: Feasibility Benchmark Report (>90% extraction confidence on pilot sample) & Stakeholder ROI sign-off.',
    deliverables: [
      'Comprehensive Requirements & Feasibility Report',
      'Target System Schema & JSON Payload Contracts',
      'Data Privacy & Private VPC Deployment Specification',
      'Phase 2 Prototype Project Plan & Acceptance Criteria'
    ],
    syntellumRoles: ['Principal Solutions Architect', 'Lead ML Systems Engineer'],
    clientCommitment: '2–3 hours/week (Process walk-through & sample data review)',
    riskMitigation: 'Fixed-scope assessment prevents unexpected engineering drift.'
  },
  {
    id: 'phase-2',
    phaseNumber: 'PHASE 02',
    title: 'Isolated Sandbox Prototype',
    durationStandard: 'Weeks 4–6',
    durationFastTrack: 'Weeks 3–4',
    tagline: 'Working pipeline prototype tested against historical records in an isolated environment.',
    objective: 'Deploy a containerized pilot instance to parse historical transaction batches, calibrate layout OCR algorithms, and tune human-in-the-loop confidence thresholds.',
    gate: 'Go/No-Go Gate: Pilot precision validation meeting agreed accuracy benchmarks (>95% automated accuracy with zero hallucination).',
    deliverables: [
      'Interactive Working Sandbox Instance',
      'Historical Benchmark Validation Report (500+ records)',
      'Tolerance & Edge-Case Exception Log',
      'Human-in-the-Loop Operator Workbench Prototype'
    ],
    syntellumRoles: ['Lead ML Engineer', 'Full-Stack Integration Engineer'],
    clientCommitment: '1–2 hours/week (Validation review with key operators)',
    riskMitigation: 'Isolated sandbox uses zero production writes—risk-free testing.'
  },
  {
    id: 'phase-3',
    phaseNumber: 'PHASE 03',
    title: 'VPC Deployment & ERP Integration',
    durationStandard: 'Weeks 7–10',
    durationFastTrack: 'Weeks 5–7',
    tagline: 'Private tenant infrastructure, bidirectional ERP connectors, and operator verification.',
    objective: 'Deploy the pipeline into your private cloud VPC or on-premise hardware, establish secure mTLS API bridges to your ERP (SAP, NetSuite, Dynamics), and configure operator review queues.',
    gate: 'Go/No-Go Gate: IT Security Audit Sign-Off (Zero retention, SAML/SSO access, mTLS verification) & Staging End-to-End Test.',
    deliverables: [
      'Dedicated Private Cloud VPC or On-Premise Cluster',
      'Bidirectional ERP Adapters & Webhook Event Bridges',
      'Production-Ready Human-in-the-Loop Operator Interface',
      'Security Compliance Audit Dossier (SOC2/GDPR aligned)'
    ],
    syntellumRoles: ['Cloud Infrastructure Architect', 'Backend Integration Engineer', 'QA Specialist'],
    clientCommitment: '2–3 hours/week (IT network peering & ERP staging verification)',
    riskMitigation: 'Read-only ERP staging mode with rollback snapshot guarantees.'
  },
  {
    id: 'phase-4',
    phaseNumber: 'PHASE 04',
    title: 'Production Cutover & Scaled Rollout',
    durationStandard: 'Week 11 onward',
    durationFastTrack: 'Week 8 onward',
    tagline: 'Full production traffic, automated monitoring, SLA support, and complete IP handover.',
    objective: 'Execute zero-downtime blue/green cutover, train internal operator staff, activate 24/7 automated telemetry monitoring, and transfer complete source code IP.',
    gate: 'Acceptance: Formal production acceptance sign-off, SLA warranty activation, and source code repository transfer.',
    deliverables: [
      'Live Production System with Blue/Green Failover',
      'Complete Source Code IP & CI/CD Pipeline Transfer',
      'Operational Runbooks & Administrator Training Manual',
      'Dedicated SLA Support & Telemetry Dashboard'
    ],
    syntellumRoles: ['Principal Solutions Architect', 'Dedicated DevOps Engineer'],
    clientCommitment: '1 hour/month (Operational review and scaling adjustments)',
    riskMitigation: 'Instant fallback toggle to legacy workflows if anomalies occur.'
  }
];

interface InteractiveRoadmapProps {
  onSelectPhase?: (phaseTitle: string) => void;
}

export const InteractiveRoadmap: React.FC<InteractiveRoadmapProps> = ({ onSelectPhase }) => {
  const [activePhaseId, setActivePhaseId] = useState<string>('phase-1');
  const [pacingMode, setPacingMode] = useState<'standard' | 'fastTrack'>('standard');
  const [detailTab, setDetailTab] = useState<'deliverables' | 'governance'>('deliverables');

  const currentPhase = PHASES.find(p => p.id === activePhaseId) || PHASES[0];

  return (
    <div className="bg-[#121c26] border border-[#43515D]/60 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Header & Pacing Mode Switcher */}
      <div className="p-4 sm:p-6 bg-[#16222e] border-b border-[#43515D]/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#65D9E8] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#65D9E8]">
              ENTERPRISE IMPLEMENTATION ROADMAP & STAGED GOVERNANCE
            </span>
          </div>
          <p className="text-sm text-[#8DA2B3]">
            A disciplined 4-stage engineering lifecycle with reviewable deliverables and formal Go/No-Go gates at every milestone.
          </p>
        </div>

        {/* Pacing Speed Toggle */}
        <div className="flex items-center gap-2 bg-[#101820] p-1 rounded-xl border border-[#43515D]/40 shrink-0">
          <button
            onClick={() => setPacingMode('standard')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
              pacingMode === 'standard'
                ? 'bg-[#16222e] text-[#65D9E8] shadow-sm font-bold border border-[#65D9E8]/40'
                : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
            }`}
          >
            Standard Enterprise (10–12 Wks)
          </button>
          <button
            onClick={() => setPacingMode('fastTrack')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              pacingMode === 'fastTrack'
                ? 'bg-[#65D9E8] text-[#101820] shadow-sm font-bold'
                : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
            }`}
          >
            <Zap className="w-3 h-3" />
            <span>Fast-Track Pilot (6–8 Wks)</span>
          </button>
        </div>
      </div>

      {/* Interactive Step Timeline Bar */}
      <div className="p-4 sm:p-6 bg-[#0b1016] border-b border-[#43515D]/40">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
          {PHASES.map((phase, idx) => {
            const isSelected = activePhaseId === phase.id;
            const duration = pacingMode === 'standard' ? phase.durationStandard : phase.durationFastTrack;

            return (
              <button
                key={phase.id}
                onClick={() => setActivePhaseId(phase.id)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer relative flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#16222e] border-[#65D9E8] shadow-lg shadow-[#65D9E8]/10 ring-2 ring-[#65D9E8]'
                    : 'bg-[#101820] border-[#43515D]/50 hover:border-[#65D9E8]/50 hover:bg-[#141e29]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#16222e] border border-[#43515D]/60 text-[#65D9E8]">
                      {phase.phaseNumber}
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#8DA2B3]">
                      {duration}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#F4F7FA] mb-1 leading-snug">
                    {phase.title}
                  </h4>
                </div>

                <div className="pt-3 mt-2 border-t border-[#43515D]/30 flex items-center justify-between text-[11px]">
                  <span className={isSelected ? 'text-[#65D9E8] font-semibold' : 'text-[#8DA2B3]'}>
                    {isSelected ? 'Active Selection' : 'Click to inspect'}
                  </span>
                  <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-[#65D9E8]' : 'text-[#8DA2B3]'}`} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Inspection Drawer: Selected Phase Deep Dive */}
      <div className="p-6 sm:p-8 bg-[#121c26]">
        {/* Phase Objective Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#43515D]/40">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                {currentPhase.phaseNumber} · {pacingMode === 'standard' ? currentPhase.durationStandard : currentPhase.durationFastTrack}
              </span>
              <span className="text-[#43515D]">|</span>
              <span className="text-xs text-[#8DA2B3] italic">{currentPhase.tagline}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#F4F7FA]">
              {currentPhase.title}
            </h3>
            <p className="text-sm text-[#8DA2B3] mt-2 max-w-3xl leading-relaxed">
              {currentPhase.objective}
            </p>
          </div>

          {/* Sub-tab Switcher: Deliverables vs Governance */}
          <div className="flex items-center gap-2 bg-[#101820] p-1 rounded-xl border border-[#43515D]/50 shrink-0 self-start lg:self-auto">
            <button
              onClick={() => setDetailTab('deliverables')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                detailTab === 'deliverables'
                  ? 'bg-[#16222e] text-[#65D9E8] border border-[#65D9E8]/40 font-bold'
                  : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Deliverables ({currentPhase.deliverables.length})</span>
            </button>
            <button
              onClick={() => setDetailTab('governance')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1.5 ${
                detailTab === 'governance'
                  ? 'bg-[#16222e] text-[#65D9E8] border border-[#65D9E8]/40 font-bold'
                  : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Governance & Team</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Reviewable Deliverables & Formal Gate */}
        {detailTab === 'deliverables' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-3">
              <h4 className="text-xs font-mono font-bold text-[#F4F7FA] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#65D9E8]" />
                What You Receive (Inspectable Deliverables):
              </h4>
              <div className="space-y-2.5">
                {currentPhase.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-[#101820] border border-[#43515D]/40 flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#65D9E8]/10 text-[#65D9E8] border border-[#65D9E8]/30 flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs sm:text-sm text-[#F4F7FA] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Formal Go/No-Go Gate & Safeguard Card */}
            <div className="lg:col-span-5 bg-[#16222e] border border-[#65D9E8]/30 rounded-2xl p-5 space-y-4">
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#65D9E8] block mb-1">
                  MANDATORY DECISION MILESTONE
                </span>
                <h5 className="text-sm font-bold text-[#F4F7FA] mb-2">
                  Formal Go / No-Go Gate
                </h5>
                <p className="text-xs text-[#8DA2B3] leading-relaxed bg-[#101820] p-3 rounded-lg border border-[#43515D]/40">
                  {currentPhase.gate}
                </p>
              </div>

              <div className="pt-2 border-t border-[#43515D]/40">
                <span className="text-[10px] font-mono font-semibold uppercase text-[#8DA2B3] block mb-1">
                  Risk Mitigation Strategy:
                </span>
                <p className="text-xs text-[#65D9E8] font-medium">
                  {currentPhase.riskMitigation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Governance, Resource Allocation & Client Time */}
        {detailTab === 'governance' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-[#101820] border border-[#43515D]/40 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Syntellum Engineering Team</span>
              </div>
              <ul className="space-y-2 text-xs text-[#F4F7FA]">
                {currentPhase.syntellumRoles.map((role, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#65D9E8]" />
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/40 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Client Time Investment</span>
              </div>
              <p className="text-xs text-[#F4F7FA] leading-relaxed">
                {currentPhase.clientCommitment}
              </p>
              <div className="text-[11px] text-[#8DA2B3]">
                Designed to minimize strain on your operational and IT teams.
              </div>
            </div>

            <div className="bg-[#101820] border border-[#43515D]/40 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>Security & IP Guarantee</span>
              </div>
              <p className="text-xs text-[#F4F7FA] leading-relaxed">
                Mutual NDA in effect from Day 1. Full source code and custom model weights belong 100% to your enterprise upon completion.
              </p>
            </div>
          </div>
        )}

        {/* Phase Inquiry Action Bar */}
        <div className="mt-8 pt-6 border-t border-[#43515D]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="text-xs text-[#8DA2B3]">
            Ready to evaluate feasibility? Most clients start with a focused <strong className="text-[#F4F7FA]">Phase 1 Discovery Audit</strong> to validate data quality before committing to full rollout.
          </div>
          {onSelectPhase && (
            <button
              onClick={() => onSelectPhase(currentPhase.title)}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#65D9E8] hover:bg-[#4ec2d1] text-[#101820] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer shrink-0 shadow-md"
            >
              <span>INQUIRE ABOUT {currentPhase.phaseNumber}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
