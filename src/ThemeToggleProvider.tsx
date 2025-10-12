import { type ReactNode, useState } from "react";
import { ThemeContext } from "./useTheme";

type Props = {
  children: ReactNode;
};

// Initialize ThemeToggleProvider that will return the context.Provider
export const ThemeToggleProvider = ({ children }: Props) => {
  const [themePalette, setThemePalette] = useState<string>("light");

  const toggleThemePalette = () => {
    setThemePalette(themePalette === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ themePalette, toggleThemePalette }}>
      {children}
    </ThemeContext.Provider>
  );
};
