import { useState, useEffect } from 'react';
import type { LocaleStrings } from '../utils/locales';
import { en, es, fr, de, he } from '../utils/locales';

export type Locale = 'en' | 'es' | 'fr' | 'de' | 'he';

const LOCALE_STORAGE_KEY = 'webbit-locale';

const localeMap: Record<Locale, LocaleStrings> = {
  en,
  es,
  fr,
  de,
  he,
};

const RTL_LOCALES: Locale[] = ['he'];

const isBrowser = typeof window !== 'undefined';

/**
 * Custom hook to get localized content
 * Manages locale state and provides methods to change language
 * Also manages RTL (right-to-left) direction for applicable languages
 */
export const useLocalizedContent = () => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (isBrowser) {
      const stored = window.localStorage.getItem(
        LOCALE_STORAGE_KEY
      ) as Locale | null;
      if (
        stored &&
        (stored === 'en' ||
          stored === 'es' ||
          stored === 'fr' ||
          stored === 'de' ||
          stored === 'he')
      ) {
        return stored;
      }
    }
    return 'en';
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (isBrowser) {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
      // Set document direction based on locale
      document.documentElement.dir = RTL_LOCALES.includes(locale)
        ? 'rtl'
        : 'ltr';
    }
  }, [locale]);

  return {
    locale,
    setLocale,
    content: localeMap[locale],
    isRTL: RTL_LOCALES.includes(locale),
  };
};
