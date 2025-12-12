import { useEffect, useMemo } from 'react';
import { type CountryCode } from '../types';
import { RTL_LOCALES } from '../constants';

/**
 * Hook for managing document-level locale attributes for accessibility.
 * Updates HTML lang and dir attributes according to WCAG 3.1.1 requirements.
 * Sets document.documentElement.lang to current locale (e.g., 'en', 'es', 'fr', 'he')
 * Sets document.documentElement.dir to 'rtl' for Hebrew and other RTL languages.
 * This ensures screen readers use correct pronunciation and language rules.
 *
 * @param locale - The current locale code (e.g., 'en', 'he', 'es')
 * @returns Object containing isRTL boolean flag
 *
 * @example
 * ```tsx
 * const MyApp = ({ locale }) => {
 *   const { isRTL } = useDocumentLocale(locale);
 *
 *   return (
 *     <div dir={isRTL ? 'rtl' : 'ltr'}>
 *       <YourContent />
 *     </div>
 *   );
 * };
 * ```
 */
export const useDocumentLocale = (locale: CountryCode) => {
  // Determine if current locale is RTL
  const isRTL = useMemo(() => RTL_LOCALES.includes(locale as never), [locale]);

  // Update document attributes for accessibility (WCAG 3.1.1)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    }
  }, [locale, isRTL]);

  return { isRTL };
};
