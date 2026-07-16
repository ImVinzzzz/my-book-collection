import type { ReactElement } from 'react';

export type ReadFilter = 'all' | 'read' | 'unread';

export interface AuthorOption {
  slug: string;
  name: string;
}

interface FilterBarProps {
  /** Generi disponibili (derivati dai dati) */
  genres: string[];
  /** Tag disponibili (derivati dai dati) */
  tags: string[];
  /** Autori disponibili (derivati dai libri presenti in archivio) */
  authors: AuthorOption[];
  /** Genere attualmente selezionato; null = "Tutti" */
  selectedGenre: string | null;
  /** Tag attualmente selezionati (selezione multipla, OR tra loro) */
  selectedTags: string[];
  /** Slug dell'autore selezionato; null = "Tutti" */
  selectedAuthorSlug: string | null;
  /** Filtro sullo stato "letto" */
  readFilter: ReadFilter;
  onGenreChange: (genre: string | null) => void;
  onTagToggle: (tag: string) => void;
  onAuthorChange: (slug: string | null) => void;
  onReadFilterChange: (value: ReadFilter) => void;
  onReset: () => void;
}

function chipClasses(active: boolean): string {
  return [
    'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-colors',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3FA796] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C1410]',
    active
      ? 'bg-[#3FA796] text-[#120D0A]'
      : 'bg-[#241A12] text-[#D9CBB8] ring-1 ring-[#4A3526] hover:text-[#F2E9DC] hover:ring-[#3FA796]/50',
  ].join(' ');
}



/**
 * Barra dei filtri: genere e autore a selezione singola, tag a selezione
 * multipla (OR tra loro), classificazione minima e stato "letto" a
 * selezione singola. Componente puramente presentazionale: lo stato dei
 * filtri vive in `pages/Home.tsx`.
 */
export default function FilterBar({
  genres,
  tags,
  authors,
  selectedGenre,
  selectedTags,
  selectedAuthorSlug,
  readFilter,
  onGenreChange,
  onTagToggle,
  onAuthorChange,
  onReadFilterChange,
  onReset,
}: FilterBarProps): ReactElement {
  const hasActiveFilters =
    selectedGenre !== null ||
    selectedTags.length > 0 ||
    selectedAuthorSlug !== null ||
    readFilter !== 'all';

  return (
    <div className="flex flex-col gap-5 rounded-xl border border-[#4A3526] bg-[#120D0A] p-5">
      {/* Filtro per genere (selezione singola) */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8A7765]">
          Genere
        </span>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => onGenreChange(null)} className={chipClasses(selectedGenre === null)} aria-pressed={selectedGenre === null}>
            <i className="fa-solid fa-layer-group text-[0.7rem]" aria-hidden="true" />
            Tutti
          </button>
          {genres.map((genre) => (
            <button key={genre} type="button" onClick={() => onGenreChange(genre)} className={chipClasses(selectedGenre === genre)} aria-pressed={selectedGenre === genre}>
              <i className="fa-solid fa-book text-[0.7rem]" aria-hidden="true" />
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro per tag (selezione multipla) */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8A7765]">
          Tag
        </span>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button key={tag} type="button" onClick={() => onTagToggle(tag)} className={chipClasses(selectedTags.includes(tag))} aria-pressed={selectedTags.includes(tag)}>
              <i className="fa-solid fa-hashtag text-[0.7rem]" aria-hidden="true" />
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro per autore (selezione singola) */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8A7765]">
          Autore
        </span>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => onAuthorChange(null)} className={chipClasses(selectedAuthorSlug === null)} aria-pressed={selectedAuthorSlug === null}>
            <i className="fa-solid fa-users text-[0.7rem]" aria-hidden="true" />
            Tutti
          </button>
          {authors.map((author) => (
            <button key={author.slug} type="button" onClick={() => onAuthorChange(author.slug)} className={chipClasses(selectedAuthorSlug === author.slug)} aria-pressed={selectedAuthorSlug === author.slug}>
              <i className="fa-solid fa-feather-pointed text-[0.7rem]" aria-hidden="true" />
              {author.name}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro per stato "letto" */}
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#8A7765]">
          Status
        </span>
        <div className="flex flex-wrap gap-2">
          <button type="button" onClick={() => onReadFilterChange('all')} className={chipClasses(readFilter === 'all')} aria-pressed={readFilter === 'all'}>
            <i className="fa-brands fa-redhat text-[0.7rem]" aria-hidden="true" />
            Tutti
          </button>
          <button type="button" onClick={() => onReadFilterChange('read')} className={chipClasses(readFilter === 'read')} aria-pressed={readFilter === 'read'}>
            <i className="fa-solid fa-check text-[0.7rem]" aria-hidden="true" />
            Letti
          </button>
          <button type="button" onClick={() => onReadFilterChange('unread')} className={chipClasses(readFilter === 'unread')} aria-pressed={readFilter === 'unread'}>
            <i className="fa-solid fa-bookmark text-[0.7rem]" aria-hidden="true" />
            Da leggere
          </button>
        </div>
      </div>

      {hasActiveFilters && (
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 self-start text-xs font-semibold text-[#3FA796] hover:text-[#6FC9BB]"
        >
          <i className="fa-solid fa-rotate-left text-[0.7rem]" aria-hidden="true" />
          Azzera filtri
        </button>
      )}
    </div>
  );
}
