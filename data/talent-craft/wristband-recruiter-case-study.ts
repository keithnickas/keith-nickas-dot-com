import { CheckCircle2, Gauge, Lock, Users } from "lucide-react"
import type { RecruiterCaseStudy } from "../../components/types/talent-craft-case-study-types"

const wristbandRecruiterCaseStudy: RecruiterCaseStudy = {
  title: "Enterprise Authentication Platform",
  company: "Wristband",
  role: "Principal Frontend Engineer (Part-Time)",
  timeline: "April 2020 - Present",
  tags: ["Product Development", "UX Design", "Developer Experience", "Testing", "SDK Development"],
  
  executiveSummary: "Led frontend architecture and dashboard development for enterprise CIAM platform serving technical and non-technical users. Transformed complex authentication workflows into intuitive interfaces that reduced onboarding time while maintaining enterprise-grade security. Built developer tools and SDKs that accelerated customer integration from hours to minutes.",
  
  businessContext: {
    situation: "Enterprise customers need robust authentication and access management, but typical CIAM solutions overwhelm users with complexity and have steep learning curves for integration.",
    stakeholders: ["Product Leadership", "Design Teams", "Backend Engineering", "Customer Success", "End Users (IT Admins & Developers)"],
    constraints: ["Balance security requirements with usability", "Support both technical and non-technical users", "Enable quick onboarding without sacrificing enterprise capabilities"],
  },
  
  roleResponsibilities: {
    scope: "End-to-end ownership of frontend architecture, dashboard UX, and developer SDK development. Direct partnership with product and design teams.",
    keyResponsibilities: [
      "Established React and Next.js architecture patterns from ground up",
      "Designed and built component-based design system ensuring consistency",
      "Created intuitive dashboard interfaces for configuring complex auth flows",
      "Developed Vue.js authentication SDK with comprehensive technical documentation",
      "Implemented testing infrastructure ensuring reliability of auth flows",
      "Optimized onboarding experience using progressive disclosure principles",
      "Collaborated with product and design teams to balance feature requests with usability",
    ],
  },
  
  capabilities: [
    {
      title: "Product Development & UX Design",
      description: "Translated complex requirements into intuitive user experiences that delight both technical and non-technical users",
      examples: [
        "Redesigned authentication flows reducing friction while maintaining security",
        "Built multi-step wizards breaking down complex setup into digestible chunks",
        "Implemented smart defaults minimizing configuration burden for new users",
      ],
    },
    {
      title: "Developer Experience & Tools",
      description: "Created SDKs and documentation that developers actually want to use",
      examples: [
        "Built Vue.js authentication SDK with detailed technical design documentation",
        "Created interactive code examples and integration guides",
        "Designed clear APIs making authentication implementation take minutes, not hours",
      ],
    },
    {
      title: "Quality Engineering & Testing",
      description: "Established comprehensive testing strategies ensuring auth flows work reliably",
      examples: [
        "Implemented testing infrastructure using Jest and React Testing Library",
        "Built E2E testing for critical authentication workflows",
        "Ensured accessibility standards (WCAG 2.1 AA) across all interfaces",
      ],
    },
    {
      title: "Long-Term Partnership & Collaboration",
      description: "Maintained productive working relationship over 5+ years through clear communication and quality delivery",
      examples: [
        "Partnered closely with product and design teams on feature development",
        "Adapted to evolving requirements while maintaining system stability",
        "Balanced part-time engagement with consistent, high-quality output",
      ],
    },
  ],
  
  leadership: [
    {
      title: "Established Technical Foundation",
      description: "Built frontend architecture and design system from scratch, creating foundation that continues to scale as the product grows.",
    },
    {
      title: "User-Centered Design",
      description: "Advocated for user experience in technical discussions, ensuring authentication complexity didn't overwhelm end users.",
    },
    {
      title: "Cross-Functional Collaboration",
      description: "Worked effectively across product, design, and engineering to deliver features that balanced competing priorities.",
    },
  ],
  
  impact: {
    title: "Product & User Impact",
    metrics: [
      {
        label: "User Experience",
        value: "97% Positive Feedback",
        description: "Intuitive auth configuration",
        icon: Gauge,
      },
      {
        label: "Onboarding Time",
        value: "50%+ Reduction",
        description: "Streamlined setup flows",
        icon: CheckCircle2,
      },
      {
        label: "Code Quality",
        value: "69% Reduction in Bugs",
        description: "Comprehensive test coverage",
        icon: CheckCircle2,
      },
      {
        label: "Developer Adoption",
        value: "Accelerated",
        description: "Easy-to-use SDKs",
        icon: Users,
      },
    ],
  },
  
  skillsHighlight: {
    primary: ["Product Development", "UX Design", "Frontend Architecture", "Developer Experience", "Testing"],
    secondary: ["React", "Next.js", "Vue.js", "TypeScript", "Jest", "Testing Library", "Accessibility", "SDK Development"],
  },
}

export default wristbandRecruiterCaseStudy
