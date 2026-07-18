import { useEffect, useState } from 'react'

const emptyForm = { title: '', year: '', genre: '', rating: 5, note: '' }

export default function FilmForm({ onSave, editingFilm, onCancelEdit }) {
  const [form, setForm] = useState(emptyForm)

  useEffect(() => {
    if (editingFilm) {
      setForm(editingFilm)
    } else {
      setForm(emptyForm)
    }
  }, [editingFilm])

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.title.trim()) return
    onSave(form)
    setForm(emptyForm)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card rounded-xl p-6 space-y-4 border border-black/5 shadow-sm"
    >
      <h2 className="font-display text-2xl tracking-wide text-blue">
        {editingFilm ? 'Kaydı düzenle' : 'Yeni film ekle'}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-sm text-muted mb-1">Film adı</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="ör. Aynadaki Düşman"
            className="w-full bg-paper border border-black/10 rounded-lg px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-blue"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-muted mb-1">Yıl</label>
          <input
            name="year"
            value={form.year}
            onChange={handleChange}
            placeholder="2024"
            className="w-full bg-paper border border-black/10 rounded-lg px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>

        <div>
          <label className="block text-sm text-muted mb-1">Tür</label>
          <input
            name="genre"
            value={form.genre}
            onChange={handleChange}
            placeholder="Dram, Bilim Kurgu..."
            className="w-full bg-paper border border-black/10 rounded-lg px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>

        <div>
          <label className="block text-sm text-muted mb-1">Puan (1-10)</label>
          <input
            type="number"
            min="1"
            max="10"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full bg-paper border border-black/10 rounded-lg px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-blue"
          />
        </div>

        <div className="sm:col-span-2">
          <label className="block text-sm text-muted mb-1">Not</label>
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            rows="2"
            placeholder="Kısa bir izlenim bırak..."
            className="w-full bg-paper border border-black/10 rounded-lg px-3 py-2 text-ink focus:outline-none focus:ring-2 focus:ring-blue resize-none"
          />
        </div>
      </div>

      <div className="flex gap-3">
        <button
          type="submit"
          className="bg-blue text-white font-semibold px-5 py-2 rounded-lg hover:brightness-110 transition"
        >
          {editingFilm ? 'Güncelle' : 'Listeye ekle'}
        </button>
        {editingFilm && (
          <button
            type="button"
            onClick={onCancelEdit}
            className="border border-black/10 text-muted px-5 py-2 rounded-lg hover:text-ink hover:border-black/20 transition"
          >
            Vazgeç
          </button>
        )}
      </div>
    </form>
  )
}
