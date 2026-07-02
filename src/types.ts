/**
 * Tipi e interfacce dell'archivio libri.
 *
 * Due collezioni distinte e collegate fra loro:
 * - `Book` (data/books.ts) rappresenta un libro
 * - `Author` (data/authors.ts) rappresenta un autore
 * Un libro referenzia il suo autore tramite `authorSlug`, che deve
 * corrispondere esattamente allo `slug` di un Author in data/authors.ts.
 */

/** Generi suggeriti: il campo `genre` resta una stringa libera (non un
 *  enum) perché l'elenco è volutamente estensibile ("ecc."). Questo array
 *  serve solo come riferimento/suggerimento, anche nel generatore di codice. */
export const BOOK_GENRE_SUGGESTIONS = [
  'Romanzo',
  'Avventura',
  'Giallo',
  'Thriller',
  'Saggio',
  'Narrativa',
  'Epica',
  'Fantasy',
  'Fantascienza',
] as const;

/** Rappresenta un autore dell'archivio. */
export interface Author {
  /** Identificatore univoco */
  id: string;
  /** Slug usato nell'URL della scheda autore, es. "italo-calvino" */
  slug: string;
  /** Nome e cognome */
  name: string;
  /** Nota biografica */
  bio: string;
  /** Url della foto (opzionale: se assente viene mostrato un segnaposto) */
  photoUrl?: string;
}

/** Rappresenta un singolo libro dell'archivio. */
export interface Book {
  /** Identificatore univoco */
  id: string;
  /** Slug usato nell'URL della scheda libro */
  slug: string;
  /** Titolo del libro */
  title: string;
  /** Sottotitolo (opzionale) */
  subtitle?: string;
  /** Slug dell'autore: deve corrispondere a un Author.slug in data/authors.ts */
  authorSlug: string;
  /** Url dell'immagine di copertina (opzionale: se assente viene mostrato un segnaposto) */
  coverImageUrl?: string;
  /** Genere: campo libero ma con suggerimenti, vedi BOOK_GENRE_SUGGESTIONS */
  genre: string;
  /** Tag/parole chiave libere, es. ["distopia", "premio Strega"] */
  tags: string[];
  /** Casa editrice (opzionale) */
  publisher?: string;
  /** Anno di pubblicazione (opzionale, stringa per ammettere "circa 1960" ecc.) */
  publicationYear?: string;
  /** Sinossi del libro */
  synopsis: string;
  /** Valutazione personale, da 0 a 5 stelle */
  rating: number;
  /** Note libere mostrate in un box dedicato (opzionale) */
  notes?: string;
  /** Se true, mostra il cuoricino "Preferito" in home e nella scheda */
  favorite?: boolean;
  /** Indica se questo libro è già stato letto */
  read: boolean;
  /** Posizione del libro in biblioteca (opzionale) */
  posizione?: PosizioneLibro;
}

/** Rappresenta la posizione fisica di un libro nell'archivio. */
export interface PosizioneLibro {
  /** Stanza: sigla di tre lettere */
  stanza: string;
  /** Scaffale: numero a 2 cifre con 0 iniziale */
  scaffale: string;
  /** Ripiano: 1 lettera */
  ripiano: string;
}

