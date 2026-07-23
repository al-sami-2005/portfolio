import React, { useState } from 'react';
import { useSiteData } from '../context/SiteDataContext';

function Education() {
  const { data } = useSiteData();
  const { education } = data;
  const [active, setActive] = useState(0);

  return (
    <section className="section edu-section" id="education">
      <div className="container">
        <p className="section-label reveal">{education.sectionLabel}</p>
        <h2 className="section-title reveal rd1" style={{ marginBottom: '0.4rem' }}>
          {education.title} <span className="text-accent">{education.titleAccent}</span>
        </h2>
        <p
          style={{
            color: 'var(--text-3)', fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.5rem',
          }}
          className="reveal rd2"
        >
          {education.entries.length} milestone{education.entries.length !== 1 ? 's' : ''} · click to expand
        </p>

        <div className="timeline reveal rd2">
          {education.entries.map((item, i) => {
            const isLeft = i % 2 === 0;
            const isActive = active === i;

            const card = (
              <div
                className={`tl-card${isActive ? ' featured' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setActive(i)}
              >
                <div className="tl-year">
                  <span>📅</span> {item.year}
                </div>
                <h3 className="tl-degree">{item.degree}</h3>
                <p className="tl-school">{item.school}</p>
                <p
                  className="tl-desc"
                  style={{
                    maxHeight: isActive ? '300px' : '0',
                    overflow: 'hidden',
                    opacity: isActive ? 1 : 0,
                    transition: 'max-height 0.5s ease, opacity 0.4s ease',
                    marginTop: isActive ? '0.7rem' : '0',
                  }}
                >
                  {item.desc}
                </p>
                <span
                  className="tl-badge"
                  style={{ opacity: isActive ? 1 : 0.45, transition: 'opacity 0.3s ease' }}
                >
                  {item.badge}
                </span>
              </div>
            );

            return (
              <div className="tl-item" key={i}>
                {isLeft ? card : <div className="tl-empty" />}

                <div className="tl-dot-wrap" onClick={() => setActive(i)}>
                  <div
                    className="tl-dot"
                    style={{
                      transform: isActive ? 'scale(1.4)' : 'scale(1)',
                      boxShadow: isActive
                        ? '0 0 0 6px var(--accent-dim), 0 0 30px var(--accent-glow)'
                        : '0 0 0 4px var(--accent-dim)',
                      transition: 'transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease',
                    }}
                  />
                </div>

                {!isLeft ? card : <div className="tl-empty" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Education;
