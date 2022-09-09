import React from "react";

import classes from "./ButtonOutline.module.scss";

interface Props {
  children: React.ReactNode;
}

const ButtonOutline = ({ children }: Props) => {
  return <button className={classes.buttonOutline}>{children}</button>;
};

export default ButtonOutline;
