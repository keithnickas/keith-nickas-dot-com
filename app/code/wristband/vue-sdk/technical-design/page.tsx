"use client"
import Image from "next/image"
import Link from "next/link"
import wristbandLogo from "@/public/images/wristband/wristband_transparent_logo.svg"
import Code from "@/components/code"
import Diagram from "@/components/diagram"
import {
  architectureDiagram,
  InitialSessionLoadDiagram,
  sessionStateDiagram,
  tokenAcquisitionDiagram,
} from "./helpers/mermaid-flowcharts"

export default function WristbandVueSDKOverview() {
  return (
    <div
      className="py-24 px-4 max-w-7xl min-h-screen flex-nowrap max-lg:flex-wrap mx-auto vscode-dark"
      data-component="wristband-vue-sdk-overview-tdd"
    >
      <Link href="https://wristband.dev" className="inline-block pb-6">
        <Image
          alt="Wristband, an Identity Access Management Platform"
          className="h-auto"
          src={wristbandLogo}
          width={200}
        />
      </Link>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h1 id="vue-sdk-technical-design-document">
          Vue SDK: Technical Design Document
        </h1>
        <p>
          <span className="font-bold">Version:</span> 1.0
          <br />
          <span className="font-bold">Date:</span> December 2025
          <br />
          <span className="font-bold">Author:</span> Keith Nickas
        </p>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="executive-summary">Executive Summary</h2>
        <p>
          <Code
            snippet="@wristband/vue-client-auth"
            type="node-repl"
            useInline
          />{" "}
          is a lightweight, type-safe Vue 3 SDK that bridges frontend and
          backend authentication systems. It manages secure session
          initialization, token caching, and metadata synchronization through a
          cookie-based authentication flow, enabling developers to implement
          enterprise-grade authentication with minimal boilerplate.
        </p>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="1-problem-statement">1. Problem Statement</h2>
        <p>
          Modern Vue 3 applications require robust authentication handling but
          face several challenges:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Session Management Complexity:</span>{" "}
            Managing authenticated sessions, tokens, and user metadata across
            the application requires considerable boilerplate
          </li>
          <li>
            <span className="font-bold">Token Lifecycle Management:</span>{" "}
            Implementing token caching, expiration detection, and refresh
            strategies is error-prone
          </li>
          <li>
            <span className="font-bold">State Consistency:</span> Ensuring
            consistent authentication state across components and managing side
            effects is tedious
          </li>
          <li>
            <span className="font-bold">CSRF Protection:</span> Implementing
            CSRF token handling for secure API communication requires careful
            setup
          </li>
          <li>
            <span className="font-bold">Type Safety:</span> Authentication hooks
            must provide first-class TypeScript support for custom session
            metadata
          </li>
        </ul>
        <p>
          <span className="font-bold">Solution:</span> A composable-first
          authentication SDK that abstracts these concerns through reactive Vue
          composables powered by Pinia state management.
        </p>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="2-architecture-overview">2. Architecture Overview</h2>
        <h3 id="21-high-level-architecture">2.1 High-Level Architecture</h3>
        <pre>
          <Diagram
            id="vue-component-pinia-state"
            className="max-w-3xl m-auto p-4"
            onError={(error: any) => error}
            suppressErrorRendering={false}
          >
            {architectureDiagram}
          </Diagram>
        </pre>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h3 id="22-core-components">2.2 Core Components</h3>
        <h4 id="wristbandauthstore-pinia-store">
          <span className="font-bold">WristbandAuthStore (Pinia Store)</span>
        </h4>
        <p>Central reactive state container managing:</p>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Auth Status Lifecycle:</span> LOADING →
            AUTHENTICATED/UNAUTHENTICATED
          </li>
          <li>
            <span className="font-bold">Session State:</span> userId, tenantId, metadata
          </li>
          <li>
            <span className="font-bold">Token Management:</span> caching, TTL validation, refresh
            logic
          </li>
          <li>
            <span className="font-bold">Configuration:</span> URLs, CSRF settings, callbacks
          </li>
          <li>
            <span className="font-bold">Error State:</span> Centralized error tracking
          </li>
        </ul>
        <h4 id="composables-layer" className="font-bold my-4">
          Composables Layer
        </h4>
        <p>Adapter pattern implementations providing component-level access:</p>
        <ul className="list-disc pl-6">
          <li>
            <Code snippet="useWristbandStore()" useInline></Code> - Auth status
            and configuration
          </li>
          <li>
            <Code snippet="useWristbandSession()" useInline></Code> - Session
            data with type generics
          </li>
          <li>
            <Code snippet="useWristbandToken()" useInline></Code> - Token
            acquisition and cache management
          </li>
        </ul>
        <h4 id="api-client" className="font-bold my-4">
          API Client
        </h4>
        <p>Fetch-based HTTP client with:</p>
        <ul className="list-disc pl-6">
          <li>CSRF token extraction and injection</li>
          <li>Cookie-based credential handling</li>
          <li>Standardized error responses</li>
          <li>Type-safe response handling</li>
        </ul>
        <h4 id="auth-utils" className="font-bold my-4">
          Auth Utils
        </h4>
        <p>Helper functions for:</p>
        <ul className="list-disc pl-6">
          <li>URL validation and construction</li>
          <li>Session metadata transformation</li>
          <li>Login/logout redirect orchestration</li>
          <li>Token expiration detection</li>
        </ul>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="3-key-design-decisions">3. Key Design Decisions</h2>
        <h3 id="31-pinia-store-pattern">3.1 Pinia Store Pattern</h3>
        <p>
          <span className="font-bold">Decision:</span> Use Pinia's composition
          API pattern with{" "}
          <Code
            snippet={`defineStore('name', () => {...})`}
            type="javascript"
            useInline
          />
        </p>
        <p>
          <span className="font-bold">Rationale:</span>
        </p>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Modularity:</span> Store logic
            encapsulated in a single function (not spread across
            actions/mutations)
          </li>
          <li>
            <span className="font-bold">Composability:</span> Direct composition
            function syntax aligns with Vue 3 Composition API
          </li>
          <li>
            <span className="font-bold">Type Safety:</span> Implicit typing from
            ref/computed return values without additional type definitions
          </li>
          <li>
            <span className="font-bold">Reactivity:</span> Automatic dependency
            tracking with Vue 3 reactivity system
          </li>
          <li>
            <span className="font-bold">Testability:</span> Pure functions
            easier to mock and test in isolation
          </li>
        </ul>
        <p>
          <span className="font-bold">Trade-offs:</span>
        </p>
        <ul className="list-disc pl-6">
          <li>Requires understanding of Vue reactivity internals</li>
          <li>Less boilerplate than Options API, but more flexible patterns</li>
        </ul>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h3 id="32-composable-first-api-design" className="font-bold my-4">
          3.2 Composable-First API Design
        </h3>
        <p>
          <span className="font-bold">Decision:</span> Expose store
          functionality exclusively through composables, not direct store access
        </p>
        <p>
          <span className="font-bold">Rationale:</span>
        </p>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Abstraction:</span> Consumers depend on
            composable interface, not store implementation details
          </li>
          <li>
            <span className="font-bold">Consistency:</span> Standardized access
            pattern across the SDK (all hooks return a subset of store)
          </li>
          <li>
            <span className="font-bold">Evolution:</span> Internal store
            structure changes don't affect consumer code
          </li>
          <li>
            <span className="font-bold">Type Narrowing:</span> Composables can
            specialize types (e.g.,
            <code>useWristbandSession&lt;TSessionData&gt;</code>)
          </li>
        </ul>
        <p>
          <strong>Example:</strong>
        </p>
        <Code
          snippet={`// ✓ Recommended - Composable interface

const { metadata } = useWristbandSession<UserMetadata>()

// ✗ Avoid - Direct store access (not exported)
const store = WristbandAuthStore() // implementation detail`}
          type="javascript"
        />
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h3 id="33-token-caching-with-ttl-and-retry-logic">
          3.3 Token Caching with TTL and Retry Logic
        </h3>
        <p>
          <span className="font-bold">Decision:</span> Implement client-side
          token caching with:
        </p>
        <ul className="list-disc pl-6">
          <li>30-second expiration buffer before actual token expiration</li>
          <li>Request deduplication using Promise references</li>
          <li>Exponential backoff retry (3 attempts, 100ms delay)</li>
        </ul>
        <p>
          <span className="font-bold">Rationale:</span>
        </p>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Performance:</span> Reduce token
            endpoint hits for rapid API calls
          </li>
          <li>
            <span className="font-bold">Resilience:</span> Handle transient
            network failures gracefully
          </li>
          <li>
            <span className="font-bold">Security:</span> Buffer time prevents
            token edge-case usage
          </li>
          <li>
            <span className="font-bold">Race Condition Prevention:</span> Shared
            promise prevents concurrent token requests
          </li>
        </ul>
        <p className="font-bold">Implementation:</p>
        <Code
          snippet={`const tokenRequestRef = ref<Promise<string> | null>(null)

async function getToken(): Promise<string> {
  // Return cached token if valid (with 30s buffer)
  if (accessToken.value && accessTokenExpiresAt.value > Date.now() + 30000) {
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
          type="typescript"
        />
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h3 id="34-csrf-protection-integration" className="font-bold my-4">
          3.4 CSRF Protection Integration
        </h3>
        <p>
          <span className="font-bold">Decision:</span> Client-side extraction of
          CSRF token from cookies and injection into request headers
        </p>
        <p className="font-bold">Rationale:</p>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Server-Driven:</span> CSRF token managed
            entirely by backend
          </li>
          <li>
            <span className="font-bold">Transport:</span> Avoid token
            serialization - read directly from
            <code>document.cookie</code>
          </li>
          <li>
            <span className="font-bold">Flexibility:</span> Configurable
            cookie/header names via <code>AuthConfig</code>
          </li>
          <li>
            <span className="font-bold">Safety:</span> Only applies to
            same-origin requests (fetch default behavior)
          </li>
        </ul>
        <p className="font-bold">Cookie Extraction Pattern:</p>
        <Code
          snippet={`function getCsrfToken(cookieName: string): string | null {
  const regex = new RegExp(\`(^|;)\\s*\${cookieName}\\s*=\\s*([^;]+)\`)
  const match = document.cookie.match(regex)
  return match?.[2] ?? null
}`}
          type="typescript"
        />
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h3 id="35-error-handling-strategy">3.5 Error Handling Strategy</h3>
        <p>
          <span className="font-bold">Decision:</span> Custom error classes{" "}
          <Code snippet="WristbandError()" useInline />,{" "}
          <Code snippet="ApiError()" useInline /> with specific error codes
        </p>
        <p className="font-bold">Rationale:</p>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Specificity:</span> Catch and handle
            specific error cases (<code>UNAUTHENTICATED</code>,{" "}
            <code>INVALID_TOKEN_URL</code>, etc.)
          </li>
          <li>
            <span className="font-bold">Debugging:</span> Error codes + messages
            + original response aid troubleshooting
          </li>
          <li>
            <span className="font-bold">User Experience:</span> Different errors
            warrant different handling (redirect vs. retry vs. alert)
          </li>
          <li>
            <span className="font-bold">Typing:</span> TypeScript discriminates
            error types for conditional handling
          </li>
        </ul>
        <p className="font-bold">Usage Pattern:</p>
        <Code
          snippet={`try {
  const token = await getToken()
} catch (error) {
  if (error instanceof WristbandError) {
    if (error.code === WristbandErrorCode.UNAUTHENTICATED) {
      // Redirect to login
      redirectToLogin()
    }
  }
}`}
          type="typescript"
        />
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="4-data-flow-diagrams" className="my-4">
          4. Data Flow Diagrams
        </h2>
        <details
        // @ts-ignore
          name="initial-session-load"
          open={false}
          className="cursor-pointer"
        >
          <summary>
            <span className="text-[1.35rem]">
              4.1 Initial Session Load Flow
            </span>
          </summary>
          <Diagram
            id="initial-session-load-diagram"
            className="max-w-3xl m-auto p-4"
            onError={(error: any) => error}
            suppressErrorRendering={false}
          >
            {InitialSessionLoadDiagram}
          </Diagram>
        </details>

        <details
        // @ts-ignore
          name="initial-session-load"
          open={false}
          className="cursor-pointer"
        >
          <summary>
            <span className="text-[1.35rem]">
              4.2 Token Acquisition Flow (Cached)
            </span>
          </summary>
          <Diagram
            id="token-acquisition-diagram"
            className="max-w-3xl m-auto p-4"
            onError={(error: any) => error}
            suppressErrorRendering={false}
          >
            {tokenAcquisitionDiagram}
          </Diagram>
        </details>

        <details
        // @ts-ignore
          name="initial-session-load"
          open={false}
          className="cursor-pointer"
        >
          <summary>
            <span className="text-[1.35rem]">
              4.3 Session State Transitions
            </span>
          </summary>
          <Diagram
            id="session-state-diagram"
            className="max-w-3xl m-auto p-4"
            onError={(error: any) => error}
            suppressErrorRendering={false}
          >
            {sessionStateDiagram}
          </Diagram>
        </details>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="5-type-safety--generics" className="my-4">
          5. Type Safety &amp; Generics
        </h2>
        <h3 id="51-custom-session-metadata-typing">
          5.1 Custom Session Metadata Typing
        </h3>
        <p>
          <span className="font-bold">Pattern:</span> Consumers define their
          session shape via TypeScript generics
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
          type="typescript"
        />
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h3 id="52-configuration-type-narrowing">
          5.2 Configuration Type Narrowing
        </h3>
        <p>
          <code>AuthConfig</code> type provides:
        </p>
        <ul className="list-disc pl-6">
          <li>
            Required fields*:{" "}
            <Code
              snippet="csrfCookieName(), csrfHeaderName(), loginUrl(), sessionUrl()"
              useInline
              type="javascript"
            />
          </li>
          <li>
            Optional fields:{" "}
            <Code
              snippet="tokenUrl(), transformSessionMetadata(), onSessionSuccess()"
              useInline
              type="javascript"
            />
          </li>
          <li>
            Methods:{" "}
            <Code
              snippet="getToken(), clearToken(), clearAuthData()"
              useInline
              type="javascript"
            />{" "}
            (injected by store)
          </li>
        </ul>
        <p className="text-sm">
          * CSRF functions{" "}
          <Code
            snippet="csrfCookieName(), csrfHeaderName()"
            useInline
            type="javascript"
          />{" "}
          are being removed in the next version to simplify implementation.
        </p>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="6-integration-example">6. Integration Example</h2>
        <h3 id="application-setup">Application Setup</h3>
        <Code
          snippet={`// main.ts
import { createPinia } from 'pinia'
import { useWristbandStore } from '@wristband/vue-client-auth'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// Initialize auth in root component
app.mount('#app')

// App.vue
<script setup lang="ts">
import { onMounted } from 'vue'
import { useWristbandStore } from '@wristband/vue-client-auth'

interface CustomMetadata {
  department: string
  role: string
}

const { authStatus, authError } = useWristbandStore({
  csrfCookieName: 'X-CSRF-TOKEN',
  csrfHeaderName: 'X-CSRF-TOKEN',
  loginUrl: 'https://auth.example.com/login',
  sessionUrl: '/api/auth/session',
  tokenUrl: '/api/auth/token',
  transformSessionMetadata: (raw) => ({
    ...raw,
    department: raw.dept || 'unknown',
  }),
})

onMounted(async () => {
  try {
    await store.fetchSession()
  } catch (error) {
    console.error('Session initialization failed:', error)
  }
})
</script>

<template>
  <div v-if="authStatus === 'loading'">
    <LoadingSpinner />
  </div>
  <div v-else-if="authStatus === 'authenticated'">
    <Dashboard />
  </div>
  <div v-else>
    <LoginPrompt />
  </div>
</template>`}
          type="typescript"
        />
        <h3 id="protected-api-calls">Protected API Calls</h3>
        <Code
          snippet={`// hooks/useProtectedApi.ts
import { useWristbandToken } from '@wristband/vue-client-auth'

export function useProtectedApi() {
  const { getToken } = useWristbandToken()
  
  return {
    async fetchUserData() {
      const token = await getToken()
      const response = await fetch('/api/user', {
        headers: {
          'Authorization': \`Bearer \${token}\`,
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      })
      return response.json()
    }
  }
}
`}
          type="typescript"
        />
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="7-testing-strategy">7. Testing Strategy</h2>
        <h3 id="71-unit-testing-approach">7.1 Unit Testing Approach</h3>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Store Tests:</span> Mock Pinia, test
            state mutations and action logic
          </li>
          <li>
            <span className="font-bold">Composable Tests:</span> Mock store,
            verify composables expose correct refs
          </li>
          <li>
            <span className="font-bold">API Client Tests:</span> Mock fetch,
            verify CSRF token handling and error states
          </li>
          <li>
            <span className="font-bold">Utils Tests:</span> Test pure functions
            (validation, URL parsing, token expiration)
          </li>
        </ul>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h3 id="72-e2e-testing">7.2 E2E Testing</h3>
        <ul className="list-disc pl-6">
          <li>
            Full flow: Configuration → Session fetch → Token acquisition →
            Protected API calls
          </li>
          <li>
            Error scenarios: Unauthorized responses, token endpoint failures,
            network errors
          </li>
          <li>
            Edge cases: Token expiration during request, CSRF token missing,
            invalid URLs
          </li>
        </ul>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="8-performance-considerations">8. Performance Considerations</h2>
        <table>
          <thead>
            <tr>
              <th>Optimization</th>
              <th>Implementation</th>
              <th>Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="font-bold">Token Caching</span>
              </td>
              <td>In-memory storage with TTL + 30s buffer</td>
              <td>Eliminates 90%+ of token endpoint requests</td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">Request Deduplication</span>
              </td>
              <td>Shared Promise reference for in-flight requests</td>
              <td>Prevents concurrent token acquisition</td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">Lazy Config Validation</span>
              </td>
              <td>
                URL validation deferred until <code>setConfig()</code>
              </td>
              <td>Reduces initialization overhead</td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">Metadata Transformation</span>
              </td>
              <td>Optional hook applied during session fetch</td>
              <td>Single transformation point, no reactivity overhead</td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">CSRF Token Extraction</span>
              </td>
              <td>Regex parse of document.cookie</td>
              <td>O(1) operation, no DOM traversal</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="9-security-considerations">9. Security Considerations</h2>
        <h3 id="91-authentication-security">9.1 Authentication Security</h3>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Session Cookie:</span> Server-side
            session cookie (HttpOnly, Secure, SameSite=Strict)
          </li>
          <li>
            <span className="font-bold">CSRF Token:</span> Extracted from
            cookie, injected into request headers
          </li>
          <li>
            <span className="font-bold">Token Endpoint:</span> Requires valid
            session cookie (backend validates)
          </li>
          <li>
            <span className="font-bold">Token Expiration:</span> Client-enforced
            with 30-second safety buffer
          </li>
          <li>
            <span className="font-bold">Authorization:</span> Bearer token
            scheme for authenticated API requests
          </li>
        </ul>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h3 id="92-error-information-disclosure">
          9.2 Error Information Disclosure
        </h3>
        <ul className="list-disc pl-6">
          <li>Error messages logged to console (development-friendly)</li>
          <li>
            Status codes exposed for error handling (necessary for app logic)
          </li>
          <li>Original Response object included for debugging</li>
          <li>No sensitive data in error messages</li>
        </ul>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h3 id="93-dependencies--vulnerabilities">
          9.3 Dependencies &amp; Vulnerabilities
        </h3>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Minimal Dependencies:</span> Only Pinia
            required (Vue 3 is peer dependency)
          </li>
          <li>
            <span className="font-bold">Supply Chain:</span> Regular updates via
            npm, CVE monitoring via Dependabot
          </li>
          <li>
            <span className="font-bold">Type Safety:</span> TypeScript
            compilation prevents many runtime vulnerabilities
          </li>
        </ul>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="10-future-enhancements">10. Future Enhancements</h2>
        <table>
          <thead>
            <tr>
              <th>Feature</th>
              <th>Rationale</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span className="font-bold">Multi-tab Session Sync</span>
              </td>
              <td>Detect session changes across browser tabs</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">Remove CSRF Token</span>
              </td>
              <td>Simplifies implementation and reduces config requirements</td>
              <td>High</td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">Offline Mode</span>
              </td>
              <td>Cache session state, queue API calls during offline</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">Session Refresh Hooks</span>
              </td>
              <td>Allow custom logic on token refresh</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">Audit Logging</span>
              </td>
              <td>Track auth events for security analysis</td>
              <td>Low</td>
            </tr>
            <tr>
              <td>
                <span className="font-bold">Biometric Auth Support</span>
              </td>
              <td>Enable WebAuthn-based authentication</td>
              <td>Low</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="11-conclusion">11. Conclusion</h2>
        <p>
          <code>@wristband/vue-client-auth</code> provides a production-ready
          authentication SDK built on Vue 3 fundamentals (Composition API,
          Pinia) with:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <span className="font-bold">Simplicity:</span> Composable-first
            design reduces boilerplate
          </li>
          <li>
            <span className="font-bold">Type Safety:</span> Full TypeScript
            support with generic metadata typing
          </li>
          <li>
            <span className="font-bold">Performance:</span> Token caching and
            request deduplication
          </li>
          <li>
            <span className="font-bold">Security:</span> CSRF protection,
            session validation, error handling
          </li>
          <li>
            <span className="font-bold">Extensibility:</span> Metadata
            transformation, session success callbacks
          </li>
        </ul>
        <p>
          The architecture prioritizes developer experience while maintaining
          enterprise-grade security and reliability standards.
        </p>
      </section>
      <section className="border-b border-gray-700 pb-8 mb-8">
        <h2 id="appendix-file-structure">Appendix: File Structure</h2>
        <Code
          snippet={`
src/
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
└── index.ts                   # Public exports (entry point)

`}
          type="markdown"
          title=" "
        />{" "}
      </section>
    </div>
  )
}
