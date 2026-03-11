import { Database, GitBranch, Search, Sparkles } from "lucide-react"
import type { RecruiterCaseStudy } from "../../components/types/talent-craft-case-study-types"

const pingletRecruiterCaseStudy: RecruiterCaseStudy = {
  title: "Job Discovery & Matching Platform",
  company: "Pinglet (Personal Project)",
  role: "Solo Developer / Architect",
  timeline: "2025",
  tags: ["Systems Design", "Product Development", "Data Engineering", "AI/ML", "API Integration"],
  
  executiveSummary: "Independently designed and built an end-to-end job discovery platform demonstrating full-stack capabilities, systems thinking, and product sense. Created explainable matching algorithms that dramatically improve signal-to-noise ratio while maintaining transparency—a key differentiator in an industry dominated by black-box recommendations.",
  
  businessContext: {
    situation: "Job seekers face fragmented listings across multiple platforms (Greenhouse, Lever, Ashby, company career pages) with opaque matching algorithms that surface irrelevant opportunities.",
    stakeholders: ["Self-directed (demonstrating ability to work autonomously)", "Potential users (job seekers)", "Technical evaluators"],
    constraints: ["Zero budget for infrastructure", "Single developer", "Must scale without operational overhead", "Transparent, auditable system design"],
  },
  
  roleResponsibilities: {
    scope: "Complete ownership of product vision, technical architecture, implementation, and deployment. Demonstrates ability to execute independently while making sound architectural decisions.",
    keyResponsibilities: [
      "Defined product requirements balancing user needs with technical feasibility",
      "Architected scalable data collection pipeline handling multiple ATS platforms",
      "Designed explainable matching algorithms with transparent scoring methodology",
      "Built modular system enabling easy extension and maintenance",
      "Integrated AI capabilities thoughtfully as enhancement rather than dependency",
      "Made pragmatic technology choices optimizing for low operational overhead",
      "Documented architecture and decisions for knowledge transfer",
    ],
  },
  
  capabilities: [
    {
      title: "Product Thinking & Problem-Solving",
      description: "Identified real pain points and designed solutions balancing user needs with technical constraints",
      examples: [
        "Recognized that explainability, not just accuracy, is critical for user trust",
        "Designed configurable profiles letting users specify must-haves, preferences, and dealbreakers",
        "Chose to preserve raw data enabling reprocessing and debugging without re-fetching",
      ],
    },
    {
      title: "Systems Architecture & Design",
      description: "Made sound architectural choices balancing simplicity, scalability, and maintainability",
      examples: [
        "Selected SQLite over Postgres for low operational overhead while enabling easy migration",
        "Designed modular collectors isolating provider-specific logic to minimize blast radius",
        "Built with clear separation of concerns enabling independent testing and evolution",
      ],
    },
    {
      title: "Data Engineering & Integration",
      description: "Built robust data pipelines handling heterogeneous sources with retry logic and observability",
      examples: [
        "Integrated with multiple ATS APIs handling different authentication and pagination patterns",
        "Normalized inconsistent data into unified schema preserving source fidelity",
        "Implemented comprehensive error handling and retry strategies for resilient collection",
      ],
    },
    {
      title: "AI/ML Integration (Practical Application)",
      description: "Applied AI thoughtfully as enhancement layer while maintaining system explainability",
      examples: [
        "Integrated OpenAI Responses API for optional scoring enrichment",
        "Designed dual-scoring system where deterministic baseline ensures transparency",
        "Truncated inputs strategically to control costs while preserving signal",
      ],
    },
  ],
  
  leadership: [
    {
      title: "Autonomous Execution",
      description: "Demonstrated ability to drive projects independently from concept through delivery, making sound decisions without oversight.",
    },
    {
      title: "Systems Thinking",
      description: "Applied holistic approach considering observability, maintainability, and migration paths—not just immediate functionality.",
    },
    {
      title: "Technical Judgment",
      description: "Made pragmatic technology choices optimizing for actual constraints (single developer, zero budget) rather than following trends.",
    },
  ],
  
  impact: {
    title: "Technical & Product Impact",
    metrics: [
      {
        label: "Signal-to-Noise",
        value: "Dramatically Improved",
        description: "Only high-match roles surfaced",
        icon: Search,
      },
      {
        label: "Transparency",
        value: "100% Explainable",
        description: "Detailed reasoning for every match",
        icon: Sparkles,
      },
      {
        label: "Platform Coverage",
        value: "4+ ATS",
        description: "Greenhouse, Lever, Ashby, web",
        icon: Database,
      },
      {
        label: "Architecture",
        value: "Production-Ready",
        description: "Scalable, maintainable, low-ops",
        icon: GitBranch,
      },
    ],
  },
  
  skillsHighlight: {
    primary: ["Systems Design", "Product Development", "Data Engineering", "API Integration", "Problem-Solving"],
    secondary: ["Python", "FastAPI", "SQLite", "AI/ML (OpenAI)", "REST APIs", "Data Modeling", "Testing", "Documentation"],
  },
}

export default pingletRecruiterCaseStudy
