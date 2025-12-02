import React from 'react';
import * as styles from '../../../utils/styles';
import type { LocaleStrings } from '../../../utils/locales';
import { Logo } from './logo';

interface MobileMenuProps {
  isOpen: boolean;
  content: LocaleStrings['header'];
  languages: Array<{ code: string; flag: string; label: string }>;
  currentLanguage: string;
  onClose: () => void;
  onLanguageChange: (language: string) => void;
  onLinkClick: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  content,
  languages,
  currentLanguage,
  onClose,
  onLanguageChange,
  onLinkClick,
}) => {
  return (
    <>
      {/* Mobile Menu Overlay */}
      <div
        className={`${styles.header.mobileMenu.overlay} ${
          isOpen
            ? styles.header.mobileMenu.overlayVisible
            : styles.header.mobileMenu.overlayHidden
        }`}
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div
        className={`${styles.header.mobileMenu.menu} ${
          isOpen
            ? styles.header.mobileMenu.menuVisible
            : styles.header.mobileMenu.menuHidden
        }`}
      >
        <div className={styles.header.mobileMenu.menuHeader}>
          <Logo title={content.logo.title} subtitle={content.logo.subtitle} />
          <button
            className={styles.header.mobileMenu.closeButton}
            onClick={onClose}
            aria-label={content.ariaLabels.closeMenu}
          >
            <svg
              className={styles.header.mobileMenu.closeButtonIcon}
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
          <div className={styles.header.mobileMenu.menuLanguageSwitcher}>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                }}
                className={`${styles.header.mobileFlagButton} ${
                  currentLanguage === lang.code
                    ? styles.header.mobileFlagButtonActive
                    : ''
                }`}
                aria-label={lang.label}
                title={lang.label}
              >
                {lang.flag}
              </button>
            ))}
          </div>
          <a
            href="#packages"
            className={styles.header.mobileMenu.menuLink}
            onClick={onLinkClick}
          >
            {content.nav.packages}
          </a>
          <a
            href="#process"
            className={styles.header.mobileMenu.menuLink}
            onClick={onLinkClick}
          >
            {content.nav.process}
          </a>
          <a
            href="#pricing"
            className={styles.header.mobileMenu.menuLink}
            onClick={onLinkClick}
          >
            {content.nav.pricing}
          </a>
          <a
            href="#faq"
            className={styles.header.mobileMenu.menuLink}
            onClick={onLinkClick}
          >
            {content.nav.faq}
          </a>
          <a
            href="#contact"
            className={styles.header.mobileMenu.menuButton}
            onClick={onLinkClick}
          >
            {content.nav.contact}
          </a>
        </nav>
      </div>
    </>
  );
};
