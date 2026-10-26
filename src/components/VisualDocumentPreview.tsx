import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Eye, 
  Layers, 
  Code2, 
  Scan, 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Sparkles, 
  Lock, 
  ArrowRight,
  ShieldCheck,
  Cpu,
  FileCheck,
  Check
} from 'lucide-react';

interface ExtractedField {
  id: string;
  name: string;
  category: 'header' | 'technical' | 'commercial' | 'audit';
  value: string;
  confidence: number;
  status: 'verified' | 'review_required' | 'auto_matched';
  note?: string;
  box: {
    top: number; // percentage
    left: number; // percentage
    width: number; // percentage
    height: number; // percentage
  };
}

interface DocumentSample {
  id: string;
  title: string;
  docType: string;
  fileName: string;
  fileSize: string;
  pageCount: number;
  processingTimeMs: number;
  overallConfidence: number;
  summary: string;
  fields: ExtractedField[];
  jsonOutput: Record<string, any>;
}

const SAMPLE_DOCUMENTS: DocumentSample[] = [
  {
    id: 'rfq-aerospace',
    title: 'Precision Machining RFQ & Drawing',
    docType: 'Technical Engineering RFQ',
    fileName: 'RFQ_2026_PRECISION_316L_REV4.PDF',
    fileSize: '4.2 MB',
    pageCount: 3,
    processingTimeMs: 412,
    overallConfidence: 97.4,
    summary: 'Automated extraction of critical tolerances, material specifications, and batch sizing for multi-axis CNC machining inquiry.',
    fields: [
      {
        id: 'f-part-no',
        name: 'Part Number / Rev',
        category: 'header',
        value: 'AERO-V942-ST (Rev D)',
        confidence: 99.8,
        status: 'verified',
        box: { top: 14, left: 18, width: 42, height: 6 }
      },
      {
        id: 'f-material',
        name: 'Material Specification',
        category: 'technical',
        value: 'AISI 316L Austenitic Stainless Steel',
        confidence: 99.2,
        status: 'verified',
        box: { top: 25, left: 18, width: 62, height: 7 }
      },
      {
        id: 'f-tolerance',
        name: 'Critical Dimensional Tolerance',
        category: 'technical',
        value: '±0.012 mm [Bore Diameter Ø32.000 H7]',
        confidence: 89.4,
        status: 'review_required',
        note: 'Sub-15 micron tolerance flagged for tooling feasibility sign-off',
        box: { top: 38, left: 24, width: 56, height: 9 }
      },
      {
        id: 'f-surface',
        name: 'Surface Finish Roughness',
        category: 'technical',
        value: 'Ra 0.8 µm (Electropolished Inner Cavity)',
        confidence: 96.5,
        status: 'verified',
        box: { top: 52, left: 20, width: 54, height: 7 }
      },
      {
        id: 'f-quantity',
        name: 'Quotation Batch Quantity',
        category: 'commercial',
        value: '2,500 units (Split 500 initial / 2,000 scheduled)',
        confidence: 98.9,
        status: 'verified',
        box: { top: 65, left: 18, width: 64, height: 7 }
      },
      {
        id: 'f-lead-time',
        name: 'Target Delivery Window',
        category: 'commercial',
        value: '18 Business Days FOB Logistics Hub',
        confidence: 97.1,
        status: 'verified',
        box: { top: 76, left: 18, width: 48, height: 6 }
      }
    ],
    jsonOutput: {
      "document_metadata": {
        "document_type": "ENGINEERING_RFQ",
        "parsing_engine": "Syntellum-DocEngine-v4.2",
        "extraction_timestamp_utc": "2026-10-25T14:22:08Z",
        "confidence_index": 0.974
      },
      "line_item": {
        "part_identifier": "AERO-V942-ST",
        "revision_state": "D",
        "material": {
          "standard": "AISI 316L",
          "metallurgy_type": "Austenitic Stainless",
          "requires_heat_treat_cert": true
        },
        "manufacturing_specifications": {
          "bore_diameter_mm": 32.000,
          "tolerance_spec": "ISO H7 (+0.012 / -0.000 mm)",
          "criticality_tier": "HIGH_PRECISION_FLAGGED",
          "surface_roughness_ra_um": 0.8,
          "secondary_process": ["CNC_5AXIS_TURNING", "ELECTROPOLISH"]
        },
        "order_parameters": {
          "quantity": 2500,
          "first_batch_size": 500,
          "incoterm": "FOB",
          "max_lead_days": 18
        }
      },
      "validation_rules": {
        "human_in_the_loop_required": true,
        "flag_reason": "TOLERANCE_UNDER_15_MICRON_REQUIRES_CHIEF_TOOLING_APPROVAL"
      }
    }
  },
  {
    id: 'invoice-3way',
    title: 'Industrial Component Tax Invoice',
    docType: 'Procurement & 3-Way Match',
    fileName: 'INV_VANGUARD_TOOLING_99420.PDF',
    fileSize: '1.8 MB',
    pageCount: 1,
    processingTimeMs: 284,
    overallConfidence: 99.1,
    summary: 'Automated 3-way matching cross-referencing ERP Purchase Order, Goods Receipt Voucher, and Bank Remittance Details with 0% price variance.',
    fields: [
      {
        id: 'f-inv-vendor',
        name: 'Supplier & Tax Identifier',
        category: 'header',
        value: 'Vanguard Industrial Tooling AG [UID: DE814992019]',
        confidence: 99.9,
        status: 'verified',
        box: { top: 12, left: 16, width: 68, height: 7 }
      },
      {
        id: 'f-inv-po',
        name: 'ERP Purchase Order Match',
        category: 'audit',
        value: 'PO-2026-90421-TX (Matched to SAP Table EKKO)',
        confidence: 99.7,
        status: 'auto_matched',
        box: { top: 24, left: 16, width: 52, height: 7 }
      },
      {
        id: 'f-inv-gr',
        name: 'Goods Receipt Reference',
        category: 'audit',
        value: 'GR-8841092-WH1 (Warehouse Dock Bay 04 Signed)',
        confidence: 98.6,
        status: 'auto_matched',
        box: { top: 35, left: 16, width: 58, height: 7 }
      },
      {
        id: 'f-inv-items',
        name: 'Extracted Line Total & Tax',
        category: 'commercial',
        value: 'Net: €12,206.88 | VAT 22%: €2,685.52 | Gross: €14,892.40',
        confidence: 99.4,
        status: 'verified',
        box: { top: 58, left: 16, width: 68, height: 10 }
      },
      {
        id: 'f-inv-iban',
        name: 'Remittance IBAN & SWIFT',
        category: 'commercial',
        value: 'DE89 5007 0010 0123 4567 89 [Matched Whitelist]',
        confidence: 99.8,
        status: 'verified',
        box: { top: 78, left: 16, width: 60, height: 7 }
      }
    ],
    jsonOutput: {
      "match_result": {
        "status": "APPROVED_FOR_PAYMENT",
        "match_type": "3_WAY_AUTOMATIC_MATCH",
        "variance_amount_eur": 0.00,
        "vendor_valid": true,
        "sanctions_check_passed": true
      },
      "erp_integration": {
        "target_erp": "SAP S/4HANA",
        "posting_document_type": "RE",
        "gl_account": "400120_MACHINING_CONSUMABLES",
        "clearing_status": "QUEUED_FOR_NIGHTLY_PAYRUN"
      },
      "invoice_data": {
        "invoice_number": "INV-99420",
        "net_amount": 12206.88,
        "tax_amount": 2685.52,
        "total_amount": 14892.40,
        "currency": "EUR"
      }
    }
  },
  {
    id: 'bom-hierarchy',
    title: 'Technical Bill of Materials (BOM)',
    docType: 'Sub-Assembly Parts Matrix',
    fileName: 'BOM_HYDRAULIC_MANIFOLD_REV7.XLSX',
    fileSize: '3.1 MB',
    pageCount: 2,
    processingTimeMs: 360,
    overallConfidence: 98.2,
    summary: 'Hierarchy tree extraction parsing multi-level sub-assemblies, part numbers, material traceability heat numbers, and safety inventory levels.',
    fields: [
      {
        id: 'f-bom-assembly',
        name: 'Parent Assembly Designation',
        category: 'header',
        value: 'MANIFOLD-HYD-5000PSI (Rev 7.2)',
        confidence: 99.5,
        status: 'verified',
        box: { top: 15, left: 16, width: 60, height: 7 }
      },
      {
        id: 'f-bom-subparts',
        name: 'Sub-Component Part Count',
        category: 'technical',
        value: '14 Unique Child SKUs (8 machined, 6 sealing/O-rings)',
        confidence: 98.1,
        status: 'verified',
        box: { top: 28, left: 16, width: 68, height: 7 }
      },
      {
        id: 'f-bom-trace',
        name: 'Material Heat Traceability',
        category: 'technical',
        value: 'Heat Lot #HT-7882-EN10204-3.1B Certified',
        confidence: 97.4,
        status: 'verified',
        box: { top: 46, left: 16, width: 62, height: 8 }
      },
      {
        id: 'f-bom-stock',
        name: 'Inventory Buffer Threshold',
        category: 'commercial',
        value: 'Safety Stock Trigger: 450 units (Lead Time: 21 days)',
        confidence: 98.7,
        status: 'verified',
        box: { top: 68, left: 16, width: 66, height: 8 }
      }
    ],
    jsonOutput: {
      "assembly_id": "MANIFOLD-HYD-5000PSI",
      "revision": "7.2",
      "tree_depth": 2,
      "components_count": 14,
      "traceability": {
        "heat_lot": "HT-7882",
        "mill_cert_standard": "EN 10204 3.1",
        "compliance": "REACH_RoHS_COMPLIANT"
      },
      "erp_action": {
        "sync_target": "NetSuite Manufacturing SuiteApp",
        "action": "UPSERT_ASSEMBLY_BOM",
        "cost_roll_up_status": "CALCULATED"
      }
    }
  }
];

export const VisualDocumentPreview: React.FC = () => {
  const [activeDocId, setActiveDocId] = useState<string>('rfq-aerospace');
  const [activeFieldId, setActiveFieldId] = useState<string | null>('f-tolerance');
  const [activeTab, setActiveTab] = useState<'extracted' | 'json'>('extracted');
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [scanProgress, setScanProgress] = useState<number>(100);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [showBoundingBoxes, setShowBoundingBoxes] = useState<boolean>(true);

  const currentDoc = SAMPLE_DOCUMENTS.find(d => d.id === activeDocId) || SAMPLE_DOCUMENTS[0];

  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    const interval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          return 100;
        }
        return prev + 5;
      });
    }, 40);
  };

  // Reset active field selection when document changes
  useEffect(() => {
    if (currentDoc.fields.length > 0) {
      setActiveFieldId(currentDoc.fields[0].id);
    }
  }, [activeDocId]);

  return (
    <div className="bg-[#121c26] border border-[#43515D]/60 rounded-2xl overflow-hidden shadow-2xl">
      {/* Top Controller Bar */}
      <div className="p-4 sm:p-6 bg-[#16222e] border-b border-[#43515D]/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#65D9E8] animate-pulse" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#65D9E8]">
              LIVE EXTRACTION & DOCUMENT INTELLIGENCE WORKBENCH
            </span>
          </div>
          <p className="text-sm text-[#8DA2B3]">
            Interactive simulation of Syntellum's document parsing pipeline with bounding box localization and audit safeguards.
          </p>
        </div>

        {/* Document Selector Pills */}
        <div className="flex flex-wrap gap-2">
          {SAMPLE_DOCUMENTS.map((doc) => {
            const isSelected = doc.id === activeDocId;
            return (
              <button
                key={doc.id}
                onClick={() => setActiveDocId(doc.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#65D9E8] text-[#101820] shadow-md shadow-[#65D9E8]/20 font-bold'
                    : 'bg-[#101820] text-[#8DA2B3] hover:text-[#F4F7FA] hover:bg-[#1a2838] border border-[#43515D]/40'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{doc.title}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Workspace: Split View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Left Column: Visual Document Sheet Viewer (7 Cols) */}
        <div className="lg:col-span-7 bg-[#0b1016] p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-[#43515D]/40 flex flex-col justify-between relative overflow-hidden">
          {/* Document Sheet Toolbar */}
          <div className="flex items-center justify-between gap-2 mb-4 bg-[#16222e]/80 backdrop-blur-sm px-3.5 py-2 rounded-lg border border-[#43515D]/40 text-xs text-[#8DA2B3]">
            <div className="flex items-center gap-2 truncate">
              <span className="font-mono text-[#F4F7FA] font-medium truncate">{currentDoc.fileName}</span>
              <span className="text-[#43515D]">|</span>
              <span className="shrink-0">{currentDoc.fileSize}</span>
              <span className="text-[#43515D]">|</span>
              <span className="shrink-0 font-mono text-[#65D9E8]">{currentDoc.processingTimeMs} ms</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setShowBoundingBoxes(!showBoundingBoxes)}
                className={`p-1.5 rounded text-xs flex items-center gap-1 cursor-pointer transition-colors ${
                  showBoundingBoxes ? 'bg-[#65D9E8]/20 text-[#65D9E8]' : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
                }`}
                title="Toggle Bounding Boxes"
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Boxes</span>
              </button>
              <button
                onClick={() => setZoomLevel(prev => (prev === 100 ? 125 : prev === 125 ? 150 : 100))}
                className="p-1.5 rounded text-xs flex items-center gap-1 text-[#8DA2B3] hover:text-[#F4F7FA] cursor-pointer"
                title="Adjust Zoom"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span className="font-mono">{zoomLevel}%</span>
              </button>
              <button
                onClick={handleSimulateScan}
                disabled={isScanning}
                className="px-2.5 py-1 bg-[#65D9E8] hover:bg-[#4ec2d1] text-[#101820] font-bold rounded flex items-center gap-1.5 cursor-pointer disabled:opacity-50 transition-all text-xs"
              >
                <Scan className="w-3.5 h-3.5" />
                <span>{isScanning ? 'Scanning...' : 'Re-scan'}</span>
              </button>
            </div>
          </div>

          {/* Simulated Document Canvas Sheet */}
          <div className="relative flex-1 bg-[#15202b] rounded-xl border border-[#43515D]/50 p-6 flex flex-col justify-between overflow-hidden shadow-inner group">
            {/* Animated Laser Scanning Beam */}
            {isScanning && (
              <div 
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#65D9E8] to-transparent shadow-[0_0_15px_#65D9E8] z-30 transition-all duration-75 pointer-events-none"
                style={{ top: `${scanProgress}%` }}
              />
            )}

            {/* Document Header Watermark / Stamp */}
            <div className="border-b border-[#43515D]/40 pb-4 mb-4 flex items-center justify-between">
              <div>
                <div className="text-[10px] font-mono tracking-widest text-[#8DA2B3] uppercase">
                  ENTERPRISE INGESTION STREAM · OCR TESSERACT/VISION HYBRID
                </div>
                <div className="text-base font-bold text-[#F4F7FA] font-mono tracking-wide">
                  {currentDoc.title.toUpperCase()}
                </div>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-[#65D9E8]/10 text-[#65D9E8] border border-[#65D9E8]/30">
                  <ShieldCheck className="w-3 h-3" />
                  AIR-GAPPED PARSER
                </span>
              </div>
            </div>

            {/* Simulated Visual Engineering Schematic or Form Layout */}
            <div className="flex-1 relative flex flex-col justify-between my-2 font-mono text-xs text-[#8DA2B3] select-none">
              {/* Document specific wireframe background based on doc type */}
              {currentDoc.id === 'rfq-aerospace' && (
                <div className="space-y-4">
                  {/* Schematic Drawing Visual Line Art */}
                  <div className="w-full h-32 bg-[#101820]/80 rounded border border-dashed border-[#43515D]/50 relative flex items-center justify-center p-3 overflow-hidden">
                    {/* SVG Vector Drawing of Precision Machined Component */}
                    <svg className="w-full h-full text-[#65D9E8]/40" viewBox="0 0 400 120" fill="none">
                      <rect x="50" y="30" width="300" height="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 2" />
                      <circle cx="120" cy="60" r="24" stroke="currentColor" strokeWidth="1.5" />
                      <circle cx="280" cy="60" r="24" stroke="currentColor" strokeWidth="1.5" />
                      <line x1="50" y1="60" x2="350" y2="60" stroke="#8DA2B3" strokeWidth="0.75" strokeDasharray="8 4" />
                      <line x1="120" y1="15" x2="120" y2="105" stroke="#8DA2B3" strokeWidth="0.75" strokeDasharray="8 4" />
                      <line x1="280" y1="15" x2="280" y2="105" stroke="#8DA2B3" strokeWidth="0.75" strokeDasharray="8 4" />
                      <path d="M 120 36 L 150 20 L 220 20" stroke="#65D9E8" strokeWidth="1" />
                      <text x="225" y="24" fill="#65D9E8" fontSize="9" fontFamily="monospace">Ø32.000 H7 (±0.012)</text>
                      <text x="55" y="22" fill="#8DA2B3" fontSize="8" fontFamily="monospace">REF: DWG-AERO-942</text>
                      <text x="290" y="105" fill="#8DA2B3" fontSize="8" fontFamily="monospace">SCALE: 1:1 [METRIC]</text>
                    </svg>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-[11px] pt-1">
                    <div className="space-y-2 border-r border-[#43515D]/30 pr-3">
                      <div>MATERIAL: <span className="text-[#F4F7FA]">AISI 316L DUAL-CERT</span></div>
                      <div>SPECIFICATION: <span className="text-[#F4F7FA]">ASTM A276 / EN 10088-3</span></div>
                      <div>SURFACE ROUGHNESS: <span className="text-[#F4F7FA]">Ra 0.8 µm MAX</span></div>
                    </div>
                    <div className="space-y-2 pl-2">
                      <div>TARGET QUANTITY: <span className="text-[#F4F7FA]">2,500 PCS</span></div>
                      <div>DELIVERY WINDOW: <span className="text-[#F4F7FA]">18 BUSINESS DAYS</span></div>
                      <div>PACKAGING: <span className="text-[#F4F7FA]">VCI ANTI-CORROSION</span></div>
                    </div>
                  </div>
                </div>
              )}

              {currentDoc.id === 'invoice-3way' && (
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-[#43515D]/30 pb-2 text-[11px]">
                    <div>
                      <div className="text-[#F4F7FA] font-bold">VANGUARD INDUSTRIAL TOOLING AG</div>
                      <div>Gutenbergring 42, 22848 Norderstedt</div>
                      <div>VAT ID: DE814992019</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[#65D9E8] font-bold">INVOICE: INV-99420</div>
                      <div>DATE: 2026-10-24</div>
                      <div>PO REF: PO-2026-90421-TX</div>
                    </div>
                  </div>

                  {/* Line Items Table Preview */}
                  <div className="bg-[#101820]/90 rounded p-2 text-[10px] border border-[#43515D]/40 space-y-1.5">
                    <div className="flex justify-between font-bold text-[#F4F7FA] border-b border-[#43515D]/30 pb-1">
                      <span>DESCRIPTION / SKU</span>
                      <span>QTY</span>
                      <span>UNIT</span>
                      <span>TOTAL</span>
                    </div>
                    <div className="flex justify-between text-[#8DA2B3]">
                      <span>Solid Carbide End Mill Ø12mm 4-Flute</span>
                      <span>50</span>
                      <span>€84.00</span>
                      <span className="text-[#F4F7FA]">€4,200.00</span>
                    </div>
                    <div className="flex justify-between text-[#8DA2B3]">
                      <span>ER32 High Precision Collet Chuck Set</span>
                      <span>20</span>
                      <span>€168.50</span>
                      <span className="text-[#F4F7FA]">€3,370.00</span>
                    </div>
                    <div className="flex justify-between text-[#8DA2B3]">
                      <span>Semi-Synthetic High Pressure Coolant 200L</span>
                      <span>4</span>
                      <span>€1,159.22</span>
                      <span className="text-[#F4F7FA]">€4,636.88</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-[11px] pt-1">
                    <div>PAYMENT: NET 30 DAYS VIA SEPA WIRE</div>
                    <div className="text-right space-y-0.5">
                      <div>SUBTOTAL: €12,206.88</div>
                      <div>VAT (22%): €2,685.52</div>
                      <div className="text-[#65D9E8] font-bold">TOTAL: €14,892.40</div>
                    </div>
                  </div>
                </div>
              )}

              {currentDoc.id === 'bom-hierarchy' && (
                <div className="space-y-3">
                  <div className="text-[11px] text-[#F4F7FA] font-bold">
                    ASSEMBLY TREE: MANIFOLD-HYD-5000PSI (REVISION 7.2)
                  </div>
                  <div className="bg-[#101820]/90 rounded p-2.5 text-[10px] border border-[#43515D]/40 font-mono space-y-2">
                    <div className="text-[#65D9E8]">├── [ASSY-01] Hydraulic Manifold Main Block (AISI 1018 Cast Steel)</div>
                    <div className="pl-4 text-[#8DA2B3]">├── [COMP-02] Cartridge Relief Valve 350 BAR (P/N: VLV-RV-350)</div>
                    <div className="pl-4 text-[#8DA2B3]">├── [COMP-03] Viton 90 Durometer High-Temp O-Ring (P/N: OR-VT-90D)</div>
                    <div className="pl-4 text-[#8DA2B3]">├── [COMP-04] SAE Flange Port Code 62 1-1/4" (P/N: FLG-CD62-20)</div>
                    <div className="text-[#65D9E8]">└── [DOCS-05] Mill Certificate EN 10204 3.1B Heat #HT-7882</div>
                  </div>
                  <div className="text-[10px] text-[#8DA2B3] flex justify-between">
                    <span>TRACEABILITY: 100% LOT CONTROLLED</span>
                    <span>ERP SYNC: NETSUITE MANUFACTURING SUITEAPP</span>
                  </div>
                </div>
              )}
            </div>

            {/* Interactive Bounding Boxes Overlay */}
            {showBoundingBoxes && (
              <div className="absolute inset-0 pointer-events-none">
                {currentDoc.fields.map((field) => {
                  const isHovered = activeFieldId === field.id;
                  const isReview = field.status === 'review_required';
                  return (
                    <div
                      key={field.id}
                      onClick={() => setActiveFieldId(field.id)}
                      className={`absolute rounded transition-all pointer-events-auto cursor-pointer border ${
                        isReview
                          ? isHovered
                            ? 'border-amber-400 bg-amber-400/20 shadow-[0_0_12px_rgba(251,191,36,0.5)] z-20 ring-2 ring-amber-400'
                            : 'border-amber-400/80 bg-amber-400/10 z-10'
                          : isHovered
                            ? 'border-[#65D9E8] bg-[#65D9E8]/20 shadow-[0_0_12px_rgba(101,217,232,0.5)] z-20 ring-2 ring-[#65D9E8]'
                            : 'border-[#65D9E8]/60 bg-[#65D9E8]/5 hover:bg-[#65D9E8]/15 z-10'
                      }`}
                      style={{
                        top: `${field.box.top}%`,
                        left: `${field.box.left}%`,
                        width: `${field.box.width}%`,
                        height: `${field.box.height}%`
                      }}
                    >
                      {/* Bounding Box Floating Tooltip Tag */}
                      <div className={`absolute -top-5 left-0 text-[9px] font-mono font-bold px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap flex items-center gap-1 ${
                        isReview
                          ? 'bg-amber-400 text-[#101820]'
                          : 'bg-[#65D9E8] text-[#101820]'
                      }`}>
                        <span>{field.name}</span>
                        <span>({field.confidence}%)</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Document Bottom Footer Status */}
            <div className="border-t border-[#43515D]/40 pt-3 mt-3 flex items-center justify-between text-[11px] text-[#8DA2B3]">
              <div className="flex items-center gap-2">
                <FileCheck className="w-3.5 h-3.5 text-[#65D9E8]" />
                <span>Deterministic Confidence Gate: <strong className="text-[#F4F7FA]">≥95.0% Auto-Approved</strong></span>
              </div>
              <div className="font-mono text-[10px] text-[#8DA2B3]">
                SHA-256 INTEGRITY VERIFIED
              </div>
            </div>
          </div>

          <div className="mt-3 text-[11px] text-[#8DA2B3] flex items-center justify-between">
            <span>Hover or click any highlighted bounding box on the document to cross-examine extracted parameters.</span>
            <span className="font-mono text-[#65D9E8]">DocID: {currentDoc.id}</span>
          </div>
        </div>

        {/* Right Column: Structured Extraction Inspector & JSON Schema (5 Cols) */}
        <div className="lg:col-span-5 bg-[#121c26] p-4 sm:p-6 flex flex-col justify-between">
          <div>
            {/* View Tab Switcher */}
            <div className="flex items-center justify-between border-b border-[#43515D]/40 pb-3 mb-5">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('extracted')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeTab === 'extracted'
                      ? 'bg-[#16222e] text-[#65D9E8] border border-[#65D9E8]/40'
                      : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
                  }`}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Structured Fields ({currentDoc.fields.length})</span>
                </button>
                <button
                  onClick={() => setActiveTab('json')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                    activeTab === 'json'
                      ? 'bg-[#16222e] text-[#65D9E8] border border-[#65D9E8]/40'
                      : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>API JSON Schema</span>
                </button>
              </div>

              {/* Overall Confidence Badge */}
              <div className="text-right">
                <div className="text-[10px] text-[#8DA2B3] uppercase font-mono">Confidence</div>
                <div className="text-sm font-bold font-mono text-[#65D9E8]">{currentDoc.overallConfidence}%</div>
              </div>
            </div>

            {/* Tab 1: Extracted Fields List */}
            {activeTab === 'extracted' && (
              <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                {currentDoc.fields.map((field) => {
                  const isSelected = activeFieldId === field.id;
                  const isReview = field.status === 'review_required';

                  return (
                    <div
                      key={field.id}
                      onClick={() => setActiveFieldId(field.id)}
                      onMouseEnter={() => setActiveFieldId(field.id)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isSelected
                          ? isReview
                            ? 'bg-amber-950/20 border-amber-400 shadow-md ring-1 ring-amber-400'
                            : 'bg-[#16222e] border-[#65D9E8] shadow-md ring-1 ring-[#65D9E8]'
                          : 'bg-[#101820]/60 border-[#43515D]/40 hover:border-[#65D9E8]/50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-[#F4F7FA]">{field.name}</span>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            field.confidence >= 95
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                              : 'bg-amber-400/10 text-amber-400 border border-amber-400/30'
                          }`}>
                            {field.confidence}%
                          </span>

                          {field.status === 'verified' && (
                            <span className="text-[10px] text-emerald-400 flex items-center gap-0.5">
                              <CheckCircle2 className="w-3 h-3" />
                            </span>
                          )}
                          {field.status === 'review_required' && (
                            <span className="text-[10px] text-amber-400 flex items-center gap-0.5 font-semibold">
                              <AlertTriangle className="w-3 h-3" />
                            </span>
                          )}
                          {field.status === 'auto_matched' && (
                            <span className="text-[10px] text-[#65D9E8] flex items-center gap-0.5">
                              <ShieldCheck className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Extracted Value with High Contrast Readability */}
                      <div className="text-xs font-mono text-[#F4F7FA] bg-[#0b1016] px-2.5 py-1.5 rounded border border-[#43515D]/40 break-words mb-1.5">
                        {field.value}
                      </div>

                      {/* Flag Warning Note if Review Required */}
                      {field.note && (
                        <div className="text-[11px] text-amber-300/90 bg-amber-950/30 border border-amber-800/40 rounded px-2 py-1 flex items-start gap-1.5 mt-2">
                          <AlertTriangle className="w-3 h-3 shrink-0 mt-0.5 text-amber-400" />
                          <span>{field.note}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Tab 2: Raw JSON Output Payload */}
            {activeTab === 'json' && (
              <div className="bg-[#0b1016] border border-[#43515D]/50 rounded-xl p-3.5 max-h-[460px] overflow-y-auto font-mono text-xs text-[#8DA2B3]">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#43515D]/30 text-[10px] text-[#65D9E8]">
                  <span>OUTPUT PAYLOAD · REST / EVENT BUS READY</span>
                  <span>ENCODING: UTF-8</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-[#F4F7FA] whitespace-pre-wrap">
                  {JSON.stringify(currentDoc.jsonOutput, null, 2)}
                </pre>
              </div>
            )}
          </div>

          {/* Action / Downstream Integration Status */}
          <div className="mt-5 pt-4 border-t border-[#43515D]/40">
            <div className="bg-[#101820] p-3 rounded-xl border border-[#43515D]/40 flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#65D9E8] shrink-0" />
                <div>
                  <div className="text-[#F4F7FA] font-medium">Downstream Destination</div>
                  <div className="text-[11px] text-[#8DA2B3]">
                    {currentDoc.id === 'rfq-aerospace' && 'Quotation Engine & Lead Engineer Worklist'}
                    {currentDoc.id === 'invoice-3way' && 'SAP S/4HANA Accounts Payable Clearing Run'}
                    {currentDoc.id === 'bom-hierarchy' && 'NetSuite Manufacturing Bill of Materials Matrix'}
                  </div>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#65D9E8]/10 text-[#65D9E8] font-mono text-[11px] font-bold shrink-0">
                <Check className="w-3 h-3" />
                QUEUED
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
