import { useCallback } from 'react';

/**
 * Custom hook to handle scrolling to the top of the page and clearing the URL hash.
 * Useful for logo clicks, "back to top" buttons, and other navigation that should
 * return the user to the top of the page with a clean URL.
 */
export const useScrollToTop = () => {
  const scrollToTop = useCallback(() => {
    // Clear the hash from the URL first
    if (window.location.hash) {
      window.history.replaceState(
        '',
        document.title,
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return { scrollToTop };
};
