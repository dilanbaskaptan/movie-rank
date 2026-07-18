import FilmCard from './FilmCard.jsx'

export default function FilmList({ films, onEdit, onDelete }) {
  if (films.length === 0) {
    return (
      <div className="text-center py-16 border border-dashed border-white/10 rounded-xl">
        <p className="font-display text-2xl text-muted tracking-wide">
          Perde henüz boş
        </p>
        <p className="text-muted text-sm mt-1">
          İzlediğin ilk filmi yukarıdan ekle.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      {films.map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  )
}
