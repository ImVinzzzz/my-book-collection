# Archivio Libri (MyBookCollection)

Benvenuto in **Archivio Libri**, un'applicazione web moderna e reattiva progettata per gestire e catalogare la tua collezione personale di libri e autori. L'applicazione è sviluppata con tecnologie all'avanguardia come **React**, **TypeScript**, **Vite** e **Tailwind CSS**.

---

## 🚀 Caratteristiche Principali

- **Visualizzazione Catalogo**: Un'interfaccia elegante per esplorare la propria collezione di libri con copertine, tags, generi e indicazioni sui libri preferiti o già letti.
- **Ricerca e Filtri Avanzati**: Filtra rapidamente i libri per titolo, autore, genere, stato di lettura ("Da leggere" o "Letto"), preferiti o tramite tag personalizzati.
- **Schede Dettaglio**:
  - **Libri**: Visualizzazione della sinossi (con supporto per la formattazione Rich Text/Markdown), dettagli editoriali (anno, editore, ISBN), posizione fisica nella biblioteca e link all'autore.
  - **Autori**: Biografia dettagliata dell'autore e elenco completo delle sue opere presenti in archivio.
- **Generatore di Codice Integrato**:
  - **Book Generator**: Uno strumento visuale per inserire facilmente nuovi libri compilando tutti i campi necessari. Genera automaticamente il blocco di codice TypeScript formattato pronto da copiare e incollare all'interno del file dati.
  - **Genre Generator**: Strumento ausiliario per la gestione e l'esportazione rapida dei generi.
- **Localizzazione Fisica**: Supporto alla catalogazione fisica indicando stanza, scaffale e ripiano in cui è riposto il volume.

---

## 🛠️ Tecnologie Utilizzate

- **Core**: [React 18](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vitejs.dev/) (veloce ed efficiente)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & [PostCSS](https://postcss.org/) (design responsive e moderno)
- **Routing**: [React Router DOM v6](https://reactrouter.com/) (gestione fluida della navigazione tra le pagine)
- **Rich Text**: [React Markdown](https://github.com/remarkjs/react-markdown) (per il rendering di grassetti, corsivi e interruzioni di riga nelle sinossi dei libri)

---

## 📁 Struttura del Progetto

La struttura principale del codice sorgente (`src`) si articola come segue:

```text
src/
├── components/          # Componenti UI riutilizzabili
│   ├── BookCard.tsx     # Scheda per la visualizzazione sintetica di un libro
│   ├── FilterBar.tsx    # Barra dei filtri per la ricerca dei libri
│   ├── Footer.tsx       # Piè di pagina dell'applicazione
│   ├── ScrollToTopButton.tsx # Pulsante rapido per tornare a inizio pagina
│   └── Tag.tsx          # Componente per visualizzare i tag dei libri
├── data/                # Data-store locali basati su file TypeScript
│   ├── authors.ts       # Database degli autori
│   └── books.ts         # Database dei libri
├── pages/               # Pagine dell'applicazione (corrispondenti alle rotte)
│   ├── AuthorDetail.tsx # Pagina di dettaglio dell'autore
│   ├── BookDetail.tsx   # Pagina di dettaglio del libro (con sinossi Markdown)
│   ├── BookGenerator.tsx # Generatore di codice per nuovi libri
│   ├── GenreGenerator.tsx # Generatore per i generi
│   └── Home.tsx         # Dashboard / Catalogo principale
├── App.tsx              # Componente principale e configurazione delle rotte
├── index.css            # Configurazione e direttive globali di Tailwind CSS
├── main.tsx             # Entrypoint dell'applicazione
└── types.ts             # Definizioni dei tipi e interfacce TypeScript
```

---

## 💻 Installazione e Avvio Locale

Segui questi passaggi per eseguire il progetto in locale:

### Requisiti
- [Node.js](https://nodejs.org/) (versione 18 o superiore consigliata)
- [npm](https://www.npmjs.com/) (incluso con Node.js)

### 1. Clonare o scaricare il progetto
Accedi alla cartella del progetto:
```bash
cd web
```

### 2. Installare le dipendenze
Esegui il comando di installazione dei pacchetti necessari:
```bash
npm install
```

### 3. Avviare il server di sviluppo
Avvia l'applicazione in modalità di sviluppo locale:
```bash
npm run dev
```
L'applicazione sarà disponibile nel browser all'indirizzo che verrà mostrato nel terminale (solitamente `http://localhost:5173`).

### 4. Compilazione per la produzione
Per generare la build di produzione ottimizzata nella cartella `dist`:
```bash
npm run build
```

---

## ✍️ Aggiungere Nuovi Dati

I dati dell'applicazione risiedono in file statici TypeScript per semplificare la portabilità e non richiedere un database esterno:

1. **Autori**: Aggiungi nuovi record in [src/data/authors.ts](file:///s:/Progetti%20GitHub/MyBookCollection/web/src/data/authors.ts) rispettando l'interfaccia `Author`.
2. **Libri**: Utilizza la pagina **Book Generator** dell'applicazione per compilare interattivamente la scheda del libro. Una volta generato il codice TypeScript, incollalo all'interno dell'array in [src/data/books.ts](file:///s:/Progetti%20GitHub/MyBookCollection/web/src/data/books.ts).
