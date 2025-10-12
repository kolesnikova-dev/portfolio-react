import { ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";
import { ThemeToggleProvider } from "./ThemeToggleProvider.tsx";

import "./index.css";

import theme from "./theme.ts";
const rootElement: HTMLElement | null = document.getElementById("root");

try {
  if (rootElement) {
    const root = createRoot(rootElement);
    root.render(
      <StrictMode>
        <ThemeToggleProvider>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </ThemeToggleProvider>
      </StrictMode>,
    );
  }
} catch (error) {
  throw new Error(`Could not find root element. Error: ${error}`);
}
