import * as styles from '../../../utils/styles';

interface MobileMenuHeaderProps {
  logoTitle: string;
  logoSubtitle: string;
}

export const MobileMenuHeader = ({
  logoTitle,
  logoSubtitle,
}: MobileMenuHeaderProps) => {
  return (
    <div className={styles.header.mobileMenu.menuHeader}>
      <div className={styles.header.logo.textContainer}>
        <span className={styles.header.logo.title}>{logoTitle}</span>
        <span className={styles.header.logo.subtitle}>{logoSubtitle}</span>
      </div>
    </div>
  );
};
