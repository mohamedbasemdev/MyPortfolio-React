import { useEffect, useRef } from "react";

const navLinks = [
  { label: "Home", target: ".hero" },
  { label: "About", target: ".about" },
  { label: "Skills", target: ".skills" },
  { label: "Service", target: ".service" },
  { label: "Projects", target: ".projects" },
  { label: "Contact", target: ".contact" },
];

function Header({ isLight, onToggleTheme }) {
  const headerRef = useRef(null);
  const collapseRef = useRef(null);

  useEffect(() => {
    const header = headerRef.current;
    const collapse = collapseRef.current;

    const onShown = () => {
      header.style.borderBottom = "2px solid #3b82f6";
    };
    const onHidden = () => {
      header.style.borderBottom = "none";
    };

    collapse.addEventListener("shown.bs.collapse", onShown);
    collapse.addEventListener("hidden.bs.collapse", onHidden);
    return () => {
      collapse.removeEventListener("shown.bs.collapse", onShown);
      collapse.removeEventListener("hidden.bs.collapse", onHidden);
    };
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    const targetSection = document.querySelector(e.currentTarget.dataset.link);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="header" ref={headerRef}>
      <nav className="navbar navbar-dark navbar-expand-lg navbar-light ">
        <div className="container">
          <a className="navbar-brand fw-bold " href="#">
            Portfolio.
          </a>
          <button
            className="navbar-toggler ms-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span>
              <i className="fa-solid fa-bars"></i>
            </span>
          </button>
          <div
            className="collapse navbar-collapse me-3"
            id="navbarNav"
            ref={collapseRef}
          >
            <ul className="navbar-nav ms-auto ">
              {navLinks.map((link, index) => (
                <li
                  key={link.label}
                  className={index === 0 ? "nav-item" : "nav-item  ms-lg-3"}
                >
                  <a
                    className="nav-link text-light"
                    aria-current={index === 0 ? "page" : undefined}
                    href="#"
                    data-link={link.target}
                    onClick={handleLinkClick}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <i
            className={`fa-solid ${isLight ? "fa-sun" : "fa-moon"} dark-mode dark`}
            onClick={onToggleTheme}
          ></i>
        </div>
      </nav>
    </div>
  );
}

export default Header;
