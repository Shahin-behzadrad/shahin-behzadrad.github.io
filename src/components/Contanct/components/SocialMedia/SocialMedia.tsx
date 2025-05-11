import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import classes from "./SocialMedia.module.scss";

const SocialMedia = () => {
  return (
    <div className={classes.container}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.linkedin.com/in/shahin-behzadrad"}
      >
        <FaLinkedin />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={"https://www.github.com/shahin-behzadrad"}
      >
        <FaGithubSquare />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={"https://t.me/shahinbehzadrad"}
      >
        <FaTelegram />
      </a>
    </div>
  );
};

export default SocialMedia;
