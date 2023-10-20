import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/banner.png";
import "./banner.scss";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      type: "spring",
      stiffness: 160,
      damping: 20,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-100%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

function Banner() {
  return (
    <div className="banner">
      <div className="textWrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>
            {" "}
            Hi I'm <motion.span className="name">Dipanshu Saini</motion.span>
          </motion.h2>
          <motion.h1 variants={textVariants}>
            a{" "}
            <motion.span className="programmer">
              <motion.span className="pro">Pro</motion.span>
              grammer
            </motion.span>
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <a href="#Projects">
              <button>Projects</button>
            </a>
            <a href="#Contact">
              <button>Contact Me</button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        variants={sliderVariants}
        initial="initial"
        animate="animate"
        className="floatingTextContainer"
      >
        FULL STACK WEB DEVELOPER
      </motion.div>

      <div className="imgWrapper">
        <img src={bannerImg}></img>
      </div>
    </div>
  );
}

export default Banner;
