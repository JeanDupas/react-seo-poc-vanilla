import React from "react";
import "./App.css";
import Home from "screens/Home";
import { createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Coin from "./screens/coin/Coin";
import { Helmet } from "react-helmet";

const theme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SuperCrypto",
            description:
              "SuperCrypto fournit une analyse fondamentale du marché des crypto-monnaies, blablabla...",
            url: "https://react-seo-poc-vanilla.herokuapp.com/",
            logo: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
          })}
        </script>
      </Helmet>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
