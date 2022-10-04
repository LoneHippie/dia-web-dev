import React from "react";
import Footer from "../Footer";
import Header from "../Header/Header";

import useLayout from "./useLayout";

import classes from "./Layout.module.scss";
import { useTheme } from "contexts/themeContext";

interface Props {
  HeroTextComponent: () => JSX.Element;
  children: React.ReactNode;
}

const Layout = ({ children, HeroTextComponent }: Props) => {
  const { screenSize, isMobile, basePaths } = useLayout();

  const { theme, isDark } = useTheme();

  return (
    <>
      <Header
        HeroTextComponent={HeroTextComponent}
        screenSize={screenSize}
        isMobile={isMobile}
        isDark={isDark}
        basePaths={basePaths}
      />
      <main className={`${classes.layout} ${theme}`}>
        {children}
      </main>
      <Footer
        screenSize={screenSize}
        basePaths={basePaths}
        isDark={isDark}
      />
    </>
  );
};

export default Layout;
