import React from 'react';
import * as styles from '../../../utils/styles';
import type { LocaleStrings } from '../../../utils/locales';

interface DesktopNavProps {
  content: LocaleStrings['header']['nav'];
  languageSwitcher: React.ReactNode;
}

export const DesktopNav: React.FC<DesktopNavProps> = ({
  content,
  languageSwitcher,
}) => {
  return (
    <nav className={styles.header.nav.root}>
      <div className={styles.header.nav.linksContainer}>
        <a href="#packages" className={styles.header.nav.link}>
          {content.packages}
        </a>
        <a href="#process" className={styles.header.nav.link}>
          {content.process}
        </a>
        <a href="#pricing" className={styles.header.nav.link}>
          {content.pricing}
        </a>
        <a href="#faq" className={styles.header.nav.link}>
          {content.faq}
        </a>
        <a href="#contact" className={styles.button.primarySmall}>
          {content.contact}
        </a>
      </div>
      <div className={styles.header.nav.languageSwitcher}>
        {languageSwitcher}
      </div>
    </nav>
  );
};
