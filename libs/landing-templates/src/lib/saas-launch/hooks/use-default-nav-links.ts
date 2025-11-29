import { useMemo } from 'react';
import { NavLink, LocaleStrings } from '../utils';

export interface UseDefaultNavLinksParams {
  locale: LocaleStrings;
  scrollToTop: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const useDefaultNavLinks = ({
  locale,
  scrollToTop,
}: UseDefaultNavLinksParams): NavLink[] => {
  return useMemo(
    () => [
      { href: '#top', label: locale.header.nav.home, onClick: scrollToTop },
      { href: '#features', label: locale.header.nav.features },
      { href: '#about', label: locale.header.nav.about },
      { href: '#contact', label: locale.header.nav.contact },
    ],
    [locale, scrollToTop]
  );
};
