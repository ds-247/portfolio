import React from "react";
import { motion } from "framer-motion";
import bannerImg from "../../assets/banner.png";
import "./banner.scss";

function Banner() {
  return (
    <div className="banner">
      <div className="textWrapper">
        <div className="textContainer">
          <h2>
            {" "}
            Hi I'm{" "}
            <motion.span 
              className="name"
            >
              Dipanshu Saini
            </motion.span>
          </h2>
          <h1>
            a{" "}
            <motion.span className="programmer"
            >
              <motion.span
                className="pro"
              >
                Pro
              </motion.span>{" "}
              grammer
            </motion.span>
          </h1>
          <div className="buttons">
            <button>Projects</button>
            <button>Contact Me</button>
          </div>
        </div>
      </div>
      <div className="imgWrapper">
        <img src={bannerImg}></img>
      </div>
    </div>
  );
}

export default Banner;




{/* <h2>
            {" "}
            Hi I'm{" "}
            <motion.span
              transition={{ duration: 0.6 }}
              whileHover={{ trasnlateY: "-3" }}
              whileInView={{
                fontSize: "45px",
                color: "#1dd692",
                textShadow: "#366ffe 1px 1px 10px",
              }}
              className="name"
            >
              Dipanshu Saini
            </motion.span>
          </h2>
          <h1>
            a{" "}
            <motion.span
              transition={{ duration: 0.5}}
              whileInView={{
                fontSize: "60px",
                color: "#366ffe",
                textShadow: "#366ffe 1px 1px 10px",
              }}
              className="programmer"
            >
              <motion.span
                whileHover={{ color: "#ff7798" }}
                className="pro"
              >
                Pro
              </motion.span>{" "}
              grammer
            </motion.span>
          </h1> */}