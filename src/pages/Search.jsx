import axios from "axios";
import { useState } from "react";
export default function Search({ games, setGames }) {
  // // import apiKey from "./logic/apikey";
  // // import clientId from "./logic/clientId";

  const showGames = games.map((game) => {
    return (
      <div key={game.id}>
        <h1>{game.title}</h1>
      </div>
    );
  });

  return( 
  
  
  <div>
      {showGames}
      </div>)
}
