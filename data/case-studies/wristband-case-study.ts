import type { CaseStudy } from "@/components/types/case-study-types"

const wristbandCaseStudy: CaseStudy = {
  title: "Authentication UX That Just Works",
  company: "Wristband",
  role: "Principal Frontend Engineer (Part-Time)",
  timeline: "April 2020 - Present",
  tags: ["React", "Next.js", "Auth", "Testing", "UX Design", "Design Systems"],
  overview:
    "Led frontend architecture and dashboard development for a customer identity and access management (CIAM) platform, focusing on seamless authentication experiences and developer-friendly integrations.",
  challenge: {
    title: "The Challenge",
    content:
      "Authentication flows are notoriously complex and error-prone. Wristband needed to provide enterprise-grade CIAM capabilities while maintaining a delightful user experience. The challenge was building intuitive dashboards for non-technical users to configure complex auth flows, while also creating SDKs that developers would actually want to use. Additionally, the onboarding process needed to be simple enough for quick adoption but powerful enough for enterprise security requirements.",
  },
  approach: {
    title: "My Approach",
    steps: [
      {
        title: "Frontend Architecture & Design System",
        description:
          "Established React and Next.js architecture patterns from the ground up. Built a component-based design system with reusable UI patterns that ensure consistency across dashboards and public-facing pages. Implemented TypeScript for type safety and better developer experience.",
      },
      {
        title: "Dashboard UX & Testable Flows",
        description:
          "Partnered closely with product and design teams to create intuitive configuration interfaces. Implemented comprehensive testing strategies using Jest and React Testing Library to ensure auth flows worked reliably. Built iterative flows that guide users through complex setup without overwhelming them.",
      },
      {
        title: "Authentication & Onboarding Optimization",
        description:
          "Redesigned the authentication experience to reduce friction while maintaining security. Streamlined onboarding flows with progressive disclosure—showing users only what they need when they need it. Implemented smart defaults to minimize configuration burden.",
      },
      {
        title: "Developer Tools & Documentation",
        description:
          "Created interactive documentation and code examples. Built Vue.js authentication SDK with comprehensive technical design documentation (TDD). Focused on making integration as simple as possible—developers should spend minutes, not hours, implementing auth.",
      },
    ],
  },
  results: {
    title: "Results & Impact",
    metrics: [
      {
        label: "User Experience",
        value: "Significantly Improved",
        description: "intuitive auth configuration",
      },
      {
        label: "Onboarding Time",
        value: "Reduced",
        description: "streamlined setup flows",
      },
      {
        label: "Code Quality",
        value: "Enhanced",
        description: "comprehensive test coverage",
      },
      {
        label: "Developer Adoption",
        value: "Accelerated",
        description: "easy-to-use SDKs",
      },
    ],
  },
  technicalHighlights: {
    title: "Technical Highlights",
    highlights: [
      "Built full-stack dashboard using React, Next.js, and TypeScript with strong type safety",
      "Designed and implemented reusable component library following atomic design principles",
      "Created Vue.js authentication SDK with detailed technical design documentation",
      "Established testing infrastructure using Jest, React Testing Library, and E2E testing",
      "Implemented accessibility standards (WCAG 2.1 AA) across all user interfaces",
      "Optimized application performance through code splitting and lazy loading strategies",
      "Built interactive onboarding flows with real-time validation and helpful error messages",
    ],
  },
  userFlows: [
    {
      title: "Simplified Configuration",
      description:
        "Multi-step wizards that break down complex auth setup into digestible chunks with smart defaults and inline help.",
    },
    {
      title: "Live Preview Mode",
      description:
        "Real-time preview of auth flows as users configure them, reducing trial-and-error and speeding up implementation.",
    },
    {
      title: "Developer Onboarding",
      description:
        "Interactive code snippets and SDK integration guides that adapt based on the user's tech stack and use case.",
    },
  ],
  learnings: [
    "Authentication UX is about trust—users need confidence that the system is secure without feeling the burden of complexity",
    "Progressive disclosure is key: show advanced options only when users are ready for them",
    "Developer experience matters as much as end-user experience—great documentation and clear APIs drive adoption",
    "Comprehensive testing isn't just about catching bugs—it enables confident iteration and faster feature development",
  ],
}

export default wristbandCaseStudy
