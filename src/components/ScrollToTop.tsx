import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollOptions {
  behavior?: 'auto' | 'smooth';
  top?: number;
  left?: number;
}

const ScrollToTop = ({ 
  behavior = 'smooth',
  top = 0,
  left = 0 
}: ScrollOptions = {}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top,
      left,
      behavior
    });
  }, [pathname, top, left, behavior]);

  return null;
};

export default ScrollToTop; 