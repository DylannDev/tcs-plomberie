export const CONSENT_STORAGE_KEY = "tcs-cookie-consent";

export type ConsentStatus = "accepted" | "refused";

export interface ConsentState {
  status: ConsentStatus;
  timestamp: string;
}

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

function ensureGtag(): GtagFn {
  if (typeof window === "undefined") return () => {};
  window.dataLayer = window.dataLayer || [];
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
  }
  return window.gtag;
}

export function applyConsent(status: ConsentStatus) {
  const gtag = ensureGtag();
  const value = status === "accepted" ? "granted" : "denied";
  gtag("consent", "update", {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
    functionality_storage: value,
    personalization_storage: value,
  });
}

export function saveConsent(status: ConsentStatus) {
  const state: ConsentState = {
    status,
    timestamp: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage indisponible (mode privé strict, etc.)
  }
  applyConsent(status);
}

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.status !== "accepted" && parsed.status !== "refused") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}
