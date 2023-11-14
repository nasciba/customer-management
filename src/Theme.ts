import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffd01c",
      light: "#f7f5f3",
      dark: "#261a2f",
      contrastText: "#ffffff"
    },
    secondary: {
      main: "#3a2e41",
      light: "#fcb900",
      dark: "#3a2e41",
      contrastText: "#ffffff"
    },
  },
});

export default theme;
