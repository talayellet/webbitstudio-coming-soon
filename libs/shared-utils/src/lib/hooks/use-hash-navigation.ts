import { useEffect } from 'react';

/**
 * Custom hook to handle hash navigation on page load.
 * Scrolls to the element matching the URL hash after content renders.
 */
export const useHashNavigation = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for the content to render before scrolling
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);
};
