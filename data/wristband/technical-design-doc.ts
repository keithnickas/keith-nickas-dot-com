export const problemStatements = [
  {
    title: "Session Management Complexity",
    desc: "Managing authenticated sessions, tokens, and user metadata across the application requires considerable boilerplate",
  },
  {
    title: "Token Lifecycle Management",
    desc: "Implementing token caching, expiration detection, and refresh strategies is error-prone",
  },
  {
    title: "State Consistency",
    desc: "Ensuring consistent authentication state across components and managing side effects is tedious",
  },
  {
    title: "CSRF Protection",
    desc: "Implementing CSRF token handling for secure API communication requires careful setup",
  },
  {
    title: "Type Safety",
    desc: "Authentication hooks must provide first-class TypeScript support for custom session metadata",
  },
]

export const architectureDiagrams = [
  {
    title: "WristbandAuthStore",
    subtitle: "Pinia Store",
    features: [
      "Auth Status Lifecycle",
      "Session State Management",
      "Token Management",
      "Configuration Handling",
      "Error State Tracking",
    ],
  },
  {
    title: "Composables Layer",
    subtitle: "Adapter Pattern",
    features: [
      "useWristbandStore()",
      "useWristbandSession()",
      "useWristbandToken()",
      "Type-safe generics",
      "Component-level access",
    ],
  },
  {
    title: "API Client",
    subtitle: "HTTP Layer",
    features: [
      "Fetch-based requests",
      "CSRF token handling",
      "Cookie credentials",
      "Error standardization",
      "Type-safe responses",
    ],
  },
  {
    title: "Auth Utils",
    subtitle: "Helper Functions",
    features: [
      "URL validation",
      "Metadata transformation",
      "Redirect orchestration",
      "Token expiration detection",
      "Error handling",
    ],
  },
]

export const securityFeatures = [
  "HttpOnly, Secure session cookies with SameSite=Strict",
  "CSRF token extraction and header injection",
  "Token expiration with 30-second safety buffer",
  "Bearer token scheme for authenticated requests",
]

export const rationalePoints = [
  "Modularity: Store logic encapsulated in a single function",
  "Composability: Aligns with Vue 3 Composition API",
  "Type Safety: Implicit typing from ref/computed return values",
  "Reactivity: Automatic dependency tracking",
  "Testability: Pure functions easier to mock",
]

export const performanceOptimizations = [
  "Token caching eliminates 90%+ endpoint requests",
  "Request deduplication prevents concurrent token acquisition",
  "Lazy config validation reduces initialization overhead",
  "O(1) CSRF token extraction, no DOM traversal",
]
