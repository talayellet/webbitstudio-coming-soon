import React from 'react';
import clsx from 'clsx';
import { STYLES, LocaleStrings, DEFAULT_LOCALE_STRINGS } from '../../../utils';

interface HeroSectionProps {
  launchBadgeText: string;
  heroTitle: string;
  heroDescription: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  primaryCtaOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  secondaryCtaOnClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  tagline?: string;
  locale?: LocaleStrings;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  launchBadgeText,
  heroTitle,
  heroDescription,
  primaryCtaText,
  primaryCtaHref,
  primaryCtaOnClick,
  secondaryCtaText,
  secondaryCtaHref,
  secondaryCtaOnClick,
  tagline,
  locale = DEFAULT_LOCALE_STRINGS,
}) => {
  return (
    <section className={STYLES.HERO_SECTION}>
      <div className={STYLES.CONTAINER}>
        <div className={clsx(STYLES.BADGE_WITH_ANIMATION)}>
          <span role="img" aria-label={locale.aria.rocket}>
            🚀
          </span>{' '}
          {launchBadgeText}
        </div>
        <h1 className={clsx(STYLES.HERO_TITLE, STYLES.TEXT_GRADIENT)}>
          {heroTitle}
        </h1>
        {tagline && <p className={clsx(STYLES.HERO_TAGLINE)}>{tagline}</p>}
        <p className={clsx(STYLES.HERO_DESCRIPTION)}>{heroDescription}</p>
        <div className={STYLES.HERO_CTA_WRAPPER}>
          <a
            href={primaryCtaHref}
            onClick={primaryCtaOnClick}
            className={clsx(STYLES.PRIMARY_BUTTON)}
          >
            {primaryCtaText}
          </a>
          <a
            href={secondaryCtaHref}
            onClick={secondaryCtaOnClick}
            className={clsx(STYLES.SECONDARY_BUTTON)}
          >
            {secondaryCtaText}
          </a>
        </div>
      </div>
    </section>
  );
};
