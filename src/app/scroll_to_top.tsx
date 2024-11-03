import { useEffect, useState } from 'react';
import { HeaderProps } from './header/header';

function ScrollToTopButton({ setMobileMenuOpen }: HeaderProps){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
        setMobileMenuOpen(false);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-yellow-500 text-white shadow-lg transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;