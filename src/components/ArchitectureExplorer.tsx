import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Layers,
  FileText,
  Search,
  ShieldCheck,
  Eye,
  Server,
  ArrowRight,
  Database,
  Cpu,
  Workflow,
  Lock,
  Sliders,
  CheckCircle2,
  RefreshCw,
  Cloud,
  HardDrive,
  MessageSquare,
  Play,
  Check,
  Zap,
  Globe,
  Terminal,
  ArrowLeftRight
} from 'lucide-react';

interface ArchitectureNode {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  icon: React.ReactNode;
  protocols: string[];
  securityBoundary: string;
  failureMode: string;
  technicalDetails: string;
}

type IntegrationCategory = 'erp' | 'crm' | 'storage' | 'messaging' | 'database';

interface IntegrationProfile {
  id: IntegrationCategory;
  categoryName: string;
  headline: string;
  shortDescription: string;
  icon: React.ReactNode;
  supportedPlatforms: string[];
  inboundTrigger: string;
  authProtocol: string;
  syntellumRole: string;
  downstreamAction: string;
  typicalPayloadType: string;
  sampleInbound: Record<string, unknown>;
  sampleSyntellumNormalized: Record<string, unknown>;
  sampleOutboundDispatch: Record<string, unknown>;
  securityHighlights: string[];
}

export const ArchitectureExplorer: React.FC = () => {
  // Main view toggle: 'connectors' (ERP, CRM, Cloud Storage) vs 'pipelines' (RFQ, Invoice, CDC)
  const [viewMode, setViewMode] = useState<'connectors' | 'pipelines'>('connectors');

  // Connectors Mode State
  const [selectedCategory, setSelectedCategory] = useState<IntegrationCategory>('erp');
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(0);
  const [jsonViewTab, setJsonViewTab] = useState<'inbound' | 'syntellum' | 'dispatch'>('syntellum');

  // Pipelines Mode State
  const [activePipeline, setActivePipeline] = useState<'rfq' | 'invoice' | 'erp'>('rfq');
  const [selectedNodeId, setSelectedNodeId] = useState<string>('node-2');

  // Integration Profiles for ERP, CRM, Cloud Storage, Messaging, and Databases
  const integrationProfiles: Record<IntegrationCategory, IntegrationProfile> = {
    erp: {
      id: 'erp',
      categoryName: 'Enterprise ERP Systems',
      headline: 'Bespoke Connectors for SAP, NetSuite, Dynamics & Infor',
      shortDescription:
        'Bi-directional transactional synchronization that reads master product catalogs, validates pricing matrices, and posts validated purchase orders and quotation drafts without human re-keying.',
      icon: <Server className="w-5 h-5" />,
      supportedPlatforms: [
        'SAP S/4HANA & ECC 6.0',
        'Oracle NetSuite',
        'Microsoft Dynamics 365 F&O',
        'Infor CloudSuite',
        'Epicor ERP'
      ],
      inboundTrigger: 'Scheduled OData Polling, Webhook Events, or Debezium CDC Stream',
      authProtocol: 'Mutual TLS (mTLS) + OAuth 2.0 Client Credentials with Token Rotation',
      syntellumRole:
        'Ingests unstructured documents, parses line items, cross-references tier pricing, and maps specifications to exact ERP master item numbers.',
      downstreamAction:
        'Atomic write to ERP quote or sales order ledger with transactional rollback on schema violation.',
      typicalPayloadType: 'Multipart PDF / Scanned Drawing / Technical BOM',
      sampleInbound: {
        source: 'SAP S/4HANA (OData v4)',
        event: 'RFQ_INTAKE_PACKAGE_RECEIVED',
        rawDocument: 'RFQ_Machined_Flanges_RevC.pdf',
        fileSizeBytes: 4892100,
        customerAccountCode: 'DE-88219-M',
        unstructuredTextSnippet: 'Request quote for 250 units 316L Stainless Flanges per ASME B16.5, Class 300, deliver by Q3.'
      },
      sampleSyntellumNormalized: {
        syntellumEngine: 'DocumentIntelligence_v2.4',
        parsingConfidenceScore: 0.984,
        humanReviewRequired: false,
        extractedLineItems: [
          {
            internalPartNumber: 'FLG-SS316L-0300-04',
            description: '4-inch Class 300 Flange (ASME B16.5)',
            quantity: 250,
            unitOfMeasure: 'EA',
            materialGrade: 'ASTM A182 F316L',
            toleranceMm: 0.12,
            targetDeliveryDate: '2026-09-15'
          }
        ],
        pricingValidation: {
          currency: 'EUR',
          baseUnitPrice: 142.50,
          customerTierDiscountPct: 12.0,
          netUnitPrice: 125.40,
          totalQuotedValue: 31350.00,
          marginThresholdPassed: true
        }
      },
      sampleOutboundDispatch: {
        destinationEndpoint: 'POST /sap/opu/odata4/sap/api_salesorder/srvd_a2x/sap/salesorder/0001/SalesOrder',
        headers: {
          'Authorization': 'Bearer eyJhbGciOi...[mTLS Verified]',
          'X-Correlation-ID': 'syn-tx-9942a-88',
          'Content-Type': 'application/json'
        },
        payload: {
          SalesOrderType: 'QT',
          SalesOrganization: '1010',
          SoldToParty: 'DE-88219-M',
          PurchaseOrderByCustomer: 'RFQ-REV-C-2026',
          PricingDate: '2026-10-25',
          to_Item: [
            {
              Material: 'FLG-SS316L-0300-04',
              RequestedQuantity: 250,
              RequestedQuantityUnit: 'EA',
              NetPriceAmount: 125.40
            }
          ]
        },
        status: '201 Created (Quote #QT-904128)'
      },
      securityHighlights: [
        'Read-only replica access for initial catalog queries',
        'Idempotency keys prevent duplicate orders upon network retry',
        'Complete zero-retention memory buffer once dispatched to ERP'
      ]
    },
    crm: {
      id: 'crm',
      categoryName: 'CRM & Customer Portals',
      headline: 'Salesforce, HubSpot, Dynamics CRM & Zendesk',
      shortDescription:
        'Captures customer inquiries and RFQs directly from sales pipelines, verifies technical parameters, flags missing engineering specifications, and updates opportunity stages automatically.',
      icon: <Globe className="w-5 h-5" />,
      supportedPlatforms: [
        'Salesforce Sales & Service Cloud',
        'HubSpot Enterprise',
        'Microsoft Dynamics 365 CRM',
        'Zendesk Support',
        'Pipedrive'
      ],
      inboundTrigger: 'Salesforce Streaming API, HubSpot Webhooks, or REST Ingestion',
      authProtocol: 'OAuth 2.0 PKCE / Connected App with Scoped Role Boundaries',
      syntellumRole:
        'Inspects inbound correspondence and attachments, detects missing delivery dates or tolerances, auto-drafts customer clarification emails, and populates deal line items.',
      downstreamAction:
        'Enriches CRM Opportunity records, attaches parsed JSON telemetry, and alerts the assigned account executive.',
      typicalPayloadType: 'Customer Email Body + Multi-page Attachment Package',
      sampleInbound: {
        source: 'Salesforce (Opportunity Object #0064W000021XyZ)',
        event: 'OPPORTUNITY_ATTACHMENT_UPLOADED',
        sender: 'procurement@industrialclient.de',
        attachmentCount: 2,
        files: ['Specification_Sheet_v1.2.pdf', 'BOM_Extract.xlsx']
      },
      sampleSyntellumNormalized: {
        syntellumEngine: 'InquiryClassifier_v3',
        intent: 'TECHNICAL_QUOTATION_REQUEST',
        qualificationStatus: 'ACTIONABLE_WITH_CLARIFICATION',
        extractedOpportunityData: {
          projectTitle: 'Hydraulic Valve Replacement Cycle',
          estimatedUnits: 120,
          detectedPartCodes: ['HYD-VLV-440', 'HYD-ACT-12']
        },
        missingParametersDetected: [
          'Operating temperature range specification',
          'Target delivery port / incoterms'
        ],
        draftClientInquiryPrepared: true
      },
      sampleOutboundDispatch: {
        destinationEndpoint: 'PATCH /services/data/v58.0/sobjects/Opportunity/0064W000021XyZ',
        headers: {
          'Authorization': 'Bearer 00D5...[OAuth Scoped]',
          'Content-Type': 'application/json'
        },
        payload: {
          StageName: 'Technical Discovery In-Progress',
          Syntellum_Status__c: 'Missing_Parameters_Flagged',
          Estimated_Total_Units__c: 120,
          Technical_Summary__c: 'Extracted 2 part items. Automated clarification email queued for AE sign-off.',
          Confidence_Rating__c: '97.2%'
        },
        status: '204 No Content (Opportunity Updated)'
      },
      securityHighlights: [
        'Field-level encryption for customer contact identifiers',
        'Automated redact of sensitive banking or personal data',
        'Full audit logging synced to CRM activity history'
      ]
    },
    storage: {
      id: 'storage',
      categoryName: 'Cloud Storage & Document Vaults',
      headline: 'SharePoint, Amazon S3, Google Cloud & Azure Blob',
      shortDescription:
        'Watches enterprise document repositories, triggers automated layout-aware parsing on new uploads, extracts structured data from engineering drawings and PDFs, and writes back searchable metadata.',
      icon: <Cloud className="w-5 h-5" />,
      supportedPlatforms: [
        'Microsoft SharePoint Online & OneDrive',
        'Amazon AWS S3 & Glacier',
        'Google Cloud Storage (GCS)',
        'Microsoft Azure Blob Storage',
        'Box Enterprise'
      ],
      inboundTrigger: 'AWS S3 EventBridge, Microsoft Graph Webhooks, or Azure Event Grid',
      authProtocol: 'IAM Role Delegation / Azure Managed Identity (Zero Permanent Secrets)',
      syntellumRole:
        'Listens for file creation events, streams file bytes directly into ephemeral container memory, runs multi-modal OCR, and writes back searchable metadata indexes.',
      downstreamAction:
        'Deposits extracted JSON schemas, thumbnail previews, and audit logs into client-specified destination vaults.',
      typicalPayloadType: 'Multi-Gigabyte Scans, Scanned TIFFs, Engineering CAD PDFs',
      sampleInbound: {
        source: 'Microsoft SharePoint (Graph API v1.0)',
        site: 'https://client.sharepoint.com/sites/IndustrialOps',
        folder: '/Shared Documents/Incoming_Supplier_Invoices/2026-10/',
        fileName: 'INV_SteelForgings_2026_09441.pdf',
        event: 'FILE_CREATED'
      },
      sampleSyntellumNormalized: {
        syntellumEngine: 'LayoutParser_Vision_v2',
        pageCount: 3,
        documentClassification: 'SUPPLIER_TAX_INVOICE',
        extractedEntities: {
          supplierName: 'Alpine Precision Forgings GmbH',
          vatNumber: 'ATU68192014',
          invoiceNumber: 'INV-2026-09441',
          purchaseOrderRef: 'PO-98442',
          subtotalAmount: 18450.00,
          taxAmount: 3690.00,
          totalPayable: 22140.00
        },
        pageBoundingBoxesCaptured: 48,
        searchableTextLayerGenerated: true
      },
      sampleOutboundDispatch: {
        destinationEndpoint: 'PUT https://client-archive-vault.s3.eu-central-1.amazonaws.com/processed/2026/10/INV-2026-09441.json',
        headers: {
          'x-amz-server-side-encryption': 'aws:kms',
          'x-amz-server-side-encryption-aws-kms-key-id': 'arn:aws:kms:...[Client Key]',
          'Content-Type': 'application/json'
        },
        payload: {
          invoiceId: 'INV-2026-09441',
          extractionTimestamp: '2026-10-25T14:32:00Z',
          verifiedAgainstPO: true,
          erpSyncStatus: 'Ready_For_Ledger_Post'
        },
        status: '200 OK (Immutable Object Written)'
      },
      securityHighlights: [
        'Data never stored on intermediate Syntellum disks',
        'KMS client-managed key encryption at rest',
        'Isolated private subnet with VPC endpoints'
      ]
    },
    messaging: {
      id: 'messaging',
      categoryName: 'Communications & Event Streams',
      headline: 'Exchange / Outlook, Slack, Apache Kafka & RabbitMQ',
      shortDescription:
        'Connects operational communication streams to backend automated triage pipelines, transforming messy human messages into strictly validated event queues.',
      icon: <MessageSquare className="w-5 h-5" />,
      supportedPlatforms: [
        'Microsoft Exchange & Outlook 365',
        'Slack Enterprise Grid',
        'Apache Kafka',
        'RabbitMQ',
        'Redis Streams'
      ],
      inboundTrigger: 'IMAP / TLS 1.3, Microsoft Graph Subscriptions, or Kafka Consumer Groups',
      authProtocol: 'OAuth 2.0 Token Bearer / SASL_SSL SCRAM-512',
      syntellumRole:
        'Filters inbound noise, categorizes urgency, extracts document payloads, and fans out structured event notifications to operations teams.',
      downstreamAction:
        'Publishes partitioned events to Kafka topics or posts interactive review cards into Slack/Teams channels.',
      typicalPayloadType: 'Inbound Customer Email / Real-time Event Message',
      sampleInbound: {
        source: 'Microsoft Exchange (IMAP over TLS 1.3)',
        mailbox: 'rfq-intake@syntellum-client.com',
        subject: 'URGENT: RFQ for CNC Milling Batch #84',
        sender: 'k.bauer@precision-aero.de',
        hasAttachments: true
      },
      sampleSyntellumNormalized: {
        syntellumEngine: 'CommTriage_v1.9',
        urgencyScore: 'HIGH (48h target requested)',
        category: 'CNC_MACHINING_INQUIRY',
        extractedSummary: 'Request for rapid-turn CNC milling of 40 aluminum 7075-T6 components.',
        routingDestination: 'machining-estimators-queue'
      },
      sampleOutboundDispatch: {
        destinationEndpoint: 'POST https://kafka-cluster.internal.client.com:9092/topics/operations-rfq-inbox',
        headers: {
          'Kafka-Topic': 'operations-rfq-inbox',
          'Kafka-Partition': 'partition-04',
          'Compression': 'snappy'
        },
        payload: {
          eventId: 'evt-899142-ff',
          timestamp: '2026-10-25T14:32:02Z',
          triageCategory: 'CNC_MACHINING',
          urgency: 'HIGH',
          estimatorAssigned: 'T.Horvat',
          workbenchDeepLink: 'https://workbench.internal.client.com/rfq/899142'
        },
        status: 'Kafka ACK Leader Received (Offset 49102)'
      },
      securityHighlights: [
        'DKIM / SPF / DMARC verification on all inbound emails',
        'Malicious attachment quarantine before OCR execution',
        'Strict rate limiting preventing DoS attacks on internal queues'
      ]
    },
    database: {
      id: 'database',
      categoryName: 'Databases & Warehouses',
      headline: 'PostgreSQL, SQL Server, Snowflake & BigQuery',
      shortDescription:
        'Real-time Change Data Capture (CDC) and transactional adapters that synchronize data between on-premise relational tables, cloud analytics warehouses, and Syntellum automation pipelines.',
      icon: <Database className="w-5 h-5" />,
      supportedPlatforms: [
        'PostgreSQL & Supabase',
        'Microsoft SQL Server (2014–2024)',
        'Snowflake Data Cloud',
        'Google BigQuery',
        'Oracle Database (12c–23ai)'
      ],
      inboundTrigger: 'Debezium WAL (Write-Ahead Log) Sniffer / CDC Replication',
      authProtocol: 'Mutual TLS (mTLS) + Dedicated Service Account with Least Privilege',
      syntellumRole:
        'Monitors operational tables for changes, computes data diffs, applies transformations, and reconciles records across distributed databases.',
      downstreamAction:
        'Executes two-phase commits or streaming micro-batches to target data warehouses.',
      typicalPayloadType: 'Row Mutation Event (Insert / Update / Delete)',
      sampleInbound: {
        source: 'Microsoft SQL Server (CDC Log Sniffer)',
        database: 'Production_ERP_Legacy',
        table: 'dbo.tbl_CustomerOrderHeaders',
        operation: 'UPDATE',
        changedFields: ['OrderStatus', 'LastModifiedTimestamp']
      },
      sampleSyntellumNormalized: {
        syntellumEngine: 'CDC_ReplicationBridge_v2',
        transactionId: 'tx-sql-881940',
        mutationType: 'STATUS_TRANSITION_TO_APPROVED',
        verifiedMasterRecord: {
          orderNumber: 'ORD-77192',
          customerName: 'Bavaria Industrial Drives',
          totalApprovedValueEUR: 89400.00
        }
      },
      sampleOutboundDispatch: {
        destinationEndpoint: 'POST https://snowflake-account.snowflakecomputing.com/v1/data/streaming',
        headers: {
          'Authorization': 'Bearer [Snowflake JWT Key-Pair]',
          'Content-Type': 'application/json'
        },
        payload: {
          table: 'ANALYTICS_OPS.PUBLIC.ORDER_MILESTONES',
          rows: [
            {
              ORDER_ID: 'ORD-77192',
              EVENT: 'ORDER_APPROVED',
              VALUE_EUR: 89400.00,
              SYNC_LATENCY_MS: 38
            }
          ]
        },
        status: '200 OK (Snowpipe Ingestion Confirmed)'
      },
      securityHighlights: [
        'Zero table locking on production transactional tables',
        'SSL/TLS 1.3 enforced database replication streams',
        'Automatic offset checkpointing ensuring zero lost updates'
      ]
    }
  };

  // 5-Stage Operational Pipeline configs (for the second view mode)
  const pipelineConfigs: Record<string, {
    title: string;
    description: string;
    nodes: ArchitectureNode[];
  }> = {
    rfq: {
      title: 'Industrial RFQ & Quotation Pipeline',
      description: 'Ingests unstructured customer RFQ packages, parses complex line items, validates against catalog matrices, and pre-assembles draft quotes with human engineering sign-off.',
      nodes: [
        {
          id: 'node-1',
          number: '01',
          title: 'Multi-Channel Intake',
          shortDesc: 'Ingests inbound emails, attachments, and portal uploads.',
          icon: <FileText className="w-5 h-5" />,
          protocols: ['IMAP / Microsoft Graph API', 'Webhook Listener', 'SFTP / TLS 1.3'],
          securityBoundary: 'Isolated DMZ gateway with mime-type verification and anti-malware sandboxing.',
          failureMode: 'Dead-letter message queue (RabbitMQ) with automated retry and sender alert.',
          technicalDetails: 'Parses incoming MIME structures, unpacks nested ZIP/RAR packages, filters out marketing emails, and creates a unique transaction reference token.',
        },
        {
          id: 'node-2',
          number: '02',
          title: 'Layout-Aware Document Intelligence',
          shortDesc: 'Multi-modal OCR extracts parts, quantities, and material grades.',
          icon: <Cpu className="w-5 h-5" />,
          protocols: ['Computer Vision OCR', 'LayoutLM / Vision Transformer', 'Spatial Bounding Parser'],
          securityBoundary: 'Containerized inference in private VPC. Zero retention; no data training.',
          failureMode: 'Low-confidence flags (>5% unreadable text) trigger operator inspection queue.',
          technicalDetails: 'Performs deskewing, noise reduction, and vision-based table stitching across split pages to capture line items, requested delivery dates, and tolerance specs.',
        },
        {
          id: 'node-3',
          number: '03',
          title: 'Confidence & Validation Gating',
          shortDesc: 'Deterministic schema verification & margin checks.',
          icon: <ShieldCheck className="w-5 h-5" />,
          protocols: ['JSON Schema Validator', 'Deterministic Pricing Rules Engine', 'Confidence Scoring Engine'],
          securityBoundary: 'Air-gapped business logic engine verifying outputs against strict pricing models.',
          failureMode: 'Transactions scoring <95% confidence divert immediately to human review workbench.',
          technicalDetails: 'Cross-references extracted part numbers against ERP product catalog, validates unit-of-measure conversions (metric/imperial), and checks inventory lead times.',
        },
        {
          id: 'node-4',
          number: '04',
          title: 'Human-in-the-Loop Workbench',
          shortDesc: 'Estimators review pre-populated quotes in seconds.',
          icon: <Eye className="w-5 h-5" />,
          protocols: ['WebSockets / Realtime UI', 'Role-Based Access Control (RBAC)', 'Audit Logger'],
          securityBoundary: 'Session-authenticated workbench; changes logged with operator timestamp.',
          failureMode: 'Escalation to senior engineering supervisor if tolerances exceed defined safety bounds.',
          technicalDetails: 'Presents estimators with side-by-side view: original PDF on the left with highlighted bounding boxes, and editable draft fields on the right for one-click approval.',
        },
        {
          id: 'node-5',
          number: '05',
          title: 'ERP & Transactional Sync',
          shortDesc: 'Creates draft quotation directly in your business database.',
          icon: <Server className="w-5 h-5" />,
          protocols: ['SAP OData / BAPI', 'NetSuite SuiteTalk REST', 'PostgreSQL / SQL Server CDC'],
          securityBoundary: 'Encrypted mutual TLS (mTLS) with dedicated service principal credentials.',
          failureMode: 'Two-phase commit rollback with transactional audit log alert.',
          technicalDetails: 'Assembles line items into standard ERP quote structure, applies customer-specific contract discounts, reserves lead-time windows, and triggers CRM notification.',
        },
      ],
    },
    invoice: {
      title: 'Automated Invoice & 3-Way Matching Pipeline',
      description: 'Reconciles complex supplier invoices against purchase orders and receiving warehouse slips with automated tolerance variance detection.',
      nodes: [
        {
          id: 'node-1',
          number: '01',
          title: 'Document Ingestion',
          shortDesc: 'Monitors AP inboxes, EDI streams, and vendor portals.',
          icon: <FileText className="w-5 h-5" />,
          protocols: ['EDIFACT / X12', 'REST Webhooks', 'Automated Email Ingestion'],
          securityBoundary: 'Whitelisted vendor verification with DKIM/SPF validation.',
          failureMode: 'Unrecognized vendor invoices quarantined for verification.',
          technicalDetails: 'Captures PDF/TIFF vendor invoices, assigns ledger routing tags, and indexes document headers.',
        },
        {
          id: 'node-2',
          number: '02',
          title: 'Invoice Parsing & Extraction',
          shortDesc: 'Extracts PO numbers, line items, taxes, and bank terms.',
          icon: <Cpu className="w-5 h-5" />,
          protocols: ['Layout-Aware OCR', 'Entity Extraction Engine', 'Regex Schema Normalizers'],
          securityBoundary: 'Private tenant execution; IBAN and tax IDs encrypted in memory.',
          failureMode: 'OCR mismatch triggers manual dual-key verification.',
          technicalDetails: 'Extracts unit costs, sub-totals, VAT/freight line items, and payment remittance information.',
        },
        {
          id: 'node-3',
          number: '03',
          title: '3-Way Match Validation',
          shortDesc: 'Reconciles Invoice vs PO vs Warehouse Receiving Slip.',
          icon: <ShieldCheck className="w-5 h-5" />,
          protocols: ['Automated Ledger Comparison Engine', 'Variance Rule Engine'],
          securityBoundary: 'Strict financial separation of duties enforced by RBAC.',
          failureMode: 'Price or quantity variances outside ±0.5% flagged for buyer review.',
          technicalDetails: 'Verifies delivered quantities against physical receiving logs and unit prices against original purchase contracts.',
        },
        {
          id: 'node-4',
          number: '04',
          title: 'Exception Resolution Workbench',
          shortDesc: 'Flagged variances reviewed with highlighted source lines.',
          icon: <Eye className="w-5 h-5" />,
          protocols: ['Web Application Workbench', 'Immutable Audit Trails'],
          securityBoundary: 'SOC2 / ISO aligned role permissions for AP coordinators.',
          failureMode: 'Unresolved exceptions escalated to category procurement lead.',
          technicalDetails: 'Enables quick resolution of shipping freight discrepancies or short-shipments with 1-click vendor dispute generation.',
        },
        {
          id: 'node-5',
          number: '05',
          title: 'AP Ledger & Payment Posting',
          shortDesc: 'Direct posting to ERP accounting ledger.',
          icon: <Server className="w-5 h-5" />,
          protocols: ['Direct ERP Accounting API', 'Banking ISO 20022'],
          securityBoundary: 'Cryptographically signed transactional execution.',
          failureMode: 'Automatic hold placed if supplier bank account differs from master vendor file.',
          technicalDetails: 'Posts approved vouchers to accounts payable, applies early payment cash discounts, and queues payment batch.',
        },
      ],
    },
    erp: {
      title: 'Enterprise Multi-System Synchronization',
      description: 'Bi-directional, event-driven data integration connecting on-premise legacy databases with cloud automation tools with zero message loss.',
      nodes: [
        {
          id: 'node-1',
          number: '01',
          title: 'Source Change Capture',
          shortDesc: 'Real-time detection of database updates.',
          icon: <Database className="w-5 h-5" />,
          protocols: ['Debezium CDC', 'Database Triggers', 'Transactional Log Sniffer'],
          securityBoundary: 'Read-only replica access preventing any load on production master.',
          failureMode: 'Log offset checkpointing resumes seamlessly after reboot.',
          technicalDetails: 'Captures inserts, updates, and deletes from SQL Server, Oracle, and AS400 tables in milliseconds.',
        },
        {
          id: 'node-2',
          number: '02',
          title: 'Event Streaming & Queuing',
          shortDesc: 'Persistent, fault-tolerant message broker.',
          icon: <Workflow className="w-5 h-5" />,
          protocols: ['Apache Kafka', 'RabbitMQ', 'Redis Streams'],
          securityBoundary: 'End-to-end encrypted payload serialization (Avro / Protocol Buffers).',
          failureMode: 'Persistent disk-backed partitions ensure zero message loss.',
          technicalDetails: 'Guarantees at-least-once message delivery and strictly ordered transactional processing across branches.',
        },
        {
          id: 'node-3',
          number: '03',
          title: 'Schema Transformation & Mapping',
          shortDesc: 'Translates legacy records into modern JSON models.',
          icon: <Sliders className="w-5 h-5" />,
          protocols: ['TypeScript / Go Transformation Worker', 'JSON Schema Registry'],
          securityBoundary: 'Deterministic data sanitation preventing SQL injection or payload poisoning.',
          failureMode: 'Schema divergence routes to dead-letter queue with engineer telemetry alert.',
          technicalDetails: 'Transforms legacy fixed-width or proprietary database columns into normalized REST-compatible schemas.',
        },
        {
          id: 'node-4',
          number: '04',
          title: 'Conflict Resolution Engine',
          shortDesc: 'Handles concurrent edits across distributed systems.',
          icon: <ShieldCheck className="w-5 h-5" />,
          protocols: ['Vector Clocks', 'Last-Write-Wins / Rule-Based Arbitration'],
          securityBoundary: 'Strict operational business rules dictate system-of-record supremacy.',
          failureMode: 'Concurrent conflicting records flagged for administrative audit.',
          technicalDetails: 'Resolves simultaneous edits between field mobile apps, e-commerce stores, and central warehouse databases.',
        },
        {
          id: 'node-5',
          number: '05',
          title: 'Target System Dispatch',
          shortDesc: 'Bi-directional delivery to downstream systems.',
          icon: <Server className="w-5 h-5" />,
          protocols: ['REST', 'GraphQL', 'mTLS Webhooks'],
          securityBoundary: 'Token-based OAuth2 / Service Account authorization with rate limiting.',
          failureMode: 'Exponential backoff with circuit breaker pattern preventing target saturation.',
          technicalDetails: 'Executes idempotent writes to target CRMs, cloud data lakes, and field service portals.',
        },
      ],
    },
  };

  const activeProfile = integrationProfiles[selectedCategory];
  const currentPipeline = pipelineConfigs[activePipeline];
  const activeNode = currentPipeline.nodes.find((n) => n.id === selectedNodeId) || currentPipeline.nodes[1];

  // Simulation runner for the connectors mode
  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(1);

    setTimeout(() => {
      setSimulationStep(2);
    }, 1200);

    setTimeout(() => {
      setSimulationStep(3);
    }, 2400);

    setTimeout(() => {
      setSimulationStep(4);
    }, 3600);

    setTimeout(() => {
      setIsSimulating(false);
      setSimulationStep(0);
    }, 5200);
  };

  return (
    <div className="bg-[#101820] border border-[#43515D]/60 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8">
      {/* Header & Top View Mode Switcher */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-[#43515D]/50">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-[#65D9E8] mb-2">
            <Layers className="w-4 h-4 text-[#65D9E8]" />
            <span>Interactive Architecture & Systems Explorer</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7FA] tracking-tight">
            How Syntellum Connects Enterprise Systems
          </h3>
          <p className="text-sm text-[#8DA2B3] mt-1 max-w-2xl leading-relaxed">
            Toggle between core enterprise integration classes (ERP, CRM, Cloud Storage, Databases) to inspect live connector topologies, data schema mapping, and deterministic boundary security.
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 p-1.5 bg-[#16222e] border border-[#43515D]/60 rounded-xl shrink-0">
          <button
            onClick={() => setViewMode('connectors')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
              viewMode === 'connectors'
                ? 'bg-[#65D9E8] text-[#101820] shadow-sm'
                : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
            }`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
            <span>Enterprise Integrations (ERP / CRM / Cloud)</span>
          </button>
          <button
            onClick={() => setViewMode('pipelines')}
            className={`px-4 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer flex items-center gap-2 ${
              viewMode === 'pipelines'
                ? 'bg-[#65D9E8] text-[#101820] shadow-sm'
                : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
            }`}
          >
            <Workflow className="w-3.5 h-3.5" />
            <span>End-to-End Operational Pipelines</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          MODE 1: ENTERPRISE CONNECTORS (ERP, CRM, CLOUD STORAGE, MESSAGING, DB)
         ========================================================================= */}
      {viewMode === 'connectors' && (
        <div className="space-y-8">
          {/* Integration Category Toggles */}
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8DA2B3] block mb-3">
              SELECT ENTERPRISE INTEGRATION CATEGORY:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {[
                { id: 'erp', label: 'ERP Systems', sub: 'SAP, NetSuite, Dynamics', icon: <Server className="w-4 h-4" /> },
                { id: 'crm', label: 'CRM & Portals', sub: 'Salesforce, HubSpot', icon: <Globe className="w-4 h-4" /> },
                { id: 'storage', label: 'Cloud Storage', sub: 'SharePoint, S3, Azure', icon: <Cloud className="w-4 h-4" /> },
                { id: 'messaging', label: 'Messaging & Kafka', sub: 'Exchange, Slack, Queues', icon: <MessageSquare className="w-4 h-4" /> },
                { id: 'database', label: 'Data Warehouses', sub: 'Postgres, Snowflake', icon: <Database className="w-4 h-4" /> },
              ].map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setSelectedCategory(cat.id as IntegrationCategory);
                      setIsSimulating(false);
                      setSimulationStep(0);
                    }}
                    className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-[#16222e] border-[#65D9E8] shadow-lg shadow-[#65D9E8]/10 ring-1 ring-[#65D9E8]'
                        : 'bg-[#16222e]/40 border-[#43515D]/50 hover:border-[#8DA2B3]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-1.5 rounded-md ${isSelected ? 'bg-[#65D9E8] text-[#101820]' : 'bg-[#101820] text-[#8DA2B3]'}`}>
                        {cat.icon}
                      </div>
                      <span className={`text-[10px] font-mono font-bold uppercase ${isSelected ? 'text-[#65D9E8]' : 'text-[#8DA2B3]'}`}>
                        {isSelected ? 'ACTIVE' : 'READY'}
                      </span>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-[#F4F7FA] leading-tight">
                        {cat.label}
                      </div>
                      <div className="text-[11px] text-[#8DA2B3] mt-0.5 truncate">
                        {cat.sub}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Integration Headline & Overview */}
          <div className="bg-[#16222e] border-l-2 border-[#65D9E8] p-4 rounded-r-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-[#F4F7FA]">
                {activeProfile.headline}
              </h4>
              <p className="text-xs sm:text-sm text-[#8DA2B3] mt-1 leading-relaxed">
                {activeProfile.shortDescription}
              </p>
            </div>
            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className={`inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-lg transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                isSimulating
                  ? 'bg-[#65D9E8]/20 text-[#65D9E8] border border-[#65D9E8]'
                  : 'bg-[#65D9E8] text-[#101820] hover:bg-[#4ec2d1] shadow-md'
              }`}
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#65D9E8]" />
                  <span>Transacting Step {simulationStep}/3...</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Simulate Live Transaction</span>
                </>
              )}
            </button>
          </div>

          {/* 3-Column Systems Topology Visualizer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch relative">
            {/* Step 1: Source Enterprise System */}
            <div className={`lg:col-span-4 bg-[#16222e] border rounded-xl p-5 flex flex-col justify-between transition-all ${
              simulationStep === 1
                ? 'border-[#65D9E8] shadow-lg shadow-[#65D9E8]/20 ring-1 ring-[#65D9E8]'
                : 'border-[#43515D]/60'
            }`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#43515D]/40 mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#8DA2B3] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#65D9E8] animate-pulse" />
                    <span>01. SOURCE SYSTEM LAYER</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#101820] border border-[#43515D] text-[#8DA2B3] rounded">
                    Client Tenant
                  </span>
                </div>

                <h5 className="text-sm font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                  {activeProfile.icon}
                  <span>{activeProfile.categoryName}</span>
                </h5>

                <div className="space-y-3 text-xs mb-4">
                  <div>
                    <span className="text-[#8DA2B3] block text-[11px]">Supported Platforms:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {activeProfile.supportedPlatforms.map((plat, i) => (
                        <span key={i} className="px-2 py-0.5 bg-[#101820] border border-[#43515D]/50 text-[11px] text-[#F4F7FA] rounded">
                          {plat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[#8DA2B3] block text-[11px]">Ingestion Protocol:</span>
                    <span className="text-[#F4F7FA] font-medium font-mono text-[11px]">{activeProfile.inboundTrigger}</span>
                  </div>

                  <div>
                    <span className="text-[#8DA2B3] block text-[11px]">Authentication Model:</span>
                    <span className="text-[#65D9E8] font-mono text-[11px]">{activeProfile.authProtocol}</span>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-[#101820] border border-[#43515D]/40 rounded-lg text-xs text-[#8DA2B3]">
                <strong className="text-[#F4F7FA] block mb-0.5">Payload Type:</strong>
                {activeProfile.typicalPayloadType}
              </div>
            </div>

            {/* Connecting Bridge: Source -> Syntellum */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className={`w-full h-0.5 transition-colors ${simulationStep >= 1 ? 'bg-[#65D9E8]' : 'bg-[#43515D]'}`} />
                <ArrowRight className={`w-5 h-5 transition-colors ${simulationStep >= 1 ? 'text-[#65D9E8] animate-bounce' : 'text-[#8DA2B3]'}`} />
                <span className="text-[9px] font-mono text-[#8DA2B3] uppercase">mTLS 1.3</span>
              </div>
            </div>

            {/* Step 2: Syntellum Connective Core */}
            <div className={`lg:col-span-4 bg-[#16222e] border rounded-xl p-5 flex flex-col justify-between transition-all ${
              simulationStep === 2
                ? 'border-[#65D9E8] shadow-lg shadow-[#65D9E8]/20 ring-1 ring-[#65D9E8]'
                : 'border-[#65D9E8]/40'
            }`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#43515D]/40 mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#65D9E8] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>02. SYNTELLUM CORE ENGINE</span>
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-[#101820] border border-[#65D9E8]/40 text-[#65D9E8] rounded">
                    Zero-Retention VPC
                  </span>
                </div>

                <h5 className="text-sm font-bold text-[#F4F7FA] mb-2 flex items-center gap-2">
                  <Workflow className="w-4 h-4 text-[#65D9E8]" />
                  <span>Orchestration & Validation Core</span>
                </h5>

                <p className="text-xs text-[#8DA2B3] leading-relaxed mb-4">
                  {activeProfile.syntellumRole}
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-[#101820] border border-[#43515D]/40 rounded-lg flex items-center justify-between">
                    <span className="text-[#8DA2B3]">Layout & Schema Normalization:</span>
                    <span className="text-[#65D9E8] font-mono font-bold">100% Deterministic</span>
                  </div>
                  <div className="p-2.5 bg-[#101820] border border-[#43515D]/40 rounded-lg flex items-center justify-between">
                    <span className="text-[#8DA2B3]">Human Review Threshold:</span>
                    <span className="text-[#F4F7FA] font-mono font-semibold">Gated &lt; 95% Confidence</span>
                  </div>
                  <div className="p-2.5 bg-[#101820] border border-[#43515D]/40 rounded-lg flex items-center justify-between">
                    <span className="text-[#8DA2B3]">Execution SLA Target:</span>
                    <span className="text-[#65D9E8] font-mono font-bold">&lt; 1,800 ms</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#43515D]/40 flex items-center justify-between text-xs text-[#8DA2B3]">
                <span>Memory Buffer: Ephemeral</span>
                <span className="text-[#65D9E8] font-mono font-bold">No Training Storage</span>
              </div>
            </div>

            {/* Connecting Bridge: Syntellum -> Target */}
            <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className={`w-full h-0.5 transition-colors ${simulationStep >= 2 ? 'bg-[#65D9E8]' : 'bg-[#43515D]'}`} />
                <ArrowRight className={`w-5 h-5 transition-colors ${simulationStep >= 2 ? 'text-[#65D9E8] animate-bounce' : 'text-[#8DA2B3]'}`} />
                <span className="text-[9px] font-mono text-[#8DA2B3] uppercase">OAuth2 / CDC</span>
              </div>
            </div>

            {/* Step 3: Target Enterprise Destination */}
            <div className={`lg:col-span-2 bg-[#16222e] border rounded-xl p-5 flex flex-col justify-between transition-all ${
              simulationStep >= 3
                ? 'border-[#65D9E8] shadow-lg shadow-[#65D9E8]/20 ring-1 ring-[#65D9E8]'
                : 'border-[#43515D]/60'
            }`}>
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#43515D]/40 mb-4">
                  <span className="text-[11px] font-mono font-bold uppercase text-[#8DA2B3] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#65D9E8]" />
                    <span>03. TARGET</span>
                  </span>
                </div>

                <h5 className="text-sm font-bold text-[#F4F7FA] mb-2">
                  Downstream Write
                </h5>

                <p className="text-xs text-[#8DA2B3] leading-relaxed mb-4">
                  {activeProfile.downstreamAction}
                </p>
              </div>

              <div className="p-3 bg-[#101820] border border-[#43515D]/40 rounded-lg text-xs space-y-1">
                <div className="text-[10px] font-mono font-bold text-[#65D9E8] uppercase">
                  Transactional Safety:
                </div>
                <div className="text-[#8DA2B3] text-[11px]">
                  Two-phase commit with rollback telemetry.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive JSON Schema Inspector */}
          <div className="bg-[#101820] border border-[#43515D]/60 rounded-xl overflow-hidden">
            <div className="p-4 bg-[#16222e] border-b border-[#43515D]/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#65D9E8]" />
                <span className="text-xs font-mono font-bold uppercase text-[#F4F7FA]">
                  Live Payload & Schema Transformation Inspector:
                </span>
              </div>

              {/* Payload tabs */}
              <div className="flex gap-1.5 p-1 bg-[#101820] border border-[#43515D]/50 rounded-lg">
                <button
                  onClick={() => setJsonViewTab('inbound')}
                  className={`px-3 py-1 text-[11px] font-mono font-medium rounded transition-all cursor-pointer ${
                    jsonViewTab === 'inbound'
                      ? 'bg-[#43515D] text-[#F4F7FA]'
                      : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
                  }`}
                >
                  Raw Inbound Data
                </button>
                <button
                  onClick={() => setJsonViewTab('syntellum')}
                  className={`px-3 py-1 text-[11px] font-mono font-medium rounded transition-all cursor-pointer ${
                    jsonViewTab === 'syntellum'
                      ? 'bg-[#65D9E8] text-[#101820] font-bold'
                      : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
                  }`}
                >
                  Syntellum Normalized Schema
                </button>
                <button
                  onClick={() => setJsonViewTab('dispatch')}
                  className={`px-3 py-1 text-[11px] font-mono font-medium rounded transition-all cursor-pointer ${
                    jsonViewTab === 'dispatch'
                      ? 'bg-[#43515D] text-[#F4F7FA]'
                      : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
                  }`}
                >
                  Target API Dispatch
                </button>
              </div>
            </div>

            <div className="p-5 font-mono text-xs overflow-x-auto max-h-80 bg-[#0d141b] text-[#8DA2B3] leading-relaxed">
              <pre className="text-[#65D9E8]/90">
                {JSON.stringify(
                  jsonViewTab === 'inbound'
                    ? activeProfile.sampleInbound
                    : jsonViewTab === 'syntellum'
                    ? activeProfile.sampleSyntellumNormalized
                    : activeProfile.sampleOutboundDispatch,
                  null,
                  2
                )}
              </pre>
            </div>

            <div className="p-3 bg-[#16222e]/60 border-t border-[#43515D]/40 flex flex-wrap items-center justify-between gap-3 text-xs text-[#8DA2B3]">
              <div className="flex items-center gap-4">
                {activeProfile.securityHighlights.map((hl, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[11px]">
                    <Check className="w-3.5 h-3.5 text-[#65D9E8] shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
              <span className="font-mono text-[10px] text-[#65D9E8]">
                ISO 27001 / SOC 2 Ready Architecture
              </span>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          MODE 2: END-TO-END OPERATIONAL PIPELINES (RFQ, INVOICE, CDC)
         ========================================================================= */}
      {viewMode === 'pipelines' && (
        <div className="space-y-6">
          {/* Pipeline Segmented Control */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#16222e] border border-[#43515D]/60 rounded-xl shrink-0">
            {[
              { id: 'rfq', label: 'RFQ & Quoting Pipeline' },
              { id: 'invoice', label: 'Invoices & 3-Way Match' },
              { id: 'erp', label: 'Multi-ERP Data Sync' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActivePipeline(tab.id as any);
                  setSelectedNodeId('node-2');
                }}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  activePipeline === tab.id
                    ? 'bg-[#65D9E8] text-[#101820] shadow-sm'
                    : 'text-[#8DA2B3] hover:text-[#F4F7FA]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-[#8DA2B3] bg-[#16222e] border-l-2 border-[#65D9E8] p-3.5 rounded-r-lg">
            <strong className="text-[#F4F7FA]">{currentPipeline.title}:</strong> {currentPipeline.description}
          </div>

          {/* Interactive Horizontal Pipeline Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {currentPipeline.nodes.map((node) => {
              const isSelected = selectedNodeId === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNodeId(node.id)}
                  className={`p-4 rounded-xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'bg-[#16222e] border-[#65D9E8] shadow-lg shadow-[#65D9E8]/10 ring-1 ring-[#65D9E8]'
                      : 'bg-[#16222e]/40 border-[#43515D]/50 hover:border-[#8DA2B3]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className={`text-xs font-mono font-bold ${isSelected ? 'text-[#65D9E8]' : 'text-[#8DA2B3]'}`}>
                        STAGE {node.number}
                      </span>
                      <div className={`p-1.5 rounded-lg ${isSelected ? 'text-[#65D9E8] bg-[#101820]' : 'text-[#8DA2B3] bg-[#101820]/60'}`}>
                        {node.icon}
                      </div>
                    </div>
                    <h4 className="text-sm font-bold text-[#F4F7FA] mb-1 leading-snug">
                      {node.title}
                    </h4>
                    <p className="text-xs text-[#8DA2B3] leading-relaxed line-clamp-2">
                      {node.shortDesc}
                    </p>
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-2 border-t border-[#65D9E8]/30 text-[10px] font-mono font-bold uppercase text-[#65D9E8] flex items-center gap-1">
                      <span>Selected Node</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Inspection Panel for Selected Node */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activePipeline}-${activeNode.id}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#16222e] border border-[#65D9E8]/50 rounded-2xl p-6 sm:p-8 space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#43515D]/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#101820] border border-[#65D9E8]/40 flex items-center justify-center text-[#65D9E8]">
                    {activeNode.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase text-[#65D9E8] tracking-wider">
                      STAGE {activeNode.number} SPECIFICATION
                    </span>
                    <h4 className="text-xl font-bold text-[#F4F7FA]">
                      {activeNode.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-[#8DA2B3]">Status:</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold text-[#65D9E8] bg-[#101820] border border-[#65D9E8]/40 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#65D9E8] animate-pulse" />
                    Production Standard
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#F4F7FA] leading-relaxed">
                {activeNode.technicalDetails}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Box 1: Protocols & Technologies */}
                <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-4 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase block">
                    Protocols & Interfaces
                  </span>
                  <ul className="space-y-1.5 text-xs text-[#8DA2B3]">
                    {activeNode.protocols.map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#65D9E8]" />
                        <span className="text-[#F4F7FA] font-medium">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Box 2: Security & Isolation */}
                <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-4 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase flex items-center gap-1.5">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Security Boundary</span>
                  </span>
                  <p className="text-xs text-[#8DA2B3] leading-relaxed">
                    {activeNode.securityBoundary}
                  </p>
                </div>

                {/* Box 3: Failure Recovery */}
                <div className="bg-[#101820] border border-[#43515D]/50 rounded-xl p-4 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#65D9E8] uppercase flex items-center gap-1.5">
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Fault Tolerance & Fallback</span>
                  </span>
                  <p className="text-xs text-[#8DA2B3] leading-relaxed">
                    {activeNode.failureMode}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      )}
    </div>
  );
};
