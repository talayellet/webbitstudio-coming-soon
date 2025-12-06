import * as styles from '../../../utils/styles';
import { useScrollToTop } from '@webbitstudio/shared-utils';

interface LogoProps {
  title: string;
  subtitle: string;
  ariaLabel: string;
}

export const Logo = ({ title, subtitle, ariaLabel }: LogoProps) => {
  const { scrollToTop } = useScrollToTop();

  return (
    <button
      type="button"
      onClick={scrollToTop}
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
