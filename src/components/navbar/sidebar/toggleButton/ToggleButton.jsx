import React from "react";
import { motion } from "framer-motion";

function ToggleButton({ setOpen }) {

  return (
    <button className="button" onClick={() => setOpen((prev) => !prev)}>
      <motion.svg width="30" height="20" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          variants={{
            open: { d: "M 7 16.346 L 23 2.5" },
            closed: { d: "M 7 2.5 L 23 2.5" },
          }}
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          variants={{
            open: { opacity: 0 },
            closed: { opacity: 1 },
          }}
          d="M 7 9.5 L 23 9.5"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <motion.path
          variants={{
            open: { d: "M 7 2.5 L 23 16.346" },
            closed: { d: "M 7 16.346 L 23 16.346" },
          }}
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </motion.svg>
    </button>
  );
}

export default ToggleButton;
