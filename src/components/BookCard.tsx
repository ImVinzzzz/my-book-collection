import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { type Book } from '../types';
import Tag from './Tag';
interface BookCardProps {
  book: Book;
  /** Nome dell'autore già risolto da chi usa questo componente (Home,
   *  AuthorDetail...), così BookCard resta presentazionale e non deve
   *  importare data/authors.ts per fare la ricerca da solo. */
  authorName: string;
  viewMode?: "row" | "grid";
}

/** Icona del "sigillo" mostrato sopra la copertina, in base al genere. */
export const GENRE_SEAL_ICONS: Record<string, string> = {
  Avventura: 'fa-solid fa-compass',
  Epica: 'fa-solid fa-shield-halved',
  Fantascienza: 'fa-solid fa-rocket',
  Fantasy: 'fa-solid fa-hat-wizard',
  Giallo: 'fa-solid fa-magnifying-glass',
  Horror: "fa solid fa-skull",
  Narrativa: 'fa-solid fa-feather',
  Romanzo: 'fa-solid fa-book-open',
  Saggio: 'fa-solid fa-graduation-cap',
  Storico: "fa solid fa-landmark",
  Thriller: 'fa-solid fa-heart-pulse',  
};

function getSealIcon(genre: string): string {
  return GENRE_SEAL_ICONS[genre] ?? 'fa-solid fa-book';
}

/**
 * Card mostrata nella griglia della home (e nella scheda autore). Riporta
 * a `/libro/:slug`. Il nome dell'autore qui è solo testo (non un link):
 * un <Link> annidato dentro la card, che è già un <Link>, non sarebbe
 * HTML valido. Il link cliccabile all'autore vive in BookDetail.
 */
export default function BookCard({ book, authorName, viewMode = "row" }: BookCardProps): ReactElement {
  const visibleTags = book.tags.slice(0, 3);
  const extraTagsCount = book.tags.length - visibleTags.length;
  const isGrid = viewMode === "grid";

  return (
    <Link
      to={"/libro/" + book.slug}
      className={"group relative flex flex-col " + (isGrid ? "" : "sm:flex-row ") + "overflow-hidden rounded-2xl bg-[#241A12] ring-1 ring-[#4A3526] transition-all duration-200 hover:-translate-y-1 hover:ring-[#3FA796]/50 hover:shadow-xl hover:shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA796]"}
    >
      {/* Copertina a sinistra (su schermi sm in poi nella visualizzazione a righe) */}
      <div className={"relative aspect-[2/3] w-full " + (isGrid ? "" : "sm:w-48 ") + "flex-shrink-0 overflow-hidden border-b " + (isGrid ? "" : "sm:border-b-0 sm:border-r ") + "border-[#4A3526]"}>
        {book.coverImageUrl ? (
          <img
            src={book.coverImageUrl}
            alt={"Copertina di " + book.title}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#1C1410] text-[#5C4A38] min-h-[200px]">
            <i className="fa-solid fa-book text-4xl" aria-hidden="true" />
            <span className="font-display text-xs text-[#8A7765]">Copertina non disponibile</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120D0A]/30 via-transparent to-transparent" />

        {book.favorite && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#E84855]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            <i className="fa-solid fa-heart text-[0.65rem]" aria-hidden="true" />
            Preferito
          </span>
        )}

        {/* Sigillo con l'icona del genere */}
        <div className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#120D0A]/80 text-[#6FC9BB] shadow-md ring-2 ring-[#3FA796]/70 backdrop-blur-sm">
          <i className={getSealIcon(book.genre) + " text-sm"} aria-hidden="true" />
        </div>
      </div>

      {/* Contenuto testuale a destra (o sotto in grid) */}
      <div className={"flex flex-1 flex-col justify-between " + (isGrid ? "p-3 gap-3" : "p-5 sm:p-6 gap-4")}>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className={"font-display font-bold leading-snug text-[#F2E9DC] group-hover:text-white " + (isGrid ? "text-base line-clamp-2" : "text-xl")}>
              {book.title}
            </h3>
            {!isGrid && book.subtitle && <p className="mt-1 text-sm italic text-[#B8A691]">{book.subtitle}</p>}
            <p className={"mt-1 text-[#8A7765] " + (isGrid ? "text-xs" : "text-xs")}>di <span className="font-semibold text-[#3FA796]">{authorName}</span></p>
          </div>

          <p className={"text-[#D9CBB8] " + (isGrid ? "line-clamp-4 text-xs leading-normal" : "line-clamp-3 text-sm leading-relaxed")}>
            {book.synopsis}
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <Tag label={book.genre} variant="genre" />
            {!isGrid && visibleTags.map((tag) => (
              <Tag key={tag} label={tag} variant="tag" />
            ))}
            {!isGrid && extraTagsCount > 0 && (
              <span className="text-xs font-medium text-[#8A7765]">+{extraTagsCount}</span>
            )}
          </div>

          <div className="flex items-center justify-end border-t border-[#4A3526]/50 pt-3">
            <span className={"inline-flex items-center gap-1.5 font-semibold text-[#3FA796] transition-transform group-hover:translate-x-0.5 " + (isGrid ? "text-[11px]" : "text-sm")}>
              Apri la scheda
              <i className={"fa-solid fa-arrow-right " + (isGrid ? "text-[9px]" : "text-xs")} aria-hidden="true" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
