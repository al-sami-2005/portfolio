import Navbar from '../components/Navbar';
import WorkContent from '../components/Work';
import SEO from '../components/SEO';
import SocialIcons from '../components/SocialIcons';

export default function MlProjects() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Machine Learning Projects by Al Sami",
    "url": "https://portfoliyo.com/machine-learning-projects",
  };

  return (
    <div className="container-main child-page" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--background)' }}>
      <SEO 
        title="Machine Learning Projects | AI Data Science Portfolio | Al Sami" 
        description="Machine Learning project portfolio by Al Sami. Includes end-to-end ML pipelines, predictive modeling, data science, and deep learning implementations."
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
