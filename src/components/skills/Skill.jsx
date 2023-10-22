import React, { useState } from "react";
import { motion } from "framer-motion";
import Test from "./models/Test";
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
  const [item, setItem] = useState("JAVA");

  return (
    <div className="skill">
      <div className="text-container">
        {data.map((d) => (
          <li key={d}>
            <motion.span
              variants={variants}
              initial="initial"
              whileHover="animate"
              onClick={() => setItem(d)}
            >
              {d}
            </motion.span>
          </li>
        ))}
      </div>
      <div className="threed-section">
        {item === "JAVA" ? (
          <Test />
        ) : item === "REACT" ? (
          <Test />
        ) : item === "NODE.JS" ? (
          <Test />
        ) : item === "HTML.CSS.JS" ? (
          <Test />
        ) : item === "MONGODB" ? (
          <Test />
        ) : null}
      </div>
    </div>
  );
}

export default Skill;
