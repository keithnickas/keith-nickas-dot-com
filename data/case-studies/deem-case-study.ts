import { Target, Users, Zap } from "lucide-react";
import type { CaseStudy } from "@/components/types/case-study-types";

const deemCaseStudy: CaseStudy = {
    title: "From Monolith to Modern SPA",
    company: "Deem, Inc.",
    role: "Senior Software Engineer / Technical Lead",
    timeline: "July 2014 - October 2016 & July 2017 - May 2020",
    tags: ["React", "SPA", "TDD", "Accessibility", "Mentorship", "Component Libraries"],
    overview: "Led the transformation of a legacy travel booking platform into a modern single-page application, while establishing React best practices and mentoring global development teams.",
    challenge: {
      title: "The Challenge",
      content: "Deem's travel booking platform was built on legacy server-side rendering technology that made rapid iteration difficult and created inconsistent user experiences. The system had grown organically over years, resulting in duplicated code, accessibility issues, and slower development cycles. Additionally, teams across multiple continents needed alignment on modern frontend practices. The challenge was to modernize the tech stack while maintaining business continuity, establish shared component libraries to reduce duplication, and uplift team capabilities through mentorship and best practices."
    },
    approach: {
      title: "My Approach",
      steps: [
        {
          title: "Strategic Migration to React SPA",
          description: "Led the architecture and development of Deem's first React-based single-page application for flight search and booking workflows. Designed the migration strategy to minimize business disruption—rolling out new features in React while gradually sunsetting legacy code. Established routing, state management patterns, and data fetching strategies that became the foundation for future development."
        },
        {
          title: "Shared Component Library Development",
          description: "Architected and delivered shared React component libraries for travel and booking applications, improving consistency and maintainability across products. Created reusable components for flight search results, seat maps, trip review workflows, and booking confirmations. Implemented design tokens and style guides to ensure visual consistency."
        },
        {
          title: "Testing & Accessibility Standards",
          description: "Championed test-driven development (TDD) practices across teams, establishing comprehensive testing infrastructure with Jest and React Testing Library. Promoted accessibility best practices ensuring WCAG compliance. Created testing guidelines and documentation that became team standards."
        },
        {
          title: "Global Team Mentorship",
          description: "Mentored junior and mid-level developers across global teams in the US, India, and Eastern Europe. Conducted code reviews, pair programming sessions, and technical workshops on React patterns, TDD, and accessibility. Established coding standards and best practices documentation that accelerated team productivity."
        }
      ]
    },
    impact: {
      title: "Business Impact",
      areas: [
        {
          icon: Zap,
          title: "Performance & Costs",
          description: "Reduced operating costs through targeted refactoring and modern build optimizations. Improved application performance with code splitting and lazy loading strategies."
        },
        {
          icon: Users,
          title: "Team Velocity",
          description: "Accelerated development cycles by establishing shared component libraries. Teams could build features faster by reusing battle-tested components rather than rebuilding from scratch."
        },
        {
          icon: Target,
          title: "Code Quality",
          description: "Elevated code quality across teams through TDD practices and comprehensive code reviews. Reduced bugs and improved maintainability with TypeScript and automated testing."
        }
      ]
    },
    results: {
      title: "Results & Impact",
      metrics: [
        { label: "Legacy Code", value: "Retired", description: "modernized to React SPA" },
        { label: "Component Reuse", value: "70%+", description: "across travel applications" },
        { label: "Operating Costs", value: "Reduced", description: "through optimization" },
        { label: "Team Capability", value: "Enhanced", description: "via global mentorship" }
      ]
    },
    technicalHighlights: [
      "Architected first React SPA for flight search, seat selection, and trip booking workflows",
      "Built shared component library used across multiple travel booking applications",
      "Established TDD practices with comprehensive test coverage using Jest and React Testing Library",
      "Implemented accessibility standards (WCAG 2.1 AA) for booking flows serving diverse users",
      "Created design system with reusable components for search results, filters, and booking forms",
      "Optimized bundle sizes and load times through code splitting and lazy loading",
      "Integrated modern build tooling (Webpack, Babel) and established CI/CD pipelines",
      "Mentored 15+ developers across three continents on React, testing, and accessibility"
    ],
    keyFeatures: [
      {
        title: "Flight Search & Results",
        description: "Interactive flight search with real-time filtering, sorting, and comparison. Built complex data tables with virtualization for handling thousands of flight options."
      },
      {
        title: "Seat Map Selection",
        description: "Interactive SVG-based seat maps allowing users to select preferred seating. Handled various aircraft configurations and seat availability states."
      },
      {
        title: "Trip Review & Booking",
        description: "Multi-step booking flow with real-time validation, price calculations, and confirmation screens. Optimized for accessibility and mobile devices."
      }
    ],
    learnings: [
      "Gradual migration beats big-bang rewrites—rolling out new features incrementally maintained business continuity while modernizing the stack",
      "Shared component libraries pay dividends but require dedicated maintenance—set clear ownership and governance early",
      "Investing in mentorship creates force multipliers—upskilling teams across time zones accelerated the entire organization",
      "Test coverage isn't just about bugs—it enables confident refactoring and faster feature development",
      "Accessibility can't be bolted on later—integrating a11y from the start saves time and reaches more users"
    ]
  };

export default deemCaseStudy;
