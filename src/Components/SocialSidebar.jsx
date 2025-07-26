import React from "react";

const SocialSidebar = () => {
  const containerStyle = {
    position: "fixed",
    left: "14px", // X = 14px from the left
    top: "474px", // Top icon position (adjust to match your design)
    display: "flex",
    flexDirection: "column",
    gap: "12px", // spacing between icons
    zIndex: 1000,
  };

  const iconStyle = {
    width: "48px",
    height: "48px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <a
        href="https://twitter.com/yourhandle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src="/twitter.svg" alt="Twitter" style={iconStyle} />
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
  );
};

export default SocialSidebar;
