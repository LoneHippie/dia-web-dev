import React from 'react'
import Header, { HeaderProps } from '../Header/Header';

import classes from "./Layout.module.scss";

interface Props extends HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Layout = ({children, className, HeroTextComponent}: Props) => {
  return (
    <>
        <Header
          HeroTextComponent={HeroTextComponent}
        />
        <main className={`${classes.layout} ${className}`}>
            {children}
        </main>
    </>
  )
}

export default Layout