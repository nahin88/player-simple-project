import React from "react";

const Sideber = ({ newPlayer }) => {

  return (
    <div>
      <div className="bg-gray-300  p-8 ml-5">
        <h2>totalPlayer added: {}</h2>
        <h1>Total price: {}</h1>
      </div>
      <div className="bg-rose-300 mt-5 ml-5 p-8">
        <h3 className=" font-bold">Player:</h3>
        {
          newPlayer.map((player,index) => <p key={index}>{ player.player_name}</p>)
        }
      </div>
    </div>
  );
};

export default Sideber;
