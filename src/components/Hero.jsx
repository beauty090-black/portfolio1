import { useEffect, useState } from "react";
import "../styles/Hero.css";
import myPhoto from "../assets/melody.jpg";

function Hero() {
  const roles = ["Front-End Developer", "UI/UX Designer", "React Expert"];
  const [currentRole, setCurrentRole] = useState(roles[0]);

  // 🔁 Typing Animation Effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % roles.length;
      setCurrentRole(roles[index]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="hero" id="home">
        <div className="hero-content">
          {/* Left Text */}
          <div className="hero-text">
            <h1>
              Hello, I'm <span>Melody Collins</span>
            </h1>

            <h3 className="typing-text">
              <span className="typing-role">{currentRole}</span>
            </h3>

            <p>
              I’m a passionate front-end developer who builds visually engaging
              and performance-optimized web applications. My goal is to create
              websites that not only look great but also deliver seamless user
              experiences across all devices.
            </p>

            <div className="hero-buttons">
              <a href="#contact" className="btn primary-btn">
                💌 Contact Me
              </a>
              <a
                href="/Melody_Collins_CV.pdf"
                download
                className="btn secondary-btn"
              >
                📄 Download CV
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/beauty090-black"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/melody-collins"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/melody_collins"
                target="_blank"
                rel="noopener noreferrer"
                title="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:melodycollins.dev@gmail.com" title="Email">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <div className="image-glow">
              <img
                src={myPhoto}
                alt="Melody Collins"
                className="profile-photo"
              />
            </div>
          </div>
        </div>

        <div className="scroll-down">
          <a href="#about" title="Scroll Down">
            <i className="fas fa-angle-down"></i>
          </a>
        </div>
      </section>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Melody Collins. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </>
  );
}

export default Hero;
