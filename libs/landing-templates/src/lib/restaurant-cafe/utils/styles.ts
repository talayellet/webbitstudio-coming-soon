import { ColorScheme } from './types';

/**
 * CSS class names for restaurant-cafe template styling
 */
export const STYLES = {
  // Layout
  TEMPLATE_WRAPPER: 'rc-template-wrapper',
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
 * Uses CSS variables for consistent theming
 */
export const DEFAULT_COLORS: ColorScheme = {
  primary: 'var(--primary)',
  primaryLight: 'var(--primary-light)',
  secondary: 'var(--secondary)',
  accent: 'var(--accent)',
  background: 'var(--background)',
  surface: 'var(--surface)',
  text: 'var(--text)',
  textMuted: 'var(--text-muted)',
} as const;

/**
 * Font families for restaurant-cafe template
 * Uses CSS variables for consistent theming
 */
export const FONTS = {
  HEADING: 'var(--font-heading)',
  BODY: 'var(--font-body)',
} as const;
