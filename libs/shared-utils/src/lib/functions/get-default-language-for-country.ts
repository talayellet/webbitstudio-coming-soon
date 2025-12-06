import { COUNTRY_CODES, ISO_COUNTRY_CODES, type CountryCode } from '../types';

/**
 * Get default language based on user's country
 * @param countryCode - ISO 3166-1 alpha-2 country code
 * @returns Language code (he for Israel, de for Germany, fr for France, es for Spain, en for others)
 */
export const getDefaultLanguageForCountry = (
  countryCode: string | null | undefined
): CountryCode => {
  if (!countryCode) {
    return COUNTRY_CODES.EN;
  }

  // Map country codes to language codes
  switch (countryCode) {
    case ISO_COUNTRY_CODES.IL:
      return COUNTRY_CODES.HE; // Israel -> Hebrew
    case ISO_COUNTRY_CODES.DE:
      return COUNTRY_CODES.DE; // Germany -> German
    case ISO_COUNTRY_CODES.FR:
      return COUNTRY_CODES.FR; // France -> French
    case ISO_COUNTRY_CODES.ES:
      return COUNTRY_CODES.ES; // Spain -> Spanish
    default:
      return COUNTRY_CODES.EN; // Default -> English
  }
};
