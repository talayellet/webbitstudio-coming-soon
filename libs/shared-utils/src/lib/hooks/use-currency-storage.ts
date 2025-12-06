import { useState } from 'react';
import {
  CURRENCY_STORAGE_KEY,
  CURRENCY_USER_SELECTED_KEY,
  WEBBIT_CURRENCY,
  type WebbitCurrency,
} from '../types';

const isBrowser = typeof window !== 'undefined';

/**
 * Custom hook to manage currency state with localStorage persistence
 * Handles reading from and writing to localStorage
 * Does NOT set initial localStorage value to allow geo-based defaults
 *
 * @returns Object with currency state and setter function
 */
export const useCurrencyStorage = () => {
  const [currency, setCurrencyState] = useState<WebbitCurrency>(() => {
    if (isBrowser) {
      const stored = window.localStorage.getItem(
        CURRENCY_STORAGE_KEY
      ) as WebbitCurrency | null;
      if (stored && Object.values(WEBBIT_CURRENCY).includes(stored)) {
        return stored;
      }
    }
    return WEBBIT_CURRENCY.USD;
  });

  const setCurrency = (
    newCurrency: WebbitCurrency,
    isUserSelection = false
  ) => {
    setCurrencyState(newCurrency);

    // Only persist to localStorage if it's a user selection
    // Geo-based defaults should not be persisted
    if (isBrowser && isUserSelection) {
      window.localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
      window.localStorage.setItem(CURRENCY_USER_SELECTED_KEY, 'true');
    }
  };

  return { currency, setCurrency };
};
