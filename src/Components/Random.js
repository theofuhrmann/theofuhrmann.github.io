import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import "../App.css";

function Random() {
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const data = await fetch(
      `https://api.spotify.com/v1/playlists/{5oB2z1DVcBeaNPwCofYOvx}/tracks`
    );

    const items = await data.json();
    console.log(items);
  };

  return (
    <>
      <Helmet>
        <title>Théo's Portfolio | Random </title>
      </Helmet>
      <div className="content">
        <h1 style={{ color: "rgb(205, 111, 76)" }}>Random</h1>
      </div>
    </>
  );
}

export default Random;
