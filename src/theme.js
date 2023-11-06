import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const customTheme = createTheme({
  direction: "rtl",
  palette: {
    green: {
      main: "#476A11",
      accent: "#536B2F",
    },
    red: {
      main: "#A9291F",
    },
    greyAccent: {
      light: "#F3F3F3",
      main: "#656565",
      dark: "#121212",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    cursor: "pointer",
    fontFamily: "Noto Sans Arabic, sans-serif",
    h2: {
      fontSize: "40px",
      fontWeight: "600",
    },
    h3: {
      // fontSize: { xs: "20px", sm: "26px", lg: 32 },
      fontSize: "32px",
    },

    body2: {
      fontSize: "18px",
    },
    body1: {
      fontSize: "16px",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 530,
      bsm: 600,
      md: 1000,
      lg: 1200,
      xl: 1920,
    },
  },
});

export const theme = responsiveFontSizes(customTheme, {
  breakpoints: ["xs", "sm", "md", "lg"],
  factor: 5, // Optional: Adjust the resizing factor for fonts
  // variants: ["h2"], // Apply responsive font sizes for h2
  disableAlign: true, // Optional: Disable font size alignment
  breakpointsUnit: "px", // Optional: Set the unit for font sizes
  rootFontSize: 16, // Optional: Set the root font size
});
