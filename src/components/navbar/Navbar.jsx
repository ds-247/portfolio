import React from "react";
import { motion } from "framer-motion";
import SideBar from "./sidebar/SideBar";
import gitIcon from "../../assets/githubIcon.png";
import cvIcon from "../../assets/cvIcon.png";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Dipanshu
        </motion.span>
        <div className="socialIcons">
          <a href="https://github.com/ds-247" target="__blank">
            <motion.img
              initial={{ opacity: 0.5, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              src={gitIcon}
              alt="Icon"
            ></motion.img>
          </a>
          <a href="https://ds-247.github.io/CV/" target="__blank">
            <motion.img
              initial={{ opacity: 0.5, scale: 0.3 }}
              animate={{ opacity: 1, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={cvIcon}
              alt="Icon"
            ></motion.img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
