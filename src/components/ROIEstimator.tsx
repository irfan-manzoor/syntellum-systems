import React, { useState, useId } from 'react';
import { motion } from 'framer-motion';
import {
  Calculator,
  ArrowRight,
  ArrowUpRight,
  Clock,
  TrendingDown,
  TrendingUp,
  CheckCircle2,
  Sliders,
  DollarSign,
  Copy,
  Check,
  RotateCcw
} from 'lucide-react';
import { Page } from '../types';

interface ROIEstimatorProps {
  onNavigateToContact?: (dataSummary?: string) => void;
}

export const ROIEstimator: React.FC<ROIEstimatorProps> = ({ onNavigateToContact }) => {
  const [docType, setDocType] = useState<'rfq' | 'bom' | 'invoices' | 'inquiries'>('rfq');
  const [monthlyVolume, setMonthlyVolume] = useState<number>(140);
  const [hoursPerDoc, setHoursPerDoc] = useState<number>(2.5);
  const [hourlyRate, setHourlyRate] = useState<number>(50);
  const [currency, setCurrency] = useState<'EUR' | 'USD'>('EUR');
  const [copied, setCopied] = useState(false);

  const docVolumeId = useId();
  const reviewTimeId = useId();
  const hourlyRateId = useId();

  // Presets
  const applyPreset = (preset: 'fabricator' | 'distributor' | 'procurement') => {
    if (preset === 'fabricator') {
      setDocType('rfq');
      setMonthlyVolume(80);
      setHoursPerDoc(3.5);
      setHourlyRate(55);
    } else if (preset === 'distributor') {
      setDocType('inquiries');
      setMonthlyVolume(300);
      setHoursPerDoc(1.5);
      setHourlyRate(45);
    } else if (preset === 'procurement') {
      setDocType('invoices');
      setMonthlyVolume(450);
      setHoursPerDoc(1.0);
      setHourlyRate(40);
    }
  };

  // Realistic Operational Math
  // Automated pipelines reduce ~75% to 80% of manual transcription & lookup overhead
  const automatedEfficiency = 0.78; 
  const totalMonthlyHoursSpent = monthlyVolume * hoursPerDoc;
  const monthlyHoursReclaimed = Math.round(totalMonthlyHoursSpent * automatedEfficiency);
  const currentMonthlyCost = totalMonthlyHoursSpent * hourlyRate;
  const monthlyCostSaved = Math.round(monthlyHoursReclaimed * hourlyRate);
  const annualCostSaved = monthlyCostSaved * 12;
  const fteEquivalentReclaimed = (monthlyHoursReclaimed / 160).toFixed(1);
  const typicalCurrentTurnaroundHours = Math.round(hoursPerDoc * 14); // wait times, queues, handoffs
  const acceleratedTurnaroundHours = Math.max(1, Math.round(hoursPerDoc * 0.8));

  const currencySymbol = currency === 'EUR' ? '€' : '$';

  const handleCopySummary = () => {
    const summaryText = `Syntellum Systems - Operational Scoping Summary:\n` +
      `• Document / Workflow Type: ${docType.toUpperCase()}\n` +
      `• Monthly Volume: ${monthlyVolume} documents/month\n` +
      `• Current Review & Transcription: ${hoursPerDoc} hrs/doc\n` +
      `• Blended Cost: ${currencySymbol}${hourlyRate}/hr\n` +
      `• Projected Reclaimed Capacity: ${monthlyHoursReclaimed} hrs/mo (${fteEquivalentReclaimed} FTEs)\n` +
      `• Projected Net Annual Savings: ${currencySymbol}${annualCostSaved.toLocaleString()}\n` +
      `• Turnaround Reduction: From ~${typicalCurrentTurnaroundHours}h queue to <${acceleratedTurnaroundHours}h with automated triage.`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDiscussClick = () => {
    const summaryText = `Calculated Scoping Data: ${monthlyVolume} ${docType.toUpperCase()} docs/mo @ ${hoursPerDoc}h/doc (Projected savings: ~${currencySymbol}${annualCostSaved.toLocaleString()}/yr, ${monthlyHoursReclaimed}h/mo reclaimed).`;
    if (onNavigateToContact) {
      onNavigateToContact(summaryText);
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <div className="bg-[#16222e] border border-[#43515D]/60 rounded-2xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#65D9E8]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 border-b border-[#43515D]/50 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
            <Calculator className="w-4 h-4" />
            <span>Interactive Tool · Enterprise Scoping</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] tracking-tight">
            Operational Bottleneck & ROI Estimator
          </h2>
          <p className="text-sm text-[#8DA2B3] mt-1 max-w-2xl leading-relaxed">
            Estimate how much operational time, engineering capacity, and turnaround friction your organization can reclaim by automating document extraction and quotation workflows.
          </p>
        </div>

        {/* Currency and Preset Toggles */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <span className="text-xs text-[#8DA2B3] font-medium mr-1">Presets:</span>
          <button
            onClick={() => applyPreset('fabricator')}
            className="px-2.5 py-1 text-xs font-medium rounded border border-[#43515D] text-[#F4F7FA] hover:border-[#65D9E8] hover:text-[#65D9E8] transition-colors cursor-pointer"
          >
            Fabricator RFQ
          </button>
          <button
            onClick={() => applyPreset('distributor')}
            className="px-2.5 py-1 text-xs font-medium rounded border border-[#43515D] text-[#F4F7FA] hover:border-[#65D9E8] hover:text-[#65D9E8] transition-colors cursor-pointer"
          >
            Distributor
          </button>
          <button
            onClick={() => applyPreset('procurement')}
            className="px-2.5 py-1 text-xs font-medium rounded border border-[#43515D] text-[#F4F7FA] hover:border-[#65D9E8] hover:text-[#65D9E8] transition-colors cursor-pointer"
          >
            Procurement
          </button>
          <div className="h-5 w-px bg-[#43515D] mx-1" />
          <button
            onClick={() => setCurrency(currency === 'EUR' ? 'USD' : 'EUR')}
            className="px-2.5 py-1 text-xs font-bold font-mono rounded bg-[#101820] border border-[#65D9E8]/40 text-[#65D9E8] cursor-pointer"
          >
            {currency}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Interactive Inputs */}
        <div className="lg:col-span-6 space-y-6">
          {/* Document / Process Type */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-[#F4F7FA] mb-2">
              Primary Workflow Focus
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'rfq', label: 'Technical RFQs' },
                { id: 'bom', label: 'Bills of Materials' },
                { id: 'invoices', label: 'Supplier Invoices' },
                { id: 'inquiries', label: 'Inquiry Routing' },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => setDocType(t.id as any)}
                  className={`p-2.5 text-xs font-medium rounded-lg border text-center transition-all cursor-pointer ${
                    docType === t.id
                      ? 'bg-[#101820] border-[#65D9E8] text-[#65D9E8] font-bold shadow-sm'
                      : 'bg-[#101820]/60 border-[#43515D]/60 text-[#8DA2B3] hover:text-[#F4F7FA]'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* Slider 1: Monthly Volume */}
          <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-4 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label htmlFor={docVolumeId} className="font-semibold text-[#F4F7FA]">
                Monthly Document / Task Volume
              </label>
              <span className="font-mono font-bold text-[#65D9E8] text-sm">
                {monthlyVolume} <span className="text-[10px] text-[#8DA2B3]">items/mo</span>
              </span>
            </div>
            <input
              id={docVolumeId}
              type="range"
              min={20}
              max={800}
              step={10}
              value={monthlyVolume}
              onChange={(e) => setMonthlyVolume(Number(e.target.value))}
              className="w-full accent-[#65D9E8] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#8DA2B3]">
              <span>20 (Low volume)</span>
              <span>400 (Mid-market)</span>
              <span>800+ (Enterprise)</span>
            </div>
          </div>

          {/* Slider 2: Current Review Time per Document */}
          <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-4 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label htmlFor={reviewTimeId} className="font-semibold text-[#F4F7FA]">
                Manual Time Spent Per Document
              </label>
              <span className="font-mono font-bold text-[#65D9E8] text-sm">
                {hoursPerDoc.toFixed(1)} <span className="text-[10px] text-[#8DA2B3]">hours</span>
              </span>
            </div>
            <input
              id={reviewTimeId}
              type="range"
              min={0.5}
              max={6.0}
              step={0.5}
              value={hoursPerDoc}
              onChange={(e) => setHoursPerDoc(Number(e.target.value))}
              className="w-full accent-[#65D9E8] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#8DA2B3]">
              <span>30 mins (Simple triage)</span>
              <span>2.5 hrs (Standard RFQ)</span>
              <span>6 hrs (Complex BOM)</span>
            </div>
          </div>

          {/* Slider 3: Blended Hourly Rate */}
          <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-4 space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label htmlFor={hourlyRateId} className="font-semibold text-[#F4F7FA]">
                Blended Labor Cost (Estimator / Engineer)
              </label>
              <span className="font-mono font-bold text-[#65D9E8] text-sm">
                {currencySymbol}{hourlyRate} <span className="text-[10px] text-[#8DA2B3]">/ hr</span>
              </span>
            </div>
            <input
              id={hourlyRateId}
              type="range"
              min={25}
              max={120}
              step={5}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full accent-[#65D9E8] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#8DA2B3]">
              <span>{currencySymbol}25/hr (Clerical)</span>
              <span>{currencySymbol}55/hr (Technical Estimator)</span>
              <span>{currencySymbol}100+/hr (Senior Engineer)</span>
            </div>
          </div>
        </div>

        {/* Right Column: Quantitative Outcomes & ROI Dashboard */}
        <div className="lg:col-span-6 bg-[#101820] border border-[#65D9E8]/40 rounded-xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-[#65D9E8] uppercase tracking-wider mb-2">
              PROJECTED OPERATIONAL RECOVERY
            </div>
            <h3 className="text-xl font-bold text-[#F4F7FA] mb-6">
              Calculated Return & Efficiency Gain
            </h3>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#16222e] border border-[#43515D]/50 p-4 rounded-lg">
                <span className="text-xs text-[#8DA2B3] block mb-1">
                  Reclaimed Monthly Capacity
                </span>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#65D9E8]">
                  {monthlyHoursReclaimed} <span className="text-xs font-sans font-medium text-[#F4F7FA]">hrs/mo</span>
                </div>
                <span className="text-[11px] text-[#8DA2B3] mt-1 block">
                  ≈ {fteEquivalentReclaimed} Full-Time Equivalent
                </span>
              </div>

              <div className="bg-[#16222e] border border-[#43515D]/50 p-4 rounded-lg">
                <span className="text-xs text-[#8DA2B3] block mb-1">
                  Projected Annual Savings
                </span>
                <div className="text-2xl sm:text-3xl font-mono font-extrabold text-[#F4F7FA]">
                  {currencySymbol}{annualCostSaved.toLocaleString()}
                </div>
                <span className="text-[11px] text-[#65D9E8] mt-1 block font-medium">
                  {currencySymbol}{monthlyCostSaved.toLocaleString()} / month
                </span>
              </div>
            </div>

            {/* Turnaround Velocity Benchmark */}
            <div className="p-4 bg-[#16222e] border border-[#43515D]/40 rounded-lg space-y-2 mb-6">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#8DA2B3]">Intake-to-Response Velocity:</span>
                <span className="font-bold text-[#65D9E8]">Up to 85% Faster</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#F4F7FA]">Current average queue:</span>
                <span className="text-red-400 font-mono">~{typicalCurrentTurnaroundHours} hours</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#F4F7FA]">With automated triage & extraction:</span>
                <span className="text-[#65D9E8] font-mono font-bold">&lt; {acceleratedTurnaroundHours} hours</span>
              </div>
            </div>

            <p className="text-xs text-[#8DA2B3] leading-relaxed">
              *Model assumes an 78% automation capture rate with high-confidence line items passed straight through and anomalies routed to human-in-the-loop review.
            </p>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#43515D]/40 flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleDiscussClick}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#101820] bg-[#65D9E8] hover:bg-[#4ec2d1] rounded transition-colors cursor-pointer shadow-md"
            >
              <span>Include in Project Discovery</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={handleCopySummary}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-3 text-xs font-medium text-[#F4F7FA] bg-[#16222e] border border-[#43515D] hover:border-[#65D9E8] rounded transition-colors cursor-pointer shrink-0"
              title="Copy scoping summary to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#65D9E8]" />
                  <span className="text-[#65D9E8]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#8DA2B3]" />
                  <span>Copy Summary</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
