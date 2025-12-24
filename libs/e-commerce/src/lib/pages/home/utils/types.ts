/**
 * Type definitions for the eCommerce home page
 */

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ShoppingCategory {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  subCategories?: string[];
}

export interface Location {
  code: string;
  name: string;
  flag?: string;
}

export interface Language {
  code: string;
  name: string;
  nativeName: string;
}

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
  styles?: Partial<typeof import('./styles').HOME_PAGE_STYLES>;
  /** Localized text content */
  locale?: Partial<typeof import('./constants').DEFAULT_LOCALE>;
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
