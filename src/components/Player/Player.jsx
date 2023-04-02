import React from 'react';
import SinglePlayer from '../SinglePlayer/SinglePlayer';

const Player = ({ players,handleAddButton }) => {
    // console.log(players);
    return (
        <>
            {
          players.map((player, index) => <SinglePlayer
            key={index}
            player={player}
            handleAddButton={handleAddButton}
          ></SinglePlayer>)
           }
        </>
    );
};

export default Player;