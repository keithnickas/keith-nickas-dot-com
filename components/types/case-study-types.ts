import { LucideIcon } from "lucide-react";

export interface CaseStudyMetric {
  label: string;
  value: string;
  description: string;
}

export interface CaseStudyApproachStep {
  title: string;
  description: string;
}

export interface CaseStudyApproach {
  title: string;
  steps: CaseStudyApproachStep[];
}

export interface CaseStudyChallenge {
  title: string;
  content: string;
}

export interface CaseStudyImpactArea {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CaseStudySystemPillars {
  pillars: CaseStudySystemPillar[];
  title: string;
}

export interface CaseStudySystemPillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface CaseStudyImpact {
  title: string;
  areas: CaseStudyImpactArea[];
}

export interface CaseStudyResults {
  title: string;
  metrics: CaseStudyMetric[];
}

export interface CaseStudyUserFlow {
  title: string;
  description: string;
}

export interface CaseStudyKeyFeature {
  title: string;
  description: string;
}

export interface CaseStudyKeyFeatures {
  title?: string;
  features: CaseStudyKeyFeature[];
}

export interface CaseStudyComponentShowcase {
  examples: string;
  category: string;
}

export interface TechnicalHighlights {
  title?: string;
  highlights: string[];
}

export interface CaseStudy {
  title: string;
  company?: string;
  role?: string;
  timeline?: string;
  tags?: string[];
  overview?: string;
  challenge?: CaseStudyChallenge;
  approach?: CaseStudyApproach;
  results?: CaseStudyResults;
  technicalHighlights?: TechnicalHighlights;
  learnings?: string[];
  impact?: CaseStudyImpact;
  userFlows?: CaseStudyUserFlow[];
  keyFeatures?: CaseStudyKeyFeatures;
  systemPillars?: CaseStudySystemPillars;
  componentShowcase?: CaseStudyComponentShowcase[];
}

export interface DocumentMetaData {
  version: string;
  date: string;
  author: string;
}

export interface CaseStudyData extends CaseStudy {
  documentMetaData?: DocumentMetaData;
  documentType?: string;
}