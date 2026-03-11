import { Code2, Layers, TrendingUp, Users } from "lucide-react"
import type { RecruiterCaseStudy } from "../../components/types/talent-craft-case-study-types"

const gapRecruiterCaseStudy: RecruiterCaseStudy = {
  title: "Multi-Brand Design System Platform",
  company: "Gap, Inc.",
  role: "Senior Software Engineer / Technical Lead",
  timeline: "March 2021 - May 2024, August 2024 - August 2025",
  tags: ["Technical Leadership", "Cross-Team Collaboration", "Design Systems", "E-commerce", "Stakeholder Management"],
  
  executiveSummary: "Led frontend architecture for shared UI platforms serving millions of users across Gap and Banana Republic brands. Reduced development time by 40% through unified design system, enabling faster feature delivery while maintaining distinct brand identities. Collaborated with product, design, and engineering stakeholders to establish standards adopted across multiple teams.",
  
  businessContext: {
    situation: "Gap and Banana Republic were operating with fragmented UI systems developed independently, leading to duplicated engineering effort, inconsistent user experiences, and slower time-to-market for new features.",
    stakeholders: ["Product Management", "Design Teams", "Engineering Leadership", "Brand Marketing", "QA Teams", "External Agencies"],
    constraints: ["Maintain distinct brand identities", "Support millions of active users", "Zero downtime requirements", "Gradual migration without disrupting ongoing work"],
  },
  
  roleResponsibilities: {
    scope: "Full ownership of frontend architecture for shared platforms serving two major retail brands. Direct collaboration with design, product, and engineering leadership.",
    teamSize: "Led initiatives across 3-4 product teams (15+ engineers)",
    keyResponsibilities: [
      "Architected and built shared component library used by multiple product teams",
      "Established frontend standards and best practices adopted organization-wide",
      "Led technical decision-making for design system architecture and implementation",
      "Partnered with design teams to create token-based theming system supporting both brands",
      "Conducted code reviews and architectural discussions to ensure quality and consistency",
      "Mentored engineers on design system adoption and modern React patterns",
      "Integrated analytics and A/B testing frameworks enabling data-driven decisions",
    ],
  },
  
  capabilities: [
    {
      title: "Technical Leadership & Architecture",
      description: "Led frontend architecture decisions impacting multiple teams and products",
      examples: [
        "Designed token-based design system supporting two distinct brand identities",
        "Established component architecture patterns adopted across the organization",
        "Made strategic technology choices balancing innovation with stability",
      ],
    },
    {
      title: "Cross-Functional Collaboration",
      description: "Partnered effectively with diverse stakeholders to align on priorities and deliver results",
      examples: [
        "Worked closely with design teams to translate brand guidelines into reusable components",
        "Collaborated with product managers to prioritize features and balance competing demands",
        "Coordinated with marketing stakeholders to deliver customer-facing features iteratively",
      ],
    },
    {
      title: "Quality & Performance Engineering",
      description: "Implemented testing and optimization strategies ensuring reliable, fast experiences",
      examples: [
        "Built automated visual regression testing catching UI inconsistencies early",
        "Optimized performance through code splitting and lazy loading strategies",
        "Ensured accessibility compliance (WCAG 2.1 AA) across all shared components",
      ],
    },
    {
      title: "Team Development & Knowledge Sharing",
      description: "Elevated team capabilities through documentation, training, and mentorship",
      examples: [
        "Created comprehensive documentation and usage examples accelerating adoption",
        "Conducted technical workshops and training sessions for team members",
        "Established code review practices improving code quality across teams",
      ],
    },
  ],
  
  leadership: [
    {
      title: "Drove Organizational Change",
      description: "Successfully migrated multiple teams from independent component libraries to shared design system, requiring stakeholder buy-in and careful change management.",
    },
    {
      title: "Established Engineering Standards",
      description: "Created and evangelized frontend best practices adopted by multiple teams, improving code quality and developer productivity organization-wide.",
    },
    {
      title: "Mentored & Upskilled Teams",
      description: "Conducted pair programming sessions, code reviews, and technical workshops that accelerated team members' growth and capabilities.",
    },
  ],
  
  impact: {
    title: "Business Impact & Results",
    metrics: [
      {
        label: "Users Served",
        value: "10 Million+",
        description: "Active users across Gap & Banana Republic",
        icon: Users,
      },
      {
        label: "Component Reuse",
        value: "85%+",
        description: "Of UI built with shared system",
        icon: Layers,
      },
      {
        label: "Development Speed",
        value: "40% Faster",
        description: "Feature delivery timeline",
        icon: TrendingUp,
      },
      {
        label: "Code Quality",
        value: "64% Reduction in Bugs",
        description: "Consistency & maintainability",
        icon: Code2,
      },
    ],
  },
  
  skillsHighlight: {
    primary: ["Technical Leadership", "Frontend Architecture", "Design Systems", "Stakeholder Management", "Mentorship"],
    secondary: ["React", "Next.js", "TypeScript", "A/B Testing", "Performance Optimization", "Accessibility", "Storybook", "CI/CD"],
  },
}

export default gapRecruiterCaseStudy
