import { CaseStudy } from "@/components/types/case-study-types"
import { Code2, Layers, Sparkles, TrendingUp } from "lucide-react"

const gapCaseStudy: CaseStudy = {
    title: "Multi-Brand Design System Platform",
    company: "Gap, Inc.",
    role: "Senior Software Engineer / Technical Lead",
    timeline: "March 2021 - May 2024, August 2024 - August 2025",
    tags: ["React", "Next.js", "Design Systems", "TypeScript", "Performance", "A/B Testing"],
    overview: "Led frontend architecture for shared UI platforms serving millions of users across Gap and Banana Republic brands, building scalable design systems that accelerated feature delivery while maintaining brand identity.",
    challenge: {
      title: "The Challenge",
      content: "Gap and Banana Republic were operating with fragmented UI systems developed independently by separate teams. This led to duplicated engineering effort, inconsistent user experiences across brands, and slower time-to-market for new features. Each brand maintained its own component libraries, resulting in the same UI patterns being built multiple times with different implementations. Teams struggled to maintain brand-specific differences while sharing common functionality. The challenge was to unify the frontend architecture without erasing brand identities, enable rapid experimentation through A/B testing, and create a system that would scale across multiple teams and products."
    },
    approach: {
      title: "My Approach",
      steps: [
        {
          title: "Token-Based Design System Architecture",
          description: "Partnered closely with design teams to establish a comprehensive design token system supporting both Gap and Banana Republic brand identities. Created a flexible architecture that maximized code reuse while allowing brand-specific customization through theme variables. Built foundational components with composition patterns that could adapt to different brand requirements without code duplication."
        },
        {
          title: "Shared Component Library Development",
          description: "Built and evolved a production-grade component library used by multiple product teams. Established clear component APIs, comprehensive documentation, and usage examples. Implemented TypeScript for type safety and better developer experience. Created automated visual regression testing with Applitools to catch UI inconsistencies early."
        },
        {
          title: "Performance & Growth Optimization",
          description: "Implemented frontend performance optimizations including code splitting, lazy loading, and bundle size reduction strategies. Integrated analytics and A/B testing frameworks to enable data-driven product decisions. Built instrumentation for tracking user interactions and conversion metrics across both brands."
        },
        {
          title: "Cross-Team Collaboration & Standards",
          description: "Established frontend standards and best practices adopted across multiple teams. Led architectural discussions and code reviews to ensure consistency. Created comprehensive documentation and conducted training sessions to accelerate team adoption. Worked with product, design, and marketing stakeholders to align on priorities and deliver customer-facing features iteratively."
        }
      ]
    },
    systemPillars: {
      title: "Design System Pillars",
      pillars: [
        {
          icon: Layers,
          title: "Component Architecture",
          description: "Atomic design principles with composable components. Built 50+ reusable components from buttons to complex data tables, each supporting theme customization."
        },
        {
          icon: Code2,
          title: "Developer Experience",
          description: "TypeScript for type safety, Storybook for component exploration, comprehensive documentation, and automated testing to enable confident development."
        },
        {
          icon: Sparkles,
          title: "Brand Flexibility",
          description: "Design token system allowing both brands to share components while maintaining distinct visual identities through theme configuration."
        },
        {
          icon: TrendingUp,
          title: "Performance First",
          description: "Optimized bundle sizes, code splitting strategies, and lazy loading patterns ensuring fast page loads across millions of sessions."
        }
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Users Served", value: "Millions", description: "across Gap & Banana Republic" },
        { label: "Component Reuse", value: "85%+", description: "of UI built with shared system" },
        { label: "Development Speed", value: "40% faster", description: "feature delivery timeline" },
        { label: "Code Quality", value: "Significantly Improved", description: "consistency & maintainability" }
      ]
    },
    technicalHighlights: [
      "Architected multi-brand design system with 50+ TypeScript components serving millions of users",
      "Implemented design token architecture supporting theme customization across Gap and Banana Republic",
      "Built comprehensive component library with Storybook documentation and usage examples",
      "Established automated visual regression testing pipeline using Applitools AI",
      "Optimized frontend performance through code splitting, lazy loading, and bundle size reduction",
      "Integrated analytics frameworks (Google Analytics, GTM) for conversion tracking and A/B testing",
      "Ensured WCAG 2.1 AA accessibility compliance across all shared components",
      "Created CI/CD pipelines for automated testing, building, and deployment",
      "Led migration from legacy systems to modern React/Next.js architecture",
      "Conducted technical workshops and pair programming sessions to upskill team members"
    ],
    componentShowcase: [
      {
        category: "Navigation & Layout",
        examples: "Headers, footers, navigation menus, grid systems, containers"
      },
      {
        category: "Forms & Inputs",
        examples: "Text fields, select dropdowns, checkboxes, radio buttons, validation patterns"
      },
      {
        category: "Product Display",
        examples: "Product cards, image galleries, quickview modals, size selectors, color swatches"
      },
      {
        category: "E-commerce",
        examples: "Shopping cart, checkout flows, payment forms, order confirmations"
      },
      {
        category: "Content & Media",
        examples: "Hero banners, content cards, video players, image carousels, promotional modules"
      },
      {
        category: "Feedback & Status",
        examples: "Loading states, error messages, toast notifications, progress indicators"
      }
    ],
    learnings: [
      "Early stakeholder alignment is critical when building shared systems—get buy-in from design, product, and engineering leadership before architecting solutions",
      "Design tokens are the foundation of multi-brand systems—invest time upfront to define a flexible token architecture that can scale",
      "Documentation and developer experience are as important as the code itself—teams won't adopt tools they don't understand or trust",
      "Balancing flexibility with consistency requires intentional constraints—provide enough customization options without allowing chaos",
      "Incremental migration beats big-bang rewrites—gradually introduce the design system while proving value to skeptical teams",
      "Visual regression testing saves countless hours—automated screenshot comparison catches issues before they reach production"
    ]
  }

export default gapCaseStudy
