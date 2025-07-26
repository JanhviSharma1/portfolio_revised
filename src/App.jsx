import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";

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
      <HeroSection />
      <SocialSidebar />
      <About />
    </>
  );
}

export default App;
