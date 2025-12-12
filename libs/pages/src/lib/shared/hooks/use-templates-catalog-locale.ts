import { useState, useEffect } from 'react';
import {
  useGeoLocation,
  getDefaultLanguageForCountry,
  LOCALE_STORAGE_KEY,
  RTL_LOCALES,
  DEFAULT_LANGUAGE,
  type CountryCode,
} from '@webbitstudio/shared-utils';
import * as en from '../locales/templates-catalog-content/en';
import * as es from '../locales/templates-catalog-content/es';
import * as fr from '../locales/templates-catalog-content/fr';
import * as de from '../locales/templates-catalog-content/de';
import * as he from '../locales/templates-catalog-content/he';

const LOCALE_MAP = {
  en: en.en,
  es: es.es,
  fr: fr.fr,
  de: de.de,
  he: he.he,
} as const;

const isBrowser = typeof window !== 'undefined';

/**
 * Custom hook to get localized content for templates catalog
 */
export const useTemplatesCatalogLocale = () => {
  const { data: userCountry, isLoading: isGeoLoading } = useGeoLocation();
  const [isLocaleReady, setIsLocaleReady] = useState(false);

  const [locale, setLocaleState] = useState<CountryCode>(() => {
    if (isBrowser) {
      const stored = window.localStorage.getItem(
        LOCALE_STORAGE_KEY
      ) as CountryCode | null;
      if (stored && stored in LOCALE_MAP) {
        return stored;
      }
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    if (userCountry && isBrowser) {
      const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (!storedLocale) {
        const defaultLanguage = getDefaultLanguageForCountry(userCountry);
        setLocaleState(defaultLanguage);
      }
    }
  }, [userCountry, isGeoLoading]);

  useEffect(() => {
    if (isBrowser) {
      const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (storedLocale || !isGeoLoading) {
        setIsLocaleReady(true);
      }
    }
  }, [isGeoLoading]);

  const setLocale = (newLocale: CountryCode) => {
    setLocaleState(newLocale);
    if (isBrowser) {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, newLocale);
    }
  };

  useEffect(() => {
    if (isBrowser) {
      document.documentElement.dir = RTL_LOCALES.includes(locale)
        ? 'rtl'
        : 'ltr';
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return {
    locale,
    setLocale,
    content: LOCALE_MAP[locale as keyof typeof LOCALE_MAP] || LOCALE_MAP.en,
    isRTL: RTL_LOCALES.includes(locale),
    isLoading: isGeoLoading,
    isReady: isLocaleReady,
  };
};
