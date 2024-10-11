'use client';

import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider, } from "@mui/material/styles";
//
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
import customShadows from "./customShadows";
import breakpoints from "./breakpoints";
import componentsOverride from './overrides';

// ----------------------------------------------------------------------
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const themeOptions = useMemo(() => ({
    palette,
    typography,
    breakpoints,
    // shape: { borderRadius: 6 },
    // shadows: shadows(),
    customShadows: customShadows(),

  }), []);

  const theme = createTheme(themeOptions as any);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {/* <GlobalStyles /> */}
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
};

export default ThemeProvider;