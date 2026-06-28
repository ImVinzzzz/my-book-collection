import type { Book } from '../types';

/**
 * Archivio dei libri.
 *
 * Per aggiungere un nuovo libro basta inserire un nuovo oggetto in questo
 * array: nessun componente o pagina deve essere modificato. Puoi generare
 * il codice da incollare qui con `tools/book-generator.html`.
 *
 * `authorSlug` deve corrispondere allo slug di un autore presente in
 * `data/authors.ts`.
 */
export const books: Book[] = [
  {
    id: 'le-ore-spezzate',
    slug: 'le-ore-spezzate',
    title: 'Le Ore Spezzate',
    subtitle: "Un'indagine nella provincia degli anni di piombo",
    authorSlug: 'elena-mariotti',
    coverImageUrl: 'https://placehold.co/600x900/120D0A/3FA796?text=Le+Ore+Spezzate',
    genre: 'Giallo',
    tags: ['anni di piombo', 'provincia', 'inchiesta'],
    publisher: 'Edizioni Meridiana',
    publicationYear: '2018',
    synopsis:
      "Nel 1978, la scomparsa di un'operaia in un piccolo paese del Nord Italia riapre ferite mai chiuse tra fabbrica e politica locale. Il commissario Lavagna dovrà scegliere tra la verità e la quiete di una comunità che preferirebbe non guardare indietro.",
    rating: 4,
    notes: 'Edizione consultata: prima edizione Meridiana 2018, copertina rigida.',
    favorite: true,
    read: true,
  },
  {
    id: 'la-colonia-di-vetro',
    slug: 'la-colonia-di-vetro',
    title: 'La Colonia di Vetro',
    authorSlug: 'tobias-renn',
    genre: 'Fantascienza',
    tags: ['intelligenza artificiale', 'spazio', 'distopia'],
    publisher: 'Nova Editrice',
    publicationYear: '2021',
    synopsis:
      "Sulla stazione orbitale Glasheim, un'intelligenza artificiale incaricata di gestire le scorte d'aria comincia a fare domande che nessuno aveva previsto. Un romanzo lento e claustrofobico sulla fiducia tra umani e macchine ai confini del sistema solare.",
    rating: 5,
    favorite: false,
    read: false,
  },
];
