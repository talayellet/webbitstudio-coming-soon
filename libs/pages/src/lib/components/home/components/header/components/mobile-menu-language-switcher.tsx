import { LanguageOption } from '@webbitstudio/shared-utils';
import { LanguageSwitcher } from '@webbitstudio/ui-components';
import * as styles from '../../../utils/styles';

interface MobileMenuLanguageSwitcherProps {
  languages: LanguageOption[];
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  ariaLabel?: string;
}

export const MobileMenuLanguageSwitcher = ({
  languages,
  currentLanguage,
  onLanguageChange,
  ariaLabel,
}: MobileMenuLanguageSwitcherProps) => {
  return (
    <LanguageSwitcher
      currentLanguage={currentLanguage}
      languages={languages}
      onLanguageChange={onLanguageChange}
      styles={styles.header.mobileLanguageSwitcherStyles}
      ariaLabel={ariaLabel}
    />
  );
};
