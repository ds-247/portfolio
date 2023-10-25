import React, { useState } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import "../sidebar/sidebar.scss";

const variants = {
  open: {
    clipPath: "circle(850px at 43px 50px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
  closed: {
    clipPath: "circle(22px at 43px 50px)",
    transition: {
      type: "spring",
      stiffness: 350,
      damping: 40,
    },
  },
};

function SideBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar"
      variants={variants}
      animate={isOpen ? "open" : "closed"}
    >
      <motion.div className="bg" >
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default SideBar;
