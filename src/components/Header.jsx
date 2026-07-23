import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useSiteData } from '../context/SiteDataContext';

function Header() {
  const { data } = useSiteData();
  const { header } = data;
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header className={`nav${scrolled ? ' scrolled' : ''}`}>
      <div
        className="nav-logo"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="br">{'{'}</span>{header.logo}<span className="br">{'}'}</span>
      </div>

      <nav className="nav-links">
        {header.navLinks.map(s => (
          <a
            key={s}
            href={`#${s}`}
            onClick={e => { e.preventDefault(); scrollTo(s); }}
          >
            {s}
          </a>
        ))}
        <a
          href="#contact"
          className="nav-cta"
          onClick={e => { e.preventDefault(); scrollTo('contact'); }}
        >
          {header.ctaText}
        </a>
      </nav>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={toggle}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className="theme-toggle-knob">
            {theme === 'dark' ? '🌙' : '☀️'}
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;
