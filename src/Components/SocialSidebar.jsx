import React from "react";

const SocialSidebar = () => {
  const containerStyle = {
    position: "fixed",
    left: "14px",
    top: "474px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    zIndex: 1000,
  };

  const iconStyle = {
    width: "48px",
    height: "48px",
  };

  const mailContainerStyle = {
    position: "fixed",
    right: "14px",
    top: "474px",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    width: "300px",
    height: "48px",
    paddingRight: "14px",
  };

  const mailStyle = {
    fontSize: "20px",
    color: "#CAE5FF",
    fontFamily: "'Abhaya Libre', serif",
    fontWeight: 600,
    fontStyle: "normal",
    textAlign: "right",
    whiteSpace: "nowrap",
  };

  return (
    <>
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

      <div style={mailContainerStyle}>
        <p style={mailStyle}>sjanhvi14@gmail.com</p>
      </div>
    </>
  );
};

export default SocialSidebar;
