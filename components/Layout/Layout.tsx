import React from 'react'
import Header from '../Header';
import { HeaderProps } from '../Header/Header';

import classes from "./Layout.module.scss";

interface Props extends HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Layout = ({children, className, heroImage, HeroTextComponent}: Props) => {
  return (
    <>
        <Header 
          heroImage={heroImage}
          HeroTextComponent={HeroTextComponent}
        />
        <main className={`${classes.layout} ${className}`}>
            {children}
        </main>
    </>
  )
}

export default Layout