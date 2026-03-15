import { lazy, Suspense } from "react";
import { LoadingProvider } from "../context/LoadingProvider";
import SEO from "../components/SEO";

const CharacterModel = lazy(() => import("../components/Character"));
const MainContainer = lazy(() => import("../components/MainContainer"));

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Al Sami",
    "jobTitle": "AI & Machine Learning Developer",
    "url": "https://portfoliyo.com", // Replace with real URL
    "sameAs": [
      "https://github.com/alsami", // Replace with real URL
      "https://linkedin.com/in/alsami" // Replace with real URL
    ],
    "description": "AI & Machine Learning Developer specializing in intelligent systems, deep learning, and modern software engineering.",
  };

  return (
    <>
      <SEO 
        title="Al Sami | AI & Machine Learning Developer Portfolio" 
        description="AI & Machine Learning Developer specializing in intelligent systems, deep learning, and modern software engineering. Explore AI projects, skills, and research by Al Sami."
        schema={schema}
      />
      <LoadingProvider>
        <Suspense>
          <MainContainer>
            <Suspense>
              <CharacterModel />
            </Suspense>
          </MainContainer>
        </Suspense>
      </LoadingProvider>
    </>
  );
}
