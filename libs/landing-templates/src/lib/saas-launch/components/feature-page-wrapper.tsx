import { useNavigate } from 'react-router-dom';
import { SaasLayout } from './saas-layout';
import { FeaturePage } from './feature-page';
import { useFeatureRoute } from '../hooks';
import { Locale, THEME_NAMES, ThemeName } from '../../shared';

interface FeaturePageWrapperProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  theme?: ThemeName;
}

export function FeaturePageWrapper({
  locale,
  onLocaleChange,
  theme = THEME_NAMES.WARM,
}: FeaturePageWrapperProps) {
  const navigate = useNavigate();
  const { feature, localeStrings } = useFeatureRoute(locale);

  if (!feature) {
    // Feature not found, redirect to home
    navigate('/');
    return null;
  }

  return (
    <SaasLayout locale={locale} onLocaleChange={onLocaleChange} theme={theme}>
      <FeaturePage feature={feature} locale={localeStrings} />
    </SaasLayout>
  );
}
