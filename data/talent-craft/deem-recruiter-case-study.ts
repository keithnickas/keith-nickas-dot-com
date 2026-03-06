import { Globe, Target, TrendingUp, Users } from "lucide-react"
import type { RecruiterCaseStudy } from "@/components/types/talent-craft-case-study-types"

const deemRecruiterCaseStudy: RecruiterCaseStudy = {
  title: "Legacy Platform Modernization",
  company: "Deem, Inc.",
  role: "Senior Software Engineer / Technical Lead",
  timeline: "July 2014 - October 2016 & July 2017 - May 2020",
  tags: ["Technical Leadership", "Modernization", "Global Teams", "Mentorship", "Travel Technology"],
  
  executiveSummary: "Led transformation of legacy travel booking platform into modern React SPA, establishing shared component libraries and best practices adopted across global engineering teams. Mentored 15+ developers across three continents while reducing operating costs through strategic refactoring and modern optimization techniques.",
  
  businessContext: {
    situation: "Legacy travel booking platform built on outdated server-side rendering made rapid iteration difficult, created inconsistent user experiences, and slowed development cycles as system grew organically over years.",
    stakeholders: ["Engineering Leadership", "Product Management", "Global Development Teams (US, India, Eastern Europe)", "QA Teams", "Business Stakeholders"],
    constraints: ["Maintain business continuity during migration", "Coordinate across multiple time zones", "Support existing customer base without disruption", "Balance new feature development with modernization efforts"],
  },
  
  roleResponsibilities: {
    scope: "Technical leadership for frontend modernization initiative impacting multiple teams across continents. Owned architecture decisions and mentored global team members.",
    teamSize: "Mentored 15+ developers across 3 continents",
    keyResponsibilities: [
      "Led architecture and development of React-based single-page application",
      "Designed migration strategy minimizing business disruption",
      "Built shared component library for travel and booking applications",
      "Established test-driven development practices across teams",
      "Mentored junior and mid-level developers across global teams",
      "Conducted code reviews and technical workshops on React patterns and best practices",
      "Created documentation and standards that accelerated team productivity",
      "Championed accessibility best practices ensuring WCAG compliance",
    ],
  },
  
  capabilities: [
    {
      title: "Technical Leadership & Modernization",
      description: "Led complex platform migration while maintaining business continuity and delivering new features",
      examples: [
        "Architected React SPA for flight search, seat selection, and booking workflows",
        "Designed incremental migration strategy rolling out features without disrupting existing systems",
        "Established routing, state management, and data fetching patterns that became foundation for future development",
      ],
    },
    {
      title: "Global Team Leadership & Mentorship",
      description: "Effectively led and developed distributed teams across multiple time zones and cultures",
      examples: [
        "Mentored 15+ engineers across US, India, and Eastern Europe",
        "Conducted pair programming sessions and technical workshops on React, TDD, and accessibility",
        "Established coding standards and documentation accelerating team productivity",
      ],
    },
    {
      title: "Shared Systems & Reusability",
      description: "Built component libraries and established patterns that increased team velocity organization-wide",
      examples: [
        "Architected shared React component library used across multiple travel applications",
        "Created reusable components for search results, seat maps, booking flows, and confirmations",
        "Implemented design tokens and style guides ensuring visual consistency",
      ],
    },
    {
      title: "Quality & Accessibility",
      description: "Championed testing and accessibility practices that became team standards",
      examples: [
        "Established TDD practices with comprehensive test coverage using Jest and React Testing Library",
        "Ensured WCAG 2.1 AA compliance for booking flows serving diverse users",
        "Created testing guidelines and documentation adopted as team standards",
      ],
    },
  ],
  
  leadership: [
    {
      title: "Cross-Continental Team Development",
      description: "Successfully mentored and upskilled engineers across three continents, creating force multipliers that accelerated the entire organization.",
    },
    {
      title: "Change Management",
      description: "Led organization through significant technical transformation, managing stakeholder expectations while maintaining team morale and productivity.",
    },
    {
      title: "Standards & Best Practices",
      description: "Established testing, accessibility, and code quality standards that outlasted individual projects and elevated organizational capabilities.",
    },
  ],
  
  impact: {
    title: "Business & Organizational Impact",
    metrics: [
      {
        label: "Platform Modernization",
        value: "100% Migration to React SPA",
        description: "Legacy code retired for React SPA",
        icon: TrendingUp,
      },
      {
        label: "Component Reuse",
        value: "70%+",
        description: "Across travel applications",
        icon: Target,
      },
      {
        label: "Operating Costs",
        value: "20% Reduction",
        description: "Through optimization",
        icon: TrendingUp,
      },
      {
        label: "Global Team Capability",
        value: "Enhanced",
        description: "15+ engineers mentored",
        icon: Globe,
      },
    ],
  },
  
  skillsHighlight: {
    primary: ["Technical Leadership", "Global Team Mentorship", "Legacy Modernization", "Change Management", "Cross-Cultural Collaboration"],
    secondary: ["React", "SPA Architecture", "Test-Driven Development", "Accessibility", "Component Libraries", "Code Reviews", "Technical Workshops"],
  },
}

export default deemRecruiterCaseStudy
