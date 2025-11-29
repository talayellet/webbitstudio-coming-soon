/**
 * Supported locales
 */
export const LOCALES = {
  EN: 'en',
  ES: 'es',
  FR: 'fr',
} as const;

export type Locale = (typeof LOCALES)[keyof typeof LOCALES];
