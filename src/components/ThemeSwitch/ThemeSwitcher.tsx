"use client";

import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import clsx from "clsx";
import classes from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isMounted, setIsMounted] = useState(false); // Track if component is mounted

  useEffect(() => {
    // Ensure this runs only on the client side
    setIsMounted(true);
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      // Default to light theme if no theme is stored
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Don't render the component until it's mounted on the client
  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={clsx(classes.themeSwitch, {
        [classes.dark]: theme === "dark",
      })}
      onClick={toggleTheme}
      role="button"
      tabIndex={0}
      aria-label="Toggle theme"
    >
      <div
        className={clsx(classes.themeIcon, {
          [classes.isLight]: theme === "light",
        })}
      >
        {theme === "light" ? <FaSun /> : <FaMoon />}
      </div>
      <FaSun className={classes.lightThemeIcon} />
      <FaMoon className={classes.darkThemeIcon} />
    </div>
  );
};

export default ThemeSwitcher;
