import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Server, 
  Key, 
  Database, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Activity,
  Layers,
  FileCheck,
  AlertOctagon,
  EyeOff
} from 'lucide-react';

interface TopologyNode {
  id: string;
  category: 'perimeter' | 'tunnel' | 'vpc' | 'governance';
  title: string;
  badge: string;
  status: 'active' | 'enforced';
  description: string;
  specifications: { label: string; value: string }[];
}

const TOPOLOGY_NODES: TopologyNode[] = [
  {
    id: 'node-client-network',
    category: 'perimeter',
    title: 'Client Corporate Perimeter & ERP Core',
    badge: 'CUSTOMER PRIVATE CLOUD / ON-PREMISE',
    status: 'enforced',
    description: 'Existing enterprise infrastructure housing ERP records (SAP, NetSuite), Active Directory credentials, and document file systems. Zero modification to core databases is required.',
    specifications: [
      { label: 'Access Control', value: 'RBAC + SSO SAML 2.0 / Okta' },
      { label: 'Outbound Only', value: 'No incoming firewall ingress ports required' },
      { label: 'Audit Trail', value: 'Full change-data-capture log forwarded to client SIEM' }
    ]
  },
  {
    id: 'node-tunnel',
    category: 'tunnel',
    title: 'Isolated Private Network Tunnel (mTLS)',
    badge: 'ZERO-TRUST TRANSPORT LAYER',
    status: 'enforced',
    description: 'Mutual TLS 1.3 encrypted tunnel establishing hardware-authenticated connectivity between client servers and Syntellum processing workers.',
    specifications: [
      { label: 'Cipher Suite', value: 'TLS_AES_256_GCM_SHA384' },
      { label: 'Authentication', value: 'Bidirectional X.509 Hardware Certificates' },
      { label: 'Network Isolation', value: 'Dedicated IP Whitelisting / IPSec VPN option' }
    ]
  },
  {
    id: 'node-isolated-vpc',
    category: 'vpc',
    title: 'Syntellum Dedicated Isolated Processing VPC',
    badge: 'AIR-GAPPED COMPUTE ENCLAVE',
    status: 'active',
    description: 'Private Kubernetes cluster executing specialized document parsing, data normalization, and deterministic rules engines. Operates under strict zero data retention policies.',
    specifications: [
      { label: 'Data Retention', value: '0 Days (Ephemeral RAM-only processing)' },
      { label: 'Training Guarantee', value: 'Strict contractual zero LLM model training clause' },
      { label: 'Key Vault', value: 'Dedicated AWS KMS / Cloud KMS with customer-managed keys' }
    ]
  },
  {
    id: 'node-governance',
    category: 'governance',
    title: 'Human-in-the-Loop & Deterministic Gateways',
    badge: 'AUDIT & EXCEPTION WORKBENCH',
    status: 'active',
    description: 'High-confidence transactions flow straight through to ERP tables. Any edge-case or tolerance breach is quarantined to the verification workbench for human sign-off.',
    specifications: [
      { label: 'Confidence Threshold', value: 'Configurable (Standard ≥95.0% for auto-commit)' },
      { label: 'Approval Mechanism', value: 'Dual-authorized cryptographic review log' },
      { label: 'Rollback Capability', value: 'One-click idempotent transaction reversibility' }
    ]
  }
];

export const SecurityTopologyPreview: React.FC = () => {
  const [activeNodeId, setActiveNodeId] = useState<string>('node-isolated-vpc');

  const activeNode = TOPOLOGY_NODES.find(n => n.id === activeNodeId) || TOPOLOGY_NODES[2];

  return (
    <div className="bg-[#121c26] border border-[#43515D]/60 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header Bar */}
      <div className="p-4 sm:p-6 bg-[#16222e] border-b border-[#43515D]/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <ShieldCheck className="w-4 h-4 text-[#65D9E8]" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#65D9E8]">
              ENTERPRISE ZERO-TRUST ARCHITECTURE & TOPOLOGY
            </span>
          </div>
          <p className="text-sm text-[#8DA2B3]">
            Visual breakdown of network boundaries, encryption handshakes, and ephemeral data policies protecting your proprietary engineering data.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
            <CheckCircle2 className="w-3.5 h-3.5" />
            SOC2 TYPE II ALIGNED
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono bg-[#65D9E8]/10 text-[#65D9E8] border border-[#65D9E8]/30">
            <EyeOff className="w-3.5 h-3.5" />
            ZERO-DATA RETENTION
          </span>
        </div>
      </div>

      {/* Interactive Topology Visual Diagram */}
      <div className="p-6 sm:p-8 bg-[#0b1016] border-b border-[#43515D]/40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
          {TOPOLOGY_NODES.map((node, index) => {
            const isSelected = activeNodeId === node.id;
            return (
              <div
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`relative p-5 rounded-xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#16222e] border-[#65D9E8] shadow-lg shadow-[#65D9E8]/10 ring-2 ring-[#65D9E8]'
                    : 'bg-[#101820] border-[#43515D]/50 hover:border-[#65D9E8]/60 hover:bg-[#141e29]'
                }`}
              >
                {/* Step Connector Arrow for Desktop */}
                {index < TOPOLOGY_NODES.length - 1 && (
                  <div className="hidden md:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full bg-[#16222e] border border-[#43515D] items-center justify-center text-[#65D9E8] shadow-md">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#16222e] border border-[#43515D]/60 text-[#65D9E8]">
                      ZONE 0{index + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <h4 className="text-sm font-bold text-[#F4F7FA] mb-2 leading-snug">
                    {node.title}
                  </h4>
                  <div className="text-[10px] font-mono text-[#8DA2B3] uppercase tracking-wider mb-3">
                    {node.badge}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#43515D]/30 flex items-center justify-between text-xs">
                  <span className="text-[#8DA2B3]">Security Policy</span>
                  <span className="font-mono text-[#65D9E8] font-semibold text-[11px]">Enforced ✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Selected Node Technical Inspection Drawer */}
      <div className="p-6 bg-[#16222e]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider">
                SELECTED SECURITY ZONE: {activeNode.title}
              </span>
            </div>
            <p className="text-sm text-[#8DA2B3] leading-relaxed mb-4">
              {activeNode.description}
            </p>
          </div>

          {/* Technical Specs Pills */}
          <div className="w-full lg:w-auto shrink-0 grid grid-cols-1 sm:grid-cols-3 gap-3">
            {activeNode.specifications.map((spec, idx) => (
              <div key={idx} className="bg-[#101820] border border-[#43515D]/50 rounded-lg p-3 min-w-[200px]">
                <div className="text-[10px] font-mono uppercase text-[#8DA2B3] mb-1">
                  {spec.label}
                </div>
                <div className="text-xs font-mono font-semibold text-[#F4F7FA]">
                  {spec.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
