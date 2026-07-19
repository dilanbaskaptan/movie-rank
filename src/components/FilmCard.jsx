export default function FilmCard({ film, onEdit, onDelete }) {
  return (
    <div className="filmstrip-edge fade-in bg-card rounded-xl pl-7 pr-5 py-4 border border-black/5 flex items-start justify-between gap-4">
      <div className="min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3 className="font-display text-xl tracking-wide text-ink truncate">
            {film.title}
          </h3>
          {film.year && (
            <span className="text-muted text-sm">({film.year})</span>
          )}
        </div>
        {film.genre && (
          <span className="inline-block mt-1 text-xs uppercase tracking-wider text-green bg-green/10 px-2 py-0.5 rounded">
            {film.genre}
          </span>
        )}
        {film.note && (
          <p className="text-muted text-sm mt-2 leading-snug">{film.note}</p>
        )}
      </div>

      <div className="flex flex-col items-end gap-2 shrink-0">
        <span className="font-display text-2xl text-blue">
          {film.rating}
          <span className="text-sm text-muted">/10</span>
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => onEdit(film)}
            className="text-xs text-muted hover:text-blue transition"
          >
            Düzenle
          </button>
          <button
            onClick={() => onDelete(film.id)}
            className="text-xs text-muted hover:text-ink transition"
          >
            Sil
          </button>
        </div>
      </div>
    </div>
  )
}
