import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./projects.scss";

const items = [
  {
    id: 1,
    title: "Keeper",
    link: "https://keeper-ed6d4.web.app/",
    img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Introducing 'Keeper': Your secret keeper. A React and Firebase app for notes, your personal vault of ideas. Keep your musings safe, share only when you choose. Unlock your creativity with Keeper.",
  },
  {
    id: 1,
    title: "Portfolio",
    link: "https://ds-247.github.io/personal-site/",
    img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Discover 'My Showcase' - A portfolio crafted with the artistry of vanilla HTML, CSS, and JavaScript. It's a digital canvas of my work, a window to my world. Dive into my creative journey at the click of a button.",
  },
  {
    id: 1,
    title: "Game Zone",
    link: "https://ds-247.github.io/gameZone/",
    img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Presenting 'Gaming Gallery' - A trio of web enchantments! Blackjack and Simon, HTML, CSS, JS — a cocktail of fun and challenge, all in one place. Ready to play?",
  },
  {
    id: 1,
    title: "Vidly",
    link: "https://vidly-client-ui.vercel.app/",
    img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: `Introducing "Vidly" - Your Ultimate Movie Rental Experiene.Vidly, the fusion of React's front-end brilliance and Node's back-end wizardry. Unlock top movies at your fingertips. Your one-stop-shop for cinematic delight. Enjoy the show!1`,
  },
  {
    id: 1,
    title: "New Year, New Portfolio",
    link: "#",
    img: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: `Introducing "My New Portfolio" - Where My Journey Unfolds.My story, my projects, and my creativity, all in one place. A React-powered showcase with mesmerizing animations. Welcome to my world.`,
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
            <a href={item.link} target="__blank">
              <motion.img
                src={item.img}
                alt=""
                initial={{ y: 0 }}
                whileHover={{ y: -4 }}
              ></motion.img>
            </a>
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
        <h1>Projects I Worked On...</h1>
        <motion.div className="progressBar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item,index) => (
        <Single item={item} key={index} />
      ))}
    </div>
  );
}

export default Project;
