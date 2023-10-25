import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallaxTop.scss";

function ParallaxTop() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const ySunBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xSunBg = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const scaleSunBg = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const yPlanetBg = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);
  const xPlanetBg = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const scalePlanetBg = useTransform(scrollYProgress, [0, 1], [1, 0.01]);

  return (
    <div className="parallaxTop" ref={ref}>
      <motion.h1 style={{ y: yText }}>Techs I Work With.</motion.h1>
      <motion.div className="stars" style={{ x: ySunBg }}></motion.div>
      <div className="mountain"></div>
      <motion.div
        className="sun"
        style={{ y: ySunBg, x: xSunBg, scale: scaleSunBg }}
      ></motion.div>
      <motion.div
        className="planet"
        style={{ y: yPlanetBg, x: xPlanetBg, scale: scalePlanetBg }}
      ></motion.div>
    </div>
  );
}

export default ParallaxTop;
