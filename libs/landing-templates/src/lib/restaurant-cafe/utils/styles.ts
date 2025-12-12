import { ColorScheme } from './types';

/**
 * CSS class names for restaurant-cafe template styling
 */
export const STYLES = {
  // Layout
  CONTAINER: 'rc-container',

  // Decorative elements
  ORNAMENT: 'rc-ornament',
  ORNAMENT_LEFT: 'rc-ornament-left',

  // Animations
  FADE_IN: 'rc-fade-in',
  VISIBLE: 'rc-visible',

  // Header
  HEADER: 'rc-header',
  NAV: 'rc-nav',
  LOGO: 'rc-logo',
  NAV_MENU: 'rc-nav-menu',
  NAV_LINK: 'rc-nav-link',

  // Hero Section
  HERO: 'rc-hero',
  HERO_CONTENT: 'rc-hero-content',
  HERO_SUBTITLE: 'rc-hero-subtitle',
  HERO_TITLE: 'rc-hero-title',
  HERO_DESCRIPTION: 'rc-hero-description',

  // Button
  BTN: 'rc-btn',
  BTN_PRIMARY: 'rc-btn-primary',

  // About Section
  ABOUT: 'rc-about',
  ABOUT_GRID: 'rc-about-grid',
  ABOUT_CONTENT: 'rc-about-content',
  ABOUT_IMAGE: 'rc-about-image',

  // Menu Section
  MENU_HIGHLIGHT: 'rc-menu-highlight',
  SECTION_HEADER: 'rc-section-header',
  MENU_GRID: 'rc-menu-grid',
  MENU_ITEM: 'rc-menu-item',
  MENU_ITEM_ICON: 'rc-menu-item-icon',
  MENU_ITEM_NAME: 'rc-menu-item-name',
  MENU_ITEM_DESCRIPTION: 'rc-menu-item-description',
  MENU_ITEM_PRICE: 'rc-menu-item-price',

  // Info Section
  INFO_SECTION: 'rc-info-section',
  INFO_GRID: 'rc-info-grid',
  INFO_CARD: 'rc-info-card',
  INFO_TITLE: 'rc-info-title',
  INFO_CONTENT: 'rc-info-content',
  INFO_LINK: 'rc-info-link',

  // Reservation Section
  CTA_SECTION: 'rc-cta-section',
  CTA_TITLE: 'rc-cta-title',
  CTA_DESCRIPTION: 'rc-cta-description',

  // Footer
  FOOTER: 'rc-footer',
  FOOTER_CONTENT: 'rc-footer-content',
  FOOTER_BRAND: 'rc-footer-brand',
  FOOTER_TAGLINE: 'rc-footer-tagline',
  FOOTER_SECTION: 'rc-footer-section',
  FOOTER_SECTION_TITLE: 'rc-footer-section-title',
  FOOTER_LINKS: 'rc-footer-links',
  FOOTER_LINK: 'rc-footer-link',
  FOOTER_BOTTOM: 'rc-footer-bottom',
} as const;

/**
 * Default color scheme for restaurant-cafe template
 * Elegant, warm tones suitable for fine dining
 */
export const DEFAULT_COLORS: ColorScheme = {
  primary: '#8b6f47',
  primaryLight: '#a68a64',
  secondary: '#2c3e2e',
  accent: '#d4a574',
  background: '#fff8f0',
  surface: '#ffffff',
  text: '#2a2a2a',
  textMuted: '#6b6b6b',
} as const;

/**
 * Font families for restaurant-cafe template
 */
export const FONTS = {
  HEADING: "'Cormorant Garamond', serif",
  BODY: "'Montserrat', sans-serif",
} as const;
