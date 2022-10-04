import { createContext } from "react";

interface ThemeContext {
  theme: string;
  isDark: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<
  ThemeContext | undefined
>(undefined);
