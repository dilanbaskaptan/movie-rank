import { useEffect, useState } from 'react'
import FilmForm from './components/FilmForm.jsx'
import FilmList from './components/FilmList.jsx'

const STORAGE_KEY = 'reel-log-films'

function loadFilms() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export default function App() {
  const [films, setFilms] = useState(loadFilms)
  const [editingFilm, setEditingFilm] = useState(null)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(films))
  }, [films])

  function handleSave(formData) {
    if (editingFilm) {
      setFilms((prev) =>
        prev.map((f) => (f.id === editingFilm.id ? { ...formData, id: f.id } : f))
      )
      setEditingFilm(null)
    } else {
      const newFilm = { ...formData, id: crypto.randomUUID() }
      setFilms((prev) => [newFilm, ...prev])
    }
  }

  function handleDelete(id) {
    setFilms((prev) => prev.filter((f) => f.id !== id))
    if (editingFilm?.id === id) setEditingFilm(null)
  }

  function handleEdit(film) {
    setEditingFilm(film)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const avgRating = films.length
    ? (films.reduce((sum, f) => sum + Number(f.rating), 0) / films.length).toFixed(1)
    : '—'

  return (
    <div className="min-h-screen bg-paper px-4 py-10">
      <div className="max-w-2xl mx-auto space-y-8">
        <header className="text-center space-y-1">
          <h1 className="font-display text-5xl tracking-wide text-ink">
            MOVIE <span className="text-blue">RANK</span>
          </h1>
          <p className="text-muted text-sm">
            İzlediğin filmleri kaydet, puanla, hatırla.
          </p>
          <p className="text-xs text-muted">
            {films.length} film · ortalama puan {avgRating}
          </p>
        </header>

        <FilmForm
          onSave={handleSave}
          editingFilm={editingFilm}
          onCancelEdit={() => setEditingFilm(null)}
        />

        <FilmList films={films} onEdit={handleEdit} onDelete={handleDelete} />

        <footer className="text-center text-xs text-muted pt-6">
          Veriler tarayıcının localStorage'ında saklanır.
        </footer>
      </div>
    </div>
  )
}
