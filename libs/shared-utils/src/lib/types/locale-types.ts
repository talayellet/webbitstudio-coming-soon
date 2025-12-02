export const COUNTRY_CODES = {
  DE: 'de',
  EN: 'en',
  ES: 'es',
  FR: 'fr',
} as const;
export type CountryCode = (typeof COUNTRY_CODES)[keyof typeof COUNTRY_CODES];

export const COUNTRY_LABNELS = {
  DE: 'Deutsch',
  EN: 'English',
  ES: 'Español',
  FR: 'Français',
} as const;
export type CountryLabel =
  (typeof COUNTRY_LABNELS)[keyof typeof COUNTRY_LABNELS];

export const COUNTRY_FLAGS = {
  DE: '🇩🇪',
  EN: '🇺🇸',
  ES: '🇪🇸',
  FR: '🇫🇷',
} as const;

export type CountryFlag = (typeof COUNTRY_FLAGS)[keyof typeof COUNTRY_FLAGS];

export interface LanguageOption {
  code: CountryCode;
  flag: CountryFlag;
  label: CountryLabel;
}
