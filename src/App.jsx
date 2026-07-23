import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { SiteDataProvider } from './context/SiteDataContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Footer from './components/Footer';
import CvDownload from './components/CvDownload';
import ParticleCanvas from './components/ParticleCanvas';
import AdminPanel from './admin/AdminPanel';

function Portfolio() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.08 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <ParticleCanvas />
      <Header />
      <CvDownload />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Publications />
        <Footer />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/portfolio/">
      <ThemeProvider>
        <SiteDataProvider>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/admin" element={<AdminPanel />} />
          </Routes>
        </SiteDataProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
