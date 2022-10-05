import { useTheme } from "contexts/themeContext";
import React from "react";

import classes from "./Toggle.module.scss";

const Toggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={classes.container}>
      <div className={classes.toggle}>
        <input
          id="custom-toggle"
          type="checkbox"
          className={classes.toggle__switch}
          onChange={toggleTheme}
          checked={isDark}
        />
        <label
          htmlFor="custom-toggle"
          className={classes.toggle__switch__label}
        >
          <span>TEST</span>
        </label>
      </div>
      <h3
        style={{
          transform: isDark
            ? "translate(-1.5rem, -1rem)"
            : "translate(1.5rem, -1rem)",
          color: isDark ? "#FFFFFF" : "#001099"
        }}
        onClick={toggleTheme}
      >
        {isDark ? "Light" : "Dark"}
      </h3>
    </div>
  );
};

export default Toggle;
