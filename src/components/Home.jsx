import profileImg from "../assets/profile.jpg";
import { SiPython, SiReact } from "react-icons/si";
import { FaBrain } from "react-icons/fa6";

function Home() {
  return (
    <section id="home" className="hero section-container">
      <div className="hero-content">
        <p className="eyebrow">ASPIRING AI/ML ENGINEER</p>

        <h1>
          Hi, I'm <span className="gradient-text">Parthiban S.</span>
        </h1>

        <h2>
          Building the Future with
          <br />
          <span className="gradient-text">Artificial Intelligence.</span>
        </h2>

        <p className="hero-description">
          I'm a Computer Science and Engineering student specializing
          in AI and Machine Learning. I enjoy programming, developing
          projects, and solving real-world problems.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            Explore My Projects ↗
          </a>

          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://github.com/parthibansivakumar19122007-beep"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/parthiban-s-5978b4419/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="profile-card">
          <div className="profile-avatar-container">
            <img src={profileImg} alt="Parthiban S" className="profile-avatar" />
          </div>

          <h3>PARTHIBAN S</h3>
          <p>Computer Science | AI/ML</p>

          <hr />

          <div className="profile-tags">
            <span className="profile-tag-badge">
              <SiPython style={{ color: "#3776AB" }} /> Python
            </span>
            <span className="profile-tag-badge">
              <FaBrain style={{ color: "#A855F7" }} /> AI/ML
            </span>
            <span className="profile-tag-badge">
              <SiReact style={{ color: "#61DAFB" }} /> React
            </span>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator">
        SCROLL TO EXPLORE ↓
      </a>
    </section>
  );
}

export default Home;