import { useEffect, useRef, useState } from "react";
import { moreProjects as projects } from "./data/projects.js";
import ProjectCard from "./components/ProjectCard.jsx";
import Footer from "./components/Footer.jsx";

function AllProjects() {
  const [isLight, setIsLight] = useState(
    () => localStorage.getItem("theme") === "light"
  );
  const footerRef = useRef(null);

  useEffect(() => {
    document.body.classList.toggle("light-mode", isLight);
    footerRef.current.style.color = isLight ? "#000" : "";
  }, [isLight]);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  return (
    <div className="all-projects-page">
      <div className="hero">
        <div className="header">
          <nav className="navbar navbar-dark navbar-expand-lg navbar-light ">
            <div className="container">
              <a className="navbar-brand fw-bold " href="index.html">
                Portfolio.
              </a>
              <div className="ms-auto d-flex align-items-center gap-3">
                <a className="nav-link" href="index.html">
                  <i className="fa-solid fa-arrow-left"></i> Back Home
                </a>
                <i
                  className={`fa-solid ${
                    isLight ? "fa-sun" : "fa-moon"
                  } dark-mode dark`}
                  onClick={toggleTheme}
                ></i>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className="projects all-projects pt-4 pb-4">
        <div className="container">
          <h2 className="special text-center mb-4">
            <p>More Projects</p>
          </h2>
          <div className="row g-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>
      <Footer footerRef={footerRef} />
    </div>
  );
}

export default AllProjects;
