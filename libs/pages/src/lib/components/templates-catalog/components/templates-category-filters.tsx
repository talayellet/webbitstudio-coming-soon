import clsx from 'clsx';
import { TEMPLATES_CATALOG_STYLES, TemplateCategoryId } from '../utils';

export interface CategoryOption {
  /**
   * Unique identifier for the category
   */
  id: TemplateCategoryId;
  /**
   * Display label for the category
   */
  label: string;
}

export interface TemplatesCategoryFiltersProps {
  /**
   * Array of category options to display
   */
  categories: readonly CategoryOption[];
  /**
   * Currently selected category ID
   */
  selectedCategory: TemplateCategoryId;
  /**
   * Callback when a category is selected
   */
  onCategoryChange: (categoryId: TemplateCategoryId) => void;
}

/**
 * Category filter buttons for templates catalog
 */
export const TemplatesCategoryFilters = ({
  categories,
  selectedCategory,
  onCategoryChange,
}: TemplatesCategoryFiltersProps) => {
  return (
    <div className={TEMPLATES_CATALOG_STYLES.categories.wrapper}>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={clsx(
            TEMPLATES_CATALOG_STYLES.categories.button.base,
            selectedCategory === category.id
              ? TEMPLATES_CATALOG_STYLES.categories.button.active
              : TEMPLATES_CATALOG_STYLES.categories.button.inactive
          )}
          aria-pressed={selectedCategory === category.id}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
};
