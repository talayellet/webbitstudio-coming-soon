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
}

/**
 * Search bar component for filtering templates
 */
export const TemplatesSearchBar = ({
  value,
  onChange,
  placeholder,
  ariaLabel,
}: TemplatesSearchBarProps) => {
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
      </div>
    </div>
  );
};
