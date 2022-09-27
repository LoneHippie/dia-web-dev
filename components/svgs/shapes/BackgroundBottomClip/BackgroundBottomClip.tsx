import { ScreenSize } from "@utils/hooks/useWindowDimensions";
import React, { useMemo } from "react";

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
      return "58";
    } else if (size === ScreenSize.tablet) {
      return "39";
    } else {
      return "16";
    }
  }, [size]);

  return (
    <svg
      className={classes.bg_clip}
      width="271"
      height={svgSize}
      viewBox={`0 0 271 ${svgSize}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={`M271 ${svgSize}H0L271 0V${svgSize}Z`}
        fill={isDark ? "#202020" : "#FFFFFF"}
      />
    </svg>
  );
};

export default BackgroundBottomClip;
