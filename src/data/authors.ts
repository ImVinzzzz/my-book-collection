import type { Author } from '../types';

/**
 * Archivio degli autori. Ogni libro in `data/books.ts` referenzia un
 * autore tramite `authorSlug`, che deve corrispondere esattamente allo
 * `slug` di un autore qui sotto.
 */
export const authors: Author[] = [
  {
  id: "lawrence-m-krauss",
  slug: "lawrence-m-krauss",
  name: "Lawrence M. Krauss",
  bio: "Lawrence Maxwell Krauss, conosciuto anche come Lawrence M. Krauss (New York, 27 maggio 1954), è un fisico, astronomo e saggista statunitense. È professore in pensione (dal 2019) di fisica, di astronomia ed ex direttore del dipartimento di fisica alla Case Western Reserve University. Ha insegnato fino al 2018 alla Arizona State University.",
  photoUrl: "/images/authors/lawrence-m-krauss.jpg",
  },
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
