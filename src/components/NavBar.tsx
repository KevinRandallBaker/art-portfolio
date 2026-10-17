import { NavLink } from 'react-router';
import { artist } from '../data/artworks.ts';

interface NavItem {
  to: string;
  label: string;
  end?: boolean;
}

const links: NavItem[] = [
  { to: '/', label: 'Home', end: true },
  { to: '/gallery', label: 'Gallery' },
  { to: '/about', label: 'About' },
];

export default function NavBar() {
  return (
    <header className="navbar">
      <nav className="navbar-inner container" aria-label="Main">
        <NavLink to="/" className="brand">
          {artist.name}
        </NavLink>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
