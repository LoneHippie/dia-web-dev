
import BackgroundBottomClip from '@components/svgs/shapes';
import { useWindowDimensions } from '@utils/hooks';
import React from 'react'
import Navbar from '../Navbar';

import classes from "./Header.module.scss"

export interface HeaderProps {
    HeroTextComponent: () => JSX.Element;
}

const Header = ({ HeroTextComponent }: HeaderProps) => {

  const { screenSize } = useWindowDimensions()

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
          <Navbar />
          <div className={classes.header__content}>
              <HeroTextComponent />
          </div>
      </header>
    </>
  )
}

export default Header;