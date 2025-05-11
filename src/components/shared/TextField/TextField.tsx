"use client";

import { useState } from "react";
import classes from "./TextField.module.scss";
import clsx from "clsx";

interface TextFieldProps {
  label: string;
  type?: "text" | "number" | "email";
  value?: string;
  onChange?: (value: string) => void;
  multiline?: boolean;
  rows?: number;
  maxLength?: number;
  error?: string;
}

const TextField = ({
  label,
  type = "text",
  onChange,
  value,
  multiline = false,
  rows = 3,
  maxLength,
  error,
}: TextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const isLabelFloating = isFocused || value;

  return (
    <div className={clsx(classes.textField, { [classes.focused]: isFocused })}>
      <label
        className={clsx(classes.label, {
          [classes.focusedLabel]: isLabelFloating,
        })}
      >
        {label}
      </label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          rows={rows}
          maxLength={maxLength}
          className={clsx(classes.input, classes.noResize, {
            [classes.errorBorder]: error,
          })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          type={type}
          className={clsx(classes.input, { [classes.errorBorder]: error })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      )}
      {error && <p className={classes.errorText}>{error}</p>}
    </div>
  );
};

export default TextField;
