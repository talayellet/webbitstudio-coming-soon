import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Hook that manages scroll behavior on route changes.
 * - Scrolls to hash target if present in URL (e.g., /#features)
 * - Scrolls to top if no hash
 */
export const useRouteScroll = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait for navigation to complete, then scroll to hash
      setTimeout(() => {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
};
