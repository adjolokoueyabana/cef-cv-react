import Header from './composants/Header'
import Footer from './composants/Footer'
import './App.css';

import Accueil from './pages/Accueil'
import Services from './pages/Services'
import Realisations from './pages/Realisations'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/services" element={<Services />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App