import { useState, type ReactElement } from "react";
import { Link } from "react-router-dom";

export default function GenreGenerator(): ReactElement {
  const [genreName, setGenreName] = useState("");
  const [genreIcon, setGenreIcon] = useState("");
  const [generatedCode, setGeneratedCode] = useState("");
  const [copyLabel, setCopyLabel] = useState("Copia codice");

  function handleGenerateCode(): void {
    if (!genreName.trim() || !genreIcon.trim()) {
      alert("Compila sia il campo Genere che il campo Icona prima di generare il codice.");
      return;
    }

    const needsQuotes = /[^a-zA-Z0-9_]/.test(genreName);
    const key = needsQuotes ? JSON.stringify(genreName) : genreName;
    const value = JSON.stringify(genreIcon);
    const code = "  " + key + ": " + value + ",";

    setGeneratedCode(code);
  }

  function handleReset(): void {
    setGenreName("");
    setGenreIcon("");
    setGeneratedCode("");
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
    <div className="min-h-screen bg-[#1C1410]/90 text-[#F2E9DC]">
      <header className="border-b border-[#4A3526] bg-[#120D0A]">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-[#B8A691] hover:text-[#6FC9BB]">
            <i className="fa-solid fa-arrow-left" aria-hidden="true" />
            Torna a I Miei Libri
          </Link>
          <div className="mt-6 flex items-center gap-3 text-[#3FA796]">
            <i className="fa-solid fa-tags text-2xl" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Archiviazione</span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">Generatore di Generi</h1>
          
          {/* Box Istruzioni */}
          <div className="mt-6 rounded-lg border border-[#4A3526] bg-[#241A12] p-4 text-sm text-[#D9CBB8]">
            <h3 className="font-bold text-[#3FA796] mb-1">Istruzioni per l&apos;aggiornamento:</h3>
            <p className="leading-relaxed">
              1. Compila i campi sottostanti con il nome del nuovo Genere e la relativa classe FontAwesome dell&apos;icona.
            </p>
            <p className="leading-relaxed mt-1">
              2. Clicca su &quot;Genera codice&quot; e copia il risultato.
            </p>
            <p className="leading-relaxed mt-1">
              3. Apri il file <code className="text-[#3FA796] font-mono">src/components/BookCard.tsx</code>.
            </p>
            <p className="leading-relaxed mt-1">
              4. Incolla la riga copiata all&apos;interno del record <code className="text-[#3FA796] font-mono">GENRE_SEAL_ICONS</code>.
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
          <section className="rounded-xl border border-[#4A3526] bg-[#241A12] p-5 flex flex-col gap-4">
            <h2 className="font-bold text-lg text-[#F2E9DC]">Dati del nuovo genere</h2>

            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="genreName">Genere *</label>
              <input
                id="genreName"
                type="text"
                value={genreName}
                onChange={(e) => setGenreName(e.target.value)}
                className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                placeholder="Storico"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1" htmlFor="genreIcon">Icona FontAwesome *</label>
              <input
                id="genreIcon"
                type="text"
                value={genreIcon}
                onChange={(e) => setGenreIcon(e.target.value)}
                className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] px-3 py-2 focus:outline-none focus:border-[#3FA796]"
                placeholder="fa-solid fa-hourglass-half"
              />
            </div>

            {/* Anteprima Icona */}
            <div className="border-t border-[#4A3526]/50 pt-4 flex items-center gap-4">
              <div>
                <span className="block text-sm font-semibold mb-1">Anteprima Sigillo</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#120D0A]/80 text-[#6FC9BB] shadow-md ring-2 ring-[#3FA796]/70 backdrop-blur-sm">
                  <i className={(genreIcon.trim() || "fa-solid fa-book") + " text-lg"} aria-hidden="true" />
                </div>
              </div>
              <div className="text-xs text-[#8A7765] self-end mb-1">
                L&apos;anteprima mostra come apparirà il sigillo del genere sopra le copertine dei libri.
              </div>
            </div>
          </section>
        </form>

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
              rows={3}
              value={generatedCode}
              className="w-full rounded-lg bg-[#120D0A] border border-[#4A3526] p-4 font-mono text-xs text-[#D9CBB8] focus:outline-none"
            />
          </section>
        )}
      </main>
    </div>
  );
}
