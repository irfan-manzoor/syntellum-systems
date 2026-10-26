export type Page = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'industries' 
  | 'approach' 
  | 'contact'
  | 'security'
  | 'service-ai-engineering'
  | 'service-ai-workflow-automation'
  | 'service-document-processing-automation'
  | 'service-rfq-quotation-automation'
  | 'service-systems-integration';

export type ServicePillar = 'ai-engineering' | 'workflow-automation' | 'systems-integration';

export interface ServiceItem {
  id: string;
  number: string;
  pillar: ServicePillar;
  title: string;
  shortDesc: string;
  fullDesc: string;
  problemsSolved: string[];
  components: string[];
  useCases: string[];
  iconName: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  tagline: string;
  overview: string;
  operationalContext: string;
  keyWorkflows: { title: string; desc: string }[];
  complianceNotes?: string;
  image?: string;
}

export interface ContactFormData {
  fullName: string;
  businessEmail: string;
  company: string;
  jobTitle: string;
  areaOfInterest: string;
  businessChallenge: string;
  existingSystems: string;
  desiredOutcome: string;
  projectDescription?: string;
  consent: boolean;
}

export interface ROICalculationResult {
  monthlyHoursReclaimed: number;
  monthlyCostSaved: number;
  annualCostSaved: number;
  turnaroundReductionPercent: number;
  projectedPaybackWeeks: number;
}
