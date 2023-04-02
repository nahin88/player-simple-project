import React from 'react';

const SinglePlayer = ({ player, handleAddButton }) => {

    return (
        <div>
             <div className="card w-full bg-base-100 shadow-xl border border-rose-400">
                    <figure>
                      <img style={{width:'450px',height:'200px'}}
                        src={player.images}
                        alt="Shoes"
                      />
                    </figure>
                    <div className="card-body">
                            <h2 className="card-title">{player.player_name }</h2>
                            <h3>{player.player_title}</h3>
                            <p>price: { player.price}</p>
                      <div className="card-actions justify-end">
                        <button onClick={()=>handleAddButton(player)} className="btn btn-primary">Buy Now</button>
                      </div>
                    </div>
                  </div> 
        </div>
    );
};

export default SinglePlayer;