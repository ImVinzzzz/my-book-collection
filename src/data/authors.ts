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
    id: "lawrence-maxwell-krauss",
    slug: "lawrence-maxwell-krauss",
    name: "Lawrence Maxwell Krauss",
    bio: "Lawrence Maxwell Krauss (New York, 27 maggio 1954) è un fisico, astronomo e saggista statunitense. È professore in pensione (dal 2019) di fisica, di astronomia ed ex direttore del dipartimento di fisica alla Case Western Reserve University. Ha insegnato fino al 2018 alla Arizona State University.",
    photoUrl: "/images/authors/lawrence-m-krauss.jpg",
  },
  {
    id: "j-k-rowling",
    slug: "j-k-rowling",
    name: "J.K. Rowling",
    bio: "J.K. Rowling è autrice della popolarissima serie di libri Harry Potter, oltre a diversi romanzi autonomi per adulti e bambini, e di una serie di crime novel scritta con lo pseudonimo Robert Galbraith.",
    photoUrl: "/images/authors/j-k-rowling.jpg",
  },
  {
  id: "dan-brown",
  slug: "dan-brown",
  name: "Dan Brown",
  bio: "Dan Brown è un autore statunitense. Fin da piccolo ha ricevuto un'educazione cristiana e sia lui sia i suoi fratelli hanno frequentato la Phillips Exeter Academy. In generale è cresciuto in un clima familiare dove si cercava di conciliare scienza e fede, visto che il padre aveva una mentalità più aperta al mondo scientifico mentre la madre un'idea più religiosa. Scienza e fede saranno tra le tematiche centrali della sua produzione artistica.\nSi è laureato in seguito all’Amherst College e alla Phillips Exeter Academy, dove ha passato un periodo insegnando inglese prima di impegnarsi completamente alla scrittura. È scrittore di numerosi bestseller, tra cui quello che ha raggiunto i primi posti delle classifiche di tutto il mondo e l'ha reso celebre: 'Il codice da Vinci (The Da Vinci Code)', uno dei romanzi di maggiore successo di tutti i tempi. ",
  photoUrl: "/images/authors/dan-brown.jpg",
},
];
