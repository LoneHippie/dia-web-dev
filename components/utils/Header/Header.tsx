import React from 'react'
import Navbar from '../Navbar';

import classes from "./Header.module.scss"

export interface HeaderProps {
    HeroTextComponent: () => JSX.Element;
}

const Header = ({ HeroTextComponent }: HeaderProps) => {
  return (
    <>
      <div className={classes.headerBackground}>
        <div className={classes.headerBackground__container}>
          <img 
            src={"/static/bg-clip-mobile.svg"}
          />
        </div>
      </div>
      <header className={classes.header}>
          <Navbar />
          <div className={classes.header__content}>
              <HeroTextComponent />
          </div>
      </header>
    </>
  )
}

export default Header;