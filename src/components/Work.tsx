import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Solid Starters",
    category: "Low-Code AI Platform",
    tools: "Angular, Next.js, NestJS, MongoDB, Machine Learning",
    image: "/images/Solidx.png",
    alt: "Low-code AI platform architecture and frontend built with Next.js and Angular"
  },
  {
    title: "Radix",
    category: "Intelligent E-Commerce",
    tools: "Angular, Next.js, NestJS, Headless CMS",
    image: "/images/radix.png",
    alt: "E-commerce intelligent dashboard featuring modern web architecture"
  },
  {
    title: "Bond Cancellation",
    category: "Automated Data Workflows",
    tools: "Angular, Next.js, Automation pipelines",
    image: "/images/bond.png",
    alt: "Automated import-export workflow system with data processing"
  },
  {
    title: "Sapphire",
    category: "Predictive CRM Platform",
    tools: "AngularJS, NestJS, PostgreSQL",
    image: "/images/sapphire.png",
    alt: "Enterprise predictive CRM platform with advanced data analytics"
  },
  {
    title: "Mpro",
    category: "Insurance Tech & Microservices",
    tools: "React.js, Node.js, Microservices, Python",
    image: "/images/Maxlife.png",
    alt: "Insurance technology platform built with React and scalable microservices"
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <section className="work-section" id="work" aria-labelledby="work-heading">
      <div className="work-container section-container">
        <h2 id="work-heading">
          My AI & Machine Learning <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <article className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4 style={{fontSize: "2rem"}}>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tech Stack & AI Tools</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.alt || project.title} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
