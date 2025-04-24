import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          // Display
          display: "block",
          alignContent: "center",
          // Font size
          fontSize: "1.5rem",
          fontWeight: "500",
          // Padding
          paddingInline: "1.5rem",
          // Styles
          backgroundColor: "rgba(39, 41, 40, 0.8)",
          color: "whitesmoke",
          border: "1px solid rgba(117, 124, 232, 0.6)",
        },
        // Tooltip arrow
        arrow: {
          color: "rgba(117, 124, 232, 0.6)",
        },
      },
    },
  },
});

export default theme;
