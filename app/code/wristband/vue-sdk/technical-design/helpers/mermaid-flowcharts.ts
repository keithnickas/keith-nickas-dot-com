export const architectureDiagram = `---
config:
  theme: dark
---
flowchart TD
  A["Vue Component Layer<br/>useWristbandStore(), useWristbandSession(), etc."]

  B["WristbandAuthStore<br/>(Pinia Store)"]

  C[API Client<br/>Fetch-based]
  D[Auth Utils<br/>Validation]
  E[Token Manager<br/>Caching/TTL]

  F[Backend Auth Server]
  G[GET /session<br/>Session validation]
  H[POST /token<br/>Access token issuance]
  I[POST /logout<br/>Session termination]

  A --> B
  B --> C
  B --> D
  B --> E
  C --> F
  F --> G
  F --> H
  F --> I
`;

export const tokenAcquisitionDiagram = `---
config:
  theme: dark
---
flowchart TD
  A["Component<br/>getToken()"] --> B{Cached token valid?}
  B -- Yes --> C[Check cache & expiration]
  C --> D[Return cached token to Component]

  B -- No --> E{Token request in-flight?}
  E -- Yes --> F[Return pending Promise to Component]

  E -- No --> G["Acquire new token<br/>acquireTokenWithRetry()"]
  G --> H{Retry up to 3 attempts}

  H --> I[POST /token<br/>include CSRF header]
  I --> J{Success?}
  J -- Yes --> K[Store token & expiration in Cache]
  K --> L[Return accessToken to Component]

  J -- No --> M["Exponential backoff (100ms)"]
  M --> H

  H --> N{All retries exhausted?}
  N -- Yes --> O[Throw WristbandError to Component]
  N -- No --> H
`;

export const InitialSessionLoadDiagram = `---
config:
  theme: dark
---
flowchart TD
  A[App Mount] --> B["useWristbandStore(config)"]
  B --> C["setConfig()<br/>validates & stores URLs"]
  B --> D["fetchSession() Action"]

  D --> E["GET /session<br/>(with CSRF token from cookies)"]
  E --> F["Response:<br/>{ userId, tenantId, metadata, tokenUrl }"]

  F --> G["Update store state (reactive)"]
  G --> G1[isAuthenticated = true]
  G --> G2[isLoading = false]
  G --> G3[userId, tenantId, metadata populated]

  F --> H{"onSessionSuccess() configured?"}
  H -- Yes --> I["Invoke onSessionSuccess()"]
  H -- No --> J[No-op]
`;

export const sessionStateDiagram = `---
config:
  theme: dark
---
flowchart TD
  start([Start]) --> LOADING

  LOADING -->|"fetchSession() succeeds"| AUTHENTICATED
  LOADING -->|"fetchSession() fails (401)"| UNAUTHENTICATED

  AUTHENTICATED -->|"clearAuthData()"| UNAUTHENTICATED
  UNAUTHENTICATED -->|"fetchSession() succeeds"| AUTHENTICATED

  LOADING --- LOADING_NOTE["Initial state<br/>[init]"]
  AUTHENTICATED --- AUTH_NOTE[isAuth = true]
  UNAUTHENTICATED --- UNAUTH_NOTE[isAuth = false<br/>All state reset<br/>Error tracking enabled]

  classDef note fill:#222,stroke:#555,color:#ddd,stroke-dasharray: 3 3;
  class LOADING_NOTE,AUTH_NOTE,UNAUTH_NOTE note;
`;