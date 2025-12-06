import * as styles from '../utils/styles';
import type { LocaleStrings } from '../utils/locales';
import { useScrollToTop } from '@webbitstudio/shared-utils';

interface FooterProps {
  content: LocaleStrings['footer'];
}

export const Footer = ({ content }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const copyrightText = content.copyright
    .replace('{year}', currentYear.toString())
    .replace('{companyName}', content.companyName);

  const { scrollToTop } = useScrollToTop();

  return (
    <footer className={styles.footer.root}>
      <div className={styles.footer.container}>
        <p>{copyrightText}</p>
        <div className={styles.footer.links}>
          <button
            type="button"
            className={styles.footer.link}
            onClick={scrollToTop}
            aria-label={content.backToTop}
          >
            {content.backToTop}
          </button>
          <span className={styles.footer.separator} />
          <span>{content.website}</span>
        </div>
      </div>
    </footer>
  );
};
