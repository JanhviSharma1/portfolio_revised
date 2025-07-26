import React from "react";

const HeroSection = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    fontFamily: "'Roboto', sans-serif",
    gap: "60px",
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
    backgroundColor: "#456694",
    color: "white",
    border: "none",
    cursor: "pointer",
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

        <button style={buttonStyle}>HIRE ME</button>
      </div>
    </section>
  );
};

export default HeroSection;
