import React from 'react';
import * as styles from '../../../utils/styles';

interface LogoProps {
  title: string;
  subtitle: string;
}

export const Logo: React.FC<LogoProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.header.logo.container}>
      <div className={styles.header.logo.icon}>
        <span className={styles.header.logo.iconText}>W</span>
      </div>
      <div className={styles.header.logo.textContainer}>
        <span className={styles.header.logo.title}>{title}</span>
        <span className={styles.header.logo.subtitle}>{subtitle}</span>
      </div>
    </div>
  );
};
