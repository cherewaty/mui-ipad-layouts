import { useMemo } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import CssBaseline from "@mui/material/CssBaseline";
import Dashboard from "./Dashboard/Dashboard";

const dark = {
  background: {
    default: "#151c24",
    paper: "#151c24",
  },
};

const light = {};

export const createModeTheme = (mode) => {
  const tokens = {
    palette: mode === "dark" ? dark : light,
  };

  return createTheme(
    deepmerge(tokens, {
      palette: {
        mode,
      },
    })
  );
};

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () => createModeTheme(prefersDarkMode ? "dark" : "light"),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Dashboard />
    </ThemeProvider>
  );
}

export default App;
