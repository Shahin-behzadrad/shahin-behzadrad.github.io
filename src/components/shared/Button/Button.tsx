"use client";

import clsx from "clsx";
import classes from "./Button.module.scss";
import { ReactNode } from "react";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "text" | "outlined" | "contained";
  color?: "primary" | "secondary";
  disabled?: boolean;
  fullwidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  href?: string;
  blank?: boolean;
}

const Button = ({
  children,
  onClick,
  className,
  variant = "contained",
  disabled = false,
  fullwidth,
  color = "primary",
  endIcon,
  startIcon,
  href,
  blank,
}: ButtonProps) => {
  const isLink = !!href;

  const buttonClasses = clsx(
    classes.button,
    {
      [classes.fullwidth]: fullwidth,
      [classes.text]: variant === "text",
      [classes.outlined]: variant === "outlined",
      [classes.contained]: variant === "contained",
      [classes.primary]: color === "primary",
      [classes.secondary]: color === "secondary",
      [classes.disabled]: disabled,
      [classes.hasStartIcon]: startIcon,
      [classes.hasEndIcon]: endIcon,
    },
    className
  );

  const content = (
    <>
      {startIcon && <div className={classes.startIcon}>{startIcon}</div>}
      {children}
      {endIcon && <div className={classes.endIcon}>{endIcon}</div>}
    </>
  );

  // Render as Link if href is provided
  if (isLink) {
    return (
      <Link
        href={href}
        target={blank ? "_blank" : undefined}
        rel={blank ? "noopener noreferrer" : undefined}
        className={buttonClasses}
        onClick={onClick}
      >
        {content}
      </Link>
    );
  }

  // Render as button otherwise
  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {content}
    </button>
  );
};

export default Button;
