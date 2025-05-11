import Text from "@/components/shared/Text";
import classes from "./GetInTouch.module.scss";
import SocialMedia from "../SocialMedia/SocialMedia";

const GetInTouch = () => {
  return (
    <div className={classes.container}>
      <Text htmlTag="h3" value="Get In Touch" />
      <Text
        htmlTag="span"
        color="primary"
        value="Your thoughts and ideas are important to me,
       and I’d love to hear from you! If you have any questions, want more
        information, or simply want to connect, sending me a message is
         the best way to get in touch. I promise I’ll make time to reply
          and help you with whatever you need."
      />
      <div className={classes.socialMedia}>
        <SocialMedia />
      </div>
    </div>
  );
};

export default GetInTouch;
