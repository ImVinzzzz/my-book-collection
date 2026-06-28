import type { ReactElement } from 'react';

/**
 * Footer mostrato in calce a ogni pagina. Viene renderizzato in App.tsx,
 * fuori dalle <Routes> ma dentro <BrowserRouter>, così appare su ogni
 * pagina senza doverlo ripetere in Home.tsx, BookDetail.tsx e AuthorDetail.tsx.
 */
export default function Footer(): ReactElement {
  return (
    <footer className="border-t border-[#4A3526] bg-[#120D0A] px-6 py-6 text-center text-xs text-[#8A7765]">
      <p>
        Sito amatoriale senza fini di lucro. Non si intende infrangere alcun copyright.
        Tutti i libri, gli autori e i marchi citati appartengono ai relativi proprietari.
      </p>
    </footer>
  );
}
