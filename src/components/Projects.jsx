import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { useSiteData } from '../context/SiteDataContext';

function Projects() {
  const { data } = useSiteData();
  const { projects } = data;
  return (
    <section className="section" id="projects" style={{ background: 'var(--bg-2)' }}>
      <div className="container">
        <p className="section-label reveal">{projects.sectionLabel}</p>
        <h2 className="section-title reveal rd1" style={{ marginBottom: '0.4rem' }}>
          {projects.title} <span className="text-accent">{projects.titleAccent}</span>
        </h2>
        <p
          style={{
            color: 'var(--text-3)', fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem', letterSpacing: '0.1em', marginBottom: '2.5rem',
          }}
          className="reveal rd2"
        >
          {projects.entries.length} project{projects.entries.length !== 1 ? 's' : ''} · swipe to explore →
        </p>

        <div className="projects-scroll reveal rd2">
          {projects.entries.map(p => (
            <div className="project-card" key={p.num}>
              <div className="project-img-area">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="project-overlay" />
                <span className="project-num">Project {p.num}</span>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="GitHub">
                    <FiGithub />
                  </a>
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link-btn" title="Live">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>
                <div className="tech-row">
                  {p.tech.map(t => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
