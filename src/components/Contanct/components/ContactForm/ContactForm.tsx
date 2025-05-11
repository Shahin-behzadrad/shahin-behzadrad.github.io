"use client";

import { useState } from "react";
import TextField from "@/components/shared/TextField/TextField";
import Text from "@/components/shared/Text";
import Button from "@/components/shared/Button/Button";
import classes from "./ContactForm.module.scss";
import { FaSpinner, FaCheck } from "react-icons/fa";
import clsx from "clsx";

type ContactProps = {
  emailAddress: string;
  name: string;
  messageText: string;
};

const ContactForm = () => {
  const [value, setValue] = useState<ContactProps>({
    emailAddress: "",
    name: "",
    messageText: "",
  });

  const [errors, setErrors] = useState({
    emailAddress: "",
    name: "",
    messageText: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submissionError, setSubmissionError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async () => {
    setSubmissionError("");
    const newErrors = { name: "", emailAddress: "", messageText: "" };
    let hasError = false;

    if (!value.name.trim()) {
      newErrors.name = "Name is required.";
      hasError = true;
    }
    if (!value.emailAddress.trim()) {
      newErrors.emailAddress = "Email is required.";
      hasError = true;
    } else if (!validateEmail(value.emailAddress)) {
      newErrors.emailAddress = "Invalid email format.";
      hasError = true;
    }
    if (!value.messageText.trim()) {
      newErrors.messageText = "Message is required.";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });

      if (res.ok) {
        setIsSuccess(true);
        setValue({ emailAddress: "", name: "", messageText: "" });
        setErrors({ emailAddress: "", name: "", messageText: "" });

        setTimeout(() => {
          setIsSuccess(false);
        }, 2000);
      } else {
        setSubmissionError("Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmissionError("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={classes.contactFields}>
      <Text value="Send a message" color="primary" htmlTag="h6" />

      <TextField
        label="Name"
        type="text"
        value={value.name}
        onChange={(val) => setValue((prev) => ({ ...prev, name: val }))}
        error={errors.name}
      />
      <TextField
        label="Email address"
        type="email"
        value={value.emailAddress}
        onChange={(val) => setValue((prev) => ({ ...prev, emailAddress: val }))}
        error={errors.emailAddress}
      />
      <TextField
        label="Message"
        type="text"
        value={value.messageText}
        multiline
        rows={4}
        maxLength={120}
        onChange={(val) => setValue((prev) => ({ ...prev, messageText: val }))}
        error={errors.messageText}
      />

      <Button
        fullwidth
        className={classes.submitBtn}
        variant="outlined"
        color="primary"
        onClick={handleSubmit}
        disabled={isSubmitting}
        startIcon={isSuccess && <FaCheck className={classes.icon} />}
        endIcon={
          isSubmitting && (
            <FaSpinner className={clsx(classes.icon, classes.spin)} />
          )
        }
      >
        {isSuccess ? "Email sent" : "Submit"}
      </Button>

      {submissionError && (
        <Text
          value={submissionError}
          color="accent"
          htmlTag="p"
          className={classes.errorMsg}
        />
      )}
    </div>
  );
};

export default ContactForm;
