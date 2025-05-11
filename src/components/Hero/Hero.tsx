import Image from "next/image";
import Text from "../shared/Text";
import classes from "./Hero.module.scss";

import logo1 from "@public/logo/logo-1.webp";
import logo2 from "@public/logo/logo-2.webp";

import { SiReaddotcv } from "react-icons/si";

import About from "../About/About";
import Button from "../shared/Button/Button";

const Hero = () => {
  return (
    <main className={classes.container} id="heor">
      <div className={classes.shape1} />
      <div className={classes.shape2} />
      <div className={classes.shape3} />

      <div className={classes.glassyLayer} />

      <div className={classes.hero}>
        <div className={classes.heroContent}>
          <Text
            value="Shahin Behzadrad /"
            fontSize="xxxxl"
            htmlTag="h1"
            textAlign="center"
            className={classes.myName}
            startAdornment={
              <Image
                src={logo1}
                width={40}
                alt="logo1"
                className={classes.logo}
              />
            }
            endAdornment={
              <Image
                src={logo2}
                width={40}
                alt="logo2"
                className={classes.logo}
              />
            }
          />
          <div className={classes.roleContent}>
            <Text
              value="Front-End Developer"
              fontSize="xl"
              htmlTag="h2"
              textAlign="left"
              className={classes.roleTitle}
            />
          </div>
        </div>
        <About />
        <Button
          className={classes.myCv}
          blank
          href="https://docs.google.com/document/d/1pKqRf1k0KLBgEROYgfYvDzswTorfCDoQ5nxgviGOztg/edit?usp=sharing"
          variant="outlined"
          color="primary"
          endIcon={<SiReaddotcv size={25} />}
        >
          View My CV
        </Button>
      </div>
    </main>
  );
};

export default Hero;
