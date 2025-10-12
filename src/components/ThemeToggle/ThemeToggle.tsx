import { Tooltip } from "@mui/material";
import React from "react";
import { useThemePalette } from "../../useTheme.ts";
import "./ThemeToggleStyles.css";

const TOGGLE = "toggle";

const MOON = {
  str: "moon",
  symbol: "☾",
};

const SUN = {
  str: "sun",
  symbol: "☼",
};

const ToggleLabel = ({ type }: { type: string }) => {
  return (
    <Tooltip title={type === SUN.str ? "Light" : "Dark"}>
      <label className="lg-font" htmlFor={TOGGLE}>
        {type === SUN.str ? SUN.symbol : MOON.symbol}
      </label>
    </Tooltip>
  );
};

export const ThemeToggle = () => {
  const { themePalette, toggleThemePalette } = useThemePalette();
  return (
    <div className="display-flex flex-center flex-gap-1rem">
      <ToggleLabel type={MOON.str} />
      <input
        type="checkbox"
        id={TOGGLE}
        className={TOGGLE}
        checked={themePalette === "light"}
        onChange={toggleThemePalette}
      />
      <ToggleLabel type={SUN.str} />
    </div>
  );
};
