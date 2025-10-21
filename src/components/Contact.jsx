import "../styles/Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Let’s Connect</h2>
        <p className="contact-intro">
          Whether you want to discuss a project, ask a question, or just say hi — 
          I’d love to hear from you! Let’s build something amazing together.
        </p>

        <div className="contact-content">
          <form
            className="contact-form"
            action="https://formspree.io/f/mldrdoyy"
            method="POST"
          >
            <div className="form-group">
              <input type="text" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="contact-btn">🚀 Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p><i className="fas fa-envelope"></i> melodycollins.dev@gmail.com</p>
            <p><i className="fas fa-phone"></i> +234 812 345 6789</p>
            <p><i className="fas fa-map-marker-alt"></i> Lagos, Nigeria</p>

            <div className="social-icons">
              <a href="https://github.com/beauty090-black" target="_blank" rel="noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/melody-collins" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://twitter.com/melody_collins" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="mailto:melodycollins.dev@gmail.com">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
