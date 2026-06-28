import type { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import type { Book } from '../types';
import Tag from './Tag';
import StarRating from './StarRating';

interface BookCardProps {
  book: Book;
  /** Nome dell'autore già risolto da chi usa questo componente (Home,
   *  AuthorDetail...), così BookCard resta presentazionale e non deve
   *  importare data/authors.ts per fare la ricerca da solo. */
  authorName: string;
}

/** Icona del "sigillo" mostrato sopra la copertina, in base al genere. */
const GENRE_SEAL_ICONS: Record<string, string> = {
  Romanzo: 'fa-solid fa-book-open',
  Avventura: 'fa-solid fa-compass',
  Giallo: 'fa-solid fa-magnifying-glass',
  Thriller: 'fa-solid fa-bolt',
  Saggio: 'fa-solid fa-graduation-cap',
  Narrativa: 'fa-solid fa-feather',
  Epica: 'fa-solid fa-shield-halved',
  Fantasy: 'fa-solid fa-hat-wizard',
  Fantascienza: 'fa-solid fa-rocket',
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
export default function BookCard({ book, authorName }: BookCardProps): ReactElement {
  const visibleTags = book.tags.slice(0, 2);
  const extraTagsCount = book.tags.length - visibleTags.length;

  return (
    <Link
      to={`/libro/${book.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-[#241A12] ring-1 ring-[#4A3526] transition-all duration-200 hover:-translate-y-1 hover:ring-[#3FA796]/50 hover:shadow-xl hover:shadow-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA796]"
    >
      {/* Copertina (o segnaposto se assente): formato verticale 2:3, come una vera copertina */}
      <div className="relative aspect-[2/3] w-full overflow-hidden">
        {book.coverImageUrl ? (
          <img
            src={book.coverImageUrl}
            alt={`Copertina di ${book.title}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#1C1410] text-[#5C4A38]">
            <i className="fa-solid fa-book text-4xl" aria-hidden="true" />
            <span className="font-display text-xs text-[#8A7765]">Copertina non disponibile</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#120D0A] via-[#120D0A]/10 to-transparent" />

        {book.favorite && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-[#E84855]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
            <i className="fa-solid fa-heart text-[0.65rem]" aria-hidden="true" />
            Preferito
          </span>
        )}

        {/* Sigillo con l'icona del genere */}
        <div className="absolute right-3 top-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#120D0A]/80 text-[#6FC9BB] shadow-md ring-2 ring-[#3FA796]/70 backdrop-blur-sm">
          <i className={`${getSealIcon(book.genre)} text-base`} aria-hidden="true" />
        </div>
      </div>

      {/* Contenuto testuale */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <h3 className="font-display text-lg font-bold leading-snug text-[#F2E9DC] group-hover:text-white">
            {book.title}
          </h3>
          {book.subtitle && <p className="mt-1 text-sm italic text-[#B8A691]">{book.subtitle}</p>}
          <p className="mt-1 text-xs text-[#8A7765]">{authorName}</p>
        </div>

        {/* line-clamp è incluso di default da Tailwind v3.3+; su versioni
            precedenti serve il plugin @tailwindcss/line-clamp */}
        <p className="line-clamp-3 text-sm leading-relaxed text-[#D9CBB8]">{book.synopsis}</p>

        <div className="flex flex-wrap items-center gap-2">
          <Tag label={book.genre} variant="genre" />
          {visibleTags.map((tag) => (
            <Tag key={tag} label={tag} variant="tag" />
          ))}
          {extraTagsCount > 0 && (
            <span className="text-xs font-medium text-[#8A7765]">+{extraTagsCount}</span>
          )}
        </div>

        <div className="mt-auto flex items-center justify-between pt-2">
          <StarRating rating={book.rating} />
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3FA796] transition-transform group-hover:translate-x-0.5">
            Apri la scheda
            <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
          </span>
        </div>
      </div>
    </Link>
  );
}
