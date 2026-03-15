import Navbar from '../components/Navbar';
import WorkContent from '../components/Work';
import SEO from '../components/SEO';
import SocialIcons from '../components/SocialIcons';

export default function Projects() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "AI & Machine Learning Projects by Al Sami",
    "url": "https://portfoliyo.com/projects",
  };

  return (
    <div className="container-main child-page" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--background)' }}>
      <SEO 
        title="AI Projects Portfolio | Al Sami" 
        description="Explore my latest AI projects, deep learning models, and machine learning applications. High-end developer portfolio showcasing modern tech stacks."
        schema={schema}
      />
      <Navbar />
      <SocialIcons />
      <main id="smooth-wrapper">
        <div id="smooth-content">
          <WorkContent />
        </div>
      </main>
    </div>
  );
}
