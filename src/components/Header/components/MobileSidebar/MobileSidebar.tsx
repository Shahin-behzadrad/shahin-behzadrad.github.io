"use client";

import logo1 from "@public/logo/logo-1.webp";
import logo2 from "@public/logo/logo-2.webp";
import Image from "next/image";
import Link from "next/link";
import { SiReaddotcv } from "react-icons/si";

import classes from "./MobileSidebar.module.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";
import Button from "@/components/shared/Button/Button";
import ThemeSwitcher from "@/components/ThemeSwitch/ThemeSwitcher";
import Text from "@/components/shared/Text";

const MobileSidebar = () => {
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  useEffect(() => {
    if (openSidebar) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [openSidebar]);

  const closeSidebarHandler = () => setOpenSidebar(false);

  return (
    <div className={classes.header}>
      <div
        className={clsx(classes.navContainer, {
          [classes.hideBackground]: openSidebar,
        })}
      >
        <Link href="#hero" className={classes.logoContainer}>
          <Image src={logo1} width={20} alt="logo" />
          <Image src={logo2} width={20} alt="logo" />
        </Link>
        <div
          onClick={() => setOpenSidebar(!openSidebar)}
          className={clsx(classes.hamburger, {
            [classes.open]: openSidebar,
          })}
        >
          <div />
          <div />
          <div />
        </div>
      </div>
      <div
        className={clsx(classes.sidebar, {
          [classes.openSidebar]: openSidebar,
        })}
      >
        <div className={classes.navbarBtns}>
          <Button
            onClick={closeSidebarHandler}
            variant="outlined"
            color="secondary"
            href="#hero"
          >
            About
          </Button>
          <Button
            onClick={closeSidebarHandler}
            variant="outlined"
            color="secondary"
            href="#experiences"
          >
            Experiences
          </Button>
          <Button
            onClick={closeSidebarHandler}
            variant="outlined"
            color="secondary"
            href="#contact"
          >
            Contact
          </Button>
        </div>
        <Button
          color="secondary"
          variant="contained"
          endIcon={<SiReaddotcv size={25} />}
          href="https://docs.google.com/document/d/1pKqRf1k0KLBgEROYgfYvDzswTorfCDoQ5nxgviGOztg/edit?usp=sharing"
          blank
        >
          View My CV
        </Button>
        <div className={classes.themeSwitcher}>
          <Text value="Toggle the Theme" />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};

export default MobileSidebar;
