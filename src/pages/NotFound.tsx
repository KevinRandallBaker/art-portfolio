import { Link } from 'react-router';

export default function NotFound() {
  return (
    <section className="section page-header">
      <title>Not found — Anayeli Sanchez</title>
      <h1>Page not found</h1>
      <p className="lead">That page seems to have wandered out of the frame.</p>
      <Link to="/" className="button">
        Back home
      </Link>
    </section>
  );
}
