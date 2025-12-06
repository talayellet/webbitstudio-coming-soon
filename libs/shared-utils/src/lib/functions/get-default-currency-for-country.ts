import {
  WEBBIT_CURRENCY,
  type WebbitCurrency,
  ISO_COUNTRY_CODES,
} from '../types';
import { EU_COUNTRY_CODES } from '../constants';

/**
 * Get default currency based on user's country
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @returns Currency code (ILS for Israel, EUR for EU countries, USD for others)
 */
export const getDefaultCurrencyForCountry = (
  countryCode: string | null | undefined
): WebbitCurrency => {
  if (!countryCode) {
    return WEBBIT_CURRENCY.USD;
  }

  // Israel -> ILS
  if (countryCode === ISO_COUNTRY_CODES.IL) {
    return WEBBIT_CURRENCY.ILS;
  }

  // EU countries -> EUR
  if (
    EU_COUNTRY_CODES.includes(countryCode as (typeof EU_COUNTRY_CODES)[number])
  ) {
    return WEBBIT_CURRENCY.EUR;
  }

  // Default -> USD
  return WEBBIT_CURRENCY.USD;
};
