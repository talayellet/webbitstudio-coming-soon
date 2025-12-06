export const COOKIES_CONSENT_VALUE = {
  ACCEPTED: 'accepted',
  REJECTED: 'rejected',
} as const;

export type ConsentValue =
  | (typeof COOKIES_CONSENT_VALUE)[keyof typeof COOKIES_CONSENT_VALUE]
  | null;

/**
 * Custom event name dispatched when cookie consent changes
 */
export const COOKIE_CONSENT_CHANGED_EVENT = 'cookieConsentChanged' as const;

/**
 * LocalStorage key for storing cookie consent preference
 */
export const COOKIE_CONSENT_STORAGE_KEY = 'webbit-cookie-consent' as const;
