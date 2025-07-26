import React, { useState } from "react";

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    position: "relative",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    paddingBottom: "160px",
    fontFamily: "'Roboto', sans-serif",
    gap: "60px",
    width: "1310px",
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    textAlign: "left",
  };

  const paragraphStyle = {
    fontSize: "40px",
    lineHeight: "1.6",
    color: "#CAE5FF",
    marginBottom: "20px",
    fontFamily: "'Abhaya Libre', serif",
    fontWeight: 600,
    fontStyle: "normal",
  };

  const imageStyle = {
    maxWidth: "443px",
    height: "427px",
    borderRadius: "228.5px",
    objectFit: "cover",
  };

  const buttonStyle = {
    height: "50px",
    width: "150px",
    fontSize: "30px",
    backgroundColor: isHovered ? "#2e4b70" : "#456694",
    color: "white",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  };

  const statsBoxStyle = {
    position: "absolute",
    right: "40px",
    bottom: "40px",
    fontFamily: "'Roboto', sans-serif",
    color: "white",
    textAlign: "right",
  };

  const statItemStyle = {
    marginBottom: "20px",
  };

  const numberStyle = {
    color: "#5C84B4",
    fontSize: "34px",
    fontFamily: "'Agdasima', sans-serif",
    fontWeight: 700,
    fontStyle: "normal",
  };

  const labelStyle = {
    fontSize: "18px",
    marginTop: "4px",
    fontFamily: "'Abhaya Libre', serif",
    fontWeight: 600,
    fontStyle: "normal",
  };

  return (
    <section style={containerStyle}>
      <img src="/profile.jpg" alt="Profile or project" style={imageStyle} />

      <div style={textContainerStyle}>
        <p style={paragraphStyle}>
          I’m{" "}
          <span
            style={{
              fontFamily: "'Arapey', serif",
              fontWeight: 400,
              fontStyle: "italic",
            }}
          >
            Janhvi
          </span>
          , a full stack web developer and aspiring Data Scientist
        </p>

        <button
          style={buttonStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          HIRE ME
        </button>
      </div>

      <div style={statsBoxStyle}>
        <div style={statItemStyle}>
          <div style={numberStyle}>+6 MONTHS</div>
          <div style={labelStyle}>Experience</div>
        </div>
        <div style={statItemStyle}>
          <div style={numberStyle}>+7</div>
          <div style={labelStyle}>Projects Completed</div>
        </div>
        <div style={statItemStyle}>
          <div style={numberStyle}>+50 HOURS</div>
          <div style={labelStyle}>Hours Worked</div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
