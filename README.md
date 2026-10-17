# Art Portfolio

A React 19 + TypeScript + Vite art portfolio with Home, Gallery and About pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, then production build in dist/
npm run typecheck # type-check only
npm run lint     # checks the Rules of React (eslint-plugin-react-hooks)
```

## Make it yours

- **Your details and artwork:** edit `src/data/artworks.ts` (name, bio, exhibitions, and each artwork's title, medium, created date, size and description). The `Artwork` type at the top of that file shows which fields are required.
- **Images:** put photos in `public/art/` and point each artwork's `image` at them (e.g. `/art/my-painting.jpg`). The SVGs there are placeholders.
- **Colors:** change the variables at the top of `src/index.css`.
- **Featured on the home page:** set `featured: true` on an artwork.

## Deploying

This uses `BrowserRouter`, so your host has to send unknown paths to `index.html`
(Netlify: a `_redirects` file with `/* /index.html 200`. Vercel and Cloudflare Pages handle it automatically for Vite).
