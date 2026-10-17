import { useEffect, useRef, type MouseEvent } from 'react';
import type { Artwork } from '../data/artworks.ts';
import { formatDate } from '../utils/formatDate.ts';

interface LightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
}

// Uses the native <dialog> element so focus trapping, Escape-to-close and
// the backdrop come from the browser instead of hand-rolled logic.
export default function Lightbox({ artwork, onClose }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  // Synchronize React state with the dialog's imperative open/close API.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (artwork && !dialog.open) dialog.showModal();
    if (!artwork && dialog.open) dialog.close();
  }, [artwork]);

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === dialogRef.current) onClose();
  }

  return (
    <dialog
      ref={dialogRef}
      className="lightbox"
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-labelledby="lightbox-title"
    >
      {artwork && (
        <div className="lightbox-content">
          <img src={artwork.image} alt={artwork.alt} />
          <div className="lightbox-details">
            <h2 id="lightbox-title">{artwork.title}</h2>
            <p className="lightbox-meta">
              {artwork.medium} · <time dateTime={artwork.created}>{formatDate(artwork.created)}</time>
              {artwork.dimensions && ` · ${artwork.dimensions}`}
            </p>
            <p>{artwork.description}</p>
            <button type="button" className="button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </dialog>
  );
}
