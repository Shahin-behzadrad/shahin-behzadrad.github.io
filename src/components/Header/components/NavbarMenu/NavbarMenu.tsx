import Image from "next/image";
import Link from "next/link";
import logo1 from "@public/logo/logo-1.webp";
import logo2 from "@public/logo/logo-2.webp";

import classes from "./NavbarMenu.module.scss";
import ThemeSwitcher from "@/components/ThemeSwitch/ThemeSwitcher";

const NavbarMenu = () => {
  return (
    <nav className={classes.header}>
      <Link href="#hero" className={classes.logoContainer}>
        <Image src={logo1} width={20} alt="logo" />
        <Image src={logo2} width={20} alt="logo" />
      </Link>
      <div className={classes.navbarBtns}>
        <Link href="#hero">About</Link>
        <Link href="#experiences">Experiences</Link>
        <Link href="#contact">Contact</Link>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default NavbarMenu;
