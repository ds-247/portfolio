import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import "./App.scss";
import ParallaxTop from "./components/parallax/ParallexTop";

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
      <section>parallex</section>
      <section id="Projects">Projects</section>
      <section id="Contact">Contact</section>
    </>
  );
}

export default App;
