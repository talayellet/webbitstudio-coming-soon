import React from 'react';
import clsx from 'clsx';
import { Feature, STYLES } from '../utils';
import { LocaleStrings } from '../utils/locales/en';

interface FeaturePageProps {
  feature: Feature;
  locale: LocaleStrings;
  className?: string;
}

export const FeaturePage: React.FC<FeaturePageProps> = ({
  feature,
  locale,
  className,
}) => {
  const { title, description, icon, featureDetails } = feature;

  return (
    <div className={clsx(STYLES.FEATURE_PAGE_CONTAINER, className)}>
      <div className={STYLES.CONTAINER}>
        {/* Feature Header */}
        <div className={STYLES.FEATURE_PAGE_HEADER}>
          <div className={clsx(STYLES.FEATURE_PAGE_ICON)}>{icon}</div>
          <h1 className={clsx(STYLES.FEATURE_PAGE_TITLE)}>{title}</h1>
          <p className={clsx(STYLES.FEATURE_PAGE_DESCRIPTION)}>{description}</p>
        </div>

        {/* Feature Image */}
        {featureDetails?.image && (
          <div className={STYLES.FEATURE_PAGE_IMAGE_WRAPPER}>
            <img
              src={featureDetails.image}
              alt={featureDetails.altImage || title}
              className={STYLES.FEATURE_PAGE_IMAGE}
            />
          </div>
        )}

        <div className={STYLES.FEATURE_PAGE_GRID}>
          {/* Main Content */}
          <div className={STYLES.FEATURE_PAGE_MAIN_CONTENT}>
            {/* Full Description */}
            {featureDetails?.fullDescription && (
              <div className={STYLES.FEATURE_PAGE_SECTION}>
                <h2 className={clsx(STYLES.FEATURE_PAGE_SECTION_TITLE)}>
                  {locale.featurePage.overview}
                </h2>
                <p className={clsx(STYLES.FEATURE_PAGE_TEXT)}>
                  {featureDetails.fullDescription}
                </p>
              </div>
            )}

            {/* Features List */}
            {featureDetails?.features && featureDetails.features.length > 0 && (
              <div className={STYLES.FEATURE_PAGE_SECTION}>
                <h2 className={clsx(STYLES.FEATURE_PAGE_SECTION_TITLE_LARGE)}>
                  {locale.featurePage.keyFeatures}
                </h2>
                <ul className={STYLES.FEATURE_PAGE_LIST}>
                  {featureDetails.features.map((item, index) => (
                    <li
                      key={index}
                      className={clsx(STYLES.FEATURE_PAGE_LIST_ITEM)}
                    >
                      <span className={STYLES.FEATURE_PAGE_LIST_ICON}>✓</span>
                      <span className={STYLES.FEATURE_PAGE_LIST_TEXT}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className={STYLES.FEATURE_PAGE_SIDEBAR}>
            <div className={clsx(STYLES.FEATURE_PAGE_SIDEBAR_CARD)}>
              {/* Price */}
              {featureDetails?.price && (
                <div className={STYLES.FEATURE_PAGE_PRICE_WRAPPER}>
                  <p className={STYLES.FEATURE_PAGE_PRICE_LABEL}>
                    {locale.featurePage.priceLabel}
                  </p>
                  <p className={STYLES.FEATURE_PAGE_PRICE}>
                    {featureDetails.price}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
