import React, { useMemo } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { CssBaseline, Box } from "@mui/material";
import { cacheRtl } from "./Helpers/Cache/cache";
import { Outlet } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import AppRoutes from "./AppRoutes/AppRoutes";
function Root() {
  const memoizedTheme = useMemo(() => theme, []);
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={memoizedTheme}>
        <CssBaseline />
        <Box dir="rtl">
          <AppRoutes />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Root;
