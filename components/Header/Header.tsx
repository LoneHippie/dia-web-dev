import React from 'react'
import Navbar from '../Navbar';

import classes from "./Header.module.scss"

export interface HeaderProps {
    heroImage: string;
    HeroTextComponent: () => JSX.Element;
}

const Header = ({ HeroTextComponent }: HeaderProps) => {
  return (
    <section className={classes.header__container}>
        <Navbar />
        <header className={classes.header}>
            <div className={classes.header__content}>
                <HeroTextComponent />
            </div>

            {/* <img 
                className={classes.header__hero}
                src={heroImage}
            /> */}
        </header>
    </section>
  )
}

export default Header;