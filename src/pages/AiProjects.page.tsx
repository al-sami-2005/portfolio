import Navbar from '../components/Navbar';
import WorkContent from '../components/Work';
import SEO from '../components/SEO';
import SocialIcons from '../components/SocialIcons';

export default function AiProjects() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Artificial Intelligence Projects by Al Sami",
    "url": "https://portfoliyo.com/ai-projects",
  };

  return (
    <div className="container-main child-page" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--background)' }}>
      <SEO 
        title="AI Engineer Portfolio | Deep Learning & AI Projects by Al Sami" 
        description="View my specialized Artificial Intelligence portfolio. Featuring generative AI, LLMs, computer vision, and advanced AI engineering projects."
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
