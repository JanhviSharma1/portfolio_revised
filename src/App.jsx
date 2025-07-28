import React from "react";
import "./App.css";
import NavBar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import SocialSidebar from "./Components/SocialSidebar";

function App() {
  return (
    <div className="custom-scrollbar">
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
    </div>
  );
}

export default App;
