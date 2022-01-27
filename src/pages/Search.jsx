import axios from "axios";
import { useState } from "react";
import { Redirect } from "react-router-dom";
import "./search.css";

export default function Search({ games, setGames }) {
  // const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [isRedirect, setIsRedirect] = useState(false)
  function log() {games
   setIsRedirect(true);
  }
  const filteredGames =
    search.length === 0
      ? games
      : games.filter((game) =>
          game.title.toLowerCase().includes(search.toLowerCase())
        );
        // setGames(games)
        // setSearch(filteredGames)
  console.log(filteredGames);

  const nbaLogo =
    "https://yt3.ggpht.com/rFBD18lZT2qeXNBkVMrqgCtRPX9ctXFRXVtrekvuPWMg2iiUzZrYmyR8PkuDgrDrbL9Vz8F8ABY=s900-c-k-c0x00ffffff-no-rj";
  const showGames = games.map((game) => {
    return (
      <div key={game.id}>
        <h4>{game.title}</h4>
        <h6>{game.datetime_local}</h6>
        <h6>{game.venue.name}</h6>
        <h6>{game.venue.display_location}</h6>
        <img
          title="click here for more information"
          className="nbaLogo"
          src={nbaLogo}
          onClick={log}
        ></img>
        <hr />
      </div>
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search team: lakers"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {/* {filteredGames ? filteredGames : showGames } */}
      {/* filtering games work but dont show on screen */}
      {showGames}
      {isRedirect ? <Redirect to="/Tickets"></Redirect> : ""}
    </div>
  );
}
