import React, { useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

function CopyModal({ text, onClose }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--bg-3)', border: '1px solid var(--border-b)',
          borderRadius: 'var(--radius-md)', padding: '2rem', maxWidth: '560px',
          width: '100%', boxShadow: 'var(--shadow-lg)',
        }}
        onClick={e => e.stopPropagation()}
      >
        <h3 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
          BibTeX Citation
        </h3>
        <pre
          style={{
            background: 'var(--bg-2)', borderRadius: '8px', padding: '1.2rem',
            fontSize: '0.75rem', lineHeight: 1.65, overflowX: 'auto',
            fontFamily: 'var(--font-mono)', color: 'var(--text-2)',
            border: '1px solid var(--border)',
          }}
        >
          {text}
        </pre>
        <div style={{ display: 'flex', gap: '0.7rem', marginTop: '1.2rem' }}>
          <button
            className="btn-primary"
            style={{ fontSize: '0.8rem', padding: '0.6rem 1.3rem' }}
            onClick={() => { navigator.clipboard.writeText(text); onClose(); }}
          >
            Copy
          </button>
          <button
            className="btn-ghost"
            style={{ fontSize: '0.8rem', padding: '0.6rem 1.3rem' }}
            onClick={onClose}
          >
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* ── Icons inline SVG ── */
const IconPDF   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/></svg>;
const IconDOI   = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>;
const IconArXiv = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const IconCode  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
const IconCite  = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>;
const IconStar  = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

function Publications() {
  const { data } = useSiteData();
  const { publications } = data;
  const [citeIndex, setCiteIndex] = useState(null);

  return (
    <>
      {citeIndex !== null && (
        <CopyModal text={publications.bibtex[citeIndex]} onClose={() => setCiteIndex(null)} />
      )}

      <section className="section pub-section" id="publications">
        <div className="container">
          <p className="section-label reveal">{publications.sectionLabel}</p>
          <h2 className="section-title reveal rd1" style={{ marginBottom: '0.4rem' }}>
            {publications.title} <span className="text-accent">{publications.titleAccent}</span>
          </h2>
          <p
            className="reveal rd2"
            style={{
              color: 'var(--text-3)', fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0',
            }}
          >
            Hover a card to expand abstract · click Cite for BibTeX
          </p>

          <div className="pub-grid">
            {publications.entries.map((pub, i) => (
              <div
                key={i}
                className={`pub-card reveal rd${i + 1}${pub.featured ? ' featured-pub' : ''}`}
                data-type={pub.type}
              >
                {/* Venue banner */}
                <div className="pub-venue-banner">
                  <span className="pub-type-badge">
                    {pub.type === 'journal'    && '📰 Journal'}
                    {pub.type === 'conference' && '🎤 Conference'}
                    {pub.type === 'preprint'   && '📄 Preprint'}
                    {pub.type === 'thesis'     && '🎓 Thesis'}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    {pub.citations > 0 && (
                      <span className="pub-cited">
                        <IconStar /> {pub.citations} cited
                      </span>
                    )}
                    <span className="pub-year">{pub.year}</span>
                  </div>
                </div>

                {/* Body */}
                <div className="pub-body">
                  <div style={{ flex: 1 }}>
                    <h3 className="pub-title">{pub.title}</h3>
                    <p
                      className="pub-authors"
                      dangerouslySetInnerHTML={{ __html: pub.authors }}
                    />
                    <p className="pub-venue">{pub.venue}</p>
                    <p className="pub-abstract">{pub.abstract}</p>
                    <div className="pub-tags">
                      {pub.tags.map(t => (
                        <span key={t} className="pub-tag">{t}</span>
                      ))}
                    </div>
                  </div>

                  {/* Link buttons */}
                  <div className="pub-links">
                    {pub.links.pdf && (
                      <a href={pub.links.pdf} target="_blank" rel="noopener noreferrer" className="pub-link pub-link-pdf">
                        <IconPDF /> PDF
                      </a>
                    )}
                    {pub.links.doi && (
                      <a href={pub.links.doi} target="_blank" rel="noopener noreferrer" className="pub-link pub-link-doi">
                        <IconDOI /> DOI
                      </a>
                    )}
                    {pub.links.arxiv && (
                      <a href={pub.links.arxiv} target="_blank" rel="noopener noreferrer" className="pub-link pub-link-arxiv">
                        <IconArXiv /> arXiv
                      </a>
                    )}
                    {pub.links.code && (
                      <a href={pub.links.code} target="_blank" rel="noopener noreferrer" className="pub-link pub-link-code">
                        <IconCode /> Code
                      </a>
                    )}
                    {pub.links.cite && (
                      <button
                        className="pub-link pub-link-cite"
                        onClick={() => setCiteIndex(i)}
                      >
                        <IconCite /> Cite
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Publications;
