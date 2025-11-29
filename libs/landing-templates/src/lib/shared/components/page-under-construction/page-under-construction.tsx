import React from 'react';
import {
  PAGE_UNDER_CONSTRUCTION_STYLES as STYLES,
  DEFAULT_PAGE_UNDER_CONSTRUCTION,
  PageUnderConstructionLocale,
} from '../../utils';

export interface PageUnderConstructionProps {
  pageName?: string;
  message?: string;
  onBackClick?: () => void;
  locale?: PageUnderConstructionLocale;
}

export const PageUnderConstruction: React.FC<PageUnderConstructionProps> = ({
  pageName,
  message,
  onBackClick,
  locale,
}) => {
  const defaultTitle =
    locale?.title || DEFAULT_PAGE_UNDER_CONSTRUCTION.DEFAULT_TITLE;
  const defaultMessage =
    locale?.message || DEFAULT_PAGE_UNDER_CONSTRUCTION.DEFAULT_MESSAGE;
  const defaultBackButton =
    locale?.backButton || DEFAULT_PAGE_UNDER_CONSTRUCTION.DEFAULT_BACK_BUTTON;

  return (
    <div className={STYLES.CONTAINER}>
      <div className={STYLES.ICON}>
        <span
          role="img"
          aria-label={DEFAULT_PAGE_UNDER_CONSTRUCTION.ARIA_LABEL}
        >
          🚧
        </span>
      </div>
      <h1 className={STYLES.TITLE}>
        {pageName || DEFAULT_PAGE_UNDER_CONSTRUCTION.DEFAULT_PAGE_NAME}{' '}
        {defaultTitle}
      </h1>
      <p className={STYLES.MESSAGE}>{message || defaultMessage}</p>
      {onBackClick && (
        <button onClick={onBackClick} className={STYLES.BUTTON}>
          {defaultBackButton}
        </button>
      )}
    </div>
  );
};
