import React from "react";

const NavBar = () => {
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: "rgba(253, 253, 253, 0.4)",
    borderRadius: "30px",
    padding: "10px 10px",
    display: "flex",
    gap: "70px",
    justifyContent: "center",
    alignItems: "center",
    color: "#CAE5FF",
    width: "1020px",
    maxWidth: "1020px",
    height: "30px",
    margin: "10px auto",
    fontSize: "20px",
    fontFamily: "'Abhaya Libre', serif",
    fontWeight: 600,
    fontStyle: "normal",
    backdropFilter: "blur(8px)",
  };

  const linkStyle = {
    color: "#CAE5FF",
    textDecoration: "none",
    transition: "color 0.3s ease",
  };

  const linkHoverStyle = {
    color: "#ffffff",
  };

  return (
    <nav style={navStyle}>
      {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.color = linkHoverStyle.color)}
          onMouseLeave={(e) => (e.target.style.color = linkStyle.color)}
        >
          {item}
        </a>
      ))}
    </nav>
  );
};

export default NavBar;
