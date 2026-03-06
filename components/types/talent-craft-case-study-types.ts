export interface RecruiterCaseStudyMetric {
  label: string;
  value: string;
  description: string;
  icon?: React.ComponentType<any>;
}

export interface RecruiterCaseStudyCapability {
  title: string;
  description: string;
  examples: string[];
}

export interface RecruiterCaseStudyLeadership {
  title: string;
  description: string;
}

export interface RecruiterCaseStudy {
  title: string;
  company: string;
  role: string;
  timeline: string;
  tags: string[];
  
  // Executive Summary
  executiveSummary: string;
  
  // Business Context & Challenge
  businessContext: {
    situation: string;
    stakeholders: string[];
    constraints: string[];
  };
  
  // Your Role & Responsibilities
  roleResponsibilities: {
    scope: string;
    teamSize?: string;
    keyResponsibilities: string[];
  };
  
  // Key Capabilities Demonstrated
  capabilities: RecruiterCaseStudyCapability[];
  
  // Leadership & Collaboration
  leadership: RecruiterCaseStudyLeadership[];
  
  // Measurable Impact
  impact: {
    title: string;
    metrics: RecruiterCaseStudyMetric[];
  };
  
  // Skills & Technologies
  skillsHighlight: {
    primary: string[];
    secondary: string[];
  };
}
