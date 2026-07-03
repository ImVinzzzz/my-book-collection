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
    notes: "Collana: Oscar draghi\nTitolo originale: *Hercule Poirot: the complete short stories*\nEAN: 9788804727965",
    favorite: true,
    read: true,
    posizione: {
      stanza: "CAM",
      scaffale: "01",
      ripiano: "E",
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
    synopsis: "*«Davvero, non ho alcun dono, se non forse una certa conoscenza della natura umana.»* \nTutti i racconti che vedono come protagonista Miss Marple, la dolce, un po' svagata anziana signora della provincia inglese che risolve con acume i delitti più misteriosi, sono racchiusi in questo libro dal formato importante nel quale la vocazione narrativa della Regina del Giallo si esprime al suo meglio.",
    rating: 5,
    notes: "Collana: Oscar draghi\nEAN: 9788804739968",
    favorite: true,
    read: true,
    posizione: {
      stanza: "CAM",
      scaffale: "01",
      ripiano: "E",
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
    id: "harry-potter",
    slug: "harry-potter",
    title: "Harry Potter",
    subtitle: "Edizione Corvonero. La serie completa.",
    authorSlug: "j-k-rowling",
    coverImageUrl: "/images/books/harry-potter4.jpg",
    genre: "Fantasy",
    tags: ["Harry Potter", "fantasy", "ragazzi"],
    publisher: "Salani",
    publicationYear: "2023",
    synopsis: "**Harry Potter e la pietra filosofale** *(1997)*\nHarry Potter è un ragazzo orfano in seguito all'uccisione dei suoi genitori da parte di Lord Voldemort. Ha un viso sottile, occhi verde intenso e una cicatrice sulla fronte a forma di saetta. A un anno viene affidato agli zii Dursley, che però lo trattano male. Harry scopre di essere un mago a 11 anni, dopo che i Dursley glielo avevano tenuto nascosto. Conosce i suoi compagni di avventure: Ron, Hermione, Hagrid e Silente. Harry e i suoi amici pensano che il professor Piton voglia rubare la pietra filosofale, una pietra miracolosa che trasforma il metallo in oro e produce l'elisir di eterna giovinezza. In realtà è Voldemort che vuole la Pietra Filosofale. Harry combatte per la prima volta contro Lord Voldemort, diventato ormai un parassita e costretto a vivere nel corpo del professor Raptor, insegnante di Difesa contro le Arti Oscure. Harry riesce ad ucciderlo grazie ai poteri trasmessi dalla madre Lily che lo salvò, appena nato, da Voldemort che torna a vivere sotto forma di anima. Dopo essersi svegliato nell'infermeria della scuola, Harry viene a sapere che la Pietra è stata distrutta e che Voldemort è ancora in giro.\n\n**Harry Potter e la camera dei segreti** *(1999)*\nDopo il primo anno ad Hogwarts, Harry trascorre le vacanze dagli zii. Riceve la visita dell'elfo domestico Dobby, che lo avverte di non tornare a scuola perché qualcuno vuole ucciderlo. Dobby cerca in tutti i modi di non far partire Harry e con una maga fa cadere una torta in testa ad uno degli ospiti degli zii. Per punizione lo zio Vernon lo rinchiude in camera. Ron e i suoi fratelli lo portano a casa Weasley e cominciano così l'anno scolastico, per niente facile. Durante la notte di Halloween i ragazzi leggono un messaggio scritto col sangue: la camera dei segreti è stata riaperta. Secondo la leggenda la camera è stata costruita da Salazar Sempreverde e contiene un mostro che deve uccidere i mezzosangue. Harry si scontra con lo spirito di Tom Riddle nella camera dei segreti, ovvero solo una parte dell'anima di Voldemort contenuta in un diario, che si scoprirà, negli anni, essere il suo primo Horcrux, e lo distrugge.\n\n**Harry Potter e il prigioniero di Azkaban* *(2000)*\nInizia il terzo anno ad Hogwarts dopo un'altra estate terribile dagli zii. Harry segue corsi come Divinazione e Cura delle Creature Magiche. Harry scopre il passato di suo padre James Potter (Ramoso) e conosce i due suoi migliori amici Remus Lupin (Lunastorta) e Sirius Black (Felpato), rispettivamente, un Lupo Mannaro e un Animagus, suo padrino, che in quell'anno era latitante ed evase da Azkaban, la prigione dei maghi. Inizialmente pensano che Black abbia tradito i genitori di Harry, svelando dove si trovava la casa ai Mangiamorte, i seguaci di Voldemort; poi si verrà a scoprire che fu, invece, Peter Minus, altro amico del padre e suo padrino, nonché il topo Crosta appartenente a Ron e alla sua famiglia da parecchi anni.\n\n**Harry Potter e il calice di fuoco** *(2001)*\nHarry è preoccupato perché la sua cicatrice a forma di saetta fa male e sogna Lord Voldemort che vuole ucciderlo. La preoccupazione aumenta quando alla finale della Coppa del mondo un gruppo di maghi mascherati attacca dei babbani; compare in cielo poi il simbolo di Voldemort. Harry partecipa, perché costretto, al mortale Torneo Tre Maghi che vede partecipare le tre più grandi scuole del mondo magico (Hogwards, Durmstrang, Beauxbaton). Un calice di fuoco seleziona i partecipanti, ma solo quelli che hanno più di 17 anni. A sorpresa, la coppa estrae un quarto nome, quello di Harry che ha solo 14 anni. Harry vince insieme a Cedric e per la prima volta si trova a scontrarsi con Lord Voldemort, che ha di nuovo un corpo grazie a Peter Minus (Codaliscia), colui che tradì James e Lily Potter qualche anno prima.\n\n**Harry Potter e l'Ordine della Fenice** *(2003)*\nHarry torna a casa dagli zii per l'estate e cerca informazioni su quello che sta accadendo nel mondo magico, senza risultati. Un pomeriggio viene assalito insieme al cugino dai Dissennatori ed è costretto ad usare la magia. Viene espulso dalla scuola per aver usato i poteri fuori da Hogwards. Alcuni maghi vengono a prenderlo e lo portano a casa di Sirius Black, sede dell'Ordine della Fenice, la società segreta giudata da Silente per combattere Voldemort. Harry e Silente vengono presi per bugiardi perché nessuno crede al ritorno di Voldemort. Dopo lo scontro a fine anno nel Ministero della Magia tra i Mangiamorte (seguaci di Voldemort) e l'Ordine della Fenice (l'associazione creata da Silente anni prima per contrastare Voldemort), il mondo magico verrà a sapere che è tornato. Durante lo scontro Bellatrix uccide suo cugino Sirius, la persona più cara ad Harry Potter.\n\n**Harry Potter e il principe mezzosangue** *(2005)*\nIl mondo babbano è colpito da strani avvenimenti: omicidi, crolli, uragani. Il primo ministro inglese è preoccupato e Caramell, il ministro del mondo magico, gli spiega che è tornato il mago oscuro. Harry torna a scuola a seguire il corso di Magia Avanzata Grado Ottimale per diventare Auror; sospetta che il suo compagno Draco sia stato costretto a diventare mangiamorte. Silente rivela a Harry la sua teoria a proposito degli Horcrux di Voldemort: secondo lui sono sette, con all'interno pezzi della sua anima in modo da mantenersi immortale. Harry lo accompagna alla ricerca di uno degli oggetti oscuri, ma al loro ritorno a Hogwarts trovano i Mangiamorte pronti ad uccidere il mago anziano. Piton lo uccide e fugge dopo un breve ma violento scontro tra l'Ordine della Fenice e i Mangiamorte.\n\n**Harry Potter e i doni della morte** *(2007)*\nQuesta volta non si inizia con la partenza per Hogwards, in quanto la morte è dietro l'angolo a causa di una riunione dei mangiamorte e un piano terribile in atto. Harry non si reca a Hogwarts e, dopo il matrimonio di Bill e Fleur, parte con Ron e Hermione alla ricerca dei rimanenti cinque Horcrux, mentre Voldemort prende il controllo del mondo magico. Dopo aver distrutto gli Horcrux (di cui fa parte lo stesso Harry, e fu proprio Voldemort a designarlo, involontariamente, come ultimo Horcrux quando tentò di ucciderlo da bambino) e durante una violenta guerra ad Hogwarts, Harry riesce a sconfiggere finalmente Voldemort. Harry verrà a conoscenza dell passato di Piton, scoprendo che era stato in realtà un servitore fedele di Silente, dopo la morte di Lily Evans di cui era perdutamente innamorato.",
    rating: 4,
    notes: "ISBN-10: 8831017225",
    favorite: true,
    read: true,
    posizione: {
      stanza: "CAM",
      scaffale: "01",
      ripiano: "D",
    },
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
