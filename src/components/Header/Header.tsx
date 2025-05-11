"use client";

import MobileSidebar from "./components/MobileSidebar/MobileSidebar";
import NavbarMenu from "./components/NavbarMenu/NavbarMenu";
import classes from "./Header.module.scss";

const Header = () => {
  return (
    <>
      <div className={classes.mobileHeader}>
        <MobileSidebar />
      </div>
      <div className={classes.desktopHeader}>
        <NavbarMenu />
      </div>
    </>
  );
};

export default Header;
