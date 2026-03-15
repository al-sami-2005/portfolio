import Navbar from '../components/Navbar';
import ContactContent from '../components/Contact';
import SEO from '../components/SEO';
import SocialIcons from '../components/SocialIcons';

export default function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Al Sami",
    "url": "https://portfoliyo.com/contact",
  };

  return (
    <div className="container-main child-page" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--background)' }}>
      <SEO 
        title="Contact Al Sami | Hire an AI Developer" 
        description="Get in touch with Al Sami for AI development, Machine Learning consulting, and deep learning engineering opportunities."
        schema={schema}
      />
      <Navbar />
      <SocialIcons />
      <main id="smooth-wrapper">
        <div id="smooth-content">
          <ContactContent />
        </div>
      </main>
    </div>
  );
}
