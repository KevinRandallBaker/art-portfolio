import { Routes, Route } from 'react-router';
import Layout from './components/Layout.tsx';
import Home from './pages/Home.tsx';
import Gallery from './pages/Gallery.tsx';
import About from './pages/About.tsx';
import NotFound from './pages/NotFound.tsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
