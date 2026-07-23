import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin, FiInstagram, FiMail, FiArrowRight, FiPhone } from 'react-icons/fi';
import { useSiteData } from '../context/SiteDataContext';

function getIcon(label) {
  switch (label.toLowerCase()) {
    case 'twitter': return <FiTwitter />;
    case 'linkedin': return <FiLinkedin />;
    case 'instagram': return <FiInstagram />;
    case 'github':
    default:
      return <FiGithub />;
  }
}

function Footer() {
  const { data } = useSiteData();
  const { footer } = data;
  return (
    <>
      {/* Social sidebar */}
      <div className="sidebar-social">
        {footer.socials.map(s => (
          <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
            className="sidebar-link" aria-label={s.label}>
            {getIcon(s.label)}
          </a>
        ))}
      </div>

      <div className="sidebar-email">
        <a href={`mailto:${footer.email}`} className="sidebar-email-link">
          {footer.email}
        </a>
      </div>

      {/* Contact section */}
      <footer className="footer-section" id="contact">
        <div className="footer-bg-text" aria-hidden="true">{footer.bgText}</div>

        <div className="footer-inner">
          <p className="footer-eyebrow">{footer.eyebrow}</p>

          <h2 className="footer-h">
            {footer.title} <span className="text-accent">{footer.titleAccent}</span>
          </h2>

          <p className="footer-sub">
            {footer.subtitle}
          </p>

          <div className="footer-contact-actions">
            <a href={`mailto:${footer.email}`} className="footer-email-btn">
              <FiMail />
              {footer.ctaText}
              <FiArrowRight />
            </a>
          </div>

          <div className="footer-phones">
            {footer.phones.map((phone, i) => (
              <React.Fragment key={i}>
                <a href={phone.href} className="footer-phone-btn">
                  <FiPhone />
                  {phone.number}
                </a>
                {i < footer.phones.length - 1 && <span className="footer-phone-divider" />}
              </React.Fragment>
            ))}
          </div>

          <div className="footer-socials">
            {footer.socials.map(s => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer"
                className="footer-social" aria-label={s.label}>
                {getIcon(s.label)}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-bottom-txt">© {new Date().getFullYear()} {footer.copyright}</span>
          <span className="footer-bottom-txt">{footer.builtWith}</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
