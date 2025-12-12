import { useState, useEffect } from 'react';
import {
  LOCALE_STORAGE_KEY,
  DEFAULT_LANGUAGE,
} from '@webbitstudio/shared-utils';
import { STORAGE_EVENT } from '@webbitstudio/shared-utils';
/**
 * Custom hook to manage locale state synchronized with localStorage.
 * Listens for storage changes across tabs and polls for same-tab changes.
 *
 * @returns The current locale string
 */

export const useLocale = (): string => {
  const isClient = typeof window !== 'undefined';

  const [locale, setLocale] = useState<string>(() => {
    if (isClient) {
      return (
        window.localStorage.getItem(LOCALE_STORAGE_KEY) || DEFAULT_LANGUAGE
      );
    }
    return DEFAULT_LANGUAGE;
  });

  useEffect(() => {
    if (!isClient) return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LOCALE_STORAGE_KEY && e.newValue) {
        setLocale(e.newValue);
      }
    };

    // Also check localStorage periodically in case changes happen in same tab
    const checkLocale = () => {
      const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
      if (storedLocale && storedLocale !== locale) {
        setLocale(storedLocale);
      }
    };

    window.addEventListener(STORAGE_EVENT, handleStorageChange);
    const interval = setInterval(checkLocale, 1000);

    return () => {
      window.removeEventListener(STORAGE_EVENT, handleStorageChange);
      clearInterval(interval);
    };
  }, [locale, isClient]);

  return locale;
};
