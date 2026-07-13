import { useState, useEffect, type ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { GENRE_SEAL_ICONS } from '../components/BookCard';

/** Rimuove accenti/apostrofi e produce uno slug url-safe. */
function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['']/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Stringa letterale TS tra doppi apici, con escape sicuro. */
function tsString(value: string): string {
  return JSON.stringify(value || "");
}

/** Indenta ogni riga di un blocco di testo di N spazi. */
function indentBlock(text: string, spaces: number): string {
  const pad = " ".repeat(spaces);
  return text
    .split("\n")
    .map((line) => pad + line)
    .join("\n");
}

export default function BookGenerator(): ReactElement {
  const [activeTab, setActiveTab] = useState<"book" | "author">("book");
  const [generatedCode, setGeneratedCode] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copia codice");

  // Stato Form Libro
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [slug, setSlug] = useState("");
  const [bookId, setBookId] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [selectedGenreOption, setSelectedGenreOption] = useState("");
  const [customGenre, setCustomGenre] = useState("");
  const [tags, setTags] = useState("");
  const [publisher, setPublisher] = useState("");
  const [publicationYear, setPublicationYear] = useState("");
  const [isbn, setIsbn] = useState("");
  const [stanza, setStanza] = useState("");
  const [scaffale, setScaffale] = useState("");
  const [ripiano, setRipiano] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [notes, setNotes] = useState("");
  const [favorite, setFavorite] = useState(false);
  const [read, setRead] = useState(false);

  // Stati per tracciare se l'utente ha modificato manualmente i campi automatici del libro
  const [slugTouched, setSlugTouched] = useState(false);
  const [idTouched, setIdTouched] = useState(false);
  const [coverTouched, setCoverTouched] = useState(false);

  // Stato Form Autore
  const [authorFullName, setAuthorFullName] = useState("");
  const [authorSlug, setAuthorSlug] = useState("");
  const [authorId, setAuthorId] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [bio, setBio] = useState("");

  // Stati per tracciare modifiche manuali autore
  const [authorSlugTouched, setAuthorSlugTouched] = useState(false);
  const [authorIdTouched, setAuthorIdTouched] = useState(false);
  const [authorPhotoTouched, setAuthorPhotoTouched] = useState(false);

  // Effetto autogenerazione libro
  useEffect(() => {
    const autoSlug = slugify(title);
    if (!slugTouched) {
      setSlug(autoSlug);
    }
    if (!idTouched) {
      setBookId(slugTouched ? slug : autoSlug);
    }
    if (!coverTouched) {
      setCoverImageUrl(title ? "/images/books/" + (slugTouched ? slug : autoSlug) + ".jpg" : "");
    }
  }, [title, slug, slugTouched, idTouched, coverTouched]);

  // Effetto autogenerazione autore
  useEffect(() => {
    const autoSlug = slugify(authorFullName);
    if (!authorSlugTouched) {
      setAuthorSlug(autoSlug);
    }
    if (!authorIdTouched) {
      setAuthorId(authorSlugTouched ? authorSlug : autoSlug);
    }
    if (!authorPhotoTouched) {
      setPhotoUrl(authorFullName ? "/images/authors/" + (authorSlugTouched ? authorSlug : autoSlug) + ".jpg" : "");
    }
  }, [authorFullName, authorSlug, authorSlugTouched, authorIdTouched, authorPhotoTouched]);

  const authorSlugPreview = slugify(authorName);

  function handleReset(): void {
    // Reset Libro
    setTitle("");
    setSubtitle("");
    setAuthorName("");
    setSlug("");
    setBookId("");
    setCoverImageUrl("");
    setSelectedGenreOption("");
    setCustomGenre("");
    setTags("");
    setPublisher("");
    setPublicationYear("");
    setIsbn("");
    setStanza("");
    setScaffale("");
    setRipiano("");
    setSynopsis("");
    setNotes("");
    setFavorite(false);
    setRead(false);
    setSlugTouched(false);
    setIdTouched(false);
    setCoverTouched(false);

    // Reset Autore
    setAuthorFullName("");
    setAuthorSlug("");
    setAuthorId("");
    setPhotoUrl("");
    setBio("");
    setAuthorSlugTouched(false);
    setAuthorIdTouched(false);
    setAuthorPhotoTouched(false);

    setGeneratedCode("");
  }

  function handleGenerateCode(): void {
    if (activeTab === "book") {
      if (!title || !synopsis || !authorName) {
        alert("Compila almeno Titolo, Autore e Sinossi prima di generare il codice.");
        return;
      }

      const finalSlug = slug || slugify(title);
      const finalId = bookId || finalSlug;
      const finalAuthorSlug = slugify(authorName);
      const tagList = tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

      const hasPosizione = stanza.trim() || scaffale.trim() || ripiano.trim();


      const lines = [
        "id: " + tsString(finalId) + ",",
        "slug: " + tsString(finalSlug) + ",",
        "title: " + tsString(title) + ",",
      ];
      if (subtitle) {
        lines.push("subtitle: " + tsString(subtitle) + ",");
      }
      lines.push("authorSlug: " + tsString(finalAuthorSlug) + ",");
      if (coverImageUrl) {
        lines.push("coverImageUrl: " + tsString(coverImageUrl) + ",");
      }
      const finalGenre = selectedGenreOption === "altro" ? customGenre : selectedGenreOption;
      lines.push("genre: " + tsString(finalGenre) + ",");
      lines.push("tags: [" + tagList.map(tsString).join(", ") + "],");
      if (publisher) {
        lines.push("publisher: " + tsString(publisher) + ",");
      }
      if (publicationYear) {
        lines.push("publicationYear: " + tsString(publicationYear) + ",");
      }
      if (isbn) {
        lines.push("isbn: " + tsString(isbn) + ",");
      }
      lines.push("synopsis: " + tsString(synopsis) + ",");
      if (notes) {
        lines.push("notes: " + tsString(notes) + ",");
      }
      lines.push("favorite: " + favorite + ",");
      lines.push("read: " + read + ",");

      if (hasPosizione) {
        const posLines = [];
        if (stanza) {
          posLines.push("stanza: " + tsString(stanza.toUpperCase()) + ",");
        }
        if (scaffale) {
          posLines.push("scaffale: " + tsString(scaffale) + ",");
        }
        if (ripiano) {
          posLines.push("ripiano: " + tsString(ripiano.toUpperCase()) + ",");
        }
        lines.push("posizione: {\n" + indentBlock(posLines.join("\n"), 2) + "\n},");
      }

      const code = "{\n" + indentBlock(lines.join("\n"), 2) + "\n},";
      setGeneratedCode(code);
    } else {
      if (!authorFullName || !bio) {
        alert("Compila almeno Nome e Cognome e Nota biografica prima di generare il codice.");
        return;
      }

      const finalAuthorSlug = authorSlug || slugify(authorFullName);
      const finalAuthorId = authorId || finalAuthorSlug;

      const lines = [
        "id: " + tsString(finalAuthorId) + ",",
        "slug: " + tsString(finalAuthorSlug) + ",",
        "name: " + tsString(authorFullName) + ",",
        "bio: " + tsString(bio) + ",",
      ];
      if (photoUrl) {
        lines.push("photoUrl: " + tsString(photoUrl) + ",");
      }

      const code = "{\n" + indentBlock(lines.join("\n"), 2) + "\n},";
      setGeneratedCode(code);
    }
  }

  function handleCopy(): void {
    navigator.clipboard
      .writeText(generatedCode)
      .then(() => {
        setCopyLabel("Copiato!");
        setTimeout(() => setCopyLabel("Copia codice"), 1500);
      })
      .catch(() => {
        alert("Errore nella copia del codice.");
      });
  }

  return (
    <div className="min-h-screen bg-[#1C1410] text-[#F2E9DC]">
      <header className="border-b border-[#4A3526] bg-[#120D0A]">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#B8A691] hover:text-[#6FC9BB]">
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            Torna a I Miei Libri
          </Link>
          <div className="mt-6 flex items-center gap-3 text-[#3FA796]">
            <i className="fa-solid fa-circle-plus text-2xl" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Archiviazione</span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Generatore di Schede</h1>
          <p className="mt-2 text-sm text-[#B8A691] max-w-2xl">
            Compila il form, genera il codice e incollalo manualmente nel relativo file di dati.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        {/* Selettore di tab */}
        <div className="mb-8 inline-flex rounded-full border border-[#4A3526] bg-[#241A12] p-1">
          <button
            type="button"
            onClick={() => { setActiveTab("book"); setGeneratedCode(""); }}
            className={"rounded-full px-5 py-2 text-sm font-semibold transition-colors " + (activeTab === "book" ? "bg-[#3FA796] text-[#120D0A]" : "text-[#D9CBB8] hover:text-white")}
          >
            <i className="fa-solid fa-book mr-1.5" aria-hidden="true" /> Libro
          </button>
          <button
            type="button"
            onClick={() => { setActiveTab("author"); setGeneratedCode(""); }}
            className={"rounded-full px-5 py-2 text-sm font-semibold transition-colors " + (activeTab === "author" ? "bg-[#3FA796] text-[#120D0A]" : "text-[#D9CBB8] hover:text-white")}
          >
            <i className="fa-solid fa-feather-pointed mr-1.5" aria-hidden="true" /> Autore
          </button>
        </div>

        {activeTab === "book" ? (
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <section className="rounded-xl border border-[#4A3526] bg-[#241A12] p-5 flex flex-col gap-4">
              <h2 className="font-bold text-lg text-[#F2E9DC]">Dati del libro</h2>

              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="title">Titolo *</label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  placeholder="Le Ore Spezzate"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="subtitle">Sottotitolo</label>
                <input
                  id="subtitle"
                  type="text"
                  value={subtitle}
                  onChange={(e) => setSubtitle(e.target.value)}
                  className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  placeholder="Un'indagine nella provincia degli anni di piombo"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="authorName">Autore *</label>
                <input
                  id="authorName"
                  type="text"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  placeholder="Nome e cognome"
                />
                <p className="mt-1 text-xs text-[#8A7765]">
                  Slug autore generato: <span className="text-[#6FC9BB] font-mono">{authorSlugPreview || "—"}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="slug">
                    Slug <span className="text-[#8A7765] font-normal">(autocompilato)</span>
                  </label>
                  <input
                    id="slug"
                    type="text"
                    value={slug}
                    onChange={(e) => { setSlug(e.target.value); setSlugTouched(true); }}
                    className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="bookId">
                    ID <span className="text-[#8A7765] font-normal">(autocompilato)</span>
                  </label>
                  <input
                    id="bookId"
                    type="text"
                    value={bookId}
                    onChange={(e) => { setBookId(e.target.value); setIdTouched(true); }}
                    className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="coverImageUrl">
                  URL immagine di copertina
                </label>
                <input
                  id="coverImageUrl"
                  type="text"
                  value={coverImageUrl}
                  onChange={(e) => { setCoverImageUrl(e.target.value); setCoverTouched(true); }}
                  className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  placeholder="/images/books/slug.jpg"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="genreSelect">Genere</label>
                  <select
                    id="genreSelect"
                    value={selectedGenreOption}
                    onChange={(e) => setSelectedGenreOption(e.target.value)}
                    className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  >
                    <option value="">Seleziona genere...</option>
                    {Object.keys(GENRE_SEAL_ICONS).map((g) => (
                      <option key={g} value={g}>{g}</option>
                    ))}
                    <option value="altro">Altro...</option>
                  </select>
                  {selectedGenreOption === "altro" && (
                    <input
                      type="text"
                      value={customGenre}
                      onChange={(e) => setCustomGenre(e.target.value)}
                      className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 mt-2 focus:outline-none focus:border-[#3FA796]"
                      placeholder="Specifica genere..."
                    />
                  )}
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="tags">Tag</label>
                  <input
                    id="tags"
                    type="text"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                    placeholder="provincia, inchiesta (separati da virgola)"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="publisher">Editore</label>
                  <input
                    id="publisher"
                    type="text"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                    placeholder="Edizioni Meridiana"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="publicationYear">Anno pubblicazione</label>
                  <input
                    id="publicationYear"
                    type="text"
                    value={publicationYear}
                    onChange={(e) => setPublicationYear(e.target.value)}
                    className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                    placeholder="2018"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="isbn">ISBN</label>
                <input
                  id="isbn"
                  type="text"
                  value={isbn}
                  onChange={(e) => setIsbn(e.target.value)}
                  className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  placeholder="978-88-04-XXXXX-X"
                />
              </div>

              <div className="border-t border-[#4A3526]/50 pt-4">
                <h3 className="text-sm font-semibold text-[#3FA796] mb-3">Posizione in biblioteca</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1" htmlFor="stanza">Stanza</label>
                    <select
                      id="stanza"
                      value={stanza}
                      onChange={(e) => setStanza(e.target.value)}
                      className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                    >
                      <option value="">Seleziona...</option>
                      <option value="CAM">CAM</option>
                      <option value="CUC">CUC</option>
                      <option value="SOG">SOG</option>
                      <option value="ING">ING</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1" htmlFor="scaffale">Scaffale</label>
                    <select
                      id="scaffale"
                      value={scaffale}
                      onChange={(e) => setScaffale(e.target.value)}
                      className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                    >
                      <option value="">Seleziona...</option>
                      <option value="01">01</option>
                      <option value="02">02</option>
                      <option value="03">03</option>
                      <option value="04">04</option>
                      <option value="05">05</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1" htmlFor="ripiano">Ripiano</label>
                    <select
                      id="ripiano"
                      value={ripiano}
                      onChange={(e) => setRipiano(e.target.value)}
                      className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                    >
                      <option value="">Seleziona...</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                      <option value="F">F</option>
                      <option value="G">G</option>
                      <option value="H">H</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="synopsis">Sinossi *</label>
                <textarea
                  id="synopsis"
                  rows={4}
                  value={synopsis}
                  onChange={(e) => setSynopsis(e.target.value)}
                  className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="notes">Note</label>
                <textarea
                  id="notes"
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                />
              </div>

              <div className="flex flex-wrap gap-6">
                <label className="inline-flex items-center gap-2 text-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={favorite}
                    onChange={(e) => setFavorite(e.target.checked)}
                    className="h-4 w-4 accent-[#E84855]"
                  />
                  Preferito
                </label>
                <label className="inline-flex items-center gap-2 text-sm cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={read}
                    onChange={(e) => setRead(e.target.checked)}
                    className="h-4 w-4 accent-[#3FA796]"
                  />
                  Già letto
                </label>
              </div>
            </section>
          </form>
        ) : (
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <section className="rounded-xl border border-[#4A3526] bg-[#241A12] p-5 flex flex-col gap-4">
              <h2 className="font-bold text-lg text-[#F2E9DC]">Dati dell'autore</h2>

              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="authorFullName">Nome e Cognome *</label>
                <input
                  id="authorFullName"
                  type="text"
                  value={authorFullName}
                  onChange={(e) => setAuthorFullName(e.target.value)}
                  className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  placeholder="Elena Mariotti"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="authorSlug">
                    Slug <span className="text-[#8A7765] font-normal">(autocompilato)</span>
                  </label>
                  <input
                    id="authorSlug"
                    type="text"
                    value={authorSlug}
                    onChange={(e) => { setAuthorSlug(e.target.value); setAuthorSlugTouched(true); }}
                    className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1" htmlFor="authorId">
                    ID <span className="text-[#8A7765] font-normal">(autocompilato)</span>
                  </label>
                  <input
                    id="authorId"
                    type="text"
                    value={authorId}
                    onChange={(e) => { setAuthorId(e.target.value); setAuthorIdTouched(true); }}
                    className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="photoUrl">
                  URL foto
                </label>
                <input
                  id="photoUrl"
                  type="text"
                  value={photoUrl}
                  onChange={(e) => { setPhotoUrl(e.target.value); setAuthorPhotoTouched(true); }}
                  className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                  placeholder="/images/authors/slug.jpg"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor="bio">Nota biografica *</label>
                <textarea
                  id="bio"
                  rows={5}
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                />
              </div>
            </section>
          </form>
        )}

        <div className="flex flex-wrap gap-3 mt-6">
          <button
            type="button"
            onClick={handleGenerateCode}
            className="inline-flex items-center gap-2 rounded-full bg-[#3FA796] px-5 py-2.5 text-sm font-semibold text-[#120D0A] hover:bg-[#6FC9BB] transition-colors"
          >
            <i className="fa-solid fa-code" aria-hidden="true" /> Genera codice
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 rounded-full border border-[#4A3526] px-5 py-2.5 text-sm font-semibold text-[#D9CBB8] hover:border-[#3FA796]/50 transition-colors"
          >
            <i className="fa-solid fa-rotate-left" aria-hidden="true" /> Svuota form
          </button>
        </div>

        {generatedCode && (
          <section className="mt-10 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-lg text-[#F2E9DC]">Codice generato</h2>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#3FA796]/40 px-3 py-1.5 text-xs font-semibold text-[#3FA796] hover:bg-[#3FA796]/10 transition-colors"
              >
                <i className="fa-solid fa-copy" aria-hidden="true" /> <span>{copyLabel}</span>
              </button>
            </div>
            <textarea
              readOnly
              rows={15}
              value={generatedCode}
              className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] p-4 font-mono text-xs text-[#D9CBB8] focus:outline-none"
            />
          </section>
        )}
      </main>
    </div>
  );
}
