import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import type { CustomBoxProps } from "../../types/vite-env";
import "../../index.css";

export const BlogBox = styled(Box as React.ComponentType<CustomBoxProps>)(
  ({ theme }) => ({
    width: "100%",
    position: "relative",
    margin: theme.spacing(1),
    border: "3px solid var(--color-blue)",
    borderRadius: "4px",
    background: "var(--color-pale-blue)",
    boxShadow: "1px 2px 2px 2px var(--color-scrim)",
    paddingBlock: "5rem",
    marginBlock: "5rem",
    display: "flex-column",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    "&:hover": {
      border: "3px solid var(--color-bright-blue)",
      background: "var(--color-pale-blue)",
    },
  }),
);

export const DateBox = styled(Box as React.ComponentType<CustomBoxProps>)(
  ({ theme }) => ({
    margin: theme.spacing(1),
    border: "2px solid var(--color-blue)",
    borderRadius: "0.3rem",
    background: "var(--color-pale-blue)",
    boxShadow: "1px 2px 2px 2px var(--color-scrim)",
    paddingInline: "0.7rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
    fontWeight: "400",
    height: "2rem",
  }),
);
