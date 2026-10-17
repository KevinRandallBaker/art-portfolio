import { artist, artworks } from '../data/artworks.ts';

const portrait = artworks.find((artwork) => artwork.id === 'portrait-in-rose');

export default function About() {
  return (
    <section className="section">
      <title>About — Anayeli Sanchez</title>
      <header className="page-header">
        <h1>About</h1>
        <p className="lead">{artist.tagline}</p>
      </header>

      <div className="about-layout">
        {portrait && (
          <img className="about-image" src={portrait.image} alt={portrait.alt} width="800" height="1000" />
        )}
        <div className="about-text">
          {artist.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}

          <h2>Exhibitions</h2>
          <ul className="exhibitions">
            {artist.exhibitions.map((show) => (
              <li key={`${show.year}-${show.title}`}>
                <span className="exhibition-year">{show.year}</span>
                <span>
                  <strong>{show.title}</strong> — {show.venue}
                </span>
              </li>
            ))}
          </ul>

          <h2>Get in touch</h2>
          <p>
            Based in {artist.location}. For commissions, prints or exhibitions, email{' '}
            <a href={`mailto:${artist.email}`}>{artist.email}</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
