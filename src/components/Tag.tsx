import type { ReactElement } from 'react';

export type TagVariant = 'genre' | 'tag';

interface TagProps {
  label: string;
  variant?: TagVariant;
  icon?: string;
}

/** Icone di default per i generi suggeriti. Per generi non in lista
 *  viene usata un'icona generica (fa-book). */
const GENRE_ICONS: Record<string, string> = {
  Romanzo: 'fa-solid fa-book-open',
  Avventura: 'fa-solid fa-compass',
  Giallo: 'fa-solid fa-magnifying-glass',
  Thriller: 'fa-solid fa-bolt',
  Saggio: 'fa-solid fa-graduation-cap',
  Narrativa: 'fa-solid fa-feather',
  Epica: 'fa-solid fa-shield-halved',
  Fantasy: 'fa-solid fa-hat-wizard',
  Fantascienza: 'fa-solid fa-rocket',
};

const DEFAULT_GENRE_ICON = 'fa-solid fa-book';
/** I tag sono parole chiave libere: nessuna mappa per icona, sempre lo stesso simbolo. */
const TAG_ICON = 'fa-solid fa-hashtag';

/**
 * Etichetta a "pillola" usata per mostrare il genere (variante "genre",
 * accento verde-petrolio) o un tag libero (variante "tag", più discreta).
 */
export default function Tag({ label, variant = 'tag', icon }: TagProps): ReactElement {
  const resolvedIcon = icon ?? (variant === 'genre' ? GENRE_ICONS[label] ?? DEFAULT_GENRE_ICON : TAG_ICON);

  const baseClasses =
    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide';

  const variantClasses =
    variant === 'genre'
      ? 'bg-[#3FA796]/15 text-[#6FC9BB] ring-1 ring-[#3FA796]/40'
      : 'bg-[#5C4A38]/20 text-[#D9CBB8] ring-1 ring-[#5C4A38]/50';

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      <i className={`${resolvedIcon} text-[0.7rem]`} aria-hidden="true" />
      {label}
    </span>
  );
}
