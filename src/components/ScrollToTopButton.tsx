import { useEffect, useState, type ReactElement } from 'react';

/**
 * Componente bottone che compare in basso a destra quando l'utente
 * scorre la pagina verso il basso, consentendo di tornare rapidamente in cima.
 */
export default function ScrollToTopButton(): ReactElement | null {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility(): void {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  function scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  if (!isVisible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-[#3FA796] text-[#120D0A] shadow-lg shadow-black/40 transition hover:bg-[#6FC9BB] hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#3FA796] focus:ring-offset-2 focus:ring-offset-[#1C1410]"
      aria-label="Torna in cima"
    >
      <i className="fa-solid fa-angle-up fa-float text-lg font-bold" aria-hidden="true" />
    </button>
  );
}
