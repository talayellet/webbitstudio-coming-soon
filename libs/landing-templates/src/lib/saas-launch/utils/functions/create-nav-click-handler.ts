/**
 * Creates an onClick handler for navigation links.
 * - For home ('/'), uses scrollToTop if already on home page
 * - For hash links (e.g., '/#features'), uses smooth scroll if on home page
 * - Otherwise, lets default navigation happen
 */
export const createNavClickHandler = (
  href: string,
  scrollToTop?: (e: React.MouseEvent<HTMLAnchorElement>) => void
) => {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isOnHomePage = window.location.pathname === '/';

    // Home link behavior
    if (href === '/' && isOnHomePage && scrollToTop) {
      scrollToTop(e);
      return;
    }

    // Hash link behavior (e.g., /#features, /#about)
    if (href.startsWith('/#') && isOnHomePage) {
      e.preventDefault();
      const sectionId = href.substring(2); // Remove '/#' prefix
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Let default navigation happen for all other cases
  };
};
