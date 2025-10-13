import { createContext, useContext } from "react";

// Initialize context
export const ThemeContext = createContext({
  themePalette: "dark",
  toggleThemePalette: () => {},
});

// Define and declare useThemePalette hook
export const useThemePalette = () => useContext(ThemeContext);
