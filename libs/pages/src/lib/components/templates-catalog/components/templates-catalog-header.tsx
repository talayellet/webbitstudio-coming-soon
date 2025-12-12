import { TEMPLATES_CATALOG_STYLES } from '../utils';

export interface TemplatesCatalogHeaderProps {
  /**
   * Main heading text
   */
  title: string;
  /**
   * Subtitle/description text
   */
  subtitle: string;
  /**
   * Whether the content should be displayed right-to-left
   */
  isRTL: boolean;
}

/**
 * Header section for the templates catalog with title and subtitle
 */
export const TemplatesCatalogHeader = ({
  title,
  subtitle,
  isRTL,
}: TemplatesCatalogHeaderProps) => {
  return (
    <div className={TEMPLATES_CATALOG_STYLES.header.wrapper}>
      <div className={TEMPLATES_CATALOG_STYLES.header.container}>
        <div
          className={TEMPLATES_CATALOG_STYLES.header.content}
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <h1 className={TEMPLATES_CATALOG_STYLES.header.title}>{title}</h1>
          <p className={TEMPLATES_CATALOG_STYLES.header.subtitle}>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
