import React, { useState } from "react";
import { motion } from "framer-motion";
import Atom from "./AtomComp";
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
  const [item, setItem] = useState("REACT");

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
          <Atom />
        ) : item === "REACT" ? (
          <Atom />
        ) : item === "NODE.JS" ? (
          <Atom />
        ) : item === "HTML.CSS.JS" ? (
          <Test />
        ) : item === "MONGODB" ? (
          <Atom />
        ) : null}
      </div>
    </div>
  );
}

export default Skill;
