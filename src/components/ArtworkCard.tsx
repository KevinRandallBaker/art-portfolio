import type { Artwork } from '../data/artworks.ts';
import { formatDate } from '../utils/formatDate.ts';

interface ArtworkCardProps {
  artwork: Artwork;
  /** When provided, the image becomes a button that opens the artwork. */
  onSelect?: (artwork: Artwork) => void;
}

export default function ArtworkCard({ artwork, onSelect }: ArtworkCardProps) {
  const { title, image, medium, created, dimensions } = artwork;
  const img = <img src={image} alt={artwork.alt} loading="lazy" width="800" height="800" />;

  return (
    <figure className="artwork-card">
      {onSelect ? (
        <button
          type="button"
          className="artwork-image-button"
          onClick={() => onSelect(artwork)}
          aria-label={`View ${title} larger`}
        >
          {img}
        </button>
      ) : (
        <div className="artwork-image-frame">{img}</div>
      )}
      <figcaption>
        <h3>{title}</h3>
        <dl className="artwork-meta">
          <div>
            <dt>Medium</dt>
            <dd>{medium}</dd>
          </div>
          <div>
            <dt>Created</dt>
            <dd>
              <time dateTime={created}>{formatDate(created)}</time>
            </dd>
          </div>
          {dimensions && (
            <div>
              <dt>Size</dt>
              <dd>{dimensions}</dd>
            </div>
          )}
        </dl>
      </figcaption>
    </figure>
  );
}
