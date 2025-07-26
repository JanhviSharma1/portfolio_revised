import React from "react";

const NavBar = () => {
  const navStyle = {
    backgroundColor: "rgba(253, 253, 253, 0.4)",
    borderRadius: "10px",
    padding: "10px 10px",
    display: "flex",
    gap: "70px",
    justifyContent: "center",
    alignItems: "center",
    color: "#CAE5FF",
    width: "1020px",
    height: "20px",
    margin: "10px auto",
    fontSize: "20px",
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
      {["Home", "About me", "Experience", "Projects", "Contact"].map((item) => (
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
