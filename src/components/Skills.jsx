import "../styles/Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <h2>My Skills</h2>
        <p className="skills-intro">
          Over the years, I’ve developed a strong foundation in web technologies, focusing on
          crafting responsive, accessible, and visually appealing user experiences.
        </p>

        <div className="skills-grid">
          {/* ===== Front-End Development ===== */}
          <div className="skills-category">
            <h3>💻 Front-End Development</h3>
            <div className="skill">
              <span>HTML5</span>
              <div className="bar"><div className="progress" style={{ width: "95%" }}></div></div>
            </div>
            <div className="skill">
              <span>CSS3 / Tailwind</span>
              <div className="bar"><div className="progress" style={{ width: "90%" }}></div></div>
            </div>
            <div className="skill">
              <span>JavaScript (ES6+)</span>
              <div className="bar"><div className="progress" style={{ width: "88%" }}></div></div>
            </div>
            <div className="skill">
              <span>React.js</span>
              <div className="bar"><div className="progress" style={{ width: "85%" }}></div></div>
            </div>
          </div>

          {/* ===== Tools & Backend ===== */}
          <div className="skills-category">
            <h3>⚙️ Tools & Backend</h3>
            <div className="skill">
              <span>Firebase</span>
              <div className="bar"><div className="progress" style={{ width: "75%" }}></div></div>
            </div>
            <div className="skill">
              <span>Git / GitHub</span>
              <div className="bar"><div className="progress" style={{ width: "90%" }}></div></div>
            </div>
            <div className="skill">
              <span>VS Code</span>
              <div className="bar"><div className="progress" style={{ width: "85%" }}></div></div>
            </div>
          </div>

          {/* ===== Soft Skills ===== */}
          <div className="skills-category">
            <h3>🧠 Soft Skills</h3>
            <div className="skill">
              <span>Communication</span>
              <div className="bar"><div className="progress" style={{ width: "92%" }}></div></div>
            </div>
            <div className="skill">
              <span>Team Collaboration</span>
              <div className="bar"><div className="progress" style={{ width: "88%" }}></div></div>
            </div>
            <div className="skill">
              <span>Problem Solving</span>
              <div className="bar"><div className="progress" style={{ width: "94%" }}></div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
