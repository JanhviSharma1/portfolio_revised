import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import StatsBox from "./Components/StatsBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <StatsBox></StatsBox>
    </>
  );
}

export default App;
