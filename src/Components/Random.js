import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import "../App.css";

function Random() {
  const [emoji, setEmoji] = useState("🤠");
  // const [song, setSong] = useState(null);

  useEffect(() => {
    // fetchItems();
    getRandomEmoji();
  }, []);

  // const fetchItems = async () => {
  //   const data = await fetch(
  //     `https://api.spotify.com/v1/playlists/{5oB2z1DVcBeaNPwCofYOvx}/tracks`
  //   );

  //   const items = await data.json();
  //   console.log(items);
  // };

  const getRandomEmoji = () => {
    fetch("https://ranmoji.herokuapp.com/emojis/api/v.1.0/").then(
      (response) => {
        response.json().then((data) => {
          console.log("data!", data);
          console.log("emoji", data.emoji);
          setEmoji(data.emoji);
        });
      }
    );
  };

  return (
    <>
      <Helmet>
        <title>Théo's Portfolio | Random </title>
      </Helmet>
      <div className="content">
        <h1 style={{ color: "rgb(205, 111, 76)" }}>
          Random <span>{emoji}</span>
        </h1>
        <p style={{ display: "inline" }}>
          <span>&#x1F4D4;</span>
        </p>
        <p style={{ display: "inline" }}>
          {/* <span>{String.fromCodePoint(`0x${emoji}`)}</span> */}
        </p>
      </div>
      <p></p>
    </>
  );
}

export default Random;
