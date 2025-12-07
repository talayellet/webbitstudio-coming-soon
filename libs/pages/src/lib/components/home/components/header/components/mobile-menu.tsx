import React, { useMemo } from 'react';
import clsx from 'clsx';
import * as styles from '../../../utils/styles';
import type { LocaleStrings } from '../../../../../shared';
import { MobileMenuOverlay } from './mobile-menu-overlay';
import { MobileMenuHeader } from './mobile-menu-header';
import { MobileMenuLanguageSwitcher } from './mobile-menu-language-switcher';
import { MobileMenuNav } from './mobile-menu-nav';
import { LanguageOption } from '@webbitstudio/shared-utils';

interface MobileMenuProps {
  isOpen: boolean;
  content: LocaleStrings['header'];
  languages: LanguageOption[];
  currentLanguage: string;
  currencySwitcher: React.ReactNode;
  mobileMenuAriaLabel: string;
  onClose: () => void;
  onLanguageChange: (language: string) => void;
  onLinkClick: () => void;
  isRTL: boolean;
}

export const MobileMenu = ({
  isOpen,
  content,
  languages,
  currentLanguage,
  currencySwitcher,
  mobileMenuAriaLabel,
  onClose,
  onLanguageChange,
  onLinkClick,
  isRTL,
}: MobileMenuProps) => {
  const menuClasses = useMemo(
    () =>
      clsx(
        styles.header.mobileMenu.menu,
        isRTL
          ? styles.header.mobileMenu.menuRTL
          : styles.header.mobileMenu.menuLTR,
        isOpen
          ? styles.header.mobileMenu.menuVisible
          : styles.header.mobileMenu.menuHidden
      ),
    [isOpen, isRTL]
  );

  return (
    <>
      <MobileMenuOverlay isOpen={isOpen} onClose={onClose} />

      {/* Mobile Menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label={mobileMenuAriaLabel}
        className={menuClasses}
      >
        <MobileMenuHeader
          logoTitle={content.logo.title}
          logoSubtitle={content.logo.subtitle}
        />

        <nav className={styles.header.mobileMenu.menuContent}>
          <div className={styles.header.mobileMenu.menuSwitchers}>
            <MobileMenuLanguageSwitcher
              languages={languages}
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              ariaLabel={content.ariaLabels.languageSwitcher}
            />
            {currencySwitcher}
          </div>
          <MobileMenuNav content={content.nav} onLinkClick={onLinkClick} />
        </nav>
      </div>
    </>
  );
};
