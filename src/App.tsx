import type { ReactElement } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetail from './pages/BookDetail';
import AuthorDetail from './pages/AuthorDetail';
import BookGenerator from './pages/BookGenerator';
import Footer from './components/Footer';

/**
 * Componente radice dell'app: configura il routing tra la home (griglia +
 * filtri dei libri), la scheda di dettaglio di ciascun libro e la scheda
 * di ciascun autore.
 *
 * Richiede react-router-dom:
 *   npm install react-router-dom
 *
 * Il link FontAwesome e i Google Fonts vanno inseriti nell'<head> di
 * index.html, non qui (vedi index.html).
 */
export default function App(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/libro/:slug" element={<BookDetail />} />
        <Route path="/autore/:slug" element={<AuthorDetail />} />
        <Route path="/generatore" element={<BookGenerator />} />
        {/* Qualsiasi path non riconosciuto riporta in home */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
