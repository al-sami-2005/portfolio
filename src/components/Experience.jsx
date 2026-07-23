import React from 'react';
import { useSiteData } from '../context/SiteDataContext';

function Experience() {
  const { data } = useSiteData();
  const { experience } = data;
  return (
    <section className="section" id="experience" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <p className="section-label reveal">{experience.sectionLabel}</p>
        <h2 className="section-title reveal rd1" style={{ marginBottom: '0.4rem' }}>
          {experience.title} <span className="text-accent">{experience.titleAccent}</span>
        </h2>
        <p
          style={{
            color: 'var(--text-3)', fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '2.5rem',
          }}
          className="reveal rd2"
        >
          {experience.entries.length} position{experience.entries.length !== 1 ? 's' : ''} · swipe to explore →
        </p>

        <div className="exp-scroll reveal rd2">
          {experience.entries.map((exp, i) => (
            <article className="exp-card" key={i}>
              <div className="exp-header">
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-co">{exp.company}</p>
                </div>
                <span className="exp-date">{exp.date}</span>
              </div>
              <div className="exp-tags">
                {exp.tags.map(t => <span key={t} className="exp-tag">{t}</span>)}
              </div>
              <ul className="exp-list">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
