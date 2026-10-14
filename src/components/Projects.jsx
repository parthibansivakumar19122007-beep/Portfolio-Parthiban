const projects = [
  {
    title: "AIML Attendance System",
    description:
      "A college attendance management project for organizing student attendance and faculty sessions.",
    technologies: ["Python", "Flask", "MySQL"],
    link: "https://github.com/parthibansivakumar19122007-beep/aiml-attendence-1",
  },
  {
    title: "Personal Portfolio",
    description:
      "A responsive website showcasing my introduction, technical skills, and development projects.",
    technologies: ["React", "Vite", "CSS"],
    link: "https://github.com/parthibansivakumar19122007-beep/Portfolio-Parthiban",
  },
];

function Projects() {
  return (
    <section id="projects" className="section section-container">
      <p className="section-label">03 — MY WORK</p>

      <h2 className="section-title">
        Featured <span className="gradient-text">Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="skill-tags">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View Project ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;