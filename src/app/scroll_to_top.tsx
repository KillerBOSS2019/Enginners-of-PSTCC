import { useEffect, useState } from 'react';
import { HeaderProps } from './header/header';

function ScrollToTopButton({ setMobileMenuOpen }: HeaderProps){
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 300) {
      setIsVisible(true);
      setMobileMenuOpen(false);
    } else {
      setIsVisible(false);
    }
    console.log(position);
  }

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
      className={`fixed bottom-4 right-4 p-3 rounded-full bg-yellow-500 text-white shadow-lg transition-opacity duration-300 ${isVisible ? '' : 'hidden'}`}
      aria-label="Scroll to top"
      style={{filter: "drop-shadow(0 0 0.75rem #000)", zIndex: 1000}}
    >
      ↑
    </button>
  );
}

export default ScrollToTopButton;