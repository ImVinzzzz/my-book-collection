import type { Author } from '../types';

/**
 * Archivio degli autori. Ogni libro in `data/books.ts` referenzia un
 * autore tramite `authorSlug`, che deve corrispondere esattamente allo
 * `slug` di un autore qui sotto.
 */
export const authors: Author[] = [
  {
    id: 'elena-mariotti',
    slug: 'elena-mariotti',
    name: 'Elena Mariotti',
    bio: "Scrittrice e giornalista, esordisce con romanzi d'inchiesta ambientati nella provincia italiana degli anni '70. Il suo stile asciutto e la cura per i dettagli storici l'hanno resa una delle voci più seguite del giallo sociale contemporaneo.",
    photoUrl: '',
  },
  {
    id: 'tobias-renn',
    slug: 'tobias-renn',
    name: 'Tobias Renn',
    bio: "Autore di fantascienza di origine tedesca, naturalizzato italiano. Le sue opere esplorano i confini tra intelligenza artificiale ed etica, spesso ambientate in colonie spaziali ai margini del sistema solare.",
    photoUrl: '',
  },
];
