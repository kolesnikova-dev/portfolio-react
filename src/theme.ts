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
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: "rgba(117, 124, 232, 0.6)",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: "2.2rem",
          [theme.breakpoints.up("sm")]: {
            fontSize: "3rem",
          },
          [theme.breakpoints.up("md")]: {
            fontSize: "4rem",
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: "5rem",
          },
        }),
        textColorPrimary: {
          "&.Mui-selected": {
            color: "rgba(117, 124, 232, 0.6)",
          },
        },
      },
    },
  },
});

export default theme;
