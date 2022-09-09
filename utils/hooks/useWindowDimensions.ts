import { useMemo } from "react";
import { useEffect, useState } from "react";

export enum ScreenSize {
  mobile,
  tablet,
  laptop
}

const getWindowDimensions = () => {
  let screenWidth: number | undefined;

  //for checking if window is defined during node build process
  if (typeof window !== "undefined") {
    screenWidth = window.innerWidth;
  }

  return screenWidth;
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  const screenSize = useMemo(() => {
    if (!windowDimensions) {
      return ScreenSize.mobile;
    }

    if (windowDimensions < 780) {
      return ScreenSize.mobile;
    } else if (
      windowDimensions >= 780 &&
      windowDimensions < 1080
    ) {
      return ScreenSize.tablet;
    } else {
      return ScreenSize.laptop;
    }
  }, [windowDimensions]);

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  return {
    screenSize
  };
};

export default useWindowDimensions;
