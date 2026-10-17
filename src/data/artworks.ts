// Replace this content with your own details and artwork.
// Images live in /public/art — swap the SVG placeholders for photos of your work.

export interface Exhibition {
  year: number;
  title: string;
  venue: string;
}

export interface Artist {
  name: string;
  tagline: string;
  location: string;
  email: string;
  year: number;
  shortBio: string;
  bio: string[];
  exhibitions: Exhibition[];
}

export interface Artwork {
  id: string;
  title: string;
  /** Path under /public, e.g. "/art/my-painting.jpg". */
  image: string;
  /** Describes the image for screen readers. */
  alt: string;
  medium: string;
  /** ISO date string, e.g. "2026-04-12". */
  created: string;
  dimensions?: string;
  description: string;
  /** Shown in "Selected works" on the home page. */
  featured?: boolean;
}

export const artist: Artist = {
  name: 'Rosa Vermillion',
  tagline: 'Painter & printmaker exploring warmth, memory and color.',
  location: 'Portland, Oregon',
  email: 'hello@rosavermillion.art',
  year: 2026,
  shortBio:
    'Rosa Vermillion is a multidisciplinary artist whose work lives somewhere between soft and loud — blush-toned grounds interrupted by bold strokes of red. Working across acrylic, gouache, ink and printmaking, she builds images out of rhythm, repetition and the small rituals of everyday life.',
  bio: [
    'Rosa Vermillion grew up surrounded by her grandmother’s rose garden, and that palette has never left her. After studying painting and printmaking, she spent several years working as a muralist before returning to the studio to focus on smaller, more intimate pieces.',
    'Her practice centers on color as emotion. Pale pinks become quiet, breathing space; bright reds become urgency, love and heat. She works in series, often revisiting a single motif — a flower, a window, a wave — until it becomes something new.',
    'Her work has been exhibited in group shows across the Pacific Northwest and is held in private collections in the US, Canada and Japan. She is currently available for commissions.',
  ],
  exhibitions: [
    { year: 2026, title: 'Blush & Burn', venue: 'Rosewood Gallery, Portland' },
    { year: 2025, title: 'New Prints', venue: 'Pressworks Collective, Seattle' },
    { year: 2024, title: 'Small Rituals (solo)', venue: 'The Annex, Portland' },
    { year: 2023, title: 'Color Field Day', venue: 'Northside Arts Center, Tacoma' },
  ],
};

export const artworks: Artwork[] = [
  {
    id: 'crimson-bloom',
    title: 'Crimson Bloom',
    image: '/art/crimson-bloom.svg',
    alt: 'Concentric rotated red and pink ellipses forming a flower-like spiral on a pale pink ground.',
    medium: 'Acrylic on canvas',
    created: '2026-04-12',
    dimensions: '24 × 30 in',
    description: 'Layered ellipses build outward like petals opening, each ring painted in a single breath.',
    featured: true,
  },
  {
    id: 'soft-geometry',
    title: 'Soft Geometry',
    image: '/art/soft-geometry.svg',
    alt: 'A grid of rounded squares, circles and quarter-circles in reds, pinks and white.',
    medium: 'Gouache on paper',
    created: '2026-02-03',
    dimensions: '18 × 18 in',
    description: 'A study in play — simple shapes shuffled until the grid begins to hum.',
    featured: true,
  },
  {
    id: 'red-tide',
    title: 'Red Tide',
    image: '/art/red-tide.svg',
    alt: 'Translucent overlapping red waves rising beneath a white sun on a blush sky.',
    medium: 'Watercolor & ink',
    created: '2025-11-20',
    dimensions: '30 × 22 in',
    description: 'Painted from memory after an evening on the coast, when the water turned the color of the sky.',
    featured: true,
  },
  {
    id: 'portrait-in-rose',
    title: 'Portrait in Rose',
    image: '/art/portrait-in-rose.svg',
    alt: 'A stylized portrait of a smiling figure with dark red hair against a pink circle.',
    medium: 'Oil on panel',
    created: '2025-09-08',
    dimensions: '16 × 20 in',
    description: 'A self-portrait reduced to its warmest essentials.',
    featured: true,
  },
  {
    id: 'heartline',
    title: 'Heartline',
    image: '/art/heartline.svg',
    alt: 'Nested heart outlines alternating red and white on a pink background.',
    medium: 'Screen print, edition of 25',
    created: '2025-06-14',
    dimensions: '20 × 20 in',
    description: 'Nine pulls, one heart, repeated until it echoes.',
  },
  {
    id: 'garden-study',
    title: 'Garden Study',
    image: '/art/garden-study.svg',
    alt: 'A field of small red, pink and white flowers on green stems.',
    medium: 'Gouache on paper',
    created: '2025-04-02',
    dimensions: '14 × 11 in',
    description: 'One of many quick studies made in my grandmother’s garden each spring.',
  },
  {
    id: 'scarlet-window',
    title: 'Scarlet Window',
    image: '/art/scarlet-window.svg',
    alt: 'A red window frame with four pale pink panes showing a white moon and red hills.',
    medium: 'Acrylic on canvas',
    created: '2024-12-10',
    dimensions: '30 × 36 in',
    description: 'The view from the studio, flattened into color and frame.',
  },
  {
    id: 'confetti-noise',
    title: 'Confetti Noise',
    image: '/art/confetti-noise.svg',
    alt: 'Hundreds of small scattered red, pink and white strips on a pink ground.',
    medium: 'Mixed media collage',
    created: '2024-08-21',
    dimensions: '24 × 24 in',
    description: 'Hand-cut paper scraps from two years of studio offcuts.',
  },
  {
    id: 'quiet-hours',
    title: 'Quiet Hours',
    image: '/art/quiet-hours.svg',
    alt: 'Horizontal bands shifting from pale pink to deep red with a dark red sun setting into the horizon.',
    medium: 'Digital painting',
    created: '2024-03-30',
    dimensions: '4800 × 3360 px',
    description: 'A sunset slowed down to seven bands of color.',
  },
];
