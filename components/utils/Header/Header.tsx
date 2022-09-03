
import BackgroundBottomClip from '@components/svgs/shapes';
import { ScreenSize } from '@utils/hooks/useWindowDimensions';
import React from 'react'
import { BasePath } from '../Layout/types';
import Navbar from '../Navbar';

import classes from "./Header.module.scss"

export interface HeaderProps {
    HeroTextComponent: () => JSX.Element;
    screenSize: ScreenSize;
    isMobile: boolean;
    basePaths: BasePath[];
}

const Header = ({
   HeroTextComponent, 
   screenSize, 
   isMobile, 
   basePaths 
}: HeaderProps) => {

  return (
    <>
      <div className={classes.headerBackground}>
        <div className={classes.headerBackground__container}>
          <div className={classes.headerBackground__container__clip}>
            <BackgroundBottomClip
              size={screenSize}
            />
          </div>
        </div>
      </div>
      <header className={classes.header}>
          <Navbar basePaths={basePaths} isMobile={isMobile} />
          <div className={classes.header__content}>
              <HeroTextComponent />
          </div>
      </header>
    </>
  )
}

export default Header;