import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToTopMobile, scrollToTopWithDelay } from '../utils/scrollToTop';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use mobile-optimized scrolling for route changes
    scrollToTopWithDelay(50);
  }, [pathname]);

  // Scroll to top on page load/refresh
  useEffect(() => {
    // Immediate scroll to top on component mount (page load/refresh)
    scrollToTopMobile();
    
    // Also handle beforeunload for additional safety
    const handleBeforeUnload = () => {
      scrollToTopMobile();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return null;
};

export default ScrollToTop;
