import { LOCALES, type Locale } from './types';

export const EMAIL_REG = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i);
export const DEFAULT_LOCALE: Locale = LOCALES.EN;

// ============================================================================
// Page Under Construction
// ============================================================================

export const DEFAULT_PAGE_UNDER_CONSTRUCTION = {
  DEFAULT_PAGE_NAME: 'Page',
  DEFAULT_TITLE: 'Under Construction',
  DEFAULT_MESSAGE:
    "We're working hard to bring you this page. Check back soon!",
  DEFAULT_BACK_BUTTON: '← Back to Home',
  ARIA_LABEL: 'Under construction',
} as const;
