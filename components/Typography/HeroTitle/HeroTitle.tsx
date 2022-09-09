import React from "react";

import classes from "./HeroTitle.module.scss";

interface Props {
  h1: string;
  h2?: string;
  className?: string;
}

const HeroTitle = ({ h1, h2, className }: Props) => {
  return (
    <div className={`${classes.hero_title} ${className}`}>
      <h1 className={classes.hero_title__title}>{h1}</h1>
      {h2 && <h2 className={classes.hero_title__subtitle}>{h2}</h2>}
    </div>
  );
};

export default HeroTitle;
