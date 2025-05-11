import classes from "./Experiences.module.scss";
import Text from "../shared/Text";
import Image from "next/image";
import pattern from "@public/svg/pattern.svg";
import Card from "../shared/Card/Card";
import { experienceCard } from "./experiencesCard";

const Experiences = () => {
  return (
    <section className={classes.container} id="experiences">
      <Image
        src={pattern}
        width={200}
        alt="pattern"
        className={classes.pattern}
      />
      <Text
        value="Experiences"
        htmlTag="h5"
        fontSize="lg"
        className={classes.title}
      />
      <div className={classes.experience}>
        <Text value="As a Front-End Developer at A.P.P Software Solutions, I collaborated with a multidisciplinary team to design and maintain a scalable, user-friendly platform serving over 300,000 active users and 400+ businesses. My contributions focused on transforming complex UI designs into responsive, high-performing applications and driving optimizations that enhanced app speed, scalability, and user experience." />

        <div className={classes.careerDate}>
          <Text fontSize="sm" color="secondary" value="Jan 2023 - present" />
          <Text
            color="accent"
            fontWeight="bold"
            value="A.P.P Software Solutions"
            fontSize="sm"
          />
        </div>
      </div>
      <div className={classes.cardContainer}>
        {experienceCard.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Experiences;
