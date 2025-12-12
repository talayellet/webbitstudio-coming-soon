import { useMemo } from 'react';
import {
  getLocaleStrings,
  getDefaultFooterSections,
  SECTION_IDS,
  type FooterSection,
  type LocaleStrings,
  NavLink,
} from '../utils';
import {
  DEFAULT_THEMES,
  THEME_NAMES,
  type Locale,
  type ThemeOption,
} from '../../shared';

interface UseRestaurantLocalizationProps {
  localeStrings: LocaleStrings;
  navLinks: NavLink[];
  localizedFooterSections: FooterSection[];
  localizedThemes: ThemeOption[];
}

/**
 * Hook for managing restaurant-specific localization.
 * Generates localized navigation links, footer sections, and theme labels
 * based on the current locale.
 *
 * @param locale - The current locale code
 * @param footerSections - Optional override for footer sections
 * @returns Object containing localized strings and UI elements
 *
 * @example
 * ```tsx
 * const RestaurantLayout = ({ locale, footerSections }) => {
 *   const { navLinks, localizedFooterSections, localizedThemes, localeStrings } =
 *     useRestaurantLocalization(locale, footerSections);
 *
 *   return (
 *     <div>
 *       <Header navLinks={navLinks} />
 *       <Footer sections={localizedFooterSections} />
 *       <ThemeSwitcher themes={localizedThemes} />
 *     </div>
 *   );
 * };
 * ```
 */
export const useRestaurantLocalization = (
  locale: Locale,
  footerSections?: FooterSection[]
): UseRestaurantLocalizationProps => {
  // Get locale strings
  const localeStrings = useMemo(() => getLocaleStrings(locale), [locale]);

  // Create nav links from locale strings
  const navLinks = useMemo(
    () => [
      { href: `#${SECTION_IDS.ABOUT}`, label: localeStrings.header.nav.about },
      { href: `#${SECTION_IDS.MENU}`, label: localeStrings.header.nav.menu },
      {
        href: `#${SECTION_IDS.CONTACT}`,
        label: localeStrings.header.nav.contact,
      },
    ],
    [localeStrings]
  );

  // Generate localized footer sections (or use provided override)
  const localizedFooterSections = useMemo(
    () => footerSections ?? getDefaultFooterSections(localeStrings),
    [footerSections, localeStrings]
  );

  // Generate localized theme options
  const localizedThemes = useMemo(() => {
    return DEFAULT_THEMES.map((theme) => ({
      ...theme,
      label:
        theme.name === THEME_NAMES.WARM
          ? localeStrings.themes.warm
          : theme.name === THEME_NAMES.ELEGANT
          ? localeStrings.themes.elegant
          : theme.name === THEME_NAMES.MODERN
          ? localeStrings.themes.modern
          : theme.name === THEME_NAMES.RUSTIC
          ? localeStrings.themes.rustic
          : localeStrings.themes.coastal,
    }));
  }, [localeStrings]);

  return {
    localeStrings,
    navLinks,
    localizedFooterSections,
    localizedThemes,
  };
};
