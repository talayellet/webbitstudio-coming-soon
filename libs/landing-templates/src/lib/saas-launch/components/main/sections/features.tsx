import React from 'react';
import clsx from 'clsx';
import { Feature, STYLES } from '../../../utils';
import type { LocaleStrings } from '../../../utils/locales';

interface FeaturesSectionProps {
  features: readonly Feature[];
  addToRefs: (el: HTMLElement | null) => void;
  title?: string;
  sectionId?: string;
  className?: string;
  onFeatureClick?: (feature: Feature) => void;
  locale: LocaleStrings;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({
  features,
  addToRefs,
  title,
  sectionId = 'features',
  className,
  onFeatureClick,
  locale,
}) => {
  const handleFeatureClick = (feature: Feature) => {
    if (feature.routePath && onFeatureClick) {
      onFeatureClick(feature);
    }
  };

  return (
    <section
      className={clsx(STYLES.FEATURES_SECTION, className)}
      id={sectionId}
    >
      <div className={STYLES.CONTAINER}>
        {title && (
          <div className={STYLES.FEATURES_SECTION_HEADER}>
            <h2 className={clsx(STYLES.FEATURES_SECTION_TITLE)}>{title}</h2>
          </div>
        )}
        <div
          ref={addToRefs}
          className={clsx(STYLES.FEATURES_GRID, STYLES.REVEAL)}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className={clsx(
                STYLES.FEATURE_CARD,
                feature.routePath && 'cursor-pointer group'
              )}
              onClick={() => handleFeatureClick(feature)}
              role={feature.routePath ? 'button' : undefined}
              tabIndex={feature.routePath ? 0 : undefined}
              onKeyDown={(e) => {
                if (feature.routePath && (e.key === 'Enter' || e.key === ' ')) {
                  e.preventDefault();
                  handleFeatureClick(feature);
                }
              }}
            >
              <div
                className={clsx(STYLES.ICON_CONTAINER, STYLES.ICON_GRADIENT)}
              >
                {feature.icon}
              </div>
              <h3 className={STYLES.FEATURE_TITLE}>{feature.title}</h3>
              <p className={STYLES.FEATURE_DESCRIPTION}>
                {feature.description}
              </p>
              {feature.routePath && (
                <div className={clsx(STYLES.FEATURE_LEARN_MORE)}>
                  {locale.features.learnMore}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
