/**
 * Example usage of the ECommerceHomePage component
 * This file demonstrates how to use the component with sample data
 */

import { ECommerceHomePage } from './e-commerce-home-page';
import type { ShoppingCategory, User, Location, Language } from './utils';

/**
 * Sample data for demonstration purposes
 */
export const SAMPLE_USER: User = {
  id: 'user-123',
  name: 'Jane Smith',
  email: 'jane.smith@example.com',
};

export const SAMPLE_CATEGORIES: ShoppingCategory[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description:
      'Smartphones, Laptops, Tablets, Smart Watches, Headphones & more',
    imageUrl:
      'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400',
    subCategories: ['Phones', 'Computers', 'Audio', 'Cameras'],
  },
  {
    id: 'fashion',
    name: 'Fashion',
    description:
      'Clothing, Shoes, Bags, Jewelry, Accessories for Men, Women & Kids',
    imageUrl:
      'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400',
    subCategories: ['Men', 'Women', 'Kids', 'Accessories'],
  },
  {
    id: 'home-garden',
    name: 'Home & Garden',
    description: 'Furniture, Decor, Kitchen, Garden Tools, Smart Home Devices',
    imageUrl: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=400',
    subCategories: ['Furniture', 'Kitchen', 'Garden', 'Decor'],
  },
  {
    id: 'sports',
    name: 'Sports & Outdoors',
    description:
      'Fitness Equipment, Camping Gear, Sports Apparel, Outdoor Activities',
    imageUrl:
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
    subCategories: ['Fitness', 'Camping', 'Team Sports', 'Water Sports'],
  },
  {
    id: 'books',
    name: 'Books & Media',
    description: 'Books, E-books, Audiobooks, Movies, Music, Video Games',
    imageUrl:
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
    subCategories: ['Books', 'E-books', 'Movies', 'Music'],
  },
  {
    id: 'toys',
    name: 'Toys & Games',
    description:
      'Educational Toys, Board Games, Puzzles, Action Figures, Dolls',
    imageUrl:
      'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400',
    subCategories: [
      'Educational',
      'Board Games',
      'Action Figures',
      'Outdoor Toys',
    ],
  },
  {
    id: 'health',
    name: 'Health & Beauty',
    description: 'Skincare, Makeup, Hair Care, Vitamins, Wellness Products',
    imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400',
    subCategories: ['Skincare', 'Makeup', 'Hair Care', 'Wellness'],
  },
  {
    id: 'automotive',
    name: 'Automotive',
    description: 'Car Parts, Tools, Accessories, Car Care, Electronics',
    imageUrl:
      'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400',
    subCategories: ['Parts', 'Tools', 'Accessories', 'Car Care'],
  },
];

export const SAMPLE_LOCATIONS: Location[] = [
  { code: 'us', name: 'United States', flag: '🇺🇸' },
  { code: 'uk', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'ca', name: 'Canada', flag: '🇨🇦' },
  { code: 'au', name: 'Australia', flag: '🇦🇺' },
  { code: 'de', name: 'Germany', flag: '🇩🇪' },
  { code: 'fr', name: 'France', flag: '🇫🇷' },
];

export const SAMPLE_LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
];

/**
 * Example component demonstrating the ECommerceHomePage usage
 */
export const ECommerceHomePageExample = () => {
  const handleLogin = () => {
    console.log('Navigate to login page');
  };

  const handleSignup = () => {
    console.log('Navigate to signup page');
  };

  const handleCartClick = () => {
    console.log('Navigate to cart page');
  };

  const handleCategoryClick = (categoryId: string) => {
    console.log('Navigate to category:', categoryId);
  };

  const handleLocationChange = (locationCode: string) => {
    console.log('Location changed to:', locationCode);
  };

  const handleLanguageChange = (languageCode: string) => {
    console.log('Language changed to:', languageCode);
  };

  const handlePrivacyPolicyClick = () => {
    console.log('Navigate to privacy policy');
  };

  const handleTermsClick = () => {
    console.log('Navigate to terms of service');
  };

  const handleCookiePolicyClick = () => {
    console.log('Navigate to cookie policy');
  };

  const handleContactClick = () => {
    console.log('Navigate to contact page');
  };

  return (
    <ECommerceHomePage
      storeName="WebbitStore"
      cartItemCount={3}
      categories={SAMPLE_CATEGORIES}
      user={SAMPLE_USER}
      currentLocation={SAMPLE_LOCATIONS[0]}
      locations={SAMPLE_LOCATIONS}
      currentLanguage={SAMPLE_LANGUAGES[0]}
      languages={SAMPLE_LANGUAGES}
      onLogin={handleLogin}
      onSignup={handleSignup}
      onCartClick={handleCartClick}
      onCategoryClick={handleCategoryClick}
      onLocationChange={handleLocationChange}
      onLanguageChange={handleLanguageChange}
      onPrivacyPolicyClick={handlePrivacyPolicyClick}
      onTermsClick={handleTermsClick}
      onCookiePolicyClick={handleCookiePolicyClick}
      onContactClick={handleContactClick}
    />
  );
};

/**
 * Example without user (showing login/signup)
 */
export const ECommerceHomePageGuestExample = () => {
  return (
    <ECommerceHomePage
      storeName="WebbitStore"
      cartItemCount={0}
      categories={SAMPLE_CATEGORIES}
      currentLocation={SAMPLE_LOCATIONS[0]}
      locations={SAMPLE_LOCATIONS}
      currentLanguage={SAMPLE_LANGUAGES[0]}
      languages={SAMPLE_LANGUAGES}
      onLogin={() => console.log('Login')}
      onSignup={() => console.log('Signup')}
      onCategoryClick={(id) => console.log('Category:', id)}
    />
  );
};
