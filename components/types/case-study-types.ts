import { LucideIcon } from "lucide-react";
import React from "react";

export interface CaseStudyMetric {
  icon?: React.ComponentType<any>;
  label: string;
  value?: string;
  before?: string;
  after?: string;
  improvement?: string;
  description?: string;
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
  icon?: React.ComponentType<any>;
  title: string;
  description: string;
}

export interface CaseStudySystemPillars {
  pillars: CaseStudySystemPillar[];
  title: string;
}

export interface CaseStudySystemPillar {
  icon?: React.ComponentType<any>;
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

export interface Bottlenecks {
  title: string;
  description: string;
  severity: "Critical" | "High" | "Medium" | "Low";
}

export interface CaseStudy {
  approach?: CaseStudyApproach;
  bottlenecks?: Bottlenecks[];
  challenge?: CaseStudyChallenge;
  company?: string;
  componentShowcase?: CaseStudyComponentShowcase[];
  impact?: CaseStudyImpact;
  keyFeatures?: CaseStudyKeyFeatures;
  learnings?: string[];
  overview?: string;
  results?: CaseStudyResults;
  role?: string;
  systemPillars?: CaseStudySystemPillars;
  tags?: string[];
  technicalHighlights?: TechnicalHighlights;
  timeline?: string;
  title: string;
  userFlows?: CaseStudyUserFlow[];
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