import classes from "./Text.module.scss";

import clsx from "clsx";
import { CSSProperties, ReactNode } from "react";

export type TextProps = {
  startAdornment?: ReactNode;
  endAdornment?: ReactNode;
  textAlign?: "center" | "right" | "left";
  id?: string;
  value?: string;
  className?: string;
  fontWeight?: "light" | "normal" | "medium" | "bold";
  includesPersianDigits?: boolean;
  numberOfLines?: number;
  htmlTag?: "p" | "span" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize?:
    | "xxs"
    | "xs"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | "xxl"
    | "xxxl"
    | "xxxxl"
    | "xxxxxl";
  CssStyle?: CSSProperties;
  color?: "primary" | "secondary" | "accent";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Text = ({
  color = "primary",
  id,
  value,
  className,
  fontWeight = "light",
  includesPersianDigits = true,
  numberOfLines,
  htmlTag = "p",
  fontSize = "md",
  CssStyle,
  onClick,
  textAlign,
  startAdornment,
  endAdornment,
  ...restProps
}: TextProps &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >) => {
  const getClassName = (tag = htmlTag, size = fontSize): string => {
    return `${tag}-${size}`;
  };

  const dynamicClass = getClassName();
  const HtmlTag = htmlTag;

  let maxNumberLineStyle = {};
  if (numberOfLines && numberOfLines > 0) {
    maxNumberLineStyle = {
      lineClamp: numberOfLines,
      WebkitLineClamp: numberOfLines,
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
    };
  }

  return (
    <HtmlTag
      className={clsx(classes.text, className, classes[dynamicClass], {
        //font weight
        [classes.lightText]: fontWeight === "light",
        [classes.normalText]: fontWeight === "normal",
        [classes.mediumText]: fontWeight === "medium",
        [classes.boldText]: fontWeight === "bold",
        [classes.flexDisplay]: startAdornment || endAdornment,

        //color
        [classes.primary]: color === "primary",
        [classes.secondary]: color === "secondary",
        [classes.accent]: color === "accent",

        // Font family
        [classes.englishDigitsFontFamily]: !includesPersianDigits,
      })}
      onClick={onClick}
      id={id}
      style={{ textAlign: textAlign, ...maxNumberLineStyle, ...CssStyle }}
      {...restProps}
    >
      {startAdornment && <>{startAdornment}</>}
      {value}
      {endAdornment && <>{endAdornment}</>}
    </HtmlTag>
  );
};
