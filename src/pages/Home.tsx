import { useMemo, useState } from 'react';
import type { ReactElement } from 'react';
import { books } from '../data/books';
import { authors } from '../data/authors';
import BookCard from '../components/BookCard';
import FilterBar from '../components/FilterBar';
import type { ReadFilter, AuthorOption } from '../components/FilterBar';
import ScrollToTopButton from '../components/ScrollToTopButton';

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
  const [readFilter, setReadFilter] = useState<ReadFilter>('all');
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"row" | "grid">("row");

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
      const matchesSearch =
        searchQuery.trim() === "" ||
        book.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesGenre = selectedGenre === null || book.genre === selectedGenre;
      // I tag selezionati sono in OR tra loro: basta che il libro abbia
      // almeno uno dei tag spuntati per comparire nei risultati.
      const matchesTags =
        selectedTags.length === 0 || selectedTags.some((tag) => book.tags.includes(tag));
      const matchesAuthor = selectedAuthorSlug === null || book.authorSlug === selectedAuthorSlug;
      const matchesRead =
        readFilter === 'all' ||
        (readFilter === 'read' && book.read) ||
        (readFilter === 'unread' && !book.read);
      return matchesSearch && matchesGenre && matchesTags && matchesAuthor && matchesRead;
    }).sort((a, b) => a.title.localeCompare(b.title));
  }, [searchQuery, selectedGenre, selectedTags, selectedAuthorSlug, readFilter]);

  const isAnyFilterActive =
    selectedGenre !== null ||
    selectedTags.length > 0 ||
    selectedAuthorSlug !== null ||
    readFilter !== "all" ||
    searchQuery.trim() !== "";

  function toggleTag(tag: string): void {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]));
  }

  function resetFilters(): void {
    setSelectedGenre(null);
    setSelectedTags([]);
    setSelectedAuthorSlug(null);
    setReadFilter('all');
    setSearchQuery("");
  }

  return (
    <div className="min-h-screen bg-[#1C1410] text-[#F2E9DC]">
      {/* Intestazione */}
      <header className="border-b border-[#4A3526] bg-[#120D0A]">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-10 sm:py-14">
          <div className="flex items-center gap-3 text-[#3FA796]">
            <i className="fa-solid fa-book text-2xl" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">
              La mia libreria personale
            </span>
          </div>
          <h1 className="font-display text-3xl font-bold sm:text-4xl md:text-5xl">I Miei Libri</h1>
          <p className="max-w-2xl text-sm text-[#B8A691] sm:text-base">
            Tutti i libri della mia collezione, con autori e a che punto
            sono nel leggerli tutti.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
        {/* Barra di controllo: Bottone Filtri & Ricerca per Titolo */}
        {books.length > 0 && (
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setViewMode(viewMode === "row" ? "grid" : "row")}
                className="inline-flex items-center justify-center rounded-lg bg-[#241A12] px-3 py-2 text-sm font-semibold text-[#D9CBB8] border border-[#4A3526] hover:text-[#F2E9DC] hover:border-[#3FA796] transition"
                title={viewMode === "row" ? "Visualizza come griglia" : "Visualizza come lista"}
              >
                <i className={"fa-solid " + (viewMode === "row" ? "fa-bars" : "fa-grip") + " text-[#3FA796]"} aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="inline-flex items-center gap-2 rounded-lg bg-[#241A12] px-4 py-2 text-sm font-semibold text-[#D9CBB8] border border-[#4A3526] hover:text-[#F2E9DC] hover:border-[#3FA796] transition"
              >
                <i className={"fa-solid " + (showFilters ? "fa-filter-circle-xmark" : "fa-filter") + " text-[#3FA796]"} aria-hidden="true" />
                {showFilters ? 'Nascondi filtri' : 'Mostra filtri'}
              </button>

              <span className="inline-flex items-center rounded-full bg-[#241A12] px-3 py-1 text-xs font-semibold text-[#B8A691] border border-[#4A3526]">
                {isAnyFilterActive ? filteredBooks.length + " su " + books.length : books.length + " libri"}
              </span>
            </div>

            <div className="relative w-full sm:max-w-xs">
              <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-sm text-[#8A7765]" aria-hidden="true" />
              <input
                type="text"
                placeholder="Cerca per titolo..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-lg border border-[#4A3526] bg-[#241A12] py-2 pl-9 pr-4 text-sm text-[#F2E9DC] placeholder-[#8A7765] focus:border-[#3FA796] focus:outline-none transition"
              />
            </div>
          </div>
        )}

        {/* Filtri: mostrati solo se c'è almeno un libro in archivio e showFilters è true */}
        {books.length > 0 && showFilters && (
          <div className="mb-8">
            <FilterBar
              genres={genres}
              tags={tags}
              authors={authorOptions}
              selectedGenre={selectedGenre}
              selectedTags={selectedTags}
              selectedAuthorSlug={selectedAuthorSlug}
              readFilter={readFilter}
              onGenreChange={setSelectedGenre}
              onTagToggle={toggleTag}
              onAuthorChange={setSelectedAuthorSlug}
              onReadFilterChange={setReadFilter}
              onReset={resetFilters}
            />
          </div>
        )}

        {/* Elenco libri a stack orizzontale o a griglia */}
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
          <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-6"}>
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                authorName={authorNameBySlug.get(book.authorSlug) ?? "Autore sconosciuto"}
                viewMode={viewMode}
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

      {/* Bottone Torna in Cima */}
      <ScrollToTopButton />
    </div>
  );
}
