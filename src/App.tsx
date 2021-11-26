import React from "react";
import "./App.css";
import Home from "screens/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Coin from "./screens/coin/Coin";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
