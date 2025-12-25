import { useMemo } from 'react';
import {
  HOME_PAGE_STYLES,
  User,
  ShoppingCategory,
  Language,
  Location,
  Locale,
} from './utils';
import { Header } from './components/header';
import { ENGLISH_LOCALE, HEBREW } from '../../locale';

/**
 * eCommerce Home Page Component
 *
 * A comprehensive home page for an eCommerce website featuring:
 * - Sticky header with logo, authentication, cart, location, and language options
 * - Shopping categories grid with cards
 * - Sticky footer with legal and contact links
 *
 * @example
 * ```tsx
 * <ECommerceHomePage
 *   storeName="My Store"
 *   cartItemCount={3}
 *   categories={categoryData}
 *   user={currentUser}
 *   onLogin={handleLogin}
 *   onCategoryClick={handleCategoryClick}
 * />
 * ```
 */
export interface HomePageProps {
  /** Store logo URL */
  logoUrl?: string;
  /** Store name (fallback if no logo) */
  storeName?: string;
  /** Currently signed-in user */
  user?: User;
  /** Number of items in shopping cart */
  cartItemCount: number;
  /** Available shopping categories */
  categories: ShoppingCategory[];
  /** Current selected location */
  currentLocation?: Location;
  /** Available locations */
  locations?: Location[];
  /** Current selected language */
  currentLanguage?: Language;
  /** Available languages */
  languages?: Language[];
  /** Custom styles override */
  styles?: Partial<typeof import('./utils/styles').HOME_PAGE_STYLES>;
  /** Localized text content */
  locale?: Partial<Locale>;
  /** Callback when login is clicked */
  onLogin?: () => void;
  /** Callback when signup is clicked */
  onSignup?: () => void;
  /** Callback when cart is clicked */
  onCartClick?: () => void;
  /** Callback when category is clicked */
  onCategoryClick?: (categoryId: string) => void;
  /** Callback when location changes */
  onLocationChange?: (locationCode: string) => void;
  /** Callback when language changes */
  onLanguageChange?: (languageCode: string) => void;
  /** Callback for privacy policy link */
  onPrivacyPolicyClick?: () => void;
  /** Callback for terms of service link */
  onTermsClick?: () => void;
  /** Callback for cookie policy link */
  onCookiePolicyClick?: () => void;
  /** Callback for contact us link */
  onContactClick?: () => void;
}

export const ECommerceHomePage = ({
  logoUrl,
  storeName,
  user,
  cartItemCount,
  categories,
  currentLocation,
  locations = [],
  currentLanguage,
  languages = [],
  styles = {},
  locale = {},
  onLogin,
  onSignup,
  onCartClick,
  onCategoryClick,
  onLocationChange,
  onLanguageChange,
  onPrivacyPolicyClick,
  onTermsClick,
  onCookiePolicyClick,
  onContactClick,
}: HomePageProps) => {
  const mergedStyles = { ...HOME_PAGE_STYLES, ...styles };
  const mergedLocale = useMemo(
    () => ({
      DEFAULT_STORE_NAME:
        locale.DEFAULT_STORE_NAME ?? ENGLISH_LOCALE.DEFAULT_STORE_NAME,
      SHOP_BY_CATEGORY:
        locale.SHOP_BY_CATEGORY ?? ENGLISH_LOCALE.SHOP_BY_CATEGORY,
      HEADER: { ...ENGLISH_LOCALE.HEADER, ...locale.HEADER },
      FOOTER: { ...ENGLISH_LOCALE.FOOTER, ...locale.FOOTER },
      CATEGORIES: { ...ENGLISH_LOCALE.CATEGORIES, ...locale.CATEGORIES },
    }),
    [locale]
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isRtl = currentLanguage?.code === HEBREW;

  return (
    <div className={mergedStyles.PAGE_CONTAINER} dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <Header
        logoUrl={logoUrl}
        storeName={storeName}
        user={user}
        cartItemCount={cartItemCount}
        currentLocation={currentLocation}
        locations={locations}
        currentLanguage={currentLanguage}
        languages={languages}
        isRtl={isRtl}
        styles={styles}
        locale={{
          DEFAULT_STORE_NAME: mergedLocale.DEFAULT_STORE_NAME,
          HEADER: mergedLocale.HEADER,
        }}
        onLogin={onLogin}
        onSignup={onSignup}
        onCartClick={onCartClick}
        onLocationChange={onLocationChange}
        onLanguageChange={onLanguageChange}
      />

      {/* Main Content */}
      <main className={mergedStyles.MAIN_CONTENT}>
        {/* Categories Section */}
        <section className={mergedStyles.CATEGORIES_SECTION}>
          <h1 className={mergedStyles.CATEGORIES_TITLE}>
            {mergedLocale.SHOP_BY_CATEGORY}
          </h1>
          <div className={mergedStyles.CATEGORIES_GRID}>
            {categories.map((category) => (
              <div
                key={category.id}
                className={mergedStyles.CATEGORY_CARD}
                onClick={() => onCategoryClick?.(category.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onCategoryClick?.(category.id);
                  }
                }}
                role="button"
                tabIndex={0}
              >
                <div className={mergedStyles.CATEGORY_IMAGE_CONTAINER}>
                  <img
                    src={category.imageUrl}
                    alt={category.name}
                    className={mergedStyles.CATEGORY_IMAGE}
                  />
                </div>
                <div className={mergedStyles.CATEGORY_CONTENT}>
                  <h2 className={mergedStyles.CATEGORY_NAME}>
                    {category.name}
                  </h2>
                  <p className={mergedStyles.CATEGORY_DESCRIPTION}>
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={mergedStyles.FOOTER}>
        <div className={mergedStyles.FOOTER_CONTAINER}>
          <div className={mergedStyles.FOOTER_CONTENT}>
            <nav
              className={mergedStyles.FOOTER_LINKS}
              aria-label="Footer navigation"
            >
              <button
                onClick={onPrivacyPolicyClick}
                className={mergedStyles.FOOTER_LINK}
                type="button"
              >
                {mergedLocale.FOOTER.PRIVACY_POLICY}
              </button>
              <span className={mergedStyles.FOOTER_DIVIDER}>|</span>
              <button
                onClick={onTermsClick}
                className={mergedStyles.FOOTER_LINK}
                type="button"
              >
                {mergedLocale.FOOTER.TERMS_OF_SERVICE}
              </button>
              <span className={mergedStyles.FOOTER_DIVIDER}>|</span>
              <button
                onClick={onCookiePolicyClick}
                className={mergedStyles.FOOTER_LINK}
                type="button"
              >
                {mergedLocale.FOOTER.COOKIE_POLICY}
              </button>
              <span className={mergedStyles.FOOTER_DIVIDER}>|</span>
              <button
                onClick={onContactClick}
                className={mergedStyles.FOOTER_LINK}
                type="button"
              >
                {mergedLocale.FOOTER.CONTACT_US}
              </button>
            </nav>
            <button
              onClick={scrollToTop}
              className={mergedStyles.BACK_TO_TOP_BUTTON}
              type="button"
            >
              {mergedLocale.FOOTER.BACK_TO_TOP}
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};
