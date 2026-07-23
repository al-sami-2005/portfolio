import React from 'react';
import { useSiteData } from '../context/SiteDataContext';

function About() {
  const { data } = useSiteData();
  const { about } = data;
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          {/* Image */}
          <div className="about-img-wrap reveal">
            <div className="about-img-frame">
              <img
                src={about.photo}
                alt={about.photoAlt}
                className="about-photo"
                draggable={false}
              />
            </div>
            <div className="about-img-badge">
              <div className="num">{about.badge.num}</div>
              <div className="lbl">{about.badge.label}</div>
            </div>
          </div>

          {/* Text */}
          <div className="reveal rd1">
            <p className="section-label">{about.sectionLabel}</p>
            <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
              {about.title} <span className="text-accent">{about.titleAccent}</span> {about.titleEnd}
            </h2>
            {about.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            <div className="about-stats">
              {about.stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
