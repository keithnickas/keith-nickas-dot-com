const WristbandAppConfig = `import { createApp } from "vue";
import { createPinia } from "pinia";
import { WristbandAuthStore } from "@wristband/vue-client-auth"
import { router } from "./router";
import App from "./App.vue";
import './css/style.css';

const init = async () => {
  // Create a Pinia instance
  const pinia = createPinia();
  const app = createApp(App);

  // Install Pinia into the Vue application
  app.use(pinia);
  
  // Now we can set up the router and mount the app
  app.use(router);
  app.mount('#app');
  
  // Access the WristbandAuthStore and attach it to Pinia
  const wristbandAuth = WristbandAuthStore(pinia); 

  // Configure the WristbandAuthStore with your settings, e.g., API endpoints
  await wristbandAuth.setConfig({
    loginUrl: '/api/auth/login',
    sessionUrl: '/api/v1/session',
    tokenUrl: '/api/v1/token',
  });

  // Attempt to fetch the current session on app startup
  await wristbandAuth.fetchSession();
};

// Initialize the app
init();
`;

export default WristbandAppConfig;