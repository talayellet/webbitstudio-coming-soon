import React, { useState } from 'react';
import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';

interface HeaderProps {
  content: LocaleStrings['header'];
  languageSwitcher: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({
  content,
  languageSwitcher,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <>
      <header className={styles.header.root}>
        <div className={styles.header.logo.container}>
          <div className={styles.header.logo.icon}>
            <span className={styles.header.logo.iconText}>W</span>
          </div>
          <div className={styles.header.logo.textContainer}>
            <span className={styles.header.logo.title}>
              {content.logo.title}
            </span>
            <span className={styles.header.logo.subtitle}>
              {content.logo.subtitle}
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.header.nav.root}>
          <div className={styles.header.nav.linksContainer}>
            <a href="#packages" className={styles.header.nav.link}>
              {content.nav.packages}
            </a>
            <a href="#process" className={styles.header.nav.link}>
              {content.nav.process}
            </a>
            <a href="#pricing" className={styles.header.nav.link}>
              {content.nav.pricing}
            </a>
            <a href="#faq" className={styles.header.nav.link}>
              {content.nav.faq}
            </a>
            <a href="#contact" className={styles.button.primarySmall}>
              {content.nav.contact}
            </a>
          </div>
          <div className={styles.header.nav.languageSwitcher}>
            {languageSwitcher}
          </div>
        </nav>

        {/* Mobile Burger Button */}
        <button
          className={styles.header.mobileMenu.burgerButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`${styles.header.mobileMenu.burgerLine} ${
              styles.header.mobileMenu.burgerLineTop
            } ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}
          />
          <span
            className={`${styles.header.mobileMenu.burgerLine} ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`${styles.header.mobileMenu.burgerLine} ${
              styles.header.mobileMenu.burgerLineBottom
            } ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.header.mobileMenu.overlay} ${
          isMobileMenuOpen
            ? styles.header.mobileMenu.overlayVisible
            : styles.header.mobileMenu.overlayHidden
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`${styles.header.mobileMenu.menu} ${
          isMobileMenuOpen
            ? styles.header.mobileMenu.menuVisible
            : styles.header.mobileMenu.menuHidden
        }`}
      >
        <div className={styles.header.mobileMenu.menuHeader}>
          <div className={styles.header.logo.container}>
            <div className={styles.header.logo.icon}>
              <span className={styles.header.logo.iconText}>W</span>
            </div>
            <div className={styles.header.logo.textContainer}>
              <span className={styles.header.logo.title}>
                {content.logo.title}
              </span>
              <span className={styles.header.logo.subtitle}>
                {content.logo.subtitle}
              </span>
            </div>
          </div>
          <button
            className={styles.header.mobileMenu.closeButton}
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className={styles.header.mobileMenu.menuContent}>
          <a
            href="#packages"
            className={styles.header.mobileMenu.menuLink}
            onClick={handleLinkClick}
          >
            {content.nav.packages}
          </a>
          <a
            href="#process"
            className={styles.header.mobileMenu.menuLink}
            onClick={handleLinkClick}
          >
            {content.nav.process}
          </a>
          <a
            href="#pricing"
            className={styles.header.mobileMenu.menuLink}
            onClick={handleLinkClick}
          >
            {content.nav.pricing}
          </a>
          <a
            href="#faq"
            className={styles.header.mobileMenu.menuLink}
            onClick={handleLinkClick}
          >
            {content.nav.faq}
          </a>
          <a
            href="#contact"
            className={styles.header.mobileMenu.menuButton}
            onClick={handleLinkClick}
          >
            {content.nav.contact}
          </a>
          <div className={styles.header.mobileMenu.menuLanguageSwitcher}>
            {languageSwitcher}
          </div>
        </nav>
      </div>
    </>
  );
};
