import { useState, useEffect } from 'react';

export const useStickyHeader = (threshold = 20) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    e.preventDefault();
    // Clear the hash from the URL first
    if (window.location.hash) {
      window.history.replaceState(
        '',
        document.title,
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return { isScrolled, scrollToTop };
};
