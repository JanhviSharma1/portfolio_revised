import React from "react";
import "../App.css";
import { Technologies } from "./About";

const cards = ({ title, src, tech }) => {
  <div>
    <img src={src} />
    <h3>{title}</h3>
    <Technologies>{tech}</Technologies>
  </div>;
};

const Projects = () => {
  return (
    <section id="Aboutme" className="about-section">
      <h2 className="headings">PROJECTS</h2>
      <h2 className="sub headings">WORKED ON</h2>
      <br />
      <cards
        title="PrepWise: AI Mock Interview"
        src="./Projects/AImock.png"
        tech="React"
      ></cards>
    </section>
  );
};

export default Projects;
