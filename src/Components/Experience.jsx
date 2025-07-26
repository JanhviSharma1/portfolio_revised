import React from "react";
import "../App.css";

const Sections = ({ title, duration, co, text }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div>
          <h3 className="experience-title">{title}</h3>
          <h4 className="experience-company">{co}</h4>
        </div>
        <div className="experience-duration">{duration}</div>
      </div>
      <p className="text">{text}</p>
    </div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="about-section">
      <h2 className="headings ">EXPERIENCE</h2>

      <Sections
        title="DATA ANALYST INTERN"
        duration="JUNE, 2025 - PRESENT"
        co="OZIBOOK"
        text="At Ozibook, I automated lead generation workflows, built performance dashboards, and scraped 1,000+ LinkedIn profiles—streamlining operations and enabling data-driven insights for high-quality client outreach."
      />

      <Sections
        title="DIGITAL MARKETING INTERN"
        duration="SEPTEMBER, 2023 - DECEMBER, 2023"
        co="IIDE"
        text="At IIDE, I wrote SEO-optimized blogs that boosted website traffic, improved search rankings, and supported content strategy through keyword research, audience targeting, and consistent performance tracking."
      />
    </section>
  );
};

export default Experience;
