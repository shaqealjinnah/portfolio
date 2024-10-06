import { useState, useEffect } from "react";
import "./style.css";
import BackgroundLines from "../BackgroundLines";
import WorkCard from "../WorkCard";
import ScrambleText from "../ScrambleText";
import ParaWriting from "../ParaWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import netflix from "../../assets/Images/netflix-clone.jpg";
import twitter from "../../assets/Images/twitter-clone.jpg";
import nft from "../../assets/Images/nft.jpg";

import nextIcon from "../../assets/Icon/Tech/next.svg";
import htmlIcon from "../../assets/Icon/Tech/html.svg";
import cssIcon from "../../assets/Icon/Tech/css.svg";
import jsIcon from "../../assets/Icon/Tech/js.svg";
import tsIcon from "../../assets/Icon/Tech/ts.svg";
import reactIcon from "../../assets/Icon/Tech/react.svg";
import reduxIcon from "../../assets/Icon/Tech/redux.svg";
import firebaseIcon from "../../assets/Icon/Tech/firebase.svg";

export default function Projects() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    // Start animation when the component is in view
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const works = [
    {
      client: "Netflix",
      year: "2023",
      img: netflix,
      title: "Netflx Clone",
      subtitle: [
        "NextJS",
        "TypeScript",
        "CSS",
        "Firebase",
      ],
      icon: [nextIcon, tsIcon, cssIcon, firebaseIcon ],
      link: "https://netflix-demo1.vercel.app/login",
      github: "https://github.com/shaqealjinnah/netflix-clone",
      para: "This app is a replica of Netflix where users can watch their favourite movie trailers. It uses the TMDB API to fetch data and display it to the user. Other features include user authentication, advanced carousel and allows the user to create   their own movie list.",
    },
    {
      client: "Twitter",
      year: "2023",
      img: twitter,
      title: "Twitter Clone",
      subtitle: [
        "NextJS",
        "TypeScript",
        "Redux",
        "Firebase",
      ],
      icon: [nextIcon, tsIcon, reduxIcon, firebaseIcon ],
      link: "https://twitter-clone-ten-beryl.vercel.app/",
      github: "https://github.com/shaqealjinnah/twitter-clone",
      para: "This app is a replica of Twitter where users can create, like, reply and delete Tweets. User-generated data is stored in Firebase and uses NextAuthJS to display a user's name and profile picture on Tweets.",
    },
    {
      client: "NFT Marketplace",
      year: "2024",
      img: nft,
      title: "NFT Marketplace",
      subtitle: ["HTML", "CSS", "JavaScript", "React"],
      icon: [htmlIcon, cssIcon, jsIcon, reactIcon ],
      link: "https://shaqeal-internship.vercel.app/",
      github: "https://github.com/shaqealjinnah/shaqeal-internship",
      para: "NFT Marketplace is an application which allows users to sort NFTs by price, author, owner and more. Fetched data from an NFT API and dynamically routed data with skeleton loading states for a better user experience.",
    },
  ];

  const opacityVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={ref} className="projects" id="projects">
      <BackgroundLines />
      <div className="background--glow"></div>

      <div className="projects--grid">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 0.5 }}
          className="projects--grid--title"
        >
          <h3 className="theme--text">
            <ScrambleText shuffle delay={0.5}>
              04
            </ScrambleText>{" "}
            <span className="hash">{"//"}</span>{" "}
            <ScrambleText shuffle delay={0.5}>
              Projects
            </ScrambleText>
          </h3>
        </motion.div>

        <div className="projects--grid--content">
          <div className="projects--grid--content--heading">
            <h2>
              <ParaWriting stagger={0.08} text={"My "} sec={"Work"} />
            </h2>
          </div>
          <div className="projects--grid--content--works">
            {works.map((item, index) => {
              return (
                <WorkCard
                  item={item}
                  key={index}
                  // delay={0.1 * index + 1}
                  // controls={controls}
                />
              );
            })}
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={opacityVariant}
          transition={{ duration: 1, delay: 1 }}
          onAnimationComplete={() => handleComplete()}
          className="projects--grid--detail"
        >
          <p className="theme--detail">
            <ScrambleText delay={1}>
              Discover a curated portfolio of projects where each line of code
              tells a story of problem-solving, creativity, and technical
              finesse.
            </ScrambleText>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
