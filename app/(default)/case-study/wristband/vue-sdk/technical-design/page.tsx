import CaseStudyCTA from "@/components/case-study/case-study-cta"
import Hero from "@/components/case-study/case-study-hero"
import { Code } from "@/components/code"
import {
  problemStatements,
  architectureDiagrams,
  securityFeatures,
  rationalePoints,
  performanceOptimizations,
} from "@/data/wristband/technical-design-doc"
import { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Vue SDK Technical Design Document | Wristband | Keith Nickas",
  description:
    "Comprehensive technical architecture for @wristband/vue-client-auth SDK. Covers Pinia store patterns, token caching strategies, CSRF protection, type safety, and ELK layout integration.",
  keywords: [
    "Vue SDK Architecture",
    "Technical Design Document",
    "Pinia Store Pattern",
    "Token Caching",
    "CSRF Protection",
    "TypeScript Generics",
    "Authentication Architecture",
    "Vue Composables",
    "Session Management",
    "API Client Design",
  ],
  authors: [{ name: "Keith Nickas", url: "https://keithnickas.dev" }],
  openGraph: {
    type: "article",
    url: "https://keithnickas.dev/case-study/wristband/vue-sdk/technical-design",
    title: "Vue SDK: Technical Design Document",
    description:
      "Deep dive into the architecture, design decisions, and implementation patterns of the Wristband Vue.js authentication SDK.",
    images: [
      {
        url: "https://keithnickas.dev/og-images/vue-sdk-tdd.png",
        width: 1200,
        height: 630,
        alt: "Vue SDK Technical Design",
      },
    ],
    publishedTime: "2025-12-01T00:00:00Z",
    modifiedTime: "2025-12-15T00:00:00Z",
    authors: ["Keith Nickas"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vue SDK Technical Design Document",
    description:
      "Architecture and design patterns for enterprise-grade Vue.js authentication SDK.",
    images: ["https://keithnickas.dev/og-images/vue-sdk-tdd.png"],
  },
  alternates: {
    canonical:
      "https://keithnickas.dev/case-study/wristband/vue-sdk/technical-design",
  },
}

// JSON-LD structured data (add to component)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Vue SDK: Technical Design Document",
  description:
    "Comprehensive technical architecture for Wristband Vue.js authentication SDK",
  author: {
    "@type": "Person",
    name: "Keith Nickas",
    url: "https://keithnickas.dev",
    jobTitle: "Principal Frontend Engineer",
  },
  datePublished: "2025-12-01",
  dateModified: "2025-12-15",
  keywords:
    "Vue.js, Authentication, SDK, Technical Design, Architecture, Pinia, TypeScript",
  about: [
    {
      "@type": "SoftwareApplication",
      name: "Wristband Vue.js SDK",
      applicationCategory: "DeveloperApplication",
    },
  ],
  articleSection: [
    "Architecture Overview",
    "Design Decisions",
    "Type Safety",
    "Performance Optimization",
    "Security Considerations",
  ],
}

const problemStatementElements = problemStatements.map((item, _) => (
  <div
    key={item.title.split(" ").join("-")}
    className="p-6 rounded-xl bg-white dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700"
  >
    <h3 className="text-lg font-bold mb-2 text-purple-400">{item.title}</h3>
    <p className="text-gray-600 dark:text-slate-400">{item.desc}</p>
  </div>
))

const architectureDiagramElements = architectureDiagrams.map(
  (component, idx) => (
    <div
      key={component.title.split(" ").join("-")}
      className="p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center text-white font-bold">
          {idx + 1}
        </div>
        <div>
          <h3 className="text-lg font-bold text-purple-400">
            {component.title}
          </h3>
          <p className="text-xs text-gray-500 dark:text-slate-500">
            {component.subtitle}
          </p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {component.features.map((feature, _) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-400"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
)

const securityFeatureElements = securityFeatures.map((item, _) => (
  <li
    key={item.split(" ").join("-")}
    className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5" />
    {item}
  </li>
))

const rationalePointElements = rationalePoints.map((point, _) => (
  <li
    key={point.split(" ").join("-")}
    className="flex items-start gap-2 text-gray-600 dark:text-slate-400"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
    {point}
  </li>
))

const performanceOptimizationElements = performanceOptimizations.map(
  (item, _) => (
    <li
      key={item.split(" ").join("-")}
      className="flex items-start gap-2 text-sm text-gray-700 dark:text-slate-300"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5" />
      {item}
    </li>
  )
)

export default function TechnicalDesignDoc(){
  return (
    <main className="pt-24">
      <Script
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <Hero
        data={{
          documentType: "Technical Documentation",
          title: "Vue SDK: Technical Design Document",
          documentMetaData: {
            version: "1.0",
            date: "December 2025",
            author: "Keith Nickas",
          },
        }}
      />
      {/* Executive Summary */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
            <h2 className="text-3xl font-bold mb-4 text-purple-400">
              Executive Summary
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 dark:text-slate-300">
              <code className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
                @wristband/vue-client-auth
              </code>{" "}
              is a lightweight, type-safe Vue 3 SDK that bridges frontend and
              backend authentication systems. It manages secure session
              initialization, token caching, and metadata synchronization
              through a cookie-based authentication flow, enabling developers to
              implement enterprise-grade authentication with minimal
              boilerplate.
            </p>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            1. Problem Statement
          </h2>

          <p className="text-lg text-gray-700 dark:text-slate-300 mb-6">
            Modern Vue 3 applications require robust authentication handling but
            face several challenges:
          </p>

          <div className="space-y-4">{problemStatementElements}</div>

          <div className="mt-8 p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/20">
            <h3 className="text-lg font-bold mb-2 text-purple-600 dark:text-purple-400">
              Solution
            </h3>
            <p className="text-gray-700 dark:text-slate-300">
              A composable-first authentication SDK that abstracts these
              concerns through reactive Vue composables powered by Pinia state
              management.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Overview */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            2. Architecture Overview
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {architectureDiagramElements}
          </div>
        </div>
      </section>

      {/* Key Design Decisions */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            3. Key Design Decisions
          </h2>

          <div className="space-y-8">
            {/* Pinia Store Pattern */}
            <div className="p-8 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                3.1 Pinia Store Pattern
              </h3>
              <p className="text-lg mb-4 text-gray-700 dark:text-slate-300">
                <strong>Decision:</strong> Use Pinia's composition API pattern
                with{" "}
                <code className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">{`defineStore('name', () => {...})`}</code>
              </p>

              <div className="mb-6">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">
                  Rationale:
                </h4>
                <ul className="space-y-2">{rationalePointElements}</ul>
              </div>

              <Code
                snippet={`// ✓ Recommended - Composable interface
const { metadata } = useWristbandSession<UserMetadata>()

// ✗ Avoid - Direct store access (not exported)
const store = WristbandAuthStore() // implementation detail`}
                title="Example Usage"
              />
            </div>

            {/* Token Caching */}
            <div className="p-8 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                3.2 Token Caching with TTL and Retry Logic
              </h3>
              <p className="text-lg mb-4 text-gray-700 dark:text-slate-300">
                <strong>Decision:</strong> Implement client-side token caching
                with 30-second expiration buffer, request deduplication, and
                exponential backoff retry (3 attempts, 100ms delay)
              </p>

              <Code
                snippet={`const tokenRequestRef = ref<Promise<string> | null>(null)

async function getToken(): Promise<string> {
  // Return cached token if valid (with 30s buffer)
  if (accessToken.value && 
      accessTokenExpiresAt.value > Date.now() + 30000) {
    return accessToken.value
  }
  
  // Deduplicate: return existing request if in-flight
  if (tokenRequestRef.value) {
    return tokenRequestRef.value
  }
  
  // Acquire token with retry logic
  tokenRequestRef.value = acquireTokenWithRetry()
  return tokenRequestRef.value
}`}
                title="Token Caching Implementation"
              />
            </div>

            {/* CSRF Protection */}
            <div className="p-8 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">
                3.3 CSRF Protection Integration
              </h3>
              <p className="text-lg mb-4 text-gray-700 dark:text-slate-300">
                <strong>Decision:</strong> Client-side extraction of CSRF token
                from cookies and injection into request headers
              </p>

              <Code
                snippet={`function getCsrfToken(cookieName: string): string | null {
  const regex = new RegExp(\`(^|;)\\s*\${cookieName}\\s*=\\s*([^;]+)\`)
  const match = document.cookie.match(regex)
  return match?.[2] ?? null
}`}
                title="CSRF Token Extraction"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Type Safety */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            4. Type Safety & Generics
          </h2>

          <div className="p-8 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Custom Session Metadata Typing
            </h3>
            <p className="text-lg mb-6 text-gray-700 dark:text-slate-300">
              Consumers define their session shape via TypeScript generics for
              full type inference
            </p>

            <Code
              snippet={`// Define custom metadata structure
interface UserSession {
  firstName: string
  lastName: string
  email: string
  permissions: string[]
  accountType: 'free' | 'pro' | 'enterprise'
}

// Typed composable usage
export default function Dashboard() {
  const { metadata, userId } = useWristbandSession<UserSession>()
  
  // Full type inference
  const displayName = \`\${metadata.value.firstName} \${metadata.value.lastName}\`
  const isPro = metadata.value.accountType === 'pro'
}`}
              title="Type-Safe Session Metadata"
              type="typescript"
            />
          </div>
        </div>
      </section>

      {/* Performance & Security */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            5. Performance & Security
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                Performance Optimizations
              </h3>
              <ul className="space-y-3">{performanceOptimizationElements}</ul>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/20">
              <h3 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                Security Features
              </h3>
              <ul className="space-y-3">{securityFeatureElements}</ul>
            </div>
          </div>
        </div>
      </section>

      {/* File Structure */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Appendix: File Structure
          </h2>

          <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-slate-700">
            <div className="bg-slate-800 px-4 py-2">
              <span className="text-xs font-mono text-slate-300">
                Project Structure
              </span>
            </div>
            <pre className="bg-slate-900 p-4 overflow-x-auto">
              <code className="text-sm text-slate-300 font-mono">{`src/
├── api/
│   ├── api-client.ts          # Fetch-based HTTP client with CSRF
│   └── api-client.test.ts     # Client unit tests
├── composables/
│   ├── useWristbandAuthStore.ts      # Store access & config
│   ├── useWristbandSession.ts        # Session data access
│   ├── useWristbandToken.ts          # Token acquisition
│   └── *.test.ts                     # Composable tests
├── stores/
│   └── wristband.ts           # Pinia store: main auth state
├── types/
│   ├── auth-store.ts          # Core type definitions
│   ├── api-client-types.ts    # HTTP types
│   ├── auth-utils-types.ts    # Utility types
│   └── errors.ts              # Error codes enum
├── utils/
│   ├── api-client-utils.ts    # CSRF token extraction
│   ├── auth-store-utils.ts    # URL validation, helpers
│   ├── auth-utils.ts          # Redirect utilities
│   └── *.test.ts              # Utility tests
├── error.ts                   # Error class definitions
└── index.ts                   # Public exports (entry point)`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CaseStudyCTA
        title="Explore the Full Implementation"
        description="View the complete source code, examples, and contribute to the open source project."
        cta1={{
          href: "https://github.com/wristband-dev/vue-client-auth",
          title: "View on GitHub",
          className:
            "px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105",
        }}
        cta2={{
          href: "/case-study/wristband/vue-sdk",
          title: "Back to SDK Overview",
          className:
            "px-8 py-4 rounded-full font-bold transition-all hover:scale-105 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700",
        }}
      />
    </main>
  )
}
