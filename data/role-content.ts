import { Role } from "@/components/types/roles"
import { emPillars, emImpactStats, emLeadershipHighlights, emWorkingStyle } from "./em-portfolio"
import { saPillars, saSystems, saCapabilities, saTechStack } from "./sa-portfolio"

export interface HeroContent {
  headline1: string
  gradient1: string
  headline2: string
  gradient2: string
  headline3?: string
  gradient3?: string
  subtext: string
  ctaLabel: string
  ctaHref: string
  quoteText: string
  quoteAuthor: string
  quoteRole: string
}

export interface PillarItem {
  title: string
  icon?: string
  skills: string[]
}

export const heroContent: Record<Role, HeroContent> = {
  frontend: {
    headline1: "Building systems that",
    gradient1: "from-cyan-400 via-purple-400 to-pink-400",
    headline2: "scale",
    gradient2: "from-purple-400 via-pink-400 to-orange-400",
    headline3: "experiences that convert",
    gradient3: "from-pink-400 via-orange-400 to-red-400",
    subtext:
      "10+ years architecting scalable React & Next.js applications with a focus on design systems, accessibility, and performance optimization.",
    ctaLabel: "View Frontend Work",
    ctaHref: "#work",
    quoteText:
      "Keith has saved the day for our team more times than I can remember. He has a deep understanding of many of the technologies we use day to day, but more importantly, he has intimate knowledge on how those things are configured and used for our project.",
    quoteAuthor: "Lisa L.",
    quoteRole: "Gap Colleague",
  },
  platform: {
    headline1: "Backend services that",
    gradient1: "from-violet-400 via-indigo-400 to-blue-400",
    headline2: "integrate cleanly",
    gradient2: "from-blue-400 via-cyan-400 to-teal-400",
    headline3: "platforms that compound",
    gradient3: "from-teal-400 via-emerald-400 to-green-400",
    subtext:
      "10+ years building modular Node.js/NestJS services, API contracts, shared UI platforms, and reusable abstractions that scale across teams.",
    ctaLabel: "View Platform Work",
    ctaHref: "#work",
    quoteText:
      "I've worked with Keith the past three years. He is an excellent front-end programmer. He led the team in the transition to React. Whenever there's a React or JavaScript issue, he is the first person I go to to help resolve the issue.",
    quoteAuthor: "James Park",
    quoteRole: "Deem Colleague",
  },
  em: {
    headline1: "Senior engineer",
    gradient1: "from-emerald-400 via-cyan-400 to-blue-400",
    headline2: "who leads teams",
    gradient2: "from-cyan-400 via-purple-400 to-pink-400",
    headline3: "and grows people",
    gradient3: "from-purple-400 via-pink-400 to-rose-400",
    subtext:
      "10+ years building frontend platforms — and the teams behind them. I've led engineers, managed delivery, driven architectural decisions, and mentored across seniority levels at Gap, Wristband, and Deem.",
    ctaLabel: "View Leadership Work",
    ctaHref: "#work",
    quoteText:
      "Keith has saved the day for our team more times than I can remember. He has a deep understanding of many of the technologies we use day to day, but more importantly, he has intimate knowledge on how those things are configured and used for our project.",
    quoteAuthor: "Lisa L.",
    quoteRole: "Gap Colleague",
  },
  sa: {
    headline1: "Full-stack architect who",
    gradient1: "from-indigo-400 via-purple-400 to-violet-400",
    headline2: "designs systems",
    gradient2: "from-violet-400 via-pink-400 to-rose-400",
    headline3: "that endure and scale",
    gradient3: "from-rose-400 via-orange-400 to-amber-400",
    subtext:
      "10+ years designing modular backend services, shared UI platforms, API contracts, and reusable abstractions — from database schema to React component, across Gap, Wristband, and Deem.",
    ctaLabel: "View Architecture Work",
    ctaHref: "#work",
    quoteText:
      "I've worked with Keith the past three years. He is an excellent front-end programmer. He led the team in the transition to React. Whenever there's a React or JavaScript issue, he is the first person I go to to help resolve the issue.",
    quoteAuthor: "James Park",
    quoteRole: "Deem Colleague",
  },
}

export const pillarsByRole: Record<Role, PillarItem[]> = {
  frontend: [
    {
      title: "Frontend Architecture",
      icon: "⚡",
      skills: ["React", "Vue.js", "Next.js", "TypeScript", "Component Design", "State Management", "Performance", "Scalability"],
    },
    {
      title: "Design Systems",
      icon: "🎨",
      skills: ["Storybook", "Component Libraries", "Design Tokens", "Accessibility (WCAG)", "Documentation", "Style Guides"],
    },
    {
      title: "Growth & UX",
      icon: "📈",
      skills: ["A/B Testing", "Analytics", "Conversion Optimization", "User Flows", "Experimentation"],
    },
  ],
  platform: [
    {
      title: "Backend Services",
      icon: "⚙️",
      skills: ["Node.js / NestJS", "REST API Design", "Validation Contracts", "Service-Oriented Architecture", "Modular Design"],
    },
    {
      title: "Data & Integration",
      icon: "🗄️",
      skills: ["PostgreSQL", "MySQL", "Schema Design", "Redshift", "RBAC & Authorization", "Codebase Audits", "Documentation/RFC", "Pair Training", "POC", "Analytics"],
    },
    {
      title: "Platform & Tooling",
      icon: "🔧",
      skills: ["Shared Component Libraries", "Internal Tooling", "CI/CD (GitHub Actions, Jenkins)", "Docker / Azure (AKS)", "Developer Experience"],
    },
  ],
  em: emPillars,
  sa: saPillars,
}

export const ctaByRole: Record<Role, { heading: string; subtext: string; gradientFrom: string; gradientTo: string; shadow: string }> = {
  frontend: {
    heading: "Let's Build Something Great",
    subtext: "Open to senior frontend roles, technical leadership, and consulting opportunities",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-purple-500",
    shadow: "hover:shadow-cyan-500/50",
  },
  platform: {
    heading: "Let's Build Lasting Platforms",
    subtext: "Open to Platform Engineer, Principal Engineer, and backend-focused senior IC roles",
    gradientFrom: "from-violet-500",
    gradientTo: "to-blue-500",
    shadow: "hover:shadow-violet-500/50",
  },
  em: {
    heading: "Let's Talk Leadership",
    subtext: "Open to Engineering Manager, Staff Engineer, and Technical Lead roles",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-cyan-500",
    shadow: "hover:shadow-emerald-500/50",
  },
  sa: {
    heading: "Let's Design Something Durable",
    subtext: "Open to Solutions Architect, Principal Engineer, and Platform Engineering roles",
    gradientFrom: "from-indigo-500",
    gradientTo: "to-violet-500",
    shadow: "hover:shadow-indigo-500/50",
  },
}

// Re-export role-specific section data for use in the unified portfolio
export { emImpactStats, emLeadershipHighlights, emWorkingStyle, saSystems, saCapabilities, saTechStack }
