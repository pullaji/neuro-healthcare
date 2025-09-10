// Utility function for smooth scrolling to top
export const scrollToTop = (smooth: boolean = true) => {
  // Check if smooth scrolling is supported
  const supportsSmoothScroll = 'scrollBehavior' in document.documentElement.style;
  
  if (smooth && supportsSmoothScroll) {
    // Use native smooth scrolling for modern browsers
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  } else if (smooth) {
    // Custom smooth scrolling for older browsers or mobile Safari
    const scrollToTopAnimation = () => {
      const currentPosition = window.pageYOffset;
      if (currentPosition > 0) {
        window.requestAnimationFrame(scrollToTopAnimation);
        window.scrollTo(0, currentPosition - currentPosition / 8);
      }
    };
    scrollToTopAnimation();
  } else {
    // Instant scroll
    window.scrollTo(0, 0);
  }
};

// Mobile-optimized scroll to top
export const scrollToTopMobile = () => {
  // For mobile devices, use a more aggressive approach
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Use instant scroll on mobile for better performance
    window.scrollTo(0, 0);
    
    // Also try to scroll the document element for iOS Safari
    if (document.documentElement) {
      document.documentElement.scrollTop = 0;
    }
    if (document.body) {
      document.body.scrollTop = 0;
    }
  } else {
    // Use smooth scrolling on desktop
    scrollToTop(true);
  }
};

// Scroll to top with delay for better mobile experience
export const scrollToTopWithDelay = (delay: number = 100) => {
  setTimeout(() => {
    scrollToTopMobile();
  }, delay);
};
