import React, { useEffect, useState } from "react";

import { Container, Grid } from "@mui/material";

import Header from "components/header/Header";
import { API_HOST, COINS_DETAIL } from "utils/constants";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Home() {
  const [coin, setCoin] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(new Date());

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_HOST}${COINS_DETAIL}/${id}`)
      .then((res) => res.json())
      .then(function (result) {
        setDate(new Date());
        setCoin(result);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>{coin && coin.name ? coin.name : "waiting"}</title>
      </Helmet>
      <Header onChange={setSearch} />
      <Container sx={{ padding: "12px 0" }}>
        <Grid
          item
          container
          xs={12}
          justifyContent="flex-end"
          sx={{ padding: "6px 0" }}
        >
          {date &&
            `Update date - ${date.toLocaleDateString()} ${date.toLocaleTimeString()}`}
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="flex-start"
          sx={{ padding: "6px 0" }}
        >
          {coin && coin.name}
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="flex-start"
          sx={{ padding: "6px 0" }}
        >
          {coin && coin.market_data.current_price.usd}
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent="flex-end"
          sx={{ padding: "6px 0" }}
        >
          <div
            dangerouslySetInnerHTML={{ __html: coin && coin?.description?.en }}
          ></div>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
