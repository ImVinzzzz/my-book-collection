import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import { books } from '../data/books';
import { authors } from '../data/authors';
import BookCard from '../components/BookCard';
import FilterBar from '../components/FilterBar';
import type { ReadFilter, AuthorOption } from '../components/FilterBar';

/**
 * Pagina principale: intestazione dell'archivio + filtri + griglia
 * responsive dei libri. I dati arrivano da `data/books.ts` e
 * `data/authors.ts`, quindi aggiungere un nuovo libro non richiede
 * modifiche a questo file (generi, tag e autori per i filtri si
 * aggiornano da soli).
 */
export default function Home(): ReactElement {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedAuthorSlug, setSelectedAuthorSlug] = useState<string | null>(null);
  const [minRating, setMinRating] = useState(0);
  const [readFilter, setReadFilter] = useState<ReadFilter>('all');

  // Mappa slug -> nome autore, per non dover cercare nell'array a ogni card.
  const authorNameBySlug = useMemo(() => {
    const map = new Map<string, string>();
    authors.forEach((author) => map.set(author.slug, author.name));
    return map;
  }, []);

  // Generi e tag derivati dai dati: nessuna lista da mantenere
  // manualmente quando aggiungi un nuovo libro.
  const genres = useMemo(() => Array.from(new Set(books.map((book) => book.genre))).sort(), []);
  const tags = useMemo(() => Array.from(new Set(books.flatMap((book) => book.tags))).sort(), []);

  // Solo gli autori che hanno almeno un libro in archivio, non l'intero
  // catalogo di data/authors.ts.
  const authorOptions: AuthorOption[] = useMemo(() => {
    const slugsInUse = new Set(books.map((book) => book.authorSlug));
    return authors
      .filter((author) => slugsInUse.has(author.slug))
      .map((author) => ({ slug: author.slug, name: author.name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  const filteredBooks = useMemo(() => {
    return books.filter((book) => {
      const matchesGenre = selectedGenre === null || book.genre === selectedGenre;
      // I tag selezionati sono in OR tra loro: basta che il libro abbia
      // almeno uno dei tag spuntati per comparire nei risultati.
      const matchesTags =
        selectedTags.length === 0 || selectedTags.some((tag) => book.tags.includes(tag));
      const matchesAuthor = selectedAuthorSlug === null || book.authorSlug === selectedAuthorSlug;
      const matchesRating = minRating === 0 || book.rating >= minRating;
      const matchesRead =
        readFilter === 'all' ||
        (readFilter === 'read' && book.read) ||
        (readFilter === 'unread' && !book.read);
      return matchesGenre && matchesTags && matchesAuthor && matchesRating && matchesRead;
    });
  }, [selectedGenre, selectedTags, selectedAuthorSlug, minRating, readFilter]);

  function toggleTag(tag: string): void {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  }

  function resetFilters(): void {
    setSelectedGenre(null);
    setSelectedTags([]);
    setSelectedAuthorSlug(null);
    setMinRating(0);
    setReadFilter('all');
  }

  return (
    <div className="min-h-screen bg-[#1C1410] text-[#F2E9DC]">
      {/* Intestazione */}
      <header className="border-b border-[#4A3526] bg-[#120D0A]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 sm:py-14">
          <div className="flex items-center gap-3 text-[#3FA796]">
            <i className="fa-solid fa-books text-2xl" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              La mia libreria personale
            </span>
          </div>
          <h1 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">I Miei Libri</h1>
          <p className="max-w-2xl text-sm text-[#B8A691] sm:text-base">
            Tutti i libri della mia collezione, con autori, valutazioni personali e a che punto
            sono nel leggerli tutti.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        {/* Filtri: mostrati solo se c'è almeno un libro in archivio */}
        {books.length > 0 && (
          <div className="mb-8">
            <FilterBar
              genres={genres}
              tags={tags}
              authors={authorOptions}
              selectedGenre={selectedGenre}
              selectedTags={selectedTags}
              selectedAuthorSlug={selectedAuthorSlug}
              minRating={minRating}
              readFilter={readFilter}
              onGenreChange={setSelectedGenre}
              onTagToggle={toggleTag}
              onAuthorChange={setSelectedAuthorSlug}
              onMinRatingChange={setMinRating}
              onReadFilterChange={setReadFilter}
              onReset={resetFilters}
            />
          </div>
        )}

        {/* Griglia libri */}
        {books.length === 0 ? (
          <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-[#4A3526] py-16 text-center text-[#8A7765]">
            <i className="fa-solid fa-box-archive text-3xl" aria-hidden="true" />
            <p>
              L&apos;archivio è vuoto per ora. Aggiungi un nuovo libro in{' '}
              <code className="rounded bg-[#241A12] px-1.5 py-0.5 text-[#3FA796]">
                data/books.ts
              </code>
              .
            </p>
          </div>
        ) : filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                authorName={authorNameBySlug.get(book.authorSlug) ?? 'Autore sconosciuto'}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 rounded-xl border border-dashed border-[#4A3526] py-16 text-center text-[#8A7765]">
            <i className="fa-solid fa-magnifying-glass text-3xl" aria-hidden="true" />
            <p>Nessun libro corrisponde ai filtri selezionati.</p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3FA796] hover:text-[#6FC9BB]"
            >
              <i className="fa-solid fa-rotate-left text-xs" aria-hidden="true" />
              Azzera filtri
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
