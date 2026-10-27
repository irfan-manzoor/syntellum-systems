import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
    >
      <div className="relative w-full max-w-2xl bg-[#16222e] border border-[#43515D] rounded-xl shadow-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto text-[#F4F7FA]">
        <div className="flex items-center justify-between pb-4 border-b border-[#43515D]/60 mb-6">
          <div className="flex items-center gap-2 text-[#65D9E8]">
            <ShieldCheck className="w-6 h-6" />
            <h2 id="privacy-modal-title" className="text-xl font-bold tracking-tight text-[#F4F7FA]">
              Privacy & Data Governance Notice
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#8DA2B3] hover:text-[#F4F7FA] hover:bg-[#1c2a38] rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#65D9E8]"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-sm text-[#8DA2B3] leading-relaxed">
          <p className="text-[#F4F7FA] font-medium">
            This notice outlines how Syntellum Systems handles business inquiries, technical discovery data, and prospective client communications through syntellum.si.
          </p>

          <div>
            <h3 className="text-sm font-semibold text-[#F4F7FA] uppercase tracking-wider mb-1">
              1. Information Collection
            </h3>
            <p>
              We collect information provided directly through our project inquiry forms: contact name, business email address, company name, job role, and project requirement descriptions. We do not collect extraneous personal data or use third-party behavioral profiling trackers.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F4F7FA] uppercase tracking-wider mb-1">
              2. Purpose of Use
            </h3>
            <p>
              Information submitted is used strictly to evaluate feasibility, prepare preliminary architecture consultations, respond to commercial inquiries, and coordinate engineering discovery sessions.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F4F7FA] uppercase tracking-wider mb-1">
              3. Data Protection & Confidentiality
            </h3>
            <p>
              Syntellum Systems treats all technical workflows, operational specs, and system architectures shared during discovery under strict business confidentiality principles. Formal Non-Disclosure Agreements (NDAs) are routinely executed prior to in-depth technical analysis.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F4F7FA] uppercase tracking-wider mb-1">
              4. Cookies & Site Telemetry
            </h3>
            <p>
              This website uses only essential session mechanics necessary for site navigation and interactive form handling. No invasive marketing tracking pixels are executed.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F4F7FA] uppercase tracking-wider mb-1">
              5. Geographic Scope & Governance
            </h3>
            <p>
              Syntellum Systems operates from Pakistan, engineering enterprise systems for both domestic enterprises and international clients across the EU, UK, US, and Middle East. We apply GDPR principles as our privacy baseline for all client communications.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F4F7FA] uppercase tracking-wider mb-1">
              6. Form Processing & Relay
            </h3>
            <p>
              Inquiry submissions are securely transmitted via encrypted HTTPS through FormSubmit (formsubmit.co) acting as a technical transmission relay directly to our engineering desk at <span className="font-mono text-[#65D9E8]">info@syntellum.si</span>. Submissions are never monetized, rented, or retained for external marketing purposes.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#F4F7FA] uppercase tracking-wider mb-1">
              7. Zero Model Training & Data Rights
            </h3>
            <p>
              Under no circumstances is client information, proprietary technical documentation, or project data used to train or fine-tune public foundation AI models. You retain the right to request deletion, export, or audit of any communication records by emailing our Legal & Engineering Desk at <span className="font-mono text-[#65D9E8]">info@syntellum.si</span>.
            </p>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-[#43515D]/60 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors"
          >
            Close Notice
          </button>
        </div>
      </div>
    </div>
  );
};
