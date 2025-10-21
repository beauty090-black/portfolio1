import "../styles/About.css";
import myPhoto from "../assets/harmony.jpg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image">
          <img src={myPhoto} alt="Melody Collins" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
          <p>
            I'm <strong>Melody Collins</strong>, a creative and results-driven{" "}
            <strong>Front-End Developer</strong> with a strong focus on building
            visually appealing and user-friendly web applications. I love turning
            design ideas into clean, responsive, and interactive digital products
            using <strong>React</strong> and modern front-end technologies.
          </p>

          <p>
            My journey into web development began with curiosity about how
            websites work — and it quickly became a passion. Since then, I’ve honed my
            skills in <strong>UI/UX design</strong>, <strong>JavaScript</strong>,
            and <strong>performance optimization</strong> to craft beautiful and efficient interfaces.
          </p>

          <div className="about-highlights">
            <div className="highlight">
              <i className="fas fa-code"></i>
              <span>3+ Years of Experience</span>
            </div>
            <div className="highlight">
              <i className="fas fa-laptop-code"></i>
              <span>50+ Projects Completed</span>
            </div>
            <div className="highlight">
              <i className="fas fa-users"></i>
              <span>Worked with Global Teams</span>
            </div>
          </div>

          <a href="#contact" className="btn about-btn">Let’s Work Together</a>
        </div>
      </div>
    </section>
  );
}
