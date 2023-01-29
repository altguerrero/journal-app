import { createTheme } from "@mui/material";

export const blueTheme = createTheme({
  palette: {
    primary: {
      main: "#2662FF",
      dark: "#0536FF",
      light: "#6EA0FF",
    },
    secondary: {
      main: "#f50057",
    },
    background: {
      default: "#E6EEFF",
    },
    text: {
      primary: "#324567",
      secondary: "#5A719D",
    },
    border: {
      dark: "#7889A4",
      light: "#A1B3D2",
    },
  },
  typography: {
    sm: "0.8rem",
    base: "1rem",
    xl: "1.25rem",
    "2xl": "1.563rem",
    "3xl": "1.953rem",
    "4xl": "2.441rem",
    "5xl": "3.052rem",
  },
});
