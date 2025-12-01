import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { getLocaleStrings } from '../utils';
import { LOCALES } from '../../shared';
import type { Feature, LocaleStrings } from '../utils';

interface UseFeatureRouteResponse {
  feature: Feature | null;
  localeStrings: LocaleStrings;
}

export const useFeatureRoute = (
  locale: string = LOCALES.EN
): UseFeatureRouteResponse => {
  const { featureSlug } = useParams<{ featureSlug: string }>();

  // Get locale strings based on current locale
  const localeStrings = useMemo(() => getLocaleStrings(locale), [locale]);

  // Get features from locale strings
  const features = localeStrings.features.items;

  // Find the feature by matching the slug from the URL
  const feature = useMemo(() => {
    if (!featureSlug) return null;

    return (
      features.find((f) => {
        if (!f.routePath) return false;
        // Extract slug from routePath (e.g., "/features/lightning-fast" -> "lightning-fast")
        const slug = f.routePath.split('/').pop();
        return slug === featureSlug;
      }) || null
    );
  }, [features, featureSlug]);

  return { feature, localeStrings };
};
