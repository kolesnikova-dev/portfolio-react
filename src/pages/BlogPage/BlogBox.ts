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
    paddingBlockStart: "2rem",
    paddingBlockEnd: "20rem",
  }),
);

export const DateBox = styled(Box as React.ComponentType<CustomBoxProps>)(
  ({ theme }) => ({
    margin: theme.spacing(1),
    border: "2px solid var(--color-blue)",
    borderRadius: "4px",
    background: "var(--color-pale-blue)",
    boxShadow: "1px 2px 2px 2px var(--color-scrim)",
    paddingBlockStart: "0.2rem",
    paddingBlockEnd: "0.3rem",
    paddingInlineStart: "0.2rem",
    paddingInlineEnd: "0.2rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "2rem",
  }),
);
