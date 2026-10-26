import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Building,
  Clock,
  Lock,
  Mail,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { ContactFormData, Page } from '../types';
import { SEO } from '../components/SEO';

interface ContactPageProps {
  setCurrentPage: (page: Page) => void;
  prefilledChallenge?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage, prefilledChallenge }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessEmail: '',
    company: '',
    jobTitle: '',
    areaOfInterest: 'Workflow Automation',
    businessChallenge: prefilledChallenge || '',
    existingSystems: '',
    desiredOutcome: '',
    consent: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<{
    referenceId: string;
    data: ContactFormData;
    timestamp: string;
  } | null>(null);

  const interestOptions = [
    'Workflow Automation',
    'AI Engineering',
    'Systems Integration',
    'Full Operational Review',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('info@syntellum.si');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.businessEmail.trim()) {
      newErrors.businessEmail = 'Please provide your business email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      newErrors.businessEmail = 'Please provide a valid email format (e.g., name@company.com).';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Please specify your company or organization.';
    }

    if (!formData.businessChallenge.trim()) {
      newErrors.businessChallenge = 'Please describe your operational challenge or workflow bottleneck.';
    } else if (formData.businessChallenge.trim().length < 15) {
      newErrors.businessChallenge = 'Please provide a brief description of at least 15 characters.';
    }

    if (!formData.consent) {
      newErrors.consent = 'You must acknowledge the data handling notice to submit an inquiry.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    const generatedRef = `SYN-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const timestamp = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });

    const payload = {
      _subject: `New Syntellum Project Inquiry: ${formData.company} (${formData.fullName}) [${generatedRef}]`,
      _template: 'table',
      _captcha: 'false',
      _replyto: formData.businessEmail,
      'Full Name': formData.fullName,
      'Business Email': formData.businessEmail,
      'Company': formData.company,
      'Job Title': formData.jobTitle || 'Not specified',
      'Core Pillar': formData.areaOfInterest,
      'Business Challenge': formData.businessChallenge,
      'Existing Systems': formData.existingSystems || 'Not specified',
      'Target Outcome & Timeline': formData.desiredOutcome || 'Flexible',
      'Reference Token': generatedRef,
      'Timestamp': timestamp,
      fullName: formData.fullName,
      businessEmail: formData.businessEmail,
      company: formData.company,
      jobTitle: formData.jobTitle || 'Not specified',
      areaOfInterest: formData.areaOfInterest,
      businessChallenge: formData.businessChallenge,
      existingSystems: formData.existingSystems || 'Not specified',
      desiredOutcome: formData.desiredOutcome || 'Flexible',
      referenceId: generatedRef,
    };

    try {
      // Primary: FormSubmit AJAX endpoint delivering directly to info@syntellum.si
      const response = await fetch('https://formsubmit.co/ajax/info@syntellum.si', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json().catch(() => null);

      if (response.ok || (result && (result.success === 'true' || result.success === true))) {
        setSubmittedInquiry({
          referenceId: generatedRef,
          data: { ...formData },
          timestamp,
        });
        setIsSubmitting(false);
        window.scrollTo({ top: 120, behavior: 'smooth' });
        return;
      }

      // Fallback: If deployed on Hostinger with contact.php available
      const phpResponse = await fetch('./contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      }).catch(() => null);

      if (phpResponse && phpResponse.ok) {
        setSubmittedInquiry({
          referenceId: generatedRef,
          data: { ...formData },
          timestamp,
        });
        setIsSubmitting(false);
        window.scrollTo({ top: 120, behavior: 'smooth' });
        return;
      }

      throw new Error(result?.message || 'Unable to submit automatically. Please use the direct email link below.');
    } catch (err: any) {
      setSubmitError(
        err?.message || 'Submission service temporarily unavailable. You can email us directly at info@syntellum.si.'
      );
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmittedInquiry(null);
    setSubmitError(null);
    setFormData({
      fullName: '',
      businessEmail: '',
      company: '',
      jobTitle: '',
      areaOfInterest: 'Workflow Automation',
      businessChallenge: '',
      existingSystems: '',
      desiredOutcome: '',
      consent: false,
    });
    setErrors({});
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#101820]">
      <SEO
        title="Contact & Technical Discovery | Syntellum Systems"
        description="Discuss your operational challenge, workflow automation project, or systems integration requirement directly with the Syntellum Systems engineering desk."
        canonical="https://syntellum.si/contact"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Contact', url: '/contact' }
        ]}
      />

      {/* Header */}
      <section className="py-20 lg:py-24 border-b border-[#43515D]/40 bg-gradient-to-b from-[#16222e] to-[#101820]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold uppercase tracking-widest text-[#65D9E8] mb-3">
            Project Inquiries & Technical Discovery
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F4F7FA] mb-6 text-balance">
            Let's Discuss Your Project.
          </h1>
          <p className="text-lg sm:text-xl text-[#8DA2B3] leading-relaxed max-w-3xl font-normal">
            Tell us about your operational challenge, current systems, and desired outcome. An engineer will review your requirements and coordinate an initial feasibility assessment.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20 bg-[#101820]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Form or Success Confirmation */}
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                {submittedInquiry ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#16222e] border border-[#65D9E8]/60 rounded-2xl p-8 sm:p-10 shadow-2xl"
                  >
                    <div className="flex items-center gap-3 text-[#65D9E8] mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                      <div>
                        <h2 className="text-2xl font-bold text-[#F4F7FA]">
                          Inquiry Sent to info@syntellum.si
                        </h2>
                        <p className="text-xs text-[#65D9E8] font-semibold mt-0.5">
                          Dispatched directly to the Syntellum Systems engineering desk
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-[#8DA2B3] leading-relaxed mb-6">
                      Thank you, <span className="font-semibold text-[#F4F7FA]">{submittedInquiry.data.fullName}</span>. Your project inquiry has been routed to <strong className="text-[#65D9E8]">info@syntellum.si</strong> and registered in our technical discovery queue.
                    </p>

                    <div className="bg-[#101820] border border-[#43515D]/60 rounded-xl p-5 space-y-3 mb-6">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8DA2B3]">Reference Token:</span>
                        <span className="font-mono font-bold text-[#65D9E8]">{submittedInquiry.referenceId}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8DA2B3]">Destination:</span>
                        <span className="font-mono text-[#65D9E8]">info@syntellum.si</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8DA2B3]">Organization:</span>
                        <span className="font-semibold text-[#F4F7FA]">{submittedInquiry.data.company}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8DA2B3]">Business Email:</span>
                        <span className="text-[#F4F7FA]">{submittedInquiry.data.businessEmail}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8DA2B3]">Pillar:</span>
                        <span className="text-[#65D9E8] font-semibold">{submittedInquiry.data.areaOfInterest}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8DA2B3]">Timestamp:</span>
                        <span className="text-[#8DA2B3]">{submittedInquiry.timestamp}</span>
                      </div>
                    </div>

                    <div className="space-y-3 text-xs text-[#8DA2B3] leading-relaxed mb-8">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4F7FA]">
                        What Happens Next:
                      </h3>
                      <p>
                        1. <strong className="text-[#F4F7FA]">Requirements Review:</strong> A senior engineer evaluates workflow constraints and data structure.
                      </p>
                      <p>
                        2. <strong className="text-[#F4F7FA]">Confidentiality First:</strong> If detailed drawings or sensitive data are involved, we execute a mutual NDA.
                      </p>
                      <p>
                        3. <strong className="text-[#F4F7FA]">Discovery Consultation:</strong> We schedule a focused technical discussion to explore architecture and feasibility.
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer"
                    >
                      <span>Submit Another Inquiry</span>
                    </motion.button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-[#16222e] border border-[#43515D]/50 rounded-2xl p-8 sm:p-10 shadow-xl"
                  >
                    <h2 className="text-2xl font-bold text-[#F4F7FA] mb-2">
                      Project & Capability Inquiry
                    </h2>
                    <p className="text-xs sm:text-sm text-[#8DA2B3] mb-8">
                      Fields marked with <span className="text-[#65D9E8]">*</span> are required.
                    </p>

                    <form onSubmit={handleSubmit} noValidate className="space-y-6">
                      {/* Full Name & Business Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-2">
                            Full Name <span className="text-[#65D9E8]">*</span>
                          </label>
                          <input
                            id="fullName"
                            type="text"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="e.g. Jane Doe"
                            className={`w-full px-4 py-3 bg-[#101820] border rounded-lg text-sm text-[#F4F7FA] placeholder-[#8DA2B3]/50 focus:outline-none focus:ring-2 transition-colors ${
                              errors.fullName
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-[#43515D] focus:border-[#65D9E8] focus:ring-[#65D9E8]/30'
                            }`}
                          />
                          {errors.fullName && (
                            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.fullName}</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="businessEmail" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-2">
                            Business Email <span className="text-[#65D9E8]">*</span>
                          </label>
                          <input
                            id="businessEmail"
                            type="email"
                            value={formData.businessEmail}
                            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                            placeholder="name@company.com"
                            className={`w-full px-4 py-3 bg-[#101820] border rounded-lg text-sm text-[#F4F7FA] placeholder-[#8DA2B3]/50 focus:outline-none focus:ring-2 transition-colors ${
                              errors.businessEmail
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-[#43515D] focus:border-[#65D9E8] focus:ring-[#65D9E8]/30'
                            }`}
                          />
                          {errors.businessEmail && (
                            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.businessEmail}</span>
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Company & Job Title */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-2">
                            Company / Organization <span className="text-[#65D9E8]">*</span>
                          </label>
                          <input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="e.g. Apex Industrial Systems"
                            className={`w-full px-4 py-3 bg-[#101820] border rounded-lg text-sm text-[#F4F7FA] placeholder-[#8DA2B3]/50 focus:outline-none focus:ring-2 transition-colors ${
                              errors.company
                                ? 'border-red-500 focus:ring-red-500'
                                : 'border-[#43515D] focus:border-[#65D9E8] focus:ring-[#65D9E8]/30'
                            }`}
                          />
                          {errors.company && (
                            <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                              <AlertCircle className="w-3.5 h-3.5" />
                              <span>{errors.company}</span>
                            </p>
                          )}
                        </div>

                        <div>
                          <label htmlFor="jobTitle" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-2">
                            Job Title <span className="text-[#8DA2B3] font-normal">(Optional)</span>
                          </label>
                          <input
                            id="jobTitle"
                            type="text"
                            value={formData.jobTitle}
                            onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                            placeholder="e.g. Head of Operations / VP Engineering"
                            className="w-full px-4 py-3 bg-[#101820] border border-[#43515D] rounded-lg text-sm text-[#F4F7FA] placeholder-[#8DA2B3]/50 focus:outline-none focus:border-[#65D9E8] focus:ring-2 focus:ring-[#65D9E8]/30 transition-colors"
                          />
                        </div>
                      </div>

                      {/* Primary Area of Interest */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-2">
                          Primary Capability Pillar <span className="text-[#65D9E8]">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {interestOptions.map((opt) => (
                            <button
                              type="button"
                              key={opt}
                              onClick={() => setFormData({ ...formData, areaOfInterest: opt })}
                              className={`p-3 text-xs font-medium rounded-lg border text-left transition-all cursor-pointer ${
                                formData.areaOfInterest === opt
                                  ? 'bg-[#101820] border-[#65D9E8] text-[#65D9E8] font-bold'
                                  : 'bg-[#101820]/60 border-[#43515D]/60 text-[#8DA2B3] hover:text-[#F4F7FA]'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Question 1: Business Challenge */}
                      <div>
                        <label htmlFor="businessChallenge" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-2">
                          1. Operational Challenge or Bottleneck <span className="text-[#65D9E8]">*</span>
                        </label>
                        <textarea
                          id="businessChallenge"
                          rows={4}
                          value={formData.businessChallenge}
                          onChange={(e) => setFormData({ ...formData, businessChallenge: e.target.value })}
                          placeholder="What specific workflow, document process, or operational bottleneck are you looking to automate or solve?"
                          className={`w-full px-4 py-3 bg-[#101820] border rounded-lg text-sm text-[#F4F7FA] placeholder-[#8DA2B3]/50 focus:outline-none focus:ring-2 transition-colors ${
                            errors.businessChallenge
                              ? 'border-red-500 focus:ring-red-500'
                              : 'border-[#43515D] focus:border-[#65D9E8] focus:ring-[#65D9E8]/30'
                          }`}
                        />
                        {errors.businessChallenge && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.businessChallenge}</span>
                          </p>
                        )}
                      </div>

                      {/* Question 2: Existing Systems */}
                      <div>
                        <label htmlFor="existingSystems" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-2">
                          2. Existing Systems & Tools <span className="text-[#8DA2B3] font-normal">(Optional)</span>
                        </label>
                        <input
                          id="existingSystems"
                          type="text"
                          value={formData.existingSystems}
                          onChange={(e) => setFormData({ ...formData, existingSystems: e.target.value })}
                          placeholder="e.g. SAP, Microsoft Dynamics, Salesforce, Excel, PostgreSQL, on-prem files"
                          className="w-full px-4 py-3 bg-[#101820] border border-[#43515D] rounded-lg text-sm text-[#F4F7FA] placeholder-[#8DA2B3]/50 focus:outline-none focus:border-[#65D9E8] focus:ring-2 focus:ring-[#65D9E8]/30 transition-colors"
                        />
                      </div>

                      {/* Question 3: Desired Outcome & Timeline */}
                      <div>
                        <label htmlFor="desiredOutcome" className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-2">
                          3. Desired Outcome & Timeline <span className="text-[#8DA2B3] font-normal">(Optional)</span>
                        </label>
                        <input
                          id="desiredOutcome"
                          type="text"
                          value={formData.desiredOutcome}
                          onChange={(e) => setFormData({ ...formData, desiredOutcome: e.target.value })}
                          placeholder="e.g. Reduce quote cycle time by 60%, initial prototype needed in Q2"
                          className="w-full px-4 py-3 bg-[#101820] border border-[#43515D] rounded-lg text-sm text-[#F4F7FA] placeholder-[#8DA2B3]/50 focus:outline-none focus:border-[#65D9E8] focus:ring-2 focus:ring-[#65D9E8]/30 transition-colors"
                        />
                      </div>

                      {/* Consent Checkbox */}
                      <div>
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.consent}
                            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                            className="mt-1 h-4 w-4 rounded border-[#43515D] text-[#65D9E8] focus:ring-[#65D9E8] bg-[#101820] cursor-pointer"
                          />
                          <span className="text-xs text-[#8DA2B3] leading-relaxed">
                            I agree that Syntellum Systems may process this information strictly to evaluate project feasibility and respond to this inquiry in accordance with professional confidentiality standards.
                          </span>
                        </label>
                        {errors.consent && (
                          <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                            <AlertCircle className="w-3.5 h-3.5" />
                            <span>{errors.consent}</span>
                          </p>
                        )}
                      </div>

                      {/* Submission Error Alert */}
                      {submitError && (
                        <div className="p-4 bg-red-950/40 border border-red-500/50 rounded-xl space-y-3">
                          <div className="flex items-start gap-2.5 text-red-300">
                            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                            <div>
                              <p className="text-xs font-semibold text-red-200">{submitError}</p>
                              <p className="text-xs text-red-300/80 mt-1">
                                You can email us directly:
                              </p>
                            </div>
                          </div>
                          <a
                            href={`mailto:info@syntellum.si?subject=${encodeURIComponent(`Project Inquiry: ${formData.company || 'Enterprise'} - ${formData.fullName}`)}&body=${encodeURIComponent(`Full Name: ${formData.fullName}\nBusiness Email: ${formData.businessEmail}\nCompany: ${formData.company}\nJob Title: ${formData.jobTitle || 'N/A'}\nPillar: ${formData.areaOfInterest}\n\nChallenge:\n${formData.businessChallenge}\n\nExisting Systems:\n${formData.existingSystems}\n\nTarget Outcome:\n${formData.desiredOutcome}`)}`}
                            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors"
                          >
                            <Mail className="w-3.5 h-3.5" />
                            <span>Send Directly to info@syntellum.si</span>
                          </a>
                        </div>
                      )}

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md group"
                      >
                        {isSubmitting ? (
                          <span>SUBMITTING...</span>
                        ) : (
                          <>
                            <span>SUBMIT</span>
                            <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Direct Engineering Advisory & Scope Notes */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct Email Card */}
              <div className="bg-[#16222e] border border-[#65D9E8]/50 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xl">
                <div className="flex items-center gap-2 text-[#65D9E8]">
                  <Mail className="w-5 h-5" />
                  <h3 className="text-base font-bold text-[#F4F7FA]">
                    Direct Inquiries
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                  Have an RFP, scope document, or bilateral NDA ready to share? You can email our engineering desk directly at:
                </p>
                <div className="flex items-center justify-between p-3.5 bg-[#101820] border border-[#43515D] rounded-lg">
                  <a
                    href="mailto:info@syntellum.si"
                    className="text-sm font-mono font-bold text-[#65D9E8] hover:underline"
                  >
                    info@syntellum.si
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#8DA2B3] hover:text-[#65D9E8] bg-[#16222e] border border-[#43515D]/60 hover:border-[#65D9E8] rounded transition-all cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#65D9E8]" />
                        <span className="text-[#65D9E8] text-[11px] font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span className="text-[11px]">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:info@syntellum.si?subject=Syntellum%20Systems%20Technical%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider text-[#F4F7FA] bg-[#101820] border border-[#43515D] hover:border-[#65D9E8] hover:text-[#65D9E8] rounded transition-colors"
                >
                  <span>Open in Mail Client</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="bg-[#16222e] border border-[#43515D]/50 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-[#65D9E8]">
                  <Building className="w-5 h-5" />
                  <h3 className="text-base font-bold text-[#F4F7FA]">
                    Commercial & Operational Terms
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                  Syntellum Systems collaborates with enterprise clients and strategic implementation partners. Every proposal includes a defined technical scope, architecture diagrams, milestone dependencies, and acceptance criteria.
                </p>
              </div>

              <div className="bg-[#16222e] border border-[#43515D]/50 rounded-2xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-2 text-[#65D9E8]">
                  <Lock className="w-5 h-5" />
                  <h3 className="text-base font-bold text-[#F4F7FA]">
                    Strict Non-Disclosure Guarantee
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                  We routinely execute bilateral Non-Disclosure Agreements prior to receiving proprietary engineering drawings, parts catalog pricing matrices, or sample customer inquiry archives.
                </p>
              </div>

              <div className="bg-[#16222e] border border-[#43515D]/50 rounded-2xl p-6 sm:p-8 space-y-3">
                <div className="flex items-center gap-2 text-[#65D9E8]">
                  <Clock className="w-5 h-5" />
                  <h3 className="text-base font-bold text-[#F4F7FA]">
                    Direct Turnaround
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#8DA2B3] leading-relaxed">
                  Inquiries are reviewed by practicing software engineers and technical directors within 1 business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
