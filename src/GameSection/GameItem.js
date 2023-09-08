import React from 'react';
import { useHistory } from 'react-router-dom';
import navigateToRoute from '../utils/navigation';

function GameItem({ title, path, imageUrl, description }) {

  const history = useHistory();
  const handlePlayButtonClick = () => {
     history.push(path);
    console.log('Game has been chosen');
  };
  return (
    <div className="itemContainer">
    <div className="item active" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="item-desc">
        <h3>{title}</h3>
        <p>{description}</p>
      
      </div>
    </div>
      <div className="Go"  onClick={handlePlayButtonClick}  ></div>
    </div>
    
  );
}

export default GameItem;
