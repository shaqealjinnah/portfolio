import { useEffect, useState } from "react";
import "./style.css";
import TextWriting from "../TextWriting";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FadeText from "../FadeText";
import HideText from "../HideText";
import { FaGithub, FaLink } from "react-icons/fa";

export default function TechCard({ item }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [hasAnimated, setHasAnimated] = useState(false);
  const delay = 0;

  const handleComplete = () => {
    setHasAnimated(true);
  };

  useEffect(() => {
    if (inView && !hasAnimated) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const opacityVariants = {
    hidden: { opacity: 0, mixBlendMode: "color-dodge" },
    visible: { opacity: 1, mixBlendMode: "normal" },
  };

  const lineVariants = {
    hidden: { width: "0%" },
    visible: {
      width: "100%",
      transition: {
        type: "spring",
        stiffness: 20,
        duration: 2,
        delay: delay,
      },
    },
  };

  return (
    <div ref={ref} className="workCard">
      <div className="workCard--head">
        <h3>
          <TextWriting
            delay={delay}
            nocursor
            controls={controls}
            stagger={0.08}
            text={item.client}
          />
        </h3>
        <h3>
          <TextWriting
            delay={delay}
            nocursor
            controls={controls}
            stagger={0.08}
            text={item.year}
          />
        </h3>
      </div>

      <motion.div
        initial="hidden"
        animate={controls}
        variants={lineVariants}
        className="workCard--line"
      ></motion.div>

      <div className="workCard--body">
        <motion.span
          initial="hidden"
          animate={controls}
          variants={opacityVariants}
          transition={{ duration: 2, delay: 0.5 }}
          onAnimationComplete={() => handleComplete()}
        >
          <img src={item.img} alt="" className="work--img" />
        </motion.span>
        <div className="workCard--body-bg"></div>
        <div className="workCard--description">
          <h1 className="workCard--title">{item.title}</h1>
          <h3 className="workCard--subtitle">{item.subtitle}</h3>
          <p className="workCard--para">{item.para}</p>
          <div className="workCard--links">
            <a
              className="react-icon"
              href={item.github}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="react-icon"
              href={item.link}
              target={"_blank"}
              rel="noopener noreferrer"
            >
              <FaLink />
            </a>
          </div>
        </div>
        {/* <h1>
          <HideText controls={controls} delay={delay}>
            {item.title}
          </HideText>
        </h1>
        <p>
          <FadeText controls={controls} delay={delay}>
            {item.detail}
          </FadeText>
        </p> */}
      </div>
    </div>
  );
}
