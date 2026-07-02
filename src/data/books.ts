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
    id: "poirot-tutti-i-racconti",
    slug: "poirot-tutti-i-racconti",
    title: "Poirot. Tutti i racconti",
    authorSlug: "agatha-christie",
    coverImageUrl: "/images/books/poirot-tutti-i-racconti.jpg",
    genre: "Giallo",
    tags: ["Poirot", "romanzo", "giallo"],
    publisher: "Mondadori",
    publicationYear: "2020",
    synopsis: "Tutte le avvincenti indagini di Hercule Poirot, il piccolo detective belga dalle infallibili \"celluline grigie\", nato dalla fantasia di Agatha Christie sono qui raccolte in un unico volume nel quale la vocazione narrativa della Regina del Giallo si esprime al suo meglio: storie che coinvolgono il pubblico in un raffinatissimo gioco di intelligenza accompagnate da raffinate illustrazioni d'epoca in bianco e nero.",
    rating: 5,
    notes: "Collana: Oscar draghi\nTitolo originale: Hercule Poirot: the complete short stories\nEAN: 9788804727965",
    favorite: true,
    read: true,
    posizione: {
      stanza: "CAM",
      scaffale: "01",
      ripiano: "D",
    },
  },
  {
  id: "miss-marple-i-delitti-deliziosi",
  slug: "miss-marple-i-delitti-deliziosi",
  title: "Miss Marple. I delitti deliziosi",
  authorSlug: "agatha-christie",
  coverImageUrl: "/images/books/miss-marple-i-delitti-deliziosi.jpg",
  genre: "Giallo",
  tags: ["Miss Murple", "romanzo", "giallo"],
  publisher: "Mondadori",
  publicationYear: "2021",
  synopsis: "«Davvero, non ho alcun dono, se non forse una certa conoscenza della natura umana.» \nTutti i racconti che vedono come protagonista Miss Marple, la dolce, un po' svagata anziana signora della provincia inglese che risolve con acume i delitti più misteriosi, sono racchiusi in questo libro dal formato importante nel quale la vocazione narrativa della Regina del Giallo si esprime al suo meglio.",
  rating: 5,
  notes: "Collana: Oscar draghi\nEAN: 9788804739968",
  favorite: true,
  read: true,
  posizione: {
    stanza: "CAM",
    scaffale: "01",
    ripiano: "D",
  },
},
  {
    id: "la-fisica-di-star-trek",
    slug: "la-fisica-di-star-trek",
    title: "La fisica di Star Trek",
    subtitle: "La fantascienza di oggi è spesso la scienza di domani.",
    authorSlug: "lawrence-m-krauss",
    coverImageUrl: "/images/books/la-fisica-di-star-trek.jpg",
    genre: "Scienze",
    tags: ["fisica", "scienza", "star trek", "saggistica"],
    publisher: "TEA",
    publicationYear: "2020",
    synopsis: "L'universo di Star Trek a confronto con quello reale: che cosa c'è di scientificamente possibile (e cosa, invece, di assurdo) nelle avventure di una delle saghe fantascientifiche più amate di sempre? In che misura la fantascienza può prefigurare la scienza del futuro? Appassionato di Star Trek , al pari di molti altri fisici famosi, Lawrence Krauss ha deciso di «seguire» la mitica astronave Enterprise, in missione permanente nella Galassia, per esplorare gli affascinanti misteri dell'universo, spiegando la fisica di oggi e tentando di prevedere la fisica di domani. La presente edizione è stata completamente rivista e aggiornata dall'autore: «Negli anni passati da allora non è solo continuata l'epopea di Star Trek, ma anche il mondo della scienza ha fatto grandi passi avanti, e io mi azzarderei a dire che la scienza abbia progredito più di Star Trek. Nel tentativo di aggiornare la scienza in questa nuova edizione del libro, ho deciso di rivederne l'intero contenuto, aggiungendo nuove informazioni dov'era necessario ed eliminando argomentazioni di cui la natura ha nel frattempo dimostrato l'erroneità.»",
    rating: 3,
    notes: "Prefazione di Stephen Hawking. \n Titolo originale: The physics of Star Trek \nEAN: 9788850258932",
    favorite: false,
    read: true,
    posizione: {
      stanza: "CAM",
      scaffale: "02",
      ripiano: "C"
    }
  },
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
