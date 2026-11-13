function About() {
  return (
    <div className="about pt-4 pb-4">
      <div className="container reveul d-flex align-items-start justify-content-between gap-5">
        <img className="d-none d-md-block" src="picture/photo.jpg" alt="" />
        <div className="about-me w-md-75 w-100 text-light">
          <h2 className="mb-lg-4 mb-md-2 pb-3">About Me</h2>
          <p className="mb-lg-4 mb-md-3">
            I specialize in building websites using HTML, CSS, JavaScript, and
            Bootstrap, and I'm currently expanding my skills with React to
            develop dynamic and scalable web applications.
          </p>
          <div className="buttons">
            <a href="#projects">
              <div className="btn main-btn d-inline-flex align-items-center justify-content-around first work">
                <i className="fa-solid fa-briefcase text-light"></i> View My Work
              </div>
            </a>
            <a href="https://github.com/mohamedbasemdev">
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

export default About;
