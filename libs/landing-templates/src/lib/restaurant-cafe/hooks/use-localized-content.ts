import { useMemo } from 'react';
import {
  ContentOverrides,
  LocaleStrings,
  MenuItem,
  Hours,
  Location,
  Contact,
} from '../utils';

interface UseLocalizedContentProps {
  heroSubtitle: string;
  heroTitle: string;
  heroDescription: string;
  heroCta: string;
  aboutTitle: string;
  aboutParagraph1: string;
  aboutParagraph2: string;
  menuTitle: string;
  menuDescription: string;
  menuItems: MenuItem[];
  hoursTitle: string;
  hours: Hours;
  locationTitle: string;
  location: Location;
  contactTitle: string;
  contact: Contact;
  reservationTitle: string;
  reservationDescription: string;
  reservationButton: string;
  footerTagline: string;
}

/**
 * Custom hook to get localized content with optional overrides
 * Content overrides take precedence over locale strings
 */
export const useLocalizedContent = (
  localeStrings: LocaleStrings,
  contentOverrides?: ContentOverrides
): UseLocalizedContentProps => {
  return useMemo(
    () => ({
      heroSubtitle:
        contentOverrides?.heroSubtitle ?? localeStrings.hero.subtitle,
      heroTitle: contentOverrides?.heroTitle ?? localeStrings.hero.title,
      heroDescription:
        contentOverrides?.heroDescription ?? localeStrings.hero.description,
      heroCta: contentOverrides?.heroCta ?? localeStrings.hero.cta,
      aboutTitle: contentOverrides?.aboutTitle ?? localeStrings.about.title,
      aboutParagraph1:
        contentOverrides?.aboutParagraph1 ?? localeStrings.about.paragraph1,
      aboutParagraph2:
        contentOverrides?.aboutParagraph2 ?? localeStrings.about.paragraph2,
      menuTitle: contentOverrides?.menuTitle ?? localeStrings.menu.title,
      menuDescription:
        contentOverrides?.menuDescription ?? localeStrings.menu.description,
      menuItems: contentOverrides?.menuItems ?? localeStrings.menu.items,
      hoursTitle: contentOverrides?.hoursTitle ?? localeStrings.info.hoursTitle,
      hours: contentOverrides?.hours ?? localeStrings.info.hours,
      locationTitle:
        contentOverrides?.locationTitle ?? localeStrings.info.locationTitle,
      location: contentOverrides?.location ?? localeStrings.info.location,
      contactTitle:
        contentOverrides?.contactTitle ?? localeStrings.info.contactTitle,
      contact: contentOverrides?.contact ?? localeStrings.info.contact,
      reservationTitle:
        contentOverrides?.reservationTitle ?? localeStrings.reservation.title,
      reservationDescription:
        contentOverrides?.reservationDescription ??
        localeStrings.reservation.description,
      reservationButton:
        contentOverrides?.reservationButton ?? localeStrings.reservation.button,
      footerTagline:
        contentOverrides?.footerTagline ?? localeStrings.footer.tagline,
    }),
    [contentOverrides, localeStrings]
  );
};
