import { Link } from 'react-router';
import ArtworkCard from '../components/ArtworkCard.tsx';
import { artist, artworks } from '../data/artworks.ts';

const featured = artworks.filter((artwork) => artwork.featured);
const heroArtwork = featured[0] ?? artworks[0];

export default function Home() {
  return (
    <>
      <title>Anayeli Sanchez — Art Portfolio</title>
      <section className="hero">
        <div className="hero-text">
          <p className="eyebrow">Artist portfolio</p>
          <h1>
            Hi, I’m <span className="accent">{artist.name}</span>.
          </h1>
          <p className="lead">{artist.tagline}</p>
          <p>{artist.shortBio}</p>
          <div className="hero-actions">
            <Link to="/gallery" className="button">
              View the gallery
            </Link>
            <Link to="/about" className="button button-outline">
              More about me
            </Link>
          </div>
        </div>
        {heroArtwork && (
          <img
            className="hero-image"
            src={heroArtwork.image}
            alt={heroArtwork.alt}
            width="800"
            height="1000"
          />
        )}
      </section>

      <section className="section">
        <div className="section-header">
          <h2>Selected works</h2>
          <Link to="/gallery" className="text-link">
            See all {artworks.length} works →
          </Link>
        </div>
        <div className="artwork-grid">
          {featured.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      </section>
    </>
  );
}
