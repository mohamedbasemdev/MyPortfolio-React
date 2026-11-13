function ProjectCard({ project, active }) {
  return (
    <div
      className={`col-lg-4 col-md-6 card-info${active ? " active" : ""}`}
    >
      <div className="card">
        <img src={project.img} className="card-img-top" alt="..." />
        <div className="card-body  ">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text ">{project.text}</p>
          <div className="buttons d-flex justify-content-between">
            <a href={project.demo}>
              <div className="btn main-btn d-inline-flex align-items-center justify-content-around first work">
                Live Demo
              </div>
            </a>
            <a href={project.github}>
              <div className="btn main-btn second github">
                <i className="fa-brands fa-github text-light"></i> Github
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
