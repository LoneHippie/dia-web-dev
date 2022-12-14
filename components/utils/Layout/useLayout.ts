import { useWindowDimensions } from "@utils/hooks";
import { ScreenSize } from "@utils/hooks/useWindowDimensions";
import { Themes, useTheme } from "contexts/themeContext";
import { useMemo } from "react";
import { BasePath } from "./types";

const useLayout = () => {
  const { screenSize } = useWindowDimensions();

  const isMobile = useMemo(
    () => screenSize === ScreenSize.mobile,
    [screenSize]
  );

  const basePaths: BasePath[] = [
    {
      path: "/",
      name: "Home"
    },
    {
      path: "/articles",
      name: "Articles"
    },
    {
      path: "/resources",
      name: "Resources"
    },
    {
      path: "/about",
      name: "About"
    }
  ];

  return {
    screenSize,
    isMobile,
    basePaths
  };
};

export default useLayout;
