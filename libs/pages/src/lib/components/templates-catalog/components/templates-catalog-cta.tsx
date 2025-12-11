import { TEMPLATES_CATALOG_STYLES } from '../utils';

export interface TemplatesCatalogCtaProps {
  /**
   * CTA section title
   */
  title: string;
  /**
   * CTA section description
   */
  description: string;
  /**
   * Button text
   */
  buttonText: string;
  /**
   * Button href link
   */
  buttonHref: string;
}

/**
 * Call-to-action section at the bottom of the templates catalog
 */
export const TemplatesCatalogCta = ({
  title,
  description,
  buttonText,
  buttonHref,
}: TemplatesCatalogCtaProps) => {
  return (
    <div className={TEMPLATES_CATALOG_STYLES.cta.wrapper}>
      <div className={TEMPLATES_CATALOG_STYLES.cta.container}>
        <h2 className={TEMPLATES_CATALOG_STYLES.cta.title}>{title}</h2>
        <p className={TEMPLATES_CATALOG_STYLES.cta.description}>
          {description}
        </p>
        <a href={buttonHref} className={TEMPLATES_CATALOG_STYLES.cta.button}>
          {buttonText}
        </a>
      </div>
    </div>
  );
};
