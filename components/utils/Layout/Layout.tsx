import React from 'react'
import Footer from '../Footer';
import Header, { HeaderProps } from '../Header/Header';

import classes from "./Layout.module.scss";
import useLayout from './useLayout';

interface Props {
    HeroTextComponent: () => JSX.Element;
    children: React.ReactNode;
    className?: string;
}

const Layout = ({children, className, HeroTextComponent}: Props) => {

  const { screenSize, isMobile, basePaths } = useLayout();

  return (
    <>
        <Header
          HeroTextComponent={HeroTextComponent}
          screenSize={screenSize}
          isMobile={isMobile}
          basePaths={basePaths}
        />
        <main className={`${classes.layout} ${className}`}>
            {children}
        </main>
        <Footer 
          screenSize={screenSize}
          basePaths={basePaths}
        />
    </>
  )
}

export default Layout