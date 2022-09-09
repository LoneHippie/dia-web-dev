import BackgroundBottomClip from "@components/svgs/shapes";
import { ScreenSize } from "@utils/hooks/useWindowDimensions";
import Link from "next/link";
import React from "react";
import { BasePath } from "../Layout/types";

import classes from "./Footer.module.scss";

interface Props {
  screenSize: ScreenSize;
  basePaths: BasePath[];
}

const Footer = ({ screenSize, basePaths }: Props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__bg}>
        <BackgroundBottomClip size={screenSize} />
      </div>
      <section className={classes.footer__body}>
        <div className={classes.footer__nav}>
          <h3 className={classes.footer__nav__title}>
            Navigation
          </h3>
          <div className={classes.footer__nav__links}>
            {basePaths.map((el, index) => (
              <Link href={el.path} key={`path-footer-${index}`}>
                {el.name}
              </Link>
            ))}
          </div>
        </div>
        <div className={classes.footer__display}>
          <img src={"/static/logo-white.svg"} />
        </div>
      </section>
      <div className={classes.footer__credits}>
        <p>
          Copyright @{new Date().getFullYear()} | Lone Hippie |
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
