import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="tooltip">
        <a
          href="https://twitter.com/yourhandle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter.svg" alt="Twitter" className="social-icon" />
        </a>
        <span className="tooltip-text">Twitter</span>
      </div>

      <div className="tooltip">
        <a
          href="https://www.linkedin.com/in/janhvi-sharma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" className="social-icon" />
        </a>
        <span className="tooltip-text">LinkedIn</span>
      </div>

      <div className="tooltip">
        <a
          href="https://github.com/JanhviSharma1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="GitHub" className="social-icon" />
        </a>
        <span className="tooltip-text">GitHub</span>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      <NavBar />
      <section id="home">
        <HeroSection />
      </section>

      <SocialSidebar />

      <section style={{ marginTop: "40px" }} id="about">
        <About />
      </section>

      <section style={{ marginTop: "70px" }} id="experience">
        <Experience />
      </section>

      <section style={{ marginTop: "70px" }} id="projects">
        <Projects />
      </section>

      <section style={{ marginTop: "70px" }} id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;
