import { ReactNode } from 'react';
import '../restaurant-cafe-styles.css';
import '../utils/animations.css';
import { Header, Footer } from './';
import { LanguageSwitcher } from '@webbitstudio/ui-components';
import {
  ThemeSwitcher,
  useTheme,
  THEME_POSITIONS,
  THEME_NAMES,
  type ThemeName,
  type ColorOverrides,
  Locale,
} from '../../shared';
import {
  DEFAULT_TEMPLATE,
  DEFAULT_LOCALE,
  DEFAULT_LANGUAGE_OPTIONS,
  STYLES,
  type FooterSection,
} from '../utils';
import {
  type LanguageOption,
  useControlledState,
  useDocumentLocale,
} from '@webbitstudio/shared-utils';
import { useRestaurantLocalization } from '../hooks';

interface RestaurantLayoutProps {
  children: ReactNode;
  restaurantName?: string;
  logo?: ReactNode;
  colors?: ColorOverrides;
  theme?: ThemeName;
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  languageOptions?: LanguageOption[];
  showLanguageSwitcher?: boolean;
  showThemeSwitcher?: boolean;
  showFooter?: boolean;
  footerSections?: FooterSection[];
}

/**
 * RestaurantLayout - Provides the header, footer, theme, and locale management wrapper
 */
export const RestaurantLayout = ({
  children,
  restaurantName = DEFAULT_TEMPLATE.restaurantName,
  logo = DEFAULT_TEMPLATE.logo,
  colors,
  theme = THEME_NAMES.WARM,
  locale = DEFAULT_LOCALE,
  onLocaleChange,
  languageOptions = DEFAULT_LANGUAGE_OPTIONS,
  showLanguageSwitcher = true,
  showThemeSwitcher = true,
  showFooter = true,
  footerSections,
}: RestaurantLayoutProps) => {
  // Theme management
  const { currentTheme, setTheme, colorStyles } = useTheme({
    initialTheme: theme,
    colorOverrides: colors,
  });

  // Controlled/uncontrolled locale management
  const [currentLocale, handleLocaleChange] = useControlledState(
    locale,
    DEFAULT_LOCALE,
    onLocaleChange
  );

  // Document locale and RTL management
  const { isRTL } = useDocumentLocale(currentLocale);

  // Restaurant-specific localization
  const { localeStrings, navLinks, localizedFooterSections, localizedThemes } =
    useRestaurantLocalization(currentLocale, footerSections);

  return (
    <div
      className={STYLES.TEMPLATE_WRAPPER}
      style={colorStyles}
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Language Switcher */}
      {showLanguageSwitcher && (
        <LanguageSwitcher
          currentLanguage={currentLocale}
          languages={
            languageOptions as Array<{
              code: Locale;
              flag: string;
              label: string;
            }>
          }
          onLanguageChange={handleLocaleChange}
        />
      )}

      {/* Theme Switcher */}
      {showThemeSwitcher && (
        <ThemeSwitcher
          currentTheme={currentTheme}
          onThemeChange={setTheme}
          position={THEME_POSITIONS.TOP_LEFT}
          themes={localizedThemes}
        />
      )}

      <Header
        restaurantName={restaurantName}
        logo={logo}
        navLinks={navLinks}
        ariaMainNavigation={localeStrings.header.aria.mainNavigation}
        ariaReturnToTop={localeStrings.header.aria.returnToTop}
      />

      {children}

      {showFooter && (
        <Footer
          restaurantName={restaurantName}
          tagline={localeStrings.footer.tagline}
          footerSections={localizedFooterSections}
          copyright={localeStrings.footer.copyright}
        />
      )}
    </div>
  );
};
