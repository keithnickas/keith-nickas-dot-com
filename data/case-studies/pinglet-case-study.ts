import { Database, GitBranch, Search, Sparkles } from "lucide-react"
import type { CaseStudy } from "@/components/types/case-study-types"

const pingletCaseStudy: CaseStudy = {
  title: "Pinglet - Job Search That Actually Works",
  company: "Internal Project",
  role: "Solo Developer / Architect",
  timeline: "Personal Project, 2026",
  mainImage: "/images/pinglet/pinglet-job-card.webp",
  tags: [
    "Python",
    "FastAPI",
    "SQLite",
    "Systems Design",
    "AI/ML",
    "Data Pipelines",
  ],
  overview:
    "Built a job discovery and matching service that cuts through the noise by collecting listings from multiple ATS platforms, scoring them with explainable algorithms, and surfacing only high-signal opportunities tailored to developer preferences.",
  challenge: {
    title: "The Challenge",
    content:
      "Job hunting is broken. You're either scrolling through hundreds of irrelevant listings on boards like Indeed, or you're missing opportunities because they're scattered across company career pages, Greenhouse, Lever, Ashby, and dozens of other platforms. Each has its own format, its own quirks, and its own way of presenting basically the same information. Most job boards use opaque matching algorithms that surface roles based on keywords rather than actual fit. You end up with Senior DevOps positions when you're a frontend engineer, or roles requiring skills you explicitly want to avoid. The signal-to-noise ratio is terrible, and there's no good way to audit why you're seeing what you're seeing.",
  },
  approach: {
    title: "My Approach",
    steps: [
      {
        title: "Multi-Source Collection Pipeline",
        description:
          "Built modular collectors for Greenhouse, Lever, Ashby, and direct web scraping. Each collector handles provider-specific quirks while persisting raw payloads for auditability. Implemented retry logic with exponential backoff and preserved all failure events for debugging. Used SQLite with WAL mode and a global write lock to handle concurrent access patterns without infrastructure overhead.",
      },
      {
        title: "Deterministic Normalization & Scoring",
        description:
          "Designed a normalization layer that transforms heterogeneous job data into a canonical schema with standardized fields for title, seniority, role family, stack, location type, and keywords. Built an explainable scoring engine that evaluates jobs against a candidate profile across five dimensions: role family fit, seniority match, must-have skills overlap, preferred stack alignment, and location preferences. Every score includes detailed reasons showing exactly why it was assigned.",
      },
      {
        title: "Optional LLM Enhancement Layer",
        description:
          "Added OpenAI-based scoring as an opt-in enrichment layer using the Responses API. The LLM provides nuanced rationale and catches edge cases the deterministic system might miss, but the core scoring remains explainable and auditable. Truncated inputs to control costs while preserving signal. This dual-scoring approach gives the benefits of AI insights without sacrificing transparency.",
      },
      {
        title: "Pragmatic Architecture Choices",
        description:
          "Chose SQLite over Postgres for low operational overhead and reproducible developer experience. Sequential collection simplifies concurrency handling while keeping the door open for future parallelization. Persisted raw payloads alongside normalized data to enable reprocessing without re-fetching. Built with clear separation of concerns: collectors, normalizers, scorers, and exporters each have single responsibilities and can be tested independently.",
      },
    ],
  },
  systemPillars: {
    title: "Design Principles",
    pillars: [
      {
        icon: Search,
        title: "Explainable Matching",
        description:
          "Every alignment score comes with detailed reasons. No black-box algorithms—you know exactly why a job scored 84 versus 91, and which criteria mattered most.",
      },
      {
        icon: Database,
        title: "Audit-First Architecture",
        description:
          "Raw payloads, retry events, and scoring history are preserved. You can trace every decision and reprocess data without re-fetching from external APIs.",
      },
      {
        icon: GitBranch,
        title: "Modular & Extensible",
        description:
          "Provider-specific collectors minimize blast radius when platforms change. Add new sources by implementing a simple interface. Swap SQLite for Postgres when scale demands it.",
      },
      {
        icon: Sparkles,
        title: "AI as Enhancement",
        description:
          "LLM scoring is additive, not foundational. The deterministic engine handles core matching; AI provides depth and catches nuance without sacrificing explainability.",
      },
    ],
  },
  results: {
    title: "Results & Impact",
    metrics: [
      {
        label: "Signal-to-Noise",
        value: "Dramatically Improved",
        description: "only high-match roles surfaced",
      },
      {
        label: "Alignment Scoring",
        value: "100% Explainable",
        description: "detailed reasoning for every job",
      },
      {
        label: "Multi-Platform",
        value: "4+ ATS Supported",
        description: "Greenhouse, Lever, Ashby, web",
      },
      {
        label: "Architecture",
        value: "Low-Ops",
        description: "single-node, reproducible setup",
      },
    ],
  },
  technicalHighlights: {
    title: "Technical Highlights",
    highlights: [
      "Built modular collector system handling heterogeneous ATS APIs with retry logic and failure tracking",
      "Designed deterministic scoring engine with five weighted dimensions and explainable deltas",
      "Implemented SQLite with WAL mode and global write lock for low-ops concurrent access",
      "Created normalization pipeline that canonicalizes job data from multiple sources into unified schema",
      "Integrated OpenAI Responses API for optional LLM-based scoring with bounded input truncation",
      "Preserved raw payloads and audit trail enabling post-hoc analysis and reprocessing",
      "Architected system for easy migration: SQLite → Postgres, sequential → parallel, monolith → distributed",
      "Built FastAPI service exposing jobs, scores, and alignment reasons via REST endpoints",
    ],
  },
  keyFeatures: {
    title: "Core Features",
    features: [
      {
        title: "Configurable Profile Matching",
        description:
          "Define must-have skills, preferred stack, target seniority, location preferences, salary floor, and keywords to avoid. The engine scores every job against your criteria and surfaces only what matters.",
      },
      {
        title: "Dual Scoring System",
        description:
          "Deterministic heuristic scoring provides fast, explainable results. Optional LLM scoring adds nuanced analysis and rationale. Both scores are preserved for comparison and tuning.",
      },
      {
        title: "Multi-ATS Discovery",
        description:
          "Single registry of companies with automatic detection of their ATS platform. Collectors handle provider-specific quirks transparently while normalizing data into a consistent format.",
      },
    ],
  },
  learnings: [
    "Explainability isn't optional—users need to understand why they're seeing what they're seeing, especially when AI is involved",
    "Premature optimization is still premature—SQLite with WAL handles surprising scale before you need distributed infrastructure",
    "Preserve raw data religiously—it's your time machine when you realize you need to reprocess with different logic",
    "AI works best as augmentation, not replacement—keep deterministic baselines for trust and debugging",
    "Build for migration from day one—make architectural choices that can scale without full rewrites",
    "Modular beats monolithic for resilience—when external APIs inevitably change, blast radius should be contained to single collectors",
  ],
}

export default pingletCaseStudy