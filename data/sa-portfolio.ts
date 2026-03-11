export const saPillars = [
  {
    title: "System Design & Architecture",
    icon: "🏛️",
    skills: [
      "Service-oriented & modular design",
      "API contracts & validation layers",
      "Reusable platform abstractions",
      "Multi-step workflow modeling",
      "Decoupled service boundaries",
    ],
  },
  {
    title: "Full Stack Integration",
    icon: "🔗",
    skills: [
      "Node.js / NestJS backend services",
      "React / Next.js frontend platforms",
      "PostgreSQL & MySQL schema design",
      "REST API design patterns",
      "RBAC & authorization architecture",
    ],
  },
  {
    title: "Platform Engineering",
    icon: "⚙️",
    skills: [
      "Shared component & service libraries",
      "Internal tooling & developer experience",
      "CI/CD pipeline architecture",
      "Docker & cloud infrastructure (Azure)",
      "Observability & performance patterns",
    ],
  },
]

export const saSystems = [
  {
    title: "Multi-Brand UI Platform",
    company: "Gap Inc.",
    color: "from-blue-500 to-cyan-500",
    description:
      "Architected a shared React/Next.js UI platform serving Gap and Banana Republic product teams. Established component standards and release patterns that reduced duplication and enabled parallel brand development at scale.",
    architecture: ["Shared component library", "Design token system", "CI/CD via GitHub Actions", "Microservice API integration", "Azure cloud deployment"],
    outcomes: ["Consistent cross-brand UX", "Faster time-to-feature across teams", "30% fewer post-deployment issues"],
    href: "/case-study/gap",
  },
  {
    title: "Auth Platform & Configurable Workflows",
    company: "Wristband",
    color: "from-purple-500 to-pink-500",
    description:
      "Designed and built full-stack modular services in Node.js/NestJS with React/Next.js frontends. Architected RBAC-compliant API layers, validation contracts, and condition-driven multi-step workflows with minimal coupling across services.",
    architecture: ["NestJS modular services", "MySQL schema design", "RBAC & API-level auth", "Frontend/backend validation contracts", "Shared UI primitives"],
    outcomes: ["Reliable frontend/backend integration", "Scalable auth flows", "Reduced tight coupling across services"],
    href: "/case-study/wristband",
  },
  {
    title: "Monolith-to-SPA Migration",
    company: "Deem, Inc.",
    color: "from-orange-500 to-red-500",
    description:
      "Architected Deem's first React SPA, including flight search, seat maps, and booking workflows. Introduced shared component libraries, optimized PostgreSQL queries, and leveraged Redshift for analytics and high-traffic data workflows.",
    architecture: ["React SPA architecture", "PostgreSQL schema optimization", "Redshift data layer", "Reusable component abstractions", "Cross-team design patterns"],
    outcomes: ["Improved performance at scale", "Reduced per-team development cost", "Foundation for future platform growth"],
    href: "/case-study/deem",
  },
]

export const saCapabilities = [
  {
    area: "API & Integration Design",
    description:
      "I design API interfaces and validation contracts that create reliable, predictable integration surfaces — enabling independent frontend and backend development without hidden dependencies.",
  },
  {
    area: "Platform & Reusability Thinking",
    description:
      "I build for the second team, not just the first. Shared libraries, design systems, and reusable service abstractions are how I turn one solution into compounding organizational value.",
  },
  {
    area: "Complexity Reduction",
    description:
      "I specialize in untangling tightly coupled systems — identifying the seams, modeling multi-step workflows clearly, and reducing architectural entropy without breaking what works.",
  },
  {
    area: "Cross-Stack Fluency",
    description:
      "From database schema to React component — I understand the full stack and can make architectural decisions that hold together at every layer, not just the one I'm closest to.",
  },
]

export const saTechStack = {
  frontend: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Design Systems"],
  backend: ["Node.js", "NestJS", "REST API Design", "GraphQL"],
  data: ["PostgreSQL", "MySQL", "Redshift", "Schema Design"],
  platform: ["Docker", "Azure (AKS)", "GitHub Actions", "Jenkins", "CI/CD"],
  practices: ["RBAC & Auth Architecture", "TDD", "WCAG / Accessibility", "Microservices", "Component Libraries"],
}
