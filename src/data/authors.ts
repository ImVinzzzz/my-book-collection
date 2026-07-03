import type { Author } from '../types';

/**
 * Archivio degli autori. Ogni libro in `data/books.ts` referenzia un
 * autore tramite `authorSlug`, che deve corrispondere esattamente allo
 * `slug` di un autore qui sotto.
 */
export const authors: Author[] = [
  {
    id: "agatha-christie",
    slug: "agatha-christie",
    name: "Agatha Christie",
    bio: "Pseudonimo di Agatha Mary Clarissa Miller. Scrittrice inglese. Di famiglia agiata, viene educata privatamente. Ancora bambina scrive racconti e poesie; alcune di queste vengono pubblicate nel 1908 in «Poetry Review».\nNel 1914 sposa Archibald Christie dal quale divorzia nel 1928.\nIl genere letterario con cui raggiunge il successo in campo internazionale è il romanzo poliziesco. I suoi detective, tra i quali primeggiano Hercule Poirot e Miss Jane Marple, sono entrambi abilissimi nel risolvere i più intricati enigmi polizieschi. \nLa 'signora del crimine' ha scritto più di 50 romanzi e 100 racconti. Nei suoi due ultimi romanzi, Sipario, l'ultima avventura di Poirot (1975) e Addio, Miss Marple (1976) l'autrice ha scelto di far morire i suoi due, ormai vecchissimi, detective: i romanzi erano stati scritti anni addietro, la scrittrice scelse di mantenerli inediti sino a poco prima della sua morte.",
    photoUrl: "/images/authors/agatha-christie.jpg",
  },
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
  {
    id: "j-k-rowling",
    slug: "j-k-rowling",
    name: "J.K. Rowling",
    bio: "J.K. Rowling is the author of the enduringly popular, era-defining Harry Potter book series, as well as several stand-alone novels for adults and children, and a bestselling crime fiction series written under the pen name Robert Galbraith.",
    photoUrl: "/images/authors/j-k-rowling.jpg",
  },
];
