import { XMarkIcon } from '@webbitstudio/ui-components';
import { TEMPLATES_CATALOG_STYLES } from '../utils';

export interface TemplatesSearchBarProps {
  /**
   * Search input value
   */
  value: string;
  /**
   * Callback when search value changes
   */
  onChange: (value: string) => void;
  /**
   * Placeholder text for the input
   */
  placeholder: string;
  /**
   * Aria label for accessibility
   */
  ariaLabel: string;
  /**
   * Aria label for clear button
   */
  clearAriaLabel: string;
}

/**
 * Search bar component for filtering templates
 */
export const TemplatesSearchBar = ({
  value,
  onChange,
  placeholder,
  ariaLabel,
  clearAriaLabel,
}: TemplatesSearchBarProps) => {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={TEMPLATES_CATALOG_STYLES.search.wrapper}>
      <div className={TEMPLATES_CATALOG_STYLES.search.container}>
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={TEMPLATES_CATALOG_STYLES.search.input}
          aria-label={ariaLabel}
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className={TEMPLATES_CATALOG_STYLES.search.clearButton}
            aria-label={clearAriaLabel}
          >
            <XMarkIcon className={TEMPLATES_CATALOG_STYLES.search.clearIcon} />
          </button>
        )}
      </div>
    </div>
  );
};
