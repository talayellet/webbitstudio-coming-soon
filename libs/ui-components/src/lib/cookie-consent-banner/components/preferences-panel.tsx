import { useEffect, useRef } from 'react';
import type { CookiePreferences } from '@webbitstudio/shared-utils';
import {
  COOKIE_CONSENT_BANNER_STYLES,
  COOKIE_CATEGORY_KEYS,
  COOKIE_CONSENT_DOM_IDS,
  type CookieCategoryInfo,
} from '../utils';
import { CookieCategoryItem } from './cookie-category-item';
import { CustomToggle } from '../../custom-toggle';

export interface CookiesPreferencesPanelProps {
  /**
   * Title for preferences section
   */
  preferencesTitle: string;
  /**
   * Text for save preferences button
   */
  savePreferencesButtonText: string;
  /**
   * Accessible label for the cookie categories group.
   * Used by screen readers to announce the purpose of the grouped controls.
   */
  categoriesGroupLabel: string;
  /**
   * Introductory message for the preferences panel
   */
  message?: string;
  /**
   * Cookie category information (labels and descriptions)
   */
  categories: {
    essential: CookieCategoryInfo;
    analytics: CookieCategoryInfo;
    marketing: CookieCategoryInfo;
  };
  /**
   * Current user preferences
   */
  preferences: CookiePreferences;
  /**
   * Callback to update a specific preference
   */
  onUpdatePreference: (
    category: keyof CookiePreferences,
    value: boolean
  ) => void;
  /**
   * Callback when user saves preferences
   */
  onSavePreferences: () => void;
  /**
   * Custom style for button container
   */
  buttonContainerStyle: string;
}

/**
 * Renders the preferences panel with all cookie categories
 */
export const CookiesPreferencesPanel = ({
  preferencesTitle,
  savePreferencesButtonText,
  categoriesGroupLabel,
  message,
  categories,
  preferences,
  onUpdatePreference,
  onSavePreferences,
  buttonContainerStyle,
}: CookiesPreferencesPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  // Focus management: move focus to panel when it opens
  useEffect(() => {
    if (panelRef.current) {
      panelRef.current.focus();
    }
  }, []);

  return (
    <div
      ref={panelRef}
      className={COOKIE_CONSENT_BANNER_STYLES.preferencesContainer}
      role="region"
      aria-labelledby={COOKIE_CONSENT_DOM_IDS.PREFERENCES_TITLE}
      tabIndex={-1}
    >
      <h3
        id={COOKIE_CONSENT_DOM_IDS.PREFERENCES_TITLE}
        className={COOKIE_CONSENT_BANNER_STYLES.preferencesTitle}
      >
        {preferencesTitle}
      </h3>

      {/* Desktop: Layout Container */}
      <div className="hidden md:flex md:flex-col">
        {/* Toggles + Button Row */}
        <div className="flex items-center gap-6 mb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-300">Essential</span>
            <CustomToggle
              enabled={true}
              disabled={true}
              onChange={() => {
                /* Essential cookies cannot be disabled */
              }}
              ariaLabel="Essential Cookies"
              styles={{
                container: COOKIE_CONSENT_BANNER_STYLES.toggle,
                containerEnabled: COOKIE_CONSENT_BANNER_STYLES.toggleEnabled,
                containerDisabled: COOKIE_CONSENT_BANNER_STYLES.toggleDisabled,
                button: COOKIE_CONSENT_BANNER_STYLES.toggleButton,
                buttonEnabled: COOKIE_CONSENT_BANNER_STYLES.toggleButtonEnabled,
                buttonDisabled:
                  COOKIE_CONSENT_BANNER_STYLES.toggleButtonDisabled,
                disabledOpacity:
                  COOKIE_CONSENT_BANNER_STYLES.toggleDisabledOpacity,
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-300">Analytics</span>
            <CustomToggle
              enabled={preferences.analytics}
              onChange={() =>
                onUpdatePreference(
                  COOKIE_CATEGORY_KEYS.ANALYTICS,
                  !preferences.analytics
                )
              }
              ariaLabel="Analytics Cookies"
              styles={{
                container: COOKIE_CONSENT_BANNER_STYLES.toggle,
                containerEnabled: COOKIE_CONSENT_BANNER_STYLES.toggleEnabled,
                containerDisabled: COOKIE_CONSENT_BANNER_STYLES.toggleDisabled,
                button: COOKIE_CONSENT_BANNER_STYLES.toggleButton,
                buttonEnabled: COOKIE_CONSENT_BANNER_STYLES.toggleButtonEnabled,
                buttonDisabled:
                  COOKIE_CONSENT_BANNER_STYLES.toggleButtonDisabled,
                disabledOpacity:
                  COOKIE_CONSENT_BANNER_STYLES.toggleDisabledOpacity,
              }}
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-300">Marketing</span>
            <CustomToggle
              enabled={preferences.marketing}
              onChange={() =>
                onUpdatePreference(
                  COOKIE_CATEGORY_KEYS.MARKETING,
                  !preferences.marketing
                )
              }
              ariaLabel="Marketing Cookies"
              styles={{
                container: COOKIE_CONSENT_BANNER_STYLES.toggle,
                containerEnabled: COOKIE_CONSENT_BANNER_STYLES.toggleEnabled,
                containerDisabled: COOKIE_CONSENT_BANNER_STYLES.toggleDisabled,
                button: COOKIE_CONSENT_BANNER_STYLES.toggleButton,
                buttonEnabled: COOKIE_CONSENT_BANNER_STYLES.toggleButtonEnabled,
                buttonDisabled:
                  COOKIE_CONSENT_BANNER_STYLES.toggleButtonDisabled,
                disabledOpacity:
                  COOKIE_CONSENT_BANNER_STYLES.toggleDisabledOpacity,
              }}
            />
          </div>
          <button
            onClick={onSavePreferences}
            className={COOKIE_CONSENT_BANNER_STYLES.saveButton}
            type="button"
          >
            {savePreferencesButtonText}
          </button>
        </div>

        {/* Message text below toggles */}
        {message && (
          <div className="text-xs text-slate-400 text-left rtl:text-right mb-2">
            {message}
          </div>
        )}

        {/* Description text below message */}
        <div className="text-xs text-slate-400 text-left rtl:text-right mb-4">
          {categories.essential.description} |{' '}
          {categories.analytics.description} |{' '}
          {categories.marketing.description}
        </div>
      </div>

      {/* Mobile: Original Layout */}
      <div className="md:hidden">
        <div
          className={COOKIE_CONSENT_BANNER_STYLES.categoryContainer}
          role="group"
          aria-label={categoriesGroupLabel}
        >
          {/* Essential Cookies - Always enabled */}
          <CookieCategoryItem
            category={categories.essential}
            enabled={true}
            disabled={true}
            onChange={() => {
              // Essential cookies cannot be disabled
            }}
          />

          {/* Analytics Cookies */}
          <CookieCategoryItem
            category={categories.analytics}
            enabled={preferences.analytics}
            onChange={() =>
              onUpdatePreference(
                COOKIE_CATEGORY_KEYS.ANALYTICS,
                !preferences.analytics
              )
            }
          />

          {/* Marketing Cookies */}
          <CookieCategoryItem
            category={categories.marketing}
            enabled={preferences.marketing}
            onChange={() =>
              onUpdatePreference(
                COOKIE_CATEGORY_KEYS.MARKETING,
                !preferences.marketing
              )
            }
          />
        </div>

        <div className={buttonContainerStyle}>
          <button
            onClick={onSavePreferences}
            className={COOKIE_CONSENT_BANNER_STYLES.saveButton}
            type="button"
          >
            {savePreferencesButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};
