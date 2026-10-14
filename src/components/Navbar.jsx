import { useState, useEffect } from "react";
import { FaLinkedin, FaGithub, FaBars, FaXmark } from "react-icons/fa6";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <a href="#home" className="logo" aria-label="Parthiban Portfolio">
          <span className="logo-badge">PS</span>
          <span className="logo-title">
            Parthiban<span className="logo-dot">.</span>
          </span>
        </a>

        <div className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.label}
                href={item.href}
                className={isActive ? "active-link" : ""}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            );
          })}

          <div className="nav-mobile-socials">
            <a
              href="https://github.com/parthibansivakumar19122007-beep"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/parthiban-s-5978b4419/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-social-icons">
            <a
              href="https://github.com/parthibansivakumar19122007-beep"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="nav-icon-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/parthiban-s-5978b4419/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="nav-icon-link"
            >
              <FaLinkedin />
            </a>
          </div>

          <a href="#contact" className="nav-cta-btn">
            Let's Talk
          </a>

          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;