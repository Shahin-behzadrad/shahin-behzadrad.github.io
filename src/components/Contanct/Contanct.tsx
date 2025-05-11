"use client";

import Text from "../shared/Text";
import classes from "./Contanct.module.scss";

import ContactForm from "./components/ContactForm/ContactForm";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import SocialMedia from "./components/SocialMedia/SocialMedia";

const Contact = () => {
  return (
    <section className={classes.container} id="contact">
      <div className={classes.formContainer}>
        <GetInTouch />
        <ContactForm />
        <div className={classes.socialMedia}>
          <SocialMedia />
        </div>
      </div>
      <Text
        textAlign="center"
        value="© 2025 Designed & Developed by Shahin Behzadrad."
        fontSize="sm"
      />
    </section>
  );
};

export default Contact;
