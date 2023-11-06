import React from "react";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import { theme } from "../../theme";
import { CssBaseline, Box } from "@mui/material";
import { cacheRtl } from "../../Helpers/Cache/cache";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <CssBaseline>
      <Box dir="rtl">
        <CacheProvider value={cacheRtl}>
          <ThemeProvider theme={theme}>
            <Outlet />
          </ThemeProvider>
        </CacheProvider>
      </Box>
    </CssBaseline>
  );
}

export default Layout;
