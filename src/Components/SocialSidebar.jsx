import React from "react";

const SocialSidebar = () => {
  const containerStyle = {
    position: "fixed",
    left: "20px",
    bottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 1000,
  };

  const iconStyle = {
    width: "42px",
    height: "42px",
  };

  const mailContainerStyle = {
    position: "fixed",
    right: "-80px",
    top: "50%",
    transform: "rotate(90deg) translateY(-50%)",
    transformOrigin: "right center",
    zIndex: 1000,
  };

  const mailStyle = {
    fontSize: "16px",
    color: "#CAE5FF",
    fontFamily: "'Abhaya Libre', serif",
    fontWeight: 600,
    fontStyle: "normal",
    whiteSpace: "nowrap",
  };

  return (
    <>
      <div style={containerStyle}>
        <a
          href="https://x.com/sjanhvi14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/twitter.svg" alt="Twitter" style={iconStyle} />
        </a>
        <a
          href="https://leetcode.com/u/JanhviShxrma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/leetcode.svg" alt="Leetcode" style={iconStyle} />
        </a>
        <a
          href="https://www.linkedin.com/in/janhvi-sharma/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/linkedin.svg" alt="LinkedIn" style={iconStyle} />
        </a>
        <a
          href="https://github.com/JanhviSharma1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/github.svg" alt="GitHub" style={iconStyle} />
        </a>
      </div>

      <div style={mailContainerStyle}>
        <p style={mailStyle}>sjanhvi14@gmail.com</p>
      </div>
    </>
  );
};

export default SocialSidebar;
