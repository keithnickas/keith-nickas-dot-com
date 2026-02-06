import { Github, Book, Code2 } from "lucide-react"
import Diagram from "@/components/diagram"
import Modal from "@/components/modal"
import Code from "@/components/code"
import {
  vueSdkCodeSnippet,
  vueSdkKeyFeatures,
  vueSdkStoreCodeSnippet,
  vueSdkStoreFeatures,
} from "@/data/wristband/vue-sdk"

const wristbandAuthFlowchart = `
flowchart TB
    U["User"] -- Navigate to app --> A["Vue App"]
    A -- func fetchSession --> S["Wristband SDK"]
    S -- GET /api/auth/session --> B["Backend API"]
    B -- Validate session cookie --> W["Wristband Cloud"]
    W -- Session data --> B
    B -- userId, tenantId, metadata --> S
    S -- Update auth state --> A
    A --- N1["User is authenticated"]
    S --- N1
    U -- Make API request --> A
    A -- func getToken --> S
    S -- GET /api/auth/token --> B
    B -- Exchange session for access token --> W
    W -- accessToken, expiresAt --> B
    B -- Access token --> S
    S -- Cached token --> A
    A -- API call with Bearer token --> B
    B -- Protected data --> A
`

const VueSDKOverview = () => {
  const diagram = (
    <Diagram
      chart={wristbandAuthFlowchart}
      config={{
        theme: "dark",
        layout: "elk",
        flowchart: {
          defaultRenderer: "flowchart-v2",
          curve: "stepAfter",
          padding: 40,
          nodeSpacing: 40,
          rankSpacing: 100,
          htmlLabels: true,
          useMaxWidth: true,
        },
        elk: {
          mergeEdges: true,
          nodePlacementStrategy: "NETWORK_SIMPLEX",
          cycleBreakingStrategy: "INTERACTIVE",
        },
      }}
      id="wristband-auth-flowchart"
      className="mx-auto p-4 justify-center align-center"
    />
  )

  const keyFeaturesElements = vueSdkKeyFeatures.map((feature, _) => (
    <div
      key={feature.title}
      className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/10 dark:to-pink-500/10 border border-purple-200 dark:border-purple-500/20"
    >
      <h3 className="text-lg font-bold mb-2 text-purple-600 dark:text-purple-400">
        {feature.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-slate-400">
        {feature.description}
      </p>
    </div>
  ))

  const vueSdkStoreFeaturesElements = vueSdkStoreFeatures.map((feature, _) => (
    <li key={feature.split(" ").join("-")} className="flex items-start gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center mt-1">
        <div className="w-2 h-2 rounded-full bg-purple-400" />
      </div>
      <span className="text-gray-700 dark:text-slate-300">{feature}</span>
    </li>
  ))

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="px-6 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20">
            Wristband Open Source
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Vue.js Client Auth SDK
          </h1>

          <p className="text-xl mb-8 text-gray-600 dark:text-slate-300">
            An open source Vue.js SDK for integrating Wristband authentication
            and authorization features into Vue.js applications with the{" "}
            <code className="px-2 py-1 rounded bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400">
              useWristbandStore()
            </code>{" "}
            composable.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/wristband-dev/vue-client-auth"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
            >
              <Github size={20} />
              View on GitHub
            </a>
            <a
              href="https://docs.wristband.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
            >
              <Book size={20} />
              Documentation
            </a>
            <a
              href="/case-study/wristband/vue-sdk/technical-design"
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all hover:scale-105 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
            >
              <Code2 size={20} />
              Technical Design Doc
            </a>
          </div>
        </div>
      </section>

      {/* Auth Flow Diagram */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
            <div className="flex flex-row items-center gap-6 justify-between">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">
                Authentication Flow
              </h2>
              <Modal
                size="full"
                className="portal h-auto w-full max-w-5xl max-h-lg mx-auto"
              >
                {diagram}
              </Modal>
            </div>
            <div className="aspect-video object-contain bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
              {diagram}
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What is the Wristband Vue.js SDK?
          </h2>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed mb-6">
              The Wristband Vue.js SDK provides authentication and authorization
              functionality for Vue.js applications, allowing developers to
              easily integrate Wristband's identity and access management
              features into their projects.
            </p>

            <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed mb-6">
              The SDK provides a set of components, composables, and services
              that can be used to handle user authentication, manage user
              sessions, and enforce access control based on user roles and
              permissions that are defined in the Wristband platform.
            </p>

            <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed mb-6">
              It simplifies the process of implementing secure authentication
              flows, such as login, logout, and token refresh, while also
              providing features like multi-factor authentication and social
              login options.
            </p>

            <p className="text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
              By using the Wristband Vue.js SDK, developers can ensure that
              their applications are secure and compliant with industry
              standards for identity and access management. The SDK is designed
              to be easy to use and integrate, allowing developers to focus on
              building their applications while leveraging the robust
              authentication capabilities provided by Wristband.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Key Features</h2>

          <div className="grid md:grid-cols-2 gap-6">{keyFeaturesElements}</div>
        </div>
      </section>

      {/* Code Example 1: App Configuration */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Example App Configuration
          </h2>

          <p className="text-lg text-gray-700 dark:text-slate-300 mb-6">
            Here is an example of the initialization code for the Wristband
            Vue.js SDK to configure authentication settings for a Vue.js
            application. This code sets up the SDK with the necessary
            configuration options, such as the login URL, session URL, and token
            URL.
          </p>
          <Code snippet={vueSdkCodeSnippet} title="main.ts" type="typescript" />
        </div>
      </section>

      {/* Code Example 2: Client Data Store */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            The Client Data Store
          </h2>

          <p className="text-lg text-gray-700 dark:text-slate-300 mb-6">
            The SDK includes a client-side data store using Pinia for state
            management which manages the user session. It contains a baseline
            set of properties that are used to track the authentication state of
            the user, such as whether they are logged in or not, their access
            token, and their refresh token.
          </p>

          <div className="p-6 rounded-xl bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700 mb-6">
            <h3 className="text-xl font-bold mb-4 text-purple-400">
              Store Features
            </h3>
            <ul className="space-y-3">{vueSdkStoreFeaturesElements}</ul>
          </div>

          <Code
            snippet={vueSdkStoreCodeSnippet}
            title="wristband-auth-store.ts (excerpt)"
            type="typescript"
          />
        </div>
      </section>

      {/* Learn More Section */}
      <section className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <h3 className="text-2xl font-bold mb-4">Learn More</h3>
            <p className="mb-6 text-gray-600 dark:text-slate-400">
              Explore the full documentation, installation instructions,
              configuration options, and usage examples.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com/wristband-dev/vue-client-auth"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all hover:scale-105"
              >
                <Github size={20} />
                GitHub Repository
              </a>
              <a
                href="https://docs.wristband.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all hover:scale-105 bg-white dark:bg-slate-800 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700"
              >
                <Book size={20} />
                Platform Documentation
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default VueSDKOverview
