import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import Sideber from "../Sideber/Sideber";

const Players = () => {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState([]);
  
  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch("data.json");
      const data = await res.json();
      setPlayers(data);
    };
    fetchingData();
  }, []);

  useEffect(() => {
     // step 1: get id
    const storedcartParse = localStorage.getItem('player');
    const storedcart = JSON.parse(storedcartParse);
     const savedCart = [];
     //step 2: get food by using id
     for (const id in storedcart) {
       const addPlayer = players.find(player => player.id === id)
       //step 3: add quantity
       if (addPlayer) {
         const quantity = storedcart[id];
         addPlayer.quantity = quantity;
         savedCart.push(addPlayer);
       }
       //step 4: push to savedcart
     }
     //step 5:
     setNewPlayer(savedCart);
    
    
  },[players])

  const handleAddButton = (singlePlayer) => {
    const newSinglePlayer = [...newPlayer, singlePlayer];
    setNewPlayer(newSinglePlayer);
    // console.log(newSinglePlayer);
  }
  
  // }
  
 
  



  return (
    <div className="players-container flex my-12">
      <div className="players grid grid-cols-3 gap-5 ml-5 w-3/4">
        <Player
          players={players}
          handleAddButton={handleAddButton}
        ></Player>
      </div>
      {/* players info  */}
      <div className="players-info">
        <Sideber newPlayer={newPlayer}></Sideber>
      </div>
    </div>
  );
};

export default Players;
