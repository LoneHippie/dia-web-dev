import { ScreenSize } from "@utils/hooks/useWindowDimensions";
import React from "react";
import { useMemo } from "react";

import classes from "./BackgroundBottomClip.module.scss";

interface Props {
  size: ScreenSize;
  isDark?: boolean;
}

const BackgroundBottomClip = ({
  size,
  isDark = false
}: Props) => {
  const svgSize = useMemo(() => {
    if (size === ScreenSize.mobile) {
      return {
        height: "58",
        path: "58H0L271 0V58Z"
      };
    } else if (size === ScreenSize.tablet) {
      return {
        height: "39",
        path: "39H0L271 0V39Z"
      };
    } else {
      return {
        height: "18",
        path: "18H0L271 0V18Z"
      };
    }
  }, [size]);

  return (
    <svg
      className={classes.bg_clip}
      width="271"
      height={svgSize.height}
      viewBox={`0 0 271 ${svgSize.height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M271 ${svgSize.path}`}
        fill={isDark ? "#202020" : "#FFFFFF"}
      />
    </svg>
  );
};

export default BackgroundBottomClip;
