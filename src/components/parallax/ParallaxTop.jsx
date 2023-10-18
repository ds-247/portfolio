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
  const fontText = useTransform(scrollYProgress, [0, 1], ["50px", "100px"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const xSunBg = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <div className="parallaxTop" ref={ref}>
      <motion.h1 style={{ y: yText, fontSize: fontText }}>
        Techs I Work With.
      </motion.h1>
      <motion.div className="stars" style={{ x: yBg }}></motion.div>
      <div className="mountain"></div>
      <motion.div className="sun" style={{ y: yBg, x: xSunBg }}></motion.div>
      <motion.div className="planet" style={{ x: xSunBg }}></motion.div>
    </div>
  );
}

export default ParallaxTop;
