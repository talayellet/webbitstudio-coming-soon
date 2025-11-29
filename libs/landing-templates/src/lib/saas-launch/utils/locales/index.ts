import type { LocaleStrings } from './en';
import { en } from './en';
import { es } from './es';
import { fr } from './fr';
import { Locale, LOCALES } from '../../../shared';

export { en } from './en';
export { es } from './es';
export { fr } from './fr';
export type { LocaleStrings } from './en';

// Default locale
export const DEFAULT_LOCALE: Locale = LOCALES.EN;

// Available locales
export const AVAILABLE_LOCALES = [LOCALES.EN, LOCALES.ES, LOCALES.FR] as const;
export type AvailableLocale = (typeof AVAILABLE_LOCALES)[number];

/**
 * Get locale strings for a given locale code
 * Falls back to English if locale is not found
 */
export const getLocaleStrings = (locale: string): LocaleStrings => {
  switch (locale) {
    case LOCALES.ES:
      return es;
    case LOCALES.FR:
      return fr;
    case LOCALES.EN:
    default:
      return en;
  }
};
