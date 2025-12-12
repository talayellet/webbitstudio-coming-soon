import { ReactNode } from 'react';
import clsx from 'clsx';
import { STYLES, NavLink } from '../utils';

interface HeaderProps {
  restaurantName: string;
  logo: ReactNode;
  navLinks: NavLink[];
}

/**
 * Header component for restaurant-cafe template
 */
export const Header = ({ restaurantName, logo, navLinks }: HeaderProps) => {
  return (
    <header className={STYLES.HEADER}>
      <div className={STYLES.CONTAINER}>
        <nav className={STYLES.NAV}>
          {logo ? (
            <div className={STYLES.LOGO}>{logo}</div>
          ) : (
            <a href="#" className={STYLES.LOGO}>
              {restaurantName}
            </a>
          )}
          <ul className={STYLES.NAV_MENU}>
            {navLinks.map((link, index) => (
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
