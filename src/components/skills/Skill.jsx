import React, { useState } from "react";
import { motion } from "framer-motion";
import Atom from "./models/Test";
// import Desktop from "./models/Desktop";
import OldComp from "./models/OldComp";
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
          <OldComp />
        ) : item === "REACT" ? (
          <Atom />
        ) : item === "NODE.JS" ? (
          <OldComp />
        ) : item === "HTML.CSS.JS" ? (
          <Atom />
        ) : item === "MONGODB" ? (
          <OldComp />
        ) : null}
      </div>
    </div>
  );
}

export default Skill;
