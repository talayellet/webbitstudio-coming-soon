import { ThemeOption, THEME_NAMES } from './types';

export const THEME_STORAGE_KEY = 'app-theme';

export const DEFAULT_THEMES: ThemeOption[] = [
  {
    name: THEME_NAMES.WARM,
    label: 'Warm',
    icon: '☕',
    colors: {
      primary: '#8b6f47',
      primaryDark: '#6b5437',
      secondary: '#2c3e2e',
      background: '#fff8f0',
      surface: '#ffffff',
      text: '#2a2a2a',
      textMuted: '#6b6b6b',
      accent: '#d4a574',
    },
  },
  {
    name: THEME_NAMES.ELEGANT,
    label: 'Elegant',
    icon: '🍷',
    colors: {
      primary: '#b8860b',
      primaryDark: '#8b6914',
      secondary: '#2d1b1b',
      background: '#1a1614',
      surface: '#2a2420',
      text: '#f5f0e8',
      textMuted: '#b8b0a0',
      accent: '#daa520',
    },
  },
  {
    name: THEME_NAMES.MODERN,
    label: 'Modern',
    icon: '🥗',
    colors: {
      primary: '#4a5568',
      primaryDark: '#2d3748',
      secondary: '#718096',
      background: '#ffffff',
      surface: '#f7fafc',
      text: '#1a202c',
      textMuted: '#718096',
      accent: '#ed8936',
    },
  },
  {
    name: THEME_NAMES.RUSTIC,
    label: 'Rustic',
    icon: '🌾',
    colors: {
      primary: '#92400e',
      primaryDark: '#78350f',
      secondary: '#44403c',
      background: '#fef3c7',
      surface: '#fef9e7',
      text: '#292524',
      textMuted: '#57534e',
      accent: '#d97706',
    },
  },
  {
    name: THEME_NAMES.COASTAL,
    label: 'Coastal',
    icon: '🐚',
    colors: {
      primary: '#0891b2',
      primaryDark: '#0e7490',
      secondary: '#14b8a6',
      background: '#f0fdfa',
      surface: '#ffffff',
      text: '#134e4a',
      textMuted: '#5f7c78',
      accent: '#06b6d4',
    },
  },
];

export const DEFAULT_THEME: ThemeOption = DEFAULT_THEMES[0];

export const THEME_SWITCHER_STYLES = {
  CONTAINER: 'fixed z-[1000]',
  POSITION: {
    'top-left': 'top-6 left-6',
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'bottom-right': 'bottom-6 right-6',
  },
  WRAPPER: 'relative w-48',
  BUTTON:
    'w-full flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--surface)] text-[var(--text)] border border-white/10 hover:border-[var(--primary)] transition-all duration-200 shadow-lg hover:shadow-xl backdrop-blur-sm',
  ICON: 'text-xl',
  LABEL: 'text-sm font-medium flex-1',
  MENU_ITEMS:
    'absolute left-0 mt-2 w-48 origin-top-left rounded-lg bg-[var(--surface)] shadow-xl border border-white/10 backdrop-blur-xl focus:outline-none overflow-hidden',
  MENU_ITEM_BUTTON:
    'w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors duration-150',
  MENU_ITEM_ACTIVE: 'bg-white/5',
  MENU_ITEM_SELECTED: 'bg-[var(--primary)]/20',
  MENU_ITEM_ICON: 'text-xl',
  MENU_ITEM_LABEL: 'flex-1 text-left',
  MENU_ITEM_LABEL_ACTIVE: 'text-[var(--text)] font-medium',
  MENU_ITEM_LABEL_INACTIVE: 'text-[var(--text-muted)]',
  MENU_ITEM_CHECK: 'text-[var(--primary)]',
} as const;

export const THEME_TRANSITION = {
  ENTER: 'transition ease-out duration-100',
  ENTER_FROM: 'transform opacity-0 scale-95',
  ENTER_TO: 'transform opacity-100 scale-100',
  LEAVE: 'transition ease-in duration-75',
  LEAVE_FROM: 'transform opacity-100 scale-100',
  LEAVE_TO: 'transform opacity-0 scale-95',
} as const;
