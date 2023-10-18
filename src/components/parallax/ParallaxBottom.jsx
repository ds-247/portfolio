import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./parallaxBottom.scss";

function ParallaxTop() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const xText = useTransform(scrollYProgress, [0, 1], ["100%", "-250%"]);
  const yMoon = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);

  return (
    <div className="parallaxBottom" ref={ref}>
      <motion.h1 style={{ x: xText }}>My Work.</motion.h1>
      <motion.div className="stars" style={{ x: yMoon }}></motion.div>
      <div className="mountain1"></div>
      <div className="mountain2"></div>
      <motion.div className="moon" style={{ y: yMoon }}></motion.div>
    </div>
  );
}

export default ParallaxTop;
