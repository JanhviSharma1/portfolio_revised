import React from "react";

const HeroSection = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "40px",
    fontFamily: "'Roboto', sans-serif",
    gap: "60px", // space between image and text/button
  };

  const textContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // ✅ left-align both paragraph & button
    textAlign: "left",
  };

  const paragraphStyle = {
    fontSize: "40px",
    lineHeight: "1.6",
    color: "#CAE5FF",
    marginBottom: "20px", // space between paragraph and button
  };

  const imageStyle = {
    maxWidth: "443px",
    height: "427px",
    borderRadius: "228.5px",
    objectFit: "cover",
  };

  const buttonStyle = {
    height: "46px",
    width: "200px",
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
          I’m <i>Janhvi</i>, a full stack web developer and aspiring Data
          Scientist
        </p>
        <button style={buttonStyle}>HIRE ME</button>
      </div>
    </section>
  );
};

export default HeroSection;
