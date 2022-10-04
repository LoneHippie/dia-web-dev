import { useMemo } from "react";
import { useContext, useEffect, useState } from "react";
import { Themes } from "./enums";
import { ThemeContext } from "./ThemeContext";

const getTheme = () => {
  const theme = localStorage.getItem("theme");

  if (!theme) {
    localStorage.setItem("theme", Themes.DARK);

    return Themes.DARK;
  } else {
    return theme;
  }
};

interface Props {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    if (theme === Themes.DARK) {
      setTheme(Themes.LIGHT);
    } else {
      setTheme(Themes.DARK);
    }
  };

  const isDark = useMemo(() => theme === Themes.DARK, [theme]);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = { theme, isDark, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be called within a provider");
  } else {
    return context;
  }
};

export { ThemeProvider, useTheme };
