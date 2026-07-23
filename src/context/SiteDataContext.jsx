import React, { createContext, useContext, useState, useCallback } from 'react';
import defaultSiteData from '../data/siteData';

const STORAGE_KEY = 'pf-site-data';

const SiteDataContext = createContext();

/* ── Deep merge helper ── */
function deepMerge(defaults, overrides) {
  if (!overrides || typeof overrides !== 'object' || Array.isArray(overrides)) {
    return overrides !== undefined ? overrides : defaults;
  }
  const result = { ...defaults };
  for (const key of Object.keys(defaults)) {
    if (key in overrides) {
      if (
        typeof defaults[key] === 'object' &&
        defaults[key] !== null &&
        !Array.isArray(defaults[key]) &&
        typeof overrides[key] === 'object' &&
        overrides[key] !== null &&
        !Array.isArray(overrides[key])
      ) {
        result[key] = deepMerge(defaults[key], overrides[key]);
      } else {
        result[key] = overrides[key];
      }
    }
  }
  // Also copy keys that are in overrides but not in defaults
  for (const key of Object.keys(overrides)) {
    if (!(key in defaults)) {
      result[key] = overrides[key];
    }
  }
  return result;
}

/* ── Load from localStorage, falling back to defaults ── */
function loadData() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return deepMerge(defaultSiteData, parsed);
    }
  } catch {
    // Corrupted data — fall back to defaults
  }
  return defaultSiteData;
}

export function SiteDataProvider({ children }) {
  const [data, setData] = useState(loadData);

  /* Update a single section, e.g. updateSection('hero', { firstName: 'Bob' }) */
  const updateSection = useCallback((sectionKey, newSectionData) => {
    setData(prev => {
      const next = {
        ...prev,
        [sectionKey]: typeof newSectionData === 'object' && !Array.isArray(newSectionData)
          ? { ...prev[sectionKey], ...newSectionData }
          : newSectionData,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  /* Replace all data (e.g. import from JSON) */
  const replaceAll = useCallback((newData) => {
    const merged = deepMerge(defaultSiteData, newData);
    setData(merged);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
  }, []);

  /* Reset everything to factory defaults */
  const resetAll = useCallback(() => {
    setData(defaultSiteData);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return (
    <SiteDataContext.Provider value={{ data, updateSection, replaceAll, resetAll, defaultSiteData }}>
      {children}
    </SiteDataContext.Provider>
  );
}

export function useSiteData() {
  const ctx = useContext(SiteDataContext);
  if (!ctx) throw new Error('useSiteData must be used within <SiteDataProvider>');
  return ctx;
}
