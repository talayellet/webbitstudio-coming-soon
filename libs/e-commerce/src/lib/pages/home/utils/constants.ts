/**
 * Constants for the eCommerce home page
 */

export const DEFAULT_LOCALE = {
  HEADER: {
    LOGIN: 'Login',
    SIGNUP: 'Sign Up',
    CART_ARIA_LABEL: 'Shopping cart',
    ITEMS_IN_CART: 'items in cart',
    LOCATION_ARIA_LABEL: 'Select location',
    LANGUAGE_ARIA_LABEL: 'Select language',
    LOGO_ALT: 'Store logo',
  },
  FOOTER: {
    PRIVACY_POLICY: 'Privacy Policy',
    TERMS_OF_SERVICE: 'Terms of Service',
    COOKIE_POLICY: 'Cookie Policy',
    CONTACT_US: 'Contact Us',
    BACK_TO_TOP: 'Back to Top',
  },
  CATEGORIES: {
    VIEW_ALL: 'View all',
  },
} as const;

export type LocaleType = typeof DEFAULT_LOCALE;
