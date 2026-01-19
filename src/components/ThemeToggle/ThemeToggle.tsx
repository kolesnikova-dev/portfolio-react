import { Tooltip } from "@mui/material";
import { useThemePalette } from "../../useTheme.ts";
import "./ThemeToggleStyles.css";

const TOGGLE = "toggle";

const MOON = {
  str: "moon",
  symbol: "☾",
};

const SUN = {
  str: "sun",
  symbol: "☀",
};

const ToggleLabel = ({ type }: { type: string }) => {
  const tooltipTitle = type === SUN.str ? "Light" : "Dark";
  return (
    <Tooltip title={<p>{tooltipTitle}</p>} arrow>
      <p className="text-6xl pointer">
        {type === SUN.str ? SUN.symbol : MOON.symbol}
      </p>
    </Tooltip>
  );
};

export const ThemeToggle = () => {
  const { themePalette, toggleThemePalette } = useThemePalette();
  return (
    <div className="display-flex flex-center flex-gap-1rem zindx-1">
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
