import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import type { PreviewBoxProps } from "../../types/vite-env";
import "../../index.css";

export const PreviewBox = styled(Box as React.ComponentType<PreviewBoxProps>)(
  ({ theme, thumbnails }) => ({
    width: "100%",
    float: "none",
    position: "relative",
    margin: theme.spacing(1),
    border: "3px solid var(--color-blue)",
    borderRadius: "4px",
    boxShadow: "1px 3px 5px 0px rgba(39, 41, 40, 0.8)",
    [theme.breakpoints.up("sm")]: {
      width: "32vw",
      height: "calc(32vw * 3 / 4)",
    },
    [theme.breakpoints.up("md")]: {
      width: "35vw",
      height: "calc(35vw * 3 / 4)",
    },
    [theme.breakpoints.up("lg")]: {
      width: "38vw",
      height: "calc(38vw * 9 / 16)",
    },
    "::before": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundImage: `url(${thumbnails})`,
      transition: "opacity 0.2s ease-in-out",
      opacity: 0.4,
      zIndex: -1,
    },
    "&:hover::before": {
      opacity: 0.8,
    },
  }),
);
