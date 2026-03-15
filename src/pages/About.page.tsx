import Navbar from '../components/Navbar';
import AboutContent from '../components/About';
import SEO from '../components/SEO';
import SocialIcons from '../components/SocialIcons';

export default function About() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Al Sami",
    "jobTitle": "AI & Machine Learning Developer",
    "url": "https://portfoliyo.com/about", // Replace with real URL
  };

  return (
    <div className="container-main child-page" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--background)' }}>
      <SEO 
        title="About Al Sami | Machine Learning Engineer" 
        description="Learn more about Al Sami, a dedicated Machine Learning and AI Developer crafting modern, intelligent systems and state of the art deep learning projects."
        schema={schema}
      />
      <Navbar />
      <SocialIcons />
      <main id="smooth-wrapper">
        <div id="smooth-content">
          <AboutContent />
        </div>
      </main>
    </div>
  );
}
