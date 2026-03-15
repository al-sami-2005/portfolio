import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section section-container" id="contact" aria-labelledby="contact-heading">
      <div className="contact-container">
        <h2 id="contact-heading" style={{ fontSize: "3rem", marginBottom: "2rem" }}>Contact Al Sami</h2>
        <div className="contact-flex">
          <address className="contact-box" style={{ fontStyle: "normal" }}>
            <h4>Email for AI Consulting</h4>
            <p>
              <a href="mailto:self@alsami.site" data-cursor="disable">
                self@alsami.site
              </a>
            </p>
            <h4>Education</h4>
            <p>BSc in Computer Science</p>
          </address>
          <div className="contact-box">
            <h4>Developer Profiles</h4>
            <a
              href="https://github.com/al-sami-2005"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/al-sami-10as70/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/_a_sami"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/_a_samii_/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
              rel="noopener noreferrer"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <footer className="contact-box">
            <h3 style={{ fontSize: "1.5rem" }}>
              Designed and Developed <br /> by <span>Al Sami</span>
            </h3>
            <h5>
              <MdCopyright /> 2025 AI Engineer Portfolio
            </h5>
          </footer>
        </div>
      </div>
    </section>
  );
};

export default Contact;
