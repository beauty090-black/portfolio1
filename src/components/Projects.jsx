import "../styles/Projects.css";
import { projects } from "../data/Projects";

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <h2>Featured Projects</h2>
        <p className="projects-intro">
          Here are some of my favorite projects that highlight my skills in front-end development,
          React, and UI/UX design. Each project reflects creativity, attention to detail,
          and a passion for clean, interactive interfaces.
        </p>

        <div className="projects-grid">
          {projects.map((p, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <img src={p.image} alt={p.title} />
              </div>
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="project-tags">
                  {p.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.demo} target="_blank" rel="noopener noreferrer" className="btn demo-btn">
                    Live Demo
                  </a>
                  <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn github-btn">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
