import React from "react";
import Link from "next/link";
import { NavMenuExpanded, NavMenuSmall } from "./components";

import classes from "./Navbar.module.scss";
import { BasePath } from "../Layout/types";
import Toggle from "@components/inputs";

interface Props {
  isMobile: boolean;
  basePaths: BasePath[];
}

const Navbar = ({ isMobile, basePaths }: Props) => {
  return (
    <div className={classes.nav}>
      <div className={classes.nav__main}>
        <Link href="/">
          <img
            src={"/static/logo-white.svg"}
            className={classes.nav__main__logo}
            alt="Back to home page"
          />
        </Link>
        <Toggle />
      </div>

      {isMobile ? (
        <NavMenuSmall basePaths={basePaths} />
      ) : (
        <NavMenuExpanded basePaths={basePaths} />
      )}
    </div>
  );
};

export default Navbar;
