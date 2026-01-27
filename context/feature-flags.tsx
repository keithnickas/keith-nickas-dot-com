import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type FeatureFlags = Record<string, boolean>;

function saveFeatureFlagsToStorage(flags: FeatureFlags) {
  localStorage.setItem('featureFlags', JSON.stringify(flags));
}

// Utility functions to load/save flags from/to localStorage
function loadFeatureFlagsFromStorage(useLocalStorage: boolean): FeatureFlags {
  const storedFlags = localStorage.getItem('featureFlags');
  const featuresExpiry = localStorage.getItem('featuresExpiry');

  if (!useLocalStorage && storedFlags) {
    localStorage.removeItem('featureFlags');
    localStorage.removeItem('featuresExpiry');
    return {};
  }

  const setExpiry =
    (featuresExpiry && JSON.parse(featuresExpiry!) < Date.now()) || !featuresExpiry
      ? localStorage.setItem('featuresExpiry', JSON.stringify(Date.now() + 24 * 60 * 60 * 1000)) // 24 hours
      : null; // Not used currently, but could be for future expiry logic
  setExpiry;
  return storedFlags && featuresExpiry ? JSON.parse(storedFlags) : {};
}

export const FeatureFlagsContext = createContext<FeatureFlags>({});

export function FeatureFlagsProvider({ children }: { children: ReactNode }) {
  const [flags, setFlags] = useState<FeatureFlags>({});

  useEffect(() => {
    // Load initial flags from localStorage or server
    if (typeof window === 'undefined') return; // Skip server-side rendering
    const ssrFlags = (window as any).featureFlags || {};
    const searchParams = new URLSearchParams(window.location.search);
    const featureFlags = searchParams.has('ff') ? Array.from(searchParams.get('ff')?.split(',') || []) : [];
    const disabledFeatures = searchParams.has('disableff')
      ? Array.from(searchParams.get('disableff')?.split(',') || [])
      : [];
    const features: FeatureFlags = {};

    if (searchParams.has('disableff')) {
      Object.entries(ssrFlags).forEach(([flag, _]) => {
        if (disabledFeatures.includes(flag)) {
          features[flag] = false;
        } else {
          features[flag] = true;
        }
      });
    }

    if (searchParams.has('ff')) {
      featureFlags.forEach((flag) => {
        features[flag] = true;
      });
    }

    const useDebug = features && (features as any)?.debug;
    const storedFlags = loadFeatureFlagsFromStorage(!!useDebug);

    setFlags({ ...ssrFlags, ...storedFlags, ...features });

    if (useDebug) saveFeatureFlagsToStorage({ ...ssrFlags, ...storedFlags, ...features });
  }, []);

  return <FeatureFlagsContext.Provider value={{ ...flags }}>{children}</FeatureFlagsContext.Provider>;
}