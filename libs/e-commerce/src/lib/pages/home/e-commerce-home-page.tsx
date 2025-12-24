import { useMemo } from 'react';
import { HOME_PAGE_STYLES, DEFAULT_LOCALE } from './utils';
import type { HomePageProps } from './utils';

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
export const ECommerceHomePage = ({
  logoUrl,
  storeName = 'Store',
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
      HEADER: { ...DEFAULT_LOCALE.HEADER, ...locale.HEADER },
      FOOTER: { ...DEFAULT_LOCALE.FOOTER, ...locale.FOOTER },
      CATEGORIES: { ...DEFAULT_LOCALE.CATEGORIES, ...locale.CATEGORIES },
    }),
    [locale]
  );

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={mergedStyles.PAGE_CONTAINER}>
      {/* Header */}
      <header className={mergedStyles.HEADER}>
        <div className={mergedStyles.HEADER_CONTAINER}>
          {/* Top Header Row */}
          <div className={mergedStyles.HEADER_TOP}>
            {/* Logo */}
            <div className={mergedStyles.LOGO_CONTAINER}>
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={mergedLocale.HEADER.LOGO_ALT}
                  className={mergedStyles.LOGO_IMAGE}
                />
              ) : (
                <span className={mergedStyles.LOGO_TEXT}>{storeName}</span>
              )}
            </div>

            {/* User Section */}
            <div className={mergedStyles.USER_SECTION}>
              {user ? (
                <div className={mergedStyles.USER_GREETING}>
                  Welcome,{' '}
                  <span className={mergedStyles.USER_NAME}>{user.name}</span>
                </div>
              ) : (
                <>
                  <button
                    onClick={onLogin}
                    className={mergedStyles.AUTH_BUTTON}
                    type="button"
                  >
                    {mergedLocale.HEADER.LOGIN}
                  </button>
                  <button
                    onClick={onSignup}
                    className={mergedStyles.AUTH_BUTTON_PRIMARY}
                    type="button"
                  >
                    {mergedLocale.HEADER.SIGNUP}
                  </button>
                </>
              )}

              {/* Cart */}
              <button
                onClick={onCartClick}
                className={mergedStyles.CART_BUTTON}
                aria-label={`${mergedLocale.HEADER.CART_ARIA_LABEL} - ${cartItemCount} ${mergedLocale.HEADER.ITEMS_IN_CART}`}
                type="button"
              >
                <svg
                  className={mergedStyles.CART_ICON}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItemCount > 0 && (
                  <span className={mergedStyles.CART_BADGE}>
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Bottom Header Row */}
          <div className={mergedStyles.HEADER_BOTTOM}>
            <div className={mergedStyles.HEADER_LEFT}>
              {/* Location Selector */}
              {currentLocation && locations.length > 0 && (
                <div>
                  <select
                    value={currentLocation.code}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      onLocationChange?.(e.currentTarget.value)
                    }
                    className={mergedStyles.SELECT_BUTTON}
                    aria-label={mergedLocale.HEADER.LOCATION_ARIA_LABEL}
                  >
                    {locations.map((location) => (
                      <option key={location.code} value={location.code}>
                        {location.flag ? `${location.flag} ` : ''}
                        {location.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Language Selector */}
              {currentLanguage && languages.length > 0 && (
                <div>
                  <select
                    value={currentLanguage.code}
                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                      onLanguageChange?.(e.currentTarget.value)
                    }
                    className={mergedStyles.SELECT_BUTTON}
                    aria-label={mergedLocale.HEADER.LANGUAGE_ARIA_LABEL}
                  >
                    {languages.map((language) => (
                      <option key={language.code} value={language.code}>
                        {language.nativeName || language.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={mergedStyles.MAIN_CONTENT}>
        {/* Categories Section */}
        <section className={mergedStyles.CATEGORIES_SECTION}>
          <h1 className={mergedStyles.CATEGORIES_TITLE}>Shop by Category</h1>
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
