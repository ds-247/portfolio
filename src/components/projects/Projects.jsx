import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./projects.scss";

const items = [
  {
    id: 1,
    title: "random",
    img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: " lorem epsum dolores aage ni aata tha isiliye kuch bhi likha jaa raha tha....",
  },
  {
    id: 1,
    title: "random",
    img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: " lorem epsum dolores aage ni aata tha isiliye kuch bhi likha jaa raha tha....",
  },
  {
    id: 1,
    title: "random",
    img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: " lorem epsum dolores aage ni aata tha isiliye kuch bhi likha jaa raha tha....",
  },
  {
    id: 1,
    title: "random",
    img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: " lorem epsum dolores aage ni aata tha isiliye kuch bhi likha jaa raha tha....",
  },
  {
    id: 1,
    title: "random",
    img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: " lorem epsum dolores aage ni aata tha isiliye kuch bhi likha jaa raha tha....",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const imgYBg = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      {" "}
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt=""></img>
          </div>
          <motion.div className="textContainer" style={{ y: imgYBg }}>
            <h2>{item.title} </h2>
            <p> {item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function Project() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 250,
    damping: 30,
  });

  return (
    <div id="Projects" className="project" ref={ref}>
      <div className="progress">
        <h1>Projects Worked On...</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Project;
