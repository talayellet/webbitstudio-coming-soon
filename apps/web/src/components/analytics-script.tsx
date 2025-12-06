import { useEffect } from 'react';

interface AnalyticsScriptProps {
  websiteId: string;
  src?: string;
  /**
   * Whether user has consented to analytics cookies
   * Script will only load when this is true
   */
  hasConsent: boolean;
}

/**
 * Component to load Umami analytics script
 * Only loads when user has given cookie consent
 * Place this in your App component to enable analytics tracking
 */
export const AnalyticsScript = ({
  websiteId,
  src = 'https://cloud.umami.is/script.js',
  hasConsent,
}: AnalyticsScriptProps) => {
  useEffect(() => {
    if (!websiteId || !hasConsent) {
      return;
    }

    // Check if script already exists
    const existingScript = document.querySelector(
      `script[data-website-id="${websiteId}"]`
    );
    if (existingScript) {
      return;
    }

    const script = document.createElement('script');
    script.defer = true;
    script.src = src;
    script.setAttribute('data-website-id', websiteId);

    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [websiteId, src, hasConsent]);

  return null;
};

export default AnalyticsScript;
