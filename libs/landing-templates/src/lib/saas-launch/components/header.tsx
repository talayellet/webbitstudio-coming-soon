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
}

export const Header: React.FC<HeaderProps> = ({
  companyName,
  locale = DEFAULT_LOCALE_STRINGS,
  logo,
  navLinks,
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
                  onClick={link.onClick}
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
