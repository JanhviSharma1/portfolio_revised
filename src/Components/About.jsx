import React from "react";
import "../App.css";

export const Technologies = ({ name, iconadd, variant }) => {
  const isCard = variant === "card";

  return (
    <span className={isCard ? "tech-badge" : "tech-color"}>
      <img
        src={iconadd}
        alt={name}
        style={{
          width: isCard ? "18px" : "24px",
          marginRight: "6px",
          verticalAlign: "middle",
        }}
      />
      <span className={isCard ? "card-tech-font" : "tech-font"}>{name}</span>
    </span>
  );
};

const About = () => {
  return (
    <section id="Aboutme" className="about-section">
      <h2 className="headings">ABOUT</h2>
      <h2 className="sub headings">ME</h2>
      <p className="text">
        I specialize in creating clean, responsive, and user-focused websites
        using modern technologies across the full stack. Whether it's crafting
        sleek front-end interfaces or building secure, scalable back-ends, I
        bring ideas to life with code.
        <br />
        But that’s not all. I also have experience in Machine Learning, adding
        intelligence to apps through data-driven features like predictions,
        recommendations, and automation. I’m the developer who blends
        functionality with finesse, and I’m always ready to turn complex
        problems into elegant solutions.
      </p>
      <br />
      <br />
      <br />
      <div>
        <h3 className="sub headings" style={{ fontSize: "50px" }}>
          Tech Stack
        </h3>
        <br />
        <h2 className="text">Web Development</h2>
        <Technologies name="React.js" iconadd="./skills/React.svg" />
        <Technologies name="Node.js" iconadd="./skills/nodejs.svg" />
        <Technologies name="MongoDB" iconadd="./skills/mongodb.svg" />
        <Technologies name="Express" iconadd="./skills/express.svg" />
        <Technologies name="Next.js" iconadd="./skills/nextjs.svg" />
        <Technologies name="GSAP" iconadd="./skills/gsap.svg" />

        <br />
        <h2 className="text">Data Analytics</h2>
        <Technologies name="PowerBI" iconadd="./skills/powerbi.svg" />
        <Technologies name="Numpy" iconadd="./skills/numpy.svg" />
        <Technologies name="Matplotlib" iconadd="./skills/matplotlib.png" />
        <Technologies name="Scikit Learn" iconadd="./skills/sklearn.png" />
        <Technologies name="SQL" iconadd="./skills/sql.svg" />
        <br />
        <h2 className="text">Languages</h2>
        <Technologies name="C++" iconadd="./skills/cpp.svg" />
        <Technologies name="Python" iconadd="./skills/python.svg" />
        <Technologies name="JavaScript" iconadd="./skills/js.svg" />
        <Technologies name="Java" iconadd="./skills/java.svg" />
        <Technologies name="PHP" iconadd="./skills/php.svg" />
      </div>
    </section>
  );
};

export default About;
