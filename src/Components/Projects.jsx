import React from "react";
import "../App.css";
import { Technologies } from "./About";

const Cards = ({ title, src, tech, externalLink }) => {
  return (
    <div className="project-card">
      <img src={src} alt={title} className="project-img" />
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <br />
        <div className="project-tech-stack" style={{ fontSize: "1px" }}>
          {tech.map((t, index) => (
            <Technologies
              key={index}
              name={t.name}
              iconadd={t.icon}
              variant="card"
            />
          ))}
        </div>
      </div>
      <a href={externalLink} target="_blank" rel="noopener noreferrer">
        <img className="external" src="./external.svg" alt="External Link" />
      </a>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="about-section">
      <h2 className="headings">PROJECTS</h2>
      <h2 className="sub headings">WORKED ON</h2>
      <br />

      <div className="project-card-container">
        <Cards
          title="PrepWise: AI Mock Interviewer"
          src="./Projects/AImock.png"
          tech={[
            { name: "Next.js", icon: "./skills/nextjs.svg" },
            { name: "Node.js", icon: "./skills/nodejs.svg" },
            { name: "VAPI", icon: "./skills/vapi.svg" },
            { name: "Shadcn UI", icon: "./skills/shadcn.png" },
            { name: "Firebase", icon: "./skills/firebase.svg" },
          ]}
          externalLink="https://github.com/JanhviSharma1/ai-mock-interviews"
        />

        <Cards
          title="Customer Churn Prediction"
          src="./Projects/churn-prediction.png"
          tech={[
            { name: "SSMS", icon: "./skills/ssms.svg" },
            { name: "PowerBI", icon: "./skills/powerbi.svg" },
            { name: "Scikit-Learn", icon: "./skills/sklearn.png" },
            { name: "Pandas", icon: "./skills/pandas.svg" },
            { name: "Matplotlib", icon: "./skills/matplotlib.png" },
          ]}
          externalLink="https://github.com/JanhviSharma1/customer-churn-prediction"
        />

        <Cards
          title="Twitter Sentiment Analysis"
          src="./Projects/sentiment-analysis.jpg"
          tech={[
            { name: "Python", icon: "./skills/python.svg" },
            { name: "Scikit-Learn", icon: "./skills/sklearn.png" },
            { name: "Numpy", icon: "./skills/numpy.svg" },
            { name: "Pandas", icon: "./skills/pandas.svg" },
            { name: "Matplotlib", icon: "./skills/matplotlib.png" },
          ]}
          externalLink="https://github.com/JanhviSharma1/twitter-sentiment-analysis"
        />

        <div className="more-container">
          <a
            href="https://github.com/JanhviSharma1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="more">
              <img src="./more.svg" alt="More" width={24} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
