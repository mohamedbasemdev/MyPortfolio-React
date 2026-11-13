import { useEffect, useRef, useState } from "react";
import Header from "./components/Header.jsx";
import Landing from "./components/Landing.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Services from "./components/Services.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") === "light"
  );
  const landingImageRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLight);
    if (isLight) {
      landingImageRef.current.classList.add("actiive");
      footerRef.current.style.color = "#000";
    }
  }, [isLight]);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  useEffect(() => {
    const reveul = document.querySelectorAll(".reveul, .reveul-img");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    reveul.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="hero">
        <Header isLight={isLight} onToggleTheme={toggleTheme} />
        <Landing imageRef={landingImageRef} />
      </div>
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer footerRef={footerRef} />
    </>
  );
}

export default App;
