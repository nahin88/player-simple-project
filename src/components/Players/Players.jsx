import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import Sideber from "../Sideber/Sideber";

const Players = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    // fetch('data.json').then(res=>res.json()).then(data => console.log(data))
    const fetchingData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setPlayers(data);
    };
    fetchingData();
  }, []);
  return (
    <div className="players-container flex my-12">
      <div className="players grid grid-cols-3 gap-5 ml-5 w-3/4">
        <Player players={players}></Player>
      </div>
      {/* players info  */}
      <div className="players-info">
        <Sideber></Sideber>
      </div>
    </div>
  );
};

export default Players;
