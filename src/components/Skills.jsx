import React from 'react';
import { useSiteData } from '../context/SiteDataContext';

function Skills() {
  const { data } = useSiteData();
  const { skills } = data;
  return (
    <section className="section" id="skills">
      <div className="container">
        <p className="section-label reveal">{skills.sectionLabel}</p>
        <h2 className="section-title reveal rd1" style={{ marginBottom: '0.4rem' }}>
          {skills.title} <span className="text-accent">{skills.titleAccent}</span>
        </h2>
        <p
          style={{
            color: 'var(--text-3)', fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '0.3rem',
          }}
          className="reveal rd2"
        >
          {skills.entries.length} technologies · hover to reveal proficiency
        </p>

        <div className="skills-grid">
          {skills.entries.map((s, i) => (
            <div
              key={s.name}
              className="skill-item reveal"
              style={{ transitionDelay: `${Math.min(i * 0.04, 0.6)}s` }}
            >
              <div className="skill-orb" data-pct={s.pct}>
                <span className="skill-orb-icon">{s.icon}</span>
              </div>
              <span className="skill-name">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
