import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function FloatingToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 520);
    };

    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', updateVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Scroll to top"
      className={`fixed bottom-5 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/50 bg-[#ff6a1f] text-white shadow-[0_18px_42px_rgba(255,106,31,0.32)] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#111114] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#111114] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fbf7f1] md:bottom-7 md:right-7 ${
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
