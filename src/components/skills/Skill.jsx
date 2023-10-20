import React from "react";
import { motion } from "framer-motion";
import "./skill.scss";

const variants = {
  initial: {
    WebkitTextFillColor: "transparent",
  },
  animate: {
    WebkitTextFillColor: "red",
  },
};

const data = ["JAVA", "REACT", "NODE.JS", "HTML.CSS.JS", "MONGODB"];

function Skill() {
  return (
    <div className="skill">
      <div className="text-container">
        {data.map((d) => (
          <li key={d}>
            <motion.span
              variants={variants}
              initial="initial"
              whileHover="animate"
            >
              {d}
            </motion.span>
          </li>
        ))}
      </div>
      <div className="3d-section"></div>
    </div>
  );
}

export default Skill;
