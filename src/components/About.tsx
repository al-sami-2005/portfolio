import "./styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-me">
        <h2 id="about-heading" className="title">About Me & AI Expertise</h2>
        <p className="para">
          Hi, I'm Al Sami, a passionate <strong>AI and Software Development</strong> enthusiast currently studying at Daffodil International University. I specialize in building intelligent systems, machine learning models, and modern software applications that solve complex real-world problems.
          <br /><br />
          I enjoy working with <strong>Artificial Intelligence, Deep Learning</strong>, and scalable software engineering. I continuously expand my expertise in technologies like <em>Python, TensorFlow, PyTorch</em>, and React to build impactful digital solutions.
          <br /><br />
          My goal is to advance as a professional AI Engineer and Senior Developer, creating innovative <strong>Machine Learning</strong> architectures that make a significant difference.
        </p>
      </div>
    </section>
  );
};

export default About;
