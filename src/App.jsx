import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import ParallaxTop from "./components/parallax/ParallaxTop";
import ParallaxBottom from "./components/parallax/ParallaxBottom";
import Projects from "./components/projects/Projects";
import "./App.scss";

function App() {
  return (
    <>
      <section id="Home">
        <Navbar />
        <Banner />
      </section>
      <section>
        <ParallaxTop />
      </section>
      <section id="Skills">Skills</section>
      <section>
        <ParallaxBottom />
      </section>
      <Projects />
      <section id="Contact">Contact</section>
    </>
  );
}

export default App;
