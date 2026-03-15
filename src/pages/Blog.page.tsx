import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
import SocialIcons from '../components/SocialIcons';
import { Link } from 'react-router-dom';

export default function Blog() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Al Sami AI & Developer Blog",
    "url": "https://portfoliyo.com/blog",
  };

  const posts = [
    {
      id: "ai-chatbot",
      title: "How I Built an AI Chatbot",
      description: "A deep dive into building conversational AI using modern NLP and Python.",
      date: "2024-05-12"
    },
    {
      id: "ml-projects",
      title: "Top Machine Learning Projects for Beginners",
      description: "Essential projects to kickstart your journey in Machine Learning and Data Science.",
      date: "2024-04-20"
    },
    {
      id: "ai-portfolio",
      title: "How to Build an AI Portfolio",
      description: "Strategies to showcase your AI and Deep Learning skills to land top engineering roles.",
      date: "2024-03-15"
    },
    {
      id: "python-vs-tensorflow",
      title: "Python vs TensorFlow for Machine Learning",
      description: "Understanding the ecosystem: when to use pure Python libraries versus TensorFlow.",
      date: "2024-02-01"
    }
  ];

  return (
    <div className="container-main child-page" style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--background)' }}>
      <SEO 
        title="AI & Machine Learning Developer Blog | Al Sami" 
        description="Read top articles and tutorials on AI development, Machine Learning architectures, deep learning, Python, and TensorFlow."
        schema={schema}
      />
      <Navbar />
      <SocialIcons />
      <main id="smooth-wrapper" style={{ padding: '4rem 10vw' }}>
        <div id="smooth-content">
          <header style={{ marginBottom: '3rem' }}>
            <h1 style={{ fontSize: '3rem', color: '#fff', marginBottom: '1rem' }}>Developer Blog</h1>
            <p style={{ fontSize: '1.2rem', color: '#a0a0a0' }}>Insights on Artificial Intelligence, Machine Learning, and Software Engineering.</p>
          </header>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {posts.map(post => (
              <article key={post.id} style={{ background: '#111', padding: '2rem', borderRadius: '12px', border: '1px solid #333' }}>
                <h2 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>{post.title}</h2>
                <time style={{ color: '#888', display: 'block', marginBottom: '1rem' }}>{post.date}</time>
                <p style={{ color: '#a0a0a0', marginBottom: '1.5rem', lineHeight: '1.6' }}>{post.description}</p>
                {/* Normally links to a dynamic post, treating as simple anchor for SEO structure */}
                <Link to={`/blog/${post.id}`} style={{ color: 'var(--primary)', textDecoration: 'none', fontWeight: 'bold' }}>Read Article →</Link>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
