import type { ReactElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import { books } from '../data/books';
import { authors } from '../data/authors';
import Tag from '../components/Tag';
import StarRating from '../components/StarRating';

interface MetaItem {
  icon: string;
  label: string;
}

/**
 * Scheda di dettaglio di un singolo libro.
 *
 * Richiede react-router-dom con una route del tipo:
 *   <Route path="/libro/:slug" element={<BookDetail />} />
 * (vedi anche il Link in `components/BookCard.tsx`, che punta a questo path).
 */
export default function BookDetail(): ReactElement {
  const { slug } = useParams<{ slug: string }>();
  const book = books.find((item) => item.slug === slug);

  if (!book) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#1C1410] px-6 text-center text-[#F2E9DC]">
        <i className="fa-solid fa-book-circle-xmark text-4xl text-[#3FA796]" aria-hidden="true" />
        <h1 className="font-display text-2xl font-bold">Libro non trovato</h1>
        <p className="text-[#B8A691]">Questo libro non esiste, o non è ancora stato archiviato.</p>
        <Link
          to="/"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#3FA796] px-5 py-2 text-sm font-semibold text-[#120D0A] transition hover:bg-[#6FC9BB]"
        >
          <i className="fa-solid fa-arrow-left" aria-hidden="true" />
          Torna a I Miei Libri
        </Link>
      </div>
    );
  }

  // L'autore vive in una collezione separata (data/authors.ts): lo
  // cerchiamo tramite book.authorSlug, con un fallback prudente nel caso
  // lo slug non corrisponda a nessun autore archiviato.
  const author = authors.find((item) => item.slug === book.authorSlug);

  const metaItems: MetaItem[] = [
    book.publisher && { icon: 'fa-solid fa-building-columns', label: book.publisher },
    book.publicationYear && { icon: 'fa-solid fa-calendar-days', label: book.publicationYear },
    {
      icon: book.read ? 'fa-solid fa-check-circle' : 'fa-solid fa-bookmark',
      label: book.read ? 'Già letto' : 'Da leggere',
    },
  ].filter((item): item is MetaItem => Boolean(item));

  return (
    <div className="min-h-screen bg-[#1C1410] text-[#F2E9DC]">
      <header className="border-b border-[#4A3526] bg-[#120D0A]">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#B8A691] hover:text-[#6FC9BB]"
          >
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            Torna a I Miei Libri
          </Link>

          <div className="mt-6 flex flex-col gap-8 sm:flex-row">
            {/* Copertina verticale (o segnaposto) con il cuoricino "Preferito" */}
            <div className="relative w-44 flex-shrink-0 sm:w-56">
              <div className="aspect-[2/3] overflow-hidden rounded-xl ring-2 ring-[#3FA796]/30 shadow-xl shadow-black/40">
                {book.coverImageUrl ? (
                  <img
                    src={book.coverImageUrl}
                    alt={`Copertina di ${book.title}`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#241A12] text-[#5C4A38]">
                    <i className="fa-solid fa-book text-4xl" aria-hidden="true" />
                    <span className="font-display text-xs text-[#8A7765]">Copertina non disponibile</span>
                  </div>
                )}
              </div>
              {book.favorite && (
                <span className="absolute -right-3 -top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#E84855] text-white shadow-md">
                  <i className="fa-solid fa-heart" aria-hidden="true" />
                </span>
              )}
            </div>

            {/* Titolo, autore, tag e valutazione */}
            <div className="flex flex-1 flex-col gap-3">
              <div>
                <h1 className="font-display text-3xl font-bold sm:text-4xl">{book.title}</h1>
                {book.subtitle && (
                  <p className="mt-1 text-base italic text-[#B8A691] sm:text-lg">{book.subtitle}</p>
                )}
              </div>

              <p className="text-sm text-[#D9CBB8]">
                di{' '}
                {author ? (
                  <Link
                    to={`/autore/${author.slug}`}
                    className="font-semibold text-[#3FA796] hover:text-[#6FC9BB] hover:underline"
                  >
                    {author.name}
                  </Link>
                ) : (
                  <span className="font-semibold text-[#8A7765]">Autore non disponibile</span>
                )}
              </p>

              <div className="flex flex-wrap items-center gap-2">
                <Tag label={book.genre} variant="genre" />
                {book.tags.map((tag) => (
                  <Tag key={tag} label={tag} variant="tag" />
                ))}
              </div>

              <StarRating rating={book.rating} size="text-base" />
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_1fr]">
          {/* Sinossi */}
          <section>
            <h2 className="font-display text-xl font-bold text-[#F2E9DC]">Sinossi</h2>
            <p className="mt-3 leading-relaxed text-[#D9CBB8]">{book.synopsis}</p>
          </section>

          {/* Colonna Destra (Scheda rapida e Posizione) */}
          <div className="flex flex-col gap-6">
            {/* Scheda rapida */}
            <aside className="h-fit rounded-xl border border-[#4A3526] bg-[#241A12] p-5">
              <h2 className="font-display text-base font-bold text-[#F2E9DC]">Scheda rapida</h2>
              <ul className="mt-4 flex flex-col gap-3">
                {metaItems.map((item) => (
                  <li key={item.label} className="flex items-center gap-3 text-sm text-[#D9CBB8]">
                    <i className={`${item.icon} w-4 text-[#3FA796]`} aria-hidden="true" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </aside>

            {/* Posizione */}
            {book.posizione && (
              <aside className="h-fit rounded-xl border border-[#4A3526] bg-[#241A12] p-5">
                <h2 className="font-display text-base font-bold text-[#F2E9DC]">Posizione</h2>
                <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-[#1C1410] p-2 border border-[#4A3526]/50">
                    <div className="text-[10px] uppercase tracking-wider text-[#B8A691]">Stanza</div>
                    <div className="mt-1 font-mono text-base font-bold text-[#3FA796]">{book.posizione.stanza}</div>
                  </div>
                  <div className="rounded-lg bg-[#1C1410] p-2 border border-[#4A3526]/50">
                    <div className="text-[10px] uppercase tracking-wider text-[#B8A691]">Scaffale</div>
                    <div className="mt-1 font-mono text-base font-bold text-[#3FA796]">{book.posizione.scaffale}</div>
                  </div>
                  <div className="rounded-lg bg-[#1C1410] p-2 border border-[#4A3526]/50">
                    <div className="text-[10px] uppercase tracking-wider text-[#B8A691]">Ripiano</div>
                    <div className="mt-1 font-mono text-base font-bold text-[#3FA796]">{book.posizione.ripiano}</div>
                  </div>
                </div>
              </aside>
            )}
          </div>
        </div>

        {/* Note: box facoltativo, mostrato solo se c'è qualcosa da segnalare */}
        {book.notes && (
          <section className="mt-10 rounded-xl border border-dashed border-[#3FA796]/40 bg-[#241A12] p-5">
            <h2 className="flex items-center gap-2 font-display text-lg font-bold text-[#F2E9DC]">
              <i className="fa-solid fa-feather-pointed text-[#3FA796]" aria-hidden="true" />
              Note
            </h2>
            <p className="mt-3 whitespace-pre-line leading-relaxed text-[#D9CBB8]">{book.notes}</p>
          </section>
        )}
      </main>
    </div>
  );
}
