import { useState } from "react";
import { featuredProjects as projects } from "../data/projects.js";
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
  const [current, setCurrent] = useState(() => {
    const mainCard = localStorage.getItem("card-item");
    return mainCard && +mainCard < projects.length ? +mainCard : 0;
  });

  function showCard(index) {
    setCurrent(index);
    localStorage.setItem("card-item", index);
  }

  const next = () => {
    let index = current + 1;
    if (index >= projects.length) index = 0;
    showCard(index);
  };

  const prev = () => {
    let index = current - 1;
    if (index < 0) index = projects.length - 1;
    showCard(index);
  };

  return (
    <div id="projects" className="projects pt-4 pb-4 ">
      <div className="container reveul">
        <h2 className="special text-center mb-4">
          <p>My Projects</p>
        </h2>
        <div className="row g-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              active={index === current}
            />
          ))}
          <div className="arrow">
            <i className="fa-solid fa-angle-left prev" onClick={prev}></i>
            <i className="fa-solid fa-angle-right next" onClick={next}></i>
          </div>
        </div>
        <div className="text-center mt-4">
          <a href="projects.html">
            <div className="btn main-btn first">More Projects</div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
