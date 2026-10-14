import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return (
    <div className="portfolio-app">
      {/* Animated Aurora Orbs and Background Mesh */}
      <div className="bg-canvas" aria-hidden="true">
        <div className="bg-grid-pattern"></div>
        <div className="aurora-orb orb-1"></div>
        <div className="aurora-orb orb-2"></div>
        <div className="aurora-orb orb-3"></div>
        <div className="aurora-orb orb-4"></div>
      </div>

      <Navbar />

      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;