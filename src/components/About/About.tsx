"use client";

import { useState, useEffect, useRef } from "react";
import classes from "./About.module.scss";

const fullText: string =
  "Frront-End Developer skilled in creating clean and optimized user interfaces, with additional experience in back-end technologies like Node.js, MySQL, and Sequelize.";

const About: React.FC = () => {
  const [displayedText, setDisplayedText] = useState<string>("");

  const hasStarted = useRef<boolean>(false);
  const currentIndex = useRef<number>(0);
  const timeoutId = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (hasStarted.current) return;
    hasStarted.current = true;

    const typeNext = () => {
      if (currentIndex.current < fullText.length - 1) {
        setDisplayedText((prev) => prev + fullText[currentIndex.current]);
        currentIndex.current++;
        const delay = 30 + Math.random() * 100;
        timeoutId.current = setTimeout(typeNext, delay);
      }
    };

    typeNext();

    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [fullText]);

  return (
    <div className={classes.container}>
      <div className={classes.threeDotsCorner}>
        <div />
        <div />
        <div />
      </div>
      {displayedText}
      <span className={classes.cursor}>|</span>
    </div>
  );
};

export default About;
