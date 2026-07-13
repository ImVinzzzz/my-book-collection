import { type ReactElement } from "react";
import { Link } from "react-router-dom";

/**
 * Footer mostrato in calce a ogni pagina. Viene renderizzato in App.tsx,
 * fuori dalle <Routes> ma dentro <BrowserRouter>, così appare su ogni
 * pagina senza doverlo ripetere in Home.tsx, BookDetail.tsx e AuthorDetail.tsx.
 */
export default function Footer(): ReactElement {
  return (
    <footer className="border-t border-[#4A3526] bg-[#120D0A] px-6 py-8 text-xs text-[#8A7765]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-6 pb-6 border-b border-[#4A3526]/40">
        {/* Colonna Sinistra: VEDI ANCHE */}
        <div>
          <h4 className="font-bold text-sm text-[#3FA796] uppercase tracking-wider mb-3">
            Vedi anche
          </h4>
          <ul className="space-y-2">
            <li>
              <a
                href="https://my-rpg-adventures.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#3FA796] transition-colors"
              >
                <i className="fa-solid fa-dungeon text-center" aria-hidden="true" />
                Le Cronache di Wyatt Zephirion
              </a>
            </li>
            <li>
              <a
                href="https://my-boardgame.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#3FA796] transition-colors"
              >
                <i className="fa-solid fa-chess-bishop text-center" aria-hidden="true" />
                I miei Board Games
              </a>
            </li>
            <li>
              <a
                href="https://myquiz-archive.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#3FA796] transition-colors"
              >
                <i className="fa-solid fa-clipboard-question text-center" aria-hidden="true" />
                I miei Quiz online
              </a>
            </li>
            <li>
              <a
                href="https://pine-cove.vercel.app/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#3FA796] transition-colors"
              >
                <i className="fa-solid fa-magnifying-glass text-center" aria-hidden="true" />
                I Segreti di Pine Cove
              </a>
            </li>
            <li>
              <a
                href="https://etherea2.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#3FA796] transition-colors"
              >
                <i className="fa-solid fa-gem text-center" aria-hidden="true" />
                Guardiani di Etherea
              </a>
            </li>
          </ul>
        </div>

        {/* Colonna Destra: AREA GESTIONE */}
        <div>
          <h4 className="font-bold text-sm text-[#3FA796] uppercase tracking-wider mb-3">
            Area Gestione
          </h4>
          <div>
            <Link
              to="/generatore"
              className="inline-flex items-center gap-2 hover:text-[#3FA796] transition-colors"
            >
              <i className="fa-solid fa-square-plus text-center" aria-hidden="true" />
              Nuova Scheda Libro / Autore
            </Link>
          </div>
        </div>
      </div>

      {/* Secondo blocco: Disclaimer */}
      <div className="text-center">
        <p>
          Sito amatoriale senza fini di lucro. Non si intende infrangere alcun copyright.
          Tutti i libri, gli autori e i marchi citati appartengono ai relativi proprietari.
        </p>
      </div>
    </footer>
  );
}

