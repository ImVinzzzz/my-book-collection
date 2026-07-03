import type { ReactElement } from 'react';
import { Link, useParams } from 'react-router-dom';
import { authors } from '../data/authors';
import { books } from '../data/books';
import BookCard from '../components/BookCard';
import ScrollToTopButton from '../components/ScrollToTopButton';

/**
 * Scheda di dettaglio di un autore: foto/bio + elenco dei suoi libri
 * presenti in archivio (riusa BookCard, quindi qui il nome dell'autore
 * passato alla card è sempre lo stesso: quello di questa pagina).
 *
 * Richiede react-router-dom con una route del tipo:
 *   <Route path="/autore/:slug" element={<AuthorDetail />} />
 * (vedi anche il Link in `pages/BookDetail.tsx`, che punta a questo path).
 */
export default function AuthorDetail(): ReactElement {
  const { slug } = useParams<{ slug: string }>();
  const author = authors.find((item) => item.slug === slug);

  if (!author) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#1C1410] px-6 text-center text-[#F2E9DC]">
        <i className="fa-solid fa-user-slash text-4xl text-[#3FA796]" aria-hidden="true" />
        <h1 className="font-display text-2xl font-bold">Autore non trovato</h1>
        <p className="text-[#B8A691]">Questo autore non esiste, o non è ancora stato archiviato.</p>
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

  const authorBooks = books.filter((book) => book.authorSlug === author.slug);

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

          <div className="mt-6 flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:text-left">
            {/* Foto (o segnaposto) */}
            <div className="h-36 w-36 flex-shrink-0 overflow-hidden rounded-2xl ring-2 ring-[#3FA796]/30 shadow-xl shadow-black/40">
              {author.photoUrl ? (
                <img
                  src={author.photoUrl}
                  alt={`Foto di ${author.name}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-[#241A12] text-[#5C4A38]">
                  <i className="fa-solid fa-user text-3xl" aria-hidden="true" />
                  <span className="font-display text-[10px] text-[#8A7765]">Foto non disponibile</span>
                </div>
              )}
            </div>

            <div>
              <h1 className="font-display text-3xl font-bold sm:text-4xl">{author.name}</h1>
              <p className="mt-3 max-w-2xl leading-relaxed text-[#D9CBB8]">{author.bio}</p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        <h2 className="font-display text-xl font-bold text-[#F2E9DC]">
          Libri in archivio <span className="text-[#8A7765]">({authorBooks.length})</span>
        </h2>

        {authorBooks.length > 0 ? (
          <div className="mt-6 flex flex-col gap-6">
            {authorBooks.map((book) => (
              <BookCard key={book.id} book={book} authorName={author.name} />
            ))}
          </div>
        ) : (
          <div className="mt-6 flex flex-col items-center gap-3 rounded-xl border border-dashed border-[#4A3526] py-16 text-center text-[#8A7765]">
            <i className="fa-solid fa-book text-3xl" aria-hidden="true" />
            <p>Nessun libro di questo autore è ancora stato archiviato.</p>
          </div>
        )}
      </main>

      {/* Bottone Torna in Cima */}
      <ScrollToTopButton />
    </div>
  );
}
