import { createContext, useContext } from "react";

// Initialize context
export const ThemeContext = createContext({
  themePalette: "",
  toggleThemePalette: () => {},
});

// Define and declare useThemePalette hook
export const useThemePalette = () => useContext(ThemeContext);
