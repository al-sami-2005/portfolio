import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("./pages/Home.page"));
const About = lazy(() => import("./pages/About.page"));
const Projects = lazy(() => import("./pages/Projects.page"));
const AiProjects = lazy(() => import("./pages/AiProjects.page"));
const MlProjects = lazy(() => import("./pages/MlProjects.page"));
const Blog = lazy(() => import("./pages/Blog.page"));
const Contact = lazy(() => import("./pages/Contact.page"));

const App = () => {
  return (
    <HelmetProvider>
      <Router>
        <Suspense fallback={<div style={{ height: '100vh', background: '#111' }}>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/ai-projects" element={<AiProjects />} />
            <Route path="/machine-learning-projects" element={<MlProjects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
};

export default App;
