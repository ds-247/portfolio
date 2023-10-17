import React from "react";
import { motion } from "framer-motion";

const links = ["Home", "Skills", "Projects", "Contact"];

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 20,
    opacity: 0,
  },
};

function Links() {
  return (
    <motion.div className="links" variants={variants}>
      {links.map((link) => (
        <motion.a
        key={link}
          href={`#${link}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.98 }}
          variants={itemVariants}
        >
          {link}
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Links;
