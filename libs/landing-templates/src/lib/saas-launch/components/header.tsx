import React, { ReactNode } from 'react';
import clsx from 'clsx';
import {
  STYLES,
  LocaleStrings,
  DEFAULT_LOCALE_STRINGS,
  NavLink,
} from '../utils';
import { useStickyHeader, useDefaultNavLinks } from '../hooks';

export interface HeaderProps {
  companyName: string;
  locale?: LocaleStrings;
  logo: ReactNode;
  navLinks?: NavLink[];
  onNavClick?: () => boolean;
}

export const Header: React.FC<HeaderProps> = ({
  companyName,
  locale = DEFAULT_LOCALE_STRINGS,
  logo,
  navLinks,
  onNavClick,
}) => {
  const { isScrolled, scrollToTop } = useStickyHeader();
  const defaultNavLinks = useDefaultNavLinks({ locale, scrollToTop });

  const links = navLinks ?? defaultNavLinks;

  return (
    <header
      className={clsx(STYLES.HEADER, isScrolled && STYLES.HEADER_SCROLLED)}
    >
      <div className={STYLES.CONTAINER}>
        <nav className={STYLES.NAV}>
          <a href="/" onClick={scrollToTop} className={clsx(STYLES.NAV_BRAND)}>
            <div className={clsx(STYLES.LOGO_CONTAINER, STYLES.ICON_GRADIENT)}>
              {logo}
            </div>
            <span>{companyName}</span>
          </a>
          <ul className={STYLES.NAV_LIST}>
            {links.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    // Let parent component handle navigation first (e.g., return to main page)
                    const shouldContinue = onNavClick?.() ?? true;
                    // If parent didn't handle it, use the link's own onClick
                    if (shouldContinue && link.onClick) {
                      link.onClick(e);
                    }
                  }}
                  className={clsx(STYLES.NAV_LINK)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
