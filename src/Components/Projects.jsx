import React from "react";
import "../App.css";
import { Technologies } from "./About";

const Cards = ({ title, src, tech }) => {
  return (
    <div className="project-card">
      <img src={src} alt={title} className="project-img" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <div className="project-tech-stack">
          {tech.map((t, index) => (
            <Technologies key={index} name={t.name} iconadd={t.icon} />
          ))}
        </div>
        <img className="external" src="./external.svg" alt="External Link" />
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="about-section">
      <h2 className="headings">PROJECTS</h2>
      <h2 className="sub headings">WORKED ON</h2>
      <br />
      <Cards
        title="PrepWise: AI Mock Interview"
        src="./Projects/AImock.png"
        tech={[
          { name: "Next.js", icon: "./skills/nextjs.svg" },
          { name: "Node.js", icon: "./skills/nodejs.svg" },
          { name: "VAPI", icon: "./skills/vapi.svg" },
          { name: "Shadcn UI", icon: "./skills/shadcn.png" },
        ]}
      />
      <button className="more">
        <img className="more " src="./more.svg" alt="More Projects" />
      </button>
    </section>
  );
};

export default Projects;
