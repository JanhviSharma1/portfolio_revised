import React from "react";

const StatsBox = () => {
  const containerStyle = {
    position: "fixed",
    bottom: "40px",
    right: "40px",
    fontFamily: "'Roboto', sans-serif",
    color: "white",
    textAlign: "right",
    zIndex: 1000,
  };

  const statItemStyle = {
    marginBottom: "20px",
  };

  const numberStyle = {
    color: "#5C84B4",
    fontSize: "34px",
    fontWeight: "bold",
  };

  const labelStyle = {
    fontSize: "18px",
    marginTop: "4px",
  };

  return (
    <div style={containerStyle}>
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
  );
};

export default StatsBox;
