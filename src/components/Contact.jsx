const currentYear = new Date().getFullYear();

function Contact() {
  return (
    <section id="contact" className="section section-container">
      <div className="contact-card">
        <p className="section-label">04 — CONTACT</p>

        <h2 className="section-title">
          Let's Build Something
          <br />
          <span className="gradient-text">Amazing Together.</span>
        </h2>

        <p>
          Interested in connecting, collaborating, or discussing
          AI and software development?
        </p>

        <div className="contact-buttons">
          <a
            href="https://www.linkedin.com/in/parthiban-s-5978b4419/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Connect on LinkedIn ↗
          </a>

          <a
            href="https://github.com/parthibansivakumar19122007-beep"
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Connect on GitHub ↗
          </a>
        </div>
      </div>

      <footer className="footer">
        <p>
          © {currentYear} Parthiban S.
        </p>

        <a href="#home">Back to Top ↑</a>
      </footer>
    </section>
  );
}

export default Contact;