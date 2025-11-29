import React, { ReactNode, useMemo } from 'react';
import {
  DEFAULT_TEMPLATE,
  getLocaleStrings,
  DEFAULT_LOCALE,
  DEFAULT_LANGUAGE_OPTIONS,
  DEFAULT_CONTACT_FIELDS,
  ContentOverrides,
  ContactFieldsConfig,
  ColorScheme,
  FooterLink,
  Feature,
} from './utils';
import { useScrollReveal, useLocalizedContent } from './hooks';
import { Main, SaasLayout } from './components';
import { LanguageOption, Locale, THEME_NAMES, ThemeName } from '../shared';

export interface SaasLaunchProps {
  // Brand/Company
  productName?: string;
  companyName?: string;
  logo?: ReactNode;
  logoLetter?: string;

  // Content overrides (optional - falls back to locale strings)
  content?: ContentOverrides;

  // About Section
  aboutSection?: ReactNode;

  // Contact Section
  contactSection?: ReactNode;
  contactFieldsConfig?: ContactFieldsConfig;

  // Theme
  theme?: ThemeName;

  // Color scheme (overrides theme colors)
  colors?: ColorScheme;

  // Language switcher
  showLanguageSwitcher?: boolean;
  locale?: Locale;
  onLocaleChange?: (locale: Locale) => void;
  languageOptions?: LanguageOption[];

  // Theme switcher
  showThemeSwitcher?: boolean;

  // Footer
  showFooter?: boolean;
  footerLinks?: FooterLink[];

  // Feature navigation
  onFeatureClick?: (feature: Feature) => void;
}

export const SaasLaunch: React.FC<SaasLaunchProps> = ({
  aboutSection = DEFAULT_TEMPLATE.aboutSection,
  colors,
  companyName = DEFAULT_TEMPLATE.companyName,
  contactSection = DEFAULT_TEMPLATE.contactSection,
  contactFieldsConfig = DEFAULT_CONTACT_FIELDS,
  content,
  footerLinks,
  languageOptions = DEFAULT_LANGUAGE_OPTIONS,
  locale = DEFAULT_LOCALE,
  logo,
  logoLetter = DEFAULT_TEMPLATE.logoLetter,
  onLocaleChange,
  onFeatureClick,
  showFooter = true,
  showLanguageSwitcher = true,
  showThemeSwitcher = true,
  theme = THEME_NAMES.DARK,
}) => {
  const addToRefs = useScrollReveal();

  // Get locale strings
  const localeStrings = useMemo(() => getLocaleStrings(locale), [locale]);

  // Get localized content with overrides
  const displayContent = useLocalizedContent(localeStrings, content);

  return (
    <SaasLayout
      companyName={companyName}
      logo={logo}
      logoLetter={logoLetter}
      colors={colors}
      theme={theme}
      locale={locale}
      onLocaleChange={onLocaleChange}
      languageOptions={languageOptions}
      showLanguageSwitcher={showLanguageSwitcher}
      showThemeSwitcher={showThemeSwitcher}
      showFooter={showFooter}
      footerLinks={footerLinks}
    >
      <Main
        launchBadgeText={displayContent.launchBadgeText}
        heroTitle={displayContent.heroTitle}
        heroDescription={displayContent.heroDescription}
        primaryCtaText={displayContent.primaryCtaText}
        primaryCtaHref={displayContent.primaryCtaHref}
        secondaryCtaText={displayContent.secondaryCtaText}
        secondaryCtaHref={displayContent.secondaryCtaHref}
        features={displayContent.features}
        featuresSectionTitle={displayContent.featuresSectionTitle}
        stats={displayContent.stats}
        aboutSection={aboutSection}
        contactSection={contactSection}
        contactFieldsConfig={contactFieldsConfig}
        finalCtaTitle={displayContent.finalCtaTitle}
        finalCtaDescription={displayContent.finalCtaDescription}
        finalCtaButton={displayContent.finalCtaButton}
        finalCtaHref={displayContent.finalCtaHref}
        addToRefs={addToRefs}
        tagline={displayContent.tagline}
        locale={localeStrings}
        onFeatureClick={onFeatureClick}
      />
    </SaasLayout>
  );
};

export default SaasLaunch;
