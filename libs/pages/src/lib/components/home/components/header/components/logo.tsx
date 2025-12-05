import React, { useCallback } from 'react';
import * as styles from '../../../utils/styles';

interface LogoProps {
  title: string;
  subtitle: string;
  ariaLabel: string;
}

export const Logo: React.FC<LogoProps> = ({ title, subtitle, ariaLabel }) => {
  const handleClick = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={styles.header.logo.container}
      aria-label={ariaLabel}
    >
      <div className={styles.header.logo.icon}>
        <span className={styles.header.logo.iconText}>W</span>
      </div>
      <div className={styles.header.logo.textContainer}>
        <span className={styles.header.logo.title}>{title}</span>
        <span className={styles.header.logo.subtitle}>{subtitle}</span>
      </div>
    </button>
  );
};
