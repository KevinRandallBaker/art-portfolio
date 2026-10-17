import { useState } from 'react';
import ArtworkCard from '../components/ArtworkCard.tsx';
import Lightbox from '../components/Lightbox.tsx';
import { artworks, type Artwork } from '../data/artworks.ts';

type SortOrder = 'newest' | 'oldest';

const ALL = 'All';
// Each medium's first word ("Acrylic", "Gouache", …) groups works into filters.
const mediumGroup = (medium: string) => medium.split(' ')[0];
const filters = [ALL, ...new Set(artworks.map((artwork) => mediumGroup(artwork.medium)))];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');
  const [selected, setSelected] = useState<Artwork | null>(null);

  // Derived during render rather than stored in state.
  const visible = artworks
    .filter((artwork) => activeFilter === ALL || mediumGroup(artwork.medium) === activeFilter)
    .toSorted((a, b) =>
      sortOrder === 'newest' ? b.created.localeCompare(a.created) : a.created.localeCompare(b.created),
    );

  return (
    <section className="section">
      <title>Gallery — Anayeli Sanchez</title>
      <header className="page-header">
        <h1>Gallery</h1>
        <p className="lead">Paintings, prints and studies — click any piece to see it larger.</p>
      </header>

      <div className="gallery-controls">
        <div className="filter-chips" role="group" aria-label="Filter by medium">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={filter === activeFilter ? 'chip active' : 'chip'}
              aria-pressed={filter === activeFilter}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <label className="sort-select">
          Sort
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value as SortOrder)}>
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
          </select>
        </label>
      </div>

      <p className="result-count" aria-live="polite">
        Showing {visible.length} of {artworks.length} works
      </p>

      <div className="artwork-grid">
        {visible.map((artwork) => (
          <ArtworkCard key={artwork.id} artwork={artwork} onSelect={setSelected} />
        ))}
      </div>

      <Lightbox artwork={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
