import { useMemo } from 'react';
import { NavLink, LocaleStrings, createNavClickHandler } from '../utils';

export interface UseDefaultNavLinksProps {
  locale: LocaleStrings;
  scrollToTop: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const useDefaultNavLinks = ({
  locale,
  scrollToTop,
}: UseDefaultNavLinksProps): NavLink[] => {
  return useMemo(() => {
    const navItems = [
      { href: '/', label: locale.header.nav.home },
      { href: '/#features', label: locale.header.nav.features },
      { href: '/#about', label: locale.header.nav.about },
      { href: '/#contact', label: locale.header.nav.contact },
    ];

    return navItems.map(({ href, label }) => ({
      href,
      label,
      onClick: createNavClickHandler(href, scrollToTop),
    }));
  }, [locale, scrollToTop]);
};
