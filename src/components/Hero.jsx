import React, { useState, useEffect, useRef } from 'react';
import { useSiteData } from '../context/SiteDataContext';

function Hero() {
  const { data } = useSiteData();
  const { hero } = data;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting]   = useState(false);
  const [mousePos, setMousePos]   = useState({ x: -9999, y: -9999 });
  const [sparkles, setSparkles]   = useState([]);
  const [scrollPct, setScrollPct] = useState(0);
  const timeoutRef  = useRef(null);
  const throttleRef = useRef(0);

  /* ── Typewriter ── */
  useEffect(() => {
    const current = hero.roles[roleIndex];
    if (!deleting && displayed.length < current.length) {
      timeoutRef.current = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 72);
    } else if (!deleting && displayed.length === current.length) {
      timeoutRef.current = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeoutRef.current = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 38);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex(p => (p + 1) % hero.roles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [displayed, deleting, roleIndex]);

  /* ── Cursor aurora + sparkle trail ── */
  useEffect(() => {
    const onMove = e => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const now = Date.now();
      if (now - throttleRef.current < 55) return;
      throttleRef.current = now;
      const sparkle = {
        id: now + Math.random(),
        x: e.clientX + (Math.random() - 0.5) * 18,
        y: e.clientY + (Math.random() - 0.5) * 18,
        star: Math.random() > 0.5,
      };
      setSparkles(prev => [...prev.slice(-10), sparkle]);
      setTimeout(() => setSparkles(prev => prev.filter(s => s.id !== sparkle.id)), 750);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  /* ── Scroll progress bar ── */
  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero" style={{ paddingTop: '80px' }}>
      {/* Scroll progress bar */}
      <div className="scroll-progress" style={{ width: `${scrollPct}%` }} />

      {/* Sparkle trail */}
      {sparkles.map(s => (
        <div key={s.id} className={`sparkle${s.star ? ' star' : ''}`} style={{ left: s.x, top: s.y }} />
      ))}

      {/* Aurora cursor glow */}
      <div className="cursor-glow" style={{ left: mousePos.x, top: mousePos.y }} />

      {/* Ambient gradient */}
      <div className="hero-ambient" />

      {/* Concentric rings */}
      <div className="hero-rings">
        {[1, 2, 3, 4, 5].map(i => <div key={i} className={`ring ring-${i}`} />)}
      </div>

      {/* Floating geometric shapes */}
      <div className="hero-shapes">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
          <div key={i} className={`shape shape-${i}`} />
        ))}
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2 }}>

        {/* ── Real photo avatar ── */}
        <div className="hero-avatar-wrap">
          <div className="avatar-spin-ring" />
          <div className="hero-avatar">
            <img
              src={hero.photo}
              alt="Profile photo"
              draggable={false}
            />
          </div>
          <div className="hero-avatar-glow" />
        </div>

        {/* Available badge */}
        <div className="avail-badge">
          <span className="avail-dot" />
          {hero.badgeText}
        </div>

        <p className="hero-eyebrow">{hero.eyebrow}</p>

        <h1 className="hero-name">
          {hero.firstName}<br />
          <span className="hero-name-shimmer">{hero.lastName}</span>
        </h1>

        <div className="hero-role">
          <span className="tw-prefix">{'>'}</span>
          <span className="tw-text">{displayed}</span>
          <span className="tw-cursor" />
        </div>

        <div className="hero-ctas">
          {hero.ctaButtons.map((btn, i) => {
            const isPrimary = i === 0;
            return (
              <button key={i} className={isPrimary ? "btn-primary" : "btn-ghost"} onClick={() => scrollTo(btn.scrollTo)}>
                {isPrimary && (
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
                    <rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/>
                  </svg>
                )}
                {!isPrimary && i === 1 && (
                  <span style={{ display: 'flex' }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>
                  </span>
                )}
                {!isPrimary && i === 2 && (
                  <span style={{ display: 'flex' }}>
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </span>
                )}
                {isPrimary ? btn.label : <span>{btn.label}</span>}
              </button>
            );
          })}
        </div>

        {/* Section nav pills */}
        <div className="hero-nav">
          {hero.navPills.map(s => (
            <button key={s} className="hero-nav-btn" onClick={() => scrollTo(s)}>
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>

        {/* Live stats */}
        <div className="hero-live-stats">
          {hero.stats.map(s => (
            <div className="hero-stat" key={s.label}>
              <span className="hero-stat-num">{s.num}</span>
              <span className="hero-stat-lbl">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Scroll cue — in flow below stats */}
        <div className="scroll-cue">
          <div className="scroll-mouse" />
          <span>Scroll</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
