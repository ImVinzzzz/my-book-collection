import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';

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
      <div className="mt-3">
        <Link
          to="/generatore"
          className="inline-flex items-center gap-1.5 font-semibold text-[#3FA796] hover:text-[#6FC9BB] transition-colors"
        >
          <i className="fa-solid fa-circle-plus" aria-hidden="true" />
          Nuova Scheda Libro / Autore
        </Link>
      </div>
    </footer>
  );
}
