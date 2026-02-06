export const vueSdkKeyFeatures = [
  {
    title: "Composable-First API",
    description:
      "Built with Vue 3 Composition API and Pinia for modern, reactive state management.",
  },
  {
    title: "Type-Safe Authentication",
    description:
      "Full TypeScript support with generic session metadata typing for custom data structures.",
  },
  {
    title: "Secure Token Management",
    description:
      "Automatic token caching, expiration detection, and refresh strategies with CSRF protection.",
  },
  {
    title: "Session State Sync",
    description:
      "Consistent authentication state across components with reactive updates.",
  },
  {
    title: "Developer Experience",
    description:
      "Minimal boilerplate with intuitive composables like useWristbandStore() and useWristbandSession().",
  },
  {
    title: "Production Ready",
    description:
      "Comprehensive error handling, retry logic, and enterprise-grade security standards.",
  },
]

export const vueSdkCodeSnippet = `import { createApp } from "vue";
import { createPinia } from "pinia";
import { WristbandAuthStore } from "@wristband/vue-client-auth"
import { router } from "./router";
import App from "./App.vue";
import './css/style.css';

const init = async () => {
  const pinia = createPinia();
  const app = createApp(App);

  app.use(pinia);
  app.use(router);
  app.mount('#app');
  
  const wristbandAuth = WristbandAuthStore(pinia); 

  await wristbandAuth.setConfig({
    loginUrl: '/api/auth/login',
    sessionUrl: '/api/v1/session',
    tokenUrl: '/api/v1/token',
  });

  await wristbandAuth.fetchSession();
};

init();`

export const vueSdkStoreFeatures = [
  "Auth Status Lifecycle: LOADING → AUTHENTICATED/UNAUTHENTICATED",
  "Session State: userId, tenantId, metadata",
  "Token Management: caching, TTL validation, refresh logic",
  "Configuration: URLs, CSRF settings, callbacks",
  "Error State: Centralized error tracking",
]

export const vueSdkStoreCodeSnippet = `const WristbandAuthStore = defineStore('wristbandAuth', () => {
  // State
  const authError = ref<WristbandError | null>(null)
  const isAuthenticated = ref(false)
  const isLoading = ref(true)
  const userId = ref('')
  const tenantId = ref('')
  const metadata = ref<Record<string, unknown>>({})
  const accessToken = ref('')
  const accessTokenExpiresAt = ref<number>(0)
  
  // Derived
  const authStatus = computed(() =>
    isLoading.value
      ? AuthStatus.LOADING
      : isAuthenticated.value
        ? AuthStatus.AUTHENTICATED
        : AuthStatus.UNAUTHENTICATED
  )

  // Actions
  async function getToken(): Promise<string> {
    // Check if we have a valid cached token (with 30 second buffer)
    if (
      accessToken.value &&
      accessTokenExpiresAt.value > Date.now() + 30000
    ) {
      return accessToken.value
    }
    
    // Token acquisition logic with retry...
  }

  return {
    isAuthenticated,
    isLoading,
    userId,
    tenantId,
    metadata,
    authStatus,
    getToken,
    fetchSession,
    // ...
  }
})`
