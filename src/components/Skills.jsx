import {
  SiPython,
  SiC,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiVite,
  SiGit,
  SiGithub,
  SiMysql,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaDatabase, FaBrain, FaRobot, FaChartLine } from "react-icons/fa6";

const skills = [
  {
    title: "Programming",
    items: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "SQL", icon: FaDatabase, color: "#00758F" },
    ],
  },
  {
    title: "Web Development",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Vite", icon: SiVite, color: "#BD34FE" },
    ],
  },
  {
    title: "AI & Machine Learning",
    items: [
      { name: "Artificial Intelligence", icon: FaBrain, color: "#A855F7" },
      { name: "Machine Learning", icon: FaRobot, color: "#38BDF8" },
      { name: "Data Science", icon: FaChartLine, color: "#34D399" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section section-container">
      <p className="section-label">02 — MY SKILLS</p>

      <h2 className="section-title">
        My <span className="gradient-text">Skills</span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
            <h3>{skill.title}</h3>

            <div className="skill-tags">
              {skill.items.map((item) => {
                const IconComponent = item.icon;
                return (
                  <span className="skill-badge" key={item.name}>
                    <IconComponent
                      className="skill-icon"
                      style={{ color: item.color }}
                    />
                    <span>{item.name}</span>
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;