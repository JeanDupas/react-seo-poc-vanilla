import React, { useEffect, useState } from "react";

import { CircularProgress, Container, Grid } from "@mui/material";
import { Helmet } from "react-helmet";

import Header from "components/header/Header";
import Table from "components/table/Table";
import { API_HOST, COINS_LIST } from "utils/constants";

function Home() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState(new Date());

  const regex = new RegExp(search, "i");

  useEffect(() => {
    fetch(`${API_HOST}${COINS_LIST}`)
      .then((res) => res.json())
      .then(function (result) {
        setDate(new Date());
        setLoading(false);
        setCoins(result);
      });
  }, []);

  const filteredCoins = search
    ? coins.filter((c: any) => regex.test(c.name))
    : coins;

  return (
    <div className="main-container">
        <Helmet>
            <title>Voici la liste !</title>
        </Helmet>
      <Header onChange={setSearch} />
      {loading && (
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "100%", flex: 1 }}
        >
          <CircularProgress size={100} />
        </Grid>
      )}
      <Container sx={{ padding: "12px 0" }}>
        {!loading && (
          <>
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
            <Grid>
              <Table rows={filteredCoins} />
            </Grid>
          </>
        )}
      </Container>
    </div>
  );
}

export default Home;
