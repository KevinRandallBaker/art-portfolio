import { Outlet } from 'react-router';
import NavBar from './NavBar.tsx';
import { artist } from '../data/artworks.ts';

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>
          © {artist.year} {artist.name}. All artworks shown are the property of the artist.
        </p>
      </footer>
    </>
  );
}
