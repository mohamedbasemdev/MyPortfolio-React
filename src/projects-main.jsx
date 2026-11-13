import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AllProjects from "./AllProjects.jsx";
import "./css/all.min.css";
import "./css/bootstrap.min.css";
import "./css/styl.css";
import "./css/all-projects.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AllProjects />
  </StrictMode>
);
