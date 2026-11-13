const skills = [
  { name: "HTML", img: "picture/html-5-svgrepo-com.svg", imgClass: "html" },
  { name: "CSS", img: "picture/css-3-svgrepo-com.svg", imgClass: "css" },
  { name: "JavaScript", img: "picture/js-svgrepo-com.svg", imgClass: "js" },
  {
    name: "Bootstrap",
    img: "picture/bootstrap-svgrepo-com.svg",
    imgClass: "bootstrap",
  },
];

const tools = [
  { name: "Git", img: "picture/git-svgrepo-com (1).svg", imgClass: "git" },
  {
    name: "Github",
    img: "picture/github-142-svgrepo-com.svg",
    imgClass: "github",
  },
  { name: "Figma", img: "picture/figma-svgrepo-com.svg" },
  { name: "Visual Studio ", img: "picture/vs-code-svgrepo-com.svg" },
];

function BoxList({ items }) {
  return (
    <div className="row g-3">
      {items.map((item) => (
        <div className="col-lg-3 col-6" key={item.name}>
          <div className="box text-center">
            <div className="image w-100 mb-2">
              <img className={item.imgClass} src={item.img} alt="" />
            </div>
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}

function Skills() {
  return (
    <div className="skills pt-4 pb-4 t">
      <div className="container reveul">
        <div className="content">
          <h2 className="special text-center mb-4">
            <p>My Skills</p>
          </h2>
          <BoxList items={skills} />
        </div>
        <div className="info mt-5">
          <h2 className="special text-center mb-4">
            <p>My Tools</p>
          </h2>
          <BoxList items={tools} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
