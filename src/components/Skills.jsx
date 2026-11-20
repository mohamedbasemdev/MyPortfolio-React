const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const allSkills = [
  { name: "HTML", img: "picture/html-5-svgrepo-com.svg", imgClass: "html" },
  { name: "CSS", img: "picture/css-3-svgrepo-com.svg", imgClass: "css" },
  { name: "JavaScript", img: "picture/js-svgrepo-com.svg", imgClass: "js" },
  {
    name: "Bootstrap",
    img: "picture/bootstrap-svgrepo-com.svg",
    imgClass: "bootstrap",
  },
  { name: "React", img: `${CDN}/react/react-original.svg`, imgClass: "react" },
  {
    name: "TypeScript",
    img: `${CDN}/typescript/typescript-original.svg`,
    imgClass: "typescript",
  },
  {
    name: "Tailwind",
    img: `${CDN}/tailwindcss/tailwindcss-original.svg`,
    imgClass: "tailwind",
  },
  { name: "Next.js", img: `${CDN}/nextjs/nextjs-original.svg`, imgClass: "nextjs" },
  { name: "Git", img: "picture/git-svgrepo-com (1).svg", imgClass: "git" },
  {
    name: "Github",
    img: "picture/github-142-svgrepo-com.svg",
    imgClass: "github",
  },
  { name: "Figma", img: "picture/figma-svgrepo-com.svg" },
  { name: "Visual Studio", img: "picture/vs-code-svgrepo-com.svg" },
];

const loopSkills = [...allSkills, ...allSkills, ...allSkills];

function Skills() {
  return (
    <div className="skills pt-4 pb-4 t">
      <div className="container reveul">
        <div className="content">
          <h2 className="special text-center mb-4">
            <p>My Skills</p>
          </h2>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {loopSkills.map((item, index) => (
              <div
                className="marquee-item"
                key={index}
                aria-hidden={index >= allSkills.length ? "true" : undefined}
              >
                <div className="box text-center">
                  <div className="image w-100 mb-2">
                    <img className={item.imgClass} src={item.img} alt="" />
                  </div>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;