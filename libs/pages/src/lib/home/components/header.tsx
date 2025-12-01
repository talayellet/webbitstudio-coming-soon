import React from 'react';
import * as styles from '../utils/styles';

export const Header: React.FC = () => {
  return (
    <header className={styles.header.root}>
      <div className={styles.header.logo.container}>
        <div className={styles.header.logo.icon}>
          <span className={styles.header.logo.iconText}>W</span>
        </div>
        <div className={styles.header.logo.textContainer}>
          <span className={styles.header.logo.title}>Webbit Studio</span>
          <span className={styles.header.logo.subtitle}>
            Websites for modern businesses
          </span>
        </div>
      </div>
      <nav className={styles.header.nav.root}>
        <a href="#packages" className={styles.header.nav.link}>
          Packages
        </a>
        <a href="#process" className={styles.header.nav.link}>
          How it works
        </a>
        <a href="#pricing" className={styles.header.nav.link}>
          Pricing
        </a>
        <a href="#faq" className={styles.header.nav.link}>
          FAQ
        </a>
        <a href="#contact" className={styles.button.primarySmall}>
          Start your project
        </a>
      </nav>
    </header>
  );
};
