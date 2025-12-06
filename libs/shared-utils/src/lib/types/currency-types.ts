import { ISO_COUNTRY_CODES, ISOCountryCode } from './locale-types';

// ============================================================================
// Domain Types
// ============================================================================

export interface CurrencyOption<T = string> {
  code: T;
  symbol: string;
  label: string;
}

export interface CurrencyFilter {
  currencyCode: string;
  allowedCountries: ISOCountryCode[];
}

// ============================================================================
// Currency Codes
// ============================================================================

export const WEBBIT_CURRENCY = {
  EUR: 'EUR',
  USD: 'USD',
  ILS: 'ILS',
} as const;

export type WebbitCurrency =
  (typeof WEBBIT_CURRENCY)[keyof typeof WEBBIT_CURRENCY];

// ============================================================================
// Currency Symbols
// ============================================================================

export const CURRENCY_SYMBOLS = {
  EUR: '€',
  USD: '$',
  ILS: '₪',
} as const;

export type CurrencySymbol =
  (typeof CURRENCY_SYMBOLS)[keyof typeof CURRENCY_SYMBOLS];

// ============================================================================
// Configuration & Constants
// ============================================================================

export const CURRENCY_STORAGE_KEY = 'webbit-currency';
export const CURRENCY_USER_SELECTED_KEY = 'webbit-currency-user-selected';

export const WEBBIT_STUDIO_CURRENCY_OPTIONS: CurrencyOption<WebbitCurrency>[] =
  [
    {
      code: WEBBIT_CURRENCY.USD,
      symbol: CURRENCY_SYMBOLS.USD,
      label: WEBBIT_CURRENCY.USD,
    },
    {
      code: WEBBIT_CURRENCY.EUR,
      symbol: CURRENCY_SYMBOLS.EUR,
      label: WEBBIT_CURRENCY.EUR,
    },
    {
      code: WEBBIT_CURRENCY.ILS,
      symbol: CURRENCY_SYMBOLS.ILS,
      label: WEBBIT_CURRENCY.ILS,
    },
  ];

/**
 * Default currency filters for geo-restricted currencies
 * ILS is only shown to users browsing from Israel
 */
export const DEFAULT_CURRENCY_FILTERS: CurrencyFilter[] = [
  {
    currencyCode: WEBBIT_CURRENCY.ILS,
    allowedCountries: [ISO_COUNTRY_CODES.IL],
  },
];

// ============================================================================
// Utility Function Options
// ============================================================================

export interface CurrencyConversionProps {
  amount: number;
  fromCurrency: string;
  toCurrency: string;
  rates: Record<string, number>;
}

export interface PriceFormattingProps {
  amount: number;
  symbol: string;
}

export interface PriceConversionProps {
  priceString: string;
  targetCurrency: string;
  targetSymbol: string;
  rates: Record<string, number>;
}
